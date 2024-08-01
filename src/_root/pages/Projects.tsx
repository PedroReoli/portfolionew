// src/_root/pages/Projects.tsx

const Projects = () => {
  return (
    <section id="s-projects" className="bg-white py-10 px-5">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-5">Projetos <span>.</span></h2>
        <div id="projects" className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <article className="bg-gray-100 p-5 rounded-lg">
            <h3 className="text-xl font-bold mb-2">TeslaBank</h3>
            <p className="text-lg mb-4">Site institucional de banco digital, feito em HTML, Sass e JavaScript.</p>
            <a href="https://iuricode.com/teslabank/" target="_blank" rel="noopener noreferrer" className="text-primary-500">Visualizar projeto</a>
          </article>
          <article className="bg-gray-100 p-5 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Naped</h3>
            <p className="text-lg mb-4">Site de notícias nerd, feito em Next.js, TypeScript e styled-components.</p>
            <a href="https://efront-naped.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-primary-500">Visualizar projeto</a>
          </article>
          <article className="bg-gray-100 p-5 rounded-lg">
            <h3 className="text-xl font-bold mb-2">eFront</h3>
            <p className="text-lg mb-4">Página de vendas do eFront, feito em HTML, Sass e JavaScript.</p>
            <a href="https://iuricode.com/efront" target="_blank" rel="noopener noreferrer" className="text-primary-500">Visualizar projeto</a>
          </article>
          <article className="bg-gray-100 p-5 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Steam</h3>
            <p className="text-lg mb-4">Redesign da Steam, feito em HTML, Sass e JavaScript.</p>
            <a href="https://efront-steam.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-primary-500">Visualizar projeto</a>
          </article>
          <article className="bg-gray-100 p-5 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Em construção...</h3>
            <p className="text-lg mb-4">Pegue o café e espere um pouco, estou desenvolvendo o projeto.</p>
          </article>
          <article className="bg-gray-100 p-5 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Em construção...</h3>
            <p className="text-lg mb-4">Pegue o café e espere um pouco, estou desenvolvendo o projeto.</p>
          </article>
        </div>
        <a href="https://github.com/iuricode?tab=repositories" target="_blank" rel="noopener noreferrer" className="text-primary-500 mt-5 inline-block">Repositórios no GitHub</a>
      </div>
    </section>
  );
};

export default Projects;
