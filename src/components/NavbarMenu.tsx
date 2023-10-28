import React, { useState } from "react";
import { GroupOutlined, ShopOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import SubMenu from "antd/es/menu/SubMenu";
import { useGetCategoriesQuery } from "../redux/api/categoriesApi";
import { useAppDispatch } from "../app/hook";
import { setCategories } from "../redux/slices/paginationSlice";
import { Link } from "react-router-dom";
const NavbarMenu = () => {
  const { data } = useGetCategoriesQuery();
  const dispatch = useAppDispatch();

  return (
    <div>
      <Menu mode="inline">
        <SubMenu key="sub1" icon={<GroupOutlined />} title="Thể loại">
          {data?.result.map((items) => {
            return (
              <Menu.Item
                key={items._id}
                onClick={() => {
                  dispatch(setCategories(items._id));
                }}
              >
                {items.name}
              </Menu.Item>
            );
          })}
        </SubMenu>
        <Menu.Item icon={<ShopOutlined />}>
          <Link to={"/my-order"}>Đơn hàng </Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default NavbarMenu;
