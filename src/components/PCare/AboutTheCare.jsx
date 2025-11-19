import { Link } from "react-router-dom";

export default function AboutTheCare() {
  const items = [
    {
      color: "bg-[#4A90E2]",
      text: "Fog everywhere. Fog up the river, where it flows among green aits and meadows; fog down the river, where it rolls deified among",
    },
    {
      color: "bg-[#7B4AE2]",
      text: "Fog everywhere. Fog up the river, where it flows among green aits and meadows; fog down the river, where it rolls deified among",
    },
    {
      color: "bg-[#4A90E2]",
      text: "Fog everywhere. Fog up the river, where it flows among green aits and meadows; fog down the river, where it rolls deified among",
    },
    {
      color: "bg-[#7B4AE2]",
      text: "Fog everywhere. Fog up the river, where it flows among green aits and meadows; fog down the river, where it rolls deified among",
    },
  ];

  return (
    <>
    <div className="w-1/3 h-[55px] bg-gradient-to-r justify-center from-blue-500 to-purple-500 flex items-center px-6 mt-10 rounded-r-sm">
        <h2 className="text-white text-xl text-center justify-center font-semibold tracking-wide">
          ABOUT THE CARE
        </h2>
      </div>
    <section className="px-10 py-12 max-w-[1300px] mx-auto">
      {/* Header */}
      

      {/* Circles + Text */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {items.map((item, i) => (
          <div key={i} className="flex flex-col items-center text-center">
            <div
              className={`${item.color} w-[160px] h-[160px] rounded-full mb-5`}
            ></div>

            <p className="text-sm text-gray-800 leading-6 max-w-[200px]">
              {item.text}
            </p>
          </div>
        ))}
      </div>

      {/* Explore More */}
      <div className="flex justify-end mt-12">
        <Link
          to="/about"
          className="text-blue-700 text-lg font-medium hover:underline flex items-center gap-2"
        >
          EXPLORE MORE →
        </Link>
      </div>
    </section>
    </>
  );
}
