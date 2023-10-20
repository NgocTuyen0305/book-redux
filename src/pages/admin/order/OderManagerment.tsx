import { Empty, Switch, Table } from "antd";
import React, { useEffect, useState } from "react";
import {
  useGetShoppingQuery,
  useUpdateShoppingMutation,
} from "../../../redux/api/shoppingApi";
import LottieLoading from "../../../effect/LottieLoading";
import { EditOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const OderManagerment = () => {
  const { data, isLoading, error } = useGetShoppingQuery();

  if (error) {
    return <Empty />;
  }
  if (isLoading) {
    return (
      <div className="flex justify-center items-center">
        <LottieLoading />
      </div>
    );
  }
  const dataSource = data?.map(
    ({
      productOrder,
      deliveryMethod,
      paymentMethod,
      shippingAddress,
      shippingPrice,
      _id,
      totalPrice,
      isProcessing,
      isDelivering,
      isDelivered,
      notProcessed
    }: any) => {
      return {
        key: _id,
        productOrder,
        deliveryMethod,
        paymentMethod,
        shippingAddress,
        shippingPrice: shippingPrice / 1000 + ".000 đ",
        totalPrice: totalPrice / 1000 + ".000 đ",
        isProcessing,
        isDelivering,
        isDelivered,
        notProcessed
      };
    }
  );
  const columns = [
    {
      title: "Sản phẩm đã mua",
      dataIndex: "productOrder",
      key: "productOrder",
      render: (record) => {
        // console.log("record: ", record);
        return record.map((item) => (
          <div className="" key={item._id}>
            <div className="">
              <img
                src={item.images[0].response.uploadedFiles[0].url}
                alt=""
                width={80}
              />
            </div>
            <div className="text-xs line-clamp-2">{item.name}</div>
          </div>
        ));
      },
      with: 100,
      fixed: "left",
    },
    {
      title: "Phương thức giao hàng",
      dataIndex: "deliveryMethod",
      key: "deliveryMethod",
    },
    {
      title: "Phương thức thanh toán",
      dataIndex: "paymentMethod",
      key: "paymentMethod",
    },
    {
      title: "Thông tin khách hàng",
      dataIndex: "shippingAddress",
      key: "shippingAddress",
      render: (record) => {
        // console.log("record: ", record);
        return (
          <div className="text-xs">
            <div className="">{record.name}</div>
            <div className="">{record.phone}</div>
            <div className="">{record.address}</div>
          </div>
        );
      },
    },
    {
      title: "Phí giao hàng",
      dataIndex: "shippingPrice",
      key: "shippingPrice",
    },
    {
      title: "Tổng tiền",
      dataIndex: "totalPrice",
      key: "totalPrice",
    },
    {
      title: "Chưa xử lí",
      dataIndex: "notProcessed",
      key: "notProcessed",
      render: (_) => {
        return <span className={_ ? 'text-blue-500' : 'text-red-500'}>{_.toString()}</span>;
      },
    },
    {
      title: "Đang xử lí",
      dataIndex: "isProcessing",
      key: "isProcessing",
      render: (_) => {
        return <span className={_ ? 'text-blue-500' : 'text-red-500'}>{_.toString()}</span>;
      },
    },
    {
      title: "Đang giao hàng",
      dataIndex: "isDelivering",
      key: "isDelivering",
      render: (_) => {
        return <span className={_ ? 'text-blue-500' : 'text-red-500'}>{_.toString()}</span>;
      },
    },
    {
      title: "Đã giao hàng",
      dataIndex: "isDelivered",
      key: "isDelivered",
      render: (_) => {
        return <span className={_ ? 'text-blue-500' : 'text-red-500'}>{_.toString()}</span>;
      },
    },
    {
      title: "Trạng thái",
      dataIndex: "action",
      key: "action",
      render: (_, record) => {
        return (
          <>
            <Link to={`update/${record?.key}`}>
              <EditOutlined style={{ color: "blue", fontSize: 20 }} />
            </Link>
          </>
        );
      },
    },
  ];
  return (
    <div>
      <Table dataSource={dataSource} columns={columns} scroll={{ x: 1300 }} />;
    </div>
  );
};

export default OderManagerment;
