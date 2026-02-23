import { useState, useEffect } from 'react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Evento",
      brand: "Dia das Mulheres",
      description: "07 de março · Das 9h às 16h. Um dia especial de cuidados e beleza para celebrar todas as mulheres.",
      gradient: "from-brand-gold via-white to-brand-green"
    },
    {
      title: "Bem-vinda à",
      brand: "Mitta",
      description: "Seu refúgio para relaxamento e beleza, onde cada tratamento é uma experiência única de bem-estar.",
      gradient: "from-brand-green via-white to-brand-gold"
    },
    {
      title: "Estética Facial",
      brand: "Especializada",
      description: "Tratamentos faciais personalizados com tecnologia de ponta para realçar sua beleza natural e promover a saúde da sua pele.",
      gradient: "from-brand-ui-element via-white to-brand-gold"
    },
    {
      title: "Bem-estar",
      brand: "Completo",
      description: "Massagens terapêuticas e tratamentos corporais que combinam relaxamento profundo com resultados visíveis para seu corpo e mente.",
      gradient: "from-brand-gold via-white to-brand-green"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section id="home" className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">
      {/* Background with gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${slides[currentSlide].gradient} transition-all duration-1000`}></div>
      
      {/* Carousel Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="transition-all duration-500 ease-in-out">
          <h1 className="text-4xl md:text-6xl font-light text-slate-900 mb-4">
            {slides[currentSlide].title}{' '}
            <span className="bg-gradient-to-r from-brand-green to-brand-gold bg-clip-text text-transparent font-semibold">
              {slides[currentSlide].brand}
            </span>
          </h1>
          <p className="text-lg md:text-2xl text-brand-text-secondary max-w-2xl mx-auto">
            {slides[currentSlide].description}
          </p>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/80 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
      >
        <svg className="w-6 h-6 text-brand-ui-element" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/80 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
      >
        <svg className="w-6 h-6 text-brand-ui-element" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentSlide 
                ? 'bg-brand-ui-element scale-125' 
                : 'bg-white/60 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;