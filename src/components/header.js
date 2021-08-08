import React from "react"
import { Link as GatsbyLink } from "gatsby"
import PropTypes from "prop-types"

const Header = ({ siteTitle }) => (
  <div>
    <Link
      as={GatsbyLink}
      to="/"
      color="gray.500"
      _hover={{ textDecor: "none" }}
    >
      {siteTitle}
    </Link>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
