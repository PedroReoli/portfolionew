"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

const ResponsiveAbout: React.FC = () => {
  const [currentImage, setCurrentImage] = useState("/assets/perfilpb.jpg")
  const [isFading, setIsFading] = useState(false)

  useEffect(() => {
    const imageToggle = setInterval(() => {
      setIsFading(true)
      setTimeout(() => {
        setCurrentImage((prevImage) =>
          prevImage === "/assets/perfilpb.jpg" ? "/assets/perfilcol.jpg" : "/assets/perfilpb.jpg",
        )
        setIsFading(false)
      }, 300)
    }, 3000)

    return () => clearInterval(imageToggle)
  }, [])

  return (
    <section className="py-8 px-4 bg-background">
      <motion.h2
        className="text-2xl font-bold text-center mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Sobre Mim <span className="text-primary">;</span>
      </motion.h2>

      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col items-center">
            <motion.div
              className="relative w-24 h-24 mb-4"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={currentImage || "/placeholder.svg"}
                alt="Pedro Lucas"
                className={`rounded-full w-full h-full object-cover transition-opacity duration-300 ${
                  isFading ? "opacity-0" : "opacity-100"
                }`}
              />
            </motion.div>

            <motion.p
              className="text-sm text-muted-foreground text-center mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Olá! Sou <span className="text-primary font-semibold">Pedro Lucas Reis</span>, um{" "}
              <span className="text-primary font-semibold">FullStack Developer</span> apaixonado por tecnologia e
              inovação. Meu foco é criar soluções práticas e impactantes para desafios modernos.
            </motion.p>

            <motion.p
              className="text-sm text-muted-foreground text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Atualmente, atuo na <span className="text-primary font-semibold">Autocom3</span>, trabalhando com{" "}
              <span className="text-primary font-semibold">.NET</span> e{" "}
              <span className="text-primary font-semibold">C#</span>. Paralelamente, sou{" "}
              <span className="text-primary font-semibold">freelancer</span> e{" "}
              <span className="text-primary font-semibold">criador de conteúdo</span>, compartilhando conhecimentos para
              ajudar desenvolvedores em suas jornadas.
            </motion.p>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}

export default ResponsiveAbout

