import React from "react";
import { FaYoutube, FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-black border-t py-10 px-6">
        <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10 mb-10">
            <img className="w-40" src="/habheal_logo.png" alt="" />
        </div>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
        {/* LEFT SECTION */}
        <div className="flex-1">
          <h2 className="text-2xl font-semibold mb-4">STAY IN LOOP</h2>
          <p className="text-sm leading-relaxed mb-5">
            Made glorious summer by this sun of York;
            <br />
            And all the clouds that lour’d upon our house
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <input
              type="email"
              placeholder="Email address"
              className="border border-black rounded-md px-4 py-2 w-60 focus:outline-none"
            />
            <button className="bg-blue-500 text-white font-semibold px-5 py-2 rounded-md hover:bg-blue-600 transition">
              submit
            </button>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          <div>
            <h4 className="text-sm font-semibold mb-3">ABOUT US</h4>
            <p className="text-sm">Made of York;</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-3">COMPANY INFO</h4>
            <p className="text-sm">glorious<br />And all the</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-3">SERVICES</h4>
            <p className="text-sm">summer<br />clouds that</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-3">INFO</h4>
            <p className="text-sm">by this sun<br />lour’d upon</p>
          </div>

          {/* SOCIAL ICONS */}
          <div className="col-span-4 flex justify-center gap-6 mt-6 text-xl">
            <FaYoutube className="border border-black rounded-full p-1 hover:text-red-500 cursor-pointer" />
            <FaLinkedinIn className="border border-black rounded-full p-1 hover:text-blue-600 cursor-pointer" />
            <FaInstagram className="border border-black rounded-full p-1 hover:text-pink-500 cursor-pointer" />
            <FaFacebookF className="border border-black rounded-full p-1 hover:text-blue-500 cursor-pointer" />
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
