import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import UnderConstruction from "../components/underConstruction"

const ProfilePage = () => {
  return (
    <Layout>
      <Seo title="Herrerake - Profile" />
      <div className="container">
        <UnderConstruction />
      </div>
    </Layout>
  )
}

export default ProfilePage
