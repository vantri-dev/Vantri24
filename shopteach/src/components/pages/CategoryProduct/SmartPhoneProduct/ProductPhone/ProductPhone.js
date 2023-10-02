import React from "react";
import CategoryPhone from "./CategoryPhone";
import ListProductPhone from "./ListProductPhone";
export default function ProductPhone() {
  return (
    <div className="w-full grid grid-cols-12 gap-3 mb-[13px]">
      <div className="bg-white col-span-2   rounded max-h-[1120px] ">
        <CategoryPhone />
      </div>
      <div className=" col-span-10">
        <ListProductPhone />
      </div>
      
    </div>
  );
}
