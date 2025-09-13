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
  category: 'massage' | 'corporeal' | 'facial';
}

const servicesData: Record<string, ServiceData> = {
  'massagem-relaxante': {
    id: 'massagem-relaxante',
    name: 'Massagem Relaxante',
    description: 'Técnica com toques suaves e profundos que aliviam o estresse e tensões',
    longDescription: 'Com 1h de duração, a massagem relaxante é realizada com movimentos suaves, contínuos e leves, que envolvem deslizamentos e toques harmoniosos por todo o corpo. Esses movimentos ajudam a liberar a tensão muscular e trazer sensação imediata de bem-estar.',
    duration: '1 hora',
    price: 'R$ 120',
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
    category: 'massage'
  },
  'massagem-relaxante-pedras-quentes': {
    id: 'massagem-relaxante-pedras-quentes',
    name: 'Massagem Relaxante com Pedras Quentes',
    description: 'Combina massagem relaxante com pedras aquecidas',
    longDescription: 'Com 1h de duração, essa técnica combina manobras suaves de massagem relaxante com a aplicação de pedras aquecidas em pontos estratégicos do corpo. O calor das pedras ajuda a dilatar os vasos sanguíneos, potencializando o relaxamento muscular e a sensação de bem-estar.',
    duration: '1 hora',
    price: 'R$ 150',
    benefits: [
      'Relaxamento profundo do corpo e da mente',
      'Alívio de tensões e dores musculares',
      'Melhora da circulação sanguínea',
      'Redução do estresse e da ansiedade',
      'Aumento da sensação de conforto e equilíbrio'
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
      'Febre, inflamações ou infecções na pele',
      'Problemas circulatórios graves ou trombose',
      'Hipertensão ou doenças cardíacas descompensadas',
      'Diabetes descontrolada (risco de sensibilidade alterada)',
      'Gestantes (salvo com liberação médica e evitando abdômen)'
    ],
    image: massagemRelaxanteImg,
    category: 'massage'
  },
  'massagem-terapeutica': {
    id: 'massagem-terapeutica',
    name: 'Massagem Terapêutica',
    description: 'Focada em dores musculares e pontos de tensão',
    longDescription: 'Com 1h de duração, massagem terapêutica utiliza movimentos específicos e profundos, com foco em aliviar dores musculares, corrigir tensões e melhorar a postura. A intensidade é ajustada conforme a necessidade de cada paciente.',
    duration: '1 hora',
    price: 'R$ 140',
    benefits: [
      'Alívio de dores musculares e tensões',
      'Melhora da postura e flexibilidade',
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
      'Osteoporose severa (dependendo da intensidade)',
      'Fraturas recentes ou pós-cirúrgico sem liberação médica',
      'Doenças cardíacas descompensadas',
      'Gestantes (salvo com liberação médica)'
    ],
    image: massagemTerapeuticaImg,
    category: 'massage'
  },
  'drenagem-linfatica-manual': {
    id: 'drenagem-linfatica-manual',
    name: 'Drenagem Linfática Manual',
    description: 'Movimentos leves que ativam o sistema linfático',
    longDescription: 'A drenagem linfática é realizada com movimentos suaves, rítmicos e delicados, sempre direcionados aos gânglios linfáticos. Esses toques estimulam a circulação da linfa, ajudando a reduzir o inchaço, eliminar toxinas e promover bem-estar.',
    duration: '60 minutos',
    price: 'R$ 130',
    benefits: [
      'Melhora da circulação linfática e sanguínea',
      'Redução do inchaço e retenção de líquidos',
      'Auxilia no processo de desintoxicação do organismo',
      'Acelera a recuperação pós-cirúrgica (quando liberado pelo médico)',
      'Diminui sensação de pernas pesadas e cansadas',
      'Contribui para melhora da celulite (pela redução de edema)',
      'Promove relaxamento e bem-estar',
      'Pode auxiliar no fortalecimento do sistema imunológico'
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
      'Neoplasias malignas sem liberação médica',
      'Gestantes (só após o 3º mês e com liberação médica)',
      'Hipotensão arterial (pressão baixa)',
      'Doenças da tireoide descompensadas',
      'Pós-cirúrgico imediato (sem liberação do cirurgião)',
      'Processos inflamatórios ou alérgicos ativos'
    ],
    image: drenagemLinfaticaImg,
    category: 'massage'
  },
  'drenagem-modeladora-combinada': {
    id: 'drenagem-modeladora-combinada',
    name: 'Drenagem linfática manual + Modeladora Local',
    description: 'Combina drenagem linfática com massagem modeladora',
    longDescription: 'Com 1h20 de duração, essa técnica combina a drenagem linfática manual, realizada com movimentos suaves e direcionados aos gânglios linfáticos de todo o corpo, com massagem modeladora localizada, que utiliza manobras mais firmes para atuar em áreas específicas. O objetivo é reduzir inchaço, estimular a circulação e ajudar na definição do corpo.',
    duration: '1h20',
    price: 'R$ 180',
    benefits: [
      'Redução de retenção de líquido e inchaço',
      'Melhora da circulação linfática e sanguínea',
      'Redução de medidas em áreas específicas',
      'Auxílio na melhora da celulite',
      'Sensação de leveza e bem-estar'
    ],
    procedure: [
      'Avaliação do sistema linfático e áreas a serem trabalhadas',
      'Técnicas de respiração para relaxamento',
      'Drenagem do pescoço e região cervical',
      'Drenagem dos membros superiores',
      'Drenagem do tronco e abdômen',
      'Drenagem dos membros inferiores',
      'Aplicação de creme modelador',
      'Técnicas de amassamento profundo',
      'Movimentos de pinçamento',
      'Técnicas de percussão',
      'Finalização com drenagem linfática'
    ],
    contraindications: [
      'Insuficiência cardíaca descompensada',
      'Insuficiência renal aguda',
      'Trombose venosa profunda',
      'Infecções agudas ou processos inflamatórios',
      'Neoplasias malignas sem liberação médica',
      'Gestantes',
      'Hipotensão arterial ou doenças da tireoide descompensadas'
    ],
    image: drenagemLinfaticaImg,
    category: 'massage'
  },
  'massagem-modeladora-local': {
    id: 'massagem-modeladora-local',
    name: 'Massagem Modeladora Local',
    description: 'Técnica intensa para modelar o corpo e reduzir medidas',
    longDescription: 'A massagem modeladora é uma técnica vigorosa que utiliza movimentos rápidos e intensos para quebrar gorduras localizadas, melhorar a circulação e modelar o contorno corporal. Ideal para complementar tratamentos de emagrecimento.',
    duration: '45-60 minutos',
    price: 'R$ 150',
    benefits: [
      'Reduz medidas temporariamente',
      'Melhora o aspecto da celulite',
      'Ativa a circulação sanguínea',
      'Elimina toxinas',
      'Modela o contorno corporal',
      'Reduz retenção de líquidos'
    ],
    procedure: [
      'Avaliação das áreas a serem trabalhadas',
      'Aplicação de creme modelador',
      'Técnicas de amassamento profundo',
      'Movimentos de pinçamento',
      'Técnicas de percussão',
      'Finalização com drenagem linfática'
    ],
    contraindications: [
      'Pele muito sensível',
      'Varizes graves',
      'Inflamações cutâneas',
      'Gravidez',
      'Doenças cardíacas'
    ],
    image: massagemModeladoraImg,
    category: 'massage'
  },
  'ultrassom-gordura-localizada': {
    id: 'ultrassom-gordura-localizada',
    name: 'Ultrassom para Gordura Localizada',
    description: 'Ondas sonoras que quebram células de gordura',
    longDescription: 'O ultrassom estético utiliza ondas sonoras de alta frequência que penetram no tecido adiposo, promovendo a vibração das células de gordura, rompendo suas membranas e facilitando sua eliminação. Sua aplicação é realizada por regiões, onde é aplicado gel de contato para condução das ondas, é indolor e não invasivo.',
    duration: '1 hora',
    price: 'R$ 180',
    benefits: [
      'Redução de medidas e da gordura localizada',
      'Melhora a textura da pele',
      'Auxilia no tratamento da celulite',
      'Estimula a circulação sanguínea e linfática'
    ],
    procedure: [
      'Avaliação e marcação das áreas',
      'Aplicação de gel condutor',
      'Aplicação do ultrassom nas áreas marcadas',
      'Controle de intensidade e tempo',
      'Massagem pós-tratamento',
      'Orientações para manutenção'
    ],
    contraindications: [
      'Gestantes e lactantes',
      'Marcapasso ou dispositivos eletrônicos implantados',
      'Inflamações, feridas ou infecções na região',
      'Portadores de DIU de cobre',
      'Neoplasias malignas',
      'Doenças cardíacas descompensadas'
    ],
    image: ultrassomGorduraImg,
    category: 'corporeal'
  },
  'ultrassom-celulite': {
    id: 'ultrassom-celulite',
    name: 'Ultrassom para Celulite',
    description: 'Reduz celulite inflamada e melhora a circulação',
    longDescription: 'Procedimento que utiliza ondas ultrassônicas para penetrar nas camadas mais profundas da pele e tecido subcutâneo, promovendo vibrações e aquecimento controlado, estimulando a circulação e a oxigenação dos tecidos. Ajuda a desfazer fibroses e melhorar a permeabilidade da pele para ativos anticelulite.',
    duration: '1 hora',
    price: 'R$ 160',
    benefits: [
      'Melhora o aspecto da celulite (reduz ondulações e irregularidades da pele)',
      'Estimula a circulação sanguínea e linfática',
      'Auxilia na quebra das células de gordura',
      'Melhora a oxigenação e nutrição celular',
      'Potencializa a ação de ativos cosméticos',
      'Ajuda a reduzir retenção de líquidos'
    ],
    procedure: [
      'Avaliação do grau de celulite',
      'Aplicação de gel condutor',
      'Tratamento com ultrassom específico',
      'Massagem de drenagem',
      'Aplicação de creme redutor',
      'Orientações para manutenção'
    ],
    contraindications: [
      'Gravidez e lactação',
      'Doenças cardíacas ou uso de marca-passo',
      'Trombose ou problemas circulatórios severos',
      'Processos inflamatórios ou infecciosos na região tratada',
      'Lesões, feridas ou doenças de pele no local',
      'Doenças hepáticas ou renais graves',
      'Portadoras de DIU de cobre'
    ],
    image: ultrassomCeluliteImg,
    category: 'corporeal'
  },
  'radiofrequencia-corporal': {
    id: 'radiofrequencia-corporal',
    name: 'Radiofrequência Corporal',
    description: 'Calor controlado para estimular colágeno e elastina',
    longDescription: 'É aplicado glicerina na pele para facilitar o deslizamento do aplicador e a condução da energia. O aparelho emite ondas de radiofrequência que aquecem as camadas mais profundas da pele (derme) de forma controlada, este aquecimento estimula a produção de colágeno e elastina, promovendo firmeza e efeito lifting. A temperatura na pele é monitorada durante todo o procedimento para garantir segurança e eficácia. A sessão é indolor, podendo causar apenas uma sensação de calor agradável.',
    duration: '1 hora',
    price: 'R$ 200',
    benefits: [
      'Diminuição da flacidez da pele',
      'Estímulo da produção de colágeno',
      'Melhora da textura e firmeza da pele'
    ],
    procedure: [
      'Avaliação da pele e áreas',
      'Limpeza e preparação da pele',
      'Aplicação da radiofrequência',
      'Controle de temperatura',
      'Massagem pós-tratamento',
      'Aplicação de creme hidratante'
    ],
    contraindications: [
      'Gestantes e lactantes',
      'Marcapasso ou dispositivos eletrônicos implantados',
      'Portadores de DIU de cobre',
      'Inflamações, feridas ou infecções na região',
      'Trombose venosa ou problemas circulatórios graves',
      'Neoplasias malignas',
      'Doenças cardíacas descompensadas'
    ],
    image: radiofrequenciaCorporalImg,
    category: 'corporeal'
  },
  'estetica-facial': {
    id: 'estetica-facial',
    name: 'Estética Facial',
    description: 'Tratamentos personalizados para rejuvenescimento',
    longDescription: 'A estética facial engloba diversos tratamentos personalizados para rejuvenescimento, hidratação e revitalização da pele do rosto. Cada protocolo é adaptado às necessidades específicas de cada cliente.',
    duration: '60-90 minutos',
    price: 'R$ 150',
    benefits: [
      'Rejuvenesce a pele do rosto',
      'Melhora a hidratação',
      'Reduz linhas de expressão',
      'Uniformiza o tom da pele',
      'Estimula produção de colágeno',
      'Tratamento personalizado'
    ],
    procedure: [
      'Avaliação da pele e necessidades',
      'Limpeza e preparação',
      'Tratamento específico escolhido',
      'Aplicação de produtos',
      'Proteção solar',
      'Orientações para manutenção'
    ],
    contraindications: [
      'Pele muito sensível',
      'Inflamações agudas',
      'Feridas abertas',
      'Alergias a produtos',
      'Gravidez'
    ],
    image: esteticaFacialImg,
    category: 'facial'
  },
  'limpeza-pele-profunda': {
    id: 'limpeza-pele-profunda',
    name: 'Limpeza de Pele Profunda',
    description: 'Remove impurezas e renova a pele',
    longDescription: 'Procedimento para higienização profunda da pele, removendo cravos, impurezas, células mortas e excesso de oleosidade. Inclui higienização, esfoliação, emoliência, extração manual, máscara calmante e hidratação, tem em torno de 1h30 de duração.',
    duration: '1h30',
    price: 'R$ 120',
    benefits: [
      'Reduz cravos e previne acne',
      'Desobstrui poros',
      'Melhora a absorção de cosméticos',
      'Deixa a pele mais suave e uniforme',
      'Melhora a oxigenação e o viço da pele'
    ],
    procedure: [
      'Anamnese e avaliação da pele',
      'Desmaquilagem e limpeza',
      'Vaporização para abertura dos poros',
      'Extração de comedões',
      'Aplicação de produtos específicos',
      'Proteção solar'
    ],
    contraindications: [
      'Pele com lesões ou feridas abertas',
      'Acne inflamatória severa',
      'Doenças de pele infecciosas',
      'Queimaduras solares recentes'
    ],
    image: limpezaPeleImg,
    category: 'facial'
  },
  'peeling-quimico': {
    id: 'peeling-quimico',
    name: 'Peeling Químico',
    description: 'Renova a pele e clareia manchas',
    longDescription: 'Aplicação de ácidos na pele para promover a renovação celular e descamação controlada, promovendo melhora das manchas, redução de linhas finas de expressão, viço e textura da pele. Leva em torno de 1h de aplicação.',
    duration: '1 hora',
    price: 'R$ 250',
    benefits: [
      'Clareamento de manchas (melasma, hiperpigmentações pós-inflamatórias)',
      'Redução de linhas finas e rugas superficiais',
      'Melhora da textura e luminosidade',
      'Estimula a produção de colágeno',
      'Auxilia no tratamento de acne ativa e cicatrizes'
    ],
    procedure: [
      'Avaliação e escolha do ácido',
      'Limpeza e preparação',
      'Aplicação do produto',
      'Controle do tempo de ação',
      'Neutralização',
      'Proteção e orientações'
    ],
    contraindications: [
      'Pele sensível ou com dermatite ativa',
      'Gravidez e lactação (dependendo do ácido)',
      'Uso recente de isotretinoína (aguardar 6 meses)',
      'Infecções cutâneas',
      'Alergia aos componentes da fórmula'
    ],
    image: peelingQuimicoImg,
    category: 'facial'
  },
  'microagulhamento': {
    id: 'microagulhamento',
    name: 'Microagulhamento',
    description: 'Cria microcanais para absorção de ativos',
    longDescription: 'Procedimento que utiliza um equipamento com microagulhas para criar microperfurações controladas na pele, facilitando a permeação de ativos para estimular a produção de colágeno e elastina. Tem em torno de 1h de duração.',
    duration: '1 hora',
    price: 'R$ 300',
    benefits: [
      'Estimula a renovação celular e produção de colágeno',
      'Melhora textura e firmeza da pele',
      'Reduz cicatrizes de acne',
      'Ameniza linhas finas e rugas',
      'Clareia manchas e uniformiza o tom da pele',
      'Diminui poros dilatados'
    ],
    procedure: [
      'Avaliação da pele',
      'Limpeza e preparação',
      'Aplicação de anestésico',
      'Microagulhamento',
      'Aplicação de ativos',
      'Proteção e orientações'
    ],
    contraindications: [
      'Infecções ou inflamações na pele no local de aplicação',
      'Herpes ativa',
      'Uso de isotretinoína (aguardar no mínimo 6 meses após uso)',
      'Diabetes descompensada',
      'Problemas de cicatrização ou queloides',
      'Gravidez'
    ],
    image: microagulhamentoImg,
    category: 'facial'
  },
  'radiofrequencia-facial': {
    id: 'radiofrequencia-facial',
    name: 'Radiofrequência Facial',
    description: 'Calor para estimular colágeno e firmeza',
    longDescription: 'Tratamento que utiliza ondas de radiofrequência para aquecer as camadas mais profundas da pele, estimulando a produção de colágeno e elastina e auxilia no remodelamento facial. Pode ser associada a outros procedimentos para potencializar resultados. Em torno de 1h de duração.',
    duration: '1 hora',
    price: 'R$ 220',
    benefits: [
      'Melhora a firmeza e sustentação da pele',
      'Reduz a flacidez facial',
      'Ameniza rugas e linhas de expressão',
      'Estimula a circulação sanguínea',
      'Promove um "efeito lifting" sem cirurgia',
      'Auxilia na melhora do contorno facial'
    ],
    procedure: [
      'Avaliação da pele',
      'Limpeza e preparação',
      'Aplicação da radiofrequência',
      'Controle de temperatura',
      'Aplicação de creme',
      'Proteção solar'
    ],
    contraindications: [
      'Gravidez',
      'Presença de marca-passo ou próteses metálicas na área tratada',
      'Doenças autoimunes ativas',
      'Lesões ou feridas abertas na pele',
      'Câncer ou histórico recente',
      'Infecções cutâneas'
    ],
    image: radiofrequenciaFacialImg,
    category: 'facial'
  }
};

