"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Database, Server, Globe, Workflow } from "lucide-react"
import { Tilt } from "react-tilt"
import { skillsData, type Skill } from "@/constants/skillsData"

const defaultTiltOptions = {
  reverse: false,
  max: 15,
  perspective: 1000,
  scale: 1.02,
  speed: 1000,
  transition: true,
  axis: null,
  reset: true,
  easing: "cubic-bezier(.03,.98,.52,.99)",
}

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null)

  const technologies = [
    {
      category: "Front-End",
      icon: <Globe className="w-4 xxs:w-5 xs:w-6 h-4 xxs:h-5 xs:h-6 text-[#60A5FA]" />,
      skills: skillsData.filter((skill) => skill.area === "frontend"),
    },
    {
      category: "Back-End",
      icon: <Server className="w-4 xxs:w-5 xs:w-6 h-4 xxs:h-5 xs:h-6 text-[#60A5FA]" />,
      skills: skillsData.filter((skill) => skill.area === "backend"),
    },
    {
      category: "Banco de Dados",
      icon: <Database className="w-4 xxs:w-5 xs:w-6 h-4 xxs:h-5 xs:h-6 text-[#60A5FA]" />,
      skills: skillsData.filter((skill) => skill.area === "database"),
    },
    {
      category: "Ferramentas",
      icon: <Workflow className="w-4 xxs:w-5 xs:w-6 h-4 xxs:h-5 xs:h-6 text-[#60A5FA]" />,
      skills: skillsData.filter((skill) => skill.area === "tools"),
    },
  ]

  const getLevelBars = (level: number) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3].map((bar) => (
          <div
            key={bar}
            className={`h-1 xxs:h-1.5 w-3 xxs:w-4 rounded-full ${
              bar <= level
                ? "bg-[#60A5FA]"
                : bar - 0.5 <= level
                  ? "bg-gradient-to-r from-[#60A5FA] to-transparent"
                  : "bg-[#1E293B]"
            }`}
          />
        ))}
      </div>
    )
  }

  return (
    <motion.section
      id="Skills"
      className="bg-[#111111] text-white min-h-screen py-10 xxs:py-12 xs:py-16 sm:py-20 px-3 xxs:px-4 xs:px-5 sm:px-6 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto max-w-7xl">
        <motion.h2
          className="text-2xl xxs:text-3xl xs:text-4xl font-bold text-center mb-8 xxs:mb-10 xs:mb-12 sm:mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Habilidades<span className="text-[#60A5FA]">;</span>
        </motion.h2>

        <motion.div
          className="grid gap-4 xxs:gap-6 xs:gap-8 sm:grid-cols-2"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            },
          }}
          initial="hidden"
          animate="visible"
        >
          {technologies.map((tech) => (
            <motion.div
              key={tech.category}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5 },
                },
              }}
            >
              <Tilt options={defaultTiltOptions}>
                <div className="relative group">
                  {/* Card glow effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-[#60A5FA] to-[#60A5FA] rounded-xl xxs:rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-1000 group-hover:duration-200" />

                  {/* Card content */}
                  <div className="relative flex flex-col p-4 xxs:p-6 xs:p-8 bg-[#0A1120] rounded-xl xxs:rounded-2xl border border-[#1E293B] backdrop-blur-xl min-h-[240px] xxs:min-h-[260px] xs:min-h-[280px]">
                    {/* Category header with icon */}
                    <div className="relative flex items-center gap-2 xxs:gap-3 mb-4 xxs:mb-5 xs:mb-6">
                      <div className="relative w-8 xxs:w-10 xs:w-12 h-8 xxs:h-10 xs:h-12">
                        <div className="absolute inset-0 bg-[#60A5FA] rounded-lg xxs:rounded-xl blur-md opacity-20" />
                        <div className="relative flex items-center justify-center w-full h-full bg-[#0A1120] rounded-lg xxs:rounded-xl border border-[#1E293B]">
                          {tech.icon}
                        </div>
                      </div>
                      <h3 className="text-lg xxs:text-xl xs:text-2xl font-bold text-white">{tech.category}</h3>
                    </div>

                    {/* Skills grid */}
                    <div className="grid grid-cols-1 xxs:grid-cols-2 gap-2 xxs:gap-3">
                      {tech.skills.map((skill) => {
                        const SkillIcon = skill.icon
                        return (
                          <motion.button
                            key={skill.title}
                            onClick={() => setSelectedSkill(skill)}
                            className="relative group/skill"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#60A5FA]/20 to-[#60A5FA]/20 rounded-lg xxs:rounded-xl opacity-0 group-hover/skill:opacity-100 transition duration-300" />
                            <div className="relative p-2 xxs:p-3 bg-[#0F172A] rounded-lg xxs:rounded-xl border border-[#1E293B] group-hover/skill:border-[#60A5FA]/20 transition-all duration-300">
                              <div className="flex items-center gap-1.5 xxs:gap-2">
                                <SkillIcon className="w-4 xxs:w-5 h-4 xxs:h-5" />
                                <span className="text-xs xxs:text-sm font-medium text-[#94A3B8] group-hover/skill:text-[#60A5FA] transition-colors">
                                  {skill.title}
                                </span>
                              </div>
                            </div>
                          </motion.button>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </motion.div>

        <AnimatePresence>
          {selectedSkill && (
            <Dialog open={!!selectedSkill} onOpenChange={() => setSelectedSkill(null)}>
              <DialogContent className="bg-[#0A1120] border-[#1E293B] text-white max-w-[90vw] xxs:max-w-[85vw] sm:max-w-lg">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ type: "spring", duration: 0.5 }}
                >
                  <DialogHeader>
                    <DialogTitle className="text-lg xxs:text-xl font-bold flex items-center gap-2">
                      <selectedSkill.icon className="w-5 xxs:w-6 h-5 xxs:h-6 text-[#60A5FA]" />
                      {selectedSkill.title}
                    </DialogTitle>
                  </DialogHeader>

                  <div className="space-y-4 xxs:space-y-6 mt-4 xxs:mt-6">
                    <motion.div
                      className="space-y-2"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      <h4 className="text-xs xxs:text-sm font-medium text-[#94A3B8]">Nível</h4>
                      {getLevelBars(selectedSkill.level)}
                    </motion.div>

                    <motion.div
                      className="space-y-2 xxs:space-y-3"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <h4 className="text-xs xxs:text-sm font-medium text-[#94A3B8]">Cursos</h4>
                      <div className="grid gap-2">
                        {selectedSkill.courses.map((course, idx) => (
                          <motion.a
                            key={idx}
                            href={selectedSkill.coursesLinks[idx]}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative group/link"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#60A5FA]/20 to-[#60A5FA]/20 rounded-lg xxs:rounded-xl opacity-0 group-hover/link:opacity-100 transition duration-300" />
                            <div className="relative p-3 xxs:p-4 bg-[#0F172A] rounded-lg xxs:rounded-xl border border-[#1E293B] group-hover/link:border-[#60A5FA]/20 transition-all duration-300">
                              <p className="text-xs xxs:text-sm text-[#94A3B8] group-hover/link:text-[#60A5FA] transition-colors">
                                {course}
                              </p>
                            </div>
                          </motion.a>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </DialogContent>
            </Dialog>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  )
}

export default Skills

