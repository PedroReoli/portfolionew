import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronDown, ChevronUp } from "lucide-react"

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
      { type: "email", link: "mailto:pedrosousa2160@gmail.com", icon: "envelope" },
      { type: "twitter", link: "https://x.com/opedroreoli", icon: "twitter" },
      { type: "instagram", link: "https://www.instagram.com/01_dev_em_desenvolvimento", icon: "instagram" },
    ],
  },
  {
    question: "Quais tecnologias você domina?",
    answer:
      "Trabalho com uma ampla variedade de tecnologias, incluindo React, Node.js, TypeScript, C#, ASP.NET e bancos de dados como SQL e MongoDB. Sempre busco usar a melhor solução para cada projeto.",
  },
]

const ResponsiveFAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className="py-8 px-4 bg-background">
      <motion.h2
        className="text-2xl font-bold text-center mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Perguntas Frequentes <span className="text-primary">;</span>
      </motion.h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <Card key={index}>
            <CardHeader className="cursor-pointer flex justify-between items-center" onClick={() => toggleFAQ(index)}>
              <CardTitle className="text-sm">{faq.question}</CardTitle>
              {activeIndex === index ? (
                <ChevronUp className="h-4 w-4 text-primary" />
              ) : (
                <ChevronDown className="h-4 w-4 text-primary" />
              )}
            </CardHeader>
            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{faq.answer}</p>
                    {faq.contacts && (
                      <div className="mt-4 space-y-2">
                        {faq.contacts.map((contact, idx) => (
                          <a
                            key={idx}
                            href={contact.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 text-primary hover:underline"
                          >
                            <span className={`icon-${contact.icon}`}></span>
                            <span>{contact.type}</span>
                          </a>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </motion.div>
              )}
            </AnimatePresence>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default ResponsiveFAQ

