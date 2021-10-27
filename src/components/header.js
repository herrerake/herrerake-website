import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithubSquare,
  faLinkedin,
  faTwitterSquare,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons"

const Header = ({ siteTitle }) => {
  return (
    <header>
      <div className="container">
        <section className="section pb-1">
          <div className="columns is-mobile">
            <div className="column is-6">
              <Link className="remove-link-color" to="/">
                <img src="/herrerake-logo-spartan-black.png" alt="Herrerake Logo" width="200"></img>
              </Link>
            </div>
            <div className="column is-6 is-flex is-justify-content-space-evenly">
              <a
                className="remove-link-color"
                href="www.github.com/herrerake"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faGithubSquare} size="2x" />
              </a>
              <a
                className="remove-link-color"
                href="www.linkedin.com/in/herrerake/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
              <a
                className="remove-link-color"
                href="www.twitter.com/1herrerake"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faTwitterSquare} size="2x" />
              </a>
              <a
                className="remove-link-color"
                href="www.instagram.com/herrerakee/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faInstagramSquare} size="2x" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </header>
  )
}

export default Header
