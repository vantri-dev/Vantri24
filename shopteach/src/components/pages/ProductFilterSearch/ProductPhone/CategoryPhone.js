import React, { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BsPlus } from "react-icons/bs";
import { AiOutlineMinus } from "react-icons/ai";
import { useAuth } from "../../../../context/Context";
export default function CategoryPhone() {
  const { filterProduct } = useAuth();
  const [province, setProvince] = useState(false);
  const [product, setProduct] = useState([]);
  console.log(product)
  const handleHiddenProvince = () => {
    setProvince(!province);
  };
  useEffect(() => {
    const dataProduct = async () => {
      const flattenFilter = filterProduct.reduce((prev, cur) => {
        return prev.concat(Array.isArray(cur) ? flattenFilter(cur) : cur);
      }, []);
      const data = await setProduct(flattenFilter);
      return data;
    };
    dataProduct();
  }, [filterProduct]);
  return (
    <div className="py-5 px-3">
      <div className="flex items-center">
        <AiOutlineMenu className="text-[1.17rem]" />
        <span className=" font-black font-mono text-[1.1rem] pl-[6px]">
          Danh mục
        </span>
      </div>

      <ul className="flex flex-col items-start justify-start">
        <li className="w-full  pl-4 py-5 cursor-pointer">
          <span className="text-[1rem]   font-black">Thương hiệu</span>
          <div className="flex items-center justify-start pl-5 py-2 hover:bg-slate-100  rounded">
            <input type="checkbox" />
            <label htmlFor="" className="ml-2 text-textword text-[1.05rem]">
              Apple
            </label>
          </div>
          <div className="flex items-center justify-start pl-5 py-2 hover:bg-slate-100  rounded">
            <input type="checkbox" />
            <label htmlFor="" className="ml-2 text-textword text-[1.05rem]">
              Samsung
            </label>
          </div>
          <div className="flex items-center justify-start pl-5 py-2 hover:bg-slate-100  rounded">
            <input type="checkbox" />
            <label htmlFor="" className="ml-2 text-textword text-[1.05rem] ">
              Realme
            </label>
          </div>
          <div className="flex items-center justify-start pl-5 py-2 hover:bg-slate-100  rounded">
            <input type="checkbox" />
            <label htmlFor="" className="ml-2 text-textword text-[1.05rem]">
              Oneplus
            </label>
          </div>
          <div className="flex items-center justify-start pl-5 py-2 hover:bg-slate-100  rounded">
            <input type="checkbox" />
            <label htmlFor="" className="ml-2 text-textword text-[1.05rem]">
              Xiaomi
            </label>
          </div>
        </li>
        <li className="w-full  pl-4 py-5 cursor-pointer">
          <span className="text-[1rem]   font-black">Vận chuyển</span>
          <div className="flex items-center justify-start pl-5 py-2 hover:bg-slate-100  rounded">
            <input type="checkbox" />
            <label htmlFor="" className="ml-2 text-textword text-[1.05rem]">
              Nhanh
            </label>
          </div>
          <div className="flex items-center justify-start pl-5 py-2 hover:bg-slate-100  rounded">
            <input type="checkbox" />
            <label htmlFor="" className="ml-2 text-textword text-[1.05rem]">
              Hỏa tốc
            </label>
          </div>
          <div className="flex items-center justify-start pl-5 py-2 hover:bg-slate-100  rounded">
            <input type="checkbox" />
            <label htmlFor="" className="ml-2 text-textword text-[1.05rem] ">
              Tiêu chuẩn
            </label>
          </div>
        </li>
        <li className="w-full  pl-4 py-5 cursor-pointer">
          <span className="text-[1rem]   font-black">Giá</span>
          <div className="flex items-center justify-start pl-5 py-2 hover:bg-slate-100  rounded">
            <input type="checkbox" />
            <label htmlFor="" className="ml-2 text-textword text-[1.05rem]">
              1tr - 2tr
            </label>
          </div>
          <div className="flex items-center justify-start pl-5 py-2 hover:bg-slate-100  rounded">
            <input type="checkbox" />
            <label htmlFor="" className="ml-2 text-textword text-[1.05rem]">
              2tr - 3tr
            </label>
          </div>
          <div className="flex items-center justify-start pl-5 py-2 hover:bg-slate-100  rounded">
            <input type="checkbox" />
            <label htmlFor="" className="ml-2 text-textword text-[1.05rem]">
              3tr-5tr
            </label>
          </div>
          <div className="flex items-center justify-start pl-5 py-2 hover:bg-slate-100  rounded">
            <input type="checkbox" />
            <label htmlFor="" className="ml-2 text-textword text-[1.05rem]">
              5tr-10tr
            </label>
          </div>

          <div className="flex items-center justify-start pl-5 py-2 hover:bg-slate-100  rounded">
            <input type="checkbox" />
            <label htmlFor="" className="ml-2 text-textword text-[1.05rem]">
              Trên 10tr
            </label>
          </div>
        </li>
        <li className="w-full  pl-4 py-5 cursor-pointer">
          <span className="text-[1rem]   font-black">Nơi bán</span>
          <div className="flex items-center justify-start pl-5 py-2 hover:bg-slate-100  rounded">
            <input type="checkbox" />
            <label htmlFor="" className="ml-2 text-textword text-[1.05rem]">
              TP.Hồ Chí Minh
            </label>
          </div>
          <div className="flex items-center justify-start pl-5 py-2 hover:bg-slate-100  rounded">
            <input type="checkbox" />
            <label htmlFor="" className="ml-2 text-textword text-[1.05rem]">
              Đà Nẵng
            </label>
          </div>
          <div className="flex items-center justify-start pl-5 py-2 hover:bg-slate-100  rounded">
            <input type="checkbox" />
            <label htmlFor="" className="ml-2 text-textword text-[1.05rem] ">
              Hà Nội
            </label>
          </div>
          <div className="flex items-center justify-start pl-5 py-2 hover:bg-slate-100  rounded">
            <input type="checkbox" />
            <label htmlFor="" className="ml-2 text-textword text-[1.05rem]">
              Bến Tre
            </label>
          </div>
          <div
            className={
              province === false
                ? "flex items-center justify-center pr-8 hover:bg-slate-100  rounded py-2"
                : "hidden"
            }
            onClick={handleHiddenProvince}
          >
            <button className="flex items-center">
              <BsPlus className=" text-[1.4rem] text-slate-500" />
              <span className=" text-slate-500 font-medium font-sans">
                Xem them
              </span>
            </button>
          </div>
          <div
            className={
              province === true
                ? " flex items-center justify-start pl-5 py-2 hover:bg-slate-100  rounded"
                : "hidden"
            }
          >
            <input type="checkbox" />
            <label htmlFor="" className="ml-2 text-textword text-[1.05rem]">
              Trà Vinh
            </label>
          </div>
          <div
            className={
              province === true
                ? "flex items-center justify-center pr-8 hover:bg-slate-100  rounded py-2"
                : "hidden"
            }
            onClick={handleHiddenProvince}
          >
            <button className="flex items-center">
              <AiOutlineMinus className=" text-[1rem] text-slate-500 pr-1" />
              <span className=" text-slate-500 font-medium font-sans">
                Thu gon
              </span>
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
}
