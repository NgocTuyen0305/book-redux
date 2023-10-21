import React from "react";
import {
  useGetShoppingQuery,
  useUpdateShoppingMutation,
} from "../../redux/api/shoppingApi";
import LottieLoading from "../../effect/LottieLoading";
import { Button, Empty, notification } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const AllOrder = () => {
  const { data, isLoading, error } = useGetShoppingQuery();
  const [updateShopping, { isLoading: UpdateOrderLoading }] =
    useUpdateShoppingMutation();
  const mapData = data?.map((items) => {
    return items;
  });
  const currenData = mapData?.filter((item) => {
    return !item?.notProcessed;
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
      {currenData?.map((itemOrder) => (
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
                <div className="flex space-x-3">
                  <Button size="small">Theo dõi đơn</Button>
                  <Button
                    size="small"
                    onClick={() =>
                      updateShopping({ deleted: true, _id: itemOrder._id })
                        .unwrap()
                        .then(() => {
                          return notification.success({
                            message:
                              "Đã gửi yêu cầu vui lòng chờ shop phản hồi!",
                          });
                        })
                    }
                  >
                    {UpdateOrderLoading ? <LoadingOutlined /> : "Hủy đơn"}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default AllOrder;
