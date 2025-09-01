import { ArrowLeft, Share2, Clock, MapPin, Euro, Calendar, Star, CheckCircle } from 'lucide-react';

interface BudapestGuideArticleProps {
  onBack: () => void;
}

const BudapestGuideArticle: React.FC<BudapestGuideArticleProps> = ({ onBack }) => {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-24">
      {/* Header */}
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
        
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Budapest en 4 días: guía completa con itinerario y presupuesto
        </h1>

        {/* Info bar - Mobile optimized */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 text-gray-600 text-sm">
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">15 min lectura</span>
              <span className="sm:hidden">15 min</span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Budapest, Hungría</span>
              <span className="sm:hidden">Budapest</span>
            </div>
          </div>
          
          <button 
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: 'Budapest en 4 días: guía completa',
                  text: 'Descubre Budapest con esta guía detallada',
                  url: window.location.href,
                })
                .catch((error) => console.log('Error sharing', error));
              } else {
                navigator.clipboard.writeText(window.location.href).then(() => {
                  alert('¡Enlace copiado al portapapeles!');
                }).catch(() => {
                  window.open(`https://twitter.com/intent/tweet?text=Budapest en 4 días: guía completa&url=${encodeURIComponent(window.location.href)}`, '_blank');
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

      {/* Featured Image */}
      <div className="mb-12">
        <img
          src="https://images.unsplash.com/photo-1541849546-216549ae216d?auto=format&fit=crop&w=1200&q=80"
          alt="Vista panorámica del Parlamento de Budapest al atardecer con el río Danubio"
          className="w-full h-64 sm:h-80 object-cover rounded-2xl shadow-lg"
        />
      </div>

      {/* Content */}
      <div className="prose prose-lg max-w-none">
        
        {/* Introduction */}
        <div className="bg-gradient-to-r from-sky-50 to-emerald-50 rounded-2xl p-8 mb-12">
          <p className="text-lg text-gray-700 leading-relaxed mb-0">
            <strong>Budapest es una de esas ciudades que te enamoran desde el primer momento.</strong> 
            La capital húngara combina historia imperial, arquitectura impresionante, balnearios termales únicos 
            y una vida nocturna vibrante. Todo ello con precios que no te arruinarán el presupuesto.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4 mb-0">
            En esta guía te cuento exactamente cómo aprovechar 4 días en Budapest, qué ver cada día, 
            cuánto gastar y todos los trucos para disfrutar al máximo de esta perla del Danubio.
          </p>
        </div>

        {/* Planning Table */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            📅 Planificación de 4 días
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-sky-500 text-white">
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Día</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Tema</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Highlights</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Presupuesto</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">Día 1</td>
                  <td className="border border-gray-300 px-4 py-3">Poder Imperial</td>
                  <td className="border border-gray-300 px-4 py-3">Parlamento + Sinagoga + Basílica</td>
                  <td className="border border-gray-300 px-4 py-3 font-semibold text-emerald-600">€45-85</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium">Día 2</td>
                  <td className="border border-gray-300 px-4 py-3">Realeza Medieval</td>
                  <td className="border border-gray-300 px-4 py-3">Castillo + Bastión + Crucero</td>
                  <td className="border border-gray-300 px-4 py-3 font-semibold text-emerald-600">€50-90</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">Día 3</td>
                  <td className="border border-gray-300 px-4 py-3">Aguas Milenarias</td>
                  <td className="border border-gray-300 px-4 py-3">Széchenyi + Héroes + Andrássy</td>
                  <td className="border border-gray-300 px-4 py-3 font-semibold text-emerald-600">€40-75</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium">Día 4</td>
                  <td className="border border-gray-300 px-4 py-3">Autenticidad Local</td>
                  <td className="border border-gray-300 px-4 py-3">Mercado + Gellért + Libre</td>
                  <td className="border border-gray-300 px-4 py-3 font-semibold text-emerald-600">€35-65</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Day by Day */}
        <div className="space-y-12 mb-12">
          
          {/* Day 1 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-sky-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">1</span>
              Día 1: Poder Imperial y Herencia Cultural
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">🏛️ Mañana (9:00-13:00)</h3>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• <strong>9:00</strong> - Parlamento de Budapest (visita guiada)</li>
                  <li>• <strong>11:00</strong> - Zapatos en el Danubio (memorial)</li>
                  <li>• <strong>11:30</strong> - Paseo por el barrio del Parlamento</li>
                  <li>• <strong>12:30</strong> - Almuerzo en Frici Papa</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">🕍 Tarde (14:00-18:00)</h3>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• <strong>14:00</strong> - Gran Sinagoga de Budapest</li>
                  <li>• <strong>15:30</strong> - Barrio judío y ruin pubs</li>
                  <li>• <strong>16:30</strong> - Basílica de San Esteban</li>
                  <li>• <strong>17:30</strong> - Subida a la cúpula (vistas)</li>
                </ul>
              </div>
            </div>

            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
              <p className="text-emerald-800 text-sm mb-0">
                <strong>💰 Presupuesto día 1:</strong> €45 (económico) - €85 (cómodo)
              </p>
            </div>
          </div>

          {/* Day 2 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-sky-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">2</span>
              Día 2: Realeza Medieval y Romance Danubiano
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">🏰 Mañana (9:00-13:00)</h3>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• <strong>9:00</strong> - Castillo de Buda</li>
                  <li>• <strong>10:30</strong> - Galería Nacional Húngara</li>
                  <li>• <strong>12:00</strong> - Bastión de los Pescadores</li>
                  <li>• <strong>12:30</strong> - Almuerzo con vistas</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">🌅 Tarde (14:00-21:00)</h3>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• <strong>14:00</strong> - Iglesia de Matías</li>
                  <li>• <strong>15:00</strong> - Paseo por Buda</li>
                  <li>• <strong>17:00</strong> - Puente de las Cadenas</li>
                  <li>• <strong>19:00</strong> - Crucero nocturno por el Danubio</li>
                </ul>
              </div>
            </div>

            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
              <p className="text-emerald-800 text-sm mb-0">
                <strong>💰 Presupuesto día 2:</strong> €50 (económico) - €90 (cómodo)
              </p>
            </div>
          </div>

          {/* Day 3 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-sky-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">3</span>
              Día 3: Aguas Milenarias y Esplendor Imperial
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">♨️ Mañana (9:00-13:00)</h3>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• <strong>9:00</strong> - Balnearios Széchenyi</li>
                  <li>• <strong>11:30</strong> - Plaza de los Héroes</li>
                  <li>• <strong>12:00</strong> - Parque Városliget</li>
                  <li>• <strong>12:30</strong> - Almuerzo local</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">☕ Tarde (14:00-18:00)</h3>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• <strong>14:00</strong> - Avenida Andrássy</li>
                  <li>• <strong>15:00</strong> - Ópera de Budapest</li>
                  <li>• <strong>16:00</strong> - New York Café</li>
                  <li>• <strong>17:30</strong> - Compras en Váci utca</li>
                </ul>
              </div>
            </div>

            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
              <p className="text-emerald-800 text-sm mb-0">
                <strong>💰 Presupuesto día 3:</strong> €40 (económico) - €75 (cómodo)
              </p>
            </div>
          </div>

          {/* Day 4 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-sky-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">4</span>
              Día 4: Autenticidad Local y Despedida
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">🏪 Mañana (9:00-13:00)</h3>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• <strong>9:00</strong> - Mercado Central</li>
                  <li>• <strong>10:30</strong> - Desayuno húngaro tradicional</li>
                  <li>• <strong>11:30</strong> - Colina Gellért</li>
                  <li>• <strong>12:30</strong> - Ciudadela y vistas panorámicas</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">🎭 Tarde (14:00-18:00)</h3>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• <strong>14:00</strong> - Almuerzo en el Mercado</li>
                  <li>• <strong>15:00</strong> - Exploración libre</li>
                  <li>• <strong>16:00</strong> - Últimas compras</li>
                  <li>• <strong>17:00</strong> - Café de despedida</li>
                </ul>
              </div>
            </div>

            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
              <p className="text-emerald-800 text-sm mb-0">
                <strong>💰 Presupuesto día 4:</strong> €35 (económico) - €65 (cómodo)
              </p>
            </div>
          </div>
        </div>

        {/* Budget Section */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">💰 Presupuesto total 4 días</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
              <h3 className="text-lg font-bold text-green-800 mb-2">🎒 Mochilero</h3>
              <div className="text-3xl font-bold text-green-600 mb-2">€170</div>
              <p className="text-green-700 text-sm">Hostels + comida local + transporte público</p>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
              <h3 className="text-lg font-bold text-blue-800 mb-2">🏨 Cómodo</h3>
              <div className="text-3xl font-bold text-blue-600 mb-2">€315</div>
              <p className="text-blue-700 text-sm">Hoteles 3* + restaurantes + algunas actividades</p>
            </div>
            
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 text-center">
              <h3 className="text-lg font-bold text-purple-800 mb-2">✨ Lujo</h3>
              <div className="text-3xl font-bold text-purple-600 mb-2">€520</div>
              <p className="text-purple-700 text-sm">Hoteles 4-5* + experiencias premium</p>
            </div>
          </div>
        </div>

        {/* Best Time */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">🌤️ Mejor época para viajar</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 text-center">
              <h3 className="font-semibold text-orange-800 mb-2">🌸 Época Ideal</h3>
              <p className="text-orange-700 text-sm">Abril - Junio y Septiembre - Octubre</p>
            </div>
            
            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 text-center">
              <h3 className="font-semibold text-emerald-800 mb-2">❄️ Recomendado</h3>
              <p className="text-emerald-700 text-sm">Noviembre - Marzo (mercados navideños)</p>
            </div>
          </div>
        </div>

        {/* Essential Tools */}
        <div className="bg-gradient-to-r from-sky-50 to-emerald-50 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">🛠️ Herramientas esenciales</h2>
          
          <div className="space-y-6">
            {/* Revolut */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 text-lg mb-2">💜 Revolut</h3>
                  <p className="text-gray-700 text-sm mb-2">
                    Tarjeta sin comisiones para viajar. Retiros gratis hasta 200€/mes y cambio de divisa al tipo real.
                  </p>
                  <div className="flex items-center text-xs text-gray-600">
                    <CheckCircle className="h-3 w-3 text-emerald-500 mr-1" />
                    <span>Sin comisiones por pagar en forints</span>
                  </div>
                </div>
                <a
                  href="https://revolut.com/referral/?referral-code=antoni22jf!AUG1-25-AR-CL1H-CRY&geo-redirect"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-sky-500 to-emerald-500 hover:from-sky-600 hover:to-emerald-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 text-sm ml-4"
                >
                  Conseguir Revolut
                </a>
              </div>
            </div>

            {/* IATI */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 text-lg mb-2">🛡️ IATI Seguros</h3>
                  <p className="text-gray-700 text-sm mb-2">
                    Seguro de viaje con cobertura médica completa. Atención 24/7 en español.
                  </p>
                  <div className="flex items-center text-xs text-gray-600">
                    <CheckCircle className="h-3 w-3 text-emerald-500 mr-1" />
                    <span>Descuentos exclusivos</span>
                  </div>
                </div>
                <a
                  href="https://www.iatiseguros.com?r=37344279073491"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 text-sm ml-4"
                >
                  Conseguir IATI
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Conclusion */}
        <div className="bg-gradient-to-r from-sky-50 to-emerald-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Mi conclusión</h2>
          <p className="text-lg text-gray-700 mb-4">
            <strong>Budapest es una ciudad que te sorprende en cada esquina.</strong> Con esta guía de 4 días 
            podrás ver lo esencial sin prisas, disfrutar de sus famosos balnearios y vivir la auténtica cultura húngara.
          </p>
          <p className="text-lg text-gray-700 mb-0">
            <strong>¿Tienes alguna pregunta sobre Budapest?</strong> Escríbeme y te ayudo a planificar tu viaje perfecto.
          </p>
        </div>
      </div>
    </article>
  );
};

export default BudapestGuideArticle;