import React from 'react'
import SpecialCardBox from '../components/SpecialCardBox'
import Head from '../components/Head'

export default function Special() {
  return (
    <>
        <div className="flex flex-col justify-center items-center py-20">
        <Head title="Our Speciality" desc="In an industry of clones and copycats, we like to stand out for going our own way"/>
        <SpecialCardBox/>
        </div>
    </>
  )
}
