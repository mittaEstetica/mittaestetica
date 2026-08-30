const WHATSAPP_URL = 'https://wa.me/555192729544?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta.';

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-44 md:pb-28 bg-[#FAF9F6] border-b border-[#E8E4DF]">
      <div className="container mx-auto px-6 md:px-8 max-w-7xl">
        <div className="max-w-4xl mx-auto text-center">
          {/* Category Tag */}
          <div className="inline-block mb-6">
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#B89B72]">
              Estética Avançada & Nutrição Clínica · Passo da Areia
            </span>
          </div>

          {/* Editorial Headline */}
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal text-[#1C1917] leading-[1.1] tracking-tight mb-8">
            A arte de cuidar da sua saúde com <span className="italic font-light text-[#B89B72]">ciência & sofisticação.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-[#57534E] font-light leading-relaxed max-w-2xl mx-auto mb-10">
            Protocolos faciais, corporais e consultas nutricionais rigorosamente personalizados, projetados para quem busca resultados visíveis e segurança clínica.
          </p>

          {/* Rounded Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-9 py-4 bg-[#1C1917] text-[#FAF8F5] text-[11px] font-semibold uppercase tracking-[0.2em] hover:bg-[#B89B72] transition-all duration-300 shadow-sm rounded-full"
            >
              Agendar Consulta Privada
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center px-9 py-4 bg-transparent border border-[#1C1917] text-[#1C1917] text-[11px] font-semibold uppercase tracking-[0.2em] hover:bg-[#1C1917] hover:text-[#FAF8F5] transition-all duration-300 rounded-full"
            >
              Conhecer Tratamentos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;