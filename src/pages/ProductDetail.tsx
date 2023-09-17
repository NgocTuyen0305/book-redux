import { Rate } from "antd";
import React from "react";
import Slider from "react-slick";
import '../App.css'
const ProductDetail = () => {
  const baseUrl = '../../images'
  const settings = {
    customPaging: function(i) {
      return (
        <a className="w-56">
          <img src={`${baseUrl}/book2-detail-${i + 1}.jpg`} />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="p-2">
      <h2 className="font-bold font-poppins">ProductDetail</h2>
      <div className="">
        <div className="py-3 border my-2 shadow-md rounded-md container-img-detail">
          {/* <img src="../../" alt="" className="mx-auto" /> */}
          <Slider {...settings}>
          <div>
            <img src={baseUrl + "/book2-detail-1.jpg"} className="w-full object-cover"/>
          </div>
          <div>
            <img src={baseUrl + "/book2-detail-2.jpg"} className="w-full object-cover"/>
          </div>
          <div>
            <img src={baseUrl + "/book2-detail-3.jpg"} className="w-full object-cover"/>
          </div>
        </Slider>
        </div>
        <div className="">
          <span className="text-xl font-bold font-poppins line-clamp-2">
            Tuổi trẻ đáng bao nhiêu? Sách hay những bạn trẻ nên đọc để không lãng phí tuổi trẻ
          </span>
        </div>
        <div className="flex flex-col space-y-3">
          <span>
            <Rate allowHalf defaultValue={2.5} className="text-base" />
          </span>
          <span className="text-gray-400">3.2k lượt bán</span>
        </div>
        <div className="py-2 space-x-3">
          <span className="text-gray-400">Thể loại:</span>
          <span className="bg-pink-700 text-white px-2 py-1 rounded-full text-xs">
            Cuộc sống
          </span>
          <span className="bg-blue-400 text-white px-2 py-1 rounded-full text-xs">
            Văn học
          </span>
        </div>
        <div className="py-2 flex justify-between border-b-2 shadow-md rounded-md">
          <span className="text-2xl font-bold">$18</span>
          <div className="space-x-3">
            <button className="py-1 px-3 border shadow-md bg-[#E26868] rounded-md text-white">
              Add To Cart
            </button>
            <button className="py-1 px-3 border shadow-md bg-[#E26868] rounded-md text-white">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
