import React from "react";
import sampleImg from "../../assets/Image2.png"; // replace with your image path

const BackgroundSection = () => {
  return (
    <section className="py-10 bg-white">
      {/* Title aligned right */}
      <div className="flex justify-end mb-10">
        <div className="w-1/2 bg-gradient-to-r from-blue-500 to-purple-500 py-4 text-center rounded-l-lg shadow-md">
          <h2 className="text-white text-2xl sm:text-3xl font-semibold uppercase tracking-wide">
            Backgrounds
          </h2>
        </div>
      </div>

      {/* Content Row */}
      <div className="flex flex-col md:flex-row items-center items-stretch justify-between gap-10 md:px-16 px-6">
        {/* Right Image */}
        <div className="md:w-[35%] w-full flex justify-center">
          <img
            src={sampleImg}
            alt="Background illustration"
            className="w-80 h-80 md:w-[400px] md:h-[400px] object-cover bg-blue-900 rounded-lg shadow-lg"
          />
        </div>

        {/* Left Text */}
        <div className="md:w-[60%] w-full h-full text-gray-700 text-base leading-relaxed">
          <p className="md:text-right text-justify text-4xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed vitae
            eius debitis, eligendi quo corrupti fugiat laboriosam perferendis
            provident, velit atque accusantium reprehenderit. Error accusantium,
            illo maiores ea nobis expedita libero unde! Voluptates sunt facere
            dolor unde debitis natus suscipit, hic facilis. Beatae nostrum
            exercitationem mollitia in, sunt fugiat maiores.
          </p>
        </div>

        
      </div>
    </section>
  );
};

export default BackgroundSection;
