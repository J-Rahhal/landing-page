import React from "react";

const Mission = () => {
  return (
    <div
      id="about"
      className="w-full bg-gray-100 py-16 md:px-8 flex justify-between text-left flex-col  md:flex-row pt-12  md:pt-44 pb-6 px-4 sm:px-6 lg:px-8 gap-12"
    >
      <div className="max-w-6xl md:w-1/3 w-full">
        <p className="text-purple-800 text-sm font-medium mb-2 md:text-start ">
          GROW FAST
        </p>
        <h2 className="font-semibold text-6xl text-left md:text-4xl md:text-left">
          Move Brands Forward Together
        </h2>
      </div>
      <div className="w-full md:w-1/3">
        <div className="flex flex-col gap-2 ">
          <div>
            <div className="h-3 w-3 rounded-full bg-purple-800 inline-block hover:bg-yellow-400 hover:shadow-md hover:shadow-pink-800"></div>
            <h4 className="inline-block  pl-2 font-bold text-lg">
              Shaping Perception
            </h4>
          </div>
          <p className="font-medium text-sm text-gray-500 pl-5">
            Driven by strategy. Rooted in people. We craft campaigns with
            meaning — blending creativity and insight to connect brands with the
            audiences that matter most.
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/3">
        <div>
          <div className="h-3 w-3 rounded-full bg-pink-400 inline-block hover:bg-yellow-400 hover:shadow-md hover:shadow-pink-800"></div>
          <h4 className="inline-block  pl-2 font-bold text-lg">
            Aligned for Impact
          </h4>
        </div>
        <p className="font-medium text-sm text-gray-500 pl-5 pt-2">
          By syncing with your pace, preferences, and processes, we become an
          extension of your team. We amplify your brand without disrupting your
          flow.
        </p>
      </div>
    </div>
  );
};

export default Mission;
