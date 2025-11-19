import React, { useState, useEffect } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const [active, setActive] = useState("");

  // Set active tab based on current path
  useEffect(() => {
    switch (location.pathname) {
      case "/preventive":
        setActive("PREVENTIVE CARE");
        break;
      case "/nutri":
        setActive("NUTRIMAP");
        break;
      case "/about":
        setActive("ABOUT US");
        break;
      case "/article":
        setActive("ARTICLES & BLOGS")
        break;
      case "/heal":
        setActive("HEALTHY HABITS & DAILY WELLNESS");
        break;
      default:
        setActive("");
    }
  }, [location]);

  console.log("Hello World");

  return (
    <nav className="sticky shadow-2xl/75 top-0 z-50 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium relative">
      {/* Top bar for mobile */}
      <div className="flex justify-between items-center px-6 py-4 md:hidden">
        <h1 className="text-xl font-semibold">MENU</h1>
        <button
          className="text-3xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <MdClose /> : <MdMenu />}
        </button>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex flex-wrap justify-center items-center gap-14 py-5 px-6 text-base md:text-lg">
        <Link to="/preventive">
          <li
            className={`relative cursor-pointer transition-all duration-300 ${
              active === "PREVENTIVE CARE"
                ? "text-yellow-200"
                : "hover:text-yellow-200"
            }`}
          >
            PREVENTIVE CARE
            {active === "PREVENTIVE CARE" && (
              <span className="absolute left-0 bottom-[-6px] w-full h-[3px] bg-yellow-300 rounded-full"></span>
            )}
          </li>
        </Link>

        <Link to="/article">
        <li
          className={`relative cursor-pointer transition-all duration-300 ${
            active === "ARTICLES & BLOGS"
              ? "text-yellow-200"
              : "hover:text-yellow-200"
          }`}
        >
          ARTICLES & BLOGS
          {active === "ARTICLES & BLOGS" && (
            <span className="absolute left-0 bottom-[-6px] w-full h-[3px] bg-yellow-300 rounded-full"></span>
          )}
        </li>
        </Link>

        <Link to="/nutri">
          <li
            className={`relative cursor-pointer transition-all duration-300 ${
              active === "NUTRIMAP"
                ? "text-yellow-200"
                : "hover:text-yellow-200"
            }`}
          >
            NUTRIMAP
            {active === "NUTRIMAP" && (
              <span className="absolute left-0 bottom-[-6px] w-full h-[3px] bg-yellow-300 rounded-full"></span>
            )}
          </li>
        </Link>

        <Link to="/heal">
        <li
          className={`relative cursor-pointer transition-all duration-300 ${
            active === "HEALTHY HABITS & DAILY WELLNESS"
              ? "text-yellow-200"
              : "hover:text-yellow-200"
          }`}
        >
          HEALTHY HABITS & DAILY WELLNESS
          {active === "HEALTHY HABITS & DAILY WELLNESS" && (
            <span className="absolute left-0 bottom-[-6px] w-full h-[3px] bg-yellow-300 rounded-full"></span>
          )}
        </li>
        </Link>

        <Link to="/about">
          <li
            className={`relative cursor-pointer transition-all duration-300 ${
              active === "ABOUT US"
                ? "text-yellow-200"
                : "hover:text-yellow-200"
            }`}
          >
            ABOUT US
            {active === "ABOUT US" && (
              <span className="absolute left-0 bottom-[-6px] w-full h-[3px] bg-yellow-300 rounded-full"></span>
            )}
          </li>
        </Link>
      </ul>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <ul className="flex flex-col z-30 gap-4 px-6 py-4 bg-white text-purple-600 font-medium shadow-md md:hidden absolute w-full left-0 z-10">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            <li className={`py-2 ${active === "PREVENTIVE CARE" ? "text-blue-500" : ""}`}>
              PREVENTIVE CARE
            </li>
          </Link>

          <Link to="/article" onClick={() => setMenuOpen(false)}>
            <li className={`py-2 ${active === "ARTICLES & BLOGS" ? "text-blue-500" : ""}`}>
              ARTICLES & BLOGS
            </li>
          </Link>

          <Link to="/nutri" onClick={() => setMenuOpen(false)}>
            <li className={`py-2 ${active === "NUTRIMAP" ? "text-blue-500" : ""}`}>
              NUTRIMAP
            </li>
          </Link>

          <Link to="/heal" onClick={() => setMenuOpen(false)}>
            <li className={`py-2 ${active === "HEALTHY HABITS & DAILY WELLNESS" ? "text-blue-500" : ""}`}>
              HEALTHY HABITS & DAILY WELLNESS
            </li>
          </Link>

          <Link to="/about" onClick={() => setMenuOpen(false)}>
            <li className={`py-2 ${active === "ABOUT US" ? "text-blue-500" : ""}`}>
              ABOUT US
            </li>
          </Link>
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
