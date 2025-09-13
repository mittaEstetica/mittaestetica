import React from 'react';
import { Link } from 'react-router-dom';
import MileneImg from '../../assets/milene.jpeg';
import TailaImg from '../../assets/taila.jpeg';

const teamMembers = [
  {
    name: 'Milene Favero',
    age: 25,
    img: MileneImg,
    role: 'Esteticista',
    specialty: 'Estética Facial e Corporal',
    bio: (
      <>
        <p className="mb-2">Graduada em <b>Estética e Cosmética</b> pela FADERGS</p>
        <p className="mb-2">Pós-graduada em <b>Estética Clínica e de Precisão</b> pela IPGS</p>
        <p className="mb-2 font-medium text-slate-700">Cursos:</p>
        <ul className="list-disc list-inside text-sm text-slate-600 space-y-1">
          <li>Master em Peelings - Belart</li>
          <li>Técnicas Avançadas de Limpeza de Pele - IJT Academy</li>
          <li>Gerenciamento de Hiperpigmentação Periorbital - Akdemica</li>
        </ul>
      </>
    )
  },
  {
    name: 'Taila Rosa',
    age: 24,
    img: TailaImg,
    role: 'Esteticista',
    specialty: 'Drenagem e Massoterapia',
    bio: (
      <>
        <p className="mb-2">Graduada em <b>Estética e Cosmética</b> pela FADERGS</p>
        <p className="mb-2 font-medium text-slate-700">Cursos:</p>
        <ul className="list-disc list-inside text-sm text-slate-600 space-y-1">
          <li>Cosmetologia - Abed</li>
          <li>Drenagem Linfática Manual - Pré e Pós Operatório de Cirurgias Estéticas - Instituto Lis</li>
          <li>Tricologia Capilar - CF cursos de formação</li>
        </ul>
      </>
    )
  }
];

const Team = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-slate-100 sticky top-0 z-40">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-brand-ui-element hover:text-brand-gold font-medium flex items-center gap-2 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Voltar para início
            </Link>
            <div className="text-sm text-slate-500 font-medium">
              Nossa Equipe
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12 max-w-7xl">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-brand-ui-element/10 text-brand-ui-element px-4 py-2 rounded-full text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            Equipe Qualificada
          </div>
          <h1 className="text-5xl font-light text-slate-800 mb-6 tracking-tight">
            Quem cuida de você
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Conheça os profissionais qualificados e experientes que dedicam seu trabalho ao seu bem-estar e beleza.
          </p>
        </div>

        {/* Team Grid */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
          {teamMembers.map((member, index) => (
            <div 
              key={member.name} 
              className={`group relative bg-white rounded-2xl shadow-sm p-8 border border-slate-200 h-full transition-all duration-300 hover:shadow-md ${
                member.isPlaceholder ? 'opacity-75' : ''
              }`}
            >
              
              {/* Profile Image */}
              <div className="relative mb-6">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden flex items-center justify-center bg-slate-50">
                  {member.img ? (
                    <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full bg-slate-100 rounded-full flex items-center justify-center">
                      <svg className="w-12 h-12 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 className="text-xl font-semibold text-slate-800 mb-2">{member.name}</h3>
                <div className="text-sm text-brand-ui-element mb-1 font-medium">{member.role}</div>
                <div className="text-xs text-slate-500 mb-4">{member.specialty}</div>
                {member.age && (
                  <div className="text-xs text-slate-400 mb-4">{member.age} anos</div>
                )}
                <div className="text-slate-600 text-xs leading-relaxed text-left">
                  {member.bio}
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-br from-brand-ui-element/5 via-brand-gold/5 to-brand-ui-element/5 rounded-3xl p-12 border border-brand-ui-element/20 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-ui-element/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-brand-gold/10 rounded-full translate-y-12 -translate-x-12"></div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-ui-element to-brand-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-3xl font-medium text-slate-800 mb-4">
                Quer conhecer nossa equipe pessoalmente?
              </h3>
              <p className="text-slate-600 mb-8 max-w-2xl mx-auto text-lg">
                Agende uma consulta e conheça nossos profissionais qualificados. Estamos prontos para cuidar do seu bem-estar com dedicação e expertise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/555192729544?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-brand-ui-element text-white py-4 px-8 rounded-xl font-medium hover:bg-brand-gold transition-all duration-200 hover:scale-105"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  Agendar Consulta
                </a>
                <Link
                  to="/"
                  className="inline-flex items-center justify-center gap-2 bg-white text-brand-ui-element py-4 px-8 rounded-xl font-medium border-2 border-brand-ui-element/30 hover:bg-brand-ui-element/5 transition-all duration-200 hover:scale-105"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  Ver Serviços
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
