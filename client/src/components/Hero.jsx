import React, { useRef, useEffect } from 'react'
import whatsapp from "../assets/whatsapp-icon.svg";
import instagram from "../assets/instagram.svg";
import heroVideo from "../assets/heroVideo.mp4";
import { setupSlideAnimationObserver } from '../utils/intersectionObserver';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
    const navigate = useNavigate();
    const heroRef = useRef(null);

    useEffect(() => {
        const cleanup = setupSlideAnimationObserver(heroRef);
        return cleanup;
    }, []);

    return (
        <div ref={heroRef} className='relative w-full min-h-screen font-[Lato] bg-black text-white overflow-x-hidden'>
            {/* Mobile Layout */}
            <div className='lg:hidden'>
                {/* Hero Image */}
                <div className='w-full h-96'>
                    <video 
                    src={heroVideo} 
                    alt="Hero" 
                    className='w-full h-full object-cover opacity-50 lg:opacity-100' 
                    autoPlay 
                    muted 
                    loop 
                    playsInline />
                </div>
                {/* Content Section */}
                <div className='w-full bg-black px-6 py-16 space-y-4'>
                    <h1 className='font-[Aptumi] font-bold text-3xl text-[#D2B492] leading-tight tracking-wider'>WELCOME TO FXG GOLD</h1>
                    <h4 className='text-lg font-bold'>Your Trusted Gold Partner!</h4>
                    <p className='text-sm'>At FXG Gold, we specialize in premium gold bullion trading, responsible gold scrap refining, and wholesale gold distribution. With a legacy of excellence and integrity, we connect you to the finest quality gold products while ensuring sustainability and reliability.</p>
                    <button onClick={() => navigate("/contact")}
                    className='w-full bg-black text-white font-[Aptumi] px-4 py-2 rounded-2xl border border-[#BA8A54] cursor-pointer'>Enquiry Now</button>
                </div>
            </div>

            {/* Desktop/Tablet Layout */}
            <div className='hidden lg:block relative w-full h-screen'>
                <video 
                    src={heroVideo} 
                    alt="Hero" 
                    className='w-full h-full object-cover absolute top-0 -right-[25%] animate-slide-in' 
                    autoPlay 
                    muted 
                    loop 
                    playsInline />
                <div className='w-full md:w-2/4 lg:w-1/2 h-1/2 md:h-full absolute bottom-0 md:top-0 left-0 bg-black/60 backdrop-blur-lg'>
                    <div className='flex flex-col items-start justify-center h-full px-6 md:px-12 lg:px-30 space-y-4 md:space-y-6'>
                        <h1 className='font-[Aptumi] font-bold text-3xl md:text-4xl lg:text-6xl text-[#D2B492] leading-tight tracking-wider'>WELCOME TO FXG GOLD</h1>
                        <h4 className='text-lg lg:text-xl font-bold'>Your Trusted Gold Partner!</h4>
                        <p className='text-sm md:text-base lg:text-lg'>At FXG Gold, we specialize in premium gold bullion trading, responsible gold scrap refining, and wholesale gold distribution. With a legacy of excellence and integrity, we connect you to the finest quality gold products while ensuring sustainability and reliability.</p>
                        <button onClick={() => navigate("/contact")}
                        className='w-full sm:w-2/3 md:w-1/2 lg:w-1/3 bg-black md:text-sm lg:text-base text-white font-[Aptumi] px-4 py-2 rounded-2xl border border-[#BA8A54] cursor-pointer'>Enquiry Now</button>
                    </div>
                </div>
                <div className='w-80 hidden md:flex absolute top-90 -left-25 rotate-90 space-x-12'>
                    <button 
                    onClick={() => window.open('https://www.instagram.com/', '_blank')}
                    className='w-1/2 underline flex items-end gap-3 tracking-widest cursor-pointer'>
                        Follow us
                        <img src={instagram} alt="instagram" className='w-5 h-5 -rotate-90' />
                    </button>
                    <button 
                    onClick={() => window.open('https://wa.me/971502746916', '_blank')}
                    className='w-1/2 underline flex items-end gap-3 tracking-widest cursor-pointer'>
                        Connect us
                        <img src={whatsapp} alt="whatsapp" className='w-5 h-5 -rotate-90' />
                    </button>
                </div>
            </div>

            {/* Mobile social buttons */}
            <div className='lg:hidden absolute bottom-0 left-6 md:left-10 flex space-x-4'>
                <button 
                onClick={() => window.open('https://www.instagram.com/', '_blank')}
                className='bg-black/30 backdrop-blur-lg p-3 rounded-2xl flex items-center gap-3'>
                    <p className='text-sm text-[#c0b5a9]'>Follow us</p>

                    <img src={instagram} alt="instagram" className='w-4 h-4 opacity-70' />
                </button>
                <button 
                onClick={() => window.open('https://wa.me/971502746916', '_blank')}
                className='bg-black/30 backdrop-blur-lg p-3 rounded-2xl flex items-center gap-3'>
                    <p className='text-sm text-[#c0b5a9]'>Connect us</p>
                    <img src={whatsapp} alt="whatsapp" className='w-4 h-4 opacity-70' />
                </button>
            </div>
        </div>
    )
}
