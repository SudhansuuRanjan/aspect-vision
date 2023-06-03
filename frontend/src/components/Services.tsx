import React from 'react'
import Heading from './Heading'
import { MdWork } from 'react-icons/md'
import { BiArch } from 'react-icons/bi'

const Services = () => {

    type serviceData = {
        icon: React.JSX.Element,
        title: string,
        desc: string
    }

    const data: serviceData[] = [
        {
            icon: <MdWork size={28} />,
            title: 'Career Guidance',
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
            icon: <BiArch size={28}/>,
            title: 'College Prediction',
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
            icon: <MdWork size={28}/>,
            title: 'College Compare',
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
            icon: <MdWork size={28}/>,
            title: 'Online Courses',
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
    ]



    return (
        <div className='bg-[#04000d] py-10'>
            <Heading title="Services" subtitle='ASPECT VISION' description='Lorem Ipsum is simply dummy text of the printing and typesetting industry.' />
            <div className='flex items-center justify-center py-16'>
                <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-x-16 gap-y-10'>
                    {
                        data.map((item, idx) => (
                            <div key={idx} className='flex gap-4'>
                                <div className='bg-gradient-to-r from-orange-500 to-red-700 h-14 w-14 rounded-xl flex items-center justify-center'>
                                    {item.icon}
                                </div>
                                <div>
                                    <h3 className='text-xl font-bold -mt-1'>{item.title}</h3>
                                    <p className='text-sm text-gray-500 max-w-[15rem]'>{item.desc}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Services