import { Button } from "@/components/ui/Button"
import { FaArrowUp } from "react-icons/fa"

const End = () => {
  return (
    <section className="bg-[#111111] text-white min-h-screen py-16 px-5 flex flex-col items-center justify-center">
      <div className="text-center">
        {/* Imagem de Despedida */}
        <div className="flex justify-center mb-8">
          <img src="/assets/Eu.svg" alt="Despedida" className="w-40 h-40 rounded-full shadow-lg object-cover" />
        </div>

        {/* Mensagem de Despedida */}
        <h2 className="text-4xl font-bold mb-4 flex justify-center items-center">
          Obrigado por visitar<span className="ml-2 text-[#00aaff]">! 👋🏻</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
          Espero que tenha gostado do meu portfólio! Fique à vontade para voltar ao início ou visitar novamente sempre
          que desejar. Desejo tudo de melhor em seus projetos!
        </p>

        {/* Botão de Voltar ao Início */}
        <Button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <div className="flex items-center justify-center">
            <FaArrowUp className="mr-2" />
            Voltar ao Início
          </div>
        </Button>
      </div>
    </section>
  )
}

export default End

