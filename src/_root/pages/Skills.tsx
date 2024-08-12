// src/_root/pages/Skills.tsx

import  { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { skillsData, Skill } from '@/constants';

const Skills = () => {
  const [currentSkill, setCurrentSkill] = useState<Skill | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 6;

  const getLevelDescription = (level: number): string => {
    if (level >= 0 && level < 1) {
      return 'Iniciante';
    } else if (level >= 1 && level < 2) {
      return 'Intermediário';
    } else if (level >= 2 && level <= 3) {
      return 'Avançado';
    } else {
      return '';
    }
  };

  const handlePrevSkill = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - itemsPerPage, 0));
  };

  const handleNextSkill = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + itemsPerPage, skillsData.length - itemsPerPage));
  };

  return (
    <section id="skills" className="bg-[#111111] text-white py-20 px-5">
      <div className="container mx-auto flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8">
        <div className="flex-1 mb-10 lg:mb-0">
          <h2 className="text-4xl font-bold mb-5">Conhecimentos <span className="text-blue-500">.</span></h2>
          <AnimatePresence mode="wait">
            {currentSkill ? (
              <motion.div
                key={currentSkill.title}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="space-y-4"
              >
                <motion.p className="text-lg text-gray-300 font-semibold">{currentSkill.description}</motion.p>
                <motion.p className="text-lg text-gray-300">
                  <span className="text-blue-500">Projeto:</span> {currentSkill.project}
                </motion.p>
                <motion.p className="text-lg text-gray-300">
                  <span className="text-blue-500">Vantagens:</span> {currentSkill.advantages}
                </motion.p>
                <motion.p className="text-lg text-gray-300">
                  <span className="text-blue-500">Onde usar:</span> {currentSkill.usage}
                </motion.p>
              </motion.div>
            ) : (
              <p className="text-lg text-gray-300">Passe o cursor sobre uma habilidade para ver os detalhes.</p>
            )}
          </AnimatePresence>
        </div>
        <div className="flex-1 relative">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {skillsData.slice(currentIndex, currentIndex + itemsPerPage).map((skill, index) => (
              <article
                key={index}
                className="bg-gray-900 p-5 rounded-lg flex flex-col items-center group relative cursor-pointer neon-hover transition-transform transform hover:scale-105"
                onMouseEnter={() => setCurrentSkill(skill)}
              >
                <img src={skill.icon} alt={`ícone do ${skill.title}`} className="mb-4 w-24 h-24" />
                <p className="text-lg font-bold">{skill.title}</p>
                <div className="w-full bg-gray-700 rounded-full h-2.5 mb-4">
                  <div className={`bg-blue-600 h-2.5 rounded-full`} style={{ width: `${(skill.level / 3) * 100}%` }}></div>
                </div>
                <p className="text-sm">{getLevelDescription(skill.level)}</p>
              </article>
            ))}
          </div>
          {currentIndex > 0 && (
            <button 
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-blue-600 p-3 rounded-full shadow-lg hover:bg-blue-400 transition-colors"
              onClick={handlePrevSkill}
              style={{ zIndex: 10 }}
            >
              <FaChevronLeft className="text-white" />
            </button>
          )}
          {currentIndex < skillsData.length - itemsPerPage && (
            <button 
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 p-3 rounded-full shadow-lg hover:bg-blue-400 transition-colors"
              onClick={handleNextSkill}
              style={{ zIndex: 10 }}
            >
              <FaChevronRight className="text-white" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;
