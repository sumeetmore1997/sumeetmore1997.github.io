import { Box, Stack } from '@chakra-ui/react'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import Home from '../Pages/Home'
import Projects from '../Pages/Projects'
import Skills from '../Pages/Skills'
import Navbar from './Navbar'

const AllRoutes = () => {
  return (
    <Stack>
      <Navbar/>
      <Box>
        <Home/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
      </Box>
      {/* <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/skills' element={<Skills/>}></Route>
        <Route path='/projects' element={<Projects/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes> */}
    </Stack>
  )
}

export default AllRoutes
