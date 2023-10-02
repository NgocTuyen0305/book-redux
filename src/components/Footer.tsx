import React from "react";
import { AiFillFacebook } from "@react-icons/all-files/ai/AiFillFacebook";
import { SiGmail } from "@react-icons/all-files/si/SiGmail";
import { AiFillInstagram } from "@react-icons/all-files/ai/AiFillInstagram";
import { Input, } from 'antd';
const Footer = () => {
  const { Search } = Input;
  const onSearch = (value, _e, info) => console.log(info?.source, value);
  return (
    <div className="p-2 bg-[#F0F0F0]">
      <div className="flex justify-between flex-col md:max-w-6xl md:mx-auto">
        <div className="my-6 grid grid-cols-4">
          <div className="flex flex-col gap-y-4">
            <label htmlFor="" className="font-inclusiveSans">Company</label>
            <div className="flex flex-col gap-y-2 text-sm">
              <span>About</span>
              <span>Store</span>
              <span>FQA</span>
            </div>
          </div>
          <div className="flex flex-col gap-y-4">
            <label htmlFor="" className="font-inclusiveSans">Service</label>
            <div className="flex flex-col gap-y-2 text-sm">
              <span>Delivery</span>
              <span>Paymant</span>
              <span>Contacts</span>
            </div>
          </div>
          <div className="flex flex-col gap-y-4">
            <label htmlFor="" className="font-inclusiveSans">Follows us</label>
            <div className="flex flex-col gap-y-2 text-sm">
              <span>Instagram</span>
              <span>Facebook</span>
              <span>Twitter</span>
            </div>
          </div>
          <div className="flex flex-col gap-y-4">
            <label htmlFor="" className="font-inclusiveSans">Get our newsletters</label>
            <div className="">
            <Search placeholder="your email" onSearch={onSearch} enterButton />
            </div>
          </div>
         
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col">
            <span className="text-xs font-bold font-poppins">Book Genuine</span>
            <span className="text-xs">Sách hay uy tín tạo thương hiệu</span>
          </div>
          <div className="flex space-x-3 items-center text-2xl">
            <AiFillFacebook className="border p-1 rounded-full border-gray-500" />
            <SiGmail className="border p-1 rounded-full border-gray-500" />
            <AiFillInstagram className="border p-1 rounded-full border-gray-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
