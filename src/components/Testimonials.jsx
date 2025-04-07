import React from "react";
import { FaStar } from "react-icons/fa";

import Ratings from "./Ratings";

const Testimonials = () => {
  return (
    <div id="testimonials">
      <div>
        <h3 className="font-bold text-3xl md:text-4xl ">
          Client Success Stories
        </h3>
        <p className="py-2 text-gray-500 font-medium text-sm md:py-4">
          See what our clients have to say. Results worth raving about.
        </p>
      </div>
      <div className="pt-18">
        <Ratings />
      </div>
    </div>
  );
};

export default Testimonials;
