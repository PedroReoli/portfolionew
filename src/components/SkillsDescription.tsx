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
      className="flex flex-col justify-between bg-[#222222] p-6 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg min-h-[400px]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Cabeçalho */}
      <div>
        <div className="flex items-center space-x-4 mb-6">
          <motion.div
            className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <img src={skill.icon} alt={skill.title} className="w-8 h-8 object-contain" />
          </motion.div>
          <motion.h2
            className="text-2xl sm:text-3xl font-bold text-white"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            {skill.title}
          </motion.h2>
        </div>

        {/* Descrição */}
        <motion.p
          className="text-sm sm:text-base text-gray-300 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          {skill.description}
        </motion.p>

        {/* Nível */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          <h3 className="text-lg font-semibold text-white mb-2">Nível</h3>
          <div className="relative w-full bg-gray-700/50 h-3 rounded-full shadow-inner">
            <motion.div
              className="absolute top-0 left-0 h-3 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${levelPosition}%` }}
              transition={{ duration: 0.5, delay: 0.5 }}
            ></motion.div>
          </div>
        </motion.div>
      </div>

      {/* Detalhes */}
      <motion.div
        className="mt-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.5 }}
      >
        <h3 className="text-lg font-semibold text-white mb-2">Detalhes</h3>
        <p className="text-sm sm:text-base text-gray-300 leading-relaxed">{skill.details}</p>
      </motion.div>

      {/* Cursos */}
      {skill.courses.length > 0 && (
        <motion.div
          className="mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.6 }}
        >
          <h3 className="text-lg font-semibold text-white mb-3">Cursos Relacionados</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {skill.courses.map((course, idx) => (
              <motion.a
                key={idx}
                href={skill.coursesLinks[idx]}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 px-4 text-sm font-medium text-blue-400 border border-blue-400 rounded-md bg-transparent hover:bg-blue-400 hover:text-white transition-all duration-300 truncate text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {course}
              </motion.a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default SkillsDescription;
