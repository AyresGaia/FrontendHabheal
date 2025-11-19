import React from "react";
import { useNavigate } from "react-router-dom";

const ArticleCard = ({ id, title, description, image, category }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/article/${id}`);
  };

  const handleCategoryClick = (e) => {
    e.stopPropagation(); // prevent clicking card
    navigate(`/category/${category}`);
  };

  return (
    <div className="article-card cursor-pointer" onClick={handleClick}>
      <img
        src={image}
        alt={title}
        className="w-full aspect-square object-cover rounded-xl mb-3"
      />

      {/* Category Chip */}
      <span
        onClick={handleCategoryClick}
        className="inline-block bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full mb-2 hover:bg-gray-200 transition"
      >
        {category}
      </span>

      <h3 className="font-semibold text-base leading-snug">{title}</h3>

      <p className="text-sm text-gray-600 mt-1">
        {description.slice(0, 55)}...
      </p>
    </div>
  );
};

export default ArticleCard;
