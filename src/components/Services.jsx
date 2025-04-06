import React from "react";
import { HiLightBulb } from "react-icons/hi";
import { FaGear } from "react-icons/fa6";
import { LuRocket } from "react-icons/lu";
import { PiStrategyFill } from "react-icons/pi";
import { RiAdvertisementFill } from "react-icons/ri";
import { IoPeople } from "react-icons/io5";
import { MdOutlineDesignServices } from "react-icons/md";

const Services = () => {
  return (
    <div id="services " className="mx-auto py-38">
      <div className="pb-12 md:pb-24">
        <h2 className="font-bold text-4xl pb-8">
          How Can We Grow Your Business?
        </h2>
        <p className="font-medium text-sm text-gray-500">
          We turn bold ideas into results—helping your brand grow faster,
          smarter, and with lasting impact.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/3">
          <HiLightBulb
            className="mx-auto bg-pink-400 p-2 rounded-full mt-4 text-yellow-400 hover:shadow-lg hover:shadow-pink-400 hover:bg-yellow-400 hover:text-purple-400 cursor-pointer"
            size="52"
          />

          <h4 className="font-bold text-xl py-4">Tailored Solutions</h4>
          <p className="text-sm text-gray-500">
            we'll present you with a tailored proposal. Together, we'll dive
            into the details and fine-tune everything for success.
          </p>
        </div>
        <div className="w-full md:w-1/3">
          <FaGear
            className="mx-auto bg-yellow-400 p-2 rounded-full mt-4 text-purple-400 hover:shadow-lg hover:shadow-pink-400 hover:bg-pink-400 hover:text-yellow-400 cursor-pointer"
            size="52"
          />

          <h4 className="font-bold text-xl py-4">Bringing Ideas to Life</h4>
          <p className="text-sm text-gray-500">
            we transform your concepts into action. With creative precision and
            strategic insight, we bring your vision to reality, ensuring every
            detail aligns with your goals.
          </p>
        </div>
        <div className="w-full md:w-1/3">
          <LuRocket
            className="mx-auto bg-purple-400 p-2 rounded-full mt-4 text-yellow-400 hover:shadow-lg hover:shadow-pink-400 hover:bg-yellow-400 hover:text-pink-400 cursor-pointer"
            size="52"
          />

          <h4 className="font-bold text-xl py-4">We Get to Work Fast</h4>
          <p className="text-sm text-gray-500">
            We dive right into your project, streamlining processes and
            executing strategies with agility. Our team is equipped to deliver
            impactful results quickly, helping you stay ahead in today’s
            fast-paced market.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-18 md:flex-row py-44">
        <div className="w-full md:w-1/3 border-l-8 border-l-purple-800 flex items-center place-self-center">
          <h2 className="text-start text-4xl font-black pl-2">
            Shaping the future of marketing with innovative strategies
          </h2>
        </div>
        <div className="w-full md:w-1/2 grid grid-cols-2 gap-8  md:ml-2 text-sm place-items-start">
          <div>
            <PiStrategyFill
              className="mx-auto bg-pink-400 p-2 rounded-full mt-4 text-yellow-400 hover:shadow-lg hover:shadow-pink-400 hover:bg-yellow-400 hover:text-purple-400 cursor-pointer"
              size="52"
            />
            <h3 className="font-medium py-4">Brand Strategy & Identity</h3>
            <p className="text-sm text-gray-500">
              We craft brands with meaning. From tone of voice to visual
              identity, we help you define how the world sees—and remembers—you.
            </p>
          </div>
          <div>
            <RiAdvertisementFill
              className="mx-auto bg-yellow-400 p-2 rounded-full mt-4 text-purple-400 hover:shadow-lg hover:shadow-pink-400 hover:bg-pink-400 hover:text-yellow-400 cursor-pointer"
              size="52"
            />
            <h3 className="font-medium py-4">
              Digital Advertising & Paid Media
            </h3>
            <p className="text-sm text-gray-500">
              Get seen by the right people at the right time. We run
              performance-driven campaigns across Google, Meta, TikTok,
              LinkedIn, and more.
            </p>
          </div>
          <div>
            <IoPeople
              className="mx-auto bg-purple-400 p-2 rounded-full mt-4 text-yellow-400 hover:shadow-lg hover:shadow-pink-400 hover:bg-yellow-400 hover:text-pink-400 cursor-pointer"
              size="52"
            />
            <h3 className="font-medium py-4">
              Content & Social Media Marketing
            </h3>
            <p className="text-sm text-gray-500">
              Tell stories that stick. Our team produces scroll-stopping content
              to build communities and spark conversations.
            </p>
          </div>
          <div>
            <MdOutlineDesignServices
              className="mx-auto bg-pink-400 p-2 rounded-full mt-4 text-yellow-400 hover:shadow-lg hover:shadow-pink-400 hover:bg-yellow-400 hover:text-purple-400 cursor-pointer"
              size="52"
            />
            <h3 className="font-medium py-4">Creative Design & Multimedia</h3>
            <p className="text-sm text-gray-500">
              Bring your brand to life visually. From infographics and ad
              creatives to video production and motion graphics, we’ve got you
              covered.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
