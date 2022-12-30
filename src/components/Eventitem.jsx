import React from 'react'

export default function Eventitem(props) {
  return (
    <div className="flex flex-row justify-center items-center mt-5 overflow-visible">
        <div className="flex flex-col justify-center items-center border-grey border-[1px] h-[60px] w-[60px] p-2 overflow-visible">
            <div className="font-light font-Poppins text-grey text-2xl overflow-visible">{props.date}</div>
            <div className="font-extralight font-Poppins text-grey text-xs -mt-1 overflow-visible">{props.month}</div>
        </div>
        <div className="flex flex-col justify-center items-center ml-2 p-2 overflow-visible">
            <div className="font-light font-Poppins text-grey text-xl overflow-visible">{props.event}</div>
            <div className="font-extralight font-Poppins text-grey text-sm overflow-visible">{props.host}</div>
        </div>
    </div>
  )
}
