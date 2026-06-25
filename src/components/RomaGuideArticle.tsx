import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Euro, MapPin, Compass, List, X, Star, Users, ExternalLink, Bed, UtensilsCrossed, CreditCard, Shield, Download, CheckCircle } from 'lucide-react';
import { Beer as Train } from 'lucide-react';

interface RomaGuideArticleProps {
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

const RomaGuideArticle: React.FC<RomaGuideArticleProps> = ({ onBack }) => {
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
            src="https://images.pexels.com/photos/6199223/pexels-photo-6199223.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Coliseo Romano al atardecer"
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
                Guía Eterna · 3 Días
              </span>
            </div>
            <h1 className="text-stone-50 text-balance font-light leading-[0.98]" style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)', fontFamily: 'Georgia, serif' }}>
              Roma en 3 Días
            </h1>
            <p className="mt-6 italic text-2xl md:text-3xl text-amber-300" style={{ fontFamily: 'Georgia, serif' }}>
              Ciudad Eterna, Historia y Arte Milenario
            </p>
          </div>

          <div className="mt-14 grid grid-cols-3 gap-6 md:gap-10 text-stone-100 border-t border-stone-100/20 pt-8">
            <HeroStat icon={Calendar} label="Duración" value="3 días" />
            <HeroStat icon={Euro} label="Desde" value="80€/día" />
            <HeroStat icon={MapPin} label="Experiencia" value="Milenaria" />
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
            Roma no es solo una ciudad: es un museo al aire libre donde cada piedra cuenta 2.000 años de historia. Desde el majestuoso Coliseo hasta la intimidad del Trastevere, pasando por la grandiosidad del Vaticano: un destino que te deja sin palabras.
          </p>
          <p className="mt-8 text-lg text-stone-600 leading-relaxed max-w-3xl">
            Pero Roma es mucho más que ruinas y monumentos. Es saborear una carbonara auténtica en una trattoria escondida en un callejón. Es sentir la brisa del Tíber al atardecer desde el Puente Sant'Angelo. Es perderte por plazas donde la vida fluye entre fuentes barrocas y terrazas llenas de vida. Cada rincón es una postal, cada comida una experiencia.
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
          <RomaMap />
        </div>
      </section>

      {/* DAY 1 */}
      <section id="dia-1" className="py-24 md:py-36 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <DaySectionHeader number={1} title="Centro Histórico y Plazas Icónicas" />

          <DayTimeline
            stops={[
              { time: '9:00', place: 'Plaza de España + Fontana di Trevi' },
              { time: '11:30', place: 'Panteón + Piazza Navona' },
              { time: '15:00', place: 'Museos Capitolinos + Vittorio Emanuele II' },
            ]}
            color="amber"
          />

          <div className="mt-16 space-y-24 md:space-y-32">
            <Attraction
              time="9:00h"
              title="Plaza de España y Fontana di Trevi"
              image="https://images.pexels.com/photos/5067076/pexels-photo-5067076.jpeg?auto=compress&cs=tinysrgb&w=1200"
              description="Empieza el día en la elegante Plaza de España, con su escalinata monumental de 135 peldaños construida en 1723. Después, camina hasta la Fontana di Trevi (1762, diseñada por Nicola Salvi): la fuente barroca más espectacular del mundo con 26 metros de altura y 49 de ancho. Lanza tu moneda de espaldas y asegura tu regreso a Roma."
              details={[
                'Plaza de España: escalinata de 135 peldaños, acceso libre',
                'Fontana di Trevi: visitar a primera hora (menos gente)',
                'Distancia entre ambas: 10 minutos a pie',
                'Free Tour Centro Histórico: 2h 15min recorrido completo',
                'Incluye las principales plazas y fuentes del centro',
              ]}
              link={{ url: 'https://www.freetour.com/es/rome/free-tour-por-el-centro-de-roma?referralID=rFW5gyO0D7w7JOqo&campaign=CentroRoma', label: 'Reservar Free Tour Centro', price: 'Gratis (propina)', badge: 'Gratis' }}
              index={0}
            />

