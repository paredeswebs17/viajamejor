import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  ArrowLeft, Check, X, MapPin, Calendar, Users, MessageCircle,
  Clock, ChevronDown, ChevronUp, Moon, Shield, Send, Star,
} from 'lucide-react';
import { moroccoRoutes } from '../data/moroccoRoutes';

const WA_NUMBER = '34660611668';
const waLink = (msg: string) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;

const faqs = [
  { q: '¿Hay que pagar señal para reservar?', a: 'No. Bloqueamos plaza con tu solicitud y solo pedimos un 25% una vez confirmamos la propuesta y las fechas. El resto, a la llegada.' },
  { q: '¿Puedo cambiar las fechas o cancelar?', a: 'Sí. Hasta 30 días antes la cancelación es gratuita. Cambiamos fechas siempre que haya disponibilidad.' },
  { q: '¿Los vuelos están incluidos?', a: 'No. Te recomendamos los aeropuertos más eficientes según tu ciudad y, si quieres, te ayudamos a buscar la mejor combinación.' },
  { q: '¿Y si viajamos con niños?', a: 'Encantados. Adaptamos jornadas, alojamientos y actividades. Tarifas especiales hasta los 11 años.' },
  { q: '¿Es una ruta privada o en grupo?', a: 'Por defecto, todas nuestras rutas son privadas: vehículo, guía y alojamientos solo para vosotros.' },
  { q: '¿Quién nos guía sobre el terreno?', a: 'Nuestro equipo local habla español, vive en Marruecos y conoce cada parada como su casa. Anfitriones, no guías de grupo.' },
];

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setVisible(true), { threshold: 0.15 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const { ref, visible } = useReveal();
  return (
    <div ref={ref} style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(24px)', transition: `opacity .7s ease ${delay}ms, transform .7s cubic-bezier(.2,.8,.2,1) ${delay}ms` }}>
      {children}
    </div>
  );
}

