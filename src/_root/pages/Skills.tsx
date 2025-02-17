"use client"

import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { skillsData, type Skill } from "@/constants/skillsData"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/Button"

const Skills: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null)

  const handleClick = (skill: Skill) => {
    setSelectedSkill((prevSkill) => (prevSkill?.title === skill.title ? null : skill))
  }

  const categories = [
    { key: "frontend", title: "Front-End" },
    { key: "backend", title: "Back-End" },
    { key: "database", title: "Banco de Dados" },
    { key: "devops", title: "Ferramentas" },
  ]

  const categorizedSkills = categories.map((category) => ({
    ...category,
    skills: skillsData.filter((skill) => skill.area.toLowerCase() === category.key),
  }))

  return (
    <motion.div
      className="bg-background text-foreground min-h-screen py-16 px-4 sm:px-6 md:px-8 lg:px-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Habilidades <span className="text-primary">;</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1 space-y-6">
            {categorizedSkills.map((category, idx) => (
              <Card key={idx}>
                <CardHeader>
                  <CardTitle className="text-primary">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, index) => (
                      <Button
                        key={index}
                        variant={selectedSkill?.title === skill.title ? "default" : "outline"}
                        size="sm"
                        onClick={() => handleClick(skill)}
                      >
                        {skill.title}
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="md:col-span-2">
            <AnimatePresence mode="wait">
              {selectedSkill ? (
                <motion.div
                  key={selectedSkill.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <img
                          src={selectedSkill.icon || "/placeholder.svg"}
                          alt={selectedSkill.title}
                          className="w-6 h-6 mr-2"
                        />
                        {selectedSkill.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{selectedSkill.description}</p>
                      <div className="mb-4">
                        <div className="text-sm font-medium mb-1">Nível</div>
                        <div className="w-full bg-secondary rounded-full h-2">
                          <div
                            className="bg-primary rounded-full h-2"
                            style={{ width: `${(selectedSkill.level / 3) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                      <div>
                        <div className="text-sm font-medium mb-2">Cursos Relacionados</div>
                        <ul className="list-disc list-inside text-sm text-muted-foreground">
                          {selectedSkill.courses.map((course, index) => (
                            <li key={index}>{course}</li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ) : (
                <motion.div
                  key="placeholder"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center justify-center h-full text-muted-foreground text-center"
                >
                  Selecione uma habilidade para ver os detalhes.
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Skills