            <Attraction
              time="11:30h"
              title="Panteón y Piazza Navona"
              image="https://images.pexels.com/photos/2676602/pexels-photo-2676602.jpeg?auto=compress&cs=tinysrgb&w=1200"
              description="El Panteón de Agripa (125 d.C.) es el edificio mejor conservado de la Roma antigua. Su cúpula de 43,3 metros sigue siendo la mayor cúpula de hormigón no armado del mundo. Después, Piazza Navona: la plaza barroca más elegante de Roma con la Fuente de los Cuatro Ríos de Bernini (1651)."
              details={[
                'Panteón: entrada gratuita (reserva obligatoria online)',
                'Cúpula: 43,3m de diámetro, óculo central de 9m',
                'Piazza Navona: 3 fuentes, artistas callejeros, terrazas',
                'Fuente de los Cuatro Ríos: obra maestra de Bernini (1651)',
                'Visita guiada: historia completa del monumento',
              ]}
              link={{ url: 'https://gyg.me/x7n9VjY6', label: 'Visita guiada Panteón', price: '25€', badge: 'Popular' }}
              index={1}
            />

            <Attraction
              time="15:00h"
              title="Museos Capitolinos y Terraza Vittorio Emanuele II"
              image="https://images.pexels.com/photos/9386106/pexels-photo-9386106.jpeg?auto=compress&cs=tinysrgb&w=1200"
              description="Los Museos Capitolinos son el museo público más antiguo del mundo (1734). Albergan la Loba Capitolina, el Marco Aurelio ecuestre original y una colección impresionante de escultura romana. Después, sube a la terraza del Altare della Patria para las mejores vistas panorámicas de Roma: Foro Romano, Coliseo y toda la ciudad a tus pies."
              details={[
                'Museos Capitolinos: museo público más antiguo del mundo (1734)',
                'Obras: Loba Capitolina, Marco Aurelio, Galata moribundo',
                'Terraza panorámica: las mejores vistas 360° de Roma',
                'Ascensor panorámico: 7€ (merece mucho la pena)',
                'Horario: 9:30-19:30 todos los días',
              ]}
              link={{ url: 'https://gyg.me/Kpaf4B2q', label: 'Visita guiada Museos Capitolinos', price: '30€' }}
              index={2}
            />
          </div>
        </div>
      </section>

      {/* DAY 2 */}
      <section id="dia-2" className="py-24 md:py-36 bg-stone-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <DaySectionHeader number={2} title="Roma Antigua — Coliseo y Foro Romano" />

          <DayTimeline
            stops={[
              { time: '9:00', place: 'Coliseo' },
              { time: '11:30', place: 'Foro Romano + Monte Palatino' },
              { time: '17:00', place: 'Bocca della Verità + Trastevere' },
            ]}
            color="rose"
          />

          <div className="mt-16 space-y-24 md:space-y-32">
            <Attraction
              time="9:00h"
              title="El Coliseo"
              image="https://images.pexels.com/photos/2064827/pexels-photo-2064827.jpeg?auto=compress&cs=tinysrgb&w=1200"
              description="El anfiteatro más grande jamás construido (72-80 d.C.), con capacidad para 50.000-80.000 espectadores. Patrimonio de la Humanidad y una de las Nuevas Siete Maravillas del Mundo. Sus 4 pisos de arquerías, el hipogeo subterráneo y la arena donde lucharon gladiadores durante 500 años siguen impresionando hoy como hace dos milenios."
              details={[
                'Capacidad original: 50.000-80.000 espectadores',
                'Construcción: 72-80 d.C. bajo Vespasiano y Tito',
                'Patrimonio UNESCO y Nueva Maravilla del Mundo',
                'Tour guiado incluye Coliseo + Foro + Palatino',
                'Imprescindible reservar con antelación (se agota)',
              ]}
              tip="Reserva la entrada con tour guiado para acceder al Coliseo, Foro Romano y Monte Palatino con explicaciones en español. Se agota con semanas de antelación."
              link={{ url: 'https://gyg.me/J0uUGFpb', label: 'Tour Guiado Coliseo + Foro + Palatino', price: '55€', badge: 'Se agota' }}
              index={0}
            />

