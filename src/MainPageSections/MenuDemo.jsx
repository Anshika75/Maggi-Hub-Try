import React from 'react'
import MenuDCardBox from '../components/MenuDCardBox'
import Head from '../components/Head'

export default function MenuDemo() {
    return (
        <div className="flex flex-col justify-center items-center py-20">
            <Head title="Our Menu" desc="The first bite will blow your mind. The second will transport you to another dimension." />
            <MenuDCardBox />
            <div className="bg-transparent grid place-items-center border-orange text-orange hover:text-white z-10 border-2 opacity-75 hover:opacity-100 hover:shadow-md rounded-md px-5 py-3 cursor-pointer transition-all duration-[500ms] delay-100 hover:border-orange before:transition-all before:duration-[500ms] after:transition-all after:duration-[500ms] overflow-hidden relative after:w-full after:absolute after:top-0 after:left-0 after:h-full after:bg-orange after:translate-x-[100%] hover:after:translate-x-0 after:border-b-2 after:border-orange after:opacity-70 after:rounded before:w-full before:absolute before:top-0 before:left-0 before:h-full before:bg-orange before:opacity-70 before:translate-x-[-100%] hover:before:translate-x-0 before:border-t-2 before:border-orange before:rounded">
                <div className="text-sm lg:text-bas transition-all duration-[100ms] z-20 font-bold">View More</div>
            </div>
        </div>
    )
}
