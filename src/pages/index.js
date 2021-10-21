import React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Showcase from "../components/showcase"
import Blocklink from "../components/blocklink"
import Seo from "../components/seo"
import { graphql, useStaticQuery } from "gatsby"

import Img from "gatsby-image"
import { Link } from "gatsby"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    {
      strapiHomepage {
        hero {
          title
          subtitle
          button {
            url
            title
            isExternal
            id
          }
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
        showcase {
          id
          link
          name
          logo {
            localFile {
              childImageSharp {
                fluid(quality: 90, maxHeight: 400) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          screenshot {
            localFile {
              childImageSharp {
                fluid(quality: 90, maxHeight: 400) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
        blocklink {
          id
          link
          title
        }
      }
    }
  `)

  const heroData = data.strapiHomepage.hero
  const showcaseData = data.strapiHomepage.showcase
  const blocklinkData = data.strapiHomepage.blocklink
console.log(heroData)
  return (
    <Layout>
      <Seo title="Herrerake - Home" />
      <div className="container">
        <Hero heroData={heroData} />
        <Showcase showcaseData={showcaseData} />
        <Blocklink blocklinkData={blocklinkData} />
      </div>
    </Layout>
  )
}

export default IndexPage
