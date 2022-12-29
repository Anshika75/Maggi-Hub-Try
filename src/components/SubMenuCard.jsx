import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import ItemBox from "./ItemBox";
export default function SubMenuCard(props) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="flex flex-col items-center justify-center lg:my-10 mx-3 my-3 h-[200px] w-[200px]">
        <div onClick={() => setIsOpen(true)} className="grid place-items-center overflow-hidden w-[200px] h-[150px] shadow-[0_0_4px_1px_#e3e3e3]">
          <img
            src={props.img}
            alt=""
            className="h-[135px] w-[185px] transition-all hover:scale-125 cursor-pointer hover:rotate-2 hover:grayscale-[75%]"
          />
        </div>
        <div className="text-2xl tracking-wide text-grey font-Dosis mt-5 mx-3 font-semibold opacity-95 text-center">
          {props.title}
        </div>
      </div>
      {
        isOpen ? (
          <div className="absolute grid place-items-center h-full w-full z-20">
          <div className="relative h-[250px] w-[500px] bg-[#FFFFFF] shadow-[0_0_4px_1px_#e3e3e37c] flex flex-row justify-center items-center ">
            <div className="w-[40%] h-full grid place-items-center overflow-hidden">
              <img className="w-full h-full hover:scale-125 transition-all hover:rotate-6" src={props.img} alt="" />
            </div>
            <div className="w-[60%] h-full flex flex-col justify-start items-start">
              <div className="text-2xl tracking-wide text-orange font-Dosis mt-5 mx-3 font-semibold opacity-95 text-center">{props.title}</div>
              <div className="text-xl tracking-wide text-grey font-Dosis mx-3 font-semibold opacity-75 text-center">{props.cost}</div>
              <div className="text-lg text-grey font-Dosis mt-3 mx-3 font-normal">{props.desc}</div>
            </div>
            <div onClick={() => setIsOpen(false)} className="absolute top-0 right-0 h-8 w-8 cursor-pointer grid place-items-center">
              <i className="fa-solid fa-xmark text-grey text-2xl grid place-items-center transition-all opacity-75 hover:opacity-100"></i>
            </div>
          </div>
          </div>
        ) : null
      }
    </>
  );
}
