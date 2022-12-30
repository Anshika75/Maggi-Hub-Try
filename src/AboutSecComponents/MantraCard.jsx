import React from 'react'

export default function MantraCard(props) {
    const iconStyle = {
        width: "50px",
        height: "50px",
        background: "#F45200",
        display:"grid",
        placeItems:"center",
        borderRadius:"100px 100px 0 100px"
    }
  return (
    <div className="flex flex-row justify-center items-start m-5 w-80 h-auto rounded">
        <div className="grid place-items-center text-white">
        <i className={props.icon} style={iconStyle}></i>
        </div>
        <div className="flex flex-col justify-start items-start ml-3 w-[70%]">
            <div className="font-Dosis text-lg text-darkGreen uppercase font-bold mb-2">{props.title}</div>
            <div className="text-grey text-sm font-Poppins font-light leading-6">{props.desc}</div>
        </div>
    </div>
  )
}
