import React from 'react'

export default function Button(props) {
  return (
    <>
        <div className="bg-transparent grid place-items-center z-10 border-2 opacity-75 hover:opacity-100 hover:shadow-md border-white rounded-md px-5 py-3 cursor-pointer transition-all duration-[500ms] delay-100 hover:border-yellow before:transition-all before:duration-[500ms] after:transition-all after:duration-[500ms] overflow-hidden relative after:w-full after:absolute after:top-0 after:left-0 after:h-full after:bg-yellow after:translate-x-[100%] hover:after:translate-x-0 after:border-b-2 after:border-yellow after:opacity-70 after:rounded before:w-full before:absolute before:top-0 before:left-0 before:h-full before:bg-yellow before:opacity-70 before:translate-x-[-100%] hover:before:translate-x-0 before:border-t-2 before:border-yellow before:rounded">
                <div className="text-sm lg:text-base text-white z-20 font-bold">{props.text}</div>
            </div>
    </>
  )
}
