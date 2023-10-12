import { FaShoppingBasket } from "@react-icons/all-files/fa/FaShoppingBasket";
import { Pagination, Rate, Spin, message } from "antd";
import { AiOutlineEye } from "@react-icons/all-files/ai/AiOutlineEye";
import { AiOutlineHeart } from "@react-icons/all-files/ai/AiOutlineHeart";
import { useAppDispatch } from "../app/hook";
import { addItemCart } from "../redux/slices/cartSlice";
import { IProduct } from "../interfaces/products";
import { Link } from "react-router-dom";
import { useState } from "react";

const SimilarProduct = ({listSilimar}) => {
  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);
  // console.log('list silimar: ',listSilimar)
  const dispatch = useAppDispatch();

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = listSilimar.slice(startIndex, endIndex);

  return (
    <div>
      <div className="text-xl font-inclusiveSans mt-12">Sản phẩm tương tự</div>
      <div className="grid grid-cols-2 gap-3 md:gap-6 my-3 md:grid-cols-4">
        {/* item */}
        {currentData?.map((product: IProduct) => {
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
        current={currentPage}
        pageSize={itemsPerPage}
        total={listSilimar.length}
        onChange={(page)=>{
          setCurrentPage(page)
        }}
        className="text-center my-6"
      />
    </div>
  );
};

export default SimilarProduct;