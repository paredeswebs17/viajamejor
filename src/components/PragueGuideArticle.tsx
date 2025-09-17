import React from 'react';
import { ArrowLeft, Share2, Clock, MapPin, CheckCircle, ExternalLink } from 'lucide-react';

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
          Volver a guías
        </button>
        
        <div className="mb-6">
          <span className="bg-sky-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            Guía de Viaje
          </span>
        </div>
        
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Praga en 3 días: guía completa con itinerario y presupuesto
        </h1>

        <div className="flex items-center justify-end text-gray-600 text-sm space-x-6 mb-8">
          <button 
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: 'Praga en 3 días: guía completa con itinerario y presupuesto',
                  text: 'Descubre Praga con esta guía detallada',
                  url: window.location.href,
                })
                .catch((error) => console.log('Error sharing', error));
              } else {
               navigator.clipboard.writeText(window.location.href).then(() => {
                 alert('¡Enlace copiado al portapapeles!');
               }).catch(() => {
                 window.open(`https://twitter.com/intent/tweet?text=Praga en 3 días: guía completa&url=${encodeURIComponent(window.location.href)}`, '_blank');
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
          alt="Vista panorámica de Praga con el Castillo y el Puente de Carlos"
          className="w-full h-64 sm:h-80 object-cover rounded-2xl shadow-lg"
        />
      </div>

      {/* Contenido del artículo */}
      <div className="prose prose-lg max-w-none">
        
        {/* Introducción */}
        <div className="bg-gradient-to-r from-sky-50 to-emerald-50 rounded-2xl p-8 mb-12">
          <p className="text-lg text-gray-700 leading-relaxed mb-0">
            <strong>Praga es una de esas ciudades que te enamoran desde el primer momento.</strong> Con su arquitectura 
            medieval perfectamente conservada, sus cervecerías históricas y ese ambiente de cuento de hadas, es el 
            destino perfecto para una escapada de 3 días desde España.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4 mb-0">
            Aquí tienes mi itinerario optimizado para aprovechar al máximo tu tiempo, con presupuestos reales, 
            consejos prácticos y todos los enlaces que necesitas para reservar. Después de varias visitas a Praga, 
            este es el plan que mejor funciona.
          </p>
        </div>

        {/* Resumen del viaje */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">📋 Resumen del viaje</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">🗓️ Itinerario</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-emerald-500 mr-2" />
                  <span><strong>Día 1:</strong> Centro histórico + Puente de Carlos</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-emerald-500 mr-2" />
                  <span><strong>Día 2:</strong> Castillo + Barrio Judío</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-emerald-500 mr-2" />
                  <span><strong>Día 3:</strong> Cervecerías + Exploración libre</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">💰 Presupuesto estimado</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex justify-between">
                  <span>Alojamiento (3 noches):</span>
                  <span className="font-semibold">90-150€</span>
                </li>
                <li className="flex justify-between">
                  <span>Comidas:</span>
                  <span className="font-semibold">60-90€</span>
                </li>
                <li className="flex justify-between">
                  <span>Transporte local:</span>
                  <span className="font-semibold">15-25€</span>
                </li>
                <li className="flex justify-between">
                  <span>Atracciones:</span>
                  <span className="font-semibold">40-60€</span>
                </li>
                <li className="flex justify-between border-t pt-2 font-bold">
                  <span>Total por persona:</span>
                  <span className="text-emerald-600">180-300€</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Día 1 */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <span className="bg-sky-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">1</span>
            Día 1: Corazón medieval y magia bohemia
          </h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-sky-500 pl-4">
              <div className="flex items-center mb-2">
                <Clock className="h-4 w-4 text-sky-500 mr-2" />
                <span className="font-semibold text-gray-900">9:00 - 11:00</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Plaza de la Ciudad Vieja + Reloj Astronómico</h3>
              <p className="text-gray-700 text-sm">
                Empieza en el corazón de Praga. El reloj astronómico da las horas cada hora con un espectáculo 
                de figuras medievales. Llega 10 minutos antes para conseguir buen sitio.
              </p>
              <p className="text-emerald-600 text-sm font-medium mt-1">💰 Gratis</p>
            </div>

            <div className="border-l-4 border-emerald-500 pl-4">
              <div className="flex items-center mb-2">
                <Clock className="h-4 w-4 text-emerald-500 mr-2" />
                <span className="font-semibold text-gray-900">11:30 - 13:00</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Puente de Carlos</h3>
              <p className="text-gray-700 text-sm">
                El puente más famoso de Praga. Por la mañana hay menos gente y mejor luz para fotos. 
                Disfruta de los artistas callejeros y las vistas al castillo.
              </p>
              <p className="text-emerald-600 text-sm font-medium mt-1">💰 Gratis</p>
            </div>

            <div className="border-l-4 border-orange-500 pl-4">
              <div className="flex items-center mb-2">
                <Clock className="h-4 w-4 text-orange-500 mr-2" />
                <span className="font-semibold text-gray-900">14:00 - 17:00</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Barrio Judío (Josefov)</h3>
              <p className="text-gray-700 text-sm">
                Una de las juderías mejor conservadas de Europa. Visita las sinagogas históricas y el 
                cementerio judío. La historia es impactante y muy bien explicada.
              </p>
              <p className="text-orange-600 text-sm font-medium mt-1">💰 Entrada: 14€</p>
            </div>

            <div className="border-l-4 border-purple-500 pl-4">
              <div className="flex items-center mb-2">
                <Clock className="h-4 w-4 text-purple-500 mr-2" />
                <span className="font-semibold text-gray-900">19:00 - 21:00</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Cena en U Fleků</h3>
              <p className="text-gray-700 text-sm">
                La cervecería más antigua de Praga (1499). Cerveza oscura casera, comida tradicional checa 
                y ambiente auténtico. Reserva con antelación.
              </p>
              <p className="text-purple-600 text-sm font-medium mt-1">💰 Cena: 25-35€</p>
            </div>
          </div>
        </div>

        {/* Día 2 */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <span className="bg-emerald-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">2</span>
            Día 2: Castillo imperial y vistas panorámicas
          </h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-sky-500 pl-4">
              <div className="flex items-center mb-2">
                <Clock className="h-4 w-4 text-sky-500 mr-2" />
                <span className="font-semibold text-gray-900">9:00 - 13:00</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Castillo de Praga</h3>
              <p className="text-gray-700 text-sm">
                El castillo más grande del mundo según el Guinness. Incluye la Catedral de San Vito, 
                el Palacio Real y el Callejón del Oro. Compra la entrada online para evitar colas.
              </p>
              <p className="text-sky-600 text-sm font-medium mt-1">💰 Entrada: 12€ (circuito básico)</p>
            </div>

            <div className="border-l-4 border-emerald-500 pl-4">
              <div className="flex items-center mb-2">
                <Clock className="h-4 w-4 text-emerald-500 mr-2" />
                <span className="font-semibold text-gray-900">14:00 - 16:00</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Barrio Pequeño (Malá Strana)</h3>
              <p className="text-gray-700 text-sm">
                Pasea por las calles empedradas, visita la Iglesia de San Nicolás y sube a la Colina Petřín 
                para las mejores vistas de la ciudad.
              </p>
              <p className="text-emerald-600 text-sm font-medium mt-1">💰 Gratis (Torre Petřín: 5€)</p>
            </div>

            <div className="border-l-4 border-orange-500 pl-4">
              <div className="flex items-center mb-2">
                <Clock className="h-4 w-4 text-orange-500 mr-2" />
                <span className="font-semibold text-gray-900">17:00 - 19:00</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Crucero por el Vltava</h3>
              <p className="text-gray-700 text-sm">
                Ve Praga desde el río al atardecer. Las vistas del castillo y los puentes iluminados 
                son espectaculares. Incluye bebida y aperitivos.
              </p>
              <p className="text-orange-600 text-sm font-medium mt-1">💰 Crucero: 20-30€</p>
            </div>
          </div>
        </div>

        {/* Día 3 */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <span className="bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">3</span>
            Día 3: Cultura cervecera y despedida bohemia
          </h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-sky-500 pl-4">
              <div className="flex items-center mb-2">
                <Clock className="h-4 w-4 text-sky-500 mr-2" />
                <span className="font-semibold text-gray-900">10:00 - 12:00</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Tour de cervecerías</h3>
              <p className="text-gray-700 text-sm">
                Praga es la capital mundial de la cerveza. Visita Pilsner Urquell, Budweiser Budvar 
                y cervecerías locales. Aprende sobre la historia cervecera checa.
              </p>
              <p className="text-sky-600 text-sm font-medium mt-1">💰 Tour: 35€ (incluye degustaciones)</p>
            </div>

            <div className="border-l-4 border-emerald-500 pl-4">
              <div className="flex items-center mb-2">
                <Clock className="h-4 w-4 text-emerald-500 mr-2" />
                <span className="font-semibold text-gray-900">13:00 - 15:00</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Mercado de Havelské Tržiště</h3>
              <p className="text-gray-700 text-sm">
                El mercado más antiguo de Praga. Perfecto para comprar souvenirs auténticos, probar 
                comida local y llevarte recuerdos únicos.
              </p>
              <p className="text-emerald-600 text-sm font-medium mt-1">💰 Gratis (compras aparte)</p>
            </div>

            <div className="border-l-4 border-purple-500 pl-4">
              <div className="flex items-center mb-2">
                <Clock className="h-4 w-4 text-purple-500 mr-2" />
                <span className="font-semibold text-gray-900">16:00 - 18:00</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Exploración libre</h3>
              <p className="text-gray-700 text-sm">
                Tiempo para revisitar tus lugares favoritos, hacer compras de última hora o simplemente 
                perderte por las calles empedradas de esta ciudad mágica.
              </p>
              <p className="text-purple-600 text-sm font-medium mt-1">💰 Según actividades</p>
            </div>
          </div>
        </div>

        {/* Consejos prácticos */}
        <div className="bg-gradient-to-r from-sky-50 to-emerald-50 rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">💡 Consejos prácticos</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">🏨 Dónde alojarse</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• <strong>Ciudad Vieja:</strong> Más caro pero súper céntrico</li>
                <li>• <strong>Ciudad Nueva:</strong> Buen equilibrio precio/ubicación</li>
                <li>• <strong>Vinohrady:</strong> Barrio local, más barato</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">🍺 Qué comer</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• <strong>Goulash:</strong> El plato nacional (8-12€)</li>
                <li>• <strong>Schnitzel:</strong> Escalope empanado (10-15€)</li>
                <li>• <strong>Trdelník:</strong> Dulce callejero (3-5€)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Enlaces útiles */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">🔗 Enlaces útiles para reservar</h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            <a
              href="https://www.booking.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-100 transition-colors"
            >
              <div>
                <h3 className="font-semibold text-gray-900">🏨 Booking.com</h3>
                <p className="text-sm text-gray-600">Hoteles en Praga</p>
              </div>
              <ExternalLink className="h-5 w-5 text-blue-500" />
            </a>

            <a
              href="https://kiwi.tpk.lv/z2gZyZ3E"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 bg-green-50 border border-green-200 rounded-lg hover:bg-green-100 transition-colors"
            >
              <div>
                <h3 className="font-semibold text-gray-900">✈️ Kiwi.com</h3>
                <p className="text-sm text-gray-600">Vuelos baratos</p>
              </div>
              <ExternalLink className="h-5 w-5 text-green-500" />
            </a>

            <a
              href="https://gyg.me/vHQMITYm"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 bg-orange-50 border border-orange-200 rounded-lg hover:bg-orange-100 transition-colors"
            >
              <div>
                <h3 className="font-semibold text-gray-900">🎯 GetYourGuide</h3>
                <p className="text-sm text-gray-600">Tours y actividades</p>
              </div>
              <ExternalLink className="h-5 w-5 text-orange-500" />
            </a>

            <a
              href="https://www.iatiseguros.com?r=37344279073491"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 bg-purple-50 border border-purple-200 rounded-lg hover:bg-purple-100 transition-colors"
            >
              <div>
                <h3 className="font-semibold text-gray-900">🛡️ IATI Seguros</h3>
                <p className="text-sm text-gray-600">Seguro de viaje (5% dto)</p>
              </div>
              <ExternalLink className="h-5 w-5 text-purple-500" />
            </a>
          </div>
        </div>

        {/* CTA final */}
        <div className="bg-gradient-to-r from-sky-500 to-emerald-500 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">¿Te ha gustado esta guía?</h3>
          <p className="text-lg mb-6 opacity-90">
            Descubre más guías detalladas para tus próximos destinos
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

export default PragueGuideArticle;