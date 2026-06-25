import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Euro, Bike, Bed, UtensilsCrossed, CreditCard, Shield, ExternalLink, Compass, List, X, MapPin, Star, Users, Download, CheckCircle } from 'lucide-react';

interface AmsterdamGuideArticleProps {
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

const AmsterdamGuideArticle: React.FC<AmsterdamGuideArticleProps> = ({ onBack }) => {
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
            src="https://images.pexels.com/photos/2031706/pexels-photo-2031706.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Canales de Ámsterdam con casas tradicionales holandesas"
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
                Guía Holandesa · 3 Días
              </span>
            </div>
            <h1 className="text-stone-50 text-balance font-light leading-[0.98]" style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)', fontFamily: 'Georgia, serif' }}>
              Ámsterdam en 3 Días
            </h1>
            <p className="mt-6 italic text-2xl md:text-3xl text-amber-300" style={{ fontFamily: 'Georgia, serif' }}>
              Canales, Arte y Cultura Holandesa
            </p>
          </div>

          <div className="mt-14 grid grid-cols-3 gap-6 md:gap-10 text-stone-100 border-t border-stone-100/20 pt-8">
            <HeroStat icon={Calendar} label="Duración" value="3 días" />
            <HeroStat icon={Euro} label="Desde" value="90€/día" />
            <HeroStat icon={Bike} label="Experiencia" value="Canales" />
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
            Imagina una ciudad donde más de 100 kilómetros de canales se entrelazan formando un laberinto acuático del siglo XVII, donde hay más bicicletas que habitantes, y donde las casas inclinadas del Siglo de Oro cuentan historias de comerciantes y artistas.
          </p>
          <p className="mt-8 text-lg text-stone-600 leading-relaxed max-w-3xl">
            Pero Ámsterdam va más allá de sus icónicos canales y su fama internacional. Aquí disfrutarás de un stroopwafel recién hecho en el mercado de las flores mientras observas las coloridas casas flotantes. Recorrerás en bicicleta calles empedradas como un auténtico local, contemplarás obras maestras de Van Gogh y Rembrandt, y te perderás en las nueve callejuelas del barrio Jordaan descubriendo cafés acogedores y boutiques vintage que pocos turistas conocen.
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
          <AmsterdamMap />
        </div>
      </section>

      {/* DAY 1 */}
      <section id="dia-1" className="py-24 md:py-36 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <DaySectionHeader number={1} title="Entrada a la Venecia del Norte" />

          <DayTimeline
            stops={[
              { time: '9:00', place: 'Plaza Dam' },
              { time: '11:30', place: 'Canales y Mercado' },
              { time: '15:00', place: 'Casa de Ana Frank' },
              { time: '17:00', place: '9 Calles + Mirador' },
            ]}
            color="amber"
          />

          <div className="mt-16 space-y-24 md:space-y-32">
            <Attraction
              time="9:00h"
              title="Estación Central y Plaza Dam"
              image="https://images.pexels.com/photos/12705132/pexels-photo-12705132.jpeg?auto=compress&cs=tinysrgb&w=1200"
              description="Comenzamos en la Estación Central, un edificio del mismo arquitecto que diseñó el Rijksmuseum (1882). La plaza Dam es el epicentro de Ámsterdam, donde se encuentra el Palacio Real (1808), la Iglesia Nueva y el Monumento Nacional."
              details={[
                'Palacio Real: Visitable por dentro (12€)',
                'Iglesia Nueva: Exposiciones y eventos',
                'Monumento Nacional: Conmemoración WWII',
                'Foto icónica en Damrak Waterkant: canales con casas de fondo',
                'Free Tour: 2h 30min desde Plaza Dam',
              ]}
              tip="Ve a Damrak Waterkant para conseguir una de las fotos más bonitas de Ámsterdam: los canales con las casas tradicionales de fondo."
              link={{ url: 'https://www.freetour.com/es/amsterdam/free-tour-amsterdam-en-espanol?referralID=rFW5gyO0D7w7JOqo&campaign=CentroAmsterdam', label: 'Reservar Free Tour en español', price: 'Gratis (propina)', badge: 'Gratis' }}
              index={0}
            />

