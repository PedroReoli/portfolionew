'use client'

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projectsData, Project } from "@/constants";
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const projectsPerPage = 3;
  const totalPages = Math.ceil(projectsData.length / projectsPerPage);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <motion.section 
      className="bg-[#111111] text-white min-h-screen py-20 px-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex-grow flex flex-col">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Meus Projetos <span className="text-blue-500">;</span>
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData
            .slice(currentPage * projectsPerPage, (currentPage + 1) * projectsPerPage)
            .map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
        </div>
        {totalPages > 1 && (
          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={prevPage}
              className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextPage}
              className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        )}
      </div>
    </motion.section>
  );
};

interface ProjectCardProps {
  project: Project;
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
      className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl"
      whileHover={{ scale: 1.03, border: '2px solid #3B82F6' }}
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
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-1 hover:bg-opacity-75 transition-colors"
        >
          <ChevronLeft className="w-5 h-5 text-white" />
        </button>
        <button 
          onClick={nextImage} 
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-1 hover:bg-opacity-75 transition-colors"
        >
          <ChevronRight className="w-5 h-5 text-white" />
        </button>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-blue-400">{project.title}</h3>
        <p className="text-sm text-gray-300 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech: string, index: number) => (
            <span key={index} className="bg-gray-700 text-xs text-white px-2 py-1 rounded">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex justify-between items-center text-sm text-gray-400 mb-4">
          <span>{project.type}</span>
          <span>{project.duration}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className={`text-sm ${project.status === 'Finalizado' ? 'text-green-400' : 'text-yellow-400'}`}>
            {project.status}
          </span>
          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center py-2 px-6 rounded-full text-base font-semibold border-2 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 text-white border-blue-500 hover:bg-blue-500 hover:text-white hover:shadow-lg active:bg-blue-600"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ExternalLink className="w-5 h-5 mr-2 text-white" />
            Ver Projeto
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
