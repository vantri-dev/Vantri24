import React from "react";

export default function DetailProduct() {
  return (
    <div className=" bg-slate-100 ">
      <div className=" bg-white mt-3  ">
        <div className="px-5 py-5">
          <span className="text-[1.1rem]  font-light  text-slate-500 uppercase">
            Chi tiet san pham
          </span>
        </div>
        <div className="flex  justify-start  items-center">
          <div className="flex items-start justify-start flex-col">
            <span className="px-10 py-[3.5px] text-[1rem] text-gray-400">
              Thương hiệu
            </span>
            <span className="px-10 py-[3.5px] text-[1rem] text-gray-400">
              Xuất xứ
            </span>
            <span className="px-10 py-[3.5px] text-[1rem] text-gray-400">
            Hàng chính hãng
            </span>
            <span className="px-10 py-[3.5px] text-[1rem] text-gray-400">
            Gửi từ
            </span>
          </div>
          <div className="flex items-start justify-start flex-col">
            <span className="px-10 py-[3px] text-[1rem] text-textword font-black">
              Apple
            </span>
            <span className="px-10 py-[3.5px] text-[1rem] text-textword font-black">
              Trung Quốc
            </span>
            <span className="px-10 py-[3.5px] text-[1rem] text-textword font-black">
              
Có
            </span>
            <span className="px-10 py-[3.5px] text-[1rem] text-textword font-black">
             TP Ho Chi Minh
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
