/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect }  from "react";
import { AiTwotoneStar } from "react-icons/ai";
import { BsCheck } from "react-icons/bs";
import { useState } from "react";
import QuantityProduct from "./QuantityProduct";
import { useAuth } from "../context/Context";
export function InformationProduct() {
  const [SelectProduct, setSelectProduct] = useState(false);
  const [changeColor, setChangeColor] = useState(false);
  const [selectProductCapacity, setSelectProductCapacity] = useState(false);
   const { getChangeImage}=useAuth();
   useEffect(()=>{
    getChangeImage(changeColor);
   },[changeColor])
  const handleSelectProduct = (data) => {
    setSelectProduct(data);
  };  

  const handleSelectProductCapacity = (data) => {
    setSelectProductCapacity(data);
  };

  const hanldeChangeColorProduct = (data) => {
    setChangeColor(data);
  };
 
  return (
    <>
      <div className=" w-full">
        <div className="w-full px-5 py-5 ">
          <span className="flex flex-wrap text-[1.5rem]  font-black">
            Apple iPhone 14 Chính Hãng Tại Thị Trường Việt Nam
          </span>
          <div className="flex items-center mt-3">
            <div className="flex items-center gap-[2px] text-[1.25rem] text-violet pr-7  border-r">
              5.0
              <AiTwotoneStar />
              <AiTwotoneStar />
              <AiTwotoneStar />
              <AiTwotoneStar />
              <AiTwotoneStar />
            </div>
            <span className="px-6 text-[1.2rem]  font-sans border-r">
              17.5k
              <span className="text-[1.1rem] text-slate-500 px-1">
                Đánh giá
              </span>
            </span>
            <span className="pl-6 font-sans text-[1.2rem]">
              2k <span className="text-[1.1rem] text-slate-500">Đã bán</span>
            </span>
          </div>
          <div className="py-1 mt-1">
            <span className="text-[1rem] font-semibold">
              Thương hiệu:
              <span className="  font-medium text-violet"> Apple</span>
            </span>
            <p className="text-[2.2rem]  font-sans  font-normal  leading-4 mt-5  text-violet  flex items-center">
              <span className="text-[1.2rem] text-slate-300 line-through pr-2 ">
                -1.300.000đ
              </span>
              20.000.00đ
              <span className="text-[0.8rem]  text-black px-[6px] py-[3.5px] bg-slate-100 rounded-2xl    align-middle ml-1">
                -23%
              </span>
            </p>
          </div>
          <div className="py-2">
            <span className="text-[1.1rem]  font-bold">Màu sắc</span>
            <div className="flex items-center cursor-pointer">
              <div
                onClick={() => handleSelectProduct(false)}
                className={
                  SelectProduct === false
                    ? "flex items-center w-15 h-14  mx-2 my-2 border-violet border-2  rounded-md relative"
                    : "flex items-center w-15 h-14  mx-2 my-2  border  rounded-md  opacity-50 "
                }
              >
                <div
                  className="flex items-center w-full h-full"
                  onClick={() => hanldeChangeColorProduct(false)}
                >
                  <img
                    className="w-full h-[90%]  object-cover mx-2  my-2 "
                    alt=""
                    src="https://salt.tikicdn.com/cache/750x750/ts/product/6c/6c/9e/f3464d16a782e0d9ed5f74d98f155642.png.webp"
                  />
                  <span className=" mr-3  text-textword font-sans">Hồng </span>
                </div>
                <div className=" absolute right-0 top-0">
                  <BsCheck className="w-3 bg-violet text-white  rounded-bl-sm h-3" />
                </div>
              </div>
              <div
                onClick={() => handleSelectProduct(true)}
                className={
                  SelectProduct === true
                    ? "flex items-center w-15 h-14  mx-2 my-2 border-violet border-2  rounded-md relative"
                    : "flex items-center w-15 h-14  mx-2 my-2  border  rounded-md  opacity-50 "
                }
              >
                <div
                  className="flex items-center w-full h-full"
                  onClick={() => hanldeChangeColorProduct(true)}
                >
                  <img
                    className="w-full h-[90%]  object-cover mx-2  my-2 "
                    alt=""
                    src="https://salt.tikicdn.com/cache/750x750/ts/product/e9/81/46/98be0880591d43415fb2c2c886ce752a.png.webp"
                  />
                  <span className=" mr-3  text-textword font-sans">Trắng</span>
                </div>
                <div className=" absolute right-0 top-0">
                  <BsCheck className="w-3 bg-violet text-white  rounded-bl-sm h-3" />
                </div>
              </div>
            </div>
          </div>
          <div className="py-2">
            <span className="text-[1.1rem]  font-bold">Dung lượng</span>
            <div className="flex items-center cursor-pointer">
              <div
                onClick={() => handleSelectProductCapacity(false)}
                className={
                  selectProductCapacity === false
                    ? "flex items-center w-15 h-[40px]  mx-2 my-2 border-violet border-2  rounded-md relative"
                    : "flex items-center w-15 h-[40px] mx-2 my-2 border  rounded-md  opacity-50 "
                }
              >
                <div className="flex items-center w-full h-full">
                  <span className=" px-3 first-letter:  text-textword font-sans">
                    512GB
                  </span>
                </div>
                <div className=" absolute right-0 top-0">
                  <BsCheck className="w-3 bg-violet text-white  rounded-bl-sm h-3" />
                </div>
              </div>
              <div
                onClick={() => handleSelectProductCapacity(true)}
                className={
                  selectProductCapacity === true
                    ? "flex items-center w-15 h-[40px]   mx-2 my-2 border-violet border-2  rounded-md relative"
                    : "flex items-center w-15 h-[40px]  mx-2 my-2  border  rounded-md  opacity-50 "
                }
              >
                <div className="flex items-center w-full h-full">
                  <span className=" px-6   text-textword font-sans">1TB</span>
                </div>
                <div className=" absolute right-0 top-0">
                  <BsCheck className="w-3 bg-violet text-white  rounded-bl-sm h-3" />
                </div>
              </div>
            </div>
          </div>
          <QuantityProduct />
          {/* <AddProduct /> */}
         
        </div>
      </div>
    </>
  );
}
