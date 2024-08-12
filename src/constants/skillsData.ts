// src/constants/skillsData.ts

export interface Skill {
    title: string;
    icon: string;
    description: string;
    level: number;
    project: string;
    advantages: string;
    usage: string;
  }
  
  export const skillsData: Skill[] = [
    { 
      title: 'HTML', 
      icon: 'assets/html-icon.svg', 
      description: 'Linguagem de marcação usada para criar páginas web.', 
      level: 2.5, 
      project: 'Criação de um site pessoal.',
      advantages: 'Fácil de aprender e usar. Essencial para a construção da estrutura de páginas web.',
      usage: 'Usado em conjunto com CSS e JavaScript para construir e estilizar páginas web.' 
    },
    { 
      title: 'CSS', 
      icon: 'assets/css-icon.svg', 
      description: 'Estilos para páginas web, responsáveis pela aparência.', 
      level: 2, 
      project: 'Estilização de um blog pessoal.',
      advantages: 'Permite separar o conteúdo da apresentação visual. Facilita a manutenção e o design responsivo.',
      usage: 'Usado para estilizar páginas web, definindo layouts, cores, fontes, e outros aspectos visuais.' 
    },
    { 
      title: 'JavaScript', 
      icon: 'assets/js-icon.svg', 
      description: 'Linguagem de programação usada para adicionar interatividade.', 
      level: 2.0, 
      project: 'Desenvolvimento de uma aplicação web interativa.',
      advantages: 'Versátil e amplamente suportado. Permite criar experiências de usuário dinâmicas.',
      usage: 'Usado para adicionar interatividade a páginas web, como validação de formulários, animações, e comunicação assíncrona.' 
    },
    { 
      title: 'TypeScript', 
      icon: 'assets/ts-icon.svg', 
      description: 'Superset do JavaScript que adiciona tipagem estática.', 
      level: 2.0, 
      project: 'Implementação de um sistema de tipagem em um projeto JS existente.',
      advantages: 'Ajuda a detectar erros em tempo de desenvolvimento. Melhora a manutenção do código.',
      usage: 'Usado em projetos JavaScript para melhorar a robustez e a escalabilidade do código.' 
    },
    { 
      title: 'React', 
      icon: 'assets/react-icon.svg', 
      description: 'Biblioteca JavaScript para construir interfaces de usuário.', 
      level: 2.7, 
      project: 'Criação de uma aplicação SPA com React.',
      advantages: 'Componentização facilita a reutilização de código. Grande comunidade e suporte.',
      usage: 'Usado para construir interfaces de usuário em aplicações web de página única (SPA).' 
    },
    { 
      title: 'Tailwind CSS', 
      icon: 'assets/tailwind-icon.svg', 
      description: 'Framework CSS utilitário para criação de layouts.', 
      level: 1.5, 
      project: 'Estilização de uma aplicação web com Tailwind.',
      advantages: 'Estilização rápida com classes utilitárias. Alta customização sem sair do HTML.',
      usage: 'Usado para criar layouts rapidamente com uma abordagem de classes utilitárias.' 
    },
    { 
      title: 'AppwriteDB', 
      icon: 'assets/appwrite-icon.svg', 
      description: 'AppWrite é um provedor de Backend as a Service.', 
      level: 1.5, 
      project: 'Implementação de backend com Appwrite.',
      advantages: 'Fácil configuração e gerenciamento de backend. Integração com várias plataformas.',
      usage: 'Usado para gerenciar backend de aplicações web e móveis sem precisar configurar servidores.' 
    },
    { 
      title: 'Python', 
      icon: 'assets/python-icon.svg', 
      description: 'Linguagem de programação versátil usada para diversas aplicações.', 
      level: 0.8, 
      project: 'Desenvolvimento de scripts para automação de tarefas.',
      advantages: 'Sintaxe clara e concisa. Grande quantidade de bibliotecas e frameworks.',
      usage: 'Usado em desenvolvimento web, automação, ciência de dados, inteligência artificial e muito mais.' 
    },
    { 
      title: 'C#', 
      icon: 'assets/csharp-icon.svg', 
      description: 'Linguagem de programação usada para desenvolvimento de aplicações desktop e web.', 
      level: 1.5, 
      project: 'Criação de uma aplicação Windows Forms.',
      advantages: 'Integrado com o ecossistema Microsoft. Forte tipagem e orientação a objetos.',
      usage: 'Usado para desenvolvimento de aplicações desktop, web, e jogos com Unity.' 
    },
    { 
      title: 'Docker', 
      icon: 'assets/docker-icon.svg', 
      description: 'Plataforma de virtualização de contêineres.', 
      level: 0.8, 
      project: 'Conteinerização de uma aplicação web.',
      advantages: 'Facilita a portabilidade e escalabilidade de aplicações. Reduz inconsistências de ambiente.',
      usage: 'Usado para criar, gerenciar e executar contêineres, permitindo a portabilidade de aplicações entre diferentes ambientes.' 
    },
    { 
      title: 'SQL', 
      icon: 'assets/sql-icon.svg', 
      description: 'Linguagem de consulta usada para gerenciar bancos de dados relacionais.', 
      level: 0.8, 
      project: 'Design de um banco de dados relacional.',
      advantages: 'Permite consultas complexas e manipulação de grandes volumes de dados. Suporte amplo.',
      usage: 'Usado para gerenciar e manipular bancos de dados relacionais, como MySQL, PostgreSQL e SQL Server.' 
    },
    { 
      title: 'Git', 
      icon: 'assets/git-icon.svg', 
      description: 'Sistema de controle de versão distribuído.', 
      level: 3, 
      project: 'Gerenciamento de versões de um projeto colaborativo.',
      advantages: 'Facilita o trabalho colaborativo. Histórico completo de mudanças no código.',
      usage: 'Usado para versionamento de código, permitindo colaboração em projetos de software.' 
    }
  ];