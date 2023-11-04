import React from "react";

import {
  BsChevronRight,
  BsPhone,
  BsBook,
  BsSmartwatch,
  BsHandbag,
  BsLaptop,
  BsCpu,
} from "react-icons/bs";
import { BiChevronRight } from "react-icons/bi";
import { BiChevronLeft } from "react-icons/bi";
import { PiTelevisionSimpleLight } from "react-icons/pi";
import { IoStorefrontOutline } from "react-icons/io5";
import { CiMedicalCross } from "react-icons/ci";

import { Link } from "react-router-dom";

import StoreBook from "./StoreBook";
import Fashion from "./Fashion";
import VoucherSmartPhone from "./CategoryVoucher/VoucherSmartPhone";

import { useState, useEffect } from "react";
export default function Outstanding() {
  const [dataVoucher, setDataVoucher] = useState([]);
  const [indexVoucher, setIndexVoucher] = useState(0);
  useEffect(() => {
    const VoucherData = async () => {
      const rep = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await rep.json();
      setDataVoucher(data);
    };
    VoucherData();
  }, []);

  const menuSales = [
    {
      title: "Điện thoại",
      icon: <BsPhone />,
    },
    {
      title: "Nhà sách",
      icon: <BsBook />,
    },
    {
      title: "Điện gia dụng",
      icon: <PiTelevisionSimpleLight />,
    },
    {
      title: "Bách hóa online",
      icon: <IoStorefrontOutline />,
    },
    {
      title: "Sức khỏe ",
      icon: <CiMedicalCross />,
    },
    {
      title: "Đồng hồ",
      icon: <BsSmartwatch />,
    },
    {
      title: "Thời trang",
      icon: <BsHandbag />,
    },
    {
      title: "Máy tính",
      icon: <BsLaptop />,
    },
    {
      title: "Điện tử",
      icon: <BsCpu />,
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

  const handleActiveVoucher = (index) => {
    setIndexVoucher(index);
  };
  return (
    <div className="w-full   bg-blue-700 px-[138px]">
      <div className=" flex items-center py-2">
        <Link to="/">
          <span className="text-[0.9rem] text-slate-300">Trang chủ</span>
        </Link>
        <BsChevronRight className="text-[0.9rem] mt-[2px] text-slate-300" />
        <Link to="/outstanding">
          <span className="text-[0.9rem] ">Mã giảm giá</span>
        </Link>
      </div>
      <div className="flex  justify-center flex-col gap-3">
        <img
          alt=""
          src="https://salt.tikicdn.com/cache/w1240/ts/brickv2og/6f/f1/74/66dcda51ecbbea4433b642d6a1e390aa.png.webp"
        />
        <img
          alt=""
          src="https://salt.tikicdn.com/cache/w1208/ts/brickv2og/05/52/39/1a6c82048679cc30d65b93f222f1f40d.png.webp"
        />
        <img
          className=" mt-10"
          alt=""
          src="https://salt.tikicdn.com/cache/w1240/ts/brickv2og/bc/14/ec/b5861a242613f4e5ad1e476cf8aa58c0.png.webp"
        />
        <img
          alt=""
          src="https://salt.tikicdn.com/cache/w1240/ts/brickv2og/f5/fe/fa/f634b115aeef2f3792c98e422476752c.png.webp"
        />
      </div>
      <div className="grid grid-cols-2 gap-3 mt-3 px-3">
        {dataVoucher.slice(0, 10).map((voucher, index) => {
          return (
            <div key={index} className=" col-span-1  relative">
              <div className=" col-span-1 grid grid-cols-3  bg-white border shadow-md w-full h-[120px] rounded ">
                <div className=" col-span-1  min-h-[117px] bg-orange-200  w-[85%]  rounded-tl rounded-bl ">
                  <img
                    src="https://cf.shopee.vn/file/sg-11134004-22120-4cskiffs0olvc3"
                    alt=""
                    className=" object-contain max-h-full w-full"
                  />
                </div>
                <div className="col-span-2 ">
                  <div className="grid grid-cols-3 py-2  px-1">
                    <span className=" col-span-2 text-[1.05rem] text-textword ">
                      Giảm {voucher.id * 10}% cho đơn tối thiểu{" "}
                      {voucher.id.toFixed(1)}k
                    </span>
                    <Link
                      to="/"
                      className="col-span-1 flex justify-end cursor-pointer "
                    >
                      <span className=" text-fuchsia-400">Dùng ngay</span>
                      <BiChevronRight className=" mt-[5%] text-[1.1rem] text-violet" />
                    </Link>
                  </div>
                  <div className="grid grid-cols-3 pt-5  px-2">
                    <span className=" col-span-2  text-slate-300  font-thin">
                      HSD:<span className="text-[1rem]">12.02.2023</span>
                    </span>
                    <div className="col-span-1 flex justify-end pt-[2px] cursor-pointer">
                      <span className=" text-blue-500 text-[0.9rem]">
                        Điều kiện
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-5 h-2.5 rounded-bl-full rounded-br-full bg-white absolute top-0 left-[135px] border border-t-transparent "></div>
              <div className="w-5 h-2.5 rounded-tl-full rounded-tr-full bg-white absolute  bottom-0 left-[135px] border border-b-transparent "></div>
              <div className=""></div>
              <div
                class="w-0 h-0 top-[27.5px] left-[-8px] absolute
    border-t-[5px] border-t-transparent
    border-r-[9px] border-r-fuchsia-300
    border-b-[8px] border-b-transparent
    "
              ></div>
              <div className=" absolute bg-fuchsia-400   pb-[2px] rounded-sm left-[-9px] top-[7px]">
                <span className="text-[13px] px-2 pb-1  text-white font-thin">
                  Số lượng có hạn
                </span>
              </div>
            </div>
          );
        })}
      </div>
      <StoreBook />
      <div>
        <img
          className="my-10"
          alt=""
          src="https://media3.scdn.vn/img4/2023/08_07/FKKe209f2npZWDIAT3fS.png"
        />
      </div>
      <Fashion />
      <div className="  relative  w-full  py-[16px]  z-999 ">
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
                onClick={() => handleActiveVoucher(i)}
                key={i}
                className="  white border   rounded cursor-pointer hover:text-slate-300   ease-out   duration-1000"
              >
                <span className="text-[1.5rem] font-sans  text-white  hover:text-slate-300  py-4 px-9  flex items-center gap-1  ">
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
      <ul>
        <li className={indexVoucher === 0 ? "block" : "hidden"}>
          <VoucherSmartPhone />
        </li>
        <li className={indexVoucher === 1 ? "block" : "hidden"}>
          <VoucherSmartPhone />
        </li>
      </ul>
    </div>
  );
}
