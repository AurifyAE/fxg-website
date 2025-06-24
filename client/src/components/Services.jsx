import React, { useEffect, useRef } from 'react'
import service from '../assets/servicebg.jpg'
import { setupSlideAnimationObserver } from '../utils/intersectionObserver'
import { useNavigate } from 'react-router-dom';

const services = [
    {
        id: 1,
        title: 'Gold & Bullion Trading',
        description: 'Trade gold with real-time pricing and global market access.',
    },
    {
        id: 2,
        title: 'Precious Metals Investment',
        description: 'Diversify with silver, platinum, and palladium, backed by expert guidance.',
    },
    {
        id: 3,
        title: 'Portfolio Consultation',
        description: 'Get a personalized strategy to optimize your investments.',
    },
    {
        id: 4,
        title: 'Market Insights',
        description: 'Stay ahead with expert analysis, forecasts, and updates.',
    },
    {
        id: 5,
        title: 'Secure Storage',
        description: 'Protect your assets in our state-of-the-art facilities.',
    },
    {
        id: 6,
        title: 'Insured Delivery',
        description: 'Receive your metals safely, straight to your doorstep.',
    },
    {
        id: 7,
        title: 'Dedicated Support',
        description: 'Expert assistance for a smooth trading experience.',
    },
]

export default function Services() {
    const servicesRef = useRef(null);
    const navigate = useNavigate();
    
    useEffect(() => {
        const cleanup = setupSlideAnimationObserver(servicesRef, {
            threshold: 0.2,
            rootMargin: '0px 0px -50px 0px'
        });

        return cleanup;
    }, []);

    return (
        <div id='services' className='flex flex-col items-center justify-center bg-black text-white pb-40'>
            <div className='text-center px-4 md:px-10 lg:px-36 py-16 md:py-24 lg:py-28'>
                <h1 className='text-3xl md:text-4xl lg:text-5xl font-[Aptumi] text-[#BA8A54] font-bold pb-5'>Our Services</h1>
                <p className='text-sm md:text-base lg:text-lg'>At FXG Gold, we offer a seamless and rewarding experience in bullion and gold trading, tailored to your investment goals.</p>
            </div>
            <div ref={servicesRef} className='relative w-full flex flex-col items-center justify-center'>
                <img src={service} alt="service image" className='hidden lg:block blur-[3px] brightness-80' />
                <div className='lg:absolute lg:top-0 lg:left-0 w-full h-full flex justify-center flex-wrap gap-4 md:gap-6 lg:gap-10 p-4 md:p-6 lg:p-8'>
                    {services.map((service, index) => (
                        <div key={service.id} className={`w-full md:w-[calc(50%-12px)] lg:w-lg min-h-[280px] md:min-h-[320px] lg:min-h-96 flex flex-col items-center justify-center bg-[#FDF7F7] text-black px-6 md:px-8 lg:px-10 rounded-sm shadow-lg text-center space-y-4 md:space-y-6 lg:space-y-8 animate-slide-from-bottom`} style={{ animationDelay: `${index * 0.1}s` }}>
                            <h1 className='text-3xl md:text-4xl font-[Aptumi] text-[#BA8A54] font-bold'>{service.id}</h1>
                            <h2 className='text-xl md:text-2xl text-[#0A3B53] font-[Aptumi] font-bold'>{service.title}</h2>
                            <p className='text-sm md:text-base w-full md:w-4/5 lg:w-3/4'>{service.description}</p>
                            <button onClick={() => navigate("/contact")}
                            className='w-40 md:w-50 h-10 md:h-12 bg-white border border-[#BA8A54] rounded-2xl cursor-pointer text-sm md:text-base'>Enquiry Now</button>
                    </div>
                        ))}
                </div>
            </div>
        </div>
    )
}