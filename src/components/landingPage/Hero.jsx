'use client'
import { motion } from 'framer-motion'
import SubHeading from './common/subHeading'
import Image from 'next/image'
import review from '../../assets/review.png'
import { useEffect, useState } from 'react'


export function Hero () {
     const [isClient, setIsClient] = useState(false)
    
      useEffect(() => {
        if (typeof window !== 'undefined') {
          setIsClient(true)
        }
      }, [])
    
      if (!isClient) {
        return null
      }
    
  return (
    <section className='pt-28 w-full'>
      <div className='w-full  flex items-end gap-10 flex-wrap justify-between'>
        <div className=' lg:max-w-4xl'>
          <SubHeading text='Search Your Dream' />

          <motion.h1
            className='text-4xl md:text-5xl font-semibold mb-6'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            A Smarter Way to Search.
            <br />
            Perfect Matches. <span className='text-blue-600'>Every</span>{' '}
            <span className='text-purple-600'>Time</span>.
          </motion.h1>
          <motion.p
            className='text-secondary lg:max-w-xl text-lg mb-8'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Tired of juggling tabs and hunting for the best deals? P33R brings
            all your favorite peer-to-peer platforms—like Vrbo, Turo, and more
            —together on one seamless platform.
          </motion.p>
        </div>
        <div className='flex  items-end justify-end'>
          <Image src={review} alt='Review' className='' />
        </div>
      </div>
    </section>
  )
}
