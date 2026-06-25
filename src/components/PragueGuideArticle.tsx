import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Euro, MapPin, Compass, List, X, Star, Users, ExternalLink, Bed, UtensilsCrossed, CreditCard, Shield, Download, CheckCircle } from 'lucide-react';
import { Beer as Train } from 'lucide-react';

interface PragueGuideArticleProps {
  onBack: () => void;
}

const NAV_SECTIONS = [
  { id: 'mapa', label: 'Mapa' },
  { id: 'dia-1', label: 'Día 1' },
  { id: 'dia-2', label: 'Día 2' },
  { id: 'dia-3', label: 'Día 3' },
  { id: 'extras', label: 'Más experiencias' },
  { id: 'alojamiento', label: 'Dónde dormir' },
  { id: 'comer', label: 'Dónde comer' },
  { id: 'info-practica', label: 'Transporte público' },
  { id: 'herramientas', label: 'Tarjeta y seguro' },
];

const PragueGuideArticle: React.FC<PragueGuideArticleProps> = ({ onBack }) => {
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
            src="https://images.pexels.com/photos/3046347/pexels-photo-3046347.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Puente de Carlos y Castillo de Praga al amanecer"
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
                Guía Bohemia · 3 Días
              </span>
            </div>
            <h1 className="text-stone-50 text-balance font-light leading-[0.98]" style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)', fontFamily: 'Georgia, serif' }}>
              Praga en 3 Días
            </h1>
            <p className="mt-6 italic text-2xl md:text-3xl text-amber-300" style={{ fontFamily: 'Georgia, serif' }}>
              La Ciudad de los Cien Campanarios
            </p>
          </div>

          <div className="mt-14 grid grid-cols-3 gap-6 md:gap-10 text-stone-100 border-t border-stone-100/20 pt-8">
            <HeroStat icon={Calendar} label="Duración" value="3 días" />
            <HeroStat icon={Euro} label="Desde" value="60€/día" />
            <HeroStat icon={MapPin} label="Experiencia" value="Medieval" />
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
            Praga es la Ciudad Dorada de Europa, un destino de cuento de hadas donde cada calle empedrada cuenta mil años de historia. Con su arquitectura medieval perfectamente conservada y precios que siguen siendo accesibles, es uno de los destinos más mágicos del continente.
          </p>
          <p className="mt-8 text-lg text-stone-600 leading-relaxed max-w-3xl">
            Pero Praga es mucho más que el famoso Puente de Carlos y el Castillo en la colina. Es caminar por el Barrio Judío sintiendo el peso de la historia. Es perderte en callejones medievales que parecen sacados de un libro. Es disfrutar de la mejor cerveza del mundo por menos de 2€ en pubs centenarios y sentir que has viajado en el tiempo.
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
          <PragueMap />
        </div>
      </section>

      {/* DAY 1 */}
      <section id="dia-1" className="py-24 md:py-36 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <DaySectionHeader number={1} title="Corazón Medieval y Herencia Judía" />

          <DayTimeline
            stops={[
              { time: '9:00', place: 'Plaza Ciudad Vieja' },
              { time: '10:30', place: 'Torre Ayuntamiento' },
              { time: '11:30', place: 'Barrio Judío' },
              { time: '15:30', place: 'Clementinum' },
              { time: '17:30', place: 'Casa Danzante' },
              { time: '20:00', place: 'Teatro Negro' },
            ]}
            color="amber"
          />

          <div className="mt-16 space-y-24 md:space-y-32">
            <Attraction
              time="9:00h"
              title="Plaza de la Ciudad Vieja"
              image="https://images.pexels.com/photos/7245230/pexels-photo-7245230.jpeg?auto=compress&cs=tinysrgb&w=1200"
              description="Comienza tu aventura en el corazón histórico de Praga, donde cada edificio cuenta siglos de historia. La Iglesia de Týn con sus torres góticas, la Iglesia de San Nicolás barroca, el Palacio Kinský rococó y el famoso Reloj Astronómico de 1410 que cada hora en punto ofrece su espectáculo de los 12 Apóstoles."
              details={[
                'Reloj Astronómico: espectáculo cada hora en punto',
                'Construido en 1410, el más antiguo del mundo en funcionamiento',
                'Mejor momento para fotos: 9:00h sin multitudes',
                'Iglesia de Týn, San Nicolás y Palacio Kinský',
                'Free Tour en español desde la plaza',
              ]}
              tip="Llega a las 9:00h para disfrutar de la plaza casi vacía y las mejores fotos sin multitudes."
              link={{ url: 'https://www.freetour.com/es/prague/free-tour-ciudad-vieja-y-barrio-judio-reloj-astronomico?referralID=rFW5gyO0D7w7JOqo&campaign=PragaCentro', label: 'Reservar Free Tour en español', price: 'Gratis (propina)', badge: 'Gratis' }}
              index={0}
            />

            <Attraction
              time="10:30h"
              title="Torre del Ayuntamiento"
              image="https://images.pexels.com/photos/17307596/pexels-photo-17307596.jpeg?auto=compress&cs=tinysrgb&w=1200"
              description="Sube 70 metros para contemplar la Ciudad Dorada desde las alturas. Vista panorámica 360° del Castillo de Praga, el Puente de Carlos serpenteante, los tejados rojos típicos y las torres de la ciudad. Ascensor disponible."
              details={[
                'Precio: 300 CZK (aprox. 12€), reducida 200 CZK (aprox. 8€)',
                'Horario: 9:00-22:00h',
                'Ascensor disponible',
                'Vistas al Castillo, Puente de Carlos y toda la ciudad',
              ]}
              link={{ url: 'https://gyg.me/a770HnSE', label: 'Reservar entradas Torre Ayuntamiento', price: '12€' }}
              index={1}
            />

            <Attraction
              time="11:30h"
              title="Barrio Judío (Josefov)"
              image="https://images.pexels.com/photos/7245230/pexels-photo-7245230.jpeg?auto=compress&cs=tinysrgb&w=1200"
              description="Un viaje conmovedor por mil años de historia judía en el corazón de Praga. El Barrio Judío mejor conservado de Europa con 6 sinagogas históricas y el Antiguo Cementerio Judío con 12.000 lápidas. La Sinagoga Española es la más bella, la Vieja-Nueva la más antigua y la Pinkas un memorial del Holocausto."
              details={[
                'Entrada conjunta: 500 CZK (aprox. 20€), reducida 370 CZK (aprox. 15€)',
                '6 Sinagogas históricas + Antiguo Cementerio Judío',
                'Sinagoga Española: la más bella de Europa',
                'Sinagoga Vieja-Nueva: la más antigua en activo',
                'CERRADO sábados por Sabbat',
              ]}
              tip="Sinagogas cerradas los sábados por Sabbat. Planifica tu visita entre domingo y viernes."
              link={{ url: 'https://gyg.me/RaU4n6Wm', label: 'Tour guiado Barrio Judío completo', price: '20€', badge: 'Popular' }}
              index={2}
            />

            <Attraction
              time="15:30h"
              title="Clementinum — La Biblioteca Más Bella del Mundo"
              image="https://images.pexels.com/photos/5426128/pexels-photo-5426128.jpeg?auto=compress&cs=tinysrgb&w=1200"
              description="Descubre la joya barroca que ha permanecido intacta desde el siglo XVIII. La Biblioteca Barroca espectacular, la Sala de los Meridianos y la Torre Astronómica con 170 escalones y vistas panorámicas únicas."
              details={[
                'Solo visitas guiadas (inglés y checo)',
                'Duración: 50 minutos',
                'Biblioteca Barroca + Sala de los Meridianos',
                'Torre Astronómica con 170 escalones',
                'Vistas panorámicas únicas de la ciudad',
              ]}
              link={{ url: 'https://gyg.me/Epi0atVq', label: 'Reservar tour Clementinum', price: '15€' }}
              index={3}
            />

            <Attraction
              time="17:30h"
              title="Casa Danzante"
              image="https://images.pexels.com/photos/2930357/pexels-photo-2930357.jpeg?auto=compress&cs=tinysrgb&w=1200"
              description="El edificio más controvertido y fotogénico de Praga moderna. Diseñada por Vlado Milunić e inaugurada en 1996, está inspirada en Fred Astaire y Ginger Rogers. Mirador en la azotea con bar y vistas espectaculares."
              details={[
                'Diseñada por Vlado Milunić (1996)',
                'Inspirada en Fred Astaire y Ginger Rogers',
                'Mirador en azotea con bar',
                'Vista exterior suficiente, perfecto para fotos al atardecer',
              ]}
              index={4}
            />

            <Attraction
              time="20:00h"
              title="Teatro Negro"
              image="https://images.pexels.com/photos/3046347/pexels-photo-3046347.jpeg?auto=compress&cs=tinysrgb&w=1200"
              description="Termina el día con una experiencia artística que nació en Praga. Teatro mudo con efectos ópticos donde los objetos flotan en el aire. Perfecto para todas las edades y no requiere conocimiento del idioma."
              details={[
                'Teatro mudo con efectos ópticos únicos',
                'Duración: 60-90 minutos',
                'Precios: 15-25€ según teatro',
                'Perfecto para todas las edades',
                'Reserva recomendada en temporada alta',
              ]}
              index={5}
            />
          </div>
        </div>
      </section>

      {/* DAY 2 */}
      <section id="dia-2" className="py-24 md:py-36 bg-stone-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <DaySectionHeader number={2} title="Castillo Imperial y Romance Bohemio" />

          <DayTimeline
            stops={[
              { time: '9:00', place: 'Castillo de Praga' },
              { time: '12:00', place: 'Callejón del Oro' },
              { time: '14:00', place: 'Puente de Carlos' },
              { time: '16:00', place: 'Muro de Lennon' },
              { time: '18:00', place: 'Crucero Moldava' },
            ]}
            color="rose"
          />

          <div className="mt-16 space-y-24 md:space-y-32">
            <Attraction
              time="9:00h"
              title="Castillo de Praga"
              image="https://images.pexels.com/photos/16285135/pexels-photo-16285135.jpeg?auto=compress&cs=tinysrgb&w=1200"
              description="El castillo más grande del mundo. Comienza temprano en el complejo real que definió la historia de Bohemia. El circuito incluye la Catedral de San Vito (joya gótica), el Antiguo Palacio Real, la Basílica de San Jorge y el Callejón del Oro."
              details={[
                'Precio: 450 CZK (aprox. 18€) circuito completo',
                'Acceso: Tranvía 22 hasta Pražský Hrad',
                'Duración: 3-4 horas completo',
                'Catedral de San Vito, Palacio Real, Basílica San Jorge',
                'Mejor momento: 9:00h apertura para evitar colas',
              ]}
              tip="Compra entrada online para evitar colas. Empieza por la Catedral cuando esté menos concurrida."
              link={{ url: 'https://gyg.me/Mszm1WAX', label: 'Entradas oficiales Castillo de Praga', price: '18€' }}
              secondaryLink={{ url: 'https://gyg.me/rQRkcmJj', label: 'Tour guiado Castillo completo', price: '35€', badge: 'Completo' }}
              index={0}
            />

            <Attraction
              time="12:00h"
              title="Callejón del Oro"
              image="https://images.pexels.com/photos/31687789/pexels-photo-31687789.jpeg?auto=compress&cs=tinysrgb&w=1200"
              description="La calle más famosa del castillo, hogar de orfebres y después de artistas. Casitas coloridas del siglo XVI donde Franz Kafka vivió en el n.22. Casas-museo reconstruidas, talleres de artesanos y tiendas de souvenirs únicos."
              details={[
                'Casas del siglo XVI de los orfebres del emperador',
                'Franz Kafka vivió en el n.22',
                'Casas-museo reconstruidas con vida medieval',
                'Talleres de artesanos y tiendas únicas',
                'Incluido en la entrada del Castillo',
              ]}
              index={1}
            />

            <Attraction
              time="14:00h"
              title="Puente de Carlos"
              image="https://images.pexels.com/photos/126292/pexels-photo-126292.jpeg?auto=compress&cs=tinysrgb&w=1200"
              description="Baja del castillo hacia el puente más famoso de Europa Central. Construido en 1357 por Carlos IV, mide 516 metros y cuenta con 30 estatuas barrocas. Solo peatonal desde 1950, con artistas callejeros y vistas al castillo espectaculares."
              details={[
                'Construido en 1357 por Carlos IV',
                '516 metros de longitud, 30 estatuas barrocas',
                'Solo peatonal desde 1950',
                'Toca la estatua de San Juan Nepomuceno (tradición)',
                'Mejor luz para fotos: media tarde',
              ]}
              tip="Foto perfecta: Desde el lado de Malá Strana hacia el castillo, especialmente entre 15:00-16:00h."
              index={2}
            />

            <Attraction
              time="16:00h"
              title="Muro de John Lennon"
              image="https://images.pexels.com/photos/10133414/pexels-photo-10133414.jpeg?auto=compress&cs=tinysrgb&w=1200"
              description="Un símbolo de paz y libertad que resistió al comunismo. Grafitis desde los años 80, renovado constantemente. Cerca del muro: Isla de Kampa (parque romántico), la calle más estrecha de Praga y el Palacio Wallenstein."
              details={[
                'Símbolo de resistencia pacífica desde los 80',
                'Renovado constantemente con nuevos mensajes',
                'Isla de Kampa: parque romántico al lado',
                'Calle más estrecha de Praga cerca',
                'Palacio Wallenstein con jardines gratuitos',
              ]}
              index={3}
            />

            <Attraction
              time="18:00h"
              title="Crucero por el Moldava"
              image="https://images.pexels.com/photos/16351151/pexels-photo-16351151.jpeg?auto=compress&cs=tinysrgb&w=1200"
              description="Contempla Praga desde el río mientras el sol se pone sobre la Ciudad Dorada. Vistas únicas del Castillo iluminado, el Puente de Carlos dorado y todos los puentes históricos desde el agua."
              details={[
                'Duración: 60-90 minutos',
                'Precio: 15-25€ según empresa',
                'Incluye audioguía en español',
                'Bebida opcional a bordo',
                'Timing perfecto: atardecer',
              ]}
              tip="Reserva para las 18:00h en verano o 17:00h en invierno para capturar el atardecer perfecto sobre Praga."
              link={{ url: 'https://gyg.me/OIy3uAsC', label: 'Reservar Crucero por el Moldava', price: '15€', badge: 'Popular' }}
              index={4}
            />
          </div>
        </div>
      </section>

      {/* DAY 3 */}
      <section id="dia-3" className="py-24 md:py-36 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <DaySectionHeader number={3} title="Historia Profunda y Vistas Panorámicas" />

          <DayTimeline
            stops={[
              { time: '9:00', place: 'Excursión día' },
              { time: '17:00', place: 'Torre Petřín' },
            ]}
            color="teal"
          />

          <div className="mt-16 space-y-24 md:space-y-32">
            <Attraction
              time="9:00h"
              title="Excursión a Terezín — Memoria Histórica"
              image="https://images.pexels.com/photos/949081/pexels-photo-949081.jpeg?auto=compress&cs=tinysrgb&w=1200"
              description="Una excursión conmovedora al campo de concentración que no debemos olvidar. Experiencia educativa profunda sobre la historia del Holocausto con transporte y guía en español incluido."
              details={[
                'Duración: Día completo (8h)',
                'Incluye: Transporte + guía en español',
                'Precio: 45-60€ por persona',
                'Preparación emocional recomendada',
                'Una experiencia que no se olvida',
              ]}
              link={{ url: 'https://gyg.me/se34ncsA', label: 'Reservar excursión a Terezín', price: '45€' }}
              index={0}
            />

            <Attraction
              time="9:00h"
              title="Alternativa: Karlovy Vary — Ciudad Balneario"
              image="https://images.pexels.com/photos/32795906/pexels-photo-32795906.jpeg?auto=compress&cs=tinysrgb&w=1200"
              description="Descubre la elegante ciudad termal donde la realeza europea tomaba las aguas. Arquitectura señorial, fuentes termales para probar y un ambiente relajado que contrasta con la energía de Praga."
              details={[
                'Duración: Día completo (8h)',
                'Incluye: Transporte + tiempo libre',
                'Precio: 35-50€ por persona',
                'Aguas termales + arquitectura señorial',
                'Perfecta para relajarse y conocer la Bohemia termal',
              ]}
              link={{ url: 'https://gyg.me/D4FukqaH', label: 'Reservar excursión a Karlovy Vary', price: '35€' }}
              index={1}
            />

            <Attraction
              time="17:00h"
              title="Torre Petřín — La Torre Eiffel de Praga"
              image="https://images.pexels.com/photos/3046347/pexels-photo-3046347.jpeg?auto=compress&cs=tinysrgb&w=1200"
              description="Si prefieres quedarte en la ciudad o al regresar de la excursión, sube a la torre de 60 metros con vistas 360° espectaculares. El funicular está incluido en el pase de 24h de transporte. Los Jardines de Petřín son gratuitos y perfectos para un paseo relajado."
              details={[
                'Precio: 220 CZK (aprox. 9€)',
                'Funicular incluido en pase de 24h',
                '60 metros de altura, vistas 360°',
                'Jardines de Petřín gratuitos',
                'También cerca: Museo de Kafka, Plaza Wenceslao',
              ]}
              index={2}
            />
          </div>
        </div>
      </section>

      {/* MORE PLACES */}
      <section id="extras" className="py-24 md:py-32 bg-stone-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-8 bg-amber-600" />
            <span className="text-[10px] uppercase tracking-[.2em] text-amber-700">Si te sobra tiempo</span>
          </div>
          <h2 className="text-4xl md:text-5xl text-stone-900 leading-tight mb-12" style={{ fontFamily: 'Georgia, serif' }}>
            Más <span className="italic">experiencias</span> en Praga
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <ExtraCard title="Vyšehrad" desc="Fortaleza histórica con vistas panorámicas y cementerio de personalidades checas. Entrada gratuita, perfecto para el atardecer." />
            <ExtraCard title="Letná Park" desc="Mejores vistas de Praga gratis. Beer garden con ambiente local y metrónomo gigante icónico." />
            <ExtraCard title="Monasterio de Strahov" desc="Biblioteca barroca espectacular (150 CZK / 6€) y cervecería artesanal con la mejor cerveza de Praga según locales." />
            <ExtraCard title="Žižkov TV Tower" desc="Torre más alta de Praga (216m) con bebés gigantes escalando (escultura). Bar/Restaurante con vistas 360°." />
          </div>

          <div className="mt-12">
            <h3 className="text-xl font-semibold text-stone-900 mb-6">Excursiones de un día</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <DayTripCard title="Suiza Bohemia y Sajona" link="https://gyg.me/6riRFPCy" />
              <DayTripCard title="Český Krumlov (Patrimonio UNESCO)" link="https://gyg.me/pdXWAUmz" />
            </div>
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
          <p className="text-stone-600 mb-12 max-w-2xl">Hoteles probados en el centro de Praga, cerca del Reloj Astronómico, Puente de Carlos y Ciudad Vieja.</p>

          <div className="grid lg:grid-cols-1 gap-10">
            <HotelZone
              zone="Centro Ciudad"
              description="La ubicación más céntrica y cómoda para explorar Praga. Todo a pie, rodeado de restaurantes y ambiente histórico."
              hotels={[
                { name: 'THE MANES Boutique Hotel Prague', stars: 4, link: 'https://booking.tpk.lv/rx4UJa7s', highlight: 'Junto al río Moldava, Plaza Wenceslao a 1km' },
                { name: 'Allure Hotel & Residence Prague', stars: 4, link: 'https://booking.tpk.lv/Sykxeva1', highlight: 'Cerca del Reloj Astronómico, terraza y bar' },
                { name: 'Hotel Karlova Prague', stars: 4, link: 'https://booking.tpk.lv/uT7oiUGu', highlight: '3 min del Reloj, 5 min del Puente de Carlos' },
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
              <h3 className="font-semibold text-stone-900 mb-6 text-lg">Cocina checa tradicional</h3>
              <div className="space-y-5">
                <Restaurant name="U Fleků" address="Křemencova 11" price="€€" desc="Cervecería histórica desde 1499. Cerveza casera + goulash + ambiente medieval." />
                <Restaurant name="Lokál" address="Dlouhá 33" price="€€" desc="Cocina checa moderna en ambiente tradicional. Famoso por su Svíčková na smetaně." />
                <Restaurant name="Café Savoy" address="Vítězná 5" price="€€€" desc="Elegancia vienesa desde 1893. Techos históricos y repostería imperial." />
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-stone-900 mb-6 text-lg">Platos imprescindibles</h3>
              <div className="space-y-5">
                <div className="border-2 border-stone-100 p-4">
                  <span className="font-semibold text-stone-900">Goulash Bohemio</span>
                  <p className="text-sm text-stone-600 mt-1">Estofado de ternera con páprika. 6-12€ según restaurante.</p>
                </div>
                <div className="border-2 border-stone-100 p-4">
                  <span className="font-semibold text-stone-900">Svíčková na smetaně</span>
                  <p className="text-sm text-stone-600 mt-1">Carne con salsa de crema y arándanos. Plato nacional checo. 8-15€.</p>
                </div>
                <div className="border-2 border-stone-100 p-4">
                  <span className="font-semibold text-stone-900">Trdelník</span>
                  <p className="text-sm text-stone-600 mt-1">Dulce enrollado en espiral en puestos callejeros. 2-4€.</p>
                </div>
                <div className="border-2 border-stone-100 p-4">
                  <span className="font-semibold text-stone-900">Cerveza checa</span>
                  <p className="text-sm text-stone-600 mt-1">Pilsner Urquell, Budweiser Budvar. Desde 1-3€ por cerveza.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <img
              src="https://images.pexels.com/photos/10875122/pexels-photo-10875122.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Gastronomía checa - Trdelník"
              className="w-full h-64 md:h-80 object-cover"
            />
          </div>
        </div>
      </section>

      {/* PRACTICAL INFO */}
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
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Train size={16} className="text-amber-600" />
                <h3 className="text-xl font-semibold text-stone-900">Transporte público</h3>
              </div>
              <div className="space-y-4 text-stone-700 text-sm leading-relaxed">
                <p><strong>Metro:</strong> 3 líneas (A verde, B amarilla, C roja). Conecta todos los puntos principales. Horario: 5:00-24:00h.</p>
                <p><strong>Tranvía:</strong> Red extensa. Línea 22 directa al Castillo de Praga. Frecuencia: 5-10 min.</p>
                <p><strong>Autobús:</strong> Bus 119/100 desde el aeropuerto al metro. Airport Express directo al centro.</p>
                <p><strong>Billetes:</strong> 30 min: 30 CZK (1,20€) · 90 min: 40 CZK (1,60€) · 24h: 120 CZK (4,80€) · 72h: 330 CZK (13,20€). Un billete vale para metro, tranvía, autobús y funicular.</p>
                <p><strong>Importante:</strong> Valida SIEMPRE tu billete (validadoras amarillas). Inspecciones frecuentes: multa hasta 1.000 CZK (40€). App PID Lítačka para compra digital.</p>
              </div>

              <div className="mt-8">
                <h4 className="font-semibold text-stone-900 mb-4">Desde el aeropuerto (Václav Havel)</h4>
                <div className="space-y-3">
                  <TransportOption name="Airport Express" price="4€" time="40 min" desc="Directo a Estación Central, cada 30 min" link="https://gyg.me/7aSOnLE7" />
                </div>
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
                Los 3 días hora por hora, mapa imprimible, presupuestos y todos los enlaces. Llévalo en el móvil sin conexión.
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
              question="¿Se puede pagar en euros en Praga?"
              answer="No es recomendable. La moneda oficial es la corona checa (CZK). Pagar en euros supone perder un 15-25% por el cambio desfavorable. Usa una tarjeta sin comisiones como Revolut para pagar directamente en coronas."
            />
            <FAQItem
              question="¿Es seguro el agua del grifo en Praga?"
              answer="Sí, el agua del grifo es perfectamente potable en Praga. Lleva una botella reutilizable para ahorrar dinero y ser sostenible."
            />
            <FAQItem
              question="¿Cuánto cuesta una cerveza en Praga?"
              answer="En un pub local, una cerveza de medio litro cuesta entre 1-3€. En zonas turísticas puede subir a 4-6€. República Checa es el mayor consumidor de cerveza per cápita del mundo."
            />
            <FAQItem
              question="¿Merece la pena el pase de transporte de 72h?"
              answer="Sí, si vas a usar el transporte más de 3-4 veces al día. El pase de 72h cuesta 330 CZK (13,20€) e incluye metro, tranvía, autobús y funicular ilimitados."
            />
            <FAQItem
              question="¿Cuál es la mejor época para visitar Praga?"
              answer="Primavera (abril-mayo) y otoño (septiembre-octubre): clima agradable, menos turistas y precios moderados. En invierno los mercados navideños son espectaculares. Verano es temporada alta con mucho turismo."
            />
            <FAQItem
              question="¿Hay que dar propina en Praga?"
              answer="La propina no es obligatoria pero se aprecia. Un 10% es lo habitual en restaurantes. En pubs es común redondear al alza."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 md:py-32 bg-stone-900 text-stone-50 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.pexels.com/photos/3046347/pexels-photo-3046347.jpeg?auto=compress&cs=tinysrgb&w=1920"
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
            Tenemos guías similares para Viena, Budapest, Amsterdam, Roma y Londres. Todas con itinerarios optimizados y presupuestos reales.
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
    const id = setInterval(() => setActive((p) => (p + 1) % 3), 3000);
    return () => clearInterval(id);
  }, []);

  const stops = [
    { label: 'Día 1', place: 'Ciudad Vieja + Barrio Judío' },
    { label: 'Día 2', place: 'Castillo + Moldava' },
    { label: 'Día 3', place: 'Excursión + Petřín' },
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
            style={{ width: `${(active / 2) * 100}%` }}
          />

          <ol className="relative grid grid-cols-3 gap-2">
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
                    <span className={`mt-1 text-xs transition-colors ${isActive ? 'text-stone-50' : 'text-stone-100/50'}`}>
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
  // Day 1 - amber
  { lat: 50.0875, lng: 14.4213, title: 'Plaza Ciudad Vieja', day: 1 },
  { lat: 50.0870, lng: 14.4207, title: 'Torre Ayuntamiento', day: 1 },
  { lat: 50.0900, lng: 14.4178, title: 'Barrio Judío', day: 1 },
  { lat: 50.0862, lng: 14.4158, title: 'Clementinum', day: 1 },
  { lat: 50.0755, lng: 14.4142, title: 'Casa Danzante', day: 1 },
  // Day 2 - rose
  { lat: 50.0911, lng: 14.4006, title: 'Castillo de Praga', day: 2 },
  { lat: 50.0908, lng: 14.4043, title: 'Callejón del Oro', day: 2 },
  { lat: 50.0864, lng: 14.4114, title: 'Puente de Carlos', day: 2 },
  { lat: 50.0862, lng: 14.4067, title: 'Muro de Lennon', day: 2 },
  // Day 3 - teal
  { lat: 50.0833, lng: 14.3950, title: 'Torre Petřín', day: 3 },
];

