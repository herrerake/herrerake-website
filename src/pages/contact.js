import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import UnderConstruction from "../components/underConstruction"

const ContactPage = () => {
  return (
    <Layout>
      <Seo title="Herrerake - Contact" />
      <div className="container">
        <UnderConstruction />
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
      </div>
    </Layout>
  )
}

export default ContactPage
