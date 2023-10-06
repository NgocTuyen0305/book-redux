import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const LayoutClient = () => {
  return (
    <div className="bg-[#f8f8fa]">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default LayoutClient;
