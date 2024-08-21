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
}


export const skillsData: Skill[] = [
  { 
    title: 'HTML', 
    icon: 'assets/html-icon.svg', 
    description: 'Linguagem de marcação usada para criar páginas web.', 
    level: 2.5, 
    details: 'Fácil de aprender e usar. Essencial para a construção da estrutura de páginas web. Usado em conjunto com CSS e JavaScript para construir e estilizar páginas web.', 
    courses: ['Curso de HTML Básico', 'Curso de HTML Avançado'], 
    coursesLinks: ['https://example.com/curso-html-basico', 'https://example.com/curso-html-avancado'], 
    certificates: ['Certificado de Criação de Sites', 'Certificado Avançado de HTML'], 
    certificatesLinks: ['https://example.com/certificado-html', 'https://example.com/certificado-html-avancado']
  },
  { 
    title: 'CSS', 
    icon: 'assets/css-icon.svg', 
    description: 'Estilos para páginas web, responsáveis pela aparência.', 
    level: 2, 
    details: 'Permite separar o conteúdo da apresentação visual. Facilita a manutenção e o design responsivo. Usado para estilizar páginas web, definindo layouts, cores, fontes, e outros aspectos visuais.', 
    courses: ['Curso de CSS Avançado', 'Curso de CSS Flexbox'], 
    coursesLinks: ['https://example.com/curso-css-avancado', 'https://example.com/curso-css-flexbox'], 
    certificates: ['Certificado de Design Web', 'Certificado de CSS Flexbox'], 
    certificatesLinks: ['https://example.com/certificado-css', 'https://example.com/certificado-css-flexbox']
  },
  { 
    title: 'JavaScript', 
    icon: 'assets/js-icon.svg', 
    description: 'Linguagem de programação usada para adicionar interatividade.', 
    level: 2.0, 
    details: 'Versátil e amplamente suportado. Permite criar experiências de usuário dinâmicas. Usado para adicionar interatividade a páginas web, como validação de formulários, animações, e comunicação assíncrona.', 
    courses: ['Curso de JavaScript Completo', 'Curso de JavaScript Avançado'], 
    coursesLinks: ['https://example.com/curso-js-completo', 'https://example.com/curso-js-avancado'], 
    certificates: ['Certificado de Programação JavaScript', 'Certificado de JavaScript Avançado'], 
    certificatesLinks: ['https://example.com/certificado-js', 'https://example.com/certificado-js-avancado']
  },
  { 
    title: 'TypeScript', 
    icon: 'assets/ts-icon.svg', 
    description: 'Superset do JavaScript que adiciona tipagem estática.', 
    level: 2.0, 
    details: 'Ajuda a detectar erros em tempo de desenvolvimento. Melhora a manutenção do código. Usado em projetos JavaScript para melhorar a robustez e a escalabilidade do código.', 
    courses: ['Curso de TypeScript Avançado', 'Curso de TypeScript Básico'], 
    coursesLinks: ['https://example.com/curso-ts-avancado', 'https://example.com/curso-ts-basico'], 
    certificates: ['Certificado de TypeScript Avançado', 'Certificado de TypeScript Básico'], 
    certificatesLinks: ['https://example.com/certificado-ts-avancado', 'https://example.com/certificado-ts-basico']
  },
  { 
    title: 'React', 
    icon: 'assets/react-icon.svg', 
    description: 'Biblioteca JavaScript para construir interfaces de usuário.', 
    level: 2.7, 
    details: 'Componentização facilita a reutilização de código. Grande comunidade e suporte. Usado para construir interfaces de usuário em aplicações web de página única (SPA).', 
    courses: ['Curso de Desenvolvimento com React', 'Curso de React Hooks'], 
    coursesLinks: ['https://example.com/curso-react', 'https://example.com/curso-react-hooks'], 
    certificates: ['Certificado de Desenvolvimento com React', 'Certificado de React Hooks'], 
    certificatesLinks: ['https://example.com/certificado-react', 'https://example.com/certificado-react-hooks']
  },
  { 
    title: 'Tailwind CSS', 
    icon: 'assets/tailwind-icon.svg', 
    description: 'Framework CSS utilitário para criação de layouts.', 
    level: 1.5, 
    details: 'Estilização rápida com classes utilitárias. Alta customização sem sair do HTML. Usado para criar layouts rapidamente com uma abordagem de classes utilitárias.', 
    courses: ['Curso de Layout com Tailwind CSS', 'Curso de Tailwind Avançado'], 
    coursesLinks: ['https://example.com/curso-tailwind', 'https://example.com/curso-tailwind-avancado'], 
    certificates: ['Certificado de Layout com Tailwind CSS', 'Certificado de Tailwind Avançado'], 
    certificatesLinks: ['https://example.com/certificado-tailwind', 'https://example.com/certificado-tailwind-avancado']
  },
  { 
    title: 'AppwriteDB', 
    icon: 'assets/appwrite-icon.svg', 
    description: 'AppWrite é um provedor de Backend as a Service.', 
    level: 1.5, 
    details: 'Fácil configuração e gerenciamento de backend. Integração com várias plataformas. Usado para gerenciar backend de aplicações web e móveis sem precisar configurar servidores.', 
    courses: ['Curso de Backend com Appwrite', 'Curso de Appwrite Avançado'], 
    coursesLinks: ['https://example.com/curso-appwrite', 'https://example.com/curso-appwrite-avancado'], 
    certificates: ['Certificado de Backend com Appwrite', 'Certificado de Appwrite Avançado'], 
    certificatesLinks: ['https://example.com/certificado-appwrite', 'https://example.com/certificado-appwrite-avancado']
  },
  { 
    title: 'Python', 
    icon: 'assets/python-icon.svg', 
    description: 'Linguagem de programação versátil usada para diversas aplicações.', 
    level: 0.8, 
    details: 'Sintaxe clara e concisa. Grande quantidade de bibliotecas e frameworks. Usado em desenvolvimento web, automação, ciência de dados, inteligência artificial e muito mais.', 
    courses: ['Curso de Programação em Python', 'Curso de Python para Data Science'], 
    coursesLinks: ['https://example.com/curso-python', 'https://example.com/curso-python-ds'], 
    certificates: ['Certificado de Programação em Python', 'Certificado de Python para Data Science'], 
    certificatesLinks: ['https://example.com/certificado-python', 'https://example.com/certificado-python-ds']
  },
  { 
    title: 'C#', 
    icon: 'assets/csharp-icon.svg', 
    description: 'Linguagem de programação usada para desenvolvimento de aplicações desktop e web.', 
    level: 1.5, 
    details: 'Integrado com o ecossistema Microsoft. Forte tipagem e orientação a objetos. Usado para desenvolvimento de aplicações desktop, web, e jogos com Unity.', 
    courses: ['Curso de Desenvolvimento em C#', 'Curso de C# para Unity'], 
    coursesLinks: ['https://example.com/curso-csharp', 'https://example.com/curso-csharp-unity'], 
    certificates: ['Certificado de Desenvolvimento em C#', 'Certificado de C# para Unity'], 
    certificatesLinks: ['https://example.com/certificado-csharp', 'https://example.com/certificado-csharp-unity']
  },
  { 
    title: 'Docker', 
    icon: 'assets/docker-icon.svg', 
    description: 'Plataforma de virtualização de contêineres.', 
    level: 0.8, 
    details: 'Facilita a portabilidade e escalabilidade de aplicações. Reduz inconsistências de ambiente. Usado para criar, gerenciar e executar contêineres, permitindo a portabilidade de aplicações entre diferentes ambientes.', 
    courses: ['Curso de Conteinerização com Docker', 'Curso de Docker Avançado'], 
    coursesLinks: ['https://example.com/curso-docker', 'https://example.com/curso-docker-avancado'], 
    certificates: ['Certificado de Conteinerização com Docker', 'Certificado de Docker Avançado'], 
    certificatesLinks: ['https://example.com/certificado-docker', 'https://example.com/certificado-docker-avancado']
  },
  { 
    title: 'SQL', 
    icon: 'assets/sql-icon.svg', 
    description: 'Linguagem de consulta usada para gerenciar bancos de dados relacionais.', 
    level: 0.8, 
    details: 'Permite consultas complexas e manipulação de grandes volumes de dados. Suporte amplo. Usado para gerenciar e manipular bancos de dados relacionais, como MySQL, PostgreSQL e SQL Server.', 
    courses: ['Curso de Gestão de Bancos de Dados com SQL', 'Curso de SQL Avançado'], 
    coursesLinks: ['https://example.com/curso-sql', 'https://example.com/curso-sql-avancado'], 
    certificates: ['Certificado de Gestão de Bancos de Dados com SQL', 'Certificado de SQL Avançado'], 
    certificatesLinks: ['https://example.com/certificado-sql', 'https://example.com/certificado-sql-avancado']
  },
  { 
    title: 'Git', 
    icon: 'assets/git-icon.svg', 
    description: 'Sistema de controle de versão distribuído.', 
    level: 3, 
    details: 'Facilita o trabalho colaborativo. Histórico completo de mudanças no código. Usado para versionamento de código, permitindo colaboração em projetos de software.', 
    courses: ['Curso de Controle de Versão com Git', 'Curso de Git Flow'], 
    coursesLinks: ['https://example.com/curso-git', 'https://example.com/curso-git-flow'], 
    certificates: ['Certificado de Controle de Versão com Git', 'Certificado de Git Flow'], 
    certificatesLinks: ['https://example.com/certificado-git', 'https://example.com/certificado-git-flow']
  }
];

