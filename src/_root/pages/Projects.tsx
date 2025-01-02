'use client'

import { useState } from "react";
import { motion } from "framer-motion";
import { projectsData } from "@/constants";
import Button from "@/components/Button";

const Projects = () => {
  return (
    <motion.section 
      id="projects" 
      className="bg-[#111111] text-white min-h-screen py-20 px-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Meus Projetos <span className="text-blue-500">;</span>
        </motion.h2>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </motion.div>
        <motion.div 
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Button
            href="https://github.com/PedroReoli"
            variant="primary"
            className="shadow-lg"
          >
            Ver mais no GitHub
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

interface ProjectCardProps {
  project: typeof projectsData[number];
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === project.thumbnails.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? project.thumbnails.length - 1 : prevIndex - 1
    );
  };

  return (
    <motion.article
      className="rounded-lg overflow-hidden border-2 border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col"
      variants={cardVariants}
      whileHover={{ scale: 1.03, boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.3)" }}
    >
      {/* Imagem com setas */}
      <div className="relative">
        <motion.img
          src={project.thumbnails[currentImageIndex]}
          alt={`${project.title} - Imagem ${currentImageIndex + 1}`}
          className="w-full h-48 object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        />
        <motion.button
          onClick={handlePreviousImage}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          ❮
        </motion.button>
        <motion.button
          onClick={handleNextImage}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          ❯
        </motion.button>
      </div>

      {/* Conteúdo */}
      <div className="p-6 bg-[#222222] flex flex-col justify-between flex-grow">
        <div>
          <motion.h3 
            className="text-2xl font-bold mb-2 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            {project.title}
          </motion.h3>
          <motion.p 
            className="text-gray-400 mb-4 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            {project.type}
          </motion.p>
          <motion.p 
            className="text-gray-300 text-base mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            {project.description}
          </motion.p>
          <motion.p 
            className="text-gray-400 text-sm mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            <strong>Tecnologias:</strong> {project.techStack.join(", ")}
          </motion.p>
          <motion.p 
            className="text-gray-400 text-sm mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.6 }}
          >
            <strong>Duração:</strong> {project.duration}
          </motion.p>
        </div>
        <motion.p
          className={`text-sm font-semibold ${
            project.status === "Finalizado" ? "text-green-400" : "text-yellow-400"
          } mb-4`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.7 }}
        >
          {project.status}
        </motion.p>
        <Button
          href={project.link}
          variant="primary"
          className="mt-auto flex justify-center items-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visualizar 
        </Button>
      </div>
    </motion.article>
  );
};

export default Projects;
