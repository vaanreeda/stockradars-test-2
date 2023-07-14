import { Heading, Text, Box, Flex, Grid } from "@chakra-ui/react"
import axios from "axios"
import React, { useEffect, useState, useRef } from "react"
import ModalCom from "../components/ModalCom"
import Aos from "aos"
import "aos/dist/aos.css"

const Home = () => {
   const [data, setData] = useState([])
   const [isHover, setIsHover] = useState(null)

   const handleMonseEnter = (index) => {
      setIsHover(index)
   }
   const handleMonseLeave = () => {
      setIsHover(null)
   }

   const getData = async () => {
      await axios
         .get("https://stockradars.co/assignment/data.php")
         .then((res) => setData(res.data))
         .catch((err) => console.log(err))
   }

   useEffect(() => {
      getData()

      window.onload = () => {
         Aos.init({ duration: 2000, once: true })
      }
   }, [])

   console.table(data)

   return (
      <Box
         id="home"
         scrollMarginTop={"5rem"}
         as="main"
         mt={"5rem"}
         pb={"5rem"}
         bg={"gray.800"}
         color={"white"}
         fontSize={"1.2rem"}>
         <Box maxW={{ base: "", md: "4xl", lg: "7xl" }} mx={"auto"} p={{ base: "50px", md: "50px", lg: "20px" }}>
            <Heading fontWeight={400} textAlign={"center"} mb={"20px"} data-aos="fade-down">
               รายชื่อหุ้น
            </Heading>
            <Grid templateColumns={{ base: "repeat(1,1fr)", md: "repeat(2,1fr)", lg: "repeat(3, 1fr)" }} gap={10}>
               {!!data ? (
                  data.map((item, index) => (
                     <Box
                        key={index}
                        h={"150px"}
                        borderLeft={"10px solid"}
                        borderLeftColor={"primary"}
                        position={"relative"}
                        bg={"transparent"}
                        data-aos="fade-up"
                        onMouseEnter={() => handleMonseEnter(index)}
                        onMouseLeave={handleMonseLeave}>
                        <Flex
                           w={"full"}
                           h={"full"}
                           p={"10px 20px"}
                           position={"absolute"}
                           top={0}
                           left={0}
                           right={0}
                           bottom={0}
                           flexDirection={"column"}
                           justify={"space-between"}
                           style={{
                              transition: "all 0.6s ease-out",
                              background: "linear-gradient(90deg, #00ff44 50%, transparent 50%)",
                              backgroundSize: "200% 100%",
                              backgroundPosition: isHover === index ? "left bottom" : "right bottom",
                           }}>
                           <Box>
                              <Text
                                 fontSize={"1.4rem"}
                                 style={{ color: isHover === index ? "black" : "#00ff44", fontWeight: 500 }}>
                                 {item.N_name}
                              </Text>
                              <Text style={{ color: isHover === index ? "black" : "white" }}>{item.N_COMPANY_T}</Text>
                           </Box>
                           <Flex justify={"end"} alignItems={"end"}>
                              <ModalCom
                                 isHover={isHover}
                                 index={index}
                                 name={item.N_name}
                                 shortname={item.N_shortname}
                                 comNameT={item.N_COMPANY_T}
                                 comNameE={item.N_COMPANY_E}
                                 detail={item.N_BUSINESS_TYPE_T}
                                 cap={item.marketcap}
                                 url={item.N_URL}
                              />
                           </Flex>
                        </Flex>
                     </Box>
                  ))
               ) : (
                  <Heading fontWeight={300}>ไม่มีข้อมูล</Heading>
               )}
            </Grid>
         </Box>
      </Box>
   )
}

export default Home
