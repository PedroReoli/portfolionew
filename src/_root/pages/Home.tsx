import  React from "react"
import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaYoutube, FaInstagram, FaNewspaper } from "react-icons/fa"
import { TypeAnimation } from "react-type-animation"
import { Button } from "@/components/ui/Button"

const Home = () => {
  return (
    <section className="bg-background text-foreground min-h-screen flex flex-col justify-center items-center p-4">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold mb-4 md:mb-6"
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Olá{" "}
          <motion.span
            role="img"
            aria-label="wave"
            className="inline-block"
            animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
            transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY, repeatDelay: 1 }}
          >
            👋🏻
          </motion.span>
          , eu sou o <span className="text-primary">Pedro</span>
        </motion.h1>
        <motion.div
          className="text-xl md:text-2xl text-muted-foreground mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <TypeAnimation
            sequence={[
              "Desenvolvedor Fullstack Júnior",
              2000,
              "Apaixonado por Tecnologia",
              2000,
              "Sempre Aprendendo",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Number.POSITIVE_INFINITY}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <Button variant="default" className="mr-4">
            Entre em Contato
          </Button>
          <Button variant="secondary">Ver Projetos</Button>
        </motion.div>
      </motion.div>

      <motion.div
        className="flex flex-wrap justify-center gap-6 mt-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.9 }}
      >
        <SocialIcon href="mailto:pedrosousa2160@gmail.com" icon={<FaEnvelope />} />
        <SocialIcon href="https://github.com/PedroReoli" icon={<FaGithub />} />
        <SocialIcon
          href="https://www.linkedin.com/in/pedro-lucas-reis-de-oliveira-sousa-a93945171/"
          icon={<FaLinkedin />}
        />
        <SocialIcon href="https://devemdesenvolvimento.netlify.app/" icon={<FaNewspaper />} />
        <SocialIcon href="https://www.youtube.com/@DevDesenvolvimento" icon={<FaYoutube />} />
        <SocialIcon href="https://www.instagram.com/01_dev_em_desenvolvimento" icon={<FaInstagram />} />
        <SocialIcon href="https://x.com/opedroreoli" icon={<FaTwitter />} />
      </motion.div>
    </section>
  )
}

const SocialIcon = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-muted-foreground hover:text-primary text-2xl md:text-3xl transition-colors"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
  >
    {icon}
  </motion.a>
)

export default Home

