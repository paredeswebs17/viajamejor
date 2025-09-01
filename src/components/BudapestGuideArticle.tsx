import { ArrowLeft, Share2, Clock, MapPin, Euro, Calendar, Star, CheckCircle, ExternalLink } from 'lucide-react';

interface BudapestGuideArticleProps {
  onBack: () => void;
}

const BudapestGuideArticle: React.FC<BudapestGuideArticleProps> = ({ onBack }) => {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-24">
      {/* Header del artículo */}
      <div className="mb-8">
        <button 
          onClick={onBack}
          className="inline-flex items-center text-sky-600 hover:text-sky-700 hover:bg-sky-50 px-3 py-2 rounded-lg transition-all duration-200 font-medium border border-sky-200 hover:border-sky-300 mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Volver a guías
        </button>
        
        <div className="mb-6">
          <span className="bg-sky-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            Guía Completa
          </span>
        </div>
        
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
          Budapest en 4 Días: Guía Completa con Itinerario y Presupuesto
        </h1>

        {/* Info compacta para móvil */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-gray-600">
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1 text-sky-500" />
              <span className="block sm:hidden">15 min</span>
              <span className="hidden sm:block">15 min lectura</span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-1 text-emerald-500" />
              <span className="block sm:hidden">Budapest</span>
              <span className="hidden sm:block">Budapest, Hungría</span>
            </div>
          </div>
          
          <button 
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: 'Budapest en 4 Días: Guía Completa',
                  text: 'Descubre Budapest con esta guía detallada',
                  url: window.location.href,
                })
                .catch((error) => console.log('Error sharing', error));
              } else {
                navigator.clipboard.writeText(window.location.href).then(() => {
                  alert('¡Enlace copiado al portapapeles!');
                }).catch(() => {
                  window.open(`https://twitter.com/intent/tweet?text=Budapest en 4 Días: Guía Completa&url=${encodeURIComponent(window.location.href)}`, '_blank');
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
      <div className="mb-8">
        <img
          src="https://images.unsplash.com/photo-1541849546-216549ae216d?auto=format&fit=crop&w=1200&q=80"
          alt="Vista panorámica del Parlamento de Budapest al atardecer con el río Danubio"
          className="w-full h-48 sm:h-64 lg:h-80 object-cover rounded-2xl shadow-lg"
        />
      </div>

      {/* Contenido del artículo */}
      <div className="prose prose-lg max-w-none">
        
        {/* Introducción */}
        <div className="bg-gradient-to-r from-sky-50 to-emerald-50 rounded-2xl p-6 sm:p-8 mb-8">
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-0">
            <strong>Budapest es una de esas ciudades que te enamoran desde el primer momento.</strong> La capital húngara 
            combina historia imperial, arquitectura impresionante, balnearios termales únicos y una vida nocturna vibrante. 
            Y lo mejor: es mucho más barata que París, Londres o Roma.
          </p>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mt-4 mb-0">
            En esta guía te cuento exactamente cómo aprovechar 4 días en Budapest, cuánto me gasté en cada cosa, 
            dónde alojarse y qué no te puedes perder. Todo basado en mi experiencia real visitando la ciudad.
          </p>
        </div>

        {/* Presupuesto rápido */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">💰 Presupuesto para 4 días</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-emerald-50 rounded-lg p-4 text-center">
              <div className="text-lg sm:text-xl font-bold text-emerald-600">€280</div>
              <div className="text-xs sm:text-sm text-gray-600">Mochilero</div>
            </div>
            <div className="bg-sky-50 rounded-lg p-4 text-center">
              <div className="text-lg sm:text-xl font-bold text-sky-600">€480</div>
              <div className="text-xs sm:text-sm text-gray-600">Medio</div>
            </div>
            <div className="bg-purple-50 rounded-lg p-4 text-center">
              <div className="text-lg sm:text-xl font-bold text-purple-600">€720</div>
              <div className="text-xs sm:text-sm text-gray-600">Cómodo</div>
            </div>
            <div className="bg-orange-50 rounded-lg p-4 text-center">
              <div className="text-lg sm:text-xl font-bold text-orange-600">€1200</div>
              <div className="text-xs sm:text-sm text-gray-600">Lujo</div>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-gray-600 mt-4 text-center">
            *Precios por persona, incluyendo alojamiento, comida, transporte y atracciones
          </p>
        </div>

        {/* Mejor época */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">🌞 Mejor época para visitar</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-lg p-4 text-center">
              <h3 className="font-semibold text-orange-800 mb-2">Época Ideal</h3>
              <p className="text-sm text-orange-700">Mayo - Septiembre</p>
              <p className="text-xs text-orange-600 mt-1">Clima perfecto, días largos</p>
            </div>
            <div className="bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-200 rounded-lg p-4 text-center">
              <h3 className="font-semibold text-emerald-800 mb-2">Recomendado</h3>
              <p className="text-sm text-emerald-700">Octubre - Abril</p>
              <p className="text-xs text-emerald-600 mt-1">Menos turistas, precios bajos</p>
            </div>
          </div>
        </div>

        {/* Itinerario día por día */}
        <div className="space-y-8 mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">📅 Itinerario día por día</h2>
          
          {/* Día 1 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-sky-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">1</span>
              Poder Imperial y Herencia Cultural
            </h3>
            <p className="text-gray-700 mb-4">
              <strong>Mañana:</strong> Parlamento Húngaro (visita guiada 9:00), Plaza Kossuth, Basílica de San Esteban (subir a la cúpula)
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Tarde:</strong> Gran Sinagoga (la más grande de Europa), Barrio Judío, Szimpla Kert (pub en ruinas)
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Presupuesto del día:</strong> 45-80€ (incluye entradas, comidas y transporte)
            </p>
          </div>

          {/* Día 2 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-sky-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">2</span>
              Realeza Medieval y Romance Danubiano
            </h3>
            <p className="text-gray-700 mb-4">
              <strong>Mañana:</strong> Castillo de Buda, Bastión de los Pescadores (vistas increíbles), Iglesia de Matías
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Tarde:</strong> Paseo por Váci utca, Mercado Central, crucero nocturno por el Danubio
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Presupuesto del día:</strong> 50-85€ (incluye crucero y cena)
            </p>
          </div>

          {/* Día 3 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-sky-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">3</span>
              Aguas Milenarias y Esplendor Imperial
            </h3>
            <p className="text-gray-700 mb-4">
              <strong>Mañana:</strong> Balnearios Széchenyi (experiencia única), Plaza de los Héroes, Avenida Andrássy
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Tarde:</strong> New York Café (el más bonito del mundo), Ópera Nacional, barrio de Pest
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Presupuesto del día:</strong> 40-75€ (incluye balnearios y café)
            </p>
          </div>

          {/* Día 4 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-sky-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">4</span>
              Autenticidad Local y Despedida
            </h3>
            <p className="text-gray-700 mb-4">
              <strong>Mañana:</strong> Colina Gellért (mejores vistas de la ciudad), Ciudadela, Estatua de la Libertad
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Tarde:</strong> Exploración libre, compras de recuerdos, último paseo por el Danubio
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Presupuesto del día:</strong> 35-60€ (día más relajado)
            </p>
          </div>
        </div>

        {/* Recomendaciones esenciales */}
        <div className="bg-gradient-to-r from-emerald-50 to-sky-50 rounded-2xl p-6 sm:p-8 mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">🎯 Mis recomendaciones esenciales</h2>
          
          {/* Alojamiento */}
          <div className="mb-6">
            <h3 className="text-lg font-bold text-gray-900 mb-3">🏨 Dónde alojarse</h3>
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2">Zona recomendada: Distrito V (Centro)</h4>
              <p className="text-sm text-gray-700 mb-3">
                Cerca del Parlamento, fácil acceso a todo, seguro de noche. Precios desde 25€/noche en hostels, 
                60€/noche en hoteles 3*.
              </p>
              <a
                href="https://www.booking.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-sky-500 hover:bg-sky-600 text-white font-medium py-2 px-4 rounded-lg transition-colors text-sm"
              >
                <span>Buscar alojamiento</span>
                <ExternalLink className="h-3 w-3 ml-1" />
              </a>
            </div>
          </div>

          {/* Transporte */}
          <div className="mb-6">
            <h3 className="text-lg font-bold text-gray-900 mb-3">🚇 Cómo moverse</h3>
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2">Budapest Card (72h): 45€</h4>
              <p className="text-sm text-gray-700 mb-3">
                Transporte público ilimitado + entrada gratuita a 30+ atracciones + descuentos en restaurantes. 
                Se amortiza desde el primer día.
              </p>
              <div className="space-y-1 text-xs text-gray-600">
                <p>• Metro, tranvía, autobús ilimitado</p>
                <p>• Entrada gratuita: Parlamento, Castillo, Balnearios</p>
                <p>• 20% descuento en cruceros y restaurantes</p>
              </div>
            </div>
          </div>

          {/* Comida */}
          <div className="mb-6">
            <h3 className="text-lg font-bold text-gray-900 mb-3">🍽️ Dónde comer</h3>
            <div className="space-y-3">
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-1">Frici Papa (Comida local)</h4>
                <p className="text-sm text-gray-700">Goulash auténtico por 8€, ambiente local, cerca del Parlamento</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-1">New York Café (Experiencia única)</h4>
                <p className="text-sm text-gray-700">El café más bonito del mundo, desayuno 15€, obligatorio una vez</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-1">Mercado Central (Económico)</h4>
                <p className="text-sm text-gray-700">Lángos por 4€, productos locales, perfecto para almorzar</p>
              </div>
            </div>
          </div>
        </div>

        {/* Herramientas útiles */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">🛠️ Herramientas para tu viaje</h2>
          
          <div className="space-y-4">
            {/* Revolut */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 border border-blue-200">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 text-lg mb-2">
                    💳 Revolut - Tarjeta sin comisiones
                  </h3>
                  <p className="text-gray-700 text-sm mb-3">
                    Paga en forints húngaros sin comisiones extra. Cambio al tipo real, retiros gratis hasta 200€/mes.
                  </p>
                  <div className="space-y-1 text-xs text-gray-600 mb-4">
                    <div className="flex items-center">
                      <CheckCircle className="h-3 w-3 text-emerald-500 mr-2" />
                      <span>0% comisiones en pagos</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-3 w-3 text-emerald-500 mr-2" />
                      <span>Retiros gratis hasta 200€/mes</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-3 w-3 text-emerald-500 mr-2" />
                      <span>Cambio al tipo de cambio real</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <a
                  href="https://revolut.com/referral/?referral-code=antoni22jf!AUG1-25-AR-CL1H-CRY&geo-redirect"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <span>Conseguir Revolut</span>
                  <ExternalLink className="h-4 w-4 ml-2" />
                </a>
              </div>
            </div>

            {/* Seguro IATI */}
            <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-lg p-4 border border-emerald-200">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 text-lg mb-2">
                    🛡️ IATI Seguros - Viaja tranquilo
                  </h3>
                  <p className="text-gray-700 text-sm mb-3">
                    Seguro médico para Europa con cobertura completa. Atención 24/7 en español.
                  </p>
                  <div className="space-y-1 text-xs text-gray-600 mb-4">
                    <div className="flex items-center">
                      <CheckCircle className="h-3 w-3 text-emerald-500 mr-2" />
                      <span>Cobertura médica hasta 50.000€</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-3 w-3 text-emerald-500 mr-2" />
                      <span>Atención 24/7 en español</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-3 w-3 text-emerald-500 mr-2" />
                      <span>5% descuento exclusivo</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <a
                  href="https://www.iatiseguros.com?r=37344279073491"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <span>Conseguir IATI</span>
                  <ExternalLink className="h-4 w-4 ml-2" />
                </a>
              </div>
            </div>

            {/* Vuelos */}
            <div className="bg-gradient-to-r from-sky-50 to-blue-50 rounded-lg p-4 border border-sky-200">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 text-lg mb-2">
                    ✈️ Vuelos a Budapest
                  </h3>
                  <p className="text-gray-700 text-sm mb-3">
                    Encuentra los mejores precios para volar a Budapest desde España. Vuelos desde 80€ ida y vuelta.
                  </p>
                  <div className="space-y-1 text-xs text-gray-600 mb-4">
                    <div className="flex items-center">
                      <CheckCircle className="h-3 w-3 text-emerald-500 mr-2" />
                      <span>Compara todas las aerolíneas</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-3 w-3 text-emerald-500 mr-2" />
                      <span>Fechas flexibles para mejores precios</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-3 w-3 text-emerald-500 mr-2" />
                      <span>Vuelos directos desde Madrid y Barcelona</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <a
                  href="https://kiwi.tpk.lv/z2gZyZ3E"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-gradient-to-r from-sky-500 to-blue-500 hover:from-sky-600 hover:to-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <span>Buscar vuelos</span>
                  <ExternalLink className="h-4 w-4 ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Consejos finales */}
        <div className="bg-gradient-to-r from-sky-50 to-emerald-50 rounded-2xl p-6 sm:p-8 mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">💡 Consejos finales</h2>
          <div className="space-y-3 text-sm sm:text-base text-gray-700">
            <p><strong>💰 Dinero:</strong> Usa forints húngaros, muchos sitios no aceptan euros</p>
            <p><strong>🗣️ Idioma:</strong> El húngaro es difícil, pero hablan inglés en zonas turísticas</p>
            <p><strong>🚇 Transporte:</strong> Metro muy eficiente, compra la Budapest Card</p>
            <p><strong>🍷 Bebida:</strong> Prueba el vino húngaro, es excelente y barato</p>
            <p><strong>💡 Propinas:</strong> 10% en restaurantes, redondear en taxis</p>
          </div>
        </div>

        {/* CTA final */}
        <div className="bg-gradient-to-r from-sky-500 to-emerald-500 rounded-2xl p-6 sm:p-8 text-center text-white">
          <h3 className="text-xl sm:text-2xl font-bold mb-4">¿Listo para descubrir Budapest?</h3>
          <p className="text-base sm:text-lg mb-6 opacity-90">
            Empieza a planificar tu viaje con nuestras herramientas recomendadas
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://kiwi.tpk.lv/z2gZyZ3E"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-sky-500 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Buscar vuelos
            </a>
            <a 
              href="https://www.booking.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-sky-500 transition-colors"
            >
              Buscar hoteles
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BudapestGuideArticle;