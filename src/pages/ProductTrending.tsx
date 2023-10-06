import { Rate } from "antd";
import React from "react";
import "../App.css";

const ProductTrending = () => {
  return (
    <div className="mt-8">
      <h2 className="font-bold font-poppins md:text-xl md:my-6">Collection</h2>
      <div className=" md:grid md:grid-cols-3 md:gap-3">
        {/* item product */}
        <div className="grid grid-cols-2 gap-x-3 p-2 hover:shadow-md items-center border bg-white">
          <div className="shadow-md w-24 mx-auto">
            <img src="./images/book1.webp" alt="" className="" />
          </div>
          <div className="flex flex-col gap-y-3">
            <label htmlFor="" className="line-clamp-1 font-inclusiveSans">
              Đừng lựa chọn an nhàn khi còn trẻ
            </label>
            <div className="">
              <span className="font-bold text-xl">$ 18.00 </span>
              <span className="line-through text-gray-400">$ 28.00 </span>
            </div>
            <Rate allowHalf defaultValue={3} className="text-xs" />
            <div className="">
              <button className="border py-1 px-3 rounded-md text-orange-400 hover:bg-orange-400 hover:text-white">
                Buy Now
              </button>
            </div>
          </div>
        </div>
        {/* item product */}
        <div className="grid grid-cols-2 gap-x-3 p-2 hover:shadow-md items-center border bg-white">
          <div className="shadow-md w-24 mx-auto">
            <img src="./images/book1.webp" alt="" className="" />
          </div>
          <div className="flex flex-col gap-y-3">
            <label htmlFor="" className="line-clamp-1 font-inclusiveSans">
              Đừng lựa chọn an nhàn khi còn trẻ
            </label>
            <div className="">
              <span className="font-bold text-xl">$ 18.00 </span>
              <span className="line-through text-gray-400">$ 28.00 </span>
            </div>
            <Rate allowHalf defaultValue={3} className="text-xs" />
            <div className="">
              <button className="border py-1 px-3 rounded-md text-orange-400 hover:bg-orange-400 hover:text-white">
                Buy Now
              </button>
            </div>
          </div>
        </div>
        {/* item product */}
        <div className="grid grid-cols-2 gap-x-3 p-2 hover:shadow-md items-center border bg-white">
          <div className="shadow-md w-24 mx-auto">
            <img src="./images/book1.webp" alt="" className="" />
          </div>
          <div className="flex flex-col gap-y-3">
            <label htmlFor="" className="line-clamp-1 font-inclusiveSans">
              Đừng lựa chọn an nhàn khi còn trẻ
            </label>
            <div className="">
              <span className="font-bold text-xl">$ 18.00 </span>
              <span className="line-through text-gray-400">$ 28.00 </span>
            </div>
            <Rate allowHalf defaultValue={3} className="text-xs" />
            <div className="">
              <button className="border py-1 px-3 rounded-md text-orange-400 hover:bg-orange-400 hover:text-white">
                Buy Now
              </button>
            </div>
          </div>
        </div>
        {/* item product */}
        <div className="grid grid-cols-2 gap-x-3 p-2 hover:shadow-md items-center border bg-white">
          <div className="shadow-md w-24 mx-auto">
            <img src="./images/book1.webp" alt="" className="" />
          </div>
          <div className="flex flex-col gap-y-3">
            <label htmlFor="" className="line-clamp-1 font-inclusiveSans">
              Đừng lựa chọn an nhàn khi còn trẻ
            </label>
            <div className="">
              <span className="font-bold text-xl">$ 18.00 </span>
              <span className="line-through text-gray-400">$ 28.00 </span>
            </div>
            <Rate allowHalf defaultValue={3} className="text-xs" />
            <div className="">
              <button className="border py-1 px-3 rounded-md text-orange-400 hover:bg-orange-400 hover:text-white">
                Buy Now
              </button>
            </div>
          </div>
        </div>
        {/* item product */}
        <div className="grid grid-cols-2 gap-x-3 p-2 hover:shadow-md items-center border bg-white">
          <div className="shadow-md w-24 mx-auto">
            <img src="./images/book1.webp" alt="" className="" />
          </div>
          <div className="flex flex-col gap-y-3">
            <label htmlFor="" className="line-clamp-1 font-inclusiveSans">
              Đừng lựa chọn an nhàn khi còn trẻ
            </label>
            <div className="">
              <span className="font-bold text-xl">$ 18.00 </span>
              <span className="line-through text-gray-400">$ 28.00 </span>
            </div>
            <Rate allowHalf defaultValue={3} className="text-xs" />
            <div className="">
              <button className="border py-1 px-3 rounded-md text-orange-400 hover:bg-orange-400 hover:text-white">
                Buy Now
              </button>
            </div>
          </div>
        </div>
        {/* item product */}
        <div className="grid grid-cols-2 gap-x-3 p-2 hover:shadow-md items-center border bg-white">
          <div className="shadow-md w-24 mx-auto">
            <img src="./images/book1.webp" alt="" className="" />
          </div>
          <div className="flex flex-col gap-y-3">
            <label htmlFor="" className="line-clamp-1 font-inclusiveSans">
              Đừng lựa chọn an nhàn khi còn trẻ
            </label>
            <div className="">
              <span className="font-bold text-xl">$ 18.00 </span>
              <span className="line-through text-gray-400">$ 28.00 </span>
            </div>
            <Rate allowHalf defaultValue={3} className="text-xs" />
            <div className="">
              <button className="border py-1 px-3 rounded-md text-orange-400 hover:bg-orange-400 hover:text-white">
                Buy Now
              </button>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default ProductTrending;
