import React from 'react'
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  SimpleGrid,
  Show,
  Link,
  Img,
} from "@chakra-ui/react";
import { IoIosCall, IoMdMail, IoLogoLinkedin, IoLogoWhatsapp } from "react-icons/io";
import { BsGithub } from "react-icons/bs";
import "../Style/contact.css"

const Contact = () => {
  const iconstyle = {
    borderRadius: "30% 5% 30% 5%",
    backgroundColor: "whitesmoke",
    color: "black",
    padding: 3,
  };
  const iconhover = {
    cursor: "pointer",
  };
  return (
    <Stack id="contact" pb={10} pt={2} bg="black" spacing={5}>
     
      <Text color="gray" fontWeight="bold">
        CONTACT ME
      </Text>
      <Heading color="lightgray">Get in Touch</Heading>

      <SimpleGrid>
        {/* <Flex
          fontSize="34px"
          align="center"
          justify="center"
          gap={8}
          color="white"
        > */}
        <Stack w="50%" fontSize="30px" spacing={5} p={5}>
          <Flex align="center" gap={3}>
            <Box style={iconstyle} _hover={iconhover}>
              <Link
                href="https://github.com/sumeetmore1997"
                target="_blank"
              >
                <BsGithub />
              </Link>
            </Box>
            <Link href="https://github.com/sumeetmore1997" target="_blank">
              <Text fontSize={["12px", "16px", "18px", "20px"]} color="gray">
                Github
              </Text>
            </Link>
          </Flex>
          <Flex align="center" gap={3}>
            <Box style={iconstyle} _hover={iconhover}>
              <Link
                href="https://www.linkedin.com/in/sumeet-more-368322230/"
                target="_blank"
              >
                <IoLogoLinkedin />
              </Link>
            </Box>
            <Link
              href="https://www.linkedin.com/in/sumeet-more-368322230/"
              target="_blank"
            >
              {" "}
              <Text fontSize={["12px", "16px", "18px", "20px"]} color="gray">
                Linkedin
              </Text>
            </Link>
          </Flex>
          <Flex align="center" gap={3}>
            <Box style={iconstyle} _hover={iconhover}>
              <IoIosCall />
            </Box>
            <Text fontSize={["12px", "16px", "18px", "20px"]} color="gray">
              +91 7499559041
            </Text>
          </Flex>
          <Flex align="center" gap={3}>
            <Box style={iconstyle} _hover={iconhover}>
              <IoLogoWhatsapp />
            </Box>
            <Text fontSize={["12px", "16px", "18px", "20px"]} color="gray">
              +91 7350655109
            </Text>
          </Flex>
          <Flex align="center" gap={3}>
            <Link
              href="mailto:urvashisohaliya00@gmail.com?subject = Feedback&body = Message"
              color="white"
            >
              <Box style={iconstyle} _hover={iconhover}>
                <IoMdMail />
              </Box>
            </Link>

            <Text fontSize={["12px", "16px", "18px", "20px"]} color="gray">
              sumeetbmore7@gmail.com
            </Text>
          </Flex>
        </Stack>
        <Box></Box>
        {/* </Flex> */}
      </SimpleGrid>

     
    </Stack>
  )
}

export default Contact
