import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { MessageCircle, ChevronRight, ChevronDown, ChevronUp, Check, X } from 'lucide-react';

// ─── CONFIG CENTRAL ───────────────────────────────────────────────────────────
const WA_NUMBER = '34660611668';
const waLink = (msg: string) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
const wa = (msg: string) => window.open(waLink(msg), '_blank');

const WA_MSG_RUTA =
  'Hola Antonio! Me interesa la ruta Marrakech al Desierto de 7 días. ¿Puedes darme más información?';

// ─── TOKENS DE DISEÑO ─────────────────────────────────────────────────────────
const TERRA = '#C25430';
const GOLD  = '#D4A838';
const CREAM = '#FAF4EA';
const SAND  = '#E8DAC8';
const INK   = '#1C1710';
const MID   = '#4A4235';
const SOFT  = '#8A7F70';

// ─── DATOS ────────────────────────────────────────────────────────────────────
const days = [
  {
    n: 1,
    title: 'Llegada a Marrakech y primer contacto con la ciudad',
    text: 'Recogida en el Aeropuerto de Marrakech y traslado al Riad. Tarde libre para tomar un primer contacto con la famosa plaza Jemaa El Fna, el corazón de la medina. Durante el día podréis observar desde domadores de monos hasta encantadores de serpientes, puestos de zumo de naranja, especias y caracoles. Al caer la noche la plaza cambia totalmente: desaparecen los tenderetes y se llena de puestos de comida, músicos improvisados y una gran diversidad de espectáculos.',
    accommodation: 'Riad en Marrakech con desayuno',
    img: 'https://images.pexels.com/photos/13811605/pexels-photo-13811605.jpeg',
  },
  {
    n: 2,
    title: 'Alto Atlas · Ait Ben Haddou · Ouarzazate · Valle de Dades',
    text: "Después del desayuno salimos hacia el Valle de Dades cruzando el Gran Atlas por el puerto de Tizi N'Tichka (2.260m), el paso de carreteras más alto del norte de África, salpicado de pintorescos pueblos bereberes. Llegada a la kasbah de Ait Ben Haddou, pueblo fortificado de más de 800 años de historia, escenario de películas como Gladiator y Lawrence de Arabia. Continuamos hacia Ouarzazate, la gran puerta del desierto. Parada para almorzar y visita a una cooperativa de mujeres en el Valle de las Rosas. Seguimos por la Garganta de Dades hasta llegar al Valle.",
    accommodation: 'Valle de Dades con cena y desayuno',
    img: 'https://images.pexels.com/photos/5541277/pexels-photo-5541277.jpeg',
  },
  {
    n: 3,
    title: 'Garganta de Dades · Todra · Erfoud · Merzouga',
    text: 'Desde el Valle de Dades nos dirigimos al Sahara por la ruta de las Mil Kasbahs hasta las Gargantas del Todra, uno de los cañones más espectaculares del mundo con paredes de más de 200m. Continuamos por Erfoud hacia el desierto de Merzouga. Tras el almuerzo, los dromedarios nos adentran en el desierto de dunas para contemplar una puesta de sol inolvidable. Esta noche dormiremos en las dunas en un campamento de lujo en Jaimas, con cena, música en vivo alrededor del fuego y el cielo estrellado más impresionante que hayas visto.',
    accommodation: 'Campamento de lujo en el Sahara con cena y desayuno',
    img: 'https://images.pexels.com/photos/23551283/pexels-photo-23551283.jpeg',
  },
  {
    n: 4,
    title: "Merzouga · Rissani · N'Kob · Ouarzazate",
    text: 'Nos despertamos antes del amanecer para contemplar la salida del sol desde las dunas. Desayuno y salida hacia Rissani, antigua capital del Tafilalt y ciudad santa, cuna de la dinastía alauita. Visitamos su mercado, el más importante y grande del sur de Marruecos. Continuamos hacia el hermoso Valle del Draa con sus millones de palmeras. Por la tarde llegada a Ouarzazate, conocida como "la puerta del desierto", destino cada vez más popular por su paisaje y su industria cinematográfica.',
    accommodation: 'Ouarzazate con cena y desayuno',
    img: 'https://images.pexels.com/photos/25255087/pexels-photo-25255087.jpeg',
  },
  {
    n: 5,
    title: 'Regreso a Marrakech por el Alto Atlas',
    text: "Tras el desayuno, regresamos a Marrakech atravesando el puerto Tizi N'Tichka del Alto Atlas. Durante el trayecto descubriremos sorprendentes paisajes y pueblos bereberes con sus casas construidas de forma caótica, superponiéndose unas con otras y colgando de las laderas de la montaña. Al atardecer, llegada a Marrakech.",
    accommodation: 'Riad en Marrakech con desayuno',
    img: 'https://images.pexels.com/photos/30227634/pexels-photo-30227634.jpeg',
  },
  {
    n: 6,
    title: 'Marrakech con guía local',
    text: 'Tras el descanso y un buen desayuno, visita de Marrakech de la mano de un guía local. Ciudad fundada por los Almorávides en el siglo XI. Entre sus tesoros: el Minarete de la Koutoubia, símbolo de la ciudad y joya del arte almohade; las Tumbas Saadíes del siglo XVI; el Palacio de la Bahía del siglo XIX; los Jardines de Menara; la Medina con su laberinto de calles plagadas de tiendas; y la famosa plaza de Jemaá el Fná, que hay que visitar a diferentes horas del día porque cambia completamente entre el día y la noche. Tarde libre para perderse por las callejuelas de la medina.',
    accommodation: 'Riad en La Medina de Marrakech con desayuno',
    img: 'https://images.pexels.com/photos/4502972/pexels-photo-4502972.jpeg',
  },
  {
    n: 7,
    title: 'Hasta pronto',
    text: 'Un exquisito desayuno y tiempo libre hasta el traslado programado al aeropuerto de Marrakech. Con esto concluimos nuestros servicios. Agradecemos sinceramente la confianza depositada en nosotros y os deseamos un maravilloso viaje de regreso.',
    accommodation: null,
    img: 'https://images.pexels.com/photos/30710162/pexels-photo-30710162.jpeg',
  },
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

const notIncluded = [
  'Vuelos',
  'Bebidas',
  'Almuerzo de mediodía',
  'Comida en ciudades',
  'Entradas a monumentos',
  'Propinas',
];

// ─── COMPONENTE MAPA ESTÁTICO ─────────────────────────────────────────────────
const StaticRouteMap = () => (
  <div style={{ background: CREAM, borderRadius: 16, border: `1px solid ${SAND}`, overflow: 'hidden', marginBottom: 48 }}>
    <div style={{ padding: '18px 24px', borderBottom: `1px solid ${SAND}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <div>
        <p style={{ fontFamily: "'Georgia',serif", fontSize: 20, fontStyle: 'italic', color: INK }}>Recorrido de la ruta</p>
        <p style={{ fontFamily: 'Arial,sans-serif', fontSize: 10, fontWeight: 600, letterSpacing: '.18em', textTransform: 'uppercase', color: TERRA, marginTop: 3 }}>
          Marrakech → Sahara → Marrakech
        </p>
      </div>
      <span style={{ fontFamily: 'Arial,sans-serif', fontSize: 10, fontWeight: 600, letterSpacing: '.12em', textTransform: 'uppercase', background: TERRA, color: 'white', padding: '5px 14px', borderRadius: 100 }}>
        7 días · ~1.400 km
      </span>
    </div>

    {/* Mapa SVG inline */}
    <div style={{ position: 'relative', height: 360, background: '#EDE8E0' }}>
      <svg
        viewBox="0 0 960 360"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', height: '100%' }}
        aria-label="Mapa esquemático de la ruta"
      >
        {/* Fondo tierra */}
        <rect width="960" height="360" fill="#EDE8E0" />
        {/* Textura sutil */}
        <rect width="960" height="360" fill="url(#grain)" opacity=".3" />
        <defs>
          <pattern id="grain" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r=".5" fill="#C4B89A" opacity=".5"/>
          </pattern>
        </defs>

        {/* Silueta aproximada de Marruecos */}
        <path
          d="M180,60 L320,40 L480,55 L600,80 L720,70 L820,110 L860,180 L840,260 L760,310 L640,330 L520,320 L380,340 L260,320 L160,280 L120,200 L130,130 Z"
          fill="#D4C9B0" stroke="#C4B89A" strokeWidth="1.5" opacity=".6"
        />

        {/* Línea de ruta */}
        <polyline
          points="212,140 365,212 690,195 403,232 288,168 212,140"
          fill="none"
          stroke={TERRA}
          strokeWidth="2.5"
          strokeDasharray="8,5"
          opacity=".85"
        />

        {/* Paradas */}
        {[
          { n:1, label:'Marrakech',      cx:212, cy:140 },
          { n:2, label:'Ait Ben Haddou', cx:365, cy:212 },
          { n:3, label:'Merzouga',       cx:690, cy:195 },
          { n:4, label:'Ouarzazate',     cx:403, cy:232 },
          { n:5, label:'Alto Atlas',     cx:288, cy:168 },
        ].map(s => (
          <g key={s.n}>
            <circle cx={s.cx} cy={s.cy} r="18" fill="white" stroke={TERRA} strokeWidth="2"/>
            <text x={s.cx} y={s.cy + 5} textAnchor="middle" fontFamily="Georgia,serif" fontSize="13" fontWeight="600" fill={TERRA}>{s.n}</text>
            <text x={s.cx} y={s.cy + 30} textAnchor="middle" fontFamily="Arial,sans-serif" fontSize="9.5" fontWeight="500" fill={INK} opacity=".8">{s.label}</text>
          </g>
        ))}

        {/* Leyenda */}
        <text x="24" y="344" fontFamily="Arial,sans-serif" fontSize="9" fill={SOFT} letterSpacing=".1em">ESQUEMA ORIENTATIVO DE RUTA</text>
      </svg>
    </div>

    {/* Paradas en lista horizontal */}
    <div style={{ display: 'flex', overflowX: 'auto', gap: 0, borderTop: `1px solid ${SAND}`, background: 'white' }}>
      {days.slice(0, 6).map((d, i) => (
        <div key={i} style={{ flexShrink: 0, padding: '14px 18px', borderRight: `1px solid ${SAND}`, minWidth: 140 }}>
          <div style={{ fontFamily: "'Georgia',serif", fontSize: 18, color: TERRA, lineHeight: 1 }}>{d.n}</div>
          <div style={{ fontFamily: 'Arial,sans-serif', fontSize: 11, fontWeight: 500, color: INK, marginTop: 4, lineHeight: 1.3 }}>
            {d.title.split('·')[0].split(' ').slice(0, 3).join(' ')}
          </div>
        </div>
      ))}
    </div>
  </div>
);

// ─── COMPONENTE PRECIO ────────────────────────────────────────────────────────
const PriceBlock = () => (
  <div style={{
    background: INK,
    borderRadius: 20,
    padding: '32px 28px',
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
  }}>
    <div>
      <p style={{ fontFamily: 'Arial,sans-serif', fontSize: 10, fontWeight: 600, letterSpacing: '.2em', textTransform: 'uppercase', color: GOLD, marginBottom: 8 }}>
        Precio orientativo
      </p>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
        <span style={{ fontFamily: "'Georgia',serif", fontSize: 48, fontWeight: 300, color: 'white', lineHeight: 1 }}>890€</span>
        <span style={{ fontFamily: 'Arial,sans-serif', fontSize: 13, color: 'rgba(255,255,255,.5)' }}>/persona</span>
      </div>
      <p style={{ fontFamily: 'Arial,sans-serif', fontSize: 11, color: 'rgba(255,255,255,.4)', marginTop: 8, lineHeight: 1.5 }}>
        Precio final según fechas, grupo y opciones. Consulta sin compromiso.
      </p>
    </div>
    <div style={{ height: 1, background: 'rgba(255,255,255,.08)' }} />
    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
      {['Tour privado — solo vuestro grupo', 'Guía en español todo el viaje', 'Alojamientos seleccionados', 'Flexibilidad de fechas'].map(item => (
        <li key={item} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <Check size={13} color={GOLD} />
          <span style={{ fontFamily: 'Arial,sans-serif', fontSize: 13, color: 'rgba(255,255,255,.7)' }}>{item}</span>
        </li>
      ))}
    </ul>
    <button
      onClick={() => wa(WA_MSG_RUTA)}
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, background: '#25D366', color: 'white', border: 'none', borderRadius: 100, padding: '16px 24px', fontSize: 13, fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase', fontFamily: 'Arial,sans-serif', cursor: 'pointer', boxShadow: '0 6px 24px rgba(37,211,102,.3)' }}>
      <MessageCircle size={16} /> Consultar precio exacto
    </button>
    <p style={{ fontFamily: 'Arial,sans-serif', fontSize: 10, color: 'rgba(255,255,255,.25)', textAlign: 'center', letterSpacing: '.08em' }}>
      Respuesta en menos de 24h · Sin compromiso
    </p>
  </div>
);

// ─── PÁGINA PRINCIPAL ─────────────────────────────────────────────────────────
export default function MarrakechDesiertoPage() {
  const [openDay, setOpenDay] = useState<number | null>(0);

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    name: 'Marrakech al Desierto — 7 días',
    description:
      'Ruta privada de 7 días desde Marrakech al Sahara. Ait Ben Haddou, Gargantas del Todra, desierto de Merzouga. Tour privado con guía en español.',
    touristType: ['Cultural', 'Adventure', 'Nature'],
    offers: {
      '@type': 'Offer',
      priceCurrency: 'EUR',
      price: '890',
      availability: 'https://schema.org/InStock',
    },
    provider: {
      '@type': 'TravelAgency',
      name: 'Viaja Mejor',
      url: 'https://viajamejor.net',
    },
    itinerary: days.map(d => ({
      '@type': 'TouristAttraction',
      name: d.title,
    })),
  };

  return (
    <>
      <Helmet>
        <title>Marrakech al Desierto — 7 días · Tour privado en español · Viaja Mejor</title>
        <meta
          name="description"
          content="Ruta organizada de 7 días desde Marrakech al Sahara. Ait Ben Haddou, Gargantas del Todra, desierto de Merzouga y Alto Atlas. Tour privado con guía en español. Desde 890€/persona."
        />
        <meta property="og:title" content="Marrakech al Desierto — 7 días · Viaja Mejor" />
        <meta property="og:description" content="Tour privado con guía en español. Sahara, kasbahs y el Alto Atlas. Desde 890€/persona." />
        <meta property="og:image" content="https://images.pexels.com/photos/3889843/pexels-photo-3889843.jpeg" />
        <link rel="canonical" href="https://viajamejor.net/marruecos/marrakech-al-desierto" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      {/* ─── HERO ─── */}
      <section style={{ position: 'relative', height: '100vh', minHeight: 640, overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
        <img
          src="https://images.pexels.com/photos/3889843/pexels-photo-3889843.jpeg"
          alt="Dunas del Sahara al atardecer — Ruta Marrakech al Desierto"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', animation: 'heroZoom 14s ease-out forwards' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top,rgba(26,22,18,.8) 0%,rgba(26,22,18,.25) 50%,rgba(26,22,18,.1) 100%), linear-gradient(to right,rgba(26,22,18,.6) 0%,transparent 65%)' }} />

        <div style={{ position: 'relative', zIndex: 2, maxWidth: 700, padding: '0 24px', marginLeft: 'clamp(20px,5vw,80px)' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: TERRA, color: 'white', borderRadius: 100, padding: '6px 16px', fontSize: 10, fontWeight: 600, letterSpacing: '.18em', textTransform: 'uppercase', fontFamily: 'Arial,sans-serif', marginBottom: 28 }}>
            Ruta especial
          </div>
          <h1 style={{ fontFamily: "'Georgia',serif", fontSize: 'clamp(44px,7.5vw,88px)', fontWeight: 300, lineHeight: .96, color: 'white', marginBottom: 20, letterSpacing: '-.015em', fontStyle: 'italic' }}>
            Marrakech<br />al Desierto
          </h1>
          <p style={{ fontSize: 15, fontWeight: 400, color: 'rgba(248,241,228,.75)', letterSpacing: '.1em', textTransform: 'uppercase', fontFamily: 'Arial,sans-serif', marginBottom: 16 }}>
            7 días · Tour privado de confort
          </p>
          {/* Precio visible en hero */}
          <p style={{ fontFamily: "'Georgia',serif", fontSize: 'clamp(18px,2vw,22px)', color: GOLD, marginBottom: 36, fontStyle: 'italic' }}>
            Desde 890€ <span style={{ fontSize: 14, color: 'rgba(248,241,228,.5)', fontStyle: 'normal', fontFamily: 'Arial,sans-serif' }}>/ persona</span>
          </p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center' }}>
            <button
              onClick={() => wa(WA_MSG_RUTA)}
              style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: TERRA, color: 'white', border: 'none', borderRadius: 100, padding: '16px 32px', fontSize: 12, fontWeight: 600, letterSpacing: '.14em', textTransform: 'uppercase', cursor: 'pointer', fontFamily: 'Arial,sans-serif', boxShadow: '0 6px 24px rgba(194,84,48,.4)' }}
            >
              <MessageCircle size={15} /> Consultar por WhatsApp
            </button>
            <a href="#itinerario" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'rgba(248,241,228,.75)', fontSize: 12, fontWeight: 400, letterSpacing: '.12em', textTransform: 'uppercase', textDecoration: 'none', fontFamily: 'Arial,sans-serif' }}>
              Ver itinerario <ChevronRight size={14} />
            </a>
          </div>
        </div>

        {/* Trust bar */}
        <div style={{ position: 'absolute', bottom: 32, left: 0, right: 0, zIndex: 2, display: 'flex', justifyContent: 'center', gap: 'clamp(20px,4vw,48px)', flexWrap: 'wrap', padding: '0 24px' }}>
          {[['7', 'Días'], ['★ 5.0', 'TripAdvisor'], ['Privado', 'Tour'], ['Español', 'Guía'], ['Desde 890€', 'Por persona']].map(([v, l]) => (
            <div key={l} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: "'Georgia',serif", fontSize: 'clamp(16px,2vw,22px)', fontWeight: 500, color: 'white', lineHeight: 1 }}>{v}</div>
              <div style={{ fontSize: 9, color: 'rgba(248,241,228,.5)', letterSpacing: '.14em', textTransform: 'uppercase', marginTop: 4, fontFamily: 'Arial,sans-serif' }}>{l}</div>
            </div>
          ))}
        </div>
        <style>{`@keyframes heroZoom{from{transform:scale(1.08)}to{transform:scale(1.02)}}`}</style>
      </section>

      {/* ─── INTRODUCCIÓN ─── */}
      <section style={{ background: 'white', padding: '80px 24px' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: '.28em', textTransform: 'uppercase', color: TERRA, fontFamily: 'Arial,sans-serif', display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
            <span style={{ width: 24, height: 1, background: TERRA, display: 'block' }} /> El viaje
          </p>
          <p style={{ fontFamily: "'Georgia',serif", fontSize: 'clamp(18px,2.5vw,26px)', fontWeight: 300, color: INK, lineHeight: 1.65, marginBottom: 40 }}>
            Una ruta que atraviesa la columna vertebral de Marruecos: desde la bulliciosa medina de Marrakech hasta las dunas infinitas del Sahara, pasando por kasbahs milenarias, gargantas de roca roja y valles de palmeras.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            {['Marrakech', 'Ait Ben Haddou', 'Ouarzazate', 'Gargantas Todra', 'Merzouga · Sahara', 'Valle del Draa', 'Alto Atlas'].map(h => (
              <span key={h} style={{ background: CREAM, border: `1px solid ${SAND}`, color: MID, fontSize: 12, fontWeight: 500, padding: '7px 16px', borderRadius: 100, fontFamily: 'Arial,sans-serif' }}>{h}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ITINERARIO + PRECIO ─── */}
      <section id="itinerario" style={{ background: CREAM, padding: '80px 24px' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto', display: 'grid', gridTemplateColumns: 'minmax(0,1fr) 340px', gap: 48, alignItems: 'start' }}>

          {/* Columna izquierda — itinerario */}
          <div>
            <div style={{ marginBottom: 48 }}>
              <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: '.28em', textTransform: 'uppercase', color: TERRA, fontFamily: 'Arial,sans-serif', display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                <span style={{ width: 24, height: 1, background: TERRA, display: 'block' }} /> Día a día
              </p>
              <h2 style={{ fontFamily: "'Georgia',serif", fontSize: 'clamp(28px,4vw,48px)', fontWeight: 300, color: INK, lineHeight: 1.05 }}>
                Itinerario <em style={{ color: TERRA }}>completo</em>
              </h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {days.map((day, i) => {
                const open = openDay === i;
                return (
                  <div key={i} style={{ borderTop: `1px solid ${SAND}`, ...(i === days.length - 1 ? { borderBottom: `1px solid ${SAND}` } : {}) }}>
                    <button
                      onClick={() => setOpenDay(open ? null : i)}
                      style={{ width: '100%', background: 'none', border: 'none', cursor: 'pointer', padding: '24px 0', display: 'flex', alignItems: 'center', gap: 20, textAlign: 'left' }}
                    >
                      <div style={{ flexShrink: 0, width: 48, height: 48, borderRadius: '50%', background: open ? TERRA : CREAM, border: `1px solid ${open ? TERRA : SAND}`, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', transition: 'all .25s ease' }}>
                        <span style={{ fontSize: 8, fontFamily: 'Arial,sans-serif', fontWeight: 600, letterSpacing: '.08em', textTransform: 'uppercase', color: open ? 'rgba(255,255,255,.7)' : SOFT, lineHeight: 1 }}>DÍA</span>
                        <span style={{ fontFamily: "'Georgia',serif", fontSize: 18, fontWeight: 600, color: open ? 'white' : TERRA, lineHeight: 1 }}>{day.n}</span>
                      </div>
                      <h3 style={{ flex: 1, fontFamily: "'Georgia',serif", fontSize: 'clamp(15px,2vw,19px)', fontWeight: open ? 500 : 300, color: open ? INK : MID, margin: 0, lineHeight: 1.3, transition: 'all .25s ease' }}>
                        {day.title}
                      </h3>
                      <div style={{ flexShrink: 0 }}>
                        {open ? <ChevronUp size={18} color={TERRA} /> : <ChevronDown size={18} color={SOFT} />}
                      </div>
                    </button>

                    {open && (
                      <div style={{ paddingBottom: 32, paddingLeft: 68 }}>
                        <div style={{ borderRadius: 16, overflow: 'hidden', marginBottom: 24, maxHeight: 280 }}>
                          <img src={day.img} alt={day.title} loading="lazy" style={{ width: '100%', height: 280, objectFit: 'cover' }} />
                        </div>
                        <p style={{ fontSize: 15, color: MID, lineHeight: 1.85, fontFamily: 'Arial,sans-serif', fontWeight: 300, margin: '0 0 20px' }}>
                          {day.text}
                        </p>
                        {day.accommodation && (
                          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'white', border: `1px solid ${SAND}`, borderRadius: 100, padding: '8px 16px' }}>
                            <span style={{ fontSize: 10, color: TERRA }}>🏨</span>
                            <span style={{ fontSize: 12, color: MID, fontFamily: 'Arial,sans-serif', fontWeight: 500 }}>{day.accommodation}</span>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Columna derecha — precio sticky */}
          <div style={{ position: 'sticky', top: 24 }}>
            <PriceBlock />
          </div>
        </div>
      </section>

      {/* ─── MAPA ESTÁTICO ─── */}
      <section style={{ background: CREAM, padding: '0 24px 80px' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <StaticRouteMap />
        </div>
      </section>

      {/* ─── SERVICIOS ─── */}
      <section style={{ background: 'white', padding: '80px 24px' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <div style={{ marginBottom: 48 }}>
            <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: '.28em', textTransform: 'uppercase', color: TERRA, fontFamily: 'Arial,sans-serif', display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <span style={{ width: 24, height: 1, background: TERRA, display: 'block' }} /> Lo que incluye
            </p>
            <h2 style={{ fontFamily: "'Georgia',serif", fontSize: 'clamp(26px,3.5vw,44px)', fontWeight: 300, color: INK, lineHeight: 1.05 }}>
              Tu viaje, <em style={{ color: TERRA }}>sin sorpresas</em>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 32 }}>
            {/* Incluye */}
            <div style={{ background: CREAM, borderRadius: 20, padding: '32px 28px', border: `1px solid ${SAND}` }}>
              <h3 style={{ fontFamily: "'Georgia',serif", fontSize: 20, fontWeight: 500, color: INK, marginBottom: 24, display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 28, height: 28, borderRadius: '50%', background: TERRA }}>
                  <Check size={14} color="white" />
                </span>
                Incluye
              </h3>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
                {included.map(item => (
                  <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                    <span style={{ flexShrink: 0, marginTop: 3 }}><Check size={13} color={TERRA} /></span>
                    <span style={{ fontSize: 14, color: MID, fontFamily: 'Arial,sans-serif', lineHeight: 1.5 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* No incluido */}
            <div style={{ background: 'white', borderRadius: 20, padding: '32px 28px', border: `1px solid ${SAND}` }}>
              <h3 style={{ fontFamily: "'Georgia',serif", fontSize: 20, fontWeight: 500, color: INK, marginBottom: 24, display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 28, height: 28, borderRadius: '50%', background: SAND }}>
                  <X size={14} color={SOFT} />
                </span>
                No incluido
              </h3>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
                {notIncluded.map(item => (
                  <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                    <span style={{ flexShrink: 0, marginTop: 3 }}><X size={13} color={SOFT} /></span>
                    <span style={{ fontSize: 14, color: SOFT, fontFamily: 'Arial,sans-serif', lineHeight: 1.5 }}>{item}</span>
                  </li>
                ))}
              </ul>
              <div style={{ marginTop: 28, padding: '16px 20px', background: CREAM, borderRadius: 12, border: `1px solid ${SAND}` }}>
                <p style={{ fontSize: 12, color: MID, fontFamily: 'Arial,sans-serif', lineHeight: 1.6, margin: 0 }}>
                  Precio final según fechas, número de viajeros y opciones. Escríbenos y te preparamos un presupuesto personalizado.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA FINAL ─── */}
      <section style={{ background: INK, padding: '100px 24px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 700, height: 350, background: `radial-gradient(ellipse,rgba(194,84,48,.15) 0%,transparent 70%)`, pointerEvents: 'none' }} />
        <div style={{ maxWidth: 640, margin: '0 auto', position: 'relative' }}>
          <div style={{ fontSize: 13, letterSpacing: 3, color: GOLD, marginBottom: 24 }}>★★★★★</div>
          <h2 style={{ fontFamily: "'Georgia',serif", fontSize: 'clamp(30px,5vw,56px)', fontWeight: 300, color: 'white', lineHeight: 1.05, marginBottom: 20, letterSpacing: '-.01em' }}>
            ¿Listo para vivir el<br /><em style={{ color: '#F0D485' }}>Sahara de verdad?</em>
          </h2>
          <p style={{ fontSize: 15, color: 'rgba(248,241,228,.65)', lineHeight: 1.85, maxWidth: 480, margin: '0 auto 16px', fontFamily: 'Arial,sans-serif', fontWeight: 300 }}>
            Escríbeme por WhatsApp y te cuento todo sobre esta ruta. Te respondo personalmente, sin compromiso.
          </p>
          <p style={{ fontFamily: "'Georgia',serif", fontSize: 20, color: GOLD, fontStyle: 'italic', marginBottom: 40 }}>
            Desde 890€/persona · Tour privado
          </p>
          <button
            onClick={() => wa(WA_MSG_RUTA)}
            style={{ display: 'inline-flex', alignItems: 'center', gap: 12, background: '#25D366', color: 'white', border: 'none', borderRadius: 100, padding: '20px 40px', fontSize: 14, fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase', fontFamily: 'Arial,sans-serif', cursor: 'pointer', boxShadow: '0 8px 32px rgba(37,211,102,.3)' }}
          >
            <MessageCircle size={18} /> Consultar por WhatsApp
          </button>
          <p style={{ fontSize: 11, color: 'rgba(248,241,228,.35)', marginTop: 20, fontFamily: 'Arial,sans-serif', letterSpacing: '.08em' }}>
            Respuesta en menos de 24h · Sin compromiso
          </p>
        </div>
      </section>
    </>
  );
}
