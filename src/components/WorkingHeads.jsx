import React from 'react'
export default function WorkingHeads(props) {
  return (
    <div className="flex flex-col justify-center items-center">
            <div className="text-orange text-[60px]">
            <i className={props.class}></i>
            </div>
            <div className="text-4xl text-grey font-Pacifico">{props.title}</div>

    </div>
  )
}
