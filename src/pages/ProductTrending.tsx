import { Rate } from "antd";
import React from "react";
import "../App.css";
import { FaCartPlus } from "@react-icons/all-files/fa/FaCartPlus";
import { Link } from "react-router-dom";
const ProductTrending = () => {
  return (
    <div className="mt-8">
      <h2 className="font-bold font-poppins">Collection</h2>
      <div className="grid grid-cols-2 gap-3 my-3">
        {/* item */}
        <div className="border rounded-md shadow-md p-1">
          <div className="">
            <img
              src="./images/book2.jpg"
              alt=""
              className="rounded-md shadow-lg"
            />
          </div>
          <div className="my-2">
            <span className="text-lg line-clamp-1">
              Tuổi trẻ đáng giá bao nhiêu ?
            </span>
            <span>
              <Rate allowHalf defaultValue={2.5} className="text-xs" />
            </span>
          </div>
          <div className="space-y-1 flex justify-between items-center">
            <div className="shadow-lg w-20 h-9 border p-1 rounded-full hover:text-white relative hv-btn-buy transition-all">
              <Link to={"products/:id/detail"}>
                <button className="">Buy</button>
                <span className="rounded-full text-white p-1 absolute top-0 right-0 h-full btn-cart">
                  $18
                </span>
              </Link>
            </div>
            <button className="border hover:bg-red-500 hover:text-white text-sm p-2 rounded-full font-poppins shadow-md">
              <FaCartPlus />
            </button>
          </div>
        </div>
        {/* item */}
        <div className="border rounded-md shadow-md p-1">
          <div className="">
            <img
              src="./images/book2.jpg"
              alt=""
              className="rounded-md shadow-lg"
            />
          </div>
          <div className="my-2">
            <span className="text-lg line-clamp-1">
              Tuổi trẻ đáng giá bao nhiêu ?
            </span>
            <span>
              <Rate allowHalf defaultValue={2.5} className="text-xs" />
            </span>
          </div>
          <div className="space-y-1 flex justify-between items-center">
            <div className="shadow-lg w-20 h-9 border p-1 rounded-full hover:text-white relative hv-btn-buy transition-all">
              <button className="">Buy</button>
              <span className="rounded-full text-white p-1 absolute top-0 right-0 h-full btn-cart">
                $18
              </span>
            </div>
            <button className="border hover:bg-red-500 hover:text-white text-sm p-2 rounded-full font-poppins shadow-md">
              <FaCartPlus />
            </button>
          </div>
        </div>
        {/* item */}
        <div className="border rounded-md shadow-md p-1">
          <div className="">
            <img
              src="./images/book2.jpg"
              alt=""
              className="rounded-md shadow-lg"
            />
          </div>
          <div className="my-2">
            <span className="text-lg line-clamp-1">
              Tuổi trẻ đáng giá bao nhiêu ?
            </span>
            <span>
              <Rate allowHalf defaultValue={2.5} className="text-xs" />
            </span>
          </div>
          <div className="space-y-1 flex justify-between items-center">
            <div className="shadow-lg w-20 h-9 border p-1 rounded-full hover:text-white relative hv-btn-buy transition-all">
              <button className="">Buy</button>
              <span className="rounded-full text-white p-1 absolute top-0 right-0 h-full btn-cart">
                $18
              </span>
            </div>
            <button className="border hover:bg-red-500 hover:text-white text-sm p-2 rounded-full font-poppins shadow-md">
              <FaCartPlus />
            </button>
          </div>
        </div>
        {/* item */}
        <div className="border rounded-md shadow-md p-1">
          <div className="">
            <img
              src="./images/book2.jpg"
              alt=""
              className="rounded-md shadow-lg"
            />
          </div>
          <div className="my-2">
            <span className="text-lg line-clamp-1">
              Tuổi trẻ đáng giá bao nhiêu ?
            </span>
            <span>
              <Rate allowHalf defaultValue={2.5} className="text-xs" />
            </span>
          </div>
          <div className="space-y-1 flex justify-between items-center">
            <div className="shadow-lg w-20 h-9 border p-1 rounded-full hover:text-white relative hv-btn-buy transition-all">
              <button className="">Buy</button>
              <span className="rounded-full text-white p-1 absolute top-0 right-0 h-full btn-cart">
                $18
              </span>
            </div>
            <button className="border hover:bg-red-500 hover:text-white text-sm p-2 rounded-full font-poppins shadow-md">
              <FaCartPlus />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductTrending;
