import React from 'react'
import close from '../assets/close.svg'

export default function Modal({ isOpen, onClose, websiteUrl = "http://Fxggold.aurify.ae" }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="relative w-full h-full max-w-7xl max-h-[90vh] m-4 bg-white rounded-2xl overflow-hidden">
                {/* Header */}
                <div className="flex items-center justify-between py-2 px-6 bg-[#BA8A54] text-white">
                    <h2 className="text-lg font-bold">FXG Gold Live Rates</h2>
                    <button
                        onClick={onClose}
                        className="text-white hover:text-gray-200 text-2xl cursor-pointer"
                    >
                        <img src={close} alt="Close" className="w-8 h-8" />
                    </button>
                </div>

                {/* Content */}
                <div className="h-full">
                    <iframe
                        src={websiteUrl}
                        className="w-full h-full border-0"
                        title="FXG Gold Website"
                    />
                </div>
            </div>
        </div>
    )
}