const ServiceDetail: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = serviceId ? servicesData[serviceId] : null;

  if (!service) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-light text-slate-800 mb-4">Serviço não encontrado</h1>
          <Link to="/" className="text-purple-600 hover:text-purple-700 font-medium">
            Voltar para a página inicial
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-100 sticky top-0 z-40">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-brand-ui-element hover:text-brand-gold font-medium">
              ← Voltar para serviços
            </Link>
            <div className="text-sm text-slate-500">
              {service.category === 'massage' && 'Massagens'}
              {service.category === 'corporeal' && 'Tratamentos Corporais'}
              {service.category === 'facial' && 'Estética Facial'}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12 max-w-6xl">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="inline-flex items-center gap-2 bg-brand-ui-element/10 text-brand-ui-element px-3 py-1 rounded-full text-sm font-medium mb-4">
              {service.category === 'massage' && '💆‍♀️ Massagem'}
              {service.category === 'corporeal' && '💪 Corporal'}
              {service.category === 'facial' && '✨ Facial'}
            </div>
            <h1 className="text-5xl font-light text-brand-text-primary mb-6 tracking-tight">
              {service.name}
            </h1>
            <p className="text-xl text-brand-text-secondary mb-6 leading-relaxed">
              {service.longDescription}
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white px-4 py-2 rounded-full border border-brand-ui-element/20 text-brand-text-primary">
                <span className="font-medium">⏱️</span> {service.duration}
              </div>
              {service.price && (
                <div className="bg-brand-ui-element/10 px-4 py-2 rounded-full text-brand-ui-element font-medium">
                  <span>💰</span> {service.price}
                </div>
              )}
            </div>
          </div>
          <div className="relative">
            <img 
              src={service.image} 
              alt={service.name}
              className="w-full h-96 object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Benefits */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-brand-ui-element/20">
              <h2 className="text-2xl font-medium text-brand-text-primary mb-6 flex items-center gap-2">
                <span className="text-brand-green">✓</span>
                Benefícios
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-brand-green rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-brand-text-secondary">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Procedure */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-brand-ui-element/20">
              <h2 className="text-2xl font-medium text-brand-text-primary mb-6 flex items-center gap-2">
                <span className="text-brand-ui-element">📋</span>
                Como é realizado
              </h2>
              <div className="space-y-4">
                {service.procedure.map((step, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-brand-ui-element/10 text-brand-ui-element rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0">
                      {index + 1}
                    </div>
                    <span className="text-brand-text-secondary">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contraindications */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-brand-ui-element/20">
              <h3 className="text-lg font-medium text-brand-text-primary mb-4 flex items-center gap-2">
                <span className="text-red-500">⚠️</span>
                Contraindicações
              </h3>
              <div className="space-y-2">
                {service.contraindications.map((contraindication, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span className="text-sm text-brand-text-secondary">{contraindication}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-br from-brand-ui-element/5 to-brand-gold/5 rounded-2xl p-6 border border-brand-ui-element/20">
              <h3 className="text-lg font-medium text-brand-text-primary mb-3">
                Agende sua sessão
              </h3>
              <p className="text-brand-text-secondary text-sm mb-4">
                Entre em contato para agendar uma consulta e conhecer melhor este tratamento.
              </p>
              <button className="w-full bg-brand-ui-element text-white py-3 px-4 rounded-xl font-medium hover:bg-brand-gold transition-colors">
                Agendar Consulta
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
