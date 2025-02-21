"use client"

import { useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Eye, ArrowRight, ArrowLeft, Calendar, GitBranch, Folder, Tag } from "lucide-react"
import { projectsData, type Project } from "@/constants"

const Projects = () => {
  const [currentImageIndices, setCurrentImageIndices] = useState<{ [key: number]: number }>(
    projectsData.reduce((acc, _, index) => ({ ...acc, [index]: 0 }), {}),
  )

  const handleImageNavigation = useCallback((projectIndex: number, direction: "next" | "prev") => {
    setCurrentImageIndices((prev) => {
      const thumbnails = projectsData[projectIndex].thumbnails
      return {
        ...prev,
        [projectIndex]:
          direction === "next"
            ? (prev[projectIndex] + 1) % thumbnails.length
            : (prev[projectIndex] - 1 + thumbnails.length) % thumbnails.length,
      }
    })
  }, [])

  return (
    <section className="bg-[#111111] min-h-screen py-12 sm:py-16 lg:py-24">
      <div className="max-w-[1400px] mx-auto px-3 xxs:px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-2xl xxs:text-3xl sm:text-4xl font-bold text-white">
            Meus Projetos<span className="text-[#60A5FA]">;</span>
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
          className="space-y-6 sm:space-y-8 lg:space-y-12"
        >
          {projectsData.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              currentImageIndex={currentImageIndices[index]}
              onImageNavigation={(direction) => handleImageNavigation(index, direction)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

const ProjectCard = ({
  project,
  currentImageIndex,
  onImageNavigation,
}: {
  project: Project
  currentImageIndex: number
  onImageNavigation: (direction: "next" | "prev") => void
}) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.4 }}
      className="group relative bg-gradient-to-br from-[#0A1120] to-[#111827] rounded-xl xxs:rounded-2xl overflow-hidden border border-[#1E293B] hover:border-[#60A5FA]/30"
    >
      <div className="flex flex-col lg:flex-row h-full">
        {/* Seção de Imagem */}
        <div className="relative w-full lg:w-[45%] aspect-[4/3] xxs:aspect-video lg:aspect-auto">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImageIndex}
              src={project.thumbnails[currentImageIndex]}
              alt={project.title}
              className="w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          </AnimatePresence>

          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1120] via-transparent to-transparent opacity-60" />

          {project.thumbnails.length > 1 && (
            <>
              <div className="absolute inset-0 flex items-center justify-between px-2 xxs:px-4">
                <motion.button
                  onClick={(e) => {
                    e.preventDefault()
                    onImageNavigation("prev")
                  }}
                  className="p-1.5 xxs:p-2 rounded-full bg-black/30 backdrop-blur-sm border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-black/50"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ArrowLeft className="w-3 h-3 xxs:w-4 xxs:h-4 text-white" />
                </motion.button>
                <motion.button
                  onClick={(e) => {
                    e.preventDefault()
                    onImageNavigation("next")
                  }}
                  className="p-1.5 xxs:p-2 rounded-full bg-black/30 backdrop-blur-sm border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-black/50"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ArrowRight className="w-3 h-3 xxs:w-4 xxs:h-4 text-white" />
                </motion.button>
              </div>

              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 hidden xxs:flex gap-1">
                {project.thumbnails.map((_, idx) => (
                  <div
                    key={idx}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      idx === currentImageIndex ? "w-5 xxs:w-6 bg-[#60A5FA]" : "w-1 xxs:w-1.5 bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Conteúdo */}
        <div className="relative flex-1 p-4 xxs:p-5 sm:p-6 lg:p-8 flex flex-col">
          <div className="flex-1 space-y-3 xxs:space-y-4 sm:space-y-6">
            {/* Cabeçalho */}
            <div className="flex flex-col space-y-3 xxs:space-y-4">
              <div className="flex justify-between items-start gap-3 xxs:gap-4">
                <h3 className="text-lg xxs:text-xl sm:text-2xl font-bold text-white group-hover:text-[#60A5FA] transition-colors duration-300">
                  {project.title}
                </h3>
                <span
                  className={`shrink-0 px-2 xxs:px-2.5 sm:px-3 py-1 rounded-full text-[10px] xxs:text-xs font-medium ${
                    project.status === "Finalizado"
                      ? "bg-green-500/10 text-green-400 border border-green-500/20"
                      : "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20"
                  }`}
                >
                  {project.status}
                </span>
              </div>

              {/* Metadados - Mobile */}
              <div className="flex flex-wrap gap-2 xxs:gap-3 sm:hidden text-[10px] xxs:text-xs">
                <div className="flex items-center gap-1 xxs:gap-1.5 text-[#94A3B8]">
                  <Calendar className="w-3 h-3 xxs:w-3.5 xxs:h-3.5 text-[#60A5FA]" />
                  <span>{project.duration}</span>
                </div>
                <div className="flex items-center gap-1 xxs:gap-1.5 text-[#94A3B8]">
                  <Folder className="w-3 h-3 xxs:w-3.5 xxs:h-3.5 text-[#60A5FA]" />
                  <span>{project.category}</span>
                </div>
                <div className="flex items-center gap-1 xxs:gap-1.5 text-[#94A3B8]">
                  <Tag className="w-3 h-3 xxs:w-3.5 xxs:h-3.5 text-[#60A5FA]" />
                  <span>{project.type}</span>
                </div>
              </div>

              {/* Metadados - Desktop */}
              <div className="hidden sm:grid grid-cols-3 gap-4 text-sm">
                <div className="flex items-center gap-2 text-[#94A3B8]">
                  <Calendar className="w-4 h-4 text-[#60A5FA]" />
                  <span>{project.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-[#94A3B8]">
                  <Folder className="w-4 h-4 text-[#60A5FA]" />
                  <span>{project.category}</span>
                </div>
                <div className="flex items-center gap-2 text-[#94A3B8]">
                  <Tag className="w-4 h-4 text-[#60A5FA]" />
                  <span>{project.type}</span>
                </div>
              </div>
            </div>

            {/* Descrição */}
            <p className="text-xs xxs:text-sm text-[#94A3B8] leading-relaxed">{project.description}</p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-1 xxs:gap-1.5 sm:gap-2">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-1.5 xxs:px-2 sm:px-3 py-0.5 xxs:py-1 text-[10px] xxs:text-xs font-medium text-[#60A5FA] bg-[#60A5FA]/5 rounded-full border border-[#60A5FA]/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="mt-4 xxs:mt-6 pt-3 xxs:pt-4 sm:mt-8 sm:pt-6 border-t border-[#1E293B] flex items-center justify-between">
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link inline-flex items-center"
              whileHover={{ x: 4 }}
            >
              <div className="flex items-center gap-1.5 xxs:gap-2 text-[#60A5FA] group-hover/link:text-white transition-colors duration-300">
                <div className="p-1 xxs:p-1.5 sm:p-2 rounded-full bg-[#60A5FA]/5 group-hover/link:bg-[#60A5FA]/10 transition-colors duration-300">
                  <Eye className="w-3 h-3 xxs:w-3.5 xxs:h-3.5 sm:w-4 sm:h-4" />
                </div>
                <span className="text-[10px] xxs:text-xs sm:text-sm font-medium">Visualizar</span>
              </div>
            </motion.a>

            <motion.a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="group/repo inline-flex items-center"
              whileHover={{ x: -4 }}
            >
              <div className="flex items-center gap-1.5 xxs:gap-2 text-[#94A3B8] group-hover/repo:text-white transition-colors duration-300">
                <span className="text-[10px] xxs:text-xs sm:text-sm font-medium">Repositório</span>
                <div className="p-1 xxs:p-1.5 sm:p-2 rounded-full bg-[#94A3B8]/5 group-hover/repo:bg-[#94A3B8]/10 transition-colors duration-300">
                  <GitBranch className="w-3 h-3 xxs:w-3.5 xxs:h-3.5 sm:w-4 sm:h-4" />
                </div>
              </div>
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Projects

