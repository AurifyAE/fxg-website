import React, { useState } from 'react'
import logo from '../assets/logo.svg'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { HiMenu, HiX } from 'react-icons/hi';
import Modal from './Modal'

export default function Header() {
    const navigate = useNavigate();
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const scrollToSection = (sectionId) => {
        // If we're already on the home page, scroll immediately
        if (location.pathname === '/') {
            document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
        } else {
            // If we're on another page, navigate first then scroll after a delay
            navigate('/');
            setTimeout(() => {
                document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }
    };

    const handleMobileMenuClick = (sectionId) => {
        setIsOpen(false);
        // If we're not on home page, navigate first
        if (location.pathname !== '/') {
            navigate('/');
            setTimeout(() => {
                document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
            }, 500);
        } else {
            // If we're on home page, just scroll after menu closes
            setTimeout(() => {
                document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
            }, 400);
        }
    };

    const openModal = () => {
        setIsModalOpen(true);
        setIsOpen(false); // Close mobile menu if open
    };

    const closeModal = () => setIsModalOpen(false);

    return (
        <div className='sticky top-0 left-0 w-full z-50 flex justify-between items-center bg-white text-black py-3 px-5 md:px-15 lg:px-30 shadow-xl font-[Aptumi] font-normal'>
            <Link to="/">
                <img src={logo} alt="Logo" className='w-56 h-14' /> 
            </Link>    

            <button 
            className='hidden lg:block w-40 h-10 bg-[#E65C00] text-white border rounded-2xl shadow-[0_0_8px_#E65C00] border-[#B04E0D] cursor-pointer hover:bg-[#D45400] transition-colors duration-200'
            onClick={openModal}
            >
                Live Rate
            </button>

            <div className='lg:flex justify-evenly items-center w-1/2 gap-3 hidden'>
                <button
                    className='cursor-pointer'
                    onClick={() => navigate('/')}
                >
                    Home
                </button>
                <button 
                    className='cursor-pointer '
                    onClick={() => scrollToSection('products')}
                >
                    Products
                </button>
                <button 
                    className='cursor-pointer '
                    onClick={() => scrollToSection('services')}
                >
                    Services
                </button>
                <Link to="/account">
                    <button className="cursor-pointer">My Account</button>
                </Link>

                <Link to="/contact">
                    <button className="cursor-pointer">Contact Us</button>
                </Link>
            </div>

             {/* Hamburger icon */}
            <button
                className='text-black text-3xl lg:hidden'
                onClick={() => setIsOpen(true)}
            >
                <HiMenu />
            </button>


             {/* Mobile Slide Menu */}
            <div
                className={`fixed top-8 right-0 h-full w-3/4 max-w-xs bg-white text-black z-50 transform transition-transform duration-300 ease-in-out ${
                isOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                <div className='flex justify-end p-4'>
                    <button onClick={() => setIsOpen(false)}>
                        <HiX size={28} />
                    </button>
                </div>
                <div className='flex flex-col items-start px-6 gap-5'>
                    <button onClick={() => handleMobileMenuClick('about')}>About Us</button>
                    <button onClick={() => handleMobileMenuClick('products')}>Products</button>
                    <button onClick={() => handleMobileMenuClick('services')}>Services</button>
                    <Link to="/account"><button onClick={() => setIsOpen(false)}>My Account</button></Link>
                    <Link to="/contact"><button onClick={() => setIsOpen(false)}>Contact Us</button></Link>
                    <button 
                        className='w-32 h-10 bg-[#E65C00] text-white border rounded-[20px] shadow-[0_0_8px_#E65C00] border-[#B04E0D] hover:bg-[#D45400] transition-colors duration-200'
                        onClick={openModal}>Live Rate</button>
                </div>
            </div>
            {/* Backdrop (optional) */}
            {isOpen && (
                <div
                className="fixed inset-0 bg-black bg-opacity-50 z-40"
                onClick={() => setIsOpen(false)}
                />
            )}

            {/* FXG Gold Website Modal */}
            <Modal 
                isOpen={isModalOpen} 
                onClose={closeModal}
                websiteUrl="https://Fxggold.aurify.ae"
            />
        </div>
    )
}
