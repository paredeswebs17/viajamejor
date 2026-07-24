import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  ArrowRight, ArrowLeft, Clock, ChevronLeft, ChevronRight, Send, MapPin,
} from 'lucide-react';
import { routes, Route } from '../data/moroccoRoutes';
import MoroccoContactForm from '../components/MoroccoContactForm';


type City = 'all' | 'marrakech' | 'fez' | 'tanger' | 'casablanca';

const FILTERS: { id: City; label: string; count?: number }[] = [
  { id: 'all', label: 'Todas' },
  { id: 'marrakech', label: 'Marrakech' },
  { id: 'fez', label: 'Fez' },
  { id: 'tanger', label: 'Tánger' },
  { id: 'casablanca', label: 'Casablanca' },
];

const PREFERRED_IMAGE_INDEX: Record<string, number> = {
  'marrakech-sahara': 2,
  'marrakech-sahara-5d': 3,
  'marrakech-sahara-3d': 0,
  'marrakech-desierto-10d': 5,
  'marrakech-fez-8d': 4,
  'fez-fez-5d': 0,
  'fez-marrakech-3d': 0,
  'fez-marrakech-4d': 0,
  'fez-marrakech-5d': 1,
  'fez-marrakech-8d': 0,
  'fez-marrakech-7d': 3,
  'tanger-marrakech-7d': 5,
  'tanger-marrakech-8d': 1,
  'tanger-marrakech-9d': 3,
  'tanger-marrakech-10d': 0,
  'tanger-marrakech-12d': 0,
  'casablanca-marrakech-8d': 1,
  'casablanca-casablanca-9d': 5,
  'casablanca-casablanca-15d': 0,
};

const BADGES: Record<string, string> = {
  'marrakech-sahara': 'Más reservado',
  'tanger-marrakech-12d': 'Tour completo',
  'casablanca-casablanca-9d': 'Gran tour',
  'casablanca-casablanca-15d': 'Viaje completo',
};

function getCity(route: Route): City {
  const s = route.slug;
  if (s.startsWith('marrakech')) return 'marrakech';
  if (s.startsWith('fez')) return 'fez';
  if (s.startsWith('tanger')) return 'tanger';
  if (s.startsWith('casablanca')) return 'casablanca';
  return 'marrakech';
}

function getRouteImages(route: Route): string[] {
  if (!route.days) return [route.image];
  const imgs = route.days.filter((d) => d.image).map((d) => d.image!.replace(/w=\d+/, 'w=900'));
  const unique = [...new Set(imgs)];
  const idx = PREFERRED_IMAGE_INDEX[route.slug];
  if (idx != null && idx > 0 && idx < unique.length) {
    const [preferred] = unique.splice(idx, 1);
    unique.unshift(preferred);
  }
  return unique.slice(0, 4);
}

function getDaysNum(route: Route): number {
  const m = route.duration.match(/\d+/);
  return m ? parseInt(m[0], 10) : 0;
}

function getCityCount(city: City): number {
  if (city === 'all') return routes.length;
  return routes.filter((r) => getCity(r) === city).length;
}

export default function ViajesMarruecosPage() {
  const [cityFilter, setCityFilter] = useState<City>('all');
  const scrollerRef = useRef<HTMLDivElement>(null);

  const filtered = (cityFilter === 'all' ? routes : routes.filter((r) => getCity(r) === cityFilter))
    .slice()
    .sort((a, b) => getDaysNum(b) - getDaysNum(a));

  const scroll = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.75, behavior: 'smooth' });
  };

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    el.style.scrollSnapType = 'none';
    el.scrollLeft = 0;
    requestAnimationFrame(() => { el.style.scrollSnapType = ''; });
  }, [cityFilter]);

  return (
    <>
      <Helmet>
        <title>Viajes Organizados a Marruecos - Rutas Privadas con Guía en Español</title>
        <meta name="description" content="Rutas privadas organizadas por Marruecos con guía local en español. Desierto del Sahara, ciudades imperiales, Atlas y costa atlántica. Desde 420€ por persona." />
        <link rel="canonical" href="https://viajamejor.net/viajes-organizados/marruecos" />
      </Helmet>

      {/* HERO */}
      <section className="relative min-h-[80vh] flex items-end overflow-hidden">
        <img
          src="https://images.pexels.com/photos/3889843/pexels-photo-3889843.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Marruecos - desierto del Sahara"
          className="absolute inset-0 w-full h-full object-cover duotone anim-slow-pan"
          fetchPriority="high"
        />
        {/* Triple-layer overlay for guaranteed legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-900/70 to-ink-900/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950/80 via-ink-900/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-[45%] bg-gradient-to-t from-ink-950 to-transparent" />

        <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-10 pb-16 md:pb-24 pt-40">
          <div className="max-w-3xl anim-fade-up">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-terra-400" />
              <span className="text-[11px] font-medium uppercase tracking-wider3 text-terra-300">
                Viajes organizados
              </span>
            </div>
            <h1 className="font-serif text-white text-[clamp(3rem,8vw,5.5rem)] font-medium leading-[0.95]" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.9), 0 8px 30px rgba(0,0,0,0.5)' }}>
              Marruecos,{' '}
              <span className="italic text-terra-300">a tu medida</span>
            </h1>
            <p className="mt-7 text-white/90 font-light text-lg md:text-xl max-w-xl leading-relaxed" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.8)' }}>
              Rutas privadas con guía local en español. Sin intermediarios, sin turismo de catálogo. El Marruecos de verdad.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8 md:gap-12 pt-8 border-t border-white/15">
            <StatItem label="Rutas" value={`${routes.length}`} />
            <StatItem label="Tipo" value="Privado" />
            <StatItem label="Idioma" value="Español" />
          </div>
        </div>
      </section>

      {/* ROUTES CAROUSEL SECTION */}
      <section className="py-20 md:py-32 bg-cream-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          {/* Section header */}
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-block text-[11px] font-medium uppercase tracking-wider3 text-terra-600 mb-4">
              Nuestras rutas
            </span>
            <h2 className="font-serif text-4xl md:text-[3.5rem] text-ink-900 leading-[1.05] text-balance max-w-2xl mx-auto">
              Elige tu <span className="italic text-terra-600">experiencia</span>
            </h2>
            <p className="mt-5 text-ink-500 font-light text-base md:text-lg max-w-xl mx-auto leading-relaxed">
              Viajes privados con todo incluido salvo vuelos. Cada itinerario se adapta a tu ritmo y preferencias.
            </p>
          </div>

          {/* Filters + navigation arrows */}
          <div className="flex items-center justify-between gap-4 mb-8 md:mb-10">
            <div className="flex flex-wrap gap-2.5">
              {FILTERS.map((f) => {
                const count = getCityCount(f.id);
                const isActive = cityFilter === f.id;
                return (
                  <button
                    key={f.id}
                    onClick={() => setCityFilter(f.id)}
                    className={`flex-shrink-0 px-5 py-2.5 text-[11px] uppercase tracking-wider2 rounded-full border-2 transition-all duration-300 ${
                      isActive
                        ? 'bg-terra-600 text-white border-terra-600 font-semibold shadow-lg shadow-terra-600/25'
                        : 'bg-white border-ink-200 text-ink-600 hover:border-terra-400 hover:text-terra-600 hover:bg-terra-600/5 font-medium'
                    }`}
                  >
                    {f.label}
                    <span className={`ml-1.5 ${isActive ? 'text-white/70' : 'text-ink-400'}`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
            <div className="hidden md:flex items-center gap-2 flex-shrink-0">
              <button
                onClick={() => scroll(-1)}
                className="w-11 h-11 border-2 border-ink-200 flex items-center justify-center hover:bg-ink-900 hover:text-white hover:border-ink-900 transition-all duration-300 rounded-full"
                aria-label="Anterior"
              >
                <ArrowLeft size={15} />
              </button>
              <button
                onClick={() => scroll(1)}
                className="w-11 h-11 border-2 border-ink-200 flex items-center justify-center hover:bg-ink-900 hover:text-white hover:border-ink-900 transition-all duration-300 rounded-full"
                aria-label="Siguiente"
              >
                <ArrowRight size={15} />
              </button>
            </div>
          </div>

          {/* Scrollable cards */}
          <div className="relative">
            <div className="hidden lg:block pointer-events-none absolute right-0 top-0 bottom-4 w-28 z-10 bg-gradient-to-l from-cream-100 to-transparent" />
            <div
              ref={scrollerRef}
              className="overflow-x-auto flex gap-6 snap-x snap-mandatory scrollbar-hide pb-4 mobile-overflow-right"
            >
              {filtered.map((route) => (
                <RouteCard key={route.slug} route={route} />
              ))}
              <div className="flex-shrink-0 w-4 lg:w-28" aria-hidden="true" />
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <p className="text-ink-500 font-light mb-5 text-lg">
              ¿No encuentras lo que buscas? Diseñamos rutas a medida.
            </p>
            <a
              href="#contacto"
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-ink-900 text-white text-xs font-medium uppercase tracking-wider2 rounded-full hover:bg-terra-600 transition-all duration-300 hover:shadow-lg hover:shadow-terra-600/25"
            >
              <Send size={15} /> Pedir presupuesto
            </a>
          </div>
        </div>
      </section>

      <MoroccoContactForm />
    </>
  );
}

function RouteCard({ route }: { route: Route }) {
  const badge = BADGES[route.slug];
  const cityLabel = getCity(route);
  const cityName = cityLabel.charAt(0).toUpperCase() + cityLabel.slice(1);

  return (
    <article className="group flex-shrink-0 w-[78vw] sm:w-[48vw] lg:w-[31%] snap-start bg-white overflow-hidden flex flex-col rounded-xl border border-ink-200 shadow-md hover:shadow-luxe-lg hover:-translate-y-2 hover:border-terra-400/60 transition-all duration-500 ease-out">
      {/* Image carousel */}
      <div className="relative overflow-hidden rounded-t-xl">
        <div className="transition-transform duration-700 ease-out group-hover:scale-[1.03]">
          <TourCarousel images={getRouteImages(route)} title={route.title} />
        </div>
        {badge && (
          <span className="absolute top-3.5 left-3.5 bg-terra-600 text-white text-[10px] font-semibold uppercase tracking-wider2 px-3 py-1.5 rounded-full z-10 shadow-lg">
            {badge}
          </span>
        )}
        <div className="absolute top-3.5 right-3.5 z-10 bg-white/95 backdrop-blur-sm text-ink-800 px-3 py-1.5 flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider2 rounded-full shadow-sm">
          <Clock size={11} />
          {route.duration}
        </div>

      </div>

      {/* Card body */}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-1.5 text-ink-400 mb-3">
          <MapPin size={12} />
          <span className="text-[11px] uppercase tracking-wider2 font-medium">{cityName}</span>
        </div>

        <h3 className="font-serif text-xl md:text-[1.4rem] text-ink-900 leading-snug font-medium">
          {route.title}
        </h3>
        <p className="text-sm text-ink-500 mt-2.5 leading-relaxed line-clamp-2">
          {route.description}
        </p>

        {/* Separator + CTA */}
        <div className="mt-auto pt-5 border-t border-ink-100 mt-5">
          <Link
            to={`/viajes-organizados/marruecos/${route.slug}`}
            className="group/cta inline-flex items-center gap-2 w-full justify-center px-4 h-12 border-2 border-terra-600 text-terra-600 text-xs font-semibold uppercase tracking-wider2 rounded-lg hover:bg-terra-600 hover:text-white transition-all duration-300"
          >
            Ver itinerario
            <ArrowRight size={14} className="transition-transform duration-300 group-hover/cta:translate-x-1" />
          </Link>
        </div>
      </div>
    </article>
  );
}

function TourCarousel({ images, title }: { images: string[]; title: string }) {
  const [index, setIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const deltaX = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const goTo = (next: number) => setIndex((next + images.length) % images.length);

  const onPointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    startX.current = e.clientX;
    deltaX.current = 0;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    deltaX.current = e.clientX - startX.current;
    if (containerRef.current) {
      containerRef.current.style.setProperty('--drag', `${deltaX.current}px`);
    }
  };

  const onPointerUp = (e: React.PointerEvent) => {
    if (!isDragging) return;
    setIsDragging(false);
    const width = containerRef.current?.clientWidth ?? 1;
    const threshold = Math.min(80, width * 0.18);
    if (deltaX.current > threshold) goTo(index - 1);
    else if (deltaX.current < -threshold) goTo(index + 1);
    deltaX.current = 0;
    if (containerRef.current) containerRef.current.style.setProperty('--drag', '0px');
    (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
  };

  useEffect(() => {
    if (containerRef.current) containerRef.current.style.setProperty('--drag', '0px');
  }, [index]);

  return (
    <div
      ref={containerRef}
      role="region"
      aria-label={`Galería: ${title}`}
      aria-roledescription="carousel"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'ArrowLeft') goTo(index - 1); else if (e.key === 'ArrowRight') goTo(index + 1); }}
      className="relative aspect-[4/3] overflow-hidden bg-ink-100 select-none touch-pan-y focus:outline-none focus-visible:ring-2 focus-visible:ring-terra-500"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
    >
      <div
        className={`absolute inset-0 flex h-full ${isDragging ? '' : 'transition-transform duration-500 ease-out'}`}
        style={{
          width: `${images.length * 100}%`,
          transform: `translate3d(calc(${-index * (100 / images.length)}% + var(--drag, 0px)), 0, 0)`,
        }}
      >
        {images.map((src, i) => (
          <div key={i} className="h-full shrink-0" style={{ width: `${100 / images.length}%` }}>
            <img
              src={src}
              alt={`${title} - imagen ${i + 1}`}
              draggable={false}
              loading="lazy"
              onError={(e) => { (e.currentTarget as HTMLImageElement).style.opacity = '0'; }}
              className="w-full h-full object-cover pointer-events-none"
            />
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={(e) => { e.preventDefault(); e.stopPropagation(); goTo(index - 1); }}
        aria-label="Imagen anterior"
        className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center bg-white/90 hover:bg-white text-ink-800 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-full shadow-md"
      >
        <ChevronLeft size={16} />
      </button>
      <button
        type="button"
        onClick={(e) => { e.preventDefault(); e.stopPropagation(); goTo(index + 1); }}
        aria-label="Imagen siguiente"
        className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center bg-white/90 hover:bg-white text-ink-800 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-full shadow-md"
      >
        <ChevronRight size={16} />
      </button>

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-ink-900/40 backdrop-blur-sm px-2.5 py-1.5 rounded-full">
        {images.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Ir a imagen ${i + 1}`}
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); goTo(i); }}
            className={`rounded-full transition-all duration-400 ${i === index ? 'w-6 h-1.5 bg-white' : 'w-2 h-1.5 bg-white/50 hover:bg-white/80'}`}
          />
        ))}
      </div>
    </div>
  );
}

function StatItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-[11px] uppercase tracking-wider2 text-white/50 font-medium mb-1.5">{label}</div>
      <div className="font-serif text-2xl md:text-3xl text-white font-medium">{value}</div>
    </div>
  );
}
