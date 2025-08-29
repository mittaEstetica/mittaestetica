import React from "react";

function ContactSection() {
  return (
    <section id="contact" className="py-2">
      <div>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-light text-slate-800 mb-2">Entre em Contato</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Estamos prontos para te ajudar a encontrar o tratamento perfeito para seu bem-estar.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Telefone */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-5 flex flex-col items-start min-h-[140px]">
            <div className="flex items-center mb-2">
              <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center mr-3">
                <svg className="w-5 h-5 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M22 16.92V19a2 2 0 01-2 2A18 18 0 013 5a2 2 0 012-2h2.09a1 1 0 01.95.68l1.13 3.39a1 1 0 01-.24 1.05l-1.27 1.27a16 16 0 006.6 6.6l1.27-1.27a1 1 0 011.05-.24l3.39 1.13a1 1 0 01.68.95z" /></svg>
              </div>
              <span className="text-lg font-semibold text-slate-800">Telefone</span>
            </div>
            <div className="text-slate-700 text-base font-medium mb-1">(51) 99272-9544</div>
            <div className="text-slate-400 text-sm">WhatsApp disponível</div>
          </div>
          {/* Endereço */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-5 flex flex-col items-start min-h-[140px]">
            <div className="flex items-center mb-2">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 22s8-4.5 8-10a8 8 0 10-16 0c0 5.5 8 10 8 10z" /></svg>
              </div>
              <span className="text-lg font-semibold text-slate-800">Endereço</span>
            </div>
            <div className="text-slate-700 text-base font-medium mb-1">Rua das Flores, 68 - Passo da Areia</div>
            <div className="text-slate-400 text-sm">Porto Alegre, RS - 91030-340</div>
          </div>
          {/* Horário */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-5 flex flex-col items-start min-h-[140px]">
            <div className="flex items-center mb-2">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3" /><circle cx="12" cy="12" r="10" /></svg>
              </div>
              <span className="text-lg font-semibold text-slate-800">Horário de Funcionamento</span>
            </div>
            <div className="text-slate-700 text-base font-medium mb-1">Segunda a Sábado: 9h às 19h</div>
            <div className="text-slate-400 text-sm">Domingo: Fechado</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
