import React from "react";
import SubMenuCardBox from "../components/SubMenuCardBox";
import Head from "../components/Head";
import { Menulist } from "../helpers/MenuList";
export default function SubMenuSec(props) {
  const SubMenuListArray = Menulist.find((e) => "/"+e.title === props.path);
  return (
    <div className="flex flex-col justify-center items-center pt-7">
      <Head
        title={SubMenuListArray?SubMenuListArray.title:""}
        desc="The first bite will blow your mind. The second will transport you to another dimension."
      />
      <SubMenuCardBox SubMenuListArray={SubMenuListArray?SubMenuListArray:[]} />
      <div className="flex flex-row items-center justify-center text-xs lg:text-base w-full text-lightwhite mt-3">
        ★★★★★★★★
      </div>
    </div>
  );
}
