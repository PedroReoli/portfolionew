"use client"

import type React from "react"
import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, ExternalLink, Calendar, Code } from "lucide-react"

// Assumindo que projectsData está definido em outro arquivo
import { projectsData, type Project } from "@/constants"

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

  const nextProject = useCallback(() => {
    setCurrentProject((prev) => (prev + 1) % projectsData.length)
  }, [])

  const prevProject = useCallback(() => {
    setCurrentProject((prev) => (prev - 1 + projectsData.length) % projectsData.length)
  }, [])

  return (
    <motion.section
      className="bg-[#111111] text-white h-screen flex flex-col justify-center items-center p-4 sm:p-6 lg:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto h-full flex flex-col">
        <motion.h2
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Meus Projetos <span className="text-blue-500">;</span>
        </motion.h2>

        <div className="flex-grow relative">
          {isMobile ? (
            <div className="h-full flex items-center justify-center">
              <AnimatePresence mode="wait">
                <ProjectCard key={currentProject} project={projectsData[currentProject]} />
              </AnimatePresence>
              <button
                onClick={prevProject}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-500 bg-opacity-50 rounded-full p-2 hover:bg-blue-600 hover:bg-opacity-75 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
                aria-label="Previous project"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <button
                onClick={nextProject}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-500 bg-opacity-50 rounded-full p-2 hover:bg-blue-600 hover:bg-opacity-75 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
                aria-label="Next project"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-full">
              {projectsData.slice(0, 3).map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          )}
        </div>

        {isMobile && (
          <div className="flex justify-center mt-4 space-x-2">
            {projectsData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentProject(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentProject ? "bg-blue-500" : "bg-gray-600"
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
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

  const nextImage = useCallback(() => {
    setCurrentImageIndex((prevIndex) => (prevIndex === project.thumbnails.length - 1 ? 0 : prevIndex + 1))
  }, [project.thumbnails.length])

  const prevImage = useCallback(() => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? project.thumbnails.length - 1 : prevIndex - 1))
  }, [project.thumbnails.length])

  return (
    <motion.div
      className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl h-full flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative h-48">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImageIndex}
            src={project.thumbnails[currentImageIndex]}
            alt={`${project.title} thumbnail`}
            className="w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>
        <button
          onClick={prevImage}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-1 hover:bg-opacity-75 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-4 h-4 text-white" />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-1 hover:bg-opacity-75 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
          aria-label="Next image"
        >
          <ChevronRight className="w-4 h-4 text-white" />
        </button>
      </div>
      <div className="p-6 flex-grow flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold mb-2 text-blue-400">{project.title}</h3>
          <p className="text-sm text-gray-300 mb-4">{project.description}</p>
          <div className="flex items-center text-sm text-gray-400 mb-2">
            <Calendar className="w-4 h-4 mr-2" />
            <span>{project.duration}</span>
          </div>
          <div className="flex items-center text-sm text-gray-400 mb-4">
            <Code className="w-4 h-4 mr-2" />
            <span>{project.techStack.join(", ")}</span>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span
            className={`text-xs font-semibold px-2 py-1 rounded-full ${
              project.status === "Finalizado" ? "bg-green-500 text-white" : "bg-yellow-500 text-black"
            }`}
          >
            {project.status}
          </span>
          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center py-2 px-4 rounded-full text-sm font-semibold bg-blue-500 text-white transition-all duration-300 transform hover:bg-blue-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Ver Projeto
          </motion.a>
        </div>
      </div>
    </motion.div>
  )
}

export default Projects

