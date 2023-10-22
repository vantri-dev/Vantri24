import React from "react";

import { AiOutlineRight } from "react-icons/ai";
import TranslationImg1 from "../../img/free-delivery.png";
import TranslationImg2 from "../../img/—Pngtree—a boy riding blue scooter_6499087.png";
import TranslationImg5 from "../../img/credit-card.png";
import TranslationImg6 from "../../img/thunder.png";
import TranslationImg7 from "../../img/cardboard-box.png";
import TranslationImg8 from "../../img/chip.png";

import { Link } from "react-router-dom";
export default function Translation() {
  const listTranslation = [
    {
      name: "Miễn phí vận chuyển",
      img: TranslationImg1,
      bg: "bg-[#fff7ed]",
      path:'/practicalShipping'
    },
    {
      name: "Giao hàng tận nơi",
      img: TranslationImg2,
      bg: "bg-[#ede9fe]",
    },

    {
      name: "Nạp thẻ và dịch vụ",
      img: TranslationImg5,
      bg: "bg-[#eff6ff]",
    },
    {
      name: "Khung giờ săn sale",
      img: TranslationImg6,
      bg: "bg-[#eef2ff]",
    },
    {
      name: "Thời trang hiện nay",
      img: TranslationImg7,
      bg: "bg-[#faf5ff]",
    },
    {
      name: "Sản phẩm công nghệ",
      img: TranslationImg8,
      bg: "bg-[#f0f9ff]",
    },
  ];
  return (
    <div className="w-full  h-[220px] mt-[16px]   rounded bg-gradient-to-r from-blue-500 from-[-250%] border">
      <div>
        <div className="grid grid-cols-12 py-4 px-4  cursor-pointer">
          <div className="flex items-center col-span-10">

          <span className="text-[1.09rem]   font-black">Tiện ích cho bạn</span>
          <img
            className="w-4 h-4 ml-2"
            alt=""
            src="https://salt.tikicdn.com/ts/upload/2e/05/69/fd3c678658e51a804f8186b7757b9ab3.png"
          />
          </div>
          <div className=" col-span-2  w-full text-sky-400 font-semibold cursor-pointer pl-[50px] pt-[3px] hover:text-sky-300">
          <Link className="flex items-center" to="/">
            <span className="text-[1rem]  ">Xem thêm</span>

            <AiOutlineRight className="mx-[2px] mt-[1px] text-[1.05rem]" />
          </Link>
          </div>
        </div>
        <ul className="flex text-center justify-around ">
          {listTranslation.map((item, index) => {
            return (
              <Link to={item.path} key={index}>
                <li
                  className={`my-[4px]  px-[14px] py-[3px] rounded-lg  shadow-lg ${item.bg}  hover:scale-[1.03] `}
                >
                  <div className=" flex items-center">
                    <img
                      src={item.img}
                      alt=""
                      className="w-[60px] h-[60px] m-auto"
                    />
                  </div>
                  <div className="w-[100px] mt-[4px] mb-[5px] text-[1.2rem] ">
                    <span className="text-base text-textword font-semibold">
                      {item.name}
                    </span>
                  </div>
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
