import { motion } from "framer-motion";
import { FaEnvelope, FaTwitter, FaInstagram } from "react-icons/fa";

const FAQ = () => {
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

  return (
    <section className="bg-[#111111] text-white min-h-screen py-16 px-5 flex items-center">
      <div className="container mx-auto">
        {/* Título */}
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Perguntas Frequentes <span className="text-blue-400">;</span>
        </motion.h2>

        {/* FAQ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg hover:border-2 hover:border-blue-400 transition-transform duration-300 transform hover:scale-105 flex flex-col justify-between"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
                {faq.question}
              </h3>
              <p className="text-sm md:text-base text-gray-300">
                {faq.answer}
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
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
