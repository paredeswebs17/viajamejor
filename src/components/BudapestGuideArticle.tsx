import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Euro, Compass, List, X, MapPin, Star, Users, ExternalLink, Bed, UtensilsCrossed, CreditCard, Shield, Download, CheckCircle } from 'lucide-react';
import { Droplets as Thermometer } from 'lucide-react';

interface BudapestGuideArticleProps {
  onBack: () => void;
}

const NAV_SECTIONS = [
  { id: 'mapa', label: 'Mapa' },
  { id: 'dia-1', label: 'Día 1' },
  { id: 'dia-2', label: 'Día 2' },
  { id: 'dia-3', label: 'Día 3' },
  { id: 'dia-4', label: 'Día 4' },
  { id: 'extras', label: 'Más experiencias' },
  { id: 'alojamiento', label: 'Dónde dormir' },
  { id: 'comer', label: 'Dónde comer' },
  { id: 'info-practica', label: 'Transporte público' },
  { id: 'herramientas', label: 'Tarjeta y seguro' },
];

const BudapestGuideArticle: React.FC<BudapestGuideArticleProps> = ({ onBack }) => {
  const navigate = useNavigate();
  const [navOpen, setNavOpen] = useState(false);
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const toggle = () => setShowNav(window.scrollY > 500);
    window.addEventListener('scroll', toggle, { passive: true });
    return () => window.removeEventListener('scroll', toggle);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setNavOpen(false);
  };

  return (
    <article className="bg-stone-50">
      {/* HERO */}
      <section className="relative min-h-[85vh] bg-stone-900 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/73796/budapest-hungary-parliament-building-73796.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Vista panorámica del Parlamento de Budapest al atardecer con el río Danubio"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-900/80 via-stone-900/60 to-stone-900/90" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-20 md:pt-44 md:pb-28 min-h-[85vh] flex flex-col justify-between">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[.15em] text-stone-100 hover:text-amber-300 transition w-fit"
          >
            <ArrowLeft size={14} /> Todas las guías
          </button>

          <div className="max-w-4xl mt-16">
            <div className="mb-6">
              <span className="text-[10px] uppercase tracking-[.2em] text-amber-300">
                Guía Completa · 4 Días
              </span>
            </div>
            <h1 className="text-stone-50 text-balance font-light leading-[0.98]" style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)', fontFamily: 'Georgia, serif' }}>
              Budapest en 4 Días
            </h1>
            <p className="mt-6 italic text-2xl md:text-3xl text-amber-300" style={{ fontFamily: 'Georgia, serif' }}>
              Tu Aventura Húngara Completa
            </p>
          </div>

          <div className="mt-14 grid grid-cols-3 gap-6 md:gap-10 text-stone-100 border-t border-stone-100/20 pt-8">
            <HeroStat icon={Calendar} label="Duración" value="4 días" />
            <HeroStat icon={Euro} label="Desde" value="85€/día" />
            <HeroStat icon={Thermometer} label="Experiencia" value="Termal" />
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-amber-600" />
            <span className="text-[10px] uppercase tracking-[.2em] text-amber-700">
              El viaje en una página
            </span>
          </div>
          <p className="text-3xl md:text-4xl text-stone-900 leading-[1.3] text-balance" style={{ fontFamily: 'Georgia, serif' }}>
            Budapest es la joya escondida de Europa Central, una ciudad que sorprende por su belleza, su historia y lo económica que resulta comparada con otras capitales europeas. Dividida por el majestuoso Danubio, combina la elegancia de París con los precios de Europa del Este.
          </p>
          <p className="mt-8 text-lg text-stone-600 leading-relaxed max-w-3xl">
            Pero Budapest es mucho más que el Parlamento iluminado y sus famosos baños termales. Es perderte por el Barrio Judío y descubrir sus ruin bars únicos en el mundo. Es cruzar el Puente de las Cadenas al atardecer mientras la ciudad se enciende. Es disfrutar de un auténtico goulash en un bistró local por 8€ y sentir que tu presupuesto rinde el doble que en otras capitales.
          </p>
        </div>
      </section>

      {/* JOURNEY MAP */}
      <JourneyMap />

      {/* INTERACTIVE MAP */}
      <section id="mapa" className="py-16 md:py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-8 bg-amber-600" />
            <MapPin size={14} className="text-amber-700" />
            <span className="text-[10px] uppercase tracking-[.2em] text-amber-700">Mapa interactivo</span>
          </div>
          <h2 className="text-4xl md:text-5xl text-stone-900 leading-tight mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            Tu ruta en <span className="italic">el mapa</span>
          </h2>
          <p className="text-stone-600 mb-8 max-w-2xl text-sm">Pulsa en cada marcador para ver la atracción. Los colores indican el día del itinerario.</p>
          <BudapestMap />
        </div>
      </section>

      {/* DAY 1 */}
      <section id="dia-1" className="py-24 md:py-36 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <DaySectionHeader number={1} title="Poder Imperial y Herencia Cultural" />

          <DayTimeline
            stops={[
              { time: '9:00', place: 'Parlamento' },
              { time: '11:00', place: 'Free Tour' },
              { time: '13:30', place: 'Gran Sinagoga' },
              { time: '16:00', place: 'Basílica San Esteban' },
              { time: '21:00', place: 'Szimpla Kert' },
            ]}
            color="amber"
          />

          <div className="mt-16 space-y-24 md:space-y-32">
            <Attraction
              time="9:00h"
              title="Parlamento Húngaro"
              image="https://images.pexels.com/photos/12165534/pexels-photo-12165534.jpeg"
              description="Inicia tu aventura húngara en el edificio gubernamental más espectacular de Europa. Sus cúpulas doradas y arquitectura neogótica te transportarán a la época imperial. La visita incluye la Corona de San Esteban, las joyas reales, salas ceremoniales y audioguía en español."
              details={[
                'Inversión: 10.000 HUF (Aprox. 27€)',
                'Duración: 90 min con audioguía',
                'Reserva OBLIGATORIA con 24-48h de anticipación',
                'Llega 15 min antes para controles de seguridad',
                'Incluye: Corona de San Esteban y Salas Ceremoniales',
              ]}
              tip="Reserva online con antelación, se agota rápido en temporada alta."
              link={{ url: 'https://gyg.me/gMPSGtKr', label: 'Reservar entradas oficiales del Parlamento', price: '27€', badge: 'Popular' }}
              index={0}
            />

            <Attraction
              time="11:00h"
              title="Free Tour Budapest en Español"
              image="https://images.pexels.com/photos/5612377/pexels-photo-5612377.jpeg"
              description="Descubre la auténtica Budapest con guías locales apasionados. Tour premiado como el más popular a nivel global. Recorrerás la Basílica de San Esteban, el Castillo de Buda, el Parlamento y mucho más durante 2h 30min."
              details={[
                'Precio: Gratis (propina voluntaria)',
                'Duración: 2h 30min aprox.',
                'Inicio: Plaza Madách Imre',
                'Idioma: Español disponible',
                'Incluye: Basílica, Castillo, Parlamento y más',
              ]}
              link={{ url: 'https://www.freetour.com/es/budapest/free-tour-of-budapest?referralID=rFW5gyO0D7w7JOqo&campaign=FreetourBudapestCiudad', label: 'Reservar Free Tour gratis', price: 'Gratis', badge: 'Gratis' }}
              index={1}
            />

            <Attraction
              time="13:30h"
              title="Gran Sinagoga - Memoria Viva"
              image="https://images.pexels.com/photos/7614748/pexels-photo-7614748.jpeg"
              description="La segunda sinagoga más grande del planeta y centro de la comunidad judía europea. Arquitectura morisca-bizantina única que incluye el Templo principal, el Museo Judío y el conmovedor Jardín Memorial."
              details={[
                'Entrada: 13.000 HUF (Aprox. 33€)',
                'Duración: 75-90 minutos',
                'Arquitectura: Estilo morisco-bizantino único',
                'Incluye: Templo principal + Museo Judío + Jardín Memorial',
                'Impacto emocional garantizado',
              ]}
              link={{ url: 'https://jewishtourhungary.com/es/cart', label: 'Entradas oficiales Gran Sinagoga', price: '33€' }}
              secondaryLink={{ url: 'https://gyg.me/vbht7C3s', label: 'Tour Patrimonio Judío completo', price: '45€', badge: 'Completo' }}
              index={2}
            />

            <Attraction
              time="16:00h"
              title="Basílica de San Esteban + Mirador Panorámico"
              image="https://images.pexels.com/photos/2984324/pexels-photo-2984324.jpeg"
              description="Termina el día en las alturas con vistas que quitan el aliento. La Basílica de San Esteban ofrece un mirador a 96 metros de altura con ascensor y vistas 360 grados de todo Budapest y el Danubio."
              details={[
                'Solo basílica: 600 HUF (Aprox. 2€)',
                'Combo completo con mirador: 2.900 HUF (Aprox. 8€)',
                'Ascensor hasta 96 metros de altura',
                'Vista 360 grados: Todo Budapest + Danubio',
                'Mejor momento: 2 horas antes del atardecer',
              ]}
              tip="Sube 2 horas antes del atardecer para ver la transformación de la ciudad de día a noche."
              link={{ url: 'https://gyg.me/BQZi7YH9', label: 'Reservar entradas Basílica San Esteban', price: '8€' }}
              index={3}
            />

            <Attraction
              time="21:00h"
              title="Szimpla Kert - Revolución de los Ruin Bars"
              image="https://images.pexels.com/photos/33980771/pexels-photo-33980771.jpeg"
              description="Experimenta el concepto que Budapest exportó al mundo entero. Edificios en ruinas convertidos en bares con arte urbano ecléctico, decoración surrealista y música en vivo. Entrada gratuita, cervezas 3-5€ y cócteles 6-8€."
              details={[
                'Concepto: Edificios en ruinas convertidos en bares',
                'Entrada: Gratuita',
                'Bebidas: Cervezas 3-5€, cócteles 6-8€',
                'Arte urbano ecléctico y decoración surrealista',
                'Tip: Llega entre 21:00-22:00 para buen sitio',
              ]}
              link={{ url: 'https://szimpla.hu/', label: 'Web oficial Szimpla Kert', price: 'Gratis' }}
              index={4}
            />
          </div>
        </div>
      </section>

      {/* DAY 2 */}
      <section id="dia-2" className="py-24 md:py-36 bg-stone-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <DaySectionHeader number={2} title="Realeza Medieval y Romance Danubiano" />

          <DayTimeline
            stops={[
              { time: '9:00', place: 'Funicular + Castillo' },
              { time: '10:30', place: 'Bastión Pescadores' },
              { time: '18:00', place: 'Crucero Nocturno' },
            ]}
            color="rose"
          />

          <div className="mt-16 space-y-24 md:space-y-32">
            <Attraction
              time="9:00h"
              title="Funicular Histórico al Castillo de Buda"
              image="https://images.pexels.com/photos/19310795/pexels-photo-19310795.jpeg"
              description="Comienza como la realeza húngara, ascendiendo en el funicular centenario hasta el impresionante Castillo de Buda. Desde arriba disfrutarás de jardines con vistas panorámicas, la Galería Nacional y el Museo de Historia de Budapest."
              details={[
                'Funicular: 1.500 HUF (Aprox. 4€) ida/vuelta',
                'Alternativa: Caminata gratis (15 min subida)',
                'Recomendación: Sube en funicular, baja andando',
                'Exterior gratis: Jardines + vistas panorámicas',
                'Galería Nacional: 3.200 HUF (Aprox. 9€)',
              ]}
              index={0}
            />

            <Attraction
              time="10:30h"
              title="Bastión de los Pescadores"
              image="https://images.pexels.com/photos/1750352/pexels-photo-1750352.jpeg"
              description="El lugar más fotografiado de Budapest por una razón poderosa. Sus terrazas neorrománicas ofrecen la mejor vista panorámica del Parlamento dorado reflejado en el Danubio. Incluye acceso al Free Tour del Castillo de Buda en español."
              details={[
                'Terrazas inferiores: GRATIS',
                'Torres superiores: 1.000 HUF (Aprox. 3€)',
                'Mejor momento: 10:30-11:30h (luz perfecta, menos gente)',
                'Vista icónica: Parlamento dorado + Danubio',
                'Free Tour Castillo: 2h 30min, inicio Széll Kálmán tér',
              ]}
              tip="Las terrazas inferiores son gratis y tienen las mejores vistas al Parlamento."
              link={{ url: 'https://www.freetour.com/es/budapest/free-red-budapest-tour?referralID=rFW5gyO0D7w7JOqo&campaign=BudapestCastilloBuda', label: 'Reservar Free Tour del Castillo', price: 'Gratis', badge: 'Gratis' }}
              index={1}
            />

            <Attraction
              time="18:00h"
              title="Crucero Nocturno por el Danubio"
              image="https://images.pexels.com/photos/73796/budapest-hungary-parliament-building-73796.jpeg"
              description="La experiencia más romántica y fotogénica de Budapest. Navega durante 70 minutos contemplando el Parlamento dorado iluminado, el Castillo de Buda con luces y todos los puentes históricos. Incluye audioguía en español y bebida."
              details={[
                'Duración: 70 minutos de pura magia',
                'Precio: 4.000 HUF (Aprox. 12€)',
                'Incluye: Audioguía español + bebida',
                'Verás: Parlamento, Castillo, todos los puentes',
                'Mejor timing: Atardecer + noche',
              ]}
              tip="Se agota rápido, especialmente fines de semana. Reserva con anticipación."
              link={{ url: 'https://gyg.me/YnvSUuzy', label: 'Reservar Crucero Nocturno por el Danubio', price: '12€', badge: 'Se agota' }}
              index={2}
            />
          </div>
        </div>
      </section>

      {/* DAY 3 */}
      <section id="dia-3" className="py-24 md:py-36 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <DaySectionHeader number={3} title="Aguas Milenarias y Esplendor Imperial" />

          <DayTimeline
            stops={[
              { time: '9:00', place: 'Balnearios Széchenyi' },
              { time: '13:30', place: 'Plaza de los Héroes' },
              { time: '18:30', place: 'New York Café' },
            ]}
            color="teal"
          />

          <div className="mt-16 space-y-24 md:space-y-32">
            <Attraction
              time="9:00h"
              title="Balnearios Széchenyi - Ritual Húngaro Milenario"
              image="https://images.pexels.com/photos/33980770/pexels-photo-33980770.jpeg"
              description="Sumérgete en la tradición termal más auténtica de Europa. Funciona incluso con nieve! 18 piscinas diferentes con temperaturas entre 18°C y 38°C en un impresionante edificio neobarroco. Desde agosto 2026, solo mayores de 14 años."
              details={[
                'Días laborables: 15.000 HUF (Aprox. 39€) día completo',
                'Fines de semana: 16.500 HUF (Aprox. 42€) día completo',
                '18 piscinas diferentes (18°C a 38°C)',
                'Tiempo ideal: 3-4 horas',
                'Llevar: Toalla, chanclas, bañador obligatorio',
              ]}
              tip="La piscina exterior con vapor en invierno es una experiencia mágica. Alternativa elegante: Balneario Gellért (Art Nouveau, cubierto)."
              link={{ url: 'https://gyg.me/cTU7N3tH', label: 'Entradas oficiales Széchenyi', price: '39€', badge: 'Popular' }}
              index={0}
            />

            <Attraction
              time="13:30h"
              title="Plaza de los Héroes - Epicentro Húngaro"
              image="https://images.pexels.com/photos/5687558/pexels-photo-5687558.jpeg"
              description="El monumento más patriótico de Hungría te cuenta mil años de historia. 7 estatuas de las tribus fundadoras, el Monumento del Milenio y el Castillo Vajdahunyad construido para la Exposición Universal de 1896. Entrada completamente gratuita."
              details={[
                'Entrada: Completamente GRATIS',
                '7 estatuas de las tribus fundadoras',
                'Monumento del Milenio: columna de 36 metros',
                'Castillo Vajdahunyad: interior 2.000 HUF (Aprox. 5€)',
                'Foto obligada: Con la Escultura del Anónimo',
              ]}
              index={1}
            />

            <Attraction
              time="18:30h"
              title="New York Café - El Más Hermoso del Mundo"
              image="https://images.pexels.com/photos/20763018/pexels-photo-20763018.jpeg"
              description="Donde se reunía la élite intelectual de Budapest en la Belle Époque. Inaugurado en 1894, con techos dorados, espejos y música live desde las 11:00h. Una experiencia más allá del café."
              details={[
                'Ambiente: Techos dorados + espejos imperiales',
                'Precios: 8-15€ café + pastel',
                'Historia: Inaugurado 1894',
                'Reservas: Solo necesario para cenas después de las 18:00h',
                'Música live: Desde 11:00h',
              ]}
              link={{ url: 'https://newyorkcafe.hu/en/', label: 'Reservas New York Café', price: '8€' }}
              index={2}
            />
          </div>
        </div>
      </section>

      {/* DAY 4 */}
      <section id="dia-4" className="py-24 md:py-36 bg-stone-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <DaySectionHeader number={4} title="Autenticidad Local y Despedida Panorámica" />

          <DayTimeline
            stops={[
              { time: '9:00', place: 'Mercado Central' },
              { time: '10:30', place: 'Colina Gellért' },
            ]}
            color="rose"
          />

          <div className="mt-16 space-y-24 md:space-y-32">
            <Attraction
              time="9:00h"
              title="Mercado Central - Corazón Gastronómico"
              image="https://images.pexels.com/photos/28994573/pexels-photo-28994573.jpeg"
              description="El mercado cubierto más espectacular de Europa Central. En la planta baja encontrarás páprika húngara (desde 2€), salami de Szeged, vinos Tokaj y foie gras. En la primera planta, gastronomía: lángos (3-4€), goulash auténtico (6-8€) y kürtőskalács (2-3€)."
              details={[
                'Planta baja: Páprika, Salami de Szeged, Vinos Tokaj, Foie gras',
                'Primera planta: Lángos (3-4€), Goulash (6-8€), Chimney Cake (2-3€)',
                'Tiempo recomendado: 1-2 horas explorando',
                'Horario: Lun 6-17h, Mar-Vie 6-18h, Sáb 6-15h',
                'Cerrado domingos',
              ]}
              index={0}
            />

            <Attraction
              time="10:30h"
              title="Colina Gellért - Mirador Supremo de Budapest"
              image="https://images.pexels.com/photos/30734949/pexels-photo-30734949.jpeg"
              description="Las vistas más impresionantes de toda la capital húngara. Sube hasta la Estatua de la Libertad (14 metros) y el Mirador Citadella para una panorámica 360 grados completamente gratuita."
              details={[
                'Caminata: 35-40 min (gratis)',
                'Autobús 27: 530 HUF (Aprox. 1.5€)',
                'Estatua de la Libertad: 14 metros de altura',
                'Mirador Citadella: Panorámica 360 grados',
                'Costo: Totalmente gratuito',
              ]}
              tip="Ideal para despedirse de Budapest con una última vista panorámica inolvidable."
              index={1}
            />
          </div>
        </div>
      </section>

      {/* MORE EXPERIENCES */}
      <section id="extras" className="py-24 md:py-32 bg-stone-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-8 bg-amber-600" />
            <span className="text-[10px] uppercase tracking-[.2em] text-amber-700">Excursiones desde Budapest</span>
          </div>
          <h2 className="text-4xl md:text-5xl text-stone-900 leading-tight mb-12" style={{ fontFamily: 'Georgia, serif' }}>
            Más <span className="italic">experiencias</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <ExtraCard title="Recodo del Danubio" desc="Excursión de un día por tres pueblos pintorescos: Szentendre, Visegrád y Esztergom. Basílica más grande de Hungría y un castillo medieval." link="https://gyg.me/7hpr6KGa" />
            <ExtraCard title="Palacio Real de Gödöllő" desc="El palacio barroco favorito de la Emperatriz Sissi. Descubre la vida de la realeza austro-húngara en uno de los palacios más grandes de Hungría." link="https://gyg.me/UgxQq7sn" />
            <ExtraCard title="Pueblo Vinícola de Páty" desc="Escapa a la campiña húngara y descubre la cultura vinícola local. Bodegas tradicionales, degustaciones y gastronomía típica." link="https://gyg.me/2Ben0KFS" />
          </div>
        </div>
      </section>

      {/* HOTELS */}
      <section id="alojamiento" className="py-24 md:py-32 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-8 bg-amber-600" />
            <Bed size={14} className="text-amber-700" />
            <span className="text-[10px] uppercase tracking-[.2em] text-amber-700">Alojamiento</span>
          </div>
          <h2 className="text-4xl md:text-5xl text-stone-900 leading-tight mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            Dónde <span className="italic">dormir</span>
          </h2>
          <p className="text-stone-600 mb-12 max-w-2xl">Hoteles probados en las dos mejores zonas de Budapest para moverse a pie o en metro.</p>

          <div className="grid lg:grid-cols-2 gap-10">
            <HotelZone
              zone="Centro de Pest"
              description="La ubicación más cómoda para visitar Budapest. Precio medio: 70-140€/noche"
              hotels={[
                { name: 'Callas House', stars: 4, link: 'https://booking.tpk.lv/wmbhJqcN', highlight: 'Cerca del Parlamento y Basílica San Esteban' },
                { name: 'Barceló Budapest', stars: 4, link: 'https://booking.tpk.lv/qi1gAX1t', highlight: 'Cadena internacional, excelente ubicación céntrica' },
                { name: 'Hotel Oktogon Haggenmacher', stars: 4, link: 'https://booking.tpk.lv/hTegcgZC', highlight: 'Junto a Avenida Andrássy, acceso directo al metro M1' },
              ]}
            />
            <HotelZone
              zone="Castillo de Buda"
              description="Zona tranquila con encanto y vistas panorámicas. Precio medio: 80-160€/noche"
              hotels={[
                { name: 'Leon Hotel & Lounge', stars: 4, link: 'https://booking.tpk.lv/qZFhW1kp', highlight: 'Hotel boutique, vistas al Danubio, ambiente exclusivo' },
                { name: 'Monastery Boutique Hotel', stars: 4, link: 'https://booking.tpk.lv/q3Q85yF6', highlight: 'Edificio histórico, diseño único en zona del Castillo' },
              ]}
            />
          </div>
        </div>
      </section>

      {/* DINING */}
      <section id="comer" className="py-24 md:py-32 bg-stone-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-8 bg-amber-600" />
            <UtensilsCrossed size={14} className="text-amber-700" />
            <span className="text-[10px] uppercase tracking-[.2em] text-amber-700">Gastronomía</span>
          </div>
          <h2 className="text-4xl md:text-5xl text-stone-900 leading-tight mb-12" style={{ fontFamily: 'Georgia, serif' }}>
            Dónde <span className="italic">comer</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="font-semibold text-stone-900 mb-6 text-lg">Cocina húngara tradicional</h3>
              <div className="space-y-5">
                <Restaurant name="Hungarikum Bisztró" address="Steindl Imre u. 13, District V" price="€€€" desc="Alta cocina húngara cerca del Parlamento. Música tradicional en vivo, goulash excepcional." link="https://www.google.com/maps/place/Budapest,+Bistro+hungaro,+Steindl+Imre+u.+13,+1051+Hungr%C3%ADa/@47.5034835,19.0479192,17z/data=!4m6!3m5!1s0x4741dc14183e4511:0x2356a71b716602c5!8m2!3d47.5034835!4d19.0479192!16s%2Fg%2F1hhmyj4hm" />
                <Restaurant name="Menza" address="Liszt Ferenc tér 2, District VI" price="€€" desc="Cocina húngara moderna con diseño retro. Goulash, pancakes Hortobágyi y ambiente animado." link="https://www.google.com/maps/place/Budapest,+Restaurant+Menza,+Liszt+Ferenc+t%C3%A9r+2,+1061+Hungr%C3%ADa/@47.5039639,19.0628165,17z/data=!4m6!3m5!1s0x4741dc6e9b62d4d5:0x361daa1bec9740fe!8m2!3d47.5039639!4d19.0628165!16s%2Fg%2F1v6p31kz" />
                <Restaurant name="Frici Papa" address="Király u. 55, District VII" price="€" desc="Comida casera tradicional como la de la abuela. Goulash auténtico, porciones enormes." link="https://www.google.com/maps/place/Budapest,+Frici+papa,+Kir%C3%A1ly+u.+55,+1077+Hungr%C3%ADa/@47.5023394,19.0637114,17z/data=!4m6!3m5!1s0x4741dc6ecddec10b:0xab18bc439df2bad4!8m2!3d47.5023394!4d19.0637114!16s%2Fg%2F11r96t66s" />
                <Restaurant name="Lángos en Mercado Central" address="Nagy Vásárcsarnok (planta superior)" price="€" desc="Pan frito húngaro tradicional con crema agria y queso. Auténtico y económico." />
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-stone-900 mb-6 text-lg">Internacional y especial</h3>
              <div className="space-y-5">
                <Restaurant name="Mazel Tov" address="Akácfa u. 47, District VII" price="€€" desc="Gastronomía mediterránea y de Oriente Medio en un patio cubierto con vegetación." link="https://www.google.com/maps/place/Budapest,+Mazel+Tov,+Ak%C3%A1cfa+u.+47,+1073+Hungr%C3%ADa/@47.5002778,19.0655242,17z/data=!4m6!3m5!1s0x4741dc68eb5c0b91:0xf5991cd91e93b8f8!8m2!3d47.5002778!4d19.0655242!16s%2Fg%2F11b6qhjx3q" />
                <Restaurant name="Parisi 6" address="Párizsi u. 6b, District V" price="€€" desc="Cocina húngara sofisticada con toque moderno. Pato crujiente y postres tradicionales." link="https://www.google.com/maps/place/Budapest,+Parisi+6,+P%C3%A1rizsi+u.+6b,+1052+Hungr%C3%ADa/@47.4941428,19.0536826,17z/data=!4m6!3m5!1s0x4741dc41484216ab:0x2d967a7684dbcc83!8m2!3d47.4941428!4d19.0536826!16s%2Fg%2F11cjg959zf" />
                <Restaurant name="The Magic Budapest" address="Hajós u. 25, District VI" price="€€" desc="Restaurante temático con ambiente mágico. Ideal para familias." link="https://www.google.com/maps/place/Budapest,+The+Magic+Budapest,+Haj%C3%B3s+u.+25,+1065+Hungr%C3%ADa/@47.5040676,19.0574011,17z/data=!4m6!3m5!1s0x4741dd2111cfa28f:0xa4fa6fc46f2e2e90!8m2!3d47.5040676!4d19.0574011!16s%2Fg%2F11h7_nnxp3" />
                <Restaurant name="Trofea Grill Restaurant" address="Király u. 30-32, District VI" price="€€€" desc="Buffet libre ilimitado con +100 platos. Incluye bebidas (champagne, cerveza, vino)." link="https://www.google.com/maps/place/Budapest,+Trofea+Grill+Restaurant,+Kir%C3%A1ly+u.+30-32,+1061+Hungr%C3%ADa/@47.4999491,19.0593719,17z/data=!4m6!3m5!1s0x4741dc6980a21f35:0xba72d6dc4d9e4947!8m2!3d47.4999491!4d19.0593719!16s%2Fg%2F11r9pzrkc" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRACTICAL INFO - TRANSPORT */}
      <section id="info-practica" className="py-24 md:py-32 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-8 bg-amber-600" />
            <span className="text-[10px] uppercase tracking-[.2em] text-amber-700">Info práctica</span>
          </div>
          <h2 className="text-4xl md:text-5xl text-stone-900 leading-tight mb-16" style={{ fontFamily: 'Georgia, serif' }}>
            Todo lo que <span className="italic">necesitas saber</span>
          </h2>

          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <MapPin size={16} className="text-amber-600" />
              <h3 className="text-xl font-semibold text-stone-900">Transporte público</h3>
            </div>
            <div className="space-y-4 text-stone-700 text-sm leading-relaxed">
              <p><strong>Metro:</strong> 4 líneas (M1, M2, M3, M4). La M1 es Patrimonio UNESCO. Horario: 4:30-23:00h.</p>
              <p><strong>Tranvías:</strong> Línea 2 panorámica del Danubio. Líneas 4 y 6 por principales avenidas. Frecuencia 5-10 min.</p>
              <p><strong>Billetes:</strong> Sencillo 1,30€ (80 min sin transbordo) · 24h: 7€ · 72h: 14€ · 7 días: 19€ (todos ilimitados)</p>
              <p><strong>Importante:</strong> Valida SIEMPRE tu billete al subir. Inspecciones frecuentes con multas de 60€. App BKK Futár para horarios en tiempo real.</p>
            </div>

            <div className="mt-8">
              <h4 className="font-semibold text-stone-900 mb-4">Desde el aeropuerto Ferenc Liszt (BUD)</h4>
              <div className="space-y-3">
                <TransportOption name="Bus 100E Airport Express" price="5,5€" time="40-45 min" desc="Directo al centro, 24h/7 días, cada 20-30 min" />
                <TransportOption name="Transfer Privado" price="18€" time="25-30 min" desc="Puerta a puerta, ideal grupos y familias" link="https://gyg.me/zzfjHbKu" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRAVEL TOOLS */}
      <section id="herramientas" className="py-24 md:py-32 bg-stone-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-8 bg-amber-600" />
            <span className="text-[10px] uppercase tracking-[.2em] text-amber-700">Herramientas de viaje</span>
          </div>
          <h2 className="text-4xl md:text-5xl text-stone-900 leading-tight mb-12" style={{ fontFamily: 'Georgia, serif' }}>
            Tarjeta y <span className="italic">seguro</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <TravelTool
              icon={CreditCard}
              title="Tarjeta Revolut"
              benefits={['Sin comisiones en pagos en el extranjero', 'Tipo de cambio real (sin margen)', 'Retiradas gratis en cajeros hasta 200€/mes', 'Control total desde la app', 'Tarjetas virtuales desechables']}
              link="https://revolut.com/referral/?referral-code=antoni22jf!DEC1-25-AR-CH1H-CRY&geo-redirect"
              cta="Pedir Revolut gratis"
            />
            <TravelTool
              icon={Shield}
              title="Seguro IATI"
              benefits={['Asistencia médica 24/7', 'Cobertura de cancelación de viaje', 'Pérdida y robo de equipaje', 'Atención en español siempre', 'Repatriación incluida', '5% de descuento exclusivo ya aplicado']}
              link="https://www.iatiseguros.com/?r=37344279073491"
              cta="Contratar con 5% dto."
            />
          </div>
        </div>
      </section>

      {/* LEAD MAGNET */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 scroll-mt-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-300 rounded-full blur-[80px]" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-amber-600/20 border border-amber-500/30 px-3 py-1.5 mb-4">
                <Download size={12} className="text-amber-400" />
                <span className="text-[10px] uppercase tracking-wider text-amber-300 font-medium">Recurso gratuito</span>
              </div>
              <h3 className="text-2xl md:text-3xl text-white leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
                Descarga el itinerario <span className="italic text-amber-400">completo en PDF</span>
              </h3>
              <p className="mt-3 text-stone-300 text-sm leading-relaxed">
                Los 4 días hora por hora, mapa imprimible, presupuestos y todos los enlaces. Llévalo en el móvil sin conexión.
              </p>
              <ul className="mt-4 space-y-2">
                {['Itinerario día a día con horarios', 'Mapa con marcadores de cada punto', 'Presupuesto detallado + trucos de ahorro', 'Enlaces directos a reservas'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-xs text-stone-300">
                    <CheckCircle size={12} className="text-amber-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="shrink-0 w-full md:w-auto">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 md:p-8 max-w-sm mx-auto">
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Tu email para recibir el PDF"
                    className="w-full bg-white/10 border border-white/20 text-white placeholder:text-stone-400 px-4 py-3 text-sm focus:outline-none focus:border-amber-400 transition-colors"
                  />
                  <button className="w-full bg-amber-600 hover:bg-amber-500 text-white px-6 py-3.5 text-xs uppercase tracking-wider font-medium transition-colors flex items-center justify-center gap-2">
                    <Download size={14} />
                    Enviar itinerario gratis
                  </button>
                </div>
                <p className="mt-3 text-[10px] text-stone-500 text-center">
                  Sin spam. Solo la guía + ofertas exclusivas de viaje.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32 bg-white scroll-mt-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-8 bg-amber-600" />
            <span className="text-[10px] uppercase tracking-[.2em] text-amber-700">Preguntas frecuentes</span>
          </div>
          <h2 className="text-4xl md:text-5xl text-stone-900 leading-tight mb-12" style={{ fontFamily: 'Georgia, serif' }}>
            Preguntas <span className="italic">que todos se hacen</span>
          </h2>

          <div className="space-y-0">
            <FAQItem
              question="¿Es Budapest una ciudad cara?"
              answer="No, Budapest es una de las capitales europeas más económicas. Un menú del día cuesta 6-9€, cervezas locales 1,50-3€ y las entradas a atracciones principales son mucho más baratas que en Europa occidental. Presupuesto mochilero: 85€/día, confort: 125€/día."
            />
            <FAQItem
              question="¿Merece la pena el crucero nocturno por el Danubio?"
              answer="Es una de las experiencias más espectaculares de Budapest. Por solo 12€ disfrutas de 70 minutos viendo el Parlamento, el Castillo y todos los puentes iluminados. Se agota rápido los fines de semana, reserva con antelación."
            />
            <FAQItem
              question="¿Cuál es el mejor balneario para visitar?"
              answer="Széchenyi es el más grande y popular (18 piscinas, al aire libre). Gellért es más elegante y sofisticado (Art Nouveau, cubierto). Para tu primera vez recomendamos Széchenyi por su ambiente y dimensiones."
            />
            <FAQItem
              question="¿Se necesita efectivo en Budapest?"
              answer="Sí, es recomendable tener algo de efectivo (forints). Muchos sitios aceptan tarjeta, pero puestos de mercado, baños públicos y pequeños comercios requieren efectivo. NUNCA cambies dinero en la calle ni uses cajeros Euronet."
            />
            <FAQItem
              question="¿Cuántos días necesito para visitar Budapest?"
              answer="Con 4 días puedes ver lo imprescindible cómodamente. 3 días funcionan si priorizas, pero 4 te permiten disfrutar sin prisas y añadir una excursión (Recodo del Danubio, por ejemplo)."
            />
            <FAQItem
              question="¿Cómo moverse del aeropuerto al centro?"
              answer="La opción más práctica es el Bus 100E: 5,5€, funciona 24h y tarda 40-45 minutos hasta el centro (Deák Ferenc tér). También hay transfers privados desde 18€ que te llevan puerta a puerta en 25-30 minutos."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 md:py-32 bg-stone-900 text-stone-50 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.pexels.com/photos/73796/budapest-hungary-parliament-building-73796.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-stone-900/70" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-8 bg-amber-400" />
            <span className="text-[10px] uppercase tracking-[.2em] text-amber-400">Más guías</span>
            <span className="h-px w-8 bg-amber-400" />
          </div>
          <h2 className="text-5xl md:text-6xl leading-[1.05] text-balance" style={{ fontFamily: 'Georgia, serif' }}>
            ¿Te ha gustado <span className="italic text-amber-400">esta guía</span>?
          </h2>
          <p className="mt-6 max-w-xl mx-auto text-stone-100/75 text-lg">
            Tenemos guías similares para Viena, Praga, Ámsterdam, Roma y Londres. Todas con itinerarios optimizados y presupuestos reales.
          </p>
          <button
            onClick={() => navigate('/guias')}
            className="mt-10 inline-flex items-center justify-center px-8 py-4 bg-stone-50 text-stone-900 text-xs uppercase tracking-[.15em] hover:bg-amber-400 transition-colors"
          >
            Ver todas las guías
          </button>
        </div>
      </section>

      {/* Floating Section Navigator */}
      {showNav && (
        <div className="fixed bottom-6 right-6 z-50">
          {navOpen && (
            <div className="absolute bottom-14 right-0 w-56 bg-white rounded-xl shadow-2xl border border-stone-200 overflow-hidden mb-2 animate-in">
              <div className="px-4 py-3 border-b border-stone-100 bg-stone-50">
                <span className="text-[10px] uppercase tracking-[.15em] text-stone-500 font-medium">Ir a sección</span>
              </div>
              <nav className="py-1 max-h-72 overflow-y-auto">
                {NAV_SECTIONS.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => scrollTo(s.id)}
                    className="w-full text-left px-4 py-2.5 text-sm text-stone-700 hover:bg-amber-50 hover:text-amber-800 transition-colors"
                  >
                    {s.label}
                  </button>
                ))}
              </nav>
            </div>
          )}
          <button
            onClick={() => setNavOpen(!navOpen)}
            className="p-3.5 bg-teal-600 text-white rounded-full shadow-lg hover:bg-teal-500 transition-all hover:scale-105"
            aria-label="Navegar secciones"
          >
            {navOpen ? <X className="h-5 w-5" /> : <List className="h-5 w-5" />}
          </button>
        </div>
      )}
    </article>
  );
};

