import React from "react";
import { ratings } from "../data/data";
import { FaStar } from "react-icons/fa";

const Ratings = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-items-center">
      {ratings.map((rating) => {
        return (
          <div
            key={rating.id}
            className="w-full flex flex-col items-center justify-center gap-2 bg-gray-100 rounded-xl p-4"
          >
            <div className="w-24 h-24">
              <img
                src={rating.image}
                alt=""
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="flex gap-1 text-purple-800 hover:text-yellow-400">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <h5 className="font-bold text-xl md:text-2xl">{rating.title}</h5>
            <p className="text-gray-500">{rating.feedback}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Ratings;
