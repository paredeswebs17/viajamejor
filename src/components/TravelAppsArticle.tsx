import { ArrowLeft, Share2, Plane, MapPin, Shield, CreditCard, Globe, Camera, FileText, Star } from 'lucide-react';
import RelatedArticles from './RelatedArticles';

interface TravelAppsArticleProps {
  onBack: () => void;
}

const TravelAppsArticle: React.FC<TravelAppsArticleProps> = ({ onBack }) => {

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-24">
      {/* Header del artículo */}
      <div className="mb-8">
        <button 
          onClick={onBack}
          className="flex items-center text-sky-500 hover:text-sky-600 mb-6 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Volver al blog
        </button>
        
        <div className="mb-6">
          <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            Tecnología
          </span>
        </div>
        
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Las mejores apps y herramientas que uso en cada viaje
        </h1>

        <div className="flex items-center justify-end text-gray-600 text-sm space-x-6 mb-8">
          <button 
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: 'Las mejores apps y herramientas que uso en cada viaje',
                  text: 'Descubre las aplicaciones imprescindibles para viajar',
                  url: window.location.href,
                })
                .catch((error) => console.log('Error sharing', error));
              } else {
                window.open(`https://twitter.com/intent/tweet?text=Las mejores apps y herramientas para viajar&url=${encodeURIComponent(window.location.href)}`, '_blank');
              }
            }}
            className="flex items-center hover:text-sky-500 transition-colors"
          >
            <Share2 className="h-4 w-4 mr-2" />
            <span>Compartir</span>
          </button>
        </div>
      </div>

      {/* Imagen destacada */}
      <div className="mb-12">
        <img
          src="https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Smartphone con múltiples apps de viaje en la pantalla"
          className="w-full h-64 sm:h-80 object-cover rounded-2xl shadow-lg"
        />
      </div>

      {/* Contenido del artículo */}
      <div className="prose prose-lg max-w-none">
        
        {/* Introducción */}
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8 mb-12">
          <p className="text-lg text-gray-700 leading-relaxed mb-0">
            <strong>Viajar sin un buen arsenal de apps es como salir sin pasaporte.</strong> Después de años probando 
            aplicaciones que prometen revolucionar tus viajes (y que luego no funcionan cuando las necesitas), 
            tengo claro cuáles son las que realmente valen la pena.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4 mb-0">
            Estas son las apps que tengo siempre en mi móvil y que me han salvado el viaje más de una vez. 
            Desde encontrar vuelos baratos hasta navegar sin internet en medio de Bangkok. Aquí tienes mi kit 
            digital de supervivencia viajera.
          </p>
        </div>

        {/* Lista de apps */}
        <div className="space-y-12">
          
          {/* Vuelos */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Plane className="h-6 w-6 text-sky-500 mr-3" />
              Usa Kiwi.com para buscar vuelos baratos
            </h2>
            <p className="text-gray-700 mb-4">
             Mi rutina siempre empieza aquí. <strong>Kiwi.com es mi herramienta favorita para buscar vuelos porque te permite encontrar rutas poco habituales, conexiones raras y vuelos con escalas múltiples a buen precio.</strong> Además, tiene funciones muy útiles para ver fechas flexibles y detectar combinaciones que otros buscadores no muestran.
            </p>
            <p className="text-gray-700 mb-4">
             Lo que hago: <strong>busco directamente en Kiwi.com para comparar precios, explorar rutas alternativas y, si es necesario, añadir escalas.</strong> A veces la diferencia puede ser de 100-200€ respecto a buscar solo vuelos directos.
            </p>
            <div className="bg-sky-50 border border-sky-200 rounded-lg p-4">
              <p className="text-sky-800 text-sm mb-2">
                👉 <strong>
                  <a href="https://kiwi.tpk.lv/z2gZyZ3E" target="_blank" rel="noopener noreferrer">
                  Aquí tienes el enlace a Kiwi.com
                  </a>
                </strong>
              </p>
            </div>
          </div>

          {/* Alojamiento */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <MapPin className="h-6 w-6 text-emerald-500 mr-3" />
              Booking + Hostelworld – Reservas rápidas de alojamiento
            </h2>
            <p className="text-gray-700 mb-4">
              <strong>Booking para hoteles de última hora, Hostelworld para hostels y ambiente social.</strong> 
              Las tengo las dos porque cada una tiene su momento. Booking cuando necesito algo seguro y con 
              cancelación gratuita, Hostelworld cuando viajo solo y quiero conocer gente.
            </p>
            <p className="text-gray-700 mb-4">
              Truco: uso los filtros de Booking para encontrar sitios con desayuno incluido cerca del transporte 
              público. En Hostelworld leo siempre los comentarios sobre limpieza y ruido.
            </p>
            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
              <p className="text-emerald-800 text-sm mb-2">
                👉 <strong>
                  <a href="https://booking.tpk.lv/UianlEEu" target="_blank" rel="noopener noreferrer">
                  Aquí tienes el enlace a Booking
                  </a>
                </strong>
              </p>
              <p className="text-emerald-800 text-sm mb-0">
                👉 <strong>
                  <a href="https://www.hostelworld.com/" target="_blank" rel="noopener noreferrer">
                  Aquí tienes el enlace a Hostelworld
                  </a>
                </strong>
              </p>
            </div>
          </div>

          {/* Mapas */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <MapPin className="h-6 w-6 text-green-500 mr-3" />
              Maps.me + Google Maps – Mapas offline y navegación
            </h2>
            <p className="text-gray-700 mb-4">
              <strong>Maps.me me ha salvado en países sin buena conexión a internet.</strong> Puedes descargar 
              mapas completos de países enteros y funciona perfectamente offline. Google Maps para el día a día 
              cuando hay wifi, pero Maps.me para emergencias.
            </p>
            <p className="text-gray-700 mb-4">
              Historia real: en Myanmar, donde el internet era malísimo, Maps.me me ayudó a encontrar mi hotel 
              en Bagan cuando ya era de noche y estaba completamente perdido.
            </p>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="text-green-800 text-sm mb-0">
                <strong>💡 Consejo:</strong> Descarga los mapas antes de viajar con wifi del hotel. 
                Ocupan poco espacio y pueden salvarte el viaje.
              </p>
            </div>
          </div>

          {/* VPN */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Shield className="h-6 w-6 text-red-500 mr-3" />
              NordVPN – Navegar seguro y buscar vuelos más baratos
            </h2>
            <div className="flex items-center mb-4">
              <Star className="h-5 w-5 text-orange-500 mr-2" />
              <span className="text-orange-500 font-medium">Esencial para seguridad</span>
            </div>
            <p className="text-gray-700 mb-4">
              <strong>Una VPN no es solo para Netflix, es para tu seguridad.</strong> Cuando te conectas al wifi 
              del hotel o del aeropuerto, cualquiera puede ver lo que haces. NordVPN cifra tu conexión y además 
              me permite buscar vuelos desde otros países para encontrar mejores precios.
            </p>
            <p className="text-gray-700 mb-4">
              Ejemplo real: buscando vuelos a Japón desde España costaban 650€, desde Argentina 420€. 
              Con la VPN pude "estar" en Argentina y ahorrar 230€.
            </p>
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="text-red-800 text-sm mb-2">
                👉 <strong>
                  <a href="https://go.nordvpn.net/aff_c?offer_id=15&aff_id=127437&url_id=902" target="_blank" rel="noopener noreferrer">
                  Aquí tienes el enlace a NordVPN
                  </a>
                </strong>
              </p>
            </div>
          </div>

          {/* Traductor */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Globe className="h-6 w-6 text-blue-500 mr-3" />
              Google Translate – Para traducir sin conexión
            </h2>
            <p className="text-gray-700 mb-4">
              <strong>Google Translate con descarga offline es un salvavidas.</strong> Puedes descargar idiomas 
              completos y usar la cámara para traducir carteles, menús, señales... La función de conversación 
              en tiempo real me ha ayudado a comunicarme en situaciones complicadas.
            </p>
            <p className="text-gray-700 mb-4">
              Truco: descarga siempre el idioma local antes de viajar. La función de cámara funciona incluso 
              sin internet y puede traducir texto en tiempo real apuntando con el móvil.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-blue-800 text-sm mb-0">
                <strong>💡 Idiomas que siempre descargo:</strong> Inglés, español, y el idioma local del destino. 
                Ocupan poco espacio y pueden sacarte de muchos apuros.
              </p>
            </div>
          </div>

          {/* Divisas */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <CreditCard className="h-6 w-6 text-yellow-500 mr-3" />
              XE Currency – Convertidor de divisas
            </h2>
            <p className="text-gray-700 mb-4">
              <strong>Para no hacer el ridículo regateando o pagando de más.</strong> XE Currency funciona offline
              una vez que descargas las tasas de cambio. Es súper rápida y tiene un widget que puedes poner en
              la pantalla principal del móvil.
            </p>
            <p className="text-gray-700 mb-4">
              La uso constantemente en mercados, restaurantes, y cuando regateo. Tener claro cuánto estás pagando 
              realmente en euros te da mucha confianza para negociar precios.
            </p>
          </div>
          

          {/* Tarjetas */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <CreditCard className="h-6 w-6 text-indigo-500 mr-3" />
              Revolut + N26 – Para pagar sin comisiones
            </h2>
            <p className="text-gray-700 mb-4">
              <strong>Yo no viajo solo con una tarjeta, siempre llevo al menos dos.</strong> Mi combinación favorita 
            es Revolut + N26. Revolut para el día a día y N26 por si Revolut me da algún problema.
            </p>
            <p className="text-gray-700 mb-4">
              Lo mejor: puedes cambiar dinero al tipo de cambio real desde la app, bloquear y desbloquear las
              tarjetas al instante, y ver todos los gastos categorizados automáticamente. <strong>Mi consejo:</strong> Empieza con Revolut, que es la más fácil de conseguir y usar. Cuando veas lo que ahorras en comisiones, ya no querrás volver a tu banco tradicional para viajar.
            </p>
            <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
              <p className="text-indigo-800 text-sm mb-2">
                👉 <strong>
              <a href="https://revolut.com/referral/?referral-code=antoni22jf!OCT1-25-AR-CH1H2-CRY&geo-redirect" target="_blank" rel="noopener noreferrer">
                Aquí tienes el enlace a Revolut
              </a>
            </strong>
              </p>
              <p className="text-indigo-800 text-sm mb-2">
                👉 <strong>
              <a href="https://n26.com/es-es" target="_blank" rel="noopener noreferrer">
                Aquí tienes el enlace a N26
              </a>
            </strong>
              </p>
              <p className="text-indigo-800 text-sm mb-0">
                👉 <strong>Lee mi artículo completo sobre tarjetas de viaje</strong>
              </p>
            </div>
          </div>

          {/* Organización */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <FileText className="h-6 w-6 text-gray-500 mr-3" />
              Notion – Para guardar planes y reservas
            </h2>
            <p className="text-gray-700 mb-4">
              <strong>Mi base de datos personal de viajes.</strong> En Notion tengo plantillas para cada viaje: 
              vuelos, hoteles, actividades, presupuesto, documentos importantes... Todo organizado y accesible 
              offline si descargo las páginas.
            </p>
            <p className="text-gray-700 mb-4">
              También guardo fotos de documentos importantes (pasaporte, seguro, tarjetas) por si pierdo algo. 
              Es como tener una oficina de viajes en el bolsillo.
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <p className="text-gray-800 text-sm mb-0">
                <strong>💡 Alternativas:</strong> Google Docs si prefieres algo más simple, o TripIt para 
                organizar automáticamente reservas desde el email.
              </p>
            </div>
          </div>

          {/* Actividades */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Camera className="h-6 w-6 text-orange-500 mr-3" />
               GetYourGuide – Reservar excursiones
            </h2>
            <p className="text-gray-700 mb-4">
              Para encontrar y reservar actividades sobre la marcha, me gusta porque ofrece una enorme variedad de excursiones, visitas guiadas y experiencias únicas que muchas veces no encuentras en otros sitios.
            </p>
            <p className="text-gray-700 mb-4">
              La uso cuando llego a un destino y veo que hay algo interesante que no había planificado. 
              <strong>Puedes reservar para el mismo día y cancelar gratis en muchas actividades.</strong>
            </p>
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <p className="text-orange-800 text-sm mb-2">
                👉 <strong>
              <a href="https://gyg.me/vHQMITYm" target="_blank" rel="noopener noreferrer">
                Aquí tienes el enlace a GetYourGuide
              </a>
            </strong>
              </p>
            </div>
          </div>
        </div>

        {/* Apps bonus */}
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8 mt-12 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Apps bonus que también uso</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">📱 TripAdvisor</h3>
              <p className="text-gray-600 text-sm">Para leer reseñas reales de restaurantes y atracciones. Los comentarios recientes son oro puro.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">🌤️ Weather</h3>
              <p className="text-gray-600 text-sm">La app del tiempo nativa del iPhone. Simple, fiable y funciona en cualquier parte del mundo.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">📷 Google Photos</h3>
              <p className="text-gray-600 text-sm">Backup automático de fotos con wifi. Nunca más perder las fotos del viaje si se rompe el móvil.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">🎵 Spotify</h3>
              <p className="text-gray-600 text-sm">Descargo playlists offline para vuelos largos y momentos sin internet. Música = buen humor.</p>
            </div>
          </div>
        </div>

        {/* Conclusión */}
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Mi conclusión</h2>
          <p className="text-lg text-gray-700 mb-4">
            <strong>Estas apps están en mi móvil en cada viaje.</strong> Algunas me ayudan a ahorrar dinero, 
            otras a organizarme mejor, y otras a descubrir sitios increíbles que no habría encontrado de otra forma.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            No necesitas tener todas, pero te recomiendo que pruebes al menos las básicas: Skyscanner, Google Maps, 
            Google Translate y una VPN. Con esas cuatro ya tienes cubierto el 80% de las situaciones.
          </p>
          <p className="text-lg text-gray-700 mb-0">
            <strong>¿Tienes alguna app favorita que no esté aquí?</strong> Escríbeme y la probaré en mi próxima 
            aventura. Siempre estoy buscando herramientas que puedan hacer los viajes más fáciles y divertidos.
          </p>
        </div>

        {/* CTA final */}
        <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">¿Listo para optimizar tu próximo viaje?</h3>
          <p className="text-lg mb-6 opacity-90">
            Explora más herramientas y consejos para hacer tus viajes más fáciles
          </p>
          <button
            onClick={onBack}
            className="bg-white text-purple-500 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Ver Más Herramientas
          </button>
        </div>
      </div>
      
      {/* Artículos relacionados */}
      <RelatedArticles currentCategory="Tecnología" currentArticleId="travel-apps" />
    </article>
  );
};

export default TravelAppsArticle;