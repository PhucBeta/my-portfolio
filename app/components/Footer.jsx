import React from 'react'
import Image from 'next/image'
import { assets } from '../../assets/assets'
import { translations } from '../../assets/translations'

const Footer = ({ isDarkMode, language }) => {
    const t = translations[language].footer;
    return (
        <div className='mt-20'>
            <div className='text-center'>
                <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt='' className='w-36 mx-auto mb-2' />

                <div className='w-max flex items-center gap-2 mx-auto'>
                    <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='' className='w-6' />
                    {t.email}
                </div>
            </div>

            <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
                <p>
                    {t.copyright}
                </p>
                <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                    <li><a target='_blank' href="https://www.facebook.com/Ciantic">FaceBook</a></li>
                    <li><a target='_blank' href="https://www.linkedin.com/in/ph%C3%BAc-th%C3%A0nh-8482403a5/">LinkedIn</a></li>
                    <li><a target='_blank' href="https://github.com/PhucBeta">Github</a></li>
                </ul>
            </div>

        </div>
    )
}

export default Footer