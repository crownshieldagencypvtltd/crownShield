"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function AboutHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-navy-950/80 z-10" />
      <div className="absolute inset-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-02-27%20at%2013.47.42_3746ea0b.jpg-DQxXNBeFgDrJsrLxQcCnV3OL0w7bzd.jpeg"
          alt="Crown Shield Agency team"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">About Crown Shield Agency</h1>
          <p className="text-xl text-white/80">
            Delivering excellence in manpower solutions with integrity, professionalism, and dedication since 2008.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

