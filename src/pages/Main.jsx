import React from 'react'
import Navbar from '../components/Navbar'
import Home from '../MainPageSections/Home'
import Map from '../MainPageSections/Map'
import MenuDemo from '../MainPageSections/MenuDemo'
import Review from '../MainPageSections/Review'
import Serve from '../MainPageSections/Serve'
import Special from '../MainPageSections/Special'
import Visit from '../MainPageSections/Visit'
import Week from '../MainPageSections/Week'
import Working from '../MainPageSections/Working'

export default function Main() {
  return (
    <>
        <div className="flex flex-col h-full bg-[#fff] w-full overflow-x-hidden sm:w-[60%] shadow-[0px_0px_14px_0px_rgba(231,166,26,0.3)]">
            <Navbar/>
            <Home/>
            <Special/>
            <Serve/>
            <Week/>
            <Visit/>
            <MenuDemo/>
            <Review/>
            <Working/>
            <Map/>
        </div>
    </>
  )
}
