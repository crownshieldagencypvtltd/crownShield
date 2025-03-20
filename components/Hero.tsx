"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import type cms from "@/lib/cms"

interface HeroProps {
  data: typeof cms.pages.home.hero
}

export default function Hero({ data }: HeroProps) {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    if (!data.slides || data.slides.length <= 1) return

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % data.slides!.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [data.slides])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Slider */}
      {data.slides &&
        data.slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentImage === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="absolute inset-0 bg-navy-950/70 z-10" />
            <Image
              src={slide.image || "/placeholder.svg"}
              alt={slide.alt}
              fill
              className="object-cover"
              priority={index === 0}
              sizes="100vw"
            />
          </div>
        ))}

      {/* Content */}
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-3xl mx-auto text-center">
          {data.logo && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <Image
                src={data.logo || "/placeholder.svg"}
                alt="Crown Shield Agency Logo"
                width={120}
                height={120}
                className="mx-auto mb-6"
              />
            </motion.div>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white"
            dangerouslySetInnerHTML={{ __html: data.title }}
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-white/80 mb-8"
          >
            {data.subtitle}
          </motion.p>

          {data.buttons && data.buttons.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              {data.buttons.map((button, index) => (
                <Button
                  key={index}
                  asChild
                  size="lg"
                  variant={button.variant === "outline" ? "outline" : "default"}
                  className={
                    button.variant === "primary"
                      ? "bg-gold-500 hover:bg-gold-600 text-navy-950 font-medium rounded-md transition-all duration-300 transform hover:scale-105"
                      : "border-white/20 text-white hover:bg-white/10 rounded-md transition-all duration-300"
                  }
                >
                  <Link href={button.href}>{button.text}</Link>
                </Button>
              ))}
            </motion.div>
          )}
        </div>
      </div>

      {/* Image Indicators */}
      {data.slides && data.slides.length > 1 && (
        <div className="absolute bottom-8 left-0 right-0 z-20">
          <div className="flex justify-center gap-2">
            {data.slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentImage === index ? "bg-gold-500 w-8" : "bg-white/50"
                }`}
                aria-label={`View ${data.slides![index].title}`}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  )
}

