import { Button, Modal, Popconfirm, Select, Space, Spin, Table } from "antd";
import React, { useEffect, useState } from "react";
import {
  useGetCategoriesQuery,
  useRemoveCategoryMutation,
} from "../../../redux/api/categoriesApi";
import { Option } from "antd/es/mentions";
import { EditOutlined, PlusOutlined } from "@ant-design/icons";
import { AiOutlineLoading3Quarters } from "@react-icons/all-files/ai/AiOutlineLoading3Quarters";
import { ICategories } from "../../../interfaces/categories";
import { AiFillDelete } from "@react-icons/all-files/ai/AiFillDelete";
import { warning } from "../../../effect/notification";
import CreateCategory from "./CreateCategory";
import { Link } from "react-router-dom";
const CategoriesManager = () => {
  const { data, isLoading, error } = useGetCategoriesQuery();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [removeCategory, { isLoading: removeLoading, error: removeError }] =
    useRemoveCategoryMutation();
  useEffect(() => {
    if (removeError) {
      warning(removeError);
    }
  }, [removeError]);

  if (isLoading)
    return (
      <div className="flex justify-center items-center">
        Loading...
        <Spin />
      </div>
    );
    
  const dataSource = data?.result?.map(
    ({ name, products, _id }: ICategories) => {
      return {
        key: _id,
        name: name,
        products: products,
      };
    }
  );

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Product Id",
      dataIndex: "products",
      key: "products",
      render: (_, { products }: recod) => {
        // console.log("recode: ", _);
        return (
          <Select
            mode="tags"
            style={{ width: "100%" }}
            placeholder="product Id"
            // onChange={handleChange}
          >
            {products?.map((product) => {
              return <Option value={product}>{product}</Option>;
            })}
          </Select>
        );
      },
    },
    {
      title: "Actions",
      dataIndex: "actions",
      key: "action",
      render: (_, { key: id }: recod) => {
        // console.log("id: ", id);
        return (
          <Space size={"middle"}>
            <Popconfirm
              placement="topLeft"
              title={"Bạn có muốn xóa?"}
              onConfirm={() => removeCategory(id)}
              okText="Yes"
              cancelText="No"
            >
              <Button danger>
                {removeLoading ? (
                  <AiOutlineLoading3Quarters className="animate-spin" />
                ) : (
                  <AiFillDelete className="text-lg" />
                )}
              </Button>
            </Popconfirm>
            <Link to={`/admin/categories/${id}/edit`}>
              <Button
                icon={<EditOutlined />}
                className="text-blue-500"
              ></Button>
            </Link>
          </Space>
        );
      },
    },
  ];
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <Table dataSource={dataSource} columns={columns} />;
      <Button onClick={showModal} icon={<PlusOutlined />}>
        Add Category
      </Button>
      <Modal
        title="ADD TO CATEGORY"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <CreateCategory />
      </Modal>
    </div>
  );
};

export default CategoriesManager;
