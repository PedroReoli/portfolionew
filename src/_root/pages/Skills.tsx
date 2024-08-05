import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface Skill {
  title: string;
  icon: string;
  description: string;
  level: number;
  project: string;
  advantages: string;
  usage: string;
}

const skillsData: Skill[] = [
  { 
    title: 'HTML', 
    icon: './public/assets/html-icon.svg', 
    description: 'Linguagem de marcação usada para criar páginas web.', 
    level: 2.5, 
    project: 'Criação de um site pessoal.',
    advantages: 'Fácil de aprender e usar. Essencial para a construção da estrutura de páginas web.',
    usage: 'Usado em conjunto com CSS e JavaScript para construir e estilizar páginas web.' 
  },
  { 
    title: 'CSS', 
    icon: './public/assets/css-icon.svg', 
    description: 'Estilos para páginas web, responsáveis pela aparência.', 
    level: 2, 
    project: 'Estilização de um blog pessoal.',
    advantages: 'Permite separar o conteúdo da apresentação visual. Facilita a manutenção e o design responsivo.',
    usage: 'Usado para estilizar páginas web, definindo layouts, cores, fontes, e outros aspectos visuais.' 
  },
  { 
    title: 'JavaScript', 
    icon: './public/assets/js-icon.svg', 
    description: 'Linguagem de programação usada para adicionar interatividade.', 
    level: 2.8, 
    project: 'Desenvolvimento de uma aplicação web interativa.',
    advantages: 'Versátil e amplamente suportado. Permite criar experiências de usuário dinâmicas.',
    usage: 'Usado para adicionar interatividade a páginas web, como validação de formulários, animações, e comunicação assíncrona.' 
  },
  { 
    title: 'TypeScript', 
    icon: './public/assets/ts-icon.svg', 
    description: 'Superset do JavaScript que adiciona tipagem estática.', 
    level: 2.2, 
    project: 'Implementação de um sistema de tipagem em um projeto JS existente.',
    advantages: 'Ajuda a detectar erros em tempo de desenvolvimento. Melhora a manutenção do código.',
    usage: 'Usado em projetos JavaScript para melhorar a robustez e a escalabilidade do código.' 
  },
  { 
    title: 'React', 
    icon: './public/assets/react-icon.svg', 
    description: 'Biblioteca JavaScript para construir interfaces de usuário.', 
    level: 2.7, 
    project: 'Criação de uma aplicação SPA com React.',
    advantages: 'Componentização facilita a reutilização de código. Grande comunidade e suporte.',
    usage: 'Usado para construir interfaces de usuário em aplicações web de página única (SPA).' 
  },
  { 
    title: 'Tailwind CSS', 
    icon: './public/assets/tailwind-icon.svg', 
    description: 'Framework CSS utilitário para criação de layouts.', 
    level: 2, 
    project: 'Estilização de uma aplicação web com Tailwind.',
    advantages: 'Estilização rápida com classes utilitárias. Alta customização sem sair do HTML.',
    usage: 'Usado para criar layouts rapidamente com uma abordagem de classes utilitárias.' 
  },
  { 
    title: 'AppwriteDB', 
    icon: './public/assets/appwrite-icon.svg', 
    description: 'AppWrite é um provedor de Backend as a Service.', 
    level: 1.5, 
    project: 'Implementação de backend com Appwrite.',
    advantages: 'Fácil configuração e gerenciamento de backend. Integração com várias plataformas.',
    usage: 'Usado para gerenciar backend de aplicações web e móveis sem precisar configurar servidores.' 
  },
  { 
    title: 'Python', 
    icon: './public/assets/python-icon.svg', 
    description: 'Linguagem de programação versátil usada para diversas aplicações.', 
    level: 2.9, 
    project: 'Desenvolvimento de scripts para automação de tarefas.',
    advantages: 'Sintaxe clara e concisa. Grande quantidade de bibliotecas e frameworks.',
    usage: 'Usado em desenvolvimento web, automação, ciência de dados, inteligência artificial e muito mais.' 
  },
  { 
    title: 'C#', 
    icon: './public/assets/csharp-icon.svg', 
    description: 'Linguagem de programação usada para desenvolvimento de aplicações desktop e web.', 
    level: 1.8, 
    project: 'Criação de uma aplicação Windows Forms.',
    advantages: 'Integrado com o ecossistema Microsoft. Forte tipagem e orientação a objetos.',
    usage: 'Usado para desenvolvimento de aplicações desktop, web, e jogos com Unity.' 
  },
  { 
    title: 'Docker', 
    icon: './public/assets/docker-icon.svg', 
    description: 'Plataforma de virtualização de contêineres.', 
    level: 2.1, 
    project: 'Conteinerização de uma aplicação web.',
    advantages: 'Facilita a portabilidade e escalabilidade de aplicações. Reduz inconsistências de ambiente.',
    usage: 'Usado para criar, gerenciar e executar contêineres, permitindo a portabilidade de aplicações entre diferentes ambientes.' 
  },
  { 
    title: 'SQL', 
    icon: './public/assets/sql-icon.svg', 
    description: 'Linguagem de consulta usada para gerenciar bancos de dados relacionais.', 
    level: 2.7, 
    project: 'Design de um banco de dados relacional.',
    advantages: 'Permite consultas complexas e manipulação de grandes volumes de dados. Suporte amplo.',
    usage: 'Usado para gerenciar e manipular bancos de dados relacionais, como MySQL, PostgreSQL e SQL Server.' 
  },
  { 
    title: 'Git', 
    icon: './public/assets/git-icon.svg', 
    description: 'Sistema de controle de versão distribuído.', 
    level: 3, 
    project: 'Gerenciamento de versões de um projeto colaborativo.',
    advantages: 'Facilita o trabalho colaborativo. Histórico completo de mudanças no código.',
    usage: 'Usado para versionamento de código, permitindo colaboração em projetos de software.' 
  }
];

