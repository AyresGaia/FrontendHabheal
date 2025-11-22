// src/pages/Home.jsx
import React from "react";
import heroGif from '../../public/Habheal_Growth_Meditation.mp4';
import HeroSection from "../components/Home/HeroSection";
import ArticlesSection from "../components/Home/ArticleSection.jsx";
import HealSection from "../components/Home/HealSection";
import IndiaHoverMap from "../components/Home/IndiaHoverMap.jsx";
import FAQSection from "../components/Home/FAQSection.jsx";
import SubscribeSection from "../components/Home/SubscribeSection.jsx";
import '../App.css'

const Home = () => {
  return (
    <>
      {/* 🔥 Fixed Background Video (stays in place) */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <video
          className="w-full h-full object-cover"
          src={heroGif}   // change to your video file
          autoPlay
          loop
          muted
          playsInline
        ></video>
      </div>

      {/* 🔥 Your actual content scrolling OVER the video */}
      <div className="relative z-10">
        <HeroSection />
        <ArticlesSection />
        <HealSection />
        <IndiaHoverMap />
        <FAQSection />
        <SubscribeSection />
      </div>
    </>
  );
};

export default Home;
