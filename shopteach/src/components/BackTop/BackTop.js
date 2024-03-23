import React from "react";

import { IoMdArrowBack} from "react-icons/io";
import { useState, useEffect } from "react";
export default function BackTop() {
  const [showBackTop, setShowBackTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 1500) {
        setShowBackTop(true);
      } else {
        setShowBackTop(false);
      }
    });
  }, []);
  const handleBackTop = () => {
    window.scrollTo({
      top: 0,

      behavior: "smooth",
    });
  };
  return (
    <div className=" fixed  bottom-[60px] right-[40px]">
      {showBackTop && <button 
      className="px-3 py-3 border-2 rounded bg-white"
      onClick={handleBackTop}>
        <IoMdArrowBack className=" rotate-90 text-[1.2rem] text-slate-500 "/>
        </button>}
    </div>
  );
}
