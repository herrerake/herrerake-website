import * as React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

const Showcase = ({ showcaseData }) => {
  return (
    <section className="section">
      <div className="columns is-mobile">
        <div className="column">
          <h2>Showcase</h2>
        </div>
        <div className="column is-flex is-justify-content-end">
          <Link to="/">View All</Link>
        </div>
      </div>
      <div className="showcase-horizontal-scroll is-flex is-flex-wrap-nowrap">
        {showcaseData.map(card => (
          <div className="showcase-card mb-5" key={card.name + card.id}>
            <a className="remove-link-color" href={card.link} target="_blank">
              <Img
                fluid={card.screenshot.localFile.childImageSharp.fluid}
                className="mb-2"
              />
            </a>
            <div>
              <a className="remove-link-color" href={card.link} target="_blank">
                {card.name}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Showcase
