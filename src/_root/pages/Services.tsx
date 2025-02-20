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
        <motion.div
          className="text-center mb-16 relative"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-white">
            Serviços<span className="text-[#60A5FA]">;</span>
          </h2>
        </motion.div>

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
            features={["Design Responsivo", "Prototipagem", "Design System", "Interfaces Modernas"]}
          />

          <ServiceCard
            Icon={Code2}
            title="Desenvolvimento FullStack"
            description="Construo soluções completas, desde interfaces até back-ends robustos e escaláveis."
            features={["Aplicações Web", "APIs RESTful", "Banco de Dados", "Deploy & CI/CD"]}
          />

          <ServiceCard
            Icon={Users}
            title="Mentoria e Aulas"
            description="Orientação personalizada para estudos, carreiras e projetos na área de programação."
            features={["Aulas Particulares", "Code Review", "Projetos Práticos", "Carreira Tech"]}
          />
        </motion.div>

        <motion.div
          className="flex justify-center mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.a
            href="mailto:pedrosousa2160@gmail.com"
            className="relative group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#60A5FA] to-[#60A5FA] rounded-full blur-md opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />

            {/* Button */}
            <div className="relative px-8 py-4 bg-[#111111] rounded-full ring-1 ring-[#60A5FA]/50 hover:ring-[#60A5FA] text-[#60A5FA] text-lg font-semibold leading-none flex items-center gap-2 transition-all duration-300">
              Entre em Contato
            </div>
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  )
}

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
  features: string[]
}

const ServiceCard: React.FC<ServiceCardProps> = ({ Icon, title, description, features }) => (
  <motion.div variants={cardVariants}>
    <Tilt options={defaultTiltOptions}>
      <div className="relative group">
        {/* Card glow effect */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-[#60A5FA] to-[#60A5FA] rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-1000 group-hover:duration-200" />

        {/* Card content */}
        <div className="relative flex flex-col h-full p-8 bg-[#0A1120] rounded-2xl border border-[#1E293B] backdrop-blur-xl">
          {/* Icon container with glow */}
          <div className="relative w-16 h-16 mx-auto mb-8">
            <div className="absolute inset-0 bg-[#60A5FA] rounded-xl blur-md opacity-20 group-hover:opacity-40 transition duration-300" />
            <div className="relative flex items-center justify-center w-full h-full bg-[#0A1120] rounded-xl border border-[#1E293B] group-hover:border-[#60A5FA]/50 transition-colors duration-300">
              <Icon className="w-8 h-8 text-[#60A5FA]" />
            </div>
          </div>

          {/* Title */}
          <h3 className="text-2xl font-bold text-center text-white mb-4">{title}</h3>

          {/* Description */}
          <p className="text-[#94A3B8] text-center mb-8">{description}</p>

          {/* Features */}
          <div className="space-y-3 mt-auto">
            {features.map((feature, index) => (
              <div key={index} className="relative group/feature">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#60A5FA]/20 to-[#60A5FA]/20 rounded-xl opacity-0 group-hover/feature:opacity-100 transition duration-300" />
                <div className="relative p-4 bg-[#0F172A] rounded-xl border border-[#1E293B] group-hover/feature:border-[#60A5FA]/20 transition-colors duration-300">
                  <p className="text-[#94A3B8] text-sm text-center">{feature}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Tilt>
  </motion.div>
)

export default Services

