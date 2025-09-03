import { ArrowLeft, Share2, MapPin, Clock, Euro, Star, Calendar, Users, Camera, Utensils, Train, Plane, Hotel, Coffee, Space as Spa, Castle, Church, Building, Mountain, Waves, Sun, Moon, Heart, Gift, CheckCircle, AlertTriangle, Info, ExternalLink } from 'lucide-react';
import RelatedArticles from './RelatedArticles';

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
          <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            🔥 Guía Completa
          </span>
        </div>
        
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Budapest en 4 Días: Guía Completa con Itinerario y Presupuesto Real
        </h1>

        <div className="flex items-center justify-end text-gray-600 text-sm space-x-6 mb-8">
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
      <div className="mb-12">
        <img
          src="https://images.unsplash.com/photo-1541849546-216549ae216d?auto=format&fit=crop&w=1200&q=80"
          alt="Vista panorámica del Parlamento de Budapest al atardecer con el río Danubio"
          className="w-full h-64 sm:h-80 object-cover rounded-2xl shadow-lg"
        />
      </div>

      {/* Resumen ejecutivo */}
      <div className="bg-gradient-to-r from-orange-50 via-red-50 to-pink-50 rounded-2xl p-8 mb-12 border-2 border-orange-300">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
          <Gift className="h-6 w-6 text-orange-500 mr-3" />
          ✨ Resumen de tu viaje a Budapest
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="space-y-3">
            <div className="flex items-center">
              <Calendar className="h-5 w-5 text-sky-500 mr-3" />
              <span className="font-semibold text-gray-900">Duración:</span>
              <span className="ml-2 text-gray-700">4 días completos</span>
            </div>
            <div className="flex items-center">
              <Euro className="h-5 w-5 text-emerald-500 mr-3" />
              <span className="font-semibold text-gray-900">Presupuesto:</span>
              <span className="ml-2 text-gray-700">70-120€/día</span>
            </div>
            <div className="flex items-center">
              <Users className="h-5 w-5 text-purple-500 mr-3" />
              <span className="font-semibold text-gray-900">Ideal para:</span>
              <span className="ml-2 text-gray-700">Parejas, amigos, familias</span>
            </div>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center">
              <Star className="h-5 w-5 text-orange-500 mr-3" />
              <span className="font-semibold text-gray-900">Mejor época:</span>
              <span className="ml-2 text-gray-700">Abril-Octubre</span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-5 w-5 text-red-500 mr-3" />
              <span className="font-semibold text-gray-900">Ubicación:</span>
              <span className="ml-2 text-gray-700">Hungría, Europa Central</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-5 w-5 text-blue-500 mr-3" />
              <span className="font-semibold text-gray-900">Zona horaria:</span>
              <span className="ml-2 text-gray-700">CET (GMT+1)</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-4 border border-orange-200">
          <h3 className="font-bold text-gray-900 mb-2">🎯 Lo que vas a descubrir:</h3>
          <div className="grid md:grid-cols-2 gap-2 text-sm text-gray-700">
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-emerald-500 mr-2" />
              <span>Parlamento y crucero nocturno</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-emerald-500 mr-2" />
              <span>Castillo de Buda y Bastión</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-emerald-500 mr-2" />
              <span>Balnearios Széchenyi</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-emerald-500 mr-2" />
              <span>Mercado Central y gastronomía</span>
            </div>
          </div>
        </div>
      </div>

      {/* Presupuesto detallado */}
      <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <Euro className="h-6 w-6 text-emerald-500 mr-3" />
          💰 Presupuesto Real Detallado
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
            <h3 className="font-bold text-green-800 mb-2">🎒 Mochilero</h3>
            <div className="text-2xl font-bold text-green-600 mb-2">70€/día</div>
            <ul className="text-green-700 text-sm space-y-1">
              <li>• Hostel: 15€/noche</li>
              <li>• Comida: 25€/día</li>
              <li>• Transporte: 8€/día</li>
              <li>• Atracciones: 22€/día</li>
            </ul>
          </div>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
            <h3 className="font-bold text-blue-800 mb-2">🏨 Cómodo</h3>
            <div className="text-2xl font-bold text-blue-600 mb-2">95€/día</div>
            <ul className="text-blue-700 text-sm space-y-1">
              <li>• Hotel 3*: 35€/noche</li>
              <li>• Comida: 35€/día</li>
              <li>• Transporte: 10€/día</li>
              <li>• Atracciones: 15€/día</li>
            </ul>
          </div>
          
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 text-center">
            <h3 className="font-bold text-purple-800 mb-2">✨ Lujo</h3>
            <div className="text-2xl font-bold text-purple-600 mb-2">120€/día</div>
            <ul className="text-purple-700 text-sm space-y-1">
              <li>• Hotel 4-5*: 60€/noche</li>
              <li>• Comida: 45€/día</li>
              <li>• Transporte: 15€/día</li>
              <li>• Extras: 20€/día</li>
            </ul>
          </div>
        </div>

        <div className="bg-sky-50 border border-sky-200 rounded-lg p-4">
          <h3 className="font-semibold text-sky-800 mb-2">💡 Consejos para ahorrar:</h3>
          <ul className="text-sky-700 text-sm space-y-1">
            <li>• Compra la Budapest Card para transporte y descuentos</li>
            <li>• Come en mercados locales y restaurantes fuera del centro</li>
            <li>• Muchas atracciones son gratuitas (puentes, miradores, parques)</li>
            <li>• Los balnearios públicos son más baratos que los privados</li>
          </ul>
        </div>
      </div>

      {/* Itinerario día por día */}
      <div className="space-y-12 mb-12">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
          🗓️ Itinerario Día por Día
        </h2>

        {/* DÍA 1 */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <span className="bg-gradient-to-r from-sky-500 to-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold mr-4">1</span>
            🏛️ Día 1: Poder Imperial y Herencia Cultural
          </h3>
          
          <div className="bg-sky-50 border border-sky-200 rounded-lg p-4 mb-6">
            <h4 className="font-semibold text-sky-800 mb-2">📍 Ruta del día: Parlamento + Recorrido histórico + Sinagoga + Basílica</h4>
            <div className="flex items-center text-sky-700 text-sm">
              <Clock className="h-4 w-4 mr-2" />
              <span>Duración: 8-10 horas</span>
              <Euro className="h-4 w-4 ml-4 mr-2" />
              <span>Coste aprox.: 45-65€</span>
            </div>
          </div>

          <div className="space-y-6">
            <div className="border-l-4 border-orange-500 pl-4">
              <h4 className="font-bold text-gray-900 flex items-center mb-2">
                <Sun className="h-5 w-5 text-orange-500 mr-2" />
                9:00 - Parlamento Húngaro (Visita guiada)
              </h4>
              <p className="text-gray-700 mb-2">
                Comienza tu aventura en el edificio más icónico de Budapest. La visita guiada te llevará por las salas más espectaculares, incluyendo la Sala de la Cúpula donde se exhibe la Corona de San Esteban.
              </p>
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-3 text-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-orange-800">💰 Precio: 18€ (reserva online)</span>
                  <span className="text-orange-700">⏱️ 50 min</span>
                </div>
                <p className="text-orange-700 mb-2">
                  <strong>💡 Consejo:</strong> Reserva con antelación, se agota rápido. La visita en español está disponible varias veces al día.
                </p>
                <a 
                  href="https://jegyek.parlament.hu/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium"
                >
                  🎫 Reservar entradas
                  <ExternalLink className="h-3 w-3 ml-1" />
                </a>
              </div>
            </div>

            <div className="border-l-4 border-emerald-500 pl-4">
              <h4 className="font-bold text-gray-900 flex items-center mb-2">
                <Coffee className="h-5 w-5 text-emerald-500 mr-2" />
                11:00 - Café Gerbeaud (Descanso imperial)
              </h4>
              <p className="text-gray-700 mb-2">
                Después del Parlamento, date un capricho en el café más elegante de Budapest. Fundado en 1858, es una institución. Perfecto para recargar energías con un café vienés auténtico.
              </p>
              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-3 text-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-emerald-800">💰 Precio: 8-12€</span>
                  <span className="text-emerald-700">⏱️ 30 min</span>
                </div>
                <p className="text-emerald-700">
                  <strong>🍰 Recomendación:</strong> Prueba el Dobos torte, es su especialidad desde hace más de 150 años.
                </p>
              </div>
            </div>

            <div className="border-l-4 border-purple-500 pl-4">
              <h4 className="font-bold text-gray-900 flex items-center mb-2">
                <Church className="h-5 w-5 text-purple-500 mr-2" />
                12:00 - Gran Sinagoga (La más grande de Europa)
              </h4>
              <p className="text-gray-700 mb-2">
                La sinagoga más grande de Europa y segunda del mundo. Su arquitectura morisca es impresionante y el museo judío anexo cuenta la historia de la comunidad judía húngara de manera muy emotiva.
              </p>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-3 text-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-purple-800">💰 Precio: 12€</span>
                  <span className="text-purple-700">⏱️ 1.5 horas</span>
                </div>
                <p className="text-purple-700">
                  <strong>📱 Tip:</strong> Incluye audioguía en español. El jardín memorial es muy emotivo, tómate tu tiempo.
                </p>
              </div>
            </div>

            <div className="border-l-4 border-red-500 pl-4">
              <h4 className="font-bold text-gray-900 flex items-center mb-2">
                <Utensils className="h-5 w-5 text-red-500 mr-2" />
                14:30 - Almuerzo en Frici Papa (Comida húngara auténtica)
              </h4>
              <p className="text-gray-700 mb-2">
                Restaurante local donde comen los húngaros de verdad. Goulash auténtico, schnitzel gigante y precios que no te creerás. Ambiente familiar y porciones enormes.
              </p>
              <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-red-800">💰 Precio: 12-18€</span>
                  <span className="text-red-700">⏱️ 1 hora</span>
                </div>
                <p className="text-red-700">
                  <strong>🍲 Imprescindible:</strong> Goulash tradicional (8€) y schnitzel húngaro (12€). Las porciones son para dos personas.
                </p>
              </div>
            </div>

            <div className="border-l-4 border-yellow-500 pl-4">
              <h4 className="font-bold text-gray-900 flex items-center mb-2">
                <Building className="h-5 w-5 text-yellow-500 mr-2" />
                16:00 - Basílica de San Esteban + Cúpula
              </h4>
              <p className="text-gray-700 mb-2">
                La basílica más importante de Hungría. Sube a la cúpula para tener las mejores vistas de Budapest. En días claros puedes ver hasta 30 km de distancia.
              </p>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 text-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-yellow-800">💰 Precio: 8€ (cúpula)</span>
                  <span className="text-yellow-700">⏱️ 1.5 horas</span>
                </div>
                <p className="text-yellow-700">
                  <strong>📸 Foto perfecta:</strong> Atardecer desde la cúpula (18:00-19:00). Lleva chaqueta, hace viento arriba.
                </p>
              </div>
            </div>

            <div className="border-l-4 border-indigo-500 pl-4">
              <h4 className="font-bold text-gray-900 flex items-center mb-2">
                <Moon className="h-5 w-5 text-indigo-500 mr-2" />
                19:30 - Cena en Pest-Buda Bistro
              </h4>
              <p className="text-gray-700 mb-2">
                Termina el día con una cena elegante pero asequible. Cocina húngara moderna con toque internacional. Perfecto para celebrar tu primer día en Budapest.
              </p>
              <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-3 text-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-indigo-800">💰 Precio: 25-35€</span>
                  <span className="text-indigo-700">⏱️ 1.5 horas</span>
                </div>
                <p className="text-indigo-700">
                  <strong>🍷 Recomendación:</strong> Prueba los vinos húngaros, son excelentes y baratos (5-8€ copa).
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* DÍA 2 */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <span className="bg-gradient-to-r from-emerald-500 to-green-500 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold mr-4">2</span>
            🏰 Día 2: Realeza Medieval y Romance Danubiano
          </h3>
          
          <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 mb-6">
            <h4 className="font-semibold text-emerald-800 mb-2">📍 Ruta del día: Castillo + Bastión Pescadores + Crucero nocturno</h4>
            <div className="flex items-center text-emerald-700 text-sm">
              <Clock className="h-4 w-4 mr-2" />
              <span>Duración: 9-11 horas</span>
              <Euro className="h-4 w-4 ml-4 mr-2" />
              <span>Coste aprox.: 55-75€</span>
            </div>
          </div>

          <div className="space-y-6">
            <div className="border-l-4 border-orange-500 pl-4">
              <h4 className="font-bold text-gray-900 flex items-center mb-2">
                <Castle className="h-5 w-5 text-orange-500 mr-2" />
                9:30 - Castillo de Buda + Galería Nacional
              </h4>
              <p className="text-gray-700 mb-2">
                El complejo del castillo es enorme y alberga varios museos. La Galería Nacional Húngara tiene una colección impresionante de arte local. Las vistas desde las terrazas son espectaculares.
              </p>
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-3 text-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-orange-800">💰 Precio: 15€ (galería)</span>
                  <span className="text-orange-700">⏱️ 2.5 horas</span>
                </div>
                <p className="text-orange-700">
                  <strong>🚡 Transporte:</strong> Sube en funicular (4€) o camina por las escaleras (gratis, 15 min).
                </p>
              </div>
            </div>

            <div className="border-l-4 border-pink-500 pl-4">
              <h4 className="font-bold text-gray-900 flex items-center mb-2">
                <Camera className="h-5 w-5 text-pink-500 mr-2" />
                12:30 - Bastión de los Pescadores (Postal perfecta)
              </h4>
              <p className="text-gray-700 mb-2">
                El lugar más fotografiado de Budapest. Sus torres de cuento de hadas y vistas panorámicas del Danubio son impresionantes. La entrada a las torres superiores es de pago, pero las vistas desde abajo son gratis.
              </p>
              <div className="bg-pink-50 border border-pink-200 rounded-lg p-3 text-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-pink-800">💰 Precio: 5€ (torres)</span>
                  <span className="text-pink-700">⏱️ 1 hora</span>
                </div>
                <p className="text-pink-700">
                  <strong>📸 Mejor momento:</strong> Mañana temprano (menos gente) o atardecer (luz dorada).
                </p>
              </div>
            </div>

            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="font-bold text-gray-900 flex items-center mb-2">
                <Utensils className="h-5 w-5 text-green-500 mr-2" />
                14:00 - Almuerzo en Ruszwurm (Pastelería histórica)
              </h4>
              <p className="text-gray-700 mb-2">
                La pastelería más antigua de Budapest (1827). Pequeñita pero con un encanto increíble. Sus pasteles son obras de arte y los precios muy razonables para la calidad.
              </p>
              <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-green-800">💰 Precio: 6-10€</span>
                  <span className="text-green-700">⏱️ 45 min</span>
                </div>
                <p className="text-green-700">
                  <strong>🍰 Especialidad:</strong> Retes (strudel húngaro) y Dobos torte. Café vienés auténtico.
                </p>
              </div>
            </div>

            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-bold text-gray-900 flex items-center mb-2">
                <Waves className="h-5 w-5 text-blue-500 mr-2" />
                20:00 - Crucero nocturno por el Danubio
              </h4>
              <p className="text-gray-700 mb-2">
                La experiencia más romántica de Budapest. Ver la ciudad iluminada desde el río es mágico. El Parlamento iluminado es una de las vistas más bonitas de Europa.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-blue-800">💰 Precio: 15-25€</span>
                  <span className="text-blue-700">⏱️ 1 hora</span>
                </div>
                <p className="text-blue-700">
                  <strong>🌙 Mejor horario:</strong> 20:00-21:00 (ciudad completamente iluminada). Lleva chaqueta.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* DÍA 3 */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold mr-4">3</span>
            ♨️ Día 3: Aguas Milenarias y Esplendor Imperial
          </h3>
          
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-6">
            <h4 className="font-semibold text-purple-800 mb-2">📍 Ruta del día: Balnearios Széchenyi + Plaza Héroes + Andrássy + New York Café</h4>
            <div className="flex items-center text-purple-700 text-sm">
              <Clock className="h-4 w-4 mr-2" />
              <span>Duración: 8-10 horas</span>
              <Euro className="h-4 w-4 ml-4 mr-2" />
              <span>Coste aprox.: 40-60€</span>
            </div>
          </div>

          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-bold text-gray-900 flex items-center mb-2">
                <Spa className="h-5 w-5 text-blue-500 mr-2" />
                9:00 - Balnearios Széchenyi (Experiencia única)
              </h4>
              <p className="text-gray-700 mb-2">
                Los balnearios más famosos de Budapest. 18 piscinas de diferentes temperaturas, saunas, y la experiencia de ver a locales jugando al ajedrez en el agua caliente. Es algo que tienes que vivir.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-blue-800">💰 Precio: 22€ (día completo)</span>
                  <span className="text-blue-700">⏱️ 3-4 horas</span>
                </div>
                <p className="text-blue-700 mb-2">
                  <strong>🏊‍♂️ Qué llevar:</strong> Bañador, chanclas, toalla (alquiler 5€), gorro de baño obligatorio (2€).
                </p>
                <p className="text-blue-700">
                  <strong>💡 Consejo:</strong> Ve temprano (9:00) para evitar multitudes. Los vestuarios son laberínticos, apunta tu número.
                </p>
              </div>
            </div>

            <div className="border-l-4 border-yellow-500 pl-4">
              <h4 className="font-bold text-gray-900 flex items-center mb-2">
                <Star className="h-5 w-5 text-yellow-500 mr-2" />
                14:00 - Plaza de los Héroes + Parque de la Ciudad
              </h4>
              <p className="text-gray-700 mb-2">
                Monumento impresionante que celebra la historia húngara. Perfecto para fotos y para entender la historia del país. El parque anexo es ideal para pasear y relajarse.
              </p>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 text-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-yellow-800">💰 Precio: Gratis</span>
                  <span className="text-yellow-700">⏱️ 45 min</span>
                </div>
                <p className="text-yellow-700">
                  <strong>🎭 Extra:</strong> Museo de Bellas Artes cerca (12€) si te gusta el arte clásico.
                </p>
              </div>
            </div>

            <div className="border-l-4 border-indigo-500 pl-4">
              <h4 className="font-bold text-gray-900 flex items-center mb-2">
                <Coffee className="h-5 w-5 text-indigo-500 mr-2" />
                17:00 - New York Café (El café más bonito del mundo)
              </h4>
              <p className="text-gray-700 mb-2">
                Considerado el café más bello del mundo. Decoración dorada espectacular, techos pintados a mano, y ambiente de película. Es caro pero vale la pena para la experiencia.
              </p>
              <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-3 text-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-indigo-800">💰 Precio: 15-25€</span>
                  <span className="text-indigo-700">⏱️ 1 hora</span>
                </div>
                <p className="text-indigo-700">
                  <strong>☕ Estrategia:</strong> Pide solo café y pastel, no comida completa. La experiencia está en el ambiente.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* DÍA 4 */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold mr-4">4</span>
            🛍️ Día 4: Autenticidad Local y Despedida
          </h3>
          
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
            <h4 className="font-semibold text-red-800 mb-2">📍 Ruta del día: Mercado Central + Colina Gellért + Exploración libre</h4>
            <div className="flex items-center text-red-700 text-sm">
              <Clock className="h-4 w-4 mr-2" />
              <span>Duración: 6-8 horas</span>
              <Euro className="h-4 w-4 ml-4 mr-2" />
              <span>Coste aprox.: 35-50€</span>
            </div>
          </div>

          <div className="space-y-6">
            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="font-bold text-gray-900 flex items-center mb-2">
                <Utensils className="h-5 w-5 text-green-500 mr-2" />
                10:00 - Mercado Central (Gastronomía y souvenirs)
              </h4>
              <p className="text-gray-700 mb-2">
                El mercado más auténtico de Budapest. Planta baja para comida fresca, primera planta para souvenirs y comida típica. Perfecto para probar lángos, salchichas húngaras y comprar pimentón.
              </p>
              <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-green-800">💰 Precio: 10-15€</span>
                  <span className="text-green-700">⏱️ 1.5 horas</span>
                </div>
                <p className="text-green-700">
                  <strong>🥨 Imprescindible:</strong> Lángos con crema agria y queso (4€). Compra pimentón húngaro para casa.
                </p>
              </div>
            </div>

            <div className="border-l-4 border-purple-500 pl-4">
              <h4 className="font-bold text-gray-900 flex items-center mb-2">
                <Mountain className="h-5 w-5 text-purple-500 mr-2" />
                13:00 - Colina Gellért + Ciudadela
              </h4>
              <p className="text-gray-700 mb-2">
                Las mejores vistas panorámicas de Budapest. La subida es empinada pero merece la pena. La Estatua de la Libertad en la cima es imponente y las vistas de 360° son espectaculares.
              </p>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-3 text-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-purple-800">💰 Precio: Gratis</span>
                  <span className="text-purple-700">⏱️ 2 horas</span>
                </div>
                <p className="text-purple-700">
                  <strong>🥾 Consejo:</strong> Lleva calzado cómodo. Hay un restaurante en la cima con vistas increíbles (caro pero especial).
                </p>
              </div>
            </div>

            <div className="border-l-4 border-indigo-500 pl-4">
              <h4 className="font-bold text-gray-900 flex items-center mb-2">
                <Heart className="h-5 w-5 text-indigo-500 mr-2" />
                16:00 - Exploración libre + Compras
              </h4>
              <p className="text-gray-700 mb-2">
                Tiempo libre para explorar barrios que te hayan llamado la atención, comprar souvenirs, o simplemente pasear por las calles de Pest. Recomiendo el barrio judío o la zona de Váci utca.
              </p>
              <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-3 text-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-indigo-800">💰 Precio: Variable</span>
                  <span className="text-indigo-700">⏱️ 2-3 horas</span>
                </div>
                <p className="text-indigo-700">
                  <strong>🛍️ Souvenirs típicos:</strong> Pimentón, vinos húngaros, cerámica de Herend, productos de foie gras.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Información práctica */}
      <div className="bg-gradient-to-r from-sky-50 to-blue-50 rounded-2xl p-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <Info className="h-6 w-6 text-sky-500 mr-3" />
          📋 Información Práctica
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
              <Plane className="h-5 w-5 text-sky-500 mr-2" />
              ✈️ Cómo llegar
            </h3>
            <div className="space-y-3 text-sm">
              <div className="bg-white rounded-lg p-3 border border-sky-200">
                <h4 className="font-semibold text-gray-900 mb-1">🛫 Vuelos desde España</h4>
                <p className="text-gray-700">Ryanair, Wizz Air: 80-150€ ida y vuelta</p>
                <p className="text-gray-600">Duración: 2h 30min aprox.</p>
              </div>
              <div className="bg-white rounded-lg p-3 border border-sky-200">
                <h4 className="font-semibold text-gray-900 mb-1">🚌 Desde el aeropuerto</h4>
                <p className="text-gray-700">Bus 100E: 3€ (30 min al centro)</p>
                <p className="text-gray-600">Taxi: 25-30€ / Uber: 15-20€</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
              <Hotel className="h-5 w-5 text-emerald-500 mr-2" />
              🏨 Dónde alojarse
            </h3>
            <div className="space-y-3 text-sm">
              <div className="bg-white rounded-lg p-3 border border-emerald-200">
                <h4 className="font-semibold text-gray-900 mb-1">🎒 Presupuesto (15-25€/noche)</h4>
                <p className="text-gray-700">Maverick City Lodge, Carpe Noctem</p>
                <p className="text-gray-600">Hostels en el centro, ambiente joven</p>
              </div>
              <div className="bg-white rounded-lg p-3 border border-emerald-200">
                <h4 className="font-semibold text-gray-900 mb-1">🏨 Medio (35-60€/noche)</h4>
                <p className="text-gray-700">Hotel Moments, Aria Hotel</p>
                <p className="text-gray-600">Hoteles boutique con encanto</p>
              </div>
              <div className="bg-white rounded-lg p-3 border border-emerald-200">
                <h4 className="font-semibold text-gray-900 mb-1">✨ Lujo (80-150€/noche)</h4>
                <p className="text-gray-700">Four Seasons, Kempinski</p>
                <p className="text-gray-600">Lujo junto al Danubio</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
              <Train className="h-5 w-5 text-purple-500 mr-2" />
              🚇 Transporte local
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center justify-between bg-white rounded-lg p-2 border border-purple-200">
                <span className="text-gray-700">Billete sencillo</span>
                <span className="font-semibold text-purple-600">1.5€</span>
              </div>
              <div className="flex items-center justify-between bg-white rounded-lg p-2 border border-purple-200">
                <span className="text-gray-700">Pase 24h</span>
                <span className="font-semibold text-purple-600">5€</span>
              </div>
              <div className="flex items-center justify-between bg-white rounded-lg p-2 border border-purple-200">
                <span className="text-gray-700">Budapest Card 48h</span>
                <span className="font-semibold text-purple-600">25€</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
              <Utensils className="h-5 w-5 text-orange-500 mr-2" />
              🍽️ Comida típica
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center justify-between bg-white rounded-lg p-2 border border-orange-200">
                <span className="text-gray-700">Goulash tradicional</span>
                <span className="font-semibold text-orange-600">8-12€</span>
              </div>
              <div className="flex items-center justify-between bg-white rounded-lg p-2 border border-orange-200">
                <span className="text-gray-700">Schnitzel húngaro</span>
                <span className="font-semibold text-orange-600">10-15€</span>
              </div>
              <div className="flex items-center justify-between bg-white rounded-lg p-2 border border-orange-200">
                <span className="text-gray-700">Lángos (street food)</span>
                <span className="font-semibold text-orange-600">3-5€</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Consejos finales */}
      <div className="bg-gradient-to-r from-emerald-50 to-sky-50 rounded-2xl p-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
          <AlertTriangle className="h-6 w-6 text-emerald-500 mr-3" />
          💡 Consejos finales para tu viaje
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">✅ Qué SÍ hacer:</h3>
            <ul className="text-gray-700 text-sm space-y-1">
              <li>• Reserva el Parlamento con antelación</li>
              <li>• Lleva bañador para los balnearios</li>
              <li>• Prueba los vinos húngaros (son increíbles)</li>
              <li>• Camina por los puentes al atardecer</li>
              <li>• Usa transporte público (es barato y eficiente)</li>
              <li>• Aprende algunas palabras en húngaro (les encanta)</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">❌ Qué NO hacer:</h3>
            <ul className="text-gray-700 text-sm space-y-1">
              <li>• No comas solo en zonas turísticas</li>
              <li>• No cambies dinero en la calle</li>
              <li>• No vayas a balnearios privados (son carísimos)</li>
              <li>• No olvides validar billetes de transporte</li>
              <li>• No bebas agua del grifo (no es peligrosa pero sabe mal)</li>
              <li>• No dejes propina excesiva (10% es suficiente)</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Enlaces útiles */}
      <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">🔗 Enlaces Útiles para Reservar</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900 mb-3">✈️ Vuelos y transporte:</h3>
            <div className="space-y-2">
              <a 
                href="https://kiwi.tpk.lv/z2gZyZ3E" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-between bg-sky-50 border border-sky-200 rounded-lg p-3 hover:bg-sky-100 transition-colors"
              >
                <span className="text-sky-800 font-medium">Kiwi.com - Vuelos baratos</span>
                <ExternalLink className="h-4 w-4 text-sky-600" />
              </a>
              <a 
                href="https://jegyek.parlament.hu/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-between bg-orange-50 border border-orange-200 rounded-lg p-3 hover:bg-orange-100 transition-colors"
              >
                <span className="text-orange-800 font-medium">Entradas Parlamento</span>
                <ExternalLink className="h-4 w-4 text-orange-600" />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900 mb-3">🏨 Alojamiento:</h3>
            <div className="space-y-2">
              <a 
                href="https://www.booking.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-between bg-blue-50 border border-blue-200 rounded-lg p-3 hover:bg-blue-100 transition-colors"
              >
                <span className="text-blue-800 font-medium">Booking.com - Hoteles</span>
                <ExternalLink className="h-4 w-4 text-blue-600" />
              </a>
              <a 
                href="https://www.hostelworld.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-between bg-green-50 border border-green-200 rounded-lg p-3 hover:bg-green-100 transition-colors"
              >
                <span className="text-green-800 font-medium">Hostelworld - Hostels</span>
                <ExternalLink className="h-4 w-4 text-green-600" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* CTA final */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-center text-white mb-8">
        <h3 className="text-2xl font-bold mb-4">¿Te ha ayudado esta guía?</h3>
        <p className="text-lg mb-6 opacity-90">
          Descubre más guías detalladas y consejos para viajar mejor gastando menos
        </p>
        <button
          onClick={onBack}
          className="bg-white text-orange-500 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
        >
          Ver Más Guías
        </button>
      </div>
      
      {/* Artículos relacionados */}
      <RelatedArticles currentCategory="Destinos" currentArticleId="budapest-4-dias" />
    </article>
  );
};

export default BudapestGuideArticle;