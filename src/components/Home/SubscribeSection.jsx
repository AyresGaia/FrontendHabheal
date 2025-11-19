import React from "react";

const SubscribeSection = () => {
  return (
    <section className="w-full flex flex-col items-center bg-white py-10">
      {/* Gradient Title */}
      <div className="w-full bg-gradient-to-r from-blue-500 to-purple-500 py-4 text-center">
        <h2 className="text-white text-2xl sm:text-3xl font-semibold uppercase tracking-wide">
          STAY IN LOOP
        </h2>
      </div>

      {/* Single Paragraph */}
      <div className="mt-10 w-10/12 sm:w-8/12 md:w-6/12 lg:w-5/12 text-gray-700 text-center">
        <p className="pb-3 text-xl mb-6 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium facere modi ratione voluptatum quisquam omnis quis aspernatur velit debitis fugiat. Beatae, neque repellat velit perspiciatis ducimus tenetur quaerat nostrum. Tempore veniam reprehenderit labore ipsa voluptatem perferendis tempora deserunt. Facilis sequi voluptatum, beatae est, quibusdam saepe voluptates commodi eaque quia repellat perferendis totam obcaecati. Inventore quasi corrupti ipsam sint vitae itaque deleniti reprehenderit.
        </p>

        {/* Subscribe Button */}
        <div className="flex justify-center mt-10">
          <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-10 py-3 rounded-full font-semibold hover:opacity-90 transition-all duration-300 hover:cursor-pointer">
            SUBSCRIBE
          </button>
        </div>
      </div>
    </section>
  );
};

export default SubscribeSection;
