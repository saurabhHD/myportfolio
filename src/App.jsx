import { useEffect } from "react";
import Layout from "./components/shared/layout"
import Home from "./components/home"
import About from "./components/about"
import Resume from "./components/resume"
import Portfolio from "./components/portfolio"
import ContactUs from "./components/contact-us"
import NotFoundPage from "./components/shared/404"
import { BrowserRouter, Routes, Route,  } from "react-router-dom"
import './app.css'


function App() {
  useEffect(() => {
    const downloadResume = () => {
      const resumeUrl = 'cv/saurabh-kumar-cv.pdf'; // Replace 'path_to_your_resume.pdf' with the actual URL of your resume
      const link = document.createElement('a');
      link.href = resumeUrl;
      link.setAttribute('download', 'saurabh_kumar_cv.pdf'); // Replace 'your_resume.pdf' with the desired filename
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };

    downloadResume();
  }, []);
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<><Home /><About/></>} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  
  )
}

export default App
