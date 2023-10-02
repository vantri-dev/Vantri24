import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare } from "react-icons/fa";
import backgroundImg from "../../../../components/img/—png-signup.png";

import { useForm } from "react-hook-form";
import { Link,useNavigate} from "react-router-dom";
import { useRef, useState } from "react";
import { useAuth } from "../../../../context/Context";


function SignUp() {
  const emailRef = useRef();

  const passwordRef = useRef();
  const confirmRef = useRef();
  const { signUp, hanldeLoginFacebook } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  let navigateHome=useNavigate()
 
  const {
    register,
    getValues,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
   
      try {
        setLoading(true);
        setError("");
        navigateHome("/signIn")
        await signUp(data.email, data.password);
      } catch {
        setError("Faild create SignUp");
      }
      setLoading(false);
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
    <div className="flex items-center mt-[2.5%]">
      <div id="form" >
        <form className="flex flex-col w-[62%]
         gap-3 m-auto rounded-xl
        bg-ffffff p-[30px] shadow-boxshadowbt " onSubmit={handleSubmit(onSubmit)}>
        
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
          <div className="inputForm">
            <input
            className='placeholder:text-base pl-10px w-full h-100%   outline-[#f3e8ff] font-light text-[0.9rem]  rounded-[10px]'
              ref={emailRef}
              type="email"
   
              placeholder="Enter your Email"
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
             className='placeholder:text-base pl-10px w-full h-100%   outline-[#f3e8ff] font-light text-[0.9rem]  rounded-[10px]'
              ref={passwordRef}
              placeholder="Enter your Password"
             
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
          <div className="flex flex-col">
            <label>ConfirmPassword</label>
          </div>
          <div className="inputForm">
            <input
             className='placeholder:text-base pl-10px w-full h-100%   outline-[#f3e8ff] font-light text-[0.9rem]  rounded-[10px]'
              ref={confirmRef}
              placeholder="Enter your ConfirmPassword"
              
              type="password"
              id="confirmPassword"
              {...register("confirmPassword", {
                required: true,
              })}
            />
          </div>
          {watch("confirmPassword") !== watch("password") &&
          getValues("confirmPassword") ? (
            <span className="text-[0.9rem] text-[#ef4444]  font-thin">Passwords should match</span>
          ) : null}

          <div className="flex-row"></div>

          <button
            className="bg-violet h-[50px] rounded-[10px] text-f1f5f9 mt-[3%] cursor-pointer font-extralight" 
            disabled={loading}
            type="submit"
          >
            Sign Up
          </button>
          <p className="p text-[1rem]">
            Do have an account?
            <Link to="/signIn" style={{ textDecoration: "none" }}>
              <span className="tetx-[1rem] font-normal span text-[#22d3ee]  pl-1">SignIn</span>
            </Link>
          </p>
          <p className="p ">Or With</p>

          <div className="flex-row ">
            <button className="button_sign google py-[4px] mr-4.3% text-base">
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
export default SignUp;
