// src/_root/pages/Services.tsx

const Services = () => {
  return (
    <section id="s-services" className="bg-white py-10 px-5">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-5">Serviços <span>.</span></h2>
        <div id="services" className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <article className="bg-gray-100 p-5 rounded-lg flex flex-col items-center">
            <img src="/assets/icons/icon-design.svg" alt="ícone layers" className="mb-4" />
            <h3 className="text-xl font-bold mb-2">UI Design</h3>
            <p className="text-lg">Desenho interface de forma que ela seja clara, objetiva e principalmente intuitiva para o usuário.</p>
          </article>
          <article className="bg-gray-100 p-5 rounded-lg flex flex-col items-center">
            <img src="/assets/icons/icon-front.svg" alt="ícone código" className="mb-4" />
            <h3 className="text-xl font-bold mb-2">Desenvolvimento</h3>
            <p className="text-lg">Desenvolvo sites profissionais, blogs, portfólios, landing pages e e-commerce.</p>
          </article>
          <article className="bg-gray-100 p-5 rounded-lg flex flex-col items-center">
            <img src="/assets/icons/icon-app-design.svg" alt="ícone imagem" className="mb-4" />
            <h3 className="text-xl font-bold mb-2">Motion</h3>
            <p className="text-lg">Crio interações que transmitem sensação de modernidade, além de chamarem a atenção do usuário.</p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Services;
