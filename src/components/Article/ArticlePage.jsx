import React, { useEffect, useState } from "react";
import ArticleSection from "./ArticleSection";
const BASE_URL = import.meta.env.VITE_BASE_URL;

const ArticlesPage = () => {
  const [articles, setArticles] = useState([]);
  const [grouped, setGrouped] = useState({});

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await fetch(`${BASE_URL}/api/articles`);
        const data = await res.json();
        setArticles(data);

        // Group by category
        const groups = {};
        data.forEach((a) => {
          if (!groups[a.category]) groups[a.category] = [];
          groups[a.category].push(a);
        });

        setGrouped(groups);
      } catch (err) {
        console.error("Error fetching articles:", err);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div className="px-6 lg:px-16 py-10">
      {Object.keys(grouped).map((category) => (
        <ArticleSection
          key={category}
          title={category}
          articles={grouped[category]}
        />
      ))}
    </div>
  );
};

export default ArticlesPage;
