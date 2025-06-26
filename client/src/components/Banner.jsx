import React from 'react'
import phone from '../assets/phone.svg'
import mail from '../assets/mail.svg'


export default function Banner() {
    return (
        <div className='h-8 md:h-12 bg-black flex items-center justify-end gap-5 px-6 md:px-14'>
            <div 
            className='h-5 flex items-center gap-3 cursor-pointer'
            onClick={() => window.location.href = 'tel:+97143368916'}>
                <img src={phone} alt="phone" className='w-4 md:w-5' />
                <p className='text-xs md:text-base text-white'>+971 4336 8916</p>
            </div>
            <div 
            className='h-5 flex items-center gap-3 cursor-pointer'
            onClick={() => window.location.href = 'mailto:Fxggold@gmail.com'}>
                <img src={mail} alt="mail" className='w-4 md:w-5' />
                <p  className='text-xs md:text-base text-white'>Fxggold@gmail.com</p>
            </div>
        </div>
    )
}
