import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import UnderConstruction from "../components/underConstruction"

const StorePage = () => {
  return (
    <Layout>
      <Seo title="Herrerake - Store" />
      <div className="container">
        <UnderConstruction />
      </div>
    </Layout>
  )
}

export default StorePage
