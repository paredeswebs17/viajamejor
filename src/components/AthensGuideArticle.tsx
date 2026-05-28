import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, Share2, Clock, MapPin, ChevronDown, ExternalLink, Camera, Utensils, Brain as Train, Wallet } from 'lucide-react';
import StickyTableOfContents from './StickyTableOfContents';

interface AthensGuideArticleProps {
  onBack: () => void;
}

const Reveal: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) entry.target.classList.add('visible'); },
      { threshold: 0.08 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return <div ref={ref} className={`reveal ${className}`}>{children}</div>;
};

const AthensGuideArticle: React.FC<AthensGuideArticleProps> = ({ onBack }) => {
  const [expandedAirport, setExpandedAirport] = useState<string | null>(null);
  const [openDay, setOpenDay] = useState<number | null>(1);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const sections = [
    { id: 'por-que-visitar', title: '¿Por qué visitar Atenas?' },
    { id: 'llegada-aeropuerto', title: 'Llegada desde el Aeropuerto' },
    { id: 'donde-dormir', title: 'Dónde Dormir en Atenas' },
    { id: 'itinerario', title: 'Itinerario de 3 Días' },
    { id: 'dia-1', title: 'Día 1: Acrópolis y Centro Histórico', level: 2 },
    { id: 'dia-2', title: 'Día 2: Templos, Estadios y Museos', level: 2 },
    { id: 'dia-3', title: 'Día 3: Excursiones desde Atenas', level: 2 },
    { id: 'lugares-imprescindibles', title: 'Más Lugares Imprescindibles' },
    { id: 'recomendaciones', title: 'Tarjeta y Seguro de Viaje' },
    { id: 'gastronomia', title: 'Guía Gastronómica' },
    { id: 'transporte', title: 'Sistema de Transporte' },
    { id: 'consejos', title: 'Consejos Finales' },
    { id: 'presupuestos', title: 'Presupuestos Detallados' }
  ];

  return (
    <>
      <StickyTableOfContents sections={sections} />

      {/* Hero */}
      <div className="relative h-[75vh] min-h-[540px] overflow-hidden">
        <img
          src="https://images.pexels.com/photos/5380087/pexels-photo-5380087.jpeg"
          alt="Vista del Partenón en la Acrópolis de Atenas al atardecer"
          className="absolute inset-0 w-full h-full object-cover scale-105"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <div className="max-w-4xl mx-auto">
            <button
              onClick={onBack}
              className="inline-flex items-center text-white/60 hover:text-white text-xs uppercase tracking-wider mb-6 transition-colors"
            >
              <ArrowLeft size={14} className="mr-2" />
              Volver a guías
            </button>
            <span className="inline-block bg-teal-500/90 text-white text-[10px] uppercase tracking-[.2em] font-semibold px-3 py-1.5 rounded-full mb-5">
              Guía completa · 3 días
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-[1.05] tracking-tight mb-5">
              Atenas en 3 Días
            </h1>
            <p className="text-white/70 text-lg md:text-xl font-light max-w-xl mb-6">
              La cuna de la civilización occidental entre ruinas milenarias
            </p>
            <div className="flex flex-wrap items-center gap-5">
              <span className="inline-flex items-center gap-1.5 text-white/50 text-xs">
                <Clock size={12} /> 16 min lectura
              </span>
              <span className="inline-flex items-center gap-1.5 text-white/50 text-xs">
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
                className="inline-flex items-center gap-1.5 text-white/50 hover:text-white text-xs transition-colors"
              >
                <Share2 size={12} /> Compartir
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats Bar */}
      <div className="bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-6 py-5 flex flex-wrap justify-center gap-8 md:gap-16 text-center">
          <div>
            <span className="block text-2xl font-serif">2.500</span>
            <span className="text-[10px] uppercase tracking-wider text-white/50">años de historia</span>
          </div>
          <div>
            <span className="block text-2xl font-serif">20+</span>
            <span className="text-[10px] uppercase tracking-wider text-white/50">monumentos</span>
          </div>
          <div>
            <span className="block text-2xl font-serif">350€</span>
            <span className="text-[10px] uppercase tracking-wider text-white/50">desde (3 días)</span>
          </div>
          <div>
            <span className="block text-2xl font-serif">3h</span>
            <span className="text-[10px] uppercase tracking-wider text-white/50">vuelo desde España</span>
          </div>
        </div>
      </div>

      {/* Por qué visitar - fondo warm */}
      <div className="bg-stone-50">
        <Reveal>
          <section id="por-que-visitar" className="max-w-4xl mx-auto px-6 lg:px-10 py-16 md:py-24">
            <h2 className="font-serif text-3xl md:text-4xl text-gray-900 mb-8">¿Por qué visitar Atenas?</h2>
            <div className="space-y-5 text-gray-600 leading-relaxed text-lg font-light">
              <p>
                Atenas no es simplemente una ciudad: es un museo al aire libre donde cada piedra cuenta 2.500 años de historia. Las ruinas de la democracia más antigua del mundo conviven con una vibrante escena cultural moderna; las columnas del Partenón dialogan con el arte urbano de Psyrri; y las leyendas de dioses olímpicos se mezclan con el bullicio de tavernas.
              </p>
              <p>
                Es subir a la Colina del Areópago y contemplar el atardecer sobre el templo donde Sócrates paseaba hace 2.400 años. Es perderte en las estrechas calles de Plaka rodeado del aroma de souvlaki recién hecho y aceitunas kalamata. Es descubrir que la arquitectura neoclásica del siglo XIX se funde perfectamente con vestigios helenísticos.
              </p>
            </div>
            <div className="mt-10 p-6 bg-white border border-stone-200 rounded-sm">
              <p className="text-gray-900 font-medium leading-relaxed">
                Si buscas una ciudad donde la historia no está encerrada en museos sino viva en cada esquina, donde la mitología cobra sentido al ver los templos, y donde la gastronomía mediterránea alcanza su máxima expresión — Atenas es tu destino.
              </p>
            </div>
          </section>
        </Reveal>
      </div>

      {/* Llegada Aeropuerto - fondo white */}
      <div className="bg-white">
        <Reveal>
          <section id="llegada-aeropuerto" className="max-w-4xl mx-auto px-6 lg:px-10 py-16 md:py-24">
            <h2 className="font-serif text-3xl md:text-4xl text-gray-900 mb-8">Llegada desde el Aeropuerto</h2>

            <button
              onClick={() => setExpandedAirport(expandedAirport === 'ath' ? null : 'ath')}
              className="w-full flex items-center justify-between p-5 bg-slate-50 border border-slate-200 rounded-sm hover:bg-slate-100 transition-colors mb-4"
            >
              <span className="font-semibold text-gray-900">Aeropuerto Eleftherios Venizelos (ATH) — 33 km del centro</span>
              <ChevronDown size={18} className={`text-gray-400 transition-transform duration-300 ${expandedAirport === 'ath' ? 'rotate-180' : ''}`} />
            </button>

            {expandedAirport === 'ath' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 animate-fadeIn">
                <div className="p-5 bg-teal-50 border border-teal-100 rounded-sm">
                  <span className="inline-block bg-teal-600 text-white text-[9px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full mb-3">Recomendado</span>
                  <h4 className="font-semibold text-gray-900 mb-3">Metro Línea 3</h4>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li><strong>10€</strong> /persona</li>
                    <li>40 min hasta Syntagma</li>
                    <li>6:30-23:30, cada 30 min</li>
                  </ul>
                  <p className="text-xs text-teal-700 mt-3">La opción más económica y directa al centro.</p>
                </div>
                <div className="p-5 bg-amber-50 border border-amber-100 rounded-sm">
                  <span className="inline-block bg-amber-600 text-white text-[9px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full mb-3">24 horas</span>
                  <h4 className="font-semibold text-gray-900 mb-3">Bus X95</h4>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li><strong>5,50€</strong> /persona</li>
                    <li>60-90 min hasta Syntagma</li>
                    <li>Funciona 24/7</li>
                  </ul>
                  <p className="text-xs text-amber-700 mt-3">Ideal para vuelos nocturnos fuera de horario metro.</p>
                </div>
                <div className="p-5 bg-slate-50 border border-slate-200 rounded-sm">
                  <span className="inline-block bg-slate-700 text-white text-[9px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full mb-3">Grupos</span>
                  <h4 className="font-semibold text-gray-900 mb-3">Transfer Privado</h4>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li><strong>Desde 54€</strong> (hasta 4 pers.)</li>
                    <li>35-50 min puerta a puerta</li>
                    <li>14€/pers. si sois 4</li>
                  </ul>
                  <a href="https://gyg.me/cNL3U6Qt" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-teal-600 hover:text-teal-700 text-xs font-semibold mt-3 transition-colors">
                    Reservar <ExternalLink size={11} />
                  </a>
                </div>
              </div>
            )}
          </section>
        </Reveal>
      </div>

      {/* Dónde dormir - fondo colored */}
      <div className="bg-slate-900 text-white">
        <Reveal>
          <section id="donde-dormir" className="max-w-4xl mx-auto px-6 lg:px-10 py-16 md:py-24">
            <h2 className="font-serif text-3xl md:text-4xl mb-8">Dónde dormir en Atenas</h2>
            <p className="text-white/70 leading-relaxed mb-10 max-w-2xl">
              La ubicación es clave. Alójate en el centro histórico para estar cerca de todos los monumentos principales a pie.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { name: 'Plaka', desc: 'El más encantador, a los pies de la Acrópolis.', tag: 'Top pick' },
                { name: 'Monastiraki', desc: 'Céntrico, animado, con buen transporte.', tag: 'Mejor relación' },
                { name: 'Syntagma', desc: 'Corazón moderno. Perfecto para transporte.', tag: 'Práctico' },
                { name: 'Kolonaki', desc: 'Elegante y residencial. Más tranquilo.', tag: 'Sofisticado' },
              ].map((b) => (
                <div key={b.name} className="p-5 bg-white/5 border border-white/10 rounded-sm backdrop-blur-sm hover:bg-white/10 transition-colors">
                  <span className="text-[9px] uppercase tracking-wider text-teal-400 font-semibold">{b.tag}</span>
                  <h4 className="font-semibold text-white mt-1 mb-1">{b.name}</h4>
                  <p className="text-sm text-white/60">{b.desc}</p>
                </div>
              ))}
            </div>

            <p className="text-sm text-teal-300 mt-8 bg-teal-900/30 p-4 rounded-sm border border-teal-700/30">
              Busca hotel en Plaka o Monastiraki para estar a 5-10 min de la Acrópolis. Reserva con 2-3 meses de antelación para mejores precios.
            </p>
          </section>
        </Reveal>
      </div>

      {/* Itinerario resumen */}
      <div className="bg-white">
        <Reveal>
          <section id="itinerario" className="max-w-4xl mx-auto px-6 lg:px-10 py-16 md:py-24">
            <h2 className="font-serif text-3xl md:text-4xl text-gray-900 mb-10">Itinerario de 3 Días</h2>

            <div className="space-y-4">
              {[
                { day: '1', title: 'Acrópolis y Centro Histórico', stops: 'Partenón · Areópago · Ágora Romana · Biblioteca de Adriano · Monastiraki · Ágora de Atenas · Templo de Hefesto', color: 'bg-teal-500' },
                { day: '2', title: 'Templos, Estadios y Museos', stops: 'Templo de Zeus · Estadio Panatenaico · Plaza Syntagma · Plaka · Museo Acrópolis · Monte Licabeto', color: 'bg-amber-500' },
                { day: '3', title: 'Excursiones Legendarias', stops: 'Delfos / Meteora / Corinto-Micenas-Epidauro (día completo fuera de Atenas)', color: 'bg-rose-500' },
              ].map((d) => (
                <div key={d.day} className="flex gap-5 p-5 bg-slate-50 rounded-sm hover:bg-slate-100 transition-colors">
                  <div className={`${d.color} text-white w-12 h-12 flex items-center justify-center font-serif text-xl rounded-sm flex-shrink-0`}>
                    {d.day}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{d.title}</h3>
                    <p className="text-sm text-gray-500">{d.stops}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </Reveal>
      </div>

      {/* DÍA 1 - fondo stone */}
      <div className="bg-stone-50">
        <Reveal>
          <section id="dia-1" className="max-w-4xl mx-auto px-6 lg:px-10 py-16 md:py-24">
            <div className="flex items-center gap-4 mb-12">
              <span className="flex items-center justify-center w-14 h-14 bg-teal-500 text-white font-serif text-2xl rounded-sm shadow-lg shadow-teal-500/20">1</span>
              <div>
                <span className="text-[10px] uppercase tracking-[.2em] text-teal-600 font-medium">Día 1</span>
                <h2 className="font-serif text-2xl md:text-3xl text-gray-900">La Acrópolis y el Legado de los Dioses</h2>
              </div>
            </div>

            {/* Acrópolis */}
            <div className="mb-16">
              <div className="relative mb-6 rounded-sm overflow-hidden">
                <img src="https://images.pexels.com/photos/164336/pexels-photo-164336.jpeg" alt="Partenón en la Acrópolis" className="w-full aspect-[2/1] object-cover" loading="lazy" />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-900 text-[10px] uppercase tracking-wider font-bold px-3 py-1.5 rounded-full">08:00h</span>
                </div>
              </div>
              <h3 className="font-serif text-2xl text-gray-900 mb-4">Acrópolis de Atenas</h3>
              <p className="text-gray-600 leading-relaxed mb-6 text-lg font-light">
                Comenzamos en el lugar más emblemático de Grecia. Esta roca sagrada de 156 metros domina Atenas desde hace 2.500 años. Aquí verás el Partenón, el templo más perfecto jamás construido, dedicado a Atenea.
              </p>

              <div className="bg-amber-50 border-l-4 border-amber-400 p-5 rounded-r-sm mb-6">
                <p className="text-sm text-amber-900 font-medium mb-1">Llega a primera hora (8:00h)</p>
                <p className="text-sm text-amber-800">Las colas pueden superar las 2 horas a partir de las 10:00h. Evitas el calor intenso y los grupos de cruceros (9:30h).</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div className="bg-white p-5 rounded-sm border border-stone-200">
                  <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-4 flex items-center gap-2"><Camera size={12} /> Qué verás</h4>
                  <ul className="space-y-2.5 text-sm text-gray-700">
                    <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-teal-400 rounded-full mt-1.5 flex-shrink-0"></span>Partenón (447-432 a.C.)</li>
                    <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-teal-400 rounded-full mt-1.5 flex-shrink-0"></span>Erecteión con las Cariátides</li>
                    <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-teal-400 rounded-full mt-1.5 flex-shrink-0"></span>Templo de Atenea Niké</li>
                    <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-teal-400 rounded-full mt-1.5 flex-shrink-0"></span>Propileos (entrada monumental)</li>
                    <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-teal-400 rounded-full mt-1.5 flex-shrink-0"></span>Teatro de Dioniso</li>
                    <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-teal-400 rounded-full mt-1.5 flex-shrink-0"></span>Odeón de Herodes Ático</li>
                  </ul>
                </div>
                <div className="bg-white p-5 rounded-sm border border-stone-200">
                  <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-4">Info práctica</h4>
                  <ul className="space-y-2.5 text-sm text-gray-700">
                    <li><strong>Entrada:</strong> 20€ (12€ nov-mar)</li>
                    <li><strong>Horario:</strong> 8:00-20:00 (verano)</li>
                    <li><strong>Duración:</strong> 2-3 horas</li>
                    <li><strong>Calzado:</strong> Cómodo imprescindible</li>
                    <li><strong>Agua:</strong> Lleva (no venden dentro)</li>
                  </ul>
                </div>
              </div>

              <div className="bg-teal-50 border border-teal-100 p-5 rounded-sm mb-6">
                <p className="text-sm text-teal-800">
                  <strong>Truco local:</strong> Entra por el acceso Sur (Dionisio Areopagita). Menos cola y pasas primero por el Teatro de Dioniso. Al salir, usa la salida Norte para subir directamente al Areópago.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <a href="https://etickets.tap.gr/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold px-5 py-3 rounded-sm transition-colors shadow-sm">
                  Comprar Entrada Oficial <ExternalLink size={12} />
                </a>
                <a href="https://gyg.me/Qj5yoL5g" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 text-xs font-semibold px-5 py-3 rounded-sm transition-colors">
                  Tour Guiado en Español <ExternalLink size={12} />
                </a>
              </div>
            </div>

            {/* Areópago */}
            <div className="mb-16">
              <div className="relative mb-6 rounded-sm overflow-hidden">
                <img src="https://images.pexels.com/photos/7218638/pexels-photo-7218638.jpeg" alt="Vista desde la Colina del Areópago" className="w-full aspect-[2/1] object-cover" loading="lazy" />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-900 text-[10px] uppercase tracking-wider font-bold px-3 py-1.5 rounded-full">11:00h</span>
                </div>
                <div className="absolute bottom-4 right-4">
                  <span className="bg-teal-500/90 text-white text-[9px] uppercase tracking-wider font-bold px-3 py-1.5 rounded-full">Gratis</span>
                </div>
              </div>
              <h3 className="font-serif text-2xl text-gray-900 mb-4">Colina del Areópago</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Al salir de la Acrópolis, sube esta roca lisa donde los atenienses celebraban juicios hace 2.500 años. Según la mitología, aquí fue juzgado Ares.
              </p>
              <div className="bg-rose-50 border-l-4 border-rose-400 p-5 rounded-r-sm mb-6">
                <p className="text-sm text-rose-900 font-medium mb-1">El mejor atardecer de Atenas</p>
                <p className="text-sm text-rose-800">Vuelve al atardecer (18:00-19:00h verano). Ver el sol ponerse detrás del Partenón mientras Atenas se ilumina es una de las experiencias más mágicas de Grecia.</p>
              </div>
              <div className="flex flex-wrap gap-3 text-xs text-gray-500">
                <span className="bg-white px-3 py-1.5 rounded-full border border-stone-200">Aquí predicó San Pablo (51 d.C.)</span>
                <span className="bg-white px-3 py-1.5 rounded-full border border-stone-200">Roca resbaladiza</span>
                <span className="bg-white px-3 py-1.5 rounded-full border border-stone-200">2 min de la Acrópolis</span>
              </div>
            </div>

            {/* Ágora Romana */}
            <div className="mb-16">
              <div className="relative mb-6 rounded-sm overflow-hidden">
                <img src="https://images.pexels.com/photos/11649392/pexels-photo-11649392.jpeg" alt="Ágora Romana con la Torre de los Vientos" className="w-full aspect-[2/1] object-cover" loading="lazy" />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-900 text-[10px] uppercase tracking-wider font-bold px-3 py-1.5 rounded-full">11:30h</span>
                </div>
              </div>
              <h3 className="font-serif text-2xl text-gray-900 mb-4">Ágora Romana</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Mercado público construido entre el 19-11 a.C. Destaca la Torre de los Vientos (50 a.C.), un reloj hidráulico octogonal: el primer observatorio meteorológico de la historia.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                <div className="bg-white p-3 rounded-sm border border-stone-200 text-center">
                  <span className="text-lg font-semibold text-gray-900">8€</span>
                  <p className="text-[10px] text-gray-500 mt-0.5">entrada</p>
                </div>
                <div className="bg-white p-3 rounded-sm border border-stone-200 text-center">
                  <span className="text-lg font-semibold text-gray-900">30-45</span>
                  <p className="text-[10px] text-gray-500 mt-0.5">minutos</p>
                </div>
                <div className="bg-white p-3 rounded-sm border border-stone-200 text-center">
                  <span className="text-lg font-semibold text-gray-900">8:00</span>
                  <p className="text-[10px] text-gray-500 mt-0.5">apertura</p>
                </div>
                <div className="bg-teal-50 p-3 rounded-sm border border-teal-200 text-center">
                  <span className="text-lg font-semibold text-teal-700">30€</span>
                  <p className="text-[10px] text-teal-600 mt-0.5">pase combinado</p>
                </div>
              </div>
              <p className="text-sm text-gray-500 bg-white p-4 rounded-sm border border-stone-200">
                El <strong>Pase Combinado (30€)</strong> incluye: Acrópolis, Ágora Romana, Biblioteca de Adriano, Ágora Antigua, Kerameikos y más. Válido 5 días. Rentable si visitas +2 lugares.
              </p>
            </div>

            {/* Biblioteca de Adriano */}
            <div className="mb-16 p-6 bg-white border border-stone-200 rounded-sm">
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-serif text-xl text-gray-900">Biblioteca de Adriano</h3>
                <span className="bg-stone-100 text-gray-600 text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-full">12:15h</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Construida por Adriano en 132 d.C. Un complejo cultural con salas de lectura, jardines y aulas. Llamada "de las 100 columnas" por las columnas corintias del jardín interior.
              </p>
              <div className="flex flex-wrap gap-3 text-xs text-gray-500">
                <span className="bg-stone-50 px-3 py-1.5 rounded-full border border-stone-200">6€ (incluida en pase)</span>
                <span className="bg-stone-50 px-3 py-1.5 rounded-full border border-stone-200">20-30 min</span>
                <span className="bg-stone-50 px-3 py-1.5 rounded-full border border-stone-200">Al lado del Ágora Romana</span>
              </div>
            </div>

            {/* Monastiraki */}
            <div className="mb-16">
              <div className="relative mb-6 rounded-sm overflow-hidden">
                <img src="https://images.pexels.com/photos/15339398/pexels-photo-15339398.jpeg" alt="Plaza Monastiraki" className="w-full aspect-[2/1] object-cover" loading="lazy" />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-900 text-[10px] uppercase tracking-wider font-bold px-3 py-1.5 rounded-full">13:00h</span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-amber-500/90 text-white text-[9px] uppercase tracking-wider font-bold px-3 py-1.5 rounded-full">Almuerzo</span>
                </div>
              </div>
              <h3 className="font-serif text-2xl text-gray-900 mb-4">Monastiraki</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Barrio animado con bazares, mercadillos y la plaza más vibrante de Atenas. El famoso Flea Market funciona todos los días pero los domingos es más completo.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-white p-5 rounded-sm border border-stone-200">
                  <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-3 flex items-center gap-2"><Utensils size={12} /> Dónde comer</h4>
                  <ul className="space-y-2.5 text-sm text-gray-700">
                    <li><strong>Thanasis</strong> — Souvlaki y kebabs <span className="text-teal-600 font-medium">8-12€</span></li>
                    <li><strong>Savvas</strong> — Gyros tradicional <span className="text-teal-600 font-medium">6-10€</span></li>
                    <li><strong>MS Roof Garden</strong> — Terraza panorámica <span className="text-teal-600 font-medium">15-25€</span></li>
                  </ul>
                </div>
                <div className="bg-white p-5 rounded-sm border border-stone-200">
                  <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-3">Qué comprar</h4>
                  <ul className="space-y-2.5 text-sm text-gray-700">
                    <li>Ojo griego (Mati)</li>
                    <li>Komboloi (rosarios griegos)</li>
                    <li>Sandalias de cuero artesanas</li>
                    <li>Aceite de oliva y aceitunas</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Ágora de Atenas */}
            <div>
              <div className="relative mb-6 rounded-sm overflow-hidden">
                <img src="https://images.pexels.com/photos/18757918/pexels-photo-18757918.jpeg" alt="Templo de Hefesto" className="w-full aspect-[2/1] object-cover" loading="lazy" />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-900 text-[10px] uppercase tracking-wider font-bold px-3 py-1.5 rounded-full">14:30h</span>
                </div>
              </div>
              <h3 className="font-serif text-2xl text-gray-900 mb-4">Ágora de Atenas</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Aquí nació la democracia occidental hace 2.500 años. El centro neurálgico donde Sócrates, Platón y Aristóteles caminaron debatiendo filosofía.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white p-5 rounded-sm border border-stone-200">
                  <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-3">Imprescindibles</h4>
                  <ul className="space-y-2.5 text-sm text-gray-700">
                    <li><strong>Templo de Hefesto:</strong> El templo griego mejor conservado del mundo</li>
                    <li><strong>Stoa de Átalo:</strong> Pórtico reconstruido, ahora museo</li>
                    <li><strong>Biblioteca de Pantainos:</strong> Ruinas del s. II</li>
                  </ul>
                </div>
                <div className="bg-white p-5 rounded-sm border border-stone-200">
                  <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-3">Info</h4>
                  <ul className="space-y-2.5 text-sm text-gray-700">
                    <li><strong>Entrada:</strong> 10€ (incluida en pase)</li>
                    <li><strong>Horario:</strong> 8:00-20:00</li>
                    <li><strong>Duración:</strong> 1.5-2 horas</li>
                    <li><strong>Museo:</strong> Incluido en la entrada</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </Reveal>
      </div>

      {/* DÍA 2 - fondo white */}
      <div className="bg-white">
        <Reveal>
          <section id="dia-2" className="max-w-4xl mx-auto px-6 lg:px-10 py-16 md:py-24">
            <div className="flex items-center gap-4 mb-12">
              <span className="flex items-center justify-center w-14 h-14 bg-amber-500 text-white font-serif text-2xl rounded-sm shadow-lg shadow-amber-500/20">2</span>
              <div>
                <span className="text-[10px] uppercase tracking-[.2em] text-amber-600 font-medium">Día 2</span>
                <h2 className="font-serif text-2xl md:text-3xl text-gray-900">Templos Olímpicos, Estadios y Museos</h2>
              </div>
            </div>

            {/* Templo de Zeus */}
            <div className="mb-16">
              <div className="relative mb-6 rounded-sm overflow-hidden">
                <img src="https://images.pexels.com/photos/8349098/pexels-photo-8349098.jpeg" alt="Columnas del Templo de Zeus Olímpico" className="w-full aspect-[2/1] object-cover" loading="lazy" />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-900 text-[10px] uppercase tracking-wider font-bold px-3 py-1.5 rounded-full">09:00h</span>
                </div>
              </div>
              <h3 className="font-serif text-2xl text-gray-900 mb-4">Templo de Zeus Olímpico</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Las columnas más altas de Grecia. Tardó 700 años en construirse (515 a.C. - 131 d.C.). Tenía 104 columnas corintias de 17 metros. Hoy quedan 15 en pie, pero su magnitud sigue impresionando.
              </p>
              <div className="flex flex-wrap gap-3 text-xs">
                <span className="bg-slate-100 text-gray-700 px-3 py-1.5 rounded-full font-medium">8€ (pase combinado)</span>
                <span className="bg-slate-100 text-gray-700 px-3 py-1.5 rounded-full font-medium">8:00-20:00</span>
                <span className="bg-slate-100 text-gray-700 px-3 py-1.5 rounded-full font-medium">30-45 min</span>
                <span className="bg-slate-100 text-gray-700 px-3 py-1.5 rounded-full font-medium">10 min de Syntagma</span>
              </div>
            </div>

            {/* Estadio Panatenaico */}
            <div className="mb-16">
              <div className="relative mb-6 rounded-sm overflow-hidden">
                <img src="https://images.pexels.com/photos/20787843/pexels-photo-20787843.jpeg" alt="Estadio Panatenaico" className="w-full aspect-[2/1] object-cover" loading="lazy" />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-900 text-[10px] uppercase tracking-wider font-bold px-3 py-1.5 rounded-full">10:00h</span>
                </div>
                <div className="absolute bottom-4 right-4">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-900 text-[9px] uppercase tracking-wider font-bold px-3 py-1.5 rounded-full">Juegos Olímpicos 1896</span>
                </div>
              </div>
              <h3 className="font-serif text-2xl text-gray-900 mb-4">Estadio Panatenaico</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Aquí se celebraron los primeros Juegos Olímpicos modernos en 1896. El único estadio del mundo construido completamente en mármol blanco. Capacidad: 45.000 espectadores.
              </p>
              <div className="bg-slate-50 p-5 rounded-sm border border-slate-200 mb-6">
                <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-3">La experiencia</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-700">
                  <p>Baja a la pista olímpica</p>
                  <p>Sube a las gradas superiores</p>
                  <p>Visita museo con antorchas</p>
                  <p>Foto en el podio olímpico</p>
                </div>
              </div>
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex flex-wrap gap-3 text-xs">
                  <span className="bg-slate-100 text-gray-700 px-3 py-1.5 rounded-full font-medium">10€ (incluye audioguía)</span>
                  <span className="bg-slate-100 text-gray-700 px-3 py-1.5 rounded-full font-medium">45-60 min</span>
                </div>
                <a href="https://www.panathenaicstadium.gr/en/home" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-teal-600 hover:text-teal-700 text-xs font-semibold transition-colors">
                  Comprar entrada <ExternalLink size={11} />
                </a>
              </div>
            </div>

            {/* Plaza Syntagma */}
            <div className="mb-16">
              <div className="relative mb-6 rounded-sm overflow-hidden">
                <img src="https://images.pexels.com/photos/18757926/pexels-photo-18757926.jpeg" alt="Evzones en Plaza Syntagma" className="w-full aspect-[2/1] object-cover" loading="lazy" />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-900 text-[10px] uppercase tracking-wider font-bold px-3 py-1.5 rounded-full">11:30h</span>
                </div>
                <div className="absolute bottom-4 right-4">
                  <span className="bg-teal-500/90 text-white text-[9px] uppercase tracking-wider font-bold px-3 py-1.5 rounded-full">Gratis</span>
                </div>
              </div>
              <h3 className="font-serif text-2xl text-gray-900 mb-4">Plaza Syntagma — Cambio de Guardia</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                La plaza principal frente al Parlamento. Cada hora se celebra el cambio de guardia de los Evzones. Los domingos a las 11:00h la ceremonia es completa con toda la compañía.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-slate-50 p-4 rounded-sm">
                  <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-2">Horarios</h4>
                  <ul className="space-y-1.5 text-sm text-gray-700">
                    <li>Cada hora en punto (24h)</li>
                    <li>Domingos 11:00h: ceremonia completa</li>
                    <li>Duración: 10-15 min</li>
                  </ul>
                </div>
                <div className="bg-slate-50 p-4 rounded-sm">
                  <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-2">Curiosidades</h4>
                  <ul className="space-y-1.5 text-sm text-gray-700">
                    <li>Cada zapato pesa 3 kg (60 clavos)</li>
                    <li>Fustanella con 400 pliegues</li>
                    <li>Paso a 90 grados</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Plaka */}
            <div className="mb-16">
              <div className="relative mb-6 rounded-sm overflow-hidden">
                <img src="https://images.pexels.com/photos/11649391/pexels-photo-11649391.jpeg" alt="Barrio de Plaka" className="w-full aspect-[2/1] object-cover" loading="lazy" />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-900 text-[10px] uppercase tracking-wider font-bold px-3 py-1.5 rounded-full">12:30h</span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-amber-500/90 text-white text-[9px] uppercase tracking-wider font-bold px-3 py-1.5 rounded-full">Almuerzo</span>
                </div>
              </div>
              <h3 className="font-serif text-2xl text-gray-900 mb-4">Barrio de Plaka</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                El barrio más antiguo y encantador de Atenas. Calles empedradas, casas neoclásicas del siglo XIX, buganvillas y tabernas a los pies de la Acrópolis.
              </p>
              <div className="bg-slate-50 p-5 rounded-sm border border-slate-100 mb-4">
                <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-3 flex items-center gap-2"><Utensils size={12} /> Dónde comer</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700">
                  <p><strong>Arcadia:</strong> Taverna familiar — <span className="text-teal-600">12-20€</span></p>
                  <p><strong>Victory Cafe:</strong> Comida típica — <span className="text-teal-600">10-18€</span></p>
                  <p><strong>To Kafeneio:</strong> Escondida, sin turistas — <span className="text-teal-600">15-25€</span></p>
                  <p><strong>Avocado:</strong> Opciones veganas — <span className="text-teal-600">10-16€</span></p>
                </div>
              </div>
            </div>

            {/* Museo Acrópolis */}
            <div className="mb-16 bg-slate-900 text-white p-8 rounded-sm">
              <h3 className="font-serif text-2xl mb-4">Museo de la Acrópolis <span className="text-white/50 font-sans text-sm font-normal ml-2">14:30h</span></h3>
              <p className="text-white/70 leading-relaxed mb-6">
                Museo ultramoderno (2009) con los tesoros originales de la Acrópolis. Suelo de cristal sobre excavaciones arqueológicas visibles.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-white/40 mb-3">Imprescindibles</h4>
                  <ul className="space-y-2 text-sm text-white/70">
                    <li>Sala del Partenón (frisos originales, planta 3)</li>
                    <li>5 Cariátides originales del Erecteión</li>
                    <li>Korai arcaicas preclásicas</li>
                    <li>Suelo de cristal con ruinas</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-white/40 mb-3">Info</h4>
                  <ul className="space-y-2 text-sm text-white/70">
                    <li><strong className="text-white">15€</strong> (10€ nov-mar)</li>
                    <li>9:00-20:00 (viernes hasta 22:00)</li>
                    <li>Duración: 1.5-2 horas</li>
                    <li>Audioguía: 5€ (recomendada)</li>
                  </ul>
                </div>
              </div>
              <a href="https://www.theacropolismuseum.gr/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-slate-900 hover:bg-gray-100 text-xs font-semibold px-5 py-3 rounded-sm transition-colors">
                Comprar Entradas <ExternalLink size={12} />
              </a>
            </div>

            {/* Licabeto */}
            <div>
              <h3 className="font-serif text-2xl text-gray-900 mb-4">Monte Licabeto <span className="text-gray-400 font-sans text-sm font-normal ml-2">17:30h — Atardecer</span></h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                El punto más alto de Atenas (277m). Al atardecer, la Acrópolis se ilumina mientras el sol se pone sobre el Mar Egeo. Capilla blanca, restaurante panorámico y teatro al aire libre.
              </p>
              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="bg-slate-50 p-4 rounded-sm text-center">
                  <span className="text-lg font-semibold text-gray-900">10€</span>
                  <p className="text-[10px] text-gray-500 mt-0.5">funicular i/v</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-sm text-center">
                  <span className="text-lg font-semibold text-gray-900">0€</span>
                  <p className="text-[10px] text-gray-500 mt-0.5">a pie (20-30 min)</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-sm text-center">
                  <span className="text-lg font-semibold text-gray-900">277m</span>
                  <p className="text-[10px] text-gray-500 mt-0.5">altura</p>
                </div>
              </div>
              <p className="text-sm text-amber-800 bg-amber-50 p-4 rounded-sm border border-amber-100">
                Llega 45 min antes del atardecer para buen sitio. Verano: sunset ~20:30h (masificado). Invierno: ~17:30h (más tranquilo).
              </p>
            </div>
          </section>
        </Reveal>
      </div>

      {/* DÍA 3 - fondo teal oscuro */}
      <div className="bg-slate-800">
        <Reveal>
          <section id="dia-3" className="max-w-4xl mx-auto px-6 lg:px-10 py-16 md:py-24">
            <div className="flex items-center gap-4 mb-10">
              <span className="flex items-center justify-center w-14 h-14 bg-rose-500 text-white font-serif text-2xl rounded-sm shadow-lg shadow-rose-500/20">3</span>
              <div>
                <span className="text-[10px] uppercase tracking-[.2em] text-rose-300 font-medium">Día 3</span>
                <h2 className="font-serif text-2xl md:text-3xl text-white">Excursiones Legendarias</h2>
              </div>
            </div>
            <p className="text-white/60 leading-relaxed mb-10">
              Sal de Atenas y descubre algunos de los lugares más legendarios de Grecia.
            </p>

            <div className="space-y-4">
              {[
                {
                  title: 'Delfos — El Ombligo del Mundo',
                  desc: '180 km. El centro espiritual de la civilización helénica. La Pitia pronunciaba profecías en trance que reyes consultaban antes de decisiones importantes.',
                  highlights: ['Templo de Apolo', 'Teatro (5.000 espectadores)', 'Tholos de Atenea', 'Museo (Auriga de Delfos)'],
                  info: 'Desde 95€ · 10-11h · Guía español',
                  links: [
                    { text: 'Tour Delfos', url: 'https://gyg.me/DYkIGLUb' },
                    { text: 'Delfos + Hosios Lukas', url: 'https://gyg.me/z8aMEqEU' },
                  ],
                  tag: 'Más popular'
                },
                {
                  title: 'Meteora — Monasterios en el Cielo',
                  desc: '350 km. Monasterios ortodoxos sobre pilares de piedra de hasta 400m. 6 monasterios activos de los 24 originales. Patrimonio UNESCO.',
                  highlights: ['Gran Meteoro (s. XIV)', 'Varlaam (frescos)', 'Santísima Trinidad (James Bond)', 'Roussanou (accesible)'],
                  info: '1 día: 89€ (13-14h) · 2 días: 219€ con hotel',
                  links: [
                    { text: 'Tour 1 Día', url: 'https://gyg.me/bChRUuFg' },
                    { text: 'Tour 2 Días', url: 'https://gyg.me/tXG3xGd0' },
                  ],
                  tag: 'Más fotogénico'
                },
                {
                  title: 'Argólida — Corinto, Micenas y Epidauro',
                  desc: 'Tres sitios UNESCO en el Peloponeso. El reino de Agamenón, el teatro con la mejor acústica del mundo antiguo, y el Canal de Corinto.',
                  highlights: ['Puerta de los Leones (1250 a.C.)', 'Teatro Epidauro (14.000 espectadores)', 'Canal de Corinto (6 km)', 'Almuerzo en Nafplio'],
                  info: 'Desde 95€ · 10-11h · Guía español',
                  links: [
                    { text: 'Tour Argólida', url: 'https://gyg.me/r9Q0sY6u' },
                  ],
                  tag: 'Para fans de mitología'
                }
              ].map((exc, i) => (
                <div key={i}>
                  <button
                    onClick={() => setOpenDay(openDay === i + 10 ? null : i + 10)}
                    className="w-full flex items-center justify-between p-5 bg-white/5 border border-white/10 rounded-sm hover:bg-white/10 transition-colors text-left"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-[9px] uppercase tracking-wider text-teal-300 font-bold bg-teal-900/50 px-2 py-0.5 rounded-full whitespace-nowrap">{exc.tag}</span>
                      <span className="font-semibold text-white">{exc.title}</span>
                    </div>
                    <ChevronDown size={18} className={`text-white/40 transition-transform duration-300 flex-shrink-0 ml-4 ${openDay === i + 10 ? 'rotate-180' : ''}`} />
                  </button>
                  {openDay === i + 10 && (
                    <div className="p-6 bg-white/5 border border-t-0 border-white/10 rounded-b-sm">
                      <p className="text-white/70 leading-relaxed mb-5">{exc.desc}</p>
                      <div className="grid grid-cols-2 gap-2 mb-4">
                        {exc.highlights.map((h, j) => (
                          <span key={j} className="text-sm text-white/60 flex items-center gap-2">
                            <span className="w-1 h-1 bg-teal-400 rounded-full flex-shrink-0"></span>{h}
                          </span>
                        ))}
                      </div>
                      <p className="text-xs text-white/50 mb-5">{exc.info}</p>
                      <div className="flex flex-wrap gap-3">
                        {exc.links.map((link, j) => (
                          <a key={j} href={link.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-slate-900 hover:bg-gray-100 text-xs font-semibold px-4 py-2.5 rounded-sm transition-colors">
                            {link.text} <ExternalLink size={11} />
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        </Reveal>
      </div>

      {/* Más Lugares Imprescindibles */}
      <div className="bg-stone-50">
        <Reveal>
          <section id="lugares-imprescindibles" className="max-w-4xl mx-auto px-6 lg:px-10 py-16 md:py-24">
            <h2 className="font-serif text-3xl md:text-4xl text-gray-900 mb-3">Más lugares imprescindibles</h2>
            <p className="text-gray-500 mb-10">Si tienes más días o quieres profundizar en la ciudad</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { name: 'Museo Arqueológico Nacional', desc: 'Máscara de Agamenón, Mecanismo de Anticitera. 7.000 años de arte griego.', info: '12€ · 2-3h', url: 'https://www.namuseum.gr/en/', tag: 'Imprescindible' },
                { name: 'Kerameikos', desc: 'Necrópolis antigua. Tumbas monumentales. Muy tranquilo, sin turistas.', info: '8€ (pase) · 1h', tag: 'Secreto local' },
                { name: 'Colina Filopappou', desc: 'Senderos entre pinos con la mejor foto alternativa de la Acrópolis.', info: 'Gratis · 1-2h', tag: 'Gratis' },
                { name: 'Barrio de Psyrri', desc: 'El barrio alternativo: murales, galerías, bares trendy y tavernas auténticas.', info: 'Gratis · Noche', tag: 'Nightlife' },
                { name: 'Cabo Sunión', desc: 'Templo de Poseidón (444 a.C.) en un acantilado. Columnas sobre el Egeo al atardecer.', info: 'Tour 45€ · 4-5h', url: 'https://gyg.me/mNa0HJDh', tag: 'Atardecer' },
                { name: 'Jardín Nacional', desc: '15.5 hectáreas con estanques, pavos reales y ruinas escondidas.', info: 'Gratis · Descanso', tag: 'Relax' },
                { name: 'Tour de Vinos Griegos', desc: 'Cata de Retsina, Assyrtiko y Agiorgitiko con quesos y charcutería.', info: 'Desde 75€ · 3-4h', url: 'https://gyg.me/T8PPmWLX', tag: 'Foodie' },
              ].map((place, i) => (
                <div key={i} className="p-5 bg-white border border-stone-200 rounded-sm hover:border-stone-300 hover:shadow-sm transition-all group">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold text-gray-900">{place.name}</h4>
                    <span className="text-[9px] uppercase tracking-wider text-teal-600 font-bold bg-teal-50 px-2 py-0.5 rounded-full whitespace-nowrap ml-2">{place.tag}</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{place.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">{place.info}</span>
                    {place.url && (
                      <a href={place.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-teal-600 hover:text-teal-700 text-xs font-medium transition-colors opacity-0 group-hover:opacity-100">
                        Reservar <ExternalLink size={10} />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </Reveal>
      </div>

      {/* Herramientas esenciales */}
      <div className="bg-teal-700">
        <Reveal>
          <section id="recomendaciones" className="max-w-4xl mx-auto px-6 lg:px-10 py-16 md:py-24">
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-3">Herramientas esenciales</h2>
            <p className="text-teal-100/60 mb-10">Servicios que uso en todos mis viajes</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-white/10 border border-white/10 rounded-sm backdrop-blur-sm">
                <h3 className="font-semibold text-white mb-4">Revolut — Tarjeta sin comisiones</h3>
                <ul className="space-y-2 text-sm text-white/70 mb-6">
                  <li>Sin comisiones por pago en euros</li>
                  <li>Retiros gratuitos en cajeros</li>
                  <li>Control total desde la app</li>
                  <li>Cambio de divisa al mejor tipo</li>
                </ul>
                <a href="https://revolut.com/referral/?referral-code=antoni22jf!DEC1-25-AR-CH1H-CRY&geo-redirect" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-teal-800 hover:bg-teal-50 text-xs font-semibold px-5 py-3 rounded-sm transition-colors">
                  Consigue tu Revolut <ExternalLink size={12} />
                </a>
              </div>
              <div className="p-6 bg-white/10 border border-white/10 rounded-sm backdrop-blur-sm">
                <h3 className="font-semibold text-white mb-4">IATI — Seguro de viaje</h3>
                <ul className="space-y-2 text-sm text-white/70 mb-6">
                  <li>Asistencia médica en el extranjero</li>
                  <li>Cobertura de cancelación</li>
                  <li>Asistencia 24/7 en español</li>
                  <li>Repatriación incluida</li>
                </ul>
                <a href="https://www.iatiseguros.com/?r=37344279073491" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-teal-800 hover:bg-teal-50 text-xs font-semibold px-5 py-3 rounded-sm transition-colors">
                  IATI con 5% descuento <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </section>
        </Reveal>
      </div>

      {/* Gastronomía */}
      <div className="bg-white">
        <Reveal>
          <section id="gastronomia" className="max-w-4xl mx-auto px-6 lg:px-10 py-16 md:py-24">
            <div className="flex items-center gap-3 mb-3">
              <Utensils size={20} className="text-amber-500" />
              <h2 className="font-serif text-3xl md:text-4xl text-gray-900">Guía gastronómica</h2>
            </div>
            <p className="text-gray-500 mb-12">4.000 años de historia culinaria en cada plato</p>

            <h3 className="font-serif text-xl text-gray-900 mb-6">Platos imprescindibles</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-14">
              {[
                { name: 'Moussaka', desc: 'Berenjena, cordero, patata y bechamel gratinada', price: '12-16€', emoji: '🍆' },
                { name: 'Souvlaki & Gyros', desc: 'Brochetas o carne vertical en pita con tzatziki', price: '6-10€', emoji: '🥙' },
                { name: 'Ensalada Griega', desc: 'Tomate, olivas kalamata, feta y aceite de oliva', price: '7-10€', emoji: '🥗' },
                { name: 'Loukoumades', desc: 'Buñuelos dorados bañados en miel de tomillo', price: '5-8€', emoji: '🍩' },
                { name: 'Saganaki', desc: 'Queso frito en sartén con limón', price: '7-9€', emoji: '🧀' },
                { name: 'Pulpo a la Parrilla', desc: 'Pulpo tierno con orégano y limón', price: '14-18€', emoji: '🐙' },
                { name: 'Tzatziki', desc: 'Yogur griego con pepino, ajo y eneldo', price: '4-6€', emoji: '🥒' },
                { name: 'Melitzanosalata', desc: 'Dip de berenjena asada con ajo', price: '5-7€', emoji: '🍆' },
              ].map((dish, i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-slate-50 rounded-sm hover:bg-slate-100 transition-colors">
                  <span className="text-2xl flex-shrink-0">{dish.emoji}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold text-gray-900 text-sm">{dish.name}</h4>
                      <span className="text-sm font-semibold text-teal-600 ml-2">{dish.price}</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-0.5 truncate">{dish.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="font-serif text-xl text-gray-900 mb-6">Bebidas griegas</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-14">
              <div className="p-5 bg-amber-50 border border-amber-100 rounded-sm">
                <h4 className="text-xs uppercase tracking-wider text-amber-700 font-semibold mb-3">Vinos</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li><strong>Retsina:</strong> Blanco con resina (3-5€)</li>
                  <li><strong>Assyrtiko:</strong> Seco de Santorini (5-7€)</li>
                  <li><strong>Agiorgitiko:</strong> Tinto suave (4-6€)</li>
                </ul>
              </div>
              <div className="p-5 bg-blue-50 border border-blue-100 rounded-sm">
                <h4 className="text-xs uppercase tracking-wider text-blue-700 font-semibold mb-3">Licores</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li><strong>Ouzo:</strong> Anís griego (4-6€)</li>
                  <li><strong>Tsipouro:</strong> Aguardiente (3-5€)</li>
                  <li><strong>Metaxa:</strong> Brandy suave (5-7€)</li>
                </ul>
              </div>
              <div className="p-5 bg-stone-50 border border-stone-200 rounded-sm">
                <h4 className="text-xs uppercase tracking-wider text-stone-600 font-semibold mb-3">Cafés y cervezas</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li><strong>Ellinikos:</strong> Café griego (2-3€)</li>
                  <li><strong>Mythos:</strong> Cerveza popular (3-4€)</li>
                  <li><strong>Fix:</strong> La más antigua (4-5€)</li>
                </ul>
              </div>
            </div>

            <h3 className="font-serif text-xl text-gray-900 mb-6">Restaurantes recomendados</h3>
            <div className="space-y-3 mb-10">
              {[
                { name: 'Arcadia Restaurant', desc: 'La mejor moussaka según locales', price: '12-20€', barrio: 'Plaka' },
                { name: 'Thanasis', desc: 'Icónico desde 1950. Los mejores kebabs', price: '8-12€', barrio: 'Monastiraki' },
                { name: 'To Kafeneio', desc: 'Taverna escondida, cocina casera', price: '15-25€', barrio: 'Plaka' },
                { name: 'Avocado', desc: 'Opciones veganas y bowls', price: '10-16€', barrio: 'Plaka' },
                { name: 'MS Roof Garden', desc: 'Terraza con vistas Acrópolis', price: '25-40€', barrio: 'Monastiraki' },
              ].map((r, i) => (
                <div key={i} className="flex items-center justify-between p-4 border border-gray-100 rounded-sm hover:bg-slate-50 transition-colors">
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <h4 className="font-semibold text-gray-900 text-sm">{r.name}</h4>
                      <span className="text-[9px] text-gray-400 uppercase tracking-wider bg-gray-100 px-2 py-0.5 rounded-full">{r.barrio}</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">{r.desc}</p>
                  </div>
                  <span className="text-sm font-semibold text-teal-600 ml-4">{r.price}</span>
                </div>
              ))}
            </div>

            <div className="bg-stone-50 p-6 rounded-sm border border-stone-200">
              <h4 className="font-semibold text-gray-900 mb-4">Come como un local</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-600">
                <ul className="space-y-2">
                  <li>Almuerzo 14:00-16:00, cena 21:00-23:00</li>
                  <li>Pide varios platos para compartir (meze)</li>
                  <li>Pan se cobra aparte (kouvert: 1-2€)</li>
                  <li>Di "Kaliorexi!" (buen provecho)</li>
                </ul>
                <ul className="space-y-2">
                  <li>Menú del día: 8-12€ (12:00-16:00)</li>
                  <li>Evita restaurantes con fotos en la puerta</li>
                  <li>Gyros en la calle: 3-5€</li>
                  <li>Propina: 5-10% (no obligatoria)</li>
                </ul>
              </div>
            </div>
          </section>
        </Reveal>
      </div>

      {/* Transporte */}
      <div className="bg-slate-50">
        <Reveal>
          <section id="transporte" className="max-w-4xl mx-auto px-6 lg:px-10 py-16 md:py-24">
            <div className="flex items-center gap-3 mb-3">
              <Train size={20} className="text-blue-500" />
              <h2 className="font-serif text-3xl md:text-4xl text-gray-900">Sistema de transporte</h2>
            </div>
            <p className="text-gray-500 mb-10">Moverse por Atenas es fácil y barato</p>

            <h3 className="font-serif text-xl text-gray-900 mb-5">Metro de Atenas</h3>
            <div className="space-y-3 mb-8">
              {[
                { line: '1', color: 'bg-green-500', name: 'Verde', route: 'Pireo — Kifisia', stops: 'Monastiraki, Omonia, Victoria' },
                { line: '2', color: 'bg-red-500', name: 'Roja', route: 'Agios Antonios — Elliniko', stops: 'Syntagma, Akropoli, Omonia' },
                { line: '3', color: 'bg-blue-500', name: 'Azul', route: 'Aeropuerto — Centro', stops: 'Aeropuerto, Syntagma, Monastiraki' },
              ].map((l) => (
                <div key={l.line} className="flex items-center gap-4 p-4 bg-white rounded-sm border border-gray-100">
                  <div className={`${l.color} w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>{l.line}</div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-gray-900 text-sm">{l.name}: {l.route}</p>
                    <p className="text-xs text-gray-500 truncate">{l.stops}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
              <div className="p-4 bg-white rounded-sm border border-gray-100 text-center">
                <span className="text-xl font-semibold text-gray-900">1,20€</span>
                <p className="text-[10px] text-gray-500 mt-1">Sencillo (90 min)</p>
              </div>
              <div className="p-4 bg-white rounded-sm border border-gray-100 text-center">
                <span className="text-xl font-semibold text-gray-900">4,10€</span>
                <p className="text-[10px] text-gray-500 mt-1">Diario (24h)</p>
              </div>
              <div className="p-4 bg-teal-50 rounded-sm border-2 border-teal-200 text-center">
                <span className="text-xl font-semibold text-teal-700">8,20€</span>
                <p className="text-[10px] text-teal-600 mt-1 font-medium">5 días (mejor)</p>
              </div>
              <div className="p-4 bg-white rounded-sm border border-gray-100 text-center">
                <span className="text-xl font-semibold text-gray-900">10€</span>
                <p className="text-[10px] text-gray-500 mt-1">Aeropuerto</p>
              </div>
            </div>

            <div className="bg-teal-50 border-l-4 border-teal-400 p-5 rounded-r-sm mb-10">
              <p className="text-sm text-teal-800">
                <strong>Consejo:</strong> Compra el billete de 5 días (8,20€) al llegar. Centro histórico siempre a pie. Metro solo para Licabeto o barrios alejados. Taxis solo de noche o con equipaje.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: 'Autobuses', items: ['1,20€ (kioscos/máquinas)', 'Frecuencia: 10-30 min', 'Funcionan 24h (líneas "N")'] },
                { title: 'Tranvía', items: ['Centro → playas del sur', '1,20€ billete', '45-60 min a la playa'] },
                { title: 'Taxis', items: ['Bajada: 1,30€ día / 1,90€ noche', 'Km: 0,74€ día / 1,30€ noche', 'App recomendada: Beat'] },
                { title: 'A pie', items: ['Acrópolis → Syntagma: 15 min', 'Syntagma → Monastiraki: 10 min', 'Plaka → Ágora: 5 min'] },
              ].map((t, i) => (
                <div key={i} className="p-4 bg-white rounded-sm border border-gray-100">
                  <h4 className="font-semibold text-sm text-gray-900 mb-2">{t.title}</h4>
                  <ul className="space-y-1.5 text-xs text-gray-600">
                    {t.items.map((item, j) => <li key={j}>{item}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </Reveal>
      </div>

      {/* Consejos Finales */}
      <div className="bg-white">
        <Reveal>
          <section id="consejos" className="max-w-4xl mx-auto px-6 lg:px-10 py-16 md:py-24">
            <h2 className="font-serif text-3xl md:text-4xl text-gray-900 mb-10">Consejos finales</h2>

            <div className="space-y-3">
              {[
                { q: 'Mejor época para visitar', a: 'Abril-Mayo y Septiembre-Octubre (20-28°C, menos turistas). Evita julio-agosto (35-40°C, masificación). Invierno: precios bajos pero horario reducido en monumentos.' },
                { q: 'Frases útiles en griego', a: 'Hola: Yassas · Gracias: Efharisto · Por favor: Parakalo · Adiós: Antio · Sí/No: Ne/Ohi · ¿Cuánto?: Poso kani? · La cuenta: To logariasmo · Salud: Yamas!' },
                { q: 'Propinas', a: 'No obligatorias pero apreciadas. Restaurantes: 5-10%. Taxis: redondear. Hoteles: 1-2€. Guías: 2-5€/persona.' },
                { q: 'Seguridad', a: 'Atenas es muy segura. Zonas OK día y noche: Plaka, Monastiraki, Syntagma, Kolonaki. Cuidado con carteristas en metro. Evita de noche: Omonia, Exarchia.' },
                { q: 'Electricidad', a: '230V, 50Hz. Enchufes tipo C y F (europeo estándar). NO necesitas adaptador desde España.' },
                { q: 'WiFi e Internet', a: 'WiFi gratis en todos los hoteles y mayoría de cafés. Roaming UE: sin cargos extra. SIM local: Cosmote o Vodafone (10-20€ prepago).' },
                { q: 'Baños (importante)', a: 'El papel NO va al water. Se tira a la papelera. Tuberías antiguas. Es la norma en TODO el país, incluso hoteles de lujo.' },
                { q: 'Horarios comerciales', a: 'Tiendas: Lun-Sáb 9:00-21:00. Restaurantes: almuerzo 12-16h, cena 19-00h. Monumentos: 8:00-20:00 (verano).' },
              ].map((item, i) => (
                <div key={i} className="border border-gray-100 rounded-sm overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 hover:bg-slate-50 transition-colors text-left"
                  >
                    <span className="font-medium text-gray-900 text-sm">{item.q}</span>
                    <ChevronDown size={16} className={`text-gray-400 transition-transform duration-300 flex-shrink-0 ml-4 ${openFaq === i ? 'rotate-180' : ''}`} />
                  </button>
                  {openFaq === i && (
                    <div className="px-5 pb-5">
                      <p className="text-sm text-gray-600 leading-relaxed">{item.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Souvenirs */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 bg-green-50 border border-green-100 rounded-sm">
                <h4 className="text-xs uppercase tracking-wider text-green-700 font-semibold mb-3">Souvenirs auténticos</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>Aceite de oliva virgen extra</li>
                  <li>Miel de tomillo griega</li>
                  <li>Komboloi (rosario griego)</li>
                  <li>Ojo griego (Mati)</li>
                  <li>Sandalias de cuero</li>
                  <li>Esponjas naturales</li>
                  <li>Ouzo (licor de anís)</li>
                </ul>
              </div>
              <div className="p-5 bg-red-50 border border-red-100 rounded-sm">
                <h4 className="text-xs uppercase tracking-wider text-red-700 font-semibold mb-3">Evita comprar</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>Estatuas de "mármol" (son yeso)</li>
                  <li>Jarrones "antiguos" (made in China)</li>
                  <li>Toga y laureles (turistada)</li>
                  <li>Imanes baratos (baja calidad)</li>
                  <li>Comprar en Plaka central (caro)</li>
                </ul>
              </div>
            </div>
          </section>
        </Reveal>
      </div>

      {/* Presupuestos */}
      <div className="bg-slate-900">
        <Reveal>
          <section id="presupuestos" className="max-w-4xl mx-auto px-6 lg:px-10 py-16 md:py-24">
            <div className="flex items-center gap-3 mb-3">
              <Wallet size={20} className="text-teal-400" />
              <h2 className="font-serif text-3xl md:text-4xl text-white">Presupuestos detallados</h2>
            </div>
            <p className="text-white/50 mb-12">3 días / 2 noches · Vuelos desde España incluidos</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="p-6 bg-white/5 border border-white/10 rounded-sm">
                <span className="text-[9px] uppercase tracking-wider text-teal-300 font-bold">Budget</span>
                <h3 className="font-serif text-xl text-white mt-1 mb-1">Mochilero</h3>
                <p className="text-3xl font-semibold text-teal-400 mb-5">350-450€</p>
                <ul className="space-y-2 text-sm text-white/60">
                  <li>Vuelos low-cost: 80-120€</li>
                  <li>Hostel: 15-25€/noche x 2</li>
                  <li>Comida: 20-25€/día x 3</li>
                  <li>Transporte: 18-20€</li>
                  <li>Atracciones: 90-100€</li>
                </ul>
              </div>

              <div className="p-6 bg-teal-600/20 border-2 border-teal-400/40 rounded-sm relative">
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-teal-500 text-white text-[9px] uppercase tracking-wider font-bold px-3 py-1 rounded-full">Recomendado</span>
                <span className="text-[9px] uppercase tracking-wider text-teal-300 font-bold">Equilibrio perfecto</span>
                <h3 className="font-serif text-xl text-white mt-1 mb-1">Estándar</h3>
                <p className="text-3xl font-semibold text-teal-400 mb-5">600-800€</p>
                <ul className="space-y-2 text-sm text-white/60">
                  <li>Vuelos con equipaje: 150-200€</li>
                  <li>Hotel 3*: 70-100€/noche x 2</li>
                  <li>Comida: 40-50€/día x 3</li>
                  <li>Transporte: 60-70€</li>
                  <li>Tours + atracciones: 180-220€</li>
                </ul>
              </div>

              <div className="p-6 bg-white/5 border border-white/10 rounded-sm">
                <span className="text-[9px] uppercase tracking-wider text-amber-300 font-bold">Premium</span>
                <h3 className="font-serif text-xl text-white mt-1 mb-1">Lujo</h3>
                <p className="text-3xl font-semibold text-amber-400 mb-5">1.200-1.800€</p>
                <ul className="space-y-2 text-sm text-white/60">
                  <li>Vuelos premium: 300-500€</li>
                  <li>Hotel 5*: 200-400€/noche x 2</li>
                  <li>Comida gourmet: 80-120€/día</li>
                  <li>Transfers privados: 150-200€</li>
                  <li>Tours VIP: 350-450€</li>
                </ul>
              </div>
            </div>

            <p className="text-xs text-white/40 mt-8 text-center">
              Añade 10-15% para imprevistos. No incluido: seguro (30-50€ IATI), shopping extra, propinas.
            </p>
          </section>
        </Reveal>
      </div>
    </>
  );
};

export default AthensGuideArticle;
