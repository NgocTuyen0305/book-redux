import React from "react";
import { Carousel } from "antd";

const SliderPage = () => {
  return (
    <div className="px-2 my-4">
      <div className="shadow-xl p-1 rounded-md">
        <Carousel autoplay dots={false}>
          <div className="relative">
            <img src="./images/banner-slide1.jpg" alt=""  className="rounded-md"/>
            <div className="absolute text-white bottom-0 p-2">
              <span className="font-dancingScript text-xl">Đắc Nhân Tâm</span>
              <p className="text-xs">
              Biết khen ngợi và cảm ơn những người xung quanh một cách chân thành chính là chiếc đũa thần tạo nên thân ái và nguồn động viên tinh thần to lớn
              </p>
            </div>
          </div>
          <div className="relative">
            <img src="./images/banner-slide2.jpg" alt="" className="rounded-md"/>
            <div className="absolute text-white bottom-0 p-2">
              <span className="font-dancingScript text-xl">Nhà giả kim</span>
              <p className="text-xs">
              Đừng lãng phí thời gian giải thích, mọi người chỉ thích nghe những gì họ muốn nghe thôi.
              </p>
            </div>
          </div>
          <div className="relative">
            <img src="./images/banner-slide3.jpg" alt="" className="rounded-md"/>
            <div className="absolute text-white bottom-0 p-2">
              <span className="font-dancingScript text-xl">Hành trình về phương Đông</span>
              <p className="text-xs">
              Chúng ta càng ham muốn lại càng sợ hãi và càng sợ hãi lại càng đau khổ.
              </p>
            </div>
          </div>
          
        </Carousel>
      </div>
    </div>
  );
};

export default SliderPage;
