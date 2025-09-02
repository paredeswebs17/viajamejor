import { ArrowLeft, Share2, Clock, MapPin, Euro, Calendar, Star, CheckCircle, ExternalLink, AlertTriangle } from 'lucide-react';

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
            Guía Completa
          </span>
        </div>
        
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
          Budapest en 4 Días: Tu Aventura Húngara Completa
        </h1>

        {/* Info compacta para móvil */}
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
                    text: 'Descubre Budapest con nuestro itinerario optimizado',
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
              className="inline-flex items-center text-gray-600 hover:text-sky-600 bg-gray-50 hover:bg-sky-50 px-2 py-1 rounded-lg transition-all duration-200 font-medium border border-gray-200 hover:border-sky-300 text-sm"
            >
              <Share2 className="h-3 w-3 mr-1" />
              <span>Compartir</span>
            </button>
          
        </div>
      </div>

      {/* Imagen destacada */}
      <div className="mb-8">
        <img
          src="https://images.unsplash.com/photo-1541849546-216549ae216d?auto=format&fit=crop&w=1200&q=80"
          alt="Vista panorámica del Parlamento de Budapest al atardecer con el río Danubio"
          className="w-full h-48 sm:h-64 lg:h-80 object-cover rounded-2xl shadow-lg"
        />
      </div>

      {/* Planning Estratégico */}
      <div className="bg-gradient-to-r from-sky-50 to-emerald-50 rounded-2xl p-6 sm:p-8 mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">📋 Planning Estratégico</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white rounded-lg shadow-sm">
            <thead>
              <tr className="bg-sky-500 text-white">
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">JORNADA</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">EXPERIENCIAS DEL DÍA</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-bold">DÍA 1</td>
                <td className="border border-gray-300 px-4 py-3">Parlamento + Recorrido histórico gratuito + Sinagoga Principal + Basílica de San Esteban</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-bold">DÍA 2</td>
                <td className="border border-gray-300 px-4 py-3">Fortaleza de Buda + Mirador de Pescadores + Travesía de puentes + Navegación nocturna</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-bold">DÍA 3</td>
                <td className="border border-gray-300 px-4 py-3">Aguas termales Széchenyi + Plaza Imperial + Boulevard Andrássy + Café histórico</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-bold">DÍA 4</td>
                <td className="border border-gray-300 px-4 py-3">Mercado tradicional + Colina panorámica + Exploración libre</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* DÍA 1 */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <span className="bg-sky-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">1</span>
          🏛️ DÍA 1: Poder Imperial y Herencia Cultural
        </h2>
        
        {/* Arranque Matutino */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Arranque Matutino (9:00h)</h3>
          <div className="bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-lg p-6">
            <h4 className="text-lg font-bold text-gray-900 mb-3">🔥 Parlamento Húngaro - Símbolo Nacional</h4>
            <p className="text-gray-700 mb-4">
              Inicia tu aventura húngara en el edificio gubernamental más espectacular de Europa. Sus cúpulas doradas y arquitectura neogótica te transportarán a la época imperial.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">Información esencial:</h5>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• <strong>Inversión:</strong> 6.000 HUF (≈ 16€)</li>
                  <li>• <strong>Duración:</strong> 90 minutos con audioguía</li>
                  <li>• <strong>Reserva:</strong> OBLIGATORIA con 24-48h anticipación</li>
                  <li>• <strong>Consejo:</strong> Llega 15 min antes para controles</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">Incluye:</h5>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Corona de San Esteban</li>
                  <li>• Joyas reales</li>
                  <li>• Salas ceremoniales</li>
                  <li>• Audioguía en español</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Inmersión Local */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Inmersión Local (11:00h)</h3>
          <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6">
            <h4 className="text-lg font-bold text-gray-900 mb-3">🚶 Recorrido Histórico Gratuito</h4>
            <p className="text-gray-700 mb-4">
              Conecta con la auténtica Budapest a través de guías locales apasionados.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">Detalles del tour:</h5>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• <strong>Costo:</strong> Completamente gratis (propina opcional)</li>
                  <li>• <strong>Duración:</strong> 2h 30min</li>
                  <li>• <strong>Inicio:</strong> Plaza Vörösmarty (punto céntrico)</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">Descubrirás:</h5>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Secretos históricos</li>
                  <li>• Mejores rincones fotogénicos</li>
                  <li>• Final: Entrada de la Sinagoga Central</li>
                  <li>• Idioma: Español disponible</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Patrimonio Judío */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Patrimonio Judío (13:30h)</h3>
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <h4 className="text-lg font-bold text-gray-900 mb-3">🕍 Gran Sinagoga - Memoria Viva</h4>
            <p className="text-gray-700 mb-4">
              La segunda sinagoga más grande del planeta y centro de la comunidad judía europea.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">Experiencia completa:</h5>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• <strong>Entrada:</strong> 4.500 HUF (≈ 12€)</li>
                  <li>• <strong>Tiempo:</strong> 75-90 minutos</li>
                  <li>• <strong>Arquitectura:</strong> Estilo morisco-bizantino único</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">Incluye:</h5>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Templo principal</li>
                  <li>• Museo Judío</li>
                  <li>• Jardín Memorial</li>
                  <li>• Impacto emocional garantizado</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Pausa Gastronómica */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">🍽️ Pausa Gastronómica - Barrio Judío</h3>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h4 className="text-lg font-bold text-gray-900 mb-3">Auténticos sabores húngaros:</h4>
            <div className="space-y-3">
              <div className="bg-white rounded-lg p-3 border border-gray-200">
                <h5 className="font-semibold text-gray-900">Frici Papa</h5>
                <p className="text-sm text-gray-700">Goulash tradicional de la abuela (8-12€)</p>
              </div>
              <div className="bg-white rounded-lg p-3 border border-gray-200">
                <h5 className="font-semibold text-gray-900">Spinoza Café</h5>
                <p className="text-sm text-gray-700">Ambiente bohemio, menú completo 10-15€</p>
              </div>
              <div className="bg-white rounded-lg p-3 border border-gray-200">
                <h5 className="font-semibold text-gray-900">Mazel Tov</h5>
                <p className="text-sm text-gray-700">Mediterráneo en patio histórico (12-18€)</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-4">
              <strong>Horario local:</strong> Húngaros almuerzan 13:00-14:00 (antes que España)
            </p>
          </div>
        </div>

        {/* Culminación del Día */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Culminación del Día (16:00h)</h3>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h4 className="text-lg font-bold text-gray-900 mb-3">⛪ Basílica de San Esteban + Mirador Panorámico</h4>
            <p className="text-gray-700 mb-4">
              Termina el día en las alturas con vistas que quitan el aliento.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">Opciones de visita:</h5>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• <strong>Solo basílica:</strong> 600 HUF (≈ 2€)</li>
                  <li>• <strong>Combo completo:</strong> 2.900 HUF (≈ 8€)</li>
                  <li>• <strong>Recomendación:</strong> Combo completo al atardecer</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">En la cima:</h5>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Ascensor: Te lleva a 96 metros</li>
                  <li>• Vista 360°: Todo Budapest + Danubio</li>
                  <li>• Mejor momento: 2h antes del atardecer</li>
                </ul>
              </div>
            </div>
            <div className="bg-orange-100 border border-orange-300 rounded-lg p-4">
              <p className="text-orange-800 text-sm">
                <strong>💡 Consejo de experto:</strong> Sube 2 horas antes del atardecer para ver la transformación de la ciudad de día a noche.
              </p>
            </div>
          </div>
        </div>

        {/* Vida Nocturna */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Vida Nocturna Alternativa (21:00h)</h3>
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h4 className="text-lg font-bold text-gray-900 mb-3">🍺 Szimpla Kert - Revolución de los Ruin Bars</h4>
            <p className="text-gray-700 mb-4">
              Experimenta el concepto que Budapest exportó al mundo entero.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">La experiencia:</h5>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• <strong>Concepto:</strong> Edificios en ruinas convertidos en bares</li>
                  <li>• <strong>Entrada:</strong> Gratuita</li>
                  <li>• <strong>Bebidas:</strong> Cervezas 3-5€, cócteles 6-8€</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">Ambiente único:</h5>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Arte urbano ecléctico</li>
                  <li>• Decoración surrealista</li>
                  <li>• Música live</li>
                  <li>• <strong>Tip:</strong> Llega 21:00-22:00</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* DÍA 2 */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <span className="bg-sky-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">2</span>
          🏰 DÍA 2: Realeza Medieval y Romance Danubiano
        </h2>

        {/* Ascenso Real */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Ascenso Real (9:00h)</h3>
          <div className="bg-sky-50 border border-sky-200 rounded-lg p-6">
            <h4 className="text-lg font-bold text-gray-900 mb-3">🚠 Funicular Histórico al Castillo</h4>
            <p className="text-gray-700 mb-4">
              Comienza como la realeza húngara, ascendiendo en el funicular centenario.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">Opciones de subida:</h5>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• <strong>Funicular:</strong> 1.500 HUF (≈ 4€) ida/vuelta</li>
                  <li>• <strong>Caminata:</strong> Gratis + 15 min subida</li>
                  <li>• <strong>Recomendación:</strong> Sube en funicular, baja andando</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">🏰 Complejo del Castillo:</h5>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• <strong>Exterior gratis:</strong> Jardines + vistas</li>
                  <li>• <strong>Galería Nacional:</strong> 3.200 HUF (≈ 9€)</li>
                  <li>• <strong>Museo Historia:</strong> 2.800 HUF (≈ 7€)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Joya Arquitectónica */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Joya Arquitectónica (10:30h)</h3>
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <h4 className="text-lg font-bold text-gray-900 mb-3">👑 Bastión de los Pescadores - El Mirador Más Famoso</h4>
            <p className="text-gray-700 mb-4">
              El lugar más fotografiado de Budapest por una razón poderosa.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">Niveles de acceso:</h5>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• <strong>Terrazas inferiores:</strong> GRATIS</li>
                  <li>• <strong>Torres superiores:</strong> 1.000 HUF (≈ 3€)</li>
                  <li>• <strong>Mejor momento:</strong> 10:30-11:30h</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">Vista icónica:</h5>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Parlamento dorado reflejado</li>
                  <li>• Danubio serpenteante</li>
                  <li>• Luz perfecta, menos gente</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Final Mágico */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Final Mágico (18:00h)</h3>
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6">
            <h4 className="text-lg font-bold text-gray-900 mb-3">⛵ Crucero Nocturno por el Danubio ⭐ MOMENTO CUMBRE</h4>
            <p className="text-gray-700 mb-4">
              La experiencia más romántica y fotogénica de Budapest.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">Detalles del crucero:</h5>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• <strong>Duración:</strong> 70 minutos de pura magia</li>
                  <li>• <strong>Precio:</strong> 4.000 HUF (≈ 12€)</li>
                  <li>• <strong>Incluye:</strong> Audio-guía español + bebida</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">Vista única:</h5>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Parlamento dorado iluminado</li>
                  <li>• Castillo con luces</li>
                  <li>• Todos los puentes</li>
                  <li>• <strong>Timing:</strong> Atardecer + noche</li>
                </ul>
              </div>
            </div>
            <div className="bg-orange-100 border border-orange-300 rounded-lg p-4">
              <p className="text-orange-800 text-sm">
                <strong>🚨 SE AGOTA:</strong> Reserva con anticipación, especialmente fines de semana.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* DÍA 3 */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <span className="bg-sky-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">3</span>
          🌊 DÍA 3: Aguas Milenarias y Esplendor Imperial
        </h2>

        {/* Relajación Termal */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Relajación Termal Matutina (9:00h)</h3>
          <div className="bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-200 rounded-lg p-6">
            <h4 className="text-lg font-bold text-gray-900 mb-3">♨️ Balnearios Széchenyi - Ritual Húngaro Milenario</h4>
            <p className="text-gray-700 mb-4">
              Sumérgete en la tradición termal más auténtica de Europa. ¡Funciona incluso con nieve!
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">Guía completa:</h5>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• <strong>Días laborables:</strong> 10.500 HUF (≈ 25€) día completo</li>
                  <li>• <strong>Fines de semana:</strong> 12.000 HUF (≈ 29€) día completo</li>
                  <li>• <strong>Piscinas:</strong> 18 diferentes</li>
                  <li>• <strong>Temperaturas:</strong> 18°C a 38°C</li>
                  <li>• <strong>Tiempo ideal:</strong> 3-4 horas</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">Qué llevar:</h5>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Toalla personal + chanclas</li>
                  <li>• Bañador obligatorio</li>
                  <li>• Gorro (solo piscina natación)</li>
                  <li>• Vestuarios con taquillas incluidas</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-4">
              <h3 className="font-semibold text-orange-800 mb-2">⚠️ IMPORTANTE - Nueva restricción</h3>
              <p className="text-orange-700 text-sm">
                <strong>Desde agosto 2025, solo se permite entrada a mayores de 14 años en los balnearios Széchenyi.</strong>
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h5 className="font-semibold text-gray-900 mb-2">🛁 Alternativa Elegante: Balneario Gellért</h5>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• <strong>Estilo:</strong> Art Nouveau, más sofisticado</li>
                <li>• <strong>Ventaja:</strong> Completamente cubierto (perfecto invierno)</li>
                <li>• <strong>Ambiente:</strong> Menos auténtico, más instagrameable</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Monumentos Imperiales */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Monumentos Imperiales (13:30h)</h3>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h4 className="text-lg font-bold text-gray-900 mb-3">🏛️ Plaza de los Héroes - Epicentro Húngaro</h4>
            <p className="text-gray-700 mb-4">
              El monumento más patriótico de Hungría te cuenta mil años de historia.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">Qué verás:</h5>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• <strong>Entrada:</strong> Completamente GRATIS</li>
                  <li>• <strong>Monumentos:</strong> 7 estatuas tribus fundadoras</li>
                  <li>• <strong>Historia:</strong> Mil años de conquistas</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">🏰 Castillo Vajdahunyad:</h5>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• <strong>Historia:</strong> Exposición Universal 1896</li>
                  <li>• <strong>Precio:</strong> 2.000 HUF (≈ 5€) interior</li>
                  <li>• <strong>Foto obligada:</strong> Con "Escultura del Anónimo"</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* New York Café */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Experiencia Legendaria (18:30h)</h3>
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-lg p-6">
            <h4 className="text-lg font-bold text-gray-900 mb-3">☕ New York Café - El Más Hermoso del Mundo</h4>
            <p className="text-gray-700 mb-4">
              Donde se reunía la élite intelectual de Budapest en la Belle Époque.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">La experiencia completa:</h5>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• <strong>Ambiente:</strong> Techos dorados + espejos</li>
                  <li>• <strong>Precios:</strong> 8-15€ café + pastel</li>
                  <li>• <strong>Historia:</strong> Inaugurado 1894</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">Consejos prácticos:</h5>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• <strong>Reserva:</strong> Mesa o espera 30-45 min</li>
                  <li>• <strong>Valor:</strong> Es experiencia, no solo café</li>
                  <li>• <strong>Tip:</strong> Ve al final del día</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* DÍA 4 */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <span className="bg-sky-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">4</span>
          🌅 DÍA 4: Autenticidad Local y Despedida Panorámica
        </h2>

        {/* Mercado Central */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Inmersión Cultural (9:00h)</h3>
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h4 className="text-lg font-bold text-gray-900 mb-3">🏪 Mercado Central - Corazón Gastronómico</h4>
            <p className="text-gray-700 mb-4">
              El mercado cubierto más espectacular de Europa Central.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">Planta baja - Productos locales:</h5>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• <strong>Páprika húngara:</strong> Desde 2€</li>
                  <li>• <strong>Salami de Szeged:</strong> Calidad mundial</li>
                  <li>• <strong>Vinos Tokaj:</strong> Desde 12€</li>
                  <li>• <strong>Foie gras húngaro:</strong> Especialidad nacional</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">Primera planta - Gastronomía:</h5>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• <strong>Lángos:</strong> Pan frito tradicional (3-4€)</li>
                  <li>• <strong>Goulash auténtico:</strong> Puestos familiares (6-8€)</li>
                  <li>• <strong>Chimney cake:</strong> Kürtőskalács (2-3€)</li>
                  <li>• <strong>Tiempo:</strong> 1-2 horas explorando</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Colina Gellért */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Ascensión Final (10:30h)</h3>
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
            <h4 className="text-lg font-bold text-gray-900 mb-3">⛰️ Colina Gellért - Mirador Supremo de Budapest</h4>
            <p className="text-gray-700 mb-4">
              Las vistas más impresionantes de toda la capital húngara.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">Opciones de ascenso:</h5>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• <strong>Caminata:</strong> 35-40 min, gratis</li>
                  <li>• <strong>Autobús 27:</strong> 530 HUF (≈ 1.5€)</li>
                  <li>• <strong>Taxi:</strong> 2.500 HUF (≈ 7€)</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">En la cima:</h5>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• <strong>Estatua Libertad:</strong> 14 metros</li>
                  <li>• <strong>Mirador Citadella:</strong> Panorámica 360°</li>
                  <li>• <strong>Costo:</strong> Totalmente gratuito</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Presupuestos Detallados */}
      <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 text-center">💰 Presupuestos Reales y Detallados</h2>
        
        {/* Mochilero */}
        <div className="mb-6">
          <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6">
            <h3 className="text-lg font-bold text-emerald-800 mb-4">🎒 ESTILO MOCHILERO - €100/día</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Alojamiento (€20/noche):</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Hostales céntricos: Maverick City Lodge</li>
                  <li>• Ubicación: Distrito V o VII</li>
                  <li>• Incluye: WiFi + cocina compartida</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Alimentación (€25/día):</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Desayuno: Mercados + panadería (3-5€)</li>
                  <li>• Almuerzo: Puestos callejeros (5-8€)</li>
                  <li>• Cena: Supermercado + cocina (8-12€)</li>
                </ul>
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 mt-4">
              <p className="text-emerald-800 font-semibold text-center">
                <strong>Total 4 días: ≈ €400</strong>
              </p>
            </div>
          </div>
        </div>

        {/* Confort */}
        <div className="mb-6">
          <div className="bg-sky-50 border border-sky-200 rounded-lg p-6">
            <h3 className="text-lg font-bold text-sky-800 mb-4">🏨 ESTILO CONFORT - €180/día</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Alojamiento (€70/noche):</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Hoteles 3*: Roombach Hotel</li>
                  <li>• Ubicación: Centro absoluto</li>
                  <li>• Incluye: Desayuno + ubicación premium</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Alimentación (€45/día):</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Desayuno: Hotel incluido</li>
                  <li>• Almuerzo: Restaurantes locales (12-18€)</li>
                  <li>• Cena: Experiencias gastronómicas (15-25€)</li>
                </ul>
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 mt-4">
              <p className="text-sky-800 font-semibold text-center">
                <strong>Total 4 días: ≈ €720</strong>
              </p>
            </div>
          </div>
        </div>

        {/* Premium */}
        <div className="mb-6">
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <h3 className="text-lg font-bold text-purple-800 mb-4">💎 ESTILO PREMIUM - €300/día</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Alojamiento (€130/noche):</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Hoteles 4*/5*: Four Seasons, Aria Hotel</li>
                  <li>• Ubicación: Frente al Danubio</li>
                  <li>• Incluye: Spa + vistas + servicios premium</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Alimentación (€70/día):</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Restaurantes top: Onyx, Costes</li>
                  <li>• Experiencias culinarias + maridajes</li>
                  <li>• New York Café + cafés históricos</li>
                </ul>
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 mt-4">
              <p className="text-purple-800 font-semibold text-center">
                <strong>Total 4 días: ≈ €1.200</strong>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mejor época */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">🌡️ Cuándo Ir - Timing Perfecto</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-lg p-4 text-center">
            <h3 className="font-semibold text-orange-800 mb-2">🌸 Primavera (Abril-Mayo) ⭐ ÉPOCA IDEAL</h3>
            <p className="text-sm text-orange-700 mb-2">Temperatura: 15-22°C, perfecta para caminar</p>
            <p className="text-xs text-orange-600">Menos turistas + precios medios + clima perfecto</p>
          </div>
          <div className="bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-200 rounded-lg p-4 text-center">
            <h3 className="font-semibold text-emerald-800 mb-2">🍂 Otoño (Sep-Oct) ⭐ RECOMENDADO</h3>
            <p className="text-sm text-emerald-700 mb-2">Temperatura: 12-20°C</p>
            <p className="text-xs text-emerald-600">Colores otoñales + menos multitudes + luz fotográfica</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-center">
            <h3 className="font-semibold text-yellow-800 mb-2">☀️ Verano (Jun-Ago)</h3>
            <p className="text-sm text-yellow-700 mb-2">Temperatura: 22-28°C</p>
            <p className="text-xs text-yellow-600">Días largos + terrazas + festivales</p>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
            <h3 className="font-semibold text-blue-800 mb-2">❄️ Invierno (Nov-Mar)</h3>
            <p className="text-sm text-blue-700 mb-2">Temperatura: -2°C a 8°C</p>
            <p className="text-xs text-blue-600">Balnearios en nieve = experiencia única</p>
          </div>
        </div>
      </div>

      {/* Estrategia Financiera */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">💳 Estrategia Financiera - Ahorro Inteligente</h2>
        
        <div className="mb-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Moneda y Pagos</h3>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <ul className="text-sm text-gray-700 space-y-2">
              <li>• <strong>Divisa:</strong> Florín húngaro (HUF)</li>
              <li>• <strong>Cambio aproximado:</strong> 1€ = 395 HUF (variable)</li>
              <li>• <strong>Regla de oro:</strong> SIEMPRE pagar en florines cuando te pregunten</li>
            </ul>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-bold text-gray-900 mb-4">🎯 Tarjetas Zero Comisiones - AHORRO GARANTIZADO</h3>
          
          {/* Solo Revolut */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 border border-blue-200">
            <div className="text-center">
              <h4 className="font-bold text-gray-900 text-lg mb-3">
                💳 Revolut - Tarjeta sin comisiones
              </h4>
              <p className="text-gray-700 text-sm mb-4">
                Perfecto para sacar efectivo sin comisiones. Ahorro real: 15-25€ en cambio de divisa. Cambio al tipo interbancario real.
              </p>
              <div className="space-y-2 text-xs text-gray-600 mb-6">
                <div className="flex items-center justify-center">
                  <CheckCircle className="h-3 w-3 text-emerald-500 mr-2" />
                  <span>0% comisiones en pagos</span>
                </div>
                <div className="flex items-center justify-center">
                  <CheckCircle className="h-3 w-3 text-emerald-500 mr-2" />
                  <span>Retiros gratis hasta 200€/mes</span>
                </div>
                <div className="flex items-center justify-center">
                  <CheckCircle className="h-3 w-3 text-emerald-500 mr-2" />
                  <span>Cambio al tipo de cambio real</span>
                </div>
              </div>
              <a
                href="https://revolut.com/referral/?referral-code=antoni22jf!AUG1-25-AR-CL1H-CRY&geo-redirect"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <span>Conseguir Revolut GRATIS</span>
                <ExternalLink className="h-4 w-4 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Errores Costosos */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">🚨 Errores Costosos que Evitar</h2>
        
        <div className="space-y-4">
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <h3 className="font-semibold text-red-800 mb-2">❌ Error #1: Gestión de dinero</h3>
            <p className="text-red-700 text-sm mb-2">Problema: Usar tarjetas con comisiones altas</p>
            <p className="text-red-700 text-sm mb-2">Solución: Revolut gratis</p>
            <p className="text-red-700 text-sm font-semibold">Ahorro: 20-30€ en 4 días</p>
          </div>

          <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
            <h3 className="font-semibold text-orange-800 mb-2">❌ Error #2: Reservas de última hora</h3>
            <p className="text-orange-700 text-sm mb-2">Problema: Parlamento + cruceros se agotan</p>
            <p className="text-orange-700 text-sm mb-2">Solución: Reservar 48h antes mínimo</p>
            <p className="text-orange-700 text-sm font-semibold">Consecuencia: Perderte lo mejor de Budapest</p>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <h3 className="font-semibold text-yellow-800 mb-2">❌ Error #3: Saltarse balnearios</h3>
            <p className="text-yellow-700 text-sm mb-2">Problema: "No me gustan las piscinas públicas"</p>
            <p className="text-yellow-700 text-sm mb-2">Realidad: Es la experiencia más única de Budapest</p>
            <p className="text-yellow-700 text-sm font-semibold">Tip: Prueba aunque no seas fan de piscinas</p>
          </div>
        </div>
      </div>

      {/* Protección de Viaje */}
      <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-lg p-6 border border-emerald-200 mb-8">
        <div className="text-center">
          <h3 className="font-bold text-gray-900 text-lg mb-3">
            🛡️ Protección Total de Viaje
          </h3>
          <h4 className="font-semibold text-gray-900 mb-3">Seguro IATI Estándar</h4>
          <p className="text-gray-700 text-sm mb-4">
            Cobertura médica: 200.000€ en Europa. Precio 4 días: 12-15€ aproximadamente. 
            Última actualización: Septiembre 2025
          </p>
          <div className="space-y-2 text-xs text-gray-600 mb-6">
            <div className="flex items-center justify-center">
              <CheckCircle className="h-3 w-3 text-emerald-500 mr-2" />
              <span>Cobertura médica hasta 200.000€</span>
            </div>
            <div className="flex items-center justify-center">
              <CheckCircle className="h-3 w-3 text-emerald-500 mr-2" />
              <span>Atención 24/7 en español</span>
            </div>
            <div className="flex items-center justify-center">
              <CheckCircle className="h-3 w-3 text-emerald-500 mr-2" />
              <span>5% descuento exclusivo</span>
            </div>
          </div>
          <a
            href="https://www.iatiseguros.com?r=37344279073491"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <span>Conseguir IATI con descuento</span>
            <ExternalLink className="h-4 w-4 ml-2" />
          </a>
        </div>
      </div>

      {/* Kit de Supervivencia Digital */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">📱 Kit de Supervivencia Digital</h2>
        <p className="text-gray-700 mb-6">Apps que salvarán tu viaje:</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-sky-50 border border-sky-200 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">BKK Info</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Transporte público oficial</li>
              <li>• Horarios en tiempo real</li>
              <li>• Planificador de rutas</li>
            </ul>
          </div>
          
          <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Bolt</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Taxis más económicos</li>
              <li>• Precios fijos sin sorpresas</li>
              <li>• Disponible 24/7</li>
            </ul>
          </div>
          
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Google Translate</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Húngaro muy diferente a lenguas latinas</li>
              <li>• Función cámara para menús</li>
              <li>• Descarga húngaro offline</li>
            </ul>
          </div>
          
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Maps.me</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Mapas offline detallados</li>
              <li>• Funciona sin internet</li>
              <li>• Marca tus sitios favoritos</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Preguntas Resueltas */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">🗣️ Preguntas Resueltas por Viajeros Reales</h2>
        
        <div className="space-y-4">
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">💶 ¿Es mejor pagar en euros o florines?</h3>
            <p className="text-gray-700 text-sm">
              Siempre florines. Cuando te ofrezcan pagar en euros, di "NO" - te cobrarán 8-12% más.
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">🚿 ¿Qué llevar a los balnearios?</h3>
            <p className="text-gray-700 text-sm">
              <strong>Imprescindible:</strong> Toalla + chanclas + bañador. 
              <strong>No necesario:</strong> Gorro (solo en piscina de natación). 
              <strong>Opcional:</strong> Alquilan toallas desechables.
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">🎫 ¿Merece la pena Budapest Card?</h3>
            <p className="text-gray-700 text-sm">
              Para 4 días SÍ. Precio: 85€ para 4 días. Ahorro: 15-25€ si visitas 4+ atracciones. 
              Incluye transporte ilimitado + entradas gratuitas.
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">❄️ ¿Funcionan balnearios en invierno?</h3>
            <p className="text-gray-700 text-sm">
              ¡MEJOR en invierno! Experiencia única: piscina 38°C con nieve alrededor.
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">🍺 ¿Cuánto cuestan las bebidas?</h3>
            <p className="text-gray-700 text-sm">
              Cerveza local: 2-4€ en bares normales. Ruin bars: 3-6€. 
              Cócteles: 6-10€ normales, 12-18€ en terrazas premium.
            </p>
          </div>
        </div>
      </div>

      {/* Herramientas para tu viaje */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">🛠️ Herramientas para tu viaje</h2>
        
        <div className="space-y-6">
          {/* Vuelos */}
          <div className="bg-gradient-to-r from-sky-50 to-blue-50 rounded-lg p-6 border border-sky-200">
            <div className="text-center">
              <h3 className="font-bold text-gray-900 text-lg mb-3">
                ✈️ Vuelos a Budapest
              </h3>
              <p className="text-gray-700 text-sm mb-4">
                Encuentra los mejores precios para volar a Budapest desde España. Vuelos desde 80€ ida y vuelta.
              </p>
              <div className="space-y-2 text-xs text-gray-600 mb-6">
                <div className="flex items-center justify-center">
                  <CheckCircle className="h-3 w-3 text-emerald-500 mr-2" />
                  <span>Compara todas las aerolíneas</span>
                </div>
                <div className="flex items-center justify-center">
                  <CheckCircle className="h-3 w-3 text-emerald-500 mr-2" />
                  <span>Fechas flexibles para mejores precios</span>
                </div>
                <div className="flex items-center justify-center">
                  <CheckCircle className="h-3 w-3 text-emerald-500 mr-2" />
                  <span>Vuelos directos desde Madrid y Barcelona</span>
                </div>
              </div>
              <a
                href="https://kiwi.tpk.lv/z2gZyZ3E"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gradient-to-r from-sky-500 to-blue-500 hover:from-sky-600 hover:to-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <span>Buscar vuelos</span>
                <ExternalLink className="h-4 w-4 ml-2" />
              </a>
            </div>
          </div>

          {/* Alojamiento */}
          <div className="bg-gradient-to-r from-pink-50 to-red-50 rounded-lg p-6 border border-pink-200">
            <div className="text-center">
              <h3 className="font-bold text-gray-900 text-lg mb-3">
                🏨 Alojamiento en Budapest
              </h3>
              <p className="text-gray-700 text-sm mb-4">
                Hoteles y apartamentos en las mejores zonas de Budapest. Desde hostels céntricos hasta hoteles de lujo.
              </p>
              <div className="space-y-2 text-xs text-gray-600 mb-6">
                <div className="flex items-center justify-center">
                  <CheckCircle className="h-3 w-3 text-emerald-500 mr-2" />
                  <span>Distrito V - Centro absoluto</span>
                </div>
                <div className="flex items-center justify-center">
                  <CheckCircle className="h-3 w-3 text-emerald-500 mr-2" />
                  <span>Cancelación gratuita</span>
                </div>
                <div className="flex items-center justify-center">
                  <CheckCircle className="h-3 w-3 text-emerald-500 mr-2" />
                  <span>Desde 25€/noche</span>
                </div>
              </div>
              <a
                href="https://www.booking.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <span>Buscar alojamiento</span>
                <ExternalLink className="h-4 w-4 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Productos Esenciales */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">🎯 Productos Esenciales para Budapest</h2>
        
        <div className="space-y-4">
          <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 flex items-center justify-between">
            <div className="flex-1">
              <h4 className="font-semibold text-gray-900 text-sm mb-1">Mochila Cabina Ryanair</h4>
              <p className="text-xs text-gray-600 mb-1">40x25x20cm exactos</p>
              <span className="text-sm font-semibold text-emerald-600">Desde 35€</span>
            </div>
            <a
              href="https://www.amazon.es/Hayayu-40x20x25-Mochilas-Senderismo-Impermeable/dp/B0CBVFL64Z?tag=viajamejor-21"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-2 px-4 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center space-x-1 text-sm ml-4"
            >
              <span>VER OFERTA</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>

          <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 flex items-center justify-between">
            <div className="flex-1">
              <h4 className="font-semibold text-gray-900 text-sm mb-1">Power Bank 10000mAh</h4>
              <p className="text-xs text-gray-600 mb-1">Fotos todo el día</p>
              <span className="text-sm font-semibold text-emerald-600">Desde 20€</span>
            </div>
            <a
              href="https://www.amazon.es/INIU-10000mAh-Cargador-Portatil-Tel%C3%A9fono/dp/B08VD632WJ?tag=viajamejor-21"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-2 px-4 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center space-x-1 text-sm ml-4"
            >
              <span>VER OFERTA</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>

          <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 flex items-center justify-between">
            <div className="flex-1">
              <h4 className="font-semibold text-gray-900 text-sm mb-1">Adaptador Universal</h4>
              <p className="text-xs text-gray-600 mb-1">Enchufe tipo C/F</p>
              <span className="text-sm font-semibold text-emerald-600">Desde 15€</span>
            </div>
            <a
              href="https://www.amazon.es/TESSAN-Adaptador-Universal-Internacional-Americano/dp/B0B2DRC76L?tag=viajamejor-21"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-2 px-4 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center space-x-1 text-sm ml-4"
            >
              <span>VER OFERTA</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>

      {/* Gastronomía Húngara */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">🍽️ Gastronomía Húngara - Sabores Auténticos</h2>
        
        <div className="mb-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Platos que Debes Probar:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Goulash (Gulyás)</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Sopa nacional con carne + páprika</li>
                <li>• Precio: 6-12€ según restaurante</li>
                <li>• Mejor en: Frici Papa, Menza</li>
              </ul>
            </div>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Lángos</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Pan frito con crema agria + queso</li>
                <li>• Precio: 3-5€ en puestos callejeros</li>
                <li>• Mejor en: Mercado Central planta superior</li>
              </ul>
            </div>
            
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Schnitzel húngaro</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Versión local más especiada</li>
                <li>• Precio: 8-15€</li>
                <li>• Acompañamiento: Patatas + ensalada</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Kürtőskalács (Chimney Cake)</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Postre cilíndrico dulce con canela</li>
                <li>• Precio: 2-4€</li>
                <li>• Dónde: Puestos callejeros zona turística</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-4">Restaurantes Verificados:</h3>
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">COMIDA TRADICIONAL:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="bg-gray-50 rounded-lg p-3">
                  <h5 className="font-semibold text-gray-900 text-sm">Frici Papa</h5>
                  <p className="text-xs text-gray-600">Comida de abuela (8-12€)</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <h5 className="font-semibold text-gray-900 text-sm">Menza</h5>
                  <p className="text-xs text-gray-600">Húngara moderna (12-18€)</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <h5 className="font-semibold text-gray-900 text-sm">Gundel</h5>
                  <p className="text-xs text-gray-600">Histórico de lujo (25-40€)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bonus Experiencias Secretas */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 sm:p-8 mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">🎁 Bonus: Experiencias Secretas</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-2">Para Aventureros:</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Cuevas del Castillo: Laberinto (8€)</li>
              <li>• Isla Margarita en bici: 5€/día</li>
              <li>• Mercadillo Ecseri: Sábados</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-2">Para Románticos:</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Cena en Danubio: Cruceros (35-50€)</li>
              <li>• Atardecer Bastión: Sin multitudes 19:00h</li>
              <li>• Paseo nocturno puentes iluminados</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-2">Para Gourmets:</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Tour gastronómico: 6 especialidades (45€)</li>
              <li>• Mercado productores: Sábados Hold utca</li>
              <li>• Clases cocina húngara: Goulash (35€)</li>
            </ul>
          </div>
        </div>
      </div>

      {/* CTA final */}
      <div className="bg-gradient-to-r from-sky-500 to-emerald-500 rounded-2xl p-6 sm:p-8 text-center text-white mb-8">
        <h3 className="text-xl sm:text-2xl font-bold mb-4">¿Listo para descubrir Budapest?</h3>
        <p className="text-base sm:text-lg mb-6 opacity-90">
          Empieza a planificar tu viaje con nuestras herramientas recomendadas
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="https://kiwi.tpk.lv/z2gZyZ3E"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-sky-500 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Buscar vuelos
          </a>
          <a 
            href="https://www.booking.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-sky-500 transition-colors"
          >
            Buscar hoteles
          </a>
        </div>
      </div>

      {/* Comentarios de Viajeros */}
      <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">📝 Comentarios de Viajeros</h2>
        
        <div className="space-y-4">
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <p className="text-gray-700 text-sm italic mb-2">
              "Seguimos la guía al pie de la letra y Budapest nos enamoró. Los tips de las tarjetas nos ahorraron 25€!"
            </p>
            <p className="text-gray-600 text-xs">- María, Madrid</p>
          </div>
          
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <p className="text-gray-700 text-sm italic mb-2">
              "La información de los balnearios fue perfecta. Fuimos en enero con nieve y fue mágico."
            </p>
            <p className="text-gray-600 text-xs">- Carlos, Barcelona</p>
          </div>
        </div>
        
        <div className="mt-6 text-center">
          <p className="text-gray-600 text-sm mb-4">¿Has usado esta guía? Comparte tu experiencia:</p>
          <button
            onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-sky-500 hover:bg-sky-600 text-white font-medium py-2 px-6 rounded-lg transition-colors"
          >
            Dejar comentario
          </button>
        </div>
      </div>

      {/* Footer de la guía */}
      <div className="text-center text-gray-600 text-sm">
        <p className="mb-2">
          <strong>Guía actualizada en Septiembre 2025</strong> | Información verificada y precios actuales
        </p>
        <p>
          ¡Que disfrutes Budapest al máximo! 🇭🇺
        </p>
      </div>
    </article>
  );
};

export default BudapestGuideArticle;