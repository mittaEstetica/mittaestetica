import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import mittaLogo from '../../assets/mitta.svg';

const WHATSAPP_URL = 'https://wa.me/555192729544?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta.';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => { if (e.key === 'Escape') closeMenu(); };
    if (isMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-100">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/">
              <img src={mittaLogo} alt="Mitta Logo" className="h-12 mr-3" />
            </Link>
          </div>
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <a href="#home" className="font-medium text-slate-700 hover:text-slate-900 transition-all duration-200">Início</a>
              </li>
              <li>
                <a href="#services" className="font-medium text-slate-700 hover:text-slate-900 transition-all duration-200">Serviços</a>
              </li>
              <li>
                <Link to="/equipe" className="font-medium text-slate-700 hover:text-slate-900 transition-all duration-200">Equipe</Link>
              </li>
              <li>
                <a href="#about" className="font-medium text-slate-700 hover:text-slate-900 transition-all duration-200">Sobre</a>
              </li>
              <li>
                <a href="#contact" className="font-medium text-slate-700 hover:text-slate-900 transition-all duration-200">Contato</a>
              </li>
            </ul>
          </nav>
          <div className="flex items-center space-x-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:block px-6 py-2 bg-brand-ui-element text-white rounded-full font-medium hover:bg-brand-header-end transition-all duration-200"
            >
              Agendar
            </a>
            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setIsMenuOpen(true)}
              className="md:hidden p-2 rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors"
              aria-label="Abrir menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu: backdrop */}
      <div
        onClick={closeMenu}
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity md:hidden ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        aria-hidden="true"
      />

      {/* Mobile menu: side panel */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-72 max-w-[85vw] bg-white shadow-xl z-50 flex flex-col transition-transform duration-300 md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex justify-between items-center p-4 border-b border-slate-100">
          <span className="font-medium text-slate-800">Menu</span>
          <button
            type="button"
            onClick={closeMenu}
            className="p-2 rounded-lg hover:bg-slate-100 transition-colors"
            aria-label="Fechar menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="flex flex-col p-4 gap-1">
          <a href="#home" onClick={closeMenu} className="py-3 px-3 font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors">Início</a>
          <a href="#services" onClick={closeMenu} className="py-3 px-3 font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors">Serviços</a>
          <Link to="/equipe" onClick={closeMenu} className="py-3 px-3 font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors">Equipe</Link>
          <a href="#about" onClick={closeMenu} className="py-3 px-3 font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors">Sobre</a>
          <a href="#contact" onClick={closeMenu} className="py-3 px-3 font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors">Contato</a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="mt-4 py-3 px-4 bg-brand-ui-element text-white rounded-xl font-medium text-center hover:bg-brand-gold transition-colors"
          >
            Agendar no WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
