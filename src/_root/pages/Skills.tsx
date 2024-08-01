// src/_root/pages/Skills.tsx
const Skills = () => {
  return (
    <section id="s-skills" className="bg-white py-10 px-5">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-5">Conhecimentos <span>.</span></h2>
        <p className="text-lg mb-5">*passe o cursor do mouse no card para ler*</p>
        <div id="skills-cards" className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">
          <article className="bg-gray-100 p-5 rounded-lg flex flex-col items-center">
            <img src="/assets/icons/html.svg" alt="ícone do html" className="mb-4" />
            <p className="text-lg">HTML</p>
          </article>
          <article className="bg-gray-100 p-5 rounded-lg flex flex-col items-center">
            <img src="/assets/icons/css.svg" alt="ícone do css" className="mb-4" />
            <p className="text-lg">CSS</p>
          </article>
          <article className="bg-gray-100 p-5 rounded-lg flex flex-col items-center">
            <img src="/assets/icons/javascript.svg" alt="ícone do javascript" className="mb-4" />
            <p className="text-lg">JavaScript</p>
          </article>
          <article className="bg-gray-100 p-5 rounded-lg flex flex-col items-center">
            <img src="/assets/icons/sass.svg" alt="ícone do sass" className="mb-4" />
            <p className="text-lg">Sass</p>
          </article>
          <article className="bg-gray-100 p-5 rounded-lg flex flex-col items-center">
            <img src="/assets/icons/react.svg" alt="ícone do react" className="mb-4" />
            <p className="text-lg">React</p>
          </article>
          <article className="bg-gray-100 p-5 rounded-lg flex flex-col items-center">
            <img src="/assets/icons/next.svg" alt="ícone do next" className="mb-4" />
            <p className="text-lg">Next.js</p>
          </article>
          <article className="bg-gray-100 p-5 rounded-lg flex flex-col items-center">
            <img src="/assets/icons/styled-components.svg" alt="ícone do styled" className="mb-4" />
            <p className="text-lg">Styled Components</p>
          </article>
          <article className="bg-gray-100 p-5 rounded-lg flex flex-col items-center">
            <img src="/assets/icons/tailwindcss.svg" alt="ícone do tailwind" className="mb-4" />
            <p className="text-lg">Tailwind CSS</p>
          </article>
          <article className="bg-gray-100 p-5 rounded-lg flex flex-col items-center">
            <img src="/assets/icons/radix.svg" alt="ícone do radix" className="mb-4" />
            <p className="text-lg">Radix UI</p>
          </article>
          <article className="bg-gray-100 p-5 rounded-lg flex flex-col items-center">
            <img src="/assets/icons/typescript.svg" alt="ícone do typescript" className="mb-4" />
            <p className="text-lg">TypeScript</p>
          </article>
          <article className="bg-gray-100 p-5 rounded-lg flex flex-col items-center">
            <img src="/assets/icons/storybook.svg" alt="ícone do storybook" className="mb-4" />
            <p className="text-lg">Storybook</p>
          </article>
          <article className="bg-gray-100 p-5 rounded-lg flex flex-col items-center">
            <img src="/assets/icons/cypress.svg" alt="ícone do cypress" className="mb-4" />
            <p className="text-lg">Cypress</p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Skills;
