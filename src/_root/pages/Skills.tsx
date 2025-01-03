'use client'

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skillsData, Skill } from "@/constants/skillsData";
import SkillsDescription from "@/components/SkillsDescription";

const Skills: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  const handleClick = (skill: Skill) => {
    setSelectedSkill((prevSkill) => (prevSkill?.title === skill.title ? null : skill));
  };

  const categories = [
    { key: "frontend", title: "Front-End" },
    { key: "backend", title: "Back-End" },
    { key: "database", title: "Banco de Dados" },
    { key: "devops", title: "Ferramentas" },
  ];

  const categorizedSkills = categories.map((category) => ({
    ...category,
    skills: skillsData.filter((skill) => skill.area.toLowerCase() === category.key),
  }));

  return (
    <motion.div 
      className="bg-[#111111] text-white min-h-screen flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex-grow flex flex-col p-4 sm:p-6 lg:p-8">
        <motion.h1 
          className="text-4xl font-bold text-center mb-8 text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Habilidades <span className="text-blue-400">;</span>
        </motion.h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-grow">
          {/* Categories */}
          <div className="space-y-4 col-span-1 overflow-auto">
            {categorizedSkills.map((category, idx) => (
              <motion.div 
                key={idx}
                className="p-4 bg-gray-800 rounded-xl shadow-lg hover:border-2 hover:border-blue-400 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <h2 className="text-lg font-semibold text-blue-400 mb-2">{category.title}</h2>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`py-1 px-2 rounded-md text-xs font-medium transition-all duration-300 ${
                        selectedSkill?.title === skill.title
                          ? "bg-blue-400 text-white shadow"
                          : "bg-gray-800 hover:bg-gray-700"
                      }`}
                      onClick={() => handleClick(skill)}
                    >
                      {skill.title}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Description */}
          <div className="col-span-1 lg:col-span-2 overflow-auto">
            <AnimatePresence mode="wait">
              {selectedSkill ? (
                <motion.div
                  key={selectedSkill.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="h-full"
                >
                  <SkillsDescription skill={selectedSkill} />
                </motion.div>
              ) : (
                <motion.div
                  key="placeholder"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="text-gray-400 text-base text-center p-6 bg-gray-800 rounded-xl shadow-lg h-full flex items-center justify-center"
                >
                  Clique em uma habilidade para ver os detalhes.
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
