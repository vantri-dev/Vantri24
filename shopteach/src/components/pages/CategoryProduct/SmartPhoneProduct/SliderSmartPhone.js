import React from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useState, useEffect } from "react";

import imgPoster from "../../../img/anh3.jpg";

export default function SliderSmartPhone() {
  const listImg = [
    {
      url: "https://lzd-img-global.slatic.net/g/icms/images/ims-web/f3da49ff-585d-4962-9678-e0ffcd9e5f22.jpg_2200x2200q90.jpg_.webp",
    },
   
    {
      url: "https://salt.tikicdn.com/cache/w1080/ts/tikimsp/8d/3a/21/fb700eaad304d258b9e26721c74c750b.png.webp",
    },

    {
      url: "https://salt.tikicdn.com/cache/w1080/ts/tikimsp/82/a8/b2/7853e9c8b6b8712466c66d407ff07b22.png.webp",
    },
    {
      url: "https://salt.tikicdn.com/cache/w1080/ts/tikimsp/32/9e/d4/0a06a56edc71f97afc52e6c3ea3eabaf.png.webp",
    },
   
    {
      url: imgPoster,
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const clear = setInterval(() => {
      const isSliderNext = currentIndex === listImg.length - 1;
      const newSilderIndex = isSliderNext ? 0 : currentIndex + 1;
      setCurrentIndex(newSilderIndex);
    }, 5000);
    return () => clearInterval(clear);
  });
  const hanldePrevSlider = () => {
    const isSliderPrev = currentIndex === 0;
    const newSilderIndex = isSliderPrev ? listImg.length - 1 : currentIndex - 1;
    setCurrentIndex(newSilderIndex);
  };
  const hanldeNextSilder = () => {
    const isSliderNext = currentIndex === listImg.length - 1;
    const newSilderIndex = isSliderNext ? 0 : currentIndex + 1;
    setCurrentIndex(newSilderIndex);
  };
  const hanldeClickSilder = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className=" w-full gap-3 h-[400px]">
      <div className="   w-full h-full  relative group">
        <div

          className="h-full max-w-full bg-center bg-cover  rounded  duration-700 ease-in-out  "
          style={{
            
            backgroundImage: `url(${listImg[currentIndex].url})`,
          }}
           
        >
          <div
            className=" hidden group-hover:block absolute  top-[45%]   translate-x-0  translate-y-[20%] left-2 text-3xl  text-slate-200  cursor-pointer "
            onClick={hanldePrevSlider}
          >
            <BsChevronLeft />
          </div>
          <div
            className="hidden group-hover:block absolute top-[45%]  translate-x-0 translate-y-[20%] right-2 text-3xl  text-slate-200  cursor-pointer"
            onClick={hanldeNextSilder}
          >
            <BsChevronRight />
          </div>
          <div className="  flex  absolute  bottom-1 right-[45%] items-center   ">
            {listImg.map((item, index) => {
              return (
                <div
                  key={index}
                  className={` transition-all w-2 h-2 bg-slate-300 rounded-full  ml-3 text-base cursor-pointer
                    ${currentIndex === index ? "p-1" : " bg-opacity-50"}
                    `}
                  onClick={() => hanldeClickSilder(index)}
                ></div>
              );
            })}
          </div>
        </div>
      
      </div>
    
    </div>
  );
}
