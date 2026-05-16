import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import mittaLogo from '../../assets/mitta.svg';

// Initialize default allowed emails if not present
const initializeAllowedEmails = () => {
  const stored = localStorage.getItem('mentoria_allowed_emails');
  if (!stored) {
    const defaultEmails = ['mitta.estetica@gmail.com', 'camila@mittaestetica.com'];
    localStorage.setItem('mentoria_allowed_emails', JSON.stringify(defaultEmails));
    return defaultEmails;
  }
  return JSON.parse(stored);
};

const MentoriaLogin = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    setError('');

    const formattedEmail = email.trim().toLowerCase();
    const allowedEmails = initializeAllowedEmails();

    if (allowedEmails.includes(formattedEmail)) {
      localStorage.setItem('mentoria_auth', formattedEmail);
      navigate('/mentoria');
    } else {
      setError('E-mail não autorizado para acessar a mentoria. Por favor, verifique ou contate o suporte.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-background px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 border border-slate-100">
        <div className="text-center mb-8">
          <img src={mittaLogo} alt="Mitta Estética" className="h-12 mx-auto mb-6" />
          <h1 className="text-2xl font-bold text-slate-800">Acesso à Mentoria</h1>
          <p className="text-slate-500 mt-2">Curso de Limpeza de Pele</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
              Seu E-mail de Acesso
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="exemplo@email.com"
              required
              className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary transition-colors"
            />
          </div>

          {error && (
            <div className="p-3 bg-red-50 text-red-600 rounded-lg text-sm text-center">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="w-full py-3 px-4 bg-brand-ui-element text-white rounded-xl font-medium hover:bg-brand-gold transition-colors duration-200"
          >
            Entrar
          </button>
        </form>

        <div className="mt-8 text-center text-sm text-slate-500">
          <a href="/" className="hover:text-brand-primary transition-colors">
            Voltar para o site principal
          </a>
        </div>
      </div>
    </div>
  );
};

export default MentoriaLogin;
