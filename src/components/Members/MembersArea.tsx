import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { PlayCircle, CheckCircle2, BookOpen, Video, LogOut } from 'lucide-react';

const COURSE_MODULES = [
  {
    id: 'm1',
    title: 'Módulo 1: Introdução à Limpeza de Pele',
    lessons: [
      {
        id: 'l1',
        title: 'Bem-vinda à Mentoria',
        description: 'Nesta aula inaugural, você vai entender os princípios da limpeza de pele, nossa filosofia na Mitta Estética e o que esperar deste curso.',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
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
  }
];

const ARTICLES = [
  {
    id: 'a1',
    title: 'Guia de Princípios Ativos',
    excerpt: 'Um resumo rápido sobre os principais ácidos e vitaminas utilizados na estética facial e suas indicações.',
    date: '10 de Mai, 2026',
    readTime: '5 min'
  },
  {
    id: 'a2',
    title: 'Como montar sua Ficha de Anamnese',
    excerpt: 'Pontos cruciais que você não pode esquecer na hora de avaliar sua paciente pela primeira vez.',
    date: '12 de Mai, 2026',
    readTime: '8 min'
  }
];

const MembersArea = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'curso' | 'artigos'>('curso');
  const [activeLesson, setActiveLesson] = useState(COURSE_MODULES[0].lessons[0]);
  const [user, setUser] = useState<{name: string, email: string} | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('member_token');
    const userData = localStorage.getItem('member_user');
    
    if (!token || !userData) {
      navigate('/membros/login');
    } else {
      setUser(JSON.parse(userData));
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('member_token');
    localStorage.removeItem('member_user');
    navigate('/membros/login');
  };

  return (
    <div className="min-h-screen bg-brand-background flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="mb-8 flex flex-col md:flex-row md:justify-between md:items-end gap-4 border-b border-slate-200 pb-6">
          <div>
            <h1 className="text-3xl font-bold text-slate-800">Área de Membros</h1>
            <p className="text-slate-600 mt-2">Bem-vinda de volta, {user?.name?.split(' ')[0] || 'Aluna'}!</p>
          </div>
          
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-slate-500 hover:text-red-500 transition-colors text-sm font-medium"
          >
            <LogOut className="w-4 h-4" />
            Sair da conta
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setActiveTab('curso')}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-colors ${
              activeTab === 'curso' 
                ? 'bg-brand-ui-element text-white shadow-md' 
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            <Video className="w-5 h-5" />
            Curso de Limpeza de Pele
          </button>
          <button
            onClick={() => setActiveTab('artigos')}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-colors ${
              activeTab === 'artigos' 
                ? 'bg-brand-ui-element text-white shadow-md' 
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            <BookOpen className="w-5 h-5" />
            Artigos e Materiais
          </button>
        </div>

        {/* Tab Content: Curso */}
        {activeTab === 'curso' && (
          <div className="flex flex-col lg:flex-row gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
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
                <div className="prose prose-slate max-w-none text-slate-600">
                  <p>{activeLesson.description}</p>
                </div>
              </div>
            </div>

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
                                  <span className="text-xs text-slate-400 mt-1 block">
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
        )}

        {/* Tab Content: Artigos */}
        {activeTab === 'artigos' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {ARTICLES.map((article) => (
              <div key={article.id} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow group cursor-pointer">
                <div className="flex items-center gap-2 text-xs font-medium text-brand-ui-element mb-3">
                  <BookOpen className="w-4 h-4" />
                  <span>Artigo</span>
                  <span className="text-slate-300">•</span>
                  <span className="text-slate-500">{article.readTime} de leitura</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2 group-hover:text-brand-ui-element transition-colors">
                  {article.title}
                </h3>
                <p className="text-slate-600 text-sm mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                <div className="flex justify-between items-center text-xs text-slate-400 border-t border-slate-100 pt-4 mt-auto">
                  <span>{article.date}</span>
                  <span className="font-medium text-brand-ui-element opacity-0 group-hover:opacity-100 transition-opacity">
                    Ler mais →
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default MembersArea;
