import {
  Badge,
  Button,
  Pagination,
  Rate,
  Spin,
  Tag,
  message,
  theme,
} from "antd";
import React, { useState } from "react";
import Slider from "react-slick";
import "../App.css";
import { InboxOutlined, MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../redux/api/productApi";
import { addItemCart } from "../redux/slices/cartSlice";
import { FaShoppingBasket } from "@react-icons/all-files/fa/FaShoppingBasket";
import { AiOutlineHeart } from "@react-icons/all-files/ai/AiOutlineHeart";
import { AiOutlineEye } from "@react-icons/all-files/ai/AiOutlineEye";
import { useAppDispatch } from "../app/hook";
const ProductDetail = () => {
  const { useToken } = theme;
  const { token } = useToken();
  const { bgColormain } = token;
  const [count, setCount] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [limitPage, setlimitPage] = useState(8);

  const { id } = useParams();
  const { data: productDetail, isLoading } = useGetProductByIdQuery(id);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
 
  // console.log("list currents product: ", currentProducts);

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
            <button
              className={`py-2 px-4 hover:text-white hover:bg-[${bgColormain}] border border-[${bgColormain}]`}
            >
              MUA NGAY
            </button>
            <button
              className={`py-2 px-4 hover:text-white hover:bg-[${bgColormain}] border border-[${bgColormain}]`}
            >
              THÊM VÀO GIỎ HÀNG
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="text-xl font-inclusiveSans mt-12">
          Sản phẩm tương tự
        </div>
        <div className="grid grid-cols-2 gap-3 md:gap-6 my-3 md:grid-cols-4">
          {/* item */}
          {currentProducts?.map((product: IProduct) => {
            return (
              <div
                className="border p-1 group hover:shadow-md bg-white"
                key={product._id}
              >
                <div className="relative">
                  <img
                    src={product?.images[0].response.uploadedFiles[0].url}
                    alt=""
                    className="rounded-md shadow-md shadow-gray-400 mx-auto md:w-44"
                  />
                  <div className="hidden group-hover:block transition-all">
                    <div className="absolute top-0 left-0 z-10 w-full h-full backdrop-blur-sm flex justify-center items-center gap-x-6">
                      <button
                        className={`bg-white text-xl p-1 hover:bg-[#3AA6B9] hover:text-white rounded-sm`}
                      >
                        <AiOutlineHeart />
                      </button>
                      <Link to={`/products/${product._id}/detail`}>
                        <button
                          className={`bg-white text-xl p-1 hover:bg-[#3AA6B9] hover:text-white rounded-sm`}
                        >
                          <AiOutlineEye />
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="my-2 space-y-2">
                  <span
                    className={`text-base line-clamp-1 font-poppins px-2 group-hover:text-[#3AA6B9] text-center`}
                  >
                    {product.name}
                  </span>
                  <div className="flex flex-col justify-between items-center">
                    <div className="flex justify-center items-center gap-x-3">
                      <div className="flex items-center justify-center">
                        <span className="font-poppins">
                          {product.price / 1000 + ".000"} đ
                        </span>
                      </div>
                      <span className="text-gray-400 text-sm">
                        Đã bán: {product.sold}k
                      </span>
                    </div>

                    <span>
                      <Rate
                        allowHalf
                        defaultValue={product.rate}
                        className="text-xs md:text-sm"
                      />
                    </span>
                  </div>
                </div>
                <div className="mt-3">
                  <button
                    className={`flex items-center gap-x-3 mx-auto px-3 py-1 rounded-md border hover:bg-[#3AA6B9] hover:text-white text-[#3AA6B9]`}
                    onClick={() => {
                      dispatch(addItemCart({ ...product, quantity: 1 }));
                      message.success("Đã thêm vào giỏ hàng!");
                    }}
                  >
                    <FaShoppingBasket />
                    <span>Basket</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <Pagination
          defaultCurrent={1}
          defaultPageSize={4}
          onChange={(page, limit) => {
            navigate(`?page=${page}&limit=${limit}`);
            setCurrentPage(page);
            setlimitPage(limit);
          }}
          total={currentProducts.length}
          className="text-center my-6"
        />
      </div>
    </div>
  );
};

export default ProductDetail;
