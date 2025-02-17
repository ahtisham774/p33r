'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import SubHeading from './common/subHeading'
import Heading from './common/heading'

const FaqItem = ({ faq, index, openIndex, setOpenIndex }) => {
  const isOpen = openIndex === index
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
    <motion.div
      className='border border-gray-200 rounded-lg bg-white'
      initial={false}
    >
      <button
        onClick={() => setOpenIndex(isOpen ? null : index)}
        className='w-full px-6 py-4 text-left flex justify-between cursor-pointer items-center'
      >
        <span className='font-medium'>{faq.question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          className='text-gray-400 shrink-0 cursor-pointer size-5 rounded-full border-2 flex items-center justify-center border-gray-400'
        >
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            {isOpen ? (
              <path
                d='M5 12h14'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
              />
            ) : (
              <path
                d='M12 5v14M5 12h14'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
              />
            )}
          </svg>
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className='overflow-hidden'
          >
            <div className='px-6 pb-4 text-gray-600'>{faq.answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export function FAQ () {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: 'What platforms are included in P33R?',
      answer: 'We integrate listings from top rental platforms nationally.'
    },
    {
      question: 'How does P33R save me time?',
      answer:
        'By aggregating multiple platforms into one seamless search experience.'
    },
    {
      question: 'Is there a fee to use P33R Smart Search?',
      answer: 'Contact us for pricing information.'
    },
    {
      question: 'How does billing work?',
      answer: 'We offer flexible billing options based on your needs.'
    },
    {
      question: 'How do I change my account email?',
      answer: 'You can update your email in account settings.'
    }
  ]

  return (
    <section className='py-16 w-full'>
      <div className='w-full'>
        <div className='w-full grid grid-cols-1 sm:grid-cols-[38%_60%] gap-8'>
          <div className='flex flex-col items-start '>
            <SubHeading text='Support' />
            <Heading text='Frequently asked questions' />
           
          </div>
          <div className='space-y-4'>
            {faqs.map((faq, index) => (
              <FaqItem
                key={index}
                faq={faq}
                index={index}
                openIndex={openIndex}
                setOpenIndex={setOpenIndex}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
