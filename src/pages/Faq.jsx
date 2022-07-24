import React from 'react'
import Head from '../components/Head'
import Navbar from '../components/Navbar'
import FaqBox from '../FaqSecComponents/FaqBox'
import MenuDesc from '../MenuSections/MenuDesc'
import MenuHead from '../MenuSections/MenuHead'

export default function Faq() {
  return (
    <div className="flex flex-col justify-start items-center bg-[#fff] w-full overflow-x-hidden sm:w-[60%] shadow-[0px_0px_14px_0px_rgba(231,166,26,0.3)]">
    <Navbar/>
    <MenuHead title="FAQ's"/>
    <MenuDesc desc="At MaggiHub, we're serving up more than Maggi. In fact, MaggiHub famous Maggi Bowl is one of our unexpected specialties. Reminiscent of butcher shops back in the day, each slow-smoked, sizzling prime chop measures seven-fingers high. Our signature recipe, that we have perfected for more than four decades, is rubbed with a secret blend of seasonings, cured and roasted on a rotisserie with pecan wood for up to six hours before it's topped with MaggiHub signature herb-garlic butter, then carved tableside"/>
    <Head title="Frequently Asked Questions" desc="We are all ears. And all answers too, below… Hope it helps."/>
    <FaqBox/>
    <div className="flex flex-row items-center justify-center text-xs lg:text-base w-full text-lightwhite pt-7">★★★★★★★★</div>
    <MenuDesc desc="MaggiHub specializes in delicious food featuring fresh ingredients and masterful preparation by the MaggiHub culinary team. Whether you're ordering a multi-course meal or grabbing a drink and pizza at the hub, MaggiHub's lively, casual yet upscale atmosphere makes it perfect for dining with friends, family, clients and business associates."/>
    <div className="flex flex-row items-center justify-center text-xs lg:text-base w-full text-lightwhite pb-7">★★★★★★★★</div>
    </div>
  )
}
