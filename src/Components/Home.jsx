import React from "react";

const Home = () => {
  return (
    <div className="bg-[url('/bg.jpg')]  bg-fixed bg-right bg-contain bg-no-repeat h-[700px] bg-yellow-400">
      <div className=" flex justify-center items-center h-full backdrop-blur-md bg-slate-200 bg-opacity-50">
        <div className=" text-center">
          <h1 className=" text-5xl font-bold text-black mb-5">
            <span className=" block text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#D38312] to-[#A83279] mb-3">
              Hello!
            </span>
            We are Bar Nyar Sa Ma Kalar online shop.
          </h1>
          <p className=" text-xl font-semibold p-3 bg-gray-800 text-slate-50 tracking-wide inline-flex rounded">
            Let's Shop!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
