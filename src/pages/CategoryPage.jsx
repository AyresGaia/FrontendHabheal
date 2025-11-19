import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CategoryChips from "../components/Article/CategoryChips";
import ArticleCard from "../components/Article/ArticleCard";

const BASE_URL = import.meta.env.VITE_BASE_URL;


const CategoryPage = () => {
  const { category } = useParams();
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
    const fetchCategoryArticles = async () => {
      try {
        const res = await fetch(
          `${BASE_URL}/api/articles/category/${category}`
        );
        const data = await res.json();

        setArticles(data);
      } catch (error) {
        console.error("Error fetching category articles:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategoryArticles();
  }, [category]);

  if (loading) {
    return <div className="px-6 py-10">Loading...</div>;
  }

  return (
    <>
    <CategoryChips filters={filters} />
    <div className="px-6 lg:px-16 py-10">
      <h1 className="text-3xl font-bold mb-8 capitalize">{category}</h1>

      {articles.length === 0 ? (
        <p>No articles found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {articles.map((item) => (
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
      )}
    </div>
    </>
  );
};

export default CategoryPage;
