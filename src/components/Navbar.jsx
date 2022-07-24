import React, { useState } from 'react'
import logo from "../assets/MaggiHub.png"
import ReorderIcon from '@mui/icons-material/Reorder';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from "react-router-dom";

export default function Navbar() {
    const [expandNavbar, setExpandNavbar] = useState(false);
    
    const translate = {
        transform: expandNavbar ? "translateX(0%)" : "translateX(100%)",
    }
    return (
        <div className='bg-darkGreen w-full'>
            <div className="flex flex-row items-center justify-between">
                <img src={logo} alt="MaggiHub" className='h-[60px] w-[60px]' />
                <div className="hidden lg:flex flex-row items-center justify-center">
                    <Link to="/" className="decoration-none font-Poppins text-white text-lg font-extralight mx-3 opacity-70 transition-all hover:opacity-100 uppercase tracking-wider">Home</Link>
                    <Link to="/Menu" className="decoration-none font-Poppins text-white text-lg font-extralight mx-3 opacity-70 transition-all hover:opacity-100 uppercase tracking-wider">Menu</Link>
                    <Link to="/About" className="decoration-none font-Poppins text-white text-lg font-extralight mx-3 opacity-70 transition-all hover:opacity-100 uppercase tracking-wider">About</Link>
                    <Link to="/Faq" className="decoration-none font-Poppins text-white text-lg font-extralight mx-3 opacity-70 transition-all hover:opacity-100 uppercase tracking-wider">FAQ's</Link>
                    <Link to="/Contact" className="decoration-none font-Poppins text-white text-lg font-extralight mx-3 mr-7 opacity-70 transition-all hover:opacity-100 uppercase tracking-wider">Contact</Link>
                </div>
                <div className="grid lg:hidden place-items mr-7">
                    <ReorderIcon
                        className='text-white opacity-70 transition-all hover:opacity-100 cursor-pointer'
                        onClick={() => {
                            setExpandNavbar(true);
                        }}
                    />
                </div>
                <div className="absolute lg:hidden transition-all duration-500 shadow-lg pt-24 top-0 right-0 w-2/4 h-screen flex flex-col items-start bg-darkGreen z-20" style={translate}>
                    <CloseIcon
                        className='absolute top-5 right-5 text-white opacity-70 transition-all hover:opacity-100 cursor-pointer'
                        onClick={() => {
                            setExpandNavbar(false);
                        }}
                    />
                    <Link to="/" className="decoration-none font-Poppins text-white text-lg font-extralight ml-7 my-2 opacity-70 transition-all hover:opacity-100 uppercase tracking-wider">Home</Link>
                    <Link to="/Menu" className="decoration-none font-Poppins text-white text-lg font-extralight ml-7 my-2 opacity-70 transition-all hover:opacity-100 uppercase tracking-wider">Menu</Link>
                    <Link to="/About" className="decoration-none font-Poppins text-white text-lg font-extralight ml-7 my-2 opacity-70 transition-all hover:opacity-100 uppercase tracking-wider">About</Link>
                    <Link to="/Faq" className="decoration-none font-Poppins text-white text-lg font-extralight ml-7 my-2 opacity-70 transition-all hover:opacity-100 uppercase tracking-wider">FAQ's</Link>
                    <Link to="/Contact" className="decoration-none font-Poppins text-white text-lg font-extralight ml-7 my-2 opacity-70 transition-all hover:opacity-100 uppercase tracking-wider">Contact</Link>
                </div>
            </div>
        </div>
    )
}
