import React from "react";
import { FaRegCopyright } from "react-icons/fa";
import iosBadge from "../assets/Image1.png"; // replace with your App Store badge image
import playBadge from "../assets/Image2.png"; // replace with your Play Store badge image

const BottomFooter = () => {
  return (
    <div className="border-t border-gray-300 py-6 px-8 bg-white text-black">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
        
        {/* LEFT TEXT */}
        <p className="text-gray-800 md:w-1/3 text-center md:text-left leading-snug">
          In the first place we have granted to God, and by this our present
          charter confirmed for us and our heirs forever that the English Church
          shall be free, and shall have her rights entire, and her liberties
          inviolate
        </p>

        {/* CENTER APP BADGES */}
        <div className="flex gap-4 justify-center items-center">
          <img
            src={iosBadge}
            alt="Download on iOS"
            className="w-28 h-auto cursor-pointer hover:scale-105 transition"
          />
          <img
            src={playBadge}
            alt="Get it on Google Play"
            className="w-28 h-auto cursor-pointer hover:scale-105 transition"
          />
        </div>

        {/* COPYRIGHT RIGHT SIDE */}
        <div className="flex items-center gap-2 text-gray-800 md:w-1/3 justify-center md:justify-end">
          <FaRegCopyright className="text-sm" />
          <p>yes and those handsome Moors all in white</p>
        </div>
      </div>
    </div>
  );
};

export default BottomFooter;
