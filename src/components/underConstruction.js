import * as React from "react"
import { Link } from "gatsby"
// import Imagebg from "/under-construction.jpg"

const UnderConstruction = () => {
  return (
    <section className="section under-construction-hero">
      <div className="columns custom-hero-column">
        <div className="column is-12-mobile">
          <div className="mb-3">
            <h1 className="has-text-white">Hustle sold separately</h1>
            <h5 className="has-text-danger">stay tuned.</h5>
          </div>
          <div className="buttons">
            <button className="button is-primary">
              <Link className="is-capitalized remove-link-color" to="/">
                Home
              </Link>
            </button>
            <button className="button is-primary">
              <Link className="is-capitalized remove-link-color" to="/contact">
                Contact
              </Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default UnderConstruction
