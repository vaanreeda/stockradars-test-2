import React from "react"
import {
   Modal,
   ModalOverlay,
   ModalContent,
   ModalHeader,
   ModalCloseButton,
   ModalBody,
   Text,
   Flex,
   ModalFooter,
   Box,
   useDisclosure,
   Button,
   Heading,
   Link,
} from "@chakra-ui/react"

const ModalCom = ({ isHover, index, name, shortname, comNameT, comNameE, detail, cap, url }) => {
   const { isOpen, onOpen, onClose } = useDisclosure()
   const isAbsoluteURL = url.startsWith("http://") || url.startsWith("https://")
   const cleanURL = isAbsoluteURL ? url : `http://${url}`

   function numberWithCommas(x) {
      var parts = x.toString().split(".")
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      return parts.join(".")
   }

   return (
      <Box>
         <Button
            bg={"transparent"}
            style={{ color: isHover === index ? "black" : "white" }}
            _hover={{ bg: "transparent", textDecoration: "underline" }}
            _focus={{ outline: "none" }}
            onClick={onOpen}
            fontWeight={300}>
            ข้อมูลเพิ่มเติม
         </Button>
         <Modal isOpen={isOpen} onClose={onClose} size={{ base: "sm", md: "2xl" }} isCentered>
            <ModalOverlay />
            <ModalContent color={"white"} bg={"gray.800"}>
               <ModalHeader>
                  <Heading as={"h3"} fontSize={"2rem"} color={"primary"}>
                     {name}
                  </Heading>
                  <Text fontSize={"1.2rem"} fontWeight={400}>
                     {shortname}
                  </Text>
               </ModalHeader>
               <ModalCloseButton />

               <ModalBody fontSize={"1rem"}>
                  <Box mb={"10px"} fontSize={"1.2rem"}>
                     <Text>{comNameE}</Text>
                     <Text>{comNameT}</Text>
                  </Box>
                  <Text color={"gray.300"}>{detail}</Text>
                  <Flex gap={3} mt={"2rem"}>
                     <Text>มูลค่าตลาด</Text>
                     <Text display={cap === null && "none"} color={"primary"}>
                        {cap != null && numberWithCommas(cap)}
                     </Text>
                  </Flex>
               </ModalBody>

               <ModalFooter>
                  <Link href={cleanURL} isExternal>
                     เยี่ยมชมเว็บไซต์
                  </Link>
               </ModalFooter>
            </ModalContent>
         </Modal>
      </Box>
   )
}

export default ModalCom
