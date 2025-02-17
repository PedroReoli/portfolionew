import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold text-primary">Pedro Lucas</h2>
            <p className="text-muted-foreground">Desenvolvedor Fullstack Júnior</p>
          </div>
          <div className="flex space-x-6">
            <a
              href="https://github.com/PedroReoli"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/pedro-lucas-reis-de-oliveira-sousa-a93945171/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://x.com/opedroreoli"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
            >
              <FaTwitter size={24} />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Pedro Lucas. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  )
}

export default Footer

