import { ArrowLeft, Share2, Clock, Eye } from 'lucide-react';
import RelatedArticles from './RelatedArticles';

interface CheapDestinationsArticleProps {
  onBack: () => void;
}

const destinations = [
  { num: '01', flag: 'AL', name: 'Albania', subtitle: 'Europa a precio de Sudeste Asiatico', budget: '20-25EUR/dia', season: 'Mayo-Septiembre', level: 'Facil', experience: 'Albania me sorprendio completamente. Paisajes increibles, gente super amable, comida deliciosa y precios que no me creia. Una cena completa por 8EUR, alojamiento por 15EUR la noche. Las playas del sur son espectaculares y las montanas del norte, impresionantes.', highlights: 'Riviera albanesa, Tirana, Berat (patrimonio)', tip: 'Algunas carreteras estan en mal estado, pero merece la pena.' },
  { num: '02', flag: 'MA', name: 'Marruecos', subtitle: 'Cultura, colores y precios bajos', budget: '25-30EUR/dia', season: 'Oct-Abril', level: 'Intermedio', experience: 'Marruecos es un festival para los sentidos. Los zocos de Marrakech, el desierto del Sahara, la costa de Essaouira... Todo por muy poco dinero. Un tajin delicioso por 5EUR, riads preciosos por 20EUR la noche.', highlights: 'Marrakech, Fez, desierto del Sahara, Chefchaouen', tip: 'Hay que regatear siempre y tener paciencia con los vendedores insistentes.' },
  { num: '03', flag: 'TH', name: 'Tailandia', subtitle: 'Clasico por algo', budget: '15-25EUR/dia', season: 'Nov-Marzo', level: 'Facil', experience: 'Mi primer gran viaje mochilero y sigue siendo uno de mis favoritos. Comida de calle increible por 2EUR, masajes por 8EUR, playas paradisiacas y templos impresionantes. Es barato, facil de viajar y super seguro.', highlights: 'Bangkok, islas del sur, Chiang Mai, Ayutthaya', tip: 'Evita Phuket y Koh Phi Phi si buscas precios bajos.' },
  { num: '04', flag: 'PT', name: 'Portugal', subtitle: 'Escapadas baratas desde Espana', budget: '30-35EUR/dia', season: 'Todo el ano', level: 'Muy facil', experience: 'Portugal es perfecto para escapadas de fin de semana o puentes. Esta super cerca, es mas barato que Espana, la comida es increible y la gente super amable. Los pasteis de nata por 1EUR son adictivos.', highlights: 'Lisboa, Oporto, Obidos, costa del Algarve', tip: 'Evita agosto en el Algarve, esta lleno de turistas.' },
  { num: '05', flag: 'GE', name: 'Georgia', subtitle: 'Seguro, barato y sin turistas', budget: '20-25EUR/dia', season: 'Mayo-Octubre', level: 'Intermedio', experience: 'Georgia fue una sorpresa total. Paisajes de montana increibles, vino delicioso, comida abundante y precios ridiculos. Una cena con vino por 12EUR, alojamiento por 15EUR. La hospitalidad georgiana es legendaria.', highlights: 'Tiflis, Svaneti, region vinicola de Kakheti', tip: 'Puedes estar 365 dias sin visa si eres espanol.' },
  { num: '06', flag: 'VN', name: 'Vietnam', subtitle: 'Aventura asiatica economica', budget: '18-25EUR/dia', season: 'Nov-Abril', level: 'Intermedio', experience: 'Vietnam es pura aventura. La comida de calle es increible y super barata (pho por 2EUR), los paisajes de Halong Bay te dejan sin palabras, y Ho Chi Minh City es pura energia.', highlights: 'Hanoi, Halong Bay, Hoi An, Ho Chi Minh City', tip: 'Negocia siempre los precios y ten cuidado con estafas turisticas.' },
  { num: '07', flag: 'TR', name: 'Turquia', subtitle: 'Puente entre Europa y Asia', budget: '25-30EUR/dia', season: 'Abril-Junio, Sep-Nov', level: 'Facil', experience: 'Turquia tiene de todo: historia increible, paisajes unicos como Capadocia, playas preciosas y comida deliciosa. Los kebabs autenticos por 3EUR, banos turcos por 15EUR, y la hospitalidad turca es real.', highlights: 'Estambul, Capadocia, Pamukkale, costa mediterranea', tip: 'La lira turca fluctua mucho, aprovecha cuando este debil.' },
  { num: '08', flag: 'RO', name: 'Rumania', subtitle: 'Europa del Este autentica', budget: '25-30EUR/dia', season: 'Mayo-Septiembre', level: 'Facil', experience: 'Rumania me sorprendio gratamente. Bucarest es vibrante, Transilvania tiene castillos de cuento, y los Carpatos son perfectos para senderismo. Todo super barato y sin masas de turistas.', highlights: 'Bucarest, Brasov, castillo de Bran, Sighisoara', tip: 'Internet super rapido y wifi gratis en casi todos lados.' },
  { num: '09', flag: 'PL', name: 'Polonia', subtitle: 'Historia y precios increibles', budget: '25-30EUR/dia', season: 'Mayo-Septiembre', level: 'Muy facil', experience: 'Polonia es perfecta para un viaje cultural barato. Cracovia es preciosa, Varsovia muy moderna, y la comida es contundente y barata. Los pierogi por 4EUR y cerveza por 2EUR. Ademas, es super seguro.', highlights: 'Cracovia, Varsovia, Gdansk, Auschwitz', tip: 'Muy facil moverse en transporte publico.' },
  { num: '10', flag: 'BO', name: 'Bolivia', subtitle: 'Aventura sudamericana economica', budget: '15-20EUR/dia', season: 'Mayo-Octubre', level: 'Avanzado', experience: 'Bolivia es el pais mas barato de Sudamerica y uno de los mas espectaculares. El Salar de Uyuni es otro planeta, La Paz es unica en el mundo, y todo cuesta ridiculamente poco.', highlights: 'Salar de Uyuni, La Paz, Sucre, Lago Titicaca', tip: 'Lleva medicacion para el mal de altura, La Paz esta a 3.500m.' },
  { num: '11', flag: 'MX', name: 'Mexico', subtitle: 'Cultura, playas y comida increible', budget: '20-30EUR/dia', season: 'Nov-Abril', level: 'Intermedio', experience: 'Mexico tiene una relacion calidad-precio increible. Tacos autenticos por 1EUR, cenotes espectaculares, ruinas mayas impresionantes y playas paradisiacas.', highlights: 'Ciudad de Mexico, Oaxaca, Yucatan, Guanajuato', tip: 'Evita Cancun y Playa del Carmen si buscas precios bajos.' },
  { num: '12', flag: 'CO', name: 'Colombia', subtitle: 'Diversidad y precios bajos', budget: '20-25EUR/dia', season: 'Dic-Marzo, Jul-Ago', level: 'Intermedio', experience: 'Colombia me enamoro completamente. Cartagena es preciosa, Medellin super moderna, el cafe es el mejor del mundo y la gente increiblemente amable.', highlights: 'Cartagena, Medellin, Bogota, eje cafetero, Tayrona', tip: 'Es mucho mas seguro de lo que piensa la gente.' },
  { num: '13', flag: 'ID', name: 'Indonesia', subtitle: 'Paraiso tropical economico', budget: '15-25EUR/dia', season: 'Mayo-Septiembre', level: 'Intermedio', experience: 'Indonesia es increible para presupuestos ajustados. Bali es mas cara pero sigue siendo barata, Java tiene templos impresionantes, y las islas Gili son paradisiacas. Nasi goreng por 2EUR y alojamiento por 10EUR.', highlights: 'Bali, Yogyakarta, islas Gili, Lombok, Borobudur', tip: 'Evita las zonas super turisticas de Bali, ve a Ubud o al este.' },
  { num: '14', flag: 'UA', name: 'Ucrania', subtitle: 'Europa del Este autentica (pre-conflicto)', budget: '20-25EUR/dia', season: 'Cuando sea seguro', level: 'Pendiente', experience: 'Kiev era increible, Lviv super bonita y todo ridiculamente barato. Espero que cuando termine el conflicto podamos volver a disfrutar de este pais tan especial.', highlights: 'Kiev, Lviv, Odesa (para el futuro)', tip: 'Actualmente no es seguro viajar alli debido al conflicto.', warning: true },
  { num: '15', flag: 'NP', name: 'Nepal', subtitle: 'Aventura en el Himalaya', budget: '15-20EUR/dia', season: 'Oct-Dic, Mar-Mayo', level: 'Avanzado', experience: 'Nepal es perfecto para aventureros con presupuesto ajustado. El trekking al campo base del Everest es increible, Katmandu es caotica pero fascinante, y todo es super barato. Dal bhat por 3EUR y te llenan el plato las veces que quieras.', highlights: 'Katmandu, Pokhara, trekking Himalaya, Chitwan', tip: 'Preparate fisicamente para los trekkings y lleva buen seguro medico.' },
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
            Destinos baratos para 2025: mis 15 favoritos
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
                navigator.share({ title: 'Destinos baratos para 2025', url: window.location.href }).catch(() => {});
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
              <strong className="font-medium">Si quieres viajar en 2025 sin gastar una fortuna, esta lista te va a encantar.</strong> Aqui te comparto mis 15 destinos favoritos donde el dinero realmente rinde. He estado en todos y puedo contarte exactamente cuanto gaste y que esperar.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-light mt-5">
              Todos tienen algo en comun: puedes vivir experiencias increibles gastando menos de 30EUR al dia.
            </p>
          </div>

          {/* Destinations */}
          <div className="space-y-8">
            {destinations.map((dest, index) => (
              <section key={dest.num} className="bg-white border border-stone-200 rounded-sm p-7 md:p-9 relative overflow-hidden">
                <span className="absolute -top-2 -left-1 text-[5rem] md:text-[6rem] font-serif text-stone-100 leading-none select-none pointer-events-none">{index + 1}</span>
                <div className="relative mb-3 pt-6">
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
              <strong>Viajar barato no es imposible, solo hay que elegir bien el destino.</strong> Estos 15 paises me han demostrado que se puede vivir experiencias increibles sin gastar una fortuna.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Mi recomendacion es que empieces por los mas faciles (Portugal, Polonia, Tailandia) y vayas subiendo el nivel segun ganes experiencia. El presupuesto incluye alojamiento, comida y transporte local, pero no vuelos internacionales.
            </p>
            <p className="text-gray-600 leading-relaxed">
              <strong>Has estado en alguno de estos destinos?</strong> Escribeme y lo actualizamos para la version 2026.
            </p>
          </div>

          {/* Related */}
          <div className="mt-16">
            <RelatedArticles currentCategory="Destinos" currentArticleId="paises-baratos-2025" />
          </div>
        </div>
      </div>
    </article>
  );
};

export default CheapDestinationsArticle;
