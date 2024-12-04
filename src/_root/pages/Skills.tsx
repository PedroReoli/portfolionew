import React, { useState } from 'react';
import { skillsData, Skill } from '@/constants/skillsData';
import SkillsDescription from '@/components/SkillsDescription';

const Skills: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  const handleClick = (skill: Skill) => {
    setSelectedSkill(skill);
  };

  // Organizar as skills por áreas
  const areas = [
    { title: 'Front-End', skills: skillsData.filter(skill => skill.area.toLowerCase() === 'frontend') },
    { title: 'Back-End', skills: skillsData.filter(skill => skill.area.toLowerCase() === 'backend') },
    { title: 'Banco de Dados', skills: skillsData.filter(skill => skill.area.toLowerCase() === 'database') },
    { title: 'Ferramentas', skills: skillsData.filter(skill => skill.area.toLowerCase() === 'devops') },
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Exibindo as habilidades organizadas por áreas */}
        <div className="space-y-4 md:w-full">
          {areas.map((area, idx) => (
            <div key={idx}>
              <h2 className="text-xl font-semibold text-white mb-2">{area.title}</h2>
              <div className="flex flex-wrap gap-2">
                {area.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center bg-gray-800 text-white py-1 px-2 rounded-md shadow-sm hover:bg-gray-700 transition duration-300 ease-in-out cursor-pointer"
                    onClick={() => handleClick(skill)}
                    style={{ minWidth: '80px', height: '36px' }}
                  >
                    <img src={skill.icon} alt={skill.title} className="w-5 h-5 mr-2" />
                    <div className="text-xs font-medium">{skill.title}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Exibindo a descrição da skill selecionada */}
        <div className="bg-gray-900 p-4 rounded-lg shadow-md text-white">
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
