'use client'
import { motion } from 'framer-motion'
import SubHeading from './common/subHeading'
import Heading from './common/heading'
import avatar from '../../assets/avatar.png'
import avatar1 from '../../assets/avatar2.png'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export function Testimonials () {
     const [isClient, setIsClient] = useState(false)
    
      useEffect(() => {
        if (typeof window !== 'undefined') {
          setIsClient(true)
        }
      }, [])
    
      if (!isClient) {
        return null
      }
    
  const testimonials = [
    {
      text: 'The UK jewellery awards is an event we always look forward to and we are so honoured to be recognised. The UK jewellery awards is an event we always look forward to and we are so honoured.',
      author: 'Leslie Alexander',
      role: 'Properties Seller, Portugal',
      avatar: avatar
    },
    {
      text: 'The UK jewellery awards is an event we always look forward to and we are so honoured to be recognised. The UK jewellery awards is an event we always look forward to and we are so honoured.',
      author: 'Leslie Alexander',
      role: 'Properties Seller, Portugal',
      avatar: avatar1
    }
    // Add more testimonials
  ]

  return (
    <section className='w-full py-8'>
      <div className='w-full'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className='text-center mb-16'
        >
          <SubHeading text='Testimonial' />
          <Heading text='What Early Users Are Saying' />
        </motion.div>

        <div className='overflow-x-auto hide_scrollbar'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_1fr_280px]  gap-8 w-full'>
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className='bg-gray-50 p-8 flex-1 rounded-2xl'
              >
                <p className='text-[#101828] text-base font-normal mb-6'>
                  {testimonial.text}
                </p>
                <div className='flex items-center'>
                  <Image
                    src={testimonial.avatar || '/placeholder.svg'}
                    alt={testimonial.author}
                    className='w-12 h-12 shrink-0 rounded-full mr-4'
                  />
                  <div>
                    <div className='font-medium'>{testimonial.author}</div>
                    <div className='text-sm text-gray-500'>
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className='bg-[#D855A0] p-8  w-[276px] rounded-2xl flex flex-col items-start justify-between  text-white'
            >
              <h3 className='text-2xl font-semibold mb-4 '>
                See 32+ <br /> Reviews
              </h3>
              <button className='text-4xl'>
                <svg
                  width='48'
                  height='48'
                  viewBox='0 0 48 48'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M14.0002 34L34.0002 14M34.0002 14H14.0002M34.0002 14V34'
                    stroke='white'
                    strokeWidth='3'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
