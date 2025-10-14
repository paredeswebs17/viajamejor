import { ArrowLeft, Share2, AlertTriangle, Star } from 'lucide-react';
import RelatedArticles from './RelatedArticles';

interface TravelCardsArticleProps {
  onBack: () => void;
}

const TravelCardsArticle: React.FC<TravelCardsArticleProps> = ({ onBack }) => {
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
          <span className="bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            Finanzas
          </span>
        </div>
        
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Las mejores tarjetas para viajar al extranjero sin comisiones
        </h1>

        <div className="flex items-center justify-end text-gray-600 text-sm space-x-6 mb-8">
          <button 
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: 'Las mejores tarjetas para viajar al extranjero sin comisiones',
                  text: 'Descubre qué tarjetas te ahorrarán dinero en tus viajes',
                  url: window.location.href,
                })
                .catch((error) => console.log('Error sharing', error));
              } else {
               navigator.clipboard.writeText(window.location.href).then(() => {
                 // Simple feedback - could be enhanced with toast notification
                 alert('¡Enlace copiado al portapapeles!');
               }).catch(() => {
                 // Fallback to Twitter
                 window.open(`https://twitter.com/intent/tweet?text=Las mejores tarjetas para viajar sin comisiones&url=${encodeURIComponent(window.location.href)}`, '_blank');
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
          src="https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt="Tarjetas de crédito y dinero en efectivo para viajar"
          className="w-full h-64 sm:h-80 object-cover rounded-2xl shadow-lg"
        />
      </div>

      {/* Contenido del artículo */}
      <div className="prose prose-lg max-w-none">
        
        {/* Introducción */}
        <div className="bg-gradient-to-r from-emerald-50 to-sky-50 rounded-2xl p-8 mb-12">
          <p className="text-lg text-gray-700 leading-relaxed mb-0">
            <strong>Una de las formas más tontas de perder dinero viajando es con comisiones bancarias.</strong> 
            Por eso, desde hace años viajo con tarjetas que no me cobran por pagar ni por sacar dinero. 
            He probado varias y tengo claras mis favoritas.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4 mb-0">
            Aquí te cuento cuáles uso, qué me gusta de cada una, y cómo puedes conseguirlas tú también. 
            Spoiler: desde que las uso, he ahorrado cientos de euros en comisiones absurdas.
          </p>
        </div>

        {/* ¿Por qué necesitas una tarjeta sin comisiones? */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <AlertTriangle className="h-6 w-6 text-orange-500 mr-3" />
            ¿Por qué necesitas una tarjeta sin comisiones para viajar?
          </h2>
          <p className="text-gray-700 mb-4">
            <strong>Los bancos tradicionales te cobran por todo cuando viajas.</strong> Y no hablo de cantidades 
            pequeñas. En un viaje de dos semanas puedes gastarte fácilmente 50-100€ solo en comisiones. 
            Aquí tienes los principales "ladrones de dinero":
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h3 className="font-semibold text-red-800 mb-2">💸 Comisiones por cambio de divisa</h3>
              <ul className="text-red-700 text-sm space-y-1">
                <li>• Entre 3-4% por cada pago</li>
                <li>• Se aplica automáticamente</li>
                <li>• No te avisan antes de cobrarla</li>
                <li>• Se acumula rápidamente</li>
              </ul>
            </div>
            
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <h3 className="font-semibold text-orange-800 mb-2">🏧 Comisiones por sacar dinero</h3>
              <ul className="text-orange-700 text-sm space-y-1">
                <li>• 3-6€ por cada retirada</li>
                <li>• Independiente de la cantidad</li>
                <li>• Algunos cajeros cobran extra</li>
                <li>• Tipo de cambio desfavorable</li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
            <h3 className="font-semibold text-yellow-800 mb-2">🚫 Otros problemas comunes</h3>
            <ul className="text-yellow-700 text-sm space-y-1">
              <li>• Bloqueos automáticos por "actividad sospechosa"</li>
              <li>• Límites bajos para el extranjero</li>
              <li>• Atención al cliente que no funciona 24/7</li>
              <li>• Apps que no funcionan bien fuera de España</li>
            </ul>
          </div>

          <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
            <p className="text-emerald-800 text-sm mb-0">
              <strong>Ejemplo real:</strong> En mi último viaje a Japón, mi banco me habría cobrado 4€ por cada 
              retirada + 3.5% de comisión por cada pago. En 10 días habría pagado más de 80€ en comisiones. 
              Con Revolut: 0€.
            </p>
          </div>
        </div>

        {/* Las tarjetas que recomiendo */}
        <div className="space-y-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center">Las tarjetas que recomiendo</h2>
          
          {/* Revolut */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">1</span>
              Revolut – Rápida, fácil y muy popular entre viajeros
            </h2>
            <div className="flex items-center mb-4">
              <Star className="h-5 w-5 text-orange-500 mr-2" />
              <span className="text-orange-500 font-medium">Mi favorita para viajar</span>
            </div>
            <p className="text-gray-700 mb-4">
              <strong>Revolut es la tarjeta que más uso cuando viajo.</strong> La tengo desde hace 4 años y me ha 
              ahorrado una fortuna en comisiones. Lo que más me gusta es que puedes cambiar dinero a más de 30 divisas 
              desde la app, al tipo de cambio real.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Lo mejor:</strong> Retiros gratis hasta 200€ al mes, pagos sin comisiones en cualquier divisa, 
              app súper intuitiva, tarjeta física gratis. Además, puedes bloquearla y desbloquearla desde el móvil 
              si la pierdes.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Lo único malo:</strong> A partir de 200€ de retiradas al mes, cobra una pequeña comisión (2%). 
              Pero para la mayoría de viajes es más que suficiente.
            </p>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
              <h3 className="font-semibold text-blue-800 mb-2">✅ Qué incluye la versión gratuita:</h3>
              <ul className="text-blue-700 text-sm space-y-1">
                <li>• Tarjeta física gratuita</li>
                <li>• Retiros gratis hasta 200€/mes</li>
                <li>• Pagos sin comisiones en cualquier divisa</li>
                <li>• Cambio de divisa al tipo real (entre semana)</li>
                <li>• App móvil completa</li>
              </ul>
            </div>
            <div className="bg-sky-50 border border-sky-200 rounded-lg p-4">
              <p className="text-sky-800 text-sm mb-2">
                👉 <strong>
                  <a href="https://revolut.com/referral/?referral-code=antoni22jf!OCT1-25-AR-CH1H2-CRY&geo-redirect" target="_blank" rel="noopener noreferrer">
                    Aquí tienes el enlace a Revolut
                  </a>
                </strong>
              </p>
            </div>
          </div>

          {/* N26 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-gradient-to-r from-gray-600 to-gray-800 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">2</span>
              N26 – Banco online alemán con IBAN europeo
            </h2>
            <p className="text-gray-700 mb-4">
              <strong>N26 es un banco 100% digital alemán que funciona muy bien para viajar por Europa.</strong> 
              Lo que más me gusta es que tienes un IBAN alemán real, lo que facilita muchas gestiones en Europa. 
              La app es muy limpia y fácil de usar.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Lo mejor:</strong> IBAN alemán real, retiros gratis en toda la eurozona, app muy intuitiva, 
              notificaciones instantáneas, versión gratuita completa.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Limitaciones:</strong> Fuera de Europa las condiciones no son tan buenas como Revolut o Wise. 
              Es más una opción complementaria.
            </p>
            
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4">
              <h3 className="font-semibold text-gray-800 mb-2">✅ Versión gratuita incluye:</h3>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>• Cuenta corriente con IBAN alemán</li>
                <li>• Tarjeta Mastercard gratuita</li>
                <li>• 3 retiradas gratis al mes en eurozona</li>
                <li>• Pagos sin comisiones en euros</li>
                <li>• App móvil completa</li>
              </ul>
            </div>

            <div className="bg-sky-50 border border-sky-200 rounded-lg p-4">
              <p className="text-sky-800 text-sm mb-2">
                👉 <strong>
                  <a href="https://n26.com/es-es" target="_blank" rel="noopener noreferrer">
                    Aquí tienes el enlace a N26
                  </a>
                </strong>
              </p>
            </div>
          </div>
        </div>

        {/* Comparativa rápida */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Comparativa rápida</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-lg shadow-sm">
              <thead>
                <tr className="bg-emerald-500 text-white">
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Tarjeta</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Comisiones</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Retiros gratis</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Multidivisa</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Mi valoración</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">💜 Revolut</td>
                  <td className="border border-gray-300 px-4 py-3">0% pagos</td>
                  <td className="border border-gray-300 px-4 py-3">Hasta 200€/mes</td>
                  <td className="border border-gray-300 px-4 py-3">✅ 30+ divisas</td>
                  <td className="border border-gray-300 px-4 py-3">⭐⭐⭐⭐⭐</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">🖤 N26</td>
                  <td className="border border-gray-300 px-4 py-3">0% en euros</td>
                  <td className="border border-gray-300 px-4 py-3">3 retiradas/mes</td>
                  <td className="border border-gray-300 px-4 py-3">❌ Solo euros</td>
                  <td className="border border-gray-300 px-4 py-3">⭐⭐⭐⭐</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Mi estrategia personal */}
        <div className="bg-gradient-to-r from-emerald-50 to-sky-50 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Mi estrategia personal</h2>
          <p className="text-lg text-gray-700 mb-4">
            <strong>Yo no viajo solo con una tarjeta, siempre llevo al menos dos.</strong> Mi combinación favorita 
            es Revolut + N26 . Revolut para el día a día y N26 por si Revolut me da algún problema.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            También llevo algo de efectivo en euros (por si acaso) y mi tarjeta del banco español como última 
            opción de emergencia. Pero en 4 años viajando así, solo he tenido que usar la del banco una vez.
          </p>
          <p className="text-lg text-gray-700 mb-0">
            <strong>Mi consejo:</strong> Empieza con Revolut, que es la más fácil de conseguir y usar. Cuando 
            veas lo que ahorras en comisiones, ya no querrás volver a tu banco tradicional para viajar.
          </p>
        </div>

        {/* Conclusión */}
        <div className="bg-gradient-to-r from-emerald-50 to-sky-50 rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Mi conclusión</h2>
          <p className="text-lg text-gray-700 mb-4">
            <strong>Desde que viajo con estas tarjetas, he ahorrado mucho dinero y disgustos.</strong> No más 
            sorpresas en el extracto, no más llamadas al banco para desbloquear la tarjeta, no más comisiones 
            absurdas por sacar 20€.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Te recomiendo probar al menos Revolut, que es gratuita y la puedes tener en una semana. Una vez 
            que la uses en tu primer viaje, entenderás por qué nunca más querrás viajar sin ella.
          </p>
          <p className="text-lg text-gray-700 mb-0">
            <strong>¿Tú qué tarjeta usas para viajar?</strong> Cuéntamelo en comentarios o escríbeme por email. 
            Siempre me gusta conocer nuevas opciones que puedan funcionar bien.
          </p>
        </div>

        {/* CTA final */}
        <div className="bg-gradient-to-r from-emerald-500 to-sky-500 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">¿Listo para ahorrar en comisiones?</h3>
          <p className="text-lg mb-6 opacity-90">
            Consigue tu tarjeta Revolut gratuita y empieza a viajar sin comisiones desde tu próximo viaje
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://revolut.com/referral/?referral-code=antoni22jf!OCT1-25-AR-CH1H2-CRY&geo-redirect"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-emerald-500 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors inline-block text-center"
            >
              Conseguir Revolut gratis
            </a>
            <button
              onClick={onBack}
              className="bg-transparent border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-emerald-500 transition-colors"
            >
              Ver Más Artículos
            </button>
          </div>
        </div>
      </div>
      
      {/* Artículos relacionados */}
      <RelatedArticles currentCategory="Finanzas" currentArticleId="tarjetas-sin-comisiones" />
    </article>
  );
};

export default TravelCardsArticle;