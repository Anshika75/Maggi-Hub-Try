import React from 'react'

export default function Head(props) {
  return (
    <>
        <div className="flex flex-col items-center justify-center mt-5 z-20">
            <div className="text-4xl text-orange font-Pacifico" style={{color:props.color}}>{props.title}</div>
            <div className="flex flex-row items-center justify-center text-xs lg:text-base w-full text-lightwhite mt-3" style={{color:props.starcolor}}>★★★★★★★★</div>
            <div className="font-Poppins leading-6 font-light text-sm text-center text-grey mt-3 w-3/5" style={{color:props.color}}>{props.desc}</div>
        </div>
    </>

  )
}
