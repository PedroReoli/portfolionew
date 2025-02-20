"use client"

import { motion } from "framer-motion"
import { Tilt } from "react-tilt"
import { Mail, Twitter, Instagram } from "lucide-react"

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
      { type: "twitter", link: "https://x.com/opedroreoli", icon: <Twitter />, label: "@pedro_reoli" },
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
        <motion.div
          className="text-center mb-16 relative"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#60A5FA] rounded-full blur-[120px] opacity-20" />
          <h2 className="text-4xl font-bold relative">
            Perguntas Frequentes<span className="text-[#60A5FA]">;</span>
          </h2>
        </motion.div>

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
                <div className="relative group h-full">
                  {/* Card glow effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-[#60A5FA] to-[#60A5FA] rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-1000 group-hover:duration-200" />

                  {/* Card content */}
                  <div className="relative flex flex-col h-full p-8 bg-[#0A1120] rounded-2xl border border-[#1E293B] backdrop-blur-xl">
                    <h3 className="text-xl font-bold mb-4 text-[#60A5FA] group-hover:text-white transition-colors duration-300">
                      {faq.question}
                    </h3>

                    <p className="text-[#94A3B8] mb-6">{faq.answer}</p>

                    {faq.contacts && (
                      <div className="space-y-3 mt-auto">
                        {faq.contacts.map((contact, idx) => (
                          <motion.a
                            key={idx}
                            href={contact.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative group/link flex items-center gap-3"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <div className="relative w-10 h-10">
                              <div className="absolute inset-0 bg-[#60A5FA] rounded-xl blur-md opacity-20 group-hover/link:opacity-40 transition duration-300" />
                              <div className="relative flex items-center justify-center w-full h-full bg-[#0F172A] rounded-xl border border-[#1E293B] group-hover/link:border-[#60A5FA]/50 transition-colors duration-300">
                                {contact.icon}
                              </div>
                            </div>
                            <span className="text-[#94A3B8] group-hover/link:text-[#60A5FA] transition-colors duration-300">
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

