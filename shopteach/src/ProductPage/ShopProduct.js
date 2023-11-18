import React from 'react'

import { BsChatLeftDots } from "react-icons/bs";
import { PiStorefrontLight } from "react-icons/pi";
export default function ShopProduct() {
  return (
    <div className="bg-white w-full grid grid-cols-3 px-5 py-5">
    <div className="col-span-1 flex items-center">
      <div className="w-20 h-20 border rounded-full flex  justify-between mx-3">
        <img
          className="w-full h-full rounded-full "
          alt=""
          src="https://down-vn.img.susercontent.com/file/77b0471a43c41e0465a10be1299f2db7_tn"
        />
      </div>
      <div className="flex flex-col justify-start items-start ">
        <span className="text-[1.1rem] text-textword font-sans">
          Huso_Official
        </span>
        <p className="text-[0.95rem] text-slate-400">
          Online 11 Phút Trước
        </p>
        <div className="flex items-center ">
          <button className="flex items-center text-[0.85rem] border border-violet rounded   font-semibold bg-[#fdf4ff] text-violet py-[6px] px-2   mt-2 mr-2">
            <BsChatLeftDots className="text-[1.1rem] mx-1" />
            Chat ngay
          </button>
          <button className="flex items-center text-[0.85rem] border  rounded    opacity-95 text-slate-400 py-[6px] px-2  mt-2 font-bold">
            <PiStorefrontLight className="text-[1.25rem] mx-1" />
            Xem shop
          </button>
        </div>
      </div>
    </div>
    <div className="col-span-2 flex  flex-col  justify-start  mt-3">
    <div className="flex  items-center  justify-around gap-5 ">
      <div className="flex flex-col justify-start ">
        <span className="text-textword text-[0.98rem] font-bold pb-5">
        Đánh Giá
        </span>
        <span className="text-textword text-[0.98rem] font-bold">
        Sản Phẩm
        </span>
      </div>
      <div className="flex flex-col justify-start ">
        <span className="text-violet text-[0.98rem] font-bold pb-5">
        3k
        </span>
        <span className="text-violet text-[0.98rem] font-bold">
         145
        </span>
      </div>
      <div className="flex flex-col justify-start ">
        <span className="text-textword text-[0.98rem] font-bold pb-5">
        Tỉ Lệ Phản Hồi
        </span>
        <span className="text-textword text-[0.98rem] font-bold">
        Thời Gian Phản Hồi
        </span>
      </div>
      <div className="flex flex-col justify-start ">
        <span className="text-violet text-[0.98rem] font-bold pb-5">
        94%
        </span>
        <span className="text-violet text-[0.98rem] font-bold">
        trong vài giờ
        </span>
      </div>
      <div className="flex flex-col justify-start ">
        <span className="text-textword text-[0.98rem] font-bold pb-5">
        Tham Gia
        </span>
        <span className="text-textword text-[0.98rem] font-bold">
        Người Theo Dõi
        </span>
      </div>
      <div className="flex flex-col justify-start ">
        <span className="text-violet text-[0.98rem] font-bold pb-5">
        5 năm trước
        </span>
        <span className="text-violet text-[0.98rem] font-bold">
          9.4k
        </span>
      </div>
    </div>
  </div>
  </div>
  
  )
}
