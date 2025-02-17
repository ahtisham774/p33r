"use client"
import { motion } from 'framer-motion'
import Heading from './heading'
import Button from './button'
import LeftSVG from '../landingPage/svg/left'
import avatar from '../../assets/avatar.png'
import avatar2 from '../../assets/avatar2.png'
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
      text: 'P33R saved me hours of planning for my last trip. I’ll never go back to searching manually!',
      author: 'Sarah Johnson',
      role: 'Former Tenant',
      color: '#F8CEDB',
      avatar: avatar
    },
    {
      text: 'I love how easy it was to find a rental that matched my needs—it’s like Expedia but better!',
      author: 'Mark Thompson',
      role: 'Former Tenant',
      color: '#CED0F8',
      avatar: avatar2
    },
    {
      text: 'I used to dread planning a trip even putting it off as prices get higher. Now, I know P33R remembers that new appliances and outdoor spaces are what I look for in a rental. ',
      author: 'Emily Chen',
      role: 'Former Tenant',
      color: '#BAF3EB',
      avatar: avatar
    }
    // Add more testimonials
  ]

  return (
    <section className='w-full py-8'>
      <div className='w-full flex flex-col items-center justify-center'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className='text-center mb-16'
        >
          <Heading text='What Early Users Are Saying' />
        </motion.div>

        <div className='overflow-x-auto hide_scrollbar'>
          <div className='grid grid-cols-1 mt-12 md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-8 w-full'>
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className='bg-gray-50 p-8 relative flex-1 flex flex-col justify-between border rounded-2xl'
              >
                <div
                  className='size-24 rounded-full -translate-y-20 shrink-0 overflow-hidden'
                  style={{ backgroundColor: testimonial.color }}
                >
                  <Image
                    width={96}
                    height={96}
                    src={testimonial.avatar || '/placeholder.svg'}
                    alt={testimonial.author}
                    className='max-w-full h-auto object-cover'
                  />
                </div>
                <div className='flex flex-1 -translate-y-14 justify-start '>
                  <p className='text-[#101828] text-base font-normal mb-6'>
                    {testimonial.text}
                  </p>
                </div>

                <div>
                  <div className='font-medium'>{testimonial.author}</div>
                  <div className='text-sm text-gray-500'>
                    {testimonial.role}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <Button text="See More User Stories" icon={<LeftSVG/>} className='mt-16 w-full max-w-[343px]' />
      </div>
    </section>
  )
}
