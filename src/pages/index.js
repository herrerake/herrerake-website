import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section class="hero is-large is-primary">
      <div class="hero-body has-text-centered">
        <h1 class="title">Design.Create.Market.Sell</h1>
        <h2 class="subtitle">Next Generation Online Commerce</h2>
      </div>
    </section>
    <section class="section has-background-black">
      <h1 class="title">Allow me to reintroduce myself...</h1>
      <h2 class="subtitle">Minority Built. Minority Owned.</h2>
      <p>We are...</p>
    </section>
  </Layout>
)

export default IndexPage
