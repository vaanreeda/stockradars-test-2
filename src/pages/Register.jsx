import { Box, FormControl, FormLabel, Heading, Input, Flex, Button, Link, useToast } from "@chakra-ui/react"
import React, { useState, useEffect } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import Aos from "aos"
import "aos/dist/aos.css"

const Register = () => {
   const navigate = useNavigate()
   const toast = useToast()
   const [formValue, setFormValue] = useState({
      fname: "",
      lname: "",
      tel: "",
      email: "",
      password: "",
      confirmPassword: "",
      ref: "",
   })

   const isPasswordValid = formValue.password.length >= 10
   const location = useLocation()

   useEffect(() => {
      const searchParams = new URLSearchParams(location.search)

      const queryValues = {
         fname: searchParams.get("fname") || "",
         lname: searchParams.get("lname") || "",
         tel: searchParams.get("tel") || "",
         email: searchParams.get("email") || "",
         password: searchParams.get("password") || "",
         confirmPassword: searchParams.get("confirmPassword") || "",
         ref: searchParams.get("ref") || "",
      }

      setFormValue((prevFormValue) => ({
         ...prevFormValue,
         ...queryValues,
      }))

      window.onload = () => {
         Aos.init({ duration: 2000, once: true })
      }
   }, [location.search])

   const handleChange = (e) => {
      setFormValue({ ...formValue, [e.target.name]: e.target.value })
   }

   const handleSubmit = (e) => {
      e.preventDefault()

      if (isPasswordValid === false) {
         toast({
            title: "Error",
            description: "รหัสผ่านต้องมากกว่าหรือเท่ากับ 10 ตัว",
            status: "error",
            duration: 2000,
            isClosable: true,
         })
         return
      }

      if (formValue.password !== formValue.confirmPassword) {
         // รหัสผ่านไม่ตรงกัน
         toast({
            title: "Error",
            description: "รหัสผ่านไม่ตรงกัน",
            status: "error",
            duration: 2000,
            isClosable: true,
         })
         return
      }

      // navigate("/")
      toast({
         title: "Success",
         description: "สมัครสมาชิกสำเร็จ",
         status: "success",
         duration: 2000,
         isClosable: true,
      })

      setTimeout(() => {
         navigate("/")
      }, 2000)
   }

   return (
      <Box mt={"5rem"} pt={"2rem"} bg="gray.800" color={"white"}>
         <Flex
            as="form"
            data-aos="fade-up"
            onSubmit={handleSubmit}
            flexDirection={"column"}
            gap={{ base: 2, md: 5 }}
            maxW={{ base: "", md: "3xl" }}
            mx={"auto"}
            p={{ base: "50px", md: "50px", lg: "20px" }}>
            <Heading as={"h1"} fontWeight={400} textAlign={"center"}>
               ลงทะเบียน
            </Heading>

            <Flex gap={{ base: 2, md: 5 }} flexDirection={{ base: "column", md: "row" }}>
               <FormControl isRequired>
                  <FormLabel>ช่ือ</FormLabel>
                  <Input onChange={handleChange} value={formValue.fname} type="text" name="fname" />
               </FormControl>

               <FormControl isRequired>
                  <FormLabel>นามสกุล</FormLabel>
                  <Input onChange={handleChange} value={formValue.lname} type="text" name="lname" />
               </FormControl>
            </Flex>

            <Flex gap={{ base: 2, md: 5 }} flexDirection={{ base: "column", md: "row" }}>
               <FormControl isRequired>
                  <FormLabel>อีเมล</FormLabel>
                  <Input onChange={handleChange} value={formValue.email} type="email" name="email" />
               </FormControl>

               <FormControl isRequired>
                  <FormLabel>เบอร์โทรศัพท์</FormLabel>
                  <Input onChange={handleChange} value={formValue.tel} type="tel" name="tel" />
               </FormControl>
            </Flex>

            <Flex gap={{ base: 2, md: 5 }} flexDirection={{ base: "column", md: "row" }}>
               <FormControl isRequired>
                  <FormLabel>รหัสผ่าน</FormLabel>
                  <Input onChange={handleChange} value={formValue.password} type="password" min={10} name="password" />
               </FormControl>

               <FormControl isRequired>
                  <FormLabel>ยืนยันรหัสผ่าน</FormLabel>
                  <Input
                     onChange={handleChange}
                     value={formValue.confirmPassword}
                     type="password"
                     min={10}
                     name="confirmPassword"
                  />
               </FormControl>
            </Flex>

            <FormControl>
               <FormLabel>Ref</FormLabel>
               <Input onChange={handleChange} value={formValue.ref} type="text" min={10} name="ref" />
            </FormControl>

            <Flex
               gap={{ base: 2, md: 5 }}
               flexDirection={{ base: "column", md: "row" }}
               mt={"10px"}
               fontSize={"1.2rem"}>
               <Link href="/" textDecoration={"none"}>
                  <Button bg={"red.500"} color={"white"} _hover={{ bg: "red.300" }}>
                     ย้อนกลับ
                  </Button>
               </Link>
               <Button type="submit" bg={"primary"} _hover={{ bg: "#9aff9c" }} color={"black"} flexGrow={1}>
                  ยืนยัน
               </Button>
            </Flex>
         </Flex>
      </Box>
   )
}

export default Register
