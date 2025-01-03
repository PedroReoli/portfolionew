const blogs = [
  {
    title: "Boas Práticas em SQL",
    description: "Descubra como boas práticas como BIGINT, IDENTITY e colunas de log podem transformar o design de bancos de dados SQL, garantindo eficiência e escalabilidade.",
    link: "https://devemdesenvolvimento.netlify.app/post/boas-praticas-em-sql",
  },
  {
    title: "Comandos Iniciais SQL",
    description: "Aprenda e pratique os comandos SQL básicos para começar a manipular dados em bancos de dados relacionais com facilidade",
    link: "https://devemdesenvolvimento.netlify.app/post/comandos-iniciais-sql",
  },
  {
    title: "POO: Estruturando Sistemas Reais",
    description: "Aprenda como a Programação Orientada a Objetos (POO) revoluciona o desenvolvimento de software.Com exemplos práticos do mundo real.",
    link: "https://devemdesenvolvimento.netlify.app/post/programao-orientada-a-objetos-estruturando-sistemas-reais",
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="bg-[#111111] text-white py-20 px-5">
      <div className="container mx-auto">
        {/* Título */}
        <h2 className="text-4xl font-bold text-center mb-12">
          Últimos Posts no Blog <span className="text-blue-400">;</span>
        </h2>

        {/* Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.map((blog, index) => (
            <article
              key={index}
              className="bg-gray-800 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:border-2 hover:border-blue-400 p-6 flex flex-col justify-between h-[300px]"
            >
              <div>
                <h3 className="text-2xl font-bold mb-3 text-blue-400">
                  {blog.title}
                </h3>
                <p className="text-gray-300 mb-5 leading-relaxed">
                  {blog.description}
                </p>
              </div>
              <div className="flex justify-center mt-4">
                <a
                  href={blog.link}
                  className="inline-flex items-center py-2 px-4 rounded-full text-base font-semibold border-2 text-white border-blue-400 hover:bg-blue-400 transition-all duration-300"
                >
                  Ler mais →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
