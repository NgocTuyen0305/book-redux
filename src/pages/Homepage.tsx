import { Rate } from "antd";
import Slider from "react-slick";
import Products from "./Products";
import ProductTrending from "./ProductTrending";
import SliderPage from "../components/SliderPage";
import "../App.css";
import { useGetProductsQuery } from "../redux/api/productApi";
import { IProduct } from "../interfaces/products";
import { Link } from "react-router-dom";
import LottieLoading from "../effect/LottieLoading";
const Homepage = () => {
  const { data, isLoading } = useGetProductsQuery({
    _order: "desc",
    _limit: 5,
  });
  if (isLoading) {
    return (
      <div className="flex justify-center items-center">
        <LottieLoading/>
      </div>
    );
  }
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
          {data?.products?.map((product: IProduct) => {
            return (
              <div className="" key={product._id}>
                <div className="md:border md:rounded-md md:shadow-md bg-white mt-12 p-2">
                  <div className="md:grid grid-cols-2 gap-3">
                    <div className="">
                      <img
                        src={product?.images[0].response.uploadedFiles[0].url}
                        alt=""
                        className=" md:-translate-y-12 "
                      />
                    </div>
                    <div className="flex flex-col md:gap-y-3 sm:gap-y-1 justify-center ">
                      <span className="line-clamp-1 text-lg sm:text-sm md:text-xl">
                        {product.name}
                      </span>
                      <span className="text-gray-400 sm:text-xs sm:line-clamp-1">
                        {product.author}
                      </span>
                      <span className="sm:hidden md:block">
                        <Rate allowHalf value={product.rate}/>
                      </span>
                      <div className="sm:hidden md:block mx-auto">
                        <Link to={`products/${product._id}/detail`}>
                          <button className="px-6 py-1 shadow-md rounded-md hover:bg-[#3AA6B9] hover:text-white">
                            Views
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="md:line-clamp-3 text-sm text-gray-400 sm:hidden">
                    {product.description}
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
        <Products />
        <ProductTrending />
      </div>
    </div>
  );
};

export default Homepage;
