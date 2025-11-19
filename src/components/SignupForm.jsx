import React,{useEffect} from "react";
import AOS from "aos"
import "aos/dist/aos.css";

const SignupForm = () => {

  useEffect(() => {
    AOS.init({
      duration: 800, // smooth transition
      once: true, // animate only once
      offset: 100, // trigger point
      easing: "ease-in-out",
    });
    AOS.refresh(); // ensures it scans new elements
  }, []);

  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-gray-100">
      <div className="w-[90%] max-w-md bg-white shadow-lg rounded-md overflow-hidden" data-aos="zoom-in">
        {/* Gradient Title */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 py-4 text-center">
          <h2 className="text-white text-xl sm:text-2xl font-semibold uppercase tracking-wide">
            Sign Up Form
          </h2>
        </div>

        {/* Form Fields */}
        <form className="p-8 flex flex-col gap-8">
          {/* Name */}
          <div>
            <label className="block w-40 h-8 bg-purple-500 text-white text-sm font-medium flex items-center justify-center rounded mb-3">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border-b border-gray-400 outline-none py-2 text-gray-700"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block w-40 h-8 bg-blue-400 text-white text-sm font-medium flex items-center justify-center rounded mb-3">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border-b border-gray-400 outline-none py-2 text-gray-700"
            />
          </div>

          {/* Age */}
          <div>
            <label className="block w-40 h-8 bg-purple-500 text-white text-sm font-medium flex items-center justify-center rounded mb-3">
              Age
            </label>
            <input
              type="number"
              placeholder="Enter your age"
              className="w-full border-b border-gray-400 outline-none py-2 text-gray-700"
            />
          </div>

          {/* Location */}
          <div>
            <label className="block w-40 h-8 bg-blue-400 text-white text-sm font-medium flex items-center justify-center rounded mb-3">
              Location
            </label>
            <input
              type="text"
              placeholder="Enter your location"
              className="w-full border-b border-gray-400 outline-none py-2 text-gray-700"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="mt-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 rounded-full font-semibold tracking-wide hover:opacity-90 transition-all duration-300"
          >
            SIGN UP
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
