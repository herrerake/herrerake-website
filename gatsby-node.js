/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const pages = await graphql(`
    {
      allStrapiBlogs {
        edges {
          node {
            title
            id
            series
          }
        }
      }
    }
  `)

  pages.data.allStrapiBlogs.edges.forEach(edge => {
    var blogTitle = edge.node.title.replace(/\ /g, "-")
    var blogSeries = edge.node.series.replace(/\ /g, "-")
    createPage({
      path: `/blog/${blogSeries}/${blogTitle}`,
      component: path.resolve("./src/templates/blog.js"),
      context: {
        id: edge.node.id,
      },
    })
  })
}
