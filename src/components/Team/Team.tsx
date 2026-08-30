import { Link } from 'react-router-dom';
import MileneImg from '../../assets/milene.jpeg';
import AndreiaImg from '../../assets/andreia.jpeg';

const WHATSAPP_URL = 'https://wa.me/555192729544';

const Team = () => {
  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#1C1917] antialiased">
      {/* Navigation Header */}
      <header className="border-b border-[#E8E4DF] bg-white/80 backdrop-blur-md sticky top-0 z-40">
        <div className="container mx-auto px-6 md:px-8 py-4 flex items-center justify-between">
          <Link to="/" className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#1C1917] hover:text-[#B89B72] transition-colors flex items-center gap-2">
            <span>←</span> Voltar para Início
          </Link>
          <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#78716C]">
            Mitta Estética · Corpo Clínico
          </span>
        </div>
      </header>

      <main className="container mx-auto px-6 md:px-8 py-16 md:py-20 max-w-6xl">
        {/* Editorial Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#B89B72] block mb-2">
            Equipe Multidisciplinar
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-normal text-[#1C1917] tracking-tight mb-3">
            Quem cuida de você
          </h1>
          <div className="w-10 h-0.5 bg-[#B89B72] mx-auto mb-3"></div>
          <p className="text-[#66615C] text-sm sm:text-base font-light leading-relaxed">
            Profissionais dedicadas combinando fundamentação acadêmica rigorosa, constante atualização e compromisso ético com sua saúde e beleza.
          </p>
        </div>

        {/* Side-by-side Profile Cards Grid with Compact Small Photos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          
          {/* Card 1: Milene Favero */}
          <div className="bg-white border border-[#E8E4DF] p-6 rounded-2xl flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300">
            <div>
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
                  <h2 className="font-serif text-xl sm:text-2xl font-normal text-[#1C1917]">Milene Favero</h2>
                  <span className="text-[10px] font-medium text-[#78716C] block">
                    Esteticista & Cosmetóloga
                  </span>
                </div>
              </div>

              <div className="space-y-3 text-xs text-[#57534E] font-light leading-relaxed">
                <p>
                  Graduada em <strong className="font-medium text-[#1C1917]">Estética e Cosmética (FADERGS)</strong> e Pós-graduada em <strong className="font-medium text-[#1C1917]">Estética Clínica e de Precisão (IPGS)</strong>.
                </p>
                <p>
                  Com vasta experiência em gerenciamento de pele, tratamentos faciais e terapias corporais, busca a integração entre saúde dermal e cosmetologia avançada.
                </p>

                <div className="pt-3 border-t border-[#F0ECE6] space-y-2 text-xs font-light text-[#1C1917]">
                  <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#78716C] block">Especializações</span>
                  <div className="flex flex-wrap gap-1.5 pt-0.5">
                    <span className="px-2.5 py-1 bg-[#F9F8F6] border border-[#E8E4DF] text-[9px] text-[#57534E] rounded-full">Master em Peelings</span>
                    <span className="px-2.5 py-1 bg-[#F9F8F6] border border-[#E8E4DF] text-[9px] text-[#57534E] rounded-full">Limpeza de Pele Profunda</span>
                    <span className="px-2.5 py-1 bg-[#F9F8F6] border border-[#E8E4DF] text-[9px] text-[#57534E] rounded-full">Hiperpigmentação</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-5 mt-5 border-t border-[#F0ECE6]">
              <a
                href={`${WHATSAPP_URL}?text=${encodeURIComponent('Olá, gostaria de agendar uma avaliação estética com Milene Favero.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-[#1C1917] hover:bg-[#B89B72] text-white text-[10px] font-semibold uppercase tracking-[0.2em] rounded-full transition-all duration-300 shadow-xs flex items-center justify-center"
              >
                Agendar Avaliação Estética
              </a>
            </div>
          </div>

          {/* Card 2: Andreia Nicola */}
          <div className="bg-white border border-[#E8E4DF] p-6 rounded-2xl flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300">
            <div>
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
                  <h2 className="font-serif text-xl sm:text-2xl font-normal text-[#1C1917]">Andreia Nicola</h2>
                  <span className="text-[10px] font-medium text-[#78716C] block">
                    Nutricionista Clínica & Emagrecimento Sustentável
                  </span>
                </div>
              </div>

              <div className="space-y-3 text-xs text-[#57534E] font-light leading-relaxed">
                <p>
                  Graduada em <strong className="font-medium text-[#1C1917]">Nutrição (PUC/RS)</strong> e Pós-graduada em <strong className="font-medium text-[#1C1917]">Nutrição Clínica, Emagrecimento Sustentável e Exames Laboratoriais</strong>.
                </p>
                <p>
                  Foco em reeducação alimentar, otimização metabólica, plano nutricional personalizado e análise criteriosa de exames laboratoriais.
                </p>

                <div className="pt-3 border-t border-[#F0ECE6] space-y-2 text-xs font-light text-[#1C1917]">
                  <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#78716C] block">Especializações</span>
                  <div className="flex flex-wrap gap-1.5 pt-0.5">
                    <span className="px-2.5 py-1 bg-[#F9F8F6] border border-[#E8E4DF] text-[9px] text-[#57534E] rounded-full">Nutrição Clínica (PUC/RS)</span>
                    <span className="px-2.5 py-1 bg-[#F9F8F6] border border-[#E8E4DF] text-[9px] text-[#57534E] rounded-full">Emagrecimento Sustentável</span>
                    <span className="px-2.5 py-1 bg-[#F9F8F6] border border-[#E8E4DF] text-[9px] text-[#57534E] rounded-full">Exames Laboratoriais</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-5 mt-5 border-t border-[#F0ECE6]">
              <a
                href={`${WHATSAPP_URL}?text=${encodeURIComponent('Olá, gostaria de agendar uma consulta nutricional com Andreia Nicola.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-[#1C1917] hover:bg-[#B89B72] text-white text-[10px] font-semibold uppercase tracking-[0.2em] rounded-full transition-all duration-300 shadow-xs flex items-center justify-center"
              >
                Agendar Consulta Nutricional
              </a>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default Team;



