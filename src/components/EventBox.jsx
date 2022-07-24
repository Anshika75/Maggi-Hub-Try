import React from 'react'
import {Eventlist} from "../helpers/Eventlist"
import Eventitem from './Eventitem'

export default function WorkingBox() {
    return (
    <>
        <div className="flex z-20 flex-col flex-wrap justify-evenly items-start w-full mt-7">
            {
                Eventlist.map((e) => {
                    return <Eventitem date={e.date} month={e.month} event={e.event} host={e.host} key={e.id} />
                })
            }
        </div>
    </>
    )
}
