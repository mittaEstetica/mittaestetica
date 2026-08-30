import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import mittaLogo from '../../assets/mitta.svg';

const WHATSAPP_URL = 'https://wa.me/555192729544?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta.';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#EAE5DF] py-4 shadow-xs' 
        : 'bg-[#FAF8F5]/80 backdrop-blur-xs border-b border-[#EAE5DF]/60 py-6'
    }`}>
      <div className="container mx-auto px-8 max-w-7xl">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={mittaLogo} 
              alt="Mitta Estética" 
              className="h-9 md:h-10 w-auto tracking-widest transition-opacity hover:opacity-80" 
            />
          </Link>

          {/* Navigation Links */}
          <nav className="hidden lg:block">
            <ul className="flex items-center space-x-10 text-[11px] font-medium uppercase tracking-[0.2em] text-[#57534E]">
              <li>
                <a href="#home" className="hover:text-[#B89B72] transition-colors duration-300">
                  Início
                </a>
              </li>
              <li>
                <a href="#founders" className="hover:text-[#B89B72] transition-colors duration-300">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#B89B72] transition-colors duration-300">
                  Procedimentos
                </a>
              </li>
              <li>
                <Link to="/equipe" className="hover:text-[#B89B72] transition-colors duration-300">
                  Equipe
                </Link>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#B89B72] transition-colors duration-300">
                  Contato
                </a>
              </li>
            </ul>
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center space-x-6">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-block px-7 py-3 bg-[#1C1917] text-[#FAF8F5] text-[11px] font-medium uppercase tracking-[0.2em] hover:bg-[#B89B72] transition-all duration-300 shadow-xs rounded-full"
            >
              Agendar Consulta
            </a>

            {/* Mobile menu button text */}
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-[11px] font-semibold uppercase tracking-[0.2em] text-[#1C1917] hover:text-[#B89B72] transition-colors py-2"
              aria-label="Menu"
            >
              {isMenuOpen ? 'FECHAR' : 'MENU'}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div
        className={`fixed inset-0 top-[73px] bg-[#FAF8F5] z-40 flex flex-col justify-between p-8 transition-all duration-500 lg:hidden ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col space-y-6 pt-6">
          <a 
            href="#home" 
            onClick={closeMenu} 
            className="font-serif text-3xl text-[#1C1917] hover:text-[#B89B72] transition-colors"
          >
            Início
          </a>
          <a 
            href="#founders" 
            onClick={closeMenu} 
            className="font-serif text-3xl text-[#1C1917] hover:text-[#B89B72] transition-colors"
          >
            Sobre
          </a>
          <a 
            href="#services" 
            onClick={closeMenu} 
            className="font-serif text-3xl text-[#1C1917] hover:text-[#B89B72] transition-colors"
          >
            Procedimentos
          </a>
          <Link 
            to="/equipe" 
            onClick={closeMenu} 
            className="font-serif text-3xl text-[#1C1917] hover:text-[#B89B72] transition-colors"
          >
            Equipe
          </Link>
          <a 
            href="#contact" 
            onClick={closeMenu} 
            className="font-serif text-3xl text-[#1C1917] hover:text-[#B89B72] transition-colors"
          >
            Contato
          </a>
        </nav>

        <div className="pt-8 border-t border-[#EAE5DF]">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="block w-full py-4 bg-[#1C1917] text-[#FAF8F5] text-center text-xs font-semibold uppercase tracking-[0.2em] rounded-full"
          >
            Agendar Consulta no WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;

