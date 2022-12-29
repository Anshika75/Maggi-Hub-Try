import React from "react";
import { Link } from "react-router-dom";
// import ItemBox from "./ItemBox";
export default function SubMenuCard(props) {
  return (
    <>
      <Link
        to={props.path}
        className="flex flex-col items-center justify-center lg:my-10 mx-3 my-3 h-[200px] w-[200px]"
      >
        <div className="grid place-items-center overflow-hidden w-[200px] h-[150px] shadow-[0_0_4px_1px_#e3e3e3]">
          <img
            src={props.img}
            alt=""
            className="h-[135px] w-[185px] transition-all hover:scale-125 cursor-pointer hover:rotate-2 hover:grayscale-[75%]"
          />
        </div>
        <div className="text-2xl tracking-wide text-grey font-Dosis mt-5 mx-3 font-semibold opacity-95 text-center">
          {props.title}
        </div>
      </Link>
      <div className="absolute h-[250px] w-[500px] bg-[#FFFFFF] shadow-[0_0_4px_1px_#e3e3e37c] flex flex-row justify-center items-center ">
            <div className="w-[50%] h-full grid place-items-center">
              <img className="w-full h-full" src="https://picsum.photos/200" alt="" />
            </div>
            <div className="w-[50%] h-full flex flex-col justify-start items-start">
              <div className="text-3xl tracking-wide text-orange font-Dosis mt-5 mx-3 font-semibold opacity-95 text-center">Title</div>
              <div className="text-xl tracking-wide text-grey font-Dosis mx-3 font-semibold opacity-75 text-center">Rs. 50 /-</div>
              <div className="text-lg text-grey font-Dosis mt-5 mx-3 font-light opacity-75">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, nulla ullam officiis in repudiandae autem beatae omnis culpa quos.</div>
            </div>
            <div className="absolute top-0 right-0 h-8 w-8 cursor-pointer grid place-items-center">
            <i className="fa-solid fa-xmark text-grey text-2xl grid place-items-center transition-all opacity-75 hover:opacity-100"></i>
            </div>
      </div>
    </>
  );
}
