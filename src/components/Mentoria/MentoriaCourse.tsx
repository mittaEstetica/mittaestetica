import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { PlayCircle, CheckCircle2, Lock } from 'lucide-react';

const COURSE_MODULES = [
  {
    id: 'm1',
    title: 'Módulo 1: Introdução à Limpeza de Pele',
    lessons: [
      {
        id: 'l1',
        title: 'Bem-vinda à Mentoria',
        description: 'Nesta aula inaugural, você vai entender os princípios da limpeza de pele, nossa filosofia na Mitta Estética e o que esperar deste curso.',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder
        duration: '15 min'
      },
      {
        id: 'l2',
        title: 'Anatomia Básica da Pele',
        description: 'Entenda as camadas da pele, os tipos cutâneos e como identificar as principais necessidades de cada paciente.',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        duration: '25 min'
      }
    ]
  },
  {
    id: 'm2',
    title: 'Módulo 2: Preparação e Biossegurança',
    lessons: [
      {
        id: 'l3',
        title: 'Materiais e EPIs',
        description: 'Tudo o que você precisa para montar sua maca com segurança e higiene.',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        duration: '20 min'
      },
      {
        id: 'l4',
        title: 'Ficha de Anamnese',
        description: 'Como conduzir uma avaliação eficiente e evitar intercorrências.',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        duration: '30 min'
      }
    ]
  },
  {
    id: 'm3',
    title: 'Módulo 3: Passo a Passo Prático',
    lessons: [
      {
        id: 'l5',
        title: 'Higienização e Esfoliação',
        description: 'Preparo da pele para receber os emolientes e facilitar a extração.',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        duration: '18 min'
      },
      {
        id: 'l6',
        title: 'Emoliência e Extração na Prática',
        description: 'Técnicas manuais e uso de aparelhos para uma extração profunda e sem dor.',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        duration: '45 min'
      }
    ]
  }
];

const MentoriaCourse = () => {
  const navigate = useNavigate();
  const [activeLesson, setActiveLesson] = useState(COURSE_MODULES[0].lessons[0]);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem('mentoria_auth');
    if (!auth) {
      navigate('/mentoria/login');
    } else if (auth === 'mitta.estetica@gmail.com') {
      setIsAdmin(true);
    }
  }, [navigate]);

  return (
    <div className="min-h-screen bg-brand-background flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="mb-8 flex flex-col md:flex-row md:justify-between md:items-end gap-4">
          <div>
            <h1 className="text-3xl font-bold text-slate-800">Mentoria: Limpeza de Pele Mitta</h1>
            <p className="text-slate-600 mt-2">Aprenda o protocolo exclusivo de limpeza de pele da Mitta Estética.</p>
          </div>
          {isAdmin && (
            <button
              onClick={() => navigate('/mentoria/admin')}
              className="py-2 px-4 bg-slate-800 text-white rounded-lg font-medium hover:bg-slate-700 transition-colors flex items-center gap-2 text-sm"
            >
              <Lock className="w-4 h-4" />
              Gerenciar Acessos
            </button>
          )}
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content Area (Video & Info) */}
          <div className="lg:w-2/3 flex flex-col gap-6">
            <div className="bg-black aspect-video rounded-2xl overflow-hidden shadow-lg relative">
              <iframe
                src={activeLesson.videoUrl}
                title={activeLesson.title}
                className="w-full h-full absolute top-0 left-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-100">
              <h2 className="text-2xl font-semibold text-slate-800 mb-4">{activeLesson.title}</h2>
              <div className="prose prose-slate max-w-none">
                <p className="text-slate-600 text-lg leading-relaxed">
                  {activeLesson.description}
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar (Modules & Lessons) */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden sticky top-28">
              <div className="p-4 border-b border-slate-100 bg-slate-50">
                <h3 className="font-semibold text-slate-800">Conteúdo do Curso</h3>
              </div>
              <div className="max-h-[600px] overflow-y-auto">
                {COURSE_MODULES.map((module) => (
                  <div key={module.id} className="border-b border-slate-100 last:border-0">
                    <div className="p-4 bg-slate-50">
                      <h4 className="font-medium text-slate-800 text-sm">{module.title}</h4>
                    </div>
                    <ul className="divide-y divide-slate-100">
                      {module.lessons.map((lesson) => {
                        const isActive = activeLesson.id === lesson.id;
                        return (
                          <li key={lesson.id}>
                            <button
                              onClick={() => setActiveLesson(lesson)}
                              className={`w-full text-left px-4 py-3 flex items-start gap-3 transition-colors ${
                                isActive ? 'bg-brand-primary/5' : 'hover:bg-slate-50'
                              }`}
                            >
                              <div className="mt-0.5">
                                {isActive ? (
                                  <PlayCircle className="w-5 h-5 text-brand-ui-element" />
                                ) : (
                                  <CheckCircle2 className="w-5 h-5 text-slate-300" />
                                )}
                              </div>
                              <div>
                                <span className={`block text-sm font-medium ${isActive ? 'text-brand-ui-element' : 'text-slate-700'}`}>
                                  {lesson.title}
                                </span>
                                <span className="text-xs text-slate-400 mt-1 flex items-center gap-1">
                                  {lesson.duration}
                                </span>
                              </div>
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MentoriaCourse;
