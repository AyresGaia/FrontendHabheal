import React, { useEffect, useState } from "react";

const ArticleReader = ({ title, description }) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      // 👇 Only increase progress, never decrease
      setScrollProgress((prev) => (scrolled > prev ? Math.min(scrolled, 100) : prev));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

    const cappedProgress = Math.min(scrollProgress, 99.999); // Prevents full overlap
    const angle = (cappedProgress / 100) * 360;
    const radius = 80;
    const radians = (angle - 90) * (Math.PI / 180);
    const x = 100 + radius * Math.cos(radians);
    const y = 100 + radius * Math.sin(radians);
    const largeArc = angle > 180 ? 1 : 0;

    const pathData = `
    M 100,100
    L 100,20
    A ${radius},${radius} 0 ${largeArc} 1 ${x},${y}
    Z
    `;

  return (
    <div className="flex flex-col md:flex-row w-full justify-center gap-10 p-6 md:p-16 bg-gray-50">
      {/* Text Section */}
      <div className="flex flex-col items-center md:items-start w-full md:w-2/3 text-center md:text-left">
        <h2 className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-2xl sm:text-3xl font-semibold uppercase tracking-wide px-5 py-2 rounded-md mb-5 shadow-md w-full text-center">
          {title || "Title"}
        </h2>
        <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed">
          {description ||
            `It is Spring, moonless night in the small town, starless and bible-black, 
            the cobblestreets silent and the hunchbacked courters’ wood limping invisible down to the sloe-black sea.
            The houses are blind as moles, the people asleep, the world paused in quiet reverie.`}
        </p>
      </div>

      {/* Stopwatch Section */}
      <div className="flex justify-center items-center w-full md:w-1/2">
        <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 flex justify-center items-center bg-white rounded-full shadow-xl">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            {/* Outer Circle */}
            <circle
              cx="100"
              cy="100"
              r="90"
              stroke="url(#borderGrad)"
              strokeWidth="10"
              fill="none"
            />
            {/* Top Button */}
            <rect
              x="85"
              y="5"
              width="30"
              height="10"
              rx="3"
              fill="url(#grad)"
              className="drop-shadow-md"
            />
            {/* Fill Slice */}
            <path
              d={pathData}
              fill="url(#grad)"
              stroke="none"
              style={{
                transition: "d 0.25s ease",
                filter: "drop-shadow(0 0 12px rgba(99,102,241,0.6))",
              }}
            />
            <defs>
              {/* Inner progress gradient */}
                <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#a855f7" />
                </linearGradient>

                {/* Outer border gradient */}
                <linearGradient id="borderGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#3b82f6" />   
                    <stop offset="100%" stopColor="#a855f7" /> 
                </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ArticleReader;
