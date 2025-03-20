"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "What areas do you provide your services in?",
    answer:
      "Crown Shield Agency primarily serves Kolkata and surrounding areas. We cover all major localities including Taratala, Salt Lake, New Town, Howrah, and other regions within a 50km radius of Kolkata.",
  },
  {
    question: "How are your staff members vetted and trained?",
    answer:
      "All our staff undergo a comprehensive vetting process including background checks, verification of credentials, and reference checks. They receive specialized training based on their roles, with regular refresher courses to maintain high standards of service.",
  },
  {
    question: "What is the minimum contract period for your services?",
    answer:
      "Our minimum contract period varies by service type. For security and domestic help, we typically offer 3-month minimum contracts. For specialized services like electrical and mechanical work, we offer both project-based and ongoing maintenance contracts.",
  },
  {
    question: "Can I request a replacement if I'm not satisfied with the service?",
    answer:
      "Yes, customer satisfaction is our priority. If you're not satisfied with any of our staff members, you can request a replacement. We'll arrange for a suitable alternative as quickly as possible, usually within 24-48 hours.",
  },
  {
    question: "Do you provide emergency services outside regular hours?",
    answer:
      "Yes, we offer 24/7 emergency services for critical needs. Our emergency response team is available round the clock for security incidents, electrical emergencies, and other urgent requirements.",
  },
]

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-navy-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Find answers to common questions about our services and operations.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                onClick={() => toggleFaq(index)}
                className={`w-full text-left p-6 rounded-lg flex justify-between items-center transition-all duration-300 ${
                  activeIndex === index
                    ? "bg-navy-800 border-gold-500"
                    : "bg-navy-900 hover:bg-navy-800 border-navy-700"
                } border`}
              >
                <span className="font-semibold text-lg">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-300 ${activeIndex === index ? "transform rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 bg-navy-900/50 rounded-b-lg border border-t-0 border-navy-700">
                      <p className="text-white/80">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

