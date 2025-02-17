'use client'

import { motion } from 'framer-motion'
import review1 from '../../assets/review1.png'
import Image from 'next/image'
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
    <section className='pt-48 w-full'>
      <div className='w-full  flex items-end gap-10 flex-wrap justify-between'>
        <div className=' lg:max-w-4xl'>
          <motion.h1
            className='text-6xl font-semibold mb-6'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            A Smarter Way to Search.
            <br />
            <h2 className='text-5xl font-normal leading-tight'>
              Perfect Matches. Every Time.
            </h2>
          </motion.h1>
        </div>
        <div className='flex  items-end justify-end'>
          <Image src={review1} alt='Review' className='' />
        </div>
      </div>
    </section>
  )
}
