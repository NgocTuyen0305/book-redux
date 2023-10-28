import { Badge, Button, Rate, Tag, message, theme } from "antd";
import { useEffect, useState } from "react";
import { InboxOutlined, MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../redux/api/productApi";
import SimilarProduct from "../components/SimilarProduct";
import { IProduct } from "../interfaces/products";
import { useAppDispatch } from "../app/hook";
import LottieLoading from "../effect/LottieLoading";
import { addItemCart } from "../redux/slices/cartSlice";
import { addItemsCart } from "../redux/slices/orderSlice";
import FeedBackProducts from "../components/FeedBackProducts";
import { useGetShoppingQuery } from "../redux/api/shoppingApi";
import { useGetUserQuery } from "../redux/api/auth";
import { motion } from "framer-motion";

const ProductDetail = () => {
  const { useToken } = theme;
  const { token } = useToken();
  const { bgColormain } = token;
  const [count, setCount] = useState(1);
  const [currentImage, setCurrentImage] = useState<number | string>(0);
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { data: productDetail, isLoading } = useGetProductByIdQuery(id);
  const { data, isLoading: OrderLoading, error } = useGetShoppingQuery();
  const [userId, setUserId] = useState();
  const { data: user } = useGetUserQuery(userId);
  // kiểm tra người dùng mua sản phẩm này chưa
  const idProductToOrder = user?.user?.products.flat();
  const checkProduct = idProductToOrder?.includes(id);
  // console.log("checkProduct: ",checkProduct)
  useEffect(() => {
    (async () => {
      const idUser = await data?.map((item) => item.userId);
      const [userId] = idUser;
      setUserId(userId);
    })();
  }, [data]);

  const listSilimar = productDetail?.listProductSimilar?.filter(
    (item: IProduct) => {
      return item._id !== id;
    }
  );

  const ListImage = productDetail?.data?.images.map((items) => {
    return items?.response?.uploadedFiles[0].url;
  });

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
      <div className="md:grid md:grid-cols-3 gap-3 bg-white">
        <div className="p-2 space-y-6">
          {/* slider image product detail */}
          <motion.div
            className="duration-500 ease-in-out h-64 bg-center bg-cover"
            style={{ backgroundImage: `url(${ListImage[currentImage]})` }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {/* <img src={ListImage[currentImage]} alt="" /> */}
          </motion.div>
          <div className="grid grid-cols-3 gap-8">
            {ListImage.map((image, index: number | string) => {
              return (
                <motion.button
                  onClick={() => gotoImage(index)}
                  key={index}
                  initial={{ opacity: 0, x: -20, y: -20 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.5, delay:index * 0.1 }}
                >
                  <img src={image} alt="" />
                </motion.button>
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
            >
              THÊM VÀO GIỎ HÀNG
            </Button>
          </div>
        </div>
      </div>
      <FeedBackProducts checkProduct={checkProduct} />
      <SimilarProduct listSilimar={listSilimar} />
    </div>
  );
};

export default ProductDetail;
