import { Rate } from "antd";
import React from "react";
import { FaCartPlus } from "@react-icons/all-files/fa/FaCartPlus";
import { AiOutlineEye } from "@react-icons/all-files/ai/AiOutlineEye";
import { AiOutlineHeart } from "@react-icons/all-files/ai/AiOutlineHeart";
import { BiDollar } from "@react-icons/all-files/bi/BiDollar";
import { FaShoppingBasket } from "@react-icons/all-files/fa/FaShoppingBasket";
import { Link } from "react-router-dom";
const Products = () => {
  return (
    <div className="my-6 p-2 rounded-lg">
      <h3 className="py-3 font-bold font-poppins md:text-xl">
        Popular This Month
      </h3>
      <div className="grid grid-cols-2 gap-3 md:gap-6 my-3 md:grid-cols-4">
        {/* item */}
        <div className="border rounded-md p-1 group shadow-md">
          <div className="relative">
            <img
              src="./images/book2.jpg"
              alt=""
              className="rounded-md shadow-md shadow-gray-400 mx-auto md:w-44"
            />
            <div className="hidden group-hover:block transition-all">
              <div className="absolute top-0 left-0 z-10 w-full h-full backdrop-blur-sm flex justify-center items-center gap-x-6">
                <button className="bg-white text-xl p-1 hover:bg-orange-400 hover:text-white rounded-sm">
                  <AiOutlineHeart />
                </button>
                <Link to={'products/:id/detail'}>
                  <button className="bg-white text-xl p-1 hover:bg-orange-400 hover:text-white rounded-sm">
                    <AiOutlineEye />
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="my-2 space-y-2">
            <span className="text-base line-clamp-1 font-inclusiveSans px-2 group-hover:text-orange-400">
              Tuổi trẻ đáng giá bao nhiêu?Sách hay các bạn trẻ nên đọc
            </span>
            <div className="flex flex-col justify-between items-center">
              <div className="flex justify-center items-center gap-x-3">
                <div className="flex items-center justify-center">
                  <BiDollar className="text-xl" />
                  <span className="font-bold">18.00 </span>
                </div>
                <span className="text-gray-400 text-sm">Đã bán: 1.2k</span>
              </div>

              <span>
                <Rate
                  allowHalf
                  defaultValue={2.5}
                  className="text-xs md:text-sm"
                />
              </span>
            </div>
          </div>
          <div className="mt-3">
            <button className="flex items-center gap-x-3 mx-auto px-3 py-1 rounded-md text-orange-400 border hover:bg-orange-400 hover:text-white">
              <FaShoppingBasket />
              <span>Basket</span>
            </button>
          </div>
        </div>
        {/* item */}
        <div className="border rounded-md p-1 group shadow-md">
          <div className="relative">
            <img
              src="./images/book2.jpg"
              alt=""
              className="rounded-md shadow-md shadow-gray-400 mx-auto md:w-44"
            />
            <div className="hidden group-hover:block transition-all">
              <div className="absolute top-0 left-0 z-10 w-full h-full backdrop-blur-sm flex justify-center items-center gap-x-6">
                <button className="bg-white text-xl p-1 hover:bg-orange-400 hover:text-white rounded-sm">
                  <AiOutlineHeart />
                </button>
                <Link to={'products/:id/detail'}>
                  <button className="bg-white text-xl p-1 hover:bg-orange-400 hover:text-white rounded-sm">
                    <AiOutlineEye />
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="my-2 space-y-2">
            <span className="text-base line-clamp-1 font-inclusiveSans px-2 group-hover:text-orange-400">
              Tuổi trẻ đáng giá bao nhiêu?Sách hay các bạn trẻ nên đọc
            </span>
            <div className="flex flex-col justify-between items-center">
              <div className="flex justify-center items-center gap-x-3">
                <div className="flex items-center justify-center">
                  <BiDollar className="text-xl" />
                  <span className="font-bold">18.00 </span>
                </div>
                <span className="text-gray-400 text-sm">Đã bán: 1.2k</span>
              </div>

              <span>
                <Rate
                  allowHalf
                  defaultValue={2.5}
                  className="text-xs md:text-sm"
                />
              </span>
            </div>
          </div>
          <div className="mt-3">
            <button className="flex items-center gap-x-3 mx-auto px-3 py-1 rounded-md text-orange-400 border hover:bg-orange-400 hover:text-white">
              <FaShoppingBasket />
              <span>Basket</span>
            </button>
          </div>
        </div>
        {/* item */}
        <div className="border rounded-md p-1 group shadow-md">
          <div className="relative">
            <img
              src="./images/book2.jpg"
              alt=""
              className="rounded-md shadow-md shadow-gray-400 mx-auto md:w-44"
            />
            <div className="hidden group-hover:block transition-all">
              <div className="absolute top-0 left-0 z-10 w-full h-full backdrop-blur-sm flex justify-center items-center gap-x-6">
                <button className="bg-white text-xl p-1 hover:bg-orange-400 hover:text-white rounded-sm">
                  <AiOutlineHeart />
                </button>
                <Link to={'products/:id/detail'}>
                  <button className="bg-white text-xl p-1 hover:bg-orange-400 hover:text-white rounded-sm">
                    <AiOutlineEye />
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="my-2 space-y-2">
            <span className="text-base line-clamp-1 font-inclusiveSans px-2 group-hover:text-orange-400">
              Tuổi trẻ đáng giá bao nhiêu?Sách hay các bạn trẻ nên đọc
            </span>
            <div className="flex flex-col justify-between items-center">
              <div className="flex justify-center items-center gap-x-3">
                <div className="flex items-center justify-center">
                  <BiDollar className="text-xl" />
                  <span className="font-bold">18.00 </span>
                </div>
                <span className="text-gray-400 text-sm">Đã bán: 1.2k</span>
              </div>

              <span>
                <Rate
                  allowHalf
                  defaultValue={2.5}
                  className="text-xs md:text-sm"
                />
              </span>
            </div>
          </div>
          <div className="mt-3">
            <button className="flex items-center gap-x-3 mx-auto px-3 py-1 rounded-md text-orange-400 border hover:bg-orange-400 hover:text-white">
              <FaShoppingBasket />
              <span>Basket</span>
            </button>
          </div>
        </div>
        {/* item */}
        <div className="border rounded-md p-1 group shadow-md">
          <div className="relative">
            <img
              src="./images/book2.jpg"
              alt=""
              className="rounded-md shadow-md shadow-gray-400 mx-auto md:w-44"
            />
            <div className="hidden group-hover:block transition-all">
              <div className="absolute top-0 left-0 z-10 w-full h-full backdrop-blur-sm flex justify-center items-center gap-x-6">
                <button className="bg-white text-xl p-1 hover:bg-orange-400 hover:text-white rounded-sm">
                  <AiOutlineHeart />
                </button>
                <Link to={'products/:id/detail'}>
                  <button className="bg-white text-xl p-1 hover:bg-orange-400 hover:text-white rounded-sm">
                    <AiOutlineEye />
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="my-2 space-y-2">
            <span className="text-base line-clamp-1 font-inclusiveSans px-2 group-hover:text-orange-400">
              Tuổi trẻ đáng giá bao nhiêu?Sách hay các bạn trẻ nên đọc
            </span>
            <div className="flex flex-col justify-between items-center">
              <div className="flex justify-center items-center gap-x-3">
                <div className="flex items-center justify-center">
                  <BiDollar className="text-xl" />
                  <span className="font-bold">18.00 </span>
                </div>
                <span className="text-gray-400 text-sm">Đã bán: 1.2k</span>
              </div>

              <span>
                <Rate
                  allowHalf
                  defaultValue={2.5}
                  className="text-xs md:text-sm"
                />
              </span>
            </div>
          </div>
          <div className="mt-3">
            <button className="flex items-center gap-x-3 mx-auto px-3 py-1 rounded-md text-orange-400 border hover:bg-orange-400 hover:text-white">
              <FaShoppingBasket />
              <span>Basket</span>
            </button>
          </div>
        </div>
        {/* item */}
        <div className="border rounded-md p-1 group shadow-md">
          <div className="relative">
            <img
              src="./images/book2.jpg"
              alt=""
              className="rounded-md shadow-md shadow-gray-400 mx-auto md:w-44"
            />
            <div className="hidden group-hover:block transition-all">
              <div className="absolute top-0 left-0 z-10 w-full h-full backdrop-blur-sm flex justify-center items-center gap-x-6">
                <button className="bg-white text-xl p-1 hover:bg-orange-400 hover:text-white rounded-sm">
                  <AiOutlineHeart />
                </button>
                <Link to={'products/:id/detail'}>
                  <button className="bg-white text-xl p-1 hover:bg-orange-400 hover:text-white rounded-sm">
                    <AiOutlineEye />
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="my-2 space-y-2">
            <span className="text-base line-clamp-1 font-inclusiveSans px-2 group-hover:text-orange-400">
              Tuổi trẻ đáng giá bao nhiêu?Sách hay các bạn trẻ nên đọc
            </span>
            <div className="flex flex-col justify-between items-center">
              <div className="flex justify-center items-center gap-x-3">
                <div className="flex items-center justify-center">
                  <BiDollar className="text-xl" />
                  <span className="font-bold">18.00 </span>
                </div>
                <span className="text-gray-400 text-sm">Đã bán: 1.2k</span>
              </div>

              <span>
                <Rate
                  allowHalf
                  defaultValue={2.5}
                  className="text-xs md:text-sm"
                />
              </span>
            </div>
          </div>
          <div className="mt-3">
            <button className="flex items-center gap-x-3 mx-auto px-3 py-1 rounded-md text-orange-400 border hover:bg-orange-400 hover:text-white">
              <FaShoppingBasket />
              <span>Basket</span>
            </button>
          </div>
        </div>
        {/* item */}
        <div className="border rounded-md p-1 group shadow-md">
          <div className="relative">
            <img
              src="./images/book2.jpg"
              alt=""
              className="rounded-md shadow-md shadow-gray-400 mx-auto md:w-44"
            />
            <div className="hidden group-hover:block transition-all">
              <div className="absolute top-0 left-0 z-10 w-full h-full backdrop-blur-sm flex justify-center items-center gap-x-6">
                <button className="bg-white text-xl p-1 hover:bg-orange-400 hover:text-white rounded-sm">
                  <AiOutlineHeart />
                </button>
                <Link to={'products/:id/detail'}>
                  <button className="bg-white text-xl p-1 hover:bg-orange-400 hover:text-white rounded-sm">
                    <AiOutlineEye />
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="my-2 space-y-2">
            <span className="text-base line-clamp-1 font-inclusiveSans px-2 group-hover:text-orange-400">
              Tuổi trẻ đáng giá bao nhiêu?Sách hay các bạn trẻ nên đọc
            </span>
            <div className="flex flex-col justify-between items-center">
              <div className="flex justify-center items-center gap-x-3">
                <div className="flex items-center justify-center">
                  <BiDollar className="text-xl" />
                  <span className="font-bold">18.00 </span>
                </div>
                <span className="text-gray-400 text-sm">Đã bán: 1.2k</span>
              </div>

              <span>
                <Rate
                  allowHalf
                  defaultValue={2.5}
                  className="text-xs md:text-sm"
                />
              </span>
            </div>
          </div>
          <div className="mt-3">
            <button className="flex items-center gap-x-3 mx-auto px-3 py-1 rounded-md text-orange-400 border hover:bg-orange-400 hover:text-white">
              <FaShoppingBasket />
              <span>Basket</span>
            </button>
          </div>
        </div>
        {/* item */}
        <div className="border rounded-md p-1 group shadow-md">
          <div className="relative">
            <img
              src="./images/book2.jpg"
              alt=""
              className="rounded-md shadow-md shadow-gray-400 mx-auto md:w-44"
            />
            <div className="hidden group-hover:block transition-all">
              <div className="absolute top-0 left-0 z-10 w-full h-full backdrop-blur-sm flex justify-center items-center gap-x-6">
                <button className="bg-white text-xl p-1 hover:bg-orange-400 hover:text-white rounded-sm">
                  <AiOutlineHeart />
                </button>
                <Link to={'products/:id/detail'}>
                  <button className="bg-white text-xl p-1 hover:bg-orange-400 hover:text-white rounded-sm">
                    <AiOutlineEye />
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="my-2 space-y-2">
            <span className="text-base line-clamp-1 font-inclusiveSans px-2 group-hover:text-orange-400">
              Tuổi trẻ đáng giá bao nhiêu?Sách hay các bạn trẻ nên đọc
            </span>
            <div className="flex flex-col justify-between items-center">
              <div className="flex justify-center items-center gap-x-3">
                <div className="flex items-center justify-center">
                  <BiDollar className="text-xl" />
                  <span className="font-bold">18.00 </span>
                </div>
                <span className="text-gray-400 text-sm">Đã bán: 1.2k</span>
              </div>

              <span>
                <Rate
                  allowHalf
                  defaultValue={2.5}
                  className="text-xs md:text-sm"
                />
              </span>
            </div>
          </div>
          <div className="mt-3">
            <button className="flex items-center gap-x-3 mx-auto px-3 py-1 rounded-md text-orange-400 border hover:bg-orange-400 hover:text-white">
              <FaShoppingBasket />
              <span>Basket</span>
            </button>
          </div>
        </div>
        {/* item */}
        <div className="border rounded-md p-1 group shadow-md">
          <div className="relative">
            <img
              src="./images/book2.jpg"
              alt=""
              className="rounded-md shadow-md shadow-gray-400 mx-auto md:w-44"
            />
            <div className="hidden group-hover:block transition-all">
              <div className="absolute top-0 left-0 z-10 w-full h-full backdrop-blur-sm flex justify-center items-center gap-x-6">
                <button className="bg-white text-xl p-1 hover:bg-orange-400 hover:text-white rounded-sm">
                  <AiOutlineHeart />
                </button>
                <Link to={'products/:id/detail'}>
                  <button className="bg-white text-xl p-1 hover:bg-orange-400 hover:text-white rounded-sm">
                    <AiOutlineEye />
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="my-2 space-y-2">
            <span className="text-base line-clamp-1 font-inclusiveSans px-2 group-hover:text-orange-400">
              Tuổi trẻ đáng giá bao nhiêu?Sách hay các bạn trẻ nên đọc
            </span>
            <div className="flex flex-col justify-between items-center">
              <div className="flex justify-center items-center gap-x-3">
                <div className="flex items-center justify-center">
                  <BiDollar className="text-xl" />
                  <span className="font-bold">18.00 </span>
                </div>
                <span className="text-gray-400 text-sm">Đã bán: 1.2k</span>
              </div>

              <span>
                <Rate
                  allowHalf
                  defaultValue={2.5}
                  className="text-xs md:text-sm"
                />
              </span>
            </div>
          </div>
          <div className="mt-3">
            <button className="flex items-center gap-x-3 mx-auto px-3 py-1 rounded-md text-orange-400 border hover:bg-orange-400 hover:text-white">
              <FaShoppingBasket />
              <span>Basket</span>
            </button>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default Products;
