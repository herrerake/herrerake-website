import * as React from "react"
import BackgroundImage from "gatsby-background-image"
import { Link } from "gatsby"

const Hero = ({ heroData }) => {
  const heroImage = heroData.image.localFile.childImageSharp.fluid

  const heroContentPositioning = {
    position: "relative",
    top: "275px",
    left: "0",
  }
  
  return (
    <section className="section">
      <div className="columns">
        <BackgroundImage
          tag="section"
          fluid={heroImage}
          backgroundColor={`#040e18`}
        >
          <div style={{ minHeight: 400, minWidth: 300 }}>
            <div className="column is-12-mobile" style={heroContentPositioning}>
              <div className="has-text-white mb-3">
                <h1>{heroData.title}</h1>
                <span>{heroData.subtitle}</span>
              </div>
              <div className="buttons">
                {heroData.button.map(button => (
                  <button
                    className="button is-primary"
                    key={`uuid-${button.id}`}
                  >
                    <Link
                      className="is-capitalized remove-link-color"
                      to={button.url}
                    >
                      {button.title}
                    </Link>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </BackgroundImage>
      </div>
    </section>
  )
}

export default Hero
