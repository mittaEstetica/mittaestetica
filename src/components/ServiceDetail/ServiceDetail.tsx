import React from 'react';
import { useParams, Link } from 'react-router-dom';
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

interface ServiceData {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  duration: string;
  price?: string;
  benefits: string[];
  procedure: string[];
  contraindications: string[];
  image: string;
  category: 'massage' | 'corporeal' | 'facial' | 'nutrition';
  categoryLabel: string;
}

const servicesData: Record<string, ServiceData> = {
  'consulta-nutricional-clinica-emagrecimento-sustentavel': {
    id: 'consulta-nutricional-clinica-emagrecimento-sustentavel',
    name: 'Nutrição Clínica para Saúde e Estética',
    description: 'Durante a consulta é realizada uma avaliação completa da sua alimentação, rotina, composição corporal e exames laboratoriais, permitindo elaborar um plano nutricional personalizado que favoreça emagrecimento, melhora da saúde metabólica, recuperação dos tecidos e potencialização dos resultados dos tratamentos estéticos.',
    longDescription: 'Com 1h de duração, a consulta nutricional conduzida pela Dra. Andreia Nicola (CRN2 19623D) aborda a anamnese alimentar completa, análise de rotina, rastreamento metabólico e avaliação da composição corporal, criando um plano alimentar verdadeiramente sustentável e individualizado que fortalece a saúde e potencializa os resultados estéticos.',
    duration: '1 hora',
    benefits: [
      'Plano alimentar totalmente individualizado',
      'Redução da inflamação',
      'Melhora da qualidade da pele',
      'Auxílio na recuperação após procedimentos',
      'Melhora da composição corporal',
      'Aumento da disposição',
      'Manutenção dos resultados a longo prazo'
    ],
    procedure: [
      'Anamnese clínica e histórico nutricional minucioso',
      'Avaliação física e composição corporal',
      'Análise dos hábitos, rotina e preferências alimentares',
      'Elaboração de metas realistas e prescrição nutricional',
      'Estratégias práticas para uma alimentação possível no dia a dia',
      'Orientações práticas de compras e planejamento de refeições'
    ],
    contraindications: [
      'Não há contraindicações universais; o plano é adaptado para cada condição clínica.'
    ],
    image: nutricaoClinicaImg,
    category: 'nutrition',
    categoryLabel: 'Nutrição Clínica'
  },

  'massagem-relaxante': {
    id: 'massagem-relaxante',
    name: 'Massagem Relaxante',
    description: 'Técnica com toques suaves e profundos que aliviam o estresse e tensões',
    longDescription: 'Com 1h de duração, a massagem relaxante é realizada com movimentos suaves, contínuos e leves, que envolvem deslizamentos e toques harmoniosos por todo o corpo. Esses movimentos ajudam a liberar a tensão muscular e trazer sensação imediata de bem-estar.',
    duration: '1 hora',
    benefits: [
      'Reduz o estresse e a ansiedade',
      'Alivia tensões musculares',
      'Melhora a circulação sanguínea',
      'Promove relaxamento físico e mental',
      'Contribui para melhora da qualidade do sono'
    ],
    procedure: [
      'Avaliação inicial e conversa sobre necessidades',
      'Aplicação de óleo essencial relaxante',
      'Massagem suave nas costas e ombros',
      'Técnicas de alongamento passivo',
      'Massagem nos braços e mãos',
      'Finalização com toques leves e relaxantes'
    ],
    contraindications: [
      'Febre ou infecções ativas',
      'Processos inflamatórios ou lesões de pele',
      'Trombose ou problemas circulatórios graves',
      'Pós-cirúrgico imediato sem liberação médica',
      'Doenças cardíacas descompensadas',
      'Gestantes (salvo com liberação médica e evitando abdômen)'
    ],
    image: massagemRelaxanteImg,
    category: 'massage',
    categoryLabel: 'Massagens'
  },
  'massagem-terapeutica': {
    id: 'massagem-terapeutica',
    name: 'Massagem Terapêutica',
    description: 'Focada em dores musculares e pontos de tensão',
    longDescription: 'Com 1h de duração, a massagem terapêutica utiliza movimentos específicos e profundos, com foco em aliviar dores musculares e corrigir tensões. A intensidade é ajustada conforme a necessidade de cada paciente.',
    duration: '1 hora',
    benefits: [
      'Alívio de dores musculares e tensões',
      'Redução de pontos de gatilho e contraturas',
      'Estímulo à circulação sanguínea',
      'Contribuição para relaxamento físico e bem-estar'
    ],
    procedure: [
      'Avaliação postural e identificação de pontos de tensão',
      'Aplicação de técnicas de pressão profunda',
      'Mobilização articular específica',
      'Alongamento muscular direcionado',
      'Técnicas de liberação miofascial',
      'Orientações para manutenção dos resultados'
    ],
    contraindications: [
      'Febre ou infecções ativas',
      'Inflamações ou lesões recentes',
      'Trombose ou problemas circulatórios graves',
      'Fraturas recentes ou pós-cirúrgico sem liberação médica',
      'Gestantes (salvo com liberação médica)'
    ],
    image: massagemTerapeuticaImg,
    category: 'massage',
    categoryLabel: 'Massagens'
  },
  'drenagem-linfatica-manual': {
    id: 'drenagem-linfatica-manual',
    name: 'Drenagem Linfática Manual',
    description: 'Movimentos leves que ativam o sistema linfático',
    longDescription: 'A drenagem linfática é realizada com movimentos suaves, rítmicos e delicados, sempre direcionados aos gânglios linfáticos. Esses toques estimulam a circulação da linfa, ajudando a reduzir o inchaço, eliminar toxinas e promover bem-estar.',
    duration: '60 minutos',
    benefits: [
      'Melhora da circulação linfática e sanguínea',
      'Redução do inchaço e retenção de líquidos',
      'Auxilia no processo de desintoxicação do organismo',
      'Acelera a recuperação pós-cirúrgica (quando liberado pelo médico)',
      'Diminui sensação de pernas pesadas e cansadas'
    ],
    procedure: [
      'Avaliação do sistema linfático',
      'Técnicas de respiração para relaxamento',
      'Drenagem do pescoço e região cervical',
      'Drenagem dos membros superiores',
      'Drenagem do tronco e abdômen',
      'Drenagem dos membros inferiores'
    ],
    contraindications: [
      'Insuficiência cardíaca descompensada',
      'Insuficiência renal aguda',
      'Infecções agudas (febre, viroses, bacterianas)',
      'Trombose venosa profunda',
      'Gestantes (só após o 3º mês e com liberação médica)'
    ],
    image: drenagemLinfaticaImg,
    category: 'massage',
    categoryLabel: 'Massagens'
  },
  'massagem-modeladora-local': {
    id: 'massagem-modeladora-local',
    name: 'Massagem Modeladora Local',
    description: 'Técnica intensa para modelar o corpo e reduzir medidas',
    longDescription: 'A massagem modeladora é uma técnica vigorosa que utiliza movimentos rápidos e intensos para melhorar a circulação e modelar o contorno corporal. Ideal para complementar tratamentos corporais.',
    duration: '20 minutos',
    benefits: [
      'Melhora o aspecto da celulite',
      'Melhora o contorno corporal',
      'Ativa a circulação sanguínea',
      'Reduz retenção de líquidos'
    ],
    procedure: [
      'Avaliação das áreas a serem trabalhadas',
      'Aplicação de creme modelador',
      'Técnicas de amassamento profundo',
      'Movimentos de pinçamento',
      'Finalização com drenagem linfática'
    ],
    contraindications: [
      'Pele muito sensível',
      'Varizes graves',
      'Inflamações cutâneas',
      'Gravidez'
    ],
    image: massagemModeladoraImg,
    category: 'massage',
    categoryLabel: 'Massagens'
  },
  'ultrassom-gordura-localizada': {
    id: 'ultrassom-gordura-localizada',
    name: 'Ultrassom para Gordura Localizada',
    description: 'Ondas sonoras que quebram células de gordura',
    longDescription: 'O ultrassom estético utiliza ondas sonoras de alta frequência que penetram no tecido adiposo, promovendo a vibração das células de gordura, rompendo suas membranas e facilitando sua eliminação.',
    duration: '1 hora',
    benefits: [
      'Redução de medidas e gordura localizada',
      'Melhora a textura da pele',
      'Estimula a circulação sanguínea e linfática'
    ],
    procedure: [
      'Avaliação e marcação das áreas',
      'Aplicação de gel condutor',
      'Aplicação do ultrassom nas áreas marcadas',
      'Controle de intensidade e tempo'
    ],
    contraindications: [
      'Gestantes e lactantes',
      'Marcapasso ou dispositivos eletrônicos implantados',
      'Inflamações, feridas ou infecções na região'
    ],
    image: ultrassomGorduraImg,
    category: 'corporeal',
    categoryLabel: 'Tratamentos Corporais'
  },
  'ultrassom-celulite': {
    id: 'ultrassom-celulite',
    name: 'Ultrassom para Celulite',
    description: 'Reduz celulite inflamada e melhora a circulação',
    longDescription: 'Procedimento que utiliza ondas ultrassônicas para penetrar nas camadas mais profundas da pele e tecido subcutâneo, promovendo vibrações e aquecimento controlado, estimulando a circulação e a oxigenação dos tecidos.',
    duration: '1 hora',
    benefits: [
      'Melhora o aspecto da celulite e ondulações',
      'Estimula a circulação sanguínea e linfática',
      'Auxilia na quebra das células de gordura',
      'Melhora a oxigenação e nutrição celular'
    ],
    procedure: [
      'Avaliação do grau de celulite',
      'Aplicação de gel condutor',
      'Tratamento com ultrassom específico',
      'Orientações de cuidados pós-sessão'
    ],
    contraindications: [
      'Gravidez e lactação',
      'Doenças cardíacas ou uso de marca-passo',
      'Trombose ou problemas circulatórios severos'
    ],
    image: ultrassomCeluliteImg,
    category: 'corporeal',
    categoryLabel: 'Tratamentos Corporais'
  },
  'radiofrequencia-corporal': {
    id: 'radiofrequencia-corporal',
    name: 'Radiofrequência Corporal',
    description: 'Calor controlado para estimular colágeno e elastina',
    longDescription: 'O aparelho emite ondas de radiofrequência que aquecem as camadas mais profundas da pele de forma controlada. Este aquecimento estimula a produção de colágeno e elastina, promovendo firmeza e combate à flacidez.',
    duration: '1 hora',
    benefits: [
      'Diminuição da flacidez da pele',
      'Estímulo da produção de colágeno',
      'Melhora da textura e firmeza da pele'
    ],
    procedure: [
      'Avaliação da pele e áreas de aplicação',
      'Limpeza e preparação da pele',
      'Aplicação da radiofrequência com controle térmico',
      'Aplicação de creme hidratante'
    ],
    contraindications: [
      'Gestantes e lactantes',
      'Marcapasso ou dispositivos eletrônicos implantados',
      'Inflamações, feridas ou infecções na região'
    ],
    image: radiofrequenciaCorporalImg,
    category: 'corporeal',
    categoryLabel: 'Tratamentos Corporais'
  },
  'estetica-facial': {
    id: 'estetica-facial',
    name: 'Estética Facial Personalizada',
    description: 'Tratamentos personalizados para rejuvenescimento',
    longDescription: 'A estética facial engloba diversos tratamentos personalizados para rejuvenescimento, hidratação e revitalização da pele do rosto. Cada protocolo é adaptado às necessidades específicas de cada cliente.',
    duration: '60-90 minutos',
    benefits: [
      'Rejuvenesce a pele do rosto',
      'Melhora a hidratação e luminosidade',
      'Reduz linhas de expressão',
      'Uniformiza o tom da pele'
    ],
    procedure: [
      'Avaliação da pele e necessidades',
      'Limpeza e preparação',
      'Tratamento específico escolhido',
      'Aplicação de cosméticos avançados e fotoproteção'
    ],
    contraindications: [
      'Pele com lesões ativas',
      'Inflamações agudas',
      'Alergias conhecidas aos ativos do protocolo'
    ],
    image: esteticaFacialImg,
    category: 'facial',
    categoryLabel: 'Estética Facial'
  },
  'limpeza-pele-profunda': {
    id: 'limpeza-pele-profunda',
    name: 'Limpeza de Pele Profunda',
    description: 'Remove impurezas e renova a pele',
    longDescription: 'Procedimento para higienização profunda da pele, removendo cravos, impurezas, células mortas e excesso de oleosidade. Inclui higienização, esfoliação, emoliência, extração manual, máscara calmante e hidratação.',
    duration: '1h30',
    benefits: [
      'Reduz cravos e previne acnes',
      'Desobstrui poros profundamente',
      'Melhora a absorção de dermocosméticos',
      'Deixa a pele mais suave e uniforme'
    ],
    procedure: [
      'Anamnese e avaliação da pele',
      'Limpeza e esfoliação preparatória',
      'Extração minuciosa de comedões',
      'Máscara calmante e fotoproteção'
    ],
    contraindications: [
      'Pele com lesões ou feridas abertas',
      'Acne inflamatória severa',
      'Queimaduras solares recentes'
    ],
    image: limpezaPeleImg,
    category: 'facial',
    categoryLabel: 'Estética Facial'
  },
  'peeling-quimico': {
    id: 'peeling-quimico',
    name: 'Peeling Químico',
    description: 'Renova a pele e clareia manchas',
    longDescription: 'Aplicação de ácidos selecionados na pele para promover a renovação celular e descamação controlada, promovendo melhora das manchas, redução de linhas finas de expressão e uniformidade do tom da pele.',
    duration: '1 hora',
    benefits: [
      'Clareamento de manchas e melasmas',
      'Redução de linhas finas e rugas superficiais',
      'Melhora da textura e luminosidade',
      'Estimula a renovação de colágeno'
    ],
    procedure: [
      'Avaliação e seleção do ácido adequado',
      'Limpeza e higienização profunda',
      'Aplicação e neutralização controlada',
      'Fotoproteção e orientações de home care'
    ],
    contraindications: [
      'Pele irritada ou com dermatite ativa',
      'Gravidez e lactação',
      'Uso recente de isotretinoína'
    ],
    image: peelingQuimicoImg,
    category: 'facial',
    categoryLabel: 'Estética Facial'
  },
  'microagulhamento': {
    id: 'microagulhamento',
    name: 'Microagulhamento de Precisão',
    description: 'Cria microcanais para absorção de ativos',
    longDescription: 'Procedimento que utiliza equipamento com microagulhas para criar microperfurações controladas na pele, facilitando a permeação de ativos para estimular a produção de colágeno e elastina.',
    duration: '1 hora',
    benefits: [
      'Estimula a renovação celular e produção de colágeno',
      'Melhora textura e firmeza da pele',
      'Reduz cicatrizes de acne e poros dilatados',
      'Ameniza linhas finas e rugas'
    ],
    procedure: [
      'Avaliação prévia da pele',
      'Assepsia e preparação',
      'Microagulhamento de precisão',
      'Drug delivery de ativos concentrados'
    ],
    contraindications: [
      'Infecções ou inflamações no local',
      'Herpes ativa',
      'Gravidez e lactação'
    ],
    image: microagulhamentoImg,
    category: 'facial',
    categoryLabel: 'Estética Facial'
  },
  'radiofrequencia-facial': {
    id: 'radiofrequencia-facial',
    name: 'Radiofrequência Facial',
    description: 'Calor para estimular colágeno e firmeza',
    longDescription: 'Tratamento que utiliza ondas de radiofrequência para aquecer as camadas mais profundas da pele, estimulando a produção de colágeno e elastina e auxiliando no remodelamento do contorno facial.',
    duration: '1 hora',
    benefits: [
      'Melhora a firmeza e sustentação da pele',
      'Reduz a flacidez facial',
      'Promove efeito lifting não invasivo',
      'Estimula a circulação e viço'
    ],
    procedure: [
      'Avaliação da pele',
      'Higienização',
      'Aplicação da radiofrequência com sensor térmico',
      'Fotoproteção final'
    ],
    contraindications: [
      'Gravidez',
      'Presença de marca-passo ou próteses metálicas na região',
      'Lesões ou feridas abertas'
    ],
    image: radiofrequenciaFacialImg,
    category: 'facial',
    categoryLabel: 'Estética Facial'
  }
};

