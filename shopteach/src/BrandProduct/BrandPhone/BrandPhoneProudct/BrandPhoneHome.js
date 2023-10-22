import React from "react";

import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import BrandPosterPhone from "./BrandPosterPhone";
import BrandProduct from "./BrandProduct";
import InformationBrand from "./InformationBrand/InformationBrand";
export default function BrandPhoneProudct() {
  const [activeMenu, setActiveMenu] = useState(0);
  const listMenuBrandPhone = [
    "Trang chủ",
    "Tất cả sản phẩm",
    "Thông tin Shop",
  ];
  const listMenuProduct = ["IPab", "Apple Watch", "Iphone", "Macbook"];

  return (
    <div className="w-full bg-white ">
      <div className="px-5 py-5">
        <span className="text-[1.2rem] text-textword">Gợi ý hôm nay</span>
      </div>
      <ul className="flex items-center  justify-around w-[50%] pb-3">
        {listMenuBrandPhone.map((menuItem, index) => {
          return (
            <li
              onClick={() => setActiveMenu(index)}
              key={index}
              className={
                activeMenu === index
                  ? `text-[1.08rem]  border   rounded-2xl px-[14px] py-[5px] border-violet  cursor-pointer text-violet`
                  : `text-[1.08rem] text-textword  border   rounded-2xl px-[14px] py-[5px] hover:border-violet hover:text-violet cursor-pointer transition-all ease-out duration-75 hover:scale-[1.02]`
              }
            >
              {menuItem}
            </li>
          );
        })}
      </ul>
      <ul>
        <li className={activeMenu === 0 ? "block " : "hidden"}>
          <BrandPosterPhone />
          <div className="px-5 py-5  bg-slate-100">
            <span className=" text-gray-500 uppercase">Sản phẩm bán chạy</span>
          </div>
          <BrandProduct data={activeMenu} />
        </li>
        <li className={activeMenu === 1 ? "block bg-slate-100  w-full " : "hidden"}>
          <div className="grid grid-cols-12  gap-3  ">
            <div className=" col-span-2 mt-[12px] bg-white h-[500px]  w-full">
              <div className="  pl-5 pt-6 flex items-center   ">
                <AiOutlineMenu className="text-[1.2rem] text-textword mx-2" />
                <p className="text-textword text-[1.105rem]">Danh mục</p>
              </div>
              <ul className=" list-none  cursor-pointer">
                {
                  listMenuProduct.map((menuProduct,index)=>{
                    return(

                <li  key={index} className=" py-2 pl-10 mt-1 hover:bg-slate-100 mx-4  rounded ">
                  <span className="text-[1.05rem] text-textword">
                    {menuProduct}
                  </span>
                </li>
                    )
                  })
                }
              </ul>
            </div>
            <div className="col-span-10  ">
              <BrandProduct data={activeMenu} />
            </div>
          </div>
        </li>
        <li className={ activeMenu === 2 ? 'block' : 'hidden'}>
<InformationBrand/>
        </li>
      </ul>
    </div>
  );
}
