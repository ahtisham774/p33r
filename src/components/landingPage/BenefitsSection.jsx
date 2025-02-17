"use client"
import { motion } from "framer-motion"
import SubHeading from "./common/subHeading"
import Heading from "./common/heading"
import hg1 from "../../assets/hg1.jpg"
import g1 from "../../assets/g1.jpg"
import g2 from "../../assets/g2.jpg"
import Image from "next/image"
import { useEffect, useState } from "react"

export function BenefitsSection() {
     const [isClient, setIsClient] = useState(false)
    
      useEffect(() => {
        if (typeof window !== 'undefined') {
          setIsClient(true)
        }
      }, [])
    
      if (!isClient) {
        return null
      }
    
  const benefits = [
    {
      image: hg1,
      title: "Exclusive Discounts on your first booking.",
      tag: "No Additional Fees",
    },
    {
      image: g1,
      title: "Priority Access to new features as they roll out.",
    },
    {
      image: g2,
      title: "A Personalized Experience based on your preferences.",
    },
  ]

  return (
    <section className="py-24 w-full ">
      <div className="w-full">
      <SubHeading text='Get sign up' />
      <Heading text='Find Hidden Gems with P33R'  />
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className=" mb-10">
          <p className="text-gray-600 text-xl font-normal mt-2">Be among the first to sign up and unlock:</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl flex-1 overflow-hidden shadow-lg"
            >
              <div className="relative">
                <Image
                  src={benefit.image || "/placeholder.svg"}
                  alt={benefit.title}
                  width={390}
                  height={370}
                  className="w-[390px] h-[370px] object-cover"
                />
                {benefit.tag && (
                  <span className="absolute top-4 left-4  border-[#D855A0] border text-primary bg-[#FDF1F5] px-3 py-1 rounded-full text-xs font-semibold">
                    {benefit.tag}
                  </span>
                )}
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-lg">{benefit.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

