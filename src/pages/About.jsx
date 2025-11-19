// src/pages/About.jsx
import React from "react";
// import HeaderTop from "../components/HeaderTop.jsx";
// import NavBar from "../components/NavBar.jsx";
import AboutHero from "../components/About/AboutHero.jsx";
import BackgroundSection from "../components/About/BackgroundSection.jsx";
import Licence from "../components/About/Licence.jsx"
import ServicesSection from "../components/About/ServiceSection.jsx";
import SystemStructure from "../components/About/SystemStructure.jsx";
// import SignupForm from "../components/SignupForm.jsx";
// import Footer from "../components/Footer.jsx";
import "../App.css"

const About = () => {
  return (
    <>
      {/* <HeaderTop />
      <NavBar /> */}

      <AboutHero></AboutHero>
      <BackgroundSection></BackgroundSection>
      <Licence></Licence>
      <ServicesSection></ServicesSection>
      <SystemStructure></SystemStructure>
      {/* <SignupForm></SignupForm> */}
      {/* <Footer /> */}
    </>
  );
};

export default About;
