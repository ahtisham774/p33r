"use client"

import { motion } from "framer-motion"
import Heading from "./common/heading"
import contact from "../../assets/contact.png"
import Image from "next/image"
import { useEffect, useState } from "react"

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
    <section className="bg-[#2B3990] w-full rounded-3xl max-w-5xl mx-auto text-white pt-4">
      <div className="w-full px-4 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1">
          <Heading text='Still Curious?' className="text-white"  />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-white/80 mb-6"
            >
              Want to know more about P33R?
            </motion.p>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white text-[#2B3990] px-6 py-3 rounded-lg font-medium hover:bg-white/90 transition-colors"
            >
              Contact Us
            </motion.button>
          </div>
          <div className="flex-1">
            <motion.div
            
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
                <Image src={contact} alt="Contact illustration" className="max-w-[300px] mx-auto" />
              </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

