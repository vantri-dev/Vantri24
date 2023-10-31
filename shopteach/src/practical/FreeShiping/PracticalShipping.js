import React from "react";

import { FaShippingFast } from "react-icons/fa";
import { BsChevronRight } from "react-icons/bs";
import { TiFlashOutline } from "react-icons/ti";
import { PiHandbagFill } from "react-icons/pi";
import { BiLogoShopify } from "react-icons/bi";

import FreeShipping from "./FreeShipping";
import SummerSale from "./SummerSale";
import DealShipping from "./DealShipping";
import { Link } from "react-router-dom";
import Outstandingprogram from "./Outstandingprogram";
export default function PracticalShipping() {
  return (
  
    <div className="  bg-orange-200    relative   min-h-[7000px] w-full">
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
      <div className="flex  justify-center  sticky bg-orange-200   top-[80px]   z-50   mb-10 ">
        <ul className="flex items-center mt-7  ">
          <li className="flex items-center  flex-col   w-[60px] mx-14  rounded-full cursor-pointer">
            <a href="#freeshipping">
              <FaShippingFast className="text-[6rem] text-white   bg-teal-200 rounded-full w-[75px] h-[75px] px-[10px] py-[10px]" />
              <div className="text-center">
                <span className="text-textword text-[0.95rem]  font-sans font-medium flex-wrap ">
                  Miễn phí ship code
                </span>
              </div>
            </a>
          </li>
          <li className="flex items-center  flex-col   w-[60px] mx-14  rounded-full cursor-pointer">
            <a href="#summersale">
              <TiFlashOutline className="text-[6rem] text-white   bg-teal-200 rounded-full w-[75px] h-[75px] px-[10px] py-[10px]" />
              <div className="text-center ">
                <span className="text-textword text-[0.95rem]  font-sans font-medium flex-wrap ">
               Mùa hè siêu sale
                </span>
              </div>
            </a>
          </li>
          <li className="flex items-center  flex-col   w-[60px] mx-14  rounded-full cursor-pointer">
            <a href="#deal">
              <BiLogoShopify className="text-[6rem] text-white   bg-teal-200 rounded-full w-[75px] h-[75px] px-[10px] py-[10px]" />
              <div className=" text-center">
                <span className="text-textword text-[0.95rem]  font-sans font-medium flex-wrap ">
               Deal xịn mỗi ngày
                </span>
              </div>
            </a>
          </li>
          <li className="flex items-center  flex-col   w-[60px] mx-14  rounded-full cursor-pointer">
            <a href="#outstanding">
              <PiHandbagFill className=" ml-[10px] text-[6rem] text-white   bg-teal-200 rounded-full w-[75px] h-[75px] px-[10px] py-[10px]" />
              <div className=" w-[100px] text-center">
                <span className="text-textword text-[0.95rem]  font-sans font-medium  ">
              Chương trình  nổi bật
                </span>
              </div>
            </a>
          </li>
        

        
        </ul>
      </div>
      <div className="z-0  flex justify-center">
        <ul className="   mx-[160px] h-[100px]  " id="freeshipping">
          <li>
            <FreeShipping />
          </li>
          <li className="mt-20" id="summersale">
            <SummerSale />
          </li>
          <li className="mt-[150px]" id="deal">
            <DealShipping />
          </li>
          <li className="mt-[150px]" id="outstanding">
            <Outstandingprogram />
          </li>
        </ul>
      </div>
    </div>
  );
}
