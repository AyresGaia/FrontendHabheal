// src/pages/Home.jsx
import React from "react";
import HeroSection from "../components/Home/HeroSection";
import ArticlesSection from "../components/Home/ArticleSection.jsx";
// import ArticlesSection from "../components/Home/Ar.jsx";
import HealSection from "../components/Home/HealSection";
import IndiaHoverMap from "../components/Home/IndiaHoverMap.jsx";
import FAQSection from "../components/Home/FAQSection.jsx";
import SubscribeSection from "../components/Home/SubscribeSection.jsx";
import '../App.css'

const Home = () => {
  return (
    <>
      <HeroSection />
      <ArticlesSection />
      <HealSection />
      <IndiaHoverMap />
      <FAQSection />
      <SubscribeSection />
    </>
  );
};

export default Home;
