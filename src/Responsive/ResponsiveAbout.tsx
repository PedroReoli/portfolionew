'use client'

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ResponsiveAbout = () => {
  const [currentImage, setCurrentImage] = useState("/assets/perfilpb.jpg");
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const imageToggle = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentImage((prevImage) =>
          prevImage === "/assets/perfilpb.jpg"
            ? "/assets/perfilcol.jpg"
            : "/assets/perfilpb.jpg"
        );
        setIsFading(false);
      }, 300);
    }, 3000);

    return () => clearInterval(imageToggle);
  }, []);

  return (
    <motion.section
    className="bg-[#111111] text-white py-8 px-4 flex flex-col items-center min-h-screen"
    initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Título */}
      <motion.h2
        className="text-2xl md:text-3xl font-bold text-center mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Sobre Mim <span className="text-blue-500">;</span>
      </motion.h2>

 

      {/* Texto */}
      <div className="text-justify max-w-lg space-y-4">
        <p className="text-sm md:text-base text-gray-300 leading-6">
          Olá! Sou <span className="text-blue-500 font-semibold">Pedro Lucas Reis</span>, um
          <span className="text-blue-500 font-semibold"> FullStack Developer</span> apaixonado por
          tecnologia e inovação. Meu foco é criar soluções práticas e impactantes para desafios modernos.
        </p>
        <p className="text-sm md:text-base text-gray-300 leading-6">
          Atualmente, atuo na <span className="text-blue-500 font-semibold">Autocom3</span>,
          trabalhando com <span className="text-blue-500 font-semibold">.NET</span> e
          <span className="text-blue-500 font-semibold"> C#</span>. Paralelamente, sou
          <span className="text-blue-500 font-semibold"> freelancer</span> e
          <span className="text-blue-500 font-semibold"> criador de conteúdo</span>, compartilhando
          conhecimentos para ajudar desenvolvedores em suas jornadas.
        </p>
             {/* Imagem */}
      <div className="relative my-6 w-24 h-24 md:w-32 md:h-32">
        <img
          src={currentImage}
          alt="Pedro Lucas"
          className={`rounded-full w-full h-full object-cover border-2 border-blue-500 shadow-md transition-opacity duration-500 ${
            isFading ? "opacity-0" : "opacity-100"
          }`}
        />
      </div>
      </div>
    </motion.section>
  );
};

export default ResponsiveAbout;
