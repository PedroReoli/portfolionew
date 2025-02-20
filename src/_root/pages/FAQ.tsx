"use client"

import { motion } from "framer-motion"
import { Tilt } from "react-tilt"
import { Mail, Instagram } from "lucide-react"

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
      { type: "email", link: "mailto:pedrosousa2160@gmail.com", icon: <Mail />, label: "pedrosousa2160@gmail.com" },
   {
        type: "instagram",
        link: "https://www.instagram.com/01_dev_em_desenvolvimento",
        icon: <Instagram />,
        label: "@01_dev_em_desenvolvimento",
      },
    ],
  },
  {
    question: "Quais tecnologias você domina?",
    answer:
      "Trabalho com uma ampla variedade de tecnologias, incluindo React, Node.js, TypeScript, C#, ASP.NET e bancos de dados como SQL e MongoDB. Sempre busco usar a melhor solução para cada projeto.",
  },
]

const defaultTiltOptions = {
  reverse: false,
  max: 15,
  perspective: 1000,
  scale: 1.02,
  speed: 1000,
  transition: true,
  axis: null,
  reset: true,
  easing: "cubic-bezier(.03,.98,.52,.99)",
}

const FAQ = () => {
  return (
    <section className="bg-[#111111] text-white py-20 px-5 overflow-hidden min-h-screen">
      <div className="container mx-auto max-w-7xl">
        <motion.h2
          className="text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Perguntas Frequentes<span className="text-[#60A5FA]">;</span>
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            },
          }}
          initial="hidden"
          animate="visible"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Tilt options={defaultTiltOptions}>
                <div className="h-full">
                  <div className="flex flex-col h-full p-8 bg-[#0A1120] rounded-2xl border border-[#1E293B] hover:border-[#60A5FA]/50 transition-colors duration-300">
                    <h3 className="text-xl font-bold mb-4 text-[#60A5FA]">{faq.question}</h3>

                    <p className="text-[#94A3B8] mb-6">{faq.answer}</p>

                    {faq.contacts && (
                      <div className="space-y-3 mt-auto">
                        {faq.contacts.map((contact, idx) => (
                          <motion.a
                            key={idx}
                            href={contact.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 group"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <div className="flex items-center justify-center w-10 h-10 bg-[#0F172A] rounded-xl border border-[#1E293B] group-hover:border-[#60A5FA]/50 transition-colors duration-300">
                              <div className="text-[#60A5FA]">{contact.icon}</div>
                            </div>
                            <span className="text-[#94A3B8] group-hover:text-[#60A5FA] transition-colors duration-300">
                              {contact.label}
                            </span>
                          </motion.a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default FAQ

