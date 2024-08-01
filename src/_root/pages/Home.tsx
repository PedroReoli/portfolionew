// src/_root/pages/Home.tsx


const Home = () => {
  return (
    <section id="home" className="bg-[#111111] text-white py-20 px-5">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-5">
          Ajudando empresas a construírem <span className="text-blue-500">produtos digitais</span> de forma moderna e de alta qualidade.
        </h1>
        <p className="text-xl mb-5">
          Uma mistura de Design, Desenvolvimento Frontend e habilidade profissional que vão destacar seu produto no mercado.
        </p>
        <a href="https://iuricode.com/efront/" target="_blank" rel="noopener noreferrer" className="btn">
          Aprenda frontend comigo
        </a>
      </div>
    </section>
  );
};

export default Home;