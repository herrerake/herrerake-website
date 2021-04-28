import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Img,
  Stack,
  Text,
} from "@chakra-ui/react"
import * as React from "react"
// import { HiChevronRight } from "react-icons/hi"
const Hero = () => {
  return (
    <Box
      bg="gray.800"
      as="section"
      minH="140px"
      position="relative"
      p="1.0875rem 1.45rem"
    >
      <Box position="relative" zIndex={1}>
        <Box
          maxW={{ base: "xl", md: "7xl" }}
          mx="auto"
          px={{ base: "6", md: "8" }}
          color="white"
        >
          <Box>
            <Heading as="h1" size="3xl" fontWeight="extrabold">
              Reimagine Your Internet Presence
            </Heading>
            <Text fontSize={{ md: "2xl" }} mt="4" maxW="lg">
              Stand out from the competition with a website that feels like an app.
              When it comes to SEO, content is King. Create your content in one location,
              then share it across all social media once. Let your content rule over your competition.
              Online shoppers buy from who they love, trust, and support. We excel in building that 
              customer loyalty.
            </Text>
            <Stack
              direction={{ base: "column", md: "row" }}
              mt="10"
              spacing="4"
            >
              <Button
                as="a"
                href="#"
                colorScheme="blue"
                px="8"
                rounded="full"
                size="lg"
                fontSize="md"
                fontWeight="bold"
              >
                Learn More
              </Button>
              <Button
                as="a"
                href="#"
                colorScheme="blue"
                px="8"
                rounded="full"
                size="lg"
                fontSize="md"
                fontWeight="bold"
              >
                Sign Up Now
              </Button>
            </Stack>
          </Box>
        </Box>
      </Box>
      <Flex
        id="image-wrapper"
        position="absolute"
        insetX="0"
        insetY="0"
        w="full"
        h="full"
        overflow="hidden"
        align="center"
      >
        <Box position="relative" w="full" h="full">
          <Img
            src="https://images.unsplash.com/photo-1590650153855-d9e808231d41?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2250&q=80"
            alt="Main Image"
            w="full"
            h="full"
            objectFit="cover"
            objectPosition="top bottom"
            position="absolute"
          />
          <Box position="absolute" w="full" h="full" bg="blackAlpha.600" />
        </Box>
      </Flex>
    </Box>
  )
}

export default Hero