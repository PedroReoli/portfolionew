'use client'

import React from "react";
import { motion } from "framer-motion";
import { Skill } from "@/constants/skillsData";

const getLevelPosition = (level: number): number => {
  return (level / 3) * 100;
};

interface Props {
  skill: Skill;
}

const SkillsDescription: React.FC<Props> = ({ skill }) => {
  const levelPosition = getLevelPosition(skill.level);

  return (
    <motion.div
      className="flex flex-col bg-gray-800 p-4 rounded-lg shadow-lg transition-all duration-300 h-full overflow-y-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      {/* Header */}
      <div className="flex items-center space-x-4 mb-4">
        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-400/20 border border-blue-400 rounded-full flex items-center justify-center">
          <img src={skill.icon} alt={skill.title} className="w-6 h-6 sm:w-8 sm:h-8 object-contain" />
        </div>
        <h2 className="text-lg sm:text-xl font-bold text-blue-400">{skill.title}</h2>
      </div>

      {/* Description */}
      <p className="text-xs sm:text-sm text-gray-300 mb-4">{skill.description}</p>

      {/* Level */}
      <div className="mb-4">
        <h3 className="text-xs sm:text-sm font-bold text-blue-400 mb-1">Nível</h3>
        <div className="relative w-full bg-gray-700/50 h-2 rounded-full">
          <div
            className="absolute top-0 left-0 h-2 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"
            style={{ width: `${levelPosition}%` }}
          ></div>
        </div>
      </div>

      {/* Details */}
      <div>
        <h3 className="text-xs sm:text-sm font-bold text-blue-400 mb-2">Detalhes</h3>
        <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">{skill.details}</p>
      </div>

      {/* Courses */}
      {skill.courses.length > 0 && (
        <div className="mt-4">
          <h3 className="text-xs sm:text-sm font-bold text-blue-400 mb-2">Cursos Relacionados</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {skill.courses.map((course, idx) => (
              <a
                key={idx}
                href={skill.coursesLinks[idx]}
                target="_blank"
                rel="noopener noreferrer"
                className="py-1 px-2 md:py-1.5 md:px-3 lg:py-2 lg:px-4 text-xs md:text-sm font-medium text-blue-400 border border-blue-400 rounded-md hover:bg-blue-400 hover:text-white transition-all duration-300 text-center truncate"
              >
                {course}
              </a>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default SkillsDescription;
