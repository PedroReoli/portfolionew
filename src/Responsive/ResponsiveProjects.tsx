'use client'

import { useState, useRef } from "react";
import { projectsData } from "@/constants";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Button from "@/components/Button";

const ResponsiveProjects = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const projectsPerPage = 2;
  const totalPages = Math.ceil(projectsData.length / projectsPerPage);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.section
      ref={sectionRef}
      className="bg-[#111111] text-white py-6 px-4 flex flex-col items-center min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Título */}
      <motion.h2
        className="text-2xl md:text-3xl font-bold text-center mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Meus Projetos <span className="text-blue-500">;</span>
      </motion.h2>

      {/* Lista de Projetos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-3xl">
        {projectsData
          .slice(currentPage * projectsPerPage, (currentPage + 1) * projectsPerPage)
          .map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
      </div>

      {/* Navegação */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-8 space-x-4">
          <button
            onClick={prevPage}
            className="bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextPage}
            className="bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}

      {/* Botão GitHub */}
      <div className="mt-16">
        <Button
          href="https://github.com/PedroReoli"
          variant="primary"
          className="py-2 px-6 text-sm shadow-md hover:shadow-lg"
        >
          Ver mais no GitHub
        </Button>
      </div>
    </motion.section>
  );
};

interface ProjectCardProps {
  project: typeof projectsData[number];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === project.thumbnails.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? project.thumbnails.length - 1 : prevIndex - 1
    );
  };

  return (
    <motion.div
      className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:scale-105"
    >
      <div className="relative h-36">
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
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-colors"
        >
          <ChevronLeft className="w-5 h-5 text-white" />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-colors"
        >
          <ChevronRight className="w-5 h-5 text-white" />
        </button>
      </div>
      <div className="p-3">
        <h3 className="text-base font-bold text-blue-400 mb-2">{project.title}</h3>
        <p className="text-sm text-gray-300 mb-3">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-3">
          {project.techStack.map((tech, index) => (
            <span
              key={index}
              className="bg-gray-700 text-xs text-white px-2 py-1 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex justify-between items-center text-sm text-gray-400 mb-2">
          <span>{project.type}</span>
          <span>{project.duration}</span>
        </div>
        <div className="flex justify-between items-center">
          <span
            className={`text-sm ${
              project.status === "Finalizado"
                ? "text-green-400"
                : "text-yellow-400"
            }`}
          >
            {project.status}
          </span>
          <Button
            href={project.link}
            variant="primary"
            className="py-1 px-4 text-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visualizar
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default ResponsiveProjects;
