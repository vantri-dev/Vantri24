import React from "react";
import {  BsChevronRight } from "react-icons/bs";

import logoApple from "../../../img/apple-logo.png";
import logoSamsung from "../../../img/samsung.png";
import logoGG from "../../../img/google-plus.png";
import logoXiaomi from "../../../img/xiaomi-33363.png";
import logoOnePlus from '../../../img/oneplus1.png'

import SliderSmartPhone from "./SliderSmartPhone";
import ProductPhone from "./ProductPhone/ProductPhone";

import { Link } from "react-router-dom";
export default function SmartPhoneProduct() {
  const listPhoneCompany = [
    {
      name: "Apple",
        path:'/brandphone',
      imgPhone:
        "https://tse1.mm.bing.net/th?id=OIP.cvc49N1K37yrn0biV30vBAHaIw&pid=Api&P=0&h=180",
      logo: logoApple,
    },
    {
      name: "Samsung",
      imgPhone:
        "https://media.pakprice.pk/288/otRdSrGmyr0jk9jpGFsDSevTiJBtoaK81UGAljcV.jpeg",
      logo: logoSamsung,
    },
    {
      name: "Pixel",

      imgPhone:
        "https://tse4.mm.bing.net/th?id=OIP.UxOQ6VkYL6Shy09YutqxtQHaEK&pid=Api&P=0&h=180",
      logo: logoGG,
      px: "150px",
    },
    {
      name: "Xiaomi",

      imgPhone:
        "https://cdn.mobilecity.vn/mobilecity-vn/images/2023/04/w300/xiaomi-black-shark-3-xam.jpg.webp",
        logo:logoXiaomi
    },
    {
      name: "Oneplus",
      imgPhone:
        "https://tse4.mm.bing.net/th?id=OIP.XwCShkbcabZKvq2FSfryBgHaHa&pid=Api&P=0&h=180",
        logo: logoOnePlus,
    },
  ];
  return (
    <div className="w-full pt-[10px] pr-[100px]  pl-[90px] grid gap-3  bg-gray-100   ">
      <div className="w-full flex items-center">
        <Link to='/'>
        <span className="text-[0.9rem] text-slate-500">
          Trang chủ
        </span>
        </Link>
        <BsChevronRight className="text-[0.9rem] mt-1 text-slate-400 mr-1"/>
        <Link>
      <span className="text-[0.9rem]">
        Điện thoại
      </span>
        </Link>
        
       
      </div>
      <SliderSmartPhone />

      <div className="w-full bg-white  h-[390px] rounded ">
        <div className="flex items-center">
          <p className="text-[1.09rem]   font-black  py-5 pl-4">Thương hiệu</p>
          <img
            className="w-15 h-5 pl-1 mt-1"
            alt=""
            src="https://salt.tikicdn.com/ts/tka/69/cf/22/1be823299ae34c7ddcd922e73abd4909.png"
          />
        </div>

        <ul className=" grid grid-cols-5 ">
          {listPhoneCompany.map((phoneCompany, index) => {
            return (
              <Link to={phoneCompany.path} key={index}>
              <li  className=" col-span-1 mx-5 w-[73%] cursor-pointer  mt-1 py-2 px-2 rounded-lg border hover:border-violet transition-all ease-out translate-y-0 hover:-translate-y-[3px]">
                <div className="   rounded-xl">
                  <div className="  flex  items-center">
                    <img
                      className="w-full h-[200px] rounded  object-contain"
                      alt=""
                      src={phoneCompany.imgPhone}
                    />
                  </div>
                  <div className="w-full flex justify-center py-4   items-center">
                    <span className="  font-mono font-black text-[1.2rem] object-contain pt-[2px]">
                      {phoneCompany.name}
                    </span>
                    <img
                      className="w-10 h-9 object-contain "
                      alt=""
                      src={phoneCompany.logo}
                    />
                  </div>
                </div>
              </li>
              </Link>
            );
          })}
        </ul>
      </div>
      <ProductPhone/>

    </div>
  );
}
