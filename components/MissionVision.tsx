"use client"

import { motion } from "framer-motion"
import { Target, Eye, Award, Users, Shield, Zap } from "lucide-react"

const values = [
  {
    icon: <Shield className="w-12 h-12 text-gold-500" />,
    title: "Integrity",
    description: "We conduct our business with the highest standards of honesty and transparency.",
  },
  {
    icon: <Users className="w-12 h-12 text-gold-500" />,
    title: "Excellence",
    description: "We strive for excellence in every service we provide to our clients.",
  },
  {
    icon: <Zap className="w-12 h-12 text-gold-500" />,
    title: "Innovation",
    description: "We continuously evolve and adapt to meet changing industry needs.",
  },
]

export default function MissionVision() {
  return (
    <section className="py-20 bg-navy-950">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-navy-900 p-8 rounded-lg border border-navy-700"
          >
            <div className="inline-flex items-center justify-center p-3 bg-navy-800 rounded-full mb-6">
              <Target className="w-8 h-8 text-gold-500" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-white/70">
              To provide exceptional manpower solutions that exceed client expectations through professional excellence,
              integrity, and innovation. We are committed to delivering reliable and quality services while maintaining
              the highest standards of safety and professionalism.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-navy-900 p-8 rounded-lg border border-navy-700"
          >
            <div className="inline-flex items-center justify-center p-3 bg-navy-800 rounded-full mb-6">
              <Eye className="w-8 h-8 text-gold-500" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-white/70">
              To be the most trusted and respected manpower solutions provider in India, known for our commitment to
              excellence, innovation, and customer satisfaction. We aim to set industry standards and create lasting
              partnerships with our clients.
            </p>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center p-3 bg-navy-900 rounded-full mb-6">
            <Award className="w-8 h-8 text-gold-500" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            The principles that guide us in delivering excellence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-navy-900 p-8 rounded-lg text-center border border-navy-700 hover:border-gold-500/50 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center mb-6">{value.icon}</div>
              <h3 className="text-xl font-bold mb-3">{value.title}</h3>
              <p className="text-white/70">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

