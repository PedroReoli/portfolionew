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

const Experiences = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;
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
    <section
      id="experiences"
      className="bg-[#111111] text-white min-h-screen py-16 px-5 flex items-center"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Experiências <span className="text-blue-400">;</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {paginatedExperiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} index={index} />
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={prevPage}
              className="bg-blue-400 text-white py-2 px-6 rounded-full hover:bg-blue-500 transition-all"
            >
              Anterior
            </button>
            <button
              onClick={nextPage}
              className="bg-blue-400 text-white py-2 px-6 rounded-full hover:bg-blue-500 transition-all"
            >
              Próximo
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

interface ExperienceCardProps {
  experience: {
    company: string;
    period: string;
    role: string;
    description: string;
    link?: string;
  };
  index: number;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience, index }) => {
  return (
    <motion.div
      className="bg-gray-800 p-6 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:border-2 hover:border-blue-400 flex flex-col justify-between h-full"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      <h3 className="text-lg font-bold text-blue-400 mb-2">{experience.company}</h3>
      <p className="text-xs text-gray-400 mb-2">{experience.period}</p>
      <p className="text-sm text-gray-300 font-semibold mb-4">{experience.role}</p>
      <p
        className="text-sm text-gray-300 leading-relaxed flex-grow"
        dangerouslySetInnerHTML={{ __html: experience.description }}
      />
      {experience.link && (
        <div className="flex justify-center mt-4">
          <a
            href={experience.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center py-2 px-4 rounded-full text-sm font-semibold border-2 text-white border-blue-400 hover:bg-blue-400 transition-all"
          >
            Ver mais →
          </a>
        </div>
      )}
    </motion.div>
  );
};

export default Experiences;
