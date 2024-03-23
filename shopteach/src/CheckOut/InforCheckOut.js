import React, { useEffect, useState, useRef } from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";
import Wrapper from "../components/Popper/Wrapper";
import { FaUserEdit } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { MdLocalShipping, MdPayment } from "react-icons/md";
import { useAuth } from "../context/Context";

export default function InforCheckOut() {
  const { checkOut,priceProduct } = useAuth();
  const toggleContainerPaypal = useRef();
  const toggleContainerPaypalSelect = useRef();
  const [checkDirect, setCheckdirect] = useState(true);
  const [hiddenPayPal, setHiddenPayPal] = useState(false);
  const [checkOutSuccess, setCheckOutSuccess] = useState(false);
  const [error, setError] = useState(null);
  console.log(priceProduct)
  const handleCheckDirect = () => {
    setCheckdirect(true);
  };
  const handleCheckPaypal = () => {
    setCheckdirect(false);
  };
  const closePayPalCheckOut = () => {
    setHiddenPayPal(false);
  };
  const handlePaySelect = () => {
    setHiddenPayPal(true);
  };
  useEffect(() => {
    let hiddenUser = (e) => {
      if (
        toggleContainerPaypal.current &&
        !toggleContainerPaypal.current.contains(e.target) &&
        !toggleContainerPaypalSelect.current.contains(e.target)
      ) {
        setHiddenPayPal(false);
      }
    };
    document.addEventListener("mousedown", hiddenUser);
    return () => {
      document.removeEventListener("mousedown", hiddenUser);
    };
  }, []);
  useEffect(() => {
    localStorage.setItem("checkOut", JSON.stringify(checkOut));
  }, [checkOut]);

  //Paypal
  const handleApprove = () => {
    setCheckOutSuccess(true);
  };
  useEffect(() => {
    if (checkOutSuccess) {
      //thanh cong
      setHiddenPayPal(false);
    }
  }, [checkOutSuccess]);

  const onCreateOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: priceProduct,
          },
        },
      ],
    });
  };

  const onApproveOrder = (data, actions) => {
    return actions.order.capture().then((details) => {
      const name = details.payer.name.given_name;
      console.log(`Transaction completed by ${name}`);
      handleApprove(data.orderID);
    });
  };
  const handleOnError = (err) => {
    setError(err);
  };
  if (error) {
    alert(error);
  }

  const handleOnClick = (data, actions) => {
    const hasAlreadyBoughtCourse = false;
    if (hasAlreadyBoughtCourse) {
      return actions.reject();
    } else {
      return actions.resolve();
    }
  };
  return (
    <div className="grid grid-cols-6 gap-3  px-[105px] mt-[100px] ">
      <div
        ref={toggleContainerPaypal}
        className={
          hiddenPayPal === true
            ? "  absolute cursor-pointer px-2  border bg-[#fff] py-4 rounded top-[20%] left-[34.2%] w-[35%]  "
            : "hidden"
        }
      >
        <IoMdClose
          className=" absolute right-1 top-1 text-[1.4rem] cursor-pointer"
          onClick={closePayPalCheckOut}
        />

        <PayPalButtons
          className="w-full py-5 px-2"
          style={{
            layout: "vertical",
          }}
          createOrder={(data, actions) => onCreateOrder(data, actions)}
          onClick={(data, actions) => handleOnClick(data, actions)}
          onApprove={(data, actions) => onApproveOrder(data, actions)}
          onError={(err) => {
            handleOnError(err);
          }}
        />
      </div>
      <div className=" col-span-4">
        <Wrapper>
          <div className="px-5 py-4">
            <div className="flex   items-center pb-3">
              <FaUserEdit className="text-[1.55rem]    mx-1   text-violet" />
              <span className="text-[1.15rem]  text-black   font-bold">
                Thông tin khách hàng
              </span>
            </div>

            <div className="ml-5">
              <div className="pt-1 pb-[2px]">
                <p>
                  <span className=" text-[1.1rem] font-bold text-black">
                    Tên:
                  </span>
                  <span className=" text-[#828282]  font-medium  border-r-[1px] pr-2 ml-1">
                    {checkOut.name}
                  </span>
                  <span className="text-[1.09rem] font-bold text-black mx-2">
                    SĐT:
                    <span className=" text-[#828282]  font-medium   ml-1 ">
                      {checkOut.number}
                    </span>
                  </span>
                </p>
              </div>

              <p className="text-[1.1rem] font-bold text-black pb-[2px]">
                Gmail:
                <span className=" text-[#828282]  font-medium mx-1">
                  {checkOut.email}
                </span>
              </p>
              <p className="text-[1.1rem] font-bold text-black">
                Địa chỉ nhận hàng:
                <span className=" text-[#828282]  font-medium mx-1">
                  {checkOut.adress}
                </span>
              </p>
            </div>
          </div>
        </Wrapper>
        <div className="mt-[12px]">
          <Wrapper>
            <div className="px-5 py-4">
              <div className="flex   items-center pb-3  ">
                <MdLocalShipping className="text-[1.55rem]    mx-1   text-violet" />
                <span className="text-[1.15rem]  text-black   font-bold">
                  Phương thức giao hàng
                </span>
              </div>
              <div>
                <div className=" cursor-pointer">
                  <label className="flex items-center ml-5 cursor-pointer">
                    <span className="text-[1.1rem] font-bold text-black">
                      <input
                        type="radio"
                        className="mr-1 "
                        name="move"
                        id="1"
                      />
                      Từ thứ 2 đến thứ 6 ( 8h-9h)
                      <p className="text-[#828282] ml-10 font-normal  text-base">
                        Phù hợp với địa chỉ văn phòng/cơ quan
                      </p>
                    </span>
                  </label>
                </div>
                <div className=" cursor-pointer mt-2">
                  <label className="flex items-center ml-5 cursor-pointer">
                    <span className="text-[1.1rem] font-bold text-black">
                      <input
                        type="radio"
                        className="mr-1 "
                        name="move"
                        defaultChecked={true}
                      />
                      Cả tuần (trừ CN & lễ)
                      <p className="text-[#828282] ml-10 font-normal  text-base">
                        Phù hợp với địa chỉ nhà riêng (8h - 18h )
                      </p>
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </Wrapper>
        </div>
        <div className="mt-[12px]">
          <Wrapper>
            <div className="px-5 py-4 mb-2">
              <div className="flex   items-center pb-3  ">
                <MdPayment className="text-[1.55rem]    mx-1   text-violet" />
                <span className="text-[1.15rem]  text-black   font-bold">
                  Phương thức thanh toán
                </span>
              </div>
              <div>
                <div
                  className={
                    checkDirect === true
                      ? "cursor-pointer py-3 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] mb-3  rounded bg-[#fff]"
                      : "cursor-pointer  py-3 mb-3 bg-[#f2f3f4]  rounded"
                  }
                >
                  <label className="flex items-center ml-5 cursor-pointer">
                    <span
                      className="text-[1.1rem] font-bold text-black"
                      onClick={handleCheckDirect}
                    >
                      <input
                        type="radio"
                        className="mr-1 "
                        name="check"
                        id="1"
                        defaultChecked={true}
                      />
                      Thanh toán khi nhận hàng
                    </span>
                  </label>
                </div>
                <div
                  ref={toggleContainerPaypalSelect}
                  className={
                    checkDirect === false
                      ? "cursor-pointer py-3 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]  rounded bg-[#fff]"
                      : "cursor-pointer  py-3 bg-[#f2f3f4]  rounded"
                  }
                >
                  <label className="flex items-center ml-5 cursor-pointer">
                    <span
                      className="text-[1.1rem] font-bold text-black"
                      onClick={handleCheckPaypal}
                    >
                      <input
                        type="radio"
                        className="mr-1 "
                        name="check"
                        onChange={handlePaySelect}
                      />
                      Thanh toán bằng Paypal
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </Wrapper>
        </div>
      </div>
      <div className="col-span-2"></div>
    </div>
  );
}
