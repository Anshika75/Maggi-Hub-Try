import React from 'react'
import WorkingHeads from '../components/WorkingHeads'
import WorkingBox from '../components/WorkingBox'
import EventBox from '../components/EventBox'

export default function Working() {
  return (
        <div className="flex flex-row flex-wrap justify-evenly items-start pt-20">
            <div className="flex flex-col justify-center items-center mx-3 mb-20">
                <WorkingHeads class="fas fa-clock" title="Working Hours" />
                <WorkingBox/>
            </div>
            <div className="flex flex-col justify-center items-center mx-3 mb-20">
                <WorkingHeads class="fas fa-calendar-alt" title="Upcoming Events" />
                <EventBox/>
            </div>
        </div>
  )
}
