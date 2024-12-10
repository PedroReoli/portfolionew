import React from "react";
import { FaArrowUp } from "react-icons/fa";

const ResponsiveEnd: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-[#111111] to-[#1a1a1a] text-white py-12 px-4 flex flex-col items-center">
      {/* Imagem de Despedida */}
      <div className="mb-6">
        <img
          src="/assets/Eu.svg"
          alt="Despedida"
          className="w-28 h-28 rounded-full shadow-md object-cover"
        />
      </div>

      {/* Mensagem de Despedida */}
      <div className="text-center">
        <h2 className="text-xl font-bold mb-4">
          Obrigado por visitar<span className="ml-2 text-blue-500">! 👋🏻</span>
        </h2>
        <p className="text-gray-400 text-sm max-w-xs mx-auto mb-6">
          Espero que tenha gostado do meu portfólio! Volte ao início ou visite novamente quando desejar.
        </p>
      </div>

      {/* Botão de Voltar ao Início */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="py-2 px-4 bg-transparent text-blue-500 border border-blue-500 rounded-md flex items-center justify-center text-sm font-medium hover:bg-blue-500 hover:text-white transition-all"
      >
        <FaArrowUp className="mr-2" />
        Voltar ao Início
      </button>
    </section>
  );
};

export default ResponsiveEnd;
