
const About = () => {
  return (
    <section className="bg-[#111111] text-white min-h-screen py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-10 flex flex-col items-center lg:flex-row lg:items-start lg:justify-start">
      {/* Imagem */}
      <div className="flex-shrink-0 mb-6 lg:mb-0 lg:mr-12 text-center w-full max-w-sm sm:max-w-md lg:max-w-lg">
        <div className="relative group w-full h-auto aspect-square">
          <img
            src="/assets/perfilpb.jpg"
            alt="Pedro Lucas"
            className="rounded-lg shadow-md w-full h-full object-cover transition-opacity duration-500 ease-in-out group-hover:opacity-0"
          />
          <img
            src="/assets/perfilcol.jpg"
            alt="Pedro Lucas Colorido"
            className="rounded-lg shadow-md w-full h-full object-cover absolute top-0 left-0 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"
          />
        </div>
        {/* Texto de instrução */}
        <p className="text-sm text-gray-400 mt-2">(passe o mouse/toque na foto)</p>
      </div>

      {/* Texto "Sobre Mim" */}
      <div className="flex-1 max-w-3xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          Sobre Mim <span className="text-blue-500">;</span>
        </h2>
        <p className="text-base sm:text-lg leading-relaxed text-gray-300 mb-4">
          Meu nome é <span className="text-blue-500">Pedro Lucas Reis</span>. Sou um{" "}
          <span className="text-blue-500">FullStack Developer</span> apaixonado por tecnologia e inovação, com foco em criar
          soluções criativas e eficientes para problemas complexos. Paralelamente, sou também{" "}
          <span className="text-blue-500">músico</span>, <span className="text-blue-500">compositor</span> e{" "}
          <span className="text-blue-500">leitor ávido</span>, o que traz uma visão criativa e sensível ao meu trabalho como
          desenvolvedor.
        </p>
        <p className="text-base sm:text-lg leading-relaxed text-gray-300 mb-4">
          Atualmente, trabalho como estagiário de desenvolvimento na <span className="text-blue-500">Autocom3</span>, com
          foco em <span className="text-blue-500">.NET ASP.NET</span> e <span className="text-blue-500">C#</span>. Também atuo
          como <span className="text-blue-500">freelancer FullStack</span> e{" "}
          <span className="text-blue-500">produtor de conteúdo</span>, criando materiais educativos para ajudar outros
          desenvolvedores a crescerem em suas carreiras.
        </p>
        <p className="text-base sm:text-lg leading-relaxed text-gray-300 mb-4">
          Meu objetivo é unir minha paixão por arte e tecnologia para desenvolver projetos inovadores que combinem
          funcionalidade, design e impacto. Acredito no poder de compartilhar conhecimento, e meu compromisso é contribuir com
          a comunidade de desenvolvedores e impactar positivamente as pessoas ao meu redor.
        </p>
      </div>
    </section>
  );
};

export default About;

