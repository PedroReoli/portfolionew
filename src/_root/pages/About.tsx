const About = () => {
  return (
    <section className="bg-[#111111] text-white py-16 px-10 flex items-center justify-between">
      {/* Texto "Sobre Mim" */}
      <div className="flex-1 pr-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Sobre Mim</h2>
        <p className="text-lg leading-relaxed text-gray-300 mb-4">
          Meu nome é <span className="text-blue-500">Pedro Lucas Reis</span>. Sou um <span className="text-blue-500">FullStack Developer</span> apaixonado por tecnologia e inovação. Meu foco é criar soluções criativas e eficientes para problemas complexos, com ampla experiência em desenvolvimento web e design de interfaces.
        </p>
        <p className="text-lg leading-relaxed text-gray-300 mb-4">
          Atualmente, atuo como freelancer, trabalhando como <span className="text-blue-500">Frontend Developer</span> e <span className="text-blue-500">Produtor de Conteúdo</span> para desenvolvedores. Meu objetivo é compartilhar conhecimento através de cursos e materiais educativos, ajudando outros desenvolvedores a crescerem.
        </p>
        <p className="text-lg leading-relaxed text-gray-300">
          Além de programador, sou também <span className="text-blue-500">músico</span>, <span className="text-blue-500">compositor</span> e um <span className="text-blue-500">leitor ávido</span>. Trago minha sensibilidade artística para o universo da programação, buscando criar soluções que sejam tanto funcionais quanto visualmente atraentes.
        </p>
      </div>

      {/* Imagem */}
      <div className="flex-shrink-0">
        <img
          src="/assets/perfil.jpg"
          alt="Pedro Lucas"
          className="rounded-lg shadow-md w-[350px] h-auto object-cover"
        />
      </div>
    </section>
  );
};

export default About;
