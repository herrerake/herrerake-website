import * as React from "react"
import { graphql } from "gatsby"
// import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import PropTypes from "prop-types"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Markdown from "react-markdown"
import Moment from "react-moment"

const Blog = ({ data }) => {
  const { strapiBlogs } = data
  return (
    <Layout>
      <Seo title={strapiBlogs.title} />
      <div className="container">
        <section className="section pb-5">
          <div className="columns is-mobile">
            <div className="column is-6 is-offset-3 has-text-centered has-light-gray-border-bottom">
              <div className="has-text-danger is-size-4">SERIES</div>
              <div className="is-capitalized is-size-5">
                {strapiBlogs.series}
              </div>
            </div>
          </div>
          <div className="columns">
            <div className="column is-6 is-offset-3 has-text-centered">
              <h1 className="is-size-3 is-capitalized has-text-weight-bold">
                {strapiBlogs.title}
              </h1>
              <p>
                <Moment format="MMM. Do, YYYY">
                  {strapiBlogs.published_at}
                </Moment>
              </p>
            </div>
          </div>
          <div className="columns">
            <div className="column is-4 is-offset-4">
              <GatsbyImage
                image={
                  strapiBlogs.featureImage.localFile.childImageSharp
                    .gatsbyImageData
                }
                alt={strapiBlogs.featureImage.alternativeText}
              />
              <p className="has-text-weight-light mb-0">
                How I Built This With Guy Raz Logo
              </p>
            </div>
          </div>
        </section>
        <section className="section pt-5">
          <div className="columns">
            <div className="column is-4 is-offset-4">
              <p className="has-text-weight-bold mb-0 has-light-gray-border-top pt-3">
                By: {strapiBlogs.author.name}
              </p>
              <p className="has-light-gray-border-bottom mb-0 pb-3">
                {strapiBlogs.author.biography}
              </p>
            </div>
          </div>
          <div className="columns">
            <div className="column is-6 is-offset-3">
              <Markdown children={strapiBlogs.body} escapeHtml={false} />
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
      author {
        name
        biography
      }
      body
      description
      published_at
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

Blog.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Blog
