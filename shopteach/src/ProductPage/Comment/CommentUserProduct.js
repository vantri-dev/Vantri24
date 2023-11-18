import React from 'react'

export default function CommentUserProduct() {
  return (
    <div className='w-full py-7 px-5 grid grid-cols-12'>
        <div className=' col-span-1'>
        <img
         className=' rounded-full w-[50px] h-[50px]'
        alt=''
        src='https://media3.scdn.vn/img4/2022/12_06/yS31FA8Z4YTh6iM4K53p.png'
        />
        </div>
        <div className='col-span-9'>
            <span className='text-[0.9rem] text-slate-700'>
                nguyenvantriem
            </span>
            <div className='flex items-center '>
                <div className=' '>
                    <span className='text-[0.8rem] text-slate-800'>
                    2023-17-10

                    </span>
                    
                </div>
                <div className='px-1'>
                    <span className='text-[0.8rem]  text-slate-700'>
                        15:00
                    </span>
                </div>
                <div className=' relative px-1'>
                <span className='text-[0.85rem] text-slate-900'>
                    Phan loai hang : <span> Iphone 11</span>
                </span>
                <div  className='border-r  border-r-slate-500  absolute h-3 left-0 top-[7px]'>
                    </div>
                </div>
            </div>
            <div className='w-full '>
                <span className='text-[0.9rem] text-textword font-sans'>
                Ốp lưng cứng cáp rất đẹp, khi dùng mn nhớ lột miếng nilon chống trầy cả mặt trong và mặt ngoài, cả chính giữa vòng tròn ra ốp lưng mới bóng đẹp nha, đặc biệt khi sử dụng pin sạc ko dây nhờ có ốp này mà cục pin hít rất chặt.
                </span>
            </div>
            <div className='flex items-center pr-2 py-2 gap-3'>
                <img
                 className='w-[80px] h-[80px] object-contain  cursor-pointer'
                alt=''
                src='https://down-bs-vn.img.susercontent.com/vn-11134103-23020-fbkj8skooenvda.webp'
                />
               
            </div>
        </div>
      
    </div>
  )
}
