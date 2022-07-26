import React from "react";
import { Link } from "react-router-dom";
export default function MenuCard(props) {
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
        <div className="text-sm font-light text-grey font-Poppins mt-5 text-center">
          {props.desc}
        </div>
      </Link>
    </>
  );
}
