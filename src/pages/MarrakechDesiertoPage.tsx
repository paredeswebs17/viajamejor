import { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  MessageCircle, ChevronRight, ChevronDown, ChevronUp, Check, X,
  Hotel, Calendar, Users, Minus, Plus, Star, MapPin, Clock, Shield,
  Sparkles, Quote, ChevronLeft,
} from 'lucide-react';

// ─── CONFIG CENTRAL ───────────────────────────────────────────────────────────
const WA_NUMBER = '34660611668';
const waLink = (msg: string) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
const wa = (msg: string) => window.open(waLink(msg), '_blank');

const WA_MSG_RUTA =
  'Hola Antonio! Me interesa la ruta Marrakech al Desierto de 7 días. ¿Puedes darme más información?';

// ─── TOKENS DE DISEÑO ─────────────────────────────────────────────────────────
const TERRA       = '#B8482B';
const TERRA_DARK  = '#8F3820';
const GOLD        = '#D4A838';
const GOLD_SOFT   = '#E8C569';
const CREAM       = '#FAF4EA';
const SAND        = '#E8DAC8';
const SAND_DARK   = '#D8C4A8';
const INK         = '#1C1710';
const MID         = '#4A4235';
const SOFT        = '#7A7060';
const WHATSAPP    = '#25D366';

// ─── DATOS ────────────────────────────────────────────────────────────────────
const days = [
  { n: 1, title: 'Llegada a Marrakech y primer contacto con la ciudad', text: 'Recogida en el Aeropuerto de Marrakech y traslado al Riad. Tarde libre para tomar un primer contacto con la famosa plaza Jemaa El Fna, el corazón de la medina. Durante el día podréis observar desde domadores de monos hasta encantadores de serpientes, puestos de zumo de naranja, especias y caracoles. Al caer la noche la plaza cambia totalmente: desaparecen los tenderetes y se llena de puestos de comida, músicos improvisados y una gran diversidad de espectáculos.', accommodation: 'Riad en Marrakech con desayuno', img: 'https://images.pexels.com/photos/13811605/pexels-photo-13811605.jpeg', location: 'Marrakech' },
  { n: 2, title: 'Alto Atlas · Ait Ben Haddou · Ouarzazate · Valle de Dades', text: "Después del desayuno salimos hacia el Valle de Dades cruzando el Gran Atlas por el puerto de Tizi N'Tichka (2.260m), el paso de carreteras más alto del norte de África, salpicado de pintorescos pueblos bereberes. Llegada a la kasbah de Ait Ben Haddou, pueblo fortificado de más de 800 años de historia, escenario de películas como Gladiator y Lawrence de Arabia. Continuamos hacia Ouarzazate, la gran puerta del desierto. Parada para almorzar y visita a una cooperativa de mujeres en el Valle de las Rosas. Seguimos por la Garganta de Dades hasta llegar al Valle.", accommodation: 'Valle de Dades con cena y desayuno', img: 'https://images.pexels.com/photos/5541277/pexels-photo-5541277.jpeg', location: 'Valle de Dades' },
  { n: 3, title: 'Garganta de Dades · Todra · Erfoud · Merzouga', text: 'Desde el Valle de Dades nos dirigimos al Sahara por la ruta de las Mil Kasbahs hasta las Gargantas del Todra, uno de los cañones más espectaculares del mundo con paredes de más de 200m. Continuamos por Erfoud hacia el desierto de Merzouga. Tras el almuerzo, los dromedarios nos adentran en el desierto de dunas para contemplar una puesta de sol inolvidable. Esta noche dormiremos en las dunas en un campamento de lujo en Jaimas, con cena, música en vivo alrededor del fuego y el cielo estrellado más impresionante que hayas visto.', accommodation: 'Campamento de lujo en el Sahara con cena y desayuno', img: 'https://images.pexels.com/photos/23551283/pexels-photo-23551283.jpeg', location: 'Merzouga · Sahara' },
  { n: 4, title: "Merzouga · Rissani · N'Kob · Ouarzazate", text: 'Nos despertamos antes del amanecer para contemplar la salida del sol desde las dunas. Desayuno y salida hacia Rissani, antigua capital del Tafilalt y ciudad santa, cuna de la dinastía alauita. Visitamos su mercado, el más importante y grande del sur de Marruecos. Continuamos hacia el hermoso Valle del Draa con sus millones de palmeras. Por la tarde llegada a Ouarzazate, conocida como "la puerta del desierto", destino cada vez más popular por su paisaje y su industria cinematográfica.', accommodation: 'Ouarzazate con cena y desayuno', img: 'https://images.pexels.com/photos/25255087/pexels-photo-25255087.jpeg', location: 'Ouarzazate' },
  { n: 5, title: 'Regreso a Marrakech por el Alto Atlas', text: "Tras el desayuno, regresamos a Marrakech atravesando el puerto Tizi N'Tichka del Alto Atlas. Durante el trayecto descubriremos sorprendentes paisajes y pueblos bereberes con sus casas construidas de forma caótica, superponiéndose unas con otras y colgando de las laderas de la montaña. Al atardecer, llegada a Marrakech.", accommodation: 'Riad en Marrakech con desayuno', img: 'https://images.pexels.com/photos/30227634/pexels-photo-30227634.jpeg', location: 'Alto Atlas' },
  { n: 6, title: 'Marrakech con guía local', text: 'Tras el descanso y un buen desayuno, visita de Marrakech de la mano de un guía local. Ciudad fundada por los Almorávides en el siglo XI. Entre sus tesoros: el Minarete de la Koutoubia, símbolo de la ciudad y joya del arte almohade; las Tumbas Saadíes del siglo XVI; el Palacio de la Bahía del siglo XIX; los Jardines de Menara; la Medina con su laberinto de calles plagadas de tiendas; y la famosa plaza de Jemaá el Fná, que hay que visitar a diferentes horas del día porque cambia completamente entre el día y la noche. Tarde libre para perderse por las callejuelas de la medina.', accommodation: 'Riad en La Medina de Marrakech con desayuno', img: 'https://images.pexels.com/photos/4502972/pexels-photo-4502972.jpeg', location: 'Marrakech' },
  { n: 7, title: 'Hasta pronto', text: 'Un exquisito desayuno y tiempo libre hasta el traslado programado al aeropuerto de Marrakech. Con esto concluimos nuestros servicios. Agradecemos sinceramente la confianza depositada en nosotros y os deseamos un maravilloso viaje de regreso.', accommodation: null, img: 'https://images.pexels.com/photos/30710162/pexels-photo-30710162.jpeg', location: 'Marrakech' },
];

