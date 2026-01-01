import React from 'react'
import { assets, testimonialsData } from '../assets/assets'
import { motion } from 'framer-motion'


const Testimonials = () => {
  return (
    <motion.div
            className="flex flex-col items-center justify-center my-20 p-12"
            initial={{ opacity: 0.2, y: 100 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}   
        >
            <h1 className="text-3xl sm:text-4xl font-semibold mb-2">Customer Testimonials</h1>
            <p className="text-gray-500 mb-12">What Our Users Are Saying</p>

            <div className='flex flex-wrap justify-center gap-8'>
    {testimonialsData.map((testimonial, index) => (
        <div key={index}
            className='bg-white p-8 rounded-xl shadow-lg border border-slate-100 
            w-80 cursor-pointer hover:shadow-2xl hover:-translate-y-2 
            transition-all duration-300'>
            
            <div className='flex flex-col items-center'>
                {/* Image with a subtle ring border */}
                <img 
                    className='rounded-full w-16 h-16 object-cover border-4 border-indigo-50 mb-4' 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                />
                
                <h2 className='text-xl font-bold text-gray-800'>{testimonial.name}</h2>

                <p className='text-gray-400 text-sm mb-4 uppercase tracking-wide'>{testimonial.role}</p>
                
                <div className='flex gap-1 mb-5'>
                    {Array(testimonial.stars).fill().map((item, index) => (
                        <img key={index} className="w-5" src={assets.rating_star} alt="star" />
                    ))}
                </div>
                <p className='text-center text-gray-600 leading-relaxed text-sm'>
                    "{testimonial.text}"
                </p>
            </div>
        </div>
    ))}
</div>

            
    </motion.div>
  )
}

export default Testimonials