function PragueMap() {
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
        center: [50.0870, 14.4100],
        zoom: 14,
        scrollWheelZoom: false,
      });

      L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/">CARTO</a>',
        maxZoom: 19,
      }).addTo(map);

      const dayColors: Record<number, string> = { 1: '#d97706', 2: '#e11d48', 3: '#0d9488' };
      const dayLabels: Record<number, string> = { 1: 'Día 1', 2: 'Día 2', 3: 'Día 3' };

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
          <span className="w-3 h-3 rounded-full bg-amber-600" /> Día 1: Ciudad Vieja + Barrio Judío
        </span>
        <span className="flex items-center gap-2 text-xs text-stone-600">
          <span className="w-3 h-3 rounded-full bg-rose-600" /> Día 2: Castillo + Moldava
        </span>
        <span className="flex items-center gap-2 text-xs text-stone-600">
          <span className="w-3 h-3 rounded-full bg-teal-600" /> Día 3: Excursión + Petřín
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

function DayTripCard({ title, link }: { title: string; link: string }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between border-2 border-amber-100 bg-gradient-to-r from-amber-50/60 to-white p-5 hover:border-amber-400 hover:shadow-lg transition-all group">
      <div>
        <span className="text-stone-900 font-semibold group-hover:text-amber-800 transition-colors">{title}</span>
        <div className="flex items-center gap-2 mt-1.5">
          <span className="flex items-center gap-0.5">
            <Star size={9} className="fill-amber-500 text-amber-500" />
            <Star size={9} className="fill-amber-500 text-amber-500" />
            <Star size={9} className="fill-amber-500 text-amber-500" />
            <Star size={9} className="fill-amber-500 text-amber-500" />
            <Star size={9} className="fill-amber-500 text-amber-500" />
          </span>
          <span className="text-[10px] text-stone-500">Tour completo</span>
        </div>
      </div>
      <span className="shrink-0 bg-stone-900 group-hover:bg-amber-700 text-white text-[10px] uppercase tracking-wider px-4 py-2.5 transition-colors flex items-center gap-1.5">
        Ver tour <ExternalLink size={11} />
      </span>
    </a>
  );
}

