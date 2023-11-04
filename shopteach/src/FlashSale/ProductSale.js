import React from 'react'

import { useState, useEffect} from 'react'
export default function Product() {
  const [products,setProducts]=useState([])
  const [showProduct,setShowProduct]=useState(54)

  useEffect(()=>{
    const dataProducts = async ()=>{
         const repAPi= await  fetch('https://jsonplaceholder.typicode.com/comments')
         const data =  await repAPi.json()
         setProducts(data)
    }
    dataProducts()

  },[])
const handleShowProduct = ()=>{
  setShowProduct((prev)=> prev + 15)
}
  return (
  <>

    <div  className='w-full  grid  grid-cols-6 gap-2 mt-[13px] mb-[13px] '>
      {
        products.slice(0,showProduct).map((product,index)=>{
        return (
        <div key={index} className=' col-span-1  w-full max-h-[520px]'>
           <div className="w-[215px] border rounded  bg-white   cursor-pointer transition-all ease-out translate-y-0 hover:-translate-y-[3px] hover:border-violet">
            <div className=" w-full  ">
              <img
                className="w-[170px] h-[190px] flex  m-auto border"
                alt=""
                src="https://salt.tikicdn.com/cache/280x280/ts/product/e2/79/3a/99fb3f8dd32c331e6535e5aae5d51f98.jpg.webp"
              />
            </div>
            <div className=" w-full mt-2 px-2 ">
              <p className="  line-clamp-2   text-textword font-medium text-[0.95rem]  ">
            {product.body}
              </p>
            </div>
            <div className="w-full px-2 py-2 ">
              <div className="">
                <span className="text-[1.09rem] text-violet font-bold">
                  {product.id}.000đ
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                <p className=" font-medium text-[0.85rem] text-[#cbd5e1] line-through">
                  145.000đ
                </p>
                <p className=" font-medium text-[0.85rem] text-violet pl-1">
                  -39%
                </p>
                </div>
                <p className="text-[0.8rem] text-[#94a3b8] pl-1 ">

                Đã bán 2.2k
                </p>
              </div>
            </div>
          </div>
        </div>
        )  
        })
      }
        
    </div>
    <div className='flex items-center justify-center'>
        <button className='w-15 h-15 px-10 py-2 bg-violet rounded text-white text-[1.1rem] mb-5 mt-2 hover:bg-fuchsia-500  hover:scale-[1.01]' onClick={handleShowProduct}>
          Xem thêm
        </button>

    </div>
  </>
  )
}
