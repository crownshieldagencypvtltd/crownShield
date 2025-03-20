"use client"

import { motion } from "framer-motion"
import type cms from "@/lib/cms"

interface ContactHeroProps {
  data: typeof cms.pages.contact.hero
}

export default function ContactHero({ data }: ContactHeroProps) {
  return (
    <section className="relative py-20 bg-navy-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">{data.title}</h1>
          <p className="text-xl text-white/80">{data.subtitle}</p>
        </motion.div>
      </div>
    </section>
  )
}

