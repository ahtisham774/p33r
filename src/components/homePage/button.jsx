"use client"
import { useEffect, useState } from "react"


const Button = ({
  text,
  type="button",
  onClick=()=>{},
  className,
  icon,

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
      `p-2 px-4 rounded-lg text-white bg-blueish text-base justify-center text-center w-fit flex items-center gap-1 whitespace-nowrap font-normal transition-colors ${className}`
  } >{text} {icon} </button>
)
}

export default Button