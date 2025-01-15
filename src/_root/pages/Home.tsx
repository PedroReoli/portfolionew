'use client'

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaYoutube, FaInstagram, FaNewspaper } from "react-icons/fa";

const Home = () => {
  return (
    <section className="bg-[#111111] text-white min-h-screen flex flex-col justify-center items-center p-4">
      {/* Ícones Sociais */}
      <motion.div 
        className="flex flex-wrap justify-center gap-4 mb-8 md:mb-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <SocialIcon href="mailto:pedrosousa2160@gmail.com" icon={<FaEnvelope />} />
        <SocialIcon href="https://github.com/PedroReoli" icon={<FaGithub />} />
        <SocialIcon href="https://www.linkedin.com/in/pedro-lucas-reis-de-oliveira-sousa-a93945171/" icon={<FaLinkedin />} />
        <SocialIcon href="https://devemdesenvolvimento.netlify.app/" icon={<FaNewspaper />} />
        <SocialIcon href="https://www.youtube.com/@DevDesenvolvimento" icon={<FaYoutube />} />
        <SocialIcon href="https://www.instagram.com/01_dev_em_desenvolvimento" icon={<FaInstagram />} />
        <SocialIcon href="https://x.com/opedroreoli" icon={<FaTwitter />} />
      </motion.div>

      {/* Texto Principal */}
      <motion.div 
        className="text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <motion.h1 
          className="text-4xl md:text-6xl font-extrabold mb-4 md:mb-6"
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          Olá{' '}
          <motion.span
            role="img"
            aria-label="wave"
            className="inline-block"
            initial={{ rotate: 0, y: 0 }}
            animate={{ rotate: [0, 15, -10, 0] }}
            transition={{
              duration: 1.2, // Duração da animação
              ease: "easeInOut", // Suavidade
              delay: 1.0, // Sincronizado com o texto
            }}
          >
            👋🏻
          </motion.span>, eu sou o <span className="text-[#00aaff]">Pedro</span>
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.1 }}
        >
          Desenvolvedor Fullstack Júnior
        </motion.p>
      </motion.div>
    </section>
  );
};

interface SocialIconProps {
  href: string;
  icon: JSX.Element;
}

const SocialIcon: React.FC<SocialIconProps> = ({ href, icon }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-[#00aaff] text-3xl md:text-4xl hover:scale-110 transition-transform"
    whileHover={{ scale: 1.2 }}
    whileTap={{ scale: 0.9 }}
  >
    {icon}
  </motion.a>
);

export default Home;
