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

const Experiences = () => {
  return (
    <section id="experiences" className="bg-[#111111] text-white min-h-screen py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 md:mb-16">
          Experiências <span className="text-blue-500">;</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              className="flex flex-col space-y-3 sm:space-y-4 bg-transparent p-4 sm:p-6 rounded-lg border border-gray-800"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-blue-400">
                {experience.company}
              </h3>
              <p className="text-xs sm:text-sm text-gray-400">{experience.period}</p>
              <p className="text-sm sm:text-base font-semibold text-gray-300">
                {experience.role}
              </p>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                {experience.description}
              </p>
              {experience.link && (
                <a
                  href={experience.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline hover:text-blue-400 transition text-sm sm:text-base mt-2"
                >
                  Ver mais
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;

