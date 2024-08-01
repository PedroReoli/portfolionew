// src/_root/pages/Skills.tsx


const skillsData = [
    { title: 'HTML', icon: '/assets/icons/html.svg', description: 'Linguagem de marcação usada para criar páginas web.' },
    { title: 'CSS', icon: '/assets/icons/css.svg', description: 'Estilos para páginas web, responsáveis pela aparência.' },
    { title: 'JavaScript', icon: '/assets/icons/javascript.svg', description: 'Linguagem de programação usada para adicionar interatividade.' },
    { title: 'Sass', icon: '/assets/icons/sass.svg', description: 'Pré-processador CSS que adiciona recursos como variáveis.' },
    { title: 'React', icon: '/assets/icons/react.svg', description: 'Biblioteca JavaScript para construir interfaces de usuário.' },
    { title: 'Next.js', icon: '/assets/icons/next.svg', description: 'Framework React para aplicações web renderizadas no servidor.' },
    { title: 'Styled Components', icon: '/assets/icons/styled-components.svg', description: 'Biblioteca para estilização de componentes no React.' },
    { title: 'Tailwind CSS', icon: '/assets/icons/tailwindcss.svg', description: 'Framework CSS utilitário para criação de layouts.' },
    { title: 'Radix UI', icon: '/assets/icons/radix.svg', description: 'Biblioteca de componentes acessíveis para React.' },
    { title: 'TypeScript', icon: '/assets/icons/typescript.svg', description: 'Superset do JavaScript que adiciona tipagem estática.' },
    { title: 'Storybook', icon: '/assets/icons/storybook.svg', description: 'Ambiente de desenvolvimento para componentes isolados.' },
    { title: 'Cypress', icon: '/assets/icons/cypress.svg', description: 'Framework de testes end-to-end para aplicações web.' },
  ];
  
  const Skills = () => {
    return (
      <section id="skills" className="bg-[#111111] text-white py-20 px-5">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-5">Conhecimentos <span>.</span></h2>
          <p className="text-lg mb-5">*passe o cursor do mouse no card para ler*</p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">
            {skillsData.map((skill, index) => (
              <article key={index} className="bg-gray-900 p-5 rounded-lg flex flex-col items-center group relative">
                <img src={skill.icon} alt={`ícone do ${skill.title}`} className="mb-4" />
                <p className="text-lg">{skill.title}</p>
                <div className="absolute inset-0 bg-gray-800 bg-opacity-90 text-center text-white p-4 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {skill.description}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Skills;