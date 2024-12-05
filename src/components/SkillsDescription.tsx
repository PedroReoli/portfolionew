import React, { useState } from "react";
import { Skill } from "../constants/skillsData";

const getLevelPosition = (level: number): number => {
  return (level / 3) * 100;
};

interface Props {
  skill: Skill;
}

const SkillsDescription: React.FC<Props> = ({ skill }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const levelPosition = getLevelPosition(skill.level);
  const itemsPerPage = 2; // Mostra no máximo 2 cursos por vez
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
    <div className="space-y-4 bg-gray-900/20 p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
      {/* Título da Skill */}
      <h2 className="text-2xl font-bold text-white">{skill.title}</h2>
      <div className="flex items-center space-x-3 mb-4">
        <img
          src={skill.icon}
          alt={skill.title}
          className="h-12 w-12 rounded-full border-2 border-gray-500 shadow-sm"
        />
        <div className="text-sm text-gray-300">{skill.description}</div>
      </div>

      {/* Nível da Skill */}
      <div>
        <h3 className="text-lg font-semibold text-white mb-2">Nível</h3>
        <div className="relative w-full bg-gray-700/50 h-2 rounded-full shadow-inner">
          <div
            className="absolute top-0 left-0 h-2 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"
            style={{ width: `${levelPosition}%` }}
          ></div>
          <div className="absolute top-0 h-2 w-0.5 bg-yellow-500" style={{ left: "50%" }}></div>
          <div
            className="absolute top-0 h-2 w-0.5 bg-white"
            style={{ left: `calc(${levelPosition}% - 0.25rem)` }}
          ></div>
        </div>
      </div>

      {/* Detalhes da Skill */}
      <div className="border-t border-gray-600 pt-4">
        <h3 className="text-lg font-semibold text-white mb-2">Detalhes</h3>
        <p className="text-sm text-gray-200">{skill.details}</p>
      </div>

      {/* Carrossel de Cursos */}
      <div className="border-t border-gray-600 pt-4">
        <h3 className="text-lg font-semibold text-white mb-2">Cursos</h3>
        <div className="flex items-center justify-between">
          {/* Botão "Anterior" */}
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`${
              currentIndex === 0 ? "text-gray-500" : "text-blue-400 hover:text-blue-600"
            } px-2`}
          >
            &lt;
          </button>

          <div className="flex-1 grid grid-cols-1 gap-3 text-center">
            {skill.courses
              .slice(currentIndex, currentIndex + itemsPerPage)
              .map((course, idx) => (
                <a
                  key={idx}
                  href={skill.coursesLinks[idx]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-600 py-2 px-4 border border-blue-500 rounded-lg transition duration-300 transform"
                >
                  {course}
                </a>
              ))}
          </div>

          {/* Botão "Próximo" */}
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
      </div>
    </div>
  );
};

export default SkillsDescription;
