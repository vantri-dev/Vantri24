/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { BsCartPlus } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useAuth } from "../context/Context";
export const AddProduct = (props) => {
  const { AddProductCart } = props;
  const [isRouter, setIsRouter] = useState(false);
  const [isRouterCheckOut, setIsRouterCheckOut] = useState(false);
  const { checkOut, currentUser } = useAuth();

  useEffect(() => {
    if (currentUser) {
      if ((Object.keys(checkOut).length === 0) === true) {
        //khong co check  out
        setIsRouterCheckOut(true);
      } else {
        setIsRouterCheckOut(false);
      }
    } else {
      setIsRouter(true);
    }
  }, [isRouterCheckOut]);
  return (
    <div className="flex items-center  px-5 py-[15.5px] cursor-pointer ">
      <button
        className="flex items-center text-[1.15rem] border border-violet rounded py-3 px-10  bg-[#fdf4ff] text-violet mr-5"
        onClick={() => AddProductCart()}
      >
        <BsCartPlus className="text-[1.45rem] mx-1" />
        Thêm vào giỏ hàng
      </button>
      <Link
        to={
          isRouter === true
            ? "/signUp"
            : "" || isRouterCheckOut === true
            ? "/checkOut"
            : "/inforCheckOut"
        }
      >
        <button className="flex items-center text-[1.15rem] border border-violet rounded py-3 px-[70px]  bg-violet text-white">
          Mua ngay
        </button>
      </Link>
    </div>
  );
};

export default AddProduct;
