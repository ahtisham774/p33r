'use client'
import { motion } from 'framer-motion'
import CategorySVG from './svg/category'
import BudgetSVG from './svg/budget'
import MustHaveSVG from './svg/mustHave'
import Button from './common/button'
import { useEffect, useState } from 'react'

export function FeaturesBanner () {
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
    { title: 'Category', subtitle: 'What Do you Need?', svg: <CategorySVG /> },
    { title: 'Budget', subtitle: 'Select Range', svg: <BudgetSVG /> },
    {
      title: 'Must Have',
      subtitle: 'What matters most?',
      svg: <MustHaveSVG />
    },
    { title: 'Nice to Have', subtitle: 'Pick Your Preferences',svg: <MustHaveSVG /> }
  ]

  return (
    <div className='w-full py-8'>
      <div className='bg-grayish rounded-xl shadow-lg p-4 border'>
        <div className='grid grid-cols-1 md:grid-cols-5 gap-6'>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className='flex items-center space-x-4'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className='flex flex-1 items-center gap-2'>
                <span className='shrink-0'>{feature.svg}</span>
                <div className=' flex flex-col gap-1'>
                  <h3 className='font-bold  text-[#323842] text-sm'>
                    {feature.title}
                  </h3>
                  <p className='text-[#171A1F] font-normal text-sm'>
                    {feature.subtitle}
                  </p>
                </div>
              </div>
              {index < features.length - 1 && (
                <div className='hidden md:block w-px h-12 bg-[#EAECF0]' />
              )}
            </motion.div>
          ))}
         <Button text='Build Your Profile' />
        </div>
      </div>
    </div>
  )
}
