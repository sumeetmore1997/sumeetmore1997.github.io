import {
  Box,
  Heading,
  Image,
  Stack,
  Text,
  SimpleGrid,
  Flex,
} from "@chakra-ui/react";
import React from "react";
import "../Style/skills.css";
import { AiFillHtml5 } from "react-icons/ai";
import { SiFrontendmentor } from "react-icons/si";
import { FiDatabase } from "react-icons/fi";
import { BsPuzzle } from "react-icons/bs";

const Skills = () => {
  return (
    <Stack id="skill" pt={10} pb="10%" spacing={["40%", "5%", "5%", "3%"]}>
      <Stack>
        <Text color="gray" fontWeight="bold">
          MY - SKILLS
        </Text>
        <Heading>WHAT I DO ?</Heading>
      </Stack>
      <SimpleGrid
        id="skillDo"
        align="center"
        justify="center"
        color="gray"
        rowGap={"15%"}
        columnGap={"3%"}
        p={10}
        columns={[1, 3, 3, 3]}
      >
        <Box>
          <Box className="hexagon">
            <span>
              <SiFrontendmentor />
            </span>
          </Box>
          <Text>Front-End Development </Text>
        </Box>
        <Box>
          <Box className="hexagon">
            <span>
              <FiDatabase />
            </span>
          </Box>

          <Text>Back-End Development</Text>
        </Box>
        <Box>
          <Box className="hexagon">
            <span>
              <BsPuzzle />
            </span>
          </Box>

          <Text>Data Structures & Algorithms</Text>
        </Box>
      </SimpleGrid>
      <Stack spacing="4%">
        <Text color="pink" fontWeight="bold">
          TECH - SKILLS
        </Text>
        <SimpleGrid
          id="skillDiv"
          columns={[2, 3, 3, 5]}
          align="center"
          justify="space-evenly"
          spacingY={12}
          spacingX={12}
          fontWeight="bold"
          color="gray"
        >
          <Box>
            <Image src="https://cdn-icons-png.flaticon.com/512/732/732212.png?w=360" alt="html" />
            <Text>HTML</Text>
          </Box>
          <Box>
            <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png" alt="css" />
            <Text>CSS</Text>
          </Box>
          <Box>
            <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png" alt="JavaScript" />
            <Text>JavaScript</Text>
          </Box>
          <Box>
            <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="React" />
            <Text>React</Text>
          </Box>
          <Box>
            <Image src="https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_logo_icon_146424.png" alt="mongoDB" />
            <Text>MongoDB</Text>
          </Box>
          <Box>
            <Image src="https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png" alt="redux" />
            <Text>Redux</Text>
          </Box>
          <Box>
            <Image src="https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png" alt="Node.js" />
            <Text>NodeJS</Text>
          </Box>
          <Box>
            <Image
              src="https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png"
              alt="Express.js"
              border="1px solid white"
              borderRadius="50%"
            />
            <Text>Express.js</Text>
          </Box>
          <Box>
            <Image src="https://images.opencollective.com/chakra-ui-pro/61bd1dd/logo/256.png" alt="Chakra-ui" />
            <Text>Chakra-UI</Text>
          </Box>
        </SimpleGrid>

        <Text color="pink " mt="4%" fontWeight="bold">
          SOFT - SKILLS
        </Text>
        <SimpleGrid
          id="skillDiv"
          columns={[3, 3, 3, 3]}
          align="center"
          justify="space-evenly"
          spacingY={12}
          spacingX={12}
          mt="2%"
          fontWeight="bold"
          color="gray"
        >
          <Box>
            <Image src="https://img.freepik.com/premium-vector/book-with-magnifier-search-icon-logo-design-vector-template-illlustration-symbo_668007-209.jpg?w=2000" alt="mongoDB" />
            <Text>Self Learning</Text>
          </Box>
          <Box>
            <Image src="https://w7.pngwing.com/pngs/506/152/png-transparent-computer-icons-teamwork-teamwork-miscellaneous-hand-logo-thumbnail.png" alt="mongoDB" />
            <Text>Team Work</Text>
          </Box>
          <Box>
            <Image src="https://freepikpsd.com/file/2019/10/problems-png-6-Transparent-Images.png" alt="mongoDB" />
            <Text>Problem Solving Mindset</Text>
          </Box>
        </SimpleGrid>
      </Stack>
    </Stack>
  )
}

export default Skills
