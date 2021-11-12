import * as React from "react"
import { graphql } from "gatsby"
// import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import PropTypes from "prop-types"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Blog = ({ data }) => {
  const { strapiBlogs } = data
  return (
    <Layout>
      <Seo title={strapiBlogs.title} />
      <div className="container">
        <section className="section">
          <div className="columns is-mobile">
            <GatsbyImage
              image={
                strapiBlogs.featureImage.localFile.childImageSharp
                  .gatsbyImageData
              }
              className="mb-2"
              alt={strapiBlogs.featureImage.alternativeText}
            />
          </div>
          <div className="columns is-mobile">
            <div className="column">
              <h1 className="is-size-3 is-capitalized">{strapiBlogs.title}</h1>
              <h2 className="is-size-6">{strapiBlogs.description}</h2>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export const postQuery = graphql`
  query BlogPostById($id: String!) {
    strapiBlogs(id: { eq: $id }) {
      body
      description
      series
      strapiId
      title
      id
      featureImage {
        alternativeText
        localFile {
          childImageSharp {
            gatsbyImageData(
              width: 400
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
  }
`

// Blog.PropTypes = {
//   data: PropTypes.object.isRequired,
// }
export default Blog
