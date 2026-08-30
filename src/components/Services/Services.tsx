import { useState } from 'react';
import { Link } from 'react-router-dom';

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

import nutricaoClinicaImg from '../../assets/Services/nutricao_clinica.png';
import examesLaboratoriaisImg from '../../assets/Services/exames_laboratoriais.png';

const WHATSAPP_URL = 'https://wa.me/555192729544?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta.';

interface ServiceItem {
  id: string;
  title: string;
  category: 'nutricao' | 'massagens' | 'corporais' | 'faciais';
  categoryLabel: string;
  image: string;
  description: string;
}

const servicesData: ServiceItem[] = [
  // Nutrição
  {
    id: 'consulta-nutricional-clinica-emagrecimento-sustentavel',
    title: 'Nutrição Clínica para Saúde e Estética',
    category: 'nutricao',
    categoryLabel: 'Nutrição Clínica',
    image: nutricaoClinicaImg,
    description: 'Durante a consulta é realizada uma avaliação completa da sua alimentação, rotina, composição corporal e exames laboratoriais, permitindo elaborar um plano nutricional personalizado que favoreça emagrecimento, melhora da saúde metabólica, recuperação dos tecidos e potencialização dos resultados dos tratamentos estéticos.'
  },

  // Faciais
  {
    id: 'limpeza-pele-profunda',
    title: 'Limpeza de Pele Profunda',
    category: 'faciais',
    categoryLabel: 'Estética Facial',
    image: limpezaPeleImg,
    description: 'Higienização criteriosa, desobstrução de poros e renovação celular.'
  },
  {
    id: 'peeling-quimico',
    title: 'Peeling Químico',
    category: 'faciais',
    categoryLabel: 'Estética Facial',
    image: peelingQuimicoImg,
    description: 'Aplicação de ácidos dermatológicos para atenuar manchas e refinamento da textura.'
  },
  {
    id: 'microagulhamento',
    title: 'Microagulhamento de Precisão',
    category: 'faciais',
    categoryLabel: 'Estética Facial',
    image: microagulhamentoImg,
    description: 'Indução percutânea de colágeno para tratamento de cicatrizes, poros e firmeza.'
  },
  {
    id: 'radiofrequencia-facial',
    title: 'Radiofrequência Facial',
    category: 'faciais',
    categoryLabel: 'Estética Facial',
    image: radiofrequenciaFacialImg,
    description: 'Aquecimento controlado para efeito tensionador e estímulo de colágeno.'
  },
  {
    id: 'estetica-facial',
    title: 'Estética Facial Personalizada',
    category: 'faciais',
    categoryLabel: 'Estética Facial',
    image: esteticaFacialImg,
    description: 'Protocolo exclusivo desenvolvido a partir da análise da sua pele.'
  },

  // Massagens
  {
    id: 'massagem-relaxante',
    title: 'Massagem Relaxante',
    category: 'massagens',
    categoryLabel: 'Massagens',
    image: massagemRelaxanteImg,
    description: 'Manobras suaves e ritmadas para alívio imediato do estresse e tensão muscular.'
  },
  {
    id: 'drenagem-linfatica-manual',
    title: 'Drenagem Linfática Manual',
    category: 'massagens',
    categoryLabel: 'Massagens',
    image: drenagemLinfaticaImg,
    description: 'Estimulação do sistema linfático para redução de retenção hídrica e inchaço.'
  },
  {
    id: 'massagem-terapeutica',
    title: 'Massagem Terapêutica',
    category: 'massagens',
    categoryLabel: 'Massagens',
    image: massagemTerapeuticaImg,
    description: 'Foco no alívio de contraturas, pontos gatilho e restauração da mobilidade.'
  },
  {
    id: 'massagem-modeladora-local',
    title: 'Massagem Modeladora Local',
    category: 'massagens',
    categoryLabel: 'Massagens',
    image: massagemModeladoraImg,
    description: 'Manobras vigorosas voltadas para oxigenação tecidual e remodelação corporal.'
  },

  // Corporais
  {
    id: 'ultrassom-gordura-localizada',
    title: 'Ultrassom para Gordura Localizada',
    category: 'corporais',
    categoryLabel: 'Tratamentos Corporais',
    image: ultrassomGorduraImg,
    description: 'Ondas ultrassônicas focadas na redução de adiposidade localizada.'
  },
  {
    id: 'radiofrequencia-corporal',
    title: 'Radiofrequência Corporal',
    category: 'corporais',
    categoryLabel: 'Tratamentos Corporais',
    image: radiofrequenciaCorporalImg,
    description: 'Estímulo térmico profundo para neocolagênese e firmeza tissular.'
  },
  {
    id: 'ultrassom-celulite',
    title: 'Ultrassom para Celulite',
    category: 'corporais',
    categoryLabel: 'Tratamentos Corporais',
    image: ultrassomCeluliteImg,
    description: 'Atuação na microcirculação e reestruturação do tecido fibroso.'
  }
];

