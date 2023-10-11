import { useState } from "react";
import { FaBars } from "@react-icons/all-files/fa/FaBars";
import { GiOpenBook } from "@react-icons/all-files/gi/GiOpenBook";
import { Badge, Button, Drawer, Dropdown, Modal, Space, theme } from "antd";
import { Link } from "react-router-dom";
import Search from "antd/es/input/Search";
import { AiOutlineShoppingCart } from "@react-icons/all-files/ai/AiOutlineShoppingCart";
import { BiUser } from "@react-icons/all-files/bi/BiUser";
import { useAppDispatch, useAppSelector } from "../app/hook";
import { logout } from "../redux/slices/authSlice";
import CartShop from "./CartShop";
import SearchComponent from "./SearchComponent";
import DropdownCate from "./DropdownCate";
const Header = () => {
  // console.log('color main: ',bgColormain);
  const [open, setOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { user } = useAppSelector((state) => state.Authentication);
  const { items: itemsCart } = useAppSelector((state) => state.Cart);

  const { useToken } = theme;
  const { token } = useToken();
  const { bgColormain } = token;

  const dispatch = useAppDispatch();
  // console.log("user: ", user);

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
  const onSearch = (value, _e, info) => console.log(info?.source, value);
  const items = [
    {
      label: user ? "Tài Khoản" : <Link to={"/account"}>Đăng Nhập</Link>,
      key: "0",
    },
    {
      label: user ? (
        <button onClick={() => dispatch(logout())}>Đăng Xuất</button>
      ) : (
        <Link to={"/account"}>Đăng Kí</Link>
      ),
      key: "1",
    },
  ];

  return (
    <div className=" shadow-md sticky top-0 right-0 left-0 bottom-0 backdrop-blur-md z-20 font-poppins">
      <div className="flex justify-between p-2 items-center md:max-w-6xl md:mx-auto">
        <a href="/">
          <div
            style={{ color: bgColormain }}
            className={`flex items-center space-x-2`}
          >
            <span className="font-Raleway text-2xl">Book</span>
            <span className="text-xl">
              <GiOpenBook />
            </span>
          </div>
        </a>
        <div className=" text-gray-400 sm:hidden md:flex gap-x-4">
          <DropdownCate />
          <Link to={"..."} className={`hover:text-[#3AA6B9]`}>
            Đơn Hàng
          </Link>
          <Link to={"..."} className={`hover:text-[#3AA6B9]`}>
            Tác Giả
          </Link>
          <Link to={"..."} className={`hover:text-[#3AA6B9]`}>
            Bài Viết
          </Link>
        </div>
        <div className="sm:hidden md:flex items-center space-x-6 text-gray-400">
          <SearchComponent />
          <div className="">
            <Dropdown
              menu={{ items }}
              trigger={["click"]}
              className="cursor-pointer"
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space className="hover:text-[#3AA6B9]">
                  <BiUser className="text-xl" />
                  {user ? user?.name : "Tài Khoản"}
                </Space>
              </a>
            </Dropdown>
          </div>
          <div className="flex space-x-2 items-center hover:text-[#3AA6B9]">
            <Badge count={itemsCart.length} size="small">
              <AiOutlineShoppingCart className="text-xl text-gray-400" />
            </Badge>
            <button className="" onClick={showModal}>
              Giỏ Hàng
            </button>
          </div>
        </div>
        {/* screen mobile */}
        <div className="flex space-x-5 md:hidden">
          <div className="">
            <button
              onClick={showDrawer}
              className=" p-2 rounded-full shadow-lg"
            >
              <FaBars className="text-xl" />
            </button>
            <Drawer
              title={user?user.name:''}
              placement="right"
              onClose={onClose}
              open={open}
              width={200}
            >
              <div className=" text-gray-400 flex flex-col gap-y-3">
                <Button type="link">
                  <DropdownCate />
                </Button>
                <Button type="link">Đơn Hàng</Button>
                <Button type="link">Bài Viết</Button>
                <Button type="link">Tài Khoản</Button>
              </div>
            </Drawer>
          </div>
        </div>
        {/* end screen mobile */}
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
