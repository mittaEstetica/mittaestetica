const WHATSAPP_URL = 'https://wa.me/555192729544?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta.';
const MAPS_URL = 'https://maps.google.com/?q=Rua+Açores,+68+-+Passo+da+Areia,+Porto+Alegre+-+RS,+91030-340';

function ContactSection() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-[#FAF8F5]">
      <div className="container mx-auto px-8 max-w-7xl">
        <div className="max-w-xl mb-16">
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#B89B72] block mb-3">
            Atendimento & Localização
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#1C1917] tracking-tight mb-4">
            Entre em Contato
          </h2>
          <p className="text-[#78716C] text-sm font-light leading-relaxed">
            Agendamentos sob consulta prévia para garantir atendimento exclusivo.
          </p>
        </div>

        {/* Editorial Hairline Grid (Zero icons) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-b border-[#EAE5DF] py-12">
          
          {/* Col 1: Telefone */}
          <div className="space-y-4">
            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#B89B72] block">
              01 / CONTATO DIRETO
            </span>
            <h3 className="font-serif text-2xl font-normal text-[#1C1917]">WhatsApp & Telefone</h3>
            <p className="text-xl font-light text-[#1C1917] tracking-wider">(51) 99272-9544</p>
            <p className="text-xs text-[#78716C] font-light leading-relaxed">
              Atendimento ágil para dúvidas, esclarecimentos e agendamento de horário.
            </p>
            <div className="pt-2">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border-b border-[#1C1917] pb-0.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#1C1917] hover:text-[#B89B72] hover:border-[#B89B72] transition-colors"
              >
                Iniciar Conversa no WhatsApp —
              </a>
            </div>
          </div>

          {/* Col 2: Endereço */}
          <div className="space-y-4 md:border-l md:border-[#EAE5DF] md:pl-10">
            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#B89B72] block">
              02 / ENDEREÇO
            </span>
            <h3 className="font-serif text-2xl font-normal text-[#1C1917]">Passo da Areia</h3>
            <div className="text-xs text-[#57534E] font-light space-y-1">
              <p className="font-medium text-[#1C1917]">Rua Açores, 68</p>
              <p>Passo da Areia, Porto Alegre - RS</p>
              <p className="text-[#78716C]">CEP: 91030-340</p>
            </div>
            <div className="pt-2">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border-b border-[#1C1917] pb-0.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#1C1917] hover:text-[#B89B72] hover:border-[#B89B72] transition-colors"
              >
                Abrir no Google Maps —
              </a>
            </div>
          </div>

          {/* Col 3: Horários */}
          <div className="space-y-4 md:border-l md:border-[#EAE5DF] md:pl-10">
            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#B89B72] block">
              03 / FUNCIONAMENTO
            </span>
            <h3 className="font-serif text-2xl font-normal text-[#1C1917]">Horário de Atendimento</h3>
            <div className="space-y-2 text-xs font-light text-[#57534E]">
              <div className="flex justify-between py-1 border-b border-[#EAE5DF]">
                <span>Terça a Sexta:</span>
                <span className="font-medium text-[#1C1917]">10h às 20h</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#EAE5DF]">
                <span>Sábado:</span>
                <span className="font-medium text-[#1C1917]">09h às 17h</span>
              </div>
              <div className="flex justify-between py-1 text-[#78716C]">
                <span>Segunda e Domingo:</span>
                <span>Fechado</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default ContactSection;
