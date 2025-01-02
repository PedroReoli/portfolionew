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
      className="min-h-screen bg-[#111111] text-white py-12 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <motion.h1 
          className="text-4xl font-bold text-center mb-8 text-[#00aaff]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Habilidades
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Categorias */}
          <div className="space-y-4 col-span-1">
            {categorizedSkills.map((category, idx) => (
              <motion.div 
                key={idx}
                className="p-4 bg-[#1a1a1a] rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <h2 className="text-lg font-semibold text-[#00aaff] mb-2">{category.title}</h2>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`py-1 px-2 rounded-md text-xs font-medium ${
                        selectedSkill?.title === skill.title
                          ? "bg-[#00aaff] text-white shadow"
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

          {/* Descrição */}
          <div className="col-span-1 md:col-span-2">
            <AnimatePresence>
              {selectedSkill ? (
                <motion.div
                  key={selectedSkill.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
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
                  className="text-gray-400 text-base text-center p-6 bg-gray-800 rounded-lg"
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
