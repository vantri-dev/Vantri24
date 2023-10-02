import React from "react";

import { BiLogoFacebookCircle, BiLogoInstagramAlt } from "react-icons/bi";
import { PiLinkedinLogoFill } from "react-icons/pi";

import { Link } from "react-router-dom";
export default function Footer() {
  const customerCare = [
    "   Trung tâm trợ giúp",
    " Shopteach Mall",
    " Hướng dẫn mua hàng",
    " Chính sách bảo mật",
    "  Quy chế hoạt động  ",
  ];

  const aboutShopteach = [
    " Đều khoản Shopteach",
    "Chính sách bảo mật thông tin",
    "  Bán hàng doanh nghiệp",
    "   Liên kết truyền thông",
  ];
  return (
    <div className="w-full  bg-white gap-3 pl-[70px]  ">
      <div className="grid grid-cols-5 ">
        <div className="  col-span-1 py-5 px-6 ">
          <span className=" text-[0.85rem]  font-semibold text-slate-600 uppercase  font-mono mb-1">
            Chăm sóc khách hàng
          </span>
          <ul className="flex  flex-col  items-start cursor-pointer">
            {customerCare.map((item, index) => {
              return (
                <Link to="/"  key={index}>
                  <li className="mt-[5px] ">
                    <p className="text-[0.89rem] text-slate-400 hover:text-violet">
                      {item}
                    </p>
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
        <div className="  col-span-1 py-5 px-6 ">
          <span className=" text-[0.85rem]  font-semibold text-slate-600 uppercase  font-mono mb-1">
            Về shopteach
          </span>
          <ul className="flex  flex-col  items-start">
            {aboutShopteach.map((teach, index) => {
              return (
                <Link to="/" key={index}>
                  <li  className="mt-[5px] cursor-pointer ">
                    <p className="text-[0.89rem] text-slate-400 hover:text-violet">
                      {teach}
                    </p>
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
        <div className="  col-span-1 py-5 px-6 ">
          <span className=" text-[0.85rem]  font-semibold text-slate-600 uppercase  font-mono mb-1">
            Thanh toán
          </span>
          <div className="w-full grid grid-cols-3 gap-2 mt-[9px] cursor-pointer">
            <div className=" col-span-1">
              <img
                alt=""
                className="w-11 h-7 border-b shadow px-1 py-1  rounded"
                src="https://down-vn.img.susercontent.com/file/d4bbea4570b93bfd5fc652ca82a262a8"
              />
            </div>
            <div className=" col-span-1">
              <img
                alt=""
                className="w-11 h-7 border-b shadow px-1 py-1  rounded"
                src="https://down-vn.img.susercontent.com/file/bc2a874caeee705449c164be385b796c"
              />
            </div>
            <div className=" col-span-1">
              <img
                alt=""
                className="w-11 h-7 border-b shadow px-1 py-1  rounded"
                src="https://down-vn.img.susercontent.com/file/38fd98e55806c3b2e4535c4e4a6c4c08"
              />
            </div>
            <div className=" col-span-1">
              <img
                alt=""
                className="w-11 h-7 border-b shadow px-1 py-1  rounded"
                src="https://down-vn.img.susercontent.com/file/a0a9062ebe19b45c1ae0506f16af5c16"
              />
            </div>
            <div className=" col-span-1">
              <img
                alt=""
                className="w-11 h-7 border-b shadow px-1 py-1  rounded"
                src="https://down-vn.img.susercontent.com/file/2c46b83d84111ddc32cfd3b5995d9281"
              />
            </div>
          </div>
        </div>
        <div className="  col-span-1 py-5 px-6 ">
          <span className=" text-[0.85rem]  font-semibold text-slate-600 uppercase  font-mono mb-1">
            Theo dõi
          </span>
          <ul className="flex  flex-col  items-start">
            <a href="https://www.facebook.com/sieu.nhans.hong">
              <li className="mt-[5px] flex items-center cursor-pointer">
                <BiLogoFacebookCircle className=" text-slate-400 " />
                <p className="text-[0.89rem] text-slate-400 pl-1 pt-[2px]">
                  Facebook
                </p>
              </li>
            </a>
            <a href="https://www.facebook.com/sieu.nhans.hong">
              <li className="mt-[5px] flex items-center ">
                <PiLinkedinLogoFill className=" text-slate-400" />
                <p className="text-[0.89rem] text-slate-400 pl-1 pt-[2px]">
                  Linkedin
                </p>
              </li>
            </a>
            <a href="https://www.facebook.com/sieu.nhans.hong">
              <li className="mt-[5px] flex items-center ">
                <BiLogoInstagramAlt className=" text-slate-400" />
                <p className="text-[0.89rem] text-slate-400 pl-1 pt-[2px]">
                  Instagram
                </p>
              </li>
            </a>
          </ul>
        </div>
        <div className="  col-span-1 py-5 px-6  cursor-pointer 
        ">
          <span className=" text-[0.85rem]  font-semibold text-slate-600 uppercase  font-mono mb-1">
            Tải ứng dụng
          </span>
          <div className="flex items-center">
            <div className="w-25 h-[85px] border mr-1 pt-[2px] px-[2px] shadow">
              <img
                className="w-15 h-17"
                alt=""
                src="https://down-vn.img.susercontent.com/file/a5e589e8e118e937dc660f224b9a1472"
              />
            </div>
            <div className="w-17 flex  flex-col ">
              <div className="border  py-[2px] px-[2px] rounded  shadow mb-1">
                <img
                  className="w-15 h-5  "
                  alt=""
                  src="https://down-vn.img.susercontent.com/file/ae7dced05f7243d0f3171f786e123def"
                />
              </div>
              <div className="border  py-[2px] px-[2px] rounded  shadow mb-1 ">
                <img
                  className="w-15 h-5  "
                  alt=""
                  src="https://down-vn.img.susercontent.com/file/ad01628e90ddf248076685f73497c163"
                />
              </div>
              <div className="border  py-[2px] px-[2px] rounded  shadow  ">
                <img
                  className="w-15 h-5  "
                  alt=""
                  src="https://down-vn.img.susercontent.com/file/35352374f39bdd03b25e7b83542b2cb0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" border-t mx-10 "></div>
      <div className="w-full mt-5 flex items-center justify-center">
        <span className="text-[0.95rem] text-slate-400">
          @ 2023 Shopteach . Bản độc quyền của công ty Shopteach
        </span>
      </div>
      <div className="flex items-center  justify-evenly mt-7">
        <span className="border-r uppercase text-[0.85rem] pr-[5%] ">
          Chính sách bảo mật
        </span>

        <span className="border-r uppercase text-[0.85rem] pr-[5%] ">
        Quy chế vận chuyển
        </span>

        <span className="border-r uppercase text-[0.85rem] pr-[5%] ">
        Quy chế hoạt động
        </span>

        <span className="border-r uppercase text-[0.85rem] pr-[5%] ">
         Chính sách hoàn trả
        </span>
      </div>
      <div className="mt-3  ml-[32%]">
        <div className=" w-[150px] h-full flex items-center ">
          <img
            className=" h-[100px] mr-2"
            alt=""
            src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong.svg"
          />
          <img
            className=" h-[100px] mr-2"
            alt=""
            src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong.svg"
          />
          <img
            className=" h-[50px] ml-2"
            alt=""
            src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong-2.png"
          />
        </div>
      </div>
      <div className="w-full mt-2 flex flex-col items-center justify-center pb-10">
        <span className="text-[0.85rem] text-slate-500">
          Địa chỉ : 487/23 Huỳnh Tấn Phát Phường Tân Thuận Đông Quận 7 Thành Phố Hồ Chí Minh.Tổng đài hỗ trợ:1800 6933-Email:@cskhshopteach
        </span>
        <span className="text-[0.85rem] text-slate-500">
          Mã số doanh nghiệp: 083204006933 do Sở Kế hoạch & Đầu tư TP Bến Tre cấp
          lần đầu ngày 30/08/2004
        </span>
        <span className="text-[0.85rem] text-slate-500">
          Chịu trách nhiệm quản lí: Nguyễn Văn Trí Em - Số điện thoại :0566 438
          955
        </span>
        <span className="text-[0.85rem] text-slate-500">
          @2004 - Bản quyền thuộc về công ty Shopteach
        </span>
      </div>
    </div>
  );
}
