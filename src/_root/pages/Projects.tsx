"use client"

import { useState, useCallback, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, ExternalLink, Calendar, Code } from 'lucide-react'
import { Tilt } from 'react-tilt'
import { projectsData, type Project } from "@/constants"

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

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [visibleProjects, setVisibleProjects] = useState(6)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
      if (window.innerWidth >= 1280) setVisibleProjects(6)
      else if (window.innerWidth >= 1024) setVisibleProjects(4)
      else if (window.innerWidth >= 768) setVisibleProjects(3)
      else setVisibleProjects(1)
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
      className="bg-[#111111] text-white min-h-screen py-20 px-5 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto max-w-7xl">
        <motion.div 
          className="text-center mb-16 relative"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#60A5FA] rounded-full blur-[120px] opacity-20" />
          <h2 className="text-4xl font-bold relative">
            Meus Projetos<span className="text-[#60A5FA]">;</span>
          </h2>
        </motion.div>

        <div className="relative">
          {isMobile ? (
            <div className="flex items-center justify-center">
              <AnimatePresence mode="wait">
                <ProjectCard key={currentProject} project={projectsData[currentProject]} />
              </AnimatePresence>
              <NavigationButton direction="prev" onClick={prevProject} />
              <NavigationButton direction="next" onClick={nextProject} />
            </div>
          ) : (
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1 },
                },
              }}
              initial="hidden"
              animate="visible"
            >
              {projectsData.slice(0, visibleProjects).map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </motion.div>
          )}
        </div>

        {isMobile && (
          <div className="flex justify-center mt-8 gap-2">
            {projectsData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentProject(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentProject ? "w-6 bg-[#60A5FA]" : "bg-[#1E293B] hover:bg-[#60A5FA]/50"
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

const NavigationButton = ({ direction, onClick }: { direction: "prev" | "next"; onClick: () => void }) => (
  <motion.button
    onClick={onClick}
    className="absolute top-1/2 -translate-y-1/2 z-10 group"
    style={{ [direction === "prev" ? "left" : "right"]: "1rem" }}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
  >
    <div className="relative">
      <div className="absolute -inset-0.5 bg-[#60A5FA] rounded-full blur opacity-0 group-hover:opacity-30 transition duration-300" />
      <div className="relative p-2 bg-[#0A1120] rounded-full border border-[#1E293B] group-hover:border-[#60A5FA]/50 transition-colors duration-300">
        {direction === "prev" ? (
          <ChevronLeft className="w-6 h-6 text-[#60A5FA]" />
        ) : (
          <ChevronRight className="w-6 h-6 text-[#60A5FA]" />
        )}
      </div>
    </div>
  </motion.button>
)

const ProjectCard = ({ project }: { project: Project }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev + 1) % project.thumbnails.length)
  }, [project.thumbnails.length])

  const prevImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev - 1 + project.thumbnails.length) % project.thumbnails.length)
  }, [project.thumbnails.length])

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      <Tilt options={defaultTiltOptions}>
        <div className="relative group">
          {/* Card glow effect */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-[#60A5FA] to-[#60A5FA] rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-1000 group-hover:duration-200" />
          
          {/* Card content */}
          <div className="relative flex flex-col bg-[#0A1120] rounded-2xl border border-[#1E293B] backdrop-blur-xl overflow-hidden">
            {/* Image section */}
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
                  transition={{ duration: 0.3 }}
                />
              </AnimatePresence>

              {project.thumbnails.length > 1 && (
                <>
                  <ImageNavigationButton direction="prev" onClick={prevImage} />
                  <ImageNavigationButton direction="next" onClick={nextImage} />
                </>
              )}

              {/* Image overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1120] to-transparent opacity-50" />
            </div>

            {/* Content section */}
            <div className="p-6 space-y-4">
              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-[#60A5FA] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-sm text-[#94A3B8] mt-2">{project.description}</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center text-sm text-[#94A3B8]">
                  <Calendar className="w-4 h-4 mr-2 text-[#60A5FA]" />
                  <span>{project.duration}</span>
                </div>
                <div className="flex items-center text-sm text-[#94A3B8]">
                  <Code className="w-4 h-4 mr-2 text-[#60A5FA]" />
                  <span className="truncate">{project.techStack.join(", ")}</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === "Finalizado"
                      ? "bg-green-500/10 text-green-400 border border-green-500/20"
                      : "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20"
                  }`}
                >
                  {project.status}
                </span>

                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group/link"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#60A5FA] to-[#60A5FA] rounded-full blur-md opacity-25 group-hover/link:opacity-50 transition duration-1000 group-hover/link:duration-200" />
                  <div className="relative px-4 py-2 bg-[#0F172A] rounded-full border border-[#60A5FA]/50 hover:border-[#60A5FA] text-[#60A5FA] text-sm font-medium inline-flex items-center gap-2 transition-all duration-300">
                    Ver Projeto
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </Tilt>
    </motion.div>
  )
}

const ImageNavigationButton = ({ direction, onClick }: { direction: "prev" | "next"; onClick: () => void }) => (
  <motion.button
    onClick={onClick}
    className={`absolute top-1/2 -translate-y-1/2 ${
      direction === "prev" ? "left-2" : "right-2"
    } p-1.5 rounded-full bg-[#0A1120]/80 opacity-0 group-hover:opacity-100
    transition-all duration-300 hover:bg-[#0A1120] border border-[#1E293B] hover:border-[#60A5FA]/50`}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
  >
    {direction === "prev" ? (
      <ChevronLeft className="w-4 h-4 text-[#60A5FA]" />
    ) : (
      <ChevronRight className="w-4 h-4 text-[#60A5FA]" />
    )}
  </motion.button>
)

export default Projects
