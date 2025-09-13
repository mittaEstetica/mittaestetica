import { Link } from 'react-router-dom';
import mittaLogo from '../../assets/mitta.svg';

const Header = () => {
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
              href="https://wa.me/555192729544?text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:block px-6 py-2 bg-brand-ui-element text-white rounded-full font-medium hover:bg-brand-header-end transition-all duration-200"
            >
              Agendar
            </a>
            {/* Mobile menu button */}
            <button className="md:hidden p-2 rounded-lg bg-slate-100">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
