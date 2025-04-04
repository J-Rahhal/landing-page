import React from "react";

const MobileNav = ({ menu, links, activeLink, setActiveLink }) => {
  return (
    <>
      {menu && (
        <div className="md:hidden bg-white border-t border-gray-400 py-4 px-4">
          <div className="container mx-auto space-y-4">
            {links.map((link) => {
              return (
                <a
                  href={link.href}
                  key={link.id}
                  className={`block text-sm font-medium py-2  ${
                    activeLink === link.href ? "text-purple-800" : "text-black"
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
            className="w-full px-6 rounded-lg bg-purple-800 text-white py-2.5  hover:bg-pink-400 font-medium transition-all hover:shadow-lg hover:shadow-purple-800"
          >
            Get in touch
          </button>
        </div>
      )}
    </>
  );
};

export default MobileNav;
