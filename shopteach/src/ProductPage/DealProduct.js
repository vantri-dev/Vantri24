import React, { useState } from "react";

import { BsCartPlus } from "react-icons/bs";
export default function DealProduct() {
  const [dealProduct, setDealProduct] = useState(false);
  const hanldeDealProduct = () => {
    setDealProduct(!dealProduct);
  };
  return (
    <div className=" w-full mt-[10px]   bg-gray-100 px-[105px]">
    <div className="bg-white grid grid-cols-3 ">
      <div className="flex  flex-col  col-span-2 ">
        <div className="px-5 py-4">
          <span className="text-[1.18rem] text-textword font-bold">
            Mua them deal soc
          </span>
        </div>
        <div className="flex items-center ">
          <div className="flex flex-col ml-5 justify-center w-[200px] ">
            <div className="flex justify-center py-2">
              <img
                className="w-[120px] h-[120px] object-cover border "
                alt=""
                src="https://salt.tikicdn.com/cache/750x750/media/catalog/producttmp/e9/c2/ec/0b3ddbd317b0f187611ecd8116b2918e.jpg.webp"
              />
            </div>
            <p className=" truncate text-[0.9rem] px-2 py-2  font-medium">
              Bộ Sạc Nhanh 20W Hàng Chuẩn Zin, Củ Sạc Nhanh Bảo Hành 1 Đổi 1
              Trong 12 Tháng Rin Flagship Store
            </p>
            <div className="flex items-center justify-center">
              <input type="checkbox" />
              <span className=" font-bold text-violet">
                <span className=" line-through text-[0.9rem] text-slate-400 mx-1">
                  40.000d
                </span>
                50.000d
              </span>
            </div>
          </div>
          <div className="flex justify-center">
            <span className="text-[2.5rem] text-textword mx-5 mb-10">
              +
            </span>
          </div>
          <div className="flex flex-col ml-5 justify-center w-[200px] ">
            <div className="flex justify-center py-2">
              <img
                className="w-[120px] h-[120px] object-cover border "
                alt=""
                src="https://salt.tikicdn.com/cache/750x750/ts/product/22/51/29/d7f5bb334107d093d34c08289051b78a.jpg.webp"
              />
            </div>
            <p className=" truncate text-[0.9rem] px-2 py-2  font-medium">
              Ốp Lưng Từ Tính Không Dây Trong Suốt Dành Cho iPhone
            </p>
            <div className="flex items-center justify-center">
              <input type="checkbox" />
              <span className=" font-bold text-violet">
                <span className=" line-through text-[0.9rem] text-slate-400 mx-1">
                  40.000d
                </span>
                50.000d
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-1  flex items-center justify-center border-l my-3">
        <div className="flex flex-col">
          <div className="flex  justify-center">
            <span className="text-[0.95rem] text-textword font-semibold">
              Tổng cộng:<span className="px-1">149.999đ</span>
            </span>
          </div>
          <div className="flex  justify-center">
            <span className="text-[0.9rem] text-violet font-semibold">
              Tiết kiệm :<span className="px-1">45.000đ</span>
            </span>
          </div>

          {dealProduct === true ? (
            <button
              onClick={hanldeDealProduct}
              className="flex items-center text-[0.98rem] border border-violet rounded   font-semibold bg-[#fdf4ff] text-violet py-[5px] px-3   mt-2"
            >
              <BsCartPlus className="text-[1.35rem] mx-1" />
              Đến giỏ hàng
            </button>
          ) : (
            <button
              onClick={hanldeDealProduct}
              className="flex items-center text-[0.98rem] border border-violet rounded   font-semibold bg-[#fdf4ff] text-violet py-[5px] px-3   mt-2"
            >
              <BsCartPlus className="text-[1.35rem] mx-1" />
              Mua deal sốc
            </button>
          )}
        </div>
      </div>
    </div>
  </div>
  );
}
