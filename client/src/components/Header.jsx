import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
 
const Header = () => {
    const galleryImages = [
        assets.sample_img_1,
        assets.sample_img_2,
        assets.sample_img_3,
        assets.sample_img_4,
        assets.sample_img_5,
        assets.sample_img_6
    ];

    const { user, setShowLogin } = useContext(AppContext)

    const navigate = useNavigate()

    const onClickHandler = () => {
        if (user) {
            navigate('/result')
        } else {
            setShowLogin(true)
        }
    }

    return (
        <motion.div
            initial={{opacity:0.2, y:100}}
            transition={{duration:1}}
            whileInView={{opacity:1, y:0}}
            viewport={{ once: true}}
            className='flex flex-col justify-center items-center text-center my-20'>
            <motion.div 
                initial={{opacity:0, y:-20}}
                animate={{opacity:1, y:0}}
                transition={{delay:0.2, duration:0.8}}
                className='text-stone-500 inline-flex items-center gap-2 bg-white px-6 py-1 rounded-full border border-neutral-500'>
                <p>Best text to image generator</p>
                <img src={assets.star_icon} alt="" />
            </motion.div>

            <h1 className='text-center mx-auto mt-10 text-4xl max-w-[300px] sm:text-7xl sm:max-w-[590px]'>
                Turn text to <span className='text-blue-600'>image</span>, in seconds.
            </h1>

            <p className='text-center max-w-xl mx-auto mt-5'>
                Bring your creative ideas to life with AI. Simply describe your vision, and watch stunning visual art appear in moments!
            </p>

            <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onHoverStart={() => console.log('hover started!')}
                className='sm:text-lg text-white bg-black w-auto mt-8 px-12 py-2.5 flex items-center gap-2 rounded-full'
                onClick={onClickHandler}>
                Generate Images <img className='h-6' src={assets.star_group} alt="" />
            </motion.button>

            <div className='flex flex-wrap justify-center mt-16 gap-3'>
                {galleryImages.map((image, index) => (
                    <img
                        key={index}
                        src={image}                        
                        alt={`Gallery image ${index + 1}`} 
                        width={70}
                        className='rounded hover:scale-105 transition-all duration-300 cursor-pointer max-sm:w-10'
                    />
                ))}
            </div>
            <p className='mt-2 text-neutral-600'>Generated images from Imagify</p>

        </motion.div>
    )
}

export default Header
