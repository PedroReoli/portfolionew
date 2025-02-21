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
    <section className="bg-[#111111] text-white py-10 xxs:py-12 xs:py-16 sm:py-20 px-3 xxs:px-4 xs:px-5 sm:px-6 overflow-hidden min-h-screen">
      <div className="container mx-auto max-w-7xl">
        <motion.h2
          className="text-2xl xxs:text-3xl sm:text-4xl font-bold text-center mb-6 xxs:mb-8 xs:mb-10 sm:mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Perguntas Frequentes<span className="text-[#60A5FA]">;</span>
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-4 xxs:gap-5 xs:gap-6 sm:gap-8"
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
                <div className="relative group">
                  {/* Card glow effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-[#60A5FA] to-[#60A5FA] rounded-xl xxs:rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-1000 group-hover:duration-200" />

                  {/* Card content */}
                  <div className="relative flex flex-col p-4 xxs:p-5 xs:p-6 sm:p-8 bg-[#0A1120] rounded-xl xxs:rounded-2xl border border-[#1E293B] hover:border-[#60A5FA]/50 transition-colors duration-300">
                    {/* Question */}
                    <h3 className="text-base xxs:text-lg xs:text-xl font-bold mb-3 xxs:mb-4 text-[#60A5FA]">
                      {faq.question}
                    </h3>

                    {/* Answer */}
                    <p className="text-xs xxs:text-sm xs:text-base text-[#94A3B8] mb-4 xxs:mb-5">{faq.answer}</p>

                    {/* Contacts Section */}
                    {faq.contacts && (
                      <div className="mt-auto">
                        {/* Mobile Version (até 425px) */}
                        <div className="flex justify-center gap-3 xs:hidden">
                          {faq.contacts.map((contact, idx) => (
                            <motion.a
                              key={idx}
                              href={contact.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="relative group/contact"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#60A5FA] to-[#60A5FA] rounded-xl blur opacity-0 group-hover/contact:opacity-20 transition duration-300" />
                              <div className="relative flex items-center justify-center w-11 xxs:w-12 h-11 xxs:h-12 bg-[#0F172A] rounded-xl border border-[#1E293B] group-hover/contact:border-[#60A5FA]/50 transition-all duration-300">
                                <div className="text-[#60A5FA] w-5 xxs:w-6 h-5 xxs:h-6 group-hover/contact:text-white transition-colors duration-300">
                                  {contact.icon}
                                </div>
                              </div>
                            </motion.a>
                          ))}
                        </div>

                        {/* Tablet/Desktop Version (425px+) */}
                        <div className="hidden xs:flex xs:flex-col xs:space-y-2.5">
                          {faq.contacts.map((contact, idx) => (
                            <motion.a
                              key={idx}
                              href={contact.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="relative group/contact"
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#60A5FA] to-[#60A5FA] rounded-xl blur opacity-0 group-hover/contact:opacity-20 transition duration-300" />
                              <div className="relative flex items-center gap-3 p-2 xs:p-3 bg-[#0F172A] rounded-xl border border-[#1E293B] group-hover/contact:border-[#60A5FA]/50 transition-all duration-300">
                                <div className="flex items-center justify-center w-8 xs:w-9 h-8 xs:h-9">
                                  <div className="text-[#60A5FA] w-4 xs:w-5 h-4 xs:h-5 group-hover/contact:text-white transition-colors duration-300">
                                    {contact.icon}
                                  </div>
                                </div>
                                <span className="text-sm xs:text-base text-[#94A3B8] group-hover/contact:text-[#60A5FA] transition-colors duration-300 truncate">
                                  {contact.label}
                                </span>
                              </div>
                            </motion.a>
                          ))}
                        </div>
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

