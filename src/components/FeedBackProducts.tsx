import { Button, Form, Input, Rate, notification } from "antd";
import React, { useEffect, useState } from "react";
import {
  useCreateFeedbackMutation,
  useGetFeedbackQuery,
} from "../redux/api/feedbackApi";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../app/hook";
import { LoadingOutlined } from "@ant-design/icons";
import LottieLoading from "../effect/LottieLoading";

const FeedBackProducts = ({  checkProduct }) => {
  const { id } = useParams();
  const { user } = useAppSelector((state) => state.Authentication);
  const { data, isLoading, error } = useGetFeedbackQuery(id);
  const [createFeedback, { isLoading: FeedbackLoading, error: ErrorFeedback }] =
    useCreateFeedbackMutation();
  const { idOrder } = useAppSelector((state) => state.FeedbackSlice);
  const [checkFeedback, setCheckFeedback] = useState();
  // console.log("check feedbacked: ", checkFeedback);
  // console.log("checkProduct: ", checkProduct);
  // console.log("checkbought: ", bought);
  // console.log("idOrder: ", idOrder);
  useEffect(() => {
    (async () => {
      const isFeedback = await data?.feedbacks?.map((item) => item.feedbacked);
      const [feedback] = isFeedback;
      setCheckFeedback(feedback);
    })();
  }, [data]);
  useEffect(() => {
    if (ErrorFeedback) {
      return notification.error({
        message: "Comment is error!",
      });
    }
  }, [ErrorFeedback]);
  const onFinish = (value) => {
    createFeedback({
      ...value,
      productId: id,
      userId: user._id,
      orderId: idOrder,
    })
      .unwrap()
      .then(() => {
        notification.success({
          message: "Comment is successly!",
        });
      });
  };

  return (
    <div className="bg-white mt-6 p-2 rounded-sm space-y-3">
      <h2 className="text-xl font-inclusiveSans">Đánh giá sản phẩm</h2>

      <div className="md:flex justify-between ">
        <div className="flex justify-between items-center md:gap-x-6">
          <div className="flex flex-col items-center">
            <span className="md:text-3xl font-bold">
              4.9<span className="text-lg">/5</span>
            </span>
            <span>
              <Rate value={5} className="text-sm" />
            </span>
            <span className="text-gray-400">(1 đánh giá)</span>
          </div>
          <div className="">
            <div className="flex items-center gap-x-4">
              <span>5 sao</span>
              <div className="bg-gray-200 h-2 md:md:w-60 w-40 w-40 relative">
                <div className="absolute h-full w-full bg-orange-500"></div>
              </div>
              <span>100%</span>
            </div>
            <div className="flex items-center gap-x-4">
              <span>4 sao</span>
              <div className="bg-gray-200 h-2 md:w-60 w-40 relative">
                <div className="absolute h-full w-1/5 bg-orange-500"></div>
              </div>
              <span>20%</span>
            </div>
            <div className="flex items-center gap-x-4">
              <span>3 sao</span>
              <div className="bg-gray-200 h-2 md:w-60 w-40"></div>
              <span>0%</span>
            </div>
            <div className="flex items-center gap-x-4">
              <span>2 sao</span>
              <div className="bg-gray-200 h-2 md:w-60 w-40"></div>
              <span>0%</span>
            </div>
            <div className="flex items-center gap-x-4">
              <span>1 sao</span>
              <div className="bg-gray-200 h-2 md:w-60 w-40"></div>
              <span>0%</span>
            </div>
          </div>
        </div>
        {/* Create feedback */}
        {checkProduct ? (
          <div className="">
            <Form layout="vertical" onFinish={onFinish}>
              <Form.Item
                label="Đánh giá"
                name="rating"
                rules={[{ message: "Vui lòng nhập số sao!", required: true }]}
              >
                <Rate />
              </Form.Item>
              <Form.Item
                label="Bình luận"
                name="comment"
                rules={[{ message: "Vui lòng nhập comment!", required: true }]}
              >
                <Input.TextArea style={{ width: 500 }} />
              </Form.Item>
              <Form.Item>
                <Button htmlType="submit">
                  {FeedbackLoading ? <LoadingOutlined /> : "Submit"}
                </Button>
              </Form.Item>
            </Form>
          </div>
        ) : (
          ""
        )}
      </div>
      {/* Feedback */}
      <div className="space-y-6">
        <div className="border-b text-lg font-inclusiveSans">Mới nhất</div>
        {isLoading ? (
          <div className="flex justify-center items-center">
            <LottieLoading />
          </div>
        ) : (
          data?.feedbacks?.map((item) => (
            <div className="flex items-center gap-x-6" key={item._id}>
              <div className="flex flex-col items-center">
                <span>{item.userId.name}</span>
                <span className="text-gray-400 text-xs">{item.createdAt}</span>
              </div>
              <div className="">
                <span>
                  <Rate value={item.rating} className="md:text-sm" />
                </span>
                <p>{item?.comment}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default FeedBackProducts;