import Layout from "./components/shared/layout"
import Home from "./components/home"
import About from "./components/about"
import Resume from "./components/resume"
import './app.css'
import Portfolio from "./components/portfolio"
import ContactUs from "./components/contact-us"

function App() {
  return (
   <Layout>
    <Home />
    <About />
    <Resume />
    <Portfolio />
    <ContactUs />
   </Layout>
  )
}

export default App
