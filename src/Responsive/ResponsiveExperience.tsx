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
    link: "https://devemdesenvolvimento.netlify.app",
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

const ResponsiveExperience = () => {
  return (
    <section className="bg-[#111111] text-white py-8 px-4 flex flex-col items-center">
      {/* Título */}
      <h2 className="text-2xl font-bold text-center mb-6">
        Experiências <span className="text-blue-500">;</span>
      </h2>

      {/* Lista de Experiências */}
      <div className="space-y-6 w-full max-w-xs">
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            className="bg-gray-900 rounded-lg p-4 shadow-lg border border-gray-700"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <h3 className="text-xl font-bold text-blue-400 mb-2">
              {experience.company}
            </h3>
            <p className="text-xs text-gray-400 mb-1">{experience.period}</p>
            <p className="text-sm font-semibold text-gray-300 mb-3">
              {experience.role}
            </p>
            <p className="text-sm text-gray-300 leading-relaxed">
              {experience.description}
            </p>
            {experience.link && (
              <a
                href={experience.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline hover:text-blue-400 transition text-sm mt-3 block"
              >
                Ver mais
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ResponsiveExperience;
