import * as React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

const BlockLink = ({ blocklinkData }) => {
  return (
    <section className="section">
      <div className="columns is-mobile">
        <div className="column">
          <h2>Explore More</h2>
        </div>
      </div>
      <div className="columns is-gapless is-multiline is-mobile">
        {blocklinkData.map(card => (
          <Link
            className="blocklink remove-link-color w100"
            to={card.link}
            key={card.title + card.id}
          >
            <div className="column is-12">
              <h3 className="is-capitalized">{card.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default BlockLink
