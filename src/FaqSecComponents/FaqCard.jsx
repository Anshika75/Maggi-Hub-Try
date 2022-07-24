import React from 'react'

export default function FaqCard(props) {
  return (
    <div className="flex flex-col justify-center mb-12 items-center w-[100%]">
        <div className="flex flex-row items-center w-[90%]">
            <div className="text-5xl py-3 font-Poppins grid place-items-center h-full text-orange border-r-[3px] border-r-orange w-[120px]">Q.</div>
            <div className="text-sm font-Poppins font-bold text-grey py-3 pl-5 flex flex-col justify-center items-start bg-gray-100 h-full w-full">{props.ques}</div>
        </div>
        <div className="flex flex-row items-center w-[90%]">
            <div className="text-5xl py-3 font-Poppins grid place-items-center h-full text-grey border-r-[3px] border-r-grey w-[120px]">A.</div>
            <div className="text-sm font-Poppins py-3 pl-5 flex flex-col justify-center items-start h-full w-full  text-grey font-light">{props.ans}</div>
        </div>
    </div>
  )
}