            <Attraction
              time="11:30h"
              title="Canales Históricos y Mercado de las Flores"
              image="https://images.pexels.com/photos/17345883/pexels-photo-17345883.jpeg?auto=compress&cs=tinysrgb&w=1200"
              description="Pasea por la calle Damstraat hasta llegar a los canales, Patrimonio de la Humanidad UNESCO desde 2010. El Mercado de las Flores (Bloemenmarkt) es el mercado flotante más grande del mundo, con tulipanes, bulbos y souvenirs."
              details={[
                'Bloemenmarkt: fundado en 1862, único mercado flotante del mundo',
                'Tulipanes frescos de todos los colores imaginables',
                'Bulbos certificados para exportar (souvenir perfecto)',
                'Souvenirs: zuecos de madera y productos típicos',
                'Prueba los Stroopwafels en Van Wonderen (recién hechos con toppings)',
              ]}
              index={1}
            />

            <Attraction
              time="15:00h"
              title="Casa de Ana Frank"
              image="https://images.pexels.com/photos/2031706/pexels-photo-2031706.jpeg?auto=compress&cs=tinysrgb&w=1200"
              description="Visita imprescindible en Ámsterdam. Aquí Ana Frank y su familia se ocultaron durante más de 2 años (1942-1944) de la invasión nazi. El museo conserva el escondite tras la estantería giratoria y expone su famoso diario original."
              details={[
                'Precio: 16€ adultos / 7€ (10-17 años)',
                'Duración: 60-75 minutos',
                'Audioguía incluida y gratuita (9 idiomas)',
                'Reserva OBLIGATORIA con mucha antelación',
                'Entradas: cada martes a las 10:00h CET para 6 semanas después',
              ]}
              tip="Las entradas se agotan rapidísimo. Pon alarma los martes a las 10:00h (hora de Ámsterdam) exactamente 6 semanas antes de tu visita. NO se venden entradas en taquilla."
              link={{ url: 'https://www.annefrank.org/es/museo/entradas/', label: 'Reservar Casa de Ana Frank (Web Oficial)', price: '16€', badge: 'Se agota' }}
              index={2}
            />

            <Attraction
              time="17:00h"
              title="Las 9 Calles y Mirador A'Dam Tower"
              image="https://images.pexels.com/photos/2366108/pexels-photo-2366108.jpeg?auto=compress&cs=tinysrgb&w=1200"
              description="Las '9 Straatjes' (9 calles) son un barrio pintoresco con boutiques vintage, galerías de arte, cafés acogedores y tiendas únicas. Perfecto para pasear y comprar souvenirs especiales. Después, ferry gratuito al Mirador A'Dam."
              details={[
                'Boutiques de moda vintage únicas',
                'Galerías de arte local y tiendas de diseño holandés',
                'Mirador A\'Dam Tower: 20€ (100 metros de altura)',
                'Columpio más alto de Europa en la azotea',
                'Ferry gratuito desde Estación Central',
              ]}
              tip="El atardecer desde el Mirador A'Dam es espectacular. Llega 30 minutos antes del sunset para conseguir el mejor sitio."
              link={{ url: 'https://gyg.me/5kVkwY4g', label: 'Entradas Mirador A\'Dam Tower', price: '20€', badge: 'Popular' }}
              index={3}
            />
          </div>
        </div>
      </section>

      {/* DAY 2 */}
      <section id="dia-2" className="py-24 md:py-36 bg-stone-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <DaySectionHeader number={2} title="Pueblos con Encanto + Canales" />

          <DayTimeline
            stops={[
              { time: '9:00', place: 'Zaanse Schans' },
              { time: '12:00', place: 'Edam y Volendam' },
              { time: '17:00', place: 'Crucero Canales' },
              { time: '19:30', place: 'Rembrandtplein' },
            ]}
            color="rose"
          />

