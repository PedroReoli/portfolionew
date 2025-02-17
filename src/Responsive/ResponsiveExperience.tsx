"use client"

import  React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/Button"
import { Link } from "react-router-dom"
import { ChevronLeft, ChevronRight } from "lucide-react"

const experiences = [
  {
    company: "EvaTech",
    period: "07/2024 - 11/2024",
    role: "Professor, Palestrante e Mentor",
    description:
      "Ministrei aulas, workshops e palestras sobre habilidades tecnológicas essenciais para o mercado de trabalho.",
    link: "https://evatech2024.netlify.app",
  },
  {
    company: "DevEmDesenvolvimento",
    period: "Em andamento",
    role: "Professor, Redator e Dono",
    description: "Plataforma educacional focada em novos entusiastas e programadores iniciantes.",
    link: "https://devemdesenvolvimento.com.br",
  },
  {
    company: "AutoCom3",
    period: "Em andamento",
    role: "Estagiário de Desenvolvimento",
    description:
      "Aprofundei meus conhecimentos em Banco de Dados, ASP.NET, e C#, além de atuar como Tester de aplicações.",
    link: "https://autocom3.com.br",
  },
]

const ResponsiveExperience: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0)

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % experiences.length)
  }

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + experiences.length) % experiences.length)
  }

  return (
    <section className="py-8 px-4 bg-background">
      <motion.h2
        className="text-2xl font-bold text-center mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Experiências <span className="text-primary">;</span>
      </motion.h2>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-lg text-primary">{experiences[currentPage].company}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">{experiences[currentPage].period}</p>
              <p className="font-semibold mb-2">{experiences[currentPage].role}</p>
              <p className="text-sm text-muted-foreground mb-4">{experiences[currentPage].description}</p>
              <Button variant="outline" size="sm">
                <Link to={experiences[currentPage].link} target="_blank" rel="noopener noreferrer">
                  Ver mais
                </Link>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </AnimatePresence>

      <div className="flex justify-between mt-4">
        <Button variant="outline" size="sm" onClick={prevPage}>
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="sm" onClick={nextPage}>
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </section>
  )
}

export default ResponsiveExperience

