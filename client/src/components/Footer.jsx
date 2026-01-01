import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <motion.div 
        initial={{ opacity: 0, y: 20 }}     // Start invisible and slightly lower
    whileInView={{ opacity: 1, y: 0 }}  // Fade in and slide up to position
    transition={{ duration: 0.8 }}      // Smooth transition over 0.8 seconds
    viewport={{ once: true }}
        className='flex items-center justify-between gap-4 py-3 mt-20 border-t border-gray-800'>
        <img src={assets.logo_icon} alt="" width={20}/>
        <p className='p-1 font-bold'>Imagify</p>
        <p className='flex-1 border-l border-gray-400 pl-4
        text-sm text-gray-500 max-sm:hidden'>Copyright @Lovish1201 | All rights reserved</p>
        <div className='flex gap-2.5'>
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.instagram_icon} alt="" />
        </div>
    </motion.div>
  )
}

export default Footer