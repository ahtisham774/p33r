'use client'
import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import RightArrowSVG from './svg/rightArrow'
import LeftArrowSVG from './svg/leftArrow'
import PopOverText from './common/popOverText'
import s1 from '../../assets/s1.jpg'
import sr1 from '../../assets/sr1.jpg'
import sr2 from '../../assets/sr2.jpg'
import sr3 from '../../assets/sr3.jpg'
import sr4 from '../../assets/sr4.jpg'
import Image from 'next/image'

const cards = [
 
  {
    title: 'Vacation Planners',
    description: 'Find the perfect stay and transportation, stress-free.',
    img: sr4
  },
  {
    title: 'Vacation Planners',
    description: 'Find the perfect stay and transportation, stress-free.',
    img: sr1
  },
  {
    title: 'Vacation Planners',
    description: 'Find the perfect stay and transportation, stress-free.',
    img: s1
  },
  {
    title: 'Vacation Planners',
    description: 'Find the perfect stay and transportation, stress-free.',
    img: sr2
  },
  {
    title: 'Vacation Planners',
    description: 'Find the perfect stay and transportation, stress-free.',
    img: sr3
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

  const handleNext = () => {
    setCurrentIndex(prev => (prev < cards.length - 1 ? prev + 1 : prev))
  }

  const handlePrev = () => {
    setCurrentIndex(prev => (prev > 0 ? prev - 1 : prev))
  }

  const imageWidth = 240
  const gap = 12
  const translateX =
    parentWidth / 2 - (currentIndex * (imageWidth + gap) + imageWidth * 1.4)

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
                style={{ width: '300px', height: '370px' }}
                className='flex relative shrink-0 snap-center flex-col transition-all rounded-xl overflow-hidden items-center gap-4'
              >
                <Image
                  src={card.img}
                  alt={card.title}
                  width={300}
                  height={370}
                 
                  className='object-cover h-full'
                />
                {/* overlay */}
                <div
                  className='absolute top-0 left-0 w-full h-full  flex flex-col items-start justify-end gap-2 p-4'
                  style={{
                    background:
                      'linear-gradient(180deg, rgba(0, 0, 0, 0) 20.97%, rgba(0, 0, 0, 0.8) 100%)'
                  }}
                >
                  {index === currentIndex && (
                    <>
                      <PopOverText>
                        <h1 className='text-white text-sm font-semibold uppercase opacity-70'>
                          {card.title}
                        </h1>
                      </PopOverText>
                      <PopOverText>
                        <p className='text-white text-xl font-semibold '>
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
      <div className='flex items-center gap-4'>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handlePrev}
          className='w-12 h-12 flex items-center justify-center text-[#475467] hover:text-white active:text-white focus-within:text-white relative bg-[#f6f7f8] hover:bg-[#d855a0] focus-within:bg-[#d855a0] active:bg-[#d855a0] rounded-[100px] border border-black/0 overflow-hidden cursor-pointer'
        >
          <LeftArrowSVG />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleNext}
          className='w-12 h-12 relative flex items-center justify-center text-[#475467] bg-[#f6f7f8] hover:text-white active:text-white focus-within:text-white hover:bg-[#d855a0] focus-within:bg-[#d855a0] active:bg-[#d855a0] rounded-[100px] border border-black/0 overflow-hidden cursor-pointer'
        >
          <RightArrowSVG />
        </motion.button>
      </div>
    </div>
  )
}
