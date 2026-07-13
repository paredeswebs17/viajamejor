import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { MapPin, Clock, Users, ChevronRight, MessageCircle } from 'lucide-react';
import { routes } from '../data/moroccoRoutes';

const WA_NUMBER = '34660611668';
const waGeneric = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('Hola! He visto vuestras rutas por Marruecos y me gustaría más información.')}`;

export default function ViajesMarruecosPage() {
  return (
    <>
      <Helmet>
        <title>Viajes Organizados a Marruecos - Rutas Privadas con Guia en Espanol</title>
        <meta name="description" content="Rutas privadas organizadas por Marruecos con guia local en espanol. Desierto del Sahara, ciudades imperiales, Atlas y costa atlantica. Desde 420 euros por persona." />
        <link rel="canonical" href="https://viajamejor.net/viajes-organizados/marruecos" />
      </Helmet>

      {/* HERO */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden">
        <img
          src="https://images.pexels.com/photos/3889843/pexels-photo-3889843.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Marruecos - desierto del Sahara"
          className="absolute inset-0 w-full h-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900/85 via-ink-900/30 to-ink-900/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-900/50 to-transparent" />

        <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-10 pb-16 md:pb-24 pt-32">
          <div className="max-w-3xl anim-fade-up">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-gold-300" />
              <span className="text-[10px] uppercase tracking-wider3 text-gold-300">
                Viajes organizados
              </span>
            </div>
            <h1 className="font-serif text-cream-50 text-[clamp(2.5rem,6vw,5rem)] font-light leading-[0.98]">
              Marruecos,{' '}
              <span className="italic text-gold-300">a tu medida</span>
            </h1>
            <p className="mt-6 text-cream-100/80 font-light text-lg max-w-xl leading-relaxed">
              Rutas privadas con guia local en espanol. Sin intermediarios, sin turismo de catalogo. El Marruecos de verdad.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-10 pt-8 border-t border-cream-100/20">
            <StatItem label="Rutas" value={`${routes.length}`} />
            <StatItem label="Tipo" value="Privado" />
            <StatItem label="Idioma" value="Espanol" />
            <StatItem label="Desde" value="420EUR" />
          </div>
        </div>
      </section>

      {/* ROUTES GRID */}
      <section className="py-20 md:py-28 bg-cream-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="h-px w-8 bg-terra-500" />
              <span className="text-[10px] uppercase tracking-wider3 text-terra-600">
                Rutas disponibles
              </span>
              <span className="h-px w-8 bg-terra-500" />
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-ink-900 leading-[1.05]">
              Elige tu{' '}
              <span className="italic text-terra-500">ruta perfecta</span>
            </h2>
            <p className="mt-4 text-ink-600 font-light max-w-lg mx-auto">
              Todas las rutas son 100% personalizables. Cuentanos tus fechas y preferencias.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {routes.map((route) => (
              <Link
                key={route.slug}
                to={`/viajes-organizados/marruecos/${route.slug}`}
                className="group bg-cream-50 border border-ink-800/5 overflow-hidden shadow-luxe hover:shadow-luxe-lg transition-all duration-500 hover:-translate-y-1"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={route.image}
                    alt={route.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900/70 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 bg-cream-50/90 backdrop-blur-sm px-3 py-1.5 text-[11px] font-medium text-ink-900">
                    <Clock size={11} className="text-terra-500" />
                    {route.duration}
                  </div>
                  {route.price && (
                    <div className="absolute bottom-3 right-3 bg-ink-900/80 backdrop-blur-sm px-3 py-1.5">
                      <span className="text-[10px] text-cream-100/70">Desde </span>
                      <span className="text-sm font-serif text-cream-50">{route.price}</span>
                    </div>
                  )}
                  <div className="absolute bottom-3 left-3 right-20">
                    <h3 className="font-serif text-lg text-cream-50 italic leading-tight">
                      {route.title}
                    </h3>
                  </div>
                </div>

                <div className="p-5">
                  <p className="text-sm text-ink-600 font-light leading-relaxed line-clamp-2 mb-4">
                    {route.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {route.places.slice(0, 4).map((place) => (
                      <span
                        key={place}
                        className="inline-flex items-center gap-1 text-[10px] text-ink-700 bg-cream-100 border border-ink-800/10 px-2.5 py-1"
                      >
                        <MapPin size={8} className="text-terra-500" />
                        {place}
                      </span>
                    ))}
                    {route.places.length > 4 && (
                      <span className="text-[10px] text-ink-500 px-1 py-1">
                        +{route.places.length - 4}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-ink-800/10">
                    <span className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider2 text-ink-500">
                      <Users size={10} /> Privado
                    </span>
                    <span className="flex items-center gap-1 text-xs font-medium text-terra-500 group-hover:text-terra-600 transition-colors">
                      Ver ruta <ChevronRight size={13} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-14">
            <p className="text-sm text-ink-600 font-light mb-5">
              No ves lo que buscas? Te preparamos una ruta a medida sin compromiso.
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

function StatItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-[10px] uppercase tracking-wider2 text-cream-100/60 mb-1.5">{label}</div>
      <div className="font-serif text-xl md:text-2xl text-cream-50">{value}</div>
    </div>
  );
}
