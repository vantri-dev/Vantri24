import React from "react";
import { useState } from "react";

import CommentUser from "./CommentUser";

export default function CommentProduct() {
  const ListCommentProducts = [
    {
      title: "Tất cả",
    },
    {
      title: "Có hình ảnh",
      quantityComment: 152,
    },
    {
      title: "5 sao",
      quantityComment: 152,
    },
    {
      title: "4 sao",
      quantityComment: 12,
    },
    {
      title: "3 sao",
      quantityComment: 7,
    },
    {
      title: "2 sao",
      quantityComment: 3,
    },
    {
      title: "1 sao",
      quantityComment: 1,
    }
  ];
  const [activeComment, setActiveComment] =useState(0);

  return (
    <div className="w-full pt-2 px-5 mb-[13px]">
      <ul className="flex items-center  justify-around ">
        {ListCommentProducts.map((commentProduct, index) => {
          return (
            <li
            key={index}
              onClick={()=>setActiveComment(index)}
              className={ activeComment === index ? 'border border-violet  py-[6px] px-5 rounded  bg-purple-100  cursor-pointer' : 'border  py-[6px] px-5 rounded hover:bg-slate-50 cursor-pointer'}
            >
              <span className=" font-bold">{commentProduct.title} 
              <span>
                ({commentProduct.quantityComment})
              </span>
               </span>
            </li>
          );
        })}
      </ul>
      <CommentUser/>
    </div>
  );
}
