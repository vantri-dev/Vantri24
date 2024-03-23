/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { BsChatRightDots, BsChevronRight } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiSolidDiscount } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useAuth } from "../../../context/Context";
const CartProduct = () => {
  const [heart, setHeart] = useState(false);
  const { cartProduct, deleteProductCart, checkOut,getPriceProduct } = useAuth();
  const [caculateQuantityProduct, setCaculateQuantityProduct] = useState(0);
  const [isRouterCheckOut, setIsRouterCheckOut] = useState(false);

  const handleDeleteProduct = (id) => {
    deleteProductCart(id);
  };

  useEffect(() => {
    localStorage.setItem("productCart", JSON.stringify(cartProduct));
  }, [cartProduct]);

  //Caculate
  useEffect(() => {
    const handleCaculatePrice = () => {
      const calPrice = cartProduct.reduce((total, price) => {
        return total + price.id;
      }, 0);
      setCaculateQuantityProduct(calPrice)
  getPriceProduct(calPrice)

    };
    handleCaculatePrice();
  }, [cartProduct]);
  //CheckOut
  useEffect(() => {
    if ((Object.keys(checkOut).length === 0) === true) {
      setIsRouterCheckOut(true);
    } else {
      setIsRouterCheckOut(false);
    }
  }, [isRouterCheckOut]);

  return (
    <div className="w-full pt-[10px]  bg-gray-100 pr-[100px]  pl-[90px] relative">
      <div className="w-full flex items-center">
        <Link to="/">
          <span className="text-[0.9rem] text-slate-500">Trang chủ</span>
        </Link>
        <BsChevronRight className="text-[0.9rem] mt-1 text-slate-400 mr-1" />
        <Link to="/cart">
          <span className="text-[0.9rem] text-slate-500">Giỏ hàng</span>
        </Link>
      </div>
      <div className=" w-full px-5 py-2">
        <span className=" text-[1.2rem]   font-bold">
          Giỏ hàng của bạn({cartProduct.length})
        </span>
      </div>
      {cartProduct.map((item, index) => {
        return (
          <div
            key={index}
            className=" items-center  justify-center grid grid-cols-3 gap-2 pb-[17px]"
          >
            <div className=" col-span-2 bg-white">
              <div className="w-full border rounded  ">
                <div className="grid grid-cols-2  border-b">
                  <div className="  col-span-1 flex flex-col ">
                    <div className="flex items-center  px-4 py-[18px]">
                      <img
                        className=" rounded-full h-5 w-5"
                        alt=""
                        src="https://media3.scdn.vn/img4/2023/07_18/ueGqKop8naSTEyjyuZ0i_simg_de2fe0_500x500_maxb.jpg"
                      />
                      <span className="mx-2 font-sans text-[0.95rem]  font-medium">
                        Di Động Việt
                      </span>
                    </div>
                    <div className="flex  items-center px-5 py-3">
                      <img
                        className="w-20 h-20 mx-4 border rounded"
                        alt=""
                        src="https://media3.scdn.vn/img4/2023/07_18/ueGqKop8naSTEyjyuZ0i_simg_de2fe0_500x500_maxb.jpg"
                      />
                      <div className=" flex flex-col justify-start ">
                        <span className=" rounded-xl bg-fuchsia-300 w-[45%] text-center py-[2px] text-[0.85rem] my-1 text-slate-500 ">
                          Mua trước trả sau
                        </span>
                        <div className="">
                          <span className="line-clamp-2 ">{item.body}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=" col-span-1 justify-end pb-2">
                    <div className="flex  justify-end items-center px-4 py-2">
                      <BsChatRightDots />
                      <span className="mx-2 font-sans text-[0.95rem]">
                        Chat với shop
                      </span>
                    </div>
                    <div>
                      <div className="  flex    justify-around  mt-[7.5%]">
                        <div className="text-center">
                          <p className="text-[1.3em] leading-3    font-sans  font-medium">
                            {item.id.toFixed(3)}d
                          </p>
                          <p className="text-[0.9rem]   text-slate-400  line-through">
                            1.900d
                          </p>
                        </div>
                        <ul className="flex  justify-between gap-2 border  cursor-pointer  ">
                          <li className="px-2 text-[1.5rem]">-</li>
                          <li className=" border-l border-r px-4 py-[5px] w-[46.5px]  font-bold">
                            1
                          </li>
                          <li className="px-2 text-[1.5rem]">+</li>
                        </ul>
                        <div className="flex  items-center gap-4  cursor-pointer">
                          {heart === true ? (
                            <FaHeart
                              className="text-[1.25rem] text-[#ef4444] "
                              onClick={() => setHeart(false)}
                            />
                          ) : (
                            <FaRegHeart
                              className="text-[1.25rem]"
                              onClick={() => setHeart(true)}
                            />
                          )}

                          <RiDeleteBin6Line
                            className="text-[1.25rem]"
                            onClick={() => handleDeleteProduct(item.id)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="  bg-white border rounded  pb-5   top-[78.8px]  absolute right-[105px]  w-[28%]">
              <div className="flex items-center justify-between py-[4.5px] px-5 border-b">
                <div className="flex items-center">
                  <BiSolidDiscount className=" text-slate-500  text-[1.5rem]" />
                  <span className="text-[1rem] font-sans ml-1">
                    Mã ưu đãi Shopteach
                  </span>
                </div>
                <span className=" text-cyan-400 cursor-pointer">
                  Chọn/nhập mã
                </span>
              </div>
              <div className="flex items-center justify-between px-5 py-3">
                <p className="text-[1.1rem] text-textword">Tạm tính:</p>
                <p className="text-[1.3rem] font-sans font-bold">
                  {caculateQuantityProduct.toFixed(3)}đ
                </p>
              </div>
              <div className=" flex items-center  justify-center">
                <Link
                  to={
                    isRouterCheckOut === true ? "/checkOut" : "/inforCheckOut"
                  }
                >
                  <button className=" text-[1.15rem] border border-violet rounded py-3 px-[100px]  bg-violet text-white">
                    Mua ngay
                  </button>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CartProduct;
