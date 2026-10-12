import { Link, useLocation } from 'react-router-dom';

/**
 * Bloque "Sigue leyendo" al final de cada guía y artículo: enlazado interno
 * para que Google y el lector lleguen al resto de contenidos.
 * Al publicar una guía o artículo nuevo, añádelo a GUIDES o ARTICLES.
 */
type Item = { path: string; title: string };

const GUIDES: Item[] = [
  { path: '/budapest-4-dias', title: 'Budapest en 4 días' },
  { path: '/praga-3-dias', title: 'Praga en 3 días' },
  { path: '/viena-3-dias', title: 'Viena en 3 días' },
  { path: '/amsterdam-3-dias', title: 'Ámsterdam en 3 días' },
  { path: '/roma-3-dias', title: 'Roma en 3 días' },
  { path: '/londres-3-dias', title: 'Londres en 3 días' },
  { path: '/mercados-navidenos-europa', title: 'Mercados navideños de Europa' },
];

const ARTICLES: Item[] = [
  { path: '/vuelos/vuelos-baratos', title: 'Cómo encontrar vuelos baratos' },
  { path: '/alojamiento/booking-vs-airbnb', title: 'Booking vs Airbnb: cuál elegir' },
  { path: '/finanzas/tarjetas-sin-comisiones', title: 'Tarjetas sin comisiones para viajar' },
  { path: '/seguros/iati-experiencia', title: 'Mi experiencia con el seguro IATI' },
  { path: '/destinos/paises-baratos-2026', title: 'Países baratos para viajar en 2026' },
  { path: '/equipaje/8-objetos-imprescindibles', title: '8 objetos imprescindibles en la mochila' },
];

// Los siguientes elementos de la lista, empezando después del actual (rota para variar)
const nextFrom = (list: Item[], current: string, count: number) => {
  const start = Math.max(0, list.findIndex((i) => i.path === current)) + 1;
  return Array.from({ length: Math.min(count, list.length) }, (_, k) => list[(start + k) % list.length]).filter(
    (i) => i.path !== current,
  );
};

const MoreGuides = () => {
  const { pathname } = useLocation();
  const path = pathname.replace(/\/$/, '');
  const isGuide = GUIDES.some((i) => i.path === path);
  const isArticle = ARTICLES.some((i) => i.path === path);
  if (!isGuide && !isArticle) return null;

  const items = isGuide
    ? [...nextFrom(GUIDES, path, 2).map((i) => ({ ...i, kind: 'Guía' })), ...nextFrom(ARTICLES, path, 2).map((i) => ({ ...i, kind: 'Consejos' }))]
    : [...nextFrom(ARTICLES, path, 2).map((i) => ({ ...i, kind: 'Consejos' })), ...nextFrom(GUIDES, path, 2).map((i) => ({ ...i, kind: 'Guía' }))];

  return (
    <section aria-labelledby="sigue-leyendo" className="border-t border-gray-200 bg-gray-50 py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 id="sigue-leyendo" className="font-serif text-3xl text-gray-900">
          Sigue leyendo
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="group flex flex-col rounded-xl border border-gray-200 bg-white p-5 transition-shadow hover:shadow-md"
            >
              <span className="text-xs uppercase tracking-widest text-teal-600">{item.kind}</span>
              <span className="mt-2 font-semibold leading-snug text-gray-900">{item.title}</span>
              <span className="mt-auto pt-4 text-sm text-teal-700 group-hover:underline">Leer →</span>
            </Link>
          ))}
        </div>
        <Link to="/guias" className="mt-6 inline-block text-sm font-semibold text-teal-700 hover:underline">
          Ver todas las guías
        </Link>
      </div>
    </section>
  );
};

export default MoreGuides;
