import { Rate } from "antd";
import React from "react";
import Slider from "react-slick";
import Products from "./Products";
import ProductTrending from "./ProductTrending";
import SliderPage from "../components/SliderPage";
import "../App.css";
const Homepage = () => {
  const setting = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div className="">
      <SliderPage />
      <div className="p-2 md:max-w-6xl md:mx-auto md:space-y-12">
        <h2 className=" font-bold font-poppins md:text-xl md:my-6">
          New Books
        </h2>
        <Slider {...setting}>
          {/* **** */}
          <div className="">
            <div className="md:border md:rounded-md md:shadow-md bg-white mt-12 p-2">
              <div className="md:grid grid-cols-2">
                <div className="">
                  <img
                    src="./images/book2.jpg"
                    alt=""
                    className="md:w-32 md:-translate-y-12 shadow-md shadow-gray-600"
                  />
                </div>
                <div className="flex flex-col md:gap-y-3 sm:gap-y-1 justify-center ">
                  <span className="line-clamp-1 text-lg sm:text-sm md:text-xl">
                    Tuổi trẻ đáng bao nhiêu?
                  </span>
                  <span className="text-gray-400 sm:text-xs sm:line-clamp-1">
                    Rosie Nguyễn
                  </span>
                  <span className="sm:hidden md:block">
                    <Rate />
                  </span>
                  <div className="sm:hidden md:block">
                    {" "}
                    <button className="border rounded-md md:border-orange-400 md:px-3 md:py-1 text-xs sm:px-2">
                      Views
                    </button>
                  </div>
                </div>
              </div>
              <div className="md:line-clamp-3 text-sm text-gray-400 sm:hidden">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
                praesentium necessitatibus distinctio veritatis eos alias quam
                sequi beatae mollitia quo? Necessitatibus ut nulla odit dicta,
                fugiat officiis saepe odio sint!
              </div>
            </div>
          </div>
          <div className="">
            <div className="md:border md:rounded-md md:shadow-md bg-white mt-12 p-2">
              <div className="md:grid grid-cols-2">
                <div className="">
                  <img
                    src="./images/book2.jpg"
                    alt=""
                    className="md:w-32 md:-translate-y-12 shadow-md shadow-gray-600"
                  />
                </div>
                <div className="flex flex-col md:gap-y-3 sm:gap-y-1 justify-center ">
                  <span className="line-clamp-1 text-lg sm:text-sm md:text-xl">
                    Tuổi trẻ đáng bao nhiêu?
                  </span>
                  <span className="text-gray-400 sm:text-xs sm:line-clamp-1">
                    Rosie Nguyễn
                  </span>
                  <span className="sm:hidden md:block">
                    <Rate />
                  </span>
                  <div className="sm:hidden md:block">
                    {" "}
                    <button className="border rounded-md md:border-orange-400 md:px-3 md:py-1 text-xs sm:px-2">
                      Views
                    </button>
                  </div>
                </div>
              </div>
              <div className="md:line-clamp-3 text-sm text-gray-400 sm:hidden">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
                praesentium necessitatibus distinctio veritatis eos alias quam
                sequi beatae mollitia quo? Necessitatibus ut nulla odit dicta,
                fugiat officiis saepe odio sint!
              </div>
            </div>
          </div>
          <div className="">
            <div className="md:border md:rounded-md md:shadow-md bg-white mt-12 p-2">
              <div className="md:grid grid-cols-2">
                <div className="">
                  <img
                    src="./images/book2.jpg"
                    alt=""
                    className="md:w-32 md:-translate-y-12 shadow-md shadow-gray-600"
                  />
                </div>
                <div className="flex flex-col md:gap-y-3 sm:gap-y-1 justify-center ">
                  <span className="line-clamp-1 text-lg sm:text-sm md:text-xl">
                    Tuổi trẻ đáng bao nhiêu?
                  </span>
                  <span className="text-gray-400 sm:text-xs sm:line-clamp-1">
                    Rosie Nguyễn
                  </span>
                  <span className="sm:hidden md:block">
                    <Rate />
                  </span>
                  <div className="sm:hidden md:block">
                    {" "}
                    <button className="border rounded-md md:border-orange-400 md:px-3 md:py-1 text-xs sm:px-2">
                      Views
                    </button>
                  </div>
                </div>
              </div>
              <div className="md:line-clamp-3 text-sm text-gray-400 sm:hidden">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
                praesentium necessitatibus distinctio veritatis eos alias quam
                sequi beatae mollitia quo? Necessitatibus ut nulla odit dicta,
                fugiat officiis saepe odio sint!
              </div>
            </div>
          </div>
          <div className="">
            <div className="md:border md:rounded-md md:shadow-md bg-white mt-12 p-2">
              <div className="md:grid grid-cols-2">
                <div className="">
                  <img
                    src="./images/book2.jpg"
                    alt=""
                    className="md:w-32 md:-translate-y-12 shadow-md shadow-gray-600"
                  />
                </div>
                <div className="flex flex-col md:gap-y-3 sm:gap-y-1 justify-center ">
                  <span className="line-clamp-1 text-lg sm:text-sm md:text-xl">
                    Tuổi trẻ đáng bao nhiêu?
                  </span>
                  <span className="text-gray-400 sm:text-xs sm:line-clamp-1">
                    Rosie Nguyễn
                  </span>
                  <span className="sm:hidden md:block">
                    <Rate />
                  </span>
                  <div className="sm:hidden md:block">
                    {" "}
                    <button className="border rounded-md md:border-orange-400 md:px-3 md:py-1 text-xs sm:px-2">
                      Views
                    </button>
                  </div>
                </div>
              </div>
              <div className="md:line-clamp-3 text-sm text-gray-400 sm:hidden">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
                praesentium necessitatibus distinctio veritatis eos alias quam
                sequi beatae mollitia quo? Necessitatibus ut nulla odit dicta,
                fugiat officiis saepe odio sint!
              </div>
            </div>
          </div>
        </Slider>
        <Products />
        <ProductTrending />
      </div>
    </div>
  );
};

export default Homepage;
