import React from 'react'
import ServeCard from './ServeCard'
import { Servelist } from '../helpers/Serve'
export default function ServeBox() {
    return (
        <>
            <div className="flex z-20 flex-row flex-wrap justify-evenly items-center w-full px-3 py-20">
                {
                    Servelist.map((e) => {
                        return <ServeCard title={e.title} desc={e.desc} icon={e.icon} key={e.id} />
                    })
                }
            </div>
        </>
    )
}