            <Attraction
              time="11:30h"
              title="Foro Romano y Monte Palatino"
              image="https://images.pexels.com/photos/6220444/pexels-photo-6220444.jpeg?auto=compress&cs=tinysrgb&w=1200"
              description="El corazón político, religioso y comercial de la Roma antigua durante más de 1.000 años. Camina entre los restos del Templo de Saturno, el Arco de Tito y la Vía Sacra. Después sube al Monte Palatino, la colina donde nació Roma según la leyenda: palacios imperiales, jardines Farnesio y vistas espectaculares sobre el Foro."
              details={[
                'Foro Romano: centro neurálgico de la Roma antigua',
                'Templo de Saturno, Arco de Tito, Basílica de Majencio',
                'Monte Palatino: cuna legendaria de Roma',
                'Palacios de Augusto, Domiciano y Tiberio',
                'Incluido en la entrada combinada con el Coliseo',
              ]}
              link={{ url: 'https://gyg.me/J0uUGFpb', label: 'Tour Guiado Coliseo + Foro + Palatino', price: '55€', badge: 'Se agota' }}
              index={1}
            />

            <Attraction
              time="17:00h"
              title="Bocca della Verità y Trastevere"
              image="https://images.pexels.com/photos/34010785/pexels-photo-34010785.jpeg?auto=compress&cs=tinysrgb&w=1200"
              description="La Bocca della Verità (Boca de la Verdad) es un antiguo disco de mármol del siglo I que, según la leyenda, muerde la mano de los mentirosos. Después cruza el Tíber hacia Trastevere: el barrio más auténtico y encantador de Roma con calles empedradas, hiedra en las fachadas, trattorias familiares y la mejor vida nocturna de la ciudad."
              details={[
                'Bocca della Verità: iglesia Santa María in Cosmedin',
                'Trastevere: el barrio más auténtico y fotogénico de Roma',
                'Calles empedradas, plazas con fuentes, vida nocturna',
                'Tour de comida: prueba la auténtica cocina romana',
                'Mejor momento: atardecer y noche',
              ]}
              link={{ url: 'https://gyg.me/GTN3t260', label: 'Tour de Comida por Trastevere', price: '45€', badge: 'Top' }}
              index={2}
            />
          </div>
        </div>
      </section>

      {/* DAY 3 */}
      <section id="dia-3" className="py-24 md:py-36 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <DaySectionHeader number={3} title="El Vaticano — Arte, Fe y Poder" />

          <DayTimeline
            stops={[
              { time: '9:00', place: 'Museos Vaticanos + Capilla Sixtina' },
              { time: '13:00', place: 'Basílica de San Pedro' },
              { time: '16:00', place: 'Castillo Sant\'Angelo' },
              { time: '18:30', place: 'Piazza del Popolo + Terrazza del Pincio' },
            ]}
            color="teal"
          />

          <div className="mt-16 space-y-24 md:space-y-32">
            <Attraction
              time="9:00h"
              title="Museos Vaticanos y Capilla Sixtina"
              image="https://images.pexels.com/photos/28733354/pexels-photo-28733354.jpeg?auto=compress&cs=tinysrgb&w=1200"
              description="Una de las mayores colecciones de arte del mundo reunida por los Papas durante siglos. 54 galerías con obras maestras de Rafael, Caravaggio y Leonardo. El recorrido culmina en la Capilla Sixtina: el techo pintado por Miguel Ángel entre 1508-1512 con la icónica Creación de Adán y el Juicio Final en el altar."
              details={[
                'Más de 70.000 obras en 54 galerías',
                'Capilla Sixtina: techo de Miguel Ángel (1508-1512)',
                'Estancias de Rafael: La Escuela de Atenas',
                'Duración recomendada: 3-4 horas',
                'Imprescindible reservar con antelación (colas de 3h sin reserva)',
              ]}
              tip="Reserva la primera hora de la mañana (9:00) para evitar las multitudes. Sin reserva puedes esperar 2-3 horas de cola."
              link={{ url: 'https://gyg.me/wIqPOyE9', label: 'Tour Museos Vaticanos + Capilla Sixtina', price: '45€', badge: 'Se agota' }}
              index={0}
            />

