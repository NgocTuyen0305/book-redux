import { Badge, Button, Rate, Tag, message, theme } from "antd";
import { useState } from "react";
import { InboxOutlined, MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../redux/api/productApi";
import SimilarProduct from "../components/SimilarProduct";
import { IProduct } from "../interfaces/products";
import { useAppDispatch } from "../app/hook";
import LottieLoading from "../effect/LottieLoading";
import { addItemCart } from "../redux/slices/cartSlice";
import { addItemsCart } from "../redux/slices/orderSlice";
const ProductDetail = () => {
  const { useToken } = theme;
  const { token } = useToken();
  const { bgColormain } = token;
  const [count, setCount] = useState(1);
  const [currentImage, setCurrentImage] = useState<number | string>(0);
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { data: productDetail, isLoading } = useGetProductByIdQuery(id);
  // console.log('count product: ',count)
  const listSilimar = productDetail?.listProductSimilar?.filter(
    (item: IProduct) => {
      return item._id !== id;
    }
  );
  // console.log("product detail: ", productDetail?.data);

  const ListImage = productDetail?.data?.images.map((items) => {
    return items?.response?.uploadedFiles[0].url;
  });
  // console.log("list image: ", ListImage);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center">
        <LottieLoading />
      </div>
    );
  }
  const gotoImage = (index: number | string) => {
    setCurrentImage(index);
  };
  const increase = () => {
    setCount(count + 1);
  };

  const decline = () => {
    let newCount = count - 1;
    if (newCount < 1) {
      newCount = 1;
    }
    setCount(newCount);
  };
  return (
    <div className="p-2 md:max-w-6xl md:mx-auto ">
      {" "}
      <div className="md:grid md:grid-cols-3 gap-3 bg-white">
        <div className="p-2 space-y-6">
          {/* slider image product detail */}
          <div
            className="duration-500 ease-in-out h-64 bg-center bg-cover"
            style={{ backgroundImage: `url(${ListImage[currentImage]})` }}
          >
            {/* <img src={ListImage[currentImage]} alt="" /> */}
          </div>
          <div className="grid grid-cols-3 gap-8">
            {ListImage.map((image, index: number | string) => {
              return (
                <button onClick={() => gotoImage(index)} key={index}>
                  <img src={image} alt="" />
                </button>
              );
            })}
          </div>
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
              {(productDetail?.data?.price * count) / 1000 + ".000"} đ
            </span>
          </div>
          <div className="font-poppins md:flex flex-col gap-3 items-center space-x-3">
            <Button
              onClick={() =>
                dispatch(
                  addItemsCart([{ ...productDetail?.data, quantity: count }])
                )
              }
            >
              <a href={"/order"}>MUA NGAY</a>
            </Button>
            <Button
              onClick={() => {
                dispatch(
                  addItemCart({ ...productDetail?.data, quantity: count })
                );
                message.success("Đã thêm vào giỏ hàng!");
              }}
            >THÊM VÀO GIỎ HÀNG</Button>
          </div>
        </div>
      </div>
      <SimilarProduct listSilimar={listSilimar} />
    </div>
  );
};

export default ProductDetail;
