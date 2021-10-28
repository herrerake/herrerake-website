import * as React from "react"
import { graphql } from "gatsby"
// import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import PropTypes from "prop-types"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Product = ({ data }) => {
  const { shopifyProduct } = data
  console.log(data)

  return (
    <Layout>
      <Seo title={shopifyProduct.title} />
      <div className="container">
        <section className="section">
          <div className="columns is-mobile">
            <div className="column">
              <h1 className="is-size-3">{shopifyProduct.title}</h1>
              <h2 className="is-size-6">{shopifyProduct.description}</h2>
              <div>${shopifyProduct.priceRangeV2.maxVariantPrice.amount}0</div>
            </div>
          </div>
          <div className="columns is-mobile">
            <GatsbyImage
              image={shopifyProduct.featuredImage.gatsbyImageData}
              className="mb-2"
              alt=""
            />
          </div>
          <div className="columns is-mobile">
            <div className="column is-4">
              <div className="control">
                <input className="input" type="number" placeholder="quantity" />
              </div>
            </div>
          </div>
          <div className="columns is-mobile">
            <div className="column">
              <div className="buttons ">
                <button className="button is-primary is-fullwidth">Add to Cart</button>
                <button className="button is-primary is-fullwidth">Add to Favorites</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export const postQuery = graphql`
  query ShopifyProductById($id: String!) {
    shopifyProduct(id: { eq: $id }) {
      id
      shopifyId
      handle
      title
      tags
      description
      publishedAt
      productType
      featuredImage {
        gatsbyImageData
        altText
      }
      priceRangeV2 {
        maxVariantPrice {
          amount
          currencyCode
        }
        minVariantPrice {
          amount
          currencyCode
        }
      }
    }
  }
`

// Product.PropTypes = {
//   data: PropTypes.object.isRequired,
// }
export default Product
