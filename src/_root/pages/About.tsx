'use client'

import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <section ref={ref} className="bg-[#111111] text-white min-h-screen py-16 px-4 sm:px-6 md:px-8 lg:px-12 flex flex-col lg:flex-row items-center lg:items-start lg:justify-between max-w-7xl mx-auto">
      {/* Imagem */}
      <motion.div 
        className="flex-shrink-0 mb-8 lg:mb-0 lg:mr-8 text-center lg:text-left w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.2 }}
        variants={{
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div className="relative group w-full h-auto">
          <img
            src="/assets/perfilpb.jpg"
            alt="Pedro Lucas"
            className="rounded-lg shadow-md w-full h-auto object-cover transition-all duration-500 ease-in-out group-hover:opacity-0"
          />
          <img
            src="/assets/perfilcol.jpg"
            alt="Pedro Lucas Colorido"
            className="rounded-lg shadow-md w-full h-auto object-cover absolute top-0 left-0 opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100"
          />
        </div>
        <p className="text-sm text-gray-400 mt-2 opacity-75 transition-opacity duration-300 group-hover:opacity-100">(passe o mouse na foto)</p>
      </motion.div>

      {/* Texto "Sobre Mim" */}
      <motion.div 
        className="flex-1 lg:ml-8 max-w-2xl lg:max-w-3xl"
        initial={{ opacity: 0, y: 50 }}
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.4 }}
        variants={{
          visible: { opacity: 1, y: 0 },
        }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          Sobre Mim <span className="text-blue-500">;</span>
        </h2>
        <div className="space-y-4">
          <p className="text-base sm:text-lg leading-relaxed text-gray-300">
            Meu nome é <span className="text-blue-500">Pedro Lucas Reis</span>. Sou um{" "}
            <span className="text-blue-500">FullStack Developer</span> apaixonado por tecnologia e inovação, com foco em criar
            soluções criativas e eficientes para problemas complexos. Paralelamente, sou também{" "}
            <span className="text-blue-500">músico</span>, <span className="text-blue-500">compositor</span> e{" "}
            <span className="text-blue-500">leitor ávido</span>, o que traz uma visão criativa e sensível ao meu trabalho como
            desenvolvedor.
          </p>
          <p className="text-base sm:text-lg leading-relaxed text-gray-300">
            Atualmente, trabalho como estagiário de desenvolvimento na <span className="text-blue-500">Autocom3</span>, com
            foco em <span className="text-blue-500">.NET ASP.NET</span> e <span className="text-blue-500">C#</span>. Também atuo
            como <span className="text-blue-500">freelancer FullStack</span> e{" "}
            <span className="text-blue-500">produtor de conteúdo</span>, criando materiais educativos para ajudar outros
            desenvolvedores a crescerem em suas carreiras.
          </p>
          <p className="text-base sm:text-lg leading-relaxed text-gray-300">
            Meu objetivo é unir minha paixão por arte e tecnologia para desenvolver projetos inovadores que combinem
            funcionalidade, design e impacto. Acredito no poder de compartilhar conhecimento, e meu compromisso é contribuir com
            a comunidade de desenvolvedores e impactar positivamente as pessoas ao meu redor.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;

