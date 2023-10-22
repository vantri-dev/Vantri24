import React from 'react'

import {  BsChevronRight } from "react-icons/bs";
import BrandStore from './BrandStore'
import BrandPhoneProudct from './BrandPhoneProudct/BrandPhoneHome';
 import { Link } from 'react-router-dom'
export default function BrandPhone() {
  return (
    <div className='w-full pt-[10px] pr-[100px]  pl-[90px] grid gap-3  bg-gray-100  '>
        <div className="w-full flex items-center">
        <Link to='/'>
        <span className="text-[0.9rem] text-slate-500">
          Trang chủ
        </span>
        </Link>
        <BsChevronRight className="text-[0.9rem] mt-1 text-slate-400 mr-1"/>
        <Link to='/productSmartPhone'>
      <span className="text-[0.9rem] text-slate-500">
        Điện thoại
      </span>
        </Link>
        <BsChevronRight className="text-[0.9rem] mt-1 text-slate-400 mr-1"/>

        <Link to='/brandphone'>
      <span className="text-[0.9rem]">
        Apple
      </span>
        </Link>
        
       
      </div>
     <div className=' h-[400px]'>
        <img
        className='w-full h-full object-center '
        alt=''
        src='https://cf.shopee.vn/file/vn-50009109-14ae7895bb40fbdeab9f208c92c3d9f4'
        />
     </div>
     <BrandStore/>
     <BrandPhoneProudct/>
    </div>
  )
}
