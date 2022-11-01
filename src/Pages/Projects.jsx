import React from 'react'
import {
  Heading,
  Stack,
  Text,
  Image,
  SimpleGrid,
  Flex,
  Link,
  Button,
} from "@chakra-ui/react";
import { FaTelegramPlane, FaGithub } from "react-icons/fa";
const cardStyle = {
  borderRadius: "10px",
  // border: "1px Solid black",
  textAlign: "left",
  padding: "5%",
  boxShadow: " #9b37ff 0px 2px 4px 0px inset",
  backgroundColor: "whitesmoke",
  color: "#1A1A1D",
};
const imgcardstyle = {
  marginTop: "-113px",
};

const Projects = () => {
  return (
    <Stack id="projects" pb="5%" spacing={5}>
      <Text color="gray" fontWeight="bold">
        What i did ?
      </Text>
      <Heading>MY PROJECTS</Heading>
      <SimpleGrid>
        <Flex
          // h={["600px", "600px", "480px", "480px"]}
          flexDirection={["column", "column", "row", "row"]}
          p={4}
          boxShadow="rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
        >
          <Image
            src="https://i.im.ge/2022/07/26/FLpljD.png"
            w={["100%", "100%", "50%", "50%"]}
            h="100%"
            objectFit="fill"
          />
          <Stack
            w={["100%", "100%", "50%", "50%"]}
            bg="#111111"
            p="5%"
            textAlign="left"
            spacing={5}
          >
            <Heading fontSize="30px" color="white">
              PharmEasy.com -Clone
            </Heading>
            <Text color="lightgray" fontSize="18px">
            PharmEasy.com is an medicine and pharma products website
            that delivers best selling experience.
            </Text>
            <Text color="lightgray" fontSize="18px">
              Working Area : Footer and Lab Test page
            </Text>
            <Text color="lightgray" fontSize="18px">
              Collaborative project with 5 team-members , executed in 5 days.
            </Text>
            <Text color="lightgray" fontSize="18px">
              Tech Skill used : Javascript | HTML| CSS
            </Text>
            <Flex gap={3} align="center">
              <Button size="xs" colorScheme="green">
                <Link
                  href="https://github.com/h73krishnan/TeamProject.git"
                  target="_blank"
                >
                  <Flex align="center" gap={2}>
                    <Text> Code</Text>
                    <FaGithub />
                  </Flex>
                </Link>
              </Button>
              <Button size="xs" colorScheme="red">
                <Link href="https://gleaming-youtiao-027db4.netlify.app " target="_blank">
                  <Flex align="center" gap={2}>
                    <Text>Live</Text>
                    <FaTelegramPlane />
                  </Flex>
                </Link>
              </Button>
            </Flex>
          </Stack>
        </Flex>
        {/* .................................. */}
        <Flex
          // h={["600px", "600px", "480px", "480px"]}
          flexDirection={["column", "column", "row", "row"]}
          p={4}
          boxShadow="rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
        >
          <Image
            src="https://i.im.ge/2022/07/26/FLp9sx.png"
            w={["100%", "100%", "50%", "50%"]}
            h="100%"
            objectFit="fill"
          />
          <Stack
            w={["100%", "100%", "50%", "50%"]}
            bg="#111111"
            p="5%"
            textAlign="left"
            spacing={5}
          >
            <Heading fontSize="30px" color="white">
              Yoox.com -Clone
            </Heading>
            <Text color="lightgray" fontSize="18px">
            Yoox.com is an apparel and accessories e-commerce website
            that delivers an immersive and engaging shopping experience.
            </Text>
            <Text color="lightgray" fontSize="18px">
              Working Area : Customer care page and Kids page
            </Text>
            <Text color="lightgray" fontSize="18px">
              Collaborative project with 6 team-members , executed in 5 days.
            </Text>
            <Text color="lightgray" fontSize="18px">
              Tech Skill used : Javascript | HTML| CSS
            </Text>
            <Flex gap={3} align="center">
              <Button size="xs" colorScheme="green">
                <Link
                  href="https://github.com/aadarsh11433/PROJECTYOOX"
                  target="_blank"
                >
                  <Flex align="center" gap={2}>
                    <Text> Code</Text>
                    <FaGithub />
                  </Flex>
                </Link>
              </Button>
              <Button size="xs" colorScheme="red">
                <Link href="https://yooox.netlify.app/" target="_blank">
                  <Flex align="center" gap={2}>
                    <Text>Live</Text>
                    <FaTelegramPlane />
                  </Flex>
                </Link>
              </Button>
            </Flex>
          </Stack>
        </Flex>
        {/* .................................. */} 
        <Flex
          // h={["600px", "600px", "480px", "480px"]}
          flexDirection={["column", "column", "row", "row"]}
          p={4}
          boxShadow="rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
        >
          <Image
            src="https://www.linkpicture.com/q/Screenshot-307-new.png"
            w={["100%", "100%", "50%", "50%"]}
            h="100%"
            objectFit="cover"
          />
          <Stack
            w={["100%", "100%", "50%", "50%"]}
            bg="#111111"
            p="5%"
            textAlign="left"
            spacing={5}
          >
            <Heading fontSize="30px" color="white">
              Lumen5.com - Clone
            </Heading>
            <Text color="lightgray" fontSize="18px">
            Lumen5.com is a video creation website that helps marketers, publishers, and brands 
            create video content in a breeze, without any technical expertise.
            </Text>
            <Text color="lightgray" fontSize="18px">
              An Individual Project, Executed in 5 days.
            </Text>
            <Text color="lightgray" fontSize="18px">
              Tech Skill used : React | Chakra UI | JavaScript | HTML | CSS
            </Text>
            <Flex gap={3} align="center">
              <Button size="xs" colorScheme="green">
                <Link
                  href="https://github.com/sumeetmore1997/moving-scent-7843/tree/master/lumen5"
                  target="_blank"
                >
                  <Flex align="center" gap={2}>
                    <Text> Code</Text>
                    <FaGithub />
                  </Flex>
                </Link>
              </Button>
              <Button size="xs" colorScheme="red">
                <Link href="https://dynamic-youtiao-fa5dae.netlify.app/" target="_blank">
                  <Flex align="center" gap={2}>
                    <Text>Live</Text>
                    <FaTelegramPlane />
                  </Flex>
                </Link>
              </Button>
            </Flex>
          </Stack>
        </Flex>

      </SimpleGrid>
    </Stack>
  )
}

export default Projects
