import { LockOutlined, UserOutlined } from "@ant-design/icons";
import {
  Avatar,
  Button,
  Checkbox,
  Form,
  Input,
  Space,
  Spin,
  notification,
  theme,
} from "antd";
import Link from "antd/es/typography/Link";
import { useSigninMutation } from "../../redux/api/auth";
import { AiOutlineMail } from "@react-icons/all-files/ai/AiOutlineMail";
import { useAppDispatch } from "../../app/hook";
import { isAuth, setToken, setUser } from "../../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const Login = () => {
  const { useToken } = theme;
  const { token } = useToken();
  // const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [signin, { isLoading, error }] = useSigninMutation();


  console.log("error: ", error);
  useEffect(() => {
    if (error) {
      notification.error({ message: error?.data?.message });
    }
  }, [error]);
  if (isLoading)
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
  const onFinish = async (values: any) => {
    const data = await signin(values).unwrap();
    console.log('data: ',data);
    
    const { accessToken, user, message } = data;
    if (data) {
      notification.success({ message: message });
      console.log("user:", user);
      dispatch(setToken(accessToken));
      dispatch(isAuth());
      dispatch(setUser(user));
      // navigate("/admin");
    }
  };

  return (
    <div
      className="md:w-80 mx-auto space-y-8 border rounded-md shadow-md my-6"
      style={{ height: "calc(100vh - 59px - 212px - 48px)", padding: 10 }}
    >
      <Space
        style={{ width: "100%", display: "flex", justifyContent: "center" }}
      >
        <Avatar size={64} icon={<UserOutlined />} />
      </Space>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="email"
          rules={[
            { required: true, message: "Please input your email!" },
            { type: "email", message: "Email không đúng định dạng" },
          ]}
        >
          <Input
            prefix={<AiOutlineMail className="site-form-item-icon" />}
            placeholder="Email"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href="">
            Forgot password
          </a>
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
              Log in
            </Button>
            <Link href="/signup">register now!</Link>
          </Space>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
