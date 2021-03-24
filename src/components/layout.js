/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import { Box, Link } from "@chakra-ui/react"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <Box as="div" m="0 auto" maxWidth="960px" p="0 1.0875rem 1.45rem">
        <Box as="main">{children}</Box>
        <Box as="footer" marginTop="2rem" fontSize="xl">
          © {new Date().getFullYear()}, Built with
          {` `}
          <Link
            isExternal
            textDecor="underline"
            color="purple.500"
            href="https://www.gatsbyjs.com"
          >
            Gatsby
          </Link>
        </Box>
      </Box>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
