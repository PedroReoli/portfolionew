import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaTwitter, FaInstagram } from "react-icons/fa";

const ResponsiveFAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Quem é o seu público-alvo?",
      answer:
        "Meu público-alvo são desenvolvedores iniciantes, pessoas que desejam se aventurar no mundo da programação e clientes que buscam projetos personalizados. Também ofereço dicas e orientações para melhorar currículos e se destacar no mercado.",
    },
    {
      question: "Qual é o prazo médio e o custo de um projeto?",
      answer:
        "Projetos simples geralmente são concluídos entre 1 a 2 semanas, enquanto projetos complexos podem levar de 1 a 3 meses. Para obter informações detalhadas sobre custos, entre em contato diretamente.",
    },
    {
      question: "Como posso entrar em contato?",
      answer: "Você pode me encontrar pelos canais abaixo:",
      contacts: [
        { type: "email", link: "mailto:pedrosousa2160@gmail.com", icon: <FaEnvelope /> },
        { type: "twitter", link: "https://x.com/opedroreoli", icon: <FaTwitter /> },
        { type: "instagram", link: "https://www.instagram.com/01_dev_em_desenvolvimento", icon: <FaInstagram /> },
      ],
    },
    {
      question: "Quais tecnologias você domina?",
      answer:
        "Trabalho com uma ampla variedade de tecnologias, incluindo React, Node.js, TypeScript, C#, ASP.NET e bancos de dados como SQL e MongoDB. Sempre busco usar a melhor solução para cada projeto.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-12 px-4 bg-[#111111] text-white min-h-screen">
      <div className="container mx-auto max-w-2xl md:max-w-4xl">
        {/* Título */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Perguntas Frequentes <span className="text-blue-400">;</span>
        </motion.h2>

        {/* FAQ */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className={`bg-gray-800 p-4 md:p-6 rounded-lg shadow-lg hover:border-2 hover:border-blue-400 transition-transform duration-300 transform ${
                activeIndex === index ? "scale-105" : "scale-100"
              }`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center cursor-pointer">
                <h3 className="text-base md:text-lg font-semibold text-blue-400">
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
              {activeIndex === index && (
                <div className="mt-4 text-sm md:text-base text-gray-300">
                  <p>{faq.answer}</p>
                  {faq.contacts && (
                    <div className="flex flex-col space-y-2 mt-4">
                      {faq.contacts.map((contact, idx) => (
                        <a
                          key={idx}
                          href={contact.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 text-blue-400 hover:text-blue-500 transition-transform duration-300 hover:scale-105"
                        >
                          {contact.icon}
                          <span>
                            {contact.type === "email"
                              ? "pedrosousa2160@gmail.com"
                              : contact.type === "twitter"
                              ? "@pedro_reoli"
                              : "@01_dev_em_desenvolvimento"}
                          </span>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResponsiveFAQ;
