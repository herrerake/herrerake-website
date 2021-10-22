import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faBlog,
  faPhoneAlt,
  faStore,
  faBars,
} from "@fortawesome/free-solid-svg-icons"
import { Link } from "gatsby"

const Navbar = () => {
  const [activeNav, setActiveNav] = useState(false)
  const tempNavData = [
    { href: "/about", title: "about", uuid: "navid01" },
    { href: "/blog", title: "blog", uuid: "navid02" },
    { href: "/careers", title: "careers", uuid: "navid03" },
    { href: "/contact", title: "contact", uuid: "navid04" },
    { href: "/", title: "home", uuid: "navid05" },
    { href: "/showcase", title: "showcase", uuid: "navid06" },
    { href: "/store", title: "store", uuid: "navid07" },
  ]
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
              <div
                className={`dropdown is-up custom-nav-dropup ${
                  activeNav ? "is-active" : "not-active"
                }`}
              >
                <div className="dropdown-trigger">
                  <div
                    aria-haspopup="true"
                    aria-controls="dropdown-menu"
                    onClick={() => setActiveNav(!activeNav)}
                  >
                    {!activeNav ? (
                      <FontAwesomeIcon icon={faBars} size="2x" />
                    ) : (
                      <img
                        src="/herrerake-square-logo.png"
                        width="28"
                        height="30"
                      />
                    )}
                  </div>
                </div>
                {activeNav ? (
                  <div className="dropdown-menu" id="dropdown-menu" role="menu">
                    <div className="dropdown-content">
                      {tempNavData.map(item => (
                        <div className="dropdown-item" key={item.uuid}>
                          <Link
                            className="remove-link-color is-capitalized"
                            to={item.href}
                          >
                            {item.title}
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
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
