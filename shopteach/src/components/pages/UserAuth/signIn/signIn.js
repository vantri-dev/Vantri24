import "../Auth.css";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import backgroundImg from "../../../../components/img/—Pngtree—modern flat design concept of_5332906.png";

import { useForm } from "react-hook-form";
import * as React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../../context/Context";


function SignIn() {
  const [disabled, setDisable] = useState(false);
  const [error, setError] = useState("");
  const { signIn, handleLoginGoogle , hanldeLoginFacebook } = useAuth();
  const navigateHome = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = async (data) => {
    try {
      setDisable(true);
      setError("");
      await signIn(data.email, data.password);
      navigateHome("/");
    } catch (error) {
      setError("Fail To SignIn");
    }
    setDisable(false);
  };
  const onSubmitGoogle = async (e) => {
   e.preventDefault()
    try {
      await handleLoginGoogle();
      navigateHome('/')
    } catch (error) {
      console.log("Error");
    }
  };
  const onSubmitFacebook = async (e) => {
   e.preventDefault()
    try {
      await hanldeLoginFacebook();
      navigateHome('/')
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center mt-[2%]  ">
      <div id="form">
        <div className=" ml-[18.4%] pb-[4%]">
          <Link to="/" className="flex items-center ">
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
          <div className="flex flex-col">
            <label>Email </label>
          </div>
          <div className="inputForm ">
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
            {errors.email?.type === "required" && " Email is required"}
            {errors.email?.type === "pattern" &&
              "Entered email is in wrong format"}
          </span>

          <div className="flex flex-col">
            <label>Password </label>
          </div>
          <div className="inputForm">
            <input
              placeholder="Enter your Password"
              className="placeholder:text-base pl-10px w-full h-100%   outline-[#fae8ff] font-light text-[0.9rem]  rounded-[10px] "
              type="password"
              {...register("password", {
                required: true,
                minLength: 5,
                maxLength: 20,
              })}
            />
          </div>
          <span className="text-[0.9rem] text-[#ef4444]  font-thin">
            {errors.password?.type === "required" && " Password is required"}
            {errors.password?.type === "minLength" &&
              "Entered password is less than 5 characters"}
            {errors.password?.type === "maxLength" &&
              "Entered password is more than 20 characters"}
          </span>

          <div className="flex-row">
            <div>
              <input type="radio" />
              <label>Remember me </label>
            </div>
            <Link
              to="/forgotPassword"
              style={{ textDecoration: "none" }}
              className="span font-normal text-base text-[#22d3ee]"
            >
              Forgot password?
            </Link>
          </div>

          <button
            className="bg-violet h-[50px] rounded-[10px] text-f1f5f9 mt-4.3% cursor-pointer font-extralight"
            type="submit"
            disabled={disabled}
          >
            SignIn
          </button>

          <p className="p text-[1rem]">
            Don't have an account?{" "}
            <Link
              to="/signUp"
              style={{
                textDecoration: "none",
              }}
            >
              <span className="span text-base font-normal text-[#22d3ee] pl-1">
                SignUp
              </span>
            </Link>
          </p>
          <p className="p line">Or With</p>

          <div className="flex-row">
            <button
              className="button_sign google py-[4px] mr-4.3% text-base cursor-pointer"
              onClick={onSubmitGoogle}
            >
              <FcGoogle style={{ fontSize: "2.1rem" }} />
              Google
            </button>
            <button className="button_sign apple py-[4px] text-base " onClick={onSubmitFacebook}>
              <FaFacebookSquare style={{ fontSize: "2.1rem" ,color:"blue"}} />
              Facebook
            </button>
          </div>
        </form>
      </div>
      <div className=" w-[50%] m-auto block">
        <img id="imgSign" src={backgroundImg} alt="backgroundImg" />
      </div>
    </div>
  );
}

export default SignIn;
