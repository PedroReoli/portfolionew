"use client"

import { motion } from "framer-motion"
import { skillsData } from "@/constants/skillsData"

const Skills = () => {
  const categories = [
    { key: "frontend", title: "Front-End" },
    { key: "backend", title: "Back-End" },
    { key: "database", title: "Banco de Dados" },
    { key: "devops", title: "Ferramentas" },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <motion.section
      id="Skills"
      className="bg-[#111111] text-white min-h-screen py-20 px-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto">
        {/* Título */}
        <motion.h2
          className="text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Habilidades<span className="text-blue-400">;</span>
        </motion.h2>

        <div className="space-y-12">
          {categories.map((category, idx) => {
            const categorySkills = skillsData.filter((skill) => skill.area.toLowerCase() === category.key)

            return (
              <div key={category.key} className="space-y-6">
                <motion.h3
                  className="text-2xl font-bold text-blue-400"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + idx * 0.1 }}
                >
                  {category.title}
                  <span className="text-blue-400">;</span>
                </motion.h3>

                <motion.div
                  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {categorySkills.map((skill) => (
                    <motion.div
                      key={skill.title}
                      variants={cardVariants}
                      className="group relative bg-gray-800 rounded-xl p-4 hover:bg-gray-700 transition-all duration-300 flex flex-col items-center"
                      whileHover={{ scale: 1.05, boxShadow: "0 8px 20px -8px rgba(59, 130, 246, 0.4)" }}
                    >
                      <div className="w-12 h-12 rounded-lg bg-[#1e293b] border border-blue-400/20 flex items-center justify-center mb-3 group-hover:border-blue-400 transition-colors duration-300">
                        <img
                          src={skill.icon || "/placeholder.svg"}
                          alt={skill.title}
                          className="w-7 h-7 object-contain"
                        />
                      </div>

                      <h4 className="text-sm font-medium text-center mb-2 group-hover:text-blue-400 transition-colors duration-300">
                        {skill.title}
                      </h4>

                      <div className="w-full h-0.5 bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-blue-400"
                          initial={{ width: 0 }}
                          animate={{ width: `${(skill.level / 3) * 100}%` }}
                          transition={{ duration: 0.8, delay: 0.2 }}
                        />
                      </div>

                      {skill.courses.length > 0 && (
                        <div className="absolute inset-0 bg-gray-800/95 rounded-xl p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <div className="overflow-y-auto max-h-full scrollbar-thin scrollbar-thumb-blue-400">
                            <div className="flex flex-col gap-1.5">
                              {skill.courses.map((course, idx) => (
                                <a
                                  key={idx}
                                  href={skill.coursesLinks[idx]}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-[10px] px-2 py-1 bg-[#1e293b] text-gray-300 rounded-md hover:bg-blue-400/10 hover:text-blue-400 transition-all duration-300 text-center"
                                >
                                  {course}
                                </a>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            )
          })}
        </div>
      </div>
    </motion.section>
  )
}

export default Skills

