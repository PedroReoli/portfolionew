import { useState } from "react";
import { projectsData } from "@/constants";
import Button from "@/components/Button";

const Projects = () => {
  return (
    <section id="projects" className="bg-[#111111] text-white min-h-screen py-20 px-5">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          Meus Projetos <span className="text-blue-500">;</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <Button
            href="https://github.com/PedroReoli"
            variant="primary"
            className="shadow-lg"
          >
            Ver mais no GitHub
          </Button>
        </div>
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
    <article
      className="rounded-lg overflow-hidden border-2 border-gray-700 shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300 h-full flex flex-col"
    >
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
      <div className="p-6 bg-[#222222] flex flex-col justify-between flex-grow">
        <div>
          <h3 className="text-2xl font-bold mb-2 text-white">{project.title}</h3>
          <p className="text-gray-400 mb-4 text-sm">{project.type}</p>
          <p className="text-gray-300 text-base mb-4">{project.description}</p>
          <p className="text-gray-400 text-sm mb-2">
            <strong>Tecnologias:</strong> {project.techStack.join(", ")}
          </p>
          <p className="text-gray-400 text-sm mb-4">
            <strong>Duração:</strong> {project.duration}
          </p>
        </div>
        <p
          className={`text-sm font-semibold ${
            project.status === "Finalizado" ? "text-green-400" : "text-yellow-400"
          } mb-4`}
        >
          {project.status}
        </p>
        <Button
          href={project.link}
          variant="primary"
          className="mt-auto flex justify-center items-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visualizar 
        </Button>
      </div>
    </article>
  );
};

export default Projects;
