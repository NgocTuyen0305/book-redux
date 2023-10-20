import { Empty, Tabs, TabsProps } from "antd";
import React from "react";
import AllOrder from "./AllOrder";
import ProcessingOrder from "./ProcessingOrder";
import DeliveringOrder from "./DeliveringOrder";
import DeliveredOrder from "./DeliveredOrder";

const MyOrder = () => {
  // const onChange = (key: string) => {
  //   console.log(key);
  // };

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Tất cả" ,
      children: <AllOrder />,
    },
    {
      key: "2",
      label: "Chờ thanh toán",
      children:  <Empty/>,
    },
    {
      key: "3",
      label: "Đang xử lý",
      children: <ProcessingOrder/>,
    },
    {
      key: "4",
      label: "Đang vẩn chuyển",
      children: <DeliveringOrder/>,
    },
    {
      key: "5",
      label: "Đã giao",
      children: <DeliveredOrder/>,
    },
    {
      key: "6",
      label: "Đã hủy",
      children: "Content of Tab Pane 3",
    },
  ];
  return (
    <div className="max-w-6xl mx-auto bg-white p-2">
      <div className="">
        <h2>Đơn hàng của tôi</h2>
      </div>
      <Tabs defaultActiveKey="1" items={items} />
    </div>
  );
};

export default MyOrder;
