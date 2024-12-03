import React from 'react';
import { Skill } from '../constants/skillsData';

// Função para calcular a posição da marcação
const getLevelPosition = (level: number): number => {
  return (level / 3) * 100; // Retorna a porcentagem para a posição da marcação
};

interface Props {
  skill: Skill;
}

const SkillsDescription: React.FC<Props> = ({ skill }) => {
  const levelPosition = getLevelPosition(skill.level);

  return (
    <div className="space-y-4 bg-transparent p-4 rounded-lg shadow-md transition-all duration-300 hover:shadow-2xl">
      {/* Título da Skill */}
      <h2 className="text-3xl font-bold text-white mb-3">{skill.title}</h2>

      {/* Descrição da Skill */}
      <div className="flex items-center space-x-4 mb-4">
        <img
          src={skill.icon}
          alt={skill.title}
          className="h-16 w-16 rounded-full border-2 border-gray-500 shadow-md"
        />
        <div className="text-lg text-gray-300">{skill.description}</div>
      </div>

      {/* Nível da Skill - Barra com marcações */}
      <div className="pt-3">
        <h3 className="text-xl font-semibold text-white mb-2">Nível</h3>
        <div className="relative w-full bg-gray-800 h-3 rounded-full shadow-inner">
          {/* Barra de progresso */}
          <div
            className="absolute top-0 left-0 h-3 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full transition-all duration-500 ease-in-out"
            style={{ width: `${levelPosition}%` }}
          ></div>

          {/* Marcação no meio da barra */}
          <div
            className="absolute top-0 h-3 w-0.5 bg-yellow-500"
            style={{ left: '50%' }}
          ></div>

          {/* Marcação do nível */}
          <div
            className="absolute top-0 h-3 w-0.5 bg-white"
            style={{ left: `calc(${levelPosition}% - 0.25rem)` }} // Centraliza a marcação sutil
          ></div>
        </div>
      </div>

      {/* Detalhes da Skill */}
      <div className="border-t-2 border-gray-700 pt-3">
        <h3 className="text-xl font-semibold text-white mb-2">Detalhes</h3>
        <p className="text-base text-gray-200">{skill.details}</p>
      </div>

      {/* Cursos e Links */}
      <div className="border-t-2 border-gray-700 pt-3">
        <h3 className="text-xl font-semibold text-white mb-2">Cursos</h3>
        <div className="space-y-3">
          {skill.courses.map((course, idx) => (
            <div key={idx} className="flex items-center space-x-3">
              <a
                href={skill.coursesLinks[idx]}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-600 py-2 px-4 border-2 border-blue-500 rounded-md transition duration-300 transform hover:scale-105"
              >
                {course}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsDescription;
