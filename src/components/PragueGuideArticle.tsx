import { ArrowLeft, Share2, Euro, Calendar, Star, CheckCircle, MapPin, Clock, Utensils, Camera, Coffee, Building, Heart } from 'lucide-react';
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
          Praga en 3 Días: Guía Completa con Itinerario y Presupuesto Real
        </h1>

        <div className="flex items-center justify-end text-gray-600 text-sm space-x-6 mb-8">
          <button 
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: 'Praga en 3 Días: Guía Completa con Itinerario y Presupuesto Real',
                  text: 'Descubre Praga con nuestro itinerario optimizado día por día',
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
          alt="Vista panorámica del Castillo de Praga y el río Moldava al atardecer"
          className="w-full h-64 sm:h-80 object-cover rounded-2xl shadow-lg"
        />
      </div>

      {/* Contenido del artículo */}
      <div className="prose prose-lg max-w-none">
        
        {/* Introducción */}
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 mb-12">
          <p className="text-lg text-gray-700 leading-relaxed mb-0">
            <strong>Praga es una de esas ciudades que te enamoran desde el primer momento.</strong> Sus torres góticas, 
            puentes medievales y calles empedradas te transportan a un cuento de hadas. Y lo mejor: puedes disfrutarla 
            sin gastar una fortuna.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4 mb-0">
            En esta guía te comparto mi itinerario optimizado para 3 días, con presupuestos reales, enlaces directos 
            para reservas y todos los trucos que he aprendido en mis múltiples visitas a la capital checa. 
            Desde 60€ al día puedes vivir Praga como se merece.
          </p>
        </div>

        {/* Resumen rápido */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">📋 Resumen de tu viaje a Praga</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Euro className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Presupuesto</h3>
              <p className="text-gray-600 text-sm">Desde 60€/día</p>
              <p className="text-xs text-gray-500">Hostel + comida local</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Calendar className="h-8 w-8 text-sky-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Mejor época</h3>
              <p className="text-gray-600 text-sm">Abril - Octubre</p>
              <p className="text-xs text-gray-500">Evita Diciembre-Febrero</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Star className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Dificultad</h3>
              <p className="text-gray-600 text-sm">Muy fácil</p>
              <p className="text-xs text-gray-500">Ideal para principiantes</p>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
            <h3 className="font-bold text-amber-800 mb-3">🎯 Lo que verás en 3 días:</h3>
            <div className="grid md:grid-cols-2 gap-3 text-sm text-amber-700">
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2 text-amber-600" />
                <span>Castillo de Praga y Catedral</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2 text-amber-600" />
                <span>Puente de Carlos al amanecer</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2 text-amber-600" />
                <span>Plaza de la Ciudad Vieja</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2 text-amber-600" />
                <span>Barrio Judío histórico</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2 text-amber-600" />
                <span>Cervecerías tradicionales</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2 text-amber-600" />
                <span>Barrio de Malá Strana</span>
              </div>
            </div>
          </div>
        </div>

        {/* Presupuestos detallados */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">💰 Presupuestos reales para 3 días</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border border-emerald-200 rounded-lg p-6 bg-emerald-50">
              <h3 className="font-bold text-emerald-800 mb-4 text-center">🎒 Mochilero</h3>
              <div className="text-center mb-4">
                <span className="text-3xl font-bold text-emerald-600">60€</span>
                <span className="text-emerald-600">/día</span>
              </div>
              <ul className="space-y-2 text-sm text-emerald-700">
                <li>• Hostel: 15-20€/noche</li>
                <li>• Comida: 25€/día</li>
                <li>• Transporte: 5€/día</li>
                <li>• Atracciones: 15€/día</li>
              </ul>
            </div>
            
            <div className="border border-sky-200 rounded-lg p-6 bg-sky-50">
              <h3 className="font-bold text-sky-800 mb-4 text-center">🏨 Cómodo</h3>
              <div className="text-center mb-4">
                <span className="text-3xl font-bold text-sky-600">100€</span>
                <span className="text-sky-600">/día</span>
              </div>
              <ul className="space-y-2 text-sm text-sky-700">
                <li>• Hotel 3*: 40-50€/noche</li>
                <li>• Comida: 35€/día</li>
                <li>• Transporte: 8€/día</li>
                <li>• Atracciones: 17€/día</li>
              </ul>
            </div>
            
            <div className="border border-purple-200 rounded-lg p-6 bg-purple-50">
              <h3 className="font-bold text-purple-800 mb-4 text-center">👑 Lujo</h3>
              <div className="text-center mb-4">
                <span className="text-3xl font-bold text-purple-600">200€</span>
                <span className="text-purple-600">/día</span>
              </div>
              <ul className="space-y-2 text-sm text-purple-700">
                <li>• Hotel 5*: 120€/noche</li>
                <li>• Comida: 60€/día</li>
                <li>• Transporte: 15€/día</li>
                <li>• Atracciones: 25€/día</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-gray-50 rounded-lg p-6">
            <h3 className="font-bold text-gray-900 mb-3">💡 Consejos para ahorrar:</h3>
            <ul className="grid md:grid-cols-2 gap-2 text-sm text-gray-700">
              <li>• Prague Castle Card: 16€ (incluye 3 atracciones)</li>
              <li>• Transporte público: pase de 3 días por 32€</li>
              <li>• Almuerzo menú: 8-12€ en restaurantes locales</li>
              <li>• Cerveza: 2-3€ en pubs tradicionales</li>
              <li>• Free walking tours (solo propinas)</li>
              <li>• Muchas iglesias y plazas son gratuitas</li>
            </ul>
          </div>
        </div>

        {/* Itinerario Día 1 */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold mr-4">1</span>
            Día 1: Castillo Imperial y Ciudad Vieja
          </h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-amber-500 pl-6">
              <div className="flex items-center mb-2">
                <Clock className="h-4 w-4 text-amber-500 mr-2" />
                <span className="font-semibold text-gray-900">9:00 - Castillo de Praga</span>
              </div>
              <p className="text-gray-700 mb-3">
                Empieza temprano para evitar multitudes. El complejo incluye el Castillo, la Catedral de San Vito 
                y el Antiguo Palacio Real. Compra la Prague Castle Card (16€) que incluye entrada a las 3 atracciones principales.
              </p>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <p className="text-amber-800 text-sm">
                  🎫 <strong>Reserva tu entrada:</strong> 
                  <a href="https://www.hrad.cz/en" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:underline ml-1">
                    Castillo de Praga oficial
                  </a>
                </p>
              </div>
            </div>

            <div className="border-l-4 border-sky-500 pl-6">
              <div className="flex items-center mb-2">
                <Clock className="h-4 w-4 text-sky-500 mr-2" />
                <span className="font-semibold text-gray-900">13:00 - Almuerzo en Malá Strana</span>
              </div>
              <p className="text-gray-700 mb-3">
                Baja caminando hacia el barrio de Malá Strana. Almuerza en <strong>Lokál Dlouhááá</strong> 
                (menú tradicional checo por 12€) o <strong>U Fleku</strong> (cervecería histórica desde 1499).
              </p>
              <div className="bg-sky-50 border border-sky-200 rounded-lg p-4">
                <p className="text-sky-800 text-sm">
                  🍽️ <strong>Reserva mesa:</strong> 
                  <a href="https://lokal-dlouha.ambi.cz/en/" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline ml-1">
                    Lokál Dlouhááá
                  </a>
                </p>
              </div>
            </div>

            <div className="border-l-4 border-emerald-500 pl-6">
              <div className="flex items-center mb-2">
                <Clock className="h-4 w-4 text-emerald-500 mr-2" />
                <span className="font-semibold text-gray-900">15:00 - Puente de Carlos</span>
              </div>
              <p className="text-gray-700 mb-3">
                El puente más famoso de Praga. Disfruta de los artistas callejeros, las vistas al castillo 
                y las 30 estatuas barrocas. Perfecto para fotos y ambiente medieval auténtico.
              </p>
            </div>

            <div className="border-l-4 border-purple-500 pl-6">
              <div className="flex items-center mb-2">
                <Clock className="h-4 w-4 text-purple-500 mr-2" />
                <span className="font-semibold text-gray-900">17:00 - Plaza de la Ciudad Vieja</span>
              </div>
              <p className="text-gray-700 mb-3">
                Termina el día en la plaza más bonita de Praga. Ve el Reloj Astronómico (cada hora en punto), 
                la Iglesia de Týn y toma algo en una terraza con vistas. Ambiente mágico al atardecer.
              </p>
            </div>
          </div>
        </div>

        {/* Itinerario Día 2 */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold mr-4">2</span>
            Día 2: Barrio Judío y Cerveza Tradicional
          </h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-amber-500 pl-6">
              <div className="flex items-center mb-2">
                <Clock className="h-4 w-4 text-amber-500 mr-2" />
                <span className="font-semibold text-gray-900">10:00 - Barrio Judío (Josefov)</span>
              </div>
              <p className="text-gray-700 mb-3">
                Visita las sinagogas históricas, el cementerio judío y el museo. Es una de las comunidades 
                judías mejor preservadas de Europa. Entrada combinada: 14€.
              </p>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <p className="text-amber-800 text-sm">
                  🎫 <strong>Compra tu entrada:</strong> 
                  <a href="https://www.jewishmuseum.cz/en/" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:underline ml-1">
                    Museo Judío de Praga
                  </a>
                </p>
              </div>
            </div>

            <div className="border-l-4 border-sky-500 pl-6">
              <div className="flex items-center mb-2">
                <Clock className="h-4 w-4 text-sky-500 mr-2" />
                <span className="font-semibold text-gray-900">13:30 - Almuerzo en Ciudad Nueva</span>
              </div>
              <p className="text-gray-700 mb-3">
                Prueba <strong>Café Savoy</strong> (elegante, 15-20€) o <strong>Havelská Koruna</strong> 
                (cafetería local, 8-12€). Ambos con auténtica comida checa y buen ambiente.
              </p>
            </div>

            <div className="border-l-4 border-emerald-500 pl-6">
              <div className="flex items-center mb-2">
                <Clock className="h-4 w-4 text-emerald-500 mr-2" />
                <span className="font-semibold text-gray-900">15:30 - Plaza Wenceslao</span>
              </div>
              <p className="text-gray-700 mb-3">
                El corazón comercial de Praga. Perfecto para compras, ver la arquitectura Art Nouveau 
                y sentir el pulso moderno de la ciudad. Muchas tiendas y cafés.
              </p>
            </div>

            <div className="border-l-4 border-purple-500 pl-6">
              <div className="flex items-center mb-2">
                <Clock className="h-4 w-4 text-purple-500 mr-2" />
                <span className="font-semibold text-gray-900">19:00 - Cena y cerveza tradicional</span>
              </div>
              <p className="text-gray-700 mb-3">
                Cena en <strong>U Fleků</strong> (cervecería desde 1499, 20-25€) o <strong>Restaurace U Kalicha</strong> 
                (más económico, 15€). Prueba el goulash, schnitzel y por supuesto, la cerveza Pilsner.
              </p>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <p className="text-purple-800 text-sm">
                  🍺 <strong>Reserva mesa:</strong> 
                  <a href="https://www.ufleku.cz/en" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline ml-1">
                    U Fleků Brewery
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Itinerario Día 3 */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold mr-4">3</span>
            Día 3: Vistas Panorámicas y Despedida
          </h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-amber-500 pl-6">
              <div className="flex items-center mb-2">
                <Clock className="h-4 w-4 text-amber-500 mr-2" />
                <span className="font-semibold text-gray-900">9:00 - Colina de Petřín</span>
              </div>
              <p className="text-gray-700 mb-3">
                Sube en funicular (incluido en transporte público) o caminando. La Torre de Petřín 
                ofrece las mejores vistas de Praga. Entrada: 6€. Perfecto para fotos panorámicas.
              </p>
            </div>

            <div className="border-l-4 border-sky-500 pl-6">
              <div className="flex items-center mb-2">
                <Clock className="h-4 w-4 text-sky-500 mr-2" />
                <span className="font-semibold text-gray-900">12:00 - Mercado de Havelské Tržiště</span>
              </div>
              <p className="text-gray-700 mb-3">
                Mercado tradicional perfecto para comprar souvenirs auténticos y probar comida callejera. 
                Precios más baratos que en zonas turísticas. Ideal para regalos y recuerdos.
              </p>
            </div>

            <div className="border-l-4 border-emerald-500 pl-6">
              <div className="flex items-center mb-2">
                <Clock className="h-4 w-4 text-emerald-500 mr-2" />
                <span className="font-semibold text-gray-900">14:00 - Almuerzo de despedida</span>
              </div>
              <p className="text-gray-700 mb-3">
                <strong>Café Louvre</strong> (histórico, frecuentado por Einstein y Kafka, 15€) o 
                <strong>Restaurace Mlejnice</strong> (medieval, 12€). Ambiente único para cerrar tu visita.
              </p>
            </div>

            <div className="border-l-4 border-purple-500 pl-6">
              <div className="flex items-center mb-2">
                <Clock className="h-4 w-4 text-purple-500 mr-2" />
                <span className="font-semibold text-gray-900">16:00 - Última vuelta y compras</span>
              </div>
              <p className="text-gray-700 mb-3">
                Paseo final por el Puente de Carlos, compras de último momento en Pařížská (calle de lujo) 
                o Národní (más económica). Perfecto para despedirse de esta ciudad mágica.
              </p>
            </div>
          </div>
        </div>

        {/* Dónde alojarse */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">🏨 Dónde alojarse en Praga</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-gray-900 mb-3 flex items-center">
                <MapPin className="h-5 w-5 text-emerald-500 mr-2" />
                Mejores zonas
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li><strong>Ciudad Vieja:</strong> Céntrico pero caro</li>
                <li><strong>Ciudad Nueva:</strong> Buen equilibrio precio/ubicación</li>
                <li><strong>Vinohrady:</strong> Barrio local, más barato</li>
                <li><strong>Smíchov:</strong> Económico, bien conectado</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-gray-900 mb-3">🏨 Recomendaciones por presupuesto</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li><strong>Hostel:</strong> Hostel One Home (15€/noche)</li>
                <li><strong>Hotel 3*:</strong> Hotel Golden Key (45€/noche)</li>
                <li><strong>Hotel 4*:</strong> Augustine Hotel (120€/noche)</li>
                <li><strong>Apartamento:</strong> Airbnb en Vinohrady (35€/noche)</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-sky-50 border border-sky-200 rounded-lg p-4">
            <p className="text-sky-800 text-sm">
              🏨 <strong>Reserva tu alojamiento:</strong> 
              <a href="https://www.booking.com/city/cz/prague.html" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline ml-1">
                Hoteles en Praga - Booking.com
              </a>
            </p>
          </div>
        </div>

        {/* Dónde comer */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Utensils className="h-6 w-6 text-orange-500 mr-3" />
            Dónde comer en Praga
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-gray-900 mb-3">🍽️ Restaurantes tradicionales</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <strong className="text-gray-900">U Fleků</strong>
                  <p className="text-gray-600">Cervecería histórica desde 1499. Goulash y cerveza negra casera. 20-25€</p>
                </li>
                <li>
                  <strong className="text-gray-900">Lokál Dlouhááá</strong>
                  <p className="text-gray-600">Comida checa moderna. Schnitzel increíble y Pilsner perfecta. 12-15€</p>
                </li>
                <li>
                  <strong className="text-gray-900">Café Savoy</strong>
                  <p className="text-gray-600">Elegante café vienés. Perfecto para desayuno o merienda. 8-15€</p>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-gray-900 mb-3">💰 Opciones económicas</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <strong className="text-gray-900">Havelská Koruna</strong>
                  <p className="text-gray-600">Cafetería local con menús del día. Auténtico y barato. 6-10€</p>
                </li>
                <li>
                  <strong className="text-gray-900">Restaurace Mlejnice</strong>
                  <p className="text-gray-600">Ambiente medieval, porciones enormes. Perfecto para cenar. 10-15€</p>
                </li>
                <li>
                  <strong className="text-gray-900">Mercados locales</strong>
                  <p className="text-gray-600">Trdelník (dulce típico) y comida callejera. 3-8€</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Transporte */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">🚇 Cómo moverse por Praga</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-gray-900 mb-3">🎫 Transporte público</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• <strong>Pase 3 días:</strong> 32€ (metro, tranvía, bus)</li>
                <li>• <strong>Billete sencillo:</strong> 1.50€ (90 minutos)</li>
                <li>• <strong>Billete diario:</strong> 5.50€</li>
                <li>• <strong>Funicular Petřín:</strong> Incluido en pase</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-gray-900 mb-3">🚶‍♂️ A pie</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Centro histórico: todo caminando</li>
                <li>• Castillo ↔ Ciudad Vieja: 20 min</li>
                <li>• Distancias cortas y bien señalizadas</li>
                <li>• Calles empedradas (zapatos cómodos)</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-sky-50 border border-sky-200 rounded-lg p-4">
            <p className="text-sky-800 text-sm">
              🚇 <strong>Más info transporte:</strong> 
              <a href="https://www.dpp.cz/en" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline ml-1">
                Transporte Público de Praga
              </a>
            </p>
          </div>
        </div>

        {/* Consejos prácticos */}
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">💡 Consejos prácticos para Praga</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-gray-900 mb-3">✅ Qué hacer</h3>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Cambia dinero en casas de cambio oficiales</li>
                <li>• Prueba la cerveza local (la mejor del mundo)</li>
                <li>• Madruga para evitar multitudes en el castillo</li>
                <li>• Lleva zapatos cómodos (calles empedradas)</li>
                <li>• Descarga la app del transporte público</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-gray-900 mb-3">❌ Qué evitar</h3>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Restaurantes en Plaza de la Ciudad Vieja (caros)</li>
                <li>• Cambiar dinero en el aeropuerto</li>
                <li>• Taxis sin taxímetro (usa Uber/Bolt)</li>
                <li>• Comprar souvenirs en zonas turísticas</li>
                <li>• Ir al castillo después de las 11:00</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Enlaces útiles */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">🔗 Enlaces útiles para tu viaje</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-gray-900 mb-3">✈️ Vuelos y transporte</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="https://kiwi.tpk.lv/z2gZyZ3E" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline">
                    🛫 Vuelos baratos a Praga - Kiwi.com
                  </a>
                </li>
                <li>
                  <a href="https://www.flixbus.es/" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline">
                    🚌 Bus desde España - FlixBus
                  </a>
                </li>
                <li>
                  <a href="https://www.cd.cz/en/" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline">
                    🚂 Trenes en República Checa
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-gray-900 mb-3">🏨 Alojamiento y seguros</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="https://www.booking.com/city/cz/prague.html" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline">
                    🏨 Hoteles en Praga - Booking.com
                  </a>
                </li>
                <li>
                  <a href="https://www.airbnb.es/s/Prague--Czech-Republic" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline">
                    🏠 Apartamentos - Airbnb
                  </a>
                </li>
                <li>
                  <a href="https://www.iatiseguros.com?r=37344279073491" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline">
                    🛡️ Seguro de viaje IATI (5% descuento)
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Conclusión */}
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Mi experiencia personal en Praga</h2>
          <p className="text-lg text-gray-700 mb-4">
            <strong>Praga es una de mis ciudades europeas favoritas.</strong> Tiene esa magia medieval que pocas 
            ciudades conservan, pero con todas las comodidades modernas. La cerveza es increíble, la comida 
            contundente y los precios muy razonables para lo que ofrece.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Mi consejo: no tengas prisa. Praga se disfruta paseando sin rumbo, descubriendo callejones escondidos 
            y parándote en cualquier cervecería que te llame la atención. Es una ciudad para perderse y encontrarse.
          </p>
          <p className="text-lg text-gray-700 mb-0">
            <strong>¿Has estado en Praga? ¿Qué fue lo que más te gustó?</strong> Escríbeme y comparte tu experiencia. 
            Siempre me gusta conocer otros puntos de vista de esta ciudad tan especial.
          </p>
        </div>

        {/* CTA final */}
        <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">¿Listo para enamorarte de Praga?</h3>
          <p className="text-lg mb-6 opacity-90">
            Usa esta guía para aprovechar al máximo tus 3 días en la ciudad dorada
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://kiwi.tpk.lv/z2gZyZ3E"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-amber-500 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors inline-block text-center"
            >
              ✈️ Buscar Vuelos a Praga
            </a>
            <button
              onClick={onBack}
              className="bg-transparent border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-amber-500 transition-colors"
            >
              📖 Ver Más Guías
            </button>
          </div>
        </div>
      </div>
      
      {/* Artículos relacionados */}
      <RelatedArticles currentCategory="Guías" currentArticleId="praga-3-dias" />
    </article>
  );
};

export default PragueGuideArticle;