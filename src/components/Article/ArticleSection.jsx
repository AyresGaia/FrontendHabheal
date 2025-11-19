import React from "react";
import ArticleCard from "./ArticleCard";
import { Link } from "react-router-dom";

const ArticleSection = ({title, articles }) => {
  const limited = articles.slice(0, 4);

  return (
    <section className="w-full py-10">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">{title}</h2>
        <Link
          to={`/category/${title}`}
          className="text-blue-600 hover:underline"
        >
          View All
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {limited.map((item) => (
          <ArticleCard
            key={item._id}
            id={item.id}
            title={item.title}
            description={item.description}
            image={item.image}
            category={item.category}
          />
        ))}
      </div>
    </section>
  );
};

export default ArticleSection;
