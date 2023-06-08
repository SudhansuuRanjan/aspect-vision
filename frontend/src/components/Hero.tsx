import React from 'react'
import Image from 'next/image'

export default function Hero() {
    return (
        <div className='bg-no-repeat bg-[url("https://png.pngtree.com/background/20220714/original/pngtree-black-abstract-background-picture-image_1605536.jpg")] bg-cover justify-center flex items-center pt-[9rem] lg:gap-1 md:gap-2 gap-6 flex-col text-5xl font-bold'>
            <h1 data-aos="zoom-in" className='font-extrabold text-center lg:text-7xl md:text-6xl text-5xl lg:mx-8 md:mx-8 mx-4 text-white lg:mb-5 md:mb-5'>Getting Counselling for</h1>
            <h1 data-aos="zoom-in" className='font-bold text-center text-transparent lg:text-5xl md:text-4xl text-2xl mx-5 bg-clip-text bg-gradient-to-b from-gray-300 to-gray-600 lg:my-3 md:my-3'>JEE | NEET | CLAT | BCECE | ICAR</h1>
            <h1 data-aos="zoom-in" className='font-extrabold text-center lg:text-7xl md:text-5xl text-4xl bg-clip-text text-transparent bg-gradient-to-r from-[#FE0000] to-[#FFB800]'>was never this easy.</h1>
        
            <Image data-aos="fade-up" width={800} height={450} src="/images/home-bg.png" className='h-auto lg:w-[70%] md:w-[80%] w-[90%] rounded-3xl lg:my-16 md:my-10 my-7 shadow-xl' alt="electric" />
        </div>
    )
}
