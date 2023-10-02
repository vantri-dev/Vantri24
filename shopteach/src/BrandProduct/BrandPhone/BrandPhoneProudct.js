import React from "react";

import { useState } from "react";
export default function BrandPhoneProudct() {
  const [activeMenu, setActiveMenu] = useState(0);
  const listMenuBrandPhone = [
    "Trang chủ",
    "Tất cả sản phẩm",
    "Giá tốt hôm nay",
  ];

  return (
    <div className="w-full bg-white ">
      <div>
        <span>Goi y hom nay</span>
      </div>
      <ul className="flex items-center  justify-around w-[50%]">
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
      <div></div>
    </div>
  );
}
