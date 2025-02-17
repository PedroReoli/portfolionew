import type React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/Button"
import { ArrowUp } from "lucide-react"

const ResponsiveEnd: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <section className="py-8 px-4 bg-background text-center">
      <motion.div
        className="space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <img src="/assets/Eu.svg" alt="Despedida" className="w-24 h-24 rounded-full mx-auto mb-4" />
        <h2 className="text-xl font-bold">
          Obrigado por visitar<span className="text-primary">! 👋🏻</span>
        </h2>
        <p className="text-sm text-muted-foreground">
          Espero que tenha gostado do meu portfólio! Volte ao início ou visite novamente quando desejar.
        </p>
        <Button onClick={scrollToTop} className="mt-4">
          <ArrowUp className="mr-2 h-4 w-4" /> Voltar ao Início
        </Button>
      </motion.div>
    </section>
  )
}

export default ResponsiveEnd

