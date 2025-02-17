'use client'
import { motion } from "framer-motion"
import SubHeading from "./common/subHeading"
import Button from "./common/button"
import Heading from "./common/heading"
import mainBannerImage from "../../assets/mainBannerImage.jpg"
import Image from "next/image"
import { useState, useEffect } from "react"

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
        <div className="grid grid-cols-1 lg:grid-cols-[40%_58%] gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, }}
            whileInView={{ opacity: 1 }}
            className="rounded-2xl overflow-hidden"
          >
            <Image
              src={mainBannerImage}
              alt="Venice canal"
              className="w-full h-[496px] object-cover"
            />
          </motion.div>

          <motion.div initial={{ opacity: 0, }} className="max-w-lg" whileInView={{ opacity: 1 }}>
           <SubHeading text='Join our group' />
          <Heading text='Help Make P33R the Search Assistant Of Your Dreams'  />
            <p className="text-gray-600 mb-8">
              Join our testing group and get a free 3 month trial of P33R Smart Search.
            </p>

            <form className="flex flex-wrap gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
             <Button text="Register"/>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

