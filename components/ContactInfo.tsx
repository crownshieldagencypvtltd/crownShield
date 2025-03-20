"use client"

import { motion } from "framer-motion"
import { getIcon } from "@/lib/icons"
import type cms from "@/lib/cms"

interface ContactInfoProps {
  data: typeof cms.pages.contact.contactInfo
}

export default function ContactInfo({ data }: ContactInfoProps) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
      <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
      <ul className="space-y-4">
        {data.items.map((item, index) => (
          <li key={index} className="flex items-start">
            <div className="mr-3 mt-1">{getIcon(item.icon, 5, "text-gold-500")}</div>
            <a href={item.link} className="text-white/70 hover:text-gold-500 transition-colors duration-300">
              {item.content}
            </a>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

