import React, { useEffect, useState } from "react";
import { useGetShoppingQuery } from "../../redux/api/shoppingApi";
import { Button, Empty } from "antd";
import LottieLoading from "../../effect/LottieLoading";
import { useAppSelector } from "../../app/hook";

const ProcessingOrder = () => {
  const { data, isLoading, error } = useGetShoppingQuery();
  const [checkProcessing, setCheckProcessing] = useState();
  const [ProductProcessing, setProducProcessing] = useState();
  // KIỂM TRA NGƯỜI DÙNG CÓ MUA SẢN PHẨM NÀY KHÔNG
  const { user } = useAppSelector((state) => state.Authentication);
  // console.log("ProductProcessing ", ProductProcessing);
  // console.log("checkProcessing ", checkProcessing);
  useEffect(() => {
    (async () => {
      const checkUserOrder = await data?.filter(
        (item) => item.userId === user?._id
      );
      const mapData = await checkUserOrder?.map((items) => {
        return items.isProcessing;
      });
      const [checkDelivered] = mapData;
      setCheckProcessing(checkDelivered);
      if (checkDelivered) {
        setProducProcessing(checkUserOrder);
      }
    })();
  }, [data, user, setCheckProcessing]);

   
  if (error || ProductProcessing === undefined) {
    return <Empty />;
  }
  if (isLoading) {
    return (
      <div className="flex justify-center items-center">
        <LottieLoading />
      </div>
    );
  }
  return (
    <div>
      {ProductProcessing?.map((items) => (
        <div key={items?._id}>
          <h2 className="text-blue-500">Đang xử lí đơn hàng</h2>
          <div className="">
            {items?.productOrder?.map((item) => (
              <div
                className="p-2 border-b flex md:justify-between"
                key={item._id}
              >
                <div className="flex justify-between ">
                  <div className="">
                    <img
                      src={item.images[0].response.uploadedFiles[0].url}
                      alt=""
                      className="md:w-24 w-20"
                    />
                  </div>
                  <div className="space-y-3">
                    <div className="flex-none mx-auto">
                      {item.name} , SL: x{item.quantity}
                    </div>
                    <div className="text-gray-500 text-xs">
                      {items?.updatedAt}
                    </div>
                  </div>
                </div>
                <div className=" p-2 space-y-3">
                  <div className="text-right">
                    <div className="">{item.price / 1000 + ".000"} đ</div>
                    Tổng tiền: {items.totalPrice / 1000 + ".000 đ"}
                  </div>
                  <div className="flex space-x-3">
                    <Button size="small">Theo dõi đơn</Button>
                    <Button size="small">Hủy đơn</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProcessingOrder;
