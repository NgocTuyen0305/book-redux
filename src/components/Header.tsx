import { useState } from "react";
// import { DownOutlined } from '@ant-design/icons';
import { FaBars } from "@react-icons/all-files/fa/FaBars";
import { GiOpenBook } from "@react-icons/all-files/gi/GiOpenBook";
import { Badge, Drawer, Dropdown, Modal, Space, theme } from "antd";
import { Link } from "react-router-dom";
import Search from "antd/es/input/Search";
import { AiOutlineSearch } from "@react-icons/all-files/ai/AiOutlineSearch";
import { AiOutlineShoppingCart } from "@react-icons/all-files/ai/AiOutlineShoppingCart";
import { BiUser } from "@react-icons/all-files/bi/BiUser";
import type { MenuProps } from "antd";
import { useAppDispatch, useAppSelector } from "../app/hook";
import { logout } from "../redux/slices/authSlice";
import CartShop from "./CartShop";
import SearchComponent from "./SearchComponent";
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
  const items: MenuProps["items"] = [
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
        <Link to={"/"}>
          <div
            style={{ color: bgColormain }}
            className={`flex items-center space-x-2`}
          >
            <span className="font-Raleway text-2xl">Book</span>
            <span className="text-xl">
              <GiOpenBook />
            </span>
          </div>
        </Link>
        <div className="space-x-3 text-gray-400">
          <Link to={"..."} className={`hover:text-[#3AA6B9]`}>Thể Loại</Link>
          <Link to={"..."} className={`hover:text-[#3AA6B9]`}>Đơn Hàng</Link>
          <Link to={"..."} className={`hover:text-[#3AA6B9]`}>Tác Giả</Link>
          <Link to={"..."} className={`hover:text-[#3AA6B9]`}>Bài Viết</Link>
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
              title="Basic Drawer"
              placement="right"
              onClose={onClose}
              open={open}
              width={200}
            >
              <div className="text-gray-400 mb-6">
                <Search
                  placeholder="search..."
                  onSearch={onSearch}
                  style={{ width: "auto" }}
                />
              </div>
              <div className="flex flex-col items-center space-y-8 font-bold text-base">
                <Link to={"/"}>
                  <span>Home</span>
                </Link>
                <Link to={"blog"}>
                  <span>About</span>
                </Link>
                <Link to={"blog"}>
                  <span>Blog</span>
                </Link>
                <Link to={"blog"}>
                  <span>Categories</span>
                </Link>
                <Link to={"/signup"}>
                  <span>Signup</span>
                </Link>
              </div>
            </Drawer>
          </div>
        </div>
        {/* end screen mobile */}
      </div>

      {/* <div style={{backgroundColor: bgColormain}} className={`p-2 text-white font-poppins sm:text-sm`}>
        <div className="space-x-6 md:max-w-6xl mx-auto text-right">
          <Link to={"..."}>Thể Loại</Link>
          <Link to={"..."}>Đơn Hàng</Link>
          <Link to={"..."}>Tác Giả</Link>
          <Link to={"..."}>Bài Viết</Link>
        </div>
      </div> */}
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
