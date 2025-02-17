"use client"
import { motion } from "framer-motion"
import Button from "./button"
import Heading from "./heading"
import { useEffect, useState } from "react"
import placeholder from "../../assets/placeholder.png"
import Image from "next/image"
export function CallToAction() {
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
    <section className="w-full py-24">
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[40%_50%] gap-16 ">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="rounded-2xl overflow-hidden"
          >
            <Image
              src={placeholder}
              height={496}
              alt="Venice canal"
              className="w-full h-[496px] object-cover"
            />
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} className="flex flex-col justify-between" whileInView={{ opacity: 1, x: 0 }}>
        
          <div>
            <Heading text='Help Make P33R the Search Assistant Of Your Dreams'  />
              <p className="text-[#6E7787] text-lg mb-8">
                Join our testing group and get a free 3 month trial of P33R Smart Search.
              </p>
          </div>

            <form className="flex gap-4 xl:-translate-y-28">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 max-w-[361px] rounded-lg  bg-[#F3F4F6] focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
             <Button text="Register" className="w-[110px] h-[52px]" />
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

