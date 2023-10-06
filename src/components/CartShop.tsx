import {
  DeleteOutlined,
  InboxOutlined,
  MinusOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { Avatar, Badge, Button, Popconfirm, Space, Table } from "antd";
import { useAppDispatch, useAppSelector } from "../app/hook";
import { decrease, increase, removeItemCart } from "../redux/slices/cartSlice";
import React, { useEffect, useState } from "react";
import { IProduct } from "../interfaces/products";
import { addItemsCart } from "../redux/slices/orderSlice";

const CartShop = () => {
  const { items } = useAppSelector((state) => state.Cart);
  const dispatch = useAppDispatch();
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const itemSelectlCart = items.filter((item) =>
    selectedRowKeys.includes(item._id)
  );
  console.log("item select cart: ", totalPrice);

  useEffect(() => {
    if (itemSelectlCart) {
      const totalPriceCart = itemSelectlCart.reduce(
        (accumulator, currentValue) => {
          return accumulator + (currentValue.price * currentValue.quantity);
        },
        0
      );
      setTotalPrice(totalPriceCart);
    }
  }, [itemSelectlCart]);
  if (selectedRowKeys) {
    dispatch(addItemsCart(itemSelectlCart));
  }
  const dataSource = items.map(({ _id, name, price, images, quantity }) => {
    return {
      key: _id,
      name,
      price,
      images,
      quantity,
    };
  });
  const columns = [
    {
      title: "Sản phẩm",
      dataIndex: "name",
      width: 400,
      key: "name",
      render: (_: string, recod: IProduct) => {
        // console.log('recod: ',recod)
        const image = recod.images.map((item) => {
          return item.response.uploadedFiles[0].url;
        });
        return (
          <div className="flex items-center gap-x-3">
            <img src={image[0]} alt="" className="w-24" />
            <span className="line-clamp-2 font-poppins">{_}</span>
          </div>
        );
      },
    },
    {
      title: "Đơn giá",
      dataIndex: "price",
      key: "price",
      render: (_: number) => {
        return (
          <span className="text-red-500 text-base">{_ / 1000 + ".000"} đ</span>
        );
      },
    },
    {
      title: "Số lượng",
      dataIndex: "quantity",
      key: "quantity",
      render: (_, { quantity, key }: record) => {
        // console.log("quantity: ", quantity, key);
        return (
          <Space>
            <Button
              icon={<PlusOutlined />}
              onClick={() => dispatch(increase(key))}
            ></Button>
            <Badge count={quantity}>
              <Avatar shape="square" icon={<InboxOutlined />} className="" />
            </Badge>
            <Button
              icon={<MinusOutlined />}
              onClick={() => dispatch(decrease(key))}
            ></Button>
          </Space>
        );
      },
    },
    {
      title: "Thành tiền",
      dataIndex: "total",
      key: "total",
      render: (_, recod) => {
        return (
          <span className=" text-blue-500 text-base">
            {(recod.quantity * recod.price) / 1000 + ".000"} đ
          </span>
        );
      },
    },
    {
      title: <DeleteOutlined />,
      dataIndex: "total",
      key: "total",
      render: (_, recod) => {
        // console.log('infor item delete: ',_,recod);
        // return <Button onClick={() => handleRemove(recod.key)}>click</Button>;
        return (
          <Popconfirm
            title="Xóa sản phẩm"
            description="Bạn có muốn xóa khỏi giỏ hàng?"
            onConfirm={() => {
              dispatch(removeItemCart(recod.key));
              // dispatch
            }}
            okText="Yes"
            cancelText="No"
            okType="danger"
          >
            <Button danger icon={<DeleteOutlined />}></Button>
          </Popconfirm>
        );
      },
    },
  ];
  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    // console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  return (
    <div>
      <Table
        rowSelection={rowSelection}
        dataSource={dataSource}
        columns={columns}
      />
      <Space className="flex flex-col gap-y-3 text-lg">
        <Space>
          <span>Thành tiền</span>
          <span>{totalPrice != 0 ? totalPrice / 1000 + ".000" : "0"} đ</span>
        </Space>
        <Space>
          <span className="font-bold">Tổng số tiền(gồm VAT)</span>
          <span className="text-red-700 font-bold">
            {totalPrice != 0 ? totalPrice / 1000 + ".000" : "0"} đ
          </span>
        </Space>
        <Space>
          <Button disabled={itemSelectlCart.length == 0}>Thanh toán</Button>
        </Space>
      </Space>
    </div>
  );
};

export default CartShop;
