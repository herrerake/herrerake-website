import React from "react"
import Hero from "../components/hero"
import Layout from "../components/layout"
import Seo from "../components/seo"
import useBlogPosts from "../hooks/useBlogPosts"
import { graphql, useStaticQuery, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const BlogPage = () => {
  const { blogPosts: allBlogPost } = useBlogPosts()
  const data = useStaticQuery(graphql`
    {
      strapiBlogpage {
        hero {
          title
          subtitle
          image {
            localFile {
              childImageSharp {
                fluid(quality: 90, maxHeight: 400) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  `)
  const heroData = data.strapiBlogpage.hero

  return (
    <Layout>
      <Seo title="Herrerake - Blog" />
      <div className="container">
        <Hero heroData={heroData} />
        <section className="section">
          <div className="columns">
            <div className="column">
              <h2 className="title">The How I Built This Series</h2>
              <p className="subtitle">
                The Herrerake documentary series. Follow how it is being built.
              </p>
            </div>
          </div>
          <div className="columns">
            {allBlogPost.map(post => {
              const image = getImage(post.featureImage.localFile)
              var blogTitle = post.title.replace(/\ /g, "-")
              var blogSeries = post.series.replace(/\ /g, "-")
              return (
                <div className="column is-4" key={post.id}>
                  <GatsbyImage
                    image={image}
                    className="mb-2"
                    alt={post.featureImage.alternativeText}
                  />
                  <Link to={`/blog/${blogSeries}/${blogTitle}`}>
                    <h3 className="is-capitalized">{post.title}</h3>
                  </Link>
                  <p>{post.description}</p>
                  <Link to={`/blog/${blogSeries}/${blogTitle}`}>
                    <button className="button is-primary">Read More</button>
                  </Link>
                </div>
              )
            })}
          </div>
        </section>
        <section className="section">
          <div className="columns">
            <div className="column">
              <h2 className="title">The Showcase Series</h2>
              <p className="subtitle">
                Documentating the work done by Herrerake. Read clients'
                testimonies and learn if we can add value to your projects.
              </p>
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <p>This part of the site is still under construction. Stay tuned!</p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default BlogPage
