import { Link, useLocation } from "react-router-dom";

const CategoryChips = ({ filters }) => {
  const location = useLocation();

  // decode the last part of the URL like "Mental%20Health" → "Mental Health"
  const currentCategory = decodeURIComponent(location.pathname.split("/").pop());

  return (
    <div className="flex flex-wrap justify-center gap-3 mb-8 mt-8">
      {filters.map((chip, i) => {
        const isActive = currentCategory === chip;

        return (
          <Link
            key={i}
            to={`/category/${chip}`}
            className={`px-4 py-2 rounded-full text-sm transition 
              ${
                isActive
                  ? "border-2 border-blue-500 bg-blue-100 text-blue-600"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200"
              }
            `}
          >
            {chip}
          </Link>
        );
      })}
    </div>
  );
};

export default CategoryChips;
