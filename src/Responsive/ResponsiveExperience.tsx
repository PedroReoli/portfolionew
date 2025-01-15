// Componente responsivo para 720px
'use client'

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

// Lista de experiências
const experiences = [
  {
    company: "EvaTech",
    period: "07/2024 - 11/2024",
    role: "Professor, Palestrante e Mentor",
    description:
      "Ministrei <span class='text-blue-400'>aulas</span>, <span class='text-blue-400'>workshops</span> e <span class='text-blue-400'>palestras</span> sobre habilidades tecnológicas essenciais, promovendo o empoderamento digital de mulheres negras por meio de metodologias baseadas em resolução de problemas. Consegui impactar diretamente a vida de 40 mulheres, ajudando algumas a saírem da estagnação tecnológica em apenas um semestre.",
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
      "Na Autocom3, aprofundei meus conhecimentos em <span class='text-blue-400'>Banco de Dados</span>, <span class='text-blue-400'>ASP.NET</span>, e <span class='text-blue-400'>C#</span>. Desenvolvi e executei casos de teste, participei da criação de aplicativos de automação de contratos e realizei a migração de dados de uma planilha para uma tabela SQL, aprimorando processos internos em um ambiente profissional e humano.",
    link: "https://autocom3.com.br",
  },
];

// Componente principal
const ResponsiveExperience = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 1;
  const totalPages = Math.ceil(experiences.length / itemsPerPage);

  // Função para avançar página
  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  // Função para retroceder página
  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  // Paginando as experiências
  const paginatedExperiences = experiences.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <motion.section
      className="bg-[#111111] text-white py-8 px-4 flex flex-col items-center min-h-screen relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      {/* Título */}
      <motion.h2
        className="text-2xl font-bold text-center mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Experiências <span className="text-blue-500">;</span>
      </motion.h2>

      {/* Experiência */}
      <div className="w-full max-w-sm mx-auto">
        <AnimatePresence mode="wait">
          {paginatedExperiences.map((experience, _index) => (
            <motion.div
              key={currentPage}
              className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700 transition-transform duration-300 hover:scale-105 hover:border-blue-400"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              style={{
                minHeight: '400px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <h3 className="text-xl font-bold text-blue-400 mb-4 truncate">
                  {experience.company}
                </h3>
                <p className="text-sm text-gray-400 mb-2">{experience.period}</p>
                <p className="text-sm font-semibold text-gray-300 mb-4">
                  {experience.role}
                </p>
                <p
                  className="text-sm text-gray-300 leading-relaxed mb-4"
                  dangerouslySetInnerHTML={{ __html: experience.description }}
                ></p>
              </div>
              {experience.link && (
                <div className="mt-auto flex justify-center">
                  <a
                    href={experience.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-center px-8 py-3 border border-blue-500 text-white font-semibold rounded-full shadow-md hover:shadow-lg hover:text-blue-500 hover:bg-transparent transition-all"
                  >
                    Ver mais
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Navegação */}
      {totalPages > 1 && (
        <div className="fixed bottom-6 left-0 right-0 flex justify-center space-x-6">
          <button
            onClick={prevPage}
            className="flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-700 text-white w-12 h-12 rounded-full shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
            aria-label="Previous"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <button
            onClick={nextPage}
            className="flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-700 text-white w-12 h-12 rounded-full shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
            aria-label="Next"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      )}
    </motion.section>
  );
};

export default ResponsiveExperience;
