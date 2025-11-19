import React, { useEffect } from "react";
import AOS from "aos";
import { ArrowRight } from "lucide-react";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

const ArticleCard = ({ id, image, title, description }) => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
      easing: "ease-in-out",
    });
    AOS.refresh();
  }, []);

  const handleClick = () => {
    navigate(`/article/${id}`); // 👉 navigate to the article page
  };

  return (
    <div
      className="relative rounded-2xl overflow-hidden w-[300px] h-[300px] lg:w-[400px] lg:h-[400px]
      transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-xl/100 cursor-pointer shadow-xl"
      data-aos="zoom-in"
      onClick={handleClick}
    >
      {/* Background Image */}
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

      {/* Text Section */}
      <div className="absolute bottom-0 left-0 right-0 p-5 text-white z-10">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-200 leading-relaxed mb-3 line-clamp-3">
          {description}
        </p>
        <div className="flex items-center justify-end">
          <span className="text-blue-400 font-medium mr-1">Read More</span>
          <ArrowRight size={16} className="text-blue-400" />
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
