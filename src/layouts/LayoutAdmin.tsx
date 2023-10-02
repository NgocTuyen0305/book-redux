import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import {
  Layout,
  Menu,
  Button,
  theme,
  Badge,
  Dropdown,
  Avatar,
  Space,
} from "antd";
import { AiOutlineMenuUnfold } from "@react-icons/all-files/ai/AiOutlineMenuUnfold";
import { AiOutlineMenuFold } from "@react-icons/all-files/ai/AiOutlineMenuFold";
import { AiFillDashboard } from "@react-icons/all-files/ai/AiFillDashboard";
import { AiOutlineSearch } from "@react-icons/all-files/ai/AiOutlineSearch";
import { BiUser } from "@react-icons/all-files/bi/BiUser";
import { AiOutlineInbox } from "@react-icons/all-files/ai/AiOutlineInbox";
import { FcAddressBook } from "@react-icons/all-files/fc/FcAddressBook";
import { BsFillBellFill } from "@react-icons/all-files/bs/BsFillBellFill";
import { FaProductHunt } from "@react-icons/all-files/fa/FaProductHunt";

import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { useAppDispatch, useAppSelector } from "../app/hook";
import { logout } from "../redux/slices/authSlice";
// import '../App.css'
const LayoutAdmin = () => {
  const { Header, Sider, Content } = Layout;
  const [collapsed, setCollapsed] = useState(false);
  const { useToken } = theme;
  const { token } = useToken();
  const { user } = useAppSelector((state) => state.Authentication);
  const dispatch = useAppDispatch();
  const items = [
    {
      label: "Đăng nhập",
      key: "0",
    },
    {
      label: "Đăng xuất",
      key: "1",
    },
  ];

  return (
    <Layout>
      <Sider trigger={null} collapsible theme="light" collapsed={collapsed}>
        <div className="py-5 text-2xl flex items-center justify-center">
          <FcAddressBook />
          <span className="font-Raleway">Book</span>
        </div>
        <Menu
          style={{}}
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <AiFillDashboard />,
              label: <Link to={"dashboard"}>Dashboard</Link>,
            },
            {
              key: "2",
              icon: <FaProductHunt />,
              label: <Link to={"products"}>Product</Link>,
            },
            {
              key: "3",
              icon: <AiOutlineInbox />,
              label: <Link to={"categories"}>Categories</Link>,
            },
            {
              key: "4",
              icon: <BiUser />,
              label: "Orders",
            },
            {
              key: "5",
              label: (
                <Button
                  icon={<LogoutOutlined />}
                  onClick={() => dispatch(logout())}
                >
                  Logout
                </Button>
              ),
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            color: token.colorSecondary,
            padding: 0,
            background: token.bgColormain,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Button
            type="text"
            className="flex-none"
            icon={collapsed ? <AiOutlineMenuFold /> : <AiOutlineMenuUnfold />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
          <div className="w-2/3 flex gap-x-6 mr-4 items-center justify-between">
            <div className="h-2/4 w-64 relative">
              <input
                type="text"
                className="h-full w-full absolute top-0 border rounded-full shadow-md outline-none px-1 focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                placeholder="search..."
              />
              <button className="text-2xl absolute top-2/4 text-gray-400 right-0 -translate-x-2/4 -translate-y-2/4">
                <AiOutlineSearch />
              </button>
            </div>
            <div className="flex gap-x-6 items-center">
              <Space className="">
                <Badge count={5} size="small">
                  <BsFillBellFill className="text-xl" />
                </Badge>
              </Space>
              <Space className="flex gap-x-3 items-center">
                <Dropdown menu={{ items }} trigger={["click"]}>
                  <Space className="">
                    <Avatar
                      size={34}
                      icon={<UserOutlined />}
                      className="text-center"
                    />
                  </Space>
                </Dropdown>
                <Space className="">
                  <div className="font-poppins">
                    {user ? user.name : "HO TEN"}
                  </div>
                </Space>
              </Space>
            </div>
          </div>
        </Header>
        <Content
          style={{
            padding: 10,
            height: "100%",
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default LayoutAdmin;
