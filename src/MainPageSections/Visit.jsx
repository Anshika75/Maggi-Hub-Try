import React from 'react'
import pizza from '../assets/Pizza.png'
import Button from '../components/Button'

export default function Visit() {
    const bg = {
        backgroundImage: "linear-gradient(to right bottom, rgba(0,0,0, 0.5), rgba(0,0,0, 0.5)), url('https://images.unsplash.com/photo-1565060050533-478757130681?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODd8fGNoaWNrZW4lMjBmb29kfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=600&q=60')",
    }
    return (
        <div className="relative flex flex-col items-center justify-center pt-20 w-full bg-cover bg-fixed h-screen" style={bg}>
            {/* <div className="absolute z-10 top-0 left-0 w-full h-full backdrop-blur-[7px] bg-[rgba(255, 255, 255, 0.2)]"></div> */}
            <div className="flex flex-row justify-between items-center w-full z-20">
                <div className="flex flex-col justify-center items-start ml-5">
                    <div className="flex flex-row justify-center items-center text-white">
                        <i className="fas fa-utensils text-[60px]"></i>
                        <div className="font-Poppins text-4xl ml-3 font-extralight">Have You Ever</div>
                    </div>
                    <div className="font-Poppins text-5xl font-light mt-3 text-white">Ordered From</div>
                    <div className="font-Null text-7xl font-light mt-7 text-yellow">MaggiHub</div>    
                    <div className="flex flex-row justify-center items-center text-white mt-7">
                        <i className="fas fa-clock text-lg"></i>
                        <div className="font-Poppins text-lg ml-3 font-extralight">30 min delivery</div>
                    </div>
                    <div className="flex flex-row justify-center items-center text-white mt-2">
                        <i className="fas fa-money-bill text-lg"></i>
                        <div className="font-Poppins text-lg ml-3 font-extralight">Cash on Delivery</div>
                    </div> 
                    <div className="flex flex-row justify-center items-center text-white mt-2 mb-7">
                        <i className="fas fa-map-marker text-lg"></i>
                        <div className="font-Poppins text-lg ml-3 font-extralight">Anywhere, Anytime</div>
                    </div>        
                    <Button text="Order Now"/>        
                </div>
                <img src={pizza} className="hidden lg:block " alt="" />
            </div>
        </div>
    )
}
