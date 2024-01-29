import React from "react";
import { useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { useAuth } from "../context/Context";
export default function ImageProduct() {
  const listImgProduct = [
    {
      imgProductColor1:
        "https://salt.tikicdn.com/cache/750x750/ts/product/e9/81/46/98be0880591d43415fb2c2c886ce752a.png.webp",
      imgProductColor2:
        "https://salt.tikicdn.com/cache/750x750/ts/product/b8/35/6c/64b6451608ce3d908cf00da0d9ef9f49.jpg.webp",
    },
    {
      imgProductColor1:
        "https://salt.tikicdn.com/cache/750x750/ts/product/8b/2e/87/5f1cb94178740ec74f4571e27da40644.jpg.webp",
      imgProductColor2:
        "https://salt.tikicdn.com/cache/750x750/ts/product/6c/6c/9e/f3464d16a782e0d9ed5f74d98f155642.png.webp",
    },
    {
      imgProductColor1:
        "https://salt.tikicdn.com/cache/750x750/ts/product/66/1d/60/9917676fb0a9fd4f18bc797441bd5449.jpg.webp",
      imgProductColor2:
        "https://salt.tikicdn.com/cache/750x750/ts/product/62/5b/76/b33fe82320a2871139a3005e447b5831.jpg.webp",
    },
    {
      imgProductColor1:
        "https://salt.tikicdn.com/cache/750x750/ts/product/a7/bb/1b/47931032bcca8cafce4319b5e634abc1.jpg.webp",
      imgProductColor2:
        "https://salt.tikicdn.com/cache/750x750/ts/product/a7/67/90/88f7fdf73b72d12aeb1cb0edba650b46.jpg.webp",
    },
    {
      imgProductColor1:
        "https://salt.tikicdn.com/cache/750x750/ts/product/f4/ee/91/950fdc04720ea458d395936da3fbdd31.jpg.webp",
      imgProductColor2:
        "https://salt.tikicdn.com/cache/750x750/ts/product/3c/bd/15/7db2785e99a934710dc804a56057baa2.jpg.webp",
    },
    {
      imgProductColor1:
        "https://salt.tikicdn.com/cache/750x750/ts/product/98/86/f3/7219b471d6cc85c6e61f40a5ba28df38.jpg.webp",
      imgProductColor2:
        "https://salt.tikicdn.com/cache/750x750/ts/product/ef/9f/c1/5d5fd7917fe4e4c173cfe4e256bdd693.jpg.webp",
    },
    {
      imgProductColor1:
        "https://salt.tikicdn.com/cache/750x750/ts/product/11/13/de/d500a772339882fd6660b3004da9733c.jpg.webp",
      imgProductColor2:
        "https://salt.tikicdn.com/cache/750x750/ts/product/9c/71/38/646ca202854745d061012cc641eaf9fd.jpg.webp",
    },
    {
      imgProductColor1:
        "https://salt.tikicdn.com/cache/750x750/ts/product/05/ef/ef/ba77147756fed185a4fc7c76517ee577.jpg.webp",
      imgProductColor2:
        "https://salt.tikicdn.com/cache/750x750/ts/product/7b/d9/d3/c95d887359d886985fb1652394edae0d.jpg.webp",
    },

    {
      imgProductColor1:
        "https://salt.tikicdn.com/cache/750x750/ts/product/5d/84/d1/1a16a81bec933dbb1786086ee425eec1.jpg.webp",
      imgProductColor2:
        "https://salt.tikicdn.com/cache/750x750/ts/product/7b/d9/d3/c95d887359d886985fb1652394edae0d.jpg.webp",
    },
    {
      imgProductColor1:
        "https://salt.tikicdn.com/cache/750x750/ts/product/13/b2/df/16734e6fbd60894a2f7a248cda390e3d.jpg.webp",
      imgProductColor2:
        "https://salt.tikicdn.com/cache/750x750/ts/product/52/9f/96/d2b88d318ece7fe3a4913e3232d56511.jpg.webp",
    },

    {
      imgProductColor1:
        "https://salt.tikicdn.com/cache/750x750/ts/product/c4/68/b5/b974ddd2fcfa41ec08ec407519d71093.jpg.webp",
      imgProductColor2:
        "https://salt.tikicdn.com/cache/750x750/ts/product/dc/cd/d7/77bd1484e7bcd6887fcbbcb8a7939157.jpg.webp",
    },
  ];

const {changeImage}=useAuth()
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleAcitveIMage = (i) => {
    setCurrentIndex(i);
  };
  const handlePrevList = () => {
    const prevSale = document.getElementById("imgProduct");
    prevSale.scrollLeft = prevSale.scrollLeft - 1000;
  };
  const handleNextList = () => {
    const prevSale = document.getElementById("imgProduct");
    prevSale.scrollLeft = prevSale.scrollLeft + 1000;
  };
  return (
    <div className=" col-span-1">
      <div
        className="     bg-contain bg-no-repeat    duration-700 ease-in-out w-[95%] h-[504px] object-contain border rounded-md mx-5 my-5 "
        style={{
          backgroundImage: `url( ${
            changeImage === true
              ? listImgProduct[currentIndex].imgProductColor1
              : listImgProduct[currentIndex].imgProductColor2
          })`,
        }}
      ></div>

      <div className=" relative w-[95%] bg-white  mx-5">
        <ul
          id="imgProduct"
          className="flex items-center gap-4   overflow-x-scroll scroll-smooth  whitespace-nowrap px-1"
          style={{ overflow: "hidden" }}
        >
          <BiChevronLeft
            onClick={handlePrevList}
            className=" absolute left-[-18px]  text-[1.3rem] rounded-full w-7 h-7 my-1 mx-1  border-slate-300 border  bg-white  text-gray-500 "
          />
          {listImgProduct.map((img, i) => {
            return (
              <li
                key={i}
                className="  border-2   rounded cursor-pointer hover:border-violet   duration-700 ease-in-out"
              >
                <nav className="w-[65px] h-[65px] border  gap-1 my-1 mx-1 ">
                  <img
                    alt=""
                    src={
                      changeImage === true
                        ? img.imgProductColor1
                        : img.imgProductColor2
                    }
                    onClick={() => handleAcitveIMage(i)}
                  />
                </nav>
              </li>
            );
          })}

          <BiChevronRight
            onClick={handleNextList}
            className="absolute right-[-17px]  text-[1.3rem] rounded-full w-7 h-7 my-1 mx-1  border-slate-300 border  bg-white  text-gray-500 cursor-pointer "
          />
        </ul>
      </div>
    </div>
  );
}
