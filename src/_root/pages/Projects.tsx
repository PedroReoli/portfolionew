// src/_root/pages/Projects.tsx
import { projectsData } from '@/constants';

const Projects = () => {
  return (
    <section id="projects" className="bg-[#111111] text-white py-20 px-5">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-5 text-center">Meus Projetos <span className="text-blue-500">.</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projectsData.map((project, index) => (
            <article
              key={index}
              className={`bg-gray-900 p-5 rounded-lg border-2 ${project.borderColor} hover:shadow-lg transition-shadow duration-300`}
            >
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-lg mb-4">{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className={`underline ${project.borderColor.replace('border', 'text')}`}>
                Visualizar projeto
              </a>
            </article>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <a href="https://github.com/PedroReoli" target="_blank" rel="noopener noreferrer" className="btn-enhanced">Repositórios no GitHub</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
