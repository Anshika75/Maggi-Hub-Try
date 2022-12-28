import React from "react";
import SubMenuCard from "./SubMenuCard";
// import { Menulist } from "../helpers/MenuList";

export default function SubMenuCardBox(props) {
  return (
    <>
      <div className="flex flex-col lg:flex-row flex-wrap justify-evenly items-center w-full p-3 pb-0 relative">
        {
          props.SubMenuListArray.SubMenu?props.SubMenuListArray.SubMenu.map((e, k) => {
          return <SubMenuCard title={e.title} img={e.img} path={"/"+e.title} key={k}/>;
        }):<div className="text-2xl tracking-wide text-grey font-Dosis mt-5 mx-3 font-semibold opacity-95 text-center">No {props.SubMenuListArray.title} Found</div>
        }

      </div>
    </>
  );
}
