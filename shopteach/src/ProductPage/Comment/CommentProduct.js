/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useState } from "react";

export default function CommentProduct(props) {
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
    },
  ];
  const [activeComment, setActiveComment] = useState(0);
  const { getFillterComment } = props;
  useEffect(() => {
    getFillterComment(activeComment);
  }, [activeComment]);
  return (
    <div className=" bg-white ml-5">
      <div className=" border w-[70%] bg-[#fdf4ff]">
        <div className=" pb-3 px-5 mb-[13px] pt-5">
          <ul className=" items-center  flex-wrap flex gap-3 ">
            {ListCommentProducts.map((commentProduct, index) => {
              return (
                <li
                  key={index}
                  onClick={() => setActiveComment(index)}
                  className={
                    activeComment === index
                      ? "border border-violet  py-[6px] px-5 rounded  bg-purple-100  cursor-pointer"
                      : "border  py-[6px] px-5 rounded hover:bg-slate-50 cursor-pointer"
                  }
                >
                  <span className=" font-bold">
                    {commentProduct.title}
                    <span>({commentProduct.quantityComment})</span>
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
