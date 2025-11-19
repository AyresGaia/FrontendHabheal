import React from "react";

const QuoteSection = ({ title, description, imgSrc }) => {
  return (
    <div className="w-full bg-white flex flex-col items-center py-10">
      {/* Header */}
      <div className="w-11/12 sm:w-9/12 md:w-11/12 bg-blue-500 py-4 text-center rounded-sm shadow-md">
        <h2 className="text-white text-2xl sm:text-3xl font-semibold uppercase tracking-wide">
          {title || "Quote’s"}
        </h2>
      </div>

      {/* Quote Text + Image */}
      <div className="w-11/12 sm:w-9/12 md:w-11/12 mt-6 flex flex-col md:flex-row gap-6">
        <div className="md:w-1/2">
          <p className="text-gray-800 text-left leading-relaxed text-lg font-medium">
            {description || "Select an article to view its content..."}
            {description || "Select an article to view its content..."}
            {description || "Select an article to view its content..."}
            {description || "Select an article to view its content..."}
            {description || "Select an article to view its content..."}
          </p>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <img
            src={
              imgSrc ||
              "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800"
            }
            alt={title || "Quote image"}
            className="rounded-lg shadow-md w-full max-w-md object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default QuoteSection;