            <Attraction
              time="13:00h"
              title="Basílica de San Pedro"
              image="https://images.pexels.com/photos/12044711/pexels-photo-12044711.jpeg?auto=compress&cs=tinysrgb&w=1200"
              description="La iglesia más grande del mundo y centro espiritual del catolicismo. 218 metros de largo, la cúpula de Miguel Ángel alcanza 136 metros de altura. En su interior: la Piedad de Miguel Ángel (1499), el Baldaquino de Bernini (29m de bronce dorado) y las Grutas Vaticanas con la tumba de San Pedro."
              details={[
                'Entrada gratuita (control de seguridad)',
                'Cúpula: subida a pie 551 escalones o ascensor + 320 escalones',
                'La Piedad de Miguel Ángel (1499): primera capilla a la derecha',
                'Baldaquino de Bernini: 29m de bronce bajo la cúpula',
                'Horario: 7:00-18:30 (invierno) / 7:00-19:00 (verano)',
              ]}
              link={{ url: 'https://gyg.me/JNMNOu6o', label: 'Visita guiada Basílica de San Pedro', price: '35€', badge: 'Popular' }}
              index={1}
            />

            <Attraction
              time="16:00h"
              title="Castillo Sant'Angelo"
              image="https://images.pexels.com/photos/31077446/pexels-photo-31077446.jpeg?auto=compress&cs=tinysrgb&w=1200"
              description="Construido como mausoleo del emperador Adriano en el 139 d.C., posteriormente fue fortaleza papal, prisión y ahora museo. Conectado al Vaticano por el Passetto di Borgo (pasadizo secreto). Su terraza ofrece unas vistas espectaculares del Tíber, la cúpula de San Pedro y toda Roma."
              details={[
                'Construido en 139 d.C. como mausoleo de Adriano',
                'Passetto di Borgo: pasadizo secreto al Vaticano (800m)',
                'Terraza: vistas panorámicas del Tíber y San Pedro',
                "Puente Sant'Angelo: esculturas de Bernini (1669)",
                'Horario: 9:00-19:30, cerrado lunes',
              ]}
              link={{ url: 'https://gyg.me/kzz9A7do', label: "Visita guiada Castillo Sant'Angelo", price: '30€' }}
              index={2}
            />

            <Attraction
              time="18:30h"
              title="Piazza del Popolo y Terrazza del Pincio"
              image="https://images.pexels.com/photos/28238173/pexels-photo-28238173.jpeg?auto=compress&cs=tinysrgb&w=1200"
              description="Termina tu viaje en la Piazza del Popolo, una de las plazas más amplias y elegantes de Roma con su obelisco egipcio de 3.200 años y las iglesias gemelas. Después sube a la Terrazza del Pincio en los Jardines de Villa Borghese: el mirador más romántico de Roma para ver el atardecer sobre la cúpula de San Pedro."
              details={[
                'Piazza del Popolo: obelisco egipcio de 3.200 años',
                'Iglesias gemelas de Santa María (s. XVII)',
                'Terrazza del Pincio: el mejor atardecer de Roma',
                'Jardines de Villa Borghese: acceso gratuito',
                'Momento ideal: 30 min antes del atardecer',
              ]}
              tip="Sube a la Terrazza del Pincio 30 minutos antes de la puesta de sol. Las vistas sobre Roma con la cúpula de San Pedro al fondo son el broche perfecto del viaje."
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
            Más <span className="italic">experiencias</span> en Roma
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <ExtraCard title="Termas de Caracalla" desc="Las termas imperiales más espectaculares de Roma (216 d.C.). Podían acoger a 1.600 bañistas simultáneamente. Ruinas impresionantes con mosaicos originales." />
            <ExtraCard title="Villa Borghese" desc="El parque más bonito de Roma con el Museo y Galería Borghese (Bernini, Caravaggio, Canova). Alquiler de barcas en el lago, jardines italianos." />
            <ExtraCard title="Basílica San Juan de Letrán" desc="La catedral de Roma (no es San Pedro). La primera iglesia cristiana del mundo (324 d.C.). Interior monumental y Scala Santa." />
            <ExtraCard title="Circo Máximo" desc="El estadio más grande de la antigüedad: 600m de largo, 250.000 espectadores para carreras de cuadrigas. Hoy un parque con historia bajo los pies." />
            <ExtraCard title="Campo dei Fiori" desc="Mercado matutino de frutas, verduras y flores. Por la noche se transforma en zona de bares y restaurantes con ambiente joven." />
            <ExtraCard title="Catacumbas de Roma" desc="Red subterránea de túneles funerarios cristianos (s. II-V). Kilómetros de galerías con frescos y nichos. Experiencia única bajo tierra." />
          </div>