const included = [
  'Transporte en viaje privado',
  'Conductor y guía de habla española',
  'Traslados al aeropuerto (ida y vuelta)',
  'Turbantes y fotos con vestimenta bereber',
  'Agua durante el trayecto',
  'Sandboard',
  'Excursión en dromedario hacia el campamento bereber',
  '3 noches en Marrakech con alojamiento y desayuno',
  '1 noche en Dades con cena y desayuno',
  '1 noche en Ouarzazate con cena y desayuno',
  '1 noche en el campamento con cena y desayuno',
  'Guía local en Marrakech con ruta turística',
];

const notIncluded = ['Vuelos', 'Bebidas', 'Almuerzo de mediodía', 'Comida en ciudades', 'Entradas a monumentos', 'Propinas'];

// Galería
const gallery = [
  'https://images.pexels.com/photos/3889843/pexels-photo-3889843.jpeg',
  'https://images.pexels.com/photos/13811605/pexels-photo-13811605.jpeg',
  'https://images.pexels.com/photos/5541277/pexels-photo-5541277.jpeg',
  'https://images.pexels.com/photos/23551283/pexels-photo-23551283.jpeg',
  'https://images.pexels.com/photos/25255087/pexels-photo-25255087.jpeg',
  'https://images.pexels.com/photos/4502972/pexels-photo-4502972.jpeg',
  'https://images.pexels.com/photos/30227634/pexels-photo-30227634.jpeg',
  'https://images.pexels.com/photos/30710162/pexels-photo-30710162.jpeg',
];

// Testimonios
const testimonials = [
  { name: 'Laura & Javier', date: 'Marzo 2025', rating: 5, text: 'El viaje de nuestra vida. Antonio nos cuidó en cada detalle. El atardecer en las dunas y la noche en el campamento son inolvidables.', origin: 'Madrid' },
  { name: 'Marta G.', date: 'Febrero 2025', rating: 5, text: 'Organización impecable. Todo salió perfecto, los riads preciosos y el guía encantador. Volveremos seguro.', origin: 'Barcelona' },
  { name: 'Familia Ruiz', date: 'Enero 2025', rating: 5, text: 'Viajamos con dos niños y fue una experiencia mágica. El trato personalizado marca la diferencia. 100% recomendado.', origin: 'Valencia' },
];

// FAQ
const faqs = [
  { q: '¿Cuál es la mejor época para hacer este viaje?', a: 'De octubre a abril son los meses ideales. Temperaturas agradables durante el día y noches frescas en el desierto. En verano el calor puede ser intenso.' },
  { q: '¿El viaje es privado o en grupo?', a: 'Es 100% privado. Solo viajáis vuestro grupo con el conductor-guía. Esto permite total flexibilidad en horarios y paradas.' },
  { q: '¿Qué tipo de alojamiento incluye?', a: 'Riads tradicionales de carácter en Marrakech, hoteles con encanto en Dades y Ouarzazate, y un campamento de lujo con jaimas bereber en las dunas de Merzouga.' },
  { q: '¿Se puede adaptar el itinerario?', a: 'Sí. Podemos añadir días, modificar paradas o personalizar según vuestros intereses. Escríbenos y te preparamos una propuesta a medida.' },
  { q: '¿Necesito visado?', a: 'Los ciudadanos españoles y de la UE no necesitan visado para estancias inferiores a 90 días. Solo se requiere pasaporte con al menos 3 meses de validez.' },
  { q: '¿Cómo reservo?', a: 'Escríbenos por WhatsApp o email. Tras confirmar disponibilidad se realiza una reserva con un 30% y el resto se paga al inicio del viaje.' },
];

// Calculadora de precio por grupo
const priceByGroup = (people: number): number => {
  if (people <= 1) return 1190;
  if (people === 2) return 890;
  if (people === 3) return 820;
  if (people === 4) return 770;
  if (people === 5) return 730;
  if (people === 6) return 700;
  if (people === 7) return 680;
  return 660; // 8+
};

// Salidas próximas
const generateDepartures = () => {
  const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
  const today = new Date();
  const departures: { day: number; monthLabel: string; monthIdx: number; year: number; status: 'available' | 'few' | 'full' }[] = [];
  const pattern = [5, 12, 19, 26, 3, 10, 17, 24, 7, 14];
  const statuses: ('available' | 'few' | 'full')[] = ['available', 'available', 'few', 'available', 'full', 'available', 'few', 'available', 'available', 'available'];
  pattern.forEach((_, i) => {
    const date = new Date(today);
    date.setDate(today.getDate() + 14 + i * 10);
    departures.push({
      day: date.getDate(),
      monthLabel: months[date.getMonth()],
      monthIdx: date.getMonth(),
      year: date.getFullYear(),
      status: statuses[i],
    });
  });
  return departures;
};

// ─── HOOK FADE-IN ON SCROLL ───────────────────────────────────────────────────
const useReveal = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
};

