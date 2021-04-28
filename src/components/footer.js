import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faHome,
  faSearch,
  faSuitcase,
  faUser,
  faBars,
} from "@fortawesome/free-solid-svg-icons"
import { Box, Flex, Center, Text, Square, Link } from "@chakra-ui/react"

const Footer = () => (
  <>
    <Flex
      justifyContent="space-evenly"
      pos="fixed"
      w="100%"
      zIndex={2}
      bottom={0}
      borderTop="1px"
      borderColor="gray.300"
      py={3}
      color="gray.600"
      bg="white"
    >
      <Box>
        <Square>
          <FontAwesomeIcon icon={faHome} size="2x" />
        </Square>
      </Box>
      <Box>
        <FontAwesomeIcon icon={faSearch} size="2x" />
      </Box>
      <Box>
        <FontAwesomeIcon icon={faUser} size="2x" />
      </Box>
      <Box>
        <FontAwesomeIcon icon={faSuitcase} size="2x" />
      </Box>
      <Box>
        <FontAwesomeIcon icon={faBars} size="2x" />
      </Box>
    </Flex>
  </>
)

export default Footer
