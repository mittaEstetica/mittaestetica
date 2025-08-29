const Hero = () => {
  return (
    <section id="home" className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 bg-gradient-to-br from-brand-green via-white to-brand-gold">
      <h1 className="text-4xl md:text-6xl font-light text-slate-900 mb-4">
        Bem-vinda à{' '}
        <span className="bg-gradient-to-r from-brand-green to-brand-gold bg-clip-text text-transparent font-semibold">
          Mitta
        </span>
      </h1>
      <p className="text-lg md:text-2xl text-brand-text-secondary max-w-2xl mx-auto">
        Seu refúgio para relaxamento e beleza, onde cada tratamento é uma experiência única de bem-estar.
      </p>
    </section>
  );
};

export default Hero;