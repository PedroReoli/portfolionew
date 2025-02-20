"use client"

import { motion } from "framer-motion"
import { Tilt } from "react-tilt"
import { ExternalLink } from "lucide-react"

const blogs = [
  {
    title: "Boas Práticas em SQL",
    description:
      "Descubra como boas práticas como BIGINT, IDENTITY e colunas de log podem transformar o design de bancos de dados SQL, garantindo eficiência e escalabilidade.",
    link: "https://devemdesenvolvimento.netlify.app/post/boas-praticas-em-sql",
  },
  {
    title: "Comandos Iniciais SQL",
    description:
      "Aprenda e pratique os comandos SQL básicos para começar a manipular dados em bancos de dados relacionais com facilidade",
    link: "https://devemdesenvolvimento.netlify.app/post/comandos-iniciais-sql",
  },
  {
    title: "POO: Estruturando Sistemas Reais",
    description:
      "Aprenda como a Programação Orientada a Objetos (POO) revoluciona o desenvolvimento de software.Com exemplos práticos do mundo real.",
    link: "https://devemdesenvolvimento.netlify.app/post/programao-orientada-a-objetos-estruturando-sistemas-reais",
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

const BlogSection = () => {
  return (
    <section className="bg-[#111111] text-white py-20 px-5 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <motion.h2
          className="text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Últimos Posts no Blog<span className="text-[#60A5FA]">;</span>
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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
          {blogs.map((blog, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Tilt options={defaultTiltOptions}>
                <div className="relative group h-[400px]">
                  {" "}
                  {/* Altura fixa para todos os cards */}
                  {/* Card glow effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-[#60A5FA] to-[#60A5FA] rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-1000 group-hover:duration-200" />
                  {/* Card content */}
                  <div className="relative flex flex-col h-full p-8 bg-[#0A1120] rounded-2xl border border-[#1E293B] backdrop-blur-xl">
                    {/* Title */}
                    <h3 className="text-2xl font-bold mb-4 text-[#60A5FA] group-hover:text-white transition-colors duration-300">
                      {blog.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[#94A3B8] mb-8">{blog.description}</p>

                    {/* Button - Now positioned at the bottom */}
                    <div className="mt-auto">
                      <motion.a
                        href={blog.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative group/link inline-block w-full"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="absolute -inset-1 bg-gradient-to-r from-[#60A5FA] to-[#60A5FA] rounded-full blur-md opacity-25 group-hover/link:opacity-50 transition duration-1000 group-hover/link:duration-200" />
                        <div className="relative w-full py-3 bg-[#0F172A] rounded-full border border-[#60A5FA]/50 hover:border-[#60A5FA] transition-all duration-300">
                          <div className="flex items-center justify-center gap-2 text-[#60A5FA] font-medium">
                            Ler mais
                            <ExternalLink className="w-4 h-4" />
                          </div>
                        </div>
                      </motion.a>
                    </div>
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

export default BlogSection

