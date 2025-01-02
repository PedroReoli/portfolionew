'use client'

import { motion } from "framer-motion";

const experiences = [
  {
    company: "EvaTech",
    period: "07/2024 - 11/2024",
    role: "Professor, Palestrante e Mentor",
    description:
      "Auxílio a mães negras solteiras no desenvolvimento de habilidades tecnológicas essenciais, como Excel, Word, e plataformas de comunicação como Teams e Meet. Desenvolvimento de workshops e materiais educativos para empoderamento tecnológico.",
    link: "https://evatech2024.netlify.app",
  },
  {
    company: "DevEmDesenvolvimento",
    period: "Em andamento",
    role: "Professor, Redator e Dono",
    description:
      "Plataforma educacional para profissionais de TI, contendo cursos, blogs e projetos práticos. Atuo como criador de conteúdo, desenvolvedor e mentor. A missão é compartilhar conhecimento e impulsionar carreiras na área de tecnologia.",
    link: "https://devemdesenvolvimento.com.br",
  },
  {
    company: "AutoCom3",
    period: "Em andamento",
    role: "Estagiário de Desenvolvimento",
    description:
      "Na Autocom3, em um ambiente profissional e humano, aprofundei meus conhecimentos em Banco de Dados, ASP.NET e C#, além de atuar como Tester de aplicações. Essa experiência foi fundamental para meu crescimento tanto profissional quanto pessoal, solidificando minha base como desenvolvedor.",
    link: "https://autocom3.com.br",
  },
];

const Experiences = () => {
  return (
    <section id="experiences" className="bg-[#111111] text-white min-h-screen py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
      <div className="container mx-auto max-w-6xl">
        <motion.h2 
          className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Experiências <span className="text-blue-500">;</span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} index={index} />
          ))}
        </div>
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
      className="flex flex-col space-y-3 sm:space-y-4 bg-gray-900/40 p-6 rounded-lg border border-gray-800 hover:border-blue-500 transition-colors duration-300 backdrop-blur-sm"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{ scale: 1.02 }}
    >
      <motion.h3 
        className="text-2xl sm:text-3xl font-bold text-blue-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.3 + index * 0.2 }}
      >
        {experience.company}
      </motion.h3>
      <motion.p 
        className="text-xs sm:text-sm text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.4 + index * 0.2 }}
      >
        {experience.period}
      </motion.p>
      <motion.p 
        className="text-sm sm:text-base font-semibold text-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.5 + index * 0.2 }}
      >
        {experience.role}
      </motion.p>
      <motion.p 
        className="text-sm sm:text-base text-gray-300 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.6 + index * 0.2 }}
      >
        {experience.description}
      </motion.p>
      {experience.link && (
        <motion.a
          href={experience.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline hover:text-blue-400 transition text-sm sm:text-base mt-2 inline-block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.7 + index * 0.2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Ver mais
        </motion.a>
      )}
    </motion.div>
  );
};

export default Experiences;