const Skills = () => {
  const [currentSkill, setCurrentSkill] = useState<Skill | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 6; // Mostrar 3x2 habilidades por página

  const getLevelDescription = (level: number): string => {
    if (level >= 0 && level < 1) {
      return 'Iniciante';
    } else if (level >= 1 && level < 2) {
      return 'Intermediário';
    } else if (level >= 2 && level <= 3) {
      return 'Avançado';
    } else {
      return '';
    }
  };

  const handlePrevSkill = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - itemsPerPage, 0));
  };

  const handleNextSkill = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + itemsPerPage, skillsData.length - itemsPerPage));
  };

  return (
    <section id="skills" className="bg-[#111111] text-white py-20 px-5">
      <div className="container mx-auto flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8">
        <div className="flex-1 mb-10 lg:mb-0">
          <h2 className="text-4xl font-bold mb-5">Conhecimentos <span className="text-blue-500">.</span></h2>
          {currentSkill ? (
            <div className="space-y-4">
              <p className="text-lg text-gray-300 font-semibold">{currentSkill.description}</p>
              <p className="text-lg text-gray-300"><span className="text-blue-500">Projeto:</span> {currentSkill.project}</p>
              <p className="text-lg text-gray-300"><span className="text-blue-500">Vantagens:</span> {currentSkill.advantages}</p>
              <p className="text-lg text-gray-300"><span className="text-blue-500">Onde usar:</span> {currentSkill.usage}</p>
            </div>
          ) : (
            <p className="text-lg text-gray-300">Passe o cursor sobre uma habilidade para ver os detalhes.</p>
          )}
        </div>
        <div className="flex-1 relative">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {skillsData.slice(currentIndex, currentIndex + itemsPerPage).map((skill, index) => (
              <article 
                key={index} 
                className="bg-gray-900 p-5 rounded-lg flex flex-col items-center group relative cursor-pointer neon-hover transition-transform transform hover:scale-105"
                onMouseEnter={() => setCurrentSkill(skill)}
              >
                <img src={skill.icon} alt={`ícone do ${skill.title}`} className="mb-4 w-24 h-24" />
                <p className="text-lg font-bold">{skill.title}</p>
                <div className="w-full bg-gray-700 rounded-full h-2.5 mb-4">
                  <div className={`bg-blue-600 h-2.5 rounded-full`} style={{ width: `${(skill.level / 3) * 100}%` }}></div>
                </div>
                <p className="text-sm">{getLevelDescription(skill.level)}</p>
              </article>
            ))}
          </div>
          {currentIndex > 0 && (
            <button 
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-blue-600 p-3 rounded-full shadow-lg hover:bg-blue-400 transition-colors"
              onClick={handlePrevSkill}
              style={{ zIndex: 10 }}
            >
              <FaChevronLeft className="text-white" />
            </button>
          )}
          {currentIndex < skillsData.length - itemsPerPage && (
            <button 
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 p-3 rounded-full shadow-lg hover:bg-blue-400 transition-colors"
              onClick={handleNextSkill}
              style={{ zIndex: 10 }}
            >
              <FaChevronRight className="text-white" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;
