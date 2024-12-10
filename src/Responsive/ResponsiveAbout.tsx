const ResponsiveAbout = () => {
    return (
      <section className="bg-[#111111] text-white py-8 px-6 flex flex-col items-center">
        {/* Título */}
        <h2 className="text-2xl font-bold text-center mb-6">
          Sobre Mim <span className="text-blue-500">;</span>
        </h2>
  
        {/* Imagem */}
        <div className="relative mb-6">
          <img
            src="/assets/perfilpb.jpg"
            alt="Pedro Lucas"
            className="rounded-full w-28 h-28 object-cover border-2 border-blue-500 shadow-md"
          />
        </div>
  
        {/* Texto */}
        <div className="text-center max-w-md space-y-4">
          <p className="text-sm text-gray-300 leading-relaxed">
            Olá! Sou <span className="text-blue-500 font-semibold">Pedro Lucas Reis</span>, um{" "}
            <span className="text-blue-500 font-semibold">FullStack Developer</span> apaixonado por
            tecnologia e inovação. Meu objetivo é criar soluções simples, eficazes e inovadoras.
          </p>
          <p className="text-sm text-gray-300 leading-relaxed">
            Atualmente, trabalho na <span className="text-blue-500 font-semibold">Autocom3</span> com{" "}
            <span className="text-blue-500 font-semibold">.NET</span> e{" "}
            <span className="text-blue-500 font-semibold">C#</span>. Além disso, atuo como{" "}
            <span className="text-blue-500 font-semibold">freelancer</span> e{" "}
            <span className="text-blue-500 font-semibold">criador de conteúdo</span>.
          </p>
        </div>
  
        {/* Botão ou Call-to-Action */}
        <div className="mt-8">
          <a
            href="#"
            className="text-sm font-medium text-[#111111] bg-blue-500 py-2 px-6 rounded-md shadow-md hover:bg-blue-600 transition-all"
          >
            Saiba mais
          </a>
        </div>
      </section>
    );
  };
  
  export default ResponsiveAbout;
  