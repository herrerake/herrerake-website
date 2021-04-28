import React from "react"
import { Box, Heading, Link } from "@chakra-ui/react"
import { Link as GatsbyLink } from "gatsby"
import ThemeToggle from "./toggle-theme"
import PropTypes from "prop-types"

const Header = ({ siteTitle }) => (
  <Box as="header" background="white">
    <Box as="div" m="0 auto" maxW="960px" p="1.45rem 1.0875rem">
      <Heading as="h1" margin="0">
        <Link
          as={GatsbyLink}
          to="/"
          color="gray.500"
          _hover={{ textDecor: "none" }}
        >
          {siteTitle}
        </Link>
      </Heading>
    </Box>
    <Box as="div" position="fixed" right="20px" top="20px">
      <ThemeToggle />
    </Box>
  </Box>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
