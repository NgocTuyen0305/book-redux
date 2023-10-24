import React, { useEffect, useState } from "react";
import { useGetShoppingQuery } from "../../redux/api/shoppingApi";
import { Button, Empty } from "antd";
import LottieLoading from "../../effect/LottieLoading";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hook";
import { setIdOrder } from "../../redux/slices/feedbackSlice";
import { setDelivered } from "../../redux/slices/badgeOrderSlice";

const DeliveredOrder = () => {
  const { data, isLoading, error } = useGetShoppingQuery();
  // console.log("processing data: ", data);

  const [checkDelivered, setCheckDelivered] = useState();
  const [ProductDelivered, setProducDelivered] = useState();
  // KIỂM TRA NGƯỜI DÙNG CÓ MUA SẢN PHẨM NÀY KHÔNG
  const { user } = useAppSelector((state) => state.Authentication);
  // console.log("ProductDelivered ", ProductDelivered);
  // console.log("checkDelivered ", checkDelivered);
  const dispatch = useAppDispatch();
  useEffect(() => {
    (async () => {
      const lengthProductDelivered = await ProductDelivered?.map(
        (item) => item.productOrder.length
      );
      // console.log('lengthProductDelivered',lengthProductDelivered)
      const [length] = lengthProductDelivered;
      dispatch(setDelivered(length));
    })();
  }, [ProductDelivered, dispatch]);
  useEffect(() => {
    (async () => {
      const checkUserOrder = await data?.filter(
        (item) => item.userId === user?._id
      );
      const mapData = await checkUserOrder?.map((items) => {
        return items.isDelivered;
      });
      const [checkDelivered] = mapData;
      setCheckDelivered(checkDelivered);
      if (checkDelivered) {
        setProducDelivered(checkUserOrder);
      }
    })();
  }, [data, user, checkDelivered]);

  if (error || ProductDelivered === undefined) {
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
      {ProductDelivered?.map((items) => (
        <div key={items?._id}>
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
                    <Button size="small">Chi tiết đơn</Button>
                    <Link
                      to={`/products/${item._id}/detail`}
                      onClick={() => dispatch(setIdOrder(items._id))}
                    >
                      <Button size="small">Đánh giá sản phẩm</Button>
                    </Link>
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

export default DeliveredOrder;
