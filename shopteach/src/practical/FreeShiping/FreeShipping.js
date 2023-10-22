import React from 'react'
import { BiChevronRight } from "react-icons/bi";
import { Link } from 'react-router-dom';
export default function FreeShipping() {
  return (
    <>
       <div className="flex items-center justify-center">
              <button className=" px-[180px] py-6  rounded-[50px] bg-cyan-400 shadow-lg shadow-cyan-400/70  border border-[#d3e2ec]">
                <span className=" uppercase  text-[2rem]  font-sans text-white ">
                  Miễn phí vận chuyển
                </span>
              </button>
            </div>
            <div className="flex justify-center mt-10">
              <img
                className="w-[1000px] object-contain"
                alt=""
                src="https://file.hstatic.net/1000376681/file/mien_phi_van_chuyen_tat_ca_chi_tu_od_1200x720_63a3f58285ae454889dca4d4ea6a9576.png"
              />
            </div>

            <div className="mx-[160px] w-[720px]    relative ">
              <div className="my-8">
                <div className=" col-span-1 grid grid-cols-3  bg-white border shadow-md w-full h-[190px] rounded  ">
                  <div className=" col-span-1  min-h-[117px] bg-orange-200  w-[90%]  rounded-tl rounded-bl ">
                    <img
                      src="https://cf.shopee.vn/file/sg-11134004-22120-4cskiffs0olvc3"
                      alt=""
                      className=" object-contain max-h-full w-full"
                    />
                  </div>
                  <div className="col-span-2 ">
                    <div className="grid grid-cols-3 py-2  px-1">
                      <span className=" col-span-2 text-[1.8rem] text-textword font-sans ">
                        Đơn Tối Thiểu ₫99k Giảm tối đa ₫70k
                      </span>
                      <Link
                        to="/"
                        className="col-span-1 flex justify-end cursor-pointer "
                      >
                        <span className=" text-fuchsia-400 text-[1.3rem]">
                          Dùng ngay
                        </span>
                        <BiChevronRight className=" mt-[4%] text-[1.5rem] text-violet" />
                      </Link>
                    </div>
                    <div className="grid grid-cols-3 pt-5 px-2">
                      <span className=" col-span-2  text-slate-300  font-thin pt-[15px] text-[1.2rem]">
                        HSD:<span className="text-[1.2rem]">12.02.2023</span>
                      </span>
                      <div className="col-span-1 flex justify-end pt-[15px] cursor-pointer">
                        <span className=" text-blue-500 text-[1.1rem]">
                          Điều kiện
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-8 h-4 rounded-bl-full rounded-br-full bg-white absolute top-0 left-[150px] border border-t-transparent "></div>
              <div className="w-8 h-4 rounded-tl-full rounded-tr-full bg-white absolute  bottom-0 left-[150px] border border-b-transparent "></div>
              <div className=""></div>
              <div
                className="w-0 h-0 top-[27.5px] left-[-15px] absolute
    border-t-[10px] border-t-transparent
    border-r-[15px] border-r-fuchsia-300
    border-b-[16px] border-b-transparent
    "
              ></div>
              <div className=" absolute bg-fuchsia-400   pb-[3px] pt-[3px] rounded-sm left-[-15px] top-[7px]">
                <span className="text-[1.2rem] px-2 pb-1  text-white font-thin">
                  Số lượng có hạn
                </span>
              </div>
            </div>
            <div className="mx-[160px] w-[720px]    relative ">
              <div className="my-8">
                <div className=" col-span-1 grid grid-cols-3  bg-white border shadow-md w-full h-[190px] rounded  ">
                  <div className=" col-span-1  min-h-[117px] bg-orange-200  w-[90%]  rounded-tl rounded-bl ">
                    <img
                      src="https://cf.shopee.vn/file/sg-11134004-22120-4cskiffs0olvc3"
                      alt=""
                      className=" object-contain max-h-full w-full"
                    />
                  </div>
                  <div className="col-span-2 ">
                    <div className="grid grid-cols-3 py-2  px-1">
                      <span className=" col-span-2 text-[1.8rem] text-textword font-sans ">
                        Đơn Tối Thiểu ₫99k Giảm tối đa ₫70k
                      </span>
                      <Link
                        to="/"
                        className="col-span-1 flex justify-end cursor-pointer "
                      >
                        <span className=" text-fuchsia-400 text-[1.3rem]">
                          Dùng ngay
                        </span>
                        <BiChevronRight className=" mt-[4%] text-[1.5rem] text-violet" />
                      </Link>
                    </div>
                    <div className="grid grid-cols-3 pt-5 px-2">
                      <span className=" col-span-2  text-slate-300  font-thin pt-[15px] text-[1.2rem]">
                        HSD:<span className="text-[1.2rem]">12.02.2023</span>
                      </span>
                      <div className="col-span-1 flex justify-end pt-[15px] cursor-pointer">
                        <span className=" text-blue-500 text-[1.1rem]">
                          Điều kiện
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-8 h-4 rounded-bl-full rounded-br-full bg-white absolute top-0 left-[150px] border border-t-transparent "></div>
              <div className="w-8 h-4 rounded-tl-full rounded-tr-full bg-white absolute  bottom-0 left-[150px] border border-b-transparent "></div>
              <div className=""></div>
              <div
                className="w-0 h-0 top-[27.5px] left-[-15px] absolute
    border-t-[10px] border-t-transparent
    border-r-[15px] border-r-fuchsia-300
    border-b-[16px] border-b-transparent
    "
              ></div>
              <div className=" absolute bg-fuchsia-400   pb-[3px] pt-[3px] rounded-sm left-[-15px] top-[7px]">
                <span className="text-[1.2rem] px-2 pb-1  text-white font-thin">
                  Số lượng có hạn
                </span>
              </div>
            </div>
            <div className="mx-[160px] w-[720px]    relative ">
              <div className="my-8">
                <div className=" col-span-1 grid grid-cols-3  bg-white border shadow-md w-full h-[190px] rounded  ">
                  <div className=" col-span-1  min-h-[117px] bg-orange-200  w-[90%]  rounded-tl rounded-bl ">
                    <img
                      src="https://cf.shopee.vn/file/sg-11134004-22120-4cskiffs0olvc3"
                      alt=""
                      className=" object-contain max-h-full w-full"
                    />
                  </div>
                  <div className="col-span-2 ">
                    <div className="grid grid-cols-3 py-2  px-1">
                      <span className=" col-span-2 text-[1.8rem] text-textword font-sans ">
                        Đơn Tối Thiểu ₫99k Giảm tối đa ₫70k
                      </span>
                      <Link
                        to="/"
                        className="col-span-1 flex justify-end cursor-pointer "
                      >
                        <span className=" text-fuchsia-400 text-[1.3rem]">
                          Dùng ngay
                        </span>
                        <BiChevronRight className=" mt-[4%] text-[1.5rem] text-violet" />
                      </Link>
                    </div>
                    <div className="grid grid-cols-3 pt-5 px-2">
                      <span className=" col-span-2  text-slate-300  font-thin pt-[15px] text-[1.2rem]">
                        HSD:<span className="text-[1.2rem]">12.02.2023</span>
                      </span>
                      <div className="col-span-1 flex justify-end pt-[15px] cursor-pointer">
                        <span className=" text-blue-500 text-[1.1rem]">
                          Điều kiện
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-8 h-4 rounded-bl-full rounded-br-full bg-white absolute top-0 left-[150px] border border-t-transparent "></div>
              <div className="w-8 h-4 rounded-tl-full rounded-tr-full bg-white absolute  bottom-0 left-[150px] border border-b-transparent "></div>
              <div className=""></div>
              <div
                className="w-0 h-0 top-[27.5px] left-[-15px] absolute
    border-t-[10px] border-t-transparent
    border-r-[15px] border-r-fuchsia-300
    border-b-[16px] border-b-transparent
    "
              ></div>
              <div className=" absolute bg-fuchsia-400   pb-[3px] pt-[3px] rounded-sm left-[-15px] top-[7px]">
                <span className="text-[1.2rem] px-2 pb-1  text-white font-thin">
                  Số lượng có hạn
                </span>
              </div>
            </div>
    </>
  )
}
