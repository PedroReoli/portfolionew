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
        "O prazo e o custo de um projeto dependem da sua complexidade e do escopo. Projetos mais simples geralmente são concluídos em até 1 mês, enquanto os mais complexos podem levar até 3 meses ou mais. Para ter uma estimativa mais precisa do custo, você pode utilizar nosso simulador, que considera os principais fatores de precificação.",
    },
    {
      question: "Como posso entrar em contato?",
      answer: "Você pode me enviar um e-mail diretamente para: ",
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
                {faq.answer}
                {faq.email && (
                  <>
                    <br />
                    <a
                      href={`mailto:${faq.email}`}
                      className="text-[#00aaff] underline hover:text-blue-400"
                    >
                      {faq.email}
                    </a>
                  </>
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
