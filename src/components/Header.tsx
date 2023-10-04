import{ useState } from "react";
// import { DownOutlined } from '@ant-design/icons';
import { FaBars } from "@react-icons/all-files/fa/FaBars";
import { GiOpenBook } from "@react-icons/all-files/gi/GiOpenBook";
import { Badge, Drawer, Dropdown, Modal, Space } from "antd";
import { Link } from "react-router-dom";
import Search from "antd/es/input/Search";
import { AiOutlineSearch } from "@react-icons/all-files/ai/AiOutlineSearch";
import { AiOutlineShoppingCart } from "@react-icons/all-files/ai/AiOutlineShoppingCart";
import { BiUser } from "@react-icons/all-files/bi/BiUser";
import type { MenuProps } from "antd";
import { useAppDispatch, useAppSelector } from "../app/hook";
import { logout } from "../redux/slices/authSlice";
import CartShop from "./CartShop";
const Header = () => {
  const [open, setOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { user } = useAppSelector((state) => state.Authentication);
  const { items:itemsCart } = useAppSelector((state) => state.Cart);
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
      label: <Link to={"/signin"}>ĐĂNG NHẬP</Link>,
      key: "0",
    },
    {
      label: user ? (
        <button onClick={() => dispatch(logout())}>ĐĂNG XUẤT</button>
      ) : (
        <Link to={"/signup"}>ĐĂNG KÍ</Link>
      ),
      key: "1",
    },
  ];
  return (
    <div className="border-b-2 shadow-md sticky top-0 right-0 left-0 bottom-0 backdrop-blur-md z-20 font-inclusiveSans">
      <div className="flex justify-between p-2 items-center md:max-w-6xl md:mx-auto">
        <Link to={"/"}>
          <div className="flex items-center space-x-2 border p-1 rounded-lg shadow-lg text-[#FF9B50]">
            <span className="font-Raleway text-2xl">Book</span>
            <span className="text-xl">
              <GiOpenBook />
            </span>
          </div>
        </Link>
        <div className="sm:hidden md:block">
          <div className="flex space-x-12">
            <Link to={"abc"}>
              <div className="">Categories</div>
            </Link>
            <Link to={"abc"}>
              <div className="">Deals</div>
            </Link>
            <Link to={"abc"}>
              <div className="">Blog</div>
            </Link>
          </div>
        </div>
        <div className="sm:hidden md:flex items-center space-x-6">
          <div className="w-56 relative rounded-full shadow-md">
            <input
              type="text"
              placeholder="search..."
              className="rounded-full p-1 outline-none w-full"
            />
            <button className="text-2xl absolute top-2/4 text-gray-400 right-0 -translate-x-2/4 -translate-y-2/4">
              <AiOutlineSearch />
            </button>
          </div>
          <div className="">
            <Dropdown
              menu={{ items }}
              trigger={["click"]}
              className="cursor-pointer"
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space className="">
                  <BiUser className="text-xl" />
                  {user ? user?.name : "Tài Khoản"}
                </Space>
              </a>
            </Dropdown>
          </div>
          <div className="flex space-x-2 items-center ">
            <Badge count={itemsCart.length} size="small">
              <AiOutlineShoppingCart className="text-xl" />
            </Badge>
            <button className="" onClick={showModal}>
              Giỏ Hàng
            </button>
          </div>
        </div>
        <div className="flex space-x-5 md:hidden">
          <div className="">
            <button
              onClick={showDrawer}
              className=" p-2 rounded-full text-white shadow-lg"
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
