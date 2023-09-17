import { Rate } from "antd";
import React from "react";
import Slider from "react-slick";
import Products from "./Products";
import ProductTrending from "./ProductTrending";
import SliderPage from "./components/SliderPage";
import '../App.css'
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
    <div className="p-2 md:max-w-6xl md:mx-auto md:space-y-12">
      <SliderPage/>
      <div className="">
        <h2 className="py-2 font-bold font-poppins md:text-xl">New Books</h2>
        <Slider {...settings}>
          {/* **** */}
          <div className="p-2">
            <div className="space-y-2">
              <div className="">
                <img src="./images/book1.webp" alt="" className="w-[100px] mx-auto "/>
              </div>
             <div className="flex flex-col md:items-center md:justify-start">
              <span className="font-bold font-inclusiveSans text-sm ">Cảnh thiên</span>
              <span className="text-xs text-gray-400 line-clamp-1"> Đừng lựa chọn an nhàn khi còn trẻ</span>
             </div>
            </div>
          </div>
          {/* **** */}
          <div className="p-2">
            <div className="space-y-2">
              <div className="">
                <img src="./images/book1.webp" alt="" className="w-[100px] mx-auto "/>
              </div>
             <div className="flex flex-col md:items-center md:justify-start">
              <span className="font-bold font-inclusiveSans text-sm ">Cảnh thiên</span>
              <span className="text-xs text-gray-400 line-clamp-1"> Đừng lựa chọn an nhàn khi còn trẻ</span>
             </div>
            </div>
          </div>
          {/* **** */}
          <div className="p-2">
            <div className="space-y-2">
              <div className="">
                <img src="./images/book1.webp" alt="" className="w-[100px] mx-auto "/>
              </div>
             <div className="flex flex-col md:items-center md:justify-start">
              <span className="font-bold font-inclusiveSans text-sm ">Cảnh thiên</span>
              <span className="text-xs text-gray-400 line-clamp-1"> Đừng lựa chọn an nhàn khi còn trẻ</span>
             </div>
            </div>
          </div>
          {/* **** */}
          <div className="p-2">
            <div className="space-y-2">
              <div className="">
                <img src="./images/book1.webp" alt="" className="w-[100px] mx-auto "/>
              </div>
             <div className="flex flex-col md:items-center md:justify-start">
              <span className="font-bold font-inclusiveSans text-sm ">Cảnh thiên</span>
              <span className="text-xs text-gray-400 line-clamp-1"> Đừng lựa chọn an nhàn khi còn trẻ</span>
             </div>
            </div>
          </div>
          {/* **** */}
          <div className="p-2">
            <div className="space-y-2">
              <div className="">
                <img src="./images/book1.webp" alt="" className="w-[100px] mx-auto "/>
              </div>
             <div className="flex flex-col md:items-center md:justify-start">
              <span className="font-bold font-inclusiveSans text-sm ">Cảnh thiên</span>
              <span className="text-xs text-gray-400 line-clamp-1"> Đừng lựa chọn an nhàn khi còn trẻ</span>
             </div>
            </div>
          </div>
          
          
        </Slider>
      </div>
      <Products/>
      <ProductTrending/>
    </div>
  );
};

export default Homepage;
