"use client"

import { useState } from "react"

export default function DropDown({ children, button }) {

  const [isVisible, setIsVisible] = useState("none");

  function handleClickToggle() {
    isVisible === "none" ? setIsVisible("block"): setIsVisible("none")
  };
  
//flex flex-col justify-center items-start bg-slate-700 w-fit h-10 px-3 text-m text-white rounded-xl"
  return (
    
    <div className="flex flex-col justify-center items-start">
      <button className=" bg-slate-700 w-fit h-fit p-2 text-m text-white rounded-xl" onClick={handleClickToggle}>{button}</button>
      <div style={{display:isVisible}}>
        {children}
      </div>
    </div>

  );
};