import React from 'react'

export default function PrivacyPolicy() {
    return (
        <div className='flex flex-col items-center justify-center bg-white text-black pb-20'>
            <div className='px-4 md:px-10 lg:px-36 py-16 md:py-24 lg:py-28'>
                <h1 className='text-3xl md:text-4xl lg:text-5xl font-[Aptumi] text-[#BA8A54] font-bold pb-10'>Privacy Policy</h1>
                
                <div className='text-sm md:text-base lg:text-lg text-left space-y-6'>
                    <p>
                        FXG Gold places the highest priority on safeguarding your personal data. We implement robust technical and administrative protocols to ensure your information remains secure and protected from inappropriate access.
                    </p>

                    <div>
                        <h2 className='text-xl font-bold text-[#BA8A54] mb-3'>2. Data We Collect</h2>
                        <ul className='list-disc list-inside space-y-2 ml-4'>
                            <li>Info you voluntarily share with us (e.g., name, contact details).</li>
                            <li>Automatically gathered data during your interaction with our site (e.g., IP address, browser details, pages visited).</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className='text-xl font-bold text-[#BA8A54] mb-3'>3. How We Use Your Info</h2>
                        <ul className='list-disc list-inside space-y-2 ml-4'>
                            <li>To manage and fulfill your orders, process payments, and provide customer service.</li>
                            <li>To enhance your experience, personalize content, and present relevant offers.</li>
                            <li>To analyze usage patterns, improve our website performance, and support marketing efforts.</li>
                            <li>To satisfy regulatory duty, internal policies, and legal obligations.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className='text-xl font-bold text-[#BA8A54] mb-3'>4. Data Sharing & Disclosure</h2>
                        <p className='mb-3'>We may disclose your personal data to:</p>
                        <ul className='list-disc list-inside space-y-2 ml-4'>
                            <li>Trusted third-party partners needed for processing orders, shipping, or marketing, all of which adhere to strict confidentiality standards.</li>
                            <li>Legal authorities or law enforcement when required by statute or to protect FXG gold's legal rights.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className='text-xl font-bold text-[#BA8A54] mb-3'>5. Cookies & Tracking Technologies</h2>
                        <p>
                            Our site uses cookies, web beacons, and similar tools to recognise you, remember your preferences, analyse traffic, and display targeted advertising. You have the option to adjust your browser settings to refuse cookies; however, this may affect certain site functionalities.
                        </p>
                    </div>

                    <div>
                        <h2 className='text-xl font-bold text-[#BA8A54] mb-3'>6. Data Retention</h2>
                        <p>
                            We retain your personal information only as long as it is necessary for the purposes specified here or as required by law. When it's no longer needed, we securely delete or anonymize it.
                        </p>
                    </div>

                    <div>
                        <h2 className='text-xl font-bold text-[#BA8A54] mb-3'>7. Security Measures</h2>
                        <p>
                            FXG Gold applies industry-standard security practices, including encryption and access controls, to protect your data from loss, misuse, or unauthorized access. While we strive for highest security, no online system is entirely impervious.
                        </p>
                    </div>

                    <div>
                        <h2 className='text-xl font-bold text-[#BA8A54] mb-3'>8. Children's Data</h2>
                        <p>
                            Our services are not tailored for children under 13. We do not knowingly collect personal information from minors. If we learn that information for a child under 13 has been provided, we will promptly delete it.
                        </p>
                    </div>

                    <div>
                        <h2 className='text-xl font-bold text-[#BA8A54] mb-3'>9. International Data Transfers</h2>
                        <p>
                            From time to time, we may transfer your data to recipients in countries with different data protection laws. When we do, we use legal safeguards (such as standard contractual clauses) to ensure your data stays protected.
                        </p>
                    </div>

                    <div>
                        <h2 className='text-xl font-bold text-[#BA8A54] mb-3'>10. Your Rights</h2>
                        <p className='mb-3'>Depending on your jurisdiction, you may have the ability to:</p>
                        <ul className='list-disc list-inside space-y-2 ml-4'>
                            <li>Access, correct, or delete your personal data.</li>
                            <li>Restrict the processing of your data or object to processing.</li>
                            <li>Receive your data in a structured format (data portability).</li>
                            <li>Withdraw consent when processing is based on it.</li>
                        </ul>
                        <p className='mt-3'>
                            To exercise these rights or request more information, please contact us via the details below.
                        </p>
                    </div>

                    <div>
                        <h2 className='text-xl font-bold text-[#BA8A54] mb-3'>11. Changes to This Policy</h2>
                        <p>
                            We may update this Privacy Policy occasionally. When changes occur, we'll post the revised version on our website with a new effective date. Continued usage of our site after updates signifies your acceptance.
                        </p>
                    </div>

                    <div>
                        <h2 className='text-xl font-bold text-[#BA8A54] mb-3'>12. Contact Information</h2>
                        <p className='mb-3'>
                            If you have questions, concerns, or would like to exercise your data rights, please contact us at:
                        </p>
                        <div className='ml-4 space-y-2'>
                            <p><strong>Email:</strong> fxggold@gmail.com</p>
                            <p><strong>Address:</strong></p>
                            <div className='ml-4'>
                                <p>FXG Jewellery Trading L.L.C,</p>
                                <p>Office No: G-02,</p>
                                <p>Waqf Saeed Bin Juma Bu Khazmia Bldg,</p>
                                <p>Al Dhagaya, Gold Souq, Dubai, UAE.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
