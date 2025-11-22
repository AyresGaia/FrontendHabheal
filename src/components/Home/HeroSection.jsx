import React from "react";
// import heroGif from '../../assets/hero.mp4';
import heroGif from '../../../public/Habheal_Growth_Meditation.mp4';
import { Link, useLocation } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative w-full h-[60vh] md:h-[90vh] overflow-hidden flex items-center justify-start">
      {/* Background video or gif */}
      {/* <video
        autoPlay
        src={heroGif}
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover "
      >
      </video> */}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 text-left text-white max-w-xl m-5 md:ml-45">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-snug">
          Building Healthy Habits for a Better You
        </h1>
        <p className="text-base md:text-lg mb-10 leading-relaxed">
          Empower your wellness journey with personalized guidance, preventive
          care, and habit tracking — because health begins with small steps.
        </p>

        <Link to="/about">
        <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-full font-semibold hover:opacity-90  hover:cursor-pointer transition-all duration-300">
          LEARN MORE
        </button>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
