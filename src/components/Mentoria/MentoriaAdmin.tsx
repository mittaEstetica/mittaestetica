import { useState, useEffect, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Trash2, UserPlus } from 'lucide-react';

const MentoriaAdmin = () => {
  const navigate = useNavigate();
  const [emails, setEmails] = useState<string[]>([]);
  const [newEmail, setNewEmail] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const auth = localStorage.getItem('mentoria_auth');
    if (auth !== 'mitta.estetica@gmail.com') {
      navigate('/mentoria');
    } else {
      const stored = localStorage.getItem('mentoria_allowed_emails');
      if (stored) {
        setEmails(JSON.parse(stored));
      }
    }
  }, [navigate]);

  const handleAddEmail = (e: FormEvent) => {
    e.preventDefault();
    setError('');

    const formattedEmail = newEmail.trim().toLowerCase();
    
    if (!formattedEmail) return;

    if (emails.includes(formattedEmail)) {
      setError('Este e-mail já está na lista de permitidos.');
      return;
    }

    const updatedEmails = [...emails, formattedEmail];
    setEmails(updatedEmails);
    localStorage.setItem('mentoria_allowed_emails', JSON.stringify(updatedEmails));
    setNewEmail('');
  };

  const handleRemoveEmail = (emailToRemove: string) => {
    if (emailToRemove === 'mitta.estetica@gmail.com') {
      setError('Você não pode remover o e-mail administrador.');
      return;
    }
    
    const updatedEmails = emails.filter((e) => e !== emailToRemove);
    setEmails(updatedEmails);
    localStorage.setItem('mentoria_allowed_emails', JSON.stringify(updatedEmails));
  };

  return (
    <div className="min-h-screen bg-brand-background flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full">
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-slate-800">Gerenciamento de Acesso</h1>
            <p className="text-slate-600 mt-2">Controle quem tem acesso à Mentoria.</p>
          </div>
          <button 
            onClick={() => navigate('/mentoria')}
            className="text-brand-ui-element hover:text-brand-gold font-medium transition-colors"
          >
            Voltar ao Curso
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 md:p-8">
          <h2 className="text-xl font-semibold text-slate-800 mb-6 flex items-center gap-2">
            <UserPlus className="w-5 h-5 text-brand-ui-element" />
            Adicionar Novo E-mail
          </h2>
          
          <form onSubmit={handleAddEmail} className="flex gap-4 mb-8">
            <input
              type="email"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
              placeholder="Digite o e-mail do aluno..."
              required
              className="flex-grow px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-ui-element/50 focus:border-brand-ui-element transition-colors"
            />
            <button
              type="submit"
              className="py-3 px-6 bg-brand-ui-element text-white rounded-xl font-medium hover:bg-brand-gold transition-colors duration-200 whitespace-nowrap"
            >
              Adicionar
            </button>
          </form>

          {error && (
            <div className="mb-6 p-3 bg-red-50 text-red-600 rounded-lg text-sm">
              {error}
            </div>
          )}

          <h3 className="font-semibold text-slate-700 mb-4 border-b border-slate-100 pb-2">
            E-mails Autorizados ({emails.length})
          </h3>
          
          <ul className="divide-y divide-slate-100">
            {emails.map((email) => (
              <li key={email} className="py-4 flex justify-between items-center">
                <span className="text-slate-800 font-medium">{email}</span>
                {email !== 'mitta.estetica@gmail.com' && (
                  <button
                    onClick={() => handleRemoveEmail(email)}
                    className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                    title="Remover acesso"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                )}
                {email === 'mitta.estetica@gmail.com' && (
                  <span className="text-xs bg-slate-100 text-slate-500 px-2 py-1 rounded-full font-medium">
                    Admin
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MentoriaAdmin;
