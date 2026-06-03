import { ArrowLeft, Share2, Clock, Eye } from 'lucide-react';
import RelatedArticles from './RelatedArticles';

interface AccommodationArticleProps {
  onBack: () => void;
}

const AccommodationArticle: React.FC<AccommodationArticleProps> = ({ onBack }) => {
  return (
    <article>
      {/* Hero */}
      <div className="relative h-[45vh] min-h-[340px] overflow-hidden flex items-end">
        <img
          src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Diferentes tipos de alojamiento: hotel, apartamento y hostel"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-10 pb-12 md:pb-16 w-full">
          <span className="inline-block bg-teal-400 text-slate-900 text-[9px] uppercase tracking-[.2em] font-bold px-3 py-1.5 rounded-full mb-5">
            Alojamiento
          </span>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white leading-[1.1] tracking-tight mb-4">
            Donde reservo mis hoteles: Booking vs Airbnb vs Hostelworld
          </h1>
          <div className="flex items-center gap-4 text-white/50 text-xs">
            <span className="flex items-center gap-1.5">
              <Clock size={12} />
              6 min lectura
            </span>
            <span className="flex items-center gap-1.5">
              <Eye size={12} />
              32.1k lecturas
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
                navigator.share({ title: 'Booking vs Airbnb vs Hostelworld', url: window.location.href }).catch(() => {});
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
              <strong className="font-medium">A la hora de viajar, el alojamiento es una de las decisiones mas importantes.</strong> Despues de muchos viajes y algunas experiencias que prefiero olvidar, tengo claras mis opciones favoritas.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-light mt-5">
              Aqui te cuento como elijo entre Booking, Airbnb y Hostelworld segun el tipo de viaje, presupuesto y lo que busco en cada momento.
            </p>
          </div>

          {/* Platforms */}
          <div className="space-y-10">

            {/* Booking */}
            <section className="bg-white border border-stone-200 rounded-sm p-7 md:p-9">
              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-3xl md:text-4xl font-serif text-teal-300 leading-none">1.</span>
                <h2 className="font-serif text-xl md:text-2xl text-gray-900">Booking: comodidad y cancelacion flexible</h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>Uso Booking sobre todo cuando quiero algo rapido, seguro y con posibilidad de cancelacion gratuita.</strong> Es mi primera opcion para viajes de trabajo, escapadas de fin de semana o cuando llego tarde a un destino y necesito algo garantizado.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                Lo que mas me gusta es que puedes filtrar por puntuacion, ubicacion y servicios de forma super intuitiva. Ademas, su programa Genius me da descuentos extra y upgrades gratis en muchos hoteles.
              </p>
              <div className="bg-teal-50 border border-teal-100 rounded-sm p-4 mb-6">
                <p className="text-teal-800 text-sm font-medium mb-2">Cuando uso Booking:</p>
                <ul className="text-teal-700 text-sm space-y-1">
                  <li>- Viajes de negocios o cuando necesito algo seguro</li>
                  <li>- Estancias cortas (1-3 noches)</li>
                  <li>- Cuando quiero cancelacion gratuita</li>
                  <li>- Destinos donde no conozco la zona</li>
                </ul>
              </div>
              <a
                href="https://booking.tpk.lv/UianlEEu"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold uppercase tracking-wider px-6 py-3.5 rounded-sm transition-colors"
              >
                Ver Booking
              </a>
            </section>

            {/* Airbnb */}
            <section className="bg-white border border-stone-200 rounded-sm p-7 md:p-9">
              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-3xl md:text-4xl font-serif text-teal-300 leading-none">2.</span>
                <h2 className="font-serif text-xl md:text-2xl text-gray-900">Airbnb: ideal para estancias largas o en grupo</h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>Me gusta Airbnb cuando viajo en pareja o con amigos y quiero algo mas "hogareno".</strong> Especialmente para estancias de una semana o mas, donde tener cocina y lavadora marca la diferencia.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                Eso si, hay que leer bien las condiciones. Algunas veces las tasas de limpieza y servicios pueden hacer que el precio final sea mucho mas alto del que aparece inicialmente.
              </p>
              <div className="bg-teal-50 border border-teal-100 rounded-sm p-4 mb-4">
                <p className="text-teal-800 text-sm font-medium mb-2">Cuando uso Airbnb:</p>
                <ul className="text-teal-700 text-sm space-y-1">
                  <li>- Estancias largas (una semana o mas)</li>
                  <li>- Viajes en grupo o en familia</li>
                  <li>- Cuando quiero cocinar y ahorrar en comidas</li>
                  <li>- Lugares unicos (casas rurales, apartamentos con vistas)</li>
                </ul>
              </div>
              <div className="bg-amber-50 border border-amber-100 rounded-sm p-4 mb-6">
                <p className="text-amber-800 text-sm font-medium mb-2">Cuidado con:</p>
                <ul className="text-amber-700 text-sm space-y-1">
                  <li>- Tasas de limpieza que pueden duplicar el precio</li>
                  <li>- Politicas de cancelacion mas estrictas</li>
                  <li>- Ubicaciones que pueden estar lejos del centro</li>
                </ul>
              </div>
              <a
                href="https://www.airbnb.es/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold uppercase tracking-wider px-6 py-3.5 rounded-sm transition-colors"
              >
                Ver Airbnb
              </a>
            </section>

            {/* Hostelworld */}
            <section className="bg-white border border-stone-200 rounded-sm p-7 md:p-9">
              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-3xl md:text-4xl font-serif text-teal-300 leading-none">3.</span>
                <h2 className="font-serif text-xl md:text-2xl text-gray-900">Hostelworld: para mochileros y viajeros low-cost</h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>Cuando viajo solo o busco ahorrar al maximo, Hostelworld me ha salvado muchas veces.</strong> No solo por los precios, sino porque es la mejor forma de conocer otros viajeros.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                Lo que mas valoro son las resenas reales de otros mochileros. Te cuentan si el hostel esta limpio, si el wifi funciona, si hay ambiente para conocer gente o si es mas tranquilo.
              </p>
              <div className="bg-teal-50 border border-teal-100 rounded-sm p-4 mb-4">
                <p className="text-teal-800 text-sm font-medium mb-2">Cuando uso Hostelworld:</p>
                <ul className="text-teal-700 text-sm space-y-1">
                  <li>- Viajes en solitario donde quiero conocer gente</li>
                  <li>- Presupuesto muy ajustado</li>
                  <li>- Destinos mochileros (Sudeste Asiatico, Sudamerica)</li>
                  <li>- Estancias cortas en ciudades caras</li>
                </ul>
              </div>
              <div className="bg-amber-50 border border-amber-100 rounded-sm p-4 mb-6">
                <p className="text-amber-800 text-sm font-medium mb-2">Ten en cuenta:</p>
                <ul className="text-amber-700 text-sm space-y-1">
                  <li>- Menos privacidad (habitaciones compartidas)</li>
                  <li>- Puede haber ruido los fines de semana</li>
                  <li>- Banos y cocinas compartidos</li>
                </ul>
              </div>
              <a
                href="https://www.hostelworld.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold uppercase tracking-wider px-6 py-3.5 rounded-sm transition-colors"
              >
                Ver Hostelworld
              </a>
            </section>
          </div>

          {/* Comparison table */}
          <div className="mt-16 mb-16">
            <span className="text-[10px] uppercase tracking-[.25em] text-gray-400 font-semibold mb-3 block">Resumen</span>
            <h2 className="font-serif text-2xl md:text-3xl text-gray-900 mb-8">Comparativa rapida</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-stone-300">
                    <th className="text-left py-3 pr-4 font-semibold text-gray-900">Plataforma</th>
                    <th className="text-left py-3 pr-4 font-semibold text-gray-900">Ideal para</th>
                    <th className="text-left py-3 pr-4 font-semibold text-gray-900">Pros</th>
                    <th className="text-left py-3 font-semibold text-gray-900">Contras</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600">
                  <tr className="border-b border-stone-100">
                    <td className="py-3 pr-4 font-medium text-gray-900">Booking</td>
                    <td className="py-3 pr-4">Viajes cortos, hoteles</td>
                    <td className="py-3 pr-4">Cancelacion facil, Genius</td>
                    <td className="py-3">A veces mas caro</td>
                  </tr>
                  <tr className="border-b border-stone-100">
                    <td className="py-3 pr-4 font-medium text-gray-900">Airbnb</td>
                    <td className="py-3 pr-4">Estancias largas, grupos</td>
                    <td className="py-3 pr-4">Cocina, experiencia local</td>
                    <td className="py-3">Tarifas extra</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium text-gray-900">Hostelworld</td>
                    <td className="py-3 pr-4">Presupuesto bajo</td>
                    <td className="py-3 pr-4">Barato, social</td>
                    <td className="py-3">Menos privacidad</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Strategy */}
          <div className="border-t border-stone-200 pt-12 mb-16">
            <h2 className="font-serif text-2xl md:text-3xl text-gray-900 mb-5">Mi estrategia personal</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>En la practica, suelo combinar las tres plataformas en un mismo viaje.</strong> Por ejemplo, en mi ultimo viaje a Tailandia use Hostelworld para Bangkok, Airbnb para una semana en Chiang Mai, y Booking para las ultimas noches cerca del aeropuerto.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Mi consejo es que no te cases con una sola plataforma. Cada una tiene su momento perfecto, y a veces vale la pena comparar precios entre las tres antes de decidir.
            </p>
          </div>

          {/* Related */}
          <RelatedArticles currentCategory="Alojamiento" currentArticleId="booking-vs-airbnb" />
        </div>
      </div>
    </article>
  );
};

export default AccommodationArticle;
