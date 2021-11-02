import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShoppingBag, faUser } from "@fortawesome/free-solid-svg-icons"

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
            <div className="column is-6 is-flex is-justify-content-flex-end">
              <Link
                className="remove-link-color"
                to="/profile"
              >
                <FontAwesomeIcon icon={faUser} size="1x" />
              </Link>
              <Link
                className="remove-link-color ml-2"
                to="/bag"
              >
                <FontAwesomeIcon icon={faShoppingBag} size="1x" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </header>
  )
}

export default Header
