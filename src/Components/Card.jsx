import React from "react";
import { MdOutlineFavoriteBorder } from "react-icons/md";
const Card = ({ product }) => {
  return (
    <div className=" px-3 py-4 shadow">
      <img
        src={product.thumbnail}
        alt=""
        className="w-full h-36 object-contain mb-4"
      />
      <h4 className=" bg-orange-300 inline px-3 rounded-full font-semibold text-sm">
        {product.category}
      </h4>
      <div className=" flex mt-2">
        <div className=" mb-2">
          <h1 className=" font-bold text-orange-900">
            {product.title.substring(0, 20)}
          </h1>
          <p className=" text-xl font-bold text-orange-700">${product.price}</p>
        </div>
        <MdOutlineFavoriteBorder className=" ml-auto text-xl" />
      </div>
    </div>
  );
};

export default Card;
