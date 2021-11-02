import * as React from "react"
import { Link } from "gatsby"
// import Img from "gatsby-image"

const BlockLink = ({ blocklinkData }) => {
  return (
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
  )
}

export default BlockLink
