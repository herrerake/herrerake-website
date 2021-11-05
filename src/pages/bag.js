import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Img from "gatsby-image"
import { useStaticQuery, graphql, Link } from "gatsby"
import UnderConstruction from "../components/underConstruction"
import {
  useCartItems,
  useCartTotals,
  useAddItemToCart,
  useRemoveItemFromCart,
  useCheckout,
} from "../provider/ContextProvider"

const BagPage = () => {
  const {
    allShopifyProductVariant: { nodes: variants },
    allShopifyProduct: { nodes: products },
  } = useStaticQuery(graphql`
    query {
      allShopifyProductVariant {
        nodes {
          shopifyId
          product {
            featuredImage {
              altText
              gatsbyImageData
            }
          }
        }
      }
      allShopifyProduct {
        nodes {
          handle
          variants {
            shopifyId
          }
        }
      }
    }
  `)

  const lineItems = useCartItems()
  const { tax, total } = useCartTotals()
  const removeFromCart = useRemoveItemFromCart()
  const checkout = useCheckout()
  const addItemToCart = useAddItemToCart()

  const betterProductHandles = products.map(({ handle, variants }) => {
    const newVariants = variants.map(variant => variant.shopifyId)
    return {
      variants: newVariants,
      handle,
    }
  })

  function getHandleForVariant(variantId) {
    const selectedProduct = betterProductHandles.find(product => {
      return product.variants.includes(variantId)
    })

    return selectedProduct ? selectedProduct.handle : null
  }

  function getImageFluidForVariant(variantId) {
    const selectedVariant = variants.find(variant => {
      return variant.shopifyId === variantId
    })

    if (selectedVariant) {
      return selectedVariant.image.localFile.childImageSharp.fluid
    }
    return null
  }

  const LineItem = ({ item }) => (
    <div className="columns">
      <div className="column is-3">
        <div>
          <Img fluid={getImageFluidForVariant(item.variant.id)} />
        </div>
      </div>
      <div className="column is-6">
        <Link to={`/product/${getHandleForVariant(item.variant.id)}`}>
          {item.title}
        </Link>
        <ul>
          {item.variant.selectedOptions.map(({ name, value }) => (
            <li key={name}>
              <strong>{name}: </strong>
              {value}
            </li>
          ))}
          <li key="quantity">
            <strong>Quantity: </strong>
            {item.quantity}
          </li>
        </ul>
      </div>
      <div className="column is-3">
        <button
          className="button"
          variant="link"
          onClick={() => removeFromCart(item.id)}
        >
          Delete
        </button>
        <h5>${Number(item.variant.priceV2.amount).toFixed(2)}</h5>
      </div>
    </div>
  )

  const emptyCart = (
    <Layout>
      <Seo title="Cart" />
      <h1>Cart</h1>
      <p>Your shopping cart is empty.</p>
      <button
        className="button"
        onClick={() =>
          addItemToCart(
            variants[Math.floor(Math.random() * (variants.length - 1))]
              .shopifyId,
            1
          )
        }
      >
        <span role="img" aria-label="Dice Emoji">
          🎲
        </span>{" "}
        Random item plz
      </button>
    </Layout>
  )

  return lineItems.length < 1 ? (
    <Layout>
      <Seo title="Herrerake - Bag" />
      <div className="container">
        <h1>Shopping Bag</h1>
      </div>
    </Layout>
  ) : (
    <Layout>
      <Seo title="Herrerake - Bag" />
      <div className="container">
        <h1>Shopping Bag</h1>
        {lineItems.map(item => (
          <React.Fragment key={item.id}>
            <LineItem key={item.id} item={item} />
          </React.Fragment>
        ))}
      </div>
    </Layout>
  )
}

export default BagPage
