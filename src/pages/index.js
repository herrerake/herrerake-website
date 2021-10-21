import React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Showcase from "../components/showcase"
import Blocklink from "../components/blocklink"
import Seo from "../components/seo"
import { graphql, useStaticQuery } from "gatsby"

import Img from "gatsby-image"
import { Link } from "gatsby"

// const IndexPage = () => (
//   <Layout>
//     <Seo title="Home" />
//     {/* <Hero /> */}
//     <section className="section has-background-light">
//       <div className="container">
//         <div className="columns">
//           <div className="column is-5 is-offset-1">
//             <h2 className="title">
//               You have great ideas. <br /> We want to bring them to life
//             </h2>
//             <p>
//               Knowing where to start is overwhelming, we know. We know because
//               we have made the mistakes. We have gone down the wrong road. We
//               have delayed the launch date. But we are still here, resilient as
//               ever and ready to guide you on your journey.
//             </p>
//             <br />
//             <p>
//               Whether you are a small business owner or just need tech advice we
//               listen to your needs and quickly go to work for you.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//     <section className="section has-background-white">
//       <div className="container">
//         <div className="columns">
//           <div className="column is-5 is-offset-6">
//             <h2 className="title">Allow me to introduce myself...</h2>
//             <p>
//               Right now its just me, Kevin Herrera. The goal of my digital
//               agency is to advocate for small and even micro businesses. I am
//               taking everything I have learned working as a Software Developer
//               and providing it back to you, my fellow entrepreneur.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//     <section className="section has-background-light">
//       <div className="container">
//         <div className="columns">
//           <div className="column is-10 is-offset-1">
//             <h2 className="title has-text-centered">Client Showcase</h2>
//           </div>
//         </div>
//         <div className="columns">
//           <div className="column is-4 is-offset-2">
//             <div className="card">
//               <div className="card-content">
//                 <p className="title">LitCityDC</p>
//                 <p className="subtitle">DC Premier Smoke Shop</p>
//               </div>
//               <footer className="card-footer">
//                 <p className="card-footer-item">
//                   <span>
//                     View <a href="https://litcitydc.com">Website</a>
//                   </span>
//                 </p>
//                 <p className="card-footer-item">
//                   <span>
//                     View <a href="#">Case Study</a>
//                   </span>
//                 </p>
//               </footer>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//     <section className="section has-background-white" id="contact-us">
//       <div className="container">
//         <div className="columns">
//           <div className="column is-10 is-offset-1 has-text-centered">
//             <h2 className="title">Let's Work Together</h2>
//             <p className="subtitle">Reach me @</p>
//             <span>
//               Email:
//               <a href="mailto:kevin@herrerake.com"> kevin@herrerake.com</a>
//             </span>
//           </div>
//         </div>
//       </div>
//     </section>
//   </Layout>
// )

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
        <Hero heroData={heroData} />
        <Showcase showcaseData={showcaseData} />
        <Blocklink blocklinkData={blocklinkData} />
      </div>
    </Layout>
  )
}

export default IndexPage