function TransportOption({ name, price, time, desc, link }: { name: string; price: string; time: string; desc: string; link: string }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between border-2 border-stone-100 bg-white p-4 hover:border-amber-300 hover:shadow-md transition-all group">
      <div className="flex-1">
        <div className="font-semibold text-stone-900 group-hover:text-amber-700 transition-colors">{name}</div>
        <div className="text-xs text-stone-500 mt-0.5">{desc}</div>
      </div>
      <div className="flex items-center gap-3">
        <div className="text-right">
          <div className="text-lg font-bold text-amber-700">{price}</div>
          <div className="text-[10px] text-stone-500">{time}</div>
        </div>
        <span className="shrink-0 w-8 h-8 bg-stone-900 group-hover:bg-amber-700 rounded-full flex items-center justify-center transition-colors">
          <ExternalLink size={12} className="text-white" />
        </span>
      </div>
    </a>
  );
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

function Restaurant({ name, address, price, desc }: { name: string; address: string; price: string; desc: string }) {
  return (
    <div className="border-2 border-stone-100 p-4 transition-all hover:border-stone-300 hover:shadow-md">
      <div className="flex items-baseline justify-between">
        <span className="font-semibold text-stone-900">{name}</span>
        <span className="text-xs text-amber-700 font-bold bg-amber-100 px-2 py-0.5 rounded-sm">{price}</span>
      </div>
      <p className="text-xs text-stone-500 mt-0.5">{address}</p>
      <p className="text-sm text-stone-600 mt-2">{desc}</p>
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

export default PragueGuideArticle;
