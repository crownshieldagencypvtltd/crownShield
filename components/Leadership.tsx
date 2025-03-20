"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Mail, Phone, Linkedin } from "lucide-react"

const leaders = [
  {
    name: "Ajay Sain",
    position: "Managing Director",
    image: "/placeholder.svg?height=400&width=400",
    bio: "With over 20 years of experience in manpower solutions, Ajay Sain leads Crown Shield Agency with a vision for excellence and innovation.",
    contact: {
      email: "crownshieldagency@gmail.com",
      phone: "+91 7319367046",
      linkedin: "https://linkedin.com/in/ajay-sain",
    },
  },
  {
    name: "Anuska Sain",
    position: "Executive Director",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Anuska Sain oversees all operational aspects of Crown Shield Agency, ensuring seamless service delivery and client satisfaction.",
    contact: {
      email: "crownshieldagency@gmail.com",
      phone: "+91 7319367046",
      linkedin: "https://linkedin.com/in/anuska-sain",
    },
  }
]

export default function Leadership() {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Leadership Team</h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Meet the experienced professionals who guide Crown Shield Agency towards excellence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-navy-800 rounded-lg overflow-hidden border border-navy-700 group hover:border-gold-500/50 transition-all duration-300"
            >
              <div className="relative h-64">
                <Image
                  src={leader.image || "/placeholder.svg"}
                  alt={leader.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{leader.name}</h3>
                <p className="text-gold-500 text-sm mb-3">{leader.position}</p>
                <p className="text-white/70 text-sm mb-4">{leader.bio}</p>
                <div className="flex space-x-4">
                  <a
                    href={`mailto:${leader.contact.email}`}
                    className="text-white/60 hover:text-gold-500 transition-colors duration-300"
                    aria-label={`Email ${leader.name}`}
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                  <a
                    href={`tel:${leader.contact.phone}`}
                    className="text-white/60 hover:text-gold-500 transition-colors duration-300"
                    aria-label={`Call ${leader.name}`}
                  >
                    <Phone className="w-5 h-5" />
                  </a>
                  <a
                    href={leader.contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-gold-500 transition-colors duration-300"
                    aria-label={`${leader.name}'s LinkedIn profile`}
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

