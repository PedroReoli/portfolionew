import type React from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/Button"
import { Link } from "react-router-dom"

const projects = [
  {
    title: "Projeto 1",
    description: "Descrição do Projeto 1",
    technologies: ["React", "Node.js", "MongoDB"],
    link: "/project1",
  },
  {
    title: "Projeto 2",
    description: "Descrição do Projeto 2",
    technologies: ["Vue.js", "Express", "PostgreSQL"],
    link: "/project2",
  },
  {
    title: "Projeto 3",
    description: "Descrição do Projeto 3",
    technologies: ["Angular", "Django", "MySQL"],
    link: "/project3",
  },
]

const Projects: React.FC = () => {
  return (
    <section className="bg-background text-foreground py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Projetos <span className="text-primary">;</span>
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-primary">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Button variant="outline" size="sm">
                    <Link to={project.link}>Ver Projeto</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

