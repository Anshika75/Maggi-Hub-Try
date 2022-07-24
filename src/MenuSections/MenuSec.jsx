import React from 'react'
import MenuCardBox from '../components/MenuCardBox'
import Head from '../components/Head'

export default function MenuSec() {
    return (
        <div className="flex flex-col justify-center items-center pt-7">
            <Head title="Our Menu" desc="The first bite will blow your mind. The second will transport you to another dimension." />
            <MenuCardBox />
            <div className="flex flex-row items-center justify-center text-xs lg:text-base w-full text-lightwhite mt-3">★★★★★★★★</div>
        </div>
        
    )
}
