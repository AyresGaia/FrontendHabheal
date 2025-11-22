import React, { memo } from "react";

const FoodCard = memo(({ id, name, description, image, isVegetarian, tags }) => {
  return (
    <article
      className="
        group relative rounded-xl overflow-hidden shadow-md 
        hover:shadow-xl hover:scale-105 
        transition-all duration-300 cursor-pointer
        h-64 md:h-72   /* ⭐ FIXED HEIGHT */
        bg-gray-200
      "
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >

      {/* Dark overlay on hover */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300"></div>

      {/* Veg / Non-Veg tag always visible */}
      <div
        className={`absolute top-3 right-3 px-3 py-1 rounded-full text-white text-xs font-semibold z-20 ${
          isVegetarian ? "bg-green-500" : "bg-red-500"
        }`}
      >
        {isVegetarian ? "Vegetarian" : "Non-Veg"}
      </div>

      {/* Text appears only on hover */}
      <div
        className="
          absolute bottom-0 left-0 right-0 p-5 
          opacity-0 translate-y-6 
          group-hover:opacity-100 group-hover:translate-y-0
          transition-all duration-300 z-20 text-white
        "
      >
        <h3 className="text-lg font-bold mb-2 line-clamp-2">
          {name}
        </h3>

        <p className="text-sm mb-4 line-clamp-2">
          {description || "No description available"}
        </p>

        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.slice(0, 3).map((tag) => (
              <span
                key={tag.id}
                className="inline-block px-2.5 py-0.5 bg-white/70 text-gray-900 text-xs rounded-full font-medium"
              >
                {tag.name}
              </span>
            ))}

            {tags.length > 3 && (
              <span className="inline-block px-2.5 py-0.5 bg-white/70 text-gray-900 text-xs rounded-full font-medium">
                +{tags.length - 3}
              </span>
            )}
          </div>
        )}

        <button
          className="
            w-full bg-white/80 text-gray-900 py-2 rounded-lg 
            hover:bg-white transition-all duration-300 
            font-semibold text-sm
          "
        >
          View Details
        </button>
      </div>
    </article>
  );
});

FoodCard.displayName = "FoodCard";

export default FoodCard;
