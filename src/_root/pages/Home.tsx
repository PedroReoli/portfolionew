"use client"

import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaYoutube, FaInstagram, FaNewspaper } from "react-icons/fa"
import type React from "react"

const Home = () => {
  return (
    <section className="bg-[#111111] text-white min-h-screen relative overflow-hidden flex flex-col justify-center items-center p-4">
      <div className="absolute inset-0 bg-gradient-radial from-[#60A5FA]/5 to-transparent" />

      <div className="relative z-10 max-w-4xl w-full">
        <motion.div
          className="text-center space-y-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Social Icons */}
          <motion.div
            className="flex justify-center items-center gap-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {socialLinks.map((link, index) => (
              <SocialIcon key={index} {...link} />
            ))}
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Olá 👋🏻 eu sou o <span className="text-[#60A5FA]">Pedro</span>
            </h1>

            <p className="text-xl md:text-2xl text-[#94A3B8]">Desenvolvedor Fullstack Júnior</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

const socialLinks = [
  { href: "mailto:pedrosousa2160@gmail.com", icon: <FaEnvelope />, label: "Email" },
  { href: "https://github.com/PedroReoli", icon: <FaGithub />, label: "GitHub" },
  {
    href: "https://www.linkedin.com/in/pedro-lucas-reis-de-oliveira-sousa-a93945171/",
    icon: <FaLinkedin />,
    label: "LinkedIn",
  },
  { href: "https://devemdesenvolvimento.netlify.app/", icon: <FaNewspaper />, label: "Blog" },
  { href: "https://www.youtube.com/@DevDesenvolvimento", icon: <FaYoutube />, label: "YouTube" },
  { href: "https://www.instagram.com/01_dev_em_desenvolvimento", icon: <FaInstagram />, label: "Instagram" },
  { href: "https://x.com/opedroreoli", icon: <FaTwitter />, label: "Twitter" },
]

interface SocialIconProps {
  href: string
  icon: React.ReactNode
  label: string
}

const SocialIcon: React.FC<SocialIconProps> = ({ href, icon, label }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
  >
    <div className="p-3 bg-[#0A1120] rounded-xl border border-[#1E293B] group-hover:border-[#60A5FA] transition-all duration-300">
      <div className="text-xl text-[#60A5FA] group-hover:text-white transition-colors duration-300">{icon}</div>
    </div>
    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-max opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <span className="text-sm text-[#94A3B8] bg-[#0A1120] px-2 py-1 rounded-md border border-[#1E293B]">{label}</span>
    </div>
  </motion.a>
)

export default Home

