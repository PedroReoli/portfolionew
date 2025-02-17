"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { projectsData, type Project } from "@/constants"
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/Button"

const Projects: React.FC = () => {
  const [currentProject, setCurrentProject] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projectsData.length)
  }

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projectsData.length) % projectsData.length)
  }

  return (
    <motion.section
      className="bg-background text-foreground py-16 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto max-w-7xl">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Meus Projetos <span className="text-primary">;</span>
        </motion.h2>
        {isMobile ? (
          <div className="relative">
            <AnimatePresence mode="wait">
              <ProjectCard key={currentProject} project={projectsData[currentProject]} />
            </AnimatePresence>
            <Button
              variant="outline"
              size="sm"
              className="absolute left-0 top-1/2 transform -translate-y-1/2"
              onClick={prevProject}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="absolute right-0 top-1/2 transform -translate-y-1/2"
              onClick={nextProject}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsData.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        )}
      </div>
    </motion.section>
  )
}

interface ProjectCardProps {
  project: Project
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === project.thumbnails.length - 1 ? 0 : prevIndex + 1))
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? project.thumbnails.length - 1 : prevIndex - 1))
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <Card>
        <div className="relative h-48 sm:h-56">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImageIndex}
              src={project.thumbnails[currentImageIndex]}
              alt={`${project.title} thumbnail`}
              className="w-full h-full object-cover rounded-t-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            />
          </AnimatePresence>
          <Button
            variant="outline"
            size="sm"
            className="absolute left-2 top-1/2 transform -translate-y-1/2"
            onClick={prevImage}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="absolute right-2 top-1/2 transform -translate-y-1/2"
            onClick={nextImage}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        <CardHeader>
          <CardTitle>{project.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.techStack.map((tech: string, index: number) => (
              <span key={index} className="bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded">
                {tech}
              </span>
            ))}
          </div>
          <div className="flex justify-between items-center text-sm text-muted-foreground mb-4">
            <span>{project.type}</span>
            <span>{project.duration}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className={`text-sm ${project.status === "Finalizado" ? "text-green-500" : "text-yellow-500"}`}>
              {project.status}
            </span>
            <Button variant="outline" size="sm">
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center">
                <ExternalLink className="w-4 h-4 mr-2" />
                Ver Projeto
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default Projects

