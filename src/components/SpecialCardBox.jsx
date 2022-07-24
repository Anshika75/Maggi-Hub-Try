import React from 'react'
import SpecialCard from './SpecialCard'
import { Specialitylist } from '../helpers/Speciality'

export default function SpecialCardBox() {
  return (
    <>
        <div className="flex flex-row flex-wrap justify-evenly items-center w-full p-3">
        {
            Specialitylist.map((e) => {
            return <SpecialCard title={e.title} desc={e.desc} img={e.img} key={e.id} />
          })
        }
        </div>
    </>
  )
}
