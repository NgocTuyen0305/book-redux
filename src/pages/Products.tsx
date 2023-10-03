import { Pagination, Rate, Spin } from "antd";
import { AiOutlineEye } from "@react-icons/all-files/ai/AiOutlineEye";
import { AiOutlineHeart } from "@react-icons/all-files/ai/AiOutlineHeart";
import { FaShoppingBasket } from "@react-icons/all-files/fa/FaShoppingBasket";
import { Link } from "react-router-dom";
import { useGetProductsQuery } from "../redux/api/productApi";
import { IProduct } from "../interfaces/products";
import { useState } from "react";
const Products = () => {
  const [page,setPage] = useState(1);
  const [limit,setLimit] = useState(12);
  const query = {page,limit};
  const { data, isLoading } = useGetProductsQuery(query);
  
  console.log("list products: ", data);
  if (isLoading) {
    return (
      <div className="flex justify-center items-center">
        Loading...
        <Spin />
      </div>
    );
  }
  return (
    <div className="my-6 p-2 rounded-lg">
      <h3 className="py-3 font-bold font-poppins md:text-xl">
        Popular This Month
      </h3>
      <div className="grid grid-cols-2 gap-3 md:gap-6 my-3 md:grid-cols-4">
        {/* item */}
        {data?.products?.map((product:IProduct) => {
          return (
            <div className="border p-1 group hover:shadow-md">
              <div className="relative">
                <img
                  src={product?.images[0].response.uploadedFiles[0].url}
                  alt=""
                  className="rounded-md shadow-md shadow-gray-400 mx-auto md:w-44"
                />
                <div className="hidden group-hover:block transition-all">
                  <div className="absolute top-0 left-0 z-10 w-full h-full backdrop-blur-sm flex justify-center items-center gap-x-6">
                    <button className="bg-white text-xl p-1 hover:bg-orange-400 hover:text-white rounded-sm">
                      <AiOutlineHeart />
                    </button>
                    <Link to={`products/${product._id}/detail`}>
                      <button className="bg-white text-xl p-1 hover:bg-orange-400 hover:text-white rounded-sm">
                        <AiOutlineEye />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="my-2 space-y-2">
                <span className="text-base line-clamp-1 font-poppins px-2 group-hover:text-orange-400 text-center">
                  {product.name}
                </span>
                <div className="flex flex-col justify-between items-center">
                  <div className="flex justify-center items-center gap-x-3">
                    <div className="flex items-center justify-center">
                      <span className="font-poppins">{product.price} đ</span>
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
                <button className="flex items-center gap-x-3 mx-auto px-3 py-1 rounded-md text-orange-400 border hover:bg-orange-400 hover:text-white">
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
        defaultPageSize={12}
        onChange={(page) => setPage(page)}
        total={data?.pagination?.totalItems}
        className="text-center my-6"
      />
    </div>
  );
};

export default Products;
