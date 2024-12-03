import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaYoutube, FaInstagram, FaNewspaper } from "react-icons/fa";

const Home = () => {
  return (
    <section className="bg-[#111111] text-white min-h-screen flex flex-col justify-center items-center">
      {/* Ícones Sociais */}
      <div className="flex space-x-8 mb-10">
        <a
          href="mailto:pedrosousa2160@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#00aaff] text-4xl hover:scale-110 transition-transform"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://github.com/PedroReoli"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#00aaff] text-4xl hover:scale-110 transition-transform"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/pedro-lucas-reis-de-oliveira-sousa-a93945171/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#00aaff] text-4xl hover:scale-110 transition-transform"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://devemdesenvolvimento.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#00aaff] text-4xl hover:scale-110 transition-transform"
        >
          <FaNewspaper />
        </a>
        <a
          href="https://www.youtube.com/@DevDesenvolvimento"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#00aaff] text-4xl hover:scale-110 transition-transform"
        >
          <FaYoutube />
        </a>
        <a
          href="https://www.instagram.com/01_dev_em_desenvolvimento"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#00aaff] text-4xl hover:scale-110 transition-transform"
        >
          <FaInstagram />
        </a>
        <a
          href="https://x.com/opedroreoli"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#00aaff] text-4xl hover:scale-110 transition-transform"
        >
          <FaTwitter />
        </a>
      </div>

      {/* Texto Principal */}
      <div className="text-center">
        <h1 className="text-6xl font-extrabold mb-6">
          Olá <span role="img" aria-label="wave">👋🏻</span>, eu sou <span className="text-[#00aaff]">Pedro Lucas</span>
        </h1>
        <p className="text-2xl text-gray-300">
          Desenvolvedor Fullstack Júnior
        </p>
      </div>
    </section>
  );
};

export default Home;
