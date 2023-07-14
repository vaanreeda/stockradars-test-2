import {
   Box,
   Flex,
   HStack,
   Image,
   Link,
   Spacer,
   Drawer,
   DrawerBody,
   DrawerOverlay,
   DrawerContent,
   DrawerCloseButton,
   useDisclosure,
} from "@chakra-ui/react"
import React from "react"
import LogoImg from "../assets/Logo_StockRadars.png"
import { HamburgerIcon } from "@chakra-ui/icons"

const Navbar = () => {
   const { isOpen, onOpen, onClose } = useDisclosure()
   const btnRef = React.useRef()

   const textHover = {
      transitionDuration: "0.3s",
      transitionTimingFunction: "ease-in",

      ":hover": {
         textShadow: "1px 1px 5px #fff",
         color: "primary",
         textDecoration: "none",
      },
   }

   return (
      <Box as="nav" bg="gray.800" color={"white"} pos={"fixed"} zIndex={10} top={0} right={0} left={0} boxShadow={"lg"}>
         <Flex py={"10px"} pr={"20px"} maxW={{ base: "", md: "4xl", lg: "7xl" }} mx={"auto"} alignItems={"center"}>
            <Link href="/">
               <Image src={LogoImg} alt="logo-img" h="60px" />
            </Link>
            <Spacer />
            <HStack spacing={7} fontSize={"20px"} fontWeight={"light"} display={{ base: "none", md: "flex" }}>
               <Link href="/" sx={textHover}>
                  Home
               </Link>
               <Link href="/register" sx={textHover}>
                  Register
               </Link>
            </HStack>

            <Box ref={btnRef} onClick={onOpen} display={{ base: "block", md: "none" }}>
               <HamburgerIcon boxSize={6} />
            </Box>
            <Drawer isOpen={isOpen} size={"xs"} placement="right" onClose={onClose} finalFocusRef={btnRef}>
               <DrawerOverlay />
               <DrawerContent bg={"gray.800"}>
                  <DrawerCloseButton color={"white"} />

                  <DrawerBody
                     display={"flex"}
                     fontSize={"20px"}
                     flexDirection={"column"}
                     alignItems={"center"}
                     mt={"3rem"}
                     gap={"10px"}
                     color={"white"}>
                     <Link href="#home" sx={textHover} onClick={onClose}>
                        Home
                     </Link>
                     <Link href="#register" sx={textHover} onClick={onClose}>
                        Register
                     </Link>
                  </DrawerBody>
               </DrawerContent>
            </Drawer>
         </Flex>
      </Box>
   )
}

export default Navbar
