import React from 'react'
import ContactCard from './ContactCard'
import { Contactlist } from '../helpers/ContactList'

export default function ContactBox() {
  return (
    <div className="flex flex-col lg:flex-row flex-wrap justify-evenly items-center w-full p-3 mt-10 mb-5 pb-0">
    {
            Contactlist.map((e) => {
            return <ContactCard title={e.title} icon={e.icon} desc={e.desc} key={e.id} />
          })
        }
    </div>
  )
}
