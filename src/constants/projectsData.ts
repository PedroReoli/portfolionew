export interface Project {
  title: string;
  description: string;
  link: string;
  borderColor: string;
  techStack: string[];
  status: string;
  thumbnails: string[]; // Alterado para múltiplas imagens
  type: string;
  duration: string;
}

export const projectsData: Project[] = [
  {
    title: 'Evatech',
    description: 'Site do projeto, feito com React, Tailwind, AppwriteDB e Javascript.',
    link: 'https://evatech2024.netlify.app',
    borderColor: 'border-red-500',
    techStack: ['React', 'Tailwind', 'AppwriteDB', 'JS'],
    status: 'Finalizado',
    thumbnails: [
      '/projects/eva1.jpg',
      '/projects/eva2.jpg',
      '/projects/eva3.jpg',
      '/projects/eva4.jpg',
    ],
    type: 'Colaborativo',
    duration: '6 meses',
  },
  {
    title: 'Peoplelly',
    description: 'Meu projeto individual, feito em React, Tailwind, AppwriteDB.',
    link: 'https://peoplelly.netlify.app/',
    borderColor: 'border-blue-500',
    techStack: ['React', 'Tailwind', 'AppwriteDB' , 'JS'],
    status: 'Beta',
    thumbnails: [
      '/projects/peop1.jpg',
      '/projects/peop2.jpg',
      '/projects/peop3.jpg',
    ],
    type: 'Pessoal',
    duration: '3 meses',
  },
  {
    title: 'DevEmDesenvolvimento',
    description: 'Espaço criado para compartilhar aprendizados, projetos e aulas.',
    link: 'https://devemdesenvolvimento.netlify.app',
    borderColor: 'border-green-500',
    techStack: ['React', 'Tailwind', 'AppwriteDB', 'JS'],
    status: 'Beta',
    thumbnails: [
      '/projects/blog1.png',
      '/projects/blog2.png',
      '/projects/blog3.png',
    ],
    type: 'Pessoal',
    duration: 'Atual',
  },
];
