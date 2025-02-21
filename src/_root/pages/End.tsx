"use client"

import { motion } from "framer-motion"
import { ArrowUp } from "lucide-react"

const End = () => {
  return (
    <section className="bg-[#111111] text-white min-h-screen py-10 xxs:py-12 xs:py-14 sm:py-16 px-3 xxs:px-4 xs:px-5 flex flex-col items-center justify-center">
      <motion.div
        className="text-center w-full max-w-[280px] xxs:max-w-[320px] xs:max-w-[400px] sm:max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Imagem com animação suave */}
        <motion.div
          className="flex justify-center mb-6 xxs:mb-7 xs:mb-8"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative group">
            <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-[#60A5FA] to-[#60A5FA] opacity-20 blur" />
            <img
              src="/assets/Eu.svg"
              alt="Despedida"
              className="relative w-28 h-28 xxs:w-32 xxs:h-32 xs:w-36 xs:h-36 sm:w-40 sm:h-40 rounded-full object-cover border-2 border-[#1E293B] group-hover:border-[#60A5FA]/50 transition-colors duration-300"
            />
          </div>
        </motion.div>

        {/* Título com animação */}
        <motion.h2
          className="text-2xl xxs:text-3xl xs:text-3xl sm:text-4xl font-bold mb-3 xxs:mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Obrigado por visitar<span className="ml-1 xxs:ml-2 text-[#60A5FA]">!</span>
        </motion.h2>

        {/* Texto com animação */}
        <motion.p
          className="text-[#94A3B8] text-sm xxs:text-base xs:text-lg mb-6 xxs:mb-7 xs:mb-8"
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
          <div className="px-4 xxs:px-5 xs:px-6 py-2.5 xxs:py-3 bg-[#0A1120] rounded-full border border-[#1E293B] group-hover:border-[#60A5FA]/50 transition-all duration-300">
            <div className="flex items-center gap-1.5 xxs:gap-2">
              <ArrowUp className="w-3.5 xxs:w-4 h-3.5 xxs:h-4" />
              <span className="text-sm xxs:text-base text-[#60A5FA] group-hover:text-white transition-colors duration-300">
                Voltar ao Início
              </span>
            </div>
          </div>
        </motion.button>
      </motion.div>
    </section>
  )
}

export default End

