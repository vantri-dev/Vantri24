import React from "react";

import { useEffect, useState } from "react";
import { useAuth } from "./context/Context";
export default function CountDown() {
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");
  const { CountDown } = useAuth();

  useEffect(() => {
    const DateTimer = new Date(CountDown()).getTime();
    let intervalTimer = setInterval(() => {
      const newTimer = new Date().getTime();
      const distance = DateTimer - newTimer;
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const senconds = Math.floor((distance % (1000 * 60)) / 1000);
      if (distance < 0) {
        clearInterval(intervalTimer);
      } else {
        setTimerHours(hours > 9 ? hours : "0" + hours);
        setTimerMinutes(minutes > 9 ? minutes : "0" + minutes);
        setTimerSeconds(senconds > 9 ? senconds : "0" + senconds);
      }
    }, 1000);
    return () => clearInterval(intervalTimer);
  }, []);
  return (
    <>
      <div className="flex">
        <div className=" w-8 py-[5px] pl-[6px] bg-violet  rounded text-[1.1rem] font-black text-white ml-2 mr-[4px]">
          {timerHours}
        </div>
        <div className="text-[1.1rem]  font-black">:</div>
        <div className=" w-8 py-[5px] pl-[6px] bg-violet  rounded text-[1.1rem] font-black text-white ml-2 mr-[4px]">
          {timerMinutes}
        </div>
        <div className="text-[1.1rem] font-black">:</div>
        <div className=" w-8 py-[5px] pl-[5px] bg-violet  rounded text-[1.1rem] font-black text-white ml-2 mr-[4px]">
          {timerSeconds}
        </div>
      </div>
    </>
  );
}
