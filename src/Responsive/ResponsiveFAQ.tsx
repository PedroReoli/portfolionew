import React, { useState } from "react";

const ResponsiveFAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Quem é o seu público-alvo?",
      answer:
        "Meu público-alvo são desenvolvedores iniciantes, pessoas interessadas em programação e clientes que desejam projetos personalizados.",
    },
    {
      question: "Qual é o prazo médio e o custo de um projeto?",
      answer:
        "Depende da complexidade. Projetos simples levam cerca de 1 mês, enquanto os mais complexos podem levar 3 meses ou mais.",
    },
    {
      question: "Como posso entrar em contato?",
      answer: "Envie um e-mail diretamente para:",
      email: "pedrosousa2160@gmail.com",
    },
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-8 px-6 bg-gradient-to-b from-[#0d0d0d] to-[#1a1a1a] text-white">
      {/* Título */}
      <h1 className="text-xl font-bold text-center mb-8 tracking-wide">
        Perguntas Frequentes <span className="text-blue-500">;</span>
      </h1>

      {/* Lista de FAQs */}
      <div className="space-y-6 max-w-md mx-auto">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`bg-[#1e1e1e] border border-gray-700 rounded-lg shadow-md transition-all duration-300 ${
              activeIndex === index ? "p-6" : "p-4"
            }`}
          >
            {/* Pergunta */}
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-base font-medium text-blue-400">
                {faq.question}
              </h3>
              <span
                className={`text-blue-400 text-lg transform transition-transform ${
                  activeIndex === index ? "rotate-180" : "rotate-0"
                }`}
              >
                ▼
              </span>
            </div>

            {/* Resposta (Expandir/Contrair) */}
            {activeIndex === index && (
              <div className="mt-4 text-sm text-gray-300">
                <p>{faq.answer}</p>
                {faq.email && (
                  <a
                    href={`mailto:${faq.email}`}
                    className="block mt-2 text-blue-400 underline hover:text-blue-500 transition-all"
                  >
                    {faq.email}
                  </a>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ResponsiveFAQ;
