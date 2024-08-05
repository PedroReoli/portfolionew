import { useState } from 'react';

const skillsData = [
  { title: 'HTML', icon: './public/assets/html-icon.svg', description: 'Linguagem de marcação usada para criar páginas web.' },
  { title: 'CSS', icon: './public/assets/css-icon.svg', description: 'Estilos para páginas web, responsáveis pela aparência.' },
  { title: 'JavaScript', icon: './public/assets/js-icon.svg', description: 'Linguagem de programação usada para adicionar interatividade.' },
  { title: 'TypeScript', icon: './public/assets/ts-icon.svg', description: 'Superset do JavaScript que adiciona tipagem estática.' },
  { title: 'React', icon: './public/assets/react-icon.svg', description: 'Biblioteca JavaScript para construir interfaces de usuário.' },
  { title: 'Tailwind CSS', icon: './public/assets/tailwind-icon.svg', description: 'Framework CSS utilitário para criação de layouts.' },
  { title: 'AppwriteDB', icon: './public/assets/appwrite-icon.svg', description: 'o AppWrite é um provedor de Backend as a Service.' },
  { title: 'Python', icon: './public/assets/python-icon.svg', description: 'o AppWrite é um provedor de Backend as a Service.' },
  { title: 'C#', icon: './public/assets/csharp-icon.svg', description: 'o AppWrite é um provedor de Backend as a Service.' },
  { title: 'Docker', icon: './public/assets/docker-icon.svg', description: 'o AppWrite é um provedor de Backend as a Service.' },
  { title: 'SQL', icon: './public/assets/sql-icon.svg', description: 'o AppWrite é um provedor de Backend as a Service.' },
  { title: 'Git', icon: './public/assets/git-icon.svg', description: 'o AppWrite é um provedor de Backend as a Service.' },
  
];

const Skills = () => {
  const [currentDescription, setCurrentDescription] = useState('Passe o cursor do mouse no card para ler.');

  return (
    <section id="skills" className="bg-[#111111] text-white py-20 px-5">
      <div className="container mx-auto flex flex-col lg:flex-row">
        <div className="flex-1 mb-10 lg:mb-0">
          <h2 className="text-3xl font-bold mb-5">Conhecimentos <span className="text-blue-500">.</span></h2>
          <p className="text-lg text-gray-400">{currentDescription}</p>
        </div>
        <div className="flex-1 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-3 gap-5">
          {skillsData.map((skill, index) => (
            <article 
              key={index} 
              className="bg-gray-900 p-5 rounded-lg flex flex-col items-center group relative cursor-pointer neon-hover"
              onMouseEnter={() => setCurrentDescription(skill.description)}
              onMouseLeave={() => setCurrentDescription('Passe o cursor do mouse no card para ler.')}
            >
              <img src={skill.icon} alt={`ícone do ${skill.title}`} className="mb-4 w-16 h-16" />
              <p className="text-lg">{skill.title}</p>
              <div className="absolute inset-0 bg-gray-800 bg-opacity-90 text-center text-white p-4 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
