import React from 'react'
import {Hours} from "../helpers/Hours"
import WorkingHours from './WorkingHours'

export default function WorkingBox() {
    return (
    <>
        <div className="flex z-20 flex-col flex-wrap justify-evenly items-center w-full mt-7">
            {
                Hours.map((e) => {
                    return <WorkingHours day={e.day} start={e.start} end={e.end} dot={e.dot} key={e.id} />
                })
            }
        </div>
    </>
    )
}
