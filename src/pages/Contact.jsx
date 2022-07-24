import React from 'react'
import Head from '../components/Head'
import Navbar from '../components/Navbar'
import ContactBox from '../ContactSecComponents/ContactBox'
import MenuDesc from '../MenuSections/MenuDesc'
import MenuHead from '../MenuSections/MenuHead'

export default function Contact() {
  return (
    <div className="flex flex-col justify-start items-center bg-[#fff] w-full overflow-x-hidden sm:w-[60%] shadow-[0px_0px_14px_0px_rgba(231,166,26,0.3)]">
    <Navbar/>
    <MenuHead title="Reach Us"/>
    <MenuDesc desc="Located at Maggi Land, in Ice Cream Mountains, surrounded by cool breeze of Chocolate River. We offer a wide array of fresh food, green pork plate, chimichangas, hamburger, barbacoa plate, pizza, salads, bbq with rice and beans and more. We use the freshest ingredients in preparing our food to provide the best quality and taste. Try our delicious food today! "/>
    <Head title="Contact Us" desc="We're here for you. Our door is always open for a good cup of coffee."/>
    <ContactBox/>
    <div className="flex flex-row items-center justify-center text-xs lg:text-base w-full text-lightwhite pt-7">★★★★★★★★</div>
    <MenuDesc desc="We believe the choices we make about what we eat, where it comes from and how it’s prepared have a direct and powerful impact on the health of individuals, communities and the environment. We prioritize what you need to get you on your way. We strive to keep you at your best, and we remain loyal to you, your tastes and your time."/>
    <div className="flex flex-row items-center justify-center text-xs lg:text-base w-full text-lightwhite pb-7">★★★★★★★★</div>
    
    </div>
  )
}
