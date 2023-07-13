import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "./App.css"
import Layout from "./Layout"
import Home from "./pages/Home"

const router = createBrowserRouter([
   {
      path: "/",
      element: <Layout />,
      children: [
         {
            path: "/",
            element: <Home />,
         },
      ],
   },
])

function App() {
   return <RouterProvider router={router} />
}

export default App
