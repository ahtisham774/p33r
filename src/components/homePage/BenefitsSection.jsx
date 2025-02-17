"use client"
import { motion } from "framer-motion"
import Heading from "./heading"
import { useEffect, useState } from "react"
import placeholder from "../../assets/placeholder.png"
import Image from "next/image"

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
      image: placeholder,
      title: "Exclusive Discounts on your first booking.",
      tag: "No Additional Fees",
    },
    {
      image: placeholder,
      title: "Priority Access to new features as they roll out.",
    },
    {
      image: placeholder,
      title: "A Personalized Experience based on your preferences.",
    },
  ]

  return (
    <section className="py-12 w-full ">
      <div className="w-full flex flex-col items-center justify-center">
      <Heading text='Find Hidden Gems with P33R'  />
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className=" mb-10">
          <p className="text-gray-600 text-3xl font-normal mt-2">Be among the first to sign up and unlock:</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full place-items-center gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl max-w-[390px] flex-1 overflow-hidden border"
            >
              <div className="relative">
                <Image
                  width={390}
                  height={370}
                  src={benefit.image || "/placeholder.svg"}
                  alt={benefit.title}
                  className="w-[390px] h-[370px] object-cover"
                />
                {benefit.tag && (
                  <span className="absolute top-4 right-4  border-[#D855A0] border text-primary bg-[#FDF1F5] px-3 py-1 rounded-full text-xs font-semibold">
                    {benefit.tag}
                  </span>
                )}
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl">{benefit.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="w-full max-w-xl h-[1px] bg-[#BCC1CA] mt-16" />
      </div>
    </section>
  )
}