// ─── Sub-components ────────────────────────────────────────────

function HeroStat({ icon: Icon, label, value }: { icon: any; label: string; value: string }) {
  return (
    <div>
      <div className="flex items-center gap-2 text-[10px] uppercase tracking-[.15em] text-stone-100/70 mb-2">
        <Icon size={12} />
        {label}
      </div>
      <div className="text-2xl md:text-3xl text-stone-50" style={{ fontFamily: 'Georgia, serif' }}>
        {value}
      </div>
    </div>
  );
}

function JourneyMap() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((p) => (p + 1) % 4), 3000);
    return () => clearInterval(id);
  }, []);

  const stops = [
    { label: 'Día 1', place: 'Parlamento + Sinagoga + Basílica' },
    { label: 'Día 2', place: 'Castillo + Bastión + Crucero' },
    { label: 'Día 3', place: 'Széchenyi + Plaza Héroes + Café' },
    { label: 'Día 4', place: 'Mercado + Colina Gellért' },
  ];

  return (
    <div className="bg-stone-900 text-stone-50 px-6 md:px-10 py-10 md:py-14 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <Compass size={14} className="text-amber-400" />
          <span className="text-[10px] uppercase tracking-[.2em] text-amber-400">La travesía</span>
        </div>

        <div className="relative">
          <div className="absolute left-0 right-0 top-[18px] h-px bg-stone-100/15" />
          <div
            className="absolute left-0 top-[18px] h-px bg-amber-400 transition-all duration-[1800ms] ease-in-out"
            style={{ width: `${(active / 3) * 100}%` }}
          />

          <ol className="relative grid grid-cols-4 gap-2">
            {stops.map((stop, i) => {
              const isActive = i === active;
              const isPast = i < active;
              return (
                <li key={i} className="flex flex-col items-center text-center">
                  <button
                    onMouseEnter={() => setActive(i)}
                    onClick={() => {
                      setActive(i);
                      document.getElementById(`dia-${i + 1}`)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="group flex flex-col items-center cursor-pointer"
                  >
                    <span
                      className={`relative w-[14px] h-[14px] rounded-full border-2 transition-all duration-500 ${
                        isActive
                          ? 'bg-amber-400 border-amber-400 scale-125 shadow-[0_0_0_6px_rgba(245,158,11,0.18)]'
                          : isPast
                          ? 'bg-amber-400 border-amber-400'
                          : 'bg-stone-900 border-stone-100/40 group-hover:border-amber-400'
                      }`}
                    />
                    <span className={`mt-3 text-[9px] uppercase tracking-[.15em] transition-colors ${isActive ? 'text-amber-400' : 'text-stone-100/60'}`}>
                      {stop.label}
                    </span>
                    <span className={`mt-1 text-[10px] transition-colors ${isActive ? 'text-stone-50' : 'text-stone-100/50'}`}>
                      {stop.place}
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </div>
  );
}

function DaySectionHeader({ number, title }: { number: number; title: string }) {
  return (
    <div className="mb-12 md:mb-16">
      <div className="flex items-center gap-3 mb-5">
        <Compass size={14} className="text-amber-600" strokeWidth={1.5} />
        <span className="text-[10px] uppercase tracking-[.2em] text-amber-700">
          Itinerario día {number}
        </span>
      </div>
      <h2 className="text-5xl md:text-7xl text-stone-900 leading-[0.95]" style={{ fontFamily: 'Georgia, serif' }}>
        Día {number}:
        <br />
        <span className="italic text-amber-700">{title}</span>
      </h2>
    </div>
  );
}

function DayTimeline({ stops, color }: { stops: { time: string; place: string }[]; color: 'amber' | 'rose' | 'teal' }) {
  const colorMap = {
    amber: { dot: 'bg-amber-500', line: 'bg-amber-300', text: 'text-amber-700', bg: 'bg-amber-50' },
    rose: { dot: 'bg-rose-500', line: 'bg-rose-300', text: 'text-rose-700', bg: 'bg-rose-50' },
    teal: { dot: 'bg-teal-500', line: 'bg-teal-300', text: 'text-teal-700', bg: 'bg-teal-50' },
  };
  const c = colorMap[color];

  return (
    <div className={`${c.bg} border border-stone-200/60 p-5 md:p-6 rounded-sm`}>
      <div className="flex items-center gap-2 mb-4">
        <Clock size={12} className={c.text} />
        <span className={`text-[10px] uppercase tracking-[.15em] ${c.text} font-medium`}>Recorrido del día</span>
      </div>
      <div className="relative flex items-center gap-0 overflow-x-auto pb-2">
        {stops.map((stop, i) => (
          <div key={i} className="flex items-center shrink-0">
            <div className="flex flex-col items-center">
              <span className={`w-3 h-3 rounded-full ${c.dot} shadow-sm`} />
              <span className={`mt-1.5 text-[10px] font-semibold ${c.text}`}>{stop.time}</span>
              <span className="mt-0.5 text-[11px] text-stone-600 whitespace-nowrap">{stop.place}</span>
            </div>
            {i < stops.length - 1 && (
              <div className={`w-8 md:w-14 h-0.5 ${c.line} mx-1 mt-[-18px]`} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function Attraction({
  time,
  title,
  image,
  description,
  details,
  tip,
  link,
  secondaryLink,
  index,
}: {
  time: string;
  title: string;
  image: string;
  description: string;
  details: string[];
  tip?: string;
  link?: { url: string; label: string; price?: string; badge?: string };
  secondaryLink?: { url: string; label: string; price?: string; badge?: string };
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const isReverse = index % 2 === 1;

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.15 }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`relative grid md:grid-cols-12 gap-6 md:gap-10 items-center transition-all duration-1000 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      <div className={`md:col-span-7 relative group ${isReverse ? 'md:order-2 md:col-start-6' : ''}`}>
        <div className="relative aspect-[4/3] md:aspect-[16/11] overflow-hidden bg-stone-900">
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-stone-900/40 via-transparent to-transparent" />
          <div className="absolute top-4 left-4 bg-stone-900/70 backdrop-blur-sm text-stone-50 text-[11px] uppercase tracking-wider px-3 py-1.5 flex items-center gap-2">
            <Clock size={11} />
            {time}
          </div>
        </div>
      </div>

      <div className={`md:col-span-5 md:px-2 ${isReverse ? 'md:order-1 md:col-start-1' : ''}`}>
        <div className="flex items-center gap-3 mb-4">
          <span className="text-[10px] uppercase tracking-[.2em] text-amber-700">{time}</span>
          <span className="h-px flex-1 bg-stone-800/15" />
        </div>
        <h3 className="text-3xl md:text-[2.4rem] text-stone-900 leading-[1.05] text-balance" style={{ fontFamily: 'Georgia, serif' }}>
          {title}
        </h3>
        <p className="mt-5 text-stone-600 leading-relaxed">
          {description}
        </p>

        <ul className="mt-6 space-y-2">
          {details.map((d) => (
            <li key={d} className="flex items-start gap-3 text-sm text-stone-700">
              <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
              {d}
            </li>
          ))}
        </ul>

        {tip && (
          <div className="mt-6 bg-amber-50 border border-amber-200 px-4 py-3 text-sm text-amber-900">
            <strong className="text-amber-800">Consejo:</strong> {tip}
          </div>
        )}

        {link && (
          <BookingCard url={link.url} label={link.label} price={link.price} badge={link.badge} />
        )}
        {secondaryLink && (
          <BookingCard url={secondaryLink.url} label={secondaryLink.label} price={secondaryLink.price} badge={secondaryLink.badge} />
        )}
      </div>
    </div>
  );
}

const MAP_MARKERS = [
  { lat: 47.5073, lng: 19.0458, title: 'Parlamento Húngaro', day: 1 },
  { lat: 47.4973, lng: 19.0621, title: 'Gran Sinagoga', day: 1 },
  { lat: 47.5008, lng: 19.0536, title: 'Basílica de San Esteban', day: 1 },
  { lat: 47.5014, lng: 19.0644, title: 'Szimpla Kert', day: 1 },
  { lat: 47.4962, lng: 19.0393, title: 'Castillo de Buda', day: 2 },
  { lat: 47.5020, lng: 19.0346, title: 'Bastión de los Pescadores', day: 2 },
  { lat: 47.5148, lng: 19.0775, title: 'Balnearios Széchenyi', day: 3 },
  { lat: 47.5149, lng: 19.0777, title: 'Plaza de los Héroes', day: 3 },
  { lat: 47.4990, lng: 19.0674, title: 'New York Café', day: 3 },
  { lat: 47.4871, lng: 19.0582, title: 'Mercado Central', day: 4 },
  { lat: 47.4854, lng: 19.0472, title: 'Colina Gellért', day: 4 },
];

function BudapestMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<any>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstance.current) return;

    import('leaflet').then((L) => {
      if (!mapRef.current) return;

      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
      document.head.appendChild(link);

      const map = L.map(mapRef.current, {
        center: [47.4979, 19.0550],
        zoom: 13,
        scrollWheelZoom: false,
      });

      L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/">CARTO</a>',
        maxZoom: 19,
      }).addTo(map);

      const dayColors: Record<number, string> = { 1: '#d97706', 2: '#e11d48', 3: '#0d9488', 4: '#7c3aed' };
      const dayLabels: Record<number, string> = { 1: 'Día 1', 2: 'Día 2', 3: 'Día 3', 4: 'Día 4' };

      MAP_MARKERS.forEach((m) => {
        const color = dayColors[m.day];
        const icon = L.divIcon({
          className: 'custom-marker',
          html: `<div style="width:28px;height:28px;background:${color};border:3px solid white;border-radius:50%;box-shadow:0 2px 6px rgba(0,0,0,0.3);display:flex;align-items:center;justify-content:center;">
            <span style="color:white;font-size:10px;font-weight:700;">${m.day}</span>
          </div>`,
          iconSize: [28, 28],
          iconAnchor: [14, 14],
        });

        L.marker([m.lat, m.lng], { icon })
          .addTo(map)
          .bindPopup(`<div style="font-family:Georgia,serif;"><strong>${m.title}</strong><br/><span style="font-size:11px;color:#78716c;">${dayLabels[m.day]}</span></div>`);
      });

      mapInstance.current = map;
      setTimeout(() => map.invalidateSize(), 200);
    });

    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, []);

  return (
    <div className="relative">
      <div ref={mapRef} className="w-full h-[400px] md:h-[500px] rounded-sm border border-stone-200 z-0" />
      <div className="mt-4 flex flex-wrap gap-4">
        <span className="flex items-center gap-2 text-xs text-stone-600">
          <span className="w-3 h-3 rounded-full bg-amber-600" /> Día 1: Parlamento + Sinagoga
        </span>
        <span className="flex items-center gap-2 text-xs text-stone-600">
          <span className="w-3 h-3 rounded-full bg-rose-600" /> Día 2: Castillo + Crucero
        </span>
        <span className="flex items-center gap-2 text-xs text-stone-600">
          <span className="w-3 h-3 rounded-full bg-teal-600" /> Día 3: Széchenyi + Héroes
        </span>
        <span className="flex items-center gap-2 text-xs text-stone-600">
          <span className="w-3 h-3 rounded-full bg-violet-600" /> Día 4: Mercado + Gellért
        </span>
      </div>
    </div>
  );
}

function BookingCard({ url, label, price, badge }: { url: string; label: string; price?: string; badge?: string }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-6 block border-2 border-amber-200 bg-gradient-to-br from-amber-50 to-white p-4 hover:border-amber-400 hover:shadow-lg transition-all group relative overflow-hidden"
    >
      {badge && (
        <span className="absolute top-0 right-0 bg-red-600 text-white text-[9px] uppercase tracking-wider px-2.5 py-1 font-semibold">
          {badge}
        </span>
      )}
      <div className="flex items-center justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-sm font-semibold text-stone-900 group-hover:text-amber-800 transition-colors">{label}</span>
          </div>
          {price && (
            <span className="text-xs text-stone-500">Desde {price}</span>
          )}
          <div className="flex items-center gap-3 mt-2">
            <span className="flex items-center gap-1 text-[10px] text-stone-500">
              <Users size={10} />
              <span>+500 reservas</span>
            </span>
            <span className="flex items-center gap-0.5 text-[10px] text-amber-600">
              <Star size={9} className="fill-amber-500" />
              <Star size={9} className="fill-amber-500" />
              <Star size={9} className="fill-amber-500" />
              <Star size={9} className="fill-amber-500" />
              <Star size={9} className="fill-amber-500" />
            </span>
          </div>
        </div>
        <div className="shrink-0 bg-stone-900 group-hover:bg-amber-700 text-white text-[10px] uppercase tracking-wider px-4 py-2.5 transition-colors flex items-center gap-1.5">
          Reservar <ExternalLink size={11} />
        </div>
      </div>
    </a>
  );
}

function ExtraCard({ title, desc, link }: { title: string; desc: string; link?: string }) {
  return (
    <div className={`border p-6 transition-all ${link ? 'border-amber-200 bg-gradient-to-b from-amber-50/50 to-white hover:shadow-xl hover:border-amber-400' : 'border-stone-200 hover:border-stone-300 hover:shadow-lg'}`}>
      <h3 className="text-xl text-stone-900 mb-3" style={{ fontFamily: 'Georgia, serif' }}>{title}</h3>
      <p className="text-sm text-stone-600 leading-relaxed">{desc}</p>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 flex items-center justify-between bg-stone-900 hover:bg-amber-700 text-white px-4 py-3 transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider font-medium">Reservar experiencia</span>
          <ExternalLink size={13} className="group-hover:translate-x-0.5 transition-transform" />
        </a>
      )}
    </div>
  );
}

function TransportOption({ name, price, time, desc, link }: { name: string; price: string; time: string; desc: string; link?: string }) {
  const content = (
    <div className={`flex items-center justify-between border-2 p-4 transition-all ${link ? 'border-stone-100 bg-white hover:border-amber-300 hover:shadow-md group' : 'border-stone-100 bg-white'}`}>
      <div className="flex-1">
        <div className={`font-semibold text-stone-900 ${link ? 'group-hover:text-amber-700' : ''} transition-colors`}>{name}</div>
        <div className="text-xs text-stone-500 mt-0.5">{desc}</div>
      </div>
      <div className="flex items-center gap-3">
        <div className="text-right">
          <div className="text-lg font-bold text-amber-700">{price}</div>
          <div className="text-[10px] text-stone-500">{time}</div>
        </div>
        {link && (
          <span className="shrink-0 w-8 h-8 bg-stone-900 group-hover:bg-amber-700 rounded-full flex items-center justify-center transition-colors">
            <ExternalLink size={12} className="text-white" />
          </span>
        )}
      </div>
    </div>
  );
  if (link) return <a href={link} target="_blank" rel="noopener noreferrer">{content}</a>;
  return content;
}

function HotelZone({ zone, description, hotels }: { zone: string; description: string; hotels: { name: string; stars: number; link: string; highlight: string }[] }) {
  return (
    <div>
      <h3 className="text-xl font-semibold text-stone-900 mb-2">{zone}</h3>
      <p className="text-sm text-stone-600 mb-6">{description}</p>
      <div className="space-y-4">
        {hotels.map((h, i) => (
          <a
            key={h.name}
            href={h.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`block border-2 p-5 transition-all group relative overflow-hidden ${
              i === 0
                ? 'border-amber-300 bg-gradient-to-br from-amber-50 to-white hover:shadow-xl hover:border-amber-500'
                : 'border-stone-100 bg-white hover:border-amber-300 hover:shadow-lg'
            }`}
          >
            {i === 0 && (
              <span className="absolute top-0 right-0 bg-amber-600 text-white text-[9px] uppercase tracking-wider px-2.5 py-1 font-semibold">
                Nuestra elección
              </span>
            )}
            <div className="flex items-center justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-semibold text-stone-900 group-hover:text-amber-800 transition-colors">{h.name}</span>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs text-amber-600">{Array(h.stars).fill('★').join('')}</span>
                  <span className="text-xs text-stone-400">|</span>
                  <span className="text-xs text-stone-500">{h.highlight}</span>
                </div>
              </div>
              <span className="shrink-0 bg-stone-900 group-hover:bg-amber-700 text-white text-[10px] uppercase tracking-wider px-4 py-2.5 transition-colors flex items-center gap-1.5">
                Ver hotel <ExternalLink size={11} />
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

function Restaurant({ name, address, price, desc, link }: { name: string; address: string; price: string; desc: string; link?: string }) {
  return (
    <div className={`border-2 p-4 transition-all ${link ? 'border-amber-100 bg-amber-50/30 hover:border-amber-300 hover:shadow-md' : 'border-stone-100'}`}>
      <div className="flex items-baseline justify-between">
        <span className="font-semibold text-stone-900">{name}</span>
        <span className="text-xs text-amber-700 font-bold bg-amber-100 px-2 py-0.5 rounded-sm">{price}</span>
      </div>
      <p className="text-xs text-stone-500 mt-0.5">{address}</p>
      <p className="text-sm text-stone-600 mt-2">{desc}</p>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center gap-2 bg-stone-900 hover:bg-amber-700 text-white text-[10px] uppercase tracking-wider px-3.5 py-2 transition-colors"
        >
          Ver en Google Maps <ExternalLink size={10} />
        </a>
      )}
    </div>
  );
}

function TravelTool({ icon: Icon, title, benefits, link, cta }: { icon: any; title: string; benefits: string[]; link: string; cta: string }) {
  return (
    <div className="border-2 border-amber-200 bg-gradient-to-b from-amber-50/50 to-white p-6 md:p-8 hover:shadow-xl hover:border-amber-400 transition-all relative overflow-hidden group">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 to-amber-300" />
      <div className="flex items-center gap-3 mb-5">
        <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
          <Icon size={20} className="text-amber-700" />
        </div>
        <h3 className="text-xl font-semibold text-stone-900">{title}</h3>
      </div>
      <ul className="space-y-2.5 mb-6">
        {benefits.map((b) => (
          <li key={b} className="flex items-start gap-2.5 text-sm text-stone-700">
            <span className="mt-[6px] w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
            {b}
          </li>
        ))}
      </ul>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full flex items-center justify-center gap-2 bg-stone-900 group-hover:bg-amber-700 text-stone-50 px-6 py-4 text-sm uppercase tracking-[.1em] font-medium transition-colors"
      >
        {cta} <ExternalLink size={14} />
      </a>
      <p className="mt-3 text-center text-[10px] text-stone-400 uppercase tracking-wider">Enlace exclusivo con descuento</p>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-stone-200">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="text-base font-medium text-stone-900 group-hover:text-amber-700 transition-colors pr-4">{question}</span>
        <span className={`shrink-0 w-6 h-6 border border-stone-300 flex items-center justify-center text-stone-500 transition-transform ${open ? 'rotate-45 border-amber-400 text-amber-600' : ''}`}>
          <span className="text-lg leading-none">+</span>
        </span>
      </button>
      {open && (
        <div className="pb-5 pr-10">
          <p className="text-sm text-stone-600 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default BudapestGuideArticle;
