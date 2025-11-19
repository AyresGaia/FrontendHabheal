import React from "react";

const ServiceCard = ({ title, description, imgSrc }) => {
  return (
    <div className="min-w-[280px] sm:min-w-[320px]  md:w-[320px] md:h-[400px] bg-white flex flex-col justify-between items-center text-center hover:shadow-lg hover:border hover:border-gray-400 transition-all duration-300 overflow-hidden">
      
      {/* Text Section */}
      <div className=" flex flex-col flex-grow justify-start p-2">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm line-clamp-4 text-left">
          {description}
        </p>
      </div>

      {/* Image always at bottom */}
      <div className="w-full">
        <img
          src={imgSrc}
          alt={title}
          className="w-full h-60 object-cover bg-blue-900"
        />
      </div>
    </div>
  );
};

export default ServiceCard;
