import Image from "next/image"
import { FaStar, FaStarHalf } from 'react-icons/fa'

const Reviews = () => {

    const reviews = [1, 2, 3, 4, 5]


    return (
        <div className='bg-gray-200 w-full'>
            <div className='flex lg:flex-row md:flex-row flex-col px-10  py-10 justify-evenly'>
                <div className='text-gray-600 text-lg font-medium'>
                    What Clients Say
                </div>
                <div className='flex flex-col text-black'>
                    <p className='lg:max-w-[18rem] md:max-w-[18rem] max-w-[100%] font-bold text-2xl'>
                        We're trusted by more than 1,000 students and parents
                    </p>
                    <div className='font-medium flex items-center gap-5 mt-5'>
                        <div>1000+ Costumers</div>
                        <div>99% Satisfaction</div>
                    </div>
                </div>
            </div>

            <div className="flex justify-end py-10">

                <div className="flex scroll-track gap-10 overflow-x-scroll lg:w-[85%] md:w-[85%] w-[90%]  pb-5 px-5">
                {
                    reviews.map((review, index) => (
                        <div key={index} className="text-white bg-black rounded-3xl p-8">
                            <div className="w-[18rem] flex justify-between">
                                <Image width={100} height={100} alt="name" className="h-12 w-12 rounded-full" src={"/images/temp.png"} />
                                <div className="text-gray-400">
                                    NIT Patna
                                </div>
                            </div>
                            <div className="text-xl font-semibold mt-7">
                                <p>"Great prices and excellent service"</p>
                            </div>
                            <div className="flex justify-between mt-3">
                                <p className="text-sm text-gray-400">Sudhanshu Ranjan</p>
                                <div className="flex">
                                    <FaStar className="inline text-yellow-400" />
                                    <FaStar className="inline text-yellow-400" />
                                    <FaStar className="inline text-yellow-400" />
                                    <FaStar className="inline text-yellow-400" />
                                    <FaStarHalf className="inline text-yellow-400" />
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            </div>
        </div>
    )
}

export default Reviews