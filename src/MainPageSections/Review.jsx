import React from 'react'
import chef from '../assets/Chef.png'

export default function Review() {
    const bg = {
        backgroundImage: "linear-gradient(to right bottom, rgba(0,0,0, 0.5), rgba(0,0,0, 0.5)), url('https://images.unsplash.com/photo-1545216560-68430ad77342?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGZvb2QlMjB0YWJsZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=600&q=60')",
    }
    return (
        <div className="relative flex flex-col items-center justify-center pt-20 py-0 lg:py-20 w-full bg-cover bg-fixed" style={bg}>
            {/* <div className="absolute z-10 top-0 left-0 w-full h-full backdrop-blur-[7px] bg-[rgba(255, 255, 255, 0.2)]"></div> */}
            <div className="flex flex-col lg:flex-row justify-between items-center z-20">
                <div className="flex flex-col justify-center items-start mx-5 lg:ml-5 w-[90%] lg:w-[60%] bg-[#f45100a9] p-7">
                    <div className="flex flex-row justify-center items-center text-white">
                        <i className="fas fa-quote-left text-[60px]"></i>
                    </div>
                    <div className="text-white font-Pacifico text-4xl mt-7">People are saying</div>
                    <div className="text-white font-Poppins font-light leading-7 mt-7">MaggiHub meals have always been my top favorites. I not only got great recipes, I feel more comfortable with the how they serve. Their cooking is invaluable. Highly recommended.</div>
                    <div className="text-white font-Poppins font-normal tracking-wide mt-7 text-lg">Maggi Chocolair,</div>
                    <div className="text-white font-Poppins font-light text-xs mt-1">Master Chef</div>
                
                </div>
                <img src={chef} className="hidden lg:block w-[30%] h-full absolute translate-y-[-5%] top-0 right-0" alt="" />
                <img src={chef} className="block lg:hidden h-[500px] mt-20" alt="" />
            </div>
        </div>
    )
}
