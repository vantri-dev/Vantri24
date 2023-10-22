import React from "react";

import { FaShippingFast } from "react-icons/fa";
import { BsChevronRight } from "react-icons/bs";

import FreeShipping from "./FreeShipping";
import { Link } from "react-router-dom";
export default function PracticalShipping() {
  return (
    <div className="  bg-orange-200    relative  scroll-smooth  h-[3500px] w-full">
      <div className=" flex items-center ml-[158px] py-2">
        <Link to="/">
          <span className="text-[0.9rem] text-slate-500">Trang chủ</span>
        </Link>
        <BsChevronRight className="text-[0.9rem] mt-[2px] text-slate-400" />
        <Link to="/practicalShipping">
          <span className="text-[0.9rem] ">Tiện ích</span>
        </Link>
      </div>
      <div className="flex  justify-center">
        <img
          className="w-[1200px] h-auto  object-contain  "
          alt=""
          src="https://thuhuongcake.vn/files/assets/mien_phi_van_chuyen_khi_mua_banh_sinh_nhat_tai_thu_huong_bakery.jpg"
        />
      </div>
      <div className="flex  justify-center sticky  bg-orange-200   top-[80px] z-999    mb-10 ">
        <ul className="flex items-center mt-7  ">
          <li className="flex items-center  flex-col   w-[60px] mx-14  rounded-full cursor-pointer">
            <a href="#freeshipping">
              <FaShippingFast className="text-[6rem] text-white   bg-teal-200 rounded-full w-[75px] h-[75px] px-[10px] py-[10px]" />
              <span className="text-textword text-[0.95rem]  font-sans font-medium flex-wrap">
                Mien phi ship cod
              </span>
            </a>
          </li>

          <li className="flex items-center  flex-col   w-[60px] mx-14 rounded-full cursor-pointer">
            <FaShippingFast className="text-[6rem] text-white   bg-teal-200 rounded-full w-[75px] h-[75px] px-[10px] py-[10px]" />
            <span className="text-textword text-[0.95rem]  font-sans font-medium flex-wrap">
              Mien phi ship cod
            </span>
          </li>
          <li className="flex items-center  flex-col   w-[60px] mx-14  rounded-full cursor-pointer">
            <FaShippingFast className="text-[6rem] text-white   bg-teal-200 rounded-full w-[75px] h-[75px] px-[10px] py-[10px]" />
            <span className="text-textword text-[0.95rem]  font-sans font-medium flex-wrap">
              Mien phi ship cod
            </span>
          </li>

          <li className="flex items-center  flex-col   w-[60px] mx-14  rounded-full cursor-pointer">
            <FaShippingFast className="text-[6rem] text-white   bg-teal-200 rounded-full w-[75px] h-[75px] px-[10px] py-[10px]" />
            <span className="text-textword text-[0.95rem]  font-sans font-medium flex-wrap">
              Mien phi ship cod
            </span>
          </li>
          <li className="flex items-center  flex-col   w-[60px] mx-14 x rounded-full cursor-pointer">
            <FaShippingFast className="text-[6rem] text-white   bg-teal-200 rounded-full w-[75px] h-[75px] px-[10px] py-[10px]" />
            <span className="text-textword text-[0.95rem]  font-sans font-medium flex-wrap">
              Mien phi ship cod
            </span>
          </li>
        </ul>
      </div>
      <div className="z-0  flex justify-center">
        <ul className="   mx-[160px] h-[100px]  ">
          <li>
            
         <FreeShipping/>
          </li>
        </ul>
      </div>
    </div>
  );
}
