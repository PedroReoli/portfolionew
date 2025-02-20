"use client"

import { motion } from "framer-motion"
import { ArrowUp } from "lucide-react"

const End = () => {
  return (
    <section className="bg-[#111111] text-white min-h-screen py-16 px-5 flex flex-col items-center justify-center">
      <motion.div
        className="text-center max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Imagem com animação suave */}
        <motion.div
          className="flex justify-center mb-8"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative group">
            <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-[#60A5FA] to-[#60A5FA] opacity-20 blur" />
            <img
              src="/assets/Eu.svg"
              alt="Despedida"
              className="relative w-40 h-40 rounded-full object-cover border-2 border-[#1E293B] group-hover:border-[#60A5FA]/50 transition-colors duration-300"
            />
          </div>
        </motion.div>

        {/* Título com animação */}
        <motion.h2
          className="text-4xl font-bold mb-4 flex justify-center items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Obrigado por visitar<span className="ml-2 text-[#60A5FA]">! 👋🏻</span>
        </motion.h2>

        {/* Texto com animação */}
        <motion.p
          className="text-[#94A3B8] text-lg mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Espero que tenha gostado do meu portfólio! Fique à vontade para voltar ao início ou visitar novamente sempre
          que desejar. Desejo tudo de melhor em seus projetos!
        </motion.p>

        {/* Botão com animação */}
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="group relative inline-flex items-center justify-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="px-6 py-3 bg-[#0A1120] rounded-full border border-[#1E293B] group-hover:border-[#60A5FA]/50 transition-all duration-300">
            <div className="flex items-center gap-2 text-[#60A5FA] group-hover:text-white transition-colors duration-300">
              <ArrowUp className="w-4 h-4" />
              Voltar ao Início
            </div>
          </div>
        </motion.button>
      </motion.div>
    </section>
  )
}

export default End

