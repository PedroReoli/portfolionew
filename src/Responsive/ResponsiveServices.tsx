import  React from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/Button"
import { Link } from "react-router-dom"

const services = [
  {
    icon: "/assets/uxui.svg",
    title: "UX / UI Design",
    description: "Desenho interfaces claras, objetivas e intuitivas, priorizando a experiência do usuário.",
  },
  {
    icon: "/assets/prog.svg",
    title: "Desenvolvimento FullStack",
    description: "Construo soluções completas, desde interfaces até back-ends robustos e escaláveis.",
  },
  {
    icon: "/assets/hands.svg",
    title: "Mentoria e Aulas",
    description: "Orientação personalizada para estudos, carreiras e projetos na área de programação.",
  },
]

const ResponsiveServices: React.FC = () => {
  return (
    <section className="py-8 px-4 bg-background">
      <motion.h2
        className="text-2xl font-bold text-center mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Serviços <span className="text-primary">;</span>
      </motion.h2>

      <div className="space-y-4">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <img src={service.icon || "/placeholder.svg"} alt={service.title} className="w-6 h-6 mr-2" />
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <Button>
          <Link to="mailto:pedrosousa2160@gmail.com">Entre em Contato</Link>
        </Button>
      </motion.div>
    </section>
  )
}

export default ResponsiveServices

