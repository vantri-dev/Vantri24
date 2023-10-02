import logo from "../../../components/img/img/logo_transparent.png";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineShoppingCart,
} from "react-icons/ai";

import SearchResult from "../../Search/SearchResult";
import { useAuth } from "../../../context/Context";
import Wrapper from "../../Popper/Wrapper";

import { useState, useEffect, useRef } from "react";
import React from "react";
import { Link } from "react-router-dom";

function Header() {
  const { currentUser, hanldeSignOut } = useAuth();
  const [show, setShow] = useState(false);
  const userRef = useRef();
  const checkOrder = useRef();
  useEffect(() => {
    let hiddenUser = (e) => {
      if (userRef.current && !userRef.current.contains(e.target)) {
        setShow(false);
      }
    };
    document.addEventListener("mousedown", hiddenUser);
    return () => {
      document.removeEventListener("mousedown", hiddenUser);
    };
  }, []);

  //Hidden menu
  const [showMenu, setShowMenu] = useState(false);
  const [closewMenu, setCloseMenu] = useState(true);

  useEffect(() => {
    let hiddenTab = () => {
      setShowMenu(false);
    };
    document.addEventListener("mousedown", hiddenTab);
    return () => {
      document.removeEventListener("mousedown", hiddenTab);
    };
  }, [showMenu]);


  return (
    <>
      <header className=" flex items-center mmd:py-3 mmd:pb-4 ssm:py-3 ssm:pb-4  sm:py-3 sm:pb-4 smm:py-3 smm:pb-4 relative">
        <div className="xl:w-2/12  lg:w-2/12 md:1/12 xl:pl-8  md:pl-4 mmd:hidden mmd:w-0 ssm:hidden sm:w-2/12 smm:w-2/12 ">
          <img
            className="object-contain w-32 sm:hidden  smm:hidden"
            src={logo}
            alt=""
          />
          <AiOutlineMenu
            className=" hidden sm:block smm:block text-[1.4rem]   mt-[9px] text-fuchsia-500 cursor-pointer"
            onClick={() => setShowMenu(!showMenu)}
          />
        </div>
        {
          <div
            className={`bg-white w-[47%] h-[550px] border  rounded-br absolute left-[-40px] top-[72px] border-t-transparent  transition-all  ease-in  duration-300 hidden sm:block smm:block  ${
              showMenu
                ? "translate-x-0 sm:bg-blend-overlay"
                : "translate-x-[-100%]"
            } `}
          >
            {closewMenu && (
              <ul className=" pt-4 relative">
                <AiOutlineClose
                  className=" absolute text-[1.3rem] right-3 top-1 items-end text-slate-300 cursor-pointer"
                  onClick={() => setCloseMenu(!closewMenu)}
                />
                <Link to="/">
                  <li className="py-[15px] mt-1 pl-8 flex items-center  hover:bg-slate-100  hover:rounded-lg cursor-pointer">
                    <img
                      className="w-6 h-6 mr-[15px]"
                      alt=""
                      src="https://cdn-icons-png.flaticon.com/128/1946/1946488.png?ga=GA1.1.211905827.1690876736"
                    />

                    <span className=" text-textword text-[1.1rem] pt-1">
                      Trang chủ
                    </span>
                  </li>
                </Link>
                <Link to="/profile">
                  <li className="py-[15px] mt-1 pl-8 flex items-center  hover:bg-slate-100  hover:rounded-lg cursor-pointer">
                    <img
                      className="w-6 h-6 mr-[15px]"
                      alt=""
                      src="https://cdn-icons-png.flaticon.com/128/839/839860.png"
                    />

                    <span className=" text-textword text-[1.1rem] pt-1">
                      Đơn hàng
                    </span>
                  </li>
                </Link>
                {currentUser === null ? (
                  <Link to="/signIn">
                    <li className="py-[15px] mt-1 pl-8 flex items-center  hover:bg-slate-100  hover:rounded-lg cursor-pointer">
                      <img
                        className="w-6 h-6 mr-[15px]"
                        alt=""
                        src="https://cdn-icons-png.flaticon.com/128/10479/10479887.png"
                      />

                      <span className=" text-textword text-[1.1rem] pt-1">
                        Đănh nhập
                      </span>
                    </li>
                  </Link>
                ) : (
                  <Link to="/profile">
                    <li className="py-[15px] mt-1 pl-8 flex items-center  hover:bg-slate-100  hover:rounded-lg cursor-pointer">
                      <img
                        className="w-6 h-6 mr-[15px]"
                        alt=""
                        src="https://cdn-icons-png.flaticon.com/128/747/747376.png"
                      />

                      <span className=" text-textword text-[1.1rem] pt-1">
                        Tai khoan
                      </span>
                    </li>
                  </Link>
                )}

                <li
                  className="py-[15px] mt-1 pl-8 flex items-center  hover:bg-slate-100  hover:rounded-lg cursor-pointer"
                  onClick={hanldeSignOut}
                >
                  <img
                    className="w-6 h-6 mr-[15px]"
                    alt=""
                    src="https://cdn-icons-png.flaticon.com/128/8944/8944312.png"
                  />

                  <span className=" text-textword text-[1.1rem] pt-1">
                    Đăng xuất
                  </span>
                </li>
              </ul>
            )}
          </div>
        }

        <div className=" xl:w-10/12 flex lg:w-10/12  md:w-11/12 mmd:w-[100%] ssm:w-[100%] sm:w-10/12 smm:w-10/12  ">
          <div className=" xl:w-7/12 lg:w-6/12 md:w-[45%] xl:pb-7px  xl:pr-10% md:pr-[5%] mmd:w-[46%] ssm:w-[44%]  sm:w-[70%] smm:w-[70%]">
            <SearchResult />
          </div>
          <div className=" xl:w-5/12 lg:w-6/12  md:w-[55%] mmd:w-[54%]  ssm:w-[56%]  sm:w-[30%] smm:w-[30%]">
            <ul className=" flex items-center list-none  pt-[5px] ">
              <li className="  xl:pl-0  xl:min-w-30%  md:min-w-[29%] ">
                <Link to="/" className="flex items-center sm:hidden smm:hidden">
                  <AiOutlineHome className="text-[1.8rem] text-[#64748b] " />

                  <span className=" px-7px pt-4px mr-3 text-textword  ">
                    Trang Chủ
                  </span>
                </Link>
              </li>

              <li
                className=" relative xl:min-w-30% md:min-w-[29%]"
                ref={userRef}
                onClick={() => setShow(!show)}
              >
                {currentUser === null ? (
                  <Link
                    to="/signIn"
                    className="flex items-center sm:hidden  smm:hidden"
                  >
                    <AiOutlineUser className="text-[1.8rem] text-[#64748b]" />
                    <span className="px-7px pt-4px mr-3 text-textword sm:hidden smm:hidden ">
                      Đăng Nhập
                    </span>
                  </Link>
                ) : (
                  <Link className="flex items-center">
                    <AiOutlineUser className="text-[1.8rem] text-[#64748b] sm:hidden smm:hidden" />
                    <span className="px-7px pt-4px mr-3 text-textword  sm:hidden smm:hidden">
                      Tài Khoản
                    </span>
                  </Link>
                )}
                {show && (
                  <div className=" absolute w-52 right-[78px]   top-[35px] ">
                    <div
                      class="w-0 h-0  absolute top-[-10px] right-3
  border-l-[20px]   border-l-transparent
  border-b-[25px] border-b-white
  border-r-[20px] border-r-transparent  "
                    ></div>
                    <Wrapper>
                      <div>
                        <ul className="flex flex-col  mt-7%  cursor-pointer   ">
                          <Link to="/profile">
                            <li className=" hover:bg-f1f5f9  pl-15px  pb-5px pt-[4px]">
                              <span className=" text-textword ">
                                Thông tin tài khoản
                              </span>
                            </li>
                          </Link>
                          <Link to="/profile" ref={checkOrder}>
                            <li className=" pl-15px py-5px hover:bg-f1f5f9 ">
                              <span className=" text-textword">
                                Đơn hàng của tôi
                              </span>
                            </li>
                          </Link>
                          <li
                            className="pl-15px pt-5px mb-[5px] hover:bg-f1f5f9 "
                            onClick={hanldeSignOut}
                          >
                            <span className=" text-textword">Đăng xuất</span>
                          </li>
                        </ul>
                      </div>
                    </Wrapper>
                  </div>
                )}
              </li>

              <li className="sm:pl-[50%] sm:pt-1 smm:pl-[45%] smm:pt-1">
                <Link to="/cart" className="flex items-center ">
                  <AiOutlineShoppingCart className="text-[1.8rem] text-[#64748b]" />
                  <span className="px-7px pt-4px mr-3 text-textword  sm:hidden smm:hidden">
                    Giỏ Hàng
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}
export default Header;
