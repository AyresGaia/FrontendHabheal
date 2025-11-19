import React from "react";
import ServiceCard from "./ServiceCard";
import sampleImg from "../../assets/image4.png"; // replace with real images

const ServicesSection = () => {
  const services = [
    {
      title: "Nutrition Consultation",
      description: "Get personalized diet plans crafted by expert nutritionists.Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quidem placeat quas beatae quibusdam ipsa temporibus, eum labore quod cupiditate enim excepturi quis, velit at aspernatur, ipsam eaque laborum autem.",
      imgSrc: sampleImg,
    },
    {
      title: "Fitness Guidance",
      description: "Customized workout schedules to match your lifestyle.",
      imgSrc: sampleImg,
    },
    {
      title: "Mental Wellness",
      description: "Access guided meditations and expert wellness advice.",
      imgSrc: sampleImg,
    },
    {
      title: "Health Monitoring",
      description: "Track and analyze your daily health stats in real-time.",
      imgSrc: sampleImg,
    },
    {
      title: "Nutrition Consultation",
      description: "Get personalized diet plans crafted by expert nutritionists.",
      imgSrc: sampleImg,
    },
    {
      title: "Fitness Guidance",
      description: "Customized workout schedules to match your lifestyle.",
      imgSrc: sampleImg,
    },
    {
      title: "Mental Wellness",
      description: "Access guided meditations and expert wellness advice.",
      imgSrc: sampleImg,
    },
    {
      title: "Health Monitoring",
      description: "Track and analyze your daily health stats in real-time.",
      imgSrc: sampleImg,
    },
  ];

  return (
    <section className="py-10 bg-white overflow-hidden">
      {/* Gradient title bar */}
      <div className="w-full bg-gradient-to-r from-blue-500 to-purple-500 py-4 text-center mb-10">
        <h2 className="text-white text-2xl sm:text-3xl font-semibold uppercase tracking-wide">
          Services We Provide
        </h2>
      </div>

      {/* Carousel container */}
      <div className="flex gap-10 overflow-x-auto p-4 md:px-16 scrollbar-hide scroll-smooth">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
