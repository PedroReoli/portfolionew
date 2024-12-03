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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Exibindo as habilidades organizadas por áreas */}
        <div className="space-y-6 md:w-full flex flex-col gap-4">
          {areas.map((area, idx) => (
            <div key={idx}>
              <h2 className="text-2xl font-semibold text-white mb-3">{area.title}</h2>
              <div className="flex flex-wrap gap-3">
                {area.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center bg-gray-800 text-white py-1.5 px-2.5 rounded-lg shadow-md hover:bg-gray-700 transition duration-300 ease-in-out cursor-pointer"
                    onClick={() => handleClick(skill)}
                    style={{ width: 'auto', minWidth: '130px', height: '40px' }}
                  >
                    <img src={skill.icon} alt={skill.title} className="w-7 h-7 mr-3" />
                    <div className="text-xs">{skill.title}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Exibindo a descrição da skill selecionada */}
        <div className="bg-transparent p-4 rounded-lg shadow-md text-white space-y-3">
          {selectedSkill ? (
            <SkillsDescription skill={selectedSkill} />
          ) : (
            <div className="text-gray-400">Selecione uma habilidade para ver os detalhes.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Skills;
