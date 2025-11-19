import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import QuoteSection from "../components/Blog/QuoteSection";
import QuoteCardSection from "../components/Blog/QuoteCardSection";
// import ScrollProgress from "../components/Blog/s";
import ArticleReader from "../components/Blog/HeroQuote";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const Article = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const url = id
      ? `${BASE_URL}/api/articles/${id}`
      : `${BASE_URL}/api/articles?random=true`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setArticle(data))
      .catch((err) => console.error("Error fetching article:", err));
  }, [id]);

  return (
    <div>
      <ArticleReader
        title={article?.title}
        description={article?.description}
      />
      <QuoteSection
        title={article?.title}
        description={article?.description}
        imgSrc={article?.image} 
      />
      <QuoteCardSection />
    </div>
  );
};

export default Article;
