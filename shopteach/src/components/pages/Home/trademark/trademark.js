import { AiOutlineRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useState } from "react";

import TrademarkOne from "./TrademarkOne";
import TrademarkTwo from "./TrademarkTwo";
import TrademarkThree from "./TrademarkThree";

import React from "react";
export default function Trademark() {
  const listTrademark = ["Apple", "PNJ", " Pharmacity"];
  
  const [tabTrademark,settabTrademark] = useState(0)
  return (
    <div className="w-full  h-[440px] mt-[13px]   rounded bg-gradient-to-r bg-slate-100 from-[-200%] border">
      <div className="w-full py-4 px-4 flex">
        <span className="text-[1.09rem]   font-black">Thương hiệu nổi bật</span>
      </div>
      <div className=" grid grid-cols-12">
        <div className=" col-span-10">
          <ul className="flex items-center ml-7 ">
            {listTrademark.map((item, index) => {
              return (
                <li
                onClick={()=>settabTrademark(index)}
                  key={index}
                  className={ tabTrademark === index ? 'ml-5 h-[30px] pt-[2px] rounded-xl border  cursor-pointer hover:border-violet border-violet' : 'ml-5 h-[30px] pt-[2px]  rounded-xl border  cursor-pointer hover:border-violet transition-all ease-out duration-75 hover:scale-[1.02]'} 
                >
                  <span className={tabTrademark === index ? 'w-full px-5   hover:text-fuchsia-500    font-semibold text-violet' : 'w-full px-5   hover:text-fuchsia-500    font-semibold'}>
                    {item}
                  </span>
                </li>                       
              );
            })}
          </ul>
        </div>
        <div className=" col-span-2 w-full text-sky-400 font-semibold cursor-pointer pl-[50px] pt-[3px] hover:text-sky-300">
          <Link className="flex items-center" to="/">
            <span className="text-[1rem]  ">Xem thêm</span>

            <AiOutlineRight className="mx-[2px] mt-[1px] text-[1.05rem]" />
          </Link>
        </div>
      </div>
   
      <div className="  mt-3  w-full ">
            <ul>

              <li className={  tabTrademark === 0 ? 'grid grid-cols-5 pl-3 gap-2 ' : 'hidden'}>
            <TrademarkOne/>

              </li>
              <li className={  tabTrademark === 1 ? 'grid grid-cols-5 pl-3 gap-2 ' : 'hidden'}>
            <TrademarkTwo/>

              </li>
              <li className={  tabTrademark === 2 ? 'grid grid-cols-5 pl-3 gap-2 ' : 'hidden'}>
            <TrademarkThree/>

              </li>
            </ul>
      </div>
    </div>
  );
}
