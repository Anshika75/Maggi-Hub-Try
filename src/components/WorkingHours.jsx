import React from 'react'

export default function WorkingHours(props) {
  return (
     <div className="flex flex-row justify-center items-center text-grey font-Poppins font-light text-base overflow-visible">
        {props.day} {props.dot} {props.start} am to {props.end} pm
     </div>
  )
}
