import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBlog, faPhoneAlt, faStore } from "@fortawesome/free-solid-svg-icons"
import { Link } from "gatsby"

const Navbar = () => {
  const [activeNav, setActiveNav] = useState(false)
  const tempNavData = [
    { href: "/about", title: "about" },
    { href: "/blog", title: "blog" },
    { href: "/careers", title: "careers" },
    { href: "/contact", title: "contact" },
    { href: "/", title: "home" },
    { href: "/showcase", title: "showcase" },
    { href: "/store", title: "store" },
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
              <div className="dropdown is-up is-active custom-nav-dropup">
                <div className="dropdown-trigger">
                  <div
                    aria-haspopup="true"
                    aria-controls="dropdown-menu"
                    onClick={() => setActiveNav(!activeNav)}
                  >
                    <img
                      src="/herrerake-square-logo.png"
                      width="40"
                      height="40"
                    ></img>
                  </div>
                </div>
                {activeNav ? (
                  <div
                    className="dropdown-menu"
                    id="dropdown-menu7"
                    role="menu"
                  >
                    <div className="dropdown-content">
                      {tempNavData.map(item => (
                        <div className="dropdown-item">
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
