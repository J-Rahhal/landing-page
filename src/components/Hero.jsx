import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import heroImage from "../assets/hero_image.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="container mx-auto min-h-full flex flex-col md:flex-row justify-between items-center pt-44 pb-6 px-4 sm:px-6 lg:px-8 "
    >
      <div className="w-full md:w-1/2 space-y-8 ">
        <div className="flex items-center gap-2 bg-gray-100 w-fit px-4 py-2 rounded-4xl hover:bg-pink-400 hover:text-white transition-colors cursor-pointer group  ">
          <span className="text-purple-800 group-hover:scale-110 transition-transform group-hover:text-yellow-400 ">
            ★
          </span>
          <span className="text-sm font-medium ">
            Bold Strategies, Real Results.
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight ">
          Turning Ideas into Impact. Your{" "}
          <span className="text-purple-800 hover:text-yellow-400 hover:text-shadow-pink-400 hover:text-shadow-lg">
            Growth
          </span>{" "}
          Our{" "}
          <span className="text-purple-800 hover:text-yellow-400 hover:text-shadow-pink-400 hover:text-shadow-lg">
            Strategy
          </span>
        </h1>
        <p className="text-gray-500 md:text-xl max-w-xl ">
          {" "}
          We craft bold strategies and data-driven campaigns that turn clicks
          into customers and brands into industry leaders
        </p>
        <div className="flex gap-3 mx-w-md">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="flex-1 px-6 py-4 border-gray-400 rounded-xl focus:outline-none focus:border-purple-800 focus:ring-2 focus:ring-purple-400 transition-all"
          />

          <button className="bg-purple-400 text-white px-5 py-6 rounded-xl hover:bg-pink-400 cursor-pointer hover:shadow-lg hover:shadow-pink-800">
            <FaLongArrowAltRight />
          </button>
        </div>
      </div>
      <div className="w-full md:w-1/2 mt-16 md:mt-0 pl-0 md:pl-12">
        <div>
          <img
            src={heroImage}
            className="rounded-lg relative z-10 hover:scale-[1.02] transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
