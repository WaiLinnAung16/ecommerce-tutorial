import React from "react";
import { BiCartAlt } from "react-icons/bi";
import { BsPersonCircle } from "react-icons/bs";
const Navbar = () => {
  return (
    <div className=" bg-slate-200 py-4 fixed z-10 w-full shadow-md">
      <div className="flex justify-between items-center container mx-auto">
        <img src="/logo.svg" alt="logo" className=" w-14" />
        <input
          type="text"
          placeholder="Search..."
          className=" outline-none w-96 py-2 pl-3 rounded shadow"
        />
        <div className=" flex items-center gap-5 text-2xl">
          <BiCartAlt className=" text-yellow-700" />
          <BsPersonCircle className=" text-yellow-700" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
