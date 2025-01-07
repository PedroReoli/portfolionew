'use client'

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projectsData, Project } from "@/constants";
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projectsData.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projectsData.length) % projectsData.length);
  };

  return (
    <motion.section 
      className="bg-[#111111] text-white py-12 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto">
        <motion.h2 
          className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Meus Projetos <span className="text-blue-500">;</span>
        </motion.h2>
        {isMobile ? (
          <div className="relative">
            <AnimatePresence mode="wait">
              <ProjectCard key={currentProject} project={projectsData[currentProject]} />
            </AnimatePresence>
            <button 
              onClick={prevProject} 
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-500 bg-opacity-50 rounded-full p-2 hover:bg-blue-600 hover:bg-opacity-75 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button 
              onClick={nextProject} 
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-500 bg-opacity-50 rounded-full p-2 hover:bg-blue-600 hover:bg-opacity-75 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative h-48 sm:h-56">
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
      <div className="p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-bold mb-2 text-blue-400">{project.title}</h3>
        <p className="text-sm text-gray-300 mb-3">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-3">
          {project.techStack.map((tech: string, index: number) => (
            <span key={index} className="bg-gray-700 text-xs text-white px-2 py-1 rounded">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex justify-between items-center text-xs sm:text-sm text-gray-400 mb-3">
          <span>{project.type}</span>
          <span>{project.duration}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className={`text-xs sm:text-sm ${project.status === 'Finalizado' ? 'text-green-400' : 'text-yellow-400'}`}>
            {project.status}
          </span>
          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center py-1 px-3 sm:py-2 sm:px-4 rounded-full text-sm font-semibold border transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 text-white border-blue-500 hover:bg-blue-500 hover:text-white hover:shadow-lg active:bg-blue-600"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2 text-white" />
            Ver Projeto
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
