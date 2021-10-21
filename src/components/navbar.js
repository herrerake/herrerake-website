import * as React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBlog, faPhoneAlt, faStore } from "@fortawesome/free-solid-svg-icons"
import { Link } from "gatsby"

const Navbar = () => {
  return (
    <nav
      className="navbar is-fixed-bottom"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div id="navbarBasic">
          <div className="navbar-start is-flex is-justify-content-space-around">
            <div className="navbar-item">
              <Link className="remove-link-color" to="/">
                <img
                  src="/herrerake-square-logo.png"
                  width="40"
                  height="40"
                ></img>
              </Link>
            </div>
            <div className="navbar-item">
              <Link className="remove-link-color" to="/blog">
                <FontAwesomeIcon icon={faBlog} size="2x" />
              </Link>
            </div>
            <div className="navbar-item">
              <Link className="remove-link-color" to="/store">
                <FontAwesomeIcon icon={faStore} size="2x" />
              </Link>
            </div>
            <div className="navbar-item">
              <Link className="remove-link-color" to="/contact">
                <FontAwesomeIcon icon={faPhoneAlt} size="2x" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
