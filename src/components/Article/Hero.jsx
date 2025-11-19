import React from "react";

const Hero = () => {
  return (
    <section
      className="
        relative w-full h-[70vh] 
        bg-cover bg-center bg-no-repeat 
        flex items-center justify-center 
        text-white px-5
        max-md:h-auto max-md:py-20
      "
      style={{
        backgroundImage:
          "url('https://images.squarespace-cdn.com/content/v1/656f4e4dababbd7c042c4946/2c7d1d11-1743-4df8-b9ed-35ae979f05bf/jasper-night-sans-moon.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45"></div>

      {/* Content */}
      <div className="relative max-w-3xl text-center z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
          Mental health is hard. Getting support doesn't have to be.
        </h1>

        <p className="text-lg md:text-xl leading-relaxed">
          <strong>Welcome to the Calm Blog.</strong> Our clinically-backed
          articles and resources are here to help you stress less, sleep more,
          live mindfully, and feel better, wherever you are on your mental
          health journey.
        </p>
      </div>
    </section>
  );
};

export default Hero;
