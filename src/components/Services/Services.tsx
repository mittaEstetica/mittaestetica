import massagemRelaxanteImg from '../../assets/Services/massagem_relaxante.png';
import massagemTerapeuticaImg from '../../assets/Services/massagem_terapeutica.png';
import drenagemLinfaticaImg from '../../assets/Services/drenagem_linfatica_manual.png';
import massagemModeladoraImg from '../../assets/Services/massagem_modeladora_local.png';
import massagemVelasQuentesImg from '../../assets/Services/massagem_velas_quentes.png';
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
    <section id="services" className="py-32 bg-gradient-to-br from-brand-background via-white to-brand-background">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-light text-brand-text-primary mb-6 tracking-tight">
            Nossos Serviços
          </h2>
          <p className="text-xl text-brand-text-secondary max-w-3xl mx-auto leading-relaxed">
            Descubra nossos tratamentos projetados para seu bem-estar e beleza.
          </p>
        </div>

        <div className="space-y-24">
          {/* Massage Services */}
          <div>
            <h3 className="text-4xl font-light text-brand-text-primary mb-12 text-center tracking-tight">
              Massagens
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              <div className="group bg-white rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl border-0 flex flex-col items-center text-center overflow-hidden relative">
                <button 
                  onClick={() => window.location.href = '/servicos/massagem-relaxante'}
                  className="w-full text-left"
                >
                  <div className="relative">
                    <img src={massagemRelaxanteImg} alt="Massagem Relaxante" className="w-full h-40 object-cover" />
                  </div>
                  <div className="p-4 flex items-center justify-between">
                    <h4 className="text-lg text-brand-text-primary font-medium">Massagem Relaxante</h4>
                    <svg className="w-6 h-6 text-brand-ui-element/60 group-hover:text-brand-ui-element transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </button>
              </div>

              <div className="group bg-white rounded-xl shadow-lg text-center transition-all duration-300 hover:shadow-xl border-0 overflow-hidden relative">
                <button 
                  onClick={() => window.location.href = '/servicos/massagem-terapeutica'}
                  className="w-full text-left"
                >
                  <div className="relative">
                    <img src={massagemTerapeuticaImg} alt="Massagem Terapêutica" className="w-full h-40 object-cover" />
                  </div>
                  <div className="p-4 flex items-center justify-between">
                    <h4 className="text-lg text-brand-text-primary font-medium">Massagem Terapêutica</h4>
                    <svg className="w-6 h-6 text-brand-ui-element/60 group-hover:text-brand-ui-element transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </button>
              </div>

              <div className="group bg-white rounded-xl shadow-lg text-center transition-all duration-300 hover:shadow-xl border-0 overflow-hidden relative">
                <button 
                  onClick={() => window.location.href = '/servicos/drenagem-linfatica-manual'}
                  className="w-full text-left"
                >
                  <div className="relative">
                    <img src={drenagemLinfaticaImg} alt="Drenagem Linfática Manual" className="w-full h-40 object-cover" />
                  </div>
                  <div className="p-4 flex items-center justify-between">
                    <h4 className="text-lg text-brand-text-primary font-medium">Drenagem Linfática Manual</h4>
                    <svg className="w-6 h-6 text-brand-ui-element/60 group-hover:text-brand-ui-element transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </button>
              </div>

              <div className="group bg-white rounded-xl shadow-lg text-center transition-all duration-300 hover:shadow-xl border-0 overflow-hidden relative">
                <button 
                  onClick={() => window.location.href = '/servicos/massagem-modeladora-local'}
                  className="w-full text-left"
                >
                  <div className="relative">
                    <img src={massagemModeladoraImg} alt="Massagem Modeladora Local" className="w-full h-40 object-cover" />
                  </div>
                  <div className="p-4 flex items-center justify-between">
                    <h4 className="text-lg text-brand-text-primary font-medium">Massagem Modeladora Local</h4>
                    <svg className="w-6 h-6 text-brand-ui-element/60 group-hover:text-brand-ui-element transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </button>
              </div>

              <div className="group bg-white rounded-xl shadow-lg text-center transition-all duration-300 hover:shadow-xl border-0 overflow-hidden relative">
                <button 
                  onClick={() => window.location.href = '/servicos/massagem-com-velas'}
                  className="w-full text-left"
                >
                  <div className="relative">
                    <img src={massagemVelasQuentesImg} alt="Massagem com velas" className="w-full h-40 object-cover" />
                  </div>
                  <div className="p-4 flex items-center justify-between">
                    <h4 className="text-lg text-brand-text-primary font-medium">Massagem com velas</h4>
                    <svg className="w-6 h-6 text-brand-ui-element/60 group-hover:text-brand-ui-element transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Body Treatments */}
          <div>
            <h3 className="text-4xl font-light text-brand-text-primary mb-12 text-center tracking-tight">
              Tratamentos Corporais
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="group bg-white rounded-xl shadow-lg text-center transition-all duration-300 hover:shadow-xl border-0 overflow-hidden relative">
                <button 
                  onClick={() => window.location.href = '/servicos/ultrassom-gordura-localizada'}
                  className="w-full text-left"
                >
                  <div className="relative">
                    <img src={ultrassomGorduraImg} alt="Ultrassom para Gordura Localizada" className="w-full h-40 object-cover" />
                  </div>
                  <div className="p-4 flex items-center justify-between">
                    <h4 className="text-lg text-brand-text-primary font-medium">Ultrassom para Gordura Localizada</h4>
                    <svg className="w-6 h-6 text-brand-ui-element/60 group-hover:text-brand-ui-element transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </button>
              </div>

              <div className="group bg-white rounded-xl shadow-lg text-center transition-all duration-300 hover:shadow-xl border-0 overflow-hidden relative">
                <button 
                  onClick={() => window.location.href = '/servicos/ultrassom-celulite'}
                  className="w-full text-left"
                >
                  <div className="relative">
                    <img src={ultrassomCeluliteImg} alt="Ultrassom para Celulite" className="w-full h-40 object-cover" />
                  </div>
                  <div className="p-4 flex items-center justify-between">
                    <h4 className="text-lg text-brand-text-primary font-medium">Ultrassom para Celulite</h4>
                    <svg className="w-6 h-6 text-brand-ui-element/60 group-hover:text-brand-ui-element transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </button>
              </div>

              <div className="group bg-white rounded-xl shadow-lg text-center transition-all duration-300 hover:shadow-xl border-0 overflow-hidden relative">
                <button 
                  onClick={() => window.location.href = '/servicos/radiofrequencia-corporal'}
                  className="w-full text-left"
                >
                  <div className="relative">
                    <img src={radiofrequenciaCorporalImg} alt="Radiofrequência Corporal" className="w-full h-40 object-cover" />
                  </div>
                  <div className="p-4 flex items-center justify-between">
                    <h4 className="text-lg text-brand-text-primary font-medium">Radiofrequência Corporal</h4>
                    <svg className="w-6 h-6 text-brand-ui-element/60 group-hover:text-brand-ui-element transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Facial Services */}
          <div>
            <h3 className="text-4xl font-light text-brand-text-primary mb-12 text-center tracking-tight">
              Estética Facial
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              <div className="group bg-white rounded-xl shadow-lg text-center transition-all duration-300 hover:shadow-xl border-0 overflow-hidden relative">
                <button 
                  onClick={() => window.location.href = '/servicos/estetica-facial'}
                  className="w-full text-left"
                >
                  <div className="relative">
                    <img src={esteticaFacialImg} alt="Estética Facial" className="w-full h-40 object-cover" />
                  </div>
                  <div className="p-4 flex items-center justify-between">
                    <h4 className="text-lg text-brand-text-primary font-medium">Estética Facial</h4>
                    <svg className="w-6 h-6 text-brand-ui-element/60 group-hover:text-brand-ui-element transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </button>
              </div>

              <div className="group bg-white rounded-xl shadow-lg text-center transition-all duration-300 hover:shadow-xl border-0 overflow-hidden relative">
                <button 
                  onClick={() => window.location.href = '/servicos/limpeza-pele-profunda'}
                  className="w-full text-left"
                >
                  <div className="relative">
                    <img src={limpezaPeleImg} alt="Limpeza de Pele Profunda" className="w-full h-40 object-cover" />
                  </div>
                  <div className="p-4 flex items-center justify-between">
                    <h4 className="text-lg text-brand-text-primary font-medium">Limpeza de Pele Profunda</h4>
                    <svg className="w-6 h-6 text-brand-ui-element/60 group-hover:text-brand-ui-element transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </button>
              </div>

              <div className="group bg-white rounded-xl shadow-lg text-center transition-all duration-300 hover:shadow-xl border-0 overflow-hidden relative">
                <button 
                  onClick={() => window.location.href = '/servicos/peeling-quimico'}
                  className="w-full text-left"
                >
                  <div className="relative">
                    <img src={peelingQuimicoImg} alt="Peeling Químico" className="w-full h-40 object-cover" />
                  </div>
                  <div className="p-4 flex items-center justify-between">
                    <h4 className="text-lg text-brand-text-primary font-medium">Peeling Químico</h4>
                    <svg className="w-6 h-6 text-brand-ui-element/60 group-hover:text-brand-ui-element transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </button>
              </div>

              <div className="group bg-white rounded-xl shadow-lg text-center transition-all duration-300 hover:shadow-xl border-0 overflow-hidden relative">
                <button 
                  onClick={() => window.location.href = '/servicos/microagulhamento'}
                  className="w-full text-left"
                >
                  <div className="relative">
                    <img src={microagulhamentoImg} alt="Microagulhamento" className="w-full h-40 object-cover" />
                  </div>
                  <div className="p-4 flex items-center justify-between">
                    <h4 className="text-lg text-brand-text-primary font-medium">Microagulhamento</h4>
                    <svg className="w-6 h-6 text-brand-ui-element/60 group-hover:text-brand-ui-element transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </button>
              </div>

              <div className="group bg-white rounded-xl shadow-lg text-center transition-all duration-300 hover:shadow-xl border-0 overflow-hidden relative">
                <button 
                  onClick={() => window.location.href = '/servicos/radiofrequencia-facial'}
                  className="w-full text-left"
                >
                  <div className="relative">
                    <img src={radiofrequenciaFacialImg} alt="Radiofrequência Facial" className="w-full h-40 object-cover" />
                  </div>
                  <div className="p-4 flex items-center justify-between">
                    <h4 className="text-lg text-brand-text-primary font-medium">Radiofrequência Facial</h4>
                    <svg className="w-6 h-6 text-brand-ui-element/60 group-hover:text-brand-ui-element transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
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