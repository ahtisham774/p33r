"use client"
import { motion } from "framer-motion"
import Heading from "./heading"
import { useEffect, useState } from "react"

import contact from '../../assets/contact.png'
import Image from "next/image"

export function Contact() {
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
    <section className="bg-[#2C35E0] w-full rounded-3xl mt-12 lg:h-[264px] pt-4 lg:pt-0 max-w-5xl mx-auto text-white">
      <div className="w-full px-4 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1">
          <Heading text='Still Curious?' className="text-white"  />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-white/80 text-base font-normal mb-6"
            >
              Velit aliquip ut sunt consectetur irure officia et cillum consectetur sunt
            </motion.p>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-[#E8618C] text-[#fff] px-6 py-3 rounded-lg font-medium hover:bg-[#E8618C]/90 transition-colors"
            >
              Contact Us
            </motion.button>
          </div>
          <div className="flex-1 -translate-y-5">
            <motion.div
             
              className="max-w-[300px] mx-auto"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
                <Image src={contact} alt="Contact illustration" />
              </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

