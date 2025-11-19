import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

const stateInfo =  {
  Assam: {
    title: "Assam",
    desc: "Known for black rice, tea, and lush green nutrition-rich valleys. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est corporis alias cumque quae excepturi tempore unde, perferendis, facere ratione provident hic repudiandae optio, minus ea? Est, minima? Odio distinctio doloribus explicabo, eligendi deleniti rerum? Officiis beatae ratione itaque repellendus porro.",
    img: "https://picsum.photos/300/200?random=1",
  },
  Maharashtra: {
    title: "Maharashtra",
    desc: "Land of millets, fruits, and balanced coastal-western diet.",
    img: "https://picsum.photos/300/200?random=2",
  },
  Kerala: {
    title: "Kerala",
    desc: "Famous for coconuts, spices, and coastal health traditions.",
    img: "https://picsum.photos/300/200?random=3",
  },
  Gujarat: {
    title: "Gujarat",
    desc: "Vegetarian powerhouse with traditional wholesome thalis.",
    img: "https://picsum.photos/300/200?random=4",
  },
    TamilNadu: {
    title: "Tamil Nadu",
    desc: "Rice lovers’ paradise with nutritious lentils, idli, and dosa traditions.",
    img: "https://picsum.photos/300/200?random=5",
  },
  Karnataka: {
    title: "Karnataka",
    desc: "From ragi mudde to filter coffee, a balanced blend of grains and flavor.",
    img: "https://picsum.photos/300/200?random=6",
  },
  Rajasthan: {
    title: "Rajasthan",
    desc: "Desert diet rich in bajra, ghee, and protein-packed lentils.",
    img: "https://picsum.photos/300/200?random=7",
  },
  Punjab: {
    title: "Punjab",
    desc: "Land of lassi, makki di roti, and butter-laden strength meals.",
    img: "https://picsum.photos/300/200?random=8",
  },
  Haryana: {
    title: "Haryana",
    desc: "Dairy kingdom where milk, ghee, and rustic farm diets rule.",
    img: "https://picsum.photos/300/200?random=9",
  },
  WestBengal: {
    title: "West Bengal",
    desc: "Fish, rice, and sweets — a perfect blend of carbs and omega-3s.",
    img: "https://picsum.photos/300/200?random=10",
  },
  Bihar: {
    title: "Bihar",
    desc: "Wholesome diet of litti chokha, sattu, and hearty rustic meals.",
    img: "https://picsum.photos/300/200?random=11",
  },
  UttarPradesh: {
    title: "Uttar Pradesh",
    desc: "The heartland of rotis, dals, and spice-balanced home cooking.",
    img: "https://picsum.photos/300/200?random=12",
  },
  MadhyaPradesh: {
    title: "Madhya Pradesh",
    desc: "Known for poha, jalebi, and wheat-based balanced nutrition.",
    img: "https://picsum.photos/300/200?random=13",
  },
  Odisha: {
    title: "Odisha",
    desc: "Temple-inspired vegetarian meals rich in rice, dal, and veggies.",
    img: "https://picsum.photos/300/200?random=14",
  },
  HimachalPradesh: {
    title: "Himachal Pradesh",
    desc: "Mountain diet of red rice, pulses, and hearty rajma-chawal combos.",
    img: "https://picsum.photos/300/200?random=15",
  },
  Uttaranchal: {
    title: "Uttarakhand",
    desc: "Simple pahadi food like bhatt ki churkani and mandua rotis for endurance.",
    img: "https://picsum.photos/300/200?random=16",
  },
  Goa: {
    title: "Goa",
    desc: "Seafood heaven rich in protein, coconut, and tangy spice blends.",
    img: "https://picsum.photos/300/200?random=17",
  },
  Sikkim: {
    title: "Sikkim",
    desc: "Himalayan freshness with momos, thukpa, and fermented foods.",
    img: "https://picsum.photos/300/200?random=18",
  },
  ArunachalPradesh: {
    title: "Arunachal Pradesh",
    desc: "Fermented bamboo shoots, rice, and organic greens dominate the plate.",
    img: "https://picsum.photos/300/200?random=19",
  },
  Meghalaya: {
    title: "Meghalaya",
    desc: "Smoked meats and red rice define its earthy, protein-rich diet.",
    img: "https://picsum.photos/300/200?random=20",
  },
  Manipur: {
    title: "Manipur",
    desc: "Known for black rice, fish, and traditional fermented delicacies.",
    img: "https://picsum.photos/300/200?random=21",
  },
  Mizoram: {
    title: "Mizoram",
    desc: "Light, balanced meals with steamed veggies and local herbs.",
    img: "https://picsum.photos/300/200?random=22",
  },
  Tripura: {
    title: "Tripura",
    desc: "Rice-based meals with fish, bamboo shoots, and herbal flavors.",
    img: "https://picsum.photos/300/200?random=23",
  },
  Nagaland: {
    title: "Nagaland",
    desc: "Smoked meats, chili, and fermentation form a fiery, nutrient-packed cuisine.",
    img: "https://picsum.photos/300/200?random=24",
  },
  Jharkhand: {
    title: "Jharkhand",
    desc: "Rich tribal cuisine with rice, saag, and hand-ground spice traditions.",
    img: "https://picsum.photos/300/200?random=25",
  },
  Chhattisgarh: {
    title: "Chhattisgarh",
    desc: "Rice and forest food heaven — traditional, organic, and nutrient-rich.",
    img: "https://picsum.photos/300/200?random=26",
  },
  Delhi: {
    title: "Delhi",
    desc: "Street-food capital blending flavors from every corner of India.",
    img: "https://picsum.photos/300/200?random=27",
  },
  Telangana: {
    title: "Telangana",
    desc: "Spicy southern soul — millets, lentils, and tangy tamarind curries.",
    img: "https://picsum.photos/300/200?random=28",
  },
  AndhraPradesh: {
    title: "Andhra Pradesh",
    desc: "Fiery spice land with tangy pickles, coastal fish, and rice staples.",
    img: "https://picsum.photos/300/200?random=29",
  },
  JammuKashmir: {
    title: "Jammu & Kashmir",
    desc: "Royal wazwaan dishes, red rice, and saffron-infused nutrition.",
    img: "https://picsum.photos/300/200?random=30",
  },
  Ladakh: {
    title: "Ladakh",
    desc: "High-altitude diet of barley, yak butter, and warm soups for survival.",
    img: "https://picsum.photos/300/200?random=31",
  },
  AndamanNicobar: {
    title: "Andaman & Nicobar Islands",
    desc: "Tropical diet rich in seafood, coconut, and fresh island produce.",
    img: "https://picsum.photos/300/200?random=32",
  },

};