          <div className="mt-12">
            <h3 className="text-xl font-semibold text-stone-900 mb-6">Excursiones de un día</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <DayTripCard title="Pompeya y Costa Amalfitana" link="https://gyg.me/dqdnZ6xS" />
              <DayTripCard title="Florencia y Pisa (tren de alta velocidad)" link="https://gyg.me/p48HIjTK" />
              <DayTripCard title="Toscana, Montepulciano y Val d'Orcia" link="https://gyg.me/kqtptdDS" />
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
          <p className="text-stone-600 mb-12 max-w-2xl">Hoteles en las mejores zonas para moverse a pie y conectar con el transporte público.</p>

          <div className="grid lg:grid-cols-2 gap-10">
            <HotelZone
              zone="Centro Histórico"
              description="La ubicación más práctica: todo a pie"
              hotels={[
                { name: 'Hotel Smeraldo', stars: 3, link: 'https://booking.tpk.lv/IHfFpFIB', highlight: 'Junto a Campo dei Fiori y Piazza Navona' },
                { name: 'Terrace Pantheon Relais', stars: 4, link: 'https://booking.tpk.lv/AD5vS3Hf', highlight: 'Terraza con vistas al Panteón' },
              ]}
            />
            <HotelZone
              zone="Vaticano / Prati"
              description="Zona elegante junto al Vaticano, excelente metro"
              hotels={[
                { name: 'Donna Laura Palace', stars: 4, link: 'https://booking.tpk.lv/jd418WFK', highlight: 'Terraza panorámica, cerca del Vaticano' },
                { name: 'Hotel Isa Design', stars: 4, link: 'https://booking.tpk.lv/58AldYai', highlight: 'Diseño contemporáneo, a 5 min de San Pedro' },
              ]}
            />
          </div>

          <div className="mt-10">
            <a
              href="https://booking.tpk.lv/91nRuLrC"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-stone-900 hover:bg-amber-700 text-white text-xs uppercase tracking-wider px-6 py-4 transition-colors font-medium"
            >
              Ver hoteles en Trastevere <ExternalLink size={12} />
            </a>
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
              <h3 className="font-semibold text-stone-900 mb-6 text-lg">Trastevere</h3>
              <div className="space-y-5">
                <Restaurant name="Da Enzo al 29" address="Via dei Vascellari, 29" price="€€" desc="Imprescindible. Carbonara y cacio e pepe legendarias. Cola siempre, pero merece la espera." link="https://maps.app.goo.gl/GcLPbqpcFh9e89LbA" />
                <Restaurant name="Tonnarello" address="Via della Paglia, 77" price="€€" desc="Pastas enormes y deliciosas. Terraza encantadora en pleno Trastevere." link="https://maps.app.goo.gl/mLxdYdz3oFCipqLt8" />
                <Restaurant name="Nannarella" address="Piazza di S. Calisto, 7/a" price="€" desc="Cocina romana casera a buen precio. Terraza en plaza tranquila." link="https://maps.app.goo.gl/dn5XLM3R7NqwqQf7A" />
                <Restaurant name="Otello" address="Via della Pelliccia, 47" price="€€" desc="Trattoria clásica con recetas familiares. Ambiente auténtico." link="https://maps.app.goo.gl/Q8X9mxqg2mVY4gTaA" />
                <Restaurant name="Trapizzino" address="Piazza Trilussa" price="€" desc="Street food romano: pizza triangular rellena de platos tradicionales." link="https://maps.app.goo.gl/cNv7j8bMF28gDmfJ8" />
                <Restaurant name="Supplì Roma" address="Via di S. Francesco a Ripa, 137" price="€" desc="Los mejores supplì (croquetas de arroz) de Roma. Para llevar." link="https://maps.app.goo.gl/UoKP3ZDzQAT6mUWr5" />
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-stone-900 mb-6 text-lg">Monti</h3>
              <div className="space-y-5">
                <Restaurant name="La Taverna dei Monti" address="Via del Boschetto, 41" price="€€" desc="Cocina romana refinada en el barrio más cool. Reservar." link="https://maps.app.goo.gl/1pGnDVaqUPoXCRHp8" />
                <Restaurant name="La Nuova Piazzetta" address="Via del Governo Vecchio, 92" price="€€" desc="Pasta fresca casera. Especialidad en amatriciana." link="https://maps.app.goo.gl/bPDhAUFgJx4cqRHx5" />
              </div>

