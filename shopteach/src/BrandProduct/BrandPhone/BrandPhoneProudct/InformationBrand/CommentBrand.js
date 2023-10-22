import React from "react";
import { AiFillStar } from "react-icons/ai";

import CommentProduct from "./CommentProduct/CommentProduct";
export default function CommentBrand() {
  const Ratingbar = [
    {
      icon: <AiFillStar />,
      startIndex: 5,
      rating: "95%",
      quantity: 1909,
    },
    {
      icon: <AiFillStar />,
      startIndex: 4,
      rating: "85%",
      quantity: 786,
    },
    {
      icon: <AiFillStar />,
      startIndex: 3,
      rating: "50%",
      quantity: 540,
    },
    {
      icon: <AiFillStar />,
      startIndex: 2,
      rating: "20%",
      quantity: 105,
    },
    {
      icon: <AiFillStar />,
      startIndex: 1,
      rating: "20%",
      quantity: 105,
    },
  
  ];
  return (
    <div className="w-full bg-white rounded">
      <div>
        <div className="px-5 py-5 ">
          <span className="text-[1.3rem]  font-sans ">Đánh giá sản phẩm</span>
        </div>
        <div className="flex items-center  justify-start px-5">
          <div>
            <span className="text-[2.2rem]   font-medium font-sans">
              4.9<span className="text-[1.3rem]  font-light px-1">/</span>
              <span className="text-[1.3rem]   font-sans">5</span>
            </span>
            <div className="my-2">
              <ul className="flex items-center">
                <li>
                  <AiFillStar className=" text-yellow-400 text-[1.1rem]" />
                </li>
                <li>
                  <AiFillStar className=" text-yellow-400 text-[1.1rem]" />
                </li>
                <li>
                  <AiFillStar className=" text-yellow-400 text-[1.1rem]" />
                </li>
                <li>
                  <AiFillStar className=" text-yellow-400 text-[1.1rem]" />
                </li>
                <li>
                  <AiFillStar className=" text-yellow-400 text-[1.1rem]" />
                </li>
              </ul>
              <div className="my-2">
                <span className="text-[0.88rem] text-slate-500 ">
                  (3445 đánh giá)
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center flex-col ml-[10%] ">
            {Ratingbar.map((ratingbar, index) => {
              return (
                <div key={index} className="flex items-center w-full">
                  <div className=" flex items-center pr-[5px] ">
                    <div className="text-yellow-400 text-[1.1rem]">
                      {ratingbar.icon}
                    </div>
                    <span className="text-slate-500 text-[0.9rem] pl-[5px]">
                      {ratingbar.startIndex}
                    </span>
                  </div>
                  <div className="w-[200px] bg-slate-200 h-2 rounded-2xl relative">
                    <div className={` w-[${ratingbar.rating}] bg-violet h-2 absolute  left-0 top-0 bottom-0 rounded-2xl`}></div>
                  </div>
                  <div>

                  <span className="text-[0.93rem]   text-slate-500  px-2">
                {ratingbar.quantity}
                  </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
     <CommentProduct/>
    </div>
  );
}
