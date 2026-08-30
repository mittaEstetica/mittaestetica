import { Link } from 'react-router-dom';
import mittaLogo from '../../assets/mitta.svg';

const WHATSAPP_URL = 'https://wa.me/555192729544?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta.';

function Footer() {
  return (
    <footer className="bg-[#1C1917] text-[#FAF8F5] py-20 border-t border-[#2B2725]">
      <div className="container mx-auto px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-6 space-y-4">
            <Link to="/">
              <img src={mittaLogo} alt="Mitta Estética" className="h-9 w-auto brightness-200" />
            </Link>
            <p className="text-xs text-[#A8A29E] font-light max-w-md leading-relaxed">
              Mitta Estética — Clínica especializada em estética facial e corporal avançada. Protocolos de precisão e atendimento individualizado no Passo da Areia, Porto Alegre.
            </p>
          </div>

          {/* Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#B89B72] block">
              Navegação
            </span>
            <ul className="space-y-2 text-xs font-light text-[#A8A29E]">
              <li>
                <a href="#home" className="hover:text-[#FAF8F5] transition-colors">Início</a>
              </li>
              <li>
                <a href="#founders" className="hover:text-[#FAF8F5] transition-colors">Sobre</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#FAF8F5] transition-colors">Procedimentos</a>
              </li>
              <li>
                <Link to="/equipe" className="hover:text-[#FAF8F5] transition-colors">Equipe</Link>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#FAF8F5] transition-colors">Contato</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#B89B72] block">
              Atendimento Privado
            </span>
            <p className="text-xs text-[#A8A29E] font-light">Rua Açores, 68 — Passo da Areia</p>
            <p className="text-xs text-[#A8A29E] font-light mb-4">Porto Alegre / RS</p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2.5 border border-[#B89B72] text-[#B89B72] text-[10px] font-semibold uppercase tracking-[0.2em] hover:bg-[#B89B72] hover:text-[#1C1917] transition-all"
            >
              Agendar no WhatsApp
            </a>
          </div>
        </div>

        {/* Copyright bar */}
        <div className="pt-8 border-t border-[#2B2725] text-center md:text-left flex flex-col md:flex-row justify-between items-center text-[11px] font-light text-[#78716C] gap-4">
          <p>&copy; {new Date().getFullYear()} Mitta Estética. Todos os direitos reservados.</p>
          <p>Estética Clínica & de Precisão</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
