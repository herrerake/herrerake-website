import React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Showcase from "../components/showcase"
import Blocklink from "../components/blocklink"
import UnderConstruction from "../components/underConstruction"
import Seo from "../components/seo"
import { graphql, useStaticQuery } from "gatsby"
import { Tabs } from "../components/tabs/Tabs"

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

  return (
    <Layout>
      <Seo title="Herrerake - Home" />
      <div className="container">
        <Tabs defaultTabId="main">
          <section className="section p-3">
            <Tabs.TabList isSize="medium">
              <Tabs.Tab tabId="main">Main</Tabs.Tab>
              <Tabs.Tab tabId="store">Store</Tabs.Tab>
              <Tabs.Tab tabId="contact">Contact</Tabs.Tab>
            </Tabs.TabList>
          </section>

          <Tabs.TabPanel tabId="main">
            <Hero heroData={heroData} />
            <Showcase showcaseData={showcaseData} />
            <Blocklink blocklinkData={blocklinkData} />
          </Tabs.TabPanel>
          <Tabs.TabPanel tabId="store">
            <UnderConstruction />
          </Tabs.TabPanel>
          <Tabs.TabPanel tabId="contact">
            <UnderConstruction />
          </Tabs.TabPanel>
        </Tabs>
      </div>
    </Layout>
  )
}

export default IndexPage
