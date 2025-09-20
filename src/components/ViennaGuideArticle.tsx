import { ArrowLeft, Share2, Clock, Euro, MapPin, Star, Calendar, Camera, Coffee, Music, Crown, Heart } from 'lucide-react';
import RelatedArticles from './RelatedArticles';

interface ViennaGuideArticleProps {
  onBack: () => void;
}

const ViennaGuideArticle: React.FC<ViennaGuideArticleProps> = ({ onBack }) => {
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
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            Guía Completa
          </span>
        </div>
        
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Viena en 3 Días: Guía Imperial Completa
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
                  title: 'Viena en 3 Días: Guía Imperial Completa',
                  text: 'Descubre la capital musical de Europa con esta guía detallada',
                  url: window.location.href,
                })
                .catch((error) => console.log('Error sharing', error));
              } else {
                navigator.clipboard.writeText(window.location.href).then(() => {
                  alert('¡Enlace copiado al portapapeles!');
                }).catch(() => {
                  window.open(`https://twitter.com/intent/tweet?text=Viena en 3 Días: Guía Imperial Completa&url=${encodeURIComponent(window.location.href)}`, '_blank');
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
          src="https://images.pexels.com/photos/11932444/pexels-photo-11932444.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&dpr=1"
          alt="Vista panorámica de Viena con la Catedral de San Esteban y arquitectura imperial"
          className="w-full h-64 sm:h-80 object-cover rounded-2xl shadow-lg"
        />
      </div>

      {/* Contenido del artículo */}
      <div className="prose prose-lg max-w-none">
        
        {/* Introducción */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 mb-12">
          <p className="text-lg text-gray-700 leading-relaxed mb-0">
            <strong>Viena es mucho más que Mozart y Sachertorte.</strong> Es una ciudad donde cada esquina respira historia imperial, 
            donde los palacios conviven con cafés centenarios y donde la música clásica sigue siendo parte del día a día. 
            En 3 días puedes vivir la esencia de la capital austriaca sin prisas.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4 mb-0">
            Esta guía te llevará por los imprescindibles de Viena con un itinerario optimizado para aprovechar cada momento. 
            Desde el esplendor de Schönbrunn hasta un concierto en el Musikverein, prepárate para enamorarte de la ciudad 
            de los valses.
          </p>
        </div>

        {/* Información práctica */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">📋 Información Práctica</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">💰 Presupuesto Estimado</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Alojamiento (3 noches):</span>
                  <span className="font-semibold">150-300€</span>
                </div>
                <div className="flex justify-between">
                  <span>Comidas:</span>
                  <span className="font-semibold">90-150€</span>
                </div>
                <div className="flex justify-between">
                  <span>Transporte:</span>
                  <span className="font-semibold">25-35€</span>
                </div>
                <div className="flex justify-between">
                  <span>Atracciones:</span>
                  <span className="font-semibold">60-100€</span>
                </div>
                <div className="border-t pt-2 flex justify-between font-bold">
                  <span>Total por persona:</span>
                  <span className="text-emerald-600">325-585€</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">🎯 Datos Clave</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 text-sky-500 mr-2" />
                  <span>3 días completos</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 text-emerald-500 mr-2" />
                  <span>Centro histórico + Schönbrunn</span>
                </div>
                <div className="flex items-center">
                  <Euro className="h-4 w-4 text-orange-500 mr-2" />
                  <span>75-120€ por día</span>
                </div>
                <div className="flex items-center">
                  <Music className="h-4 w-4 text-purple-500 mr-2" />
                  <span>Incluye concierto clásico</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Día 1 */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold mr-4">1</span>
            Día 1: Entrada Triunfal a la Capital Musical
          </h2>
          
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-6">
            <h3 className="font-semibold text-purple-800 mb-2">🎼 Ruta del día:</h3>
            <p className="text-purple-700 text-sm">
              Ópera de Viena → Centro histórico → Catedral San Esteban → Palacio Hofburg → Café Sacher
            </p>
          </div>

          <div className="space-y-6">
            <div className="border-l-4 border-purple-500 pl-4">
              <h4 className="font-bold text-gray-900 mb-2">🎭 9:00 - Ópera de Viena (exterior)</h4>
              <p className="text-gray-700 text-sm mb-2">
                Comienza tu aventura vienesa en la Ópera Estatal, uno de los teatros de ópera más prestigiosos del mundo. 
                Aunque las entradas son caras, el edificio por fuera es espectacular y gratis de admirar.
              </p>
              <div className="bg-gray-50 rounded p-3 text-xs">
                <strong>💡 Consejo:</strong> Si quieres entrar, hay visitas guiadas por 9€ a las 14:00 y 15:00.
              </div>
            </div>

            <div className="border-l-4 border-purple-500 pl-4">
              <h4 className="font-bold text-gray-900 mb-2">🏛️ 10:00 - Centro Histórico y Catedral de San Esteban</h4>
              <p className="text-gray-700 text-sm mb-2">
                Camina hasta la Catedral de San Esteban (Stephansdom), el corazón de Viena. Su tejado de tejas coloridas 
                es icónico. Puedes subir a la torre sur (343 escalones) por 6€ para tener vistas panorámicas increíbles.
              </p>
              <div className="bg-gray-50 rounded p-3 text-xs">
                <strong>💰 Precios:</strong> Entrada catedral gratis • Torre sur: 6€ • Torre norte (ascensor): 7€
              </div>
            </div>

            <div className="border-l-4 border-purple-500 pl-4">
              <h4 className="font-bold text-gray-900 mb-2">👑 12:00 - Palacio Hofburg</h4>
              <p className="text-gray-700 text-sm mb-2">
                El complejo palaciego más importante de Viena. Recomiendo visitar los Apartamentos Imperiales 
                y el Museo Sisi para conocer la vida de la emperatriz más famosa de Austria.
              </p>
              <div className="bg-gray-50 rounded p-3 text-xs">
                <strong>💰 Entrada:</strong> Apartamentos Imperiales + Museo Sisi: 16€ • Duración: 2-3 horas
              </div>
            </div>

            <div className="border-l-4 border-purple-500 pl-4">
              <h4 className="font-bold text-gray-900 mb-2">☕ 15:30 - Café Sacher</h4>
              <p className="text-gray-700 text-sm mb-2">
                Termina el día en el legendario Café Sacher, hogar de la famosa Sachertorte. Es caro pero es una 
                experiencia única. El ambiente es elegante y la tarta, aunque cara, está deliciosa.
              </p>
              <div className="bg-gray-50 rounded p-3 text-xs">
                <strong>💰 Precios:</strong> Sachertorte: 7€ • Café: 4-6€ • Ambiente: Impagable
              </div>
            </div>
          </div>
        </div>

        {/* Día 2 */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold mr-4">2</span>
            Día 2: Esplendor Imperial de Schönbrunn
          </h2>
          
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-6">
            <h3 className="font-semibold text-purple-800 mb-2">🏰 Ruta del día:</h3>
            <p className="text-purple-700 text-sm">
              Palacio Schönbrunn → Jardines imperiales → Gloriette → Cultura cafetera vienesa
            </p>
          </div>

          <div className="space-y-6">
            <div className="border-l-4 border-purple-500 pl-4">
              <h4 className="font-bold text-gray-900 mb-2">🏰 9:00 - Palacio de Schönbrunn</h4>
              <p className="text-gray-700 text-sm mb-2">
                El Versalles austriaco. Dedica toda la mañana a este palacio imperial. La visita "Imperial Tour" 
                (22 habitaciones) es suficiente para la mayoría de visitantes. Los jardines son gratuitos y espectaculares.
              </p>
              <div className="bg-gray-50 rounded p-3 text-xs">
                <strong>💰 Entradas:</strong> Imperial Tour: 18€ • Grand Tour: 25€ • Solo jardines: Gratis
              </div>
            </div>

            <div className="border-l-4 border-purple-500 pl-4">
              <h4 className="font-bold text-gray-900 mb-2">🌺 11:30 - Jardines de Schönbrunn</h4>
              <p className="text-gray-700 text-sm mb-2">
                Pasea por los jardines barrocos más bonitos de Europa. No te pierdas el laberinto (entrada aparte) 
                y sube hasta la Gloriette para tener las mejores vistas del palacio y Viena.
              </p>
              <div className="bg-gray-50 rounded p-3 text-xs">
                <strong>💡 Tip:</strong> La subida a la Gloriette es gratis, solo pagas si quieres entrar al café (6€)
              </div>
            </div>

            <div className="border-l-4 border-purple-500 pl-4">
              <h4 className="font-bold text-gray-900 mb-2">🦌 14:00 - Zoo de Schönbrunn (opcional)</h4>
              <p className="text-gray-700 text-sm mb-2">
                Si viajas con niños o te gustan los animales, el zoo de Schönbrunn es el más antiguo del mundo 
                y está muy bien cuidado. Los pandas gigantes son la estrella.
              </p>
              <div className="bg-gray-50 rounded p-3 text-xs">
                <strong>💰 Entrada:</strong> Adultos: 25€ • Niños: 14€ • Duración: 2-3 horas
              </div>
            </div>

            <div className="border-l-4 border-purple-500 pl-4">
              <h4 className="font-bold text-gray-900 mb-2">☕ 16:00 - Café Central</h4>
              <p className="text-gray-700 text-sm mb-2">
                Uno de los cafés más famosos de Viena. Aquí escribían Freud, Trotsky y otros intelectuales. 
                El ambiente es auténtico y los pasteles, increíbles. Pide un Melange y Apfelstrudel.
              </p>
              <div className="bg-gray-50 rounded p-3 text-xs">
                <strong>📍 Ubicación:</strong> Herrengasse 14 • <strong>Ambiente:</strong> Histórico y elegante
              </div>
            </div>
          </div>
        </div>

        {/* Día 3 */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold mr-4">3</span>
            Día 3: Arte, Diversión y Gran Final Musical
          </h2>
          
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-6">
            <h3 className="font-semibold text-purple-800 mb-2">🎨 Ruta del día:</h3>
            <p className="text-purple-700 text-sm">
              Palacio Belvedere → Klimt "El Beso" → Prater → Musikverein → Concierto final
            </p>
          </div>

          <div className="space-y-6">
            <div className="border-l-4 border-purple-500 pl-4">
              <h4 className="font-bold text-gray-900 mb-2">🎨 9:00 - Palacio Belvedere</h4>
              <p className="text-gray-700 text-sm mb-2">
                Hogar de "El Beso" de Gustav Klimt, una de las obras más famosas del mundo. El palacio en sí 
                es precioso y las vistas desde los jardines son espectaculares. Dedica 2-3 horas.
              </p>
              <div className="bg-gray-50 rounded p-3 text-xs">
                <strong>💰 Entrada:</strong> Belvedere Superior: 17€ • Incluye "El Beso" de Klimt
              </div>
            </div>

            <div className="border-l-4 border-purple-500 pl-4">
              <h4 className="font-bold text-gray-900 mb-2">🎡 12:00 - Prater y Noria Gigante</h4>
              <p className="text-gray-700 text-sm mb-2">
                El parque de atracciones más antiguo del mundo. La Noria Gigante (Riesenrad) es icónica y ofrece 
                vistas panorámicas de Viena. Una vuelta dura 20 minutos y es muy relajante.
              </p>
              <div className="bg-gray-50 rounded p-3 text-xs">
                <strong>💰 Noria:</strong> 13€ adultos • <strong>Duración:</strong> 20 minutos por vuelta
              </div>
            </div>

            <div className="border-l-4 border-purple-500 pl-4">
              <h4 className="font-bold text-gray-900 mb-2">🎼 19:30 - Musikverein (Concierto)</h4>
              <p className="text-gray-700 text-sm mb-2">
                Termina tu estancia en Viena como debe ser: con un concierto en la sala de conciertos más famosa 
                del mundo. La acústica es perfecta y la experiencia, inolvidable.
              </p>
              <div className="bg-gray-50 rounded p-3 text-xs">
                <strong>🎫 Entradas:</strong> Desde 25€ (galería) hasta 150€ (platea) • Reserva con antelación
              </div>
            </div>
          </div>
        </div>

        {/* Dónde alojarse */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">🏨 Dónde Alojarse en Viena</h2>
          
          <div className="space-y-6">
            <div className="border border-emerald-200 rounded-lg p-4 bg-emerald-50">
              <h3 className="font-bold text-emerald-800 mb-2">💎 Zona Premium: Innere Stadt (Distrito 1)</h3>
              <p className="text-emerald-700 text-sm mb-2">
                El centro histórico. Caminas a todo, pero es lo más caro. Ideal si es tu primera vez en Viena 
                y quieres tenerlo todo cerca.
              </p>
              <div className="text-emerald-600 text-xs">
                <strong>Precio:</strong> 120-300€/noche • <strong>Ventaja:</strong> Todo a pie • <strong>Desventaja:</strong> Caro
              </div>
            </div>

            <div className="border border-sky-200 rounded-lg p-4 bg-sky-50">
              <h3 className="font-bold text-sky-800 mb-2">⚖️ Equilibrio: Mariahilf (Distrito 6)</h3>
              <p className="text-sky-700 text-sm mb-2">
                Mi zona favorita. Bien conectado, con ambiente local, restaurantes buenos y precios razonables. 
                A 10 minutos del centro en metro.
              </p>
              <div className="text-sky-600 text-xs">
                <strong>Precio:</strong> 80-150€/noche • <strong>Ventaja:</strong> Auténtico • <strong>Desventaja:</strong> Necesitas metro
              </div>
            </div>

            <div className="border border-orange-200 rounded-lg p-4 bg-orange-50">
              <h3 className="font-bold text-orange-800 mb-2">💰 Económico: Favoriten (Distrito 10)</h3>
              <p className="text-orange-700 text-sm mb-2">
                Más alejado pero bien conectado por metro. Zona residencial con precios más bajos. 
                Perfecto si tu presupuesto es ajustado.
              </p>
              <div className="text-orange-600 text-xs">
                <strong>Precio:</strong> 50-100€/noche • <strong>Ventaja:</strong> Barato • <strong>Desventaja:</strong> Más lejos
              </div>
            </div>
          </div>

          <div className="mt-6 bg-sky-50 border border-sky-200 rounded-lg p-4">
            <p className="text-sky-800 text-sm mb-0">
              👉 <strong>
                <a href="https://www.booking.com/" target="_blank" rel="noopener noreferrer">
                  Buscar alojamiento en Booking.com
                </a>
              </strong>
            </p>
          </div>
        </div>

        {/* Dónde comer */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">🍽️ Dónde Comer en Viena</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">🥨 Comida Tradicional</h3>
              <div className="space-y-3">
                <div className="border-l-4 border-orange-400 pl-3">
                  <h4 className="font-medium text-gray-900">Schnitzelwirt</h4>
                  <p className="text-gray-600 text-sm">El mejor schnitzel de Viena. Enorme, crujiente y auténtico.</p>
                  <span className="text-orange-600 text-xs font-semibold">15-20€ • Neubaugasse 52</span>
                </div>
                
                <div className="border-l-4 border-orange-400 pl-3">
                  <h4 className="font-medium text-gray-900">Gasthaus Pöschl</h4>
                  <p className="text-gray-600 text-sm">Ambiente local auténtico, precios justos, comida casera.</p>
                  <span className="text-orange-600 text-xs font-semibold">12-18€ • Weihburggasse 17</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">☕ Cafés Históricos</h3>
              <div className="space-y-3">
                <div className="border-l-4 border-purple-400 pl-3">
                  <h4 className="font-medium text-gray-900">Café Central</h4>
                  <p className="text-gray-600 text-sm">Histórico, elegante, donde escribían los intelectuales.</p>
                  <span className="text-purple-600 text-xs font-semibold">Café: 5€ • Herrengasse 14</span>
                </div>
                
                <div className="border-l-4 border-purple-400 pl-3">
                  <h4 className="font-medium text-gray-900">Café Sacher</h4>
                  <p className="text-gray-600 text-sm">Hogar de la Sachertorte original. Caro pero icónico.</p>
                  <span className="text-purple-600 text-xs font-semibold">Tarta: 7€ • Philharmoniker Str. 4</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Consejos finales */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">🎯 Consejos Finales para tu Viaje Imperial</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">💡 Tips Prácticos</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Compra la Vienna Card si planeas visitar muchos museos</li>
                <li>• Los domingos muchos museos tienen entrada reducida</li>
                <li>• Reserva conciertos con antelación, se agotan rápido</li>
                <li>• En los cafés históricos, tómate tu tiempo, es parte de la experiencia</li>
                <li>• El transporte público es excelente y puntual</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">🎼 Experiencias Únicas</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Concierto en el Musikverein o Konzerthaus</li>
                <li>• Sachertorte en el Café Sacher original</li>
                <li>• Paseo nocturno por el centro iluminado</li>
                <li>• Mercado Naschmarkt para productos locales</li>
                <li>• Vistas desde la Gloriette al atardecer</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Sistema de Transporte Público de Viena */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">🚇 Sistema de Transporte Público de Viena</h2>
          
          <p className="text-gray-700 mb-6">
            <strong>Viena tiene uno de los mejores sistemas de transporte público de Europa.</strong> Es puntual, 
            limpio, eficiente y cubre toda la ciudad perfectamente. Aquí te explico todo lo que necesitas saber:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="font-semibold text-blue-800 mb-3">🚊 Tipos de Transporte</h3>
              <ul className="text-blue-700 text-sm space-y-1">
                <li>• <strong>U-Bahn (Metro):</strong> 5 líneas, muy rápido</li>
                <li>• <strong>Straßenbahn (Tranvía):</strong> Histórico y pintoresco</li>
                <li>• <strong>Autobus:</strong> Llega donde no llegan metro/tranvía</li>
                <li>• <strong>S-Bahn:</strong> Trenes regionales</li>
              </ul>
            </div>
            
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="font-semibold text-green-800 mb-3">🎫 Tipos de Billetes</h3>
              <ul className="text-green-700 text-sm space-y-1">
                <li>• <strong>Billete sencillo:</strong> 2,40€</li>
                <li>• <strong>24 horas:</strong> 8€ (mi recomendación)</li>
                <li>• <strong>48 horas:</strong> 14,10€</li>
                <li>• <strong>72 horas:</strong> 17,10€</li>
                <li>• <strong>Semanal:</strong> 17,10€ (lunes a lunes)</li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
            <h3 className="font-semibold text-yellow-800 mb-2">⚠️ Importante sobre Validación</h3>
            <p className="text-yellow-700 text-sm">
              <strong>SIEMPRE valida tu billete antes de subir.</strong> Las máquinas están en las estaciones 
              y dentro de tranvías/autobuses. Las multas son de 103€ y los controladores van de civil.
            </p>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
            <h3 className="font-semibold text-purple-800 mb-2">🎯 Mi Recomendación</h3>
            <p className="text-purple-700 text-sm">
              Para 3 días, compra el billete de 72 horas por 17,10€. Te sale más barato que billetes sencillos 
              y puedes moverte sin pensar. Se compra en máquinas automáticas (aceptan tarjeta) o en la app WienMobil.
            </p>
          </div>
        </div>

        {/* Caminar por Viena */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">🚶‍♂️ Caminar por Viena - La Mejor Opción</h2>
          
          <p className="text-gray-700 mb-6">
            <strong>Viena es perfecta para caminar.</strong> El centro histórico es compacto, las calles están 
            bien cuidadas y hay cosas interesantes que ver en cada esquina. Además, es la forma más auténtica 
            de descubrir rincones que te perderías en transporte público.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="font-semibold text-green-800 mb-3">✅ Ventajas de Caminar</h3>
              <ul className="text-green-700 text-sm space-y-1">
                <li>• Descubres rincones únicos</li>
                <li>• Ahorras dinero en transporte</li>
                <li>• Ritmo relajado y flexible</li>
                <li>• Mejor para fotos</li>
                <li>• Ejercicio incluido</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="font-semibold text-blue-800 mb-3">📏 Distancias Caminando</h3>
              <ul className="text-blue-700 text-sm space-y-1">
                <li>• Ópera → Catedral: 8 min</li>
                <li>• Catedral → Hofburg: 5 min</li>
                <li>• Hofburg → Café Sacher: 3 min</li>
                <li>• Centro → Belvedere: 20 min</li>
                <li>• Belvedere → Prater: 25 min</li>
              </ul>
            </div>
          </div>

          <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
            <h3 className="font-semibold text-orange-800 mb-2">🎯 Mi Estrategia Mixta</h3>
            <p className="text-orange-700 text-sm">
              <strong>Día 1 y 3:</strong> Todo caminando en el centro histórico. <strong>Día 2:</strong> Metro hasta 
              Schönbrunn (está lejos) y luego caminar por los jardines. Es la combinación perfecta entre ahorro, 
              ejercicio y eficiencia.
            </p>
          </div>
        </div>

        {/* Apps esenciales */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">📱 Apps Esenciales para el Transporte</h2>
          
          <div className="space-y-6">
            <div className="border border-red-200 rounded-lg p-4 bg-red-50">
              <h3 className="font-bold text-red-800 mb-2">🚇 WienMobil (Oficial)</h3>
              <p className="text-red-700 text-sm mb-2">
                La app oficial de transporte de Viena. Puedes comprar billetes, ver horarios en tiempo real, 
                planificar rutas y hasta pagar con tarjeta. Funciona perfectamente y está en inglés.
              </p>
              <div className="text-red-600 text-xs">
                <strong>Ventajas:</strong> Oficial, billetes digitales, horarios reales • <strong>Idiomas:</strong> Alemán, inglés
              </div>
            </div>

            <div className="border border-purple-200 rounded-lg p-4 bg-purple-50">
              <h3 className="font-bold text-purple-800 mb-2">🗺️ Citymapper</h3>
              <p className="text-purple-700 text-sm mb-2">
                Mi favorita para planificar rutas. Te dice la opción más rápida, más barata, o más bonita para 
                llegar a cualquier sitio. Incluye caminar, transporte público y combinaciones.
              </p>
              <div className="text-purple-600 text-xs">
                <strong>Ventajas:</strong> Muy intuitiva, múltiples opciones, funciona offline • <strong>Idioma:</strong> Inglés
              </div>
            </div>

            <div className="border border-green-200 rounded-lg p-4 bg-green-50">
              <h3 className="font-bold text-green-800 mb-2">📍 Google Maps</h3>
              <p className="text-green-700 text-sm mb-2">
                Para caminar y orientarte. Descarga el mapa de Viena offline antes de viajar. También incluye 
                información de transporte público, aunque no es tan detallada como WienMobil.
              </p>
              <div className="text-green-600 text-xs">
                <strong>Ventajas:</strong> Mapas offline, navegación a pie, universal • <strong>Desventaja:</strong> No vende billetes
              </div>
            </div>
          </div>

          <div className="bg-sky-50 border border-sky-200 rounded-lg p-4 mt-6">
            <h3 className="font-semibold text-sky-800 mb-2">🎯 Mi Recomendación</h3>
            <p className="text-sky-700 text-sm">
              Descarga las tres: <strong>WienMobil para billetes y horarios, Citymapper para planificar rutas, 
              Google Maps para caminar y como backup offline.</strong> Entre las tres tienes cubierto cualquier 
              situación de transporte en Viena.
            </p>
          </div>
        </div>

        {/* CTA final */}
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">¿Listo para tu aventura imperial?</h3>
          <p className="text-lg mb-6 opacity-90">
            Viena te espera con sus palacios, música y cafés centenarios
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://www.booking.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-purple-500 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors inline-block"
            >
              🏨 Buscar Alojamiento
            </a>
            <a 
              href="https://kiwi.tpk.lv/z2gZyZ3E"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-purple-500 transition-colors inline-block"
            >
              ✈️ Buscar Vuelos
            </a>
          </div>
        </div>
      </div>
      
      {/* Artículos relacionados */}
      <RelatedArticles currentCategory="Guías" currentArticleId="viena-3-dias" />
    </article>
  );
};

export default ViennaGuideArticle;