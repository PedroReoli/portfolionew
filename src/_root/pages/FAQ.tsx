import { useState } from "react";
import Button from "@/components/Button";
import PriceSimulator from "@/components/PriceSimulator"; // Importando o componente do simulador

const FAQ = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Controle do modal

  const faqs = [
    {
      question: "Quem é o seu público-alvo?",
      answer:
  "Meu público-alvo são desenvolvedores iniciantes, pessoas que desejam se aventurar no mundo da programação e clientes que buscam projetos personalizados. Também ofereço dicas e orientações para melhorar currículos e se destacar no mercado.",
  
    },
    {
      question: "Qual o prazo médio e o preço para um projeto?",
      answer: `O prazo varia entre 1 a 3 meses, dependendo da complexidade. Use o simulador para ter uma ideia do custo aproximado.`,
      simulator: true, // Indicador de que esta pergunta terá o simulador
    },
    {
      question: "Como posso entrar em contato?",
      answer: `Você pode me enviar um e-mail diretamente para: `,
      email: "pedrosousa2160@gmail.com",
    },
  ];

  return (
    <section className="bg-[#111111] text-white py-20 px-5">
      <div className="container mx-auto">
        {/* Título */}
        <h2 className="text-4xl font-bold text-center mb-12">
          Perguntas Frequentes <span className="text-[#00aaff]">;</span>
        </h2>

        {/* FAQ */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-900/20 p-6 rounded-lg shadow-md hover:shadow-lg transition-transform hover:scale-105"
            >
              <h3 className="text-2xl font-semibold text-[#00aaff] mb-3">
                {faq.question}
              </h3>
              <p className="text-gray-300">
                {faq.answer}{" "}
                {faq.email && (
                  <a
                    href={`mailto:${faq.email}`}
                    className="text-[#00aaff] underline hover:text-blue-400"
                  >
                    {faq.email}
                  </a>
                )}
              </p>
              {faq.simulator && (
                <div className="mt-4">
                  <Button onClick={() => setIsModalOpen(true)}>
                    Usar Simulador
                  </Button>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Modal do Simulador */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
            <PriceSimulator onClose={() => setIsModalOpen(false)} />
          </div>
        )}
      </div>
    </section>
  );
};

export default FAQ;
