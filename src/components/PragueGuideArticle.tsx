import { ArrowLeft, Share2, MapPin, Clock, Euro, Star, CheckCircle, Calendar, Camera, Utensils, Building, TreePine } from 'lucide-react';
import RelatedArticles from './RelatedArticles';

interface PragueGuideArticleProps {
  onBack: () => void;
}

const PragueGuideArticle: React.FC<PragueGuideArticleProps> = ({ onBack }) => {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-24">
      {/* Header del artículo */}
      <div className="mb-8">
        <button 
          onClick={onBack}
          className="inline-flex items-center text-sky-600 hover:text-sky-700 hover:bg-sky-50 px-3 py-2 rounded-lg transition-all duration-200 font-medium border border-sky-200 hover:border-sky-300 mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Volver a Guías
        </button>
        
        <div className="mb-6">
          <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            Guía Completa
          </span>
        </div>
        
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Praga en 3 Días: Guía Completa con Itinerario y Presupuesto
        </h1>

        <div className="flex items-center justify-between text-gray-600 text-sm mb-8">
          <div className="flex items-center space-x-4">
            <span className="flex items-center bg-gray-100 px-2 py-1 rounded-full">
              <Clock className="h-3 w-3 mr-1" />
              15 min lectura
            </span>
            <span className="flex items-center bg-gray-100 px-2 py-1 rounded-full">
              <Calendar className="h-3 w-3 mr-1" />
              Actualizado Dic 2024
            </span>
          </div>
          
          <button 
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: 'Praga en 3 Días: Guía Completa con Itinerario y Presupuesto',
                  text: 'Descubre Praga con esta guía completa',
                  url: window.location.href,
                })
                .catch((error) => console.log('Error sharing', error));
              } else {
                navigator.clipboard.writeText(window.location.href).then(() => {
                  alert('¡Enlace copiado al portapapeles!');
                }).catch(() => {
                  window.open(`https://twitter.com/intent/tweet?text=Praga en 3 Días: Guía Completa&url=${encodeURIComponent(window.location.href)}`, '_blank');
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
          src="https://images.unsplash.com/photo-1541849546-216549ae216d?auto=format&fit=crop&w=1200&q=80"
          alt="Vista panorámica del casco histórico de Praga con el Castillo y el río Moldava"
          className="w-full h-64 sm:h-80 object-cover rounded-2xl shadow-lg"
        />
      </div>

      {/* Resumen rápido */}
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">📋 Resumen de la guía</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">🎯 Lo esencial</h3>
            <ul className="text-gray-700 text-sm space-y-1">
              <li>• <strong>Duración:</strong> 3 días completos</li>
              <li>• <strong>Presupuesto:</strong> 60-80€/día</li>
              <li>• <strong>Mejor época:</strong> Abril-Octubre</li>
              <li>• <strong>Moneda:</strong> Corona checa (CZK)</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">✨ Highlights</h3>
            <ul className="text-gray-700 text-sm space-y-1">
              <li>• Castillo de Praga y Catedral</li>
              <li>• Plaza de la Ciudad Vieja</li>
              <li>• Puente de Carlos</li>
              <li>• Cerveza más barata de Europa</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Contenido del artículo */}
      <div className="prose prose-lg max-w-none">
        
        {/* Introducción */}
        <div className="bg-gradient-to-r from-sky-50 to-emerald-50 rounded-2xl p-8 mb-12">
          <p className="text-lg text-gray-700 leading-relaxed mb-0">
            <strong>Praga es una de esas ciudades que te enamoran desde el primer momento.</strong> Sus calles empedradas, 
            arquitectura de cuento y cerveza increíblemente barata la convierten en el destino perfecto para una escapada 
            de 3 días. Además, es una de las capitales europeas más económicas.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4 mb-0">
            En esta guía te cuento exactamente cómo aprovechar al máximo 3 días en Praga, cuánto te va a costar, 
            dónde alojarte y mis restaurantes favoritos. Todo basado en mi experiencia real visitando la ciudad 
            varias veces.
          </p>
        </div>

        {/* Día 1 */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">1</span>
            Día 1: Casco Histórico y Plaza de la Ciudad Vieja
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-sky-50 border border-sky-200 rounded-lg p-4">
              <h3 className="font-semibold text-sky-800 mb-2">🕘 Horario recomendado</h3>
              <ul className="text-sky-700 text-sm space-y-1">
                <li>• <strong>9:00-11:00:</strong> Plaza de la Ciudad Vieja</li>
                <li>• <strong>11:00-12:30:</strong> Reloj Astronómico</li>
                <li>• <strong>14:00-16:00:</strong> Barrio Judío</li>
                <li>• <strong>16:30-18:00:</strong> Puente de Carlos</li>
                <li>• <strong>19:00:</strong> Cena tradicional</li>
              </ul>
            </div>
            
            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
              <h3 className="font-semibold text-emerald-800 mb-2">💰 Presupuesto del día</h3>
              <ul className="text-emerald-700 text-sm space-y-1">
                <li>• <strong>Entradas:</strong> 15-20€</li>
                <li>• <strong>Comidas:</strong> 25-30€</li>
                <li>• <strong>Transporte:</strong> 5€</li>
                <li>• <strong>Total:</strong> 45-55€</li>
              </ul>
            </div>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-3">🏛️ Qué ver y hacer</h3>
          
          <div className="space-y-4 mb-6">
            <div className="border-l-4 border-amber-500 pl-4">
              <h4 className="font-semibold text-gray-900">Plaza de la Ciudad Vieja (Staroměstské náměstí)</h4>
              <p className="text-gray-600 text-sm">El corazón de Praga. Llega temprano para evitar multitudes y conseguir las mejores fotos.</p>
            </div>
            
            <div className="border-l-4 border-amber-500 pl-4">
              <h4 className="font-semibold text-gray-900">Reloj Astronómico</h4>
              <p className="text-gray-600 text-sm">Cada hora en punto hay un espectáculo. Vale la pena subir a la torre para las vistas (250 CZK).</p>
            </div>
            
            <div className="border-l-4 border-amber-500 pl-4">
              <h4 className="font-semibold text-gray-900">Barrio Judío (Josefov)</h4>
              <p className="text-gray-600 text-sm">Historia fascinante. La entrada combinada a todas las sinagogas cuesta 350 CZK.</p>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <h3 className="font-semibold text-amber-800 mb-2">🍺 Dónde comer</h3>
            <ul className="text-amber-700 text-sm space-y-1">
              <li>• <strong>U Fleků:</strong> Cervecería histórica (desde 1499)</li>
              <li>• <strong>Lokál:</strong> Comida checa auténtica y barata</li>
              <li>• <strong>Café Savoy:</strong> Para un desayuno elegante</li>
            </ul>
          </div>
        </div>

        {/* Día 2 */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">2</span>
            Día 2: Castillo de Praga y Malá Strana
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-sky-50 border border-sky-200 rounded-lg p-4">
              <h3 className="font-semibold text-sky-800 mb-2">🕘 Horario recomendado</h3>
              <ul className="text-sky-700 text-sm space-y-1">
                <li>• <strong>9:00-12:00:</strong> Castillo de Praga</li>
                <li>• <strong>12:30-14:00:</strong> Almuerzo en Malá Strana</li>
                <li>• <strong>14:30-16:00:</strong> Jardines del Castillo</li>
                <li>• <strong>16:30-18:00:</strong> Isla Kampa</li>
                <li>• <strong>19:00:</strong> Cena con vistas</li>
              </ul>
            </div>
            
            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
              <h3 className="font-semibold text-emerald-800 mb-2">💰 Presupuesto del día</h3>
              <ul className="text-emerald-700 text-sm space-y-1">
                <li>• <strong>Castillo:</strong> 250-350 CZK</li>
                <li>• <strong>Comidas:</strong> 600-800 CZK</li>
                <li>• <strong>Transporte:</strong> 120 CZK</li>
                <li>• <strong>Total:</strong> ~40-50€</li>
              </ul>
            </div>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-3">🏰 Qué ver y hacer</h3>
          
          <div className="space-y-4 mb-6">
            <div className="border-l-4 border-amber-500 pl-4">
              <h4 className="font-semibold text-gray-900">Castillo de Praga</h4>
              <p className="text-gray-600 text-sm">El castillo más grande del mundo. Compra la entrada online para evitar colas. La Catedral de San Vito es impresionante.</p>
            </div>
            
            <div className="border-l-4 border-amber-500 pl-4">
              <h4 className="font-semibold text-gray-900">Callejón del Oro</h4>
              <p className="text-gray-600 text-sm">Casitas de colores donde vivían los orfebres. Kafka vivió en el número 22.</p>
            </div>
            
            <div className="border-l-4 border-amber-500 pl-4">
              <h4 className="font-semibold text-gray-900">Malá Strana (Barrio Pequeño)</h4>
              <p className="text-gray-600 text-sm">Barrio barroco con palacios y jardines. Perfecto para pasear y tomar fotos.</p>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <h3 className="font-semibold text-amber-800 mb-2">🍽️ Dónde comer</h3>
            <ul className="text-amber-700 text-sm space-y-1">
              <li>• <strong>Café Louvre:</strong> Histórico, frecuentado por Einstein</li>
              <li>• <strong>U Modré Kachničky:</strong> Pato asado tradicional</li>
              <li>• <strong>Kampa Park:</strong> Restaurante con vistas al río</li>
            </ul>
          </div>
        </div>

        {/* Día 3 */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">3</span>
            Día 3: Vyšehrad y Exploración Libre
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-sky-50 border border-sky-200 rounded-lg p-4">
              <h3 className="font-semibold text-sky-800 mb-2">🕘 Horario recomendado</h3>
              <ul className="text-sky-700 text-sm space-y-1">
                <li>• <strong>9:00-11:30:</strong> Fortaleza Vyšehrad</li>
                <li>• <strong>12:00-14:00:</strong> Mercado de Havelské</li>
                <li>• <strong>14:30-16:30:</strong> Wenceslas Square</li>
                <li>• <strong>17:00-19:00:</strong> Exploración libre</li>
                <li>• <strong>19:30:</strong> Cena de despedida</li>
              </ul>
            </div>
            
            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
              <h3 className="font-semibold text-emerald-800 mb-2">💰 Presupuesto del día</h3>
              <ul className="text-emerald-700 text-sm space-y-1">
                <li>• <strong>Entradas:</strong> 100-150 CZK</li>
                <li>• <strong>Comidas:</strong> 500-700 CZK</li>
                <li>• <strong>Souvenirs:</strong> 200-400 CZK</li>
                <li>• <strong>Total:</strong> ~35-45€</li>
              </ul>
            </div>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-3">🌳 Qué ver y hacer</h3>
          
          <div className="space-y-4 mb-6">
            <div className="border-l-4 border-amber-500 pl-4">
              <h4 className="font-semibold text-gray-900">Fortaleza Vyšehrad</h4>
              <p className="text-gray-600 text-sm">Menos turística que el Castillo, con vistas increíbles de la ciudad. El cementerio es muy bonito.</p>
            </div>
            
            <div className="border-l-4 border-amber-500 pl-4">
              <h4 className="font-semibold text-gray-900">Plaza Wenceslao</h4>
              <p className="text-gray-600 text-sm">Centro comercial y cultural. Perfecto para compras y sentir el pulso moderno de Praga.</p>
            </div>
            
            <div className="border-l-4 border-amber-500 pl-4">
              <h4 className="font-semibold text-gray-900">Exploración libre</h4>
              <p className="text-gray-600 text-sm">Piérdete por las calles, descubre cafés escondidos y disfruta del ambiente único de Praga.</p>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <h3 className="font-semibold text-amber-800 mb-2">🛍️ Souvenirs típicos</h3>
            <ul className="text-amber-700 text-sm space-y-1">
              <li>• <strong>Cristal de Bohemia:</strong> Famoso mundialmente</li>
              <li>• <strong>Marionetas:</strong> Tradición checa centenaria</li>
              <li>• <strong>Cerveza local:</strong> Para llevar a casa</li>
            </ul>
          </div>
        </div>

        {/* Información práctica */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">📋 Información práctica</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <Building className="h-5 w-5 text-sky-500 mr-2" />
                Dónde alojarse
              </h3>
              <div className="space-y-3">
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h4 className="font-semibold text-gray-900 text-sm">🏨 Hotel Golden Key</h4>
                  <p className="text-gray-600 text-xs">Malá Strana • Desde 80€/noche</p>
                  <a href="https://www.booking.com/" target="_blank" rel="noopener noreferrer" className="text-sky-600 text-xs hover:underline">Ver en Booking →</a>
                </div>
                
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h4 className="font-semibold text-gray-900 text-sm">🛏️ Hostel One Home</h4>
                  <p className="text-gray-600 text-xs">Centro • Desde 25€/noche</p>
                  <a href="https://www.hostelworld.com/" target="_blank" rel="noopener noreferrer" className="text-sky-600 text-xs hover:underline">Ver en Hostelworld →</a>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <Utensils className="h-5 w-5 text-emerald-500 mr-2" />
                Restaurantes recomendados
              </h3>
              <div className="space-y-3">
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h4 className="font-semibold text-gray-900 text-sm">🍖 Lokál Dlouhááá</h4>
                  <p className="text-gray-600 text-xs">Comida checa tradicional • 15-20€</p>
                </div>
                
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h4 className="font-semibold text-gray-900 text-sm">🍺 U Fleků</h4>
                  <p className="text-gray-600 text-xs">Cervecería histórica • 10-15€</p>
                </div>
                
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h4 className="font-semibold text-gray-900 text-sm">☕ Café Savoy</h4>
                  <p className="text-gray-600 text-xs">Desayunos elegantes • 8-12€</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Consejos prácticos */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">💡 Consejos prácticos para Praga</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">💳 Dinero y pagos</h3>
              <ul className="text-gray-700 text-sm space-y-2">
                <li>• Usa coronas checas (CZK), no euros</li>
                <li>• 1€ ≈ 25 CZK aproximadamente</li>
                <li>• Muchos sitios aceptan tarjeta</li>
                <li>• Evita cambiar en el aeropuerto</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">🚇 Transporte</h3>
              <ul className="text-gray-700 text-sm space-y-2">
                <li>• Ticket de 3 días: 310 CZK (~12€)</li>
                <li>• Metro, tranvía y bus incluidos</li>
                <li>• El centro se recorre andando</li>
                <li>• Taxis: usa Uber o Bolt</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <h3 className="font-semibold text-yellow-800 mb-2">⚠️ Cuidado con</h3>
            <ul className="text-yellow-700 text-sm space-y-1">
              <li>• Casas de cambio turísticas (comisiones altas)</li>
              <li>• Restaurantes en zonas súper turísticas</li>
              <li>• Carteristas en transporte público</li>
              <li>• Precios en euros (siempre más caros)</li>
            </ul>
          </div>
        </div>

        {/* Presupuesto total */}
        <div className="bg-gradient-to-r from-emerald-50 to-sky-50 rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">💰 Presupuesto total para 3 días</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <h3 className="font-bold text-emerald-600 text-xl mb-2">Mochilero</h3>
              <div className="text-3xl font-bold text-gray-900 mb-2">150€</div>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Hostel compartido</li>
                <li>• Comida local barata</li>
                <li>• Transporte público</li>
                <li>• Entradas básicas</li>
              </ul>
            </div>
            
            <div className="text-center bg-white rounded-lg p-4 border-2 border-emerald-500">
              <h3 className="font-bold text-emerald-600 text-xl mb-2">Recomendado</h3>
              <div className="text-3xl font-bold text-gray-900 mb-2">220€</div>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Hotel 3-4 estrellas</li>
                <li>• Mezcla restaurantes</li>
                <li>• Todas las entradas</li>
                <li>• Algún capricho</li>
              </ul>
            </div>
            
            <div className="text-center">
              <h3 className="font-bold text-emerald-600 text-xl mb-2">Confort</h3>
              <div className="text-3xl font-bold text-gray-900 mb-2">350€</div>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Hotel boutique</li>
                <li>• Restaurantes top</li>
                <li>• Tours privados</li>
                <li>• Sin límites</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-gray-600 text-sm">
              <strong>Nota:</strong> Precios por persona, no incluyen vuelos. Basado en precios de 2024.
            </p>
          </div>
        </div>

        {/* Enlaces de reserva */}
        <div className="bg-gradient-to-r from-sky-500 to-emerald-500 rounded-2xl p-8 text-center text-white mb-8">
          <h3 className="text-2xl font-bold mb-4">🎯 Reserva tu viaje a Praga</h3>
          <p className="text-lg mb-6 opacity-90">
            Enlaces directos para conseguir los mejores precios
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <a 
              href="https://kiwi.tpk.lv/z2gZyZ3E"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-sky-500 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors inline-block"
            >
              ✈️ Buscar Vuelos Baratos
            </a>
            <a 
              href="https://www.booking.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-emerald-500 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors inline-block"
            >
              🏨 Reservar Alojamiento
            </a>
          </div>
          
          <div className="mt-4">
            <a 
              href="https://www.iatiseguros.com?r=37344279073491"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-sky-500 transition-colors inline-block"
            >
              🛡️ Seguro de Viaje (5% descuento)
            </a>
          </div>
        </div>

        {/* Conclusión */}
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Mi conclusión sobre Praga</h2>
          <p className="text-lg text-gray-700 mb-4">
            <strong>Praga es una ciudad que te sorprende en cada esquina.</strong> Es perfecta para un viaje de 3 días 
            porque puedes ver lo esencial sin prisas, la comida es deliciosa y barata, y la cerveza... bueno, 
            la cerveza es legendaria.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Lo que más me gusta es que puedes disfrutar de una capital europea increíble sin gastar una fortuna. 
            Con 60-80€ al día vives como un rey, y si ajustas el presupuesto, puedes hacerlo con mucho menos.
          </p>
          <p className="text-lg text-gray-700 mb-0">
            <strong>¿Has estado en Praga? ¿Qué te pareció?</strong> Cuéntamelo en comentarios o escríbeme por email. 
            Me encanta conocer las experiencias de otros viajeros en esta ciudad tan especial.
          </p>
        </div>
      </div>
      
      {/* Artículos relacionados */}
      <RelatedArticles currentCategory="Guías" currentArticleId="praga-3-dias" />
    </article>
  );
};

export default PragueGuideArticle;