import React from 'react'

export default function SpecialCard(props) {
  return (
    <>
        <div className="flex flex-col items-center justify-center h-[400px] w-[200px]">
            <div className="grid place-items-center w-[200px] h-[150px] shadow-[0_0_4px_1px_#e3e3e3] overflow-hidden">
                <img src={props.img} alt="" className='h-[135px] w-[185px] bg-gray-500 transition-all hover:scale-125 cursor-pointer hover:rotate-2 hover:grayscale-[75%]' />
            </div>
            <div className="text-2xl tracking-wide text-grey font-Dosis mt-5 mx-3 font-semibold opacity-95 text-center">{props.title}</div>
            <div className="text-sm font-light text-grey font-Poppins mt-2 text-center">{props.desc}</div>
        </div>
    </>
  )
}
