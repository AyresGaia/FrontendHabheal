import React, { useState,useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ArticleCard from "./ArticleCardBeta";
// import ArticleCard from "./ArticleCard";
// import ArticleCard from "./Ar";
import i from "../../assets/hero.gif";
import i1 from "../../assets/imageluca.gif";
import i2 from "../../assets/imagepica.gif";
import i3 from "../../assets/evee.gif";
const BASE_URL = import.meta.env.VITE_BASE_URL;

// const articles = [
//   {
//     image: i,
//     title: "5 Foods to Boost Immunity",
//     description:
//       "Discover the power of natural superfoods that strengthen your immune system and keep you healthy.",
//   },
//   {
//     image: i1,
//     title: "The Secret to Better Sleep",
//     description:
//       "Learn how to improve your sleep hygiene with simple and effective lifestyle changes.",
//   },
//   {
//     image: i2,
//     title: "Hydration: The Key to Wellness",
//     description:
//       "Water does more than quench your thirst — explore why hydration is essential for your body and mind.",
//   },
//   {
//     image: i3,
//     title: "Mindful Eating 101",
//     description:
//       "Understand how mindful eating can transform your relationship with food and improve digestion.",
//   },
//   {
//     image: i1,
//     title: "Energy Foods for Busy People",
//     description:
//       "Quick, healthy foods that keep your energy levels high throughout your hectic day.",
//   },
// ];

const ArticlesSection = () => {

  const [articles,setArticles]=useState([]);

  useEffect(() => {
    let isMounted=true;
    fetch(`${BASE_URL}/api/articles`)
      .then((res) => res.json())
      .then((data) => {
        if (isMounted) setArticles(data);
      })
      .catch((err) => console.error("Error fetching articles:", err));

      return ()=>(isMounted=false)
  }, []);


  return (
    <section className="w-full bg-white py-10 flex flex-col items-start">
      {/* Title */}
      <div className="w-full">
        <div className="bg-gradient-to-r sm:w-1/2 md:w-1/2 from-blue-500 to-purple-500 py-4 text-center lg:w-2/5 rounded-r-lg shadow-2xl/75">
          <h2 className="text-white text-2xl sm:text-3xl font-semibold uppercase tracking-wide">
            Articles and Blogs
          </h2>
        </div>
      </div>

      {/* Swiper */}
      <div className="mt-10 w-full md:w-[92%] lg:w-[100%] flex justify-start items-center min-h-[350px] md:min-h-[400px] lg:min-h-[450px]">
        {articles.length>0?(
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={1} // 💫 tighter spacing between cards
          loop={true}
          speed={800}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-5 overflow-visible w-full"
        >
          {articles.map((article, index) => (
            <SwiperSlide
              key={index}
              className="!flex justify-center items-center min-h-[500px]"
            >
              <ArticleCard
                id={article.id}
                image={article.image}
                title={article.title}
                description={article.description}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        ):(
          <p className="text-gray-500 text-center w-full">Loading articles...</p>
        )}
      </div>
    </section>
  );
};

export default ArticlesSection;