          <div className="mt-16 space-y-24 md:space-y-32">
            <Attraction
              time="9:00h"
              title="Zaanse Schans, Edam, Volendam y Marken"
              image="https://images.pexels.com/photos/13059436/pexels-photo-13059436.jpeg?auto=compress&cs=tinysrgb&w=1200"
              description="Excursión imprescindible para ver la Holanda auténtica: molinos de viento, casas de madera de colores, fabricación de quesos tradicionales y zuecos. Una experiencia que te transporta al siglo XVII."
              details={[
                'Zaanse Schans: Molinos de viento históricos',
                'Edam: Famoso por su queso redondo',
                'Volendam: Puerto pesquero tradicional',
                'Marken: Isla con casas de madera pintadas',
                'Incluye: demostración de quesos, taller de zuecos, visita a molinos',
              ]}
              tip="El tour guiado en español es la opción más cómoda y completa (34-50€). También puedes ir por libre en autobús con el Amsterdam & Region Travel Ticket (~18€/día)."
              link={{ url: 'https://gyg.me/k0fpVtxB', label: 'Tour guiado Zaanse Schans + Pueblos', price: '34€', badge: 'Top' }}
              index={0}
            />

            <Attraction
              time="17:00h"
              title="Tour en Barco por los Canales UNESCO"
              image="https://images.pexels.com/photos/3884476/pexels-photo-3884476.jpeg?auto=compress&cs=tinysrgb&w=1200"
              description="Ver Ámsterdam desde sus canales es una experiencia única. Los cruceros pasan bajo más de 1.500 puentes y muestran las fachadas históricas que hacen de Ámsterdam la 'Venecia del Norte'."
              details={[
                'Precio: 15-18€ por persona',
                'Duración: 60-75 minutos',
                'Salida: Cerca Estación Central',
                'Audioguía en 19 idiomas incluido español',
                'Opción romántica: crucero a la luz de las velas con vino y quesos (desde 20€)',
              ]}
              link={{ url: 'https://gyg.me/LFQhpJql', label: 'Crucero Clásico por Canales', price: '15€' }}
              secondaryLink={{ url: 'https://gyg.me/TLcpWrxH', label: 'Crucero Romántico con Vino', price: '20€' }}
              index={1}
            />

            <Attraction
              time="19:30h"
              title="Rembrandtplein y Puente Magere Brug"
              image="https://images.pexels.com/photos/34217700/pexels-photo-34217700.jpeg?auto=compress&cs=tinysrgb&w=1200"
              description="La plaza más animada de Ámsterdam. Repleta de terrazas, restaurantes, coffeeshops y bares. Perfecta para cenar y tomar algo mientras ves el ambiente nocturno holandés. Cerca está el famoso puente Magere Brug iluminado."
              details={[
                'Estatua de Rembrandt y "La Ronda de Noche" en 3D',
                'Decenas de terrazas y restaurantes',
                'Puente Magere Brug: puente levadizo de madera blanca (1691)',
                'Iluminación especial por la noche',
                'A 5 minutos andando entre plaza y puente',
              ]}
              index={2}
            />
          </div>
        </div>
      </section>

      {/* DAY 3 */}
      <section id="dia-3" className="py-24 md:py-36 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <DaySectionHeader number={3} title="Arte Holandés, Cerveza y Vida Nocturna" />

          <DayTimeline
            stops={[
              { time: '9:00', place: 'Rijksmuseum' },
              { time: '12:00', place: 'Museo Van Gogh' },
              { time: '16:00', place: 'Heineken Experience' },
              { time: '19:00', place: 'Barrio Rojo' },
            ]}
            color="teal"
          />

