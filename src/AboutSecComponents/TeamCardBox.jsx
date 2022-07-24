import React from 'react'
import SpecialCard from '../components/SpecialCard'
import { Teamlist } from '../helpers/Team'

export default function TeamCardBox() {
  return (
    <>
        <div className="flex flex-row flex-wrap justify-evenly items-center w-full p-3">
        {
            Teamlist.map((e) => {
            return <SpecialCard title={e.title} desc={e.desc} img={e.img} key={e.id} />
          })
        }
        </div>
    </>
  )
}
