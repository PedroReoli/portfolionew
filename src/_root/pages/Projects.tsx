// src/_root/pages/Projects.tsx

const Projects = () => {
  return (
    <section id="projects" className="bg-[#111111] text-white py-20 px-5">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-5 text-center">Meus Projetos <span className="text-blue-500">.</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <article className="bg-gray-900 p-5 rounded-lg border-2 border-red-500 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-bold mb-2">Evatech</h3>
            <p className="text-lg mb-4">Site do projeto, feito com React, Tailwind, AppwriteDB e Javascript.</p>
            <a href="https://evatech2024.netlify.app" target="_blank" rel="noopener noreferrer" className="text-red-500 underline">Visualizar projeto</a>
          </article>
          <article className="bg-gray-900 p-5 rounded-lg border-2 border-blue-500 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-bold mb-2">Peoplelly (fase de testes)</h3>
            <p className="text-lg mb-4">Meu projeto individual, feito em React, Tailwind, AppwriteDB.</p>
            <a href="https://peoplelly.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Visualizar projeto</a>
          </article>
          <article className="bg-gray-900 p-5 rounded-lg border-2 border-green-500 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-bold mb-2">Projeto 3</h3>
            <p className="text-lg mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-green-500 underline">Visualizar projeto</a>
          </article>
          <article className="bg-gray-900 p-5 rounded-lg border-2 border-purple-500 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-bold mb-2">Projeto 4</h3>
            <p className="text-lg mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-purple-500 underline">Visualizar projeto</a>
          </article>
          <article className="bg-gray-900 p-5 rounded-lg border-2 border-yellow-500 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-bold mb-2">Projeto 5</h3>
            <p className="text-lg mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-yellow-500 underline">Visualizar projeto</a>
          </article>
          <article className="bg-gray-900 p-5 rounded-lg border-2 border-pink-500 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-bold mb-2">Projeto 6</h3>
            <p className="text-lg mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-pink-500 underline">Visualizar projeto</a>
          </article>
        </div>
        <div className="flex justify-center mt-10">
          <a href="https://github.com/PedroReoli" target="_blank" rel="noopener noreferrer" className="btn-enhanced">Repositórios no GitHub</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
