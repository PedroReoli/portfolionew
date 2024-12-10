import { useState, useEffect } from "react";
import Button from "@/components/Button";

const ResponsiveAbout = () => {
  const [currentImage, setCurrentImage] = useState("/assets/perfilpb.jpg");

  // Alterna entre as imagens perfilpb e perfilcol a cada 5 segundos
  useEffect(() => {
    const imageToggle = setInterval(() => {
      setCurrentImage((prevImage) =>
        prevImage === "/assets/perfilpb.jpg"
          ? "/assets/perfilcol.jpg"
          : "/assets/perfilpb.jpg"
      );
    }, 5000);

    return () => clearInterval(imageToggle); // Limpa o intervalo na desmontagem do componente
  }, []);

  return (
    <section className="bg-[#111111] text-white py-8 px-6 flex flex-col items-center">
      {/* Título */}
      <h2 className="text-2xl font-bold text-center mb-6">
        Sobre Mim <span className="text-blue-500">;</span>
      </h2>

      {/* Imagem */}
      <div className="relative mb-8">
        <img
          src={currentImage}
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
      <div className="mt-12">
        <Button
          href="#"
          className="text-blue-500 border border-blue-500 bg-transparent hover:bg-blue-500 hover:text-white py-2 px-6 rounded-md transition-all"
        >
          Saiba mais
        </Button>
      </div>
    </section>
  );
};

export default ResponsiveAbout;
