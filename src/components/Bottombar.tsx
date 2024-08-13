// src/components/Bottombar.tsx

const Bottombar = () => {
  return (
    <footer className="bg-gradient-to-b from-black to-[#111111] p-4 md:hidden fixed bottom-0 w-full z-50 shadow-md ">
      <div className="container mx-auto flex justify-between items-center">
          <a href="https://devemdesenvolvimento.netlify.app" className="text-white hover:text-blue-500 transition">Blog</a>
          <a href="https://www.youtube.com/@DevDesenvolvimento" className="text-white hover:text-blue-500 transition">Youtube</a>
          <a href="https://www.instagram.com/01_dev_em_desenvolvimento" className="text-white hover:text-blue-500 transition">Instagram</a>
          <a href="https://x.com/opedroreoli" className="text-white hover:text-blue-500 transition">Twitter</a>
        {/* <a href="#services" className="text-white hover:text-blue-500 transition">Cursos</a> */}
      </div>
    </footer>
  );
};

export default Bottombar;
