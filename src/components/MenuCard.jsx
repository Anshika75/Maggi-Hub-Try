import React, {useEffect} from "react";
import { Link } from "react-router-dom";
export default function MenuCard(props) {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  return (
    <>
      <Link
        to={props.path}
        className="flex flex-col items-center justify-center lg:my-10 mx-3 my-3 h-[220px] w-[200px]"
        onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }}
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
