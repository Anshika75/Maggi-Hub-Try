import React from 'react'

export default function ServeCard(props) {
  return (
    <>
         <>
        <div className="flex flex-col items-center justify-center h-[300px] w-[90%] lg:w-[300px] p-5 border-4 border-white mx-3 mb-12">
            <div className="grid place-items-center w-[250px] h-[150px] text-8xl text-[#fff] opacity-75 transition-all duration-500 origin-center hover:rotate-[-360deg]">
            <i className={props.icon}></i>
            </div>
            <div className="text-2xl tracking-wide text-[#fff] font-Dosis mt-0 font-semibold opacity-95 text-center">{props.title}</div>
            <div className="text-sm font-light text-[#fff] font-Poppins mt-3 text-center">{props.desc}</div>
        </div>
    </>
    </>
  )
}
