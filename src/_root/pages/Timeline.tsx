"use client"

import { useState, useRef } from "react"
import { motion, useScroll, useSpring, useInView } from "framer-motion"
import { Calendar, ExternalLink, ChevronDown } from "lucide-react"

const timelineEvents = [
  {
    periodo: "07/2024 - 11/2024",
    empresa: "EvaTech",
    cargo: "Professor, Palestrante e Mentor",
    descricao:
      "Ministrei aulas, workshops e palestras sobre habilidades tecnológicas essenciais para o mercado de trabalho.",
    detalhes:
      "Além disso, trabalhei com conceitos básicos de IA, empoderando mães negras solteiras a ingressar no mundo da tecnologia.",
    link: "https://evatech2024.netlify.app",
    status: "Finalizado",
    tags: ["Educação", "IA", "Tecnologia"],
  },
  {
    periodo: "Em andamento",
    empresa: "DevEmDesenvolvimento",
    cargo: "Professor, Redator e Dono",
    descricao: "Plataforma educacional focada em novos entusiastas e programadores iniciantes.",
    detalhes:
      "Oferece cursos, blogs e projetos práticos para compartilhar conhecimento e impulsionar carreiras na área de tecnologia.",
    link: "https://devemdesenvolvimento.com.br",
    status: "Em andamento",
    tags: ["Educação", "Programação", "Blog"],
  },
  {
    periodo: "Em andamento",
    empresa: "AutoCom3",
    cargo: "Estagiário de Desenvolvimento",
    descricao: "Na Autocom3, aprofundei meus conhecimentos em Banco de Dados, ASP.NET, e C#.",
    detalhes: "Além de atuar como Tester de aplicações, em um ambiente profissional e humano.",
    link: "https://autocom3.com.br",
    status: "Em andamento",
    tags: ["Banco de Dados", "ASP.NET", "C#", "Tester"],
  },
]

const Timeline = () => {
  const [expandedEvent, setExpandedEvent] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <section ref={containerRef} className="py-20 bg-[#111111] overflow-hidden min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-white">
            Jornada Profissional<span className="text-blue-400">;</span>
          </h2>
        </motion.div>

        <div className="relative">
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-blue-400/20"
            style={{ scaleY: scaleX }}
          />

          <div className="relative z-10">
            {timelineEvents.map((event, index) => (
              <TimelineEvent
                key={event.empresa}
                event={event}
                index={index}
                isExpanded={expandedEvent === index}
                onToggle={() => setExpandedEvent(expandedEvent === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function TimelineEvent({
  event,
  index,
  isExpanded,
  onToggle,
}: {
  event: (typeof timelineEvents)[0]
  index: number
  isExpanded: boolean
  onToggle: () => void
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  return (
    <motion.div
      ref={ref}
      className={`mb-12 flex flex-col md:flex-row justify-between items-center w-full 
        ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
    >
      <div className="w-full md:w-5/12" />
      <motion.div className="w-full md:w-5/12" initial={false} animate={{ height: "auto" }}>
        <motion.div
          className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 p-1"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <div className="absolute -inset-px bg-gradient-to-r from-blue-400/50 via-blue-400/0 to-blue-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="relative bg-gray-900 rounded-lg p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  {event.empresa}
                </h3>
                <p className="text-blue-400/80 font-medium mt-1">{event.cargo}</p>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  event.status === "Finalizado"
                    ? "bg-green-500/10 text-green-400 border border-green-500/20"
                    : "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20"
                }`}
              >
                {event.status}
              </span>
            </div>

            <div className="flex items-center gap-2 mb-4 text-gray-400">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">{event.periodo}</span>
            </div>

            <p className="text-gray-300 mb-4">{event.descricao}</p>

            <button
              onClick={onToggle}
              className="w-full flex items-center justify-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
            >
              {isExpanded ? "Ver menos" : "Ver mais"}
              <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.2 }}>
                <ChevronDown className="w-4 h-4" />
              </motion.div>
            </button>

            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: isExpanded ? "auto" : 0,
                opacity: isExpanded ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="pt-4 space-y-4">
                <p className="text-gray-400">{event.detalhes}</p>

                <div className="flex flex-wrap gap-2">
                  {event.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-blue-400/10 text-blue-400 border border-blue-400/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {event.link && (
                  <a
                    href={event.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Visitar projeto
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Timeline

