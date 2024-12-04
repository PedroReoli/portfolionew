import React, { useState } from "react";
import { Skill } from "../constants/skillsData";

// Função para calcular a posição da marcação
const getLevelPosition = (level: number): number => {
  return (level / 3) * 100; // Retorna a porcentagem para a posição da marcação
};

interface Props {
  skill: Skill;
}

const SkillsDescription: React.FC<Props> = ({ skill }) => {
  const [currentIndex, setCurrentIndex] = useState(0); // Índice inicial do carrossel
  const levelPosition = getLevelPosition(skill.level);

  const itemsPerPage = 4; // 2 colunas por 2 linhas
  const totalCourses = skill.courses.length;

  const handleNext = () => {
    if (currentIndex + itemsPerPage < totalCourses) {
      setCurrentIndex((prev) => prev + itemsPerPage);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - itemsPerPage);
    }
  };

  return (
    <div className="space-y-4 bg-gray-900 p-4 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg max-w-lg mx-auto">
      {/* Título da Skill */}
      <h2 className="text-2xl font-bold text-white mb-2">{skill.title}</h2>

      {/* Descrição da Skill */}
      <div className="flex items-center space-x-3 mb-4">
        <img
          src={skill.icon}
          alt={skill.title}
          className="h-12 w-12 rounded-full border-2 border-gray-500 shadow-sm"
        />
        <div className="text-sm text-gray-300">{skill.description}</div>
      </div>

      {/* Nível da Skill - Barra com marcações */}
      <div>
        <h3 className="text-lg font-semibold text-white mb-2">Nível</h3>
        <div className="relative w-full bg-gray-800 h-2 rounded-full shadow-inner">
          {/* Barra de progresso */}
          <div
            className="absolute top-0 left-0 h-2 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full transition-all duration-500 ease-in-out"
            style={{ width: `${levelPosition}%` }}
          ></div>

          {/* Marcação no meio da barra */}
          <div
            className="absolute top-0 h-2 w-0.5 bg-yellow-500"
            style={{ left: "50%" }}
          ></div>

          {/* Marcação do nível */}
          <div
            className="absolute top-0 h-2 w-0.5 bg-white"
            style={{ left: `calc(${levelPosition}% - 0.25rem)` }}
          ></div>
        </div>
      </div>

      {/* Detalhes da Skill */}
      <div className="border-t border-gray-700 pt-3">
        <h3 className="text-lg font-semibold text-white mb-2">Detalhes</h3>
        <p className="text-sm text-gray-200">{skill.details}</p>
      </div>

      {/* Cursos e Links */}
      <div className="border-t border-gray-700 pt-3">
        <h3 className="text-lg font-semibold text-white mb-2">Cursos</h3>

        {/* Cursos em layout de grade */}
        <div className="flex flex-col items-center space-y-3">
          {/* Botão "Anterior" */}
          <div className="flex w-full justify-between">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`${
                currentIndex === 0 ? "text-gray-500" : "text-blue-400 hover:text-blue-600"
              } px-2`}
            >
              &lt;
            </button>

            <button
              onClick={handleNext}
              disabled={currentIndex + itemsPerPage >= totalCourses}
              className={`${
                currentIndex + itemsPerPage >= totalCourses
                  ? "text-gray-500"
                  : "text-blue-400 hover:text-blue-600"
              } px-2`}
            >
              &gt;
            </button>
          </div>

          <div className="grid grid-cols-1 gap-3">
            {skill.courses
              .slice(currentIndex, currentIndex + itemsPerPage)
              .map((course, idx) => (
                <div key={idx} className="grid grid-cols-2 gap-3">
                  <a
                    href={skill.coursesLinks[idx]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-600 py-2 px-4 border border-blue-500 rounded-lg transition duration-300 transform hover:scale-105 text-center"
                  >
                    {course}
                  </a>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsDescription;
