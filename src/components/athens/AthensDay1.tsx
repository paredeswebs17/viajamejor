import { ExternalLink, Camera, Utensils } from 'lucide-react';
import Reveal from './Reveal';

const AthensDay1: React.FC = () => {
  return (
    <div className="bg-stone-50">
      <Reveal>
        <section id="dia-1" className="max-w-4xl mx-auto px-6 lg:px-10 py-20 md:py-28">
          <div className="flex items-center gap-5 mb-14">
            <span className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 text-white font-serif text-2xl rounded-sm shadow-xl shadow-teal-500/25">01</span>
            <div>
              <span className="text-[10px] uppercase tracking-[.25em] text-teal-600 font-semibold">Día 1</span>
              <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-gray-900">La Acrópolis y el Legado de los Dioses</h2>
            </div>
          </div>

          {/* Acrópolis */}
          <div className="mb-20">
            <div className="relative rounded-sm overflow-hidden mb-8 group">
              <img src="https://images.pexels.com/photos/164336/pexels-photo-164336.jpeg" alt="Partenón en la Acrópolis" className="w-full aspect-[21/9] object-cover group-hover:scale-[1.02] transition-transform duration-700" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="bg-white/95 backdrop-blur-sm text-gray-900 text-[10px] uppercase tracking-wider font-bold px-3 py-1.5 rounded-full shadow">08:00h</span>
              </div>
              <div className="absolute bottom-4 left-4">
                <h3 className="font-serif text-3xl text-white drop-shadow-lg">Acrópolis de Atenas</h3>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <p className="text-gray-600 leading-[1.8] text-lg font-light mb-6">
                  Comenzamos en el lugar más emblemático de Grecia. Esta roca sagrada de 156 metros domina Atenas desde hace 2.500 años. Aquí verás el Partenón, el templo más perfecto jamás construido, dedicado a la diosa Atenea.
                </p>

                <div className="bg-amber-50 border-l-4 border-amber-400 p-5 rounded-r-sm mb-6">
                  <p className="text-sm text-amber-900 font-semibold mb-1">Llega a primera hora (8:00h)</p>
                  <p className="text-sm text-amber-800 leading-relaxed">Las colas superan las 2h a partir de las 10:00. Evitas el calor intenso (no hay sombra) y los grupos de cruceros que llegan a las 9:30.</p>
                </div>

                <div className="bg-teal-50 border-l-4 border-teal-400 p-5 rounded-r-sm">
                  <p className="text-sm text-teal-800">
                    <strong>Truco:</strong> Entra por el acceso Sur (Dionisio Areopagita). Menos cola y pasas primero por el Teatro de Dioniso. Al salir, usa la salida Norte hacia el Areópago.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-sm border border-stone-200 shadow-sm">
                  <h4 className="text-[10px] uppercase tracking-[.2em] text-gray-400 font-semibold mb-4 flex items-center gap-2"><Camera size={11} /> Qué verás</h4>
                  <ul className="space-y-2.5 text-sm text-gray-700">
                    <li className="flex items-start gap-2.5"><span className="w-1.5 h-1.5 bg-teal-400 rounded-full mt-1.5 flex-shrink-0"></span>Partenón (447-432 a.C.)</li>
                    <li className="flex items-start gap-2.5"><span className="w-1.5 h-1.5 bg-teal-400 rounded-full mt-1.5 flex-shrink-0"></span>Erecteión con las Cariátides</li>
                    <li className="flex items-start gap-2.5"><span className="w-1.5 h-1.5 bg-teal-400 rounded-full mt-1.5 flex-shrink-0"></span>Templo de Atenea Niké</li>
                    <li className="flex items-start gap-2.5"><span className="w-1.5 h-1.5 bg-teal-400 rounded-full mt-1.5 flex-shrink-0"></span>Propileos</li>
                    <li className="flex items-start gap-2.5"><span className="w-1.5 h-1.5 bg-teal-400 rounded-full mt-1.5 flex-shrink-0"></span>Teatro de Dioniso</li>
                    <li className="flex items-start gap-2.5"><span className="w-1.5 h-1.5 bg-teal-400 rounded-full mt-1.5 flex-shrink-0"></span>Odeón de Herodes Ático</li>
                  </ul>
                </div>

                <div className="bg-white p-5 rounded-sm border border-stone-200 shadow-sm">
                  <h4 className="text-[10px] uppercase tracking-[.2em] text-gray-400 font-semibold mb-4">Info práctica</h4>
                  <div className="space-y-2.5 text-sm text-gray-700">
                    <div className="flex justify-between"><span>Entrada</span><strong className="text-teal-700">20€</strong></div>
                    <div className="flex justify-between"><span>Horario</span><strong>8:00-20:00</strong></div>
                    <div className="flex justify-between"><span>Duración</span><strong>2-3 horas</strong></div>
                    <div className="flex justify-between"><span>Nov-Mar</span><strong className="text-teal-700">12€</strong></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 mt-8">
              <a href="https://etickets.tap.gr/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold px-6 py-3.5 rounded-sm transition-colors shadow-lg shadow-slate-900/20 hover:shadow-xl hover:-translate-y-0.5">
                Comprar Entrada Oficial <ExternalLink size={12} />
              </a>
              <a href="https://gyg.me/Qj5yoL5g" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 text-xs font-semibold px-6 py-3.5 rounded-sm transition-all hover:border-gray-300 hover:-translate-y-0.5">
                Tour Guiado en Español <ExternalLink size={12} />
              </a>
            </div>
          </div>

          {/* Areópago */}
          <div className="mb-20">
            <div className="relative rounded-sm overflow-hidden mb-8 group">
              <img src="https://images.pexels.com/photos/7218638/pexels-photo-7218638.jpeg" alt="Vista desde el Areópago" className="w-full aspect-[21/9] object-cover group-hover:scale-[1.02] transition-transform duration-700" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="bg-white/95 backdrop-blur-sm text-gray-900 text-[10px] uppercase tracking-wider font-bold px-3 py-1.5 rounded-full shadow">11:00h</span>
                <span className="bg-teal-500/90 text-white text-[9px] uppercase tracking-wider font-bold px-3 py-1.5 rounded-full">Gratis</span>
              </div>
              <div className="absolute bottom-4 left-4">
                <h3 className="font-serif text-3xl text-white drop-shadow-lg">Colina del Areópago</h3>
              </div>
            </div>

            <p className="text-gray-600 leading-[1.8] text-lg font-light mb-6 max-w-3xl">
              Al salir de la Acrópolis, sube esta roca lisa donde los atenienses celebraban juicios hace 2.500 años. Según la mitología, aquí fue juzgado Ares, dios de la guerra.
            </p>

            <div className="bg-gradient-to-r from-rose-50 to-amber-50 border-l-4 border-rose-400 p-5 rounded-r-sm mb-6">
              <p className="text-sm text-rose-900 font-semibold mb-1">El mejor atardecer de Atenas</p>
              <p className="text-sm text-rose-800 leading-relaxed">Vuelve al atardecer (18:00-19:00h en verano). Ver el sol ponerse detrás del Partenón mientras Atenas se ilumina es una de las experiencias más mágicas de Grecia. Gratuito y abierto 24h.</p>
            </div>

            <div className="flex flex-wrap gap-2">
              {['Aquí predicó San Pablo (51 d.C.)', 'Roca resbaladiza', '2 min de la Acrópolis', 'Gratis 24h'].map((t, i) => (
                <span key={i} className="text-xs text-gray-600 bg-white px-3 py-2 rounded-full border border-stone-200 shadow-sm">{t}</span>
              ))}
            </div>
          </div>

          {/* Ágora Romana */}
          <div className="mb-20">
            <div className="relative rounded-sm overflow-hidden mb-8 group">
              <img src="https://images.pexels.com/photos/11649392/pexels-photo-11649392.jpeg" alt="Ágora Romana" className="w-full aspect-[21/9] object-cover group-hover:scale-[1.02] transition-transform duration-700" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="bg-white/95 backdrop-blur-sm text-gray-900 text-[10px] uppercase tracking-wider font-bold px-3 py-1.5 rounded-full shadow">11:30h</span>
              </div>
              <div className="absolute bottom-4 left-4">
                <h3 className="font-serif text-3xl text-white drop-shadow-lg">Ágora Romana</h3>
              </div>
            </div>

            <p className="text-gray-600 leading-[1.8] text-lg font-light mb-8 max-w-3xl">
              Mercado público del 19-11 a.C. Destaca la Torre de los Vientos (50 a.C.), un reloj hidráulico octogonal: el primer observatorio meteorológico de la historia.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
              <div className="bg-white p-4 rounded-sm border border-stone-200 text-center shadow-sm">
                <span className="text-xl font-serif font-semibold text-gray-900">8€</span>
                <p className="text-[9px] text-gray-500 mt-1 uppercase tracking-wider">entrada</p>
              </div>
              <div className="bg-white p-4 rounded-sm border border-stone-200 text-center shadow-sm">
                <span className="text-xl font-serif font-semibold text-gray-900">30-45</span>
                <p className="text-[9px] text-gray-500 mt-1 uppercase tracking-wider">minutos</p>
              </div>
              <div className="bg-white p-4 rounded-sm border border-stone-200 text-center shadow-sm">
                <span className="text-xl font-serif font-semibold text-gray-900">8:00</span>
                <p className="text-[9px] text-gray-500 mt-1 uppercase tracking-wider">apertura</p>
              </div>
              <div className="bg-teal-50 p-4 rounded-sm border-2 border-teal-200 text-center">
                <span className="text-xl font-serif font-semibold text-teal-700">30€</span>
                <p className="text-[9px] text-teal-600 mt-1 uppercase tracking-wider font-semibold">pase combo</p>
              </div>
            </div>

            <p className="text-sm text-gray-600 bg-white p-5 rounded-sm border border-stone-200 shadow-sm">
              El <strong>Pase Combinado (30€)</strong> incluye: Acrópolis, Ágora Romana, Biblioteca de Adriano, Ágora Antigua, Kerameikos y más. Válido 5 días. Rentable si visitas 2+ lugares.
            </p>
          </div>

          {/* Biblioteca + Monastiraki + Ágora antigua en cards */}
          <div className="mb-20 p-8 bg-white border border-stone-200 rounded-sm shadow-sm">
            <div className="flex items-start justify-between mb-4">
              <div>
                <span className="bg-stone-100 text-gray-600 text-[9px] uppercase tracking-wider font-bold px-2.5 py-1 rounded-full">12:15h</span>
                <h3 className="font-serif text-2xl text-gray-900 mt-3">Biblioteca de Adriano</h3>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed mb-4">
              Complejo cultural de Adriano (132 d.C.) con salas de lectura, jardines y aulas. "De las 100 columnas" por las columnas corintias del jardín interior.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs text-gray-600 bg-stone-50 px-3 py-1.5 rounded-full border border-stone-200">6€ (pase combinado)</span>
              <span className="text-xs text-gray-600 bg-stone-50 px-3 py-1.5 rounded-full border border-stone-200">20-30 min</span>
              <span className="text-xs text-gray-600 bg-stone-50 px-3 py-1.5 rounded-full border border-stone-200">Junto al Ágora Romana</span>
            </div>
          </div>

          {/* Monastiraki */}
          <div className="mb-20">
            <div className="relative rounded-sm overflow-hidden mb-8 group">
              <img src="https://images.pexels.com/photos/15339398/pexels-photo-15339398.jpeg" alt="Plaza Monastiraki" className="w-full aspect-[21/9] object-cover group-hover:scale-[1.02] transition-transform duration-700" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="bg-white/95 backdrop-blur-sm text-gray-900 text-[10px] uppercase tracking-wider font-bold px-3 py-1.5 rounded-full shadow">13:00h</span>
                <span className="bg-amber-500/90 text-white text-[9px] uppercase tracking-wider font-bold px-3 py-1.5 rounded-full">Almuerzo</span>
              </div>
              <div className="absolute bottom-4 left-4">
                <h3 className="font-serif text-3xl text-white drop-shadow-lg">Monastiraki</h3>
              </div>
            </div>

            <p className="text-gray-600 leading-[1.8] text-lg font-light mb-8 max-w-3xl">
              Barrio animado con bazares, mercadillos y la plaza más vibrante de Atenas. El Flea Market funciona todos los días pero los domingos es espectacular.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="bg-white p-6 rounded-sm border border-stone-200 shadow-sm">
                <h4 className="text-[10px] uppercase tracking-[.2em] text-gray-400 font-semibold mb-4 flex items-center gap-2"><Utensils size={11} /> Dónde comer</h4>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex justify-between items-center"><span><strong>Thanasis</strong> — Souvlaki legendario</span><span className="text-teal-600 font-semibold text-xs">8-12€</span></li>
                  <li className="flex justify-between items-center"><span><strong>Savvas</strong> — Gyros tradicional</span><span className="text-teal-600 font-semibold text-xs">6-10€</span></li>
                  <li className="flex justify-between items-center"><span><strong>MS Roof Garden</strong> — Vistas Acrópolis</span><span className="text-teal-600 font-semibold text-xs">15-25€</span></li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-sm border border-stone-200 shadow-sm">
                <h4 className="text-[10px] uppercase tracking-[.2em] text-gray-400 font-semibold mb-4">Qué comprar</h4>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-center gap-2.5"><span className="w-1.5 h-1.5 bg-amber-400 rounded-full flex-shrink-0"></span>Ojo griego (Mati)</li>
                  <li className="flex items-center gap-2.5"><span className="w-1.5 h-1.5 bg-amber-400 rounded-full flex-shrink-0"></span>Komboloi (rosarios griegos)</li>
                  <li className="flex items-center gap-2.5"><span className="w-1.5 h-1.5 bg-amber-400 rounded-full flex-shrink-0"></span>Sandalias de cuero artesanas</li>
                  <li className="flex items-center gap-2.5"><span className="w-1.5 h-1.5 bg-amber-400 rounded-full flex-shrink-0"></span>Aceite de oliva y aceitunas</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Ágora de Atenas */}
          <div>
            <div className="relative rounded-sm overflow-hidden mb-8 group">
              <img src="https://images.pexels.com/photos/18757918/pexels-photo-18757918.jpeg" alt="Templo de Hefesto" className="w-full aspect-[21/9] object-cover group-hover:scale-[1.02] transition-transform duration-700" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="bg-white/95 backdrop-blur-sm text-gray-900 text-[10px] uppercase tracking-wider font-bold px-3 py-1.5 rounded-full shadow">14:30h</span>
              </div>
              <div className="absolute bottom-4 left-4">
                <h3 className="font-serif text-3xl text-white drop-shadow-lg">Ágora de Atenas</h3>
              </div>
            </div>

            <p className="text-gray-600 leading-[1.8] text-lg font-light mb-8 max-w-3xl">
              Aquí nació la democracia occidental hace 2.500 años. Sócrates, Platón y Aristóteles caminaron por estas mismas piedras debatiendo filosofía.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="bg-white p-6 rounded-sm border border-stone-200 shadow-sm">
                <h4 className="text-[10px] uppercase tracking-[.2em] text-gray-400 font-semibold mb-4">Imprescindibles</h4>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li><strong>Templo de Hefesto:</strong> El templo griego mejor conservado del mundo</li>
                  <li><strong>Stoa de Átalo:</strong> Pórtico reconstruido, ahora museo</li>
                  <li><strong>Biblioteca de Pantainos:</strong> Ruinas del s. II d.C.</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-sm border border-stone-200 shadow-sm">
                <h4 className="text-[10px] uppercase tracking-[.2em] text-gray-400 font-semibold mb-4">Info</h4>
                <div className="space-y-3 text-sm text-gray-700">
                  <div className="flex justify-between"><span>Entrada</span><strong>10€ (pase combinado)</strong></div>
                  <div className="flex justify-between"><span>Horario</span><strong>8:00-20:00</strong></div>
                  <div className="flex justify-between"><span>Duración</span><strong>1.5-2 horas</strong></div>
                  <div className="flex justify-between"><span>Museo</span><strong>Incluido</strong></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Reveal>
    </div>
  );
};

export default AthensDay1;
