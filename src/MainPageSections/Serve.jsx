import React from 'react'
import Head from '../components/Head'
import ServeBox from '../components/ServeBox'

export default function Serve() {
    const bg = {
        backgroundImage: "linear-gradient(to right bottom, rgba(0,0,0, 0.5), rgba(0,0,0, 0.5)), url('https://images.unsplash.com/photo-1561758033-f8ff74d6494a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjN8fGZhc3QlMjBmb29kfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=600&q=60')",
    }
  return (
    <div className="relative flex flex-col items-center justify-center pt-20 w-full bg-cover bg-fixed" style={bg}>
        <div className="absolute z-10 top-0 left-0 w-full h-full backdrop-blur-[7px] bg-[rgba(255, 255, 255, 0.2)]"></div>
        <Head title="Food we Serve" color="#fff" starcolor="#dde6eb" desc="Every dish we create is its own unique experience, free of pretense."/>
        <ServeBox/>
    </div>
  )
}
