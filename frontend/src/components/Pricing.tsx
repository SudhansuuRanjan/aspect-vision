"use client"
import Link from 'next/link'
import { useState } from 'react'

const Pricing = () => {

    let price = [
        {
            id: 0,
            name: 'JEE',
            price: 5000,
            cut: 10000
        },
        {
            id: 1,
            name: 'NEET',
            price: 6000,
            cut: 10000
        },
        {
            id: 2,
            name: 'BCECE',
            price: 3000,
            cut: 10000
        },
        {
            id: 3,
            name: 'CLAT',
            price: 4000,
            cut: 10000
        },
        {
            id: 4,
            name: 'ICAR',
            price: 2000,
            cut: 10000
        }
    ]

    const [selected,setSelected] = useState(0);

    const handleChange = (e:any) =>{
        setSelected(e.target.value);
    }
 

    return (
        <div className='bg-[#04000d] flex items-center justify-center flex-col py-7 pb-16'>
            <div data-aos="fade-up" className='text-center pt-10 pb-10'>
                <h3 className='text-red-500'>ASPECT VISION</h3>
                <p className='text-4xl font-bold'>PRICING</p>
            </div>

            <div className='border rounded-3xl w-[26rem] flex flex-col items-center border-gray-800 bg-[#0a0a0a] p-10'>

                <select onChange={handleChange} autoFocus className='text-white font-bold outline-none border-none text-3xl bg-[#04000d] w-[40%] mb-5'>
                    <optgroup className='text-gray-200 font-medium text-lg'>
                        <option value="0">JEE</option>
                        <option value="1">NEET</option>
                        <option value="2">BCECE</option>
                        <option value="3">CLAT</option>
                        <option value="4">ICAR</option>
                    </optgroup>
                </select>


                <div className='flex items-center gap-2'>
                    <p className='text-2xl font-bold text-green-500'>₹ {price[selected].price}</p>
                    <p className='line-through text-red-500 font-medium'>₹ {price[selected].cut}</p>
                </div>

                <div className='h-[1px] w-[80%] m-auto my-5 mb-10 bg-gray-800'></div>

                <div className='flex flex-col gap-5 mb-6'>
                    <div className='flex items-center gap-2 text-xl font-semibold'>
                        <p>✅</p>
                        <p>College Compare</p>
                    </div>

                    <div className='flex items-center gap-2 text-xl font-semibold'>
                        <p>✅</p>
                        <p>Career Guidance</p>
                    </div>

                    <div className='flex items-center gap-2 text-xl font-semibold'>
                        <p>✅</p>
                        <p>Counselling</p>
                    </div>

                    <div className='flex items-center gap-2 text-xl font-semibold'>
                        <p>✅</p>
                        <p>College Prediction</p>
                    </div>
                </div>

                <Link className='my-3' href="/register">
                    <button className='bg-white text-black border border-[#10101a] hover:bg-gray-300 font-semibold text-sm py-2 px-10 rounded-full'>
                        <span>Book Now</span>
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Pricing