import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "./App.css"
import Layout from "./Layout"
import Home from "./pages/Home"
import Register from "./pages/Register"

const router = createBrowserRouter([
   {
      path: "/",
      element: <Layout />,
      children: [
         {
            path: "/",
            element: <Home />,
         },
         {
            path: "/register",
            element: <Register />,
         },
      ],
   },
])

function App() {
   return <RouterProvider router={router} />
}

export default App
