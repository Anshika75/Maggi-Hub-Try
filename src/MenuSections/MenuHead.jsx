import React from 'react'

export default function MenuHead(props) {
    const bg = {
        backgroundImage: "linear-gradient(to right bottom, rgba(0,0,0, 0.3), rgba(0,0,0, 0.3)), url('https://images.unsplash.com/photo-1589227365533-cee630bd59bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')",
        clipPath: "polygon(100% 0,100% 60%,50% 100%,0 60%,0 0)",
    }
    const shadow = {
        WebkitTextStroke: "4px #4c2c15",
        textShadow:  "3px 3px 0 #4c2c15, -1px -1px 0 #4c2c15, 1px -1px 0 #4c2c15, -1px 1px 0 #4c2c15, 1px 1px 0 #4c2c15",
    }
  return (
    
    <div className="flex flex-col items-center justify-center h-[30vh] lg:mb-7 w-full bg-cover text-white lg:py-28 overflow-visible" style={bg}>
        <div className="text-[55px] lg:text-[80px] relative lg:-mt-7 font-black text-yellow font-Null opacity-80 tracking-normal first-letter:mr-1 overflow-visible" style={shadow}>{props.title}
        </div>
    </div>
  )
}
