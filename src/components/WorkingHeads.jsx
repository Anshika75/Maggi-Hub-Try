import React from 'react'
export default function WorkingHeads(props) {
  return (
    <div className="flex flex-col justify-center items-center overflow-visible">
            <div className="text-orange text-[60px] overflow-visible">
            <i className={props.class}></i>
            </div>
            <div className="text-4xl text-grey font-Pacifico overflow-visible">{props.title}</div>

    </div>
  )
}
