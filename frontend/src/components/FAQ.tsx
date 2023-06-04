"use client"
import React, { useState } from 'react'
import Heading from './Heading'

type faqData = {
    question: string,
    answer: string,
    id: string
}

const Faq = () => {

    const faqs: faqData[] = [
        {
            question: "What exams does the counseling portal cover?",
            answer: "The counseling portal covers counseling and guidance for various exams including JEE, NEET, CLAT, BCECE, and ICAR exams in India.",
            id: "1"
        },
        {
            question: "How can I access the counseling services?",
            answer: "To access the counseling services, you need to register on the portal and create an account. Once you have an account, you can log in and access the counseling resources, schedule counseling sessions, and receive guidance from experienced counselors.",
            id: "2"
        },
        {
            question: "What kind of counseling services are available?",
            answer: "The counseling portal provides a range of services such as exam preparation guidance, career counseling, college selection assistance, information on exam patterns and syllabus, tips for effective study techniques, and guidance on filling application forms.",
            id: "3"
        },
        {
            question: "Are the counseling services available offline or online?",
            answer: "The counseling services are primarily offered online through the portal. This allows you to access counseling resources and guidance from anywhere at any time. However, there may be some cases where offline counseling sessions or workshops are conducted at designated locations.",
            id: "4"
        },
        {
            question: "Are the counseling services free of cost?",
            answer: "The counseling portal offers both free and premium services. Some basic counseling resources and guidance are available for free, while premium services may require a subscription or payment. The details of the pricing and plans can be found on the portal.",
            id: "5"
        },
    ]


    return (
        <div className='pt-20'>
            <Heading subtitle='ASPECT VISION' title="FAQs" description='Lorem Ipsum is simply dummy text of the printing and typesetting industry.' />

            <div className='flex flex-col items-center justify-center gap-4 my-16'>
                {
                    faqs.map((faq) => <FaqCard key={faq.id} data={faq} />)
                }
            </div>
        </div>
    )
}


const FaqCard = ({ data }: { data: faqData }) => {
    const [show, setShow] = useState(false);
    return (
        <div data-aos="fade-up" className='flex lg:w-[60%] md:w-[80%] w-[92%] transition-all delay-[15ms] ease-in-out  bg-[#0a0a0a] border-gray-800 hover:border-gray-700 border lg:p-5 md:p-5 p-3 rounded-2xl gap-0 flex-col'>
            <div onClick={() => setShow((show) => !show)} className='flex justify-between items-center cursor-pointer'>
                <h3 className='font-semibold lg:text-lg md:text-lg text-base pr-5'>
                    {data.question}
                </h3>
                <button className={`transition-all delay-75 ease-in-out ${show && '-rotate-180'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 hover:text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
            </div>
            <div className={`overflow-hidden transition-all delay-[15ms] ease-in-out ${show ? 'h-fit mt-4 my-2' : 'h-0'}`}>
                <p className='text-gray-400 text-sm w-[95%]'>
                    {
                        data.answer
                    }
                </p>
            </div>
        </div>
    )
}

export default Faq