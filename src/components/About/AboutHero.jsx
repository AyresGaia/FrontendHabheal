import React from "react";
// import i from "../assets/evee.gif"
import i from "../../assets/Image1.png"
const AboutHero = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row items-stretch justify-center gap-3 md:gap-6 py-6 px-3  text-black">
  {/* Left Section */}
  <div className="flex flex-col justify-between md:w-1/2 space-y-5 h-full md:pl-10">
    <div className="w-full p-4 rounded-md text-center flex items-center justify-center">
      <h1 className="text-lg md:text-xl font-semibold tracking-wide text-justify">
        Fuel your health, one bite at a time! 🍽️ Discover personalized nutrition plans crafted for your lifestyle and goals. Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse numquam pariatur alias possimus reprehenderit at sapiente eius hic blanditiis molestiae quasi doloribus reiciendis debitis et, maxime iusto eos ipsam tenetur! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur similique, laborum reiciendis odio adipisci nobis ut ad, qui nulla fugiat cupiditate necessitatibus cum molestiae magni vitae cumque debitis veniam! Porro. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit blanditiis eveniet, in maiores a laborum pariatur adipisci omnis fuga doloremque similique, quia cupiditate nulla tempora ratione porro? Assumenda, illo doloremque.
      </h1>
    </div>
    <div className="w-full p-3 rounded-md text-center flex items-center justify-center">
      <p className="text-xs md:text-sm uppercase font-medium">
        Smart, simple, and sustainable — because your body deserves the best fuel. Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio illo unde perspiciatis ducimus et voluptate ullam, possimus sed veritatis labore molestias maxime tenetur hic dolor eos eligendi, ipsam voluptates qui.
      </p>
    </div>
  </div>

  {/* Right Section (Image) */}
  <div className="md:w-1/2 w-full flex justify-center">
    <div className=" w-full md:w-[85%] aspect-square flex items-center justify-center">
      <img className="w-full h-full object-cover object-center rounded-2xl" src={i} alt="Food" />
    </div>
  </div>
</section>


  );
};

export default AboutHero;
