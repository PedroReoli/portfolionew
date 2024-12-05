import React, { useState } from "react";
import { skillsData, Skill } from "@/constants/skillsData";
import SkillsDescription from "@/components/SkillsDescription";

const Skills: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  const handleClick = (skill: Skill) => {
    setSelectedSkill(skill);
  };

  const areas = [
    { title: "Front-End", skills: skillsData.filter((skill) => skill.area.toLowerCase() === "frontend") },
    { title: "Back-End", skills: skillsData.filter((skill) => skill.area.toLowerCase() === "backend") },
    { title: "Banco de Dados", skills: skillsData.filter((skill) => skill.area.toLowerCase() === "database") },
    { title: "Ferramentas", skills: skillsData.filter((skill) => skill.area.toLowerCase() === "devops") },
  ];

  return (
    <div className="container mx-auto py-16 px-5 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Coluna de Skills */}
        <div className="space-y-6 col-span-1 md:col-span-1">
          {areas.map((area, idx) => (
            <div key={idx}>
              <h2 className="text-lg font-semibold text-white mb-4">{area.title}</h2>
              <div className="flex flex-wrap gap-2">
                {area.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center bg-gray-900/20 text-white py-2 px-3 rounded-lg shadow-sm hover:bg-gray-700/40 transition duration-300 ease-in-out cursor-pointer"
                    onClick={() => handleClick(skill)}
                  >
                    <img src={skill.icon} alt={skill.title} className="w-5 h-5 mr-2" />
                    <div className="text-sm font-medium">{skill.title}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Coluna de Descrição */}
        <div className="col-span-1 md:col-span-2">
          {selectedSkill ? (
            <SkillsDescription skill={selectedSkill} />
          ) : (
            <div className="text-gray-400 text-center">
              Selecione uma habilidade para ver os detalhes.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Skills;
