import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { Layout, Menu, Button, theme, Space, Badge, Avatar } from "antd";
import { AiFillDashboard } from "@react-icons/all-files/ai/AiFillDashboard";
import { BiUser } from "@react-icons/all-files/bi/BiUser";
import { AiOutlineInbox } from "@react-icons/all-files/ai/AiOutlineInbox";
import { FcAddressBook } from "@react-icons/all-files/fc/FcAddressBook";
import { FaProductHunt } from "@react-icons/all-files/fa/FaProductHunt";

import {
  BellOutlined,
  LogoutOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useAppDispatch, useAppSelector } from "../app/hook";
import { logout } from "../redux/slices/authSlice";
import BreadcrumbAdmin from "../components/BreadcrumbAdmin";
import Search, { SearchProps } from "antd/es/input/Search";
// import '../App.css'
const LayoutAdmin = () => {
  const { Sider, Content } = Layout;
  const [collapsed, setCollapsed] = useState(false);
  const { useToken } = theme;
  const { token } = useToken();
  const { bgColormain } = token;
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.Authentication);
  const onSearch: SearchProps["onSearch"] = (value, _e, info) => {
    console.log(info?.source, value);
  };

  // const items = [
  //   {
  //     label: "Đăng nhập",
  //     key: "0",
  //   },
  //   {
  //     label: "Đăng xuất",
  //     key: "1",
  //   },
  // ];

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
        <header
          style={{
            backgroundColor: bgColormain,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 10,
          }}
        >
          <div className="">
            <Button
              type="text"
              icon={collapsed ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
            />
          </div>
          <div className="">
            <Search
              placeholder="search..."
              onSearch={onSearch}
              enterButton
              style={{ width: 400 }}
            />
          </div>
          <div className="flex gap-x-6 items-center">
            <Badge count={5} size="small">
              <MailOutlined className="text-xl text-white" />
            </Badge>
            <Badge count={5} size="small">
              <BellOutlined className="text-xl text-white" />
            </Badge>
            <Space>
              <Avatar size="small" icon={<UserOutlined />} />
              <span className="text-white">{user ? user.name : "HO TEN"}</span>
            </Space>
          </div>
        </header>
        <BreadcrumbAdmin />
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
