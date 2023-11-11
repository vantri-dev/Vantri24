import React from "react";

import { AiTwotoneThunderbolt, AiFillPlusCircle } from "react-icons/ai";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { BsChevronRight } from "react-icons/bs";

import Product from "./ProductSale";
import CountDown from "../CountDown";

import { Link } from "react-router-dom";

export default function FlashSale() {
  const menuSales = [
    {
      title: "Tiện ích",
      icon: <AiFillPlusCircle />,
    },
    {
      title: "Tiện ích",
      icon: <AiFillPlusCircle />,
    },
    {
      title: "Tiện ích",
      icon: <AiFillPlusCircle />,
    },
    {
      title: "Tiện ích",
      icon: <AiFillPlusCircle />,
    },
    {
      title: "Tiện ích",
      icon: <AiFillPlusCircle />,
    },
    {
      title: "Tiện ích",
      icon: <AiFillPlusCircle />,
    },
    {
      title: "Tiện ích",
      icon: <AiFillPlusCircle />,
    },
    {
      title: "Tiện ích",
      icon: <AiFillPlusCircle />,
    },
  ];
  const handlePrevList = () => {
    const prevSale = document.getElementById("sale");
    prevSale.scrollLeft = prevSale.scrollLeft - 500;
  };
  const handleNextList = () => {
    const prevSale = document.getElementById("sale");
    prevSale.scrollLeft = prevSale.scrollLeft + 500;
  };
  return (
    <div className="pr-[100px]  pl-[90px]  w-full  bg-gray-100 relative ">
       <div className=" flex items-center  py-2">
        <Link to="/">
          <span className="text-[0.9rem] text-slate-500">Trang chủ</span>
        </Link>
        <BsChevronRight className="text-[0.9rem] mt-[2px] text-slate-400" />
        <Link to="/flashSale">
          <span className="text-[0.9rem] ">Flash Sale</span>
        </Link>
      </div>
      <div className="flex justify-center relative">
        <img
          className="w-full h-max object-contain"
          alt=""
          src="https://salt.tikicdn.com/ts/upload/d3/43/bd/30cfa671df73424b85e0171bee112023.png"
        />
        <div className="absolute top-2 flex items-center flex-col ">
          <span className="  font-sans text-[1.6rem] font-bold text-white  italic flex items-center ">
            <span>Giá Sốc</span>
            <AiTwotoneThunderbolt className="  text-amber-200 text-[2.3rem] mx-1  " />
            <span>Hôm Nay</span>
          </span>
          <span className=" text-slate-300 font-sans text-[0.95rem]">
            Kết thúc sau
          </span>
          <div className="mt-2">
            <CountDown />
          </div>
        </div>
      </div>
      <div className=" sticky top-[80px] w-full bg-white py-[16px]  z-999 ">
        <ul
          id="sale"
          className="flex items-center gap-4   overflow-x-scroll scroll-smooth  whitespace-nowrap px-1"
          style={{ overflow: "hidden" }}
        >
          <BiChevronLeft
            onClick={handlePrevList}
            className=" absolute left-[-20px]  text-[1.5rem] rounded-full w-8 h-8 my-1 mx-1  border-slate-300 border  bg-white  text-gray-500 "
          />
          {menuSales.map((menu, i) => {
            return (
              <li
                key={i}
                className="  border   rounded cursor-pointer hover:border-violet   ease-out   duration-1000"
              >
                <span className="text-[1.28rem] font-sans  text-slate-500 hover:text-violet py-4 px-9  flex items-center gap-1  ">
                  {menu.icon}
                  {menu.title}
                </span>
              </li>
            );
          })}

          <BiChevronRight
            onClick={handleNextList}
            className="absolute right-[-20px]  text-[1.5rem] rounded-full w-8 h-8 my-1 mx-1  border-slate-300 border  bg-white  text-gray-500 cursor-pointer "
          />
        </ul>
      </div>
      <div>
        <img
          className="w-full   object-contain"
          alt=""
          src="https://cf.shopee.vn/file/vn-50009109-c78d1d41b6a9555726026146aef5f0f3_xxhdpi"
        />
      </div>

      <Product />
    </div>
  );
}
