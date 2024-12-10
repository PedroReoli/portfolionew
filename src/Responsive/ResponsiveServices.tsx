import Button from "@/components/Button";

const ResponsiveServices = () => {
  return (
    <section className="bg-[#111111] text-white py-12 px-6 flex flex-col items-center">
      {/* Título */}
      <h2 className="text-3xl font-bold text-center mb-10 tracking-wide">
        Serviços <span className="text-blue-500">;</span>
      </h2>

      {/* Lista de Serviços */}
      <div className="grid grid-cols-1 gap-12 w-full max-w-sm">
        {/* Serviço 1 */}
        <article className="bg-[#1a1a1a] rounded-2xl shadow-lg p-8 flex flex-col items-center text-center transform hover:scale-105 transition duration-300">
          <div className="bg-gradient-to-br from-blue-500 to-purple-500 rounded-full p-4 shadow-md">
            <img src="/assets/uxui.svg" alt="Ícone UX/UI" className="w-12 h-12" />
          </div>
          <h3 className="text-xl font-bold mt-6 mb-4 text-blue-400">UX / UI Design</h3>
          <p className="text-sm text-gray-300 leading-relaxed">
            Criação de interfaces visuais elegantes e intuitivas, priorizando a experiência do usuário.
          </p>
        </article>

        {/* Serviço 2 */}
        <article className="bg-[#1a1a1a] rounded-2xl shadow-lg p-8 flex flex-col items-center text-center transform hover:scale-105 transition duration-300">
          <div className="bg-gradient-to-br from-green-500 to-teal-500 rounded-full p-4 shadow-md">
            <img src="/assets/prog.svg" alt="Ícone FullStack" className="w-12 h-12" />
          </div>
          <h3 className="text-xl font-bold mt-6 mb-4 text-green-400">Desenvolvimento FullStack</h3>
          <p className="text-sm text-gray-300 leading-relaxed">
            Desenvolvimento de sistemas completos, abrangendo frontend e backend com alta performance.
          </p>
        </article>

        {/* Serviço 3 */}
        <article className="bg-[#1a1a1a] rounded-2xl shadow-lg p-8 flex flex-col items-center text-center transform hover:scale-105 transition duration-300">
          <div className="bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full p-4 shadow-md">
            <img src="/assets/hands.svg" alt="Ícone Mentoria" className="w-12 h-12" />
          </div>
          <h3 className="text-xl font-bold mt-6 mb-4 text-yellow-400">Mentoria e Aulas</h3>
          <p className="text-sm text-gray-300 leading-relaxed">
            Aulas e mentorias personalizadas para ajudar você a atingir seus objetivos na programação.
          </p>
        </article>
      </div>

      {/* Botão "Entre em Contato" */}
      <div className="mt-16">
        <Button
          href="mailto:pedrosousa2160@gmail.com"
          variant="primary"
          className="py-3 px-8 text-sm font-medium shadow-lg hover:shadow-xl hover:bg-blue-600 transition duration-300"
        >
          Entre em Contato
        </Button>
      </div>
    </section>
  );
};

export default ResponsiveServices;
