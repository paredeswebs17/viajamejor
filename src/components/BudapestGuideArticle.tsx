import { ArrowLeft, Share2, Clock, MapPin, Euro, Calendar, Star, CheckCircle, ExternalLink, AlertTriangle } from 'lucide-react';
import { Compass } from 'lucide-react';

interface BudapestGuideArticleProps {
  onBack: () => void;
}

const BudapestGuideArticle: React.FC<BudapestGuideArticleProps> = ({ onBack }) => {
  return (
    <article className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-sky-500 to-emerald-500 text-white pt-24 pb-16">
        <div className="absolute inset-0 bg-black/5"></div>
        
        <div className="relative max-w-6xl mx-auto text-center px-4">
          <button 
            onClick={onBack}
            className="inline-flex items-center text-white/80 hover:text-white bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-all duration-200 font-medium border border-white/20 hover:border-white/40 mb-8"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver a Guías
          </button>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            Budapest en 4 Días
          </h1>
          
          <p className="text-lg sm:text-xl text-sky-100 mb-6 opacity-90">
            La perla del Danubio te espera
          </p>
          
          <p className="text-lg text-sky-100 mb-6 opacity-90">
            Guía actualizada en Septiembre 2025
          </p>
          
          <div className="flex flex-col gap-4 mb-6">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-gray-600">
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1 text-sky-500" />
                <span>15 min</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-1 text-emerald-500" />
                <span>Budapest</span>
              </div>
            </div>

            <button 
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: 'Budapest en 4 Días: Guía Completa con Itinerario y Presupuesto',
                    text: 'Descubre la perla del Danubio con nuestro itinerario optimizado',
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
              className="inline-flex items-center text-gray-600 hover:text-sky-600 bg-gray-50 hover:bg-sky-50 px-2 py-1 rounded-lg transition-all duration-200 text-sm border border-gray-200 hover:border-sky-300"
            >
              <Share2 className="h-3 w-3 mr-1" />
              <span>Compartir</span>
            </button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
              <MapPin className="h-4 w-4 mr-2" />
              <span>4 días perfectos</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
              <Euro className="h-4 w-4 mr-2" />
              <span>Desde 105€/día</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
              <Calendar className="h-4 w-4 mr-2" />
              <span>Todo el año</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
              <Star className="h-4 w-4 mr-2" />
              <span>Nivel: Fácil</span>
            </div>
          </div>
        </div>
      </section>

      {/* Imagen destacada */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <img
            src="https://images.unsplash.com/photo-1541849546-216549ae216d?auto=format&fit=crop&w=1200&q=80"
            alt="Vista panorámica del Parlamento de Budapest al atardecer reflejándose en el Danubio"
            className="w-full h-64 sm:h-80 object-cover rounded-2xl shadow-lg mb-8"
          />
          
          {/* Introducción */}
          <div className="bg-gradient-to-r from-sky-50 to-emerald-50 rounded-2xl p-8 mb-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              <strong>Budapest es una de esas ciudades que te enamoran desde el primer momento.</strong> La capital húngara 
              combina historia imperial, arquitectura impresionante, cultura de balnearios única en Europa y una vida 
              nocturna vibrante. Todo ello con precios que no te arruinarán el presupuesto.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-0">
              En esta guía te llevo de la mano por los 4 días perfectos en Budapest: desde el majestuoso Parlamento hasta 
              los relajantes balnearios Széchenyi, pasando por el romántico Castillo de Buda y el vibrante Barrio Judío. 
              <strong>Todo con horarios optimizados, precios actualizados y trucos para ahorrar dinero.</strong>
            </p>
          </div>

          {/* Información práctica */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-sky-50 border border-sky-200 rounded-lg p-4">
              <h3 className="font-semibold text-sky-800 mb-2">💰 Presupuesto orientativo</h3>
              <ul className="text-sky-700 text-sm space-y-1">
                <li>• <strong>Económico:</strong> 105-125€/día (hostels, comida local, transporte público)</li>
                <li>• <strong>Medio:</strong> 155-185€/día (hoteles 3*, restaurantes, algunas actividades premium)</li>
                <li>• <strong>Premium:</strong> 260€+/día (hoteles 4-5*, restaurantes gourmet, experiencias exclusivas)</li>
              </ul>
            </div>
            
            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
              <h3 className="font-semibold text-emerald-800 mb-2">💱 Información práctica</h3>
              <ul className="text-emerald-700 text-sm space-y-1">
                <li>• <strong>Moneda:</strong> Forint húngaro (HUF)</li>
                <li>• <strong>Cambio aproximado:</strong> 1€ = 395 HUF (variable)</li>
                <li>• <strong>Idioma:</strong> Húngaro (inglés en zonas turísticas)</li>
                <li>• <strong>Propinas:</strong> 10-15% en restaurantes</li>
                <li>• <strong>Tarjetas:</strong> Aceptadas en casi todos lados</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Itinerario día por día */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Itinerario día por día
          </h2>

          {/* Día 1 */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 mb-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-sky-500 text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
                1
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Poder Imperial y Herencia Cultural</h3>
                <p className="text-gray-600">Parlamento + Recorrido histórico + Sinagoga + Basílica</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="border-l-4 border-sky-500 pl-6">
                <h4 className="font-semibold text-gray-900 mb-2">🏛️ 9:00 - Parlamento de Budapest (visita guiada)</h4>
                <p className="text-gray-700 text-sm mb-2">
                  Empezamos fuerte con el edificio más icónico de Budapest. La visita guiada te lleva por las salas más 
                  impresionantes, incluida la Cúpula donde se guardan las Joyas de la Corona húngara.
                </p>
                <div className="bg-sky-50 border border-sky-200 rounded-lg p-3 text-sm">
                  <p className="text-sky-800 mb-1"><strong>Precio:</strong> 6.000 HUF (≈ 15€) adultos</p>
                  <p className="text-sky-800 mb-1"><strong>Duración:</strong> 50 minutos</p>
                  <p className="text-sky-800"><strong>Reserva:</strong> Obligatoria online con antelación</p>
                </div>
              </div>

              <div className="border-l-4 border-emerald-500 pl-6">
                <h4 className="font-semibold text-gray-900 mb-2">🚶‍♂️ 11:00 - Paseo por el centro histórico</h4>
                <p className="text-gray-700 text-sm mb-2">
                  Caminata por la Plaza Kossuth, Basílica de San Esteban (subida a la cúpula opcional por 2.000 HUF ≈ 5€) 
                  y las elegantes calles peatonales del centro.
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <h4 className="font-semibold text-gray-900 mb-2">🕍 14:00 - Gran Sinagoga y Barrio Judío</h4>
                <p className="text-gray-700 text-sm mb-2">
                  La sinagoga más grande de Europa y el emotivo Museo Judío. Después, explora los ruin pubs del barrio, 
                  empezando por el famoso Szimpla Kert.
                </p>
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-3 text-sm">
                  <p className="text-purple-800 mb-1"><strong>Precio:</strong> 4.000 HUF (≈ 10€) entrada completa</p>
                  <p className="text-purple-800"><strong>Horario:</strong> 10:00 - 18:00 (cerrado sábados)</p>
                </div>
              </div>

              <div className="border-l-4 border-orange-500 pl-6">
                <h4 className="font-semibold text-gray-900 mb-2">🍽️ 19:00 - Cena en Frici Papa</h4>
                <p className="text-gray-700 text-sm mb-2">
                  Restaurante local auténtico donde comer goulash real por precios justos. Ambiente familiar y comida casera húngara.
                </p>
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-3 text-sm">
                  <p className="text-orange-800"><strong>Presupuesto:</strong> 4.000-6.000 HUF (≈ 10-15€) por persona</p>
                </div>
              </div>
            </div>

            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 mt-6">
              <h3 className="font-semibold text-emerald-800 mb-2">💰 Presupuesto día 1</h3>
              <ul className="text-emerald-700 text-sm space-y-1">
                <li>• Parlamento: 15€</li>
                <li>• Sinagoga: 10€</li>
                <li>• Transporte: 5€</li>
                <li>• Comida: 25-35€</li>
                <li>• <strong>Total:</strong> 55-65€</li>
              </ul>
            </div>
          </div>

          {/* Día 2 */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 mb-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
                2
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Realeza Medieval y Romance Danubiano</h3>
                <p className="text-gray-600">Castillo + Bastión Pescadores + Crucero nocturno</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="border-l-4 border-sky-500 pl-6">
                <h4 className="font-semibold text-gray-900 mb-2">🏰 9:00 - Castillo de Buda y Palacio Real</h4>
                <p className="text-gray-700 text-sm mb-2">
                  Sube en funicular (1.400 HUF ≈ 4€) o camina gratis por las escaleras. El castillo ofrece vistas 
                  espectaculares del Danubio y alberga la Galería Nacional Húngara.
                </p>
                <div className="bg-sky-50 border border-sky-200 rounded-lg p-3 text-sm">
                  <p className="text-sky-800 mb-1"><strong>Galería Nacional:</strong> 3.200 HUF (≈ 8€)</p>
                  <p className="text-sky-800"><strong>Vistas del castillo:</strong> Gratis</p>
                </div>
              </div>

              <div className="border-l-4 border-emerald-500 pl-6">
                <h4 className="font-semibold text-gray-900 mb-2">⛪ 12:00 - Bastión de los Pescadores e Iglesia de Matías</h4>
                <p className="text-gray-700 text-sm mb-2">
                  Las torres de cuento de hadas del Bastión ofrecen las mejores vistas de Budapest. La Iglesia de Matías 
                  es donde se coronaron los reyes húngaros.
                </p>
                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-3 text-sm">
                  <p className="text-emerald-800 mb-1"><strong>Bastión:</strong> Gratis (terrazas superiores 1.000 HUF ≈ 3€)</p>
                  <p className="text-emerald-800"><strong>Iglesia Matías:</strong> 2.200 HUF (≈ 6€)</p>
                </div>
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <h4 className="font-semibold text-gray-900 mb-2">🌅 20:00 - Crucero nocturno por el Danubio</h4>
                <p className="text-gray-700 text-sm mb-2">
                  El broche de oro del día. Ver Budapest iluminada desde el río es mágico. Incluye una copa de champán 
                  y comentarios en varios idiomas.
                </p>
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-3 text-sm">
                  <p className="text-purple-800 mb-1"><strong>Precio:</strong> 4.500-6.000 HUF (≈ 11-15€)</p>
                  <p className="text-purple-800"><strong>Duración:</strong> 70 minutos</p>
                </div>
              </div>
            </div>

            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 mt-6">
              <h3 className="font-semibold text-emerald-800 mb-2">💰 Presupuesto día 2</h3>
              <ul className="text-emerald-700 text-sm space-y-1">
                <li>• Castillo y museos: 12€</li>
                <li>• Iglesia Matías: 6€</li>
                <li>• Crucero nocturno: 11-15€</li>
                <li>• Transporte: 5€</li>
                <li>• Comida: 25-35€</li>
                <li>• <strong>Total:</strong> 59-73€</li>
              </ul>
            </div>
          </div>

          {/* Día 3 */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 mb-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
                3
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Aguas Milenarias y Esplendor Imperial</h3>
                <p className="text-gray-600">Balnearios Széchenyi + Plaza Héroes + Andrássy + New York Café</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="border-l-4 border-sky-500 pl-6">
                <h4 className="font-semibold text-gray-900 mb-2">♨️ 9:00 - Balnearios Széchenyi (mañana completa)</h4>
                <p className="text-gray-700 text-sm mb-2">
                  <strong>La experiencia más auténtica de Budapest.</strong> Estos balnearios termales centenarios son 
                  únicos en Europa. Piscinas al aire libre incluso en invierno, saunas, y la famosa piscina donde los 
                  locales juegan al ajedrez.
                </p>
                
                <div className="bg-sky-50 border border-sky-200 rounded-lg p-4 mb-4">
                  <h3 className="font-semibold text-sky-800 mb-2">🎫 Precios y horarios</h3>
                  <ul className="text-sky-700 text-sm space-y-1">
                    <li>• <strong>Días laborables:</strong> 10.500 HUF (≈ 27€) día completo</li>
                    <li>• <strong>Fines de semana:</strong> 12.000 HUF (≈ 30€) día completo</li>
                    <li>• <strong>Horario:</strong> 6:00 - 22:00 todos los días</li>
                    <li>• <strong>Taquillas:</strong> 800 HUF (≈ 2€) depósito</li>
                    <li>• <strong>Toalla:</strong> 1.200 HUF (≈ 3€) alquiler</li>
                  </ul>
                </div>
                
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-4">
                  <h3 className="font-semibold text-orange-800 mb-2">⚠️ IMPORTANTE - Nueva restricción</h3>
                  <p className="text-orange-700 text-sm">
                    <strong>Desde agosto 2025, solo se permite entrada a mayores de 14 años en los balnearios Széchenyi.</strong>
                  </p>
                </div>

                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                  <h3 className="font-semibold text-emerald-800 mb-2">💡 Consejos para disfrutar Széchenyi</h3>
                  <ul className="text-emerald-700 text-sm space-y-1">
                    <li>• Lleva chanclas (el suelo puede estar caliente)</li>
                    <li>• Ve temprano para evitar multitudes</li>
                    <li>• Prueba las piscinas de diferentes temperaturas</li>
                    <li>• No te pierdas la piscina de ajedrez</li>
                    <li>• Lleva gorro de baño (obligatorio en piscinas interiores)</li>
                  </ul>
                </div>
              </div>

              <div className="border-l-4 border-emerald-500 pl-6">
                <h4 className="font-semibold text-gray-900 mb-2">🏛️ 14:00 - Plaza de los Héroes y Avenida Andrássy</h4>
                <p className="text-gray-700 text-sm mb-2">
                  Después de relajarte, pasea por la elegante Avenida Andrássy (Patrimonio UNESCO) hasta la imponente 
                  Plaza de los Héroes. Perfecto para fotos y entender la historia húngara.
                </p>
              </div>

              <div className="border-l-4 border-orange-500 pl-6">
                <h4 className="font-semibold text-gray-900 mb-2">☕ 17:00 - New York Café (experiencia premium)</h4>
                <p className="text-gray-700 text-sm mb-2">
                  El café más bonito del mundo según muchos. Sí, es caro y turístico, pero la experiencia vale la pena 
                  al menos una vez. Arquitectura impresionante y pasteles deliciosos.
                </p>
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-3 text-sm">
                  <p className="text-orange-800"><strong>Presupuesto:</strong> 3.000-5.000 HUF (≈ 8-13€) por café y pastel</p>
                </div>
              </div>
            </div>

            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 mt-6">
              <h3 className="font-semibold text-emerald-800 mb-2">💰 Presupuesto día 3</h3>
              <ul className="text-emerald-700 text-sm space-y-1">
                <li>• Balnearios Széchenyi: 27-30€</li>
                <li>• Transporte: 5€</li>
                <li>• Comida: 25-35€</li>
                <li>• <strong>Total:</strong> 57-70€</li>
              </ul>
            </div>
          </div>

          {/* Día 4 */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 mb-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
                4
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Autenticidad Local y Despedida</h3>
                <p className="text-gray-600">Mercado Central + Colina Gellért + Exploración libre</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="border-l-4 border-sky-500 pl-6">
                <h4 className="font-semibold text-gray-900 mb-2">🏪 10:00 - Mercado Central (Great Market Hall)</h4>
                <p className="text-gray-700 text-sm mb-2">
                  El mercado más auténtico de Budapest. Perfecto para comprar souvenirs, probar lángos (pan frito húngaro) 
                  y llevarte especias húngaras como el pimentón.
                </p>
                <div className="bg-sky-50 border border-sky-200 rounded-lg p-3 text-sm">
                  <p className="text-sky-800"><strong>Lángos:</strong> 800-1.200 HUF (≈ 2-3€)</p>
                </div>
              </div>

              <div className="border-l-4 border-emerald-500 pl-6">
                <h4 className="font-semibold text-gray-900 mb-2">⛰️ 13:00 - Colina Gellért y Ciudadela</h4>
                <p className="text-gray-700 text-sm mb-2">
                  Las mejores vistas panorámicas de Budapest. Subida gratuita a pie (30 min) o en autobús. 
                  La Ciudadela en la cima ofrece vistas de 360° de toda la ciudad.
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <h4 className="font-semibold text-gray-900 mb-2">🎯 16:00 - Tiempo libre y exploración</h4>
                <p className="text-gray-700 text-sm mb-2">
                  Últimas horas para revisitar tu lugar favorito, comprar souvenirs o simplemente pasear por las 
                  orillas del Danubio. Recomiendo volver al Parlamento para verlo con luz dorada del atardecer.
                </p>
              </div>
            </div>

            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 mt-6">
              <h3 className="font-semibold text-emerald-800 mb-2">💰 Presupuesto día 4</h3>
              <ul className="text-emerald-700 text-sm space-y-1">
                <li>• Transporte: 5€</li>
                <li>• Comida y snacks: 20-30€</li>
                <li>• Souvenirs: 15-25€</li>
                <li>• <strong>Total:</strong> 40-60€</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Información adicional */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Información práctica adicional
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Transporte */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">🚇 Transporte</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-gray-800">Tarjeta de transporte 72h</h4>
                  <p className="text-gray-600 text-sm">4.150 HUF (≈ 11€) - Incluye metro, autobús, tranvía</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Del aeropuerto al centro</h4>
                  <p className="text-gray-600 text-sm">Autobús 100E: 900 HUF (≈ 2€) - 30 minutos</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Taxi del aeropuerto</h4>
                  <p className="text-gray-600 text-sm">8.000-12.000 HUF (≈ 20-30€) - 25 minutos</p>
                </div>
              </div>
            </div>

            {/* Alojamiento */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">🏨 Dónde alojarse</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-gray-800">Distrito V (Centro)</h4>
                  <p className="text-gray-600 text-sm">Lo más cómodo, cerca de todo. 60-120€/noche</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Distrito VII (Barrio Judío)</h4>
                  <p className="text-gray-600 text-sm">Ambiente nocturno, ruin pubs. 45-90€/noche</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Distrito I (Buda)</h4>
                  <p className="text-gray-600 text-sm">Más tranquilo, vistas al Danubio. 70-150€/noche</p>
                </div>
              </div>
            </div>
          </div>

          {/* Enlaces útiles */}
          <div className="bg-gradient-to-r from-sky-50 to-emerald-50 rounded-2xl p-8 mt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Enlaces útiles para tu viaje</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <a 
                  href="https://kiwi.tpk.lv/z2gZyZ3E"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between bg-white p-4 rounded-lg border border-gray-200 hover:shadow-md transition-all group"
                >
                  <div>
                    <h4 className="font-semibold text-gray-900 group-hover:text-sky-600">✈️ Vuelos a Budapest</h4>
                    <p className="text-gray-600 text-sm">Encuentra los mejores precios</p>
                  </div>
                  <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-sky-500" />
                </a>
                
                <a 
                  href="https://www.booking.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between bg-white p-4 rounded-lg border border-gray-200 hover:shadow-md transition-all group"
                >
                  <div>
                    <h4 className="font-semibold text-gray-900 group-hover:text-sky-600">🏨 Hoteles en Budapest</h4>
                    <p className="text-gray-600 text-sm">Reserva con cancelación gratuita</p>
                  </div>
                  <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-sky-500" />
                </a>
              </div>
              
              <div className="space-y-4">
                <a 
                  href="https://www.iatiseguros.com?r=37344279073491"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between bg-white p-4 rounded-lg border border-gray-200 hover:shadow-md transition-all group"
                >
                  <div>
                    <h4 className="font-semibold text-gray-900 group-hover:text-sky-600">🛡️ Seguro de viaje IATI</h4>
                    <p className="text-gray-600 text-sm">5% descuento exclusivo</p>
                  </div>
                  <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-sky-500" />
                </a>
                
                <a 
                  href="https://revolut.com/referral/?referral-code=antoni22jf!AUG1-25-AR-CL1H-CRY&geo-redirect"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between bg-white p-4 rounded-lg border border-gray-200 hover:shadow-md transition-all group"
                >
                  <div>
                    <h4 className="font-semibold text-gray-900 group-hover:text-sky-600">💳 Tarjeta Revolut</h4>
                    <p className="text-gray-600 text-sm">Sin comisiones en el extranjero</p>
                  </div>
                  <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-sky-500" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-16">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <div className="flex items-center mb-4">
                <Compass className="h-8 w-8 text-sky-400 mr-2" />
                <span className="text-xl font-bold">Viaja Mejor</span>
              </div>
              <p className="text-gray-400 mb-6">
                Tu compañero de confianza para viajar más, gastar menos y disfrutar cada momento. 
                Consejos reales de alguien que realmente viaja.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Categorías</h3>
              <ul className="space-y-2">
                <li><a href="#consejos" className="text-gray-400 hover:text-white transition-colors">Vuelos Baratos</a></li>
                <li><a href="#consejos" className="text-gray-400 hover:text-white transition-colors">Alojamiento</a></li>
                <li><a href="#consejos" className="text-gray-400 hover:text-white transition-colors">Equipaje</a></li>
                <li><a href="#consejos" className="text-gray-400 hover:text-white transition-colors">Destinos</a></li>
                <li><a href="#consejos" className="text-gray-400 hover:text-white transition-colors">Seguros</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Recursos</h3>
              <ul className="space-y-2">
                <li><a href="#consejos" className="text-gray-400 hover:text-white transition-colors">Checklist de Viaje</a></li>
                <li><a href="#recomendaciones" className="text-gray-400 hover:text-white transition-colors">Herramientas</a></li>
                <li><a href="#recomendaciones" className="text-gray-400 hover:text-white transition-colors">Enlaces Útiles</a></li>
                <li><a href="#consejos" className="text-gray-400 hover:text-white transition-colors">Destinos</a></li>
                <li><a href="#consejos" className="text-gray-400 hover:text-white transition-colors">Guías de Destinos</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2024 Viaja Mejor. Hecho con ❤️ para viajeros como tú.
              </p>
              <div className="flex space-x-6">
                <a href="#contacto" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Política de Privacidad
                </a>
                <a href="#contacto" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Divulgación de Afiliados
                </a>
                <a href="#contacto" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Términos de Uso
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </article>
  );
};

export default BudapestGuideArticle;