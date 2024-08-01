// src/_root/pages/Experiences.tsx
import { useState } from 'react';

const experiences = [
  {
    company: 'EvaTech',
    period: 'Iniciado em 07/2024 - em andamento',
    role: 'Auxílio a mães negras solteiras no desenvolvimento de habilidades tecnológicas essenciais, como Excel, Word, e plataformas de comunicação como Teams e Meet. Desenvolvimento de workshops e materiais educativos para empoderamento tecnológico.',
    link: 'https://evatech2024.netlify.app',
  },
  {
    company: 'Peoplelly',
    period: 'Iniciado em 01/2024 - em andamento',
    role: 'Desenvolvedor FullStack. Trabalhando no desenvolvimento de uma plataforma de gestão de pessoas, focada em melhorar a comunicação e eficiência dentro das empresas. Responsável pela criação de APIs, interface do usuário e integração de sistemas.',
    link: 'https://peoplelly.netlify.app/',
  },
  {
    company: 'Projeto Integrador "Game Jam UNIFOA"',
    period: '08/2022 - 11/2022',
    role: 'Líder Estudantil. Condução de palestras e orientação em desenvolvimento de jogos na FAETEC, incluindo criação de personagens e dinâmicas inclusivas para fortalecer as relações entre os participantes.',
    link: 'https://www.unifoa.edu.br/game-jam-unifoa/',
  },
  {
    company: 'Sala +Verde Unifoa',
    period: '08/2023 - 11/2023',
    role: 'Coordenador da Criação de Site. Desenvolvimento de site responsivo para a sala ecológica da Unifoa. Responsável pela coordenação da equipe de desenvolvimento e atendimento às demandas do projeto.',
    link: 'https://www.unifoa.edu.br/unifoaverde-e-selecionado-pelo-mma/',
  },
  
];

const Experiences = () => {
  const [selectedExperience, setSelectedExperience] = useState(experiences[0]);

  return (
    <section id="experiences" className="bg-[#111111] text-white py-20 px-5">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-10">Experiências</h2>
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/3 mb-5 md:mb-0">
            <ul className="space-y-4">
              {experiences.map((experience, index) => (
                <li
                  key={index}
                  className={`experience-item ${
                    selectedExperience.company === experience.company ? 'experience-item-active' : ''
                  }`}
                  onClick={() => setSelectedExperience(experience)}
                >
                  {experience.company}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-2/3 p-5 bg-gray-800 rounded-lg">
            <h3 className="experience-title">{selectedExperience.company}</h3>
            <p className="experience-period">{selectedExperience.period}</p>
            <p>{selectedExperience.role}</p>
            {selectedExperience.link && (
              <a
                href={selectedExperience.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline mt-4 inline-block"
              >
                Ver mais
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
