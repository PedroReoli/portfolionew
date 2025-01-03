'use client'

import { motion } from "framer-motion";
import Button from "@/components/Button";

const ResponsiveServices = () => {
  return (
    <motion.section 
      id="services" 
      className="bg-[#111111] text-white py-12 px-6 flex flex-col items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h2 
        className="text-2xl md:text-3xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Serviços <span className="text-blue-500">;</span>
      </motion.h2>

      <motion.div 
        className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 w-full max-w-4xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, staggerChildren: 0.2 }}
      >
        <ServiceCard
          icon="/assets/uxui.svg"
          title="UX / UI Design"
          description="Desenho interfaces claras, objetivas e intuitivas, priorizando a experiência do usuário."
        />
        <ServiceCard
          icon="/assets/prog.svg"
          title="Desenvolvimento FullStack"
          description="Construo soluções completas, desde interfaces até back-ends robustos e escaláveis."
        />
        <ServiceCard
          icon="/assets/hands.svg"
          title="Mentoria e Aulas"
          description="Orientação personalizada para estudos, carreiras e projetos na área de programação."
        />
      </motion.div>

      <motion.div 
        className="mt-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <Button
          href="mailto:pedrosousa2160@gmail.com"
          variant="primary"
          className="py-3 px-8 text-sm font-medium shadow-lg hover:shadow-xl hover:bg-blue-600 transition duration-300"
        >
          Entre em Contato
        </Button>
      </motion.div>
    </motion.section>
  );
};

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => (
  <motion.article 
    className="bg-[#1a1a1a] p-6 rounded-2xl shadow-lg flex flex-col items-center text-center transform hover:scale-105 transition duration-300"
    whileHover={{ scale: 1.05 }}
  >
    <div className="bg-[#1e293b] rounded-full p-4 shadow-md border-2 border-blue-500">
      <img src={icon} alt={`Ícone ${title}`} className="w-12 h-12" />
    </div>
    <h3 className="text-xl font-bold mt-6 mb-4 text-blue-400">{title}</h3>
    <p className="text-sm text-gray-300 leading-relaxed">{description}</p>
  </motion.article>
);

export default ResponsiveServices;
