import React from 'react'

type HeadingProps = {
    subtitle: string
    title: string
    description: string
}

const Heading = ({ subtitle, title, description }: HeadingProps) => {
    return (
        <div data-aos="fade-up" className='pt-8 text-center flex items-center flex-col'>
            <h3 className='text-red-500'>{subtitle}</h3>
            <p className='text-4xl text-white font-bold'>{title}</p>
            <p className='text-sm max-w-[18rem] text-gray-500'>{description}</p>
        </div>
    )
}

export default Heading