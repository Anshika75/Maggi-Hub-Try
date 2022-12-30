import React, { useEffect } from 'react'
import DinnerIcon from '@mui/icons-material/DinnerDiningOutlined';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

export default function Home() {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);
    const bg = {
        backgroundImage: "linear-gradient(to right bottom, rgba(0,0,0, 0.3), rgba(0,0,0, 0.3)), url('https://images.unsplash.com/photo-1589227365533-cee630bd59bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')",
    }
    const shadow = {
        WebkitTextStroke: "4px #4c2c15",
        textShadow: "3px 3px 0 #4c2c15, -1px -1px 0 #4c2c15, 1px -1px 0 #4c2c15, -1px 1px 0 #4c2c15, 1px 1px 0 #4c2c15",
    }
    const noShadow = {
        WebkitTextStroke: "4px #4c2c1500",
        textShadow: "3px 3px 0 #4c2c1500, -1px -1px 0 #4c2c1500, 1px -1px 0 #4c2c1500, -1px 1px 0 #4c2c1500, 1px 1px 0 #4c2c1500",
    }
    return (
        <>
            <div className="flex flex-col items-center justify-center h-[75vh] w-full bg-cover text-white" style={bg}>
                <DinnerIcon className='opacity-50' sx={{ fontSize: "100px" }} />
                <div className="text-[30px] lg:text-[40px] font-Pacifico opacity-80 overflow-visible">Welcome to</div>
                <div className="text-[60px] lg:text-[80px] relative -mt-7 text-yellow font-Null tracking-normal first-letter:mr-1 opacity-90 overflow-visible" style={shadow}>MaggiHub
                    <div className="flex flex-row items-center justify-center text-xs lg:text-base absolute bottom-0 translate-y-[50%] w-full text-white opacity-70 overflow-visible" style={noShadow}>★★★★★★★★★★★★★★★★★★★★</div>
                </div>
                <div className="lg:text-xl text-base font-Pacifico mt-3 opacity-75 mb-7 overflow-visible">Delight in every bite</div>
                <Link to="/Contact" 
                      style={{ textDecoration: 'none' }} 
                      onClick={() => {
                            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });}}>
                    <Button text="Book Your Table Now" />
                </Link>
            </div>
        </>
    )
}
