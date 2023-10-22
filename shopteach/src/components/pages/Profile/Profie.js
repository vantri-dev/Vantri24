import { IoCloseOutline } from "react-icons/io5";

import UserProfile from "./userProfile";
import Order from "./Order";
import ProductFavorite from "./ProductFavorite";
import Offer from "./Offer/Offer";
import Comment from "./ShopFavorite";

import { useRef, useState, useEffect } from "react";

import { getDatabase, ref as dataRef, remove } from "firebase/database";

export default function Profile() {
  const db = getDatabase();

  //Tab
  const [tabs, setTabs] = useState(0);
  const listProfile = [
    {
      name: "Thông tin tài khoản",
      icon: "CiUser",
    },
    {
      name: "Đơn hàng của tôi",
      icon: "</CiUser>",
    },
    {
      name: "Sản phẩm yêu thích",
      icon: "</CiUser>",
    },

    {
      name: "Ưu đãi voucher",
      icon: "</CiUser>",
    },

    {
      name: "Shop yêu thích",
      icon: "</CiUser>",
    },
  ];
  //Table Profile
  const [tableProfile, setTableProfile] = useState(false);
  const tabRef = useRef();
  //get Data Child
  const [profileUser, setProfileUser] = useState([]);

  const hanldeDeleteProfile = async (idDelete) => {
    try {
      await remove(dataRef(db, `/${idDelete.id}`));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    let hiddenTab = (e) => {
      if (!tabRef.current.contains(e.target)) {
        setTableProfile(false);
      }
    };
    document.addEventListener("mousedown", hiddenTab);
    return () => {
      document.removeEventListener("mousedown", hiddenTab);
    };
  }, []);

  //GetData Child

  const handleDataChild = (data) => {
    setProfileUser(data);
  };

  return (
    <div className=" grid grid-cols-5  bg-gray-100 px-[100px]  gap-[12px] pt-10px "> 
      <div className="flex flex-wrap col-span-1 ">
        <div className="p-[10px] bg-white w-full  flex flex-col md:flex  rounded-sm h-[502px] ">
          <nav>
            {listProfile.map((item, index) => {
              return (
                <div
                  onClick={() => setTabs(index)}
                  key={index}
                  className=" flex items-center text-[1.05rem] text-textword font-medium py-2.5 pr-[23px] pl-2 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:bg-[#f1f5f9]    cursor-pointer "
                >
                 
                  <div className="mr-[10px] pl-0 text-[1.5rem]">
                  
                   
                  </div>

                  <span
                    className={
                      tabs === index ? "text-violet" : "text-textword  "
                    }
                  >
                    {item.name}
                  </span>
                </div>
              );
            })}
          </nav>
        </div>
      </div>
      <div className="col-span-4  w-full relative h-">
        <ul>
          <li
            className={tabs === 0 ? "block  relative" : "hidden"}
            ref={tabRef}
          >
            <UserProfile handleDataChild={handleDataChild} />
            <div
              className=" flex items-end absolute top-[462px] right-5 "
              onClick={() => setTableProfile(!tableProfile)}
            >
              <span className="text-base italic  text-slate-500 cursor-pointer">
                Xem chi tiết
              </span>
            </div>
            {tableProfile && (
              <div className="w-full  absolute top-[513px] ">
                <section className=" w-full ">
                  <div className="w-full  mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
                    <header className="px-5 py-3 border-b border-gray-100">
                      <h2 className="font-semibold text-gray-500">
                        Lịch sử cập nhật
                      </h2>
                    </header>
                    <div className="p-3 ">
                      <div className="overflow-auto  max-h-44">
                        <table className=" w-full  ">
                          <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50 ">
                            <tr>
                              <th className="p-2 whitespace-nowrap w-[20%]">
                                <div className="font-semibold text-left">
                                  Tên
                                </div>
                              </th>
                              <th className="p-2 whitespace-nowrap  w-[20%]">
                                <div className="font-semibold text-left">
                                  Email
                                </div>
                              </th>
                              <th className="p-2 whitespace-nowrap  w-[20%]">
                                <div className="font-semibold text-left">
                                  Số điện thoại
                                </div>
                              </th>
                              <th className="p-2 pr-10 whitespace-nowrap  w-[20%]">
                                <div className="font-semibold text-center">
                                  Địa chỉ
                                </div>
                              </th>
                              <th className="p-2 whitespace-nowrap  w-[20%]">
                                <div className="font-semibold text-center">
                                  Giới tính
                                </div>
                              </th>
                            </tr>
                          </thead>
                          {profileUser.map((inforUser, index) => {
                            // console.log(inforUser);
                            const dataProile = inforUser.valueInput;

                            return (
                              <tbody
                                key={index}
                                className="text-sm divide-y divide-gray-100 relative "
                              >
                                <tr className=" hover:bg-slate-100 rounded-sm  border-b border-b-slate-100">
                                  <td className="p-2 whitespace-nowrap ">
                                    <div className="flex items-center">
                                      <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                                        <img
                                          className="rounded-full"
                                          src={
                                            inforUser.avata && inforUser.avata
                                          }
                                          width="40"
                                          height="40"
                                          alt=""
                                        />
                                      </div>
                                      <div className="font-medium text-gray-800 text-base">
                                        {dataProile.full_name}
                                      </div>
                                    </div>
                                  </td>
                                  <td className="p-2 whitespace-nowrap text-base">
                                    <div className="text-left">
                                      {dataProile.email}
                                    </div>
                                  </td>
                                  <td className="p-2 whitespace-nowrap">
                                    <div className="text-left font-medi text-base">
                                      {dataProile.phone}
                                    </div>
                                  </td>
                                  <td className="p-2 whitespace-nowrap">
                                    <div className=" text-base text-center ">
                                      {dataProile.address}
                                    </div>
                                  </td>
                                  <td className="p-2 whitespace-nowrap ">
                                    <div className="text-base text-center">
                                      {dataProile.male && dataProile.male}
                                      {dataProile.female && dataProile.female}
                                    </div>
                                  </td>
                                </tr>
                                <div
                                  className=" absolute top-2 right-1 text-[1.1rem] text-slate-700  cursor-pointer border-none"
                                  onClick={() => hanldeDeleteProfile(inforUser)}
                                >
                                  <IoCloseOutline />
                                </div>
                              </tbody>
                            );
                          })}
                        </table>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            )}
          </li>
          <li className={tabs === 1 ? "block " : "hidden"}>
            <Order />
          </li>
          <li className={tabs === 2 ? "block h-screen" : "hidden"}>
            <ProductFavorite />
          </li>
          <li className={tabs === 3 ? "block" : "hidden"}>
            <Offer />
          </li>
          <li className={tabs === 4 ? "block" : "hidden"}>
            <Comment />
          </li>
        </ul>
      </div>
    </div>
  );
}