const IndiaHoverMap = () => {
  const svgRef = useRef();
  const containerRef = useRef();
  const [hoveredState, setHoveredState] = useState(null);
  const [selectedState, setSelectedState] = useState(null);

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    const width = 600;
    const height = 600;

    const projection = d3
      .geoMercator()
      .center([82.8, 22])
      .scale(1000)
      .translate([width / 2, height / 2]);

    const path = d3.geoPath().projection(projection);

    fetch("/india_state.json")
      .then((res) => res.json())
      .then((indiaGeo) => {
        svg
          .attr("viewBox", `0 0 ${width} ${height}`)
          .style("cursor", "pointer");

        const states = svg
          .selectAll("path")
          .data(indiaGeo.features)
          .join("path")
          .attr("d", path)
          .attr("fill", (d) =>
            d.properties.NAME_1?.trim() === selectedState ? "#9333EA" : "#60A5FA"
          )
          .attr("stroke", "#fff")
          .attr("stroke-width", 0.7)
          .on("mouseover", function (e, d) {
            const name = d.properties.NAME_1?.trim();
            if (name !== selectedState) {
              d3.select(this)
                .transition()
                .duration(150)
                .attr("fill", "#4F46E5")
                .attr("stroke-width", 1.5);
              setHoveredState(name);
            }
          })
          .on("mouseout", function (e, d) {
            const name = d.properties.NAME_1?.trim();
            if (name !== selectedState) {
              d3.select(this)
                .transition()
                .duration(150)
                .attr("fill", "#60A5FA")
                .attr("stroke-width", 0.7);
              setHoveredState(null);
            }
          })
          .on("click", function (e, d) {
            e.stopPropagation();
            const name = d.properties.NAME_1?.trim();

            if (selectedState === name) {
              // Deselect same state
              setSelectedState(null);
              d3.select(this)
                .transition()
                .duration(200)
                .attr("fill", "#60A5FA")
                .attr("stroke-width", 0.7);
              return;
            }

            // Reset all others
            svg
              .selectAll("path")
              .transition()
              .duration(200)
              .attr("fill", "#60A5FA")
              .attr("stroke-width", 0.7);

            // Highlight the selected one
            d3.select(this)
              .transition()
              .duration(200)
              .attr("fill", "#9333EA")
              .attr("stroke-width", 2);

            setSelectedState(name);
            setHoveredState(null);
          });
      });
  }, [selectedState]);

  // Deselect if clicked outside the container
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setSelectedState(null);
        const svg = d3.select(svgRef.current);
        svg.selectAll("path").attr("fill", "#60A5FA").attr("stroke-width", 0.7);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

  const active =
    (selectedState && stateInfo[selectedState]) ||
    (hoveredState && stateInfo[hoveredState]) || {
      title: "Hover over a State",
      desc: "Discover nutrition highlights from each region of India.",
      img: "https://picsum.photos/300/200?blur",
    };

  return (
    <section
  ref={containerRef}
  className="w-full flex flex-col items-center bg-white py-10 min-h-screen"
>
  {/* Title */}
  <div className="w-full">
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 py-4 text-center sm:w-1/2 md:w-1/2 lg:w-2/5 rounded-r-xl shadow-2xl/75">
      <h2 className="text-white text-2xl sm:text-3xl font-semibold uppercase tracking-wide">
        NutriMap
      </h2>
    </div>
  </div>

  {/* Content */}
  <div className="flex flex-col md:flex-row justify-between items-stretch w-11/12 max-w-7xl mt-10 gap-10 md:h-[80vh]">
    
    {/* LEFT */}
    <div className="flex-1 flex flex-col justify-center h-full">
      {/* Text Section */}
      <div className="space-y-3">
        <h3 className="text-2xl font-bold text-gray-800">{active.title}</h3>
        <p className="text-gray-600 leading-relaxed">{active.desc}</p>
      </div>

      {/* Image pinned to bottom */}
      <div className="relative md:w-[280px] md:h-[280px] justify-center items-center w-full h-[140px] md:mt-auto md:translate-x-1/2 md:self-auto md:translate-x-1/2 pt-2">
        {/* Decorative layers */}
        {/* <div className="absolute w-[240px] h-[160px] bg-blue-300 rounded-2xl -rotate-6 top-3 left-4"></div>
        <div className="absolute w-[240px] h-[160px] bg-purple-400 rounded-2xl rotate-3 top-1 left-2"></div> */}

        {/* Actual food image */}
        <img
          src={active.img}
          alt={active.title}
          className="absolute md:w-[240px] md:h-[240px] w-[120px] h-[120px] object-cover rounded-2xl md:translate-x-0 translate-x-30 shadow-lg md:top-0 md:left-0 z-10"
        />
        <img
          src={active.img}
          alt={active.title}
          className="absolute md:w-[240px] md:h-[240px] w-[120px] h-[120px] rotate-12 translate-x-40 md:translate-x-40 object-cover rounded-2xl shadow-lg md:top-0 md:left-0"
        />
        <img
          src={active.img}
          alt={active.title}
          className="absolute md:w-[240px] md:h-[240px] w-[120px] h-[120px] -rotate-12 translate-x-20 md:-translate-x-40 object-cover rounded-2xl shadow-lg md:top-0 md:left-0"
        />
      </div>
    </div>

    {/* RIGHT */}
    <div className="flex-1 flex justify-end items-stretch">
      <svg
        ref={svgRef}
        className="w-[90%] max-w-[550px] h-full"
        preserveAspectRatio="xMidYMid meet"
      ></svg>
    </div>
  </div>
</section>

  );
};

export default IndiaHoverMap;
