"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { getIcon } from "@/lib/icons"
import type cms from "@/lib/cms"

interface ServicesOverviewProps {
  data: typeof cms.pages.home.services
}

export default function ServicesOverview({ data }: ServicesOverviewProps) {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{data.title}</h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">{data.subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-navy-800 rounded-lg p-6 shadow-lg border border-navy-700 hover:border-gold-500/50 transition-all duration-300 group"
            >
              <div className="mb-4">{getIcon(service.icon, 12, "text-gold-500")}</div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-gold-500 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-white/70 mb-6">{service.description}</p>
              <Link
                href={service.link}
                className="text-gold-500 hover:text-gold-400 inline-flex items-center font-medium transition-colors duration-300"
              >
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform duration-300"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Button
            asChild
            size="lg"
            className="bg-gold-500 hover:bg-gold-600 text-navy-950 font-medium rounded-md transition-all duration-300 transform hover:scale-105"
          >
            <Link href={data.ctaButton.href}>{data.ctaButton.text}</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

