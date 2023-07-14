import React from "react"
import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import { Box } from "@chakra-ui/react"

const Layout = () => {
   return (
      <Box bg={"gray.800"} h={"100vh"}>
         <Navbar />
         <Outlet />
      </Box>
   )
}

export default Layout
