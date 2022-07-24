import React from 'react'
import FaqCard from './FaqCard'
import { Faqlist } from '../helpers/FaqList'

export default function FaqBox() {
  return (
    <div className="flex flex-col justify-evenly items-center w-full mt-7 p-3 pb-0">
         {
                    Faqlist.map((e) => {
                        return <FaqCard ques={e.ques} ans={e.ans} key={e.id} />
                    })
                }
    </div>
  )
}
