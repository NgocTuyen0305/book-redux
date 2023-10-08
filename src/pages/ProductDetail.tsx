import { Badge, Button, Rate, Spin, Tag, theme } from "antd";
import React, { useState } from "react";
import Slider from "react-slick";
import "../App.css";
import { InboxOutlined, MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../redux/api/productApi";
import SimilarProduct from "../components/SimilarProduct";
const ProductDetail = () => {
  const { useToken } = theme;
  const { token } = useToken();
  const { bgColormain } = token;
  const [count, setCount] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const { id } = useParams();
  const { data: productDetail, isLoading } = useGetProductByIdQuery(id);
  // console.log("product detail: ", productDetail);
  const ListImage = productDetail?.data?.images.map((items) => {
    return items?.response?.uploadedFiles[0].url;
  });
  // console.log("list image: ", ListImage);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center">
        Loading...
        <Spin />
      </div>
    );
  }

  const settings = {
    customPaging: () => {
      return (
        <div>
          {ListImage.map((item, index) => {
            return (
              <img
                src={item}
                alt=""
                key={index}
                onClick={() => setActiveSlide(index)}
              />
            );
          })}
        </div>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const increase = () => {
    setCount(count + 1);
  };

  const decline = () => {
    let newCount = count - 1;
    if (newCount < 0) {
      newCount = 0;
    }
    setCount(newCount);
  };
  return (
    <div className="p-2 md:max-w-6xl md:mx-auto ">
      {" "}
      <div className="md:grid md:grid-cols-3 gap-3 bg-white">
        <div className="p-2 container-img-detail">
          <Slider {...settings}>
            {ListImage.map((item, index) => {
              return (
                <div className="" key={index}>
                  <img src={item} alt="" />
                </div>
              );
            })}
          </Slider>
        </div>
        <div className="p-2 space-y-3">
          <div className="">
            <span className="text-sm text-gray-400">
              Tác giả: {productDetail?.data?.author}
            </span>
            <span className="md:text-xl font-bold font-poppins line-clamp-2">
              {productDetail?.data?.name}
            </span>
          </div>
          <div className="flex sm:flex-col space-y-3">
            <span>
              <Rate
                allowHalf
                defaultValue={productDetail?.data?.rate}
                className="text-base"
              />
            </span>
            <span className="text-gray-400">
              {productDetail?.data?.sold}k lượt bán
            </span>
          </div>
          <div className="py-2 space-x-3">
            <span className="text-gray-400">Thể loại:</span>
            <Tag color="red">{productDetail?.data?.categoryId?.name}</Tag>
          </div>
          <div className="">
            <span className="font-poppins">Mô tả sản phẩm:</span>
            <p className="text-gray-500 line-clamp-5">
              {productDetail?.data?.description}
            </p>
          </div>
        </div>
        <div className="p-2 sm:mt-4 md:mt-0 space-y-6">
          <div className="space-y-3">
            <span className="font-poppins text-xl">Số lượng</span>
            <div className="md:flex items-center space-x-3">
              <Button icon={<PlusOutlined />} onClick={increase}></Button>
              <Badge count={count}>
                <InboxOutlined className="text-xl" />
              </Badge>
              <Button icon={<MinusOutlined />} onClick={decline}></Button>
            </div>
          </div>
          <div className="md:flex flex-col space-y-3 space-x-3">
            <span className="md:text-2xl">Tạm tính</span>
            <span className="font-poppins text-red-500">
              {productDetail?.data?.price} đ
            </span>
          </div>
          <div className="font-poppins md:flex flex-col gap-3 items-center space-x-3">
            <button className={`py-2 px-4 hover:text-white hover:bg-[${bgColormain}] border border-[${bgColormain}]`}>
              MUA NGAY
            </button>
            <button className={`py-2 px-4 hover:text-white hover:bg-[${bgColormain}] border border-[${bgColormain}]`}>
              THÊM VÀO GIỎ HÀNG
            </button>
          </div>
        </div>
      </div>
      <SimilarProduct productsCate={productDetail?.data?.categoryId?.products}/>
    </div>
  );
};

export default ProductDetail;
