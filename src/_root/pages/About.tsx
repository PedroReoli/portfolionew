import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const About = () => {
  return (
    <section className="bg-background text-foreground py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Sobre Mim <span className="text-primary">;</span>
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Quem sou eu</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Sou Pedro Lucas Reis, um Desenvolvedor Fullstack Júnior apaixonado por criar soluções inovadoras. Além
                  da programação, sou músico e leitor ávido, o que traz uma perspectiva única ao meu trabalho.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Minha Jornada</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Atualmente, sou estagiário na Autocom3, focando em .NET e C#. Também atuo como freelancer Fullstack e
                  produzo conteúdo educativo para ajudar outros desenvolvedores em suas carreiras.
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

