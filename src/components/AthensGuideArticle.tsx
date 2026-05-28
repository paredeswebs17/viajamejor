import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, Share2, Clock, MapPin, ChevronDown, ExternalLink } from 'lucide-react';
import StickyTableOfContents from './StickyTableOfContents';

interface AthensGuideArticleProps {
  onBack: () => void;
}

const Reveal: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) entry.target.classList.add('visible'); },
      { threshold: 0.1 }
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
      <div className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <img
          src="https://images.pexels.com/photos/5380087/pexels-photo-5380087.jpeg"
          alt="Vista del Partenón en la Acrópolis de Atenas al atardecer"
          className="absolute inset-0 w-full h-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-slate-900/20" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <div className="max-w-4xl mx-auto">
            <button
              onClick={onBack}
              className="inline-flex items-center text-white/70 hover:text-white text-xs uppercase tracking-wider mb-6 transition-colors"
            >
              <ArrowLeft size={14} className="mr-2" />
              Volver a guías
            </button>
            <span className="block text-[10px] uppercase tracking-[.25em] text-teal-300 font-medium mb-4">
              Guía completa · 3 días
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-[1.05] tracking-tight mb-6">
              Atenas en 3 Días
            </h1>
            <p className="text-white/70 text-lg font-light max-w-xl mb-6">
              La cuna de la civilización occidental entre ruinas milenarias
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <span className="inline-flex items-center gap-1.5 text-white/60 text-xs">
                <Clock size={12} />
                16 min lectura
              </span>
              <span className="inline-flex items-center gap-1.5 text-white/60 text-xs">
                <MapPin size={12} />
                Atenas, Grecia
              </span>
              <button
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({ title: 'Atenas en 3 Días', url: window.location.href }).catch(() => {});
                  } else {
                    navigator.clipboard.writeText(window.location.href).then(() => alert('Enlace copiado'));
                  }
                }}
                className="inline-flex items-center gap-1.5 text-white/60 hover:text-white text-xs transition-colors"
              >
                <Share2 size={12} />
                Compartir
              </button>
            </div>
          </div>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-6 lg:px-10 py-16 md:py-24">

        {/* Por qué visitar */}
        <Reveal>
          <section id="por-que-visitar" className="mb-20">
            <h2 className="font-serif text-3xl md:text-4xl text-gray-900 mb-8">¿Por qué visitar Atenas?</h2>
            <div className="space-y-5 text-gray-600 leading-relaxed">
              <p>
                Atenas no es simplemente una ciudad: es un museo al aire libre donde cada piedra cuenta 2.500 años de historia. Aquí, las ruinas de la democracia más antigua del mundo conviven con una vibrante escena cultural moderna; las columnas del Partenón dialogan con el arte urbano de Psyrri; y las leyendas de dioses olímpicos se mezclan con el bullicio de tavernas donde los atenienses debaten sobre fútbol y política con la misma pasión que sus ancestros debatían filosofía en el Ágora.
              </p>
              <p>
                Es subir a la Colina del Areópago y contemplar el atardecer sobre el templo donde Sócrates paseaba hace 2.400 años. Es perderte en las estrechas calles de Plaka rodeado del aroma de souvlaki recién hecho y aceitunas kalamata. Es descubrir que la arquitectura neoclásica del siglo XIX se funde perfectamente con vestigios helenísticos.
              </p>
              <p className="text-gray-900 font-medium">
                Si buscas una ciudad donde la historia antigua no está encerrada en museos sino viva en cada esquina, donde la mitología griega cobra sentido al ver los templos que aprendiste en el colegio, y donde la gastronomía mediterránea alcanza su máxima expresión, Atenas es tu destino perfecto.
              </p>
            </div>
          </section>
        </Reveal>

        {/* Llegada Aeropuerto */}
        <Reveal>
          <section id="llegada-aeropuerto" className="mb-20">
            <h2 className="font-serif text-3xl md:text-4xl text-gray-900 mb-8">Llegada desde el Aeropuerto</h2>

            <button
              onClick={() => setExpandedAirport(expandedAirport === 'ath' ? null : 'ath')}
              className="w-full flex items-center justify-between p-5 border border-gray-200 rounded-sm hover:border-gray-300 transition-colors mb-4"
            >
              <span className="font-semibold text-gray-900">Aeropuerto Eleftherios Venizelos (ATH)</span>
              <ChevronDown size={18} className={`text-gray-400 transition-transform ${expandedAirport === 'ath' ? 'rotate-180' : ''}`} />
            </button>

            {expandedAirport === 'ath' && (
              <div className="space-y-4 pl-4 border-l-2 border-teal-200 mb-6">
                <div className="p-5 bg-slate-50 rounded-sm">
                  <h4 className="font-semibold text-gray-900 mb-3">Metro Línea 3 (Azul) - La Opción Más Práctica</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-600">
                    <div><strong>Precio:</strong> 10€/persona</div>
                    <div><strong>Duración:</strong> 40 min hasta Syntagma</div>
                    <div><strong>Horario:</strong> 6:30-23:30</div>
                    <div><strong>Frecuencia:</strong> Cada 30 min</div>
                  </div>
                  <p className="text-sm text-teal-700 mt-3 bg-teal-50 p-3 rounded-sm">
                    La opción más económica y directa. Perfecto si tu hotel está cerca de las paradas centrales.
                  </p>
                </div>

                <div className="p-5 bg-slate-50 rounded-sm">
                  <h4 className="font-semibold text-gray-900 mb-3">Bus Expreso X95 - Servicio 24 Horas</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-600">
                    <div><strong>Precio:</strong> 5,50€/persona</div>
                    <div><strong>Duración:</strong> 60-90 min</div>
                    <div><strong>Horario:</strong> 24h / 7 días</div>
                    <div><strong>Destino:</strong> Plaza Syntagma</div>
                  </div>
                  <p className="text-sm text-teal-700 mt-3 bg-teal-50 p-3 rounded-sm">
                    Ideal si llegas fuera del horario del metro. Más lento pero funciona 24/7.
                  </p>
                </div>

                <div className="p-5 bg-slate-50 rounded-sm">
                  <h4 className="font-semibold text-gray-900 mb-3">Transfer Privado - Máximo Confort</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-600">
                    <div><strong>Precio:</strong> Desde 54€ (hasta 4 personas)</div>
                    <div><strong>Duración:</strong> 35-50 min</div>
                  </div>
                  <p className="text-sm text-gray-600 mt-3">Vale la pena si viajas en grupo: 2 pers. = 27€/pers, 3 pers. = 18€/pers, 4+ pers. = 14€/pers.</p>
                  <a href="https://gyg.me/cNL3U6Qt" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-4 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold px-5 py-3 rounded-sm transition-colors">
                    Reservar Transfer <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            )}
          </section>
        </Reveal>

        {/* Dónde dormir */}
        <Reveal>
          <section id="donde-dormir" className="mb-20">
            <h2 className="font-serif text-3xl md:text-4xl text-gray-900 mb-8">Dónde dormir en Atenas</h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              La ubicación de tu hotel en Atenas es clave para aprovechar el viaje. Alójate en el centro histórico para estar cerca de todos los monumentos principales.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                { name: 'Plaka', desc: 'El más encantador, a los pies de la Acrópolis. Caro pero merece la pena.' },
                { name: 'Monastiraki', desc: 'Céntrico, animado, con buen transporte. Zona comercial.' },
                { name: 'Syntagma', desc: 'Corazón de Atenas moderna. Perfecto para transporte público.' },
                { name: 'Kolonaki', desc: 'Barrio elegante y residencial. Más tranquilo y sofisticado.' },
              ].map((b) => (
                <div key={b.name} className="p-5 border border-gray-100 rounded-sm">
                  <h4 className="font-semibold text-gray-900 mb-1">{b.name}</h4>
                  <p className="text-sm text-gray-600">{b.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-teal-50 border-l-2 border-teal-400 p-5 rounded-sm">
              <p className="text-sm text-gray-700">
                <strong>Recomendación:</strong> Busca hotel en Plaka o Monastiraki para estar a 5-10 minutos de la Acrópolis. Reserva con 2-3 meses de antelación.
              </p>
            </div>
          </section>
        </Reveal>

        {/* Itinerario resumen */}
        <Reveal>
          <section id="itinerario" className="mb-20">
            <h2 className="font-serif text-3xl md:text-4xl text-gray-900 mb-8">Itinerario de 3 Días</h2>
            <div className="border border-gray-200 rounded-sm overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="px-5 py-3 text-left font-medium text-xs uppercase tracking-wider">Día</th>
                    <th className="px-5 py-3 text-left font-medium text-xs uppercase tracking-wider">Experiencias</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="px-5 py-4 font-semibold text-gray-900 whitespace-nowrap">Día 1</td>
                    <td className="px-5 py-4 text-gray-600">Acrópolis + Partenón + Areópago + Ágora Romana + Biblioteca de Adriano + Monastiraki + Ágora de Atenas + Templo de Hefesto</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="px-5 py-4 font-semibold text-gray-900 whitespace-nowrap">Día 2</td>
                    <td className="px-5 py-4 text-gray-600">Templo de Zeus Olímpico + Estadio Panatenaico + Plaza Syntagma + Plaka + Museo de la Acrópolis + Monte Licabeto</td>
                  </tr>
                  <tr>
                    <td className="px-5 py-4 font-semibold text-gray-900 whitespace-nowrap">Día 3</td>
                    <td className="px-5 py-4 text-gray-600">Excursión a Delfos / Meteora / Corinto-Micenas-Epidauro</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </Reveal>

        {/* DÍA 1 */}
        <Reveal>
          <section id="dia-1" className="mb-20">
            <div className="flex items-center gap-4 mb-10">
              <span className="flex items-center justify-center w-12 h-12 bg-slate-900 text-white font-serif text-xl rounded-sm">1</span>
              <h2 className="font-serif text-2xl md:text-3xl text-gray-900">La Acrópolis y el Legado de los Dioses</h2>
            </div>

            {/* Acrópolis */}
            <div className="mb-12">
              <img src="https://images.pexels.com/photos/164336/pexels-photo-164336.jpeg" alt="Partenón en la Acrópolis" className="w-full aspect-[16/9] object-cover rounded-sm mb-6" loading="lazy" />
              <h3 className="font-serif text-xl md:text-2xl text-gray-900 mb-4">Acrópolis de Atenas <span className="text-gray-400 font-sans text-sm font-normal">8:00h</span></h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Comenzamos en el lugar más emblemático de Grecia: la Acrópolis. Esta roca sagrada de 156 metros domina Atenas desde hace 2.500 años. Aquí verás el Partenón, el templo más perfecto jamás construido, dedicado a Atenea.
              </p>

              <div className="bg-amber-50 border-l-2 border-amber-400 p-4 rounded-sm mb-6">
                <p className="text-sm text-gray-800">
                  <strong>Llega a primera hora (8:00h).</strong> Las colas pueden superar las 2 horas a partir de las 10:00h. Además evitas el calor intenso y los grupos de cruceros (9:30h).
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-3">Qué verás</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>Partenón (447-432 a.C.)</li>
                    <li>Erecteión con las Cariátides</li>
                    <li>Templo de Atenea Niké</li>
                    <li>Propileos (entrada monumental)</li>
                    <li>Teatro de Dioniso</li>
                    <li>Odeón de Herodes Ático</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-3">Info práctica</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>Entrada: 20€ (12€ nov-mar)</li>
                    <li>Horario: 8:00-20:00 (verano)</li>
                    <li>Duración: 2-3 horas</li>
                    <li>Calzado cómodo imprescindible</li>
                    <li>Lleva agua (no venden dentro)</li>
                  </ul>
                </div>
              </div>

              <p className="text-sm text-teal-700 bg-teal-50 p-4 rounded-sm mb-6">
                <strong>Truco:</strong> Entra por el acceso Sur (Dionisio Areopagita) en lugar del principal. Menos cola y pasas primero por el Teatro de Dioniso.
              </p>

              <div className="flex flex-wrap gap-3">
                <a href="https://etickets.tap.gr/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold px-5 py-3 rounded-sm transition-colors">
                  Comprar Entrada Oficial <ExternalLink size={12} />
                </a>
                <a href="https://gyg.me/Qj5yoL5g" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-gray-300 hover:border-gray-400 text-gray-700 text-xs font-semibold px-5 py-3 rounded-sm transition-colors">
                  Tour Guiado en Español <ExternalLink size={12} />
                </a>
              </div>
            </div>

            {/* Areópago */}
            <div className="mb-12">
              <img src="https://images.pexels.com/photos/7218638/pexels-photo-7218638.jpeg" alt="Vista desde la Colina del Areópago" className="w-full aspect-[16/9] object-cover rounded-sm mb-6" loading="lazy" />
              <h3 className="font-serif text-xl md:text-2xl text-gray-900 mb-4">Colina del Areópago <span className="text-gray-400 font-sans text-sm font-normal">11:00h</span></h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Al salir de la Acrópolis, sube esta roca lisa donde los atenienses celebraban juicios hace 2.500 años. Según la mitología, aquí fue juzgado Ares. Las vistas del Partenón y de Atenas son espectaculares.
              </p>
              <div className="bg-amber-50 border-l-2 border-amber-400 p-4 rounded-sm mb-4">
                <p className="text-sm text-gray-800">
                  <strong>El mejor atardecer de Atenas.</strong> Vuelve al atardecer (18:00-19:00h verano). Ver el sol ponerse detrás del Partenón mientras Atenas se ilumina es una de las experiencias más mágicas de Grecia. Gratuito.
                </p>
              </div>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Aquí predicó San Pablo en el año 51 d.C.</li>
                <li>Roca resbaladiza - calzado con buen agarre</li>
                <li>Entrada GRATUITA 24 horas</li>
                <li>2 minutos de la salida de la Acrópolis</li>
              </ul>
            </div>

            {/* Ágora Romana */}
            <div className="mb-12">
              <img src="https://images.pexels.com/photos/11649392/pexels-photo-11649392.jpeg" alt="Ágora Romana con la Torre de los Vientos" className="w-full aspect-[16/9] object-cover rounded-sm mb-6" loading="lazy" />
              <h3 className="font-serif text-xl md:text-2xl text-gray-900 mb-4">Ágora Romana <span className="text-gray-400 font-sans text-sm font-normal">11:30h</span></h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Mercado público construido entre el 19-11 a.C. durante el Imperio Romano. Destaca la Torre de los Vientos (50 a.C.), un reloj hidráulico octogonal que es el primer observatorio meteorológico de la historia.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-3">Qué ver</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>Torre de los Vientos (Horologion)</li>
                    <li>Puerta de Atenea Arquegetis</li>
                    <li>Mezquita de Fethiye (s. XV)</li>
                    <li>Letrina pública romana</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-3">Info</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>Entrada: 8€ (incluida en pase)</li>
                    <li>Horario: 8:00-20:00</li>
                    <li>Duración: 30-45 min</li>
                  </ul>
                </div>
              </div>
              <p className="text-sm text-teal-700 bg-teal-50 p-4 rounded-sm">
                <strong>Pase Combinado (30€):</strong> Acceso a Acrópolis, Ágora Romana, Biblioteca de Adriano, Ágora Antigua, Kerameikos y más. Válido 5 días. Rentable si visitas +2 lugares.
              </p>
            </div>

            {/* Biblioteca de Adriano */}
            <div className="mb-12">
              <h3 className="font-serif text-xl md:text-2xl text-gray-900 mb-4">Biblioteca de Adriano <span className="text-gray-400 font-sans text-sm font-normal">12:15h</span></h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Construida por el emperador Adriano en 132 d.C., no era solo una biblioteca sino un complejo cultural con salas de lectura, jardines y aulas. Llamada "de las 100 columnas" por las columnas corintias que rodeaban el jardín interior.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Entrada: 6€ (incluida en pase combinado)</li>
                <li>Duración: 20-30 minutos</li>
                <li>Al lado del Ágora Romana</li>
              </ul>
            </div>

            {/* Monastiraki */}
            <div className="mb-12">
              <img src="https://images.pexels.com/photos/15339398/pexels-photo-15339398.jpeg" alt="Plaza Monastiraki" className="w-full aspect-[16/9] object-cover rounded-sm mb-6" loading="lazy" />
              <h3 className="font-serif text-xl md:text-2xl text-gray-900 mb-4">Monastiraki <span className="text-gray-400 font-sans text-sm font-normal">13:00h</span></h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Barrio animado con bazares, mercadillos y la plaza más vibrante de Atenas. El famoso Flea Market funciona todos los días pero los domingos es más completo.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-3">Dónde comer</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li><strong>Thanasis:</strong> Souvlaki y kebabs (8-12€)</li>
                    <li><strong>Savvas:</strong> Gyros tradicional (6-10€)</li>
                    <li><strong>MS Roof Garden:</strong> Terraza con vistas (15-25€)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-3">Qué comprar</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>Ojo griego (Mati)</li>
                    <li>Komboloi (rosarios griegos)</li>
                    <li>Sandalias de cuero artesanas</li>
                    <li>Aceite de oliva y aceitunas</li>
                  </ul>
                </div>
              </div>
              <p className="text-sm text-teal-700 bg-teal-50 p-4 rounded-sm">
                <strong>Flea Market:</strong> Todos los días 9:00-19:00 pero el DOMINGO hay más puestos. Antigüedades, libros, ropa vintage, joyas. Regatea siempre.
              </p>
            </div>

            {/* Ágora de Atenas */}
            <div>
              <img src="https://images.pexels.com/photos/18757918/pexels-photo-18757918.jpeg" alt="Templo de Hefesto" className="w-full aspect-[16/9] object-cover rounded-sm mb-6" loading="lazy" />
              <h3 className="font-serif text-xl md:text-2xl text-gray-900 mb-4">Ágora de Atenas <span className="text-gray-400 font-sans text-sm font-normal">14:30h</span></h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                El centro neurálgico de la antigua Atenas donde se reunía la asamblea democrática. Aquí nació la democracia occidental hace 2.500 años. Sócrates, Platón y Aristóteles caminaron por estas mismas piedras.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-3">Imprescindibles</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li><strong>Templo de Hefesto:</strong> El templo griego mejor conservado del mundo</li>
                    <li><strong>Stoa de Átalo:</strong> Pórtico reconstruido, ahora museo</li>
                    <li><strong>Biblioteca de Pantainos:</strong> Ruinas del s. II</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-3">Info</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>Entrada: 10€ (incluida en pase)</li>
                    <li>Horario: 8:00-20:00</li>
                    <li>Duración: 1.5-2 horas</li>
                    <li>Museo incluido en la entrada</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </Reveal>

        {/* DÍA 2 */}
        <Reveal>
          <section id="dia-2" className="mb-20">
            <div className="flex items-center gap-4 mb-10">
              <span className="flex items-center justify-center w-12 h-12 bg-slate-900 text-white font-serif text-xl rounded-sm">2</span>
              <h2 className="font-serif text-2xl md:text-3xl text-gray-900">Templos Olímpicos, Estadios y Museos</h2>
            </div>

            {/* Templo de Zeus */}
            <div className="mb-12">
              <img src="https://images.pexels.com/photos/8349098/pexels-photo-8349098.jpeg" alt="Columnas del Templo de Zeus Olímpico" className="w-full aspect-[16/9] object-cover rounded-sm mb-6" loading="lazy" />
              <h3 className="font-serif text-xl md:text-2xl text-gray-900 mb-4">Templo de Zeus Olímpico <span className="text-gray-400 font-sans text-sm font-normal">9:00h</span></h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Las columnas más altas de Grecia. Este templo dedicado a Zeus tardó 700 años en construirse (515 a.C. - 131 d.C.). En su apogeo tenía 104 columnas corintias de 17 metros. Hoy quedan 15 en pie.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-3">Qué ver</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>15 columnas corintias (17m de altura)</li>
                    <li>Columna caída (muestra su interior)</li>
                    <li>Vistas de la Acrópolis desde el recinto</li>
                    <li>Arco de Adriano (entrada histórica)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-3">Info</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>Entrada: 8€ (incluida en pase combinado)</li>
                    <li>Horario: 8:00-20:00 (verano)</li>
                    <li>Duración: 30-45 minutos</li>
                    <li>A 10 min andando de Syntagma</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Estadio Panatenaico */}
            <div className="mb-12">
              <img src="https://images.pexels.com/photos/20787843/pexels-photo-20787843.jpeg" alt="Estadio Panatenaico" className="w-full aspect-[16/9] object-cover rounded-sm mb-6" loading="lazy" />
              <h3 className="font-serif text-xl md:text-2xl text-gray-900 mb-4">Estadio Panatenaico <span className="text-gray-400 font-sans text-sm font-normal">10:00h</span></h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Aquí se celebraron los primeros Juegos Olímpicos modernos en 1896. El único estadio del mundo construido completamente en mármol blanco del Monte Pentélico. Capacidad: 45.000 espectadores.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-3">Experiencia</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>Baja a la pista y corre donde corrieron los primeros olímpicos</li>
                    <li>Sube a las gradas superiores (vistas panorámicas)</li>
                    <li>Visita el museo con antorchas olímpicas</li>
                    <li>Foto en el podio olímpico</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-3">Info</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>Entrada: 10€ (incluye audioguía español)</li>
                    <li>Horario: 8:00-19:00 (mar-oct)</li>
                    <li>Duración: 45-60 min</li>
                  </ul>
                </div>
              </div>
              <a href="https://www.panathenaicstadium.gr/en/home" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold px-5 py-3 rounded-sm transition-colors">
                Comprar entrada <ExternalLink size={12} />
              </a>
            </div>

            {/* Plaza Syntagma */}
            <div className="mb-12">
              <img src="https://images.pexels.com/photos/18757926/pexels-photo-18757926.jpeg" alt="Evzones en Plaza Syntagma" className="w-full aspect-[16/9] object-cover rounded-sm mb-6" loading="lazy" />
              <h3 className="font-serif text-xl md:text-2xl text-gray-900 mb-4">Plaza Syntagma <span className="text-gray-400 font-sans text-sm font-normal">11:30h</span></h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                La plaza principal de Atenas, frente al Parlamento. Cada hora se celebra el cambio de guardia de los Evzones frente a la Tumba del Soldado Desconocido. Los domingos a las 11:00h la ceremonia es completa.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-3">Horarios del cambio</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>Cada hora en punto (24 horas)</li>
                    <li>Domingos 11:00h: ceremonia completa</li>
                    <li>Duración: 10-15 min (45 min domingos)</li>
                    <li>Entrada: GRATIS</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-3">Curiosidades</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>Uniforme con fustanella y tsarouhia con pompón</li>
                    <li>Cada zapato pesa 3 kg (60 clavos)</li>
                    <li>Paso ceremonial: pierna a 90 grados</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Plaka */}
            <div className="mb-12">
              <img src="https://images.pexels.com/photos/11649391/pexels-photo-11649391.jpeg" alt="Barrio de Plaka" className="w-full aspect-[16/9] object-cover rounded-sm mb-6" loading="lazy" />
              <h3 className="font-serif text-xl md:text-2xl text-gray-900 mb-4">Barrio de Plaka <span className="text-gray-400 font-sans text-sm font-normal">12:30h</span></h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                El barrio más antiguo y encantador de Atenas. Calles peatonales empedradas, casas neoclásicas del siglo XIX, buganvillas en los balcones y tabernas tradicionales a los pies de la Acrópolis.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-3">Dónde comer</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li><strong>Arcadia:</strong> Taverna familiar (12-20€)</li>
                    <li><strong>Victory Cafe:</strong> Comida típica (10-18€)</li>
                    <li><strong>To Kafeneio:</strong> Taverna escondida (15-25€)</li>
                    <li><strong>Avocado:</strong> Opciones veganas (10-16€)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-3">Calles principales</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li><strong>Adrianou:</strong> La más animada</li>
                    <li><strong>Kydathineon:</strong> Joyerías y artesanía</li>
                    <li><strong>Mnisikleous:</strong> Escaleras con tavernas</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Museo Acrópolis */}
            <div className="mb-12">
              <h3 className="font-serif text-xl md:text-2xl text-gray-900 mb-4">Museo de la Acrópolis <span className="text-gray-400 font-sans text-sm font-normal">14:30h</span></h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Museo ultramoderno (inaugurado 2009) que alberga los tesoros originales de la Acrópolis. Construido sobre excavaciones arqueológicas visibles a través del suelo de cristal.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-3">Imprescindibles</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li><strong>Sala del Partenón:</strong> Frisos originales (planta 3)</li>
                    <li><strong>Cariátides originales:</strong> 5 estatuas-columna</li>
                    <li><strong>Korai arcaicas:</strong> Esculturas preclásicas</li>
                    <li><strong>Suelo de cristal:</strong> Ruinas bajo tus pies</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-3">Info</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>Entrada: 15€ (10€ nov-mar)</li>
                    <li>Horario: 9:00-20:00 (viernes hasta 22:00)</li>
                    <li>Duración: 1.5-2 horas</li>
                    <li>Audioguía: 5€ (recomendada)</li>
                  </ul>
                </div>
              </div>
              <a href="https://www.theacropolismuseum.gr/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold px-5 py-3 rounded-sm transition-colors">
                Comprar Entradas <ExternalLink size={12} />
              </a>
            </div>

            {/* Licabeto */}
            <div>
              <h3 className="font-serif text-xl md:text-2xl text-gray-900 mb-4">Monte Licabeto <span className="text-gray-400 font-sans text-sm font-normal">17:30h</span></h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                El punto más alto de Atenas (277m). Al atardecer, la Acrópolis se ilumina mientras el sol se pone sobre el Mar Egeo. Arriba hay una capilla blanca, restaurante panorámico y teatro al aire libre.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-3">Cómo subir</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li><strong>Funicular:</strong> 10€ ida y vuelta (cada 10 min)</li>
                    <li><strong>A pie:</strong> Gratis, 20-30 min desde Kolonaki</li>
                    <li><strong>Taxi:</strong> Hasta la base del funicular</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-3">Consejos</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>Llega 45 min antes del atardecer</li>
                    <li>Verano: sunset ~20:30h (masificado)</li>
                    <li>Invierno: sunset ~17:30h (más tranquilo)</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </Reveal>

        {/* DÍA 3 */}
        <Reveal>
          <section id="dia-3" className="mb-20">
            <div className="flex items-center gap-4 mb-10">
              <span className="flex items-center justify-center w-12 h-12 bg-slate-900 text-white font-serif text-xl rounded-sm">3</span>
              <h2 className="font-serif text-2xl md:text-3xl text-gray-900">Excursiones Legendarias desde Atenas</h2>
            </div>
            <p className="text-gray-600 leading-relaxed mb-10">
              Para el tercer día te recomendamos salir de Atenas y descubrir algunos de los lugares más legendarios de Grecia. Aquí tienes las 3 excursiones más populares:
            </p>

            {/* Excursiones accordion */}
            {[
              {
                title: 'Delfos - El Ombligo del Mundo',
                desc: 'A 180 km de Atenas. Considerado el "ombligo del mundo" y centro espiritual de la civilización helénica. La sacerdotisa Pitia pronunciaba profecías en trance.',
                highlights: ['Templo de Apolo', 'Teatro de Delfos (5.000 espectadores)', 'Estadio Antiguo', 'Tholos de Atenea', 'Museo Arqueológico (Auriga de Delfos)'],
                info: 'Desde 95€ · Día completo (10-11h) · Transporte + guía español',
                links: [
                  { text: 'Tour Delfos con Guía', url: 'https://gyg.me/DYkIGLUb' },
                  { text: 'Delfos + Monasterio Hosios Lukas', url: 'https://gyg.me/z8aMEqEU' },
                ],
                rec: 'La opción más completa si solo puedes hacer UNA excursión.'
              },
              {
                title: 'Meteora - Monasterios en el Cielo',
                desc: 'A 350 km. Monasterios ortodoxos sobre pilares de piedra arenisca de hasta 400m. Quedan 6 monasterios activos de los 24 originales. Patrimonio UNESCO.',
                highlights: ['Gran Meteoro (el más grande, s. XIV)', 'Varlaam (frescos impresionantes)', 'Roussanou (monasterio de monjas)', 'Santísima Trinidad (James Bond)', 'San Esteban (acceso fácil)'],
                info: '1 día: desde 89€ (13-14h) · 2 días: desde 219€ con hotel · Código vestimenta: pantalón largo',
                links: [
                  { text: 'Tour 1 Día (Tren + Bus)', url: 'https://gyg.me/bChRUuFg' },
                  { text: 'Tour 2 Días con Hotel', url: 'https://gyg.me/tXG3xGd0' },
                ],
                rec: 'El paisaje más único y fotogénico. Mejor en 2 días si puedes.'
              },
              {
                title: 'Corinto, Micenas y Epidauro - Ruta Argólida',
                desc: 'Tres sitios UNESCO en el Peloponeso. El reino de Agamenón, el teatro con la mejor acústica del mundo antiguo, y el Canal de Corinto.',
                highlights: ['Micenas: Puerta de los Leones (1250 a.C.)', 'Epidauro: Teatro para 14.000 espectadores', 'Canal de Corinto (6 km, paredes de 90m)', 'Almuerzo en Nafplio (ciudad costera)'],
                info: 'Desde 95€ · Día completo (10-11h) · Transporte + guía español',
                links: [
                  { text: 'Tour Argólida con Guía Español', url: 'https://gyg.me/r9Q0sY6u' },
                ],
                rec: 'Ideal para fans de la mitología y la arqueología.'
              }
            ].map((exc, i) => (
              <div key={i} className="mb-4">
                <button
                  onClick={() => setOpenDay(openDay === i + 10 ? null : i + 10)}
                  className="w-full flex items-center justify-between p-5 border border-gray-200 rounded-sm hover:border-gray-300 transition-colors text-left"
                >
                  <span className="font-semibold text-gray-900">{exc.title}</span>
                  <ChevronDown size={18} className={`text-gray-400 transition-transform flex-shrink-0 ml-4 ${openDay === i + 10 ? 'rotate-180' : ''}`} />
                </button>
                {openDay === i + 10 && (
                  <div className="p-6 border border-t-0 border-gray-200 rounded-b-sm">
                    <p className="text-gray-600 leading-relaxed mb-5">{exc.desc}</p>
                    <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-3">Qué verás</h4>
                    <ul className="space-y-2 text-sm text-gray-700 mb-5">
                      {exc.highlights.map((h, j) => <li key={j}>{h}</li>)}
                    </ul>
                    <p className="text-sm text-gray-600 mb-3">{exc.info}</p>
                    <p className="text-sm text-teal-700 bg-teal-50 p-3 rounded-sm mb-5">{exc.rec}</p>
                    <div className="flex flex-wrap gap-3">
                      {exc.links.map((link, j) => (
                        <a key={j} href={link.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold px-5 py-3 rounded-sm transition-colors">
                          {link.text} <ExternalLink size={12} />
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Recomendación */}
            <div className="mt-8 bg-slate-50 p-6 rounded-sm">
              <h4 className="font-semibold text-gray-900 mb-3">¿Cuál elegir?</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><strong>Solo 1 excursión:</strong> Elige Delfos (la más completa e impresionante).</li>
                <li><strong>Paisaje único:</strong> Meteora es una experiencia irrepetible.</li>
                <li><strong>Fans de mitología:</strong> La Argólida (Micenas, Epidauro) es perfecta.</li>
              </ul>
            </div>
          </section>
        </Reveal>

        {/* Más Lugares Imprescindibles */}
        <Reveal>
          <section id="lugares-imprescindibles" className="mb-20">
            <h2 className="font-serif text-3xl md:text-4xl text-gray-900 mb-8">Más lugares imprescindibles</h2>
            <p className="text-gray-600 leading-relaxed mb-8">Si tienes más días o quieres profundizar en la ciudad:</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                { name: 'Museo Arqueológico Nacional', desc: 'La colección más rica de arte griego antiguo. Máscara de Agamenón, Mecanismo de Anticitera.', info: '12€ · 2-3h', url: 'https://www.namuseum.gr/en/' },
                { name: 'Kerameikos', desc: 'La necrópolis más grande de la antigua Atenas. Tumbas monumentales y museo. Muy tranquilo.', info: '8€ (pase combinado) · 1h' },
                { name: 'Colina Filopappou', desc: 'Senderos entre pinos con vistas panorámicas a la Acrópolis desde otro ángulo.', info: 'Gratis · 1-2h' },
                { name: 'Barrio de Psyrri', desc: 'El barrio alternativo: murales, galerías underground, bares trendy y tavernas auténticas.', info: 'Gratis · Mejor fines de semana' },
                { name: 'Cabo Sunión', desc: 'Templo de Poseidón (444 a.C.) en un acantilado a 70 km. Columnas de mármol sobre el Egeo al atardecer.', info: 'Tour desde 45€ · 4-5h', url: 'https://gyg.me/mNa0HJDh' },
                { name: 'Jardín Nacional', desc: '15.5 hectáreas de jardín botánico con estanques, pavos reales y ruinas escondidas.', info: 'Gratis · Ideal para descansar' },
                { name: 'Tour de Vinos Griegos', desc: 'Cata de vinos locales (Retsina, Assyrtiko, Agiorgitiko) con quesos y charcutería griega.', info: 'Desde 75€ · 3-4h', url: 'https://gyg.me/T8PPmWLX' },
              ].map((place, i) => (
                <div key={i} className="p-5 border border-gray-100 rounded-sm hover:border-gray-200 transition-colors">
                  <h4 className="font-semibold text-gray-900 mb-2">{place.name}</h4>
                  <p className="text-sm text-gray-600 mb-3">{place.desc}</p>
                  <p className="text-xs text-gray-500">{place.info}</p>
                  {place.url && (
                    <a href={place.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-teal-600 hover:text-teal-700 text-xs font-medium mt-3 transition-colors">
                      Reservar <ExternalLink size={10} />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </section>
        </Reveal>

        {/* Tarjeta y Seguro */}
        <Reveal>
          <section id="recomendaciones" className="mb-20">
            <h2 className="font-serif text-3xl md:text-4xl text-gray-900 mb-8">Herramientas esenciales</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 border border-gray-100 rounded-sm">
                <h3 className="font-semibold text-gray-900 mb-3">Revolut - Tarjeta sin comisiones</h3>
                <ul className="space-y-2 text-sm text-gray-600 mb-5">
                  <li>Sin comisiones por pago en euros</li>
                  <li>Retiros gratuitos en cajeros</li>
                  <li>Control total desde la app</li>
                  <li>Cambio de divisa al mejor tipo</li>
                </ul>
                <a href="https://revolut.com/referral/?referral-code=antoni22jf!DEC1-25-AR-CH1H-CRY&geo-redirect" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold px-5 py-3 rounded-sm transition-colors">
                  Consigue tu Revolut <ExternalLink size={12} />
                </a>
              </div>
              <div className="p-6 border border-gray-100 rounded-sm">
                <h3 className="font-semibold text-gray-900 mb-3">IATI - Seguro de viaje</h3>
                <ul className="space-y-2 text-sm text-gray-600 mb-5">
                  <li>Asistencia médica en el extranjero</li>
                  <li>Cobertura de cancelación</li>
                  <li>Asistencia 24/7 en español</li>
                  <li>Repatriación incluida</li>
                </ul>
                <a href="https://www.iatiseguros.com/?r=37344279073491" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold px-5 py-3 rounded-sm transition-colors">
                  IATI con 5% descuento <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </section>
        </Reveal>

        {/* Gastronomía */}
        <Reveal>
          <section id="gastronomia" className="mb-20">
            <h2 className="font-serif text-3xl md:text-4xl text-gray-900 mb-4">Guía gastronómica</h2>
            <p className="text-gray-600 leading-relaxed mb-10">La gastronomía griega es patrimonio cultural con 4.000 años de historia.</p>

            <h3 className="font-serif text-xl text-gray-900 mb-6">Platos imprescindibles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
              {[
                { name: 'Moussaka', desc: 'Capas de berenjena, cordero, patata y bechamel gratinada.', price: '12-16€' },
                { name: 'Souvlaki & Gyros', desc: 'Brochetas o carne vertical en pita con tzatziki.', price: '6-10€' },
                { name: 'Ensalada Griega', desc: 'Tomate, pepino, olivas kalamata, feta y aceite de oliva.', price: '7-10€' },
                { name: 'Loukoumades', desc: 'Buñuelos dorados bañados en miel de tomillo con canela.', price: '5-8€' },
                { name: 'Saganaki', desc: 'Queso frito en sartén, servido con limón.', price: '7-9€' },
                { name: 'Pulpo a la Parrilla', desc: 'Pulpo tierno con aceite de oliva, orégano y limón.', price: '14-18€' },
                { name: 'Tzatziki', desc: 'Yogur griego con pepino rallado, ajo y eneldo.', price: '4-6€' },
                { name: 'Melitzanosalata', desc: 'Dip de berenjena asada con ajo y limón.', price: '5-7€' },
              ].map((dish, i) => (
                <div key={i} className="flex items-start justify-between p-4 border border-gray-100 rounded-sm">
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">{dish.name}</h4>
                    <p className="text-xs text-gray-500 mt-1">{dish.desc}</p>
                  </div>
                  <span className="text-sm font-semibold text-teal-600 whitespace-nowrap ml-4">{dish.price}</span>
                </div>
              ))}
            </div>

            <h3 className="font-serif text-xl text-gray-900 mb-6">Bebidas griegas</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
              <div className="p-4 border border-gray-100 rounded-sm">
                <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-3">Vinos</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li><strong>Retsina:</strong> Blanco con resina de pino (3-5€)</li>
                  <li><strong>Assyrtiko:</strong> Seco de Santorini (5-7€)</li>
                  <li><strong>Agiorgitiko:</strong> Tinto del Peloponeso (4-6€)</li>
                </ul>
              </div>
              <div className="p-4 border border-gray-100 rounded-sm">
                <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-3">Licores</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li><strong>Ouzo:</strong> Anís griego (4-6€)</li>
                  <li><strong>Tsipouro:</strong> Aguardiente de orujo (3-5€)</li>
                  <li><strong>Metaxa:</strong> Brandy suave (5-7€)</li>
                </ul>
              </div>
              <div className="p-4 border border-gray-100 rounded-sm">
                <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-3">Cafés y cervezas</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li><strong>Ellinikos:</strong> Café tradicional (2-3€)</li>
                  <li><strong>Mythos:</strong> Cerveza popular (3-4€)</li>
                  <li><strong>Fix:</strong> La más antigua (4-5€)</li>
                </ul>
              </div>
            </div>

            <h3 className="font-serif text-xl text-gray-900 mb-6">Restaurantes recomendados</h3>
            <div className="space-y-3 mb-8">
              {[
                { name: 'Arcadia Restaurant', desc: 'Taverna familiar. La mejor moussaka según locales.', price: '12-20€', barrio: 'Plaka' },
                { name: 'Thanasis', desc: 'Icónico desde 1950. Los mejores kebabs de Atenas.', price: '8-12€', barrio: 'Monastiraki' },
                { name: 'To Kafeneio', desc: 'Taverna escondida con cocina casera. Sin turistas.', price: '15-25€', barrio: 'Plaka' },
                { name: 'Avocado', desc: 'Opciones veganas, bowls y ensaladas.', price: '10-16€', barrio: 'Plaka' },
                { name: 'MS Roof Garden', desc: 'Terraza panorámica con vistas a la Acrópolis.', price: '25-40€', barrio: 'Monastiraki' },
              ].map((r, i) => (
                <div key={i} className="flex items-center justify-between p-4 border border-gray-100 rounded-sm">
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <h4 className="font-semibold text-gray-900 text-sm">{r.name}</h4>
                      <span className="text-[10px] text-gray-400 uppercase tracking-wider">{r.barrio}</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">{r.desc}</p>
                  </div>
                  <span className="text-sm font-semibold text-teal-600 ml-4">{r.price}</span>
                </div>
              ))}
            </div>

            <div className="bg-slate-50 p-6 rounded-sm">
              <h4 className="font-semibold text-gray-900 mb-3">Come como un local</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-600">
                <ul className="space-y-2">
                  <li>Almuerzo 14:00-16:00, cena 21:00-23:00</li>
                  <li>Pide varios platos para compartir (meze)</li>
                  <li>Pan se cobra aparte (kouvert: 1-2€/pers.)</li>
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

        {/* Transporte */}
        <Reveal>
          <section id="transporte" className="mb-20">
            <h2 className="font-serif text-3xl md:text-4xl text-gray-900 mb-8">Sistema de transporte</h2>

            <div className="mb-8">
              <h3 className="font-serif text-xl text-gray-900 mb-4">Metro de Atenas</h3>
              <div className="space-y-3 mb-6">
                <div className="p-4 border border-gray-100 rounded-sm">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                    <h4 className="font-semibold text-sm text-gray-900">Línea 1 (Verde)</h4>
                  </div>
                  <p className="text-xs text-gray-600 ml-6">Pireo - Kifisia. Paradas: Monastiraki, Omonia, Victoria</p>
                </div>
                <div className="p-4 border border-gray-100 rounded-sm">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                    <h4 className="font-semibold text-sm text-gray-900">Línea 2 (Roja)</h4>
                  </div>
                  <p className="text-xs text-gray-600 ml-6">Agios Antonios - Elliniko. Paradas: Syntagma, Akropoli, Omonia</p>
                </div>
                <div className="p-4 border border-gray-100 rounded-sm">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                    <h4 className="font-semibold text-sm text-gray-900">Línea 3 (Azul)</h4>
                  </div>
                  <p className="text-xs text-gray-600 ml-6">Aeropuerto - Centro. Paradas: Aeropuerto, Syntagma, Monastiraki</p>
                </div>
              </div>

              <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-3">Billetes</h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                <div className="p-3 bg-slate-50 rounded-sm text-center">
                  <span className="text-lg font-semibold text-gray-900">1,20€</span>
                  <p className="text-xs text-gray-500 mt-1">Sencillo (90 min)</p>
                </div>
                <div className="p-3 bg-slate-50 rounded-sm text-center">
                  <span className="text-lg font-semibold text-gray-900">4,10€</span>
                  <p className="text-xs text-gray-500 mt-1">Diario (24h)</p>
                </div>
                <div className="p-3 bg-teal-50 rounded-sm text-center border border-teal-200">
                  <span className="text-lg font-semibold text-teal-700">8,20€</span>
                  <p className="text-xs text-teal-600 mt-1">5 días (120h)</p>
                </div>
                <div className="p-3 bg-slate-50 rounded-sm text-center">
                  <span className="text-lg font-semibold text-gray-900">10€</span>
                  <p className="text-xs text-gray-500 mt-1">Aeropuerto</p>
                </div>
              </div>

              <p className="text-sm text-teal-700 bg-teal-50 p-4 rounded-sm">
                <strong>Recomendación:</strong> Compra el billete de 5 días (8,20€) al llegar al aeropuerto. Centro histórico siempre a pie. Metro solo para Licabeto o barrios alejados.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 border border-gray-100 rounded-sm">
                <h4 className="font-semibold text-sm text-gray-900 mb-2">Autobuses</h4>
                <ul className="space-y-1 text-xs text-gray-600">
                  <li>Billete: 1,20€ (kioscos/máquinas)</li>
                  <li>Frecuencia: 10-30 min</li>
                  <li>Funcionan 24h (líneas "N")</li>
                </ul>
              </div>
              <div className="p-4 border border-gray-100 rounded-sm">
                <h4 className="font-semibold text-sm text-gray-900 mb-2">Tranvía</h4>
                <ul className="space-y-1 text-xs text-gray-600">
                  <li>Centro - playas del sur (Glyfada)</li>
                  <li>Billete: 1,20€</li>
                  <li>Duración: 45-60 min a la playa</li>
                </ul>
              </div>
              <div className="p-4 border border-gray-100 rounded-sm">
                <h4 className="font-semibold text-sm text-gray-900 mb-2">Taxis</h4>
                <ul className="space-y-1 text-xs text-gray-600">
                  <li>Bajada: 1,30€ (día) / 1,90€ (noche)</li>
                  <li>Km: 0,74€ (día) / 1,30€ (noche)</li>
                  <li>App recomendada: Beat</li>
                </ul>
              </div>
              <div className="p-4 border border-gray-100 rounded-sm">
                <h4 className="font-semibold text-sm text-gray-900 mb-2">A pie</h4>
                <ul className="space-y-1 text-xs text-gray-600">
                  <li>Acrópolis - Syntagma: 15 min</li>
                  <li>Syntagma - Monastiraki: 10 min</li>
                  <li>Plaka - Ágora: 5 min</li>
                </ul>
              </div>
            </div>
          </section>
        </Reveal>

        {/* Consejos Finales */}
        <Reveal>
          <section id="consejos" className="mb-20">
            <h2 className="font-serif text-3xl md:text-4xl text-gray-900 mb-8">Consejos finales</h2>

            <div className="space-y-4">
              {[
                {
                  q: 'Mejor época para visitar',
                  a: 'Abril-Mayo y Septiembre-Octubre (20-28°C, menos turistas). Evita julio-agosto (35-40°C, masificación). Invierno: precios bajos pero algunos monumentos con horario reducido.'
                },
                {
                  q: 'Frases útiles en griego',
                  a: 'Hola: Yassas · Gracias: Efharisto · Por favor: Parakalo · Adiós: Antio · Sí/No: Ne/Ohi · ¿Cuánto cuesta?: Poso kani? · La cuenta: To logariasmo · Salud: Yamas!'
                },
                {
                  q: 'Propinas',
                  a: 'No obligatorias pero apreciadas. Restaurantes: 5-10%. Taxis: redondear. Hoteles: 1-2€ botones. Guías: 2-5€/persona.'
                },
                {
                  q: 'Seguridad',
                  a: 'Atenas es muy segura. Zonas seguras día y noche: Plaka, Monastiraki, Syntagma, Kolonaki. Cuidado con carteristas en el metro. Evita de noche: Omonia, Exarchia.'
                },
                {
                  q: 'Electricidad',
                  a: 'Voltaje: 230V, 50Hz. Enchufes tipo C y F (europeo estándar). NO necesitas adaptador si vienes de España.'
                },
                {
                  q: 'WiFi e Internet',
                  a: 'WiFi gratis en todos los hoteles y mayoría de cafés. Roaming UE: sin cargos extra con tarifa europea. SIM local: Cosmote o Vodafone (10-20€ prepago).'
                },
                {
                  q: 'Dato importante sobre baños',
                  a: 'El papel NO va al water. Se tira a la papelera. Las tuberías son antiguas. Es la norma en TODO el país, incluso hoteles de lujo.'
                },
                {
                  q: 'Horarios comerciales',
                  a: 'Tiendas: Lun-Sáb 9:00-21:00. Restaurantes: almuerzo 12:00-16:00, cena 19:00-00:00. Monumentos: 8:00-20:00 (verano).'
                },
              ].map((item, i) => (
                <div key={i}>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 border border-gray-200 rounded-sm hover:border-gray-300 transition-colors text-left"
                  >
                    <span className="font-medium text-gray-900 text-sm">{item.q}</span>
                    <ChevronDown size={16} className={`text-gray-400 transition-transform flex-shrink-0 ml-4 ${openFaq === i ? 'rotate-180' : ''}`} />
                  </button>
                  {openFaq === i && (
                    <div className="px-5 pb-5 border border-t-0 border-gray-200 rounded-b-sm">
                      <p className="text-sm text-gray-600 pt-3 leading-relaxed">{item.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Souvenirs */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-5 border border-gray-100 rounded-sm">
                <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-3">Souvenirs auténticos</h4>
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
              <div className="p-5 border border-gray-100 rounded-sm">
                <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-3">Evita comprar</h4>
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

        {/* Presupuestos */}
        <Reveal>
          <section id="presupuestos" className="mb-10">
            <h2 className="font-serif text-3xl md:text-4xl text-gray-900 mb-4">Presupuestos detallados</h2>
            <p className="text-gray-600 mb-10">3 días / 2 noches. Incluyen vuelos desde España.</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Mochilero */}
              <div className="p-6 border border-gray-200 rounded-sm">
                <h3 className="font-serif text-xl text-gray-900 mb-1">Mochilero</h3>
                <p className="text-2xl font-semibold text-teal-600 mb-5">350-450€</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>Vuelos: 80-120€ i/v (low-cost)</li>
                  <li>Hostel: 15-25€/noche x 2</li>
                  <li>Comida: 20-25€/día x 3</li>
                  <li>Transporte: 18-20€</li>
                  <li>Atracciones: 90-100€</li>
                  <li>Extras: 50-70€</li>
                </ul>
                <p className="text-xs text-gray-500 mt-4 border-t border-gray-100 pt-4">
                  Gyros en la calle, free walking tours, supermercados Lidl. Gratis domingos nov-mar.
                </p>
              </div>

              {/* Estándar */}
              <div className="p-6 border-2 border-teal-200 rounded-sm bg-teal-50/30">
                <h3 className="font-serif text-xl text-gray-900 mb-1">Estándar</h3>
                <p className="text-2xl font-semibold text-teal-600 mb-5">600-800€</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>Vuelos: 150-200€ i/v (con equipaje)</li>
                  <li>Hotel 3*: 70-100€/noche x 2</li>
                  <li>Comida: 40-50€/día x 3</li>
                  <li>Transporte: 60-70€</li>
                  <li>Atracciones + tours: 180-220€</li>
                  <li>Extras: 80-120€</li>
                </ul>
                <p className="text-xs text-gray-500 mt-4 border-t border-gray-100 pt-4">
                  Equilibrio perfecto. Hotels céntricos, tours guiados, cenas en terrazas.
                </p>
              </div>

              {/* Lujo */}
              <div className="p-6 border border-gray-200 rounded-sm">
                <h3 className="font-serif text-xl text-gray-900 mb-1">Lujo</h3>
                <p className="text-2xl font-semibold text-teal-600 mb-5">1.200-1.800€</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>Vuelos: 300-500€ i/v (premium)</li>
                  <li>Hotel 5*: 200-400€/noche x 2</li>
                  <li>Comida: 80-120€/día x 3</li>
                  <li>Transporte: 150-200€ (privado)</li>
                  <li>Tours VIP: 350-450€</li>
                  <li>Extras: 200-300€</li>
                </ul>
                <p className="text-xs text-gray-500 mt-4 border-t border-gray-100 pt-4">
                  Grande Bretagne, Michelin, tours privados, yate a Cabo Sunión.
                </p>
              </div>
            </div>

            <div className="mt-8 bg-slate-50 p-6 rounded-sm">
              <p className="text-sm text-gray-600">
                <strong>Nota:</strong> Añade 10-15% de margen para imprevistos. No incluido: seguro de viaje (30-50€ IATI recomendado), shopping extra, propinas generosas.
              </p>
            </div>
          </section>
        </Reveal>

      </article>
    </>
  );
};

export default AthensGuideArticle;
