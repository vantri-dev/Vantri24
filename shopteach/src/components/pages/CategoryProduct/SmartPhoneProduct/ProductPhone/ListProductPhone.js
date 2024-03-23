import React, { createContext } from "react";

import Pagination from "../../../../../Pagination/Pagination";

import { useState, useEffect } from "react";
export const PagesContext = createContext();
export default function ListProductPhone() {
  const [products, setProducts] = useState([]);
  const [offset, setOffset] = useState(0);

  const itemsPerPage = 20;
  useEffect(() => {
    const dataProducts = async () => {
      const rep = await fetch(`https://jsonplaceholder.typicode.com/comments`);
      const data = await rep.json();
      setProducts(data);
    };

    dataProducts();
  }, [offset]);
  const endOffset = offset + itemsPerPage;
  const currentItems = products.slice(offset, endOffset);
  const pageCount = Math.ceil(products.length / itemsPerPage);
  const handlePageClick = (e) => {
 
    const newOffset = (e.selected * itemsPerPage) % products.length;

    setOffset(newOffset);
  };

  const value = {
    pageCount,
    handlePageClick,
  
  };
  return (
    <PagesContext.Provider value={value}>
      <div className="grid grid-cols-5 gap-3">
        {currentItems.map((product, index) => {
          return (
            <div key={index} className=" col-span-1  w-full max-h-[540px] ">
              <div className=" border rounded  bg-white   cursor-pointer transition-all ease-out translate-y-0 hover:-translate-y-[3px] hover:border-violet">
                <div className=" w-full  ">
                  <img
                    className="w-[170px] h-[190px] flex  m-auto border"
                    alt=""
                    src="https://salt.tikicdn.com/cache/280x280/ts/product/e2/79/3a/99fb3f8dd32c331e6535e5aae5d51f98.jpg.webp"
                  />
                </div>
                <div className=" w-full my-3 px-2 ">
                  <p className="  line-clamp-2   text-textword font-medium text-[0.95rem]  ">
                    {product.body}
                  </p>
                </div>
                <div className="w-full px-2 py-2 ">
                  <div className="">
                    <span className="text-[1.09rem] text-violet font-bold">
                      {product.id.toFixed(3)}đ
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <p className=" font-medium text-[0.85rem] text-[#cbd5e1] line-through">
                        145.000đ
                      </p>
                      <p className=" font-medium text-[0.85rem] text-violet pl-1">
                        -39%
                      </p>
                    </div>
                    <p className="text-[0.8rem] text-[#94a3b8] pl-1 ">
                      Đã bán 2.2k
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Pagination />
    </PagesContext.Provider>
  );
}
