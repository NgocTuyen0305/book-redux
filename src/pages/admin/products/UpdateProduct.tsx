import { useEffect } from "react";
import {
  Button,
  Form,
  Input,
  InputNumber,
  Select,
  Spin,
  Upload,
  message,
  notification,
} from "antd";
import {
  useGetProductByIdQuery,
  useUpdateProductMutation,
} from "../../../redux/api/productApi";
import { UploadOutlined } from "@ant-design/icons";
import { AiOutlineLoading3Quarters } from "@react-icons/all-files/ai/AiOutlineLoading3Quarters";
import { useNavigate, useParams } from "react-router-dom";
const UpdateProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
    const [form] = Form.useForm();
  const { data: productById, isLoading } = useGetProductByIdQuery(id);
  const [updateProduct, { isLoading: loadingProduct, error }] =
    useUpdateProductMutation();

  console.log("error: ", error);
  
  useEffect(() => {
    form.setFieldsValue({
      name: productById?.data?.name,
      price: productById?.data?.price,
      images: productById?.data?.images,
      author: productById?.data?.author,
      description: productById?.data?.description,
      rate: productById?.data?.rate,
      quantityStock: productById?.data?.quantityStock,
      categoryId: productById?.data?.categoryId,
    });
  }, [productById]);

  if (loadingProduct)
    return (
      <div className="flex justify-center items-center">
        Loading...
        <Spin />
      </div>
    );
  const onFinish = async (values: any) => {
    const respones = await updateProduct({ ...values,_id:id});
    if (respones) {
      notification.success({
        message: "Cập nhật sản phẩm thành công",
      });
      navigate("/admin/products");
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  const onChange = (info) => {
    if (info.file.status === "done") {
      return message.success("Tải ảnh thành công");
    } else if (info.file.status === "error") {
      return message.error("Tải ảnh thất bại");
    }
  };
  return (
    <div className="">
      <Form
        form={form}
        id="form"
        labelCol={{ span: 8 }}
        onFinish={onFinish}
        style={{ maxWidth: 500, margin: "0 auto" }}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Tên sản phẩm"
          name="name"
          rules={[{ required: true, message: "Vui lòng nhập tên sản phẩm" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Giá tiền"
          name="price"
          rules={[{ required: true, message: "Vui lòng nhập giá sản phẩm" }]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item
          label="Tác giả"
          name="author"
          rules={[
            { required: true, message: "Vui lòng nhập tác giả sản phẩm" },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Ảnh sản phẩm"
          name="images"
          valuePropName="fileList"
          getValueFromEvent={(e) => {
            if (Array.isArray(e)) {
              return e;
            }
            return e && e.fileList;
          }}
        >
          <Upload
            accept=".jpg,.jpeg,.png,.gif"
            listType="picture"
            onChange={onChange}
            multiple={true}
            action={"http://127.0.0.1:5000/api/upload"}
          >
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
          </Upload>
        </Form.Item>
        <Form.Item
          label="Đánh giá"
          name="rate"
          rules={[
            { required: true, message: "Vui lòng nhập đánh giá sản phẩm" },
          ]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item
          label="Số lượng trong kho"
          name="quantityStock"
          rules={[
            { required: true, message: "Vui lòng nhập số lượng sản phẩm" },
          ]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item
          label="Mô tả"
          name="description"
          rules={[{ required: true, message: "Vui lòng nhập mô tả sản phẩm" }]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item label="Category" name="categoryId">
          <Select
            options={[
              {
                label: "Category Id",
                options: [
                  { label: "Jack", value: "650c6d0212805d1b5348498a" },
                  { label: "Lucy", value: "650c6d0c12805d1b5348498c" },
                ],
              },
            ]}
          ></Select>
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit">
            {isLoading ? (
              <AiOutlineLoading3Quarters className="animate-spin text-blue-500" />
            ) : (
              "Submit"
            )}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default UpdateProduct;
