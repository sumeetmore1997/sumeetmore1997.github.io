import { Box, Button, Image, Text, Stack, Heading, Flex, Link } from '@chakra-ui/react'
import { ArrowForwardIcon } from "@chakra-ui/icons"
import React from 'react'
import About from './About'
import { GoTriangleRight } from "react-icons/go";
import "../Style/home.css"

const Home = () => {
  return (
    <Box>

<Stack id="home" bg="black" pt="13%" pb="13%" spacing={5}>
        <Flex align="center" justify="center">
          <Stack align="center" justify="center" spacing={5}>

            <Text color="gray" fontSize="24px">
              Hi, My Name is
            </Text>

            <Heading color="white" fontSize={["50px", "60px", "70px", "90px"]}>
              SUMEET MORE
            </Heading>

            <Flex
              id="txt1"
              color="white"
              gap={3}
              fontSize={["20px", "25px", "30px", "40px"]}
            >
              <Text>Full Stack Web </Text>
              <Text id="txt">Developer</Text>
            </Flex>
            <Link
              href="https://drive.google.com/file/d/1ImooGERLUulNwDMPnJhPQXY5AcDpADVZ/view?usp=sharing"
              target="_blank"
            >
              <Button rightIcon={<ArrowForwardIcon />} colorScheme='red' variant='solid'>
         View Resume
        </Button>
            </Link>
          </Stack>
        </Flex>
      </Stack>
    
    </Box>
  )
}

export default Home