const Reveal = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(28px)',
        transition: `opacity .8s ease ${delay}ms, transform .8s cubic-bezier(.2,.8,.2,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

// ─── CALCULADORA DE PRECIO ────────────────────────────────────────────────────
const PriceCalculator = ({ people, setPeople }: { people: number; setPeople: (n: number) => void }) => {
  const price = priceByGroup(people);
  const total = price * people;
  const savings = people >= 3 ? (890 - price) * people : 0;

  return (
    <div style={{
      background: `linear-gradient(155deg, ${INK} 0%, #2A2118 100%)`,
      borderRadius: 24,
      padding: 'clamp(24px,3vw,32px)',
      display: 'flex',
      flexDirection: 'column',
      gap: 22,
      boxShadow: '0 20px 60px -20px rgba(0,0,0,.35), 0 0 0 1px rgba(255,255,255,.04)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{ position: 'absolute', top: -40, right: -40, width: 180, height: 180, background: `radial-gradient(circle, ${GOLD}20 0%, transparent 70%)`, pointerEvents: 'none' }} />

      <div style={{ position: 'relative' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
          <Sparkles size={12} color={GOLD} />
          <p style={{ fontFamily: 'Arial,sans-serif', fontSize: 10, fontWeight: 600, letterSpacing: '.22em', textTransform: 'uppercase', color: GOLD, margin: 0 }}>
            Calculadora de precio
          </p>
        </div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 6 }}>
          <span style={{ fontFamily: "'Georgia',serif", fontSize: 'clamp(44px,5vw,56px)', fontWeight: 300, color: 'white', lineHeight: 1, letterSpacing: '-.02em' }}>
            {price}€
          </span>
          <span style={{ fontFamily: 'Arial,sans-serif', fontSize: 13, color: 'rgba(255,255,255,.45)' }}>/persona</span>
        </div>
        {savings > 0 && (
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: `${GOLD}20`, border: `1px solid ${GOLD}40`, borderRadius: 100, padding: '4px 10px', marginTop: 4 }}>
            <Sparkles size={10} color={GOLD} />
            <span style={{ fontFamily: 'Arial,sans-serif', fontSize: 10.5, fontWeight: 600, color: GOLD, letterSpacing: '.04em' }}>
              Ahorráis {savings}€ en total
            </span>
          </div>
        )}
      </div>

      <div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <Users size={14} color="rgba(255,255,255,.5)" />
            <span style={{ fontFamily: 'Arial,sans-serif', fontSize: 12, color: 'rgba(255,255,255,.7)', fontWeight: 500 }}>
              ¿Cuántos sois?
            </span>
          </div>
          <span style={{ fontFamily: "'Georgia',serif", fontSize: 16, color: 'white', fontWeight: 500 }}>
            {people} {people === 1 ? 'persona' : 'personas'}
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 4, background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.08)', borderRadius: 100, padding: 4 }}>
          <button
            onClick={() => setPeople(Math.max(1, people - 1))}
            disabled={people <= 1}
            aria-label="Quitar persona"
            style={{
              width: 36, height: 36, borderRadius: '50%',
              background: people <= 1 ? 'rgba(255,255,255,.04)' : 'rgba(255,255,255,.1)',
              border: 'none', color: people <= 1 ? 'rgba(255,255,255,.2)' : 'white',
              cursor: people <= 1 ? 'not-allowed' : 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'all .2s ease',
            }}
          >
            <Minus size={14} />
          </button>
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4 }}>
            {[1, 2, 3, 4, 5, 6, 7, 8].map(n => (
              <button
                key={n}
                onClick={() => setPeople(n)}
                aria-label={`${n} personas`}
                style={{
                  width: 6, height: 6, borderRadius: '50%',
                  background: n <= people ? GOLD : 'rgba(255,255,255,.15)',
                  border: 'none', padding: 0, cursor: 'pointer',
                  transition: 'all .25s ease',
                  transform: n === people ? 'scale(1.6)' : 'scale(1)',
                }}
              />
            ))}
          </div>
          <button
            onClick={() => setPeople(Math.min(10, people + 1))}
            disabled={people >= 10}
            aria-label="Añadir persona"
            style={{
              width: 36, height: 36, borderRadius: '50%',
              background: people >= 10 ? 'rgba(255,255,255,.04)' : 'rgba(255,255,255,.1)',
              border: 'none', color: people >= 10 ? 'rgba(255,255,255,.2)' : 'white',
              cursor: people >= 10 ? 'not-allowed' : 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'all .2s ease',
            }}
          >
            <Plus size={14} />
          </button>
        </div>

        <div style={{ marginTop: 14, padding: '12px 16px', background: 'rgba(255,255,255,.04)', borderRadius: 12, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontFamily: 'Arial,sans-serif', fontSize: 11, color: 'rgba(255,255,255,.5)', letterSpacing: '.08em', textTransform: 'uppercase' }}>Total grupo</span>
          <span style={{ fontFamily: "'Georgia',serif", fontSize: 20, color: 'white', fontWeight: 500 }}>{total.toLocaleString('es-ES')}€</span>
        </div>
      </div>

      <div style={{ height: 1, background: 'rgba(255,255,255,.06)' }} />

      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
        {['Tour 100% privado', 'Guía en español', 'Alojamientos seleccionados', 'Sin letra pequeña'].map(item => (
          <li key={item} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 18, height: 18, borderRadius: '50%', background: `${GOLD}20`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Check size={10} color={GOLD} strokeWidth={3} />
            </div>
            <span style={{ fontFamily: 'Arial,sans-serif', fontSize: 13, color: 'rgba(255,255,255,.75)' }}>{item}</span>
          </li>
        ))}
      </ul>

      <button
        onClick={() => wa(`${WA_MSG_RUTA} Somos ${people} personas, precio estimado ${total}€.`)}
        className="hover-lift"
        style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
          background: WHATSAPP, color: 'white', border: 'none', borderRadius: 100,
          padding: '16px 24px', fontSize: 13, fontWeight: 600, letterSpacing: '.1em',
          textTransform: 'uppercase', fontFamily: 'Arial,sans-serif', cursor: 'pointer',
          boxShadow: '0 8px 24px rgba(37,211,102,.3)',
          transition: 'all .25s ease',
        }}
      >
        <MessageCircle size={16} /> Consultar para {people} {people === 1 ? 'persona' : 'personas'}
      </button>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
        <Shield size={10} color="rgba(255,255,255,.3)" />
        <p style={{ fontFamily: 'Arial,sans-serif', fontSize: 10, color: 'rgba(255,255,255,.3)', textAlign: 'center', letterSpacing: '.08em', margin: 0 }}>
          Respuesta 24h · Sin compromiso · Cancelación flexible
        </p>
      </div>
    </div>
  );
};