          <div className="mt-16 space-y-24 md:space-y-32">
            <Attraction
              time="9:00h"
              title="Rijksmuseum — La Ronda de Noche"
              image="https://images.pexels.com/photos/208733/pexels-photo-208733.jpeg?auto=compress&cs=tinysrgb&w=1200"
              description="El museo más importante de Holanda, con más de 8.000 obras de arte y 800 años de historia holandesa. Aquí se encuentra 'La Ronda de Noche' de Rembrandt y 'La Lechera' de Vermeer."
              details={[
                'Precio: 27€ adultos',
                'Horario: 9:00-17:00 diario',
                'Duración recomendada: 2-3 horas',
                'Obras: La Ronda de Noche (Rembrandt), La Lechera (Vermeer)',
                'Reserva obligatoria con hora de entrada',
              ]}
              tip="Llega cuando abren (9:00) para evitar multitudes. La 'Galería de Honor' con las obras maestras se llena mucho a partir de las 11:00."
              link={{ url: 'https://gyg.me/qMlozUdI', label: 'Entradas Rijksmuseum', price: '27€', badge: 'Se agota' }}
              index={0}
            />

            <Attraction
              time="12:00h"
              title="Museo Van Gogh — Los Girasoles"
              image="https://images.pexels.com/photos/11951240/pexels-photo-11951240.jpeg?auto=compress&cs=tinysrgb&w=1200"
              description="El museo alberga 200 pinturas, 500 dibujos y 750 cartas de Van Gogh. Un recorrido cronológico por la vida del genio holandés, desde sus primeras obras oscuras hasta los brillantes girasoles y paisajes del sur de Francia."
              details={[
                'Precio: 26€ adultos',
                'Horario: 9:00-18:00 (viernes hasta 21:00)',
                'Duración: 2-3 horas',
                'Obras: Los Girasoles, Almendro en Flor, El Dormitorio en Arlés',
                'Reserva obligatoria online',
              ]}
              tip="'La Noche Estrellada' NO está aquí (está en el MoMA de Nueva York). Pero las obras de Ámsterdam son igual de impresionantes."
              link={{ url: 'https://gyg.me/kgd4hkJI', label: 'Entradas Van Gogh Museum', price: '26€', badge: 'Popular' }}
              index={1}
            />

            <Attraction
              time="16:00h"
              title="Heineken Experience"
              image="https://images.pexels.com/photos/18999312/pexels-photo-18999312.jpeg?auto=compress&cs=tinysrgb&w=1200"
              description="Visita interactiva en la antigua fábrica de Heineken (1863-1988). Aprende sobre la historia de la marca, el proceso de elaboración de cerveza y degusta cervezas frescas. Incluye experiencias multimedia y juegos."
              details={[
                'Precio: 25€ (compra online más barato)',
                'Duración: 1,5-2 horas',
                'Incluye: 2-3 cervezas Heineken',
                'Simulador: "Conviértete en cerveza"',
                'Edad mínima: 18 años (se pide ID)',
              ]}
              tip="Si reservas online con antelación ahorras dinero y te saltas las colas."
              link={{ url: 'https://gyg.me/3m6llUkk', label: 'Entradas Heineken Experience', price: '25€' }}
              index={2}
            />

            <Attraction
              time="19:00h"
              title="Barrio Rojo — De Wallen"
              image="https://images.pexels.com/photos/9320/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1200"
              description="El barrio más conocido y controvertido de Ámsterdam. A pesar de su fama, es un barrio histórico muy animado, repleto de restaurantes, bares y cafés. La zona es completamente segura y está llena de gente a todas horas."
              details={[
                'Oude Kerk: Edificio más antiguo de Ámsterdam (1306)',
                'Canales históricos iluminados por la noche',
                'Arquitectura del Siglo de Oro holandés',
                'Restaurante Ramen Ya: ramen japonés excelente',
                'Free Tour del Barrio Rojo: 2 horas, en español',
              ]}
              tip="El Barrio Rojo es completamente seguro y legal. No está permitido tomar fotos en las zonas con escaparates. Respeta a las trabajadoras y la zona."
              link={{ url: 'https://www.freetour.com/es/amsterdam/tour-del-barrio-rojo-en-espanol?referralID=rFW5gyO0D7w7JOqo&campaign=BarrioRojoAmsterdam', label: 'Reservar Free Tour del Barrio Rojo', price: 'Gratis (propina)', badge: 'Gratis' }}
              index={3}
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
            Más <span className="italic">experiencias</span> en Ámsterdam
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <ExtraCard title="Moco Museum" desc="Arte moderno y contemporáneo: Banksy, Warhol, Kaws. Perfecto para amantes del arte urbano." link="https://gyg.me/EMjp5KUQ" />
            <ExtraCard title="Vondelpark" desc="El Central Park de Ámsterdam (47 hectáreas). Perfecto para un paseo en bici o un picnic." />
            <ExtraCard title="NEMO Science Museum" desc="Ciencia interactiva ideal para familias. Terraza gratuita con vistas panorámicas." />
          </div>

