// src/_root/pages/Home.tsx
import  { useEffect, useRef } from 'react';

const Home = () => {
  const typewriterRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const text = "Uma mistura de Design, Desenvolvimento Frontend e habilidade profissional que vão destacar seu produto no mercado.";
    let index = 0;
    const interval = setInterval(() => {
      if (typewriterRef.current) {
        typewriterRef.current.textContent += text[index];
        index++;
        if (index === text.length) {
          clearInterval(interval);
        }
      }
    }, 50); // Adjust the speed of typing here
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="bg-[#111111] text-white py-20 px-5">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-5 text-left">
          Ajudando empresas a construírem <span className="text-blue-500">produtos digitais</span> de forma moderna e de alta qualidade.
        </h1>
        <p ref={typewriterRef} className="text-xl mb-5 text-gray-400">
          {/* Text will be typed here */}
        </p>
        <a href="https://iuricode.com/efront/" target="_blank" rel="noopener noreferrer" className="btn">
          Aprenda frontend comigo
        </a>
      </div>
    </section>
  );
};

export default Home;
