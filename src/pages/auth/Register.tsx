import { UserOutlined } from "@ant-design/icons";
import {
  Avatar,
  Button,
  Form,
  Input,
  Space,
  Spin,
  notification,
  theme,
  Typography,
  message,
} from "antd";
import { useSignupMutation } from "../../redux/api/auth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Register = () => {
  const { useToken } = theme;
  const { token } = useToken();
  const navigate = useNavigate();
  const { Link } = Typography;
  const [signup, { isLoading, error }] = useSignupMutation();
  useEffect(() => {
    if (isLoading) {
      return (
        <Space
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Loading...
          <Spin />
        </Space>
      );
    } else if (error) {
      return message.error("Đăng kí tài khoản thất bại");
    }
  }, [isLoading, error]);
  const onFinish = async (values) => {
    signup(values)
      .unwrap()
      .then(() => {
        notification.success({ message: "Đăng kí thành công!" });
      })
      .then(() => navigate("/signin"));
  };

  return (
    <div
      className="md:w-80 mx-auto border rounded-md shadow-md my-6"
      style={{ height: "calc(100vh - 59px - 212px)", padding: 10 }}
    >
      <Space
        style={{ width: "100%", display: "flex", justifyContent: "center" }}
      >
        <Avatar size={64} icon={<UserOutlined />} />
      </Space>
      <Form
        layout="vertical"
        labelCol={{ span: 20 }}
        // style={{ padding: 10 }}
        onFinish={onFinish}
      >
        <Form.Item
          label="User name"
          name={"name"}
          rules={[{ required: true, message: "Vui lòng nhập tên" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email"
          name={"email"}
          rules={[
            { required: true, message: "Vui lòng nhập Email" },
            { type: "email", message: "Email không đúng định dạng" },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name={"password"}
          rules={[
            { required: true, message: "Vui lòng nhập password" },
            { min: 6, message: "Password tối thiểu 6 kí tự" },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          label="Confirm password"
          name={"confirmPassword"}
          rules={[
            { required: true, message: "Vui lòng nhập confirm password" },
            ({ getFieldValue }) => ({
              validator(_, values) {
                if (!values || getFieldValue("password") === values) {
                  return Promise.resolve();
                } else {
                  return Promise.reject(new Error("Password không khớp"));
                }
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Space style={{ display: "flex", justifyContent: "space-between" }}>
            <Button
              htmlType="submit"
              style={{
                background: token.bgColormain,
                color: token.colorSecondary,
              }}
            >
              Submit
            </Button>
            <Link href="/signin" style={{ color: token.bgColormain }}>
              Login
            </Link>
          </Space>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Register;