          <div className="mt-12">
            <h3 className="text-xl font-semibold text-stone-900 mb-6">Excursiones de un día</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <DayTripCard title="Brujas (Bélgica) — Ciudad medieval" link="https://gyg.me/NsnWg5zb" />
              <DayTripCard title="Keukenhof — Jardín de tulipanes (marzo-mayo)" link="https://gyg.me/EMjp5KUQ" />
              <DayTripCard title="Róterdam + La Haya — Arquitectura moderna" link="https://gyg.me/EMjp5KUQ" />
              <DayTripCard title="Giethoorn — Pueblo sin carreteras, solo canales" link="https://gyg.me/EMjp5KUQ" />
            </div>
          </div>

          <div className="mt-10">
            <a
              href="https://gyg.me/hhPSPkwx"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-stone-900 hover:bg-amber-700 text-white text-xs uppercase tracking-wider px-6 py-4 transition-colors font-medium"
            >
              Comprar I Amsterdam City Card (+70 museos + transporte) <ExternalLink size={12} />
            </a>
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
          <p className="text-stone-600 mb-12 max-w-2xl">Hoteles probados personalmente en las dos mejores zonas para moverse a pie o en transporte público.</p>

          <div className="grid lg:grid-cols-2 gap-10">
            <HotelZone
              zone="Centro Histórico (Grachtengordel)"
              description="La ubicación perfecta junto a los canales"
              hotels={[
                { name: 'Monet Garden Hotel Amsterdam', stars: 4, link: 'https://booking.tpk.lv/UTD9cvgv', highlight: 'Junto a canales, vistas al jardín' },
                { name: 'Ambassade Hotel', stars: 4, link: 'https://booking.tpk.lv/lJeCjGwX', highlight: '9 min a Casa Ana Frank, restaurante' },
                { name: 'Tourist Inn Hotel Amsterdam', stars: 3, link: 'https://booking.tpk.lv/gB3tgW13', highlight: '8 min a Casa Ana Frank, personal español' },
              ]}
            />
            <HotelZone
              zone="Museumplein (Zona de Museos)"
              description="Acceso directo a Rijksmuseum, Van Gogh y Vondelpark"
              hotels={[
                { name: 'Catalonia Vondel Amsterdam', stars: 4, link: 'https://booking.tpk.lv/NoRMV4F4', highlight: 'Rijksmuseum 500m, Vondelpark 300m' },
                { name: 'NH Amsterdam Leidseplein', stars: 4, link: 'https://booking.tpk.lv/iTSAwLd4', highlight: 'Plaza Leidseplein 250m, tram al centro' },
                { name: 'Huygens Place Amsterdam', stars: 4, link: 'https://booking.tpk.lv/oGcSGvNP', highlight: 'Van Gogh 8 min, terraza solárium' },
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
              <h3 className="font-semibold text-stone-900 mb-6 text-lg">Cocina holandesa tradicional</h3>
              <div className="space-y-5">
                <Restaurant name="The Pantry" address="Leidsekruisstraat 21" price="€€" desc="Cocina holandesa auténtica. Stamppot, bitterballen y platos típicos." />
                <Restaurant name="Cafe Soñéveld" address="Egelantiersgracht 72" price="€€" desc="Bar tradicional holandés. Cervezas locales y bocadillos típicos." />
                <Restaurant name="Moeders" address="Rozengracht 251" price="€€" desc="Restaurante familiar. Paredes llenas de fotos de madres de clientes." />
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-stone-900 mb-6 text-lg">Internacional y cafeterías</h3>
              <div className="space-y-5">
                <Restaurant name="Ramen Ya" address="Oudezijds Voorburgwal 236" price="€€" desc="Ramen japonés auténtico en el Barrio Rojo. Siempre hay cola." />
                <Restaurant name="Blue Amsterdam" address="Singel 457" price="€€€" desc="Cocina moderna con vistas panorámicas a la ciudad." />
                <Restaurant name="Winkel 43" address="Noordermarkt 43" price="€" desc="Famosa por su apple pie (tarta de manzana). Imprescindible." />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRACTICAL INFO */}
      <section id="info-practica" className="py-24 md:py-32 bg-stone-50 scroll-mt-20">
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
                <Bike size={16} className="text-amber-600" />
                <h3 className="text-xl font-semibold text-stone-900">Transporte público</h3>
              </div>
              <div className="space-y-4 text-stone-700 text-sm leading-relaxed">
                <p><strong>Metro:</strong> 4 líneas principales, frecuencia 4-10 min, horario 06:00-00:30.</p>
                <p><strong>Tranvías:</strong> 15 líneas, red más extensa. Llegan a todas las atracciones principales.</p>
                <p><strong>Tarifas (2026):</strong> Billete sencillo 3,40€ (1 hora) · Amsterdam Travel Ticket: 18€/día, 24€/2 días, 30€/3 días (incluye aeropuerto).</p>
                <p><strong>Importante:</strong> Desde 2023 puedes usar tu tarjeta bancaria contactless directamente en los lectores (check-in y check-out). Es la forma más sencilla si estás pocos días.</p>
                <p><strong>App:</strong> GVB o 9292 (planificador) · Check-in/out obligatorio · Multa sin billete: 60€</p>
              </div>

              <div className="mt-8">
                <h4 className="font-semibold text-stone-900 mb-4">Desde el aeropuerto (Schiphol)</h4>
                <div className="space-y-3">
                  <TransportOption name="Tren Directo a Centraal" price="6€" time="16-18 min" desc="Cada 10-15 min, sin paradas" link="https://gyg.me/a32mXL4w" />
                  <TransportOption name="Airport Express Bus 397" price="6€" time="30-40 min" desc="Paradas en Museumplein y Leidseplein" link="https://gyg.me/nHnMYLIe" />
                  <TransportOption name="Traslado privado" price="56€" time="20-30 min" desc="Puerta a puerta, ideal para familias" link="https://gyg.me/5ZYfAmX8" />
                </div>
              </div>

              <div className="mt-8">
                <a
                  href="https://gyg.me/bftVdMgA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-stone-900 hover:bg-amber-700 text-white text-xs uppercase tracking-wider px-6 py-4 transition-colors font-medium"
                >
                  Comprar Amsterdam Travel Ticket <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRAVEL TOOLS */}
      <section id="herramientas" className="py-24 md:py-32 bg-white scroll-mt-20">
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
      <section id="consejos" className="py-24 md:py-32 bg-white scroll-mt-20">
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
              question="¿Merece la pena la I Amsterdam City Card?"
              answer="La I Amsterdam City Card de 72h cuesta 100€ e incluye +70 museos, transporte ilimitado, crucero por canales y alquiler de bici. Si visitas 3-4 museos + usas mucho transporte + haces el crucero, se amortiza. Pero OJO: desde 2022 NO incluye el Museo Van Gogh (26€ aparte)."
            />
            <FAQItem
              question="¿Cómo consigo entradas para la Casa de Ana Frank?"
              answer="Las entradas se liberan cada martes a las 10:00h CET para 6 semanas después. Se agotan en pocas horas. Pon alarma y prepara tu tarjeta de crédito. NO se venden entradas en taquilla. Web oficial: annefrank.org"
            />
            <FAQItem
              question="¿Es necesario llevar efectivo en Ámsterdam?"
              answer="Casi todo se paga con tarjeta contactless. Ámsterdam es una ciudad muy digitalizada. Con una tarjeta sin comisiones como Revolut puedes pagar en todas partes y retirar efectivo si lo necesitas."
            />
            <FAQItem
              question="¿Cómo me muevo en bicicleta por Ámsterdam?"
              answer="Puedes alquilar bicis en muchos puntos (9-15€/día). Las bicicletas tienen prioridad SIEMPRE en la ciudad. No camines por los carriles bici (líneas rojas). Es la forma más local y divertida de moverse."
            />
            <FAQItem
              question="¿Cuál es la mejor época para visitar Ámsterdam?"
              answer="Primavera (abril-mayo): tulipanes en flor, Keukenhof abierto, temperaturas agradables. Verano: días largos pero muy turístico. Otoño: menos gente, colores bonitos. Invierno: mercados navideños, precios bajos pero frío intenso."
            />
            <FAQItem
              question="¿Es seguro el Barrio Rojo?"
              answer="Sí, completamente seguro. Es un barrio histórico muy transitado a todas horas, lleno de restaurantes y cafés. La única precaución: no tomar fotos en las zonas con escaparates (está prohibido por respeto a las trabajadoras)."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 md:py-32 bg-stone-900 text-stone-50 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.pexels.com/photos/2031706/pexels-photo-2031706.jpeg?auto=compress&cs=tinysrgb&w=1920"
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
            Tenemos guías similares para Viena, Praga, Budapest, Roma y Londres. Todas con itinerarios optimizados y presupuestos reales.
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

// --- Sub-components ---

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
    { label: 'Día 1', place: 'Centro + Ana Frank' },
    { label: 'Día 2', place: 'Pueblos + Canales' },
    { label: 'Día 3', place: 'Museos + Heineken' },
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
  { lat: 52.3791, lng: 4.8990, title: 'Estación Central & Plaza Dam', day: 1 },
  { lat: 52.3668, lng: 4.8913, title: 'Bloemenmarkt (Mercado Flores)', day: 1 },
  { lat: 52.3752, lng: 4.8840, title: 'Casa de Ana Frank', day: 1 },
  { lat: 52.3740, lng: 4.8850, title: '9 Calles (De 9 Straatjes)', day: 1 },
  // Day 2 - rose
  { lat: 52.4735, lng: 4.8175, title: 'Zaanse Schans', day: 2 },
  { lat: 52.3694, lng: 4.8952, title: 'Crucero por Canales', day: 2 },
  { lat: 52.3660, lng: 4.8964, title: 'Rembrandtplein', day: 2 },
  // Day 3 - teal
  { lat: 52.3600, lng: 4.8852, title: 'Rijksmuseum', day: 3 },
  { lat: 52.3584, lng: 4.8811, title: 'Museo Van Gogh', day: 3 },
  { lat: 52.3578, lng: 4.8916, title: 'Heineken Experience', day: 3 },
  { lat: 52.3740, lng: 4.8987, title: 'Barrio Rojo (De Wallen)', day: 3 },
];

function AmsterdamMap() {
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
        center: [52.3676, 4.9041],
        zoom: 13,
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
          <span className="w-3 h-3 rounded-full bg-amber-600" /> Día 1: Centro + Ana Frank
        </span>
        <span className="flex items-center gap-2 text-xs text-stone-600">
          <span className="w-3 h-3 rounded-full bg-rose-600" /> Día 2: Pueblos + Canales
        </span>
        <span className="flex items-center gap-2 text-xs text-stone-600">
          <span className="w-3 h-3 rounded-full bg-teal-600" /> Día 3: Museos + Heineken
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
    <div className="border-2 border-stone-100 p-4 transition-all hover:border-stone-300">
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

export default AmsterdamGuideArticle;
