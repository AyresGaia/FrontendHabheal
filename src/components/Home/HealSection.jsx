import React from "react";
// import { FaHeart } from "react-icons/fa";
import { FaHeart, FaRibbon, FaCarCrash, FaBrain, FaLungs, FaDiagnoses, FaSyringe, FaProcedures, FaTint } from "react-icons/fa";

const HealSection = () => {
  return (
    <section className="w-full py-10 flex flex-col items-center bg-white">
      {/* Title Bar */}
      <div className="w-full bg-gradient-to-r from-blue-500 to-purple-500 py-4 text-center">
        <h2 className="text-white text-2xl sm:text-3xl font-semibold uppercase tracking-wide">
          WHAT KIND OF HEAL YOU ARE LOOKING FOR?
        </h2>
      </div>

      {/* Pills Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-15 w-11/12 max-w-6xl mt-10">
        {/* Row 1 */}
        <button className="flex justify-between items-center px-6 py-4 rounded-full bg-blue-500 text-white font-medium text-lg hover:bg-blue-600 hover:cursor-pointer transition-all duration-300">
          <span>Mental Health</span>
          <FaDiagnoses className="text-2xl opacity-80" />
        </button>

        <button className="flex justify-between items-center px-6 py-4 rounded-full bg-purple-500 text-white font-medium text-lg hover:bg-purple-600 hover:cursor-pointer transition-all duration-300">
          <span>Physical Wellness</span>
          <FaBrain className="text-2xl opacity-80" />
        </button>

        <button className="flex justify-between items-center px-6 py-4 rounded-full bg-blue-500 text-white font-medium text-lg hover:bg-blue-600 hover:cursor-pointer transition-all duration-300">
          <span>Nutrition</span>
          <FaCarCrash className="text-2xl opacity-80" />
        </button>

        {/* Row 2 */}
        <button className="flex justify-between items-center px-6 py-4 rounded-full bg-purple-500 text-white font-medium text-lg hover:bg-purple-600 hover:cursor-pointer transition-all duration-300">
          <span>Sleep Care</span>
          <FaHeart className="text-2xl opacity-80" />
        </button>

        <button className="flex justify-between items-center px-6 py-4 rounded-full bg-blue-500 text-white font-medium text-lg hover:bg-blue-600 hover:cursor-pointer transition-all duration-300">
          <span>Chronic Pain</span>
          <FaDiagnoses className="text-2xl opacity-80" />
        </button>

        <button className="flex justify-between items-center px-6 py-4 rounded-full bg-purple-500 text-white font-medium text-lg hover:bg-purple-600 hover:cursor-pointer transition-all duration-300">
          <span>Women’s Health</span>
          <FaProcedures className="text-2xl opacity-80" />
        </button>

        {/* Row 3 */}
        <button className="flex justify-between items-center px-6 py-4 rounded-full bg-blue-500 text-white font-medium text-lg hover:bg-blue-600 hover:cursor-pointer transition-all duration-300">
          <span>Fitness</span>
          <FaLungs className="text-2xl opacity-80" />
        </button>

        <button className="flex justify-between items-center px-6 py-4 rounded-full bg-purple-500 text-white font-medium text-lg hover:bg-purple-600 hover:cursor-pointer transition-all duration-300">
          <span>Heart Health</span>
          <FaSyringe className="text-2xl opacity-80" />
        </button>

        <button className="flex justify-between items-center px-6 py-4 rounded-full bg-blue-500 text-white font-medium text-lg hover:bg-blue-600 hover:cursor-pointer transition-all duration-300">
          <span>Mindfulness</span>
          <FaTint className="text-2xl opacity-80" />
        </button>
      </div>
    </section>
  );
};

export default HealSection;
