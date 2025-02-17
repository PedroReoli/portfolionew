"use client"

import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/Button"

const skills = [
  {
    title: "React",
    icon: "/icons/react.svg",
    level: 90,
    description: "Biblioteca JavaScript para construir interfaces de usuário",
    courses: ["React Fundamentals", "Advanced React Patterns"],
  },
  {
    title: "Node.js",
    icon: "/icons/nodejs.svg",
    level: 85,
    description: "Ambiente de execução JavaScript do lado do servidor",
    courses: ["Node.js Basics", "Building RESTful APIs with Node.js"],
  },
  {
    title: "TypeScript",
    icon: "/icons/typescript.svg",
    level: 80,
    description: "Superset tipado do JavaScript",
    courses: ["TypeScript Fundamentals", "Advanced Types in TypeScript"],
  },
]

const ResponsiveSkillsSection: React.FC = () => {
  const [activeSkill, setActiveSkill] = useState(skills[0])

  return (
    <section className="py-8 px-4 bg-background">
      <motion.h2
        className="text-2xl font-bold text-center mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Habilidades <span className="text-primary">;</span>
      </motion.h2>

      <div className="flex justify-center space-x-2 mb-6">
        {skills.map((skill) => (
          <Button
            key={skill.title}
            variant={activeSkill.title === skill.title ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveSkill(skill)}
          >
            {skill.title}
          </Button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeSkill.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <img src={activeSkill.icon || "/placeholder.svg"} alt={activeSkill.title} className="w-6 h-6 mr-2" />
                {activeSkill.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">{activeSkill.description}</p>
              <div className="mb-4">
                <div className="text-sm font-medium mb-1">Nível</div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div className="bg-primary rounded-full h-2" style={{ width: `${activeSkill.level}%` }}></div>
                </div>
              </div>
              <div>
                <div className="text-sm font-medium mb-2">Cursos Relacionados</div>
                <ul className="list-disc list-inside text-sm text-muted-foreground">
                  {activeSkill.courses.map((course, index) => (
                    <li key={index}>{course}</li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </AnimatePresence>
    </section>
  )
}

export default ResponsiveSkillsSection

