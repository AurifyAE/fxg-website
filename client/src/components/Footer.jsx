import React from 'react'
import rightArrow from '../assets/right-arrow.svg'
import logo from '../assets/logo.svg'
import location from '../assets/location.svg'
import phone from '../assets/phonewhite.svg'
import mail from '../assets/mailwhite.svg'
import { Link, useNavigate } from 'react-router-dom'


export default function Footer() {
    const navigate = useNavigate();
    
    return (
        <div className='flex flex-col items-center bg-black pt-10 gap-5 lato-regular text-white px-4'>
        {/* Top text */}
        <p className='text-sm md:text-base text-center px-2'>
            Get started now, try our product and start saving through trading
        </p>

        {/* Input and button */}
        <div className='relative w-full max-w-md'>
            <input 
            type="text" 
            className='w-full h-14 border-2 rounded-[70px] placeholder:text-white bg-transparent px-5 pr-16 text-white' 
            placeholder='Enter your email here' 
            />
            <button className='bg-[#BA8A54] absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full flex items-center justify-center cursor-pointer'>
            <img src={rightArrow} alt="arrow" />
            </button>
        </div>

        {/* Divider */}
        <div className="w-full h-[2px] bg-white mt-10" />

        {/* Footer middle section */}
        <div className='flex flex-col md:flex-row justify-between lg:justify-evenly items-start w-full gap-10 p-5 md:px-10'>
            {/* Logo */}
            <div className='flex flex-col items-start gap-6 w-full md:w-1/3 lg:w-1/4'>
            <img src={logo} alt="FXG Logo" className='w-32 h-14 md:w-40 md:h-14 lg:w-56 lg:h-14 cursor-pointer' onClick={() => navigate('/')} />
            <p className='text-sm text-white'>
            Your premier destination in the world of gold. With a legacy in the gold industry, we specialize in a spectrum of services that define our commitment to excellence.
            </p>
            </div>
            {/* Company Links */}
            <div className='flex flex-col items-center gap-4'>
            <h2 className='font-bold text-lg text-[#BA8A54]'>Company</h2>
            <ul className='flex flex-col text-sm gap-3 items-start'>
                <li 
                className='cursor-pointer' 
                onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}>
                About Us
                </li>
                <li 
                className='cursor-pointer' 
                onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}>
                Careers
                </li>
                <li 
                className='cursor-pointer' 
                onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}>
                FAQs
                </li>
                <li 
                className='cursor-pointer' 
                onClick={() => document.getElementById('team').scrollIntoView({ behavior: 'smooth' })}>Team</li>
                {/* <Link to="/account"><li className='cursor-pointer'>My Account</li></Link> */}
                <Link to="/contact"><li className='cursor-pointer'>Contact Us</li></Link>
            </ul>
            </div>

            {/* Contact Info */}
            <div className='flex flex-col gap-9 text-sm md:text-base  w-full md:w-1/3 lg:w-1/4'>
                <div className='flex items-start gap-3 cursor-pointer'>
                    <img src={location} alt="Location" className='w-5 h-5 mt-1' />
                    <p>
                    Fxg Jewellery Trading L.L.C, Office No: G-02, <br/>
                    Waqf Saeed Bin Juma Bu Khazmia Bldg, <br/>
                    Al Dhagaya, Gold Souq, Dubai, UAE.
                    </p>
                </div>
                <div className='flex items-start gap-3 cursor-pointer'
                onClick={() => window.open('tel:+97143368916', '_blank')}
                >
                    <img src={phone} alt="Phone" className='w-5 h-5 mt-1' />
                    <p>
                    +971 4336 8916
                    </p>
                </div>
                <div className='flex items-center gap-3 cursor-pointer'
                    onClick={() => window.location.href = 'mailto:fxggold@gmail.com'}>
                    <img src={mail} alt="Mail" className='w-5 h-5' />
                    <p>fxggold@gmail.com</p>
                </div>
            </div>
        </div>

        {/* Bottom line */}
        <div className='w-full bg-black py-5 text-neutral-400 flex flex-col md:flex-row justify-between items-center px-5 md:px-20'>
            <p className='text-sm font-normal text-center md:text-left'>© 2025 Fxg Gold All Rights Reserved</p>
            <div className='flex justify-center md:justify-between items-center gap-6 mt-3 md:mt-0'>
                <p className='text-sm font-normal cursor-pointer' onClick={() => navigate('/privacy-policy')}>Privacy Policy</p>
                <p className='text-sm font-normal cursor-pointer' onClick={() => navigate('/terms-and-conditions')}>Terms of Service</p>
            </div>
        </div>
        </div>

    )
}