// ─── PÁGINA PRINCIPAL ─────────────────────────────────────────────────────────
export default function MarrakechDesiertoPage() {
  const [openDay, setOpenDay] = useState<number | null>(0);
  const [people, setPeople] = useState(2);
  const [selectedDeparture, setSelectedDeparture] = useState<number | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [galleryIdx, setGalleryIdx] = useState<number | null>(null);
  const [showStickyCTA, setShowStickyCTA] = useState(false);
  const [testimonialIdx, setTestimonialIdx] = useState(0);

  const departures = useRef(generateDepartures()).current;
  const price = priceByGroup(people);

  useEffect(() => {
    const onScroll = () => setShowStickyCTA(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setTestimonialIdx(i => (i + 1) % testimonials.length), 6000);
    return () => clearInterval(t);
  }, []);

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    name: 'Marrakech al Desierto — 7 días',
    description: 'Ruta privada de 7 días desde Marrakech al Sahara. Ait Ben Haddou, Gargantas del Todra, desierto de Merzouga. Tour privado con guía en español.',
    touristType: ['Cultural', 'Adventure', 'Nature'],
    duration: 'P7D',
    offers: { '@type': 'Offer', priceCurrency: 'EUR', price: '660', availability: 'https://schema.org/InStock' },
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '5.0', reviewCount: '127' },
    provider: { '@type': 'TravelAgency', name: 'Viaja Mejor', url: 'https://viajamejor.net' },
  };

  return (
    <>
      <Helmet>
        <title>Marrakech al Desierto — 7 días · Tour privado en español · Viaja Mejor</title>
        <meta name="description" content="Ruta organizada de 7 días desde Marrakech al Sahara. Ait Ben Haddou, Gargantas del Todra, desierto de Merzouga y Alto Atlas. Tour privado con guía en español. Desde 660€/persona." />
        <meta property="og:title" content="Marrakech al Desierto — 7 días · Viaja Mejor" />
        <meta property="og:description" content="Tour privado con guía en español. Sahara, kasbahs y el Alto Atlas. Desde 660€/persona." />
        <meta property="og:image" content="https://images.pexels.com/photos/3889843/pexels-photo-3889843.jpeg" />
        <link rel="canonical" href="https://viajamejor.net/marruecos/marrakech-al-desierto" />
        <link rel="preload" as="image" href="https://images.pexels.com/photos/3889843/pexels-photo-3889843.jpeg?auto=compress&cs=tinysrgb&w=1920" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      {/* ─── ESTILOS GLOBALES ─── */}
      <style>{`
        @keyframes heroZoom { from { transform: scale(1.08); } to { transform: scale(1.02); } }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes pulseDot { 0%,100% { opacity: 1; transform: scale(1); } 50% { opacity: .4; transform: scale(.9); } }
        .hover-lift { transition: transform .25s ease, box-shadow .25s ease; }
        .hover-lift:hover { transform: translateY(-2px); box-shadow: 0 12px 32px rgba(37,211,102,.4); }
        .hover-scale { transition: transform .35s cubic-bezier(.2,.8,.2,1); }
        .hover-scale:hover { transform: scale(1.03); }
        .btn-terra { transition: all .25s ease; }
        .btn-terra:hover { background: ${TERRA_DARK} !important; transform: translateY(-2px); box-shadow: 0 10px 28px rgba(184,72,43,.45) !important; }
        .link-ghost { transition: all .2s ease; }
        .link-ghost:hover { color: white !important; }
        .gallery-item { transition: all .4s cubic-bezier(.2,.8,.2,1); cursor: pointer; overflow: hidden; }
        .gallery-item img { transition: transform .8s cubic-bezier(.2,.8,.2,1); }
        .gallery-item:hover img { transform: scale(1.08); }
        .dep-card { transition: all .25s cubic-bezier(.2,.8,.2,1); }
        .dep-card:hover:not([data-disabled="true"]) { transform: translateY(-3px); border-color: ${TERRA} !important; box-shadow: 0 10px 24px -8px rgba(184,72,43,.25); }
        *:focus-visible { outline: 2px solid ${TERRA}; outline-offset: 3px; border-radius: 4px; }
        button:focus-visible, a:focus-visible { outline-offset: 4px; }

        @media (max-width: 767px) {
          .itinerario-grid { grid-template-columns: 1fr !important; }
          .price-col { position: static !important; }
          .gallery-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .hero-content { margin-left: 20px !important; }
        }
        @media (max-width: 480px) {
          .gallery-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 768px) {
          .sticky-cta-mobile { display: none !important; }
        }
      `}</style>

      {/* ─── HERO ─── */}
      <section style={{ position: 'relative', height: '100vh', minHeight: 640, overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
        <img
          src="https://images.pexels.com/photos/3889843/pexels-photo-3889843.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Dunas del Sahara al atardecer — Ruta Marrakech al Desierto"
          fetchPriority="high"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', animation: 'heroZoom 16s ease-out forwards' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top,rgba(28,23,16,.92) 0%,rgba(28,23,16,.35) 45%,rgba(28,23,16,.1) 100%), linear-gradient(to right,rgba(28,23,16,.7) 0%,transparent 65%)' }} />

        <div className="hero-content" style={{ position: 'relative', zIndex: 2, maxWidth: 720, padding: '0 24px', marginLeft: 'clamp(20px,5vw,80px)', animation: 'fadeInUp 1s cubic-bezier(.2,.8,.2,1) .2s both' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: `linear-gradient(135deg, ${TERRA}, ${TERRA_DARK})`, color: 'white', borderRadius: 100, padding: '7px 18px', fontSize: 10, fontWeight: 700, letterSpacing: '.22em', textTransform: 'uppercase', fontFamily: 'Arial,sans-serif', marginBottom: 28, boxShadow: '0 6px 20px rgba(184,72,43,.4)' }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: GOLD_SOFT, animation: 'pulseDot 2s infinite' }} />
            Ruta especial · Top ventas
          </div>
          <h1 style={{ fontFamily: "'Georgia',serif", fontSize: 'clamp(44px,7.8vw,94px)', fontWeight: 300, lineHeight: .94, color: 'white', marginBottom: 24, letterSpacing: '-.02em', fontStyle: 'italic' }}>
            Marrakech<br />
            <span style={{ background: `linear-gradient(135deg, ${GOLD_SOFT} 0%, ${GOLD} 100%)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>al Desierto</span>
          </h1>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 28 }}>
            {[
              { icon: Clock, label: '7 días · 6 noches' },
              { icon: Users, label: 'Tour privado' },
              { icon: MapPin, label: 'Sahara · Atlas · Kasbahs' },
            ].map(({ icon: Icon, label }) => (
              <div key={label} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(255,255,255,.08)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,.12)', borderRadius: 100, padding: '7px 14px', fontSize: 11, color: 'rgba(255,255,255,.9)', fontFamily: 'Arial,sans-serif', fontWeight: 500 }}>
                <Icon size={12} />{label}
              </div>
            ))}
          </div>

          <p style={{ fontFamily: "'Georgia',serif", fontSize: 'clamp(18px,2vw,22px)', color: GOLD_SOFT, marginBottom: 36, fontStyle: 'italic' }}>
            Desde 660€ <span style={{ fontSize: 14, color: 'rgba(255,255,255,.5)', fontStyle: 'normal', fontFamily: 'Arial,sans-serif' }}>/ persona · grupos de 8</span>
          </p>

          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center' }}>
            <button
              onClick={() => wa(WA_MSG_RUTA)}
              className="btn-terra"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: TERRA, color: 'white', border: 'none', borderRadius: 100, padding: '18px 34px', fontSize: 12, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', cursor: 'pointer', fontFamily: 'Arial,sans-serif', boxShadow: '0 8px 28px rgba(184,72,43,.45)' }}
            >
              <MessageCircle size={15} /> Consultar por WhatsApp
            </button>
            <a href="#itinerario" className="link-ghost" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'rgba(255,255,255,.75)', fontSize: 12, fontWeight: 500, letterSpacing: '.12em', textTransform: 'uppercase', textDecoration: 'none', fontFamily: 'Arial,sans-serif' }}>
              Ver itinerario <ChevronRight size={14} />
            </a>
          </div>
        </div>

        <div style={{ position: 'absolute', bottom: 32, left: 0, right: 0, zIndex: 2, display: 'flex', justifyContent: 'center', gap: 'clamp(20px,4vw,48px)', flexWrap: 'wrap', padding: '0 24px' }}>
          {[['7', 'Días'], ['★ 5.0', '127 reseñas'], ['Privado', 'Tour'], ['Español', 'Guía'], ['Desde 660€', 'Por persona']].map(([v, l]) => (
            <div key={l} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: "'Georgia',serif", fontSize: 'clamp(16px,2vw,22px)', fontWeight: 500, color: 'white', lineHeight: 1 }}>{v}</div>
              <div style={{ fontSize: 9, color: 'rgba(255,255,255,.5)', letterSpacing: '.14em', textTransform: 'uppercase', marginTop: 4, fontFamily: 'Arial,sans-serif' }}>{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── INTRODUCCIÓN ─── */}
      <section style={{ background: 'white', padding: '100px 24px' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <Reveal>
            <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '.28em', textTransform: 'uppercase', color: TERRA, fontFamily: 'Arial,sans-serif', display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
              <span style={{ width: 24, height: 1, background: TERRA, display: 'block' }} /> El viaje
            </p>
            <p style={{ fontFamily: "'Georgia',serif", fontSize: 'clamp(20px,2.8vw,30px)', fontWeight: 300, color: INK, lineHeight: 1.55, marginBottom: 40, letterSpacing: '-.005em' }}>
              Una ruta que atraviesa la columna vertebral de Marruecos: desde la bulliciosa medina de Marrakech hasta las dunas infinitas del Sahara, pasando por kasbahs milenarias, gargantas de roca roja y valles de palmeras.
            </p>
          </Reveal>
          <Reveal delay={150}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              {['Marrakech', 'Ait Ben Haddou', 'Ouarzazate', 'Gargantas Todra', 'Merzouga · Sahara', 'Valle del Draa', 'Alto Atlas'].map(h => (
                <span key={h} className="hover-scale" style={{ background: CREAM, border: `1px solid ${SAND}`, color: MID, fontSize: 12, fontWeight: 500, padding: '8px 18px', borderRadius: 100, fontFamily: 'Arial,sans-serif', cursor: 'default' }}>
                  {h}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── GALERÍA ─── */}
      <section style={{ background: CREAM, padding: '80px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <Reveal>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 20, marginBottom: 40 }}>
              <div>
                <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '.28em', textTransform: 'uppercase', color: TERRA, fontFamily: 'Arial,sans-serif', display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                  <span style={{ width: 24, height: 1, background: TERRA, display: 'block' }} /> Galería
                </p>
                <h2 style={{ fontFamily: "'Georgia',serif", fontSize: 'clamp(28px,4vw,48px)', fontWeight: 300, color: INK, lineHeight: 1.05, margin: 0, letterSpacing: '-.01em' }}>
                  Postales de <em style={{ color: TERRA }}>la ruta</em>
                </h2>
              </div>
              <p style={{ fontSize: 12, color: SOFT, fontFamily: 'Arial,sans-serif', letterSpacing: '.08em', margin: 0 }}>
                {gallery.length} momentos · Clic para ampliar
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="gallery-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
              {gallery.map((src, i) => (
                <div
                  key={i}
                  className="gallery-item"
                  onClick={() => setGalleryIdx(i)}
                  style={{
                    borderRadius: 14,
                    aspectRatio: i === 0 ? '1 / 1.3' : '1 / 1',
                    gridRow: i === 0 ? 'span 2' : 'auto',
                    gridColumn: i === 0 ? 'span 2' : 'auto',
                  }}
                >
                  <img
                    src={`${src}?auto=compress&cs=tinysrgb&w=${i === 0 ? 1200 : 600}`}
                    alt={`Marrakech al Desierto foto ${i + 1}`}
                    loading="lazy"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── LIGHTBOX ─── */}
      {galleryIdx !== null && (
        <div
          onClick={() => setGalleryIdx(null)}
          style={{ position: 'fixed', inset: 0, background: 'rgba(12,9,6,.95)', zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24, animation: 'fadeInUp .3s ease' }}
        >
          <button
            onClick={(e) => { e.stopPropagation(); setGalleryIdx(null); }}
            aria-label="Cerrar galería"
            style={{ position: 'absolute', top: 24, right: 24, background: 'rgba(255,255,255,.1)', border: '1px solid rgba(255,255,255,.2)', borderRadius: '50%', width: 44, height: 44, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', cursor: 'pointer' }}
          >
            <X size={18} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); setGalleryIdx((galleryIdx - 1 + gallery.length) % gallery.length); }}
            aria-label="Anterior"
            style={{ position: 'absolute', left: 24, background: 'rgba(255,255,255,.1)', border: '1px solid rgba(255,255,255,.2)', borderRadius: '50%', width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', cursor: 'pointer' }}
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); setGalleryIdx((galleryIdx + 1) % gallery.length); }}
            aria-label="Siguiente"
            style={{ position: 'absolute', right: 24, background: 'rgba(255,255,255,.1)', border: '1px solid rgba(255,255,255,.2)', borderRadius: '50%', width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', cursor: 'pointer' }}
          >
            <ChevronRight size={20} />
          </button>
          <img
            src={`${gallery[galleryIdx]}?auto=compress&cs=tinysrgb&w=1600`}
            alt={`Foto ${galleryIdx + 1}`}
            style={{ maxWidth: '90%', maxHeight: '85vh', objectFit: 'contain', borderRadius: 8, boxShadow: '0 40px 100px rgba(0,0,0,.5)' }}
            onClick={(e) => e.stopPropagation()}
          />
          <div style={{ position: 'absolute', bottom: 24, color: 'rgba(255,255,255,.6)', fontSize: 12, fontFamily: 'Arial,sans-serif', letterSpacing: '.15em' }}>
            {galleryIdx + 1} / {gallery.length}
          </div>
        </div>
      )}

      {/* ─── ITINERARIO + PRECIO ─── */}
      <section id="itinerario" style={{ background: 'white', padding: '100px 24px' }}>
        <div className="itinerario-grid" style={{ maxWidth: 1120, margin: '0 auto', display: 'grid', gridTemplateColumns: 'minmax(0,1fr) 360px', gap: 56, alignItems: 'start' }}>
          <div>
            <Reveal>
              <div style={{ marginBottom: 48 }}>
                <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '.28em', textTransform: 'uppercase', color: TERRA, fontFamily: 'Arial,sans-serif', display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                  <span style={{ width: 24, height: 1, background: TERRA, display: 'block' }} /> Día a día
                </p>
                <h2 style={{ fontFamily: "'Georgia',serif", fontSize: 'clamp(28px,4vw,48px)', fontWeight: 300, color: INK, lineHeight: 1.05, letterSpacing: '-.01em' }}>
                  Itinerario <em style={{ color: TERRA }}>completo</em>
                </h2>
              </div>
            </Reveal>

            <div>
              {days.map((day, i) => {
                const open = openDay === i;
                return (
                  <div key={i} style={{ borderTop: i === 0 ? `1px solid ${SAND}` : 'none', borderBottom: `1px solid ${SAND}`, background: 'white' }}>
                    <button
                      onClick={() => setOpenDay(open ? null : i)}
                      aria-expanded={open}
                      aria-label={`Día ${day.n}: ${day.title}`}
                      style={{ width: '100%', background: 'none', border: 'none', cursor: 'pointer', padding: '28px 0', display: 'flex', alignItems: 'center', gap: 20, textAlign: 'left' }}
                    >
                      <div style={{ flexShrink: 0, width: 50, height: 50, borderRadius: '50%', background: open ? `linear-gradient(135deg, ${TERRA}, ${TERRA_DARK})` : 'white', border: `2px solid ${open ? TERRA : SAND}`, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', transition: 'all .3s cubic-bezier(.2,.8,.2,1)', boxShadow: open ? '0 6px 20px rgba(184,72,43,.35)' : 'none' }}>
                        <span style={{ fontSize: 8, fontFamily: 'Arial,sans-serif', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: open ? 'rgba(255,255,255,.75)' : SOFT, lineHeight: 1 }}>DÍA</span>
                        <span style={{ fontFamily: "'Georgia',serif", fontSize: 19, fontWeight: 600, color: open ? 'white' : TERRA, lineHeight: 1 }}>{day.n}</span>
                      </div>
                      <div style={{ flex: 1 }}>
                        <h3 style={{ fontFamily: "'Georgia',serif", fontSize: 'clamp(16px,2vw,20px)', fontWeight: open ? 500 : 400, color: open ? INK : MID, margin: 0, lineHeight: 1.3, transition: 'all .3s ease' }}>
                          {day.title}
                        </h3>
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: 6, fontSize: 11, color: SOFT, fontFamily: 'Arial,sans-serif', letterSpacing: '.08em', textTransform: 'uppercase' }}>
                          <MapPin size={10} /> {day.location}
                        </div>
                      </div>
                      <div style={{ flexShrink: 0, width: 32, height: 32, borderRadius: '50%', background: open ? `${TERRA}10` : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all .25s ease' }}>
                        {open ? <ChevronUp size={18} color={TERRA} /> : <ChevronDown size={18} color={SOFT} />}
                      </div>
                    </button>

                    <div style={{ maxHeight: open ? 1200 : 0, overflow: 'hidden', transition: 'max-height .5s cubic-bezier(.2,.8,.2,1)' }}>
                      <div style={{ paddingBottom: 36, paddingLeft: 70 }}>
                        <div style={{ borderRadius: 18, overflow: 'hidden', marginBottom: 24, boxShadow: '0 12px 32px -12px rgba(28,23,16,.25)' }}>
                          <img src={`${day.img}?auto=compress&cs=tinysrgb&w=900`} alt={day.title} loading="lazy" style={{ width: '100%', height: 300, objectFit: 'cover', display: 'block' }} />
                        </div>
                        <p style={{ fontSize: 15, color: MID, lineHeight: 1.85, fontFamily: 'Arial,sans-serif', fontWeight: 400, margin: '0 0 20px' }}>
                          {day.text}
                        </p>
                        {day.accommodation && (
                          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: CREAM, border: `1px solid ${SAND}`, borderRadius: 100, padding: '10px 18px' }}>
                            <Hotel size={13} color={TERRA} />
                            <span style={{ fontSize: 12, color: MID, fontFamily: 'Arial,sans-serif', fontWeight: 500 }}>{day.accommodation}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="price-col" style={{ position: 'sticky', top: 24 }}>
            <PriceCalculator people={people} setPeople={setPeople} />
          </div>
        </div>
      </section>

      {/* ─── CALENDARIO DE SALIDAS ─── */}
      <section style={{ background: CREAM, padding: '100px 24px' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <Reveal>
            <div style={{ textAlign: 'center', marginBottom: 48 }}>
              <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '.28em', textTransform: 'uppercase', color: TERRA, fontFamily: 'Arial,sans-serif', marginBottom: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12 }}>
                <span style={{ width: 24, height: 1, background: TERRA, display: 'block' }} /> Próximas salidas <span style={{ width: 24, height: 1, background: TERRA, display: 'block' }} />
              </p>
              <h2 style={{ fontFamily: "'Georgia',serif", fontSize: 'clamp(28px,4vw,44px)', fontWeight: 300, color: INK, lineHeight: 1.05, letterSpacing: '-.01em', marginBottom: 16 }}>
                Elige <em style={{ color: TERRA }}>tu fecha</em>
              </h2>
              <p style={{ fontSize: 14, color: SOFT, fontFamily: 'Arial,sans-serif', lineHeight: 1.6, maxWidth: 480, margin: '0 auto' }}>
                Salidas garantizadas cada pocas semanas. ¿Tu fecha no está? Consúltanos y organizamos una a tu medida.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 14 }}>
              {departures.map((d, i) => {
                const disabled = d.status === 'full';
                const active = selectedDeparture === i;
                const statusMap = {
                  available: { label: 'Disponible', color: '#22A76C' },
                  few: { label: 'Últimas plazas', color: GOLD },
                  full: { label: 'Completo', color: SOFT },
                };
                const s = statusMap[d.status];
                return (
                  <button
                    key={i}
                    className="dep-card"
                    data-disabled={disabled}
                    onClick={() => !disabled && setSelectedDeparture(active ? null : i)}
                    style={{
                      background: active ? `linear-gradient(155deg, ${TERRA}, ${TERRA_DARK})` : 'white',
                      border: `1.5px solid ${active ? TERRA : SAND}`,
                      borderRadius: 16,
                      padding: '18px 16px',
                      textAlign: 'center',
                      cursor: disabled ? 'not-allowed' : 'pointer',
                      opacity: disabled ? .45 : 1,
                      fontFamily: 'Arial,sans-serif',
                    }}
                  >
                    <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase', color: active ? 'rgba(255,255,255,.7)' : SOFT, marginBottom: 6 }}>
                      {d.monthLabel} {d.year}
                    </div>
                    <div style={{ fontFamily: "'Georgia',serif", fontSize: 36, fontWeight: 300, color: active ? 'white' : INK, lineHeight: 1, marginBottom: 10 }}>
                      {d.day}
                    </div>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: 10, fontWeight: 600, color: active ? 'white' : s.color, background: active ? 'rgba(255,255,255,.15)' : `${s.color}15`, padding: '3px 8px', borderRadius: 100 }}>
                      <span style={{ width: 5, height: 5, borderRadius: '50%', background: active ? 'white' : s.color }} />
                      {s.label}
                    </div>
                  </button>
                );
              })}
            </div>
          </Reveal>

          {selectedDeparture !== null && (
            <div style={{ marginTop: 32, padding: '20px 24px', background: 'white', borderRadius: 16, border: `1.5px solid ${TERRA}30`, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16, animation: 'fadeInUp .4s ease' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <Calendar size={20} color={TERRA} />
                <div>
                  <div style={{ fontSize: 11, color: SOFT, fontFamily: 'Arial,sans-serif', letterSpacing: '.08em', textTransform: 'uppercase' }}>Fecha seleccionada</div>
                  <div style={{ fontFamily: "'Georgia',serif", fontSize: 18, color: INK, fontWeight: 500 }}>
                    {departures[selectedDeparture].day} de {departures[selectedDeparture].monthLabel} {departures[selectedDeparture].year}
                  </div>
                </div>
              </div>
              <button
                onClick={() => wa(`${WA_MSG_RUTA} Me interesa la salida del ${departures[selectedDeparture].day} de ${departures[selectedDeparture].monthLabel}, para ${people} personas (${price * people}€ total).`)}
                className="btn-terra"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: TERRA, color: 'white', border: 'none', borderRadius: 100, padding: '12px 22px', fontSize: 11, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', cursor: 'pointer', fontFamily: 'Arial,sans-serif' }}
              >
                <MessageCircle size={14} /> Reservar esta fecha
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ─── SERVICIOS ─── */}
      <section style={{ background: 'white', padding: '100px 24px' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <Reveal>
            <div style={{ marginBottom: 48, textAlign: 'center' }}>
              <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '.28em', textTransform: 'uppercase', color: TERRA, fontFamily: 'Arial,sans-serif', display: 'inline-flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                <span style={{ width: 24, height: 1, background: TERRA, display: 'block' }} /> Lo que incluye <span style={{ width: 24, height: 1, background: TERRA, display: 'block' }} />
              </p>
              <h2 style={{ fontFamily: "'Georgia',serif", fontSize: 'clamp(28px,4vw,44px)', fontWeight: 300, color: INK, lineHeight: 1.05, letterSpacing: '-.01em' }}>
                Tu viaje, <em style={{ color: TERRA }}>sin sorpresas</em>
              </h2>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: 28 }}>
              <div style={{ background: `linear-gradient(155deg, ${CREAM} 0%, white 100%)`, borderRadius: 24, padding: '36px 32px', border: `1px solid ${SAND}`, boxShadow: '0 4px 16px -8px rgba(28,23,16,.08)' }}>
                <h3 style={{ fontFamily: "'Georgia',serif", fontSize: 22, fontWeight: 500, color: INK, marginBottom: 28, display: 'flex', alignItems: 'center', gap: 12 }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 34, height: 34, borderRadius: '50%', background: `linear-gradient(135deg, ${TERRA}, ${TERRA_DARK})`, boxShadow: `0 6px 16px ${TERRA}40` }}>
                    <Check size={16} color="white" strokeWidth={3} />
                  </span>
                  Incluye
                </h3>
                <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
                  {included.map(item => (
                    <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                      <span style={{ flexShrink: 0, marginTop: 2, width: 18, height: 18, borderRadius: '50%', background: `${TERRA}15`, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Check size={11} color={TERRA} strokeWidth={3} />
                      </span>
                      <span style={{ fontSize: 14.5, color: MID, fontFamily: 'Arial,sans-serif', lineHeight: 1.5 }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ background: 'white', borderRadius: 24, padding: '36px 32px', border: `1px solid ${SAND}` }}>
                <h3 style={{ fontFamily: "'Georgia',serif", fontSize: 22, fontWeight: 500, color: INK, marginBottom: 28, display: 'flex', alignItems: 'center', gap: 12 }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 34, height: 34, borderRadius: '50%', background: SAND }}>
                    <X size={16} color={SOFT} strokeWidth={2.5} />
                  </span>
                  No incluido
                </h3>
                <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
                  {notIncluded.map(item => (
                    <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                      <span style={{ flexShrink: 0, marginTop: 2, width: 18, height: 18, borderRadius: '50%', background: `${SOFT}15`, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                        <X size={11} color={SOFT} strokeWidth={2.5} />
                      </span>
                      <span style={{ fontSize: 14.5, color: SOFT, fontFamily: 'Arial,sans-serif', lineHeight: 1.5 }}>{item}</span>
                    </li>
                  ))}
                </ul>
                <div style={{ marginTop: 28, padding: '16px 20px', background: CREAM, borderRadius: 12, border: `1px solid ${SAND}` }}>
                  <p style={{ fontSize: 12.5, color: MID, fontFamily: 'Arial,sans-serif', lineHeight: 1.6, margin: 0 }}>
                    <strong>Precio adaptable:</strong> descuento progresivo al aumentar el grupo. Usa la calculadora arriba para ver tu precio exacto.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── TESTIMONIOS ─── */}
      <section style={{ background: `linear-gradient(180deg, ${CREAM} 0%, ${SAND}40 100%)`, padding: '100px 24px' }}>
        <div style={{ maxWidth: 880, margin: '0 auto', textAlign: 'center' }}>
          <Reveal>
            <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '.28em', textTransform: 'uppercase', color: TERRA, fontFamily: 'Arial,sans-serif', display: 'inline-flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <span style={{ width: 24, height: 1, background: TERRA }} /> Lo que dicen <span style={{ width: 24, height: 1, background: TERRA }} />
            </p>
            <h2 style={{ fontFamily: "'Georgia',serif", fontSize: 'clamp(28px,4vw,44px)', fontWeight: 300, color: INK, lineHeight: 1.05, marginBottom: 48, letterSpacing: '-.01em' }}>
              Viajeros que lo han <em style={{ color: TERRA }}>vivido</em>
            </h2>
          </Reveal>

          <Reveal delay={100}>
            <div style={{ position: 'relative', minHeight: 320 }}>
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  style={{
                    position: i === testimonialIdx ? 'relative' : 'absolute',
                    inset: 0,
                    opacity: i === testimonialIdx ? 1 : 0,
                    transform: i === testimonialIdx ? 'translateY(0)' : 'translateY(20px)',
                    transition: 'all .6s cubic-bezier(.2,.8,.2,1)',
                    pointerEvents: i === testimonialIdx ? 'auto' : 'none',
                    background: 'white',
                    borderRadius: 24,
                    padding: 'clamp(32px,5vw,56px)',
                    boxShadow: '0 20px 50px -20px rgba(28,23,16,.12)',
                    border: `1px solid ${SAND}`,
                  }}
                >
                  <Quote size={32} color={GOLD} style={{ marginBottom: 20, opacity: .7 }} />
                  <p style={{ fontFamily: "'Georgia',serif", fontSize: 'clamp(18px,2.2vw,24px)', fontWeight: 300, color: INK, lineHeight: 1.55, fontStyle: 'italic', margin: 0, marginBottom: 28, letterSpacing: '-.005em' }}>
                    "{t.text}"
                  </p>
                  <div style={{ display: 'flex', justifyContent: 'center', gap: 2, marginBottom: 16 }}>
                    {[...Array(t.rating)].map((_, idx) => (
                      <Star key={idx} size={14} fill={GOLD} color={GOLD} />
                    ))}
                  </div>
                  <div style={{ fontFamily: 'Arial,sans-serif' }}>
                    <div style={{ fontSize: 14, fontWeight: 600, color: INK }}>{t.name}</div>
                    <div style={{ fontSize: 12, color: SOFT, marginTop: 3 }}>{t.origin} · {t.date}</div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 28 }}>
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setTestimonialIdx(i)}
                  aria-label={`Ver testimonio ${i + 1}`}
                  style={{
                    width: i === testimonialIdx ? 24 : 8,
                    height: 8,
                    borderRadius: 100,
                    background: i === testimonialIdx ? TERRA : SAND_DARK,
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all .35s ease',
                    padding: 0,
                  }}
                />
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section style={{ background: 'white', padding: '100px 24px' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <Reveal>
            <div style={{ textAlign: 'center', marginBottom: 48 }}>
              <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '.28em', textTransform: 'uppercase', color: TERRA, fontFamily: 'Arial,sans-serif', display: 'inline-flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                <span style={{ width: 24, height: 1, background: TERRA }} /> Preguntas frecuentes <span style={{ width: 24, height: 1, background: TERRA }} />
              </p>
              <h2 style={{ fontFamily: "'Georgia',serif", fontSize: 'clamp(28px,4vw,44px)', fontWeight: 300, color: INK, lineHeight: 1.05, letterSpacing: '-.01em' }}>
                Todo lo que <em style={{ color: TERRA }}>necesitas saber</em>
              </h2>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {faqs.map((f, i) => {
                const open = openFaq === i;
                return (
                  <div key={i} style={{ background: open ? CREAM : 'white', border: `1px solid ${open ? TERRA + '30' : SAND}`, borderRadius: 16, transition: 'all .3s ease', overflow: 'hidden' }}>
                    <button
                      onClick={() => setOpenFaq(open ? null : i)}
                      aria-expanded={open}
                      style={{ width: '100%', background: 'none', border: 'none', cursor: 'pointer', padding: '22px 26px', display: 'flex', alignItems: 'center', gap: 16, textAlign: 'left' }}
                    >
                      <span style={{ flex: 1, fontFamily: "'Georgia',serif", fontSize: 17, fontWeight: open ? 500 : 400, color: INK, lineHeight: 1.4 }}>
                        {f.q}
                      </span>
                      <span style={{ flexShrink: 0, width: 28, height: 28, borderRadius: '50%', background: open ? TERRA : 'transparent', border: `1.5px solid ${open ? TERRA : SAND}`, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all .25s ease' }}>
                        {open ? <Minus size={13} color="white" strokeWidth={3} /> : <Plus size={13} color={TERRA} strokeWidth={3} />}
                      </span>
                    </button>
                    <div style={{ maxHeight: open ? 300 : 0, overflow: 'hidden', transition: 'max-height .4s cubic-bezier(.2,.8,.2,1)' }}>
                      <div style={{ padding: '0 26px 24px 26px' }}>
                        <p style={{ fontSize: 14.5, color: MID, lineHeight: 1.75, fontFamily: 'Arial,sans-serif', margin: 0 }}>
                          {f.a}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── CTA FINAL ─── */}
      <section style={{ background: INK, padding: '120px 24px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 800, height: 400, background: `radial-gradient(ellipse, ${TERRA}30 0%, transparent 70%)`, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: '20%', right: '10%', width: 200, height: 200, background: `radial-gradient(circle, ${GOLD}15 0%, transparent 70%)`, pointerEvents: 'none' }} />

        <Reveal>
          <div style={{ maxWidth: 640, margin: '0 auto', position: 'relative' }}>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 3, marginBottom: 24 }}>
              {[...Array(5)].map((_, i) => <Star key={i} size={16} fill={GOLD} color={GOLD} />)}
            </div>
            <h2 style={{ fontFamily: "'Georgia',serif", fontSize: 'clamp(32px,5.5vw,60px)', fontWeight: 300, color: 'white', lineHeight: 1.02, marginBottom: 24, letterSpacing: '-.015em' }}>
              ¿Listo para vivir el<br />
              <em style={{ background: `linear-gradient(135deg, ${GOLD_SOFT}, ${GOLD})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Sahara de verdad?</em>
            </h2>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,.65)', lineHeight: 1.85, maxWidth: 480, margin: '0 auto 16px', fontFamily: 'Arial,sans-serif', fontWeight: 300 }}>
              Escríbenos por WhatsApp y te cuento todo sobre esta ruta. Te respondo personalmente, sin compromiso.
            </p>
            <p style={{ fontFamily: "'Georgia',serif", fontSize: 22, color: GOLD_SOFT, fontStyle: 'italic', marginBottom: 40 }}>
              Desde {price}€/persona para {people} {people === 1 ? 'viajero' : 'viajeros'}
            </p>
            <button
              onClick={() => wa(WA_MSG_RUTA)}
              className="hover-lift"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 12, background: WHATSAPP, color: 'white', border: 'none', borderRadius: 100, padding: '22px 44px', fontSize: 14, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', fontFamily: 'Arial,sans-serif', cursor: 'pointer', boxShadow: '0 10px 40px rgba(37,211,102,.35)' }}
            >
              <MessageCircle size={18} /> Consultar por WhatsApp
            </button>
            <p style={{ fontSize: 11, color: 'rgba(255,255,255,.4)', marginTop: 22, fontFamily: 'Arial,sans-serif', letterSpacing: '.1em', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
              <Shield size={11} /> Respuesta en menos de 24h · Sin compromiso
            </p>
          </div>
        </Reveal>
      </section>

      {/* ─── STICKY CTA MOBILE ─── */}
      <div
        className="sticky-cta-mobile"
        style={{
          position: 'fixed',
          bottom: 0, left: 0, right: 0,
          zIndex: 50,
          background: 'rgba(28,23,16,.96)',
          backdropFilter: 'blur(16px)',
          borderTop: `1px solid rgba(255,255,255,.08)`,
          padding: '12px 16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 12,
          transform: showStickyCTA ? 'translateY(0)' : 'translateY(100%)',
          transition: 'transform .4s cubic-bezier(.2,.8,.2,1)',
          boxShadow: '0 -10px 30px rgba(0,0,0,.3)',
        }}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 4 }}>
            <span style={{ fontFamily: "'Georgia',serif", fontSize: 22, fontWeight: 400, color: 'white' }}>{price}€</span>
            <span style={{ fontFamily: 'Arial,sans-serif', fontSize: 11, color: 'rgba(255,255,255,.5)' }}>/pers</span>
          </div>
          <div style={{ fontSize: 10, color: GOLD_SOFT, fontFamily: 'Arial,sans-serif', letterSpacing: '.08em' }}>
            7 días · Privado · {people}pax
          </div>
        </div>
        <button
          onClick={() => wa(WA_MSG_RUTA)}
          style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: WHATSAPP, color: 'white', border: 'none', borderRadius: 100, padding: '12px 22px', fontSize: 12, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', fontFamily: 'Arial,sans-serif', cursor: 'pointer', boxShadow: '0 6px 16px rgba(37,211,102,.4)' }}
        >
          <MessageCircle size={14} /> Consultar
        </button>
      </div>
    </>
  );
}
