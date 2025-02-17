import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const experiences = [
  {
    company: "EvaTech",
    period: "07/2024 - 11/2024",
    role: "Professor, Palestrante e Mentor",
    description:
      "Ministrei aulas, workshops e palestras sobre habilidades tecnológicas essenciais para o mercado de trabalho.",
  },
  {
    company: "DevEmDesenvolvimento",
    period: "Em andamento",
    role: "Professor, Redator e Dono",
    description: "Plataforma educacional focada em novos entusiastas e programadores iniciantes.",
  },
  {
    company: "AutoCom3",
    period: "Em andamento",
    role: "Estagiário de Desenvolvimento",
    description:
      "Aprofundei meus conhecimentos em Banco de Dados, ASP.NET, e C#, além de atuar como Tester de aplicações.",
  },
]

const Experience = () => {
  return (
    <section className="bg-background text-foreground py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Experiências <span className="text-primary">;</span>
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-primary">{exp.company}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-2">{exp.period}</p>
                  <p className="font-semibold mb-2">{exp.role}</p>
                  <p className="text-sm text-muted-foreground">{exp.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

