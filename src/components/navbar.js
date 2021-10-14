import * as React from "react"

const Navbar = () => {
  return (
    <nav
      className="navbar is-fixed-top"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img
              src="/herrerake-square-logo.png"
              width="75"
              height="75"
            ></img>
          </a>

          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasic"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasic" className="navbar-menu">
          {/* <div className="navbar-start">
          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">Contents</a>

            <div className="navbar-dropdown">
              <a className="navbar-item">Clients</a>
              <a className="navbar-item">Capabilities</a>
              <a className="navbar-item">Insights</a>
            </div>
          </div>
          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">Company</a>

            <div className="navbar-dropdown">
              <a className="navbar-item">About</a>
              <a className="navbar-item">Careers</a>
              <a className="navbar-item">Contact</a>
            </div>
          </div>
          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">Partners</a>

            <div className="navbar-dropdown">
              <a className="navbar-item">Strapi</a>
              <a className="navbar-item">Gatsby</a>
              <a className="navbar-item">Shopify</a>
            </div>
          </div>
        </div> */}

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a href="#contact-us" className="button is-primary">
                  <strong>Contact Us</strong>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
