const Services = () => {
  return (
    <section id="services" className="bg-[#111111] text-white py-20 px-5">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">Serviços <span className="text-blue-500">.</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <article className="bg-gray-900 p-6 rounded-lg flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-lg">
            <img src="/assets/uxui.svg" alt="ícone layers" className="mb-4 w-16 h-16" />
            <h3 className="text-2xl font-bold mb-2 text-center">UX / UI Design</h3>
            <p className="text-lg text-center">Desenho interface de forma que ela seja clara, objetiva e principalmente intuitiva para o usuário.</p>
          </article>
          <article className="bg-gray-900 p-6 rounded-lg flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-lg">
            <img src="/assets/prog.svg" alt="ícone código" className="mb-4 w-16 h-16" />
            <h3 className="text-2xl font-bold mb-2 text-center">Desenvolvimento</h3>
            <p className="text-lg text-center">Desenvolvo sites profissionais, blogs, portfólios, landing pages e e-commerce.</p>
          </article>
          <article className="bg-gray-900 p-6 rounded-lg flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-lg">
            <img src="/assets/hands.svg" alt="ícone consultoria" className="mb-4 w-16 h-16" />
            <h3 className="text-2xl font-bold mb-2 text-center">Consultoria</h3>
            <p className="text-lg text-center">Ofereço consultoria para ajudar as pessoas a otimizarem seus estudos e melhorar seus sistemas.</p>
          </article>
        </div>

        {/* Botão "Saiba mais" Centralizado */}
        <div className="flex justify-center mt-10">
          <a href="mailto:pedrosousa2160@gmail.com" className="btn-enhanced bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-6 rounded-full hover:scale-105 transform transition-transform">
            Contate-me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
