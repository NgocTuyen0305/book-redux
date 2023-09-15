import React, { useState } from "react";
// import { DownOutlined } from '@ant-design/icons';
import { FaBars } from "@react-icons/all-files/fa/FaBars";
import { GiOpenBook } from "@react-icons/all-files/gi/GiOpenBook";
import { Drawer } from "antd";
import { Link } from "react-router-dom";
import Search from "antd/es/input/Search";

const Header = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  const onSearch = (value, _e, info) => console.log(info?.source, value);
  return (
    <div className="">
    <div className="flex justify-between p-2 items-center">
      <div className="flex items-center space-x-2 border p-1 rounded-lg shadow-lg">
        <span className=" text-[#173C2A] font-extrabold font-Raleway text-2xl">
          Book
        </span>
        <span className="font-bold text-xl">
          <GiOpenBook />
        </span>
      </div>
      <div className="flex space-x-5">
        <div className="">
          <button onClick={showDrawer} className="bg-red-500 p-2 rounded-full text-white shadow-lg">
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
            </div>
          </Drawer>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Header;
