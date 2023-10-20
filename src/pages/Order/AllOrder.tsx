import React from "react";
import { useGetShoppingQuery } from "../../redux/api/shoppingApi";
import LottieLoading from "../../effect/LottieLoading";
import { Empty } from "antd";

const AllOrder = () => {
  const { data, isLoading, error } = useGetShoppingQuery();

  const mapData = data?.map((items) => {
    return items;
  });
  const currenData = mapData?.filter((item) => {
    return item?.notProcessed
  });
  console.log(currenData);

  if (error || currenData?.length === 0) {
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
    <div className="space-y-6">
      {currenData?.map((itemOrder) =>
        <div className="" key={itemOrder._id}>
        <div className="">Đơn Hàng: #{itemOrder._id}</div>
        {itemOrder?.productOrder?.map((item) => (
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
                  {itemOrder?.updatedAt}
                </div>
              </div>
            </div>
            <div className=" p-2 space-y-3">
              <div className="text-right">
                <div className="">{item.price / 1000 + ".000"} đ</div>
                Tổng tiền: {itemOrder.totalPrice / 1000 + ".000 đ"}
              </div>
              <div className="space-x-3">
                <button className="md:text-base text-xs py-1 px-3 border rounded-md bg-black/5 shadow-sm hover:text-[#3AA6B9]">
                  Theo dõi đơn
                </button>
                <button className="md:text-base text-xs py-1 px-3 border rounded-md bg-black/5 shadow-sm hover:text-[#3AA6B9]">
                  Hủy đơn hàng
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      )}
    </div>
  );
};

export default AllOrder;