              <h3 className="font-semibold text-stone-900 mb-6 text-lg mt-10">Centro Histórico</h3>
              <div className="space-y-5">
                <Restaurant name="Armando al Pantheon" address="Salita de' Crescenzi, 31" price="€€€" desc="Junto al Panteón. Cocina romana de autor. Reservar con antelación." link="https://maps.app.goo.gl/ySMsQpHH5hAJXCKT9" />
                <Restaurant name="Roscioli" address="Via dei Giubbonari, 21" price="€€€" desc="Premium. Carbonara de referencia mundial. Experiencia gastronómica." link="https://maps.app.goo.gl/JaVu2q8FrzmLGLG87" />
                <Restaurant name="Osteria da Fortunata" address="Via del Pellegrino, 11" price="€€" desc="Pasta fresca hecha a mano en la entrada. Espectáculo y sabor." link="https://maps.app.goo.gl/3ZLjmT5sG1Hhg6MY7" />
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="font-semibold text-stone-900 mb-6 text-lg">Más opciones imprescindibles</h3>
            <div className="grid md:grid-cols-2 gap-5">
              <Restaurant name="Mercado Central (Termini)" address="Via Giovanni Giolitti, 36" price="€€" desc="Food hall junto a Termini. Puestos de alta calidad: pizza, pasta, dulces. Ideal para probar de todo." link="https://maps.app.goo.gl/qy4nS6XLDwLTh9Nn8" />
              <Restaurant name="Giolitti" address="Via degli Uffici del Vicario, 40" price="€" desc="Heladería histórica desde 1900. La más famosa de Roma." link="https://maps.app.goo.gl/Ny6hGbT1fpYVEfjQ9" />
              <Restaurant name="Venchi" address="Varias ubicaciones" price="€" desc="Chocolate y gelato artesanal premium. Cadena italiana de calidad." link="https://maps.app.goo.gl/kw3cAF3w2EKCQXPN8" />
              <Restaurant name="Gelateria La Romana" address="Varias ubicaciones" price="€" desc="Gelato artesanal desde 1947. Relleno de crema a elegir." link="https://maps.app.goo.gl/WCfN9QcbQMzWBvfXA" />
            </div>
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
                <p><strong>Metro:</strong> 3 líneas (A roja, B azul, C verde). Frecuencia: 5-10 min. Horario: 5:30-23:30 (viernes y sábados hasta 1:30).</p>
                <p><strong>Autobuses:</strong> Red extensa que cubre toda la ciudad. Algunos nocturnos 24h. Frecuencia: 10-15 min.</p>
                <p><strong>Tranvías:</strong> 6 líneas. El Tranvía 8 conecta directamente con Trastevere.</p>
                <p><strong>Billetes:</strong> BIT sencillo 1,50€ (100 min) · 24h: 7€ · 48h: 12,50€ · 72h: 18€ · 7 días: 24€</p>
                <p><strong>Importante:</strong> Validar SIEMPRE al subir. Multa sin billete: 54,90€. Comprar en estancos, máquinas del metro o la app Tabnet.</p>
              </div>

