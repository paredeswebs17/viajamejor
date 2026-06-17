import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Euro, Music, Brain as Train, Bed, UtensilsCrossed, CreditCard, Shield, ExternalLink, Compass, List, X, MapPin, Star, Users, Sun, Snowflake, Leaf, Download, CheckCircle } from 'lucide-react';

interface ViennaGuideArticleProps {
  onBack: () => void;
}

const NAV_SECTIONS = [
  { id: 'mapa', label: 'Mapa' },
  { id: 'dia-1', label: 'Día 1' },
  { id: 'dia-2', label: 'Día 2' },
  { id: 'dia-3', label: 'Día 3' },
  { id: 'extras', label: 'Más experiencias' },
  { id: 'vienna-pass', label: 'Vienna Pass' },
  { id: 'info-practica', label: 'Info práctica' },
  { id: 'cuando-ir', label: 'Cuándo ir' },
  { id: 'alojamiento', label: 'Alojamiento' },
  { id: 'comer', label: 'Dónde comer' },
  { id: 'herramientas', label: 'Tarjeta y seguro' },
  { id: 'consejos', label: 'Consejos' },
];


const ViennaGuideArticle: React.FC<ViennaGuideArticleProps> = ({ onBack }) => {
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
            src="https://images.pexels.com/photos/11932444/pexels-photo-11932444.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Viena imperial al atardecer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-900/60 via-stone-900/30 to-stone-900/80" />
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
                Guía Imperial · 3 Días
              </span>
            </div>
            <h1 className="text-stone-50 text-balance font-light leading-[0.98]" style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)', fontFamily: 'Georgia, serif' }}>
              Viena en 3 Días
            </h1>
            <p className="mt-6 italic text-2xl md:text-3xl text-amber-300" style={{ fontFamily: 'Georgia, serif' }}>
              Capital Imperial de la Música y el Arte
            </p>
          </div>

          <div className="mt-14 grid grid-cols-3 gap-6 md:gap-10 text-stone-100 border-t border-stone-100/20 pt-8">
            <HeroStat icon={Calendar} label="Duración" value="3 días" />
            <HeroStat icon={Euro} label="Desde" value="75€/día" />
            <HeroStat icon={Music} label="Experiencia" value="Imperial" />
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
            Viena es la capital imperial de Europa, una ciudad donde la historia, la música y el arte se fusionan en cada esquina. Palacios majestuosos, cafés centenarios y una tradición musical sin igual: el destino perfecto para quienes buscan cultura y elegancia.
          </p>
          <p className="mt-8 text-lg text-stone-600 leading-relaxed max-w-3xl">
            Pero Viena es mucho más que Mozart y Sissi. Es disfrutar de un Sachertorte en un café histórico mientras lees el periódico en un atril de madera. Es pasear por el Palacio de Schönbrunn imaginando la vida de los Habsburgo. Es asistir a un concierto de música clásica en uno de los auditorios más prestigiosos del mundo.
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
          <ViennaMap />
        </div>
      </section>

      {/* DAY 1 */}
      <section id="dia-1" className="py-24 md:py-36 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <DaySectionHeader number={1} title="Entrada Triunfal a la Capital Musical" />

          <DayTimeline
            stops={[
              { time: '9:00', place: 'Rathausplatz' },
              { time: '10:30', place: 'Café Central' },
              { time: '11:30', place: 'Graben y Reloj Anker' },
              { time: '13:00', place: 'Catedral San Esteban' },
              { time: '14:30', place: 'Palacio Schönbrunn' },
              { time: '17:30', place: 'Casa de Mozart' },
            ]}
            color="amber"
          />

          <div className="mt-16 space-y-24 md:space-y-32">
            <Attraction
              time="9:00h"
              title="Rathausplatz y Ayuntamiento"
              image="https://images.pexels.com/photos/29982307/pexels-photo-29982307.jpeg?auto=compress&cs=tinysrgb&w=1200"
              description="El Rathaus de Viena es una joya del estilo neogótico construida entre 1872 y 1883. Su torre principal de 98 metros corona la avenida del Ring. El edificio acoge el Festsaal (salón de celebraciones) y el Gemeinderat (sala del consejo municipal), con techos pintados al fresco y vidrieras originales."
              details={[
                'Entrada gratuita con audioguía en español',
                'Horario: Lun-Vie 8:00-18:00 (excepto eventos)',
                'Duración: 30-45 minutos',
                'En Navidad: mercado navideño más famoso de Austria',
                'En verano: cine al aire libre y festivales de música',
              ]}
              index={0}
            />

            <Attraction
              time="10:30h"
              title="Café Central"
              image="https://images.pexels.com/photos/19599495/pexels-photo-19599495.jpeg?auto=compress&cs=tinysrgb&w=1200"
              description="Fundado en 1876 en el Palais Ferstel, este templo del café vienés es Patrimonio Cultural Inmaterial de Austria (la cultura del café vienés fue reconocida en 2011). Bajo sus bóvedas decimonónicas se sentaron Freud, Trotsky, Stalin y Peter Altenberg. El interior mantiene las sillas originales de Thonet, techos altísimos con arcos de crucería y columnas de mármol."
              details={[
                'Cultura del café vienés: Patrimonio Inmaterial de Austria (2011)',
                'Edificio: Palais Ferstel (Heinrich von Ferstel, 1860)',
                'Imprescindible: Apfelstrudel y Wiener Melange',
                'Reservar mesa o ir temprano (cola frecuente)',
              ]}
              index={1}
            />

            <Attraction
              time="11:30h"
              title="Graben, Pestsäule y Reloj Anker"
              image="https://images.pexels.com/photos/24355655/pexels-photo-24355655.jpeg?auto=compress&cs=tinysrgb&w=1200"
              description="La Pestsäule (Columna de la Peste) fue encargada por el emperador Leopoldo I y completada en 1694. Monumento barroco espectacular en pleno Graben. Después, el Reloj Anker (Ankeruhr): obra maestra del Art Nouveau creada por Franz von Matsch (1911-1914). Cada hora pasa una figura histórica, y a mediodía desfilan las 12 figuras durante 15 minutos con música especial."
              details={[
                'Reloj Anker: A las 12:00 desfile completo (15 min)',
                'Ubicación: Hoher Markt (plaza más antigua de Viena)',
                'Free Tour: desde Maria-Theresien-Platz, 2h 15min',
                'Incluye Ópera, Hofburg y Catedral',
              ]}
              tip="Llega 5 minutos antes de las 12:00 al Hoher Markt para ver el espectáculo completo del Reloj Anker."
              link={{ url: 'https://www.freetour.com/es/vienna/free-tour-paseo-por-el-centro-de-viena', label: 'Reservar Free Tour', price: 'Gratis (propina)', badge: 'Gratis' }}
              index={2}
            />

            <Attraction
              time="13:00h"
              title="Catedral de San Esteban"
              image="https://images.pexels.com/photos/10621005/pexels-photo-10621005.jpeg?auto=compress&cs=tinysrgb&w=1200"
              description="Más de 800 años de historia en el corazón de Viena. Su Torre Sur alcanza los 136,7 metros, la nave mide 107 metros de largo y el tejado está cubierto por 250.000 tejas de colores formando el escudo imperial. Estilo gótico y románico con construcción entre 1147 y 1511."
              details={[
                'Entrada gratuita: Lun-Sáb 6:00-22:00, Dom 7:00-22:00',
                'Visita interior: Lun-Sáb 9:00-11:30 y 13:00-16:30',
                'Subida a la torre: vistas 360° de Viena',
                '343 escalones hasta la cima de la Torre Sur',
              ]}
              link={{ url: 'https://gyg.me/EH2OPBYr', label: 'Tour con subida a la torre', price: '18€', badge: 'Popular' }}
              index={3}
            />

            <Attraction
              time="14:30h"
              title="Palacio Schönbrunn"
              image="https://images.pexels.com/photos/29689489/pexels-photo-29689489.jpeg?auto=compress&cs=tinysrgb&w=1200"
              description="1.441 habitaciones en la residencia de verano de los emperadores austríacos. Aquí vivieron María Teresa y la emperatriz Sisí. Declarado Patrimonio de la Humanidad por la UNESCO, sus jardines barrocos con la Glorieta y el laberinto son tan espectaculares como el palacio mismo."
              details={[
                'Horario: 8:30-17:00 (invierno), 8:30-17:30 (verano)',
                'Duración recomendada: 2-3 horas (palacio + jardines)',
                'Transporte: U4 Schönbrunn (15 min desde el centro)',
                'Jardines: entrada gratuita y espectaculares al atardecer',
                'Tour Imperial: 22 habitaciones + audioguía',
              ]}
              link={{ url: 'https://gyg.me/E0OqaGOy', label: 'Reservar entrada sin colas', price: '29€', badge: 'Se agota' }}
              tip="Los jardines son gratuitos y al atardecer son mágicos. Si solo puedes ver una cosa, sube a la Glorieta."
              index={4}
            />

            <Attraction
              time="17:30h"
              title="Casa de Mozart (Mozarthaus)"
              image="https://images.pexels.com/photos/8568542/pexels-photo-8568542.jpeg?auto=compress&cs=tinysrgb&w=1200"
              description="La única residencia conservada de Mozart en Viena, en Domgasse 5 (a 2 minutos de la Catedral). Aquí vivió entre 1784 y 1787 y compuso 'Las Bodas de Fígaro'. Tres plantas de exposiciones con audioguía incluida revelan la vida del genio en la capital imperial."
              details={[
                'Entrada: 14€ adultos (audioguía incluida)',
                'Horario: 10:00-19:00 todos los días',
                'Duración: 45-60 minutos',
                'Obras compuestas aquí: Las Bodas de Fígaro, Conciertos de piano K.482 y K.488',
              ]}
              link={{ url: 'https://gyg.me/dVkRMS4u', label: 'Concierto de música clásica', price: '35€', badge: 'Top' }}
              index={5}
            />
          </div>
        </div>
      </section>

      {/* DAY 2 */}
      <section id="dia-2" className="py-24 md:py-36 bg-stone-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <DaySectionHeader number={2} title="Arte, Diversión y Arquitectura Única" />

          <DayTimeline
            stops={[
              { time: '9:30', place: 'Wiener Prater' },
              { time: '11:30', place: 'Hundertwasserhaus' },
              { time: '12:30', place: 'Stadtpark y Karlskirche' },
              { time: '14:00', place: 'Palacio Belvedere' },
            ]}
            color="rose"
          />

          <div className="mt-16 space-y-24 md:space-y-32">
            <Attraction
              time="9:30h"
              title="Wiener Prater (Noria Gigante)"
              image="https://images.pexels.com/photos/5734998/pexels-photo-5734998.jpeg?auto=compress&cs=tinysrgb&w=1200"
              description="La Riesenrad (Noria Gigante) mide 64,75 metros y fue construida en 1897. Desde sus cabinas se contemplan unas vistas 360° de toda Viena. El parque del Prater fue establecido en 1766 y la entrada al recinto es gratuita; solo se paga por las atracciones individuales (2-8€)."
              details={[
                'Noria: 15€ adultos, duración 15-20 minutos',
                'Parque: entrada gratuita',
                'También: Madame Tussauds, Planetarium',
                'Restaurantes tradicionales dentro del parque',
              ]}
              link={{ url: 'https://gyg.me/iCPMo7F4', label: 'Entradas para la noria', price: '15€' }}
              index={0}
            />

            <Attraction
              time="11:30h"
              title="Hundertwasserhaus"
              image="https://images.pexels.com/photos/16632436/pexels-photo-16632436.jpeg?auto=compress&cs=tinysrgb&w=1200"
              description="Diseñada por Friedensreich Hundertwasser entre 1983 y 1985, esta vivienda social desafía toda convención arquitectónica: 52 apartamentos, 250 ventanas todas diferentes, terrazas con jardines, suelos ondulantes y una fachada multicolor donde no existe una sola línea recta."
              details={[
                'Exterior: visita libre y gratuita',
                'Interior: vivienda privada (no se visita)',
                'Museo Hundertwasser: 14€ (enfrente)',
                'Filosofía: integración de la naturaleza en la arquitectura',
                'Pionera en arquitectura ecológica',
              ]}
              index={1}
            />

            <Attraction
              time="12:30h"
              title="Stadtpark y Karlskirche"
              image="https://images.pexels.com/photos/27442550/pexels-photo-27442550.jpeg?auto=compress&cs=tinysrgb&w=1200"
              description="El Stadtpark alberga la famosa estatua dorada de Johann Strauss II (1921), además de estatuas de Schubert, Bruckner y Lehár. Después, la Karlskirche (Iglesia de San Carlos): obra maestra barroca finalizada en 1739 con columnas inspiradas en la Columna de Trajano y frescos espectaculares en la cúpula."
              details={[
                'Stadtpark: entrada gratuita 24/7',
                'Kursalon: sala de conciertos histórica dentro del parque',
                'Karlskirche: 8€ (incluye subida a la cúpula)',
                'Vistas panorámicas desde la cúpula',
                'Conciertos de Vivaldi varias noches por semana',
              ]}
              link={{ url: 'https://gyg.me/ghHUAcrV', label: 'Concierto Vivaldi en Karlskirche', price: '32€', badge: 'Popular' }}
              index={2}
            />

            <Attraction
              time="14:00h"
              title="Palacio Belvedere — El Beso de Klimt"
              image="https://images.pexels.com/photos/5997778/pexels-photo-5997778.jpeg?auto=compress&cs=tinysrgb&w=1200"
              description="Residencia de verano del Príncipe Eugenio de Saboya y obra maestra del barroco. Hoy alberga la colección de arte austríaco más importante, con 'El Beso' de Gustav Klimt (1907-1908) como joya absoluta. También 'Judith I' de Klimt, obras de Egon Schiele y arte medieval."
              details={[
                'Entrada: 20€ (Belvedere Superior)',
                'Horario: 10:00-18:00 todos los días',
                'Duración recomendada: 2-3 horas',
                'Jardines: entrada gratuita (barrocos, espectaculares)',
                'Obras imprescindibles: El Beso, Judith I, colección Schiele',
              ]}
              link={{ url: 'https://gyg.me/pvL78q94', label: 'Entradas sin colas', price: '20€', badge: 'Se agota' }}
              tip="'El Beso' de Klimt es la Mona Lisa de Viena. Ve directo a la sala donde se expone para verlo sin mucha gente."
              index={3}
            />
          </div>
        </div>
      </section>

      {/* DAY 3 */}
      <section id="dia-3" className="py-24 md:py-36 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <DaySectionHeader number={3} title="Hofburg, Sacher y Gran Final Musical" />

          <DayTimeline
            stops={[
              { time: '9:00', place: 'Palacio Hofburg' },
              { time: '13:00', place: 'Café Sacher' },
              { time: '15:00', place: 'Kärntner Straße' },
              { time: '19:30', place: 'Wiener Staatsoper' },
            ]}
            color="teal"
          />

          <div className="mt-16 space-y-24 md:space-y-32">
            <Attraction
              time="9:00h"
              title="Palacio Hofburg"
              image="https://images.pexels.com/photos/15488513/pexels-photo-15488513.jpeg?auto=compress&cs=tinysrgb&w=1200"
              description="Residencia principal de los emperadores austríacos durante más de 600 años y centro del Imperio Austro-Húngaro. Hoy alberga los Apartamentos Imperiales, el Museo de Sisí, la Biblioteca Nacional (considerada la más bella del mundo) y la Escuela Española de Equitación."
              details={[
                'Apartamentos Imperiales + Museo Sisí: 9:00-17:30, 19 salas históricas',
                'Biblioteca Nacional (Prunksaal): 12€, la más bella del mundo',
                '200.000 volúmenes históricos, frescos barrocos, globos únicos',
                'Escuela Española: 24€ (visita guiada), caballos Lipizzaner desde 1572',
                'Duración total: 2-3 horas mínimo',
              ]}
              link={{ url: 'https://gyg.me/dzn5QZh5', label: 'Tour Sisí, Hofburg y Jardines', price: '49€', badge: 'Top' }}
              index={0}
            />

            <Attraction
              time="13:00h"
              title="Café Sacher — La Sachertorte Original"
              image="https://images.pexels.com/photos/8568542/pexels-photo-8568542.jpeg?auto=compress&cs=tinysrgb&w=1200"
              description="Fundado en 1876 frente a la Ópera. El único lugar del mundo donde se sirve la receta original de la Sachertorte, creada por Franz Sacher en 1832. Decoración imperial auténtica, servicio con guantes blancos y clientela de lujo internacional. Una tradición familiar de casi 200 años."
              details={[
                'Especialidad: Sachertorte original (receta secreta)',
                'Ubicación: frente a la Ópera Estatal',
                'Servicio con guantes blancos',
                'Cola frecuente: ir entre 14:00-15:00 para menor espera',
                'También: Wiener Melange y repostería imperial',
              ]}
              tip="La Sachertorte se puede comprar para llevar en cajas elegantes: un regalo perfecto."
              index={1}
            />

            <Attraction
              time="15:00h"
              title="Kärntner Straße"
              image="https://images.pexels.com/photos/11932444/pexels-photo-11932444.jpeg?auto=compress&cs=tinysrgb&w=1200"
              description="La calle comercial más famosa de Viena conecta la Ópera con la Catedral de San Esteban. Zona peatonal con arquitectura histórica, músicos callejeros y terrazas para observar el paso de los vieneses. Swarovski, moda internacional, joyerías tradicionales y librerías."
              details={[
                'Zona peatonal relajada y elegante',
                'Swarovski: cristales austríacos famosos',
                'Librería Morawa: sección multilingüe',
                'Músicos callejeros de calidad (muchos del Conservatorio)',
                'Perfecto para un paseo previo al concierto',
              ]}
              index={2}
            />

            <Attraction
              time="19:30h"
              title="Wiener Staatsoper — Gran Final Musical"
              image="https://images.pexels.com/photos/8568542/pexels-photo-8568542.jpeg?auto=compress&cs=tinysrgb&w=1200"
              description="Inaugurada en 1869, la Ópera Estatal de Viena es una de las más importantes del mundo. El secreto mejor guardado: las entradas de pie (Stehplätze) cuestan solo 3-4€ y ofrecen una experiencia acústica excepcional. Temporada de septiembre a junio."
              details={[
                'Entradas de pie: 3-4€ (¡increíble relación calidad-precio!)',
                'Asientos económicos: 15-40€',
                'Palcos premium: 100-300€',
                'Visitas guiadas: 12€ (sin espectáculo)',
                'Temporada: septiembre a junio',
              ]}
              tip="Las Stehplätze (entradas de pie) son el gran secreto de Viena. Por 3-4€ disfrutas de acústica de clase mundial. Se venden 80 minutos antes del espectáculo."
              link={{ url: 'https://www.wiener-staatsoper.at/en/', label: 'Programación y entradas', price: '3€' }}
              index={3}
            />
          </div>

          {/* Alternative concerts */}
          <div className="mt-20 bg-stone-900 text-stone-50 p-8 md:p-12">
            <div className="flex items-center gap-3 mb-6">
              <Music size={16} className="text-amber-400" />
              <span className="text-[10px] uppercase tracking-[.2em] text-amber-400">Alternativas musicales</span>
            </div>
            <h3 className="text-2xl md:text-3xl mb-6" style={{ fontFamily: 'Georgia, serif' }}>
              Otros escenarios imperdibles
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <ConcertOption title="Musikverein (Sala Dorada)" desc="Acústica perfecta. Sede de la Filarmónica de Viena." link="https://gyg.me/bbOpdWgB" />
              <ConcertOption title="Karlskirche" desc="Conciertos de Vivaldi y Mozart en iglesia barroca." link="https://gyg.me/ghHUAcrV" />
              <ConcertOption title="Kursalon (Stadtpark)" desc="Valses de Strauss con cena opcional." link="" />
              <ConcertOption title="Schönbrunn Orangerie" desc="Conciertos de cámara en sala imperial." link="" />
            </div>
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
            Más <span className="italic">experiencias</span> en Viena
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <ExtraCard title="Naschmarkt" desc="El mercado más famoso de Viena. Gastronomía internacional y local, puestos de especias y antigüedades los sábados." />
            <ExtraCard title="MuseumsQuartier" desc="Complejo cultural con el MUMOK (arte moderno) y el Museo Leopold (mayor colección de Schiele del mundo)." />
            <ExtraCard title="Light of Creation" desc="Espectáculo inmersivo de luces en la Votivkirche. Una experiencia multisensorial única." link="https://gyg.me/oyQziOhd" />
          </div>

          <div className="mt-12">
            <h3 className="text-xl font-semibold text-stone-900 mb-6">Excursiones de un día</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <DayTripCard title="Hallstatt y Salzburgo" link="https://gyg.me/R9CKgxH7" />
              <DayTripCard title="Tour completo Austria (Hallstatt, Salzburgo, Alpes)" link="https://gyg.me/E6a2Ta7o" />
              <DayTripCard title="Bratislava y Budapest" link="https://gyg.me/UYIdvdFi" />
              <DayTripCard title="Praga (tour guiado)" link="https://gyg.me/qVUeP4MV" />
            </div>
          </div>
        </div>
      </section>

      {/* VIENNA PASS COMPARISON TABLE */}
      <section id="vienna-pass" className="py-24 md:py-32 bg-white scroll-mt-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-8 bg-amber-600" />
            <span className="text-[10px] uppercase tracking-[.2em] text-amber-700">Ahorra dinero</span>
          </div>
          <h2 className="text-4xl md:text-5xl text-stone-900 leading-tight mb-6" style={{ fontFamily: 'Georgia, serif' }}>
            ¿Merece la pena la <span className="italic">Vienna Pass</span>?
          </h2>
          <p className="text-stone-600 mb-12 max-w-2xl">
            Hemos calculado cuánto gastarías comprando las entradas por separado vs. con la Vienna Pass de 3 días (precios actualizados a 2026). Spoiler: ahorras más de 40% si visitas al menos 5 atracciones.
          </p>

          <div className="border-2 border-stone-200 overflow-hidden">
            <div className="grid grid-cols-3 bg-stone-900 text-stone-50 text-xs uppercase tracking-wider">
              <div className="p-4 font-medium">Atracción</div>
              <div className="p-4 font-medium text-center">Entrada individual</div>
              <div className="p-4 font-medium text-center bg-amber-700">Con Vienna Pass</div>
            </div>
            {[
              { name: 'Schönbrunn (Palace Ticket)', price: '38€' },
              { name: 'Belvedere Superior', price: '23€' },
              { name: 'Hofburg (Sisi Museum + Apartamentos)', price: '19,50€' },
              { name: 'Riesenrad (Noria Prater)', price: '14,50€' },
              { name: 'Catedral San Esteban (Torre Sur)', price: '7€' },
              { name: 'Mozarthaus Vienna', price: '14€' },
              { name: 'Museo Hundertwasser', price: '14€' },
              { name: 'Hop-on Hop-off Bus (1 día)', price: '32€' },
            ].map((item, i) => (
              <div key={item.name} className={`grid grid-cols-3 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-stone-50'} border-t border-stone-100`}>
                <div className="p-4 text-stone-700 font-medium">{item.name}</div>
                <div className="p-4 text-center text-stone-600">{item.price}</div>
                <div className="p-4 text-center bg-amber-50 text-amber-700 font-semibold">
                  <CheckCircle size={14} className="inline mr-1 -mt-0.5" />Incluido
                </div>
              </div>
            ))}
            <div className="grid grid-cols-3 border-t-2 border-stone-900 bg-stone-900 text-white">
              <div className="p-5 font-bold text-sm">TOTAL</div>
              <div className="p-5 text-center">
                <span className="text-xl font-bold line-through text-stone-400">162€</span>
              </div>
              <div className="p-5 text-center bg-amber-700">
                <span className="text-xl font-bold">149€</span>
                <span className="block text-[10px] mt-0.5 text-amber-200 uppercase tracking-wider">Vienna Pass 3 días</span>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 p-5">
            <div>
              <span className="text-2xl font-bold text-green-700" style={{ fontFamily: 'Georgia, serif' }}>Ahorras ~13€ en entradas</span>
              <p className="text-sm text-green-600 mt-0.5">Pero el verdadero valor es el acceso sin colas + bus turístico + más de 90 atracciones incluidas</p>
            </div>
            <a
              href="https://gyg.me/MTSmqRRG"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 bg-stone-900 hover:bg-amber-700 text-white text-xs uppercase tracking-wider px-6 py-4 transition-colors flex items-center gap-2 font-medium"
            >
              Comprar Vienna Pass <ExternalLink size={12} />
            </a>
          </div>

          <p className="mt-4 text-xs text-stone-400 text-center">
            * Precios orientativos a junio 2026. Consulta la web oficial para tarifas actualizadas. La Vienna Pass NO incluye transporte público (se compra aparte). Incluye entrada sin cola a más de 90 atracciones + bus turístico hop-on hop-off.
          </p>
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

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* TRANSPORT */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Train size={16} className="text-amber-600" />
                <h3 className="text-xl font-semibold text-stone-900">Transporte público</h3>
              </div>
              <div className="space-y-4 text-stone-700 text-sm leading-relaxed">
                <p><strong>U-Bahn (Metro):</strong> 5 líneas, frecuencia 2-5 min, horario 05:00-00:30 (24h viernes y sábados).</p>
                <p><strong>Tranvías:</strong> Red histórica de 225 km que cubre toda la ciudad.</p>
                <p><strong>Abonos (2026):</strong> Billete sencillo 3€ digital / 3,20€ físico · 24h: 9,70€ digital · 7 días: 25,20€ digital</p>
                <p><strong>Importante:</strong> Desde enero 2026 ya NO existen los abonos de 48h ni 72h. La mejor opción para 3 días: comprar 3 billetes de 24h (29,10€) o el de 7 días (25,20€).</p>
                <p><strong>App:</strong> WienMobil (compra digital, 5% más barato) · Validación obligatoria · Multa sin billete: 135€</p>
              </div>

              <div className="mt-8">
                <h4 className="font-semibold text-stone-900 mb-4">Desde el aeropuerto (VIE)</h4>
                <div className="space-y-3">
                  <TransportOption name="CAT (City Airport Train)" price="14€" time="16 min" desc="No-stop a Wien-Mitte" link="https://gyg.me/fLZy1uTy" />
                  <TransportOption name="Vienna Airport Lines (Bus)" price="11€" time="20-30 min" desc="Varias líneas al centro" link="https://www.viennaairportlines.at/en/informationen/unser-streckennetz" />
                  <TransportOption name="Transfer privado" price="75€" time="30-50 min" desc="Puerta a puerta (hasta 3 personas)" link="https://gyg.me/8wpM6c41" />
                </div>
              </div>
            </div>

            {/* BUDGET */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Euro size={16} className="text-amber-600" />
                <h3 className="text-xl font-semibold text-stone-900">Presupuesto por día</h3>
              </div>
              <div className="space-y-6">
                <BudgetTier
                  level="Mochilero"
                  range="75-100€/día"
                  items={['Hostel: 30-40€', 'Comida: 25-30€', 'Transporte: 8€ (abono 7 días / 3)', 'Atracciones: 12-20€']}
                />
                <BudgetTier
                  level="Estándar"
                  range="140-190€/día"
                  items={['Hotel 3★: 80-110€', 'Comida: 40-50€', 'Transporte: 10€ (24h digital)', 'Atracciones: 20-30€']}
                />
                <BudgetTier
                  level="Premium"
                  range="280-450€/día"
                  items={['Hotel 5★: 170-280€', 'Comida: 80-130€', 'Transporte: 20€', 'Atracciones: 30-50€']}
                />
              </div>
              <button
                onClick={() => document.getElementById('vienna-pass')?.scrollIntoView({ behavior: 'smooth' })}
                className="mt-6 w-full flex items-center justify-center gap-2 border-2 border-dashed border-amber-300 bg-amber-50/50 p-3 text-xs text-amber-800 font-medium hover:bg-amber-50 transition-colors"
              >
                <CheckCircle size={13} />
                Ver tabla comparativa Vienna Pass (149€ vs 162€ por separado)
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* WHEN TO VISIT */}
      <section id="cuando-ir" className="py-24 md:py-32 bg-stone-50 scroll-mt-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-8 bg-amber-600" />
            <span className="text-[10px] uppercase tracking-[.2em] text-amber-700">Planifica</span>
          </div>
          <h2 className="text-4xl md:text-5xl text-stone-900 leading-tight mb-12" style={{ fontFamily: 'Georgia, serif' }}>
            Cuándo <span className="italic">visitar Viena</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <SeasonCard
              icon={Sun}
              season="Primavera (Abr-May)"
              temp="12-20°C"
              description="La mejor época calidad-precio. Jardines en flor en Schönbrunn, terrazas abiertas en el Danubio, pocos turistas y precios moderados. Festival de Pascua en el Prater."
              tag="Recomendada"
              color="green"
            />
            <SeasonCard
              icon={Sun}
              season="Verano (Jun-Ago)"
              temp="20-30°C"
              description="Temporada alta con festivales al aire libre (Film Festival en Rathausplatz). Cines al aire libre, noches largas. Hoteles 30-40% más caros. Mucho turismo."
              tag="Alta demanda"
              color="amber"
            />
            <SeasonCard
              icon={Leaf}
              season="Otoño (Sep-Oct)"
              temp="10-18°C"
              description="Temporada de ópera y conciertos en pleno apogeo. Colores otoñales en Stadtpark, vino nuevo (Heuriger), menos masificación. Nuestra favorita junto a primavera."
              tag="Recomendada"
              color="green"
            />
            <SeasonCard
              icon={Snowflake}
              season="Invierno (Nov-Mar)"
              temp="-2-5°C"
              description="Mercados navideños espectaculares (Nov-Dic), bailes imperiales (Ene-Feb), ópera en su momento álgido. Frío intenso pero ambiente mágico. Hoteles accesibles en enero."
              tag="Mercados navideños"
              color="rose"
            />
          </div>

          <div className="mt-10 bg-white border border-stone-200 p-6">
            <h3 className="text-lg font-semibold text-stone-900 mb-3">Resumen rápido</h3>
            <div className="grid sm:grid-cols-3 gap-4 text-sm">
              <div>
                <span className="font-medium text-green-700">Mejor momento:</span>
                <p className="text-stone-600 mt-0.5">Abril-mayo y septiembre-octubre</p>
              </div>
              <div>
                <span className="font-medium text-amber-700">Más barato:</span>
                <p className="text-stone-600 mt-0.5">Enero-febrero (sin Navidad)</p>
              </div>
              <div>
                <span className="font-medium text-rose-700">Evitar:</span>
                <p className="text-stone-600 mt-0.5">Agosto (calor + turismo masivo)</p>
              </div>
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
          <p className="text-stone-600 mb-12 max-w-2xl">Hoteles probados personalmente en las dos mejores zonas para moverse a pie o en metro.</p>

          <div className="grid lg:grid-cols-2 gap-10">
            <HotelZone
              zone="Centro Histórico"
              description="La ubicación más céntrica para explorar Viena a pie"
              hotels={[
                { name: 'Buxbaum Beletage Design & Boutique', stars: 4, link: 'https://booking.tpk.lv/02HJo6CR', highlight: 'Junto a la Catedral y la Ópera' },
                { name: 'Hotel Royal', stars: 4, link: 'https://booking.tpk.lv/E1u4RhD6', highlight: 'Muy cerca de Stephansdom, 2 restaurantes' },
                { name: 'Hotel Capricorno', stars: 4, link: 'https://booking.tpk.lv/RVD7nB3P', highlight: '8 min a la Catedral, metro Schwedenplatz' },
              ]}
            />
            <HotelZone
              zone="Leopoldstadt y Landstraße"
              description="Mejor relación calidad-precio, excelente transporte"
              hotels={[
                { name: 'Henriette Stadthotel', stars: 4, link: 'https://booking.tpk.lv/is1dcdUr', highlight: 'Metro Nestroyplatz, 2 paradas al centro' },
                { name: 'Hotel Spiess & Spiess', stars: 4, link: 'https://booking.tpk.lv/JHRNWZHd', highlight: 'Hotel ecológico, desayuno premium' },
                { name: 'ibis Styles Wien Messe Prater', stars: 3, link: 'https://booking.tpk.lv/mNvXHjff', highlight: 'Canal del Danubio, Prater a 400m' },
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
              <h3 className="font-semibold text-stone-900 mb-6 text-lg">Cocina austriaca tradicional</h3>
              <div className="space-y-5">
                <Restaurant name="Figlmüller" address="Wollzeile 5" price="€€" desc="El schnitzel más famoso de Viena. Reservar obligatorio." link="https://www.figlmueller.at/" />
                <Restaurant name="Plachutta" address="Wollzeile 38" price="€€€" desc="El mejor Tafelspitz de la ciudad. Ambiente elegante." />
                <Restaurant name="Gasthaus Pöschl" address="Weihburggasse 17" price="€€" desc="Auténtico local. Goulash y schnitzel como los de antes." />
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-stone-900 mb-6 text-lg">Internacional y moderno</h3>
              <div className="space-y-5">
                <Restaurant name="Motto am Fluss" address="Franz-Josefs-Kai 2" price="€€€" desc="Vistas al Danubio. Romántico e innovador." />
                <Restaurant name="Labstelle Wien" address="Lugeck 6" price="€€" desc="Fusión austriaco-asiática. Ambiente joven y creativo." />
                <Restaurant name="Naschmarkt" address="Wienzeile" price="€" desc="Mercado con puestos de comida internacional. Variado y económico." />
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
              link="https://revolut.com/referral/?referral-code=antoni22jf!DEC1-25-AR-CH1H-CRY"
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

      {/* FAQ / TIPS */}
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
              question="¿Merece la pena la Vienna Pass para 3 días?"
              answer="La Vienna Pass de 3 días cuesta unos 149€ e incluye más de 90 atracciones + bus turístico sin colas. Comprando las entradas principales por separado gastarías unos 162€. El mayor valor real es saltarte las colas (Schönbrunn tiene colas de 30-60 min) y el hop-on hop-off incluido."
            />
            <FAQItem
              question="¿Se puede ver la Ópera de Viena por 3€?"
              answer="Sí. Las Stehplätze (entradas de pie) se venden 80 minutos antes de cada función por 3-4€. La acústica es de clase mundial. Se forman colas 1-2 horas antes para las funciones populares."
            />
            <FAQItem
              question="¿Es necesario llevar efectivo en Viena?"
              answer="Sí, es muy recomendable. Muchos cafés tradicionales y Heurigers (tabernas de vino) no aceptan tarjeta. Una tarjeta sin comisiones como Revolut permite retirar efectivo gratis en cualquier cajero austríaco."
            />
            <FAQItem
              question="¿Cuál es la mejor época para visitar Viena?"
              answer="Primavera (abril-mayo) y otoño (septiembre-octubre): clima agradable, menos turistas y precios moderados. En invierno los mercados navideños son espectaculares. Agosto es el más masificado y caro."
            />
            <FAQItem
              question="¿Qué hacer en Viena en domingo?"
              answer="Las tiendas están cerradas pero los museos, restaurantes, cafés y parques están abiertos. Es el día perfecto para el Prater, Stadtpark o una excursión a Wachau."
            />
            <FAQItem
              question="¿Cómo funciona el Reloj Anker a mediodía?"
              answer="El desfile completo de las 12 figuras históricas dura 15 minutos con música. Ocurre todos los días a las 12:00 en el Hoher Markt. Llega 5 minutos antes para pillar buen sitio."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 md:py-32 bg-stone-900 text-stone-50 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.pexels.com/photos/11932444/pexels-photo-11932444.jpeg?auto=compress&cs=tinysrgb&w=1920"
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
            Tenemos guías similares para Praga, Budapest, Amsterdam, Roma y Londres. Todas con itinerarios optimizados y presupuestos reales.
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
    { label: 'Día 1', place: 'Centro + Schönbrunn' },
    { label: 'Día 2', place: 'Belvedere + Prater' },
    { label: 'Día 3', place: 'Hofburg + Ópera' },
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
  index,
}: {
  time: string;
  title: string;
  image: string;
  description: string;
  details: string[];
  tip?: string;
  link?: { url: string; label: string; price?: string; badge?: string };
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
      </div>
    </div>
  );
}

