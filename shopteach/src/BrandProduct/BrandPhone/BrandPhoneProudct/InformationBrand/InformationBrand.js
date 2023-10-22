import React from 'react'
import { PiStorefrontThin ,PiTimerLight,PiTrashLight} from 'react-icons/pi';
import {LiaExchangeAltSolid} from 'react-icons/lia';


import CommentBrand  from './CommentBrand';
export default function InformationBrand() {
   const inforBrand= [
    {
      title:'Thành viên từ năm',
      icon:<PiTimerLight/>,
      year:2022
  },
    {
      title:'Tổng sản phẩm',
      icon:<PiStorefrontThin/>,
      products:500
  },
    {
      title:'Tỉ lệ hủy',
      icon:<PiTrashLight/>,
      percent:'2%'
  },
    {
      title:'Tỉ lệ đổi trả',
      icon:<LiaExchangeAltSolid/>,
      percent:'5%'
  },
   ]
  return (
    <div  className='grid grid-cols-12 gap-3 bg-slate-100'>
                 <div className=' col-span-3  bg-white h-[300px] rounded mt-[13px] '>
                    <div className='px-5 py-4'>
                        <span className=' font-sans text-[1.3rem]  font-medium'>
                            Thông tin shop
                        </span>
                    </div>
                    <ul>
                      {
                        inforBrand.map((infor,index)=>{
                          return(

                        <li key={index} className='flex  items-center px-6  py-[6px] hover:bg-slate-100 rounded cursor-pointer'>
                          <div className='text-[1.4rem] text-slate-400'>
                          {infor.icon}
                            
                          </div>
                           <p className='text-[1.05rem]  text-slate-500 ml-[7px] mt-1'>

                          {infor.title}:<span className='  font-semibold  text-slate-600 pl-1'>
                          {infor.year && infor.year}
                             {infor.products && infor.products}
                        
                          {infor.percent && infor.percent}
                          </span>
                           </p>
                        </li>
                          )
                        })
                      }
                        
                    </ul>
                 </div>
                 <div className='col-span-9 mt-[13px]'>
                        <CommentBrand/>
                 </div>
    </div>
  )
}
