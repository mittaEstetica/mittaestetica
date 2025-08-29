import React from "react";
import massagemRelaxanteImg from '../../assets/Services/massagem_relaxante.png';
import massagemTerapeuticaImg from '../../assets/Services/massagem_terapeutica.png';
import drenagemLinfaticaImg from '../../assets/Services/drenagem_linfatica_manual.png';
import massagemModeladoraImg from '../../assets/Services/massagem_modeladora_local.png';
import ultrassomGorduraImg from '../../assets/Services/ultrassom_gordura_localizada.png';
import ultrassomCeluliteImg from '../../assets/Services/ultrassom_celulite.png';
import radiofrequenciaCorporalImg from '../../assets/Services/radiofrequencia_corporal.png';
import esteticaFacialImg from '../../assets/Services/estetica_facial.png';
import limpezaPeleImg from '../../assets/Services/limpeza_de_pele_profunda.png';
import peelingQuimicoImg from '../../assets/Services/peeling_quimico.png';
import microagulhamentoImg from '../../assets/Services/microagulhamento.png';
import radiofrequenciaFacialImg from '../../assets/Services/radiofrequencia_facial.png';

function Services() {
  return (
    <section id="services" className="py-32 bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-light text-slate-800 mb-6 tracking-tight">
            Nossos Serviços
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Descubra nossos tratamentos projetados para seu bem-estar e beleza.
          </p>
        </div>

        <div className="space-y-24">
          {/* Massage Services */}
          <div>
            <h3 className="text-4xl font-light text-slate-800 mb-12 text-center tracking-tight">
              Massagens
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="group bg-white rounded-2xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-slate-100 flex flex-col items-center text-center overflow-hidden">
                <button 
                  onClick={() => window.location.href = '/servicos/massagem-relaxante'}
                  className="w-full text-left"
                >
                  <img src={massagemRelaxanteImg} alt="Massagem Relaxante" className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h4 className="text-xl text-slate-800 mb-2 font-medium">Massagem Relaxante</h4>
                    <p className="text-slate-600 leading-relaxed">
                      Técnica com toques suaves e profundos que aliviam o estresse, a ansiedade e as tensões do dia a dia. Proporciona bem-estar físico e mental.
                    </p>
                  </div>
                </button>
              </div>

              <div className="group bg-white rounded-2xl text-center transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-slate-100 overflow-hidden">
                <button 
                  onClick={() => window.location.href = '/servicos/massagem-terapeutica'}
                  className="w-full text-left"
                >
                  <img src={massagemTerapeuticaImg} alt="Massagem Terapêutica" className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h4 className="text-xl text-slate-800 mb-4 font-medium">Massagem Terapêutica</h4>
                    <p className="text-slate-600 leading-relaxed">
                      Focada em dores musculares e pontos de tensão. Usa diferentes técnicas para aliviar contraturas, melhorar a mobilidade e reduzir a dor.
                    </p>
                  </div>
                </button>
              </div>

              <div className="group bg-white rounded-2xl text-center transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-slate-100 overflow-hidden">
                <button 
                  onClick={() => window.location.href = '/servicos/drenagem-linfatica-manual'}
                  className="w-full text-left"
                >
                  <img src={drenagemLinfaticaImg} alt="Drenagem Linfática Manual" className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h4 className="text-xl text-slate-800 mb-4 font-medium">Drenagem Linfática Manual</h4>
                    <p className="text-slate-600 leading-relaxed">
                      Movimentos leves e ritmados que ativam o sistema linfática, ajudando a eliminar líquidos, melhorar a circulação, o sono e aliviar o inchaço nas pernas. Excelente para quem tem lipedema.
                    </p>
                  </div>
                </button>
              </div>

              <div className="group bg-white rounded-2xl text-center transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-slate-100 overflow-hidden">
                <button 
                  onClick={() => window.location.href = '/servicos/massagem-modeladora-local'}
                  className="w-full text-left"
                >
                  <img src={massagemModeladoraImg} alt="Massagem Modeladora Local" className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h4 className="text-xl text-slate-800 mb-4 font-medium">Massagem Modeladora Local</h4>
                    <p className="text-slate-600 leading-relaxed">
                      Técnica intensa e com ritmo acelerado, ideal para modelar o corpo, reduzir medidas temporariamente e melhorar o aspecto da celulite.
                    </p>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Body Treatments */}
          <div>
            <h3 className="text-4xl font-light text-slate-800 mb-12 text-center tracking-tight">
              Tratamentos Corporais
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="group bg-white rounded-2xl text-center transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-slate-100 overflow-hidden">
                <button 
                  onClick={() => window.location.href = '/servicos/ultrassom-gordura-localizada'}
                  className="w-full text-left"
                >
                  <img src={ultrassomGorduraImg} alt="Ultrassom para Gordura Localizada" className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h4 className="text-xl text-slate-800 mb-4 font-medium">Ultrassom para Gordura Localizada</h4>
                    <p className="text-slate-600 leading-relaxed">
                      Ondas sonoras que "quebram" as células de gordura, facilitando sua eliminação natural pelo corpo.
                    </p>
                  </div>
                </button>
              </div>

              <div className="group bg-white rounded-2xl text-center transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-slate-100 overflow-hidden">
                <button 
                  onClick={() => window.location.href = '/servicos/ultrassom-celulite'}
                  className="w-full text-left"
                >
                  <img src={ultrassomCeluliteImg} alt="Ultrassom para Celulite" className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h4 className="text-xl text-slate-800 mb-4 font-medium">Ultrassom para Celulite</h4>
                    <p className="text-slate-600 leading-relaxed">
                      Ajuda a reduzir a celulite inflamada, melhorando a circulação e a aparência da pele.
                    </p>
                  </div>
                </button>
              </div>

              <div className="group bg-white rounded-2xl text-center transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-slate-100 overflow-hidden">
                <button 
                  onClick={() => window.location.href = '/servicos/radiofrequencia-corporal'}
                  className="w-full text-left"
                >
                  <img src={radiofrequenciaCorporalImg} alt="Radiofrequência Corporal" className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h4 className="text-xl text-slate-800 mb-4 font-medium">Radiofrequência Corporal</h4>
                    <p className="text-slate-600 leading-relaxed">
                      Usa calor controlado para estimular a produção de colágeno e elastina, combatendo flacidez e melhorando a textura da pele (inclusive celulite mais resistente).
                    </p>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Facial Services */}
          <div>
            <h3 className="text-4xl font-light text-slate-800 mb-12 text-center tracking-tight">
              Estética Facial
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              <div className="group bg-white rounded-2xl text-center transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-slate-100 overflow-hidden">
                <button 
                  onClick={() => window.location.href = '/servicos/estetica-facial'}
                  className="w-full text-left"
                >
                  <img src={esteticaFacialImg} alt="Estética Facial" className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h4 className="text-xl text-slate-800 mb-4 font-medium">Estética Facial</h4>
                    <p className="text-slate-600 leading-relaxed">
                      Tratamentos personalizados para rejuvenescimento, hidratação e revitalização da pele do rosto.
                    </p>
                  </div>
                </button>
              </div>

              <div className="group bg-white rounded-2xl text-center transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-slate-100 overflow-hidden">
                <button 
                  onClick={() => window.location.href = '/servicos/limpeza-pele-profunda'}
                  className="w-full text-left"
                >
                  <img src={limpezaPeleImg} alt="Limpeza de Pele Profunda" className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h4 className="text-xl text-slate-800 mb-4 font-medium">Limpeza de Pele Profunda</h4>
                    <p className="text-slate-600 leading-relaxed">
                      Remove cravos, acne e outras impurezas. Também renova a pele, respeitando as necessidades de cada tipo de pele.
                    </p>
                  </div>
                </button>
              </div>

              <div className="group bg-white rounded-2xl text-center transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-slate-100 overflow-hidden">
                <button 
                  onClick={() => window.location.href = '/servicos/peeling-quimico'}
                  className="w-full text-left"
                >
                  <img src={peelingQuimicoImg} alt="Peeling Químico" className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h4 className="text-xl text-slate-800 mb-4 font-medium">Peeling Químico</h4>
                    <p className="text-slate-600 leading-relaxed">
                      Renova a pele, clareia manchas, trata acne e linhas finas, além de estimular o colágeno — tudo depende do produto usado.
                    </p>
                  </div>
                </button>
              </div>

              <div className="group bg-white rounded-2xl text-center transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-slate-100 overflow-hidden">
                <button 
                  onClick={() => window.location.href = '/servicos/microagulhamento'}
                  className="w-full text-left"
                >
                  <img src={microagulhamentoImg} alt="Microagulhamento" className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h4 className="text-xl text-slate-800 mb-4 font-medium">Microagulhamento</h4>
                    <p className="text-slate-600 leading-relaxed">
                      Pequenas agulhas criam microcanais na pele para absorção de ativos e estímulo de colágeno. Ajuda no tratamento de manchas, poros, linhas finas e até estrias.
                    </p>
                  </div>
                </button>
              </div>

              <div className="group bg-white rounded-2xl text-center transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-slate-100 overflow-hidden">
                <button 
                  onClick={() => window.location.href = '/servicos/radiofrequencia-facial'}
                  className="w-full text-left"
                >
                  <img src={radiofrequenciaFacialImg} alt="Radiofrequência Facial" className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h4 className="text-xl text-slate-800 mb-4 font-medium">Radiofrequência Facial</h4>
                    <p className="text-slate-600 leading-relaxed">
                      Usa calor para estimular o colágeno e melhorar a firmeza da pele, combatendo flacidez e linhas de expressão.
                    </p>
                  </div>
                </button>
              </div>


            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;