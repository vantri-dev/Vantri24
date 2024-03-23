
import React, { useState ,useEffect} from "react";

import { BsChevronRight } from "react-icons/bs";
import { useForm } from "react-hook-form";

import { useAuth } from "../context/Context";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function CheckOut() {
  const { handleCheckOut } = useAuth();
  const [disabled, setDisable] = useState(false);
  const routerInforCheckOut = useNavigate();
  const [checkUser,getCheckUser]=useState([])
  const error = null;
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit =  (data) => {
    try {
      setDisable(true);
      if(data !== undefined) {
         handleCheckOut(data);
         getCheckUser(data)
        routerInforCheckOut("/inforCheckOut");
      }
    } catch (error) {}
    setDisable(false);
  };

useEffect(()=>{
  localStorage.setItem("checkOut", JSON.stringify(checkUser))
},[checkUser])
  return (
    <>
      <div className="w-full flex items-center  ml-[102px] mt-[6%]">
        <Link to="/">
          <span className="text-[0.9rem] text-slate-400">Trang chủ</span>
        </Link>
        <BsChevronRight className="text-[0.95rem]  text-slate-400 mx-[0.1rem] mt-[0.1rem]" />
        <Link to="/cart">
          <span className="text-[0.9rem] text-slate-400 ">Giỏ hàng</span>
        </Link>
        <BsChevronRight className="text-[0.95rem]  text-slate-400 mx-[0.1rem]  mt-[0.1rem]" />
        <Link to="/checkOut">
          <span className="text-[0.9rem] ">Thanh toán</span>
        </Link>
      </div>
      <form
        className="flex flex-col w-[40%]  my-[5%]
         gap-3 m-auto rounded-xl
        bg-ffffff p-[20px] shadow-boxshadowbt "
        onSubmit={handleSubmit(onSubmit)}
      >
        {error && (
          <div
            className="bg-red-100 border border-red-300 text-red-500 px-4 py-[7px] rounded relative"
            role="alert"
          >
            <strong className="font-bold">{error}</strong>
            <span className="absolute top-0 bottom-0 right-0 px-4 py-[7px]"></span>
          </div>
        )}
        <div className="flex flex-col">
          <label>Họ tên người nhận</label>
        </div>
        <div className="inputForm ">
          <input
            placeholder='Vui lòng nhập tên người nhận' 
            className="placeholder:text-base pl-10px w-full h-100%   outline-[#f3e8ff] font-light text-[1rem]  rounded-[10px]"
            type="text"
            {...register("name", {
              required: true,
            })}
          />
        </div>
        <span className="text-[0.95rem] text-[#ef4444]  font-thin">
          {errors.name?.type === "required" && "Bạn chưa nhập họ tên"}
        </span>

        <div className="flex flex-col">
          <label>Số điện thoại </label>
        </div>
        <div className="inputForm">
          <input
            placeholder= 'Vui lòng nhập số điện thoại' 
            className="placeholder:text-base pl-10px w-full h-100%   outline-[#fae8ff] font-light text-[0.9rem]  rounded-[10px] "
            type="number"
            {...register("number", {
              required: true,
              maxLength: 10,
             pattern: /^[0-9]{10}$/,
            })}
          />
        </div>
        <span className="text-[0.95rem] text-[#ef4444]  font-thin">
          {errors.number?.type === "required" && "Bạn chưa nhập số điện thoại"}
          {errors.number?.type === "pattern" && "Định dạng số điện thoại không hợp lệ"}
          {errors.number?.type === "maxLength" &&
            "Số điện thoại phải bé hơn 10 số"}
        </span>

        <div className="flex flex-col">
          <label>Gmail </label>
        </div>
        <div className="inputForm ">
          <input
           placeholder= 'Vui lòng nhập email' 
            className="placeholder:text-base pl-10px w-full h-100%   outline-[#f3e8ff] font-light text-[0.9rem]  rounded-[10px]"
            type="email"
            {...register("email", {
              required: true,
              pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
            })}
          />
        </div>
        <span className="text-[0.9rem] text-[#ef4444]  font-thin">
          {errors.email?.type === "required" && "Bạn chưa nhập email"}
          {errors.email?.type === "pattern" && "Định dạng email không hợp lệ"}
        </span>

        <div className="flex flex-col">
          <label>Địa chỉ</label>
        </div>
        <div className="inputForm ">
          <input
           placeholder= 'Vui lòng nhập địa chỉ' 

            className="placeholder:text-base pl-10px w-full h-100%   outline-[#f3e8ff] font-light text-[1rem]  rounded-[10px]"
            type="text"
            {...register("adress", {
              required: true,
            })}
          />
        </div>
        <span className="text-[0.95rem] text-[#ef4444]  font-thin">
          {errors.adress?.type === "required" && "Bạn chưa nhập địa chỉ"}
        </span>

        <div className="flex   justify-evenly">
          <Link
            to="/cart"
            style={{
              marginTop: "18px",
            }}
          >
            <button className=" bg-slate-300   text-[1.1rem] h-[50px] w-[160px] rounded-[10px] text-f1f5f9 mt-4.3% cursor-pointer  font-bold">
              Hủy
            </button>
          </Link>

          <button
            className="bg-violet h-[50px] w-[160px]  text-[1.1rem] rounded-[10px] text-f1f5f9 mt-4.3% cursor-pointer font-bold 5"
            type="submit"
            disabled={disabled}
          >
            Tiếp tục
          </button>
        </div>
      </form>
    </>
  );
}
