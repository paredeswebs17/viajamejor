import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  ArrowLeft, Check, X, MapPin, Calendar, Users, MessageCircle, Send,
  Moon, Compass,
} from 'lucide-react';
import { routes, Route } from '../data/moroccoRoutes';
import RouteInquiryWidget from '../components/RouteInquiryWidget';


const RESERVATION_FAQ = [
  { q: '¿Hay que pagar señal para reservar?', a: 'Sí. Bloqueamos plaza con tu solicitud y solo pedimos un 25% una vez confirmamos la propuesta y las fechas.' },
  { q: '¿Puedo cambiar las fechas o cancelar?', a: 'Sí. Hasta 7 días antes la cancelación es gratuita. Cambiamos fechas siempre que haya disponibilidad.' },
  { q: '¿Los vuelos están incluidos?', a: 'No. Te recomendamos los aeropuertos más eficientes según tu ciudad y, si quieres, te ayudamos a buscar la mejor combinación.' },
  { q: '¿Y si viajamos con niños?', a: 'Encantados. Adaptamos jornadas, alojamientos y actividades a peques desde 0 años. Niños hasta 5 años gratis, de 5 a 9 años pagan la mitad y a partir de 9 años como un adulto.' },
  { q: '¿Es una ruta privada o en grupo?', a: 'Por defecto, todas nuestras rutas son privadas: vehículo, guía y alojamientos solo para vosotros.' },
  { q: '¿Quién nos guía sobre el terreno?', a: 'Nuestro equipo de guías locales que hablan español, viven en Marruecos y conocen cada parada como su casa.' },
];

