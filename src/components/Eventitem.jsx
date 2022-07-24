import React from 'react'

export default function Eventitem(props) {
  return (
    <div className="flex flex-row justify-center items-center mt-5">
        <div className="flex flex-col justify-center items-center border-grey border-[1px] h-[60px] w-[60px] p-2">
            <div className="font-light font-Poppins text-grey text-2xl">{props.date}</div>
            <div className="font-extralight font-Poppins text-grey text-xs -mt-1">{props.month}</div>
        </div>
        <div className="flex flex-col justify-center items-center ml-2 p-2">
            <div className="font-light font-Poppins text-grey text-xl">{props.event}</div>
            <div className="font-extralight font-Poppins text-grey text-sm">{props.host}</div>
        </div>
    </div>
  )
}
