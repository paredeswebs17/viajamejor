import { ArrowLeft, Share2, Clock, Eye } from 'lucide-react';
import RelatedArticles from './RelatedArticles';

interface CheapDestinationsArticleProps {
  onBack: () => void;
}

const destinations = [
  { num: '01', flag: 'AL', name: 'Albania', subtitle: 'Europa a precio de Sudeste Asiático', budget: '20-25EUR/día', season: 'Mayo-Septiembre', level: 'Fácil', experience: 'Albania me sorprendió completamente. Paisajes increíbles, gente super amable, comida deliciosa y precios que no me creía. Una cena completa por 8EUR, alojamiento por 15EUR la noche. Las playas del sur son espectaculares y las montañas del norte, impresionantes.', highlights: 'Riviera albanesa, Tirana, Berat (patrimonio)', tip: 'Algunas carreteras están en mal estado, pero merece la pena.' },
  { num: '02', flag: 'MA', name: 'Marruecos', subtitle: 'Cultura, colores y precios bajos', budget: '25-30EUR/día', season: 'Oct-Abril', level: 'Intermedio', experience: 'Marruecos es un festival para los sentidos. Los zocos de Marrakech, el desierto del Sahara, la costa de Essaouira... Todo por muy poco dinero. Un tajín delicioso por 5EUR, riads preciosos por 20EUR la noche.', highlights: 'Marrakech, Fez, desierto del Sahara, Chefchaouen', tip: 'Hay que regatear siempre y tener paciencia con los vendedores insistentes.' },
  { num: '03', flag: 'TH', name: 'Tailandia', subtitle: 'Clásico por algo', budget: '15-25EUR/día', season: 'Nov-Marzo', level: 'Fácil', experience: 'Mi primer gran viaje mochilero y sigue siendo uno de mis favoritos. Comida de calle increíble por 2EUR, masajes por 8EUR, playas paradisíacas y templos impresionantes. Es barato, fácil de viajar y super seguro.', highlights: 'Bangkok, islas del sur, Chiang Mai, Ayutthaya', tip: 'Evita Phuket y Koh Phi Phi si buscas precios bajos.' },
  { num: '04', flag: 'PT', name: 'Portugal', subtitle: 'Escapadas baratas desde España', budget: '30-35EUR/día', season: 'Todo el año', level: 'Muy fácil', experience: 'Portugal es perfecto para escapadas de fin de semana o puentes. Está super cerca, es más barato que España, la comida es increíble y la gente super amable. Los pasteles de nata por 1EUR son adictivos.', highlights: 'Lisboa, Oporto, Óbidos, costa del Algarve', tip: 'Evita agosto en el Algarve, está lleno de turistas.' },
  { num: '05', flag: 'GE', name: 'Georgia', subtitle: 'Seguro, barato y sin turistas', budget: '20-25EUR/día', season: 'Mayo-Octubre', level: 'Intermedio', experience: 'Georgia fue una sorpresa total. Paisajes de montaña increíbles, vino delicioso, comida abundante y precios ridículos. Una cena con vino por 12EUR, alojamiento por 15EUR. La hospitalidad georgiana es legendaria.', highlights: 'Tiflis, Svaneti, región vinícola de Kakheti', tip: 'Puedes estar 365 días sin visa si eres español.' },
  { num: '06', flag: 'VN', name: 'Vietnam', subtitle: 'Aventura asiática económica', budget: '18-25EUR/día', season: 'Nov-Abril', level: 'Intermedio', experience: 'Vietnam es pura aventura. La comida de calle es increíble y super barata (pho por 2EUR), los paisajes de Halong Bay te dejan sin palabras, y Ho Chi Minh City es pura energía.', highlights: 'Hanoi, Halong Bay, Hoi An, Ho Chi Minh City', tip: 'Negocia siempre los precios y ten cuidado con estafas turísticas.' },
  { num: '07', flag: 'TR', name: 'Turquía', subtitle: 'Puente entre Europa y Asia', budget: '25-30EUR/día', season: 'Abril-Junio, Sep-Nov', level: 'Fácil', experience: 'Turquía tiene de todo: historia increíble, paisajes únicos como Capadocia, playas preciosas y comida deliciosa. Los kebabs auténticos por 3EUR, baños turcos por 15EUR, y la hospitalidad turca es real.', highlights: 'Estambul, Capadocia, Pamukkale, costa mediterránea', tip: 'La lira turca fluctúa mucho, aprovecha cuando esté débil.' },
  { num: '08', flag: 'RO', name: 'Rumania', subtitle: 'Europa del Este auténtica', budget: '25-30EUR/día', season: 'Mayo-Septiembre', level: 'Fácil', experience: 'Rumania me sorprendió gratamente. Bucarest es vibrante, Transilvania tiene castillos de cuento, y los Cárpatos son perfectos para senderismo. Todo super barato y sin masas de turistas.', highlights: 'Bucarest, Brasov, castillo de Bran, Sighisoara', tip: 'Internet super rápido y wifi gratis en casi todos lados.' },
  { num: '09', flag: 'PL', name: 'Polonia', subtitle: 'Historia y precios increíbles', budget: '25-30EUR/día', season: 'Mayo-Septiembre', level: 'Muy fácil', experience: 'Polonia es perfecta para un viaje cultural barato. Cracovia es preciosa, Varsovia muy moderna, y la comida es contundente y barata. Los pierogi por 4EUR y cerveza por 2EUR. Además, es super seguro.', highlights: 'Cracovia, Varsovia, Gdansk, Auschwitz', tip: 'Muy fácil moverse en transporte público.' },
  { num: '10', flag: 'BO', name: 'Bolivia', subtitle: 'Aventura sudamericana económica', budget: '15-20EUR/día', season: 'Mayo-Octubre', level: 'Avanzado', experience: 'Bolivia es el país más barato de Sudamérica y uno de los más espectaculares. El Salar de Uyuni es otro planeta, La Paz es única en el mundo, y todo cuesta ridículamente poco.', highlights: 'Salar de Uyuni, La Paz, Sucre, Lago Titicaca', tip: 'Lleva medicación para el mal de altura, La Paz está a 3.500m.' },
  { num: '11', flag: 'MX', name: 'México', subtitle: 'Cultura, playas y comida increíble', budget: '20-30EUR/día', season: 'Nov-Abril', level: 'Intermedio', experience: 'México tiene una relación calidad-precio increíble. Tacos auténticos por 1EUR, cenotes espectaculares, ruinas mayas impresionantes y playas paradisíacas.', highlights: 'Ciudad de México, Oaxaca, Yucatán, Guanajuato', tip: 'Evita Cancún y Playa del Carmen si buscas precios bajos.' },
  { num: '12', flag: 'CO', name: 'Colombia', subtitle: 'Diversidad y precios bajos', budget: '20-25EUR/día', season: 'Dic-Marzo, Jul-Ago', level: 'Intermedio', experience: 'Colombia me enamoró completamente. Cartagena es preciosa, Medellín super moderna, el café es el mejor del mundo y la gente increíblemente amable.', highlights: 'Cartagena, Medellín, Bogotá, eje cafetero, Tayrona', tip: 'Es mucho más seguro de lo que piensa la gente.' },
  { num: '13', flag: 'ID', name: 'Indonesia', subtitle: 'Paraíso tropical económico', budget: '15-25EUR/día', season: 'Mayo-Septiembre', level: 'Intermedio', experience: 'Indonesia es increíble para presupuestos ajustados. Bali es más cara pero sigue siendo barata, Java tiene templos impresionantes, y las islas Gili son paradisíacas. Nasi goreng por 2EUR y alojamiento por 10EUR.', highlights: 'Bali, Yogyakarta, islas Gili, Lombok, Borobudur', tip: 'Evita las zonas super turísticas de Bali, ve a Ubud o al este.' },
  { num: '14', flag: 'UA', name: 'Ucrania', subtitle: 'Europa del Este auténtica (pre-conflicto)', budget: '20-25EUR/día', season: 'Cuando sea seguro', level: 'Pendiente', experience: 'Kiev era increíble, Lviv super bonita y todo ridículamente barato. Espero que cuando termine el conflicto podamos volver a disfrutar de este país tan especial.', highlights: 'Kiev, Lviv, Odesa (para el futuro)', tip: 'Actualmente no es seguro viajar allí debido al conflicto.', warning: true },
  { num: '15', flag: 'NP', name: 'Nepal', subtitle: 'Aventura en el Himalaya', budget: '15-20EUR/día', season: 'Oct-Dic, Mar-Mayo', level: 'Avanzado', experience: 'Nepal es perfecto para aventureros con presupuesto ajustado. El trekking al campo base del Everest es increíble, Katmandú es caótica pero fascinante, y todo es super barato. Dal bhat por 3EUR y te llenan el plato las veces que quieras.', highlights: 'Katmandú, Pokhara, trekking Himalaya, Chitwan', tip: 'Prepárate físicamente para los trekkings y lleva buen seguro médico.' },
];

