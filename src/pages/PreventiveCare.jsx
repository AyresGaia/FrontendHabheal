import React from 'react';
import AboutTheCare from '../components/PCare/AboutTheCare';
import WhatsYourCare from '../components/PCare/WhatsYourCare';
import careImage from '../assets/careImage.png';
import ServicesSection from "../components/About/ServiceSection.jsx";
import OurApproachSection from '../components/PCare/OurApproachSection.jsx';

const PreventiveCare = () => {
  return (
    <>
      <AboutTheCare />
      <WhatsYourCare careImage={careImage}/>
      <ServicesSection></ServicesSection>
      <OurApproachSection />
    </>
  );
}
export default PreventiveCare;