import * as React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Blocklink from "../../components/blocklink"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const HomeStore = () => {
  const data = useStaticQuery(graphql`
    {
      allShopifyProduct {
        nodes {
          featuredImage {
            altText
            gatsbyImageData(height: 175)
          }
          handle
          shopifyId
          title
        }
      }
    }
  `)

  const showcaseData = data.allShopifyProduct.nodes.map(node => {
    const { featuredImage, handle, shopifyId, title } = node
    return {
      image: getImage(featuredImage),
      altText: featuredImage.altText,
      link: handle,
      id: shopifyId,
      name: title,
    }
  })

  const blocklinkData = [
    { link: "/", title: "New & Featured", id: "newfeatured2021" },
    { link: "/", title: "Most Popular", id: "accessories2021" },
    { link: "/", title: "All Sale", id: "allsale2021" },
  ]

  return (
    <>
      <section className="section">
        <Blocklink blocklinkData={blocklinkData} />
      </section>
      <section className="section pt-1">
        <div className="columns is-mobile">
          <div className="column">
            <h5>Must Haves, Best Sellers & More</h5>
          </div>
        </div>
        <div className="showcase-horizontal-scroll is-flex is-flex-wrap-nowrap">
          {showcaseData.map(card => (
            <div className="showcase-card mb-5" key={card.id}>
              <div>
                <Link className="remove-link-color" to={card.link}>
                  <GatsbyImage
                    className="mb-2"
                    image={card.image}
                    alt={card.altText}
                  />
                </Link>
              </div>
              <div>
                <Link className="remove-link-color" to={card.link}>
                  {card.name}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="section pt-1">
        <div className="columns is-mobile">
          <div className="column">
            <h5>Shop by Collection</h5>
          </div>
        </div>
      </section>
      <section className="section pt-1">
        <div className="columns is-mobile">
          <div className="column">
            <h5>Recently Viewed</h5>
          </div>
        </div>
        <div className="showcase-horizontal-scroll is-flex is-flex-wrap-nowrap">
          {showcaseData.map(card => (
            <div className="showcase-card mb-5" key={card.id}>
              <div>
                <Link className="remove-link-color" to={card.link}>
                  <GatsbyImage
                    className="mb-2"
                    image={card.image}
                    alt={card.altText}
                  />
                </Link>
              </div>
              <div>
                <Link className="remove-link-color" to={card.link}>
                  {card.name}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="section pt-1">
        <div className="columns is-mobile">
          <div className="column">
            <h5>Recommended for You</h5>
          </div>
        </div>
        <div className="showcase-horizontal-scroll is-flex is-flex-wrap-nowrap">
          {showcaseData.map(card => (
            <div className="showcase-card mb-5" key={card.id}>
              <div>
                <Link className="remove-link-color" to={card.link}>
                  <GatsbyImage
                    className="mb-2"
                    image={card.image}
                    alt={card.altText}
                  />
                </Link>
              </div>
              <div>
                <Link className="remove-link-color" to={card.link}>
                  {card.name}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default HomeStore
