import React from 'react'
import { Route, Routes } from "react-router"
import { Helmet } from "react-helmet"

import Home from "./pages/HomePage.jsx"
import Projects from "./pages/ProjectsPage.jsx"
import Contacts from "./pages/ContactsPage.jsx"
import Services from "./pages/ServicesPage.jsx"
import AboutUs from "./pages/AboutUsPage.jsx"
import Error404 from "./pages/Error404Page.jsx"

import Navbar from "./components/Navbar.jsx"
import Footer from './components/Footer.jsx'


const App = () => {
  return (
    <div>
      <Helmet>

      </Helmet>
      <div className='flex flex-col justify-between'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
      </div>
    </div>
  )
}

export default App
