import { projectsData } from "@/constants";

const Projects = () => {
  return (
    <section id="projects" className="bg-[#111111] text-white  min-h-screen py-20 px-5">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          Meus Projetos <span className="text-blue-500">;</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <article
              key={index}
              className="rounded-lg overflow-hidden border-2 border-gray-700 shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300 h-full flex flex-col"
            >
              {/* Imagem */}
              <img
                src={`/assets/${project.thumbnail}`}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              {/* Conteúdo */}
              <div className="p-6 bg-[#222222] flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm">{project.type}</p>
                  <p className="text-gray-300 text-base mb-4">
                    {project.description}
                  </p>
                  <p className="text-gray-400 text-sm mb-2">
                    <strong>Tecnologias:</strong> {project.techStack.join(", ")}
                  </p>
                  <p className="text-gray-400 text-sm mb-4">
                    <strong>Duração:</strong> {project.duration}
                  </p>
                </div>
                <p
                  className={`text-sm font-semibold ${
                    project.status === "Finalizado"
                      ? "text-green-400"
                      : "text-yellow-400"
                  } mb-4`}
                >
                  {project.status}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline hover:text-blue-400 transition mt-auto"
                >
                  Visualizar projeto
                </a>
              </div>
            </article>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <a
            href="https://github.com/PedroReoli"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-enhanced bg-blue-500 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-400 transition"
          >
            Ver mais no GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
