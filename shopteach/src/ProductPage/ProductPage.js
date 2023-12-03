import React, { useState } from "react";

import { BsChevronRight} from "react-icons/bs";


import ImageProduct from "./ImageProduct";
import { InformationProduct } from "./InformationProduct";
import { Link } from "react-router-dom";
import DealProduct from "./DealProduct";
import ShopProduct from "./ShopProduct";
import DetailProduct from "./DetailProduct";
import DescriptionProduct from "./DescriptionProduct";
import CommentPage from "./Comment/CommentPage";
export default function ProductPage() {
  const [changeColorImage, setChangeColorImage] = useState(null);
  const getChangeImage = (data) => {
    setChangeColorImage(data);
  };

  return (
    <div className=" bg-gray-100  ">
      <div className=" w-full pt-[10px]   px-[105px]">
        <div className=" flex items-center mb-2  ">
          <Link to="/">
            <span className="text-[0.9rem] text-slate-500">Trang chủ</span>
          </Link>
          <BsChevronRight className="text-[0.9rem] mt-[2px] text-slate-400" />
          <Link to="/practicalShipping">
            <span className="text-[0.9rem] ">Tiện ích</span>
          </Link>
        </div>
        <div className=" grid grid-cols-3 bg-white ">
          <ImageProduct changeColorImage={changeColorImage} />
          <InformationProduct getChangeImage={getChangeImage} />
        </div>
      </div>

      <DealProduct />
      <div className="w-full mt-[10px]   bg-gray-100 px-[105px] ">
       <ShopProduct/>
       <DetailProduct/>
       <DescriptionProduct/>
       <CommentPage/>
      </div>
    </div>
  );
}
