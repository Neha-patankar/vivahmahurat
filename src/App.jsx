import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Nabvar";
import Footer from "./components/Footer/Footer";
import LandingPage from "./components/page/LandingPage";
import ContactForm from "./components/ContactUs/ContactUs";
import ServicesPage from "./components/Services/ServicesPage";
import VendorDirectory from "./components/Vender/VendorDirectory";
import AboutUs from "./components/Aboutus/Aboutus";
import SamajCard from "./components/Samaj/SamajCard";
import VivahMahuratBanner from "./components/LandingPage/VivahMahuratBanner";
import CommunityDetail from "./components/Samaj/CommunityDetail";

function App() {
  return (
   <div>
    <VivahMahuratBanner/>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/contactus" element={<ContactForm/>} />
        <Route path="/services" element={<ServicesPage/>} />
        <Route path="/vendor" element={<VendorDirectory/>} />
        <Route path="/about" element={<AboutUs/>} />
         <Route path="/samaj" element={<SamajCard/>} />
         <Route path="/community/:id" element={<CommunityDetail/>} />
        
       
      </Routes>
      <Footer/>
    </Router>
    </div>
  );
}

export default App;
