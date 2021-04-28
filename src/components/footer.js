import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faHome,
  faSearch,
  faHeart,
  faSuitcase,
  faUser,
} from "@fortawesome/free-solid-svg-icons"
import { Box, Flex, Center, Text, Square, Link } from "@chakra-ui/react"

const Footer = () => (
  <>
    <Flex
      color="block"
      justifyContent="space-evenly"
      pos="fixed"
      w="100%"
      zIndex={2}
      bottom={0}
    >
      <Box>
        <Square>
          <FontAwesomeIcon icon={faHome} />
        </Square>
      </Box>
      <Box>
        <FontAwesomeIcon icon={faSearch} />
      </Box>
      <Box>
        <FontAwesomeIcon icon={faHeart} />
      </Box>
      <Box>
        <FontAwesomeIcon icon={faSuitcase} />
      </Box>
      <Box>
        <FontAwesomeIcon icon={faUser} />
      </Box>
    </Flex>
  </>
)

export default Footer
