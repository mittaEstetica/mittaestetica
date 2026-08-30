import MileneImg from '../../assets/milene.jpeg';
import AndreiaImg from '../../assets/andreia.jpeg';

const WHATSAPP_URL = 'https://wa.me/555192729544';

const FoundersSection = () => {
  return (
    <section id="founders" className="py-16 md:py-24 bg-[#FAF9F6] border-b border-[#E8E4DF]">
      <div className="container mx-auto px-6 md:px-8 max-w-6xl">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#B89B72] block mb-2">
            Especialistas · Corpo Clínico
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#1C1917] tracking-tight mb-3">
            Quem cuida de você
          </h2>
          <div className="w-10 h-0.5 bg-[#B89B72] mx-auto mb-3"></div>
          <p className="text-xs sm:text-sm text-[#66615C] font-light leading-relaxed">
            Atendimento integrativo unindo estética avançada de precisão e nutrição clínica personalizada.
          </p>
        </div>

        {/* Side-by-side Specialists with Compact Small Photos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          
          {/* Card 1: Milene Favero */}
          <div className="bg-white border border-[#E8E4DF] rounded-2xl p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300">
            <div>
              {/* Compact Small Photo Header */}
              <div className="flex items-center gap-4 mb-4 pb-4 border-b border-[#F0ECE6]">
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 shrink-0 overflow-hidden rounded-full border-2 border-[#B89B72]/30 shadow-xs bg-[#F4F1EA]">
                  <img 
                    src={MileneImg} 
                    alt="Milene Favero" 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                  />
                </div>
                <div>
                  <span className="inline-block bg-[#F4F1EA] text-[#B89B72] text-[9px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full mb-1">
                    Responsável Técnica
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#1C1917]">
                    Milene Favero
                  </h3>
                  <span className="text-[10px] font-medium text-[#78716C] block">
                    Esteticista & Cosmetóloga
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-xs text-[#57534E] font-light leading-relaxed">
                  Graduada em <strong className="font-medium text-[#1C1917]">Estética e Cosmética (FADERGS)</strong> e pós-graduada em <strong className="font-medium text-[#1C1917]">Estética Clínica e de Precisão (IPGS)</strong>. Especialista em gerenciamento de pele e tratamentos faciais.
                </p>

                {/* Badges / Especialidades */}
                <div className="pt-2 flex flex-wrap gap-1.5">
                  <span className="px-2.5 py-1 bg-[#F9F8F6] border border-[#E8E4DF] text-[9px] font-medium text-[#57534E] rounded-full">Peelings Químicos</span>
                  <span className="px-2.5 py-1 bg-[#F9F8F6] border border-[#E8E4DF] text-[9px] font-medium text-[#57534E] rounded-full">Estética Clínica</span>
                  <span className="px-2.5 py-1 bg-[#F9F8F6] border border-[#E8E4DF] text-[9px] font-medium text-[#57534E] rounded-full">Hiperpigmentação</span>
                </div>
              </div>
            </div>

            <div className="pt-5 mt-5 border-t border-[#F0ECE6]">
              <a
                href={`${WHATSAPP_URL}?text=${encodeURIComponent('Olá, gostaria de agendar uma consulta estética com Milene Favero.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-[#1C1917] hover:bg-[#B89B72] text-white text-[10px] font-semibold uppercase tracking-[0.18em] rounded-full transition-all duration-300 shadow-xs flex items-center justify-center gap-2"
              >
                Agendar Consulta Estética
              </a>
            </div>
          </div>

          {/* Card 2: Andreia Nicola */}
          <div className="bg-white border border-[#E8E4DF] rounded-2xl p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300">
            <div>
              {/* Compact Small Photo Header */}
              <div className="flex items-center gap-4 mb-4 pb-4 border-b border-[#F0ECE6]">
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 shrink-0 overflow-hidden rounded-full border-2 border-[#B89B72]/30 shadow-xs bg-[#F4F1EA]">
                  <img 
                    src={AndreiaImg} 
                    alt="Andreia Nicola" 
                    className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105" 
                  />
                </div>
                <div>
                  <span className="inline-block bg-[#B89B72] text-white text-[9px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full mb-1">
                    CRN2 19623D
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#1C1917]">
                    Andreia Nicola
                  </h3>
                  <span className="text-[10px] font-medium text-[#78716C] block">
                    Nutricionista Clínica & Emagrecimento Sustentável
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-xs text-[#57534E] font-light leading-relaxed">
                  Nutricionista formada pela <strong className="font-medium text-[#1C1917]">PUC/RS</strong>. Pós-graduada em <strong className="font-medium text-[#1C1917]">Nutrição Clínica, Emagrecimento Sustentável e Exames Laboratoriais</strong>. Foco em potencializar resultados estéticos por meio da organização alimentar e da constância, com abordagem comportamental e sem dietas radicais.
                </p>

                {/* Badges / Especialidades */}
                <div className="pt-2 flex flex-wrap gap-1.5">
                  <span className="px-2.5 py-1 bg-[#F9F8F6] border border-[#E8E4DF] text-[9px] font-medium text-[#57534E] rounded-full">Nutrição Clínica (PUC/RS)</span>
                  <span className="px-2.5 py-1 bg-[#F9F8F6] border border-[#E8E4DF] text-[9px] font-medium text-[#57534E] rounded-full">Emagrecimento Sustentável</span>
                  <span className="px-2.5 py-1 bg-[#F9F8F6] border border-[#E8E4DF] text-[9px] font-medium text-[#57534E] rounded-full">Exames Laboratoriais</span>
                </div>
              </div>
            </div>

            <div className="pt-5 mt-5 border-t border-[#F0ECE6]">
              <a
                href={`${WHATSAPP_URL}?text=${encodeURIComponent('Olá, gostaria de agendar uma consulta nutricional com Andreia Nicola.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-[#1C1917] hover:bg-[#B89B72] text-white text-[10px] font-semibold uppercase tracking-[0.18em] rounded-full transition-all duration-300 shadow-xs flex items-center justify-center gap-2"
              >
                Agendar Consulta Nutricional
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FoundersSection;