              <div className="mt-8">
                <h4 className="font-semibold text-stone-900 mb-4">Desde el aeropuerto (Fiumicino)</h4>
                <div className="space-y-3">
                  <TransportOption name="Leonardo Express (Tren)" price="17€" time="32 min" desc="Non-stop a Roma Termini" link="https://gyg.me/Oz7nP1yy" />
                  <TransportOption name="Bus Shuttle" price="7€" time="55 min" desc="Varias paradas en el centro" link="https://gyg.me/30nhyxKT" />
                  <TransportOption name="Traslado Privado" price="28€" time="40 min" desc="Puerta a puerta (hasta 3 personas)" link="https://gyg.me/BLaJgf2A" />
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
              question="¿Cuántos días necesito en Roma?"
              answer="3 días es el mínimo para ver lo imprescindible: Centro Histórico, Coliseo/Foro y Vaticano. Con 4-5 días puedes añadir Trastevere con calma, Villa Borghese y una excursión a Pompeya o la Costa Amalfitana."
            />
            <FAQItem
              question="¿Es necesario reservar entradas con antelación?"
              answer="Sí, es imprescindible para el Coliseo y los Museos Vaticanos (se agotan con semanas de antelación). El Panteón también requiere reserva gratuita online. Sin reserva puedes esperar 2-3 horas de cola."
            />
            <FAQItem
              question="¿Cuál es la mejor zona para alojarse?"
              answer="El Centro Histórico (cerca del Panteón o Piazza Navona) es ideal para ir a pie a todo. Trastevere es perfecto si buscas ambiente nocturno. Prati/Vaticano es tranquilo y bien conectado por metro."
            />
            <FAQItem
              question="¿Necesito llevar efectivo en Roma?"
              answer="Aunque muchos sitios aceptan tarjeta, los restaurantes pequeños y heladerías a veces solo aceptan efectivo. Una tarjeta sin comisiones como Revolut te permite retirar gratis en cajeros italianos."
            />
            <FAQItem
              question="¿Qué mejor época para visitar Roma?"
              answer="Primavera (abril-mayo) y otoño (septiembre-octubre): clima perfecto (18-25°C), menos turistas. Julio-agosto es extremadamente caluroso (35-40°C) y masificado. Invierno es económico pero puede llover."
            />
            <FAQItem
              question="¿Cómo evitar las estafas turísticas?"
              answer="No aceptes 'regalos' de pulseras o rosas (piden dinero después). No te sientes en restaurantes con menú solo en inglés junto a monumentos. Usa taxímetro siempre o pide precio antes. Las fuentes públicas con agua potable son seguras."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 md:py-32 bg-stone-900 text-stone-50 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.pexels.com/photos/6199223/pexels-photo-6199223.jpeg?auto=compress&cs=tinysrgb&w=1920"
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
            Tenemos guías similares para Viena, Praga, Budapest, Amsterdam y Londres. Todas con itinerarios optimizados y presupuestos reales.
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
    { label: 'Día 1', place: 'Centro Histórico + Plazas' },
    { label: 'Día 2', place: 'Coliseo + Trastevere' },
    { label: 'Día 3', place: 'Vaticano + Pincio' },
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
  { lat: 41.9058, lng: 12.4823, title: 'Plaza de España', day: 1 },
  { lat: 41.9009, lng: 12.4833, title: 'Fontana di Trevi', day: 1 },
  { lat: 41.8986, lng: 12.4769, title: 'Panteón', day: 1 },
  { lat: 41.8992, lng: 12.4731, title: 'Piazza Navona', day: 1 },
  { lat: 41.8933, lng: 12.4828, title: 'Museos Capitolinos', day: 1 },
  // Day 2 - rose
  { lat: 41.8902, lng: 12.4922, title: 'Coliseo', day: 2 },
  { lat: 41.8925, lng: 12.4853, title: 'Foro Romano', day: 2 },
  { lat: 41.8880, lng: 12.4811, title: 'Bocca della Verità', day: 2 },
  { lat: 41.8893, lng: 12.4695, title: 'Trastevere', day: 2 },
  // Day 3 - teal
  { lat: 41.9065, lng: 12.4536, title: 'Museos Vaticanos', day: 3 },
  { lat: 41.9022, lng: 12.4539, title: 'Basílica de San Pedro', day: 3 },
  { lat: 41.9031, lng: 12.4663, title: "Castillo Sant'Angelo", day: 3 },
  { lat: 41.9106, lng: 12.4764, title: 'Piazza del Popolo', day: 3 },
];

function RomaMap() {
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
        center: [41.8985, 12.4735],
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
          <span className="w-3 h-3 rounded-full bg-amber-600" /> Día 1: Centro Histórico
        </span>
        <span className="flex items-center gap-2 text-xs text-stone-600">
          <span className="w-3 h-3 rounded-full bg-rose-600" /> Día 2: Roma Antigua
        </span>
        <span className="flex items-center gap-2 text-xs text-stone-600">
          <span className="w-3 h-3 rounded-full bg-teal-600" /> Día 3: Vaticano
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

export default RomaGuideArticle;