const MAP_MARKERS = [
  // Day 1 - amber
  { lat: 48.2107, lng: 16.3568, title: 'Rathausplatz', day: 1 },
  { lat: 48.2108, lng: 16.3652, title: 'Café Central', day: 1 },
  { lat: 48.2086, lng: 16.3697, title: 'Graben & Reloj Anker', day: 1 },
  { lat: 48.2085, lng: 16.3731, title: 'Catedral San Esteban', day: 1 },
  { lat: 48.1845, lng: 16.3122, title: 'Palacio Schönbrunn', day: 1 },
  { lat: 48.2072, lng: 16.3748, title: 'Mozarthaus', day: 1 },
  // Day 2 - rose
  { lat: 48.2166, lng: 16.3964, title: 'Wiener Prater', day: 2 },
  { lat: 48.2074, lng: 16.3942, title: 'Hundertwasserhaus', day: 2 },
  { lat: 48.2040, lng: 16.3796, title: 'Stadtpark', day: 2 },
  { lat: 48.1913, lng: 16.3808, title: 'Palacio Belvedere', day: 2 },
  // Day 3 - teal
  { lat: 48.2066, lng: 16.3656, title: 'Palacio Hofburg', day: 3 },
  { lat: 48.2031, lng: 16.3694, title: 'Café Sacher', day: 3 },
  { lat: 48.2050, lng: 16.3722, title: 'Kärntner Straße', day: 3 },
  { lat: 48.2029, lng: 16.3690, title: 'Wiener Staatsoper', day: 3 },
];

