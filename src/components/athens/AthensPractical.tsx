import { useState } from 'react';
import { ChevronDown, ExternalLink, Utensils, Wallet } from 'lucide-react';
import Reveal from './Reveal';

const AthensPractical: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* Más Lugares */}
      <div className="bg-stone-50">
        <Reveal>
          <section id="lugares-imprescindibles" className="max-w-4xl mx-auto px-6 lg:px-10 py-20 md:py-28">
            <span className="text-[10px] uppercase tracking-[.25em] text-gray-400 font-semibold mb-4 block">Extra</span>
            <h2 className="font-serif text-3xl md:text-4xl text-gray-900 mb-3">Más lugares imprescindibles</h2>
            <p className="text-gray-500 mb-12">Si tienes más días o quieres profundizar en la ciudad</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { name: 'Museo Arqueológico Nacional', desc: 'Máscara de Agamenón, Mecanismo de Anticitera. 7.000 años de arte.', info: '12€ · 2-3h', url: 'https://www.namuseum.gr/en/', tag: 'Top', tagColor: 'text-teal-600 bg-teal-50' },
                { name: 'Kerameikos', desc: 'Necrópolis antigua. Tumbas monumentales. Sin turistas.', info: '8€ (pase) · 1h', tag: 'Secreto', tagColor: 'text-amber-600 bg-amber-50' },
                { name: 'Colina Filopappou', desc: 'Senderos entre pinos con la mejor foto alternativa de la Acrópolis.', info: 'Gratis · 1-2h', tag: 'Gratis', tagColor: 'text-green-600 bg-green-50' },
                { name: 'Psyrri', desc: 'Barrio alternativo: murales, galerías, bares trendy y tavernas.', info: 'Gratis · Noche', tag: 'Nightlife', tagColor: 'text-rose-600 bg-rose-50' },
                { name: 'Cabo Sunión', desc: 'Templo de Poseidón (444 a.C.) en acantilado. Sunset épico.', info: 'Tour 45€ · 4-5h', url: 'https://gyg.me/mNa0HJDh', tag: 'Sunset', tagColor: 'text-amber-600 bg-amber-50' },
                { name: 'Jardín Nacional', desc: '15.5 hectáreas con estanques, pavos reales y ruinas escondidas.', info: 'Gratis · Relax', tag: 'Relax', tagColor: 'text-green-600 bg-green-50' },
                { name: 'Tour de Vinos', desc: 'Cata de Retsina, Assyrtiko y Agiorgitiko con quesos griegos.', info: 'Desde 75€ · 3-4h', url: 'https://gyg.me/T8PPmWLX', tag: 'Foodie', tagColor: 'text-rose-600 bg-rose-50' },
              ].map((place, i) => (
                <div key={i} className="p-6 bg-white border border-stone-200 rounded-sm hover:shadow-md hover:border-stone-300 transition-all group">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="font-semibold text-gray-900">{place.name}</h4>
                    <span className={`text-[8px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full whitespace-nowrap ml-2 ${place.tagColor}`}>{place.tag}</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3 leading-relaxed">{place.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">{place.info}</span>
                    {place.url && (
                      <a href={place.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-teal-600 hover:text-teal-700 text-xs font-semibold transition-colors opacity-0 group-hover:opacity-100">
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

      {/* Herramientas */}
      <div className="bg-teal-700">
        <Reveal>
          <section id="recomendaciones" className="max-w-4xl mx-auto px-6 lg:px-10 py-20 md:py-28">
            <span className="text-[10px] uppercase tracking-[.25em] text-teal-200 font-semibold mb-4 block">Imprescindibles</span>
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-3">Herramientas esenciales</h2>
            <p className="text-teal-100/50 mb-12">Servicios que uso en todos mis viajes</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-7 bg-white/10 border border-white/10 rounded-sm backdrop-blur-sm hover:bg-white/15 transition-colors">
                <h3 className="font-semibold text-white text-lg mb-5">Revolut</h3>
                <ul className="space-y-3 text-sm text-white/60 mb-6">
                  <li className="flex items-center gap-2.5"><span className="w-1.5 h-1.5 bg-teal-300 rounded-full flex-shrink-0"></span>Sin comisiones por pago en euros</li>
                  <li className="flex items-center gap-2.5"><span className="w-1.5 h-1.5 bg-teal-300 rounded-full flex-shrink-0"></span>Retiros gratuitos en cajeros</li>
                  <li className="flex items-center gap-2.5"><span className="w-1.5 h-1.5 bg-teal-300 rounded-full flex-shrink-0"></span>Control total desde la app</li>
                  <li className="flex items-center gap-2.5"><span className="w-1.5 h-1.5 bg-teal-300 rounded-full flex-shrink-0"></span>Mejor tipo de cambio</li>
                </ul>
                <a href="https://revolut.com/referral/?referral-code=antoni22jf!DEC1-25-AR-CH1H-CRY&geo-redirect" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-teal-800 hover:bg-teal-50 text-xs font-semibold px-6 py-3.5 rounded-sm transition-colors shadow-lg">
                  Consigue tu Revolut <ExternalLink size={12} />
                </a>
              </div>
              <div className="p-7 bg-white/10 border border-white/10 rounded-sm backdrop-blur-sm hover:bg-white/15 transition-colors">
                <h3 className="font-semibold text-white text-lg mb-5">IATI Seguros</h3>
                <ul className="space-y-3 text-sm text-white/60 mb-6">
                  <li className="flex items-center gap-2.5"><span className="w-1.5 h-1.5 bg-teal-300 rounded-full flex-shrink-0"></span>Asistencia médica en extranjero</li>
                  <li className="flex items-center gap-2.5"><span className="w-1.5 h-1.5 bg-teal-300 rounded-full flex-shrink-0"></span>Cobertura de cancelación</li>
                  <li className="flex items-center gap-2.5"><span className="w-1.5 h-1.5 bg-teal-300 rounded-full flex-shrink-0"></span>Asistencia 24/7 en español</li>
                  <li className="flex items-center gap-2.5"><span className="w-1.5 h-1.5 bg-teal-300 rounded-full flex-shrink-0"></span>Repatriación incluida</li>
                </ul>
                <a href="https://www.iatiseguros.com/?r=37344279073491" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-teal-800 hover:bg-teal-50 text-xs font-semibold px-6 py-3.5 rounded-sm transition-colors shadow-lg">
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
          <section id="gastronomia" className="max-w-4xl mx-auto px-6 lg:px-10 py-20 md:py-28">
            <div className="flex items-center gap-3 mb-3">
              <Utensils size={20} className="text-amber-500" />
              <span className="text-[10px] uppercase tracking-[.25em] text-amber-600 font-semibold">Comer y beber</span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl text-gray-900 mb-3">Guía gastronómica</h2>
            <p className="text-gray-500 mb-14">4.000 años de historia culinaria en cada plato</p>

            <h3 className="font-serif text-xl text-gray-900 mb-6">Platos imprescindibles</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-16">
              {[
                { name: 'Moussaka', desc: 'Berenjena, cordero, bechamel gratinada', price: '12-16€', emoji: '🍆' },
                { name: 'Souvlaki & Gyros', desc: 'Brochetas o carne en pita con tzatziki', price: '6-10€', emoji: '🥙' },
                { name: 'Ensalada Griega', desc: 'Tomate, olivas kalamata, feta', price: '7-10€', emoji: '🥗' },
                { name: 'Loukoumades', desc: 'Buñuelos en miel de tomillo', price: '5-8€', emoji: '🍩' },
                { name: 'Saganaki', desc: 'Queso frito con limón', price: '7-9€', emoji: '🧀' },
                { name: 'Pulpo a la Parrilla', desc: 'Con orégano y limón', price: '14-18€', emoji: '🐙' },
                { name: 'Tzatziki', desc: 'Yogur con pepino y ajo', price: '4-6€', emoji: '🥒' },
                { name: 'Melitzanosalata', desc: 'Dip de berenjena asada', price: '5-7€', emoji: '🫒' },
              ].map((dish, i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-gray-50 rounded-sm hover:bg-gray-100 transition-colors">
                  <span className="text-2xl flex-shrink-0">{dish.emoji}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold text-gray-900 text-sm">{dish.name}</h4>
                      <span className="text-sm font-semibold text-teal-600 ml-2">{dish.price}</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-0.5">{dish.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="font-serif text-xl text-gray-900 mb-6">Bebidas griegas</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16">
              <div className="p-5 bg-amber-50 border border-amber-100 rounded-sm">
                <h4 className="text-[9px] uppercase tracking-[.2em] text-amber-700 font-bold mb-4">Vinos</h4>
                <ul className="space-y-2.5 text-sm text-gray-700">
                  <li><strong>Retsina:</strong> Blanco con resina (3-5€)</li>
                  <li><strong>Assyrtiko:</strong> Seco, Santorini (5-7€)</li>
                  <li><strong>Agiorgitiko:</strong> Tinto suave (4-6€)</li>
                </ul>
              </div>
              <div className="p-5 bg-blue-50 border border-blue-100 rounded-sm">
                <h4 className="text-[9px] uppercase tracking-[.2em] text-blue-700 font-bold mb-4">Licores</h4>
                <ul className="space-y-2.5 text-sm text-gray-700">
                  <li><strong>Ouzo:</strong> Anís griego (4-6€)</li>
                  <li><strong>Tsipouro:</strong> Aguardiente (3-5€)</li>
                  <li><strong>Metaxa:</strong> Brandy suave (5-7€)</li>
                </ul>
              </div>
              <div className="p-5 bg-stone-50 border border-stone-200 rounded-sm">
                <h4 className="text-[9px] uppercase tracking-[.2em] text-stone-600 font-bold mb-4">Cafés y cervezas</h4>
                <ul className="space-y-2.5 text-sm text-gray-700">
                  <li><strong>Ellinikos:</strong> Café griego (2-3€)</li>
                  <li><strong>Mythos:</strong> Cerveza popular (3-4€)</li>
                  <li><strong>Fix:</strong> La más antigua (4-5€)</li>
                </ul>
              </div>
            </div>

            <h3 className="font-serif text-xl text-gray-900 mb-6">Restaurantes recomendados</h3>
            <div className="space-y-2 mb-10">
              {[
                { name: 'Arcadia Restaurant', desc: 'Mejor moussaka según locales', price: '12-20€', barrio: 'Plaka' },
                { name: 'Thanasis', desc: 'Icónico desde 1950. Mejores kebabs', price: '8-12€', barrio: 'Monastiraki' },
                { name: 'To Kafeneio', desc: 'Escondida, cocina casera, sin turistas', price: '15-25€', barrio: 'Plaka' },
                { name: 'Avocado', desc: 'Opciones veganas y bowls', price: '10-16€', barrio: 'Plaka' },
                { name: 'MS Roof Garden', desc: 'Terraza con vistas Acrópolis', price: '25-40€', barrio: 'Monastiraki' },
              ].map((r, i) => (
                <div key={i} className="flex items-center justify-between p-4 border border-gray-100 rounded-sm hover:bg-gray-50 transition-colors">
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <h4 className="font-semibold text-gray-900 text-sm">{r.name}</h4>
                      <span className="text-[8px] text-gray-400 uppercase tracking-wider bg-gray-100 px-2 py-0.5 rounded-full font-semibold">{r.barrio}</span>
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
          <section id="transporte" className="max-w-4xl mx-auto px-6 lg:px-10 py-20 md:py-28">
            <span className="text-[10px] uppercase tracking-[.25em] text-gray-400 font-semibold mb-4 block">Moverse</span>
            <h2 className="font-serif text-3xl md:text-4xl text-gray-900 mb-3">Sistema de transporte</h2>
            <p className="text-gray-500 mb-12">Moverse por Atenas es fácil y barato</p>

            <h3 className="font-serif text-xl text-gray-900 mb-5">Metro de Atenas</h3>
            <div className="space-y-2 mb-8">
              {[
                { line: '1', color: 'bg-green-500', name: 'Verde', route: 'Pireo — Kifisia', stops: 'Monastiraki, Omonia, Victoria' },
                { line: '2', color: 'bg-red-500', name: 'Roja', route: 'Agios Antonios — Elliniko', stops: 'Syntagma, Akropoli' },
                { line: '3', color: 'bg-blue-500', name: 'Azul', route: 'Aeropuerto — Centro', stops: 'Aeropuerto, Syntagma, Monastiraki' },
              ].map((l) => (
                <div key={l.line} className="flex items-center gap-4 p-4 bg-white rounded-sm border border-gray-100 hover:border-gray-200 transition-colors">
                  <div className={`${l.color} w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>{l.line}</div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-gray-900 text-sm">{l.name}: {l.route}</p>
                    <p className="text-xs text-gray-500">{l.stops}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
              <div className="p-4 bg-white rounded-sm border border-gray-100 text-center">
                <span className="text-2xl font-serif font-semibold text-gray-900">1,20€</span>
                <p className="text-[9px] text-gray-500 mt-1 uppercase tracking-wider">Sencillo (90 min)</p>
              </div>
              <div className="p-4 bg-white rounded-sm border border-gray-100 text-center">
                <span className="text-2xl font-serif font-semibold text-gray-900">4,10€</span>
                <p className="text-[9px] text-gray-500 mt-1 uppercase tracking-wider">Diario (24h)</p>
              </div>
              <div className="p-4 bg-teal-50 rounded-sm border-2 border-teal-300 text-center">
                <span className="text-2xl font-serif font-semibold text-teal-700">8,20€</span>
                <p className="text-[9px] text-teal-600 mt-1 uppercase tracking-wider font-bold">5 días (mejor)</p>
              </div>
              <div className="p-4 bg-white rounded-sm border border-gray-100 text-center">
                <span className="text-2xl font-serif font-semibold text-gray-900">10€</span>
                <p className="text-[9px] text-gray-500 mt-1 uppercase tracking-wider">Aeropuerto</p>
              </div>
            </div>

            <div className="bg-teal-50 border-l-4 border-teal-400 p-5 rounded-r-sm mb-10">
              <p className="text-sm text-teal-800">
                <strong>Consejo:</strong> Compra el billete de 5 días (8,20€) al llegar. Centro histórico siempre a pie. Metro solo para Licabeto o barrios alejados. Taxis solo de noche.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: 'Autobuses', items: ['1,20€ (kioscos/máquinas)', 'Frecuencia: 10-30 min', 'Funcionan 24h (líneas "N")'] },
                { title: 'Tranvía', items: ['Centro a playas del sur', '1,20€ billete', '45-60 min a la playa'] },
                { title: 'Taxis', items: ['Bajada: 1,30€ día / 1,90€ noche', 'Km: 0,74€ / 1,30€ noche', 'App: Beat'] },
                { title: 'A pie', items: ['Acrópolis → Syntagma: 15 min', 'Syntagma → Monastiraki: 10 min', 'Plaka → Ágora: 5 min'] },
              ].map((t, i) => (
                <div key={i} className="p-5 bg-white rounded-sm border border-gray-100">
                  <h4 className="font-semibold text-sm text-gray-900 mb-3">{t.title}</h4>
                  <ul className="space-y-2 text-xs text-gray-600">
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
          <section id="consejos" className="max-w-4xl mx-auto px-6 lg:px-10 py-20 md:py-28">
            <span className="text-[10px] uppercase tracking-[.25em] text-gray-400 font-semibold mb-4 block">Tips</span>
            <h2 className="font-serif text-3xl md:text-4xl text-gray-900 mb-12">Consejos finales</h2>

            <div className="space-y-2">
              {[
                { q: 'Mejor época para visitar', a: 'Abril-Mayo y Septiembre-Octubre (20-28°C, menos turistas). Evita julio-agosto (35-40°C, masificación). Invierno: precios bajos pero horario reducido.' },
                { q: 'Frases útiles en griego', a: 'Hola: Yassas · Gracias: Efharisto · Por favor: Parakalo · Adiós: Antio · Sí/No: Ne/Ohi · ¿Cuánto?: Poso kani? · La cuenta: To logariasmo · Salud: Yamas!' },
                { q: 'Propinas', a: 'No obligatorias. Restaurantes: 5-10%. Taxis: redondear. Hoteles: 1-2€ botones. Guías: 2-5€/persona.' },
                { q: 'Seguridad', a: 'Atenas es muy segura. Zonas OK: Plaka, Monastiraki, Syntagma, Kolonaki. Carteristas en metro. Evita de noche: Omonia, Exarchia.' },
                { q: 'Electricidad', a: '230V, 50Hz. Enchufes tipo C y F (europeo). NO necesitas adaptador desde España.' },
                { q: 'WiFi e Internet', a: 'Gratis en hoteles y cafés. Roaming UE: sin cargos extra. SIM local: Cosmote o Vodafone (10-20€).' },
                { q: 'Baños (importante)', a: 'El papel NO va al water. Se tira a la papelera. Tuberías antiguas. Norma en TODO el país.' },
                { q: 'Horarios', a: 'Tiendas: Lun-Sáb 9-21h. Restaurantes: almuerzo 12-16h, cena 19-00h. Monumentos: 8-20h (verano).' },
              ].map((item, i) => (
                <div key={i} className="border border-gray-100 rounded-sm overflow-hidden hover:border-gray-200 transition-colors">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 hover:bg-gray-50 transition-colors text-left"
                  >
                    <span className="font-medium text-gray-900">{item.q}</span>
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
            <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 bg-green-50 border border-green-100 rounded-sm">
                <h4 className="text-[9px] uppercase tracking-[.2em] text-green-700 font-bold mb-4">Souvenirs auténticos</h4>
                <ul className="space-y-2.5 text-sm text-gray-700">
                  <li>Aceite de oliva virgen extra</li>
                  <li>Miel de tomillo griega</li>
                  <li>Komboloi (rosario griego)</li>
                  <li>Ojo griego (Mati)</li>
                  <li>Sandalias de cuero</li>
                  <li>Esponjas naturales</li>
                  <li>Ouzo (licor de anís)</li>
                </ul>
              </div>
              <div className="p-6 bg-red-50 border border-red-100 rounded-sm">
                <h4 className="text-[9px] uppercase tracking-[.2em] text-red-700 font-bold mb-4">Evita comprar</h4>
                <ul className="space-y-2.5 text-sm text-gray-700">
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
          <section id="presupuestos" className="max-w-4xl mx-auto px-6 lg:px-10 py-20 md:py-28">
            <div className="flex items-center gap-3 mb-3">
              <Wallet size={20} className="text-teal-400" />
              <span className="text-[10px] uppercase tracking-[.25em] text-teal-400 font-semibold">Presupuesto</span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-3">Presupuestos detallados</h2>
            <p className="text-white/40 mb-14">3 días / 2 noches · Vuelos desde España incluidos</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="p-7 bg-white/5 border border-white/10 rounded-sm hover:bg-white/[0.07] transition-colors">
                <span className="text-[8px] uppercase tracking-[.2em] text-white/40 font-bold">Budget</span>
                <h3 className="font-serif text-xl text-white mt-1 mb-1">Mochilero</h3>
                <p className="text-3xl font-serif text-teal-400 mb-6">350-450€</p>
                <ul className="space-y-2.5 text-sm text-white/50">
                  <li className="flex justify-between"><span>Vuelos low-cost</span><span>80-120€</span></li>
                  <li className="flex justify-between"><span>Hostel x2 noches</span><span>30-50€</span></li>
                  <li className="flex justify-between"><span>Comida x3 días</span><span>60-75€</span></li>
                  <li className="flex justify-between"><span>Transporte</span><span>18-20€</span></li>
                  <li className="flex justify-between"><span>Atracciones</span><span>90-100€</span></li>
                </ul>
              </div>

              <div className="p-7 bg-teal-600/15 border-2 border-teal-400/30 rounded-sm relative">
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-teal-500 text-white text-[8px] uppercase tracking-wider font-bold px-3 py-1 rounded-full shadow-lg">Recomendado</span>
                <span className="text-[8px] uppercase tracking-[.2em] text-teal-300 font-bold">Equilibrio perfecto</span>
                <h3 className="font-serif text-xl text-white mt-1 mb-1">Estándar</h3>
                <p className="text-3xl font-serif text-teal-400 mb-6">600-800€</p>
                <ul className="space-y-2.5 text-sm text-white/50">
                  <li className="flex justify-between"><span>Vuelos + equipaje</span><span>150-200€</span></li>
                  <li className="flex justify-between"><span>Hotel 3* x2</span><span>140-200€</span></li>
                  <li className="flex justify-between"><span>Comida x3 días</span><span>120-150€</span></li>
                  <li className="flex justify-between"><span>Transporte</span><span>60-70€</span></li>
                  <li className="flex justify-between"><span>Tours + entradas</span><span>180-220€</span></li>
                </ul>
              </div>

              <div className="p-7 bg-white/5 border border-white/10 rounded-sm hover:bg-white/[0.07] transition-colors">
                <span className="text-[8px] uppercase tracking-[.2em] text-amber-300 font-bold">Premium</span>
                <h3 className="font-serif text-xl text-white mt-1 mb-1">Lujo</h3>
                <p className="text-3xl font-serif text-amber-400 mb-6">1.200-1.800€</p>
                <ul className="space-y-2.5 text-sm text-white/50">
                  <li className="flex justify-between"><span>Vuelos premium</span><span>300-500€</span></li>
                  <li className="flex justify-between"><span>Hotel 5* x2</span><span>400-800€</span></li>
                  <li className="flex justify-between"><span>Comida gourmet</span><span>240-360€</span></li>
                  <li className="flex justify-between"><span>Transfers privados</span><span>150-200€</span></li>
                  <li className="flex justify-between"><span>Tours VIP</span><span>350-450€</span></li>
                </ul>
              </div>
            </div>

            <p className="text-xs text-white/30 mt-8 text-center">
              Añade 10-15% para imprevistos. No incluido: seguro (30-50€ IATI), shopping, propinas.
            </p>
          </section>
        </Reveal>
      </div>
    </>
  );
};

export default AthensPractical;
