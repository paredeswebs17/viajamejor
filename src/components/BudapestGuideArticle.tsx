import React from 'react';
import { ArrowLeft, Share2 } from 'lucide-react';
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
          <span className="bg-sky-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            Guía de Viaje
          </span>
        </div>
        
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Budapest en 4 Días: Guía Completa
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
           className="inline-flex items-center text-gray-600 hover:text-sky-600 bg-gray-50 hover:bg-sky-50 px-2 py-1 rounded-lg transition-all duration-200 font-medium border border-gray-200 hover:border-sky-300"
          >
            <Share2 className="h-3 w-3 mr-1" />
            <span className="text-xs">Compartir</span>
          </button>
        </div>
      </div>

      {/* Imagen destacada */}
      <div className="mb-12">
        <img
          src="https://images.unsplash.com/photo-1541849546-216549ae216d?auto=format&fit=crop&w=800&q=80"
          alt="Vista panorámica de Budapest con el Parlamento y el Danubio"
          className="w-full h-64 sm:h-80 object-cover rounded-2xl shadow-lg"
        />
      </div>

      {/* Contenido de la guía */}
      <div className="prose prose-lg max-w-none">
        <div className="bg-gradient-to-r from-sky-50 to-emerald-50 rounded-2xl p-8 mb-12">
          <p className="text-lg text-gray-700 leading-relaxed mb-0">
            <strong>Budapest es una de las capitales más bonitas de Europa y perfecta para una escapada de 4 días.</strong> 
            Esta guía te llevará por lo mejor de la ciudad: desde el majestuoso Parlamento hasta los relajantes balnearios 
            termales, pasando por el romántico Castillo de Buda.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4 mb-0">
            He organizado el itinerario para que aproveches al máximo cada día, con presupuestos reales y consejos 
            prácticos basados en mi experiencia visitando la ciudad varias veces.
          </p>
        </div>

        {/* Presupuesto general */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">💰 Presupuesto para 4 días</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
              <h3 className="font-semibold text-emerald-800 mb-2">💚 Presupuesto económico</h3>
              <ul className="text-emerald-700 text-sm space-y-1">
                <li>• Alojamiento: 25€/noche (hostel)</li>
                <li>• Comida: 20€/día</li>
                <li>• Transporte: 8€/día</li>
                <li>• Atracciones: 15€/día</li>
                <li><strong>• Total: ~70€/día</strong></li>
              </ul>
            </div>
            
            <div className="bg-sky-50 border border-sky-200 rounded-lg p-4">
              <h3 className="font-semibold text-sky-800 mb-2">💙 Presupuesto cómodo</h3>
              <ul className="text-sky-700 text-sm space-y-1">
                <li>• Alojamiento: 60€/noche (hotel 3*)</li>
                <li>• Comida: 40€/día</li>
                <li>• Transporte: 12€/día</li>
                <li>• Atracciones: 25€/día</li>
                <li><strong>• Total: ~140€/día</strong></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Itinerario día por día */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Itinerario día por día</h2>
          
          {/* Día 1 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-sky-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">1</span>
              Día 1: Lado Pest - Parlamento y Centro Histórico
            </h3>
            
            <div className="space-y-4">
              <div className="border-l-4 border-sky-500 pl-4">
                <h4 className="font-semibold text-gray-900">🏛️ Mañana (9:00-12:00)</h4>
                <p className="text-gray-700 text-sm">
                  <strong>Parlamento Húngaro:</strong> Visita guiada (6.000 HUF ≈ 15€). Reserva online con antelación. 
                  Es el edificio más impresionante de Budapest y símbolo de la ciudad.
                </p>
              </div>
              
              <div className="border-l-4 border-emerald-500 pl-4">
                <h4 className="font-semibold text-gray-900">🍽️ Mediodía (12:00-14:00)</h4>
                <p className="text-gray-700 text-sm">
                  <strong>Almuerzo en Frici Papa:</strong> Comida húngara auténtica por 8-12€. Prueba el goulash 
                  tradicional y el lángos (pan frito húngaro).
                </p>
              </div>
              
              <div className="border-l-4 border-orange-500 pl-4">
                <h4 className="font-semibold text-gray-900">🚶 Tarde (14:00-18:00)</h4>
                <p className="text-gray-700 text-sm">
                  <strong>Basílica de San Esteban:</strong> Entrada gratuita, subida a la cúpula 600 HUF (1.5€). 
                  Vistas panorámicas increíbles de la ciudad.
                </p>
              </div>
            </div>
          </div>

          {/* Día 2 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-sky-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">2</span>
              Día 2: Lado Buda - Castillo y Bastión de los Pescadores
            </h3>
            
            <div className="space-y-4">
              <div className="border-l-4 border-sky-500 pl-4">
                <h4 className="font-semibold text-gray-900">🏰 Mañana (9:00-13:00)</h4>
                <p className="text-gray-700 text-sm">
                  <strong>Castillo de Buda:</strong> Entrada 3.200 HUF (8€). Incluye Galería Nacional y vistas 
                  espectaculares del Danubio. Sube en funicular (1.200 HUF) o a pie gratis.
                </p>
              </div>
              
              <div className="border-l-4 border-emerald-500 pl-4">
                <h4 className="font-semibold text-gray-900">🐟 Tarde (14:00-17:00)</h4>
                <p className="text-gray-700 text-sm">
                  <strong>Bastión de los Pescadores:</strong> Entrada gratuita a la terraza inferior, 1.000 HUF (2.5€) 
                  para la superior. Las mejores vistas de Budapest y perfecto para fotos.
                </p>
              </div>
              
              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-semibold text-gray-900">🌅 Noche (19:00-21:00)</h4>
                <p className="text-gray-700 text-sm">
                  <strong>Crucero nocturno por el Danubio:</strong> 4.500-8.000 HUF (12-20€). Ver Budapest iluminada 
                  desde el río es mágico. Reserva online para mejores precios.
                </p>
              </div>
            </div>
          </div>

          {/* Día 3 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-sky-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">3</span>
              Día 3: Balnearios y Avenida Andrássy
            </h3>
            
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-gray-900">♨️ Mañana (9:00-13:00)</h4>
                <p className="text-gray-700 text-sm">
                  <strong>Balnearios Széchenyi:</strong> Entrada 6.200 HUF (15€) entre semana, 6.900 HUF (17€) 
                  fines de semana. El balneario más famoso de Budapest. Lleva chanclas y toalla.
                </p>
              </div>
              
              <div className="border-l-4 border-yellow-500 pl-4">
                <h4 className="font-semibold text-gray-900">🏛️ Tarde (14:00-17:00)</h4>
                <p className="text-gray-700 text-sm">
                  <strong>Plaza de los Héroes y Avenida Andrássy:</strong> Gratis. Paseo por la avenida más elegante 
                  de Budapest, declarada Patrimonio de la Humanidad.
                </p>
              </div>
              
              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="font-semibold text-gray-900">☕ Noche (18:00-20:00)</h4>
                <p className="text-gray-700 text-sm">
                  <strong>New York Café:</strong> El café más bonito del mundo. Un café cuesta 8-12€, pero la 
                  experiencia vale la pena. Reserva mesa o ve temprano.
                </p>
              </div>
            </div>
          </div>

          {/* Día 4 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-sky-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">4</span>
              Día 4: Mercado Central y Colina Gellért
            </h3>
            
            <div className="space-y-4">
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-semibold text-gray-900">🛒 Mañana (9:00-12:00)</h4>
                <p className="text-gray-700 text-sm">
                  <strong>Mercado Central:</strong> Entrada gratuita. Perfecto para comprar souvenirs, probar 
                  lángos y llevarte especias húngaras. Los precios son muy buenos.
                </p>
              </div>
              
              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-semibold text-gray-900">⛰️ Tarde (13:00-16:00)</h4>
                <p className="text-gray-700 text-sm">
                  <strong>Colina Gellért y Ciudadela:</strong> Subida gratuita a pie (30 min) o en bus. 
                  Las mejores vistas panorámicas de toda Budapest. Perfecto para el atardecer.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Consejos prácticos */}
        <div className="bg-gradient-to-r from-emerald-50 to-sky-50 rounded-2xl p-8 mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Consejos prácticos para Budapest</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">🚇 Transporte</h3>
              <p className="text-gray-700 text-sm mb-4">
                Compra la Budapest Card (24h: 5.500 HUF ≈ 14€) que incluye transporte público ilimitado 
                y descuentos en atracciones.
              </p>
              
              <h3 className="font-semibold text-gray-900 mb-2">💱 Dinero</h3>
              <p className="text-gray-700 text-sm">
                La moneda es el Forint Húngaro (HUF). 1€ ≈ 400 HUF. Muchos sitios aceptan euros pero 
                el cambio no es favorable.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">🏨 Dónde alojarse</h3>
              <p className="text-gray-700 text-sm mb-4">
                Distrito V (centro) para estar cerca de todo, o Distrito VII (barrio judío) para vida nocturna.
              </p>
              
              <h3 className="font-semibold text-gray-900 mb-2">🍽️ Comida típica</h3>
              <p className="text-gray-700 text-sm">
                No te vayas sin probar: goulash, lángos, chimney cake (kürtőskalács) y vinos húngaros.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Artículos relacionados */}
      <RelatedArticles currentCategory="Guías" currentArticleId="budapest-4-dias" />
    </article>
  );
};

export default BudapestGuideArticle;