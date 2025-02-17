"use client"
import { useEffect, useState } from 'react'

const IsClient = ({children}) => {
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
    children
  )
}

export default IsClient