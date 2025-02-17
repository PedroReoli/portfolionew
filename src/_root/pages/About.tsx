"use client"

import { useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

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
    <section ref={ref} className="bg-[#111111] text-white min-h-screen flex flex-col justify-center items-center p-4">
      <div className="container mx-auto max-w-7xl">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={mainControls}
          transition={{ duration: 0.5 }}
          variants={{
            visible: { opacity: 1, y: 0 },
          }}
        >
          Sobre Mim <span className="text-primary">;</span>
        </motion.h2>

        <div className="flex flex-col lg:flex-row items-start lg:space-x-8">
          {/* Imagem */}
          <motion.div
            className="w-full lg:w-1/2 mb-8 lg:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={mainControls}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={{
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="relative group aspect-[3/4] overflow-hidden rounded-lg shadow-lg">
              <img
                src="/assets/perfilpb.jpg"
                alt="Pedro Lucas"
                className="w-full h-full object-cover transition-all duration-500 ease-in-out group-hover:opacity-0"
              />
              <img
                src="/assets/perfilcol.jpg"
                alt="Pedro Lucas Colorido"
                className="w-full h-full object-cover absolute top-0 left-0 opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100"
              />
            </div>
            <p className="text-sm text-gray-400 mt-2 text-center">(passe o mouse na foto)</p>
          </motion.div>

          {/* Cards "Sobre Mim" */}
          <motion.div
            className="w-full lg:w-1/2 grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 50 }}
            animate={mainControls}
            transition={{ duration: 0.5, delay: 0.4 }}
            variants={{
              visible: { opacity: 1, x: 0 },
            }}
          >
            <Card className="bg-gray-800 border-gray-700 col-span-2">
              <CardHeader>
                <CardTitle className="text-primary">Quem sou eu</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Sou <span className="text-primary font-semibold">Pedro Lucas Reis</span>, um
                  <span className="text-primary font-semibold"> FullStack Developer</span> apaixonado por tecnologia e
                  inovação. Além da programação, sou <span className="text-primary font-semibold">músico</span>,
                  <span className="text-primary font-semibold"> compositor</span> e
                  <span className="text-primary font-semibold"> leitor ávido</span>, o que traz uma perspectiva única ao
                  meu trabalho.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700 row-start-2 col-start-2">
              <CardHeader>
                <CardTitle className="text-primary">Minha Jornada</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Atualmente, sou estagiário na <span className="text-primary font-semibold">Autocom3</span>, focando em
                  <span className="text-primary font-semibold"> .NET</span> e{" "}
                  <span className="text-primary font-semibold">C#</span>. Também atuo como{" "}
                  <span className="text-primary font-semibold">freelancer Fullstack</span> e
                  <span className="text-primary font-semibold"> produtor de conteúdo</span>, criando materiais
                  educativos para ajudar outros desenvolvedores em suas carreiras.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700 row-start-3 col-start-1">
              <CardHeader>
                <CardTitle className="text-primary">Meu Objetivo</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Meu objetivo é unir minha paixão por arte e tecnologia para desenvolver projetos inovadores que
                  combinem funcionalidade, design e impacto. Acredito no poder de compartilhar conhecimento e estou
                  comprometido em contribuir com a comunidade de desenvolvedores.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About

