import React from "react";
import banner from "../assets/image/banner.png";
import phone from "../assets/frame/phone.svg";
import laptop from "../assets/frame/laptop.svg";
import tablet from "../assets/frame/tablet.svg";
import tainghe from "../assets/frame/tainghe.svg";
import watch from "../assets/frame/watch.svg";
import home from "../assets/frame/home.svg";
import phukien from "../assets/frame/phukien.svg";
import pc from "../assets/frame/pc.svg";
import tivi from "../assets/frame/tivi.svg";
import thucu from "../assets/frame/thucu.svg";
import hangcu from "../assets/frame/hangcu.svg";
import khuyenmai from "../assets/frame/khuyenmai.svg";
import news from "../assets/frame/news.svg";

import Frame from "../assets/frame/Frame.svg";

type Props = {};

const Banner = (props: Props) => {
  return (
    <div className="flex justify-center mt-5">
      <div className="w-[200px] mr-5">
        <nav>
          <ul>
            <li>
              <a href="" className="grid grid-cols-[30px,160px,20px]">
                <img src={phone} />
                <p className="text-left text-black">Điện thoại</p>
                <img src={Frame} />
              </a>
            </li>
            <li>
              <a href="" className="grid grid-cols-[30px,160px,20px]">
                <img src={laptop} />
                <p className="text-left text-black">Laptop</p>
                <img src={Frame} />
              </a>
            </li>
            <li>
              <a href="" className="grid grid-cols-[30px,160px,20px]">
                <img src={tablet} />
                <p className="text-left text-black">Máy tính bảng</p>
                <img src={Frame} />
              </a>
            </li>
            <li>
              <a href="" className="grid grid-cols-[30px,160px,20px]">
                <img src={tainghe} />
                <p className="text-left text-black">Âm thanh</p>
                <img src={Frame} />
              </a>
            </li>
            <li>
              <a href="" className="grid grid-cols-[30px,160px,20px]">
                <img src={watch} />
                <p className="text-left text-black">Đồng hồ</p>
                <img src={Frame} />
              </a>
            </li>
            <li>
              <a href="" className="grid grid-cols-[30px,160px,20px]">
                <img src={home} />
                <p className="text-left text-black">Nhà thông minh</p>
                <img src={Frame} />
              </a>
            </li>
            <li>
              <a href="" className="grid grid-cols-[30px,160px,20px]">
                <img src={phukien} />
                <p className="text-left text-black">Phụ kiện</p>
                <img src={Frame} />
              </a>
            </li>
            <li>
              <a href="" className="grid grid-cols-[30px,160px,20px]">
                <img src={pc} />
                <p className="text-left text-black">PC - Màn hình</p>
                <img src={Frame} />
              </a>
            </li>
            <li>
              <a href="" className="grid grid-cols-[30px,160px,20px]">
                <img src={tivi} />
                <p className="text-left text-black">Tivi</p>
                <img src={Frame} />
              </a>
            </li>
            <li>
              <a href="" className="grid grid-cols-[30px,160px,20px]">
                <img src={khuyenmai} />
                <p className="text-left text-black">Khuyến mãi</p>
                <img src={Frame} />
              </a>
            </li>
            <li>
              <a href="" className="grid grid-cols-[30px,160px,20px]">
                <img src={news} />
                <p className="text-left text-black">Tin công nghệ</p>
                <img src={Frame} />
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="">
        <img src={banner} alt="" />
      </div>
    </div>
  );
};

export default Banner;
