import { ArrowLeft, Share2, Clock, MapPin } from 'lucide-react';

interface AthensHeroProps {
  onBack: () => void;
}

const AthensHero: React.FC<AthensHeroProps> = ({ onBack }) => {
  return (
    <>
      <div className="relative h-[80vh] min-h-[560px] overflow-hidden">
        <img
          src="https://images.pexels.com/photos/5380087/pexels-photo-5380087.jpeg"
          alt="Vista del Partenón en la Acrópolis de Atenas al atardecer"
          className="absolute inset-0 w-full h-full object-cover scale-[1.02]"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/10" />

        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 lg:p-20">
          <div className="max-w-4xl mx-auto">
            <button
              onClick={onBack}
              className="inline-flex items-center text-white/60 hover:text-white text-[11px] uppercase tracking-widest mb-8 transition-colors group"
            >
              <ArrowLeft size={13} className="mr-2 group-hover:-translate-x-1 transition-transform" />
              Volver a guías
            </button>

            <div className="flex items-center gap-3 mb-6">
              <span className="inline-block bg-teal-400 text-slate-900 text-[9px] uppercase tracking-[.2em] font-bold px-3 py-1.5 rounded-full">
                Guía completa
              </span>
              <span className="inline-block bg-white/10 backdrop-blur-sm text-white/80 text-[9px] uppercase tracking-[.2em] font-medium px-3 py-1.5 rounded-full border border-white/20">
                3 días
              </span>
            </div>

            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white leading-[1.0] tracking-tight mb-6">
              Atenas
              <span className="block text-3xl md:text-4xl lg:text-5xl text-white/60 mt-2 font-light">en 3 días</span>
            </h1>

            <p className="text-white/50 text-base md:text-lg font-light max-w-lg mb-8 leading-relaxed">
              La cuna de la civilización occidental entre ruinas milenarias, gastronomía mediterránea y atardeceres épicos
            </p>

            <div className="flex flex-wrap items-center gap-6 border-t border-white/10 pt-6">
              <span className="inline-flex items-center gap-2 text-white/40 text-xs">
                <Clock size={12} /> 16 min lectura
              </span>
              <span className="inline-flex items-center gap-2 text-white/40 text-xs">
                <MapPin size={12} /> Atenas, Grecia
              </span>
              <button
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({ title: 'Atenas en 3 Días', url: window.location.href }).catch(() => {});
                  } else {
                    navigator.clipboard.writeText(window.location.href).then(() => alert('Enlace copiado'));
                  }
                }}
                className="inline-flex items-center gap-2 text-white/40 hover:text-white text-xs transition-colors"
              >
                <Share2 size={12} /> Compartir
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-slate-900 text-white border-b border-white/5">
        <div className="max-w-4xl mx-auto px-6 py-6 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          <div>
            <span className="block text-2xl md:text-3xl font-serif text-teal-400">2.500</span>
            <span className="text-[9px] uppercase tracking-[.2em] text-white/40 mt-1 block">años de historia</span>
          </div>
          <div>
            <span className="block text-2xl md:text-3xl font-serif text-teal-400">20+</span>
            <span className="text-[9px] uppercase tracking-[.2em] text-white/40 mt-1 block">monumentos</span>
          </div>
          <div>
            <span className="block text-2xl md:text-3xl font-serif text-teal-400">350€</span>
            <span className="text-[9px] uppercase tracking-[.2em] text-white/40 mt-1 block">desde (3 días)</span>
          </div>
          <div>
            <span className="block text-2xl md:text-3xl font-serif text-teal-400">3h</span>
            <span className="text-[9px] uppercase tracking-[.2em] text-white/40 mt-1 block">vuelo España</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default AthensHero;
