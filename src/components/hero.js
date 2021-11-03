import * as React from "react"
import BackgroundImage from "gatsby-background-image"
import { Link } from "gatsby"

const Hero = ({ heroData }) => {
  const heroImage = heroData.image.localFile.childImageSharp.fluid

  return (
    <>
      {/* Using Bulma classes to display either hero section for mobile or for tablet/desktop */}
      <BackgroundImage
        tag="section"
        fluid={heroImage}
        backgroundColor={`#040e18`}
        className="is-hidden-mobile"
      >
        <section className="section">
          <div className="columns custom-hero-column">
            <div className="column is-12">
              <div className="has-text-white mb-3">
                <h1>{heroData.title}</h1>
                <span className="is-uppercase">
                  for the best experience view on mobile
                </span>
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
        </section>
      </BackgroundImage>
      {/* Below is mobile */}
      <section className="section is-hidden-tablet">
        <div className="columns">
          <BackgroundImage
            tag="section"
            fluid={heroImage}
            backgroundColor={`#040e18`}
          >
            <div className="custom-hero-column">
              <div className="column is-12-mobile">
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
    </>
  )
}

export default Hero
