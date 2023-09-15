import { Rate } from "antd";
import React from "react";
import Slider from "react-slick";
import Products from "./Products";
import ProductTrending from "./ProductTrending";
import SliderPage from "./components/SliderPage";
const Homepage = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    rtl: true,
  };
  return (
    <div className="p-2">
      <SliderPage/>
      <div className="">
        <h2 className="py-2 font-bold font-poppins">New Books</h2>
        <Slider {...settings}>
          {/* **** */}
          <div className="p-1 border rounded-xl shadow-md">
            <div className="">
              <div className="">
                <img src="./images/book1.webp" alt="" className="w-[100px] mx-auto"/>
              </div>
              <div className="">
                <p className="text-sm font-bold line-clamp-1">
                  Đừng lựa chọn an nhàn khi còn trẻ
                </p>
              </div>
              <div className="">
                <Rate allowHalf defaultValue={3} className="text-xs" />
              </div>
              <div className="">
                <button className="border px-3 rounded-full mt-2 text-sm bg-red-400 shadow-md text-white">
                  $18
                </button>
              </div>
            </div>
          </div>
          {/* **** */}
          <div className="p-1 border rounded-xl shadow-md ">
            <div className="">
              <img src="./images/book1.webp" alt="" className="w-[100px] mx-auto"/>
            </div>
            <div className="">
              <p className="text-sm font-bold line-clamp-1">
                Đừng lựa chọn an nhàn khi còn trẻ
              </p>
            </div>
            <div className="">
              <Rate allowHalf defaultValue={2.5} className="text-xs" />
            </div>
            <div className="">
              <button className="border px-3 rounded-full mt-2 text-sm bg-red-400 shadow-md text-white">
                $18
              </button>
            </div>
          </div>
          {/* **** */}
          <div className="p-1 border rounded-xl shadow-md ">
            <div className="">
              <img src="./images/book1.webp" alt="" className="w-[100px] mx-auto"/>
            </div>
            <div className="">
              <p className="text-sm font-bold line-clamp-1">
                Đừng lựa chọn an nhàn khi còn trẻ
              </p>
            </div>
            <div className="">
              <Rate allowHalf defaultValue={2.5} className="text-xs" />
            </div>
            <div className="">
              <button className="border px-3 rounded-full mt-2 text-sm bg-red-400 shadow-md text-white">
                $18
              </button>
            </div>
          </div>
          {/* **** */}
          <div className="p-1 border rounded-xl shadow-md ">
            <div className="">
              <img src="./images/book1.webp" alt="" className="w-[100px] mx-auto"/>
            </div>
            <div className="">
              <p className="text-sm font-bold line-clamp-1">
                Đừng lựa chọn an nhàn khi còn trẻ
              </p>
            </div>
            <div className="">
              <Rate allowHalf defaultValue={2.5} className="text-xs" />
            </div>
            <div className="">
              <button className="border px-3 rounded-full mt-2 text-sm bg-red-400 shadow-md text-white">
                $18
              </button>
            </div>
          </div>
          
        </Slider>
      </div>
      <ProductTrending/>
      <Products/>
    </div>
  );
};

export default Homepage;
