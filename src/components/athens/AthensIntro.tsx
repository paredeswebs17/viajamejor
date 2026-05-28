import { useState } from 'react';
import { ChevronDown, ExternalLink } from 'lucide-react';
import Reveal from './Reveal';

const AthensIntro: React.FC = () => {
  const [expandedAirport, setExpandedAirport] = useState(false);

  return (
    <>
      {/* Por qué visitar */}
      <div className="bg-stone-50">
        <Reveal>
          <section id="por-que-visitar" className="max-w-4xl mx-auto px-6 lg:px-10 py-20 md:py-28">
            <div className="max-w-3xl">
              <span className="text-[10px] uppercase tracking-[.25em] text-teal-600 font-semibold mb-4 block">Descubre Atenas</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-10 leading-tight">¿Por qué visitar Atenas?</h2>
              <div className="space-y-6 text-gray-600 leading-[1.8] text-lg font-light">
                <p>
                  Atenas no es simplemente una ciudad: es un museo al aire libre donde cada piedra cuenta 2.500 años de historia. Las ruinas de la democracia más antigua del mundo conviven con una vibrante escena cultural moderna; las columnas del Partenón dialogan con el arte urbano de Psyrri; y las leyendas de dioses olímpicos se mezclan con el bullicio de tavernas.
                </p>
                <p>
                  Es subir a la Colina del Areópago y contemplar el atardecer sobre el templo donde Sócrates paseaba hace 2.400 años. Es perderte en las calles de Plaka rodeado del aroma de souvlaki recién hecho. Es descubrir que la arquitectura neoclásica del siglo XIX se funde perfectamente con vestigios helenísticos.
                </p>
              </div>
            </div>
            <blockquote className="mt-12 pl-6 border-l-4 border-teal-400 py-4 bg-white rounded-r-sm shadow-sm">
              <p className="text-gray-900 font-medium leading-relaxed text-lg italic">
                "Si buscas una ciudad donde la historia no está encerrada en museos sino viva en cada esquina, donde la mitología cobra sentido al ver los templos — Atenas es tu destino."
              </p>
            </blockquote>
          </section>
        </Reveal>
      </div>

      {/* Llegada Aeropuerto */}
      <div className="bg-white">
        <Reveal>
          <section id="llegada-aeropuerto" className="max-w-4xl mx-auto px-6 lg:px-10 py-20 md:py-28">
            <span className="text-[10px] uppercase tracking-[.25em] text-gray-400 font-semibold mb-4 block">Cómo llegar</span>
            <h2 className="font-serif text-3xl md:text-4xl text-gray-900 mb-10">Llegada desde el Aeropuerto</h2>

            <button
              onClick={() => setExpandedAirport(!expandedAirport)}
              className="w-full flex items-center justify-between p-6 bg-gradient-to-r from-slate-50 to-stone-50 border border-gray-200 rounded-sm hover:border-gray-300 transition-all group"
            >
              <div>
                <span className="font-semibold text-gray-900 text-lg group-hover:text-teal-700 transition-colors">Aeropuerto Eleftherios Venizelos</span>
                <span className="block text-sm text-gray-500 mt-1">ATH — 33 km del centro de Atenas</span>
              </div>
              <ChevronDown size={20} className={`text-gray-400 transition-transform duration-300 ${expandedAirport ? 'rotate-180' : ''}`} />
            </button>

            {expandedAirport && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 animate-fadeIn">
                <div className="relative p-6 bg-teal-50 border border-teal-200 rounded-sm overflow-hidden">
                  <span className="absolute top-0 right-0 bg-teal-500 text-white text-[8px] uppercase tracking-wider font-bold px-2 py-1">Recomendado</span>
                  <h4 className="font-bold text-gray-900 text-lg mb-1">Metro L3</h4>
                  <p className="text-xs text-gray-500 mb-4">Línea Azul directa</p>
                  <div className="space-y-3 text-sm text-gray-700">
                    <div className="flex justify-between"><span>Precio</span><strong className="text-teal-700">10€</strong></div>
                    <div className="flex justify-between"><span>Duración</span><strong>40 min</strong></div>
                    <div className="flex justify-between"><span>Horario</span><strong>6:30-23:30</strong></div>
                    <div className="flex justify-between"><span>Frecuencia</span><strong>Cada 30 min</strong></div>
                  </div>
                  <p className="text-xs text-teal-700 mt-4 pt-3 border-t border-teal-200">Directa a Syntagma y Monastiraki. La mejor opción para la mayoría.</p>
                </div>

                <div className="p-6 bg-amber-50 border border-amber-200 rounded-sm">
                  <span className="inline-block bg-amber-500 text-white text-[8px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full mb-3">24h</span>
                  <h4 className="font-bold text-gray-900 text-lg mb-1">Bus X95</h4>
                  <p className="text-xs text-gray-500 mb-4">Servicio ininterrumpido</p>
                  <div className="space-y-3 text-sm text-gray-700">
                    <div className="flex justify-between"><span>Precio</span><strong className="text-amber-700">5,50€</strong></div>
                    <div className="flex justify-between"><span>Duración</span><strong>60-90 min</strong></div>
                    <div className="flex justify-between"><span>Horario</span><strong>24/7</strong></div>
                    <div className="flex justify-between"><span>Destino</span><strong>Syntagma</strong></div>
                  </div>
                  <p className="text-xs text-amber-700 mt-4 pt-3 border-t border-amber-200">Ideal para vuelos nocturnos. Más lento pero siempre disponible.</p>
                </div>

                <div className="p-6 bg-slate-50 border border-slate-200 rounded-sm">
                  <span className="inline-block bg-slate-700 text-white text-[8px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full mb-3">Confort</span>
                  <h4 className="font-bold text-gray-900 text-lg mb-1">Transfer Privado</h4>
                  <p className="text-xs text-gray-500 mb-4">Puerta a puerta</p>
                  <div className="space-y-3 text-sm text-gray-700">
                    <div className="flex justify-between"><span>Precio</span><strong>Desde 54€</strong></div>
                    <div className="flex justify-between"><span>Duración</span><strong>35-50 min</strong></div>
                    <div className="flex justify-between"><span>Ideal</span><strong>Grupos 3-4</strong></div>
                    <div className="flex justify-between"><span>Por pers.</span><strong className="text-teal-600">14€ (x4)</strong></div>
                  </div>
                  <a href="https://gyg.me/cNL3U6Qt" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-teal-600 hover:text-teal-700 text-xs font-semibold mt-4 pt-3 border-t border-slate-200 transition-colors w-full">
                    Reservar transfer <ExternalLink size={11} />
                  </a>
                </div>
              </div>
            )}
          </section>
        </Reveal>
      </div>

      {/* Dónde dormir */}
      <div className="bg-slate-900">
        <Reveal>
          <section id="donde-dormir" className="max-w-4xl mx-auto px-6 lg:px-10 py-20 md:py-28">
            <span className="text-[10px] uppercase tracking-[.25em] text-teal-400 font-semibold mb-4 block">Alojamiento</span>
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">Dónde dormir en Atenas</h2>
            <p className="text-white/50 leading-relaxed mb-12 max-w-2xl">
              La ubicación es clave. Alójate en el centro histórico para llegar a pie a todos los monumentos.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { name: 'Plaka', desc: 'A los pies de la Acrópolis. Calles con encanto, tavernas tradicionales.', tag: 'Nuestra elección', highlight: true },
                { name: 'Monastiraki', desc: 'Céntrico y animado. Mercadillos, bares en rooftop, buen transporte.', tag: 'Mejor relación' },
                { name: 'Syntagma', desc: 'Corazón moderno de Atenas. Nudo de transporte público.', tag: 'Más práctico' },
                { name: 'Kolonaki', desc: 'Elegante y residencial. Tiendas de diseño, cafés sofisticados.', tag: 'Para descansar' },
              ].map((b) => (
                <div key={b.name} className={`p-6 rounded-sm transition-all ${b.highlight ? 'bg-teal-600/20 border-2 border-teal-400/30' : 'bg-white/5 border border-white/10 hover:bg-white/10'}`}>
                  <span className="text-[9px] uppercase tracking-[.2em] text-teal-400 font-bold">{b.tag}</span>
                  <h4 className="font-serif text-xl text-white mt-2 mb-2">{b.name}</h4>
                  <p className="text-sm text-white/50 leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 p-5 bg-teal-800/30 border border-teal-600/30 rounded-sm">
              <p className="text-sm text-teal-200">
                <strong>Consejo:</strong> Reserva en Plaka o Monastiraki con 2-3 meses de antelación. Busca hoteles con terraza para disfrutar de vistas a la Acrópolis iluminada por la noche.
              </p>
            </div>
          </section>
        </Reveal>
      </div>

      {/* Itinerario resumen */}
      <div className="bg-white">
        <Reveal>
          <section id="itinerario" className="max-w-4xl mx-auto px-6 lg:px-10 py-20 md:py-28">
            <span className="text-[10px] uppercase tracking-[.25em] text-gray-400 font-semibold mb-4 block">Tu ruta</span>
            <h2 className="font-serif text-3xl md:text-4xl text-gray-900 mb-12">Itinerario de 3 Días</h2>

            <div className="space-y-4">
              {[
                { day: '01', title: 'Acrópolis y Centro Histórico', stops: 'Partenón · Areópago · Ágora Romana · Biblioteca de Adriano · Monastiraki · Ágora · Templo de Hefesto', color: 'from-teal-500 to-teal-600' },
                { day: '02', title: 'Templos, Estadios y Museos', stops: 'Templo de Zeus · Estadio Panatenaico · Syntagma · Plaka · Museo Acrópolis · Monte Licabeto', color: 'from-amber-500 to-amber-600' },
                { day: '03', title: 'Excursiones Legendarias', stops: 'Delfos / Meteora / Corinto-Micenas-Epidauro (día completo fuera de Atenas)', color: 'from-rose-500 to-rose-600' },
              ].map((d) => (
                <div key={d.day} className="flex gap-5 p-6 bg-gray-50 rounded-sm hover:bg-gray-100 transition-colors group">
                  <div className={`bg-gradient-to-br ${d.color} text-white w-14 h-14 flex items-center justify-center font-serif text-xl rounded-sm flex-shrink-0 shadow-lg group-hover:scale-105 transition-transform`}>
                    {d.day}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-1">{d.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{d.stops}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </Reveal>
      </div>
    </>
  );
};

export default AthensIntro;
