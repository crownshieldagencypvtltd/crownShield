"use client"

import { motion } from "framer-motion"
import { Check, Award, Clock, Shield, Users, MapPin } from "lucide-react"

const reasons = [
  {
    icon: <Check className="w-6 h-6 text-gold-500" />,
    title: "Verified Professionals",
    description:
      "All our staff undergo rigorous background checks and training to ensure the highest standards of service.",
  },
  {
    icon: <Award className="w-6 h-6 text-gold-500" />,
    title: "Quality Assurance",
    description:
      "We maintain strict quality control measures to deliver consistent and exceptional service every time.",
  },
  {
    icon: <Clock className="w-6 h-6 text-gold-500" />,
    title: "24/7 Availability",
    description: "Our services are available round the clock to address your needs whenever they arise.",
  },
  {
    icon: <Shield className="w-6 h-6 text-gold-500" />,
    title: "Fully Insured",
    description: "We provide comprehensive insurance coverage for all our services, giving you complete peace of mind.",
  },
  {
    icon: <Users className="w-6 h-6 text-gold-500" />,
    title: "Experienced Team",
    description:
      "Our team consists of highly skilled professionals with years of experience in their respective fields.",
  },
  {
    icon: <MapPin className="w-6 h-6 text-gold-500" />,
    title: "Wide Coverage",
    description: "We serve clients across Kolkata and surrounding areas with prompt and reliable service.",
  },
]

export default function WhyChooseUs() {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Crown Shield Agency</h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            We pride ourselves on delivering exceptional manpower solutions that exceed expectations and build lasting
            relationships.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-navy-900/50 rounded-lg p-6 border border-navy-800 hover:border-gold-500/30 transition-all duration-300"
            >
              <div className="flex items-start">
                <div className="mr-4 mt-1 bg-navy-800 rounded-full p-2">{reason.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
                  <p className="text-white/70">{reason.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

