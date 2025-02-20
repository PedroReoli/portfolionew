"use client"

import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaYoutube, FaInstagram, FaNewspaper } from "react-icons/fa"
import React from 'react';

const Home = () => {
  return (
    <section className="bg-[#111111] text-white min-h-screen relative overflow-hidden flex flex-col justify-center items-center p-4">
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#60A5FA] rounded-full blur-[150px] opacity-10" />
      </div>

      <div className="relative z-10 max-w-4xl w-full">
        {/* Ícones Sociais */}
        <motion.div 
          className="flex flex-wrap justify-center gap-6 mb-12"
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
          className="text-center space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <motion.div
            className="relative inline-block"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold">
              Olá{' '}
              <motion.span
                role="img"
                aria-label="wave"
                className="inline-block"
                animate={{ rotate: [0, 15, -10, 0] }}
                transition={{
                  duration: 1.2,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatDelay: 1
                }}
              >
                👋🏻
              </motion.span>
              , eu sou o{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-[#60A5FA] px-2">Pedro</span>
                <motion.span
                  className="absolute inset-0 bg-[#60A5FA]/10 rounded-lg -skew-x-12"
                  animate={{
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            className="relative inline-block"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-[#60A5FA]/20 to-[#60A5FA]/20 rounded-full blur" />
            <p className="relative text-xl md:text-2xl text-[#94A3B8] font-medium px-6 py-2 bg-[#0A1120] rounded-full border border-[#1E293B]">
              Desenvolvedor Fullstack Júnior
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

interface SocialIconProps {
  href: string
  icon: JSX.Element
}

const SocialIcon: React.FC<SocialIconProps> = ({ href, icon }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="relative group"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
  >
    {/* Glow effect */}
    <div className="absolute -inset-2 bg-[#60A5FA] rounded-full blur opacity-0 group-hover:opacity-25 transition duration-300" />
    
    {/* Icon container */}
    <div className="relative w-12 h-12 flex items-center justify-center bg-[#0A1120] rounded-full border border-[#1E293B] group-hover:border-[#60A5FA]/50 transition-colors duration-300">
      <div className="text-2xl text-[#60A5FA]">
        {icon}
      </div>
    </div>
  </motion.a>
)

export default Home
