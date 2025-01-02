'use client'

import { motion } from "framer-motion";
import Button from "@/components/Button"

const Services = () => {
  return (
    <motion.section 
      id="services" 
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
          Serviços <span className="text-blue-500">;</span>
        </motion.h2>

        {/* Serviços */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Serviço 1 */}
          <ServiceCard
            icon="/assets/uxui.svg"
            title="UX / UI Design"
            description="Desenho interfaces claras, objetivas e intuitivas, priorizando a experiência do usuário."
          />

          {/* Serviço 2 */}
          <ServiceCard
            icon="/assets/prog.svg"
            title="Desenvolvimento FullStack"
            description="Construo soluções completas, desde interfaces até back-ends robustos e escaláveis."
          />

          {/* Serviço 3 */}
          <ServiceCard
            icon="/assets/hands.svg"
            title="Mentoria e Aulas"
            description="Orientação personalizada para estudos, carreiras e projetos na área de programação."
          />
        </motion.div>

        {/* Botão "Entre em Contato" */}
        <motion.div 
          className="flex justify-center mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Button href="mailto:pedrosousa2160@gmail.com">
            Entre em Contato
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => (
  <motion.article 
    className="relative p-8 rounded-xl flex flex-col items-center transition-all duration-300 bg-gray-900/40 backdrop-blur-md shadow-md"
    variants={cardVariants}
    whileHover={{ scale: 1.05, boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.3)" }}
  >
    <motion.div 
      className="absolute -top-10 w-20 h-20 rounded-full flex items-center justify-center shadow-md bg-transparent"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.4, delay: 0.2 }}
    >
      <img src={icon} alt={`ícone ${title}`} className="w-12 h-12" />
    </motion.div>
    <motion.h3 
      className="text-2xl font-bold mb-4 mt-12 text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.4 }}
    >
      {title}
    </motion.h3>
    <motion.p 
      className="text-lg text-center text-gray-300 leading-relaxed"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.6 }}
    >
      {description}
    </motion.p>
  </motion.article>
);

export default Services;

