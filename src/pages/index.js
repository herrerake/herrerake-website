import { Box, Heading, Link, Text } from "@chakra-ui/react"
import { Link as GatsbyLink } from "gatsby"
import React from "react"
import Hero from "../components/hero"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Hero/>
  </>
)

export default IndexPage
