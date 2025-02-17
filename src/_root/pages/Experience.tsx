"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Calendar, Briefcase, ExternalLink } from "lucide-react"

const experiences = [
  {
    company: "EvaTech",
    period: "07/2024 - 11/2024",
    role: "Professor, Palestrante e Mentor",
    description:
      "Ministrei aulas, workshops e palestras sobre habilidades tecnológicas essenciais para o mercado de trabalho. Além disso, trabalhei com conceitos básicos de IA, empoderando mães negras solteiras a ingressar no mundo da tecnologia.",
    link: "https://evatech2024.netlify.app",
    tags: ["Educação", "IA", "Tecnologia"],
    status: "Finalizado",
  },
  {
    company: "DevEmDesenvolvimento",
    period: "Em andamento",
    role: "Professor, Redator e Dono",
    description:
      "Plataforma educacional focada em novos entusiastas e programadores iniciantes. Oferece cursos, blogs e projetos práticos para compartilhar conhecimento e impulsionar carreiras na área de tecnologia.",
    link: "https://devemdesenvolvimento.com.br",
    tags: ["Educação", "Programação", "Blog"],
    status: "Em andamento",
  },
  {
    company: "AutoCom3",
    period: "Em andamento",
    role: "Estagiário de Desenvolvimento",
    description:
      "Na Autocom3, aprofundei meus conhecimentos em Banco de Dados, ASP.NET, e C#, além de atuar como Tester de aplicações, em um ambiente profissional e humano.",
    link: "https://autocom3.com.br",
    tags: ["Banco de Dados", "ASP.NET", "C#", "Tester"],
    status: "Em andamento",
  },
]

const Experiences = () => {
  return (
    <motion.section
      id="experiences"
      className="bg-[#111111] text-white min-h-screen py-20 px-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Experiências <span className="text-blue-400">;</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </motion.section>
  )
}

interface ExperienceCardProps {
  experience: {
    company: string
    period: string
    role: string
    description: string
    link?: string
    tags: string[]
    status: string
  }
  index: number
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience, index }) => {
  return (
    <motion.div
      className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 * index }}
    >
      <div className="p-6 flex flex-col h-full">
        <div className="flex-grow">
          <h3 className="text-2xl font-bold text-blue-400 mb-2">{experience.company}</h3>
          <div className="flex items-center text-sm text-gray-300 mb-2">
            <Briefcase className="w-4 h-4 mr-2 text-blue-400" />
            <span>{experience.role}</span>
          </div>
          <div className="flex items-center text-sm text-gray-300 mb-4">
            <Calendar className="w-4 h-4 mr-2 text-blue-400" />
            <span>{experience.period}</span>
          </div>
          <p className="text-gray-300 mb-4 text-sm">{experience.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {experience.tags.map((tag, index) => (
              <span key={index} className="bg-blue-500 bg-opacity-20 text-blue-300 text-xs px-2 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="flex justify-between items-center mt-4">
          <span
            className={`text-sm font-semibold px-2 py-1 rounded-full ${
              experience.status === "Finalizado" ? "bg-green-500 text-green-100" : "bg-yellow-500 text-yellow-100"
            }`}
          >
            {experience.status}
          </span>
          {experience.link && (
            <a
              href={experience.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-semibold text-blue-400 transition-colors focus:outline-none focus:underline"
            >
              Ver Mais
              <ExternalLink className="w-4 h-4 ml-1" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default Experiences

