import {
  HeartOutlined,
  LogoutOutlined,
  MenuFoldOutlined,
  QqOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Badge, Button, Drawer, Dropdown, MenuProps, Modal } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import CartShop from "./CartShop";
import { useAppDispatch, useAppSelector } from "../app/hook";
import SearchComponent from "./SearchComponent";
import DropdownCate from "./DropdownCate";
import NavbarMenu from "./NavbarMenu";
import { logout } from "../redux/slices/authSlice";
import { motion } from "framer-motion";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fixNavba, setFixNavba] = useState(false);
  const { items: itemsCart } = useAppSelector((state) => state.Cart);
  const { user }:any = useAppSelector((state) => state.Authentication);
  const dispatch = useAppDispatch();
  // console.log("height fixed: ", fixNavba);

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
      label: user ? (
        <Link to={`/update-user`}>
          <Button icon={<QqOutlined />} type="text">
            Tài Khoản
          </Button>
        </Link>
      ) : (
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

  if (user) {
    items.push({
      key: parseInt(items.length + 1),
      label: (
        <Button
          type="text"
          icon={<LogoutOutlined />}
          onClick={() => dispatch(logout())}
        >
          Đăng Xuất
        </Button>
      ),
    });
  }
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
        <div
          className={
            fixNavba
              ? "hidden"
              : "md:relative md:w-full transition-all duration-500"
          }
        >
          <div className="font-dancingScript font-bold md:text-4xl text-3xl text-center hover:text-custom-main duration-500 transition-colors ease-in-out">
            <a href="/" className="">
              Mymy
            </a>
          </div>
          <div className={"absolute right-0 top-0 hidden md:block"}>
            <SearchComponent />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <motion.div
            className={`font-dancingScript font-bold md:text-4xl hover:text-custom-main duration-500 transition-colors ease-in-out ${
              !fixNavba ? "sm:hidden" : ""
            }`}
            initial={{ opacity: 0, x: 20, y: -20 }}
            animate={{
              opacity: fixNavba ? 1 : 0,
              x: fixNavba ? 0 : 20,
              y: fixNavba ? 0 : -20,
            }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <a href="/" className="">
              Mymy
            </a>
          </motion.div>

          <div className="">
            {/* tính */}
            <div
              className={`hidden md:flex items-center space-x-6 font-poppins`}
              
            >
              <DropdownCate />
              <Link
                to={"/my-order"}
                className="hover:text-custom-main duration-500 transition-colors"
              >
                Đơn Hàng
              </Link>
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
          <motion.div
            className={
              fixNavba ? "transition-all duration-500 ease-in-out" : "hidden"
            }
            initial={{ opacity: 0, x: 20, y: -20 }}
            animate={{
              opacity: fixNavba ? 1 : 0,
              x: fixNavba ? 0 : 20,
              y: fixNavba ? 0 : -20,
            }}
            transition={{ duration: 0.1 }}
          >
            <SearchComponent />
          </motion.div>
          <div className="">
            <Dropdown menu={{ items }} trigger={["click"]}>
              <Button icon={<UserOutlined />} type="text">
                {user ? user?.name : ""}
              </Button>
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
