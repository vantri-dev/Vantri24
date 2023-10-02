import "../../../components/pages/UserAuth/Auth.css";
import { IoIosArrowBack } from "react-icons/io";
import backgroundImg from "../../img/Privacy policy-amico.png";
import { useForm } from "react-hook-form";
import * as React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/Context";

function ForgotPassword() {
  const [disabled, setDisable] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const { ForgotPassword } = useAuth();
  const navigateHome = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data.email)
    try {
      setDisable(true);
      setError("");
      setSuccess("");
      
   await  ForgotPassword(data.email)
      setSuccess("true");

      setTimeout(() => {
        navigateHome("/signIn");
      }, 5000);
    } catch (error) {
      setError("Account Not Found");
    }
    setDisable(false);
  };

  return (
    <div className="flex items-center mt-[3%]">
      <div id="form">
        <div className=" ml-[18.4%] pb-[3%]">
          <Link to="/signIn" className="flex items-center ">
            <IoIosArrowBack className="text-[1.3rem] text-[#ccc] " />
            <span className="text-[1.1rem] text-[#ccc] pl-[2px] ">Back</span>
          </Link>
        </div>
        <form
          className="flex flex-col w-[62%]
         gap-3 m-auto rounded-xl
        bg-ffffff p-[40px] shadow-boxshadowbt "
          onSubmit={handleSubmit(onSubmit)}
        >
          {error && 
            <div
              className="bg-red-100 border border-red-300 text-red-500 px-4 py-[7px] rounded relative"
              role="alert"
            >
              <strong className="font-bold">{error}</strong>
              <span className="absolute top-0 bottom-0 right-0 px-4 py-[7px]"></span>
            </div>
          }
          {success && 
            <div
              class="bg-teal-100  border-teal-200 rounded-md  px-4 py-3 shadow-md"
              role="alert"
            >
              <div class="flex">
                <div class="py-1">
                  <svg
                    class="fill-current h-6 w-6 text-teal-400 mr-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
                  </svg>
                </div>
                <div>
                  <p class="font-bold">Check Your Email</p>
                  <p class="text-sm text-thin">
                 
                    Back To The Registration Page Laster 5s
                  </p>
                </div>
              </div>
            </div>
          }
          <div className="flex-column">
            <label>Email </label>
          </div>
          <div className="inputForm">
            <input
              placeholder="Enter your Email"
              className="placeholder:text-base pl-10px w-full h-100%   outline-[#f3e8ff] font-light text-[0.9rem]  rounded-[10px]"
              type="text"
              {...register("email", {
                required: true,
                pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
              })}
            />
          </div>
          <span className="text-[0.9rem] text-[#ef4444]  font-thin">
            {errors.email?.type === "pattern" &&
              "Entered email is in wrong format"}
          </span>

          <button
            className="bg-violet h-[50px] rounded-[10px] text-f1f5f9 mt-4.3% cursor-pointer font-extralight"
            type="submit"
            disabled={disabled}
          >
            ConFirm
          </button>
        </form>
      </div>

      <div className=" w-[50%] m-auto block">
        <img id="imgSign" src={backgroundImg} alt="backgroundImg" />
      </div>
    </div>
  );
}

export default ForgotPassword;
