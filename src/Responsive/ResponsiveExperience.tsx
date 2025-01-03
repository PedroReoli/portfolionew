'use client'

import { motion } from "framer-motion";
import { useState } from "react";

const experiences = [
  {
    company: "EvaTech",
    period: "07/2024 - 11/2024",
    role: "Professor, Palestrante e Mentor",
    description:
      "Ministrei <span class='text-blue-400'>aulas</span>, <span class='text-blue-400'>workshops</span> e <span class='text-blue-400'>palestras</span> sobre habilidades tecnológicas essenciais, como <span class='text-blue-400'>Excel</span>, <span class='text-blue-400'>Word</span>, e plataformas como <span class='text-blue-400'>Teams</span> e <span class='text-blue-400'>Meet</span>. Além disso, trabalhei com conceitos básicos de <span class='text-blue-400'>IA</span>, empoderando mães negras solteiras a ingressar no mundo da tecnologia.",
    link: "https://evatech2024.netlify.app",
  },
  {
    company: "DevEmDesenvolvimento",
    period: "Em andamento",
    role: "Professor, Redator e Dono",
    description:
      "Plataforma educacional focada em novos entusiastas e <span class='text-blue-400'>programadores iniciantes</span> de TI. Oferece <span class='text-blue-400'>cursos</span>, <span class='text-blue-400'>blogs</span> e projetos práticos para compartilhar conhecimento e impulsionar carreiras na área de tecnologia.",
    link: "https://devemdesenvolvimento.com.br",
  },
  {
    company: "AutoCom3",
    period: "Em andamento",
    role: "Estagiário de Desenvolvimento",
    description:
      "Na Autocom3, aprofundei meus conhecimentos em <span class='text-blue-400'>Banco de Dados</span>, <span class='text-blue-400'>ASP.NET</span>, e <span class='text-blue-400'>C#</span>, além de atuar como <span class='text-blue-400'>Tester</span> de aplicações, em um ambiente profissional e humano.",
    link: "https://autocom3.com.br",
  },
];

const ResponsiveExperience = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 1;
  const totalPages = Math.ceil(experiences.length / itemsPerPage);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const paginatedExperiences = experiences.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <motion.section
      className="bg-[#111111] text-white py-8 px-4 flex flex-col items-center min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Título */}
      <motion.h2
        className="text-2xl font-bold text-center mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Experiências <span className="text-blue-500">;</span>
      </motion.h2>

      {/* Experiência */}
      <div className="w-full max-w-md">
        {paginatedExperiences.map((experience, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-4 rounded-lg shadow-lg border border-gray-700 transition-transform duration-300 hover:scale-105 hover:border-blue-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h3 className="text-xl font-bold text-blue-400 mb-2">
              {experience.company}
            </h3>
            <p className="text-sm text-gray-400 mb-1">{experience.period}</p>
            <p className="text-sm font-semibold text-gray-300 mb-3">
              {experience.role}
            </p>
            <p
              className="text-sm text-gray-300 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: experience.description }}
            ></p>
            {experience.link && (
              <a
                href={experience.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-3 text-blue-400 underline text-sm hover:text-blue-500 transition-all"
              >
                Ver mais
              </a>
            )}
          </motion.div>
        ))}
      </div>

      {/* Navegação */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-6 space-x-4">
          <button
            onClick={prevPage}
            className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-all"
          >
            ❮
          </button>
          <button
            onClick={nextPage}
            className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-all"
          >
            ❯
          </button>
        </div>
      )}
    </motion.section>
  );
};

export default ResponsiveExperience;
