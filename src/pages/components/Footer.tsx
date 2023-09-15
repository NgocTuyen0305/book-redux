import React from "react";
import { AiFillFacebook } from "@react-icons/all-files/ai/AiFillFacebook";
import { SiGmail } from "@react-icons/all-files/si/SiGmail";
import { AiFillInstagram } from "@react-icons/all-files/ai/AiFillInstagram";
const Footer = () => {
  return (
    <div className="p-2 bg-gray-200">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <span className="text-xs font-bold font-poppins">Book Genuine</span>
          <span className="text-xs">Sách hay uy tín tạo thương hiệu</span>
        </div>
        <div className="flex space-x-3 items-center text-2xl">
          <AiFillFacebook className="border p-1 rounded-full border-gray-500"/>
          <SiGmail className="border p-1 rounded-full border-gray-500"/>
          <AiFillInstagram className="border p-1 rounded-full border-gray-500"/>
        </div>
      </div>
    </div>
  );
};

export default Footer;
