// src\constants\skillsData.ts

{/* ///////////////////////////////////////////////////////////// */}
{/* ///////////////////////////////////////////////////////////// */}
// Esta seção contém dados e informações sobre habilidades que, no momento, não incluem certificados ou cursos de grande expressão,
// devido a restrições financeiras. As informações aqui presentes são placeholders para futuras atualizações quando houver a possibilidade 
// de investir em cursos e certificados mais renomados. As informações serão atualizadas conforme a obtenção de novos cursos e certificações.

export interface Skill {
  title: string;
  icon: string;
  description: string;
  level: number;
  details: string;
  courses: string[]; 
  coursesLinks: string[]; 
  certificates: string[]; 
  certificatesLinks: string[]; 
  courseDurations: string[];  
  institutions: string[];     
  professors: string[][];      
  courseLevels: string[];     
  completionDates: string[];  
}

export const skillsData: Skill[] = [
  { 
    title: 'HTML', 
    icon: 'assets/html-icon.svg', 
    description: 'Linguagem de marcação usada para criar páginas web.', 
    level: 2.5, 
    details: 'Fácil de aprender e usar. Essencial para a construção da estrutura de páginas web. Usado em conjunto com CSS e JavaScript para construir e estilizar páginas web.', 
    courses: ['Curso de HTML Básico', /* 'Curso de HTML Avançado' */], 
    coursesLinks: ['https://www.udemy.com/course/curso-web-design-fundamentos-aprenda-html-css-e-javascript/?couponCode=ABCART0923', /* 'https://example.com/curso-html-avancado' */], 
    certificates: ['Certificado de Criação de Sites', 'Certificado Avançado de HTML'], 
    certificatesLinks: ['https://example.com/certificado-html', 'https://example.com/certificado-html-avancado'],
    courseDurations: ['10 horas', '20 horas'],
    institutions: ['Udemy', 'Coursera'],
    professors: [['Prof. João Silva'], ['Prof. Maria Fernandes']],
    courseLevels: ['Básico', 'Avançado'],
    completionDates: ['10/05/2023', '15/06/2023']
  },
  { 
    title: 'CSS', 
    icon: 'assets/css-icon.svg', 
    description: 'Estilos para páginas web, responsáveis pela aparência.', 
    level: 2, 
    details: 'Permite separar o conteúdo da apresentação visual. Facilita a manutenção e o design responsivo. Usado para estilizar páginas web, definindo layouts, cores, fontes, e outros aspectos visuais.', 
    courses: ['Curso de CSS Avançado', /* 'Curso de CSS Flexbox' */], 
    coursesLinks: ['https://www.udemy.com/course/curso-web-design-fundamentos-aprenda-html-css-e-javascript/?couponCode=ABCART0923', /* 'https://example.com/curso-css-flexbox' */], 
    certificates: ['Certificado de Design Web', 'Certificado de CSS Flexbox'], 
    certificatesLinks: ['https://example.com/certificado-css', 'https://example.com/certificado-css-flexbox'],
    courseDurations: ['15 horas', '25 horas'],
    institutions: ['Udemy', 'edX'],
    professors: [['Prof. Pedro Almeida'], ['Prof. Carolina Souza']],
    courseLevels: ['Intermediário', 'Avançado'],
    completionDates: ['12/07/2023', '20/08/2023']
  },
  { 
    title: 'JavaScript', 
    icon: 'assets/js-icon.svg', 
    description: 'Linguagem de programação usada para adicionar interatividade.', 
    level: 2.0, 
    details: 'Versátil e amplamente suportado. Permite criar experiências de usuário dinâmicas. Usado para adicionar interatividade a páginas web, como validação de formulários, animações, e comunicação assíncrona.', 
    courses: ['Conclusão do RoadmapSh de JS', /* 'Curso de JavaScript Avançado' */], 
    coursesLinks: ['https://roadmap.sh/javascript', /* 'https://example.com/curso-js-avancado' */], 
    certificates: ['Certificado de Programação JavaScript', 'Certificado de JavaScript Avançado'], 
    certificatesLinks: ['https://example.com/certificado-js', 'https://example.com/certificado-js-avancado'],
    courseDurations: ['30 horas', '40 horas'],
    institutions: ['RoadmapSh Community', 'Alura'],
    professors: [['Prof. Lucas Carvalho'], ['Prof. Ana Paula Martins']],
    courseLevels: ['Intermediário', 'Avançado'],
    completionDates: ['01/03/2023', '15/04/2023']
  },
  { 
    title: 'TypeScript', 
    icon: 'assets/ts-icon.svg', 
    description: 'Superset do JavaScript que adiciona tipagem estática.', 
    level: 2.0, 
    details: 'Ajuda a detectar erros em tempo de desenvolvimento. Melhora a manutenção do código. Usado em projetos JavaScript para melhorar a robustez e a escalabilidade do código.', 
    courses: ['Curso de TypeScript Avançado',/*  'Curso de TypeScript Básico' */], 
    coursesLinks: ['https://www.udemy.com/course/typescript-do-basico-ao-avancado-c-react-express/?couponCode=ABCART0923', /* 'https://example.com/curso-ts-basico' */], 
    certificates: ['Certificado de TypeScript Avançado', 'Certificado de TypeScript Básico'], 
    certificatesLinks: ['https://example.com/certificado-ts-avancado', 'https://example.com/certificado-ts-basico'],
    courseDurations: ['35 horas', '20 horas'],
    institutions: ['Udemy', 'Pluralsight'],
    professors: [['Prof. Mariana Lima'], ['Prof. Roberto Souza']],
    courseLevels: ['Avançado', 'Básico'],
    completionDates: ['20/04/2023', '30/05/2023']
  },
  { 
    title: 'React', 
    icon: 'assets/react-icon.svg', 
    description: 'Biblioteca JavaScript para construir interfaces de usuário.', 
    level: 2.7, 
    details: 'Componentização facilita a reutilização de código. Grande comunidade e suporte. Usado para construir interfaces de usuário em aplicações web de página única (SPA).', 
    courses: ['The Ultimate React Course', /* 'Curso de React Hooks' */], 
    coursesLinks: ['https://www.udemy.com/course/the-ultimate-react-course/', /* 'https://example.com/curso-react-hooks' */], 
    certificates: ['Certificado de Desenvolvimento com React', /* 'Certificado de React Hooks' */], 
    certificatesLinks: ['https://example.com/certificado-react', /* 'https://example.com/certificado-react-hooks' */],
    courseDurations: ['40 horas', '25 horas'],
    institutions: ['Udemy', 'Rocketseat'],
    professors: [['Prof. Felipe Lima'], ['Prof. Gabriel Ribeiro']],
    courseLevels: ['Intermediário', 'Intermediário'],
    completionDates: ['05/05/2023', '25/06/2023']
  },
  { 
    title: 'Tailwind CSS', 
    icon: 'assets/tailwind-icon.svg', 
    description: 'Framework CSS utilitário para criação de layouts.', 
    level: 1.5, 
    details: 'Estilização rápida com classes utilitárias. Alta customização sem sair do HTML. Usado para criar layouts rapidamente com uma abordagem de classes utilitárias.', 
    courses: ['Curso de Layout com Tailwind CSS', /* 'Curso de Tailwind Avançado' */], 
    coursesLinks: ['https://www.udemy.com/course/tailwind-completo/?couponCode=ABCART0923',/*  'https://example.com/curso-tailwind-avancado' */], 
    certificates: ['Certificado de Layout com Tailwind CSS', 'Certificado de Tailwind Avançado'], 
    certificatesLinks: ['https://example.com/certificado-tailwind', 'https://example.com/certificado-tailwind-avancado'],
    courseDurations: ['20 horas', '15 horas'],
    institutions: ['Udemy', 'Coursera'],
    professors: [['Prof. Amanda Nunes'], ['Prof. Bruno Santana']],
    courseLevels: ['Intermediário', 'Avançado'],
    completionDates: ['10/06/2023', '15/07/2023']
  },
  { 
    title: 'AppwriteDB', 
    icon: 'assets/appwrite-icon.svg', 
    description: 'AppWrite é um provedor de Backend as a Service.', 
    level: 1.5, 
    details: 'Fácil configuração e gerenciamento de backend. Integração com várias plataformas. Usado para gerenciar backend de aplicações web e móveis sem precisar configurar servidores.', 
    courses: ['Curso de Backend Básico  com Appwrite', /* 'Curso de Appwrite Avançado' */], 
    coursesLinks: ['https://www.udemy.com/course/rapidly-build-your-saas-using-appwrite/?couponCode=ABCART0923', /* 'https://example.com/curso-appwrite-avancado' */], 
    certificates: ['Certificado de Backend com Appwrite', 'Certificado de Appwrite Avançado'], 
    certificatesLinks: ['https://example.com/certificado-appwrite', 'https://example.com/certificado-appwrite-avancado'],
    courseDurations: ['25 horas', '30 horas'],
    institutions: ['Udemy', 'Alura'],
    professors: [['Prof. Marcos Tavares'], ['Prof. Letícia Duarte']],
    courseLevels: ['Intermediário', 'Avançado'],
    completionDates: ['05/08/2023', '25/09/2023']
  },
  // { 
  //   title: 'Python', 
  //   icon: 'assets/python-icon.svg', 
  //   description: 'Linguagem de programação versátil usada para diversas aplicações.', 
  //   level: 0.8, 
  //   details: 'Sintaxe clara e concisa. Grande quantidade de bibliotecas e frameworks. Usado em desenvolvimento web, automação, ciência de dados, inteligência artificial e muito mais.', 
  //   courses: ['Curso de Programação em Python', 'Curso de Python para Data Science'], 
  //   coursesLinks: ['https://example.com/curso-python', 'https://example.com/curso-python-ds'], 
  //   certificates: ['Certificado de Programação em Python', 'Certificado de Python para Data Science'], 
  //   certificatesLinks: ['https://example.com/certificado-python', 'https://example.com/certificado-python-ds'],
  //   courseDurations: ['50 horas', '60 horas'],
  //   institutions: ['Coursera', 'DataCamp'],
  //   professors: [['Prof. Daniel Rezende'], ['Prof. Larissa Torres']],
  //   courseLevels: ['Intermediário', 'Avançado'],
  //   completionDates: ['15/02/2023', '05/03/2023']
  // },
  { 
    title: 'C#', 
    icon: 'assets/csharp-icon.svg', 
    description: 'Linguagem de programação usada para desenvolvimento de aplicações desktop e web.', 
    level: 1.5, 
    details: 'Integrado com o ecossistema Microsoft. Forte tipagem e orientação a objetos. Usado para desenvolvimento de aplicações desktop, web, e jogos com Unity.', 
    courses: ['Curso C# Completo e Profissional ', 'Curso Introdução a Orientação a Objetos com C#' , 'C# COMPLETO Programação Orientada a Objetos + Projetos'], 
    coursesLinks: ['https://www.udemy.com/course/csharp-completo-e-profissional/?couponCode=ABCART0923', 'https://www.udemy.com/course/introducaoaorientacaoaobjetoscomcsharp/', 'https://www.udemy.com/course/programacao-orientada-a-objetos-csharp/?couponCode=ABCART0923'], 
    certificates: ['Certificado de Desenvolvimento em C#', 'Certificado de C# para Unity'], 
    certificatesLinks: ['https://example.com/certificado-csharp', 'https://example.com/certificado-csharp-unity'],
    courseDurations: ['45 horas', '50 horas'],
    institutions: ['Udemy', 'Udemy' , 'Udemy'],
    professors: [['Prof. Henrique Mendes'], ['Prof. Carla Silva']],
    courseLevels: ['Avançado', 'Intermediário'],
    completionDates: ['20/06/2023', '10/07/2023']
  },
  // { 
  //   title: 'Docker', 
  //   icon: 'assets/docker-icon.svg', 
  //   description: 'Plataforma de virtualização de contêineres.', 
  //   level: 0.8, 
  //   details: 'Facilita a portabilidade e escalabilidade de aplicações. Reduz inconsistências de ambiente. Usado para criar, gerenciar e executar contêineres, permitindo a portabilidade de aplicações entre diferentes ambientes.', 
  //   courses: ['Curso de Conteinerização com Docker', 'Curso de Docker Avançado'], 
  //   coursesLinks: ['https://example.com/curso-docker', 'https://example.com/curso-docker-avancado'], 
  //   certificates: ['Certificado de Conteinerização com Docker', 'Certificado de Docker Avançado'], 
  //   certificatesLinks: ['https://example.com/certificado-docker', 'https://example.com/certificado-docker-avancado'],
  //   courseDurations: ['30 horas', '35 horas'],
  //   institutions: ['Linux Academy', 'Udemy'],
  //   professors: [['Prof. Rafael Mendes'], ['Prof. Priscila Oliveira']],
  //   courseLevels: ['Intermediário', 'Avançado'],
  //   completionDates: ['12/08/2023', '02/09/2023']
  // },
  { 
    title: 'SQL', 
    icon: 'assets/sql-icon.svg', 
    description: 'Linguagem de consulta usada para gerenciar bancos de dados relacionais.', 
    level: 0.8, 
    details: 'Permite consultas complexas e manipulação de grandes volumes de dados. Suporte amplo. Usado para gerenciar e manipular bancos de dados relacionais, como MySQL, PostgreSQL e SQL Server.', 
    courses: ['SQL Tutorial - Full Database Course for Beginners', 'SQL Tutorial for Beginners'], 
    coursesLinks: ['https://www.youtube.com/watch?v=HXV3zeQKqGY', 'https://www.youtube.com/watch?v=7S_tz1z_5bA&pp=ygUSc3FsIGNvbXBsZXRlIGd1aWRl'], 
    certificates: ['Modelagem de Dados Fundação Bradesco', 'Certificado de SQL Avançado'], 
    certificatesLinks: ['https://example.com/certificado-sql', 'https://example.com/certificado-sql-avancado'],
    courseDurations: ['40 horas', '50 horas'],
    institutions: ['Youtube', 'Youtube'],
    professors: [['Prof. Lucas Martins'], ['Prof. Fernanda Silva']],
    courseLevels: ['Intermediário', 'Avançado'],
    completionDates: ['10/09/2023', '15/10/2023']
  },
  { 
    title: 'Git', 
    icon: 'assets/git-icon.svg', 
    description: 'Sistema de controle de versão distribuído.', 
    level: 3, 
    details: 'Facilita o trabalho colaborativo. Histórico completo de mudanças no código. Usado para versionamento de código, permitindo colaboração em projetos de software.', 
    courses: ['Git Tutorial for Beginners', /* 'Curso de Git Flow' */], 
    coursesLinks: ['https://www.youtube.com/watch?v=8JJ101D3knE&t=35s', /* 'https://example.com/curso-git-flow' */], 
    certificates: ['Certificado de Controle de Versão com Git', 'Certificado de Git Flow'], 
    certificatesLinks: ['https://example.com/certificado-git', 'https://example.com/certificado-git-flow'],
    courseDurations: ['20 horas', '25 horas'],
    institutions: ['Youtube', 'Alura'],
    professors: [['Prof. Tiago Lemos'], ['Prof. Mariana Duarte']],
    courseLevels: ['Básico', 'Intermediário'],
    completionDates: ['01/11/2023', '10/12/2023']
  }
];
