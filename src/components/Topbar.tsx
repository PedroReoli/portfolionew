// src/components/Topbar.tsx

const Topbar = () => {
  return (
    <header className="bg-[#111111] p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <img src="/assets/image/logo-page.svg" alt="logo" className="w-24" />
        <nav className="hidden md:flex space-x-4">
          <a href="#home" className="text-white">Home</a>
          <a href="#about" className="text-white">Sobre</a>
          <a href="#experience" className="text-white">Experiências</a>
          <a href="#projects" className="text-white">Projetos</a>
          <a href="#services" className="text-white">Serviços</a>
          <a href="#skills" className="text-white">Conhecimentos</a>
        </nav>
      </div>
    </header>
  );
};

export default Topbar;
