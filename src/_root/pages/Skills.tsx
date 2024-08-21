import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { skillsData, Skill } from '@/constants';

const Skills = () => {
  const [currentSkill, setCurrentSkill] = useState<Skill | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeSkill, setActiveSkill] = useState<number | null>(null);
  const itemsPerPage = 6;

  const getLevelDescription = (level: number): string => {
    if (level >= 0 && level < 1) {
      return 'Iniciante';
    } else if (level >= 1 && level < 2) {
      return 'Intermediário';
    } else if (level >= 2 && level <= 3) {
      return 'Avançado';
    } else {
      return '';
    }
  };

  const handlePrevSkill = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - itemsPerPage, 0));
  };

  const handleNextSkill = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + itemsPerPage, skillsData.length - itemsPerPage));
  };

  const handleSkillClick = (index: number) => {
    setActiveSkill(activeSkill === index ? null : index);
    setCurrentSkill(activeSkill === index ? null : skillsData[index]);
  };

  return (
    <section id="skills" className="bg-[#111111] text-white py-20 px-5">
      <div className="container mx-auto flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8">
        <div className="flex-1 mb-10 lg:mb-0">
          <h2 className="text-4xl font-bold mb-5">Conhecimentos <span className="text-blue-500">.</span></h2>
          <AnimatePresence mode="wait">
            {currentSkill ? (
              <motion.div
                key={currentSkill.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <motion.p className="text-lg text-gray-300 font-semibold">{currentSkill.description}</motion.p>
                <motion.p className="text-lg text-gray-300">
                  <span className="text-blue-500">Detalhes:</span> {currentSkill.details}
                </motion.p>

                <div className="course-cert-container">
                  <p className="text-blue-500 mb-2">Cursos:</p>
                  <div className="course-cert-grid">
                    {currentSkill.courses.map((course, i) => (
                      <a
                        key={i}
                        href={currentSkill.coursesLinks[i]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="course-cert-item"
                      >
                        <span className="course-cert-title">{course}</span>
                      </a>
                    ))}
                  </div>
                </div>

                <div className="course-cert-container">
                  <p className="text-blue-500 mb-2">Certificados:</p>
                  <div className="course-cert-grid">
                    {currentSkill.certificates.map((certificate, i) => (
                      <a
                        key={i}
                        href={currentSkill.certificatesLinks[i]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="course-cert-item"
                      >
                        <span className="course-cert-title">{certificate}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            ) : (
              <p className="text-lg text-gray-300">Clique em uma habilidade para ver os detalhes.</p>
            )}
          </AnimatePresence>
        </div>
        <div className="flex-1 relative">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {skillsData.slice(currentIndex, currentIndex + itemsPerPage).map((skill, index) => (
              <motion.article
                key={index}
                className={`bg-gray-900 p-5 rounded-lg flex flex-col items-center group relative cursor-pointer neon-hover transition-transform transform ${activeSkill === index ? 'scale-105 skill-card-active' : ''}`}
                onClick={() => handleSkillClick(index)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <img src={skill.icon} alt={`ícone do ${skill.title}`} className="card-icon" />
                <p className="text-lg font-bold">{skill.title}</p>
                <div className="w-full bg-gray-700 rounded-full h-2.5 mb-4">
                  <div className={`bg-blue-600 h-2.5 rounded-full`} style={{ width: `${(skill.level / 3) * 100}%` }}></div>
                </div>
                <p className="text-sm">{getLevelDescription(skill.level)}</p>
              </motion.article>
            ))}
          </div>
          {currentIndex > 0 && (
            <button 
              className="navigation-button navigation-button-left bg-blue-600"
              onClick={handlePrevSkill}
            >
              <FaChevronLeft className="text-white" />
            </button>
          )}
          {currentIndex < skillsData.length - itemsPerPage && (
            <button 
              className="navigation-button navigation-button-right bg-blue-600"
              onClick={handleNextSkill}
            >
              <FaChevronRight className="text-white" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;
