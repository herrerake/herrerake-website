import React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Showcase from "../components/showcase"
import Blocklink from "../components/blocklink"
import UnderConstruction from "../components/underConstruction"
import Seo from "../components/seo"
import { graphql, useStaticQuery } from "gatsby"
import { Tabs } from "../components/tabs/tabs"

// import Img from "gatsby-image"
// import { Link } from "gatsby"

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
              <Tabs.Tab tabId="social">Social</Tabs.Tab>
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
          <Tabs.TabPanel tabId="social">
            <section className="section">
              <div className="columns">
                <div className="column">
                  <h2>
                    <a
                      className="remove-link-color"
                      href="www.github.com/herrerake"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Github
                    </a>
                  </h2>
                </div>
              </div>
              <div className="columns">
                <div className="column">
                  <h2>
                    <a
                      className="remove-link-color"
                      href="www.linkedin.com/in/herrerake/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      LinkedIn
                    </a>
                  </h2>
                </div>
              </div>
              <div className="columns">
                <div className="column">
                  <h2>
                    <a
                      className="remove-link-color"
                      href="www.twitter.com/1herrerake"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Twitter
                    </a>
                  </h2>
                </div>
              </div>
              <div className="columns">
                <div className="column">
                  <h2>
                    <a
                      className="remove-link-color"
                      href="www.instagram.com/herrerakee/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Instagram
                    </a>
                  </h2>
                </div>
              </div>
            </section>
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
