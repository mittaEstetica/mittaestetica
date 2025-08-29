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
    longDescription: 'A massagem relaxante é uma técnica terapêutica que utiliza movimentos suaves e rítmicos para promover o relaxamento muscular e mental. Ideal para aliviar o estresse do dia a dia, melhorar a qualidade do sono e proporcionar bem-estar geral.',
    duration: '60-90 minutos',
    price: 'R$ 120',
    benefits: [
      'Reduz o estresse e ansiedade',
      'Alivia tensões musculares',
      'Melhora a qualidade do sono',
      'Promove relaxamento mental',
      'Aumenta a circulação sanguínea',
      'Reduz dores de cabeça tensionais'
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
      'Feridas abertas na pele',
      'Inflamações agudas',
      'Febre alta',
      'Trombose venosa',
      'Primeiro trimestre de gravidez'
    ],
    image: massagemRelaxanteImg,
    category: 'massage'
  },
  'massagem-terapeutica': {
    id: 'massagem-terapeutica',
    name: 'Massagem Terapêutica',
    description: 'Focada em dores musculares e pontos de tensão',
    longDescription: 'A massagem terapêutica é uma técnica especializada que visa tratar problemas musculares específicos, aliviar dores crônicas e restaurar a função muscular. Utiliza diferentes técnicas como pressão profunda, alongamento e mobilização articular.',
    duration: '60-75 minutos',
    price: 'R$ 140',
    benefits: [
      'Alivia dores musculares crônicas',
      'Melhora a mobilidade articular',
      'Reduz inflamações musculares',
      'Acelera recuperação de lesões',
      'Melhora a postura',
      'Reduz tensões específicas'
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
      'Lesões agudas recentes',
      'Fraturas não consolidadas',
      'Inflamações agudas',
      'Tumores malignos',
      'Doenças infecciosas da pele'
    ],
    image: massagemTerapeuticaImg,
    category: 'massage'
  },
  'drenagem-linfatica-manual': {
    id: 'drenagem-linfatica-manual',
    name: 'Drenagem Linfática Manual',
    description: 'Movimentos leves que ativam o sistema linfático',
    longDescription: 'A drenagem linfática manual é uma técnica suave e rítmica que estimula o sistema linfático, promovendo a eliminação de toxinas e líquidos retidos. Excelente para reduzir inchaços, melhorar a circulação e o sistema imunológico.',
    duration: '60 minutos',
    price: 'R$ 130',
    benefits: [
      'Reduz inchaços e edemas',
      'Melhora a circulação linfática',
      'Fortalece o sistema imunológico',
      'Acelera recuperação pós-cirúrgica',
      'Reduz celulite',
      'Promove relaxamento profundo'
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
      'Infecções agudas',
      'Trombose venosa',
      'Insuficiência cardíaca',
      'Hipertensão arterial não controlada',
      'Câncer ativo'
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
    longDescription: 'O ultrassom para gordura localizada utiliza ondas sonoras de alta frequência para quebrar as células de gordura, facilitando sua eliminação natural pelo organismo. É um tratamento não invasivo e eficaz para áreas específicas.',
    duration: '30-45 minutos',
    price: 'R$ 180',
    benefits: [
      'Reduz gordura localizada',
      'Não invasivo e indolor',
      'Melhora o contorno corporal',
      'Estimula o metabolismo local',
      'Resultados visíveis em poucas sessões',
      'Sem tempo de recuperação'
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
      'Gravidez',
      'Pacemaker',
      'Implantes metálicos',
      'Doenças cardíacas',
      'Tumores na região'
    ],
    image: ultrassomGorduraImg,
    category: 'corporeal'
  },
  'ultrassom-celulite': {
    id: 'ultrassom-celulite',
    name: 'Ultrassom para Celulite',
    description: 'Reduz celulite inflamada e melhora a circulação',
    longDescription: 'O ultrassom para celulite é um tratamento específico que utiliza ondas sonoras para quebrar os nódulos de gordura e fibrose que formam a celulite, melhorando a textura da pele e reduzindo o aspecto casca de laranja.',
    duration: '30-45 minutos',
    price: 'R$ 160',
    benefits: [
      'Reduz o aspecto da celulite',
      'Melhora a textura da pele',
      'Ativa a circulação local',
      'Quebra nódulos de fibrose',
      'Resultados progressivos',
      'Tratamento localizado'
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
      'Gravidez',
      'Pele lesionada',
      'Inflamações agudas',
      'Doenças circulatórias graves',
      'Tumores na região'
    ],
    image: ultrassomCeluliteImg,
    category: 'corporeal'
  },
  'radiofrequencia-corporal': {
    id: 'radiofrequencia-corporal',
    name: 'Radiofrequência Corporal',
    description: 'Calor controlado para estimular colágeno e elastina',
    longDescription: 'A radiofrequência corporal utiliza ondas eletromagnéticas para gerar calor controlado na pele, estimulando a produção de colágeno e elastina. Excelente para combater flacidez, celulite e melhorar a textura da pele.',
    duration: '45-60 minutos',
    price: 'R$ 200',
    benefits: [
      'Estimula produção de colágeno',
      'Reduz flacidez cutânea',
      'Melhora a textura da pele',
      'Reduz celulite',
      'Rejuvenesce a pele',
      'Resultados duradouros'
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
      'Gravidez',
      'Pacemaker',
      'Implantes metálicos',
      'Doenças cardíacas',
      'Pele muito sensível'
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
    longDescription: 'A limpeza de pele profunda é um tratamento completo que remove cravos, acne e outras impurezas, renovando a pele e melhorando sua textura. É fundamental para manter a saúde e beleza da pele.',
    duration: '60-90 minutos',
    price: 'R$ 120',
    benefits: [
      'Remove cravos e acne',
      'Renova a pele',
      'Melhora a textura',
      'Desobstrui poros',
      'Previne problemas cutâneos',
      'Pele mais saudável'
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
      'Pele muito sensível',
      'Inflamações agudas',
      'Feridas abertas',
      'Alergias a produtos',
      'Gravidez'
    ],
    image: limpezaPeleImg,
    category: 'facial'
  },
  'peeling-quimico': {
    id: 'peeling-quimico',
    name: 'Peeling Químico',
    description: 'Renova a pele e clareia manchas',
    longDescription: 'O peeling químico é um tratamento que utiliza ácidos específicos para renovar a pele, clarear manchas, tratar acne e estimular a produção de colágeno. O tipo de ácido é escolhido conforme a necessidade da pele.',
    duration: '45-60 minutos',
    price: 'R$ 250',
    benefits: [
      'Renova a pele',
      'Clareia manchas',
      'Trata acne',
      'Reduz linhas finas',
      'Estimula colágeno',
      'Uniformiza o tom'
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
      'Pele muito sensível',
      'Gravidez',
      'Lactação',
      'Exposição solar recente',
      'Histórico de queloides'
    ],
    image: peelingQuimicoImg,
    category: 'facial'
  },
  'microagulhamento': {
    id: 'microagulhamento',
    name: 'Microagulhamento',
    description: 'Cria microcanais para absorção de ativos',
    longDescription: 'O microagulhamento utiliza pequenas agulhas para criar microcanais na pele, facilitando a absorção de ativos e estimulando a produção de colágeno. Excelente para tratar manchas, poros e linhas finas.',
    duration: '60-75 minutos',
    price: 'R$ 300',
    benefits: [
      'Trata manchas',
      'Reduz poros',
      'Melhora linhas finas',
      'Estimula colágeno',
      'Absorção de ativos',
      'Pele mais firme'
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
      'Pele muito sensível',
      'Gravidez',
      'Lactação',
      'Histórico de queloides',
      'Doenças autoimunes'
    ],
    image: microagulhamentoImg,
    category: 'facial'
  },
  'radiofrequencia-facial': {
    id: 'radiofrequencia-facial',
    name: 'Radiofrequência Facial',
    description: 'Calor para estimular colágeno e firmeza',
    longDescription: 'A radiofrequência facial utiliza calor controlado para estimular a produção de colágeno, melhorar a firmeza da pele e reduzir linhas de expressão. É um tratamento não invasivo e eficaz para rejuvenescimento.',
    duration: '45-60 minutos',
    price: 'R$ 220',
    benefits: [
      'Estimula colágeno',
      'Melhora a firmeza',
      'Reduz linhas finas',
      'Rejuvenesce a pele',
      'Não invasivo',
      'Resultados duradouros'
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
      'Pele muito sensível',
      'Pacemaker',
      'Implantes metálicos',
      'Doenças cardíacas',
      'Gravidez'
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
            <Link to="/" className="text-purple-600 hover:text-purple-700 font-medium">
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
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
              {service.category === 'massage' && '💆‍♀️ Massagem'}
              {service.category === 'corporeal' && '💪 Corporal'}
              {service.category === 'facial' && '✨ Facial'}
            </div>
            <h1 className="text-5xl font-light text-slate-800 mb-6 tracking-tight">
              {service.name}
            </h1>
            <p className="text-xl text-slate-600 mb-6 leading-relaxed">
              {service.longDescription}
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white px-4 py-2 rounded-full border border-slate-200 text-slate-700">
                <span className="font-medium">⏱️</span> {service.duration}
              </div>
              {service.price && (
                <div className="bg-purple-100 px-4 py-2 rounded-full text-purple-700 font-medium">
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
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
              <h2 className="text-2xl font-medium text-slate-800 mb-6 flex items-center gap-2">
                <span className="text-green-500">✓</span>
                Benefícios
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-slate-600">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Procedure */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
              <h2 className="text-2xl font-medium text-slate-800 mb-6 flex items-center gap-2">
                <span className="text-blue-500">📋</span>
                Como é realizado
              </h2>
              <div className="space-y-4">
                {service.procedure.map((step, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0">
                      {index + 1}
                    </div>
                    <span className="text-slate-600">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contraindications */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
              <h3 className="text-lg font-medium text-slate-800 mb-4 flex items-center gap-2">
                <span className="text-red-500">⚠️</span>
                Contraindicações
              </h3>
              <div className="space-y-2">
                {service.contraindications.map((contraindication, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span className="text-sm text-slate-600">{contraindication}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-100">
              <h3 className="text-lg font-medium text-slate-800 mb-3">
                Agende sua sessão
              </h3>
              <p className="text-slate-600 text-sm mb-4">
                Entre em contato para agendar uma consulta e conhecer melhor este tratamento.
              </p>
              <button className="w-full bg-purple-600 text-white py-3 px-4 rounded-xl font-medium hover:bg-purple-700 transition-colors">
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
