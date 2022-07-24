import React from 'react'
import MantraBox from '../AboutSecComponents/MantraBox'
import PersonalityBox from '../AboutSecComponents/PersonalityBox'
import TeamCardBox from '../AboutSecComponents/TeamCardBox'
import Head from '../components/Head'
import Navbar from '../components/Navbar'
import MenuDesc from '../MenuSections/MenuDesc'
import MenuHead from '../MenuSections/MenuHead'

export default function About() {
    return (
        <div className="flex flex-col justify-start items-center bg-[#fff] w-full overflow-x-hidden sm:w-[60%] shadow-[0px_0px_14px_0px_rgba(231,166,26,0.3)]">
            <Navbar />
            <MenuHead title="Who We Are" />
            <MenuDesc desc="MaggiHub pushes the envelope of Maggi cuisine. Taking its influences from our team members' culinary roots, we blend traditional and innovative techniques to create unique offerings using local ingredients in all of its dishes. We are grounded in hospitality with our staff's commitment to providing you with a memorable experience each time you walk through our door." />
            <Head title="Our Story" desc="The secret of the Great Stories is that they have no secrets." />
            <div className="text-grey font-Poppins font-normal w-3/4 text-center leading-7 my-10">
                Since our modest beginnings in 2004 with a little space in Ice Cream Mountains, surrounded by cool breeze of Chocolate River, Maggi Hub is trying its best to provide you a roller coster ride of different cuisines from all across the world
                <br/><br/>Our priority is to deliver best quality of food and in return what we desire is to get the most precious smile of it's customers. Everything we do is a celebration of happiness and love.
                <br/><br/>Our values include providing fair wages for workers, giving back to the communities we work with, and serving great food.
                Moreover, we regard it as a personal challenge to help bring about a revival of Maggi cuisine and let its distinctive flavours and particular regional character brighten up the world.
            </div>
            <Head title="Our Mantra" desc="Be vulnerable, be courageous, and find comfort in the uncomfortable." />
            <MantraBox/>
            <Head title="Kitchen Brigade" desc="Coming together is a beginning, staying together is progress, and working together is success." />
            <TeamCardBox/>
            <Head title="Our Personality" desc="Coming together is a beginning, staying together is progress, and working together is success." />
            <PersonalityBox/>
            <div className="flex flex-row items-center justify-center text-xs lg:text-base w-full text-lightwhite pt-7">★★★★★★★★</div>
            <MenuDesc desc="We believe in the commitment to our community and in fostering long term relationships with local farmers and fishermen. Our menus reflect these connections, featuring local, seasonal produce and sustainably sourced seafood and meats. "/>
            <div className="flex flex-row items-center justify-center text-xs lg:text-base w-full text-lightwhite pb-7">★★★★★★★★</div>
        
        </div>
    )
}

// Our Speciality
// Our Personality