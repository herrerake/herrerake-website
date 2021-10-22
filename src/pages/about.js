import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import UnderConstruction from "../components/underConstruction"

const AboutPage = () => {

  return (
    <Layout>
      <Seo title="Herrerake - About" />
      <div className="container">
        <UnderConstruction />
      </div>
    </Layout>
  )
}

export default AboutPage
