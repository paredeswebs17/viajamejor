import { ArrowLeft, Share2, MapPin, Clock, Euro, Star, Camera, Utensils, Building, Waves, Coffee, ShoppingBag } from 'lucide-react';
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
            🔥 Guía Premium
          </span>
        </div>
        
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Budapest en 4 Días: La Guía Definitiva
        </h1>

        <div className="flex items-center justify-between text-gray-600 text-sm mb-8">
          <div className="flex items-center space-x-4">
            <span className="flex items-center bg-gray-100 px-2 py-1 rounded-full">
              <Clock className="h-3 w-3 mr-1" />
              15 min lectura
            </span>
            <span className="flex items-center bg-gray-100 px-2 py-1 rounded-full">
              <Euro className="h-3 w-3 mr-1" />
              70€/día aprox.
            </span>
            <span className="flex items-center bg-gray-100 px-2 py-1 rounded-full">
              <Star className="h-3 w-3 mr-1" />
              4.9/5 ⭐
            </span>
          </div>
          
          <button 
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: 'Budapest en 4 Días: La Guía Definitiva',
                  text: 'Descubre Budapest con esta guía completa',
                  url: window.location.href,
                })
                .catch((error) => console.log('Error sharing', error));
              } else {
                navigator.clipboard.writeText(window.location.href).then(() => {
                  alert('¡Enlace copiado al portapapeles!');
                }).catch(() => {
                  window.open(`https://twitter.com/intent/tweet?text=Budapest en 4 Días: La Guía Definitiva&url=${encodeURIComponent(window.location.href)}`, '_blank');
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

      {/* Contenido del artículo */}
      <div className="prose prose-lg max-w-none">
        
        {/* Introducción */}
        <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8 mb-12">
          <p className="text-lg text-gray-700 leading-relaxed mb-0">
            <strong>Budapest es una de esas ciudades que te enamoran desde el primer momento.</strong> 
            La perla del Danubio combina historia imperial, arquitectura espectacular, balnearios únicos 
            y una vida nocturna vibrante. Todo esto con precios que no te arruinarán el presupuesto.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4 mb-0">
            En esta guía te comparto mi itinerario optimizado para 4 días, con presupuestos reales, 
            enlaces directos para reservas y todos los trucos que he aprendido en mis visitas a la capital húngara.
          </p>
        </div>

        {/* Información práctica */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">📋 Información práctica</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">💰 Presupuesto diario</h3>
              <ul className="text-gray-700 text-sm space-y-2">
                <li>• <strong>Mochilero:</strong> 40-50€/día</li>
                <li>• <strong>Intermedio:</strong> 70-90€/día</li>
                <li>• <strong>Cómodo:</strong> 120-150€/día</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">🎫 Entradas esenciales</h3>
              <ul className="text-gray-700 text-sm space-y-2">
                <li>• <strong>Parlamento:</strong> 8-12€</li>
                <li>• <strong>Balnearios Széchenyi:</strong> 22€</li>
                <li>• <strong>Castillo de Buda:</strong> 15€</li>
                <li>• <strong>Crucero Danubio:</strong> 15-25€</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-sky-50 border border-sky-200 rounded-lg p-4">
            <p className="text-sky-800 text-sm mb-2">
              💡 <strong>Consejo:</strong> Compra la Budapest Card (24h: 25€, 48h: 40€, 72h: 50€) 
              para transporte público gratis y descuentos en atracciones.
            </p>
            <p className="text-sky-800 text-sm">
              👉 <strong>
                <a href="https://www.getyourguide.com/budapest-l51/budapest-card-t23739/" target="_blank" rel="noopener noreferrer">
                  Comprar Budapest Card aquí
                </a>
              </strong>
            </p>
          </div>
        </div>

        {/* DÍA 1 */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <span className="bg-gradient-to-r from-sky-500 to-emerald-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">1</span>
            DÍA 1: Poder Imperial y Herencia Cultural
          </h2>
          
          <div className="space-y-6">
            {/* Mañana */}
            <div className="border-l-4 border-sky-500 pl-4">
              <h3 className="font-bold text-gray-900 mb-2 flex items-center">
                <Clock className="h-4 w-4 text-sky-500 mr-2" />
                9:00 - 12:00 | Parlamento Húngaro
              </h3>
              <p className="text-gray-700 mb-3">
                Comienza tu aventura en el edificio más icónico de Budapest. La visita guiada te llevará por 
                las salas más espectaculares, incluida la Sala de la Cúpula donde se exhibe la Corona de San Esteban.
              </p>
              <div className="bg-sky-50 border border-sky-200 rounded-lg p-3">
                <p className="text-sky-800 text-sm mb-1">
                  🎫 <strong>Entrada:</strong> 8-12€ (reserva online obligatoria)
                </p>
                <p className="text-sky-800 text-sm">
                  👉 <strong>
                    <a href="https://www.getyourguide.com/budapest-l51/budapest-parliament-building-guided-tour-t54455/" target="_blank" rel="noopener noreferrer">
                      Reservar tour del Parlamento aquí
                    </a>
                  </strong>
                </p>
              </div>
            </div>

            {/* Mediodía */}
            <div className="border-l-4 border-emerald-500 pl-4">
              <h3 className="font-bold text-gray-900 mb-2 flex items-center">
                <Utensils className="h-4 w-4 text-emerald-500 mr-2" />
                12:30 - 14:00 | Almuerzo en Frici Papa
              </h3>
              <p className="text-gray-700 mb-3">
                Auténtica comida húngara en un ambiente local. Prueba el goulash tradicional (8€) o el 
                schnitzel húngaro (12€). Ambiente familiar y precios justos.
              </p>
              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-3">
                <p className="text-emerald-800 text-sm mb-1">
                  📍 <strong>Dirección:</strong> Kálvin tér 9, 1091 Budapest
                </p>
                <p className="text-emerald-800 text-sm">
                  👉 <strong>
                    <a href="https://www.tripadvisor.com/Restaurant_Review-g274887-d1751086-Reviews-Frici_Papa-Budapest_Central_Hungary.html" target="_blank" rel="noopener noreferrer">
                      Ver en TripAdvisor
                    </a>
                  </strong>
                </p>
              </div>
            </div>

            {/* Tarde */}
            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-bold text-gray-900 mb-2 flex items-center">
                <Building className="h-4 w-4 text-purple-500 mr-2" />
                14:30 - 17:00 | Gran Sinagoga y Barrio Judío
              </h3>
              <p className="text-gray-700 mb-3">
                La sinagoga más grande de Europa y el emotivo memorial del Holocausto. Después, explora 
                los ruin pubs del barrio judío, únicos en el mundo.
              </p>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
                <p className="text-purple-800 text-sm mb-1">
                  🎫 <strong>Entrada:</strong> 10€ (incluye museo y sinagoga)
                </p>
                <p className="text-purple-800 text-sm">
                  👉 <strong>
                    <a href="https://www.getyourguide.com/budapest-l51/budapest-jewish-quarter-and-synagogue-walking-tour-t54456/" target="_blank" rel="noopener noreferrer">
                      Tour del Barrio Judío aquí
                    </a>
                  </strong>
                </p>
              </div>
            </div>

            {/* Noche */}
            <div className="border-l-4 border-orange-500 pl-4">
              <h3 className="font-bold text-gray-900 mb-2 flex items-center">
                <Coffee className="h-4 w-4 text-orange-500 mr-2" />
                19:00 - 22:00 | Szimpla Kert + Cena
              </h3>
              <p className="text-gray-700 mb-3">
                El ruin pub más famoso del mundo. Ambiente único en un edificio en ruinas decorado con 
                objetos vintage. Cena en Mazel Tov (cocina mediterránea moderna en el barrio judío).
              </p>
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-3">
                <p className="text-orange-800 text-sm mb-1">
                  🍺 <strong>Szimpla Kert:</strong> Kazinczy u. 14 (entrada gratuita)
                </p>
                <p className="text-orange-800 text-sm">
                  👉 <strong>
                    <a href="https://www.tripadvisor.com/Restaurant_Review-g274887-d8482142-Reviews-Mazel_Tov-Budapest_Central_Hungary.html" target="_blank" rel="noopener noreferrer">
                      Reservar mesa en Mazel Tov
                    </a>
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* DÍA 2 */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <span className="bg-gradient-to-r from-sky-500 to-emerald-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">2</span>
            DÍA 2: Realeza Medieval y Romance Danubiano
          </h2>
          
          <div className="space-y-6">
            {/* Mañana */}
            <div className="border-l-4 border-sky-500 pl-4">
              <h3 className="font-bold text-gray-900 mb-2 flex items-center">
                <Building className="h-4 w-4 text-sky-500 mr-2" />
                9:00 - 13:00 | Castillo de Buda y Bastión de los Pescadores
              </h3>
              <p className="text-gray-700 mb-3">
                Sube en el histórico funicular (3€) hasta el Castillo de Buda. Visita la Galería Nacional 
                y disfruta de las vistas desde el Bastión de los Pescadores, uno de los miradores más 
                fotogénicos de Europa.
              </p>
              <div className="bg-sky-50 border border-sky-200 rounded-lg p-3">
                <p className="text-sky-800 text-sm mb-1">
                  🎫 <strong>Castillo:</strong> 15€ | <strong>Funicular:</strong> 3€
                </p>
                <p className="text-sky-800 text-sm">
                  👉 <strong>
                    <a href="https://www.getyourguide.com/budapest-l51/budapest-buda-castle-district-walking-tour-t54457/" target="_blank" rel="noopener noreferrer">
                      Tour del Castillo de Buda
                    </a>
                  </strong>
                </p>
              </div>
            </div>

            {/* Mediodía */}
            <div className="border-l-4 border-emerald-500 pl-4">
              <h3 className="font-bold text-gray-900 mb-2 flex items-center">
                <Utensils className="h-4 w-4 text-emerald-500 mr-2" />
                13:30 - 15:00 | Almuerzo en Pest-Buda Bistro
              </h3>
              <p className="text-gray-700 mb-3">
                Restaurante moderno con vistas al Danubio. Cocina húngara contemporánea con ingredientes 
                locales. El pato confitado con col roja (18€) es espectacular.
              </p>
              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-3">
                <p className="text-emerald-800 text-sm mb-1">
                  📍 <strong>Dirección:</strong> Fortuna u. 3, 1014 Budapest
                </p>
                <p className="text-emerald-800 text-sm">
                  👉 <strong>
                    <a href="https://www.opentable.com/r/pest-buda-bistro-budapest" target="_blank" rel="noopener noreferrer">
                      Reservar mesa aquí
                    </a>
                  </strong>
                </p>
              </div>
            </div>

            {/* Tarde */}
            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-bold text-gray-900 mb-2 flex items-center">
                <Camera className="h-4 w-4 text-purple-500 mr-2" />
                15:30 - 18:00 | Paseo por el Danubio y Puente de las Cadenas
              </h3>
              <p className="text-gray-700 mb-3">
                Camina por el paseo del Danubio hasta el icónico Puente de las Cadenas. Visita el 
                memorial "Zapatos en el Danubio" y disfruta de las vistas desde ambos lados del río.
              </p>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
                <p className="text-purple-800 text-sm">
                  📸 <strong>Mejores fotos:</strong> Atardecer desde el lado de Buda hacia Pest
                </p>
              </div>
            </div>

            {/* Noche */}
            <div className="border-l-4 border-orange-500 pl-4">
              <h3 className="font-bold text-gray-900 mb-2 flex items-center">
                <Waves className="h-4 w-4 text-orange-500 mr-2" />
                20:00 - 22:00 | Crucero nocturno por el Danubio
              </h3>
              <p className="text-gray-700 mb-3">
                Budapest iluminada desde el río es mágico. Crucero de 1.5h con copa de champán incluida. 
                Verás el Parlamento, el Castillo y todos los puentes iluminados.
              </p>
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-3">
                <p className="text-orange-800 text-sm mb-1">
                  🚢 <strong>Precio:</strong> 25€ (incluye copa de bienvenida)
                </p>
                <p className="text-orange-800 text-sm">
                  👉 <strong>
                    <a href="https://www.getyourguide.com/budapest-l51/budapest-evening-cruise-with-optional-dinner-t54458/" target="_blank" rel="noopener noreferrer">
                      Reservar crucero nocturno
                    </a>
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* DÍA 3 */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <span className="bg-gradient-to-r from-sky-500 to-emerald-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">3</span>
            DÍA 3: Aguas Milenarias y Esplendor Imperial
          </h2>
          
          <div className="space-y-6">
            {/* Mañana */}
            <div className="border-l-4 border-sky-500 pl-4">
              <h3 className="font-bold text-gray-900 mb-2 flex items-center">
                <Waves className="h-4 w-4 text-sky-500 mr-2" />
                9:00 - 13:00 | Balnearios Széchenyi
              </h3>
              <p className="text-gray-700 mb-3">
                Los balnearios termales más famosos de Budapest. 18 piscinas de diferentes temperaturas, 
                saunas y tratamientos. Una experiencia única que no puedes perderte.
              </p>
              <div className="bg-sky-50 border border-sky-200 rounded-lg p-3">
                <p className="text-sky-800 text-sm mb-1">
                  🏊 <strong>Entrada:</strong> 22€ (día completo) | <strong>Horario:</strong> 6:00-22:00
                </p>
                <p className="text-sky-800 text-sm mb-1">
                  💡 <strong>Tip:</strong> Lleva chanclas y toalla, o alquílalas allí (5€)
                </p>
                <p className="text-sky-800 text-sm">
                  👉 <strong>
                    <a href="https://www.szechenyibath.hu/en" target="_blank" rel="noopener noreferrer">
                      Comprar entrada online
                    </a>
                  </strong>
                </p>
              </div>
            </div>

            {/* Tarde */}
            <div className="border-l-4 border-emerald-500 pl-4">
              <h3 className="font-bold text-gray-900 mb-2 flex items-center">
                <MapPin className="h-4 w-4 text-emerald-500 mr-2" />
                14:00 - 17:00 | Plaza de los Héroes y Avenida Andrássy
              </h3>
              <p className="text-gray-700 mb-3">
                Pasea por la elegante Avenida Andrássy (Patrimonio UNESCO) hasta la Plaza de los Héroes. 
                Visita el Museo de Bellas Artes o simplemente disfruta del ambiente imperial.
              </p>
              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-3">
                <p className="text-emerald-800 text-sm mb-1">
                  🚇 <strong>Metro:</strong> Línea M1 (la más antigua del continente)
                </p>
                <p className="text-emerald-800 text-sm">
                  🎫 <strong>Museo:</strong> 12€ (opcional, martes gratis para residentes UE)
                </p>
              </div>
            </div>

            {/* Noche */}
            <div className="border-l-4 border-orange-500 pl-4">
              <h3 className="font-bold text-gray-900 mb-2 flex items-center">
                <Coffee className="h-4 w-4 text-orange-500 mr-2" />
                18:00 - 20:00 | New York Café
              </h3>
              <p className="text-gray-700 mb-3">
                El café más bonito del mundo según muchos. Arquitectura espectacular, ambiente de época 
                y pasteles increíbles. Caro pero vale la pena para la experiencia.
              </p>
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-3">
                <p className="text-orange-800 text-sm mb-1">
                  ☕ <strong>Precio:</strong> Café 8€, Pastel 12€
                </p>
                <p className="text-orange-800 text-sm">
                  👉 <strong>
                    <a href="https://newyorkcafe.hu/en/" target="_blank" rel="noopener noreferrer">
                      Información y reservas
                    </a>
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* DÍA 4 */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <span className="bg-gradient-to-r from-sky-500 to-emerald-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">4</span>
            DÍA 4: Autenticidad Local y Despedida
          </h2>
          
          <div className="space-y-6">
            {/* Mañana */}
            <div className="border-l-4 border-sky-500 pl-4">
              <h3 className="font-bold text-gray-900 mb-2 flex items-center">
                <ShoppingBag className="h-4 w-4 text-sky-500 mr-2" />
                9:00 - 12:00 | Mercado Central y Váci utca
              </h3>
              <p className="text-gray-700 mb-3">
                El mercado cubierto más grande de Budapest. Prueba lángos (pan frito húngaro, 4€), 
                compra pimentón húngaro auténtico y souvenirs locales. Después, pasea por Váci utca.
              </p>
              <div className="bg-sky-50 border border-sky-200 rounded-lg p-3">
                <p className="text-sky-800 text-sm mb-1">
                  📍 <strong>Dirección:</strong> Vámház krt. 1-3, 1093 Budapest
                </p>
                <p className="text-sky-800 text-sm">
                  ⏰ <strong>Horario:</strong> Lun-Sáb 6:00-18:00, Dom 6:00-15:00
                </p>
              </div>
            </div>

            {/* Tarde */}
            <div className="border-l-4 border-emerald-500 pl-4">
              <h3 className="font-bold text-gray-900 mb-2 flex items-center">
                <MapPin className="h-4 w-4 text-emerald-500 mr-2" />
                13:00 - 16:00 | Colina Gellért y Ciudadela
              </h3>
              <p className="text-gray-700 mb-3">
                Las mejores vistas panorámicas de Budapest. Sube a pie (gratis) o en bus (2€). 
                Visita la Ciudadela y la Estatua de la Libertad. Perfecto para fotos de despedida.
              </p>
              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-3">
                <p className="text-emerald-800 text-sm mb-1">
                  🚌 <strong>Bus 27:</strong> Desde Móricz Zsigmond körtér
                </p>
                <p className="text-emerald-800 text-sm">
                  📸 <strong>Mejor momento:</strong> 1 hora antes del atardecer
                </p>
              </div>
            </div>

            {/* Despedida */}
            <div className="border-l-4 border-orange-500 pl-4">
              <h3 className="font-bold text-gray-900 mb-2 flex items-center">
                <Utensils className="h-4 w-4 text-orange-500 mr-2" />
                18:00 - 21:00 | Cena de despedida en Onyx
              </h3>
              <p className="text-gray-700 mb-3">
                Restaurante con estrella Michelin para cerrar con broche de oro. Menú degustación 
                de cocina húngara moderna (85€). Si el presupuesto no llega, Bock Bisztró es excelente (35€).
              </p>
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-3">
                <p className="text-orange-800 text-sm mb-1">
                  ⭐ <strong>Onyx:</strong> Vörösmarty tér 7-8 (reserva obligatoria)
                </p>
                <p className="text-orange-800 text-sm">
                  👉 <strong>
                    <a href="https://onyxrestaurant.hu/en/" target="_blank" rel="noopener noreferrer">
                      Reservar en Onyx
                    </a>
                  </strong> | <strong>
                    <a href="https://bockbisztro.hu/en/" target="_blank" rel="noopener noreferrer">
                      Alternativa: Bock Bisztró
                    </a>
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Dónde alojarse */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">🏨 Dónde alojarse en Budapest</h2>
          
          <div className="space-y-6">
            <div className="border border-emerald-200 rounded-lg p-4 bg-emerald-50">
              <h3 className="font-bold text-emerald-800 mb-2">💰 Presupuesto (25-40€/noche)</h3>
              <p className="text-emerald-700 text-sm mb-2">
                <strong>Maverick City Lodge:</strong> Hostel moderno en el centro, desayuno incluido, 
                ambiente social perfecto para conocer gente.
              </p>
              <p className="text-emerald-800 text-sm">
                👉 <strong>
                  <a href="https://www.hostelworld.com/hosteldetails.php/Maverick-City-Lodge/Budapest/45234" target="_blank" rel="noopener noreferrer">
                    Reservar en Hostelworld
                  </a>
                </strong>
              </p>
            </div>

            <div className="border border-sky-200 rounded-lg p-4 bg-sky-50">
              <h3 className="font-bold text-sky-800 mb-2">🏨 Intermedio (60-90€/noche)</h3>
              <p className="text-sky-700 text-sm mb-2">
                <strong>Hotel Moments Budapest:</strong> Boutique hotel en el centro, habitaciones 
                modernas, desayuno excelente, a 5 min del Parlamento.
              </p>
              <p className="text-sky-800 text-sm">
                👉 <strong>
                  <a href="https://www.booking.com/hotel/hu/moments-budapest.html" target="_blank" rel="noopener noreferrer">
                    Reservar en Booking
                  </a>
                </strong>
              </p>
            </div>

            <div className="border border-purple-200 rounded-lg p-4 bg-purple-50">
              <h3 className="font-bold text-purple-800 mb-2">✨ Lujo (150-250€/noche)</h3>
              <p className="text-purple-700 text-sm mb-2">
                <strong>Four Seasons Hotel Gresham Palace:</strong> Palacio Art Nouveau frente al 
                Danubio, spa de lujo, vistas espectaculares al Castillo de Buda.
              </p>
              <p className="text-purple-800 text-sm">
                👉 <strong>
                  <a href="https://www.fourseasons.com/budapest/" target="_blank" rel="noopener noreferrer">
                    Reservar en Four Seasons
                  </a>
                </strong>
              </p>
            </div>
          </div>
        </div>

        {/* Restaurantes recomendados */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">🍽️ Mis restaurantes favoritos</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900">💰 Económicos (10-20€)</h3>
              
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-medium text-gray-900">Frici Papa</h4>
                <p className="text-gray-600 text-sm mb-2">Goulash auténtico y ambiente local</p>
                <p className="text-sky-600 text-sm">
                  👉 <a href="https://www.tripadvisor.com/Restaurant_Review-g274887-d1751086-Reviews-Frici_Papa-Budapest_Central_Hungary.html" target="_blank" rel="noopener noreferrer">Ver en TripAdvisor</a>
                </p>
              </div>

              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-medium text-gray-900">Menza</h4>
                <p className="text-gray-600 text-sm mb-2">Comida húngara moderna, ambiente retro</p>
                <p className="text-sky-600 text-sm">
                  👉 <a href="https://menza.co.hu/en/" target="_blank" rel="noopener noreferrer">Web oficial</a>
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900">✨ Premium (30-60€)</h3>
              
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-medium text-gray-900">Costes</h4>
                <p className="text-gray-600 text-sm mb-2">Cocina húngara contemporánea, estrella Michelin</p>
                <p className="text-sky-600 text-sm">
                  👉 <a href="https://www.costesrestaurant.hu/en/" target="_blank" rel="noopener noreferrer">Reservar mesa</a>
                </p>
              </div>

              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-medium text-gray-900">Babel Budapest</h4>
                <p className="text-gray-600 text-sm mb-2">Fusión mediterránea-húngara, terraza con vistas</p>
                <p className="text-sky-600 text-sm">
                  👉 <a href="https://babel-budapest.hu/en/" target="_blank" rel="noopener noreferrer">Web oficial</a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Transporte */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">🚇 Cómo moverse por Budapest</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">🎫 Billetes de transporte</h3>
              <ul className="text-gray-700 text-sm space-y-2">
                <li>• <strong>Billete sencillo:</strong> 1.50€</li>
                <li>• <strong>Pase 24h:</strong> 5.50€</li>
                <li>• <strong>Pase 72h:</strong> 14€</li>
                <li>• <strong>Pase 7 días:</strong> 18€</li>
              </ul>
              <div className="mt-3 bg-sky-50 border border-sky-200 rounded-lg p-3">
                <p className="text-sky-800 text-sm">
                  👉 <strong>
                    <a href="https://bkk.hu/en/tickets-and-passes/" target="_blank" rel="noopener noreferrer">
                      Comprar online en BKK
                    </a>
                  </strong>
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">🚗 Otras opciones</h3>
              <ul className="text-gray-700 text-sm space-y-2">
                <li>• <strong>Taxi:</strong> Bolt, Uber disponibles</li>
                <li>• <strong>Bicicleta:</strong> MOL Bubi (sistema público)</li>
                <li>• <strong>A pie:</strong> Centro muy caminable</li>
                <li>• <strong>Tram 2:</strong> Ruta panorámica junto al Danubio</li>
              </ul>
              <div className="mt-3 bg-emerald-50 border border-emerald-200 rounded-lg p-3">
                <p className="text-emerald-800 text-sm">
                  👉 <strong>
                    <a href="https://molbubi.hu/en/" target="_blank" rel="noopener noreferrer">
                      Alquiler de bicis MOL Bubi
                    </a>
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Consejos prácticos */}
        <div className="bg-gradient-to-r from-sky-50 to-emerald-50 rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">💡 Consejos prácticos para Budapest</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">💳 Dinero y pagos</h3>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>• Moneda: Forint húngaro (HUF)</li>
                <li>• 1€ ≈ 380-400 HUF (aprox.)</li>
                <li>• Tarjeta aceptada en casi todos lados</li>
                <li>• Propina: 10-15% en restaurantes</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">🗣️ Idioma y comunicación</h3>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>• Húngaro (muy difícil)</li>
                <li>• Inglés: bien en zonas turísticas</li>
                <li>• Alemán: muchos lo hablan</li>
                <li>• Google Translate es tu amigo</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-white border border-sky-200 rounded-lg p-4">
            <h3 className="font-semibold text-sky-800 mb-2">📱 Apps útiles para Budapest</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-sky-700">
                  • <strong>BKK Info:</strong> Transporte público en tiempo real
                </p>
                <p className="text-sky-700">
                  • <strong>Foursquare:</strong> Descubrir lugares locales
                </p>
              </div>
              <div>
                <p className="text-sky-700">
                  • <strong>XE Currency:</strong> Convertir forints a euros
                </p>
                <p className="text-sky-700">
                  • <strong>Google Translate:</strong> Traducir menús y carteles
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Presupuesto detallado */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">💰 Presupuesto detallado (4 días)</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-lg">
              <thead>
                <tr className="bg-sky-500 text-white">
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Concepto</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Mochilero</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Intermedio</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Cómodo</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">🏨 Alojamiento (4 noches)</td>
                  <td className="border border-gray-300 px-4 py-3">100-160€</td>
                  <td className="border border-gray-300 px-4 py-3">240-360€</td>
                  <td className="border border-gray-300 px-4 py-3">600-1000€</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium">🍽️ Comidas</td>
                  <td className="border border-gray-300 px-4 py-3">40-60€</td>
                  <td className="border border-gray-300 px-4 py-3">120-160€</td>
                  <td className="border border-gray-300 px-4 py-3">200-300€</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">🎫 Atracciones</td>
                  <td className="border border-gray-300 px-4 py-3">40-60€</td>
                  <td className="border border-gray-300 px-4 py-3">80-120€</td>
                  <td className="border border-gray-300 px-4 py-3">150-200€</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium">🚇 Transporte</td>
                  <td className="border border-gray-300 px-4 py-3">15-20€</td>
                  <td className="border border-gray-300 px-4 py-3">20-30€</td>
                  <td className="border border-gray-300 px-4 py-3">40-60€</td>
                </tr>
                <tr className="bg-emerald-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium font-bold">💰 TOTAL</td>
                  <td className="border border-gray-300 px-4 py-3 font-bold text-emerald-600">195-300€</td>
                  <td className="border border-gray-300 px-4 py-3 font-bold text-emerald-600">460-670€</td>
                  <td className="border border-gray-300 px-4 py-3 font-bold text-emerald-600">990-1560€</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Enlaces útiles */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">🔗 Enlaces útiles para tu viaje</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">✈️ Vuelos y transporte</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="https://kiwi.tpk.lv/z2gZyZ3E" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:text-sky-800 font-medium">
                    🛫 Buscar vuelos baratos en Kiwi.com
                  </a>
                </li>
                <li>
                  <a href="https://www.bud.hu/en" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:text-sky-800 font-medium">
                    🛬 Aeropuerto de Budapest (info oficial)
                  </a>
                </li>
                <li>
                  <a href="https://www.mavcsoport.hu/en" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:text-sky-800 font-medium">
                    🚄 Trenes desde/hacia Budapest
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">🎫 Entradas y tours</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="https://www.getyourguide.com/budapest-l51/" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:text-sky-800 font-medium">
                    🎭 Tours y actividades en GetYourGuide
                  </a>
                </li>
                <li>
                  <a href="https://www.viator.com/Budapest/d903-ttd" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:text-sky-800 font-medium">
                    🗺️ Excursiones en Viator
                  </a>
                </li>
                <li>
                  <a href="https://www.budapest.com/" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:text-sky-800 font-medium">
                    ℹ️ Información turística oficial
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-white border border-purple-200 rounded-lg p-4">
            <h3 className="font-semibold text-purple-800 mb-2">🛡️ Seguro de viaje recomendado</h3>
            <p className="text-purple-700 text-sm mb-2">
              Para viajar tranquilo por Europa, te recomiendo IATI Escapadas. Cobertura completa 
              para viajes por Europa con descuento del 5%.
            </p>
            <p className="text-purple-800 text-sm">
              👉 <strong>
                <a href="https://www.iatiseguros.com?r=37344279073491" target="_blank" rel="noopener noreferrer">
                  Contratar IATI con 5% descuento
                </a>
              </strong>
            </p>
          </div>
        </div>

        {/* Conclusión */}
        <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Mi conclusión sobre Budapest</h2>
          <p className="text-lg text-gray-700 mb-4">
            <strong>Budapest es una ciudad que lo tiene todo: historia, cultura, gastronomía, vida nocturna 
            y precios razonables.</strong> En 4 días puedes ver lo esencial y llevarte una idea muy completa 
            de lo que ofrece la capital húngara.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Lo que más me gusta es la combinación de grandeza imperial con autenticidad local. Puedes 
            desayunar en un palacio, almorzar en un mercado tradicional y cenar en un ruin pub. 
            Pocas ciudades ofrecen tanta diversidad en tan poco espacio.
          </p>
          <p className="text-lg text-gray-700 mb-0">
            <strong>¿Has estado en Budapest? ¿Qué te pareció?</strong> Cuéntamelo en comentarios o 
            escríbeme por email. Siempre me gusta conocer experiencias de otros viajeros y actualizar 
            mis guías con nuevas recomendaciones.
          </p>
        </div>

        {/* CTA final */}
        <div className="bg-gradient-to-r from-sky-500 to-emerald-500 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">¿Listo para descubrir Budapest?</h3>
          <p className="text-lg mb-6 opacity-90">
            Usa esta guía para planificar tu viaje perfecto a la perla del Danubio
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://kiwi.tpk.lv/z2gZyZ3E"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-sky-500 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors inline-block text-center"
            >
              ✈️ Buscar vuelos a Budapest
            </a>
            <button
              onClick={onBack}
              className="bg-transparent border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-sky-500 transition-colors"
            >
              📖 Ver más guías
            </button>
          </div>
        </div>
      </div>
      
      {/* Artículos relacionados */}
      <RelatedArticles currentCategory="Destinos" currentArticleId="budapest-4-dias" />
    </article>
  );
};

export default BudapestGuideArticle;