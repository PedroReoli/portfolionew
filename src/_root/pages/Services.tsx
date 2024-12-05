import Button from "@/components/Button"
const Services = () => {
  return (
    <section id="services" className="bg-[#111111] text-white min-h-screen py-20 px-5">
      <div className="container mx-auto">
        {/* Título */}
        <h2 className="text-4xl font-bold text-center mb-16">
          Serviços <span className="text-blue-500">;</span>
        </h2>

        {/* Serviços */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Serviço 1 */}
          <article className="relative p-8 rounded-xl flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-lg bg-gray-900/40 backdrop-blur-md shadow-md">
            <div className="absolute -top-10 w-20 h-20 bg-gradient-to-r from-gray-600 to-gray-800 rounded-full flex items-center justify-center shadow-md">
              <img src="/assets/uxui.svg" alt="ícone UX/UI" className="w-12 h-12" />
            </div>
            <h3 className="text-2xl font-bold mb-4 mt-12 text-center">UX / UI Design</h3>
            <p className="text-lg text-center text-gray-300 leading-relaxed">
              Desenho interfaces claras, objetivas e intuitivas, priorizando a experiência do usuário.
            </p>
          </article>

          {/* Serviço 2 */}
          <article className="relative p-8 rounded-xl flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-lg bg-gray-900/40 backdrop-blur-md shadow-md">
            <div className="absolute -top-10 w-20 h-20 bg-gradient-to-r from-gray-600 to-gray-800 rounded-full flex items-center justify-center shadow-md">
              <img src="/assets/prog.svg" alt="ícone FullStack" className="w-12 h-12" />
            </div>
            <h3 className="text-2xl font-bold mb-4 mt-12 text-center">Desenvolvimento FullStack</h3>
            <p className="text-lg text-center text-gray-300 leading-relaxed">
              Construo soluções completas, desde interfaces até back-ends robustos e escaláveis.
            </p>
          </article>

          {/* Serviço 3 */}
          <article className="relative p-8 rounded-xl flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-lg bg-gray-900/40 backdrop-blur-md shadow-md">
            <div className="absolute -top-10 w-20 h-20 bg-gradient-to-r from-gray-600 to-gray-800 rounded-full flex items-center justify-center shadow-md">
              <img src="/assets/hands.svg" alt="ícone Mentoria" className="w-12 h-12" />
            </div>
            <h3 className="text-2xl font-bold mb-4 mt-12 text-center">Mentoria e Aulas</h3>
            <p className="text-lg text-center text-gray-300 leading-relaxed">
              Orientação personalizada para estudos, carreiras e projetos na área de programação.
            </p>
          </article>
        </div>

        {/* Botão "Entre em Contato" */}
        <div className="flex justify-center mt-16">
          <Button href="mailto:pedrosousa2160@gmail.com">
            Entre em Contato
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;