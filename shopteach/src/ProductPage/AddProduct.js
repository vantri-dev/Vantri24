import React, { useEffect, useMemo, useState } from "react";
import { BsCartPlus } from "react-icons/bs";
import { BsCheckLg } from "react-icons/bs";
import { useAuth } from "../context/Context";
export const AddProduct = (props) => {
  const { AddProductCart } = props;

  return (
    <div className="flex items-center  px-5 py-[15.5px] cursor-pointer ">
      <button
        className="flex items-center text-[1.15rem] border border-violet rounded py-3 px-10  bg-[#fdf4ff] text-violet mr-5"
        onClick={() => AddProductCart()}
      >
        <BsCartPlus className="text-[1.45rem] mx-1" />
        Thêm vào giỏ hàng
      </button>
      <button className="flex items-center text-[1.15rem] border border-violet rounded py-3 px-[70px]  bg-violet text-white">
        Mua ngay
      </button>
    </div>
  );
};

export default AddProduct;
