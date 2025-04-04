import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoClose } from "react-icons/io5";

const MobileNavButton = ({ menu, setMenu }) => {
  return (
    <button className="md:hidden p-2" onClick={() => setMenu(!menu)}>
      {menu ? (
        <IoClose className="text-xl cursor-pointer" />
      ) : (
        <AiOutlineMenu className="text-xl cursor-pointer" />
      )}
    </button>
  );
};

export default MobileNavButton;
