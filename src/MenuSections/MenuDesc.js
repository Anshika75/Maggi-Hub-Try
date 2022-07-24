import React from 'react'

export default function MenuDesc(props) {
    return (
        <div className="grid place-items-center leading-7 mt-7 pb-7 text-center font-Pacifico w-3/4 text-darkGreen opacity-90">
            {props.desc}
        </div>
    )
}
