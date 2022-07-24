import React from 'react'
import MenuCard from './MenuCard'
import { Menulist } from '../helpers/MenuList'

export default function MenuCardBox() {
  return (
    <>
        <div className="flex flex-col lg:flex-row flex-wrap justify-evenly items-center w-full p-3 pb-0">
        {
            Menulist.map((e) => {
            return <MenuCard title={e.title} img={e.img} path={e.path} key={e.id} />
          })
        }
        </div>
    </>
  )
}
