// src/_root/pages/Experience.tsx


const Experience = () => {
    return (
      <section id="experience" className="bg-[#111111] text-white py-20 px-5">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-5">Experiências <span>.</span></h2>
          <div className="flex flex-col md:flex-row">
            <div className="option-experience flex flex-col md:w-1/4 space-y-4 mb-5 md:mb-0">
              <div className="company digitalhouse activeExperience">
                <h3 className="text-xl">Digital House</h3>
                <a href="#experience-detail-dh" className="text-blue-500">Ver mais</a>
              </div>
              <div className="company zuplae">
                <h3 className="text-xl">Zuplae</h3>
                <a href="#experience-detail-zuplae" className="text-blue-500">Ver mais</a>
              </div>
              <div className="company contweb">
                <h3 className="text-xl">ContWeb</h3>
                <a href="#experience-detail-contweb" className="text-blue-500">Ver mais</a>
              </div>
              <div className="company codigofontetv">
                <h3 className="text-xl">Código Fonte TV</h3>
                <a href="#experience-detail-cftv" className="text-blue-500">Ver mais</a>
              </div>
            </div>
            <div className="text-experience flex-1">
              <div id="experience-detail-dh">
                <h4 className="text-2xl font-semibold">Professor conteudista em Frontend</h4>
                <p className="text-lg mb-2">Nov 2021 - Nov 2022 (1 ano)</p>
                <h5 className="text-xl font-bold mb-5">Digital House</h5>
                <p className="text-lg">
                  Trabalhei como instrutor conteudista em frontend na Digital House, o trabalho consistia em criar conteúdos para as aulas de especialização frontend. Alguns temas dos conteúdos realizados foram: React, Redux, TypeScript, Testes, GraphQL, Next.js, MUI, React Hook Form e styled-components.
                </p>
              </div>
              <div id="experience-detail-zuplae">
                {/* <!-- Detalhes da Zuplae --> */}
              </div>
              <div id="experience-detail-contweb">
                {/* <!-- Detalhes da ContWeb --> */}
              </div>
              <div id="experience-detail-cftv">
                {/* <!-- Detalhes do Código Fonte TV --> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Experience;