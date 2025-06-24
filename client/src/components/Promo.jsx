import React, { useState, useRef, useEffect } from 'react'
import promo from '../assets/app-promo.jpg'
import googlePlay from '../assets/googleplay.png'
import appStore from '../assets/appstore.png'
import appView1 from '../assets/app-view1.png'
import appView2 from '../assets/app-view2.png'
import { setupSlideAnimationObserver } from '../utils/intersectionObserver'
import { Link } from 'react-router-dom'

export default function Promo() {
    const [isHovered, setIsHovered] = useState(false);
    const promoRef = useRef(null);

    useEffect(() => {
        const cleanup = setupSlideAnimationObserver(promoRef, {
            threshold: 0.3,
            rootMargin: '0px 0px -100px 0px'
        });

        return cleanup;
    }, []);

    return (
        <div ref={promoRef} className='relative bg-black border-b-2 border-white lg:border-b-0 overflow-x-hidden'>
            {/* Mobile: Promo image as background with app view on top */}
            <div className='md:hidden relative'>
                <img src={promo} alt="promo" className='w-full h-64 object-cover brightness-60' />
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-xs sm:max-w-sm md:max-w-md h-48 flex justify-center items-center gap-4'>
                    <div className='w-1/2 h-full relative animate-slide-from-left'>
                        <img 
                            src={appView1} 
                            alt="promo" 
                            className='w-full h-full object-contain'
                        />
                    </div>
                    <div className='w-1/2 h-full relative animate-slide-from-right'>
                        <img 
                            src={appView2} 
                            alt="promo" 
                            className='w-full h-full object-contain'
                        />
                    </div>
                </div>
            </div>

            {/* Mobile: Content div below promo image */}
            <div className='md:hidden w-full max-w-lg mx-auto font-[Lato] bg-black px-6 sm:px-10 py-8 rounded-lg relative z-10'>
                <h1 className='text-2xl sm:text-3xl text-[#BA8A54] font-black'>How to get started</h1>

                <div className='flex flex-col gap-2'>
                    <h4 className='text-[#BA8A54] text-base sm:text-lg font-bold mt-6'>1. Download Mobile App</h4>
                    <p className='text-white text-sm sm:text-base'>From App store or Google Play Store</p>
                </div>

                <div className='w-full flex flex-col gap-2'>
                    <h4 className='text-[#BA8A54] text-base sm:text-lg font-bold mt-6'>2. Register</h4>
                    <p className='text-white text-sm sm:text-base'>Register your emails id and get the live gold and silver rates, Gold news etc in simple steps.</p>
                </div>

                <div className='flex flex-row gap-3 sm:gap-5 mt-6 cursor-pointer'>
                    <Link to="https://play.google.com/store/apps/details?id=com.aurify.fxg" target="_blank" rel="noopener noreferrer">
                    <img src={googlePlay} alt="googlePlay" className='w-28 h-10' />
                    </Link>
                    <Link to="https://apps.apple.com/ae/app/fxg-gold-rate/id6745623944" target="_blank" rel="noopener noreferrer">
                    <img src={appStore} alt="appStore" className='w-28 h-10' />
                    </Link>
                </div>
            </div>
            
            {/* Desktop: Original layout */}
            <div className='hidden md:block relative overflow-x-hidden'>
                <img src={promo} alt="promo" className='w-full h-full object-cover brightness-60' />
                <div className='absolute w-full h-full top-0 left-0 flex flex-row justify-evenly items-center px-4 lg:px-0'>
                    <div className='w-1/4 h-2/3 relative animate-slide-from-left'>
                        <img 
                            src={appView1} 
                            alt="promo" 
                            className={`w-full h-full object-contain cursor-pointer transition-all duration-500 ease-in-out absolute inset-0 ${
                                isHovered ? 'opacity-0' : 'opacity-100'
                            }`}
                        />
                        <img 
                            src={appView2} 
                            alt="promo" 
                            className={`w-full h-full object-contain cursor-pointer transition-all duration-500 ease-in-out absolute inset-0 ${
                                isHovered ? 'opacity-100' : 'opacity-0'
                            }`}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        />
                    </div>

                    <div className='w-full max-w-sm lg:max-w-2xl h-full lg:h-3/4 font-[Lato] bg-black md:px-8 lg:px-20 py-10 lg:py-15 lg:rounded-lg shadow-xl'>
                        <h1 className='text-3xl lg:text-5xl text-[#BA8A54] font-black leading-tight'>How to get started</h1>

                        <div className='flex flex-col gap-2 lg:gap-4'>
                            <h4 className='text-[#BA8A54] text-lg lg:text-xl font-bold mt-6 lg:mt-10'>1. Download Mobile App</h4>
                            <p className='text-white text-base lg:text-lg leading-relaxed'>From App store or Google Play Store</p>
                        </div>

                        <div className='w-full lg:w-4/5 flex flex-col gap-2 lg:gap-4'>
                            <h4 className='text-[#BA8A54] text-lg lg:text-xl font-bold mt-6 lg:mt-10'>2. Register</h4>
                            <p className='text-white text-base lg:text-lg leading-relaxed'>Register your emails id and get the live gold and silver rates, Gold news etc in simple steps.</p>
                        </div>

                        <div className='flex flex-row gap-4 md:gap-5 mt-8 lg:mt-10'>
                            <Link to="https://play.google.com/store/apps/details?id=com.aurify.fxg" target="_blank" rel="noopener noreferrer">
                            <img src={googlePlay} alt="googlePlay" className='w-32 lg:w-36 h-12 lg:h-14' />
                            </Link>
                            <Link to="https://apps.apple.com/ae/app/fxg-gold-rate/id6745623944" target="_blank" rel="noopener noreferrer">
                            <img src={appStore} alt="appStore" className='w-32 lg:w-36 h-12 lg:h-14' />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            
        </div>
    )
}
