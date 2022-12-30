import React from 'react'
import MenuDCard from './MenuDCard'
import { MenuDlist } from '../helpers/MenuD'

export default function SpecialCardBox() {
  return (
    <>
        <div className="flex flex-col lg:flex-row flex-wrap justify-evenly items-center w-full p-3 pb-0">
        {
            MenuDlist.map((e) => {
            return <MenuDCard title={e.title} img={e.img} key={e.id} path={"/"+e.title} />
          })
        }
        </div>
    </>
  )
}
