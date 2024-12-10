import { useState, useEffect } from "react";

const ResponsiveAbout = () => {
  const [currentImage, setCurrentImage] = useState("/assets/perfilpb.jpg");
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const imageToggle = setInterval(() => {
      setIsFading(true); // Inicia a transição de fade-out
      setTimeout(() => {
        setCurrentImage((prevImage) =>
          prevImage === "/assets/perfilpb.jpg"
            ? "/assets/perfilcol.jpg"
            : "/assets/perfilpb.jpg"
        );
        setIsFading(false); // Reverte para fade-in após a troca
      }, 300); // Tempo para o fade-out
    }, 3000); // Troca a cada 3 segundos

    return () => clearInterval(imageToggle); // Limpa o intervalo ao desmontar o componente
  }, []);

  return (
    <section className="bg-[#111111] text-white py-8 px-6 flex flex-col items-center">
      {/* Título */}
      <h2 className="text-2xl font-bold text-center mb-6">
        Sobre Mim <span className="text-blue-500">;</span>
      </h2>

      {/* Imagem */}
      <div className="relative mb-8 w-28 h-28">
        <img
          src={currentImage}
          alt="Pedro Lucas"
          className={`rounded-full w-full h-full object-cover border-2 border-blue-500 shadow-md transition-opacity duration-500 ${
            isFading ? "opacity-0" : "opacity-100"
          }`}
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

    
    </section>
  );
};

export default ResponsiveAbout;
