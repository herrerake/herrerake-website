import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Showcase from "../components/showcase"
import Blocklink from "../components/blocklink"
import HomeStore from "../components/home/store"
import Seo from "../components/seo"
import { Tabs } from "../components/tabs/Tabs"
import { getImage } from "gatsby-plugin-image"

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
                gatsbyImageData(
                  width: 200
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
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
  const showcaseData = data.strapiHomepage.showcase.map(node => {
    const { name, link, id, screenshot } = node
    return {
      name,
      link,
      id,
      image: getImage(screenshot.localFile),
    }
  })
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
            <section className="section">
              <div className="columns is-mobile">
                <div className="column">
                  <h2>Showcase</h2>
                </div>
                <div className="column is-flex is-justify-content-end">
                  <Link to="/">View All</Link>
                </div>
              </div>
              <Showcase showcaseData={showcaseData} />
            </section>
            <section className="section">
              <div className="columns is-mobile">
                <div className="column">
                  <h2>Explore More</h2>
                </div>
              </div>
              <Blocklink blocklinkData={blocklinkData} />
            </section>
          </Tabs.TabPanel>
          <Tabs.TabPanel tabId="store">
            <HomeStore />
          </Tabs.TabPanel>
          <Tabs.TabPanel tabId="contact">
            <section className="section">
              <h5>Let's work together</h5>
              <h2>How Can We Help?</h2>
              <div>
                <p>
                  Email Me:{" "}
                  <a href="mailto:kevin@herrerake.com">kevin@herrerake.com</a>
                </p>
                <p>
                  Call Me: <a href="tel:2026301339">202.630.1339</a>
                </p>
              </div>
            </section>
          </Tabs.TabPanel>
        </Tabs>
      </div>
    </Layout>
  )
}

export default IndexPage
