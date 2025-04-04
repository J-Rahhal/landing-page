import React from "react";

const MobileNav = ({ menu, links, activeLink, setActiveLink }) => {
  return (
    <>
      {menu && (
        <div className="md:hidden bg-white border-t border-gray-400 py-4">
          <div className="container mx-auto px-4 space-y-4">
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
        </div>
      )}
    </>
  );
};

export default MobileNav;
