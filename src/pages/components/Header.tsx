import React, { useState } from "react";
// import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import DehazeIcon from "@mui/icons-material/Dehaze";
import Drawer from "@mui/material/Drawer";
import { Close } from "@mui/icons-material";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };
  const items:MenuProps['items'] = [
    {
      label: <a href="https://www.antgroup.com">1st menu item</a>,
      key: '0',
    },
    {
      label: <a href="https://www.aliyun.com">2nd menu item</a>,
      key: '1',
    },
    {
      type: 'divider',
    },
    {
      label: '3rd menu item',
      key: '3',
    },
  ];
  return (
    <div className="flex justify-between p-2 items-center">
      <div className="">Logo</div>
      <div className="">
        <div className="w-52 relative">
          <input
            type="text"
            placeholder="search"
            className="border rounded-lg w-full p-1"
          />
          <button className="absolute right-0 text-gray-400 translate-y-1">
            <SearchIcon />
          </button>
        </div>
      </div>
      <div className="">
        <IconButton onClick={handleDrawerOpen}>
          <DehazeIcon />
        </IconButton>
        <Drawer anchor="right" open={openDrawer} onClose={handleDrawerClose}>
          <Box sx={{ width: 250, height: "100%", bgcolor: "#eee" }}>
            <IconButton onClick={handleDrawerClose} aria-label="close">
              <Close />
            </IconButton>
            <div className="font-bold flex flex-col items-center gap-y-12">
            <Dropdown
                menu={{
                  items:items
                }}
                trigger={["click"]}
              >
                <a onClick={(e) => e.preventDefault()}>
                  <Space>
                    Click me
                    {/* <DownOutlined /> */}
                  </Space>
                </a>
              </Dropdown>
            </div>
          </Box>
        </Drawer>
      </div>
    </div>
  );
};

export default Header;
