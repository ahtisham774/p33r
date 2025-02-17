'use client'
import { motion } from 'framer-motion'
import SaveTimeSVG from './svg/saveTime'
import IrSVG from './svg/ir'
import BwcSVG from './svg/bwc'
import EcSVG from './svg/ec'
import Button from './common/button'
import WhySpendSVG from './svg/whySpend'
import Heading from './common/heading'
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
      icon: <SaveTimeSVG />
    },
    {
      title: 'Intelligent Results',
      description:
        "Our AI-powered filters ensure you find exactly what's important to you. It predicts what you prefer, the more you use it, just like a dream assistant.",
      icon: <IrSVG />
    },
    {
      title: 'Book With Confidence',
      description:
        'Use our verified results to compare prices, reviews, and the nitty-gritty details across platforms, in real time.',
      icon: <BwcSVG />
    },
    {
      title: 'Expanded Choices',
      description:
        'From stays to vehicles, P33R offers an unmatched amount of options from the top rental providers. We leave no stone unturned.',
      icon: <EcSVG />
    }
  ]

  return (
    <section className='py-24 w-full'>
      <div className='w-full grid grid-cols-1 lg:grid-cols-3 gap-5'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className='flex flex-col gap-4'
        >
          <WhySpendSVG />
          <Heading text='Why Spend Hours Searching When You Can P33R?'  />
          
          <Button text='See How It Works' />
        </motion.div>

        <div className='col-span-2 grid md:grid-cols-2 gap-8'>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className='bg-grayish p-6 flex flex-col justify-between h-[314px] rounded-xl shadow-sm'
            >
              <div className='text-3xl mb-4'>{feature.icon}</div>
              <div className='flex flex-col gap-1'>
                <h3 className='text-xl font-semibold text-[#101828] mb-2'>
                  {feature.title}
                </h3>
                <p className='text-[#475467]'>{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
