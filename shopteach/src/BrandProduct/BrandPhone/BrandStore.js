import React from "react";

import { PiStorefrontThin,PiChatDots,PiStarLight } from "react-icons/pi";
import { AiOutlineUserAdd } from "react-icons/ai";
import { RiUserFollowLine } from "react-icons/ri";
import { FiLogIn } from "react-icons/fi";

import { useState, useEffect } from "react";

export default function BrandStore() {
  const [followed, setFollowed] = useState(true);
  const [animationButton, setAnimationButton] = useState("");
  const hanldeFollowed = () => {
    setFollowed(!followed);
  };
  useEffect(() => {
    setAnimationButton("scale-[1.06]");
    const clearAnimation = setTimeout(() => {
      setAnimationButton("");
    }, 300);
    return () => clearTimeout(clearAnimation);
  }, [followed]);
  return (
    <div className=" grid grid-cols-3 gap-3 bg-white py-5 px-4 rounded">
      <div className=" col-span-1   bg-[#cdcfd2] min-h-[100px] w-[90%] rounded">
        <div className="flex items-center">
          <div className="w-[70px] h-[70px] relative mx-3 mt-3">
            <img
              className=" rounded-full  w-full h-full border border-slate-400 "
              alt=""
              src="https://down-bs-vn.img.susercontent.com/62160f74aa5cffa160b2062658d2be75_tn"
            />
            <div className="w-[9px] h-[8px] rounded-full absolute   bg-[#22c55e] bottom-[10px] right-[4px] "></div>
          </div>
          <div className=" px-1 pt-2">
            <span className=" font-mono text-[1.099rem] text-white">
              Apple Flagship Store
            </span>
            <p className=" text-[0.85rem]  text-slate-100">
              Online 15 phút trước
            </p>
          </div>
        </div>
        <div>
          {followed ? (
            <div
              onClick={hanldeFollowed}
              className="flex justify-center py-[1px] mx-8
           rounded
          border border-gray-100 my-4 items-center cursor-pointer"
            >
              <span className="text-[1.5rem] mr-1 pb-[2px] text-white">+</span>
              <span className=" text-[1.05rem] text-white">Theo dõi</span>
            </div>
          ) : (
            <div
              onClick={hanldeFollowed}
              className={`flex justify-center py-[8px] mx-8 rounded
        from-pink-400 to-yellow-400 bg-gradient-to-r
         transition delay-[50ms] duration-500 ease-in-out ${animationButton}
          border border-gray-100 my-4 items-center cursor-pointer  `}
            >
              <span className=" text-[1.05rem] text-white">Đang theo dõi</span>
            </div>
          )}
        </div>
      </div>
      <div className=" col-span-1 mt-4">
        <div  className="flex items-center  mb-5">
          <PiStorefrontThin className="text-[1.5rem] text-slate-600 mr-2" />
          <p className=" text-textword text-[1.05rem]">Sản phẩm :  <span className="text-violet">324</span></p>
        </div>
        <div  className="flex items-center  mb-5">
          <AiOutlineUserAdd className="text-[1.5rem] text-slate-400 mr-2" />
          <p className=" text-textword text-[1.05rem]">Theo dõi:  <span className="text-violet">3</span></p>
        </div>
        <div  className="flex items-center  mb-5">
          <PiChatDots className="text-[1.5rem] text-slate-400 mr-2" />
          <p className=" text-textword text-[1.05rem]">Tỉ lệ phản hồi chat:  <span className="text-violet">100%</span></p>
        </div>
      </div>
      <div className=" col-span-1 mt-4">
      <div  className="flex items-center  mb-5">
          <RiUserFollowLine className="text-[1.5rem] text-slate-400 mr-2" />
          <p className=" text-textword text-[1.05rem]">Người theo dõi :  <span className="text-violet">100k</span></p>
        </div>
        <div  className="flex items-center  mb-5">
          <PiStarLight className="text-[1.5rem] text-slate-400 mr-2" />
          <p className=" text-textword text-[1.05rem]">Đánh giá:  <span className="text-violet">5</span></p>
        </div>
        <div  className="flex items-center  mb-5">
          <FiLogIn className="text-[1.5rem] text-slate-400 mr-2" />
          <p className=" text-textword text-[1.05rem]">Tham gia:  <span className="text-violet">1 năm trước</span></p>
        </div>
      </div>
    </div>
  );
}
