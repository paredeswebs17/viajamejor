import { Link } from 'react-router-dom';
import { ArrowDown, Compass } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-slate-900">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/1004584/pexels-photo-1004584.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Travel background"
          className="absolute inset-0 w-full h-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/40 to-slate-900/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 to-transparent" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10 w-full py-32 md:py-40">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 mb-8 opacity-0 animate-[fadeUp_0.7s_ease-out_0.2s_forwards]">
            <Compass size={13} className="text-teal-300" />
            <span className="text-[10px] uppercase tracking-[.25em] text-teal-200/80 font-medium">
              Consejos y recursos para viajar inteligente
            </span>
          </div>

          <h1 className="font-serif text-[clamp(2.8rem,7vw,5.5rem)] leading-[0.98] text-white tracking-tight opacity-0 animate-[fadeUp_0.8s_ease-out_0.35s_forwards]">
            Viaja <span className="italic text-teal-300">más</span>,<br />
            gasta <span className="italic text-emerald-300">menos</span>
          </h1>

          <p className="mt-8 text-lg text-white/75 font-light leading-relaxed max-w-lg opacity-0 animate-[fadeUp_0.7s_ease-out_0.55s_forwards]">
            Consejos probados en 40+ países para viajar más gastando menos. Guías, herramientas y trucos para tu próxima aventura.
          </p>

          <div className="mt-10 flex flex-wrap gap-4 opacity-0 animate-[fadeUp_0.7s_ease-out_0.7s_forwards]">
            <Link
              to="/guias"
              className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-500 text-white px-7 py-4 text-xs font-semibold uppercase tracking-[.15em] transition-all duration-300 shadow-lg shadow-teal-600/25 hover:shadow-teal-500/35"
            >
              Explorar guías
            </Link>
            <a
              href="#viajes-organizados"
              className="inline-flex items-center gap-2 border border-white/30 text-white/90 px-7 py-4 text-xs font-medium uppercase tracking-[.15em] hover:bg-white/10 hover:border-white/50 transition-all duration-300"
            >
              Viajes organizados
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 opacity-0 animate-[fadeUp_0.6s_ease-out_1s_forwards]">
        <ArrowDown size={16} className="text-white/50 animate-bounce" />
      </div>
    </section>
  );
};

export default Hero;
