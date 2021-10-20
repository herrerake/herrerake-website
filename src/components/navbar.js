import * as React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBlog, faPhoneAlt, faStore } from "@fortawesome/free-solid-svg-icons"

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
              <a className="navbar-link is-arrowless" href="/">
                <img
                  src="/herrerake-square-logo.png"
                  width="40"
                  height="40"
                ></img>
              </a>
            </div>
            <div className="navbar-item">
              <a className="navbar-link is-arrowless" href="/">
                <FontAwesomeIcon icon={faBlog} size = '2x' />
              </a>
            </div>
            <div className="navbar-item">
              <a className="navbar-link is-arrowless" href="/">
                <FontAwesomeIcon icon={faStore} size = '2x' />
              </a>
            </div>
            <div className="navbar-item">
              <a className="navbar-link is-arrowless" href="/">
                <FontAwesomeIcon icon={faPhoneAlt} size = '2x' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
