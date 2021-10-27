import * as React from "react"
// import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const Showcase = ({ showcaseData }) => {
  return (
    <div className="showcase-horizontal-scroll is-flex is-flex-wrap-nowrap">
      {showcaseData.map(card => {
        return (
          <div className="showcase-card mb-5" key={card.name + card.id}>
            <a
              className="remove-link-color"
              href={card.link}
              target="_blank"
              rel="noreferrer"
            >
              <GatsbyImage image={card.image} className="mb-2" alt="" />
            </a>
            <div>
              <a
                className="remove-link-color"
                href={card.link}
                target="_blank"
                rel="noreferrer"
              >
                {card.name}
              </a>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Showcase
