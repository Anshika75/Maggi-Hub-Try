import React from 'react'
import MantraCard from './MantraCard'
import { Mantralist } from '../helpers/Mantra'

export default function MantraBox() {
  return (
    <div className="flex flex-col lg:flex-row flex-wrap justify-evenly items-center w-full p-3 mt-10 mb-5 pb-0">
         {
            Mantralist.map((e) => {
            return <MantraCard title={e.title} icon={e.icon} desc={e.desc} key={e.id} />
          })
        }
    </div>
  )
}
