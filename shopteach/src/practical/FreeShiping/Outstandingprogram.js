import React from "react";

export default function Outstandingprogram() {
  return (
    <>
      <div className="flex justify-center">
        <button className=" px-[180px] py-6  rounded-[50px] bg-cyan-400 shadow-lg shadow-cyan-400/70  border border-[#d3e2ec]">
          <span className=" uppercase  text-[2rem]  font-sans text-white ">
            Chương trình nổi bật
          </span>
        </button>
      </div>
      <div className="flex justify-center mt-10">
        <img
          className="w-[1000px]"
          alt=""
          src="https://media3.scdn.vn/img4/2023/10_09/jGE9YorO8csBXHhRa52f.jpg"
        />
      </div>
      <div className="w-[1000px]   bg-white flex m-auto mt-5 flex-col justify-start pb-5">
       <span className="px-5 pt-5   text-orange-500 text-[1.1rem] uppercase">
        Chương trình giảm giá
       </span>
       <div className="w-[600px] flex-wrap mt-2 pl-10">
        <p className="text-orange-500 text-[1.2rem] font-sans">
                <span className=" font-bold ">  - Giảm tối đa 15.000đ</span> cho đơn hàng  <span className=" font-bold ">  trị giá 150.000đ</span>  khi mua từ shop cùng tỉnh/thành phố
        </p>
        <p className="text-orange-500 text-[1.2rem] font-sans">
                <span className=" font-bold ">  - Giảm tối đa 45.000đ</span> cho đơn hàng  <span className=" font-bold ">  trị giá 500.000đ</span>  khi mua từ Shopteach Mall
        </p>
        <p className="text-orange-500 text-[1.2rem] font-sans">
                <span className=" font-bold ">  - Giảm tối đa 10.000đ</span> cho đơn hàng  <span className=" font-bold ">  trị giá 100.000đ</span>  khi mua từ shop khác tỉnh/thành phố
        </p>
       </div>
       <span className="px-5 pt-5   text-orange-500 text-[1.1rem] uppercase">
        Mã FreeShip XTra
       </span>
       <div className="w-[600px] flex-wrap mt-2 pl-10">
        <p className="text-orange-500 text-[1.2rem] font-sans">
              - Chỉ áp dụng cho shop gắn logo<span className=" font-bold ">  Freeship Xtra</span>
        </p>
        <p className="text-orange-500 text-[1.2rem] font-sans">
       - Miễn phí vận chuyển<span className=" font-bold ">  - Giảm tối đa 45.000đ</span> cho đơn hàng <span className=" font-bold ">   từ 500.000đ</span>
        </p>
        <p className="text-orange-500 text-[1.2rem] font-sans">
       - Miễn phí vận chuyển<span className=" font-bold ">  - Giảm tối đa 10.000đ</span> cho đơn hàng <span className=" font-bold ">   từ 50.000đ</span>
        </p>
        
       </div>
      </div>
      <ul  className="mt-[13px]" >
      <li >
        <div className=' col-span-1  w-full max-h-[200px]'>
           <div className="w-[190px] border rounded  bg-white   cursor-pointer transition-all ease-out translate-y-0 hover:-translate-y-[3px] hover:border-violet">
            <div className=" w-full  ">
              <img
                className="w-[170px] h-[190px] flex  m-auto border"
                alt=""
                src="https://salt.tikicdn.com/cache/280x280/ts/product/e2/79/3a/99fb3f8dd32c331e6535e5aae5d51f98.jpg.webp"
              />
            </div>
            <div className=" w-full mt-2 px-2 ">
              <p className="  line-clamp-2   text-textword font-medium text-[0.95rem]  ">
              Tai nghe Apple Airpods 3 2022 sạc lightning
              </p>
            </div>
            <div className="w-full px-2 py-2 ">
              <div className="">
                <span className="text-[1.09rem] text-violet font-bold">
               45.000đ
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
        </li>
      </ul>
    </>
  );
}
