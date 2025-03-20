"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import type cms from "@/lib/cms"

interface MapLocationProps {
  data: typeof cms.pages.contact.mapLocation
}

export default function MapLocation({ data }: MapLocationProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="mt-8"
    >
      <h3 className="text-xl font-semibold mb-4">{data.title}</h3>
      <div className="relative rounded-lg overflow-hidden h-[300px] bg-navy-800">
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-navy-800">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gold-500"></div>
          </div>
        )}
        <iframe
          src={data.embedUrl}
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
          className={isLoaded ? "opacity-100" : "opacity-0"}
        ></iframe>
      </div>
    </motion.div>
  )
}