function ViennaMap() {
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
        center: [48.2082, 16.3738],
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
          <span className="w-3 h-3 rounded-full bg-amber-600" /> Día 1: Centro + Schönbrunn
        </span>
        <span className="flex items-center gap-2 text-xs text-stone-600">
          <span className="w-3 h-3 rounded-full bg-rose-600" /> Día 2: Belvedere + Prater
        </span>
        <span className="flex items-center gap-2 text-xs text-stone-600">
          <span className="w-3 h-3 rounded-full bg-teal-600" /> Día 3: Hofburg + Ópera
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

function ConcertOption({ title, desc, link }: { title: string; desc: string; link?: string }) {
  const content = (
    <div className={`border p-5 transition-all group ${link ? 'border-amber-500/40 hover:border-amber-400 hover:shadow-lg bg-stone-800' : 'border-stone-700 hover:border-stone-500'}`}>
      <h4 className="text-lg text-stone-50 group-hover:text-amber-400 transition-colors" style={{ fontFamily: 'Georgia, serif' }}>{title}</h4>
      <p className="mt-2 text-sm text-stone-400">{desc}</p>
      {link && (
        <span className="mt-4 inline-flex items-center gap-2 bg-amber-600 text-white text-[10px] uppercase tracking-wider px-3.5 py-2 group-hover:bg-amber-500 transition-colors">
          Reservar entradas <ExternalLink size={10} />
        </span>
      )}
    </div>
  );
  if (link) return <a href={link} target="_blank" rel="noopener noreferrer">{content}</a>;
  return content;
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

function BudgetTier({ level, range, items }: { level: string; range: string; items: string[] }) {
  return (
    <div className="border-t border-stone-200 pt-5">
      <div className="flex items-baseline justify-between mb-3">
        <span className="font-medium text-stone-900">{level}</span>
        <span className="text-amber-700 font-semibold" style={{ fontFamily: 'Georgia, serif' }}>{range}</span>
      </div>
      <ul className="space-y-1">
        {items.map((item) => (
          <li key={item} className="text-sm text-stone-600">{item}</li>
        ))}
      </ul>
    </div>
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
          Ver restaurante <ExternalLink size={10} />
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

function SeasonCard({ icon: Icon, season, temp, description, tag, color }: { icon: any; season: string; temp: string; description: string; tag: string; color: 'green' | 'amber' | 'rose' }) {
  const colorMap = {
    green: 'bg-green-50 border-green-200 text-green-700',
    amber: 'bg-amber-50 border-amber-200 text-amber-700',
    rose: 'bg-rose-50 border-rose-200 text-rose-700',
  };
  const tagColors = {
    green: 'bg-green-100 text-green-800',
    amber: 'bg-amber-100 text-amber-800',
    rose: 'bg-rose-100 text-rose-800',
  };
  return (
    <div className={`border-2 p-6 ${colorMap[color]}`}>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2.5">
          <Icon size={18} />
          <h3 className="font-semibold text-stone-900">{season}</h3>
        </div>
        <span className={`text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 ${tagColors[color]}`}>{tag}</span>
      </div>
      <p className="text-xs font-medium text-stone-500 mb-2">{temp}</p>
      <p className="text-sm text-stone-600 leading-relaxed">{description}</p>
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

export default ViennaGuideArticle;
