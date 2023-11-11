import React from 'react'
import { BsCartPlus } from "react-icons/bs";

export default function AddProduct() {

  return (
    <div className='flex items-center mt-9 gap-5 cursor-pointer'>
      <button className='flex items-center text-[1.15rem] border border-violet rounded py-3 px-10  bg-[#fdf4ff] text-violet'>
        <BsCartPlus className='text-[1.45rem] mx-1'/>
      Thêm vào giỏ hàng
      </button>
      <button className='flex items-center text-[1.15rem] border border-violet rounded py-3 px-16  bg-violet text-white'>
        Mua ngay
      </button>

    </div>
  )
}
