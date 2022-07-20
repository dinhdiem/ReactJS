import React from "react";
import { BsLaptop, BsPhone, BsTablet, BsHeadphones } from "react-icons/bs";
import { BiSearchAlt2 } from "react-icons/bi";
import { NavLink, Outlet } from "react-router-dom";
import logo from "../../assets/image/anhhtus-logo 2.png";

type Props = {};

const LayoutAdmin = (props: Props) => {
  return (
    <div className="">
      <header className="bg-[#00B0D7] flex justify-between items-center pr-20 pl-10 w-full">
        <div className="flex items-center space-x-3">
          <img src={logo} className="h-[58px] w-[65px]" />
          <span className="text-[#FFFFFF]">Dashboard</span>
        </div>
        <div className="flex items-center relative">
          <div className="absolute left-2">
            <BiSearchAlt2 />
          </div>
          <input type="text" className="w-[533px] h-[34px] rounded-lg px-6" />
        </div>
        <div>
          <span className="text-[18px] font-semibold text-white">
            Xin chào Bùi Tiến Đình
          </span>
        </div>
      </header>
      <div className="flex">
        <div className="flex flex-col justify-between h-screen bg-white border-r w-[250px]">
          <div className="px-4 py-6">
            <nav className="flex flex-col mt-6 space-y-1">
              <NavLink
                to="/admin/phone"
                className="flex items-center px-4 py-2 text-gray-500 hover:bg-[#00B0D7] hover:text-white  rounded-lg w-[180px]"
              >
                <div className="text-xl">
                  <BsPhone />
                </div>
                <span className="ml-3 text-sm font-medium">Điện thoại</span>
              </NavLink>
              <a
                href="/admin/laptop"
                className="flex items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-[#00B0D7] hover:text-white w-[180px]"
              >
                <div className="text-xl">
                  <BsLaptop />
                </div>

                <span className="ml-3 text-sm font-medium"> Laptop </span>
              </a>
              <a
                href=""
                className="flex items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-[#00B0D7] hover:text-white w-[180px]"
              >
                <div className="text-xl">
                  <BsTablet />
                </div>
                <span className="ml-3 text-sm font-medium">Máy tính bảng</span>
              </a>
              <a
                href=""
                className="flex items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-[#00B0D7] hover:text-white w-[180px]"
              >
                <div className="text-xl">
                  <BsHeadphones />
                </div>
                <span className="ml-3 text-sm font-medium">Âm thanh</span>
              </a>
            </nav>
          </div>
        </div>
        <div className="grow bg-gray-100">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default LayoutAdmin;
