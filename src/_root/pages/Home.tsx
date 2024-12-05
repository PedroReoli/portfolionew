import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaYoutube, FaInstagram, FaNewspaper } from "react-icons/fa";

const Home = () => {
  return (
    <section className="bg-[#111111] text-white min-h-screen flex flex-col justify-center items-center p-4">
      {/* Ícones Sociais */}
      <div className="flex flex-wrap justify-center gap-4 mb-8 md:mb-10">
        <SocialIcon href="mailto:pedrosousa2160@gmail.com" icon={<FaEnvelope />} />
        <SocialIcon href="https://github.com/PedroReoli" icon={<FaGithub />} />
        <SocialIcon href="https://www.linkedin.com/in/pedro-lucas-reis-de-oliveira-sousa-a93945171/" icon={<FaLinkedin />} />
        <SocialIcon href="https://devemdesenvolvimento.netlify.app/" icon={<FaNewspaper />} />
        <SocialIcon href="https://www.youtube.com/@DevDesenvolvimento" icon={<FaYoutube />} />
        <SocialIcon href="https://www.instagram.com/01_dev_em_desenvolvimento" icon={<FaInstagram />} />
        <SocialIcon href="https://x.com/opedroreoli" icon={<FaTwitter />} />
      </div>

      {/* Texto Principal */}
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 md:mb-6">
          Olá <span role="img" aria-label="wave">👋🏻</span>, eu sou o <span className="text-[#00aaff]">Pedro</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300">
          Desenvolvedor Fullstack Júnior
        </p>
      </div>
    </section>
  );
};

interface SocialIconProps {
  href: string;
  icon: JSX.Element;
}

const SocialIcon: React.FC<SocialIconProps> = ({ href, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-[#00aaff] text-3xl md:text-4xl hover:scale-110 transition-transform"
  >
    {icon}
  </a>
);

export default Home;
