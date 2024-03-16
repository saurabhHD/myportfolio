import Layout from "./components/shared/layout"
import Home from "./components/home"
import About from "./components/about"
import Resume from "./components/resume"
import './app.css'

function App() {
  return (
   <Layout>
    <Home />
    <About />
    {/* <Resume /> */}
   </Layout>
  )
}

export default App
