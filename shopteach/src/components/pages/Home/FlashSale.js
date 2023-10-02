import { AiOutlineRight } from "react-icons/ai";

import React from "react";
import { useState, useEffect} from "react";
import { Link } from "react-router-dom";

export default function FlashSale() {
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  useEffect(()=>{
    const DateTimer = new Date(" Nov 09 2023 23:59:59").getTime();
   let  intervalTimer = setInterval(() => {
      const newTimer = new Date().getTime();
      const distance = DateTimer - newTimer;
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const senconds = Math.floor((distance % (1000 * 60 )) / 1000);
      if (distance < 0 ) {
        clearInterval(intervalTimer);
      } else {
        setTimerHours((hours > 9 ? hours : "0" + hours));
        setTimerMinutes((minutes > 9 ? minutes : "0" + minutes));
        setTimerSeconds((senconds > 9 ? senconds : "0" + senconds));
      }
    }, 1000);
    return ()=>clearInterval(intervalTimer)

  },[])
  return (
    <div className="w-full  h-[280px] mt-[13px]   rounded bg-gradient-to-r from-purple-300 from-[-250%] border">
      <div className=" grid grid-cols-12 pt-3 mb-3 pl-4 ">
        <div className="flex col-span-10">
          <div className=" rotate-12">
            <div className="w-[18.5px] "> 
              <img
               className="w-full h-8"
                alt=""
                src="https://cdn-icons-png.flaticon.com/128/740/740845.png"
              /> 
          </div> 
          </div>
          <span className="text-[1.3rem]  font-mono font-black italic pr-1 pt-1">
            FLASH
          </span>
          <span className="text-[1.3rem]  font-mono font-black italic pt-1 ">
            SALE
          </span>
          <div className="flex">
            <div className=" w-8 py-[5px] pl-[6px] bg-violet  rounded text-[1.1rem] font-black text-white ml-2 mr-[4px]">

              {timerHours}
            </div>
            <div className="text-[1.1rem]  font-black">:</div>
            <div className=" w-8 py-[5px] pl-[6px] bg-violet  rounded text-[1.1rem] font-black text-white ml-2 mr-[4px]">
              {timerMinutes}
            </div>
            <div className="text-[1.1rem] font-black">:</div>
            <div className=" w-8 py-[5px] pl-[5px] bg-violet  rounded text-[1.1rem] font-black text-white ml-2 mr-[4px]">
              {timerSeconds}
            </div>
          </div>
        </div>

        <div className="  w-full text-sky-400 font-semibold cursor-pointer col-span-2 pl-10 pt-[3px] hover:text-sky-300">
          <Link className="flex items-center" to="/">
            <span className="text-[1rem]  ">Xem thêm</span>

            <AiOutlineRight className="mx-[2px] mt-[2px] text-[1.05rem]" />
          </Link>
        </div>
      </div>
      <div className=" grid  grid-cols-12 gap-2 px-3 ">
        <div className=" col-span-2 w-full h-[205px]  rounded border bg-white cursor-pointer  hover:scale-[1.01]">
          <img
            className="w-[95%] h-36 object-cover first-letter:flex m-auto"
            alt=""
            src="https://salt.tikicdn.com/cache/280x280/media/catalog/producttmp/36/48/d5/34042800e2d7ac31acd35f6b5d6969d9.jpg.webp"
          />
          <div className="pl-3  pt-2">
            <span className=" font-bold text-[1rem] text-[#f43f5e]">
              90.000đ
            </span>
          </div>
          <div className="pl-3 flex gap-2 p1-[5px] pb-[2px]">
            <span className=" font-medium text-[0.85rem] text-[#cbd5e1] line-through">
              145.000đ
            </span>
            <span className=" font-black text-[0.85rem] text-[#f43f5e]">
              -30%
            </span>
          </div>
        </div>
        <div className=" col-span-2 w-full h-[205px]  rounded border bg-white">
          <img
            className="w-[95%] h-36 object-cover first-letter:flex m-auto"
            alt=""
            src="https://media3.scdn.vn/img4/2022/06_23/GWm2X1IfrmH6Rqi0TE1b_simg_b5529c_250x250_maxb.jpg"
          />
          <div className="pl-3  pt-2">
            <span className=" font-bold text-[1rem] text-[#f43f5e]">
              90.000đ
            </span>
          </div>
          <div className="pl-3 flex gap-2 p1-[5px] pb-[2px]">
            <span className=" font-medium text-[0.85rem] text-[#cbd5e1] line-through">
              145.000đ
            </span>
            <span className=" font-black text-[0.85rem] text-[#f43f5e]">
              -30%
            </span>
          </div>
        </div>
        <div className=" col-span-2 w-full h-[205px]  rounded border bg-white">
          <img
            className="w-[95%] h-36 object-cover first-letter:flex m-auto"
            alt=""
            src="https://salt.tikicdn.com/cache/280x280/ts/product/3a/2c/12/fe126ebdc9133289c0ab625aaa00ebd1.jpg.webp"
          />
          <div className="pl-3  pt-2">
            <span className=" font-bold text-[1rem] text-[#f43f5e]">
              90.000đ
            </span>
          </div>
          <div className="pl-3 flex gap-2 p1-[5px] pb-[2px]">
            <span className=" font-medium text-[0.85rem] text-[#cbd5e1] line-through">
              145.000đ
            </span>
            <span className=" font-black text-[0.85rem] text-[#f43f5e]">
              -30%
            </span>
          </div>
        </div>
        <div className=" col-span-2 w-full h-[205px]  rounded border bg-white">
          <img
            className="w-[95%] h-36 object-cover first-letter:flex m-auto"
            alt=""
            src="https://media3.scdn.vn/img2/2018/6_23/SzAEZD_simg_b5529c_250x250_maxb.jpg"
          />
          <div className="pl-3  pt-2">
            <span className=" font-bold text-[1rem] text-[#f43f5e]">
              90.000đ
            </span>
          </div>
          <div className="pl-3 flex gap-2 p1-[5px] pb-[2px]">
            <span className=" font-medium text-[0.85rem] text-[#cbd5e1] line-through">
              145.000đ
            </span>
            <span className=" font-black text-[0.85rem] text-[#f43f5e]">
              -30%
            </span>
          </div>
        </div>
        <div className=" col-span-2 w-full h-[205px]  rounded border bg-white">
          <img
            className="w-[95%] h-36 object-cover first-letter:flex m-auto"
            alt=""
            src="https://media3.scdn.vn/img4/2022/07_23/vFOr9qYYqPk0quIFsBvl_simg_b5529c_250x250_maxb.jpg"
          />
          <div className="pl-3  pt-2">
            <span className=" font-bold text-[1rem] text-[#f43f5e]">
              90.000đ
            </span>
          </div>
          <div className="pl-3 flex gap-2 p1-[5px] pb-[2px]">
            <span className=" font-medium text-[0.85rem] text-[#cbd5e1] line-through">
              145.000đ
            </span>
            <span className=" font-black text-[0.85rem] text-[#f43f5e]">
              -30%
            </span>
          </div>
        </div>
        <div className=" col-span-2 w-full h-[205px]  rounded border bg-white">
          <img
            className="w-[95%] h-36 object-cover first-letter:flex m-auto"
            alt=""
            src="https://salt.tikicdn.com/cache/280x280/ts/product/b0/39/57/cdce3bcbefd3a319be3847bf73ad2f84.jpg.webp"
          />
          <div className="pl-3  pt-2">
            <span className=" font-bold text-[1rem] text-[#f43f5e]">
              90.000đ
            </span>
          </div>
          <div className="pl-3 flex gap-2 p1-[5px] pb-[2px]">
            <span className=" font-medium text-[0.85rem] text-[#cbd5e1] line-through">
              145.000đ
            </span>
            <span className=" font-black text-[0.85rem] text-[#f43f5e]">
              -30%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
