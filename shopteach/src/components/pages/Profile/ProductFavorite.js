import React from 'react'

export default function ProductFavorite() {
  return (
    <div className=" w-full h-screen   ">
    <div className="w-full bg-gray-100 rounded">
      <div className=' border-b ml-[20px] mr-[100px] pt-8 pb-2'>
        <span className='text-[1.1rem] font-semibold  '>
          Sản phẩm yêu thích
        </span>
        </div>
        <div className='w-full px-5 py-1'>
          <span className='text-base text-slate-600'>
            Hiện tại bạn chưa có sản phẩm yêu thích nào
          </span>
      </div>
    </div>
  </div>
  )
}
