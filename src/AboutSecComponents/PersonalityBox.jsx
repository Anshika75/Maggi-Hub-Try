import React from 'react'
import MantraCard from './MantraCard'
import { Personalitylist } from '../helpers/Personality'

export default function PersonalityBox() {
  return (
    <div className="flex flex-col lg:flex-row flex-wrap justify-evenly items-center w-full p-3 mt-10 mb-5 pb-0">
         {
            Personalitylist.map((e) => {
            return <MantraCard title={e.title} icon={e.icon} desc={e.desc} key={e.id} />
          })
        }
    </div>
  )
}
