"use client"
import { motion } from 'framer-motion'

import Button from './button'
import Heading from './heading'
import StSVG from '../landingPage/svg/st'
import IrsSVG from '../landingPage/svg/irs'
import BookSVG from '../landingPage/svg/book'
import ExpandSVG from '../landingPage/svg/expand'
import LeftSVG from '../landingPage/svg/left'
import { useEffect, useState } from 'react'

export function FeaturesGrid () {
    const [isClient, setIsClient] = useState(false)
  
    useEffect(() => {
      if (typeof window !== 'undefined') {
        setIsClient(true)
      }
    }, [])
  
    if (!isClient) {
      return null
    }
  
  const features = [
    {
      title: 'Save Time',
      description:
        'No more bouncing between websites—P33R aggregates all the listings in one place.',
      icon: <StSVG />
    },
    {
      title: 'Intelligent Results',
      description:
        "Our AI-powered filters ensure you find exactly what's important to you. It predicts what you prefer, the more you use it, just like a dream assistant.",
      icon: <IrsSVG />
    },
    {
      title: 'Book With Confidence',
      description:
        'Use our verified results to compare prices, reviews, and the nitty-gritty details across platforms, in real time.',
      icon: <BookSVG />
    },
    {
      title: 'Expanded Choices',
      description:
        'From stays to vehicles, P33R offers an unmatched amount of options from the top rental providers. We leave no stone unturned.',
      icon: <ExpandSVG />
    }
  ]

  return (
    <section className='py-10 w-full'>
      <div className='flex items-center justify-center mb-2 w-full'>
        <div className='w-[1px] h-[63px] bg-[#636AE8] rounded-full ' />
      </div>
      <div className='w-full flex flex-col items-center gap-5'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className='flex max-w-4xl text-center'
        >
          <Heading
            text='Why Spend Hours Searching When You Can P33R?'
            className='leading-tight'
          />
        </motion.div>

        <div className='col-span-2 grid md:grid-cols-2 gap-8'>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className=' p-6 flex gap-5 items-start lg:max-w-sm'
            >
              <div className='text-3xl mb-4'>{feature.icon}</div>
              <div className='flex flex-col gap-1'>
                <h3 className='text-3xl font-normal text-[#101828] mb-2'>
                  {feature.title}
                </h3>
                <p className='text-sm'>{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <Button text='See How It Works' icon={<LeftSVG />} className='px-10' />
      </div>
    </section>
  )
}
