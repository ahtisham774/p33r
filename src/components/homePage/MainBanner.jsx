"use client"
import { motion } from 'framer-motion'
import Button from './button'
import Heading from './heading'
import { useEffect, useState } from 'react'
import mainBanner1 from "../../assets/mainBannerImage1.jpg"
import Image from 'next/image'

export function MainBanner () {
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
    <section className='relative w-full mt-20  overflow-hidden isolate  min-h-[492px]   flex items-center'>
      <div className='absolute inset-0'>
        <Image
          src={mainBanner1}
          alt='Venice building'
          className='w-full h-full object-cover'
        />
        <div className='absolute inset-0 bg-[#171a1f94]' />
      </div>

      <div className='flex w-full h-full items-center p-6 md:p-8 lg:p-12 lg:px-16 bg_overlay'>
        <div className='relative flex items-end gap-5 justify-between flex-wrap w-full'>
          <div className='flex flex-col'>
            <Heading
              text=' Your All-in-One Rental Hub'
              className='text-white'
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className='text-white mb-8 max-w-3xl text-3xl font-normal'
            >
              Tired of juggling tabs and hunting for the best deals? P33R brings
              all your favorite peer-to-peer platforms—like Vrbo, Turo, and
              more—together on one seamless platform. With P33R, you can search,
              compare, and book like the expert you are in just a few clicks.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className='w-fit'
            >
              <Button text='Get Early Access Now' className='px-8' />
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className='flex flex-col items-end flex-1 gap-8 text-white lg:max-w-lg font-normal'
          >
            <div className='flex flex-col w-full items-end gap-3'>
              <div className='text-6xl '>12.550+</div>
              <div className='text-white/80 text-lg'>Listings Available</div>
            </div>
            <div className='flex flex-col gap-3'>
              <div className='text-6xl '>20+</div>
              <div className='text-white/80 text-lg'>Rental Partners</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
