import EquipeImg from "../../assets/equipe_mitta.jpeg";

function Section() {
  return (
    <section id="about" className="py-24 bg-brand-background">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="text-left">
            <h2 className="text-4xl font-light text-brand-text-primary mb-6">
              Sobre o Mitta
            </h2>
            <div className="space-y-4 text-lg text-brand-text-secondary leading-relaxed">
              <p>
                Somos especialistas em proporcionar momentos de relaxamento e
                beleza. Nossa equipe é formada por profissionais qualificados e
                experientes, comprometidos em oferecer o melhor atendimento.
              </p>
              <p>
                Utilizamos produtos de alta qualidade e técnicas modernas para
                garantir resultados excepcionais em todos os nossos tratamentos.
              </p>
            </div>
          </div>
          <div>
            <div>
              <img src={EquipeImg} alt="Mitta Logo" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section;
