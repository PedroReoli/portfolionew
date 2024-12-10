// src/constants/skillsData.ts

export interface Skill {
  title: string;
  icon: string;
  description: string;
  level: number;
  details: string;
  courses: string[];
  coursesLinks: string[];
  area: string;  // Adicionamos a área de especialização
}

export const skillsData: Skill[] = [
  { 
    title: 'HTML', 
    icon: 'assets/html-icon.svg', 
    description: 'Linguagem de marcação usada para criar páginas web.', 
    level: 2.5, 
    details: 'Fácil de aprender e usar. Essencial para a construção da estrutura de páginas web. Usado em conjunto com CSS e JavaScript para construir e estilizar páginas web.', 
    courses: ['Curso de HTML Básico'], 
    coursesLinks: ['https://www.udemy.com/course/curso-web-design-fundamentos-aprenda-html-css-e-javascript/?couponCode=ABCART0923'],
    area: 'Frontend'  // Definimos a área como "Frontend"
  },
  { 
    title: 'CSS', 
    icon: 'assets/css-icon.svg', 
    description: 'Estilos para páginas web, responsáveis pela aparência.', 
    level: 2, 
    details: 'Permite separar o conteúdo da apresentação visual. Facilita a manutenção e o design responsivo. Usado para estilizar páginas web, definindo layouts, cores, fontes, e outros aspectos visuais.', 
    courses: ['Curso de CSS Avançado'], 
    coursesLinks: ['https://www.udemy.com/course/curso-web-design-fundamentos-aprenda-html-css-e-javascript/?couponCode=ABCART0923'],
    area: 'Frontend'
  },
  { 
    title: 'JavaScript', 
    icon: 'assets/js-icon.svg', 
    description: 'Linguagem de programação usada para adicionar interatividade.', 
    level: 2.0, 
    details: 'Versátil e amplamente suportado. Permite criar experiências de usuário dinâmicas. Usado para adicionar interatividade a páginas web, como validação de formulários, animações, e comunicação assíncrona.', 
    courses: ['Conclusão do RoadmapSh de JS'], 
    coursesLinks: ['https://roadmap.sh/javascript'],
    area: 'Frontend'
  },
  { 
    title: 'C#', 
    icon: 'assets/csharp-icon.svg', 
    description: 'Linguagem de programação usada para desenvolvimento de aplicações desktop e web.', 
    level: 1.5, 
    details: 'Integrado com o ecossistema Microsoft. Forte tipagem e orientação a objetos. Usado para desenvolvimento de aplicações desktop, web, e jogos com Unity.', 
    courses: ['Curso C# Completo e Profissional', 'Curso Introdução a Orientação a Objetos com C#', 'C# COMPLETO Programação Orientada a Objetos '], 
    coursesLinks: ['https://www.udemy.com/course/csharp-completo-e-profissional/?couponCode=ABCART0923', 'https://www.udemy.com/course/introducaoaorientacaoaobjetoscomcsharp/', 'https://www.udemy.com/course/programacao-orientada-a-objetos-csharp/?couponCode=ABCART0923'],
    area: 'Backend'
  },
  { 
    title: 'SQL', 
    icon: 'assets/sql-icon.svg', 
    description: 'Linguagem de consulta usada para gerenciar bancos de dados relacionais.', 
    level: 1.2, 
    details: 'Permite consultas complexas e manipulação de grandes volumes de dados. Suporte amplo. Usado para gerenciar e manipular bancos de dados relacionais, como MySQL, PostgreSQL e SQL Server.', 
    courses: ['SQL Tutorial - Full Database Course for Beginners', 'SQL Tutorial for Beginners'], 
    coursesLinks: ['https://www.youtube.com/watch?v=HXV3zeQKqGY', 'https://www.youtube.com/watch?v=7S_tz1z_5bA&pp=ygUSc3FsIGNvbXBsZXRlIGd1aWRl'],
    area: 'Database'
  },
  { 
    title: 'Git', 
    icon: 'assets/git-icon.svg', 
    description: 'Sistema de controle de versão distribuído.', 
    level: 3, 
    details: 'Facilita o trabalho colaborativo. Histórico completo de mudanças no código. Usado para versionamento de código, permitindo colaboração em projetos de software.', 
    courses: ['Git Tutorial for Beginners'], 
    coursesLinks: ['https://www.youtube.com/watch?v=8JJ101D3knE&t=35s'],
    area: 'DevOps'
  },
  // Adicionar outras tecnologias e áreas conforme necessário
];
