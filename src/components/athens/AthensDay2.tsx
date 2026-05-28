import { ExternalLink, Utensils } from 'lucide-react';
import Reveal from './Reveal';

const AthensDay2: React.FC = () => {
  return (
    <div className="bg-white">
      <Reveal>
        <section id="dia-2" className="max-w-4xl mx-auto px-6 lg:px-10 py-20 md:py-28">
          <div className="flex items-center gap-5 mb-14">
            <span className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 text-white font-serif text-2xl rounded-sm shadow-xl shadow-amber-500/25">02</span>
            <div>
              <span className="text-[10px] uppercase tracking-[.25em] text-amber-600 font-semibold">Día 2</span>
              <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-gray-900">Templos Olímpicos, Estadios y Museos</h2>
            </div>
          </div>

          {/* Templo de Zeus */}
          <div className="mb-20">
            <div className="relative rounded-sm overflow-hidden mb-8 group">
              <img src="https://images.pexels.com/photos/8349098/pexels-photo-8349098.jpeg" alt="Columnas del Templo de Zeus" className="w-full aspect-[21/9] object-cover group-hover:scale-[1.02] transition-transform duration-700" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="bg-white/95 backdrop-blur-sm text-gray-900 text-[10px] uppercase tracking-wider font-bold px-3 py-1.5 rounded-full shadow">09:00h</span>
              </div>
              <div className="absolute bottom-4 left-4">
                <h3 className="font-serif text-3xl text-white drop-shadow-lg">Templo de Zeus Olímpico</h3>
              </div>
            </div>

            <p className="text-gray-600 leading-[1.8] text-lg font-light mb-8 max-w-3xl">
              Las columnas más altas de Grecia. Tardó 700 años en construirse (515 a.C. - 131 d.C.). Tenía 104 columnas corintias de 17 metros de altura. Hoy quedan 15 en pie pero su magnitud sigue impresionando.
            </p>

            <div className="flex flex-wrap gap-3">
              {['8€ (pase combinado)', '8:00-20:00', '30-45 min', '10 min de Syntagma', 'Arco de Adriano incluido'].map((t, i) => (
                <span key={i} className="text-xs text-gray-600 bg-gray-50 px-3.5 py-2 rounded-full border border-gray-200">{t}</span>
              ))}
            </div>
          </div>

          {/* Estadio Panatenaico */}
          <div className="mb-20">
            <div className="relative rounded-sm overflow-hidden mb-8 group">
              <img src="https://images.pexels.com/photos/20787843/pexels-photo-20787843.jpeg" alt="Estadio Panatenaico" className="w-full aspect-[21/9] object-cover group-hover:scale-[1.02] transition-transform duration-700" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="bg-white/95 backdrop-blur-sm text-gray-900 text-[10px] uppercase tracking-wider font-bold px-3 py-1.5 rounded-full shadow">10:00h</span>
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                <h3 className="font-serif text-3xl text-white drop-shadow-lg">Estadio Panatenaico</h3>
                <span className="bg-white/95 backdrop-blur-sm text-gray-900 text-[9px] uppercase tracking-wider font-bold px-3 py-1.5 rounded-full shadow hidden sm:block">JJOO 1896</span>
              </div>
            </div>

            <p className="text-gray-600 leading-[1.8] text-lg font-light mb-8 max-w-3xl">
              Aquí se celebraron los primeros Juegos Olímpicos modernos en 1896. El único estadio del mundo construido completamente en mármol blanco del Monte Pentélico. Capacidad: 45.000 espectadores.
            </p>

            <div className="bg-gray-50 p-6 rounded-sm border border-gray-100 mb-6">
              <h4 className="text-[10px] uppercase tracking-[.2em] text-gray-400 font-semibold mb-4">La experiencia</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700">
                <p className="flex items-center gap-2"><span className="w-5 h-5 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 text-xs flex-shrink-0">1</span>Baja a la pista olímpica</p>
                <p className="flex items-center gap-2"><span className="w-5 h-5 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 text-xs flex-shrink-0">2</span>Sube a las gradas superiores</p>
                <p className="flex items-center gap-2"><span className="w-5 h-5 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 text-xs flex-shrink-0">3</span>Visita museo con antorchas</p>
                <p className="flex items-center gap-2"><span className="w-5 h-5 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 text-xs flex-shrink-0">4</span>Foto en el podio olímpico</p>
              </div>
            </div>

            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex flex-wrap gap-3">
                <span className="text-xs text-gray-600 bg-gray-50 px-3.5 py-2 rounded-full border border-gray-200">10€ (incluye audioguía español)</span>
                <span className="text-xs text-gray-600 bg-gray-50 px-3.5 py-2 rounded-full border border-gray-200">45-60 min</span>
              </div>
              <a href="https://www.panathenaicstadium.gr/en/home" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 text-xs font-semibold transition-colors">
                Comprar entrada <ExternalLink size={11} />
              </a>
            </div>
          </div>

          {/* Plaza Syntagma */}
          <div className="mb-20">
            <div className="relative rounded-sm overflow-hidden mb-8 group">
              <img src="https://images.pexels.com/photos/18757926/pexels-photo-18757926.jpeg" alt="Evzones en Plaza Syntagma" className="w-full aspect-[21/9] object-cover group-hover:scale-[1.02] transition-transform duration-700" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="bg-white/95 backdrop-blur-sm text-gray-900 text-[10px] uppercase tracking-wider font-bold px-3 py-1.5 rounded-full shadow">11:30h</span>
                <span className="bg-teal-500/90 text-white text-[9px] uppercase tracking-wider font-bold px-3 py-1.5 rounded-full">Gratis</span>
              </div>
              <div className="absolute bottom-4 left-4">
                <h3 className="font-serif text-3xl text-white drop-shadow-lg">Plaza Syntagma</h3>
              </div>
            </div>

            <p className="text-gray-600 leading-[1.8] text-lg font-light mb-8 max-w-3xl">
              La plaza principal frente al Parlamento. Cada hora se celebra el cambio de guardia de los Evzones. Los domingos a las 11:00h la ceremonia es completa con toda la compañía.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="bg-gray-50 p-5 rounded-sm">
                <h4 className="text-[10px] uppercase tracking-[.2em] text-gray-400 font-semibold mb-3">Horarios</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>Cada hora en punto (24h)</li>
                  <li>Domingos 11:00h: ceremonia completa (45 min)</li>
                  <li>Entre semana: 10-15 min cada hora</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-5 rounded-sm">
                <h4 className="text-[10px] uppercase tracking-[.2em] text-gray-400 font-semibold mb-3">Curiosidades</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>Cada zapato pesa 3 kg (60 clavos en la suela)</li>
                  <li>Fustanella con 400 pliegues (uno por año de ocupación)</li>
                  <li>Paso ceremonial: pierna a 90 grados</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Plaka */}
          <div className="mb-20">
            <div className="relative rounded-sm overflow-hidden mb-8 group">
              <img src="https://images.pexels.com/photos/11649391/pexels-photo-11649391.jpeg" alt="Barrio de Plaka" className="w-full aspect-[21/9] object-cover group-hover:scale-[1.02] transition-transform duration-700" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="bg-white/95 backdrop-blur-sm text-gray-900 text-[10px] uppercase tracking-wider font-bold px-3 py-1.5 rounded-full shadow">12:30h</span>
                <span className="bg-amber-500/90 text-white text-[9px] uppercase tracking-wider font-bold px-3 py-1.5 rounded-full">Almuerzo</span>
              </div>
              <div className="absolute bottom-4 left-4">
                <h3 className="font-serif text-3xl text-white drop-shadow-lg">Barrio de Plaka</h3>
              </div>
            </div>

            <p className="text-gray-600 leading-[1.8] text-lg font-light mb-8 max-w-3xl">
              El barrio más antiguo y encantador de Atenas. Calles empedradas, casas neoclásicas del siglo XIX, buganvillas en los balcones y tabernas a los pies de la Acrópolis. Conocido como "el barrio de los Dioses".
            </p>

            <div className="bg-amber-50 p-6 rounded-sm border border-amber-100">
              <h4 className="text-[10px] uppercase tracking-[.2em] text-amber-700 font-semibold mb-4 flex items-center gap-2"><Utensils size={11} /> Dónde comer</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700">
                <div className="flex justify-between"><span><strong>Arcadia</strong> — Taverna familiar</span><span className="text-teal-600 font-semibold">12-20€</span></div>
                <div className="flex justify-between"><span><strong>Victory Cafe</strong> — Comida típica</span><span className="text-teal-600 font-semibold">10-18€</span></div>
                <div className="flex justify-between"><span><strong>To Kafeneio</strong> — Sin turistas</span><span className="text-teal-600 font-semibold">15-25€</span></div>
                <div className="flex justify-between"><span><strong>Avocado</strong> — Vegano</span><span className="text-teal-600 font-semibold">10-16€</span></div>
              </div>
            </div>
          </div>

          {/* Museo de la Acrópolis - dark card */}
          <div className="mb-20 bg-slate-900 text-white p-8 md:p-10 rounded-sm shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-white/10 text-white/50 text-[9px] uppercase tracking-wider font-bold px-3 py-1 rounded-full border border-white/10">14:30h</span>
              <span className="bg-teal-500/20 text-teal-300 text-[9px] uppercase tracking-wider font-bold px-3 py-1 rounded-full border border-teal-500/30">Imprescindible</span>
            </div>
            <h3 className="font-serif text-3xl text-white mb-4">Museo de la Acrópolis</h3>
            <p className="text-white/60 leading-relaxed text-lg font-light mb-8 max-w-2xl">
              Museo ultramoderno (2009) con los tesoros originales de la Acrópolis. Suelo de cristal sobre excavaciones arqueológicas visibles. Diseñado por Bernard Tschumi.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="text-[10px] uppercase tracking-[.2em] text-white/30 font-semibold mb-4">Imprescindibles</h4>
                <ul className="space-y-3 text-sm text-white/60">
                  <li className="flex items-start gap-2.5"><span className="w-1.5 h-1.5 bg-teal-400 rounded-full mt-1.5 flex-shrink-0"></span>Sala del Partenón: Frisos originales (planta 3)</li>
                  <li className="flex items-start gap-2.5"><span className="w-1.5 h-1.5 bg-teal-400 rounded-full mt-1.5 flex-shrink-0"></span>5 Cariátides originales del Erecteión</li>
                  <li className="flex items-start gap-2.5"><span className="w-1.5 h-1.5 bg-teal-400 rounded-full mt-1.5 flex-shrink-0"></span>Korai arcaicas preclásicas</li>
                  <li className="flex items-start gap-2.5"><span className="w-1.5 h-1.5 bg-teal-400 rounded-full mt-1.5 flex-shrink-0"></span>Suelo de cristal con ruinas debajo</li>
                </ul>
              </div>
              <div>
                <h4 className="text-[10px] uppercase tracking-[.2em] text-white/30 font-semibold mb-4">Info</h4>
                <div className="space-y-3 text-sm text-white/60">
                  <div className="flex justify-between"><span>Entrada</span><strong className="text-teal-400">15€</strong></div>
                  <div className="flex justify-between"><span>Nov-Mar</span><strong className="text-teal-400">10€</strong></div>
                  <div className="flex justify-between"><span>Horario</span><strong className="text-white/80">9:00-20:00</strong></div>
                  <div className="flex justify-between"><span>Viernes</span><strong className="text-white/80">Hasta 22:00</strong></div>
                  <div className="flex justify-between"><span>Audioguía</span><strong className="text-white/80">5€</strong></div>
                </div>
              </div>
            </div>

            <a href="https://www.theacropolismuseum.gr/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-slate-900 hover:bg-teal-50 text-xs font-semibold px-6 py-3.5 rounded-sm transition-colors shadow-lg hover:-translate-y-0.5">
              Comprar Entradas <ExternalLink size={12} />
            </a>
          </div>

          {/* Monte Licabeto */}
          <div>
            <div className="bg-gradient-to-r from-amber-50 to-rose-50 p-8 md:p-10 rounded-sm border border-amber-100">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-amber-100 text-amber-700 text-[9px] uppercase tracking-wider font-bold px-3 py-1 rounded-full">17:30h</span>
                <span className="bg-rose-100 text-rose-700 text-[9px] uppercase tracking-wider font-bold px-3 py-1 rounded-full">Atardecer</span>
              </div>
              <h3 className="font-serif text-2xl md:text-3xl text-gray-900 mb-4">Monte Licabeto</h3>
              <p className="text-gray-600 leading-relaxed mb-8 max-w-2xl">
                El punto más alto de Atenas (277m). Al atardecer, la Acrópolis se ilumina mientras el sol se pone sobre el Mar Egeo. Capilla blanca de San Jorge en la cima, restaurante panorámico y teatro al aire libre.
              </p>

              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="bg-white p-4 rounded-sm text-center shadow-sm">
                  <span className="text-xl font-serif font-semibold text-gray-900">10€</span>
                  <p className="text-[9px] text-gray-500 mt-1 uppercase tracking-wider">funicular i/v</p>
                </div>
                <div className="bg-white p-4 rounded-sm text-center shadow-sm">
                  <span className="text-xl font-serif font-semibold text-teal-600">0€</span>
                  <p className="text-[9px] text-gray-500 mt-1 uppercase tracking-wider">a pie (25 min)</p>
                </div>
                <div className="bg-white p-4 rounded-sm text-center shadow-sm">
                  <span className="text-xl font-serif font-semibold text-gray-900">277m</span>
                  <p className="text-[9px] text-gray-500 mt-1 uppercase tracking-wider">altura</p>
                </div>
              </div>

              <p className="text-sm text-amber-800 bg-amber-100/50 p-4 rounded-sm border border-amber-200/50">
                <strong>Timing:</strong> Llega 45 min antes del sunset. Verano: ~20:30h (masificado). Invierno: ~17:30h (más íntimo). Si el funicular tiene cola, sube a pie desde Kolonaki (20-30 min).
              </p>
            </div>
          </div>
        </section>
      </Reveal>
    </div>
  );
};

export default AthensDay2;
