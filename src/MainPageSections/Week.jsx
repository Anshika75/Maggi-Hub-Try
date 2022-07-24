import React from 'react'

export default function Week() {
    const bg = {
        backgroundImage: "linear-gradient(to right bottom, rgba(0,0,0, 0.5), rgba(0,0,0, 0.5)), url('https://images.unsplash.com/photo-1646578848804-dbcddb7c2088?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzZ8fGhvdCUyMGRvZ3xlbnwwfDB8MHx8&auto=format&fit=crop&w=600&q=60')",
    }
    return (
        <>
            <div className="relative flex flex-col justify-center items-center py-20">
                <div className="absolute w-[70%] left-2/4 -translate-x-2/4 lg:w-[300px] top-0 lg:left-[75%]  h-[45px] opacity-75 bg-cover" style={bg}>
                </div>
                <div className="flex flex-col lg:flex-row flex-wrap justify-evenly w-full mt-16 items-center">
                    <div className="flex flex-col items-center justify-center z-20 lg:w-2/4">
                        <div className="text-xl text-orange font-Pacifico">Weekly Special</div>
                        <div className="font-Poppins leading-6 font-bold text-3xl text-center text-grey mt-3">Choco Foundue</div>
                        <div className="flex flex-row items-center justify-center text-xs lg:text-base w-full text-lightwhite mt-3">★★★★★★★★</div>
                        <div className="font-Poppins leading-6 font-light text-sm text-center text-grey mt-3 w-[80%] lg:w-[90%]">Head straight for the dessert section for the choco fondue — a blend of milk and dark chocolate melted together, & served up with fruit, marshmallows & doughnuts.</div>
                    </div>
                    <div className="grid place-items-center w-[70%] lg:w-2/4 mt-5 lg:mt-0">
                        <img src="https://img.freepik.com/free-photo/fondue-with-chocolate-fountain-sweets-it-sweet-theme_217593-7489.jpg" className='shadow-lg lw-full lg:w-[300px]' alt="" />

                    </div>
                </div>

            </div>
        </>
    )
}