const ServiceDetail: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = serviceId ? servicesData[serviceId] : null;

  if (!service) {
    return (
      <div className="min-h-screen bg-[#FAF9F6] text-[#1C1917] flex items-center justify-center p-8">
        <div className="text-center">
          <h1 className="font-serif text-3xl mb-4">Procedimento não encontrado</h1>
          <Link to="/" className="text-xs font-semibold uppercase tracking-[0.2em] border-b border-[#1C1917] pb-1">
            ← Voltar para a página inicial
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#1C1917]">
      {/* Header */}
      <header className="border-b border-[#E8E4DF] bg-white/80 backdrop-blur-md sticky top-0 z-40">
        <div className="container mx-auto px-8 py-5 flex items-center justify-between">
          <Link to="/" className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#1C1917] hover:text-[#B89B72] transition-colors">
            ← Voltar para Procedimentos
          </Link>
          <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#78716C]">
            {service.categoryLabel}
          </span>
        </div>
      </header>

      <main className="container mx-auto px-8 py-16 max-w-6xl">
        {/* Editorial Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#B89B72] block">
              Protocolo Exclusivo
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl font-normal text-[#1C1917] leading-tight">
              {service.name}
            </h1>
            <p className="text-[#57534E] text-base font-light leading-relaxed">
              {service.longDescription}
            </p>
            <div className="pt-2">
              <span className="inline-block px-4 py-2 bg-white border border-[#E8E4DF] rounded-full text-xs font-semibold uppercase tracking-[0.15em] text-[#1C1917]">
                Duração da Sessão: {service.duration}
              </span>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="aspect-[4/3] overflow-hidden bg-[#F4F1EA] rounded-2xl border border-[#E8E4DF]">
              <img src={service.image} alt={service.name} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Editorial Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 border-t border-[#E8E4DF] pt-12">
          
          {/* Benefícios */}
          <div className="space-y-4">
            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#B89B72] block">
              01 / BENEFÍCIOS PRINCIPAIS
            </span>
            <h3 className="font-serif text-2xl font-normal">Resultados Esperados</h3>
            <ul className="space-y-2.5 text-xs text-[#57534E] font-light">
              {service.benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[#B89B72] font-semibold">—</span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Etapas */}
          <div className="space-y-4 md:border-l md:border-[#E8E4DF] md:pl-8">
            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#B89B72] block">
              02 / COMO É REALIZADO
            </span>
            <h3 className="font-serif text-2xl font-normal">Etapas do Protocolo</h3>
            <ol className="space-y-2.5 text-xs text-[#57534E] font-light">
              {service.procedure.map((step, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="font-mono text-[10px] text-[#B89B72] font-semibold">0{idx + 1}.</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Agendamento */}
          <div className="space-y-4 md:border-l md:border-[#E8E4DF] md:pl-8">
            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#B89B72] block">
              03 / AGENDAMENTO PRIVADO
            </span>
            <h3 className="font-serif text-2xl font-normal">Solicitar Consulta</h3>
            <p className="text-xs text-[#78716C] font-light leading-relaxed">
              Consulte a disponibilidade de horários e tire suas dúvidas com nossa equipe técnica.
            </p>
            <div className="pt-4">
              <a
                href={`https://wa.me/555192729544?text=${encodeURIComponent(`Olá, gostaria de agendar uma consulta para ${service.name}.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-4 bg-[#1C1917] hover:bg-[#B89B72] text-white text-center text-[10px] font-semibold uppercase tracking-[0.2em] rounded-full transition-colors"
              >
                Agendar via WhatsApp
              </a>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default ServiceDetail;

