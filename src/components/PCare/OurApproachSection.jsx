import React from "react";

const approachData = [
  {
    title: "TRACKING HABITS",
    text: [
      "Because I could not stop for Death,",
      "He kindly stopped for me;",
      "The carriage held but just ourselves",
      "And Immortality."
    ],
    image: "/images/sample1.png",
    reverse: false,
  },
  {
    title: "NUTRIMAP",
    text: [
      "Because I could not stop for Death,",
      "He kindly stopped for me;",
      "The carriage held but just ourselves",
      "And Immortality."
    ],
    image: "/images/sample2.png",
    reverse: true,
  },
  {
    title: "TRACKING HABITS",
    text: [
      "Because I could not stop for Death,",
      "He kindly stopped for me;",
      "The carriage held but just ourselves",
      "And Immortality."
    ],
    image: "/images/sample3.png",
    reverse: false,
  },
];

export default function OurApproachSection() {
  return (
    <section className="py-10">
      {/* Title */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 py-4 text-center text-white text-xl sm:text-2xl font-semibold tracking-wide uppercase">
        WHAT’S OUR APPROACH ?
      </div>

      <div className="mt-10 flex flex-col gap-14 max-w-6xl mx-auto px-5">

        {approachData.map((item, i) => (
          <div
            key={i}
            className={`flex flex-col ${
              item.reverse ? "md:flex-row-reverse" : "md:flex-row"
            } items-center gap-10`}
          >
            {/* Left Content */}
            <div className="md:w-1/2 w-full">
              <h3 className="bg-blue-600 text-white px-6 py-2 text-sm font-semibold w-fit rounded-sm">
                {item.title}
              </h3>

              <p className="mt-4 text-gray-700 leading-relaxed whitespace-pre-line">
                {item.text.join("\n")}
              </p>
            </div>

            {/* Right Image */}
            <div className="md:w-1/2 w-full flex justify-center">
              <img
                src={item.image}
                alt={item.title}
                className="w-72 h-72 object-cover rounded-md shadow-md"
              />
            </div>
          </div>
        ))}

      </div>

      {/* EXPLORE MORE */}
      <div className="text-right max-w-6xl mx-auto mt-10 px-5">
        <a
          href="/about"
          className="text-blue-700 font-semibold hover:underline tracking-wide flex items-center justify-end gap-2"
        >
          EXPLORE MORE →
        </a>
      </div>
    </section>
  );
}
