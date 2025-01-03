'use client';

import React, { useState, useRef } from "react";
import { skillsData, Skill } from "@/constants/skillsData";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Ícones de seta

const ResponsiveSkillsSection: React.FC = () => {
  const [currentSkill, setCurrentSkill] = useState<Skill>(skillsData[0]);
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const coursesPerPage = 2;

  const getLevelPosition = (level: number): number => (level / 3) * 100;

  const handleOpenCourse = (link: string) => {
    window.open(link, "_blank", "noopener,noreferrer");
  };

  const handleScroll = (direction: "left" | "right") => {
    if (!carouselRef.current) return;
    const courseWidth = carouselRef.current.offsetWidth / coursesPerPage; // Largura de 1 curso visível
    const scrollAmount = courseWidth * coursesPerPage; // Scroll de 2 cursos
    if (direction === "left") {
      carouselRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="py-6 px-4 bg-gradient-to-b from-[#111111] to-[#1a1a1a] min-h-screen text-white flex flex-col items-center">
      {/* Título */}
      <h1 className="text-3xl font-bold text-center mb-6 tracking-wide">
        Habilidades <span className="text-blue-400">;</span>
      </h1>

      {/* Filtro */}
      <div className="flex flex-wrap justify-center gap-3 mb-6">
        {skillsData.map((skill, index) => (
          <button
            key={index}
            onClick={() => setCurrentSkill(skill)}
            className={`py-2 px-4 text-sm font-semibold rounded-full transition-all duration-300 border-2 focus:outline-none ${
              currentSkill.title === skill.title
                ? "text-white bg-blue-500 border-blue-500 shadow-lg"
                : "text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-white hover:shadow-lg"
            }`}
          >
            {skill.title}
          </button>
        ))}
      </div>

      {/* Card da Habilidade */}
      <div className="bg-[#222222] rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 w-full max-w-md">
        {/* Cabeçalho da Skill */}
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
            <img
              src={currentSkill.icon}
              alt={currentSkill.title}
              className="w-8 h-8 object-contain"
            />
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-semibold text-white">
              {currentSkill.title}
            </h3>
          </div>
        </div>

        {/* Descrição */}
        <p className="text-sm text-gray-300 mb-4">{currentSkill.description}</p>

        {/* Barra de Nível */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-white mb-2">Nível</h4>
          <div className="relative w-full bg-gray-700/50 h-3 rounded-full shadow-inner">
            <div
              className="absolute top-0 left-0 h-3 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"
              style={{ width: `${getLevelPosition(currentSkill.level)}%` }}
            ></div>
          </div>
        </div>

        {/* Cursos Relacionados */}
        {currentSkill.courses.length > 0 && (
          <div>
            <h4 className="text-sm font-semibold text-white mb-3">
              Cursos Relacionados
            </h4>

            <div className="relative">
              {/* Carrossel */}
              <div
                ref={carouselRef}
                className="flex overflow-x-scroll scrollbar-hide gap-3"
              >
                {currentSkill.courses.map((course, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleOpenCourse(currentSkill.coursesLinks[idx])}
                    className="min-w-[45%] py-2 px-4 text-sm font-medium text-blue-400 border border-blue-400 rounded-md hover:bg-blue-400 hover:text-white transition-all duration-300 truncate"
                  >
                    {course}
                  </button>
                ))}
              </div>

              {/* Botões de navegação */}
              {currentSkill.courses.length > coursesPerPage && (
                <>
                  <button
                    onClick={() => handleScroll("left")}
                    className="absolute left-[-15px] top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition-all"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => handleScroll("right")}
                    className="absolute right-[-15px] top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition-all"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ResponsiveSkillsSection;
