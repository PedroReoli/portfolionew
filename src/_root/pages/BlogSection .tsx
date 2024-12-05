const blogs = [
  {
    title: "Boas Práticas em SQL",
    description: "Descubra como boas práticas como BIGINT, IDENTITY e colunas de log podem transformar o design de bancos de dados SQL, garantindo eficiência e escalabilidade.",
    link: "#",
  },
  {
    title: "Comandos Iniciais SQL",
    description: "Aprenda e pratique os comandos SQL básicos para começar a manipular dados em bancos de dados relacionais com facilidade",
    link: "#",
  },
  {
    title: "Programação Orientada a Objetos: Estruturando Sistemas Reais",
    description: "Aprenda como a Programação Orientada a Objetos (POO) revoluciona o desenvolvimento de software.Com exemplos práticos do mundo real.",
    link: "#",
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="bg-[#111111] text-white py-20 px-5">
      <div className="container mx-auto">
        {/* Título */}
        <h2 className="text-4xl font-bold text-center mb-12">
          Últimos Posts no Blog <span className="text-[#00aaff]">;</span>
        </h2>

        {/* Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.map((blog, index) => (
            <article
              key={index}
              className="bg-gray-900/20 rounded-lg shadow-md hover:scale-105 transition-transform p-6"
            >
              <h3 className="text-2xl font-semibold mb-3 text-[#00aaff]">
                {blog.title}
              </h3>
              <p className="text-gray-300 mb-5">{blog.description}</p>
              <a
                href={blog.link}
                className="text-[#00aaff] underline hover:text-blue-400"
              >
                Ler mais →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
