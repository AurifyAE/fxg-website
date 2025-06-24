import React, { useState } from 'react'
import whatsappIcon from "../assets/whatsapp.svg";


export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = "fxggold@gmail.com";
    const subject = " from Website";

    const body = `
    First Name: ${formData.name}
    Email: ${formData.email}
    Phone: ${formData.phone}
    Message: ${formData.message}
    `;

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(formData.name + subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailUrl, '_blank');
    
    // reset form
    setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
    });
};

  
  return (
    <div className="min-h-screen bg-white space-y-5">
        {/* 🌍 Map Section */}
        <div className="w-full h-[250px] sm:h-[300px] md:h-96">
            <iframe
            title="Fxg Jewellery Trading L.L.C"
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3607.927800805921!2d55.29729077538424!3d25.273014077662218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDE2JzIyLjkiTiA1NcKwMTcnNTkuNSJF!5e0!3m2!1sen!2sin!4v1748356998714!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="w-full h-full"
            ></iframe>
        </div>

        <div className='w-full flex justify-center items-center px-4'>
          <button className='w-full sm:w-3/4 md:w-1/2 lg:w-1/3 p-3 sm:p-2 bg-white text-black border border-[#BA8A54] rounded-xl flex justify-center items-center gap-2 text-sm sm:text-base cursor-pointer'
          onClick={() => window.open('https://wa.me/97143368916', '_blank')}
          >
            Connect on WhatsApp
            <img src={whatsappIcon} alt="Whatsapp" className='w-5 h-5 sm:w-6 sm:h-6' />
          </button>
        </div>

        <form onSubmit={handleSubmit} className='w-full sm:w-5/6 md:w-3/4 lg:w-1/2 xl:w-2/5 flex flex-col gap-4 sm:gap-5 mx-auto my-8 sm:my-10 px-4 sm:px-0'>
            <div className='flex flex-col gap-2'>
              <input 
                type="text" 
                id="name" 
                name="name" 
                placeholder='First Name' 
                className='w-full p-3 sm:p-2 border border-gray-300 rounded-md text-sm sm:text-base' 
                onChange={handleChange} 
                value={formData.name}
              />
            </div>
            <div className='w-full flex flex-col sm:flex-row justify-between gap-4 sm:gap-5'>
              <div className='w-full sm:w-1/2 flex flex-col gap-2'>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    placeholder='Phone Number' 
                    className='w-full p-3 sm:p-2 border border-gray-300 rounded-md text-sm sm:text-base' 
                    onChange={handleChange} 
                    value={formData.phone}
                  />
                </div>
                <div className='w-full sm:w-1/2 flex flex-col gap-2'>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    placeholder='Email' 
                    className='w-full p-3 sm:p-2 border border-gray-300 rounded-md text-sm sm:text-base' 
                    onChange={handleChange} 
                    value={formData.email}
                  />
                </div>
            </div>
            <div className='flex flex-col gap-2'>
              <textarea 
                id="message" 
                name="message" 
                placeholder='Message' 
                rows="4"
                className='w-full p-3 sm:p-2 border border-gray-300 rounded-md text-sm sm:text-base resize-none' 
                onChange={handleChange} 
                value={formData.message}
              />
            </div>
            <button 
              type="submit" 
              className='w-full p-3 sm:p-2 bg-black text-white rounded-md text-sm sm:text-base font-medium hover:bg-gray-800 transition-colors duration-200 cursor-pointer'
            >
              Submit Your Enquiry
            </button>
        </form>
    </div>
  )
}
