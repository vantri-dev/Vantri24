import React from 'react'

export default function VoucherEmty() {
  return (
    <div className="w-full h-screen  mt-[8%] flex  items-center  ">
              <div className="  m-auto h-full ">
                <img
                  className="pl-[30%]  cursor-pointer"
                  src="https://cdn-icons-png.flaticon.com/128/6144/6144475.png  "
                  alt=""
                />
                <div className="text-center">
                  <span className="text-[1.15rem] font-semibold">
                    Không có voucher nào phù hợp
                  </span>
                  <p className=" text-slate-500 text-[0.95rem]">
                    Săn voucher cùng Shopteach để nhận nhiều ưu đãi nhé
                  </p>
                </div>
                <div className="ml-[81px] pt-4 ">
                  <button className="bg-fuchsia-300 py-2 px-7 rounded text-white">
                    Săn thêm voucher
                  </button>
                </div>
              </div>
            </div>
  )
}
