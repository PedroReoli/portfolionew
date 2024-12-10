import React from "react";

const blogs = [
  {
    title: "Boas Práticas em SQL",
    description:
      "Descubra como boas práticas como BIGINT, IDENTITY e colunas de log podem transformar o design de bancos de dados SQL, garantindo eficiência e escalabilidade.",
    link: "https://devemdesenvolvimento.netlify.app/post/boas-praticas-em-sql",
  },
  {
    title: "Comandos Iniciais SQL",
    description:
      "Aprenda e pratique os comandos SQL básicos para começar a manipular dados em bancos de dados relacionais com facilidade",
    link: "https://devemdesenvolvimento.netlify.app/post/comandos-iniciais-sql",
  },
  {
    title: "Programação Orientada a Objetos: Estruturando Sistemas Reais",
    description:
      "Aprenda como a Programação Orientada a Objetos (POO) revoluciona o desenvolvimento de software. Com exemplos práticos do mundo real.",
    link: "https://devemdesenvolvimento.netlify.app/post/programao-orientada-a-objetos-estruturando-sistemas-reais",
  },
];

const ResponsiveBlogSection: React.FC = () => {
  return (
    <section className="py-10 px-4 bg-gradient-to-b from-[#111111] to-[#1a1a1a] text-white">
      {/* Título */}
      <h1 className="text-2xl font-bold text-center mb-6 tracking-wide">
        Últimos Posts no Blog <span className="text-blue-500">;</span>
      </h1>

      {/* Posts */}
      <div className="space-y-6 w-full max-w-md mx-auto">
        {blogs.map((blog, index) => (
          <article
            key={index}
            className="bg-[#222222] rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-4"
          >
            {/* Título do Blog */}
            <h3 className="text-lg font-semibold text-blue-400 mb-3">
              {blog.title}
            </h3>

            {/* Descrição */}
            <p className="text-sm text-gray-300 mb-4">{blog.description}</p>

            {/* Link */}
            <a
              href={blog.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-blue-400 underline hover:text-blue-500 transition-all"
            >
              Ler mais →
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ResponsiveBlogSection;
