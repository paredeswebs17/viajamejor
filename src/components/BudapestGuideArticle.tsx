import React from 'react';
import { ArrowLeft, Share2, Clock, MapPin, CheckCircle, ExternalLink } from 'lucide-react';

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
          <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
            🔥 Guía Popular
          </span>
        </div>
        
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Budapest en 4 Días: Guía Completa con Itinerario y Presupuesto
        </h1>

        <div className="flex items-center justify-between text-gray-600 text-sm mb-8">
          <div className="flex items-center space-x-4">
            <span className="flex items-center bg-gray-100 px-3 py-1 rounded-full">
              <Clock className="h-4 w-4 mr-1" />
              15 min lectura
            </span>
            <span className="flex items-center bg-gray-100 px-3 py-1 rounded-full">
              <MapPin className="h-4 w-4 mr-1" />
              Europa Central
            </span>
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
      <div className="mb-12">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Parliament_Building%2C_Budapest%2C_Hungary.jpg/1200px-Parliament_Building%2C_Budapest%2C_Hungary.jpg"
          alt="Parlamento de Budapest iluminado reflejándose en el río Danubio al atardecer"
          className="w-full h-64 sm:h-80 object-cover rounded-2xl shadow-lg"
        />
      </div>

      {/* Contenido del artículo */}
      <div className="prose prose-lg max-w-none">
        
        {/* Introducción */}
        <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8 mb-12">
          <p className="text-lg text-gray-700 leading-relaxed mb-0">
            <strong>Budapest es una de esas ciudades que te enamoran desde el primer momento.</strong> La capital 
            húngara combina historia imperial, arquitectura impresionante, cultura de balnearios únicos y una 
            vida nocturna vibrante. Todo esto con precios que no te arruinarán el presupuesto.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4 mb-0">
            En esta guía te cuento exactamente cómo aprovechar 4 días en Budapest, qué ver cada día, cuánto 
            gastar y mis consejos después de haber visitado la ciudad varias veces. Desde el majestuoso 
            Parlamento hasta los relajantes balnearios Széchenyi.
          </p>
        </div>

        {/* Resumen rápido */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">📋 Resumen de tu viaje a Budapest</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="space-y-3">
              <h3 className="font-semibold text-gray-900 mb-3">💰 Presupuesto estimado (4 días)</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Vuelos desde España:</span>
                  <span className="font-semibold">80-150€</span>
                </div>
                <div className="flex justify-between">
                  <span>Alojamiento (3 noches):</span>
                  <span className="font-semibold">120-200€</span>
                </div>
                <div className="flex justify-between">
                  <span>Comidas:</span>
                  <span className="font-semibold">80-120€</span>
                </div>
                <div className="flex justify-between">
                  <span>Transporte local:</span>
                  <span className="font-semibold">20-30€</span>
                </div>
                <div className="flex justify-between">
                  <span>Atracciones:</span>
                  <span className="font-semibold">60-80€</span>
                </div>
                <div className="border-t pt-2 flex justify-between font-bold">
                  <span>Total por persona:</span>
                  <span className="text-emerald-600">360-580€</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-3">
              <h3 className="font-semibold text-gray-900 mb-3">🎯 Imprescindibles</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-emerald-500 mr-2" />
                  <span>Parlamento de Budapest</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-emerald-500 mr-2" />
                  <span>Castillo de Buda</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-emerald-500 mr-2" />
                  <span>Balnearios Széchenyi</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-emerald-500 mr-2" />
                  <span>Bastión de los Pescadores</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-emerald-500 mr-2" />
                  <span>Crucero nocturno por el Danubio</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-emerald-500 mr-2" />
                  <span>Plaza de los Héroes</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-sky-50 border border-sky-200 rounded-lg p-4">
            <p className="text-sky-800 text-sm mb-0">
              <strong>💡 Mejor época para visitar:</strong> Abril-Junio y Septiembre-Octubre. 
              Evita julio-agosto (muy caluroso) y diciembre-febrero (muy frío).
            </p>
          </div>
        </div>

        {/* Itinerario día por día */}
        <div className="space-y-12">
          
          {/* Día 1 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-gradient-to-r from-sky-500 to-emerald-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">1</span>
              Día 1: Poder Imperial y Herencia Cultural
            </h2>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">🏛️ Mañana: Parlamento y Centro Histórico</h3>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-start">
                  <span className="bg-sky-100 text-sky-800 px-2 py-1 rounded text-xs font-medium mr-3 mt-0.5">9:00</span>
                  <div>
                    <strong>Parlamento de Budapest</strong> - Visita guiada (45 min). Reserva online con antelación.
                    <div className="text-sm text-gray-600 mt-1">💰 Entrada: 8€ | 📍 Kossuth Lajos tér</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="bg-sky-100 text-sky-800 px-2 py-1 rounded text-xs font-medium mr-3 mt-0.5">10:30</span>
                  <div>
                    <strong>Paseo por el Danubio</strong> - Zapatos en el Danubio (memorial del Holocausto)
                    <div className="text-sm text-gray-600 mt-1">💰 Gratis | 📍 Orilla del Danubio</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="bg-sky-100 text-sky-800 px-2 py-1 rounded text-xs font-medium mr-3 mt-0.5">11:30</span>
                  <div>
                    <strong>Basílica de San Esteban</strong> - Sube a la cúpula para vistas panorámicas
                    <div className="text-sm text-gray-600 mt-1">💰 Entrada: 6€ | 📍 Szent István tér</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">🍽️ Tarde: Cultura y Gastronomía</h3>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-start">
                  <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium mr-3 mt-0.5">13:00</span>
                  <div>
                    <strong>Almuerzo en Frici Papa</strong> - Comida húngara auténtica y económica
                    <div className="text-sm text-gray-600 mt-1">💰 12-15€ | 📍 Király utca 55</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium mr-3 mt-0.5">15:00</span>
                  <div>
                    <strong>Gran Sinagoga</strong> - La sinagoga más grande de Europa
                    <div className="text-sm text-gray-600 mt-1">💰 Entrada: 12€ | 📍 Dohány utca 2</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium mr-3 mt-0.5">17:00</span>
                  <div>
                    <strong>Café New York</strong> - El café más bonito del mundo
                    <div className="text-sm text-gray-600 mt-1">💰 Café: 8-12€ | 📍 Erzsébet krt. 9-11</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
              <p className="text-emerald-800 text-sm mb-0">
                <strong>💡 Consejo del día:</strong> Compra la Budapest Card para transporte público ilimitado 
                y descuentos en atracciones. Vale 25€ por 48h y se amortiza rápidamente.
              </p>
            </div>
          </div>

          {/* Día 2 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-gradient-to-r from-sky-500 to-emerald-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">2</span>
              Día 2: Realeza Medieval y Romance Danubiano
            </h2>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">🏰 Mañana: Colina del Castillo</h3>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-start">
                  <span className="bg-sky-100 text-sky-800 px-2 py-1 rounded text-xs font-medium mr-3 mt-0.5">9:00</span>
                  <div>
                    <strong>Castillo de Buda</strong> - Palacio Real y Galería Nacional
                    <div className="text-sm text-gray-600 mt-1">💰 Entrada: 10€ | 📍 Szent György tér 2</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="bg-sky-100 text-sky-800 px-2 py-1 rounded text-xs font-medium mr-3 mt-0.5">11:30</span>
                  <div>
                    <strong>Bastión de los Pescadores</strong> - Vistas panorámicas de la ciudad
                    <div className="text-sm text-gray-600 mt-1">💰 Gratis (terraza superior 3€) | 📍 Szentháromság tér</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="bg-sky-100 text-sky-800 px-2 py-1 rounded text-xs font-medium mr-3 mt-0.5">12:30</span>
                  <div>
                    <strong>Iglesia de Matías</strong> - Coronaciones reales húngaras
                    <div className="text-sm text-gray-600 mt-1">💰 Entrada: 6€ | 📍 Szentháromság tér 2</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">🌅 Tarde-Noche: Romance Danubiano</h3>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-start">
                  <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium mr-3 mt-0.5">14:00</span>
                  <div>
                    <strong>Almuerzo en Pest-Buda</strong> - Terraza con vistas al Danubio
                    <div className="text-sm text-gray-600 mt-1">💰 15-20€ | 📍 Fortuna utca 3</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium mr-3 mt-0.5">16:00</span>
                  <div>
                    <strong>Paseo por Váci utca</strong> - Calle peatonal principal para compras
                    <div className="text-sm text-gray-600 mt-1">💰 Gratis | 📍 Váci utca</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium mr-3 mt-0.5">19:30</span>
                  <div>
                    <strong>Crucero nocturno por el Danubio</strong> - Budapest iluminada desde el agua
                    <div className="text-sm text-gray-600 mt-1">💰 25-35€ | 📍 Vigadó tér pier</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <p className="text-orange-800 text-sm mb-0">
                <strong>🌟 Momento mágico:</strong> El crucero nocturno es caro pero vale cada euro. 
                Ver el Parlamento iluminado desde el Danubio es una de las vistas más bonitas de Europa.
              </p>
            </div>
          </div>

          {/* Día 3 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-gradient-to-r from-sky-500 to-emerald-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">3</span>
              Día 3: Aguas Milenarias y Esplendor Imperial
            </h2>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">♨️ Mañana: Balnearios y Relajación</h3>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-start">
                  <span className="bg-sky-100 text-sky-800 px-2 py-1 rounded text-xs font-medium mr-3 mt-0.5">9:00</span>
                  <div>
                    <strong>Balnearios Széchenyi</strong> - Los balnearios más famosos de Budapest
                    <div className="text-sm text-gray-600 mt-1">💰 Entrada: 22€ | 📍 Állatkerti krt. 9-11</div>
                    <div className="text-sm text-emerald-600 mt-1">⏰ Dedica toda la mañana (3-4 horas mínimo)</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="bg-sky-100 text-sky-800 px-2 py-1 rounded text-xs font-medium mr-3 mt-0.5">13:00</span>
                  <div>
                    <strong>Almuerzo en el Parque de la Ciudad</strong> - Picnic o restaurante cercano
                    <div className="text-sm text-gray-600 mt-1">💰 8-15€ | 📍 Városliget</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">🏛️ Tarde: Arte y Cultura</h3>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-start">
                  <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium mr-3 mt-0.5">15:00</span>
                  <div>
                    <strong>Plaza de los Héroes</strong> - Monumento del Milenio y Museo de Bellas Artes
                    <div className="text-sm text-gray-600 mt-1">💰 Plaza gratis, Museo 8€ | 📍 Hősök tere</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium mr-3 mt-0.5">17:00</span>
                  <div>
                    <strong>Avenida Andrássy</strong> - Paseo por la avenida más elegante
                    <div className="text-sm text-gray-600 mt-1">💰 Gratis | 📍 Andrássy út</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium mr-3 mt-0.5">19:00</span>
                  <div>
                    <strong>Cena en Menza</strong> - Cocina húngara moderna en ambiente retro
                    <div className="text-sm text-gray-600 mt-1">💰 18-25€ | 📍 Liszt Ferenc tér 2</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
              <p className="text-emerald-800 text-sm mb-0">
                <strong>🛁 Consejo balnearios:</strong> Lleva chanclas, toalla y gorro de baño (obligatorio en piscinas). 
                Puedes alquilar todo allí pero es más caro.
              </p>
            </div>
          </div>

          {/* Día 4 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-gradient-to-r from-sky-500 to-emerald-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">4</span>
              Día 4: Autenticidad Local y Despedida
            </h2>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">🏪 Mañana: Mercados y Sabores</h3>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-start">
                  <span className="bg-sky-100 text-sky-800 px-2 py-1 rounded text-xs font-medium mr-3 mt-0.5">9:00</span>
                  <div>
                    <strong>Mercado Central</strong> - Productos locales, souvenirs y comida típica
                    <div className="text-sm text-gray-600 mt-1">💰 Gratis entrada | 📍 Vámház krt. 1-3</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="bg-sky-100 text-sky-800 px-2 py-1 rounded text-xs font-medium mr-3 mt-0.5">11:00</span>
                  <div>
                    <strong>Colina Gellért</strong> - Ciudadela y Estatua de la Libertad
                    <div className="text-sm text-gray-600 mt-1">💰 Gratis | 📍 Gellért-hegy</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">🎭 Tarde: Cultura y Despedida</h3>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-start">
                  <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium mr-3 mt-0.5">13:00</span>
                  <div>
                    <strong>Almuerzo en Bock Bisztró</strong> - Gastronomía húngara de autor
                    <div className="text-sm text-gray-600 mt-1">💰 25-35€ | 📍 Erzsébet krt. 43-49</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium mr-3 mt-0.5">15:00</span>
                  <div>
                    <strong>Tiempo libre</strong> - Compras de última hora o relajación
                    <div className="text-sm text-gray-600 mt-1">📍 Zona que más te haya gustado</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium mr-3 mt-0.5">18:00</span>
                  <div>
                    <strong>Cena de despedida</strong> - Szimpla Kert (bar en ruinas más famoso)
                    <div className="text-sm text-gray-600 mt-1">💰 15-20€ | 📍 Kazinczy utca 14</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-sky-50 border border-sky-200 rounded-lg p-4">
              <p className="text-sky-800 text-sm mb-0">
                <strong>🍻 Vida nocturna:</strong> Budapest tiene una de las mejores vidas nocturnas de Europa. 
                Los "ruin pubs" son únicos en el mundo y muy económicos.
              </p>
            </div>
          </div>
        </div>

        {/* Enlaces útiles */}
        <div className="bg-gradient-to-r from-sky-50 to-emerald-50 rounded-2xl p-8 mt-12 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">🔗 Enlaces útiles para tu viaje</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">✈️ Transporte</h3>
              <div className="space-y-2 text-sm">
                <a href="https://kiwi.tpk.lv/z2gZyZ3E" target="_blank" rel="noopener noreferrer" className="flex items-center text-sky-600 hover:text-sky-700">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Vuelos baratos a Budapest
                </a>
                <a href="https://www.bkk.hu/en/" target="_blank" rel="noopener noreferrer" className="flex items-center text-sky-600 hover:text-sky-700">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Transporte público Budapest
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">🏨 Alojamiento</h3>
              <div className="space-y-2 text-sm">
                <a href="https://www.booking.com/" target="_blank" rel="noopener noreferrer" className="flex items-center text-sky-600 hover:text-sky-700">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Hoteles en Budapest
                </a>
                <a href="https://www.hostelworld.com/" target="_blank" rel="noopener noreferrer" className="flex items-center text-sky-600 hover:text-sky-700">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Hostels económicos
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* CTA final */}
        <div className="bg-gradient-to-r from-sky-500 to-emerald-500 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">¿Te ha ayudado esta guía?</h3>
          <p className="text-lg mb-6 opacity-90">
            Explora más destinos increíbles con nuestras guías detalladas
          </p>
          <button
            onClick={onBack}
            className="bg-white text-sky-500 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Ver Más Guías
          </button>
        </div>
      </div>
    </article>
  );
};

export default BudapestGuideArticle;