import { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { MessageCircle, ChevronRight, ChevronDown, ChevronUp, Check, X } from 'lucide-react';
import 'leaflet/dist/leaflet.css';

const TERRA = '#C25430';
const GOLD  = '#D4A838';
const CREAM = '#FAF4EA';
const SAND  = '#E8DAC8';
const INK   = '#1C1710';
const MID   = '#4A4235';
const SOFT  = '#8A7F70';
const WA    = '34660611668';

const wa = (msg: string) =>
  window.open(`https://wa.me/${WA}?text=${encodeURIComponent(msg)}`, '_blank');

const RouteMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const markersRef = useRef<any[]>([]);
  const [activeDay, setActiveDay] = useState(0);

  const mapDays = [
    { num:1, name:'Llegada a Marrakech', places:'Aeropuerto · Riad · Jemaa El Fna', lodging:'Riad · desayuno incluido', detail:'Recogida en el aeropuerto y traslado al Riad. Tarde libre en la famosa plaza Jemaa El Fna: zocos, encantadores de serpientes, puestos de especias y música en vivo al caer la noche.', tags:['Traslado privado','Riad con alma','Jemaa El Fna'], lat:31.6295, lng:-7.9811, zoom:12 },
    { num:2, name:'Atlas → Ait Ben Haddou', places:"Tizi N'Tichka 2.260m · Ouarzazate · Dades", lodging:'Valle de Dades · cena y desayuno', detail:"Cruzamos el Gran Atlas por Tizi N'Tichka (2.260m). Visitamos la kasbah de Ait Ben Haddou, escenario de Gladiator. Continuamos a Ouarzazate y bajamos al Valle de Dades.", tags:["Tizi N'Tichka 2.260m",'Ait Ben Haddou','Ouarzazate'], lat:31.0478, lng:-7.1291, zoom:10 },
    { num:3, name:'Todra → Sahara', places:'Gargantas Todra · Erfoud · Merzouga', lodging:'Campamento lujo en dunas · cena y desayuno', detail:'Las Gargantas del Todra, cañón de más de 200m de altura. Continuamos a Merzouga: dromedarios al atardecer y noche en campamento de lujo bajo el cielo estrellado del Sahara.', tags:['Gargantas Todra 200m','Dromedarios','Campamento lujo'], lat:31.0998, lng:-4.0139, zoom:10, highlight:true },
    { num:4, name:'Rissani → Valle del Draa', places:'Amanecer dunas · Mercado Rissani · Ouarzazate', lodging:'Ouarzazate · cena y desayuno', detail:'Amanecer sobre las dunas. Visita al mercado de Rissani, el más grande del sur. Cruzamos el Valle del Draa con sus millones de palmeras. Llegada a Ouarzazate.', tags:['Amanecer sahara','Mercado Rissani','Valle del Draa'], lat:31.2803, lng:-5.5297, zoom:9 },
    { num:5, name:'Regreso a Marrakech', places:"Tizi N'Tichka · pueblos bereberes · atardecer", lodging:'Riad Marrakech · desayuno', detail:'Regresamos a Marrakech atravesando el Atlas. El trayecto desvela pueblos bereberes colgados de las laderas de la montaña, paisajes que no olvidarás fácilmente.', tags:['Alto Atlas','Pueblos bereberes','Atardecer'], lat:31.5671, lng:-7.4098, zoom:9 },
    { num:6, name:'Marrakech con guía local', places:'Koutoubia · Medina · Jemaa El Fna · Bahía', lodging:'Riad Medina · desayuno', detail:'Visita guiada: Minarete de la Koutoubia, Tumbas Saadíes, Palacio de la Bahía, Jardines de Menara y la Medina. Tarde libre para perderse por las callejuelas.', tags:['Koutoubia','Tumbas Saadíes','Palacio Bahía'], lat:31.6295, lng:-7.9811, zoom:13 },
    { num:7, name:'Traslado aeropuerto', places:'Desayuno · tiempo libre · ¡Hasta pronto!', lodging:'Fin del tour', detail:'Desayuno tranquilo y tiempo libre hasta el traslado al aeropuerto. Fin de los servicios. Marruecos de verdad, vivido desde dentro. ¡Hasta pronto!', tags:['Traslado aeropuerto','Fin del tour'], lat:31.6068, lng:-8.0363, zoom:12, isReturn:true },
  ];

  const routeCoords: [number, number][] = [
    [31.6295, -7.9811],
    [31.0478, -7.1291],
    [31.0998, -4.0139],
    [31.2803, -5.5297],
    [30.9200, -6.8935],
    [31.6295, -7.9811],
  ];

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;
    import('leaflet').then((L) => {
      const map = L.default.map(mapRef.current!, {
        center: [31.2, -6.5],
        zoom: 7,
        zoomControl: true,
        attributionControl: false,
      });

      L.default.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        subdomains: 'abcd',
        maxZoom: 19,
      }).addTo(map);

      L.default.polyline(routeCoords, {
        color: TERRA,
        weight: 3,
        opacity: 0.7,
        dashArray: '8, 6',
      }).addTo(map);

      mapDays.forEach((d, i) => {
        const size = d.highlight ? 38 : 32;
        const bg = d.isReturn ? GOLD : d.highlight ? TERRA : 'white';
        const color = d.isReturn || d.highlight ? 'white' : TERRA;
        const border = d.isReturn ? GOLD : TERRA;

        const icon = L.default.divIcon({
          html: `<div style="width:${size}px;height:${size}px;border-radius:50%;background:${bg};border:2.5px solid ${border};display:flex;align-items:center;justify-content:center;font-family:Georgia,serif;font-size:${d.highlight?15:13}px;font-weight:600;color:${color};box-shadow:0 3px 12px rgba(194,84,48,0.3);cursor:pointer;">${d.num}</div>`,
          className: '',
          iconSize: [size, size],
          iconAnchor: [size/2, size/2],
          popupAnchor: [0, -size/2-4],
        });

        const marker = L.default.marker([d.lat, d.lng], { icon }).addTo(map);
        marker.bindPopup(`<div style="padding:12px 14px;min-width:170px;font-family:Arial,sans-serif"><div style="font-size:10px;font-weight:600;letter-spacing:.16em;text-transform:uppercase;color:#C25430;margin-bottom:3px">Día ${d.num}</div><div style="font-family:Georgia,serif;font-size:15px;font-style:italic;color:#1C1710;margin-bottom:3px">${d.name}</div><div style="font-size:11px;color:#8A7F70">${d.places}</div></div>`, { className: '' });
        marker.on('click', () => setActiveDay(i));
        markersRef.current.push(marker);
      });

      map.fitBounds(L.default.latLngBounds(routeCoords), { padding: [40, 40] });
      mapInstanceRef.current = { map, L: L.default };
    });

    return () => {
      if (mapInstanceRef.current?.map) {
        mapInstanceRef.current.map.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (!mapInstanceRef.current) return;
    markersRef.current[activeDay]?.openPopup();
  }, [activeDay]);

  return (
    <div style={{ background:CREAM, borderRadius:16, border:`1px solid ${SAND}`, overflow:'hidden', marginBottom:48 }}>
      <div style={{ padding:'18px 24px', borderBottom:`1px solid ${SAND}`, display:'flex', alignItems:'center', justifyContent:'space-between', background:CREAM }}>
        <div>
          <p style={{ fontFamily:"'Georgia',serif", fontSize:20, fontWeight:400, fontStyle:'italic', color:INK }}>Mapa de la ruta</p>
          <p style={{ fontFamily:'Arial,sans-serif', fontSize:10, fontWeight:500, letterSpacing:'.18em', textTransform:'uppercase', color:TERRA, marginTop:3 }}>7 días · haz clic en cada parada para explorar</p>
        </div>
        <span style={{ fontFamily:'Arial,sans-serif', fontSize:10, fontWeight:600, letterSpacing:'.12em', textTransform:'uppercase', background:TERRA, color:'white', padding:'5px 14px', borderRadius:100 }}>Ruta especial</span>
      </div>

      <div style={{ display:'grid', gridTemplateColumns:'1fr 270px' }}>
        <div ref={mapRef} style={{ height:420 }} />
        <div style={{ borderLeft:`1px solid ${SAND}`, overflowY:'auto', maxHeight:420, background:'white' }}>
          {mapDays.map((d, i) => (
            <div key={i} onClick={() => setActiveDay(i)} style={{ padding:'13px 16px', borderBottom:`1px solid #F8F0E4`, cursor:'pointer', display:'flex', gap:11, alignItems:'flex-start', background: activeDay===i ? '#FEF3EE' : 'white', borderLeft: activeDay===i ? `3px solid ${TERRA}` : '3px solid transparent', transition:'all .2s' }}>
              <div style={{ fontFamily:"'Georgia',serif", fontSize:20, color: activeDay===i ? TERRA : SOFT, flexShrink:0, width:22, lineHeight:1 }}>{d.num}</div>
              <div>
                <p style={{ fontFamily:'Arial,sans-serif', fontSize:12, fontWeight:500, color:INK, lineHeight:1.3, marginBottom:2 }}>{d.name}</p>
                <p style={{ fontFamily:'Arial,sans-serif', fontSize:10.5, color:SOFT, lineHeight:1.4 }}>{d.places}</p>
                <p style={{ fontFamily:'Arial,sans-serif', fontSize:10, color:TERRA, fontStyle:'italic', marginTop:3 }}>{d.lodging}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ padding:'16px 22px', background:'white', borderTop:`1px solid ${SAND}` }}>
        <p style={{ fontFamily:"'Georgia',serif", fontSize:15, fontWeight:500, fontStyle:'italic', color:INK, marginBottom:6 }}>Día {mapDays[activeDay].num} — {mapDays[activeDay].name}</p>
        <p style={{ fontFamily:'Arial,sans-serif', fontSize:12.5, color:MID, lineHeight:1.7, marginBottom:10 }}>{mapDays[activeDay].detail}</p>
        <div style={{ display:'flex', flexWrap:'wrap', gap:6 }}>
          {mapDays[activeDay].tags.map(t => (
            <span key={t} style={{ fontFamily:'Arial,sans-serif', fontSize:10, fontWeight:500, background:CREAM, border:`1px solid ${SAND}`, color:MID, padding:'3px 10px', borderRadius:100 }}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

const days = [
  {
    n: 1,
    title: 'Llegada a Marrakech y primer contacto con la ciudad',
    text: 'Recogida en el Aeropuerto de Marrakech y traslado al Riad. Tarde libre para tomar un primer contacto con la famosa plaza Jemaa El Fna, el corazón de la medina. Durante el día podréis observar desde domadores de monos hasta encantadores de serpientes, puestos de zumo de naranja, especias y caracoles. Al caer la noche la plaza cambia totalmente: desaparecen los tenderetes y se llena de puestos de comida, músicos improvisados y una gran diversidad de espectáculos.',
    accommodation: 'Riad en Marrakech con desayuno',
    img: 'https://images.pexels.com/photos/3889843/pexels-photo-3889843.jpeg',
  },
  {
    n: 2,
    title: 'Alto Atlas · Ait Ben Haddou · Ouarzazate · Valle de Dades',
    text: 'Después del desayuno salimos hacia el Valle de Dades cruzando el Gran Atlas por el puerto de Tizi N\'Tichka (2.260m), el paso de carreteras más alto del norte de África, salpicado de pintorescos pueblos bereberes. Llegada a la kasbah de Ait Ben Haddou, pueblo fortificado de más de 800 años de historia, escenario de películas como Gladiator y Lawrence de Arabia. Continuamos hacia Ouarzazate, la gran puerta del desierto. Parada para almorzar y visita a una cooperativa de mujeres en el Valle de las Rosas. Seguimos por la Garganta de Dades hasta llegar al Valle.',
    accommodation: 'Valle de Dades con cena y desayuno',
    img: 'https://images.pexels.com/photos/4388164/pexels-photo-4388164.jpeg',
  },
  {
    n: 3,
    title: 'Garganta de Dades · Todra · Erfoud · Merzouga',
    text: 'Desde el Valle de Dades nos dirigimos al Sahara por la ruta de las Mil Kasbahs hasta las Gargantas del Todra, uno de los cañones más espectaculares del mundo con paredes de más de 200m. Continuamos por Erfoud hacia el desierto de Merzouga. Tras el almuerzo, los dromedarios nos adentran en el desierto de dunas para contemplar una puesta de sol inolvidable. Esta noche dormiremos en las dunas en un campamento de lujo en Jaimas, con cena, música en vivo alrededor del fuego y el cielo estrellado más impresionante que hayas visto.',
    accommodation: 'Campamento de lujo en el Sahara con cena y desayuno',
    img: 'https://images.pexels.com/photos/3889843/pexels-photo-3889843.jpeg',
  },
  {
    n: 4,
    title: 'Merzouga · Rissani · N\'Kob · Ouarzazate',
    text: 'Nos despertamos antes del amanecer para contemplar la salida del sol desde las dunas. Desayuno y salida hacia Rissani, antigua capital del Tafilalt y ciudad santa, cuna de la dinastía alauita. Visitamos su mercado, el más importante y grande del sur de Marruecos. Continuamos hacia el hermoso Valle del Draa con sus millones de palmeras. Por la tarde llegada a Ouarzazate, conocida como "la puerta del desierto", destino cada vez más popular por su paisaje y su industria cinematográfica.',
    accommodation: 'Ouarzazate con cena y desayuno',
    img: 'https://images.pexels.com/photos/2549018/pexels-photo-2549018.jpeg',
  },
  {
    n: 5,
    title: 'Regreso a Marrakech por el Alto Atlas',
    text: 'Tras el desayuno, regresamos a Marrakech atravesando el puerto Tizi N\'Tichka del Alto Atlas. Durante el trayecto descubriremos sorprendentes paisajes y pueblos bereberes con sus casas construidas de forma caótica, superponiéndose unas con otras y colgando de las laderas de la montaña. Al atardecer, llegada a Marrakech.',
    accommodation: 'Riad en Marrakech con desayuno',
    img: 'https://images.pexels.com/photos/16834923/pexels-photo-16834923.jpeg',
  },
  {
    n: 6,
    title: 'Marrakech con guía local',
    text: 'Tras el descanso y un buen desayuno, visita de Marrakech de la mano de un guía local. Ciudad fundada por los Almorávides en el siglo XI. Entre sus tesoros: el Minarete de la Koutoubia, símbolo de la ciudad y joya del arte almohade; las Tumbas Saadíes del siglo XVI; el Palacio de la Bahía del siglo XIX; los Jardines de Menara; la Medina con su laberinto de calles plagadas de tiendas; y la famosa plaza de Jemaá el Fná, que hay que visitar a diferentes horas del día porque cambia completamente entre el día y la noche. Tarde libre para perderse por las callejuelas de la medina.',
    accommodation: 'Riad en La Medina de Marrakech con desayuno',
    img: 'https://images.pexels.com/photos/3889843/pexels-photo-3889843.jpeg',
  },
  {
    n: 7,
    title: 'Hasta pronto',
    text: 'Un exquisito desayuno y tiempo libre hasta el traslado programado al aeropuerto de Marrakech. Con esto concluimos nuestros servicios. Agradecemos sinceramente la confianza depositada en nosotros y os deseamos un maravilloso viaje de regreso.',
    accommodation: null,
    img: 'https://images.pexels.com/photos/4388164/pexels-photo-4388164.jpeg',
  },
];

const included = [
  'Transporte en viaje privado',
  'Conductor y guía de habla española',
  'Traslados al aeropuerto (ida y vuelta)',
  'Turbantes',
  'Fotos con vestimenta bereber',
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
  'Entradas',
  'Propinas',
];

export default function MarrakechDesiertoPage() {
  const [openDay, setOpenDay] = useState<number | null>(0);

  return (
    <>
      <Helmet>
        <title>Marrakech al Desierto — 7 días · Viaja Mejor</title>
        <meta name="description" content="Ruta organizada de 7 días desde Marrakech al Sahara. Ait Ben Haddou, Gargantas Todra, desierto de Merzouga. Tour privado con guía en español." />
      </Helmet>

      {/* ─── HERO ─── */}
      <section style={{ position:'relative', height:'100vh', minHeight:640, overflow:'hidden', display:'flex', alignItems:'center' }}>
        <img
          src="https://images.pexels.com/photos/3889843/pexels-photo-3889843.jpeg"
          alt="Marrakech al Desierto"
          style={{ position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover', animation:'heroZoom 14s ease-out forwards' }}
        />
        <div style={{ position:'absolute', inset:0, background:'linear-gradient(to top,rgba(26,22,18,.8) 0%,rgba(26,22,18,.25) 50%,rgba(26,22,18,.1) 100%), linear-gradient(to right,rgba(26,22,18,.6) 0%,transparent 65%)' }} />

        <div style={{ position:'relative', zIndex:2, maxWidth:700, padding:'0 24px', marginLeft:'clamp(20px,5vw,80px)' }}>
          <div style={{ display:'inline-flex', alignItems:'center', gap:8, background:TERRA, color:'white', borderRadius:100, padding:'6px 16px', fontSize:10, fontWeight:600, letterSpacing:'.18em', textTransform:'uppercase', fontFamily:'Arial,sans-serif', marginBottom:28 }}>
            Ruta especial
          </div>
          <h1 style={{ fontFamily:"'Georgia',serif", fontSize:'clamp(44px,7.5vw,88px)', fontWeight:300, lineHeight:.96, color:'white', marginBottom:20, letterSpacing:'-.015em', fontStyle:'italic' }}>
            Marrakech<br />al Desierto
          </h1>
          <p style={{ fontSize:15, fontWeight:400, color:'rgba(248,241,228,.75)', letterSpacing:'.1em', textTransform:'uppercase', fontFamily:'Arial,sans-serif', marginBottom:40 }}>
            7 días · Tour privado de confort
          </p>
          <div style={{ display:'flex', gap:16, flexWrap:'wrap', alignItems:'center' }}>
            <button
              onClick={() => wa('Hola Antonio! Me interesa la ruta Marrakech al Desierto de 7 días. ¿Puedes darme más información?')}
              style={{ display:'inline-flex', alignItems:'center', gap:10, background:TERRA, color:'white', border:'none', borderRadius:100, padding:'16px 32px', fontSize:12, fontWeight:600, letterSpacing:'.14em', textTransform:'uppercase', cursor:'pointer', fontFamily:'Arial,sans-serif', boxShadow:'0 6px 24px rgba(194,84,48,.4)', transition:'all .3s ease' }}
            >
              <MessageCircle size={15} /> Consultar por WhatsApp
            </button>
            <a href="#itinerario" style={{ display:'inline-flex', alignItems:'center', gap:8, color:'rgba(248,241,228,.75)', fontSize:12, fontWeight:400, letterSpacing:'.12em', textTransform:'uppercase', textDecoration:'none', fontFamily:'Arial,sans-serif' }}>
              Ver itinerario <ChevronRight size={14} />
            </a>
          </div>
        </div>

        {/* Trust bar */}
        <div style={{ position:'absolute', bottom:32, left:0, right:0, zIndex:2, display:'flex', justifyContent:'center', gap:'clamp(20px,4vw,48px)', flexWrap:'wrap', padding:'0 24px' }}>
          {[['7','Días'],['★ 5.0','TripAdvisor'],['Privado','Tour'],['Español','Guía']].map(([v,l]) => (
            <div key={l} style={{ textAlign:'center' }}>
              <div style={{ fontFamily:"'Georgia',serif", fontSize:'clamp(18px,2.5vw,24px)', fontWeight:500, color:'white', lineHeight:1 }}>{v}</div>
              <div style={{ fontSize:9, color:'rgba(248,241,228,.5)', letterSpacing:'.14em', textTransform:'uppercase', marginTop:4, fontFamily:'Arial,sans-serif' }}>{l}</div>
            </div>
          ))}
        </div>
        <style>{`@keyframes heroZoom{from{transform:scale(1.08)}to{transform:scale(1.02)}}`}</style>
      </section>

      {/* ─── INTRODUCCIÓN ─── */}
      <section style={{ background:'white', padding:'80px 24px' }}>
        <div style={{ maxWidth:820, margin:'0 auto' }}>
          <p style={{ fontSize:10, fontWeight:600, letterSpacing:'.28em', textTransform:'uppercase', color:TERRA, fontFamily:'Arial,sans-serif', display:'flex', alignItems:'center', gap:12, marginBottom:20 }}>
            <span style={{ width:24, height:1, background:TERRA, display:'block' }} /> El viaje
          </p>
          <p style={{ fontFamily:"'Georgia',serif", fontSize:'clamp(18px,2.5vw,26px)', fontWeight:300, color:INK, lineHeight:1.65, marginBottom:40 }}>
            Una ruta que atraviesa la columna vertebral de Marruecos: desde la bulliciosa medina de Marrakech hasta las dunas infinitas del Sahara, pasando por kasbahs milenarias, gargantas de roca roja y valles de palmeras.
          </p>
          <div style={{ display:'flex', flexWrap:'wrap', gap:10 }}>
            {['Marrakech','Ait Ben Haddou','Ouarzazate','Gargantas Todra','Merzouga · Sahara','Valle del Draa','Alto Atlas'].map(h => (
              <span key={h} style={{ background:CREAM, border:`1px solid ${SAND}`, color:MID, fontSize:12, fontWeight:500, padding:'7px 16px', borderRadius:100, fontFamily:'Arial,sans-serif' }}>{h}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ITINERARIO ─── */}
      <section id="itinerario" style={{ background:CREAM, padding:'80px 24px' }}>
        <div style={{ maxWidth:820, margin:'0 auto' }}>
          <div style={{ marginBottom:56 }}>
            <p style={{ fontSize:10, fontWeight:600, letterSpacing:'.28em', textTransform:'uppercase', color:TERRA, fontFamily:'Arial,sans-serif', display:'flex', alignItems:'center', gap:12, marginBottom:16 }}>
              <span style={{ width:24, height:1, background:TERRA, display:'block' }} /> Día a día
            </p>
            <h2 style={{ fontFamily:"'Georgia',serif", fontSize:'clamp(28px,4vw,48px)', fontWeight:300, color:INK, lineHeight:1.05 }}>
              Itinerario <em style={{ color:TERRA }}>completo</em>
            </h2>
          </div>

          <div style={{ display:'flex', flexDirection:'column', gap:0 }}>
            {days.map((day, i) => {
              const open = openDay === i;
              return (
                <div key={i} style={{ borderTop:`1px solid ${SAND}`, ...(i === days.length - 1 ? { borderBottom:`1px solid ${SAND}` } : {}) }}>
                  <button
                    onClick={() => setOpenDay(open ? null : i)}
                    style={{ width:'100%', background:'none', border:'none', cursor:'pointer', padding:'24px 0', display:'flex', alignItems:'center', gap:20, textAlign:'left' }}
                  >
                    <div style={{ flexShrink:0, width:48, height:48, borderRadius:'50%', background: open ? TERRA : CREAM, border:`1px solid ${open ? TERRA : SAND}`, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', transition:'all .25s ease' }}>
                      <span style={{ fontSize:8, fontFamily:'Arial,sans-serif', fontWeight:600, letterSpacing:'.08em', textTransform:'uppercase', color: open ? 'rgba(255,255,255,.7)' : SOFT, lineHeight:1 }}>DÍA</span>
                      <span style={{ fontFamily:"'Georgia',serif", fontSize:18, fontWeight:600, color: open ? 'white' : TERRA, lineHeight:1 }}>{day.n}</span>
                    </div>
                    <h3 style={{ flex:1, fontFamily:"'Georgia',serif", fontSize:'clamp(15px,2vw,19px)', fontWeight: open ? 500 : 300, color: open ? INK : MID, margin:0, lineHeight:1.3, transition:'all .25s ease' }}>
                      {day.title}
                    </h3>
                    <div style={{ flexShrink:0 }}>
                      {open ? <ChevronUp size={18} color={TERRA} /> : <ChevronDown size={18} color={SOFT} />}
                    </div>
                  </button>

                  {open && (
                    <div style={{ paddingBottom:32, paddingLeft:68 }}>
                      <div style={{ borderRadius:16, overflow:'hidden', marginBottom:24, maxHeight:280 }}>
                        <img src={day.img} alt={day.title} loading="lazy" style={{ width:'100%', height:280, objectFit:'cover' }} />
                      </div>
                      <p style={{ fontSize:15, color:MID, lineHeight:1.85, fontFamily:'Arial,sans-serif', fontWeight:300, margin:'0 0 20px' }}>
                        {day.text}
                      </p>
                      {day.accommodation && (
                        <div style={{ display:'inline-flex', alignItems:'center', gap:8, background:'white', border:`1px solid ${SAND}`, borderRadius:100, padding:'8px 16px' }}>
                          <span style={{ fontSize:10, color:TERRA, fontFamily:'Arial,sans-serif' }}>🏨</span>
                          <span style={{ fontSize:12, color:MID, fontFamily:'Arial,sans-serif', fontWeight:500 }}>{day.accommodation}</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── MAPA DE RUTA ─── */}
      <section style={{ background:CREAM, padding:'0 24px 80px' }}>
        <div style={{ maxWidth:960, margin:'0 auto' }}>
          <RouteMap />
        </div>
      </section>

      {/* ─── SERVICIOS ─── */}
      <section style={{ background:'white', padding:'80px 24px' }}>
        <div style={{ maxWidth:960, margin:'0 auto' }}>
          <div style={{ marginBottom:48 }}>
            <p style={{ fontSize:10, fontWeight:600, letterSpacing:'.28em', textTransform:'uppercase', color:TERRA, fontFamily:'Arial,sans-serif', display:'flex', alignItems:'center', gap:12, marginBottom:16 }}>
              <span style={{ width:24, height:1, background:TERRA, display:'block' }} /> Lo que incluye
            </p>
            <h2 style={{ fontFamily:"'Georgia',serif", fontSize:'clamp(26px,3.5vw,44px)', fontWeight:300, color:INK, lineHeight:1.05 }}>
              Tu viaje, <em style={{ color:TERRA }}>sin sorpresas</em>
            </h2>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(320px,1fr))', gap:32 }}>
            {/* Incluye */}
            <div style={{ background:CREAM, borderRadius:20, padding:'32px 28px', border:`1px solid ${SAND}` }}>
              <h3 style={{ fontFamily:"'Georgia',serif", fontSize:20, fontWeight:500, color:INK, marginBottom:24, display:'flex', alignItems:'center', gap:10 }}>
                <span style={{ display:'inline-flex', alignItems:'center', justifyContent:'center', width:28, height:28, borderRadius:'50%', background:TERRA }}>
                  <Check size={14} color="white" />
                </span>
                Incluye
              </h3>
              <ul style={{ listStyle:'none', margin:0, padding:0, display:'flex', flexDirection:'column', gap:12 }}>
                {included.map(item => (
                  <li key={item} style={{ display:'flex', alignItems:'flex-start', gap:10 }}>
                    <span style={{ flexShrink:0, marginTop:3 }}><Check size={13} color={TERRA} /></span>
                    <span style={{ fontSize:14, color:MID, fontFamily:'Arial,sans-serif', lineHeight:1.5 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* No incluido */}
            <div style={{ background:'white', borderRadius:20, padding:'32px 28px', border:`1px solid ${SAND}` }}>
              <h3 style={{ fontFamily:"'Georgia',serif", fontSize:20, fontWeight:500, color:INK, marginBottom:24, display:'flex', alignItems:'center', gap:10 }}>
                <span style={{ display:'inline-flex', alignItems:'center', justifyContent:'center', width:28, height:28, borderRadius:'50%', background:SAND }}>
                  <X size={14} color={SOFT} />
                </span>
                No incluido
              </h3>
              <ul style={{ listStyle:'none', margin:0, padding:0, display:'flex', flexDirection:'column', gap:12 }}>
                {notIncluded.map(item => (
                  <li key={item} style={{ display:'flex', alignItems:'flex-start', gap:10 }}>
                    <span style={{ flexShrink:0, marginTop:3 }}><X size={13} color={SOFT} /></span>
                    <span style={{ fontSize:14, color:SOFT, fontFamily:'Arial,sans-serif', lineHeight:1.5 }}>{item}</span>
                  </li>
                ))}
              </ul>
              <div style={{ marginTop:28, padding:'16px 20px', background:CREAM, borderRadius:12, border:`1px solid ${SAND}` }}>
                <p style={{ fontSize:12, color:MID, fontFamily:'Arial,sans-serif', lineHeight:1.6, margin:0 }}>
                  Consulta condiciones y precio exacto directamente con Antonio. Precio final depende de fechas, número de viajeros y opciones elegidas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA FINAL ─── */}
      <section style={{ background:INK, padding:'100px 24px', textAlign:'center', position:'relative', overflow:'hidden' }}>
        <div style={{ position:'absolute', top:'50%', left:'50%', transform:'translate(-50%,-50%)', width:700, height:350, background:`radial-gradient(ellipse,rgba(194,84,48,.15) 0%,transparent 70%)`, pointerEvents:'none' }} />
        <div style={{ maxWidth:640, margin:'0 auto', position:'relative' }}>
          <div style={{ fontSize:13, letterSpacing:3, color:GOLD, marginBottom:24 }}>★★★★★</div>
          <h2 style={{ fontFamily:"'Georgia',serif", fontSize:'clamp(30px,5vw,56px)', fontWeight:300, color:'white', lineHeight:1.05, marginBottom:20, letterSpacing:'-.01em' }}>
            ¿Listo para vivir el<br /><em style={{ color:'#F0D485' }}>Sahara de verdad?</em>
          </h2>
          <p style={{ fontSize:15, color:'rgba(248,241,228,.65)', lineHeight:1.85, maxWidth:480, margin:'0 auto 48px', fontFamily:'Arial,sans-serif', fontWeight:300 }}>
            Escríbeme por WhatsApp y te cuento todo sobre esta ruta. Te respondo personalmente, sin compromiso.
          </p>
          <button
            onClick={() => wa('Hola Antonio! Me interesa la ruta Marrakech al Desierto de 7 días. ¿Puedes darme más información?')}
            style={{ display:'inline-flex', alignItems:'center', gap:12, background:'#25D366', color:'white', border:'none', borderRadius:100, padding:'20px 40px', fontSize:14, fontWeight:600, letterSpacing:'.1em', textTransform:'uppercase', fontFamily:'Arial,sans-serif', cursor:'pointer', boxShadow:'0 8px 32px rgba(37,211,102,.3)', transition:'all .3s ease' }}
          >
            <MessageCircle size={18} /> Consultar por WhatsApp
          </button>
          <p style={{ fontSize:11, color:'rgba(248,241,228,.35)', marginTop:20, fontFamily:'Arial,sans-serif', letterSpacing:'.08em' }}>
            Respuesta en menos de 24h · Sin compromiso
          </p>
        </div>
      </section>
    </>
  );
}
