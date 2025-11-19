export default function LatestArticleList({ articles, loading }) {
  if (loading)
    return (
      <p className="text-center text-gray-500 text-lg">
        Loading articles...
      </p>
    );

  return (
    <>
      {articles.map((a) => (
        <div
          key={a._id}
          className="flex items-center gap-10 max-w-[1100px] mx-auto my-12 px-5 
                     max-[850px]:flex-col max-[850px]:text-center"
        >
          <img
            src={a.image}
            alt="Article"
            className="w-[350px] h-[350px] object-cover rounded-[22px]
                       max-[850px]:w-full max-[850px]:h-[260px]"
          />

          <div className="flex-1">
            <span
              className="inline-block px-4 py-1 text-xs font-semibold tracking-wide
                         text-blue-700 bg-blue-50 rounded-full mb-2 hover:bg-blue-100 transition"
            >
              {a.category}
            </span>

            <h2 className="text-[1.9rem] font-bold text-[#0a2540] leading-tight my-3
                           max-[850px]:text-[1.6rem]">
              {a.title}
            </h2>

            <p className="text-[1.05rem] text-gray-700 leading-7 max-w-[700px] mx-auto max-[850px]:mx-0">
              {a.description}
            </p>
          </div>
        </div>
      ))}
    </>
  );
}
