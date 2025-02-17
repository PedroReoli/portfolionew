import  React from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/Button"
import { Link } from "react-router-dom"

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
      "Aprenda como a Programação Orientada a Objetos (POO) revoluciona o desenvolvimento de software. Com exemplos práticos do mundo real.",
    link: "https://devemdesenvolvimento.netlify.app/post/programao-orientada-a-objetos-estruturando-sistemas-reais",
  },
]

const ResponsiveBlogSection: React.FC = () => {
  return (
    <section className="py-8 px-4 bg-background">
      <motion.h2
        className="text-2xl font-bold text-center mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Últimos Posts no Blog <span className="text-primary">;</span>
      </motion.h2>

      <div className="space-y-4">
        {blogs.map((blog, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-primary">{blog.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">{blog.description}</p>
                <Button variant="outline" size="sm">
                  <Link to={blog.link} target="_blank" rel="noopener noreferrer">
                    Ler mais →
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default ResponsiveBlogSection

