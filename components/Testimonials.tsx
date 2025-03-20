"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    name: "Rajesh Kumar",
    position: "Operations Manager, Tata Steel",
    content:
      "Crown Shield Agency has provided us with exceptional security personnel for our facilities. Their guards are professional, vigilant, and well-trained. We've seen a significant improvement in our overall security since partnering with them.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    position: "Hotel Manager, The Oberoi Grand",
    content:
      "We've been using Crown Shield's domestic staff services for our hotel, and the quality of their personnel is outstanding. They're reliable, hardworking, and maintain our high standards of cleanliness and service.",
    rating: 5,
  },
  {
    name: "Amit Banerjee",
    position: "Facility Director, Apollo Hospitals",
    content:
      "The electricians from Crown Shield Agency have been instrumental in maintaining our critical electrical systems. Their quick response time and technical expertise have prevented several potential disruptions to our operations.",
    rating: 4,
  },
  {
    name: "Sunita Agarwal",
    position: "Property Manager, South City Residences",
    content:
      "We rely on Crown Shield for all our manpower needs - from security to maintenance. Their comprehensive service and attention to detail have made them an invaluable partner for our residential complex.",
    rating: 5,
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay])

  const next = () => {
    setAutoplay(false)
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setAutoplay(false)
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-navy-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Hear from organizations that have experienced the Crown Shield difference.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-navy-800 rounded-lg p-8 border border-navy-700">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${i < testimonial.rating ? "text-gold-500 fill-gold-500" : "text-gray-400"}`}
                        />
                      ))}
                    </div>
                    <p className="text-white/80 text-lg italic mb-6">"{testimonial.content}"</p>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-white/60 text-sm">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-navy-800 hover:bg-navy-700 text-white rounded-full p-2 shadow-lg transition-all duration-300"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-navy-800 hover:bg-navy-700 text-white rounded-full p-2 shadow-lg transition-all duration-300"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setAutoplay(false)
                  setCurrent(index)
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  current === index ? "bg-gold-500 w-8" : "bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

