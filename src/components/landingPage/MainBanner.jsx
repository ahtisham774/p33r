'use client'
import { motion } from "framer-motion"
import Button from "./common/button"
import SubHeading from "./common/subHeading"
import Heading from "./common/heading"
import mainBanner from "../../assets/mainBannerImage.jpg"
import Image from "next/image"
import { useEffect, useState } from "react"

export function MainBanner() {
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
    <section className="relative w-full mt-20 rounded-xl overflow-hidden isolate  min-h-[492px]   flex items-center">
      <div className="absolute inset-0">
        <Image
          src={mainBanner}
          alt="Venice building"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg_overlay" />
      </div>

      <div className="flex w-full h-full items-center p-6 lg:p-12 bg_overlay">
          <div className="relative flex items-end gap-5 justify-between flex-wrap w-full">
            <div className="flex flex-col">
            <SubHeading text='Get Started' />
            <Heading text=' Your All-in-One Rental Hub' className="text-white" />
               
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-white mb-8 max-w-xl text-xl font-normal"
                >
                  Tired of juggling tabs and hunting for the best deals? P33R brings all your favorite peer-to-peer
                  platforms—like Vrbo, Turo, and more—together on one seamless platform. With P33R, you can search, compare, and
                  book like the expert you are in just a few clicks.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                    className="w-fit"
                >
                    <Button text="Get Early Access Now" />
               
                </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex justify-between gap-8 text-white max-w-lg"
            >
              <div className="flex flex-col gap-3">
                <div className="text-4xl font-bold">12,550+</div>
                <div className="text-white/80">Listings Available</div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="text-4xl font-bold">20+</div>
                <div className="text-white/80">Rental Partners</div>
              </div>
            </motion.div>
          </div>
      </div>
    </section>
  )
}

