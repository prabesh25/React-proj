import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import React from 'react'
import User from './components/User.jsx'
import ReactDOM from 'react-dom/client'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Layout from './Layout.jsx'
import Github from './components/Github.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element: <Layout/>,
    children: [
      {
        path:"",
        element: <Home/>
      },
      {
        path:"about",
        element: <About />
      },
      {path: "contact",
        element: <Contact />
      },
      {
        path:"user/:userid",
        element: <User />
      },
      {
        path:"github",
        element: <Github/>
      }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
