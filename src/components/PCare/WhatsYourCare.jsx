export default function WhatsYourCare({ careImage }) {
  return (
    <section className="py-12 bg-white">

      {/* Title */}
      <div className="flex justify-center mb-10">
        <div className="w-full bg-gradient-to-r from-blue-500 to-purple-500 py-4 text-center  shadow-md">
          <h2 className="text-white text-2xl sm:text-3xl font-semibold uppercase tracking-wide">
            What's Your Care?
          </h2>
        </div>
      </div>

      {/* Image (centered) */}
      <div className="flex justify-center px-4">
        <img
          src={careImage}
          alt="Care Path"
          className="w-[90%] max-w-[700px] object-contain"
        />
      </div>

      {/* Explore More Button */}
      <div className="flex justify-end mt-8 px-10">
        <button
          className="text-blue-700 text-lg font-semibold flex items-center gap-2 hover:gap-3 transition-all"
          onClick={() => (window.location.href = "/about")}
        >
          EXPLORE MORE →
        </button>
      </div>
    </section>
  );
}
