import { useEffect, useState } from "react";
import CategoryChips from "./CategoryChips";
import LatestArticleList from "./LatestArticleList";
const BASE_URL = import.meta.env.VITE_BASE_URL;

export default function LatestArticles() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const filters = [
    "Nutrition",
    "Lifestyle",
    "Wellness",
    "Health",
    "Fitness",
    "Mental Health",
  ];

  useEffect(() => {
    const getArticles = async () => {
      try {
        const res = await fetch(`${BASE_URL}/api/articles`);
        const data = await res.json();
        setArticles(data.slice(0, 3)); // top 3
      } catch (error) {
        console.log("Error fetching articles:", error);
      } finally {
        setLoading(false);
      }
    };

    getArticles();
  }, []);

  return (
    <section className="max-w-[1200px] mx-auto px-5 py-10">
      <CategoryChips filters={filters} />

      <h2 className="text-center text-[22px] font-semibold mb-10">
        New & Featured Articles
      </h2>

      <LatestArticleList articles={articles} loading={loading} />
    </section>
  );
}
