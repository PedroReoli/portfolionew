"use client"

import { useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const mainControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
    }
  }, [isInView, mainControls])

  return (
    <section
      ref={ref}
      className="bg-[#111111] text-white min-h-screen py-12 xxs:py-14 sm:py-16 px-3 xxs:px-4 sm:px-6 md:px-8 lg:px-12"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl xxs:text-3xl sm:text-4xl font-bold mb-8 xxs:mb-10 sm:mb-12 text-center">
          Sobre Mim <span className="text-blue-500">;</span>
        </h2>
        <div className="flex flex-col lg:flex-row items-start gap-8 xxs:gap-10 sm:gap-12">
          {/* Imagem */}
          <motion.div
            className="w-full lg:w-1/3 max-w-[280px] xxs:max-w-[320px] sm:max-w-sm mx-auto lg:mx-0"
            initial={{ opacity: 0, y: 50 }}
            animate={mainControls}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={{
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="relative group aspect-[4/5] overflow-hidden rounded-lg shadow-lg">
              <img
                src="/assets/perfilpb.jpg"
                alt="Pedro Lucas"
                className="w-full h-full object-cover transition-all duration-500 ease-in-out group-hover:opacity-0"
              />
              <img
                src="/assets/perfilcol.jpg"
                alt="Pedro Lucas Colorido"
                className="w-full h-full object-cover absolute inset-0 opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100"
              />
            </div>
            <p className="text-xs xxs:text-sm text-gray-400 mt-2 text-center">(passe o mouse na foto)</p>
          </motion.div>

          {/* Texto "Sobre Mim" */}
          <motion.div
            className="w-full lg:w-2/3"
            initial={{ opacity: 0, y: 50 }}
            animate={mainControls}
            transition={{ duration: 0.5, delay: 0.4 }}
            variants={{
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="space-y-4 xxs:space-y-5 sm:space-y-6">
              <p className="text-sm xxs:text-base sm:text-lg leading-relaxed text-gray-300">
                Sou <span className="text-blue-500">Pedro Lucas</span>,{" "}
                <span className="text-blue-500">programador júnior</span> movido pela{" "}
                <span className="text-blue-500">gana por aprender</span> e pela busca contínua por{" "}
                <span className="text-blue-500">inovação</span>. Apesar do{" "}
                <span className="text-blue-500">curto tempo de formação</span>, acumulei{" "}
                <span className="text-blue-500">experiências valiosas</span> graças à minha dedicação em criar{" "}
                <span className="text-blue-500">soluções eficientes</span> e{" "}
                <span className="text-blue-500">escaláveis</span>. Minha{" "}
                <span className="text-blue-500">visão humana</span>, influenciada pela trajetória como{" "}
                <span className="text-blue-500">músico</span>, <span className="text-blue-500">escritor</span> e{" "}
                <span className="text-blue-500">professor</span>, me permite unir{" "}
                <span className="text-blue-500">criatividade</span> e <span className="text-blue-500">tecnologia</span>{" "}
                com sensibilidade.
              </p>

              <p className="text-sm xxs:text-base sm:text-lg leading-relaxed text-gray-300">
                Atualmente, atuo na <span className="text-blue-500">Autocom3</span>, com foco em{" "}
                <span className="text-blue-500">.NET</span>, <span className="text-blue-500">C#</span> e{" "}
                <span className="text-blue-500">Python</span> para{" "}
                <span className="text-blue-500">automação de testes</span>. Também realizo{" "}
                <span className="text-blue-500">freelas FullStack</span>, criando{" "}
                <span className="text-blue-500">interfaces modernas</span> e{" "}
                <span className="text-blue-500">intuitivas</span>. Além disso, desenvolvo{" "}
                <span className="text-blue-500">projetos autorais</span>, buscando{" "}
                <span className="text-blue-500">renda passiva</span> a longo prazo e a oportunidade de{" "}
                <span className="text-blue-500">ensinar</span> e{" "}
                <span className="text-blue-500">compartilhar experiências</span>.
              </p>

              <p className="text-sm xxs:text-base sm:text-lg leading-relaxed text-gray-300">
                Meu diferencial é unir <span className="text-blue-500">arte</span>,{" "}
                <span className="text-blue-500">tecnologia</span> e <span className="text-blue-500">criatividade</span>{" "}
                para criar <span className="text-blue-500">projetos modernos</span> e{" "}
                <span className="text-blue-500">escaláveis</span>. Acredito que{" "}
                <span className="text-blue-500">compartilhar conhecimento</span> gera{" "}
                <span className="text-blue-500">valor</span> e impulsiona a{" "}
                <span className="text-blue-500">comunidade</span>.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About

