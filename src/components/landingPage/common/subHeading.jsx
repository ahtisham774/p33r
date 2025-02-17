"use client"
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const SubHeading = ({ text }) => {
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
    <motion.span
      className='inline-block text-base font-semibold text-primary mb-4'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {text}
    </motion.span>
  )
}

export default SubHeading
