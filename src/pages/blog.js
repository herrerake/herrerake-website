import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import UnderConstruction from "../components/underConstruction"

const BlogPage = () => {
  return (
    <Layout>
      <Seo title="Herrerake - Blog" />
      <div className="container">
        <UnderConstruction />
      </div>
    </Layout>
  )
}

export default BlogPage
