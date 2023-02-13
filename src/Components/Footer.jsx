import React from "react";
import {
  BsArrowRight,
  BsFacebook,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";

const Footer = () => {
  return (
    <div className=" py-10 bg-slate-300">
      <div className=" flex items-center justify-between container mx-auto border-b pb-8">
        <img src="/logo.svg" alt="logo" className=" w-16" />
        <div className=" flex gap-4">
          <h1 className=" font-bold">Newsletter</h1>
          <div className=" relative w-52">
            <input
              type="email"
              placeholder="Email Address"
              className=" outline-none border-b-2 border-b-gray-400 bg-transparent relative pb-2 w-full"
            />
            <BsArrowRight className=" absolute right-0 bottom-3 text-lg" />
          </div>
        </div>
        <div className=" flex gap-5 text-2xl text-slate-600">
          <BsFacebook />
          <BsInstagram />
          <BsTwitter />
        </div>
      </div>
      <div className=" flex justify-between container mx-auto pt-5">
        <p>&#169; 2023 All rights reserved.</p>
        <p className=" underline text-sky-600">All accept Terms&Conditions</p>
      </div>
    </div>
  );
};

export default Footer;
