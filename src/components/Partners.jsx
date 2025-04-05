import React from "react";
import TechNova from "../assets/technova.png";
import NextGen from "../assets/nextgen.png";
import CloudifyLabs from "../assets/cloudifylabs.png";
import CodeVertex from "../assets/codevertex.png";
import ByteSync from "../assets/bytesync.png";
import "../App.css";

const Partners = () => {
  const logos = [TechNova, NextGen, CloudifyLabs, CodeVertex, ByteSync];
  return (
    <div className="w-full container mx-auto py-20 gap-8 flex sm:flex-row flex-col sm:items-center items-start overflow-hidden">
      <div className="w-[300px] shrink-0 px-4 text-gray-600 border-l-4 border-purple-800 bg-white py-2 z-10 sm:text-base text-xl font-semibold text-left">
        Proud Partner at <br /> ActiveDesigns & Drellio
      </div>
      <div className="flex whitespace-nowrap animate-marquee">
        {logos.map((logo) => {
          return (
            <img
              src={logo}
              className="mx-12 h-22 w-36 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transtion-all"
              key={`00-${logo}`}
            />
          );
        })}
        {logos.map((logo) => {
          return (
            <img
              src={logo}
              className="mx-12 h-22 w-36 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transtion-all"
              key={`01-${logo}`}
            />
          );
        })}
        {logos.map((logo) => {
          return (
            <img
              src={logo}
              className="mx-12 h-22 w-36 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transtion-all"
              key={`02-${logo}`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Partners;
