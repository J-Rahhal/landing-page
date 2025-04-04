import React, { useState } from "react";
import { navLinks } from "../data/NavLinks";
import MobileNav from "./MobileNav";
import MobileNavButton from "./MobileNavButton";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100 shadow-sm">
      <div className="w-full container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 md:h-20 h-16">
        <div className="logo flex cursor-pointer gap-2 relative">
          <div className="w-4 h-4 bg-yellow-400 rotate-45 logo-effect shadow-yellow-500 shadow-sm"></div>
          <div className="w-4 h-4  bg-pink-600 rotate-45 logo-effect shadow-pink-500 shadow-sm"></div>
          <div className="w-4 h-4 bg-purple-800 absolute left-3 bottom-3.5 rotate-45 logo-effect shadow-purple-500 shadow-sm"></div>
        </div>
        <MobileNavButton menu={isOpen} setMenu={setIsOpen} />
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => {
            return (
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
            );
          })}
        </div>
        <button
          href="#newsletter"
          className="hidden md:block bg-purple-800 text-white px-6 py-2.5 rounded-4xl hover:bg-pink-400 font-medium transition-all hover:shadow-lg hover:shadow-purple-800"
        >
          Get in touch
        </button>
      </div>
      <MobileNav
        menu={isOpen}
        setMenu={setIsOpen}
        setActiveLink={setActiveLink}
        activeLink={activeLink}
        links={navLinks}
      />
    </nav>
  );
};

export default Nav;
