import React, { useState } from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";

const NavItem = ({ name, textColor }) => {
  return (
    <li
      className={` font-jost font-semibold text-lg flex cursor-pointer hover:-translate-y-1
          transition duration-150 ease-in-out ${textColor} transition-all duration-200 ease-in-out group`}
    >
      {name}
      <MdOutlineArrowDropDown
        className={`${textColor} text-3xl
         transition-all duration-300 ease-in-out group-hover:rotate-180 rotate-0`}
      />
    </li>
  );
};

export default NavItem;
