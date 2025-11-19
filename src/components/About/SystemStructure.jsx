import React from "react";

const SystemStructure = () => {
  return (
    <section className="py-10 bg-white rounded-md">
  {/* Header */}
  <div className="bg-gradient-to-r from-blue-500 to-purple-500 py-3">
    <h2 className="text-center text-white text-xl md:text-2xl font-semibold tracking-wide">
      SYSTEM STRUCTURE
    </h2>
  </div>

  {/* Circles with Text */}
  <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-16 mt-12 px-8">
    {/* Circle 1 */}
    <div className="flex flex-col items-center text-center max-w-xs">
      <div className="w-24 h-24 bg-blue-500 rounded-full mb-4"></div>
      <p className="text-gray-800 text-sm leading-snug">
        We passed the school where children played,<br />
        Their lessons scarcely done;
      </p>
    </div>

    {/* Circle 2 */}
    <div className="flex flex-col items-center text-center max-w-xs">
      <div className="w-24 h-24 bg-purple-500 rounded-full mb-4"></div>
      <p className="text-gray-800 text-sm leading-snug">
        We passed the school where children played,<br />
        Their lessons scarcely done;
      </p>
    </div>

    {/* Circle 3 */}
    <div className="flex flex-col items-center text-center max-w-xs">
      <div className="w-24 h-24 bg-blue-500 rounded-full mb-4"></div>
      <p className="text-gray-800 text-sm leading-snug">
        We passed the school where children played,<br />
        Their lessons scarcely done;
      </p>
    </div>
  </div>
</section>


  );
};

export default SystemStructure;
