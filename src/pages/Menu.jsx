import React from 'react'
import MenuDesc from '../MenuSections/MenuDesc'
import MenuHead from '../MenuSections/MenuHead'
import Navbar from '../components/Navbar'
import MenuSec from '../MenuSections/MenuSec'
import { Outlet } from 'react-router-dom'

export default function Menu() {
    return (
        <>
            <Outlet />
            <div className="flex flex-col justify-start items-center bg-[#fff] w-full overflow-x-hidden sm:w-[60%] shadow-[0px_0px_14px_0px_rgba(231,166,26,0.3)]">
                <Navbar />
                <MenuHead title="Cuisine List" />
                <MenuDesc desc="MaggiHub combines flavors & inspiration from the Far East & the West to create what we think is the best! Home to the original maggi, we specialize in pizzas, as well as handmade appetizers, sandwiches, salads, and gluten friendly, vegetarian, & vegan selections. Feel free to indulge with our fantastic unique cuisine. Hope you enjoy it the most! Cheers!" />
                <MenuSec />
                <MenuDesc desc="We are a tight-knit, fun-loving, devoted team of local cooks spreading the gospel of good times and good food in Maggi World. We cook, we tell stories,  but most of all … we treat every event like you're a guest at our dinner table. We use the freshest ingredients in preparing our food to provide the best quality and taste. Try our delicious food today! " />
                <div className="flex flex-row items-center justify-center text-xs lg:text-base w-full text-lightwhite pb-7">★★★★★★★★</div>
            </div>
        </>
    )
}
