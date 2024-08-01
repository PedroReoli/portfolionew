// src/components/Bottombar.tsx

const Bottombar = () => {
  return (
    <footer className="bg-[#111111] p-4 md:hidden fixed bottom-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#home" className="text-white">Home</a>
        <a href="#about" className="text-white">Sobre</a>
        <a href="#experience" className="text-white">Experiências</a>
        <a href="#projects" className="text-white">Projetos</a>
        <a href="#services" className="text-white">Serviços</a>
        <a href="#skills" className="text-white">Conhecimentos</a>
      </div>
    </footer>
  );
};

export default Bottombar;
