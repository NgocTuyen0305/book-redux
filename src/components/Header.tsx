import {
  HeartOutlined,
  MenuFoldOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Badge, Button, Drawer, Dropdown, Menu, MenuProps, Modal } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import CartShop from "./CartShop";
import { useAppSelector } from "../app/hook";
import SearchComponent from "./SearchComponent";
import DropdownCate from "./DropdownCate";
import NavbarMenu from "./NavbarMenu";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fixNavba, setFixNavba] = useState(false);
  const { items: itemsCart } = useAppSelector((state) => state.Cart);
  console.log("height fixed: ", fixNavba);

  const setFixedNavba = () => {
    if (window.scrollY >= 38) {
      setFixNavba(true);
    } else {
      setFixNavba(false);
    }
  };
  window.addEventListener("scroll", setFixedNavba);

  const items: MenuProps["items"] = [
    {
      key: 1,
      label: (
        <Link to={"/account"}>
          <Button type="text" icon={<UserOutlined />}>
            Tài Khoản
          </Button>
        </Link>
      ),
    },
    {
      key: 2,
      label: (
        <Link to={"/"}>
          <Button type="text" icon={<HeartOutlined />}>
            Yêu Thích
          </Button>
        </Link>
      ),
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
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <div className={"bg-white fixed top-0 left-0 right-0 z-50 shadow-sm"}>
      <div className="md:max-w-6xl mx-auto space-y-6 ">
        <div className={fixNavba ? "hidden" : "md:relative md:w-full transition-all duration-500"}>
          <div className="font-dancingScript font-bold md:text-4xl text-3xl text-center hover:text-[#3AA6B9] duration-500 transition-colors ease-in-out">
            <a href="/" className="">
              Mymy
            </a>
          </div>
          <div className={"absolute right-0 top-0 hidden md:block"}>
            <SearchComponent />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div
            className={
              fixNavba
                ? "font-dancingScript font-bold md:text-4xl hover:text-[#3AA6B9] duration-500 transition-colors ease-in-out"
                : "hidden"
            }
          >
            <a href="/" className="">
              Mymy
            </a>
          </div>

          <div className="">
            {/* tính */}
            <div className="hidden md:flex items-center space-x-6 font-poppins">
              <DropdownCate />
              <span className="hover:text-[#3AA6B9] duration-500 transition-colors">
                Đơn Hàng
              </span>
              <span className="hover:text-[#3AA6B9] duration-500 transition-colors">
                Bài Viết
              </span>
            </div>
            {/* không tính */}
            <div className="md:hidden">
              <Button
                icon={<MenuFoldOutlined />}
                type="text"
                onClick={showDrawer}
              />
              <Drawer
                placement="left"
                onClose={onClose}
                open={open}
                width={240}
              >
                <NavbarMenu />
              </Drawer>
            </div>
          </div>
          <div className={fixNavba ? "transition-all duration-500 ease-in-out" : "md:hidden"}>
            <SearchComponent />
          </div>
          <div className="">
            <Dropdown menu={{ items }} trigger={["click"]}>
              <Button icon={<UserOutlined />} type="text" />
            </Dropdown>
            <Badge count={itemsCart.length} size="small">
              <Button
                icon={<ShoppingCartOutlined />}
                type="text"
                onClick={showModal}
              />
            </Badge>
          </div>
        </div>
      </div>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        okType="default"
        onCancel={handleCancel}
        width={1000}
      >
        <CartShop />
      </Modal>
    </div>
  );
};

export default Header;
