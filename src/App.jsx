import Layout from "./components/shared/layout"
import Home from "./components/home"
import About from "./components/about"
import Resume from "./components/resume"
import './app.css'
import Portfolio from "./components/portfolio"
import ContactUs from "./components/contact-us"
import { BrowserRouter, Routes, Route,  } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<><Home /><About/></>} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  
  )
}

export default App
