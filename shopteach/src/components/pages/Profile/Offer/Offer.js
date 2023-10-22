import { BiChevronRight } from "react-icons/bi";

import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import VoucherEmty from "./VoucherEmty";

export default function Offer() {
  const [dataVoucher, setDataVoucher] = useState([]);
  const [tabs, setTabs] = useState(0);
  const listOffer = ["Shopteach", "Shop", "Dịch vụ", "Pay", "Tiện ích"];
  useEffect(() => {
    const VoucherData = async () => {
      const rep = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await rep.json();
      setDataVoucher(data);
    };
    VoucherData();
  }, []);
  return (
    <div className=" w-full  bg-gray-100">
      <div className="w-full h-[70.2%]    rounded">
        <div className="border-b">
          <nav className="flex  pt-7  pb-2 justify-around ">
            {listOffer.map((item, index) => {
              return (
                <div
                  onClick={() => setTabs(index)}
                  key={index}
                  className=" cursor-pointer text-[1.07rem] font-medium "
                >
                  <span
                    className={
                      tabs === index
                        ? "text-violet  "
                        : "text-textword  hover:text-violet"
                    }
                  >
                    {item}
                  </span>
                </div>
              );
            })}
          </nav>
        </div>
        <ul className=" bg-slate-100">
          <li className={tabs === 0 ? "block w-full   " : "hidden"}>
            <div className="grid grid-cols-2 gap-3 mt-3 px-3">
              {dataVoucher.map((voucher, index) => {
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
                            Giảm {(voucher.id * 10)}% cho đơn tối thiểu {voucher.id.toFixed(1)}k
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
          </li>
          <li className={tabs === 1 ? "block" : "hidden"}>
            <VoucherEmty />
          </li>
          <li className={tabs === 2 ? "block" : "hidden"}>
            <VoucherEmty />
          </li>
          <li className={tabs === 3 ? "block" : "hidden"}>
            <VoucherEmty />
          </li>
          <li className={tabs === 4 ? "block" : "hidden"}>
            <VoucherEmty />
          </li>
        </ul>
      </div>
    </div>
  );
}
