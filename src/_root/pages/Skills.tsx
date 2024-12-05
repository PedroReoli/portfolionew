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
    <div className="container mx-auto py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 min-h-screen bg-[#111111]">
      <motion.h1 
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Habilidades <span className="text-blue-500">;</span>
      </motion.h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
        {/* Coluna de Categorias e Skills */}
        <div className="space-y-8 col-span-1">
          {categorizedSkills.map((category, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-4"
            >
              <h2 className="text-xl font-semibold text-blue-400 mb-4">{category.title}</h2>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center text-white py-2 px-3 rounded-lg transition duration-300 ease-in-out ${
                      selectedSkill?.title === skill.title
                        ? "bg-blue-500 text-white shadow-md"
                        : "bg-transparent border border-gray-600 hover:bg-gray-800"
                    }`}
                    onClick={() => handleClick(skill)}
                  >
                    <span className="text-sm font-medium">{skill.title}</span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Coluna de Descrição */}
        <div className="col-span-1 md:col-span-2 flex items-center justify-center">
          <AnimatePresence>
            {selectedSkill ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="w-full max-w-4xl"
              >
                <SkillsDescription skill={selectedSkill} />
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-gray-400 text-lg text-center"
              >
                Clique em uma habilidade para ver os detalhes.
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Skills;
