import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Topbar from './components/Topbar/Topbar';
import Navbar from './components/Navbar/Navbar';
import Home from "./pages/Home"
import About from './pages/About'
import Footer from './components/Footer/Footer';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Partners from './pages/InternationalPartners';
import Contactus from './pages/Contactus';
import Error404 from './pages/Error404';
import TermsConditions from './pages/TermsConditions';
import PrivacyPolices from './pages/PrivacyPolices';
import ServiceDetails from './pages/Services_Details';
import ScrollToTop from './components/ScrollToTop';
const App = () => {
  return (
  <>
     <Router>
      <Topbar/>
      <Navbar/>
      <ScrollToTop />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/aboutus" element={<About />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/partners" element={<Partners />} />
        <Route exact path="/contactus" element={<Contactus />} />
        <Route exact path="/terms_conditions" element={<TermsConditions />} />
        <Route exact path="/privacy_policies" element={<PrivacyPolices />} />
        <Route exact path="/service_details/:name/:id" element={<ServiceDetails />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer/>
    </Router>
  
  </>
  )
}

export default App