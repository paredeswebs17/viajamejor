import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  ArrowRight, ArrowLeft, Clock, ChevronLeft, ChevronRight, MessageCircle,
} from 'lucide-react';
import { routes, Route } from '../data/moroccoRoutes';

const WA_NUMBER = '34660611668';
const waGeneric = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('Hola! He visto vuestras rutas por Marruecos y me gustaría más información.')}`;

type City = 'all' | 'marrakech' | 'fez' | 'tanger' | 'casablanca';

const FILTERS: { id: City; label: string }[] = [
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
      <section className="relative min-h-[75vh] flex items-end overflow-hidden">
        <img
          src="https://images.pexels.com/photos/3889843/pexels-photo-3889843.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Marruecos - desierto del Sahara"
          className="absolute inset-0 w-full h-full object-cover duotone anim-slow-pan"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900/90 via-ink-900/40 to-ink-900/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-900/60 to-transparent" />

        <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-10 pb-16 md:pb-24 pt-36">
          <div className="max-w-3xl anim-fade-up">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-gold-300" />
              <span className="text-[10px] uppercase tracking-wider3 text-gold-300">
                Viajes organizados
              </span>
            </div>
            <h1 className="font-serif text-cream-50 text-[clamp(2.8rem,7vw,5.5rem)] font-light leading-[0.98] drop-shadow-[0_2px_20px_rgba(0,0,0,0.4)]">
              Marruecos,{' '}
              <span className="italic text-gold-300">a tu medida</span>
            </h1>
            <p className="mt-6 text-cream-100/90 font-light text-lg md:text-xl max-w-xl leading-relaxed drop-shadow-[0_1px_8px_rgba(0,0,0,0.5)]">
              Rutas privadas con guía local en español. Sin intermediarios, sin turismo de catálogo. El Marruecos de verdad.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-10 pt-8 border-t border-cream-100/20">
            <StatItem label="Rutas" value={`${routes.length}`} />
            <StatItem label="Tipo" value="Privado" />
            <StatItem label="Idioma" value="Español" />
            <StatItem label="Desde" value="420€" />
          </div>
        </div>
      </section>

      {/* ROUTES CAROUSEL */}
      <section className="py-20 md:py-36 bg-cream-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-12 md:mb-16">
            <div className="text-[10px] uppercase tracking-wider3 text-terra-600 mb-4">
              Nuestras rutas
            </div>
            <h2 className="font-serif text-4xl md:text-6xl text-ink-900 leading-[1.02] text-balance max-w-3xl mx-auto">
              Elige tu <span className="italic">experiencia</span>
            </h2>
            <p className="mt-5 text-ink-600 font-light text-base md:text-lg max-w-xl mx-auto">
              Viajes privados con todo incluido salvo vuelos. Cada itinerario se adapta a tu ritmo y preferencias.
            </p>
          </div>

          {/* Filters + Arrows */}
          <div className="flex items-center justify-between gap-4 mb-8 md:mb-10 border-b border-ink-800/10 pb-5">
            <div className="flex flex-wrap gap-2">
              {FILTERS.map((f) => (
                <button
                  key={f.id}
                  onClick={() => setCityFilter(f.id)}
                  className={`flex-shrink-0 px-4 py-2 text-[11px] uppercase tracking-wider2 rounded-full border transition-all duration-300 ${
                    cityFilter === f.id
                      ? 'bg-ink-900 text-cream-50 border-ink-900 shadow-luxe'
                      : 'border-ink-800/20 text-ink-700 hover:border-terra-500 hover:text-terra-600'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
            <div className="hidden md:flex items-center gap-2 flex-shrink-0">
              <button
                onClick={() => scroll(-1)}
                className="w-10 h-10 border border-ink-800/20 flex items-center justify-center hover:bg-ink-900 hover:text-cream-50 hover:border-ink-900 transition-colors rounded-full"
                aria-label="Anterior"
              >
                <ArrowLeft size={14} />
              </button>
              <button
                onClick={() => scroll(1)}
                className="w-10 h-10 border border-ink-800/20 flex items-center justify-center hover:bg-ink-900 hover:text-cream-50 hover:border-ink-900 transition-colors rounded-full"
                aria-label="Siguiente"
              >
                <ArrowRight size={14} />
              </button>
            </div>
          </div>

          {/* Scrollable cards */}
          <div className="relative">
            <div className="hidden lg:block pointer-events-none absolute right-0 top-0 bottom-4 w-24 z-10 bg-gradient-to-l from-cream-100 to-transparent" />
            <div
              ref={scrollerRef}
              className="overflow-x-auto flex gap-5 snap-x snap-mandatory scrollbar-hide pb-4 mobile-overflow-right"
            >
              {filtered.map((route) => (
                <RouteCard key={route.slug} route={route} />
              ))}
              <div className="flex-shrink-0 w-4 lg:w-24" aria-hidden="true" />
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-14 text-center">
            <p className="text-ink-600 font-light mb-5">
              ¿No encuentras lo que buscas? Diseñamos rutas a medida.
            </p>
            <a
              href={waGeneric}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-4 bg-ink-900 text-cream-50 text-xs uppercase tracking-wider2 hover:bg-terra-600 transition-colors"
            >
              <MessageCircle size={14} /> Consultar por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function RouteCard({ route }: { route: Route }) {
  const badge = BADGES[route.slug];
  return (
    <article className="group flex-shrink-0 w-[75vw] sm:w-[48vw] lg:w-[29%] snap-start bg-cream-50 overflow-hidden flex flex-col border border-ink-800/8 hover:border-terra-400/40 hover:shadow-luxe-lg hover:-translate-y-1.5 transition-all duration-500 ease-out rounded-sm">
      <div className="relative overflow-hidden">
        <div className="transition-transform duration-700 ease-out group-hover:scale-[1.04]">
          <TourCarousel images={getRouteImages(route)} title={route.title} />
        </div>
        {badge && (
          <span className="absolute top-3 left-3 bg-terra-600 text-cream-50 text-[10px] uppercase tracking-wider2 px-3 py-1.5 z-10">
            {badge}
          </span>
        )}
        <div className="absolute top-3 right-3 z-10 bg-ink-900/70 backdrop-blur-sm text-cream-50 px-2.5 py-1 flex items-center gap-1.5 text-[10px] uppercase tracking-wider2">
          <Clock size={10} />
          {route.duration}
        </div>
        {route.price && (
          <div className="absolute bottom-3 right-3 z-10 bg-ink-900/70 backdrop-blur-sm px-3 py-1.5">
            <span className="text-[10px] text-cream-100/70">Desde </span>
            <span className="text-sm font-serif text-cream-50">{route.price}</span>
          </div>
        )}
      </div>

      <div className="p-5 md:p-6 flex flex-col flex-1">
        <h3 className="font-serif text-xl md:text-2xl text-ink-900 leading-tight">
          {route.title}
        </h3>
        <p className="text-sm text-ink-600 mt-2 leading-relaxed line-clamp-2">
          {route.description}
        </p>

        <div className="mt-auto pt-5">
          <Link
            to={`/viajes-organizados/marruecos/${route.slug}`}
            className="group/cta inline-flex items-center gap-2 w-full justify-center px-4 h-11 bg-ink-900 text-cream-50 text-xs uppercase tracking-wider2 hover:bg-terra-600 transition-all duration-300 hover:shadow-lg hover:shadow-terra-600/20"
          >
            Ver itinerario
            <ArrowRight size={13} className="transition-transform duration-300 group-hover/cta:translate-x-1" />
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
      className="relative aspect-[4/3] overflow-hidden bg-ink-900/5 select-none touch-pan-y focus:outline-none focus-visible:ring-2 focus-visible:ring-terra-500"
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
        className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center bg-cream-50/90 hover:bg-cream-50 text-ink-900 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity rounded-full"
      >
        <ChevronLeft size={16} />
      </button>
      <button
        type="button"
        onClick={(e) => { e.preventDefault(); e.stopPropagation(); goTo(index + 1); }}
        aria-label="Imagen siguiente"
        className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center bg-cream-50/90 hover:bg-cream-50 text-ink-900 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity rounded-full"
      >
        <ChevronRight size={16} />
      </button>

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-ink-900/30 backdrop-blur-sm px-2.5 py-1.5 rounded-full">
        {images.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Ir a imagen ${i + 1}`}
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); goTo(i); }}
            className={`rounded-full transition-all duration-400 ${i === index ? 'w-6 h-1.5 bg-cream-50' : 'w-2 h-1.5 bg-cream-50/50 hover:bg-cream-50/80'}`}
          />
        ))}
      </div>
    </div>
  );
}

function StatItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-[10px] uppercase tracking-wider2 text-cream-100/60 mb-1.5">{label}</div>
      <div className="font-serif text-xl md:text-2xl text-cream-50">{value}</div>
    </div>
  );
}
