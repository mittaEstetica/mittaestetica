import MileneImg from '../../assets/milene.jpeg';
import TailaImg from '../../assets/taila.jpeg';

const founders = [
  {
    name: 'Milene Favero',
    age: 25,
    img: MileneImg,
    bio: (
      <>
        <p className="mb-2">Graduada em <b>Estética e Cosmética</b> pela FADERGS</p>
        <p className="mb-2">Pós-graduada em <b>Estética Clínica e de Precisão</b> pela IPGS</p>
        <p className="mb-2">Cursos:</p>
        <ul className="list-disc list-inside text-sm text-slate-600">
          <li>Master em Peelings - Belart</li>
          <li>Técnicas Avançadas de Limpeza de Pele - IJT Academy</li>
          <li>Gerenciamento de Hiperpigmentação Periorbital - Akdemica</li>
        </ul>
      </>
    )
  },
  {
    name: 'Taila Rosa',
    age: 24,
    img: TailaImg,
    bio: (
      <>
        <p className="mb-2">Graduada em <b>Estética e Cosmética</b> pela FADERGS</p>
        <p className="mb-2">Cursos:</p>
        <ul className="list-disc list-inside text-sm text-slate-600">
          <li>Cosmetologia - Abed</li>
          <li>Drenagem Linfática Manual - Pré e Pós Operatório de Cirurgias Estéticas - Instituto Lis</li>
          <li>Tricologia Capilar - CF cursos de formação</li>
        </ul>
      </>
    )
  },
];

const FoundersSection = () => {
  return (
    <section id="founders" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-light text-slate-800 mb-2">Quem cuida de você</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch justify-center">
          {founders.map((f) => (
            <div key={f.name} className="flex flex-col items-center bg-white/80 rounded-3xl shadow-xl p-10 border border-slate-100 h-full transition-transform hover:scale-105 hover:shadow-2xl duration-300">
              <div className="w-32 h-32 mb-6 rounded-full border-4 border-white shadow-lg overflow-hidden flex items-center justify-center bg-white">
                <img src={f.img} alt={f.name} className="w-28 h-28 object-cover rounded-full" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-1 tracking-tight">{f.name}</h3>
              <div className="text-base text-slate-500 mb-4 font-medium">{f.age} anos</div>
              <div className="text-slate-700 text-base leading-relaxed text-center">
                {f.bio}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoundersSection; 