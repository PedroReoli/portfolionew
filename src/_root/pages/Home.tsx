"use client"

import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaYoutube, FaInstagram, FaNewspaper } from "react-icons/fa"
import type React from "react"

const Home = () => {
  return (
    <section className="bg-[#111111] text-white min-h-screen relative overflow-hidden flex flex-col justify-center items-center p-3 xxs:p-4">
      <div className="absolute inset-0 bg-gradient-radial from-[#60A5FA]/5 to-transparent" />

      <div className="relative z-10 max-w-4xl w-full">
        <motion.div
          className="text-center space-y-10 xxs:space-y-12 xs:space-y-14 sm:space-y-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Social Icons */}
          <motion.div
            className="flex flex-wrap justify-center items-center gap-2 xxs:gap-3 xs:gap-4 sm:gap-5 md:gap-6"
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
            className="space-y-2 xxs:space-y-3 xs:space-y-4"
          >
            <h1 className="text-2xl xxs:text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
              Olá 👋🏻 eu sou o <span className="text-[#60A5FA]">Pedro</span>
            </h1>

            <p className="text-base xxs:text-lg xs:text-xl sm:text-xl md:text-2xl text-[#94A3B8]">
              Desenvolvedor Fullstack Júnior
            </p>
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
    <div className="p-2 xxs:p-2.5 xs:p-3 bg-[#0A1120] rounded-lg xxs:rounded-xl border border-[#1E293B] group-hover:border-[#60A5FA] transition-all duration-300">
      <div className="text-base xxs:text-lg xs:text-xl text-[#60A5FA] group-hover:text-white transition-colors duration-300">
        {icon}
      </div>
    </div>
    <div className="absolute -bottom-6 xxs:-bottom-7 xs:-bottom-8 left-1/2 -translate-x-1/2 w-max opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <span className="text-xs xxs:text-sm text-[#94A3B8] bg-[#0A1120] px-1.5 xxs:px-2 py-0.5 xxs:py-1 rounded-md border border-[#1E293B]">
        {label}
      </span>
    </div>
  </motion.a>
)

export default Home

