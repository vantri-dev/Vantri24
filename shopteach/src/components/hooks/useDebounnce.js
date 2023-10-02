import { useState,useEffect } from "react";
 function  useDebounce(value,time){
 const [valueDebounce,setvalueDebounce]=useState(value)
 useEffect(()=>{
    const haldeDebounce= setTimeout(()=>{
        setvalueDebounce(value)
    },time)
    return ()=> clearTimeout (haldeDebounce);
 },[value,time])
 return valueDebounce;
 }
 export default  useDebounce  