const CheapDestinationsArticle: React.FC<CheapDestinationsArticleProps> = ({ onBack }) => {
  return (
    <article>
      {/* Hero */}
      <div className="relative h-[45vh] min-h-[340px] overflow-hidden flex items-end">
        <img
          src="https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Mochilero explorando destino economico"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-10 pb-12 md:pb-16 w-full">
          <span className="inline-block bg-teal-400 text-slate-900 text-[9px] uppercase tracking-[.2em] font-bold px-3 py-1.5 rounded-full mb-5">
            Destinos
          </span>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white leading-[1.1] tracking-tight mb-4">
            Destinos baratos para 2026: mis 15 favoritos
          </h1>
          <div className="flex items-center gap-4 text-white/50 text-xs">
            <span className="flex items-center gap-1.5">
              <Clock size={12} />
              10 min lectura
            </span>
            <span className="flex items-center gap-1.5">
              <Eye size={12} />
              51.8k lecturas
            </span>
          </div>
        </div>
      </div>

      {/* Action bar */}
      <div className="bg-slate-900 border-b border-white/5">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 py-4 flex items-center justify-between">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-xs font-medium transition-colors"
          >
            <ArrowLeft size={14} />
            Volver
          </button>
          <button
            onClick={() => {
              if (navigator.share) {
                navigator.share({ title: 'Destinos baratos para 2026', url: window.location.href }).catch(() => {});
              } else {
                navigator.clipboard.writeText(window.location.href).then(() => alert('Enlace copiado al portapapeles')).catch(() => {});
              }
            }}
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-xs font-medium transition-colors"
          >
            <Share2 size={14} />
            Compartir
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="bg-stone-50">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 py-16 md:py-20">

          {/* Intro */}
          <div className="mb-16">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-light">
              <strong className="font-medium">Si quieres viajar en 2026 sin gastar una fortuna, esta lista te va a encantar.</strong> Aquí te comparto mis 15 destinos favoritos donde el dinero realmente rinde. He estado en todos y puedo contarte exactamente cuánto gasté y qué esperar.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-light mt-5">
              Todos tienen algo en común: puedes vivir experiencias increíbles gastando menos de 30EUR al día.
            </p>
          </div>

          {/* Destinations */}
          <div className="space-y-8">
            {destinations.map((dest, index) => (
              <section key={dest.num} className="bg-white border border-stone-200 rounded-sm p-7 md:p-9">
                <div className="flex items-baseline gap-3 mb-3">
                  <span className="text-3xl md:text-4xl font-serif text-teal-300 leading-none">{index + 1}.</span>
                  <h2 className="font-serif text-xl md:text-2xl text-gray-900">{dest.name}</h2>
                </div>
                <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-5">{dest.subtitle}</p>

                <div className="flex flex-wrap gap-4 mb-5 text-xs text-gray-600">
                  <span className="bg-stone-100 px-3 py-1.5 rounded-full font-medium">{dest.budget}</span>
                  <span className="bg-stone-100 px-3 py-1.5 rounded-full">{dest.season}</span>
                  <span className="bg-stone-100 px-3 py-1.5 rounded-full">Nivel: {dest.level}</span>
                </div>

                <p className="text-gray-600 leading-relaxed mb-4">{dest.experience}</p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  <strong>Lo mejor:</strong> {dest.highlights}
                </p>

                {dest.warning ? (
                  <div className="bg-amber-50 border border-amber-100 rounded-sm p-4">
                    <p className="text-amber-800 text-sm"><strong>Nota:</strong> {dest.tip}</p>
                  </div>
                ) : (
                  <div className="flex items-center justify-between">
                    <p className="text-gray-500 text-sm"><strong>Tip:</strong> {dest.tip}</p>
                    <a
                      href="https://kiwi.tpk.lv/z2gZyZ3E"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-600 hover:text-teal-700 text-xs font-semibold uppercase tracking-wider transition-colors flex-shrink-0 ml-4"
                    >
                      Buscar vuelos
                    </a>
                  </div>
                )}
              </section>
            ))}
          </div>

          {/* Conclusion */}
          <div className="mt-16 border-t border-stone-200 pt-12">
            <h2 className="font-serif text-2xl md:text-3xl text-gray-900 mb-5">Mi consejo final</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Viajar barato no es imposible, solo hay que elegir bien el destino.</strong> Estos 15 países me han demostrado que se puede vivir experiencias increíbles sin gastar una fortuna.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Mi recomendación es que empieces por los más fáciles (Portugal, Polonia, Tailandia) y vayas subiendo el nivel según ganes experiencia. El presupuesto incluye alojamiento, comida y transporte local, pero no vuelos internacionales.
            </p>
            <p className="text-gray-600 leading-relaxed">
              <strong>¿Has estado en alguno de estos destinos?</strong> Escríbeme y lo actualizamos para la versión 2026.
            </p>
          </div>

          {/* Related */}
          <div className="mt-16">
            <RelatedArticles currentCategory="Destinos" currentArticleId="paises-baratos-2026" />
          </div>
        </div>
      </div>
    </article>
  );
};

export default CheapDestinationsArticle;
