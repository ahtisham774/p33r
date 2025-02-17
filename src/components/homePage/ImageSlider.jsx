
"use client"
import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import PopOverText from '../landingPage/common/popOverText'

import sl1 from '../../assets/sl1.jpg'
import sl2 from '../../assets/sl2.jpg'
import sl3 from '../../assets/sl3.jpg'
import sl4 from '../../assets/sl4.jpg'
import sl5 from '../../assets/sl5.jpg'
import Image from 'next/image'

const cards = [
  
  {
    title: 'Vacation Planners',
    description: 'Find the perfect stay and transportation, stress-free.',
    img: sl4
  },
  {
    title: 'Vacation Planners',
    description: 'Find the perfect stay and transportation, stress-free.',
    img: sl3
  },
  {
    title: 'Vacation Planners',
    description: 'Find the perfect stay and transportation, stress-free.',
    img: sl1
  },
  {
    title: 'Vacation Planners',
    description: 'Find the perfect stay and transportation, stress-free.',
    img: sl2
  },
  {
    title: 'Vacation Planners',
    description: 'Find the perfect stay and transportation, stress-free.',
    img: sl5
  }
]

export default function ImageSlider () {

  const [currentIndex, setCurrentIndex] = useState(
    cards.length > 0 ? Math.floor(cards.length / 2) : 0
  )
  const [parentWidth, setParentWidth] = useState(0)
  const containerRef = useRef(null)

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setParentWidth(containerRef.current.offsetWidth)
      }
    }

    updateWidth()
    window.addEventListener('resize', updateWidth)
    return () => window.removeEventListener('resize', updateWidth)
  }, [])

  const imageWidth = 240
  const gap = 12
  const translateX =
    parentWidth / 2 - (currentIndex * (imageWidth + gap) + imageWidth * 1.15)

  return (
    <div
      className='w-full  flex-col flex items-center justify-center gap-8 relative'
      ref={containerRef}
    >
      <div className='overflow-x-auto w-full hide_scrollbar'>
        <motion.div
          className='flex gap-1 items-center w-full snap-x snap-mandatory relative'
          animate={{ x: translateX }}
          transition={{ duration: 0.5 }}
        >
          {cards.map((card, index) => {
            let scale = 0.6
            if (index === currentIndex) scale = 1
            if (index === currentIndex - 1 || index === currentIndex + 1)
              scale = 0.8
            return (
              <motion.div
                key={index}
                initial={{ scale: 0.6 }}
                animate={{ scale }}
                transition={{ duration: 0.5 }}
                style={{ width: '300px', height: '400px' }}
                onClick={() => setCurrentIndex(index)}
                className='flex relative shrink-0 cursor-pointer snap-center flex-col transition-all rounded-xl overflow-hidden items-center gap-4'
              >
                <Image
                  src={card.img}
                  width={300}
                  height={400}
                  style={{ width: '300px', height: '400px' }}
                  className='  '
                />
                {/* overlay */}
                <div className='absolute top-0 left-0 w-full h-full  flex flex-col items-center justify-center gap-2 p-4'>
                  {(index === currentIndex ||
                    index === currentIndex - 1 ||
                    index === currentIndex + 1) && (
                    <>
                      <PopOverText>
                        <h1 className='text-white text-2xl font-semibold capitalize'>
                          {card.title}
                        </h1>
                      </PopOverText>
                      <PopOverText>
                        <p className='text-white text-3xl text-center font-semibold '>
                          {card.description}
                        </p>
                      </PopOverText>
                    </>
                  )}
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>

      <div className='flex items-center gap-3'>
        {
          // show indicators
          cards.map((card, index) => {
            return (
              <div
                key={index}
                className={`size-2 rounded-full cursor-pointer ${
                  index === currentIndex ? 'bg-[#636AE8]' : 'bg-[#DEE1E6]'
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            )
          })
        }
      </div>
    </div>
  )
}
