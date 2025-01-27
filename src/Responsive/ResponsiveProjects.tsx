'use client'

import { useState, useRef } from "react";
import { projectsData } from "@/constants";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/Button";

const ResponsiveProjects = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const projectsPerPage = 1;
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
      className="bg-[#111111] text-white py-8 px-4 flex flex-col items-center min-h-screen relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h2
        className="text-2xl md:text-3xl font-bold text-center mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Meus Projetos <span className="text-blue-500">;</span>
      </motion.h2>

      <div className="w-full max-w-sm mx-auto">
        <AnimatePresence mode="wait">
          {projectsData
            .slice(currentPage * projectsPerPage, (currentPage + 1) * projectsPerPage)
            .map((project, _index) => (
              <ProjectCard key={currentPage} project={project} />
            ))}
        </AnimatePresence>
      </div>

      {totalPages > 1 && (
        <div className="fixed bottom-6 left-0 right-0 flex justify-center space-x-6">
          <button
            onClick={prevPage}
            className="flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-700 text-white w-12 h-12 rounded-full shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
            aria-label="Previous"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <button
            onClick={nextPage}
            className="flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-700 text-white w-12 h-12 rounded-full shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
            aria-label="Next"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      )}

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
      className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:scale-102 border border-blue-500"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      style={{
        height: '420px',
        display: 'flex',
        flexDirection: 'column',
      }}
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
            transition={{ duration: 0.2 }}
          />
        </AnimatePresence>
        <button
          onClick={prevImage}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-5 h-5 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <button
          onClick={nextImage}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-5 h-5 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-blue-400 mb-2 truncate">{project.title}</h3>
        <p className="text-sm text-gray-300 mb-3 overflow-hidden" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-3">
          {project.techStack.map((tech, index) => (
            <span
              key={index}
              className="bg-blue-500 bg-opacity-10 text-blue-300 text-xs px-2 py-0.5 rounded-md border border-blue-500 border-opacity-30"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex justify-between items-center text-xs text-gray-400 mb-2">
          <span>{project.type}</span>
          <span>{project.duration}</span>
        </div>
        <div className="flex justify-between items-center mt-auto">
          <span
            className={`text-sm font-medium ${
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

