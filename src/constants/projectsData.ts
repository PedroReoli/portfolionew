// src/constants/projectsData.ts

export interface Project {
  title: string; // Nome do projeto
  description: string; // Descrição breve
  link: string; // Link para o projeto
  borderColor: string; // Cor da borda do cartão
  techStack: string[]; // Tecnologias usadas
  status: string; // Status do projeto
  thumbnail: string; // URL da imagem do projeto
  type: string; // Tipo de projeto (ex.: pessoal, freelance)
  duration: string; // Duração do desenvolvimento (ex.: "2 meses")
}
export const projectsData: Project[] = [
  {
    title: 'Evatech',
    description: 'Site do projeto, feito com React, Tailwind, AppwriteDB e Javascript.',
    link: 'https://evatech2024.netlify.app',
    borderColor: 'border-red-500',
    techStack: ['React', 'Tailwind', 'AppwriteDB', 'JavaScript'],
    status: 'Finalizado',
    thumbnail: '/assets/evatech-thumbnail.jpg',
    type: 'Colaborativo',
    duration: '3 meses',
  },
  {
    title: 'Peoplelly ',
    description: 'Meu projeto individual, feito em React, Tailwind, AppwriteDB.',
    link: 'https://peoplelly.netlify.app/',
    borderColor: 'border-blue-500',
    techStack: ['React', 'Tailwind', 'AppwriteDB'],
    status: 'Beta',
    thumbnail: '/assets/peoplelly-thumbnail.jpg',
    type: 'Pessoal',
    duration: '2 meses',
  },
  {
    title: 'DevEmDesenvolvimento',
    description: 'Espaço criado para compartilhar aprendizados, projetos e aulas.',
    link: 'https://devemdesenvolvimento.netlify.app',
    borderColor: 'border-green-500',
    techStack: ['React', 'Tailwind', 'AppwriteDB'],
    status: 'Beta',
    thumbnail: '/assets/devemdesenvolvimento-thumbnail.jpg',
    type: 'Pessoal',
    duration: '2 meses',
  },
];
