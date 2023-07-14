import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import { ChakraProvider, extendTheme } from "@chakra-ui/react"

// extend the theme
const colors = {
   primary: "#00ff44",
}

const fonts = {
   heading: `'Kanit', sans-serif`,
   body: `'Kanit', sans-serif`,
}

const theme = extendTheme({ colors, fonts })

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <ChakraProvider theme={theme}>
         <App />
      </ChakraProvider>
   </React.StrictMode>,
)
