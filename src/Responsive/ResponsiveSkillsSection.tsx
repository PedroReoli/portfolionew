'use client';

import React, { useState } from "react";
import { skillsData, Skill } from "@/constants/skillsData";
import { motion, AnimatePresence } from "framer-motion";

const ResponsiveSkillsSection: React.FC = () => {
  const [currentSkill, setCurrentSkill] = useState<Skill>(skillsData[0]);

  const getLevelPosition = (level: number): number => {
    return (level / 3) * 100;
  };

  const handleOpenCourse = (link: string) => {
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="py-8 px-4 bg-gradient-to-b from-[#111111] to-[#1a1a1a] min-h-screen text-white flex flex-col items-center">
      {/* Título */}
      <motion.h1 
        className="text-3xl font-bold text-center mb-8 tracking-wide"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Habilidades <span className="text-blue-400">;</span>
      </motion.h1>

      {/* Filtro */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {skillsData.map((skill, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentSkill(skill)}
            className={`py-2 px-4 text-sm font-semibold rounded-md transition-all duration-300 focus:outline-none ${
              currentSkill.title === skill.title
                ? "text-white bg-blue-500 shadow-lg"
                : "text-blue-400 bg-gray-800 hover:bg-gray-700"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {skill.title}
          </motion.button>
        ))}
      </div>

      {/* Card da Habilidade */}
      <motion.div 
        className="bg-gray-800 rounded-xl p-6 shadow-lg border-2 border-blue-500 w-full max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSkill.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Cabeçalho da Skill */}
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                <img
                  src={currentSkill.icon || "/placeholder.svg"}
                  alt={currentSkill.title}
                  className="w-8 h-8 object-contain"
                />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-white">
                  {currentSkill.title}
                </h3>
              </div>
            </div>

            {/* Descrição */}
            <p className="text-sm text-gray-300 mb-4">{currentSkill.description}</p>

            {/* Barra de Nível */}
            <div className="mb-6">
              <h3 className="text-xs sm:text-sm font-bold text-blue-400 mb-1">Nível</h3>
              <div className="relative w-full bg-gray-700/50 h-2 rounded-full">
                <motion.div
                  className="absolute top-0 left-0 h-2 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${getLevelPosition(currentSkill.level)}%` }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                ></motion.div>
              </div>
            </div>

            {/* Cursos Relacionados */}
            {currentSkill.courses.length > 0 && (
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-blue-400 mb-3">
                  Cursos Relacionados
                </h4>
                <div className="space-y-2">
                  {currentSkill.courses.map((course, idx) => (
                    <motion.button
                      key={idx}
                      onClick={() => handleOpenCourse(currentSkill.coursesLinks[idx])}
                      className="w-full py-2 px-4 text-sm font-medium text-left text-blue-400 bg-gray-700 rounded-md hover:bg-gray-600 transition-all duration-300 flex justify-between items-center"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="truncate mr-2">{course}</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </motion.button>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default ResponsiveSkillsSection;

