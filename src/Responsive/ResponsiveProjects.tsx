"use client"

import  React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/Button"
import { Link } from "react-router-dom"
import { ChevronLeft, ChevronRight } from "lucide-react"

const projects = [
  {
    title: "Projeto 1",
    description: "Descrição do Projeto 1",
    technologies: ["React", "Node.js", "MongoDB"],
    link: "#",
  },
  {
    title: "Projeto 2",
    description: "Descrição do Projeto 2",
    technologies: ["Vue.js", "Express", "PostgreSQL"],
    link: "#",
  },
  {
    title: "Projeto 3",
    description: "Descrição do Projeto 3",
    technologies: ["Angular", "Django", "MySQL"],
    link: "#",
  },
]

const ResponsiveProjects: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0)

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % projects.length)
  }

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + projects.length) % projects.length)
  }

  return (
    <section className="py-8 px-4 bg-background">
      <motion.h2
        className="text-2xl font-bold text-center mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Meus Projetos <span className="text-primary">;</span>
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
              <CardTitle className="text-lg text-primary">{projects[currentPage].title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">{projects[currentPage].description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {projects[currentPage].technologies.map((tech, i) => (
                  <span key={i} className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
              <Button variant="outline" size="sm">
                <Link to={projects[currentPage].link} target="_blank" rel="noopener noreferrer">
                  Ver Projeto
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

export default ResponsiveProjects

