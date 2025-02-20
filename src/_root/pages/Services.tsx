"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Tilt } from "react-tilt"
import { Code2, Layout, Users } from "lucide-react"

const defaultTiltOptions = {
  reverse: false,
  max: 15,
  perspective: 1000,
  scale: 1.02,
  speed: 1000,
  transition: true,
  axis: null,
  reset: true,
  easing: "cubic-bezier(.03,.98,.52,.99)",
}

const Services = () => {
  return (
    <motion.section
      id="services"
      className="bg-[#111111] text-white min-h-screen py-20 px-5 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto max-w-7xl">
        {/* Título sem glow */}
        <motion.h2
          className="text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Serviços<span className="text-[#60A5FA]">;</span>
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <ServiceCard
            Icon={Layout}
            title="UX / UI Design"
            description="Desenho interfaces claras, objetivas e intuitivas, priorizando a experiência do usuário."
          />

          <ServiceCard
            Icon={Code2}
            title="Desenvolvimento FullStack"
            description="Construo soluções completas, desde interfaces até back-ends robustos e escaláveis."
          />

          <ServiceCard
            Icon={Users}
            title="Mentoria e Aulas"
            description="Orientação personalizada para estudos, carreiras e projetos na área de programação."
          />
        </motion.div>
      </div>
    </motion.section>
  )
}


const ServiceCard: React.FC<ServiceCardProps> = ({ Icon, title, description }) => (
  <motion.div variants={cardVariants}>
    <Tilt options={defaultTiltOptions}>
      <div className="relative group h-[300px]">
        {/* Card glow effect */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-[#60A5FA] to-[#60A5FA] rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-1000 group-hover:duration-200" />

        {/* Card content */}
        <div className="relative flex flex-col h-full p-8 bg-[#0A1120] rounded-2xl border border-[#1E293B] backdrop-blur-xl">
          {/* Icon container with glow */}
          <div className="relative w-16 h-16 mx-auto mb-6">
            <div className="absolute inset-0 bg-[#60A5FA] rounded-xl blur-md opacity-20 group-hover:opacity-40 transition duration-300" />
            <div className="relative flex items-center justify-center w-full h-full bg-[#0A1120] rounded-xl border border-[#1E293B] group-hover:border-[#60A5FA]/50 transition-colors duration-300">
              <Icon className="w-8 h-8 text-[#60A5FA]" />
            </div>
          </div>

          <h3 className="text-2xl font-bold text-center text-white mb-4 group-hover:text-[#60A5FA] transition-colors duration-300">
            {title}
          </h3>

          <p className="text-[#94A3B8] text-center">{description}</p>
        </div>
      </div>
    </Tilt>
  </motion.div>
)


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

interface ServiceCardProps {
  Icon: any
  title: string
  description: string
}

export default Services

