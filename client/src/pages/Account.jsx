import React from 'react'
import { useNavigate } from "react-router-dom";
import accountImg from "../assets/accountImg.jpg";

export default function Account() {
    const navigate = useNavigate();
    return (
        <div className='relative font-[Lato] flex flex-col items-start justify-center px-4 sm:px-8 md:px-12 lg:px-20 py-6 md:py-10 lg:py-20 min-h-screen'>
            {/* Background image - responsive positioning */}
            <div className='absolute top-0  lg:top-60 right-0 lg:right-15 w-full lg:w-5/12 h-full lg:h-6/12 rounded-sm overflow-hidden opacity-20 sm:opacity-30 md:opacity-40 lg:opacity-100'>
                <img src={accountImg} alt="Account Opening" className='w-full h-full object-cover' />
            </div>
            
            {/* Main content */}
            <div className='relative z-10 w-full max-w-6xl'>
                <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-[Aptumi] font-bold mb-4 md:mb-5 px-2 sm:px-4 leading-tight'>
                    FXG Gold - Account Opening Criteria
                </h1>
                
                <ol className="w-full text-black list-decimal py-8 sm:py-10 md:py-12 lg:py-15 px-4 sm:px-6 md:px-8 lg:px-10 space-y-6 sm:space-y-8 md:space-y-10 max-w-5xl text-sm sm:text-base leading-relaxed">
                    <li>
                    <strong className='font-bold text-base sm:text-lg'>Proof of Legal Existence</strong>
                    <ul className="list-disc pl-4 sm:pl-5 mt-2 space-y-1">
                        <li>Valid Trade License (minimum 3 months before expiry)</li>
                        <li>Memorandum & Articles of Association (if applicable)</li>
                        <li>Shareholder Certificate</li>
                        <li>Tax Registration Certificate</li>
                    </ul>
                    </li>

                    <li>
                    <strong className='font-bold text-base sm:text-lg'>Proof of Registered or Principal Address</strong>
                    <ul className="list-disc pl-4 sm:pl-5 mt-2 space-y-1">
                        <li>Latest Utility Bill or Tenancy Contract (matching the registered address on the license)</li>
                        <li>Board Resolution stating intent and purpose of account opening</li>
                    </ul>
                    </li>

                    <li>
                    <strong className='font-bold text-base sm:text-lg'>Applicant Company Details</strong>
                    <ul className="list-disc pl-4 sm:pl-5 mt-2 space-y-1">
                        <li>Office Telephone & Fax Numbers</li>
                        <li>Official Email ID</li>
                        <li>Website URL</li>
                    </ul>
                    </li>

                    <li>
                    <strong className='font-bold text-base sm:text-lg'>Identification of Authorised Persons</strong>
                    <ul className="list-disc pl-4 sm:pl-5 mt-2 space-y-1">
                        <li>Passport Copy & Visa Page for:</li>
                        <ul className="list-[circle] pl-4 sm:pl-5 mt-1 space-y-1">
                        <li>Beneficial Owners & Shareholders</li>
                        <li>Individuals operating the account</li>
                        </ul>
                    </ul>
                    </li>

                    <li>
                    <strong className='font-bold text-base sm:text-lg'>Identification of Authorised Signatories (if different from above)</strong>
                    <ul className="list-disc pl-4 sm:pl-5 mt-2 space-y-1">
                        <li>Full Name, Designation, Contact Details & Email ID</li>
                        <li>Supporting document with Specimen Signature</li>
                    </ul>
                    </li>

                    <li>
                    <strong className='font-bold text-base sm:text-lg'>Identification of Individuals Authorised to Act on Behalf of the Company (if different from above)</strong>
                    <ul className="list-disc pl-4 sm:pl-5 mt-2 space-y-1">
                        <li>Power of Attorney Holders</li>
                        <li>Third-Party Mandate Holders</li>
                    </ul>
                    </li>

                    <li>
                    <strong className='font-bold text-base sm:text-lg'>Bank Reference</strong>
                    <ul className="list-disc pl-4 sm:pl-5 mt-2 space-y-1">
                        <li>Reference letter from a bank where the company has held an account for at least two years</li>
                    </ul>
                    </li>
                    
                    <div className="pt-4 sm:pt-5 flex justify-center sm:justify-start">
                        <button 
                            className='w-full sm:w-64 h-12 bg-black rounded-xl text-white cursor-pointer hover:bg-gray-800 transition-colors duration-200 text-sm sm:text-base font-medium'
                            onClick={() => navigate("/contact")}
                        >
                            Open an Account Now
                        </button>
                    </div>
                </ol>
            </div>
        </div>
    )
}
