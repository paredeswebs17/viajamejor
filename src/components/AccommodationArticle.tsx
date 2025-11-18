import { ArrowLeft, Share2 } from 'lucide-react';
import RelatedArticles from './RelatedArticles';

interface AccommodationArticleProps {
  onBack: () => void;
}

const AccommodationArticle: React.FC<AccommodationArticleProps> = ({ onBack }) => {

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-24">
      {/* Header del artículo */}
      <div className="mb-8">
        <button 
          onClick={onBack}
          className="inline-flex items-center text-sky-600 hover:text-sky-700 hover:bg-sky-50 px-3 py-2 rounded-lg transition-all duration-200 font-medium border border-sky-200 hover:border-sky-300 mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Volver al blog
        </button>
        
        <div className="mb-6">
          <span className="bg-sky-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            Alojamiento
          </span>
        </div>
        
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Dónde reservo mis hoteles: Booking vs Airbnb vs Hostelworld
        </h1>

        <div className="flex items-center justify-end text-gray-600 text-sm space-x-6 mb-8">
          <button 
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: 'Dónde reservo mis hoteles: Booking vs Airbnb vs Hostelworld',
                  text: 'Comparativa de las mejores plataformas de alojamiento',
                  url: window.location.href,
                })
                .catch((error) => console.log('Error sharing', error));
              } else {
               navigator.clipboard.writeText(window.location.href).then(() => {
                 alert('¡Enlace copiado al portapapeles!');
               }).catch(() => {
                 window.open(`https://twitter.com/intent/tweet?text=Dónde reservo mis hoteles: Booking vs Airbnb vs Hostelworld&url=${encodeURIComponent(window.location.href)}`, '_blank');
               });
              }
            }}
           className="inline-flex items-center text-gray-600 hover:text-sky-600 bg-gray-50 hover:bg-sky-50 px-4 py-2 rounded-lg transition-all duration-200 font-medium border border-gray-200 hover:border-sky-300"
          >
            <Share2 className="h-4 w-4 mr-2" />
            <span>Compartir</span>
          </button>
        </div>
      </div>

      {/* Imagen destacada */}
      <div className="mb-12">
        <img
          src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt="Diferentes tipos de alojamiento: hotel, apartamento y hostel"
          className="w-full h-64 sm:h-80 object-cover rounded-2xl shadow-lg"
        />
      </div>

      {/* Contenido del artículo */}
      <div className="prose prose-lg max-w-none">
        
        {/* Introducción */}
        <div className="bg-gradient-to-r from-sky-50 to-emerald-50 rounded-2xl p-8 mb-12">
          <p className="text-lg text-gray-700 leading-relaxed mb-0">
            <strong>A la hora de viajar, el alojamiento es una de las decisiones más importantes.</strong> Después de muchos 
            viajes y algunas experiencias que prefiero olvidar (como aquella vez que llegué a un "hotel\" que resultó ser 
            un apartamento sin recepción y con las llaves en un buzón roto), tengo claras mis opciones favoritas.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4 mb-0">
            Aquí te cuento cómo elijo entre Booking, Airbnb y Hostelworld según el tipo de viaje, presupuesto y lo que 
            busco en cada momento. Cada plataforma tiene su momento perfecto.
          </p>
        </div>

        {/* Booking.com */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            🏨 Booking: mi opción para comodidad y cancelación flexible
          </h2>
          <p className="text-gray-700 mb-4">
            <strong>Uso Booking sobre todo cuando quiero algo rápido, seguro y con posibilidad de cancelación gratuita.</strong> 
            Es mi primera opción para viajes de trabajo, escapadas de fin de semana o cuando llego tarde a un destino y 
            necesito algo garantizado.
          </p>
          <p className="text-gray-700 mb-4">
            Lo que más me gusta de Booking es que puedes filtrar por puntuación, ubicación y servicios de forma súper 
            intuitiva. Además, su programa Genius me da descuentos extra y upgrades gratis en muchos hoteles.
          </p>
          
          <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 mb-4">
            <h3 className="font-semibold text-emerald-800 mb-2">✅ Cuándo uso Booking:</h3>
            <ul className="text-emerald-700 text-sm space-y-1">
              <li>• Viajes de negocios o cuando necesito algo seguro</li>
              <li>• Estancias cortas (1-3 noches)</li>
              <li>• Cuando quiero cancelación gratuita</li>
              <li>• Destinos donde no conozco la zona</li>
              <li>• Cuando busco hoteles con servicios específicos (spa, gimnasio, etc.)</li>
            </ul>
          </div>

          <div className="mt-6">
            <a
              href="https://booking.tpk.lv/UianlEEu"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 text-center"
            >
              Ver Booking
            </a>
          </div>
        </div>

        {/* Airbnb */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            🏡 Airbnb: ideal para estancias largas o en grupo
          </h2>
          <p className="text-gray-700 mb-4">
            <strong>Me gusta Airbnb cuando viajo en pareja o con amigos y quiero algo más "hogareño".</strong> 
            Especialmente para estancias de una semana o más, donde tener cocina y lavadora marca la diferencia. 
            También es genial para grupos grandes donde un apartamento sale más barato que varias habitaciones de hotel.
          </p>
          <p className="text-gray-700 mb-4">
            Eso sí, hay que leer bien las condiciones. Algunas veces las tasas de limpieza y servicios pueden hacer 
            que el precio final sea mucho más alto del que aparece inicialmente. Siempre reviso el precio total antes 
            de reservar.
          </p>
          
          <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 mb-4">
            <h3 className="font-semibold text-emerald-800 mb-2">✅ Cuándo uso Airbnb:</h3>
            <ul className="text-emerald-700 text-sm space-y-1">
              <li>• Estancias largas (una semana o más)</li>
              <li>• Viajes en grupo o en familia</li>
              <li>• Cuando quiero cocinar y ahorrar en comidas</li>
              <li>• Destinos donde quiero vivir como un local</li>
              <li>• Lugares únicos (casas rurales, apartamentos con vistas, etc.)</li>
            </ul>
          </div>

          <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-4">
            <h3 className="font-semibold text-orange-800 mb-2">⚠️ Cuidado con:</h3>
            <ul className="text-orange-700 text-sm space-y-1">
              <li>• Tasas de limpieza que pueden duplicar el precio</li>
              <li>• Políticas de cancelación más estrictas</li>
              <li>• Apartamentos sin recepción (problemas con llaves)</li>
              <li>• Ubicaciones que pueden estar lejos del centro</li>
            </ul>
          </div>

          <div className="mt-6">
            <a
              href="https://www.airbnb.es/"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 text-center"
            >
              Ver Airbnb
            </a>
          </div>
        </div>

        {/* Hostelworld */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            🛏️ Hostelworld: para mochileros y viajeros low-cost
          </h2>
          <p className="text-gray-700 mb-4">
            <strong>Cuando viajo solo o busco ahorrar al máximo, Hostelworld me ha salvado muchas veces.</strong> 
            No solo por los precios, sino porque es la mejor forma de conocer otros viajeros. Algunos de mis mejores 
            recuerdos de viaje han empezado en la cocina común de un hostel.
          </p>
          <p className="text-gray-700 mb-4">
            Lo que más valoro de Hostelworld son las reseñas reales de otros mochileros. Te cuentan si el hostel está 
            limpio, si el wifi funciona, si hay ambiente para conocer gente o si es más tranquilo. Información que no 
            encuentras en otras plataformas.
          </p>
          
          <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 mb-4">
            <h3 className="font-semibold text-emerald-800 mb-2">✅ Cuándo uso Hostelworld:</h3>
            <ul className="text-emerald-700 text-sm space-y-1">
              <li>• Viajes en solitario donde quiero conocer gente</li>
              <li>• Presupuesto muy ajustado</li>
              <li>• Destinos mochileros (Sudeste Asiático, Sudamérica, etc.)</li>
              <li>• Cuando busco ambiente joven y social</li>
              <li>• Estancias cortas en ciudades caras</li>
            </ul>
          </div>

          <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-4">
            <h3 className="font-semibold text-orange-800 mb-2">⚠️ Ten en cuenta:</h3>
            <ul className="text-orange-700 text-sm space-y-1">
              <li>• Menos privacidad (habitaciones compartidas)</li>
              <li>• Puede haber ruido, especialmente los fines de semana</li>
              <li>• Baños y cocinas compartidos</li>
              <li>• No todos los hostels tienen el mismo nivel de limpieza</li>
            </ul>
          </div>

          <div className="mt-6">
            <a
              href="https://www.hostelworld.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 text-center"
            >
              Ver Hostelworld
            </a>
          </div>
        </div>

        {/* Tabla comparativa */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Comparativa rápida</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-lg shadow-sm">
              <thead>
                <tr className="bg-sky-500 text-white">
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Plataforma</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Ideal para</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Pros principales</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Contras</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">🏨 Booking</td>
                  <td className="border border-gray-300 px-4 py-3">Viajes cortos, hoteles</td>
                  <td className="border border-gray-300 px-4 py-3">Cancelación fácil, muchas opciones, programa Genius</td>
                  <td className="border border-gray-300 px-4 py-3">A veces más caro</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium">🏡 Airbnb</td>
                  <td className="border border-gray-300 px-4 py-3">Estancias largas, grupos</td>
                  <td className="border border-gray-300 px-4 py-3">Espacios completos, cocina, experiencia local</td>
                  <td className="border border-gray-300 px-4 py-3">Tarifas extra, limpieza</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">🛏️ Hostelworld</td>
                  <td className="border border-gray-300 px-4 py-3">Presupuesto bajo, mochileros</td>
                  <td className="border border-gray-300 px-4 py-3">Hostels baratos, ambiente social, reseñas reales</td>
                  <td className="border border-gray-300 px-4 py-3">Menos privacidad, ruido</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Mi estrategia personal */}
        <div className="bg-gradient-to-r from-emerald-50 to-sky-50 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Mi estrategia personal</h2>
          <p className="text-lg text-gray-700 mb-4">
            <strong>En la práctica, suelo combinar las tres plataformas en un mismo viaje.</strong> Por ejemplo, 
            en mi último viaje a Tailandia usé Hostelworld para Bangkok (quería conocer gente), Airbnb para una 
            semana en Chiang Mai (apartamento con cocina) y Booking para las últimas noches en un hotel cerca del 
            aeropuerto.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Mi consejo es que no te cases con una sola plataforma. Cada una tiene su momento perfecto, y a veces 
            vale la pena comparar precios entre las tres antes de decidir.
          </p>
          <p className="text-lg text-gray-700 mb-0">
            <strong>¿Tú qué plataforma prefieres?</strong> Cuéntamelo en los comentarios o escríbeme por email. 
            Me encanta conocer las experiencias de otros viajeros y siempre estoy abierto a descubrir nuevas 
            opciones que puedan funcionar.
          </p>
        </div>

        {/* CTA final */}
        <div className="bg-gradient-to-r from-sky-500 to-emerald-500 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">¿Te ha ayudado esta comparativa?</h3>
          <p className="text-lg mb-6 opacity-90">
            Descubre más consejos para encontrar el alojamiento perfecto en cada viaje
          </p>
          <button
            onClick={onBack}
            className="bg-white text-sky-500 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Ver Más Artículos
          </button>
        </div>
      </div>
      
      {/* Artículos relacionados */}
      <RelatedArticles currentCategory="Alojamiento" currentArticleId="booking-vs-airbnb" />
    </article>
  );
};

export default AccommodationArticle;