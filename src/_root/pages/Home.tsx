// src/_root/pages/Home.tsx
import React from 'react';

const Home = () => {
  return (
    <section id="s-home" className="bg-background-home text-black py-10 px-5">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-5">
          Ajudando empresas a construírem <span className="text-purple-1">produtos digitais</span> de forma moderna e de alta qualidade.
        </h1>
        <p className="text-xl mb-5">
          Uma mistura de Design, Desenvolvimento Frontend e habilidade profissional que vão destacar seu produto no mercado.
        </p>
        <a href="https://iuricode.com/efront/" target="_blank" rel="noopener noreferrer" className="text-primary-500">
          Aprenda frontend comigo
        </a>
      </div>
    </section>
  );
};

export default Home;
