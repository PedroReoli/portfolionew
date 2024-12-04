import { motion } from "framer-motion";

const experiences = [
  {
    company: "EvaTech",
    period: "07/2024 - 11/2024",
    role: "Professor, Palestrante e Mentor",
    description:
      "Auxílio a mães negras solteiras no desenvolvimento de habilidades tecnológicas essenciais, como Excel, Word, e plataformas de comunicação como Teams e Meet. Desenvolvimento de workshops e materiais educativos para empoderamento tecnológico.",
    link: "https://evatech2024.netlify.app",
    image: "/assets/evatech.jpg",
  },
  {
    company: "DevEmDesenvolvimento",
    period: "Em andamento",
    role: "Professor, Redator e Dono",
    description:
      "Plataforma educacional para profissionais de TI, contendo cursos, blogs e projetos práticos. Atuo como criador de conteúdo, desenvolvedor e mentor. A missão é compartilhar conhecimento e impulsionar carreiras na área de tecnologia.",
    image: "/assets/devemdesenvolvimento.jpg",
    link: "https://devemdesenvolvimento.netlify.app",
  },
  {
    company: "AutoCom3",
    period: "Em andamento",
    role: "Estagiário de Desenvolvimento",
    description:
      "Na Autocom3, em um ambiente profissional e humano, aprofundei meus conhecimentos em Banco de Dados, ASP.NET e C#, além de atuar como Tester de aplicações. Essa experiência foi fundamental para meu crescimento tanto profissional quanto pessoal, solidificando minha base como desenvolvedor.",
    image: "/assets/autocom3.jpg", // Substitua pelo caminho da imagem correta
    link: "https://autocom3.com.br", // Substitua pelo link correto
  },
];

const Experiences = () => {
  return (
    <section id="experiences" className="bg-[#111111] text-white py-20 px-5">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Experiências</h2>

        <div className="space-y-20">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              className="flex flex-col md:flex-row items-center gap-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
            >
              {/* Texto */}
              <div className="flex-1 space-y-4 text-left">
                <h3 className="text-3xl font-bold text-blue-400">
                  {experience.company}
                </h3>
                <p className="text-sm text-gray-400">{experience.period}</p>
                <p className="text-sm font-semibold text-gray-300">
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
                    className="text-blue-500 underline hover:text-blue-400 transition"
                  >
                    Ver mais
                  </a>
                )}
              </div>

              {/* Imagem */}
              <div className="flex-1 flex justify-center">
                <motion.img
                  src={experience.image}
                  alt={experience.company}
                  className="w-[300px] h-[200px] rounded-full object-cover shadow-lg hover:scale-105 transition-transform duration-300"
                  whileHover={{ scale: 1.05 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;
