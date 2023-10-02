import React, { useEffect, useState } from "react";
import {
  Button,
  Modal,
  Popconfirm,
  Space,
  Spin,
  Table,
  notification,
} from "antd";
import { AiFillDelete } from "@react-icons/all-files/ai/AiFillDelete";
import { AiFillEdit } from "@react-icons/all-files/ai/AiFillEdit";
import CreateProduct from "./CreateProduct";
import {
  useGetProductsQuery,
  useRemoveProductMutation,
} from "../../../redux/api/productApi";
import { AiOutlineLoading3Quarters } from "@react-icons/all-files/ai/AiOutlineLoading3Quarters";
import { IProduct } from "../../../interfaces/products";
import { Link } from "react-router-dom";
const ProductManagement = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const { data, isLoading: loadingProduct } = useGetProductsQuery();
  const [removeProduct, { isLoading: loadingRemove, error: errorRemove }] =
    useRemoveProductMutation();
  useEffect(() => {
    if (errorRemove) {
      notification.warning({ message: errorRemove?.data?.message });
    }
  }, [errorRemove]);
  if (loadingProduct)
    return (
      <div className="flex justify-center items-center">
        Loading...
        <Spin />
      </div>
    );

  const dataSource = data?.products?.map(
    ({
      _id,
      name,
      images,
      price,
      rate,
      quantityStock,
      author,
      categoryId,
      description,
    }: IProduct) => {
      return {
        key: _id,
        name,
        images,
        price,
        rate,
        quantityStock,
        author,
        description,
        categoryId,
      };
    }
  );
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const columns = [
    {
      title: "name",
      width: 150,
      dataIndex: "name",
      key: "name",
      fixed: "left",
    },
    {
      title: "Price",
      width: 100,
      dataIndex: "price",
      key: "price",
      fixed: "left",
      sorter: true,
    },
    {
      title: "Image",
      key: "image",
      dataIndex: "image",
      render: (_, recod) => {
        return (
          <Space>
            {recod.images.map((item) => {
              return item?.response?.uploadedFiles?.map((itemImage) => {
                return <img src={itemImage.url} alt="" />;
              });
              // <div className="">{item.name}</div>
            })}
          </Space>
        );
      },
    },
    { title: "Author", key: "author", dataIndex: "author" },
    { title: "Rate", key: "rate", dataIndex: "rate" },
    {
      title: "QuantityStock",
      key: "quantityStock",
      dataIndex: "quantityStock",
    },
    { title: "Description", key: "description", dataIndex: "description" },
    { title: "CategoryId", key: "categoryId", dataIndex: "categoryId" },
    {
      title: "Action",
      key: "action",
      fixed: "right",
      width: 150,
      render: ({ key: id }) => (
        <Space size={"middle"}>
          <Popconfirm
            placement="topLeft"
            title={"Bạn có muốn xóa?"}
            onConfirm={() => removeProduct(id)}
            okText="Yes"
            cancelText="No"
          >
            <Button danger>
              {loadingRemove ? (
                <AiOutlineLoading3Quarters className="animate-spin" />
              ) : (
                <AiFillDelete className="text-xl" />
              )}
            </Button>
          </Popconfirm>
          <Link to={`/admin/products/${id}/edit`}>
            <Button>
              <AiFillEdit className="text-blue-500" />
            </Button>
          </Link>
        </Space>
      ),
    },
  ];

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    selections: [
      Table.SELECTION_ALL,
      Table.SELECTION_INVERT,
      Table.SELECTION_NONE,
      {
        key: "odd",
        text: "Select Odd Row",
        onSelect: (changeableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return false;
            }
            return true;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
      {
        key: "even",
        text: "Select Even Row",
        onSelect: (changeableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return true;
            }
            return false;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
    ],
  };
  return (
    <div>
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={dataSource}
        scroll={{ x: 1300 }}
      />
      <div className="">
        <Button className="" onClick={showModal}>
          Add to product
        </Button>
        <Modal
          title="ADD TO PRODUCT"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <CreateProduct />
        </Modal>
      </div>
    </div>
  );
};

export default ProductManagement;
