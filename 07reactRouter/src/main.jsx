import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {Route, createRoutesFromElements, createBrowserRouter, RouterProvider } from 'react-router-dom'

import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import AboutUs from "./components/AboutUs/AboutUs.jsx"
import ContactUs from "./components/ContactUs/ContactUs.jsx"
import User from './components/User/User.jsx'
import Github,{githubInfoLoader} from './components/Github/Github.jsx'


// const router = createBrowserRouter([
//   {
//         path: '/',
//         element: <Layout/>,
//         children: [
//           {
//             path: "",
//             element: <Home />
//           },
//           {
//             path: "about",
//             element: <AboutUs />
//           },
//           {
//             path: "contact",
//             element: <ContactUs />
//           }
//         ]
//     }
// ])


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<AboutUs />} />
      <Route path='contact' element={<ContactUs />} />
      <Route path='user/:userid' element={<User />} />

      <Route 
      loader={githubInfoLoader}
      path='github' 
      element={<Github />}
       />

    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>,
)
