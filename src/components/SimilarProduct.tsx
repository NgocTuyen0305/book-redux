import { FaShoppingBasket } from "@react-icons/all-files/fa/FaShoppingBasket";
import { Pagination, Rate, Spin, message } from "antd";
import { AiOutlineEye } from "@react-icons/all-files/ai/AiOutlineEye";
import { AiOutlineHeart } from "@react-icons/all-files/ai/AiOutlineHeart";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../app/hook";
import { IProduct } from "../interfaces/products";
import { addItemCart } from "../redux/slices/cartSlice";
import { useState } from "react";
import QueryUrl from "../utils/QueryUrl";

const SimilarProduct = ({ productSilimar }) => {
  
  console.log("props: ", productSilimar.listProductSimilar);
  // console.log("data product", productSilimar);
  // console.log("pagination :", pagination);

  const dispatch = useAppDispatch();

  return (
   
  );
};

export default SimilarProduct;
