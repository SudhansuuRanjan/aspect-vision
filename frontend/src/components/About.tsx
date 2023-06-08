import React from 'react'
import Heading from './Heading'

export default function About() {
  return (
    <div id="about">
        <Heading subtitle='ABOUT' title="ABOUT US" description='Lorem Ipsum is simply dummy text of the printing and typesetting industry.' />

        <div data-aos="fade-up" className='flex lg:flex-row md:flex-row  flex-col-reverse items-center py-7 mb-10 justify-evenly my-10 gap-10'>
            <div>
                <p className='text-2xl font-bold text-left text-rose-500'>About Company</p>
                <p className='text-left text-gray-500 max-w-[18rem] mt-3'>We predict your College admission chances and Ranks based on years ofhistorical data and advanced Analytics to help you plan in advance.</p>
            </div>

            <div>
                <img className='h-[17rem]' src="./images/temp.png" alt="temp" />
            </div>
        </div>

        <div data-aos="fade-up" className='flex lg:flex-row md:flex-row flex-col items-center py-7 mb-10 justify-evenly my-10 gap-10'>
            <div>
                <img className='h-[17rem]' src="./images/temp.png" alt="temp" />
            </div>
            <div>
                <p className='text-2xl font-bold text-left text-rose-500'>About Company</p>
                <p className='text-left text-gray-500 max-w-[18rem] mt-3'>We predict your College admission chances and Ranks based on years ofhistorical data and advanced Analytics to help you plan in advance.</p>
            </div>
        </div>

        <div data-aos="fade-up" className='flex lg:flex-row md:flex-row flex-col-reverse items-center py-7 mb-10 justify-evenly my-10 gap-10'>
            <div>
                <p className='text-2xl font-bold text-left text-rose-500'>About Company</p>
                <p className='text-left text-gray-500 max-w-[18rem] mt-3'>We predict your College admission chances and Ranks based on years ofhistorical data and advanced Analytics to help you plan in advance.</p>
            </div>

            <div>
                <img className='h-[17rem]' src="./images/temp.png" alt="temp" />
            </div>
        </div>

    </div>
  )
}
