import { Route, Routes } from "react-router"
import { Helmet } from "react-helmet"

import HomePage from "./pages/HomePage.jsx"
import ProjectsPage from "./pages/ProjectsPage.jsx"
import ContactsPage from "./pages/ContactsPage.jsx"
import ServicesPage from "./pages/ServicesPage.jsx"
import AboutUsPage from "./pages/AboutUsPage.jsx"
import Error404Page from "./pages/Error404Page.jsx"

import Navbar from "./components/Navbar.jsx"

const App = () => {
  return (
    <div>
      <Helmet>

      </Helmet>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="*" element={<Error404Page />} />
      </Routes>
    </div>
  )
}

export default App
