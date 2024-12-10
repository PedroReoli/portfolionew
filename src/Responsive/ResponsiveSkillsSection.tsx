import React from "react";
import { skillsData } from "@/constants/skillsData";

const ResponsiveSkillsSection: React.FC = () => {
  const getLevelPosition = (level: number): number => (level / 3) * 100;

  const handleOpenCourse = (link: string) => {
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="py-8 px-4 bg-gradient-to-b from-[#111111] to-[#1a1a1a] text-white flex flex-col items-center">
      {/* Título */}
      <h1 className="text-2xl font-bold text-center mb-6 tracking-wide">
        Habilidades <span className="text-blue-500">;</span>
      </h1>

      {/* Skills */}
      <div className="space-y-6 w-full max-w-sm">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className="bg-[#222222] rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300"
          >
            {/* Cabeçalho da Skill */}
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                <img
                  src={skill.icon}
                  alt={skill.title}
                  className="w-8 h-8 object-contain"
                />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-white">
                  {skill.title}
                </h3>
              </div>
            </div>

            {/* Descrição */}
            <p className="text-sm text-gray-300 mb-4">{skill.description}</p>

            {/* Barra de Nível */}
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-white mb-2">Nível</h4>
              <div className="relative w-full bg-gray-700/50 h-3 rounded-full shadow-inner">
                <div
                  className="absolute top-0 left-0 h-3 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"
                  style={{ width: `${getLevelPosition(skill.level)}%` }}
                ></div>
                <div
                  className="absolute top-0 h-3 w-0.5 bg-yellow-500"
                  style={{ left: "50%" }}
                ></div>
                <div
                  className="absolute top-0 h-3 w-0.5 bg-white"
                  style={{
                    left: `calc(${getLevelPosition(skill.level)}% - 0.25rem)`,
                  }}
                ></div>
              </div>
            </div>

            {/* Cursos Relacionados */}
            {skill.courses.length > 0 && (
              <div>
                <h4 className="text-sm font-semibold text-white mb-3">
                  Cursos Relacionados
                </h4>
                <div className="flex flex-col gap-2">
                  {skill.courses.map((course, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleOpenCourse(skill.coursesLinks[idx])}
                      className="py-2 px-4 text-sm font-medium text-blue-400 border border-blue-400 rounded-md hover:bg-blue-400 hover:text-white transition-all duration-300 w-full text-left truncate"
                    >
                      {course}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ResponsiveSkillsSection;
