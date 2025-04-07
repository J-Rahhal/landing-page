import React from "react";
import { navLinks } from "../data/data";
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";

const Footer = ({ activeLink, setActiveLink }) => {
  return (
    <div className="mt-32 flex flex-col justify-around items-center md:flex-row gap-18 border-t border-gray-500 pt-12 ">
      <div className="w-full md:w-1/3">
        <h2 className="font-bold text-5xl text-purple-800 hover:text-yellow-400 hover:text-shadow-lg hover:text-shadow-pink-400 md:text-start">
          Velora
        </h2>
      </div>
      <div className="flex flex-col flex-1">
        {navLinks.map((link) => {
          return (
            <div>
              <a
                href={link.href}
                key={link.id}
                className={`text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-purple-800 after:transition-all ${
                  activeLink === link.href ? "after:w-full" : "text-black"
                }`}
                onClick={() => setActiveLink(link.href)}
              >
                {link.label}
              </a>
            </div>
          );
        })}
      </div>
      <div className="flex-1 flex gap-12">
        <FaFacebook title="facebook.com" className="hover:text-blue-800" />
        <BsTwitterX title="x.com" />
        <FaInstagramSquare
          title="instagram.com"
          className="hover:text-purple-400"
        />
        <IoLogoYoutube title="Youtube.com" className="hover:text-red-500" />
      </div>
    </div>
  );
};

export default Footer;
