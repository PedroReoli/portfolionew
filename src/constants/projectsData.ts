// src/constants/projectsData.ts

export interface Project {
    title: string;
    description: string;
    link: string;
    borderColor: string;
  }
  
  export const projectsData: Project[] = [
    {
      title: 'Evatech',
      description: 'Site do projeto, feito com React, Tailwind, AppwriteDB e Javascript.',
      link: 'https://evatech2024.netlify.app',
      borderColor: 'border-red-500',
    },
    {
      title: 'Peoplelly (fase de testes)',
      description: 'Meu projeto individual, feito em React, Tailwind, AppwriteDB.',
      link: 'https://peoplelly.netlify.app/',
      borderColor: 'border-blue-500',
    },
    
    
    {
      title: 'Blog DevEmDesenvolvimento ',
      description: 'Espaço criado para compartilhar aprendizados e insights sobre o mundo da programação. ',
      link: 'https://github.com/PedroReoli/BlogDevInDevelopment',
      borderColor: 'border-green-500',
    },

    // PROJETOS FUTUROS ABAIXO
    // {
      //   title: 'Projeto 4',
    //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    //   link: '#',
    //   borderColor: 'border-purple-500',
    // },
    // {
    //   title: 'Projeto 5',
    //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    //   link: '#',
    //   borderColor: 'border-yellow-500',
    // },
    // {
    //   title: 'Projeto 6',
    //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    //   link: '#',
    //   borderColor: 'border-pink-500',
    // },
  ];
  