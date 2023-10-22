import React from "react";
import { Link } from "react-router-dom";

export default function BrandPosterPhone() {
  return (
    <div className="flex items-center justify-center mt-[20px] pb-5">
      <div className="flex flex-col gap-3  ">
        <Link className="">
          <img
            className="  w-full h-full rounded "
            alt=""
            src="https://down-bs-vn.img.susercontent.com/vn-11134210-7r98o-lm7m0tza942nb5.webp"
          />
        </Link>
        <Link to="">
          <img
            className="  w-full h-full rounded"
            alt=""
            src="https://cdn.tgdd.vn/Products/Images/42/305658/Slider/vi-vn-iphone-15-pro-max-256gb--(4).jpg"
          />
        </Link>
      </div>
    </div>
  );
}
