// src/_root/pages/About.tsx

const About = () => {
  return (
    <section id="s-about" className="bg-white py-10 px-5">
      <div className="container mx-auto">
        <h4 className="text-xl font-semibold mb-2">Quem sou</h4>
        <h2 className="text-3xl font-bold mb-5">Iuri Silva</h2>
        <h3 className="text-2xl font-semibold mb-5">Frontend Developer & UI Designer</h3>
        <p className="text-lg mb-5">
          Meu nome é Iuri Silva, ou “iuricode” (é como me chamam agora) sou o criador do eFront, um material de ensino de frontend pela internet. Atualmente sou freelancer como Frontend Developer e UI Designer. Desenvolvo interfaces modernas e de alta qualidade, concentrado em performance, animações, responsividade e SEO.
        </p>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="https://www.instagram.com/iuricode/" target="_blank" rel="noopener noreferrer"><img src="/assets/icons/instagram.svg" alt="Ícone do Instagram" /></a></li>
            <li><a href="https://www.linkedin.com/in/iuricode/" target="_blank" rel="noopener noreferrer"><img src="/assets/icons/linkedin.svg" alt="Ícone do LinkedIn" /></a></li>
            <li><a href="https://iuricode-blog.vercel.app/" target="_blank" rel="noopener noreferrer"><img src="/assets/icons/laptop.svg" alt="Ícone de um laptop" /></a></li>
            <li><a href="https://discord.gg/uHWE7QbXnp" target="_blank" rel="noopener noreferrer"><img src="/assets/icons/discord.svg" alt="Ícone do Discord" /></a></li>
            <li><a href="https://github.com/iuricode" target="_blank" rel="noopener noreferrer"><img src="/assets/icons/github.svg" alt="Ícone do GitHub" /></a></li>
            <li><a href="https://www.behance.net/iuricode" target="_blank" rel="noopener noreferrer"><img src="/assets/icons/behance.svg" alt="Ícone do Behance" /></a></li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default About;
