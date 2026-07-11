"use client"
import React from 'react'
import Image from 'next/image'
import { assets } from '../../assets/assets'
import { useState } from 'react'
import { translations } from '../../assets/translations'
import { motion } from "motion/react"

const Contact = ({ isDarkMode, language }) => {
    const t = translations[language].contact;

    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult(t.sendingMsg);
        const formData = new FormData(event.target);

        formData.append("access_key", "eeb857cd-5daf-45d4-adea-bfaae3ca625c");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult(t.successMsg);
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <motion.div
            id='contact'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className='w-full px-[12%] py-20 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none'>
            <motion.h4
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className='text-center mb-2 text-lg font-ovo'>{t.connect}</motion.h4>
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className='text-5xl text-center font-ovo' > {t.title}</motion.h2 >

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo'>
                {t.description}
            </motion.p>

            <form onSubmit={onSubmit} className='max-w-2xl mx-auto'>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0 }}
                    className='grid grid-cols-auto gap-6 mt-10 mb-8'>

                    <motion.input type="text" placeholder={t.namePlaceholder} required
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90'
                        name='name' />

                    <motion.input type="email" placeholder={t.emailPlaceholder} required
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90'
                        name='email' />

                </motion.div>
                <motion.textarea rows='4' placeholder={t.messagePlaceholder} required
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90 mb-6'
                    name='message'></motion.textarea>
                <motion.button type='submit'
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.3 }}
                    className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover'>{t.submitBtn}<Image src={assets.right_arrow_white} alt='' className='w-4' /></motion.button>
                <p className='mt-4'>{result}</p>
            </form>
        </motion.div>
    )
}

export default Contact