import React, { useEffect, useRef } from 'react'
import highlightImage from '../assets/highlightImg.jpg'
import tick from '../assets/tick.svg'
import fxgLogo from '../assets/fxglogo.svg'
import slide1 from '../assets/slide1.png'
import slide2 from '../assets/slide2.png'
import slide3 from '../assets/slide3.png'
import slide4 from '../assets/slide4.png'
import { setupSlideAnimationObserver } from '../utils/intersectionObserver'

const highlights = [
    {
        title: "Expert Curation",
        description: "Premium gold, handpicked by industry professionals.",
    },
    {
        title: "Seamless Technology",
        description: "Trade effortlessly with our advanced platform.",
    },
    {
        title: "Knowledge & Insights",
        description: "Stay informed with expert market analysis.",
    },
    {
        title: "Tailored Solutions",
        description: "Tailored Solutions Personalized investment strategies for every client.",
    },
    {
        title: "Ethical Sourcing",
        description: "Responsibly sourced gold from trusted suppliers.",
    },
    {
        title: "Beyond Gold",
        description: "Explore silver, platinum, and palladium investments.",
    }
]

export default function Highlights() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const cleanup = setupSlideAnimationObserver(sectionRef, {
            threshold: 0.3,
            rootMargin: '0px 0px -100px 0px'
        });

        return cleanup;
    }, []);
    
    return (
        <div>
            <div className='flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-10 px-4 md:px-10 lg:px-36 py-16 md:py-24 lg:py-28 overflow-x-hidden'>
                <div className='w-full lg:w-1/3 h-full lg:h-[200px] flex flex-col items-center justify-center gap-3 bg-[#BA8A54] lg:hover:bg-white text-white lg:hover:text-black px-10 py-10 rounded-2xl group cursor-pointer transition-all duration-300 shadow-2xl'>
                    <h1 className='font-[Aptumi] text-3xl md:text-4xl pb-5 lg:pb-0 group-hover:hidden'>Our Mission</h1>
                    <p className='text-sm md:text-base opacity-100 lg:hidden lg:group-hover:block transition-opacity duration-300'>Our mission at FXG Gold is to elevate gold trading with excellence and integrity. We are committed to delivering unmatched services, fostering trust, and setting new benchmarks in quality and customer satisfaction.</p>
                </div>
                <img src={fxgLogo} alt="logo" className='max-w-full h-auto rounded-xl' />

                <div className='w-full lg:w-1/3 h-full lg:h-[200px] flex flex-col items-center justify-center gap-3 bg-[#BA8A54] lg:hover:bg-white text-white lg:hover:text-black px-10 py-10 rounded-2xl group cursor-pointer transition-all duration-300 shadow-2xl'>
                    <h1 className='font-[Aptumi] text-3xl md:text-4xl pb-5 lg:pb-0 group-hover:hidden'>Our Vision</h1>
                    <p className='text-sm md:text-base opacity-100 lg:hidden lg:group-hover:block transition-opacity duration-300'>Our vision at FXG Gold is to revolutionize gold trading by blending tradition with innovation. We strive to be the trusted partner for seamless, transparent, and expert-driven gold transactions.</p>
                </div>
            </div>

            <div ref={sectionRef} className='relative flex flex-col lg:flex-row items-center justify-center gap-10 px-4 md:px-10 lg:px-36 py-16 md:py-24 lg:pb-28 lg:pt-10'>
                {/* Text section */}
                <div className='w-full lg:w-1/2 animate-slide-from-left'>
                    <h1 className='font-[Aptumi] text-3xl md:text-4xl lg:text-5xl font-bold pb-5'>Why Choose Us</h1>
                    <div className='flex flex-col items-start justify-center gap-2'>
                    {highlights.map((highlight, index) => (
                        <div key={index} className='flex items-start gap-3 py-4'>
                        <img src={tick} alt="tick icon" className='w-5 h-5 mt-1' />
                        <div className='flex flex-col'>
                            <h4 className='text-base md:text-lg font-semibold'>{highlight.title}</h4>
                            <p className='text-sm md:text-base'>{highlight.description}</p>
                        </div>
                        </div>
                    ))}
                    </div>
                </div>

                {/* Image section */}
                <div className='w-full lg:w-1/2 flex justify-center'>
                    <img src={highlightImage} alt="highlights image" className='max-w-full h-auto rounded-xl' />
                </div>

                <img src={slide1} alt="slide1" className='absolute bottom-115 -right-1 md:bottom-160 lg:top-20 md:right-1/3 w-xs h-24 object-cover animate-slide-from-top' />
                <img src={slide2} alt="slide2" className='absolute bottom-60 right-10 md:bottom-90 lg:top-1/2 md:right-20 lg:right-30 w-40 h-20 object-cover animate-slide-from-right' />
                <img src={slide3} alt="slide3" className='absolute bottom-10 md:bottom-15 lg:bottom-25 right-1/3 w-xs h-20 object-cover animate-slide-from-bottom' />
                <img src={slide4} alt="slide4" className='hidden md:block absolute bottom-120 md:bottom-80 lg:top-1/2 md:left-20 lg:left-[52%]  w-11 h-11 object-cover animate-fade-in' />
            </div>
        </div>
    )
}
