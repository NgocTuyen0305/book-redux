import React, { useEffect, useState } from "react";
import {
  useGetShoppingQuery,
  useUpdateShoppingMutation,
} from "../../redux/api/shoppingApi";
import LottieLoading from "../../effect/LottieLoading";
import { Button, Empty, notification } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { useAppDispatch, useAppSelector } from "../../app/hook";
import { setAllOrder } from "../../redux/slices/badgeOrderSlice";

const AllOrder = () => {
  const { data, isLoading, error } = useGetShoppingQuery();
  const [updateShopping, { isLoading: UpdateOrderLoading }] =
    useUpdateShoppingMutation();
  const [ProductnotProcessed, setProductnotProcessed] = useState();
  // KIỂM TRA NGƯỜI DÙNG CÓ MUA SẢN PHẨM NÀY KHÔNG
  const { user } = useAppSelector((state) => state.Authentication);
  // console.log("ProductnotProcessed ", ProductnotProcessed);
  const dispatch = useAppDispatch();
  useEffect(() => {
    (async () => {
      const lengthProductProcessed = await ProductnotProcessed?.map(
        (item) => item.productOrder.length
      );
      // console.log('lengthProductDelivered',lengthProductDelivered)
      const [length] = lengthProductProcessed;
      dispatch(setAllOrder(length));
    })();
  }, [ProductnotProcessed, dispatch]);

  useEffect(() => {
    (async () => {
      const checkUserOrder = await data?.filter(
        (item) => item.userId === user?._id
      );
      const dataAllOrder = await checkUserOrder?.filter(
        (items) => items.notProcessed === false
      );
      setProductnotProcessed(dataAllOrder)
    })();
  }, [data, user]);

  if (error || ProductnotProcessed === undefined) {
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
      {ProductnotProcessed?.map((itemOrder) => (
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