export default function ViajesMarruecosDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const route = routes.find((r) => r.slug === slug);

  if (!route) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream-100 px-6 text-center">
        <div>
          <h1 className="font-serif text-4xl text-ink-900 mb-4">Ruta no encontrada</h1>
          <Link
            to="/viajes-organizados/marruecos"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-wider2 text-terra-600 hover:text-terra-500"
          >
            <ArrowLeft size={14} /> Volver a rutas
          </Link>
        </div>
      </div>
    );
  }

  if (!route.days) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream-100 px-6 text-center">
        <div>
          <h1 className="font-serif text-4xl text-ink-900 mb-4">{route.title}</h1>
          <p className="text-ink-600 mb-8 max-w-md">
            Estamos preparando el detalle de esta ruta. Mientras tanto, solicita tu propuesta personalizada y
            te enviamos el itinerario completo.
          </p>
          <Link
            to="/viajes-organizados/marruecos"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-wider2 text-terra-600 hover:text-terra-500"
          >
            <ArrowLeft size={14} /> Volver
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{route.title} - Tour Privado por Marruecos</title>
        <meta name="description" content={`${route.description} Tour privado con guia en espanol.`} />
        <meta property="og:title" content={`${route.title} - Viaja Mejor`} />
        <meta property="og:image" content={route.heroImage || route.image} />
        <link rel="canonical" href={`https://viajamejor.net/viajes-organizados/marruecos/${route.slug}`} />
      </Helmet>

      <article className="bg-cream-100 page-enter">
        {/* HERO */}
        <section className="relative min-h-[85vh] bg-ink-900 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={route.heroImage || route.image}
              alt={route.title}
              className="w-full h-full object-cover anim-slow-pan"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-ink-900/70 via-ink-900/40 to-ink-900/90" />
          </div>

          <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-20 md:pt-44 md:pb-28 min-h-[85vh] flex flex-col justify-between">
            <Link
              to="/viajes-organizados/marruecos"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-wider2 text-cream-100 hover:text-gold-300 transition w-fit"
            >
              <ArrowLeft size={14} /> Todas las rutas
            </Link>

            <div className="max-w-4xl anim-fade-up mt-16">
              <div className="mb-6">
                <span className="text-[10px] uppercase tracking-wider3 text-gold-300">
                  Ruta privada &middot; {route.duration}
                </span>
              </div>
              <h1 className="font-serif text-cream-50 text-balance text-[clamp(2.5rem,7vw,5.5rem)] font-light leading-[0.98]">
                {route.title}
              </h1>
              <p className="mt-6 font-serif italic text-2xl md:text-3xl text-gold-300">
                {route.subtitle}
              </p>
            </div>

            <div className="mt-14 grid grid-cols-3 gap-6 md:gap-10 text-cream-100 border-t border-cream-100/20 pt-8">
              <Stat icon={Calendar} label="Duración" value={route.duration} />
              <Stat icon={Users} label="Grupo" value="Privado" />
              <Stat icon={MessageCircle} label="Idioma" value="Español" />
            </div>
          </div>
        </section>

        {/* LONG DESCRIPTION */}
        <section className="py-24 md:py-32">
          <div className="max-w-4xl mx-auto px-6 lg:px-10">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-terra-500" />
              <span className="text-[10px] uppercase tracking-wider3 text-terra-600">
                El viaje en una pagina
              </span>
            </div>
            <p className="font-serif text-3xl md:text-4xl text-ink-900 leading-[1.3] text-balance">
              {route.longDescription || route.description}
            </p>
          </div>
        </section>

        {/* ITINERARY */}
        <section id="itinerario" className="relative py-24 md:py-36 bg-cream-50 overflow-hidden">
          <div className="absolute top-0 right-0 w-[40rem] h-[40rem] rounded-full bg-terra-500/[0.04] blur-3xl pointer-events-none" />

          <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
            <div className="mb-12 md:mb-16">
              <div className="flex items-center gap-3 mb-5">
                <Compass size={14} className="text-terra-500" strokeWidth={1.5} />
                <span className="text-[10px] uppercase tracking-wider3 text-terra-600">
                  Itinerario dia a dia
                </span>
              </div>
              <h2 className="font-serif text-5xl md:text-7xl text-ink-900 text-balance leading-[0.95]">
                {route.days.length} dias,
                <br />
                <span className="italic text-terra-500">{route.days.length} historias por vivir.</span>
              </h2>
            </div>


            <ol className="relative mt-20 md:mt-28 space-y-24 md:space-y-36">
              {route.days.map((day, i) => (
                <DayCard key={day.number} day={day} index={i} />
              ))}
            </ol>

            {/* INCLUDES / EXCLUDES */}
            {(route.includes?.length || route.excludes?.length) && (
              <div id="incluido" className="mt-20 md:mt-28 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
                {route.includes && (
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <Check size={12} className="text-terra-500" />
                      <span className="text-[10px] uppercase tracking-wider3 text-terra-600 font-medium">Incluido</span>
                    </div>
                    <ul className="space-y-2.5">
                      {route.includes.map((item) => (
                        <li key={item} className="flex gap-2.5 text-ink-700 text-xs leading-relaxed">
                          <Check size={13} className="text-terra-500 mt-0.5 flex-shrink-0" strokeWidth={2} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {route.excludes && (
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <X size={12} className="text-ink-500" />
                      <span className="text-[10px] uppercase tracking-wider3 text-ink-500 font-medium">No incluido</span>
                    </div>
                    <ul className="space-y-2.5">
                      {route.excludes.map((item) => (
                        <li key={item} className="flex gap-2.5 text-ink-500 text-xs leading-relaxed">
                          <X size={13} className="text-ink-400 mt-0.5 flex-shrink-0" strokeWidth={2} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
        </section>

        {/* GALLERY */}
        {route.gallery && (
          <section className="py-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
              {route.gallery.map((src, i) => (
                <div key={i} className="relative aspect-[4/5] overflow-hidden group">
                  <img
                    src={src}
                    alt={`${route.title} - imagen ${i + 1}`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* FAQ */}
        <section className="py-20 md:py-28 bg-cream-50">
          <div className="max-w-5xl mx-auto px-6 lg:px-10">
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-8 bg-terra-500" />
              <span className="text-[10px] uppercase tracking-wider3 text-terra-600">Antes de reservar</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-ink-900 leading-[1.05] text-balance max-w-2xl">
              Lo que viajeros como tú nos preguntan
            </h2>
            <dl className="mt-12 grid md:grid-cols-2 gap-x-12 gap-y-8">
              {RESERVATION_FAQ.map((f) => (
                <div key={f.q} className="border-t border-ink-800/15 pt-5">
                  <dt className="font-serif text-lg text-ink-900">{f.q}</dt>
                  <dd className="mt-2 text-sm text-ink-600 leading-relaxed font-light">{f.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* INQUIRY FORM */}
        <section id="formulario" className="relative py-24 md:py-32 bg-cream-50">
          <div className="max-w-4xl mx-auto px-6 lg:px-10">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="h-px w-8 bg-terra-500" />
              <span className="text-[10px] uppercase tracking-[.2em] text-terra-600 font-medium">Reserva con nosotros</span>
              <span className="h-px w-8 bg-terra-500" />
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-ink-900 text-center leading-[1.1] mb-4">
              Tu viaje <span className="italic text-terra-600">empieza aquí</span>
            </h2>
            <p className="text-center max-w-xl mx-auto text-ink-500 font-light text-lg mb-10">
              Te preparamos una propuesta personalizada según fechas, número
              de viajeros y tipo de alojamiento. Sin compromiso.
            </p>
            <div className="max-w-lg mx-auto">
              <RouteInquiryWidget route={route} />
            </div>
          </div>
        </section>
      </article>

      {/* FLOATING CTA */}
      <FloatingCTA />
    </>
  );
}

function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 inset-x-0 z-30 transition-all duration-500 ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
      }`}
    >
      <div className="mx-4 mb-4 flex gap-3 justify-center">
        <a
          href="#formulario"
          className="flex-1 max-w-md flex items-center justify-center gap-2.5 py-3.5 rounded-full bg-terra-500 text-white shadow-lg ring-1 ring-white/20 hover:bg-terra-600 active:scale-[0.97] transition-all duration-200"
        >
          <Send size={16} />
          <span className="text-sm font-medium tracking-wide">Solicitar propuesta</span>
        </a>
      </div>
    </div>
  );
}

function DayCard({ day, index }: { day: NonNullable<Route['days']>[number]; index: number }) {
  const ref = useRef<HTMLLIElement>(null);
  const [visible, setVisible] = useState(false);
  const isReverse = index % 2 === 1;

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.2 }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  return (
    <li
      ref={ref}
      id={`dia-${day.number}`}
      className={`relative grid md:grid-cols-12 gap-6 md:gap-10 items-center transition-all duration-1000 scroll-mt-28 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      <div className={`md:col-span-7 relative group ${isReverse ? 'md:order-2 md:col-start-6' : ''}`}>
        <div className="relative aspect-[4/3] md:aspect-[16/11] overflow-hidden bg-ink-900">
          {day.image && (
            <img
              src={day.image}
              alt={day.title}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-tr from-ink-900/40 via-ink-900/0 to-ink-900/0" />
          <div className="absolute bottom-4 left-4 right-4 flex items-end text-cream-50">
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-wider2 bg-ink-900/55 backdrop-blur-sm px-3 py-1.5">
              <MapPin size={11} strokeWidth={1.5} />
              {day.places}
            </div>
          </div>
        </div>
      </div>

      <div className={`md:col-span-5 md:px-2 ${isReverse ? 'md:order-1 md:col-start-1' : ''}`}>
        <div className="flex items-center gap-3 mb-4">
          <span className="text-[10px] uppercase tracking-wider3 text-terra-600">Dia {day.number}</span>
          <span className="h-px flex-1 bg-ink-800/15" />
        </div>
        <h3 className="font-serif text-3xl md:text-[2.6rem] text-ink-900 leading-[1.05] text-balance">
          {day.title}
        </h3>
        <p className="mt-5 text-ink-600 font-light leading-relaxed">{day.description}</p>

        {day.highlights && (
          <ul className="mt-6 space-y-2">
            {day.highlights.map((h) => (
              <li key={h} className="flex items-start gap-3 text-sm text-ink-800">
                <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-terra-500 shrink-0" />
                {h}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-7 inline-flex items-center gap-3 border border-ink-800/15 bg-cream-100/60 px-4 py-2.5 text-xs text-ink-800">
          <Moon size={13} className="text-terra-500" strokeWidth={1.5} />
          <span className="font-light">{day.lodging}</span>
        </div>
      </div>
    </li>
  );
}

function Stat({ icon: Icon, label, value }: { icon: typeof Calendar; label: string; value: string }) {
  return (
    <div>
      <div className="flex items-center gap-2 text-[10px] uppercase tracking-wider2 text-cream-100/70 mb-2">
        <Icon size={12} />
        {label}
      </div>
      <div className="font-serif text-2xl md:text-3xl text-cream-50">{value}</div>
    </div>
  );
}
