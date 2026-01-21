'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface FoodBannerProps {
  title: string
  description: string
  image: string
  cta: string
  href: string
  reverse?: boolean
}

export default function FoodBanner({ title, description, image, cta, href, reverse = false }: FoodBannerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-6 items-center bg-black border-2 border-mustard/20 rounded-3xl overflow-hidden hover:border-mustard transition-all duration-300 group`}
    >
      <div className="relative w-full lg:w-1/2 h-64 lg:h-80 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />
      </div>
      <div className="flex-1 p-8 lg:p-12">
        <h3 className="text-3xl md:text-4xl font-bold text-mustard mb-4">{title}</h3>
        <p className="text-gray-300 text-lg mb-6">{description}</p>
        <Link
          href={href}
          className="inline-flex items-center gap-2 px-6 py-3 bg-mustard text-black font-bold rounded-full hover:bg-mustard-400 transition-colors group/btn"
        >
          {cta}
          <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  )
}