export default function MoroccoRoutePage() {
  const { slug } = useParams<{ slug: string }>();
  const route = moroccoRoutes.find(r => r.slug === slug);
  const [openDay, setOpenDay] = useState<number | null>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', travelers: '2', message: '' });
  const [formStatus, setFormStatus] = useState<'idle' | 'sent'>('idle');

  if (!route) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white px-6 text-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Ruta no encontrada</h1>
          <Link to="/" className="text-amber-700 hover:underline text-sm">Volver al inicio</Link>
        </div>
      </div>
    );
  }

  const handleWhatsApp = () => {
    const msg = `Hola! Me interesa la ruta "${route.title}" (${route.duration}). ¿Podéis darme más información?`;
    window.open(waLink(msg), '_blank');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hola! Me interesa la ruta "${route.title}" (${route.duration}).%0A%0ANombre: ${formData.name}%0AEmail: ${formData.email}%0AViajeros: ${formData.travelers}%0A${formData.message ? `Mensaje: ${formData.message}` : ''}`;
    window.open(waLink(msg), '_blank');
    setFormStatus('sent');
  };

  return (
    <>
      <Helmet>
        <title>{route.title} · Tour privado · Viaja Mejor</title>
        <meta name="description" content={`${route.description} Desde ${route.price}/persona. Tour privado con guía en español.`} />
        <meta property="og:title" content={`${route.title} · Viaja Mejor`} />
        <meta property="og:image" content={route.heroImage || route.image} />
        <link rel="canonical" href={`https://viajamejor.net/marruecos/${route.slug}`} />
      </Helmet>

      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .route-fade { animation: fadeIn .8s ease-out .2s both; }
      `}</style>

      {/* HERO */}
      <section className="relative min-h-[85vh] flex items-end overflow-hidden">
        <img
          src={route.heroImage || route.image}
          alt={route.title}
          className="absolute inset-0 w-full h-full object-cover scale-105"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-gray-900/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/60 to-transparent" />

        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 pt-32">
          <Link to="/" className="route-fade inline-flex items-center gap-2 text-white/70 hover:text-amber-300 text-xs font-medium uppercase tracking-wider mb-8 transition-colors">
            <ArrowLeft size={14} /> Todas las rutas
          </Link>

          <div className="route-fade max-w-3xl">
            <div className="flex items-center gap-4 mb-5">
              <span className="text-4xl sm:text-5xl font-light text-amber-300/90 font-serif">{route.number}</span>
              <span className="w-10 h-px bg-amber-400/60" />
              <span className="text-[10px] uppercase tracking-[.25em] text-amber-200/80 font-medium">{route.duration} · Tour privado</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.05] tracking-tight mb-4">
              {route.title}
            </h1>
            <p className="text-xl sm:text-2xl text-amber-200/80 font-light italic">
              {route.subtitle}
            </p>
          </div>

          <div className="route-fade grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10 mt-12 pt-8 border-t border-white/15">
            <StatBlock icon={Calendar} label="Duración" value={route.duration} />
            <StatBlock icon={MapPin} label="Etapas" value={`${route.days?.length || 0} paradas`} />
            <StatBlock icon={Users} label="Tipo" value="Privado" />
            <StatBlock icon={Star} label="Desde" value={route.price || 'Consultar'} highlight />
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed font-light">
              {route.longDescription || route.description}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ITINERARIO */}
      {route.days && (
        <section id="itinerario" className="py-16 sm:py-24 bg-stone-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal>
              <div className="mb-12">
                <p className="text-[10px] uppercase tracking-[.25em] text-amber-700 font-semibold mb-3">Itinerario día a día</p>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
                  {route.days.length} días, {route.days.length} capítulos
                </h2>
              </div>
            </Reveal>

            <div className="space-y-3">
              {route.days.map((day, i) => {
                const open = openDay === i;
                return (
                  <Reveal key={i} delay={i * 60}>
                    <div className={`bg-white rounded-xl border transition-all duration-300 overflow-hidden ${open ? 'border-amber-200 shadow-lg shadow-amber-100/50' : 'border-gray-100 hover:border-gray-200'}`}>
                      <button
                        onClick={() => setOpenDay(open ? null : i)}
                        aria-expanded={open}
                        className="w-full flex items-center gap-4 p-5 sm:p-6 text-left"
                      >
                        <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex flex-col items-center justify-center transition-all ${open ? 'bg-amber-700 text-white shadow-md' : 'bg-stone-100 text-gray-700'}`}>
                          <span className="text-[8px] font-bold uppercase tracking-wide leading-none">{open ? '' : 'DÍA'}</span>
                          <span className="text-lg font-bold leading-none">{day.number}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className={`text-base sm:text-lg font-semibold leading-tight transition-colors ${open ? 'text-gray-900' : 'text-gray-700'}`}>
                            {day.title}
                          </h3>
                          <p className="text-xs text-gray-500 mt-1 flex items-center gap-1.5 truncate">
                            <MapPin size={10} /> {day.places}
                          </p>
                        </div>
                        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${open ? 'bg-amber-50' : ''}`}>
                          {open ? <ChevronUp size={16} className="text-amber-700" /> : <ChevronDown size={16} className="text-gray-400" />}
                        </div>
                      </button>

                      <div className={`transition-all duration-400 overflow-hidden ${open ? 'max-h-[1000px]' : 'max-h-0'}`}>
                        <div className="px-5 sm:px-6 pb-6">
                          {day.image && (
                            <div className="rounded-xl overflow-hidden mb-5 shadow-md">
                              <img src={day.image} alt={day.title} loading="lazy" className="w-full h-56 sm:h-72 object-cover" />
                            </div>
                          )}
                          <p className="text-[15px] text-gray-600 leading-relaxed mb-5">
                            {day.description}
                          </p>
                          {day.highlights && (
                            <div className="flex flex-wrap gap-2 mb-4">
                              {day.highlights.map(h => (
                                <span key={h} className="inline-flex items-center gap-1.5 text-xs text-gray-700 bg-amber-50 border border-amber-100 rounded-full px-3 py-1">
                                  <span className="w-1 h-1 rounded-full bg-amber-500" />
                                  {h}
                                </span>
                              ))}
                            </div>
                          )}
                          <div className="inline-flex items-center gap-2 text-xs text-gray-600 bg-stone-50 border border-stone-200 rounded-lg px-3 py-2">
                            <Moon size={12} className="text-amber-700" />
                            {day.lodging}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* GALLERY */}
      {route.gallery && (
        <section className="py-2 bg-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-1.5 px-1.5">
            {route.gallery.map((src, i) => (
              <div key={i} className="relative aspect-[4/5] overflow-hidden rounded-lg group">
                <img src={src} alt="" loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* INCLUYE / NO INCLUYE */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="grid md:grid-cols-2 gap-8 md:gap-14">
              {route.includes && (
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                      <Check size={14} className="text-green-700" strokeWidth={3} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Incluido</h3>
                  </div>
                  <ul className="space-y-3">
                    {route.includes.map(item => (
                      <li key={item} className="flex gap-3 text-[15px] text-gray-700">
                        <Check size={15} className="text-green-600 mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {route.excludes && (
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                      <X size={14} className="text-gray-500" strokeWidth={3} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">No incluido</h3>
                  </div>
                  <ul className="space-y-3">
                    {route.excludes.map(item => (
                      <li key={item} className="flex gap-3 text-[15px] text-gray-500">
                        <X size={15} className="text-gray-400 mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-24 bg-stone-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-10 text-center">
              Preguntas frecuentes
            </h2>
          </Reveal>
          <div className="space-y-3">
            {faqs.map((f, i) => {
              const open = openFaq === i;
              return (
                <Reveal key={i} delay={i * 50}>
                  <div className={`bg-white rounded-xl border transition-all ${open ? 'border-amber-200' : 'border-gray-100'}`}>
                    <button
                      onClick={() => setOpenFaq(open ? null : i)}
                      className="w-full flex items-center justify-between gap-4 p-5 text-left"
                    >
                      <span className="text-[15px] font-medium text-gray-900">{f.q}</span>
                      {open ? <ChevronUp size={16} className="text-amber-700 flex-shrink-0" /> : <ChevronDown size={16} className="text-gray-400 flex-shrink-0" />}
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-[200px]' : 'max-h-0'}`}>
                      <p className="px-5 pb-5 text-sm text-gray-600 leading-relaxed">{f.a}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="py-16 sm:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="grid md:grid-cols-[1fr,1.1fr] gap-10 md:gap-16 items-start">
              {/* Info */}
              <div>
                <p className="text-[10px] uppercase tracking-[.25em] text-amber-700 font-semibold mb-3">Reservar</p>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-5">
                  ¿Te interesa esta ruta?
                </h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Escríbeme por WhatsApp o rellena el formulario y te respondo en menos de 24h con propuesta detallada y disponibilidad. Sin compromiso.
                </p>

                <button
                  onClick={handleWhatsApp}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white font-semibold text-sm rounded-full px-8 py-4 transition-all shadow-lg shadow-green-600/20 hover:shadow-green-600/30 mb-6"
                >
                  <MessageCircle size={16} /> WhatsApp directo
                </button>

                <div className="flex flex-col gap-3 text-sm text-gray-500">
                  <div className="flex items-center gap-2"><Shield size={13} className="text-amber-700" /> Respuesta en menos de 24h</div>
                  <div className="flex items-center gap-2"><Clock size={13} className="text-amber-700" /> Cancelación gratuita hasta 30 días antes</div>
                  <div className="flex items-center gap-2"><Users size={13} className="text-amber-700" /> 100% privado, solo vuestro grupo</div>
                </div>
              </div>

              {/* Form */}
              <div className="bg-stone-50 rounded-2xl border border-gray-100 p-6 sm:p-8">
                {formStatus === 'sent' ? (
                  <div className="text-center py-8">
                    <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                      <Check size={24} className="text-green-700" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Mensaje enviado</h3>
                    <p className="text-sm text-gray-600">Te hemos abierto WhatsApp para que puedas continuar la conversación directamente.</p>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div className="flex items-baseline justify-between gap-2 pb-4 border-b border-gray-200">
                      <div>
                        <p className="text-xs uppercase tracking-wider text-amber-700 font-semibold">Sin compromiso</p>
                        <p className="text-lg font-bold text-gray-900 mt-1">Desde <span className="text-amber-700">{route.price}</span> <span className="text-sm font-normal text-gray-500">/ persona</span></p>
                      </div>
                      <span className="text-xs text-gray-500">{route.duration}</span>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <input required value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} placeholder="Nombre" className="w-full bg-white border border-gray-200 rounded-lg px-3.5 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-amber-400 transition-colors" />
                      <input required type="email" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} placeholder="Email" className="w-full bg-white border border-gray-200 rounded-lg px-3.5 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-amber-400 transition-colors" />
                    </div>
                    <input type="tel" value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} placeholder="WhatsApp (opcional)" className="w-full bg-white border border-gray-200 rounded-lg px-3.5 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-amber-400 transition-colors" />
                    <div className="grid grid-cols-2 gap-3">
                      <label className="block">
                        <span className="text-[10px] uppercase tracking-wider text-gray-500 font-medium">Viajeros</span>
                        <input type="number" min={1} value={formData.travelers} onChange={e => setFormData({ ...formData, travelers: e.target.value })} className="mt-1 w-full bg-white border border-gray-200 rounded-lg px-3.5 py-3 text-sm text-gray-900 focus:outline-none focus:border-amber-400 transition-colors" />
                      </label>
                      <label className="block">
                        <span className="text-[10px] uppercase tracking-wider text-gray-500 font-medium">Fechas aprox.</span>
                        <input placeholder="Octubre 2026" className="mt-1 w-full bg-white border border-gray-200 rounded-lg px-3.5 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-amber-400 transition-colors" />
                      </label>
                    </div>
                    <textarea rows={3} value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })} placeholder="¿Algo que quieras contarnos?" className="w-full bg-white border border-gray-200 rounded-lg px-3.5 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-amber-400 transition-colors resize-none" />
                    <button type="submit" className="w-full py-3.5 bg-amber-700 hover:bg-amber-800 text-white text-sm font-semibold uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-2 shadow-md">
                      <Send size={14} /> Solicitar propuesta
                    </button>
                  </form>
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative py-20 sm:py-28 bg-gray-900 text-white overflow-hidden">
        <img src={route.image} alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gray-900/70" />
        <div className="relative max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight">
            Desde <span className="text-amber-300">{route.price}</span> por persona
          </h2>
          <p className="text-gray-300 mb-8 text-sm leading-relaxed">
            Precio orientativo en habitación doble. Lo ajustamos a vuestras fechas, viajeros y categoría de alojamiento.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={handleWhatsApp}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold rounded-full transition-colors shadow-lg"
            >
              <MessageCircle size={15} /> Consultar por WhatsApp
            </button>
            <a
              href="#contacto"
              className="inline-flex items-center justify-center px-8 py-4 border border-white/30 hover:bg-white/10 text-white text-sm font-medium rounded-full transition-colors"
            >
              Rellenar formulario
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function StatBlock({ icon: Icon, label, value, highlight }: { icon: typeof Calendar; label: string; value: string; highlight?: boolean }) {
  return (
    <div>
      <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-white/60 mb-1.5">
        <Icon size={11} /> {label}
      </div>
      <div className={`text-xl sm:text-2xl font-bold ${highlight ? 'text-amber-300' : 'text-white'}`}>
        {value}
      </div>
    </div>
  );
}