function Services() {
  const [activeTab, setActiveTab] = useState<'todos' | 'nutricao' | 'faciais' | 'massagens' | 'corporais'>('todos');

  const filteredServices = activeTab === 'todos'
    ? servicesData
    : servicesData.filter(s => s.category === activeTab);

  return (
    <section id="services" className="py-20 md:py-28 bg-[#FAF9F6] border-b border-[#E8E4DF]">
      <div className="container mx-auto px-6 md:px-8 max-w-7xl">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#B89B72] block mb-2">
            Menu de Tratamentos & Consultas
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#1C1917] tracking-tight mb-4">
            Procedimentos & Nutrição
          </h2>
          <div className="w-12 h-0.5 bg-[#B89B72] mx-auto mb-4"></div>
          <p className="text-[#66615C] text-sm md:text-base font-light leading-relaxed">
            Elaborados individualmente com alta precisão técnica, insumos selecionados e suporte multidisciplinar.
          </p>
        </div>

        {/* Clean Category Tabs */}
        <div className="flex items-center justify-center space-x-2 sm:space-x-4 mb-12 overflow-x-auto pb-4 text-[11px] font-semibold uppercase tracking-[0.18em]">
          {(['todos', 'nutricao', 'faciais', 'massagens', 'corporais'] as const).map((tab) => {
            const labels = {
              todos: 'Todos os Procedimentos',
              nutricao: 'Nutrição Clínica',
              faciais: 'Estética Facial',
              massagens: 'Massagens',
              corporais: 'Tratamentos Corporais'
            };
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2.5 rounded-full transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-[#1C1917] text-white shadow-xs'
                    : 'bg-white text-[#66615C] border border-[#E8E4DF] hover:border-[#1C1917] hover:text-[#1C1917]'
                }`}
              >
                {labels[tab]}
              </button>
            );
          })}
        </div>

        {/* Clean Bright Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group bg-white border border-[#E8E4DF] rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                {/* Photo (Clean & Colorful, no grayscale) */}
                <div className="aspect-[4/3] overflow-hidden bg-[#F4F1EA]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                  />
                </div>

                {/* Info */}
                <div className="p-6 space-y-2">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#B89B72] block">
                    {service.categoryLabel}
                  </span>
                  <h3 className="font-serif text-xl font-normal text-[#1C1917]">
                    {service.title}
                  </h3>
                  <p className="text-xs text-[#66615C] font-light leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Action */}
              <div className="px-6 pb-6 pt-3 flex items-center justify-between border-t border-[#F0ECE6]">
                <a
                  href={`${WHATSAPP_URL}&text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20o%20tratamento%20${encodeURIComponent(service.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#1C1917] hover:text-[#B89B72] transition-colors"
                >
                  Agendar horário
                </a>
                
                <Link
                  to={`/servicos/${service.id}`}
                  className="text-[10px] font-medium uppercase tracking-[0.15em] text-[#88837E] hover:text-[#1C1917] transition-colors"
                >
                  Saiba Mais →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;