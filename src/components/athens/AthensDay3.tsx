import { useState } from 'react';
import { ChevronDown, ExternalLink } from 'lucide-react';
import Reveal from './Reveal';

const AthensDay3: React.FC = () => {
  const [openExc, setOpenExc] = useState<number | null>(null);

  const excursions = [
    {
      title: 'Delfos — El Ombligo del Mundo',
      tag: 'Más popular',
      tagColor: 'bg-teal-500',
      desc: '180 km de Atenas. El centro espiritual de la civilización helénica donde la Pitia pronunciaba profecías en trance que reyes consultaban antes de decisiones importantes. Patrimonio UNESCO.',
      highlights: ['Templo de Apolo (donde la Pitia profetizaba)', 'Teatro (5.000 espectadores, vistas épicas)', 'Tholos de Atenea (la imagen icónica)', 'Museo: Auriga de Delfos (bronce, 478 a.C.)'],
      info: 'Desde 95€ · Día completo (10-11h) · Transporte + guía español',
      rec: 'La opción más completa si solo puedes hacer UNA excursión.',
      links: [
        { text: 'Tour Delfos', url: 'https://gyg.me/DYkIGLUb' },
        { text: 'Delfos + Hosios Lukas', url: 'https://gyg.me/z8aMEqEU' },
      ],
    },
    {
      title: 'Meteora — Monasterios en el Cielo',
      tag: 'Más fotogénico',
      tagColor: 'bg-amber-500',
      desc: '350 km de Atenas. Monasterios ortodoxos sobre pilares de piedra arenisca de hasta 400m de altura. 6 monasterios activos de los 24 originales. Patrimonio UNESCO. Paisaje absolutamente surrealista.',
      highlights: ['Gran Meteoro (el más grande, s. XIV)', 'Varlaam (frescos impresionantes)', 'Santísima Trinidad (aparece en James Bond)', 'Roussanou (accesible, vistas increíbles)'],
      info: '1 día: 89€ (13-14h) · 2 días: 219€ con hotel · Pantalón largo obligatorio',
      rec: 'El paisaje más único. Mejor en tour de 2 días si puedes.',
      links: [
        { text: 'Tour 1 Día', url: 'https://gyg.me/bChRUuFg' },
        { text: 'Tour 2 Días', url: 'https://gyg.me/tXG3xGd0' },
      ],
    },
    {
      title: 'Argólida — Corinto, Micenas y Epidauro',
      tag: 'Para fans de mitología',
      tagColor: 'bg-rose-500',
      desc: 'Tres sitios UNESCO en el Peloponeso. El reino de Agamenón (Micenas), el teatro con la mejor acústica del mundo antiguo (Epidauro) y el Canal de Corinto (6 km, paredes de 90m).',
      highlights: ['Puerta de los Leones (1250 a.C., la más antigua de Europa)', 'Teatro Epidauro (14.000 espectadores, acústica perfecta)', 'Canal de Corinto (ingeniería impresionante)', 'Almuerzo en Nafplio (ciudad costera preciosa)'],
      info: 'Desde 95€ · Día completo (10-11h) · Transporte + guía español',
      rec: 'Ideal si te fascina la mitología griega y la Ilíada.',
      links: [
        { text: 'Tour Argólida', url: 'https://gyg.me/r9Q0sY6u' },
      ],
    }
  ];

  return (
    <div className="bg-slate-800">
      <Reveal>
        <section id="dia-3" className="max-w-4xl mx-auto px-6 lg:px-10 py-20 md:py-28">
          <div className="flex items-center gap-5 mb-14">
            <span className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-rose-500 to-rose-600 text-white font-serif text-2xl rounded-sm shadow-xl shadow-rose-500/25">03</span>
            <div>
              <span className="text-[10px] uppercase tracking-[.25em] text-rose-300 font-semibold">Día 3</span>
              <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-white">Excursiones Legendarias</h2>
            </div>
          </div>
          <p className="text-white/50 leading-relaxed mb-12 max-w-2xl text-lg font-light">
            Sal de Atenas y descubre algunos de los lugares más legendarios de la antigua Grecia.
          </p>

          <div className="space-y-3">
            {excursions.map((exc, i) => (
              <div key={i} className="rounded-sm overflow-hidden">
                <button
                  onClick={() => setOpenExc(openExc === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-left group"
                >
                  <div className="flex items-center gap-4">
                    <span className={`${exc.tagColor} text-white text-[8px] uppercase tracking-wider font-bold px-2.5 py-1 rounded-full whitespace-nowrap`}>{exc.tag}</span>
                    <span className="font-serif text-lg text-white group-hover:text-teal-300 transition-colors">{exc.title}</span>
                  </div>
                  <ChevronDown size={18} className={`text-white/30 transition-transform duration-300 flex-shrink-0 ml-4 ${openExc === i ? 'rotate-180' : ''}`} />
                </button>
                {openExc === i && (
                  <div className="p-6 md:p-8 bg-white/[0.03] border border-t-0 border-white/10">
                    <p className="text-white/60 leading-relaxed mb-6">{exc.desc}</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                      {exc.highlights.map((h, j) => (
                        <span key={j} className="text-sm text-white/50 flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 bg-teal-400 rounded-full mt-1.5 flex-shrink-0"></span>{h}
                        </span>
                      ))}
                    </div>

                    <p className="text-xs text-white/40 mb-2">{exc.info}</p>
                    <p className="text-sm text-teal-300 bg-teal-900/30 px-4 py-3 rounded-sm border border-teal-700/30 mb-6">{exc.rec}</p>

                    <div className="flex flex-wrap gap-3">
                      {exc.links.map((link, j) => (
                        <a key={j} href={link.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-slate-900 hover:bg-teal-50 text-xs font-semibold px-5 py-3 rounded-sm transition-colors shadow-lg hover:-translate-y-0.5">
                          {link.text} <ExternalLink size={11} />
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Comparativa */}
          <div className="mt-10 p-6 bg-white/5 border border-white/10 rounded-sm">
            <h4 className="font-semibold text-white mb-4">¿Cuál elegir?</h4>
            <div className="space-y-3 text-sm text-white/60">
              <p><strong className="text-teal-300">Solo 1 excursión:</strong> Delfos (la más completa, impresionante y cercana).</p>
              <p><strong className="text-amber-300">Paisaje único:</strong> Meteora es una experiencia absolutamente irrepetible.</p>
              <p><strong className="text-rose-300">Fans de mitología:</strong> La Argólida (Micenas, Epidauro) conecta con la Ilíada.</p>
            </div>
          </div>
        </section>
      </Reveal>
    </div>
  );
};

export default AthensDay3;
