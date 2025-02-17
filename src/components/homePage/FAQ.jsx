"use client"
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import LeftSVG from '../landingPage/svg/left'


const tabs = ['General', 'Policy', 'Pricing', 'About Us']

const faqData = {
  General: [
    {
      question: 'What platforms are included in P33R?',
      answer:
        'We integrate listings from top rental platforms including...nationally'
    },
    {
      question: 'How does P33R save me time?',
      answer:
        'P33R automates many manual processes and provides smart filtering capabilities to streamline your workflow.'
    },
    {
      question: 'Is there a fee to use P33R Smart Search?',
      answer:
        'Yes, there is a small fee based on your usage. Contact our sales team for detailed pricing information.'
    }
  ],
  Policy: [
    {
      question: 'What is your refund policy?',
      answer:
        'We offer a 30-day money-back guarantee for all our subscription plans.'
    }
  ],
  Pricing: [
    {
      question: 'What are your subscription plans?',
      answer:
        'We offer flexible plans starting from $29/month with various features and capabilities.'
    }
  ],
  'About Us': [
    {
      question: 'When was P33R founded?',
      answer:
        'P33R was founded in 2023 with the mission to simplify rental platform management.'
    }
  ]
}

export default function FAQTabs () {
  const [activeTab, setActiveTab] = useState('General')
  const [expandedIndex, setExpandedIndex] = useState(0)

  return (
    <div className='w-full min-h-[70vh] flex flex-col items-center justify-start bg-[#F3F4F6]'>
      <div className='w-full flex flex-col items-center justify-center p-6 md:p-8 max-w-5xl lg:px-16'>
        <div className='overflow-x-auto'>
            <div className='flex space-x-4 mb-8 '>
              {tabs.map(tab => (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab)
                    setExpandedIndex(0)
                  }}
                  className={`relative px-6 py-2 isolate cursor-pointer whitespace-nowrap rounded-full text-sm font-medium transition-colors
                      ${
                        activeTab === tab
                          ? 'text-white'
                          : 'text-gray-600 hover:text-gray-800'
                      }`}
                >
                  {activeTab === tab && (
                    <motion.div
                      layoutId='active-tab'
                      className='absolute inset-0 bg-blueish rounded-full'
                      style={{ zIndex: -1 }}
                      transition={{ type: 'spring', duration: 0.6 }}
                    />
                  )}
                  {tab}
                </button>
              ))}
            </div>
        </div>
        <AnimatePresence mode='wait'>
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className='space-y-4 w-full'
          >
            {faqData[activeTab].map((item, index) => (
              <div
                key={item.question}
                className='border rounded-lg'
                style={{
                  backgroundColor:
                    expandedIndex === index ? '#FFFFFF' : 'transparent'
                }}
              >
                <button
                  onClick={() =>
                    setExpandedIndex(expandedIndex === index ? -1 : index)
                  }
                  className='w-full flex justify-between items-center p-4 text-left'
                >
                  <span className='font-normal text-xl text-[#565E6C]'>
                    {item.question}
                  </span>
                  <motion.span
                    animate={{ rotate: expandedIndex === index ? 90 : 0,  }}
                    className={' shrink-0 cursor-pointer size-7 rounded-full border-2 bg-white flex items-center justify-center ' }
                    style={{
                        color: expandedIndex === index ? '#636AE8' : '#BCC1CA',
                        borderColor: expandedIndex === index ? '#636AE8' : '#BCC1CA'
                    }}
                  >
                    <LeftSVG className="size-4 "/>
                  </motion.span>
                </button>
                <AnimatePresence>
                  {expandedIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className='overflow-hidden'
                    >
                      <div className='p-4 pt-0 text-[#636AE8] text-base font-normal'>
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
