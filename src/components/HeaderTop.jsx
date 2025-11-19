import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaYoutube,
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
} from "react-icons/fa";
import { MdTranslate, MdMenu, MdClose } from "react-icons/md";
import reactLogo from "../assets/react.svg";
import logo from "/habheal_logo.png"

const HeaderTop = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex justify-between items-center px-4 sm:px-6 py-3 bg-white shadow-sm relative z-60">
      {/* Logo */}
      <Link to="/">
      <div className="flex items-center gap-2 hover:cursor-pointer">
        <img src={logo} alt="habheal logo" className="h-8 sm:h-10" />
      </div>
      </Link>

      {/* Hamburger Button (Mobile) */}
      <button
        className="sm:hidden text-3xl text-purple-600"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <MdClose /> : <MdMenu />}
      </button>

      {/* Right Section */}
      <div
        className={`${
          menuOpen
            ? "flex flex-col gap-4 absolute top-full left-0 w-full bg-white py-4 shadow-md z-10"
            : "hidden"
        } sm:flex sm:flex-row sm:items-center sm:gap-6 sm:static sm:shadow-none sm:border-none sm:py-0 sm:w-auto`}
      >
        {/* Social Icons */}
        <div className="flex justify-center sm:justify-start items-center gap-3 text-xl">
          <div className="p-2 rounded-full bg-gradient-to-b from-purple-500 to-blue-500 text-white hover:opacity-80 cursor-pointer">
            <FaYoutube />
          </div>
          <div className="p-2 rounded-full bg-gradient-to-b from-purple-500 to-blue-500 text-white hover:opacity-80 cursor-pointer">
            <FaInstagram />
          </div>
          <div className="p-2 rounded-full bg-gradient-to-b from-purple-500 to-blue-500 text-white hover:opacity-80 cursor-pointer">
            <FaLinkedinIn />
          </div>
          <div className="p-2 rounded-full bg-gradient-to-b from-purple-500 to-blue-500 text-white hover:opacity-80 cursor-pointer">
            <FaFacebookF />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-md text-sm font-medium w-[90%] sm:w-auto">
            DOWNLOAD APP ↓
          </button>
          <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-md text-sm font-medium w-[90%] sm:w-auto">
            SIGN IN / LOG IN
          </button>
          <MdTranslate className="text-2xl text-purple-500 cursor-pointer" />
        </div>
      </div>
    </header>
  );
};

export default HeaderTop;
