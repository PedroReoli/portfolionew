"use client"

import { useState, useRef } from "react"
import { motion, useScroll, useSpring, useInView } from "framer-motion"
import { Calendar, ExternalLink, ChevronDown } from "lucide-react"
import { Tilt } from "react-tilt"

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
    <section ref={containerRef} className="py-16 sm:py-20 bg-[#111111] overflow-hidden min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Jornada Profissional<span className="text-[#60A5FA]">;</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Linha do tempo - visível apenas em telas maiores */}
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-[#60A5FA]/20 hidden md:block"
            style={{ scaleY: scaleX }}
          />

          <div className="relative z-10 space-y-8 md:space-y-0">
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
      className={`flex flex-col md:flex-row justify-between items-center w-full 
        ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
    >
      <div className="hidden md:block md:w-5/12" />
      <div className="w-full md:w-5/12">
        <Tilt options={defaultTiltOptions}>
          <motion.div className="group relative" whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
            {/* Glow effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#60A5FA] to-[#60A5FA] rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-1000 group-hover:duration-200" />

            <div className="relative bg-[#0A1120] rounded-2xl border border-[#1E293B] overflow-hidden">
              <div className="p-6">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-white group-hover:text-[#60A5FA] transition-colors">
                      {event.empresa}
                    </h3>
                    <p className="text-[#60A5FA]/80 font-medium">{event.cargo}</p>
                  </div>
                  <span
                    className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold ${
                      event.status === "Finalizado"
                        ? "bg-green-500/10 text-green-400 border border-green-500/20"
                        : "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20"
                    }`}
                  >
                    {event.status}
                  </span>
                </div>

                <div className="flex items-center gap-2 mb-4 text-[#94A3B8]">
                  <Calendar className="w-4 h-4 text-[#60A5FA]" />
                  <span className="text-sm">{event.periodo}</span>
                </div>

                <p className="text-[#94A3B8] mb-4">{event.descricao}</p>

                <button
                  onClick={onToggle}
                  className="w-full flex items-center justify-center gap-2 text-sm text-[#60A5FA] hover:text-white transition-colors"
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
                    <p className="text-[#94A3B8]">{event.detalhes}</p>

                    <div className="flex flex-wrap gap-2">
                      {event.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-full text-xs font-medium bg-[#60A5FA]/5 text-[#60A5FA] border border-[#60A5FA]/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {event.link && (
                      <motion.a
                        href={event.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-[#60A5FA] hover:text-white transition-colors"
                        whileHover={{ x: 4 }}
                      >
                        Visitar
                        <ExternalLink className="w-4 h-4" />
                      </motion.a>
                    )}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </Tilt>
      </div>
    </motion.div>
  )
}

export default Timeline

