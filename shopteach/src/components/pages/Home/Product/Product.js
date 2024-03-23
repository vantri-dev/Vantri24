import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Product() {
  const [products, setProducts] = useState([]);
  const [showProduct, setShowProduct] = useState(15);

  useEffect(() => {
    const dataProducts = async () => {
      const repAPi = await fetch(
        "https://jsonplaceholder.typicode.com/comments"
      );
      const data = await repAPi.json();
      setProducts(data);
    };
    dataProducts();
  }, []);
  const handleShowProduct = () => {
    setShowProduct((prev) => prev + 15);
  };

  return (
    <>
      <div className="w-full  grid  grid-cols-5 gap-2 mt-[13px] mb-[13px]">
        {products.slice(0, showProduct).map((product, index) => {
          return (
            <div key={index} className=" col-span-1  w-full max-h-[520px]">
              <Link to={`/productpage/${product.id}`}>
                <div className=" border rounded  bg-white   cursor-pointer transition-all ease-out translate-y-0 hover:-translate-y-[3px] hover:border-violet">
                  <div className=" w-full  ">
                    <img
                      className="w-[170px] h-[190px] flex  m-auto border"
                      alt=""
                      src="https://salt.tikicdn.com/cache/280x280/ts/product/e2/79/3a/99fb3f8dd32c331e6535e5aae5d51f98.jpg.webp"
                    />
                  </div>
                  <div className=" w-full mt-2 px-2 ">
                    <p className="  line-clamp-2   text-textword font-medium text-[0.95rem]  ">
                      {product.name}
                    </p>
                  </div>
                  <div className="w-full px-2 py-2 ">
                    <div className="">
                      <span className="text-[1.09rem] text-violet font-bold">
                        {product.id}.000đ
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
              </Link>
            </div>
          );
        })}
      </div>
      <div className="flex items-center justify-center">
        <button
          className=" w-15 h-15 inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-200 group-hover:to-pink-300 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-600"
          onClick={handleShowProduct}
        >
          <span className=" px-[65px] py-[15px] text-[1.15rem]    font-medium flex items-center  transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 ">
            Xem thêm
          </span>
        </button>
      </div>
    </>
  );
}
