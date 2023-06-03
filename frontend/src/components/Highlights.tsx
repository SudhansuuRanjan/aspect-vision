"use client"
import React from 'react'
import { FaYoutube } from 'react-icons/fa'
import { BiArch } from 'react-icons/bi'
import { SiTestcafe } from 'react-icons/si'
import { BsFillPeopleFill } from 'react-icons/bs'
import CountUp from 'react-countup';

const Highlights = () => {
    return (
        <div className='bg-[#04000d] flex items-center justify-center flex-col py-7 pb-16'>
            <div data-aos="fade-up" className='text-center pt-10 pb-10'>
                <h3 className='text-red-500'>ASPECT VISION</h3>
                <p className='text-4xl font-bold'>Highlights</p>
            </div>
            <div data-aos="fade-up" className='grid lg:grid-cols-4 md:grid-cols-4 grid-cols-2 lg:gap-10 gap-5 items-center justify-between lg:h-[20rem] md:h-[20rem] h-fit m-auto lg:w-[55rem] md:w-[90%] w-[80%]'>
                <div className='text-center py-5 flex flex-col items-center justify-center gap-3 bg-gray-900 w-[100%] border-b-4 border-b-rose-600 hover:border-b-red-700 rounded-xl  bg-opacity-30 hover:bg-opacity-50 backdrop-blur-sm transition-all delay-100 ease-in-out hover:mb-1 z-0 hover:z-10'>
                    <BsFillPeopleFill size={42} className="text-blue-500 text-3xl my-2 transition-all ease-in delay-100 hover:rotate-360" />
                    <h3 className='text-4xl font-bold'><CountUp end={500} enableScrollSpy={true} />+</h3>
                    <p className='text-xl text-gray-400'>Users</p>
                </div>
                <div data-aos="fade-up" className='text-center py-5 flex flex-col items-center justify-center gap-3 bg-gray-900 w-[100%] border-b-4 border-b-rose-600 hover:border-b-red-700 rounded-xl  bg-opacity-30 hover:bg-opacity-50 backdrop-blur-sm transition-all delay-100 ease-in-out hover:mb-1 z-0 hover:z-10'>
                    <BiArch size={42} className="text-green-500 text-3xl my-2 transition-all ease-in delay-100 hover:rotate-180" />
                    <h3 className='text-4xl font-bold'><CountUp end={100} enableScrollSpy={true} />+</h3>
                    <p className='text-xl text-gray-400'>Alums</p>
                </div>
                <div data-aos="fade-up" className='text-center py-5 flex flex-col items-center justify-center gap-3 bg-gray-900 w-[100%] border-b-4 border-b-rose-600 hover:border-b-red-700 rounded-xl  bg-opacity-30 hover:bg-opacity-50 backdrop-blur-sm transition-all delay-100 ease-in-out hover:mb-1 z-0 hover:z-10'>
                    <FaYoutube size={42} className="text-rose-600 text-3xl my-2 transition-all ease-in delay-100 hover:rotate-180" />
                    <h3 className='text-4xl font-bold'><CountUp end={50} enableScrollSpy={true} />K+</h3>
                    <p className='text-xl text-gray-400'>Subscribers</p>
                </div>
                <div data-aos="fade-up" className='text-center py-5 flex flex-col items-center justify-center gap-3 bg-gray-900 w-[100%] border-b-4 border-b-rose-500 hover:border-b-red-700 rounded-xl  bg-opacity-30 hover:bg-opacity-50 backdrop-blur-sm transition-all delay-100 ease-in-out hover:mb-1 z-0 hover:z-10'>
                    <SiTestcafe size={42} className="text-orange-500 text-3xl my-2 transition-all ease-in delay-100 hover:rotate-360" />
                    <h3 className='text-4xl font-bold '><CountUp end={10} enableScrollSpy={true} />+</h3>
                    <p className='text-xl text-gray-400'>Exams</p>
                </div>
            </div>
        </div>
    )
}

export default Highlights