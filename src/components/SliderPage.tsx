import React from "react";
import { Carousel } from "antd";
import '../App.css'
const styleSlide: React.CSSProperties = {
  backgroundImage: `url('./images/background-slide.jpg')`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover'
}
const SliderPage = () => {
  return (
    <div className="md:mt-8">
      <div className="shadow-xl md:h-72 sm:h-[160px]">
        <Carousel autoplay dots={false} style={styleSlide}>
          <div>
            <div className="md:h-72  bg-no-repeat bg-cover grid grid-cols-2 items-center justify-around p-2">
              <div className="flex flex-col md:gap-y-6 items-center">
                <h3 className="font-poppins md:text-xl font-bold li sm:text-xs">ĐỪNG LỰA CHỌN AN NHÀN KHI CÒN TRẺ</h3>
                <p className="font-dancingScript md:text-2xl font-bold sm:text-xs">"Hành trình vạn dặm khởi đầu từ từng bước chân nhỏ."</p>
                <span className="font-dancingScript md:text-xl font-bold sm:text-xs">Cảnh Thiên.</span>
              </div>
              <div className="">
                <img
                  src="./images/book1.webp"
                  alt=""
                  className="md:w-36 sm:w-24 object-cover sm:mx-auto shadow-md shadow-gray-700 skew-y-3"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="md:h-72  bg-no-repeat bg-cover grid grid-cols-2 items-center justify-around p-2">
              <div className="flex flex-col md:gap-y-6 items-center">
                <h3 className="font-poppins md:text-xl font-bold li sm:text-xs">ĐỪNG LỰA CHỌN AN NHÀN KHI CÒN TRẺ</h3>
                <p className="font-dancingScript md:text-2xl font-bold sm:text-xs">"Hành trình vạn dặm khởi đầu từ từng bước chân nhỏ."</p>
                <span className="font-dancingScript md:text-xl font-bold sm:text-xs">Cảnh Thiên.</span>
              </div>
              <div className="">
                <img
                  src="./images/book1.webp"
                  alt=""
                  className="md:w-36 sm:w-24 object-cover sm:mx-auto shadow-md shadow-gray-700 skew-y-3"
                />
              </div>
            </div>
          </div>
         
          
        </Carousel>
      </div>
    </div>
  );
};

export default SliderPage;
