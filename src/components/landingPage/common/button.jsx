"use client"
import { useEffect, useState } from "react"


const Button = ({
    text,
    type="button",
    onClick=()=>{},
    className,

}) => {
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
    <button type={type} onClick={onClick} className={
        `btn text-base w-fit whitespace-nowrap font-semibold transition-colors ${className}`
    } >{text}</button>
  )
}

export default Button