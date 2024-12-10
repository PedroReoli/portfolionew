import { useState } from "react";
import { projectsData } from "@/constants";
import Button from "@/components/Button";

const ResponsiveProjects = () => {
  return (
    <section className="bg-[#111111] text-white py-10 px-4 flex flex-col items-center">
      {/* Título */}
      <h2 className="text-2xl font-bold text-center mb-8">
        Meus Projetos <span className="text-blue-500">;</span>
      </h2>

      {/* Lista de Projetos */}
      <div className="space-y-6 w-full max-w-md">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>

      {/* Botão GitHub */}
      <div className="mt-16">
        <Button
          href="https://github.com/PedroReoli"
          variant="primary"
          className="py-2 px-6 text-sm shadow-md hover:shadow-lg"
        >
          Ver mais no GitHub
        </Button>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: typeof projectsData[number];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === project.thumbnails.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? project.thumbnails.length - 1 : prevIndex - 1
    );
  };

  return (
    <article className="bg-[#222222] rounded-lg overflow-hidden border border-gray-700 shadow-lg">
      {/* Imagem com setas */}
      <div className="relative">
        <img
          src={project.thumbnails[currentImageIndex]}
          alt={`${project.title} - Imagem ${currentImageIndex + 1}`}
          className="w-full h-48 object-cover"
        />
        <button
          onClick={handlePreviousImage}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
        >
          ❮
        </button>
        <button
          onClick={handleNextImage}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
        >
          ❯
        </button>
      </div>

      {/* Conteúdo */}
      <div className="p-4 flex flex-col space-y-4">
        <div>
          <h3 className="text-lg font-bold text-white mb-1">{project.title}</h3>
          <p className="text-sm text-gray-400">{project.type}</p>
        </div>
        <p className="text-sm text-gray-300 leading-relaxed">{project.description}</p>
        <div className="text-sm text-gray-400">
          <p>
            <strong>Tecnologias:</strong> {project.techStack.join(", ")}
          </p>
          <p>
            <strong>Duração:</strong> {project.duration}
          </p>
        </div>
        <p
          className={`text-sm font-semibold ${
            project.status === "Finalizado" ? "text-green-400" : "text-yellow-400"
          }`}
        >
          {project.status}
        </p>
        <Button
          href={project.link}
          variant="primary"
          className="py-2 px-4 mt-4 text-center text-sm"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visualizar
        </Button>
      </div>
    </article>
  );
};

export default ResponsiveProjects;
