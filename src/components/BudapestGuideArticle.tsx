import { ArrowLeft, Share2, Clock, MapPin, Euro, Calendar, Star, CheckCircle, ExternalLink, AlertTriangle } from 'lucide-react';

interface BudapestGuideArticleProps {
  onBack: () => void;
}

const BudapestGuideArticle: React.FC<BudapestGuideArticleProps> = ({ onBack }) => {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-24">
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

        <div className="flex flex-col gap-4 mb-6 items-start">
          <div className="flex flex-wrap items-center gap-2 text-gray-600 text-xs">
            <span className="flex items-center bg-gray-100 px-2 py-1 rounded-full">
              <Clock className="h-3 w-3 mr-1" />
              15 min
            </span>
            <span className="flex items-center bg-gray-100 px-2 py-1 rounded-full">
              <MapPin className="h-3 w-3 mr-1" />
              Budapest
            </span>
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
                  alert('Enlace copiado al portapapeles');
                }).catch(() => {
                  window.open(`https://twitter.com/intent/tweet?text=Budapest en 4 Días: Guía Completa&url=${encodeURIComponent(window.location.href)}`, '_blank');
                });
              }
            }}
            className="inline-flex items-center text-gray-600 hover:text-sky-600 bg-gray-100 hover:bg-sky-50 px-2 py-1 rounded-full transition-all duration-200 text-xs border border-gray-200 hover:border-sky-300 self-start"
          >
            <Share2 className="h-3 w-3 mr-1" />
            <span>Compartir</span>
          </button>
        </div>
      </div>

      <div className="mb-8">
        <img
          src="https://images.unsplash.com/photo-1541849546-216549ae216d?auto=format&fit=crop&w=1200&q=80"
          alt="Vista panorámica del Parlamento de Budapest al atardecer con el río Danubio"
          className="w-full h-48 sm:h-64 lg:h-80 object-cover rounded-2xl shadow-lg"
        />
      </div>

      <div className="bg-gradient-to-r from-sky-50 to-emerald-50 rounded-2xl p-6 sm:p-8 mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Planning Estratégico</h2>
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

      <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <span className="bg-gradient-to-br from-sky-500 to-emerald-500 text-white w-12 h-12 rounded-2xl flex items-center justify-center text-lg font-bold mr-4 shadow-lg">1</span>
          DÍA 1: Poder Imperial y Herencia Cultural
        </h2>
        
        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Arranque Matutino (9:00h)</h3>
          <div className="bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-lg p-6">
            <h4 className="text-lg font-bold text-gray-900 mb-3">Parlamento Húngaro - Símbolo Nacional</h4>
            <p className="text-gray-700 mb-4">
              Inicia tu aventura húngara en el edificio gubernamental más espectacular de Europa. Sus cúpulas doradas y arquitectura neogótica te transportarán a la época imperial.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">Información esencial:</h5>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Inversión: 6.000 HUF (aproximadamente 15 euros)</li>
                  <li>• Duración: 90 minutos con audioguía</li>
                  <li>• Reserva: OBLIGATORIA con 24-48h anticipación</li>
                  <li>• Consejo: Llega 15 min antes para controles</li>
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
            <div className="bg-white rounded-lg p-3 border border-gray-200">
              <a href="https://gyg.me/gMPSGtKr" target="_blank" rel="noopener noreferrer"
                 className="text-sky-600 hover:text-sky-800 underline text-sm font-medium">
                Reservar entradas oficiales del Parlamento
              </a>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Inmersión Local (11:00h)</h3>
          <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6">
            <h4 className="text-lg font-bold text-gray-900 mb-3">Recorrido Histórico Gratuito</h4>
            <p className="text-gray-700 mb-4">
              Conecta con la auténtica Budapest a través de guías locales apasionados.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">Detalles del tour:</h5>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Costo: Completamente gratis (propina opcional)</li>
                  <li>• Duración: 2h 30min</li>
                  <li>• Inicio: Plaza Vörösmarty (punto céntrico)</li>
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

        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Patrimonio Judío (13:30h)</h3>
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <h4 className="text-lg font-bold text-gray-900 mb-3">Gran Sinagoga - Memoria Viva</h4>
            <p className="text-gray-700 mb-4">
              La segunda sinagoga más grande del planeta y centro de la comunidad judía europea.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">Experiencia completa:</h5>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Entrada: 5.000 HUF (aproximadamente 14 euros)</li>
                  <li>• Tiempo: 75-90 minutos</li>
                  <li>• Arquitectura: Estilo morisco-bizantino único</li>
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
            <div className="bg-white rounded-lg p-3 border border-gray-200">
              <a href="https://gyg.me/vbht7C3s" target="_blank" rel="noopener noreferrer"
                 className="text-sky-600 hover:text-sky-800 underline text-sm font-medium">
                Entradas oficiales Gran Sinagoga
              </a>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Pausa Gastronómica - Barrio Judío</h3>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h4 className="text-lg font-bold text-gray-900 mb-3">Auténticos sabores húngaros:</h4>
            <div className="space-y-3">
              <div className="bg-white rounded-lg p-3 border border-gray-200">
                <h5 className="font-semibold text-gray-900">Frici Papa</h5>
                <p className="text-sm text-gray-700 mb-1">Goulash tradicional de la abuela (8-12 euros)</p>
                <a href="https://www.fricipapa.hu/" target="_blank" rel="noopener noreferrer" 
                   className="text-sky-600 hover:text-sky-800 underline text-xs">
                  Web oficial
                </a>
                <p className="text-xs text-red-600 mt-1">Solo efectivo • Horario: 11:00-23:00</p>
              </div>
              <div className="bg-white rounded-lg p-3 border border-gray-200">
                <h5 className="font-semibold text-gray-900">Spinoza Café</h5>
                <p className="text-sm text-gray-700 mb-1">Ambiente bohemio, menú completo 10-15 euros</p>
                <a href="https://spinoza-szinhaz.hu/en" target="_blank" rel="noopener noreferrer"
                   className="text-sky-600 hover:text-sky-800 underline text-xs">
                  Reservas y menú
                </a>
                <p className="text-xs text-emerald-600 mt-1">Piano en vivo todas las noches</p>
              </div>
              <div className="bg-white rounded-lg p-3 border border-gray-200">
                <h5 className="font-semibold text-gray-900">Mazel Tov</h5>
                <p className="text-sm text-gray-700 mb-1">Mediterráneo en patio histórico (12-18 euros)</p>
                <a href="https://mazeltov.hu/en" target="_blank" rel="noopener noreferrer"
                   className="text-sky-600 hover:text-sky-800 underline text-xs">
                  Web oficial y reservas
                </a>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-4">
              Horario local: Húngaros almuerzan 13:00-14:00 (antes que España)
            </p>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Culminación del Día (16:00h)</h3>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h4 className="text-lg font-bold text-gray-900 mb-3">Basílica de San Esteban + Mirador Panorámico</h4>
            <p className="text-gray-700 mb-4">
              Termina el día en las alturas con vistas que quitan el aliento.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">Opciones de visita:</h5>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Solo basílica: 600 HUF (aproximadamente 2 euros)</li>
                  <li>• Combo completo: 2.900 HUF (aproximadamente 8 euros)</li>
                  <li>• Recomendación: Combo completo al atardecer</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">En la cima:</h5>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Ascensor: Te lleva a 96 metros</li>
                  <li>• Vista 360 grados: Todo Budapest + Danubio</li>
                  <li>• Mejor momento: 2h antes del atardecer</li>
                </ul>
              </div>
            </div>
           <div className="bg-white rounded-lg p-3 border border-gray-200">
              <a href="https://gyg.me/gMPSGtKr" target="_blank" rel="noopener noreferrer"
                 className="text-sky-600 hover:text-sky-800 underline text-sm font-medium">
                Reservar entradas oficiales del Parlamento
              </a>
          </div>
<div className="bg-orange-100 border border-orange-300 rounded-lg p-4 mt-4">
              <p className="text-orange-800 text-sm">
                Consejo de experto: Sube 2 horas antes del atardecer para ver la transformación de la ciudad de día a noche.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Vida Nocturna Alternativa (21:00h)</h3>
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h4 className="text-lg font-bold text-gray-900 mb-3">Szimpla Kert - Revolución de los Ruin Bars</h4>
            <p className="text-gray-700 mb-4">
              Experimenta el concepto que Budapest exportó al mundo entero.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">La experiencia:</h5>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Concepto: Edificios en ruinas convertidos en bares</li>
                  <li>• Entrada: Gratuita</li>
                  <li>• Bebidas: Cervezas 3-5 euros, cócteles 6-8 euros</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">Ambiente único:</h5>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Arte urbano ecléctico</li>
                  <li>• Decoración surrealista</li>
                  <li>• Música live</li>
                  <li>• Tip: Llega 21:00-22:00</li>
                </ul>
              </div>
            </div>
            <div className="bg-white rounded-lg p-3 border border-gray-200">
              <a href="https://szimpla.hu/" target="_blank" rel="noopener noreferrer"
                 className="text-sky-600 hover:text-sky-800 underline text-sm font-medium">
                Szimpla Kert oficial
              </a>
              <p className="text-xs text-emerald-600 mt-1">Mercadillo dominical 9:00-14:00h</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <span className="bg-gradient-to-br from-emerald-500 to-sky-500 text-white w-12 h-12 rounded-2xl flex items-center justify-center text-lg font-bold mr-4 shadow-lg">2</span>
          DÍA 2: Realeza Medieval y Romance Danubiano
        </h2>

        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Ascenso Real (9:00h)</h3>
          <div className="bg-sky-50 border border-sky-200 rounded-lg p-6">
            <h4 className="text-lg font-bold text-gray-900 mb-3">Funicular Histórico al Castillo</h4>
            <p className="text-gray-700 mb-4">
              Comienza como la realeza húngara, ascendiendo en el funicular centenario.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">Opciones de subida:</h5>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Funicular: 1.500 HUF (aproximadamente 4 euros) ida/vuelta</li>
                  <li>• Caminata: Gratis + 15 min subida</li>
                  <li>• Recomendación: Sube en funicular, baja andando</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">Complejo del Castillo:</h5>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Exterior gratis: Jardines + vistas</li>
                  <li>• Galería Nacional: 3.200 HUF (aproximadamente 9 euros)</li>
                  <li>• Museo Historia: 2.800 HUF (aproximadamente 7 euros)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Joya Arquitectónica (10:30h)</h3>
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <h4 className="text-lg font-bold text-gray-900 mb-3">Bastión de los Pescadores - El Mirador Más Famoso</h4>
            <p className="text-gray-700 mb-4">
              El lugar más fotografiado de Budapest por una razón poderosa.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">Niveles de acceso:</h5>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Terrazas inferiores: GRATIS</li>
                  <li>• Torres superiores: 1.000 HUF (aproximadamente 3 euros)</li>
                  <li>• Mejor momento: 10:30-11:30h</li>
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

        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Final Mágico (18:00h)</h3>
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6">
            <h4 className="text-lg font-bold text-gray-900 mb-3">Crucero Nocturno por el Danubio - MOMENTO CUMBRE</h4>
            <p className="text-gray-700 mb-4">
              La experiencia más romántica y fotogénica de Budapest.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">Detalles del crucero:</h5>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Duración: 70 minutos de pura magia</li>
                  <li>• Precio: 4.000 HUF (aproximadamente 12 euros)</li>
                  <li>• Incluye: Audio-guía español + bebida</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">Vista única:</h5>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Parlamento dorado iluminado</li>
                  <li>• Castillo con luces</li>
                  <li>• Todos los puentes</li>
                  <li>• Timing: Atardecer + noche</li>
                </ul>
              </div>
            </div>
            <div className="bg-orange-100 border border-orange-300 rounded-lg p-4">
              <p className="text-orange-800 text-sm">
                SE AGOTA: Reserva con anticipación, especialmente fines de semana.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <span className="bg-gradient-to-br from-purple-500 to-pink-500 text-white w-12 h-12 rounded-2xl flex items-center justify-center text-lg font-bold mr-4 shadow-lg">3</span>
          DÍA 3: Aguas Milenarias y Esplendor Imperial
        </h2>

        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Relajación Termal Matutina (9:00h)</h3>
          <div className="bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-200 rounded-lg p-6">
            <h4 className="text-lg font-bold text-gray-900 mb-3">Balnearios Széchenyi - Ritual Húngaro Milenario</h4>
            <p className="text-gray-700 mb-4">
              Sumérgete en la tradición termal más auténtica de Europa. Funciona incluso con nieve!
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">Guía completa:</h5>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Días laborables: 5.900 HUF (aproximadamente 16 euros) día completo</li>
                  <li>• Fines de semana: 6.400 HUF (aproximadamente 17 euros) día completo</li>
                  <li>• Piscinas: 18 diferentes</li>
                  <li>• Temperaturas: 18°C a 38°C</li>
                  <li>• Tiempo ideal: 3-4 horas</li>
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
              <h3 className="font-semibold text-orange-800 mb-2">IMPORTANTE - Nueva restricción</h3>
              <p className="text-orange-700 text-sm">
                Desde agosto 2025, solo se permite entrada a mayores de 14 años en los balnearios Széchenyi.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-3 border border-gray-200 mb-4">
              <a href="https://gyg.me/cTU7N3tH" target="_blank" rel="noopener noreferrer"
                 className="text-sky-600 hover:text-sky-800 underline text-sm font-medium">
                Entradas oficiales Széchenyi
              </a>
              <p className="text-xs text-gray-600 mt-1">Horario: 6:00-22:00 todos los días</p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h5 className="font-semibold text-gray-900 mb-2">Alternativa Elegante: Balneario Gellért</h5>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Estilo: Art Nouveau, más sofisticado</li>
                <li>• Ventaja: Completamente cubierto (perfecto invierno)</li>
                <li>• Ambiente: Menos auténtico, más instagrameable</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Monumentos Imperiales (13:30h)</h3>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h4 className="text-lg font-bold text-gray-900 mb-3">Plaza de los Héroes - Epicentro Húngaro</h4>
            <p className="text-gray-700 mb-4">
              El monumento más patriótico de Hungría te cuenta mil años de historia.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">Qué verás:</h5>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Entrada: Completamente GRATIS</li>
                  <li>• Monumentos: 7 estatuas tribus fundadoras</li>
                  <li>• Historia: Mil años de conquistas</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">Castillo Vajdahunyad:</h5>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Historia: Exposición Universal 1896</li>
                  <li>• Precio: 2.000 HUF (aproximadamente 5 euros) interior</li>
                  <li>• Foto obligada: Con Escultura del Anónimo</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Experiencia Legendaria (18:30h)</h3>
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-lg p-6">
            <h4 className="text-lg font-bold text-gray-900 mb-3">New York Café - El Más Hermoso del Mundo</h4>
            <p className="text-gray-700 mb-4">
              Donde se reunía la élite intelectual de Budapest en la Belle Époque.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">La experiencia completa:</h5>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Ambiente: Techos dorados + espejos</li>
                  <li>• Precios: 8-15 euros café + pastel</li>
                  <li>• Historia: Inaugurado 1894</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">Consejos prácticos:</h5>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Reservas: Solo cenas después 18:00h</li>
                  <li>• Valor: Es experiencia, no solo café</li>
                  <li>• Música live: Desde 11:00h</li>
                </ul>
              </div>
            </div>
            <div className="bg-white rounded-lg p-3 border border-gray-200">
              <a href="https://newyorkcafe.hu/en/" target="_blank" rel="noopener noreferrer"
                 className="text-sky-600 hover:text-sky-800 underline text-sm font-medium">
                Reservas New York Café
              </a>
              <p className="text-xs text-gray-600 mt-1">Horario: 8:00-24:00 (lun-mié), 8:00-01:00 (jue-dom)</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <span className="bg-gradient-to-br from-orange-500 to-red-500 text-white w-12 h-12 rounded-2xl flex items-center justify-center text-lg font-bold mr-4 shadow-lg">4</span>
          DÍA 4: Autenticidad Local y Despedida Panorámica
        </h2>

        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Inmersión Cultural (9:00h)</h3>
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h4 className="text-lg font-bold text-gray-900 mb-3">Mercado Central - Corazón Gastronómico</h4>
            <p className="text-gray-700 mb-4">
              El mercado cubierto más espectacular de Europa Central.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">Planta baja - Productos locales:</h5>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Páprika húngara: Desde 2 euros</li>
                  <li>• Salami de Szeged: Calidad mundial</li>
                  <li>• Vinos Tokaj: Desde 12 euros</li>
                  <li>• Foie gras húngaro: Especialidad nacional</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">Primera planta - Gastronomía:</h5>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Lángos: Pan frito tradicional (3-4 euros)</li>
                  <li>• Goulash auténtico: Puestos familiares (6-8 euros)</li>
                  <li>• Chimney cake: Kürtőskalács (2-3 euros)</li>
                  <li>• Tiempo: 1-2 horas explorando</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Ascensión Final (10:30h)</h3>
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
            <h4 className="text-lg font-bold text-gray-900 mb-3">Colina Gellért - Mirador Supremo de Budapest</h4>
            <p className="text-gray-700 mb-4">
              Las vistas más impresionantes de toda la capital húngara.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">Opciones de ascenso:</h5>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Caminata: 35-40 min, gratis</li>
                  <li>• Autobús 27: 530 HUF (aproximadamente 1.5 euros)</li>
                  <li>• Taxi: 2.500 HUF (aproximadamente 7 euros)</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">En la cima:</h5>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Estatua Libertad: 14 metros</li>
                  <li>• Mirador Citadella: Panorámica 360 grados</li>
                  <li>• Costo: Totalmente gratuito</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 text-center">Presupuestos Reales y Detallados</h2>
        
        <div className="mb-6">
          <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6">
            <h3 className="text-lg font-bold text-emerald-800 mb-4">ESTILO MOCHILERO - 100 euros/día</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Alojamiento (20 euros/noche):</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Hostales céntricos: Maverick City Lodge</li>
                  <li>• Ubicación: Distrito V o VII</li>
                  <li>• Incluye: WiFi + cocina compartida</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Alimentación (25 euros/día):</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Desayuno: Mercados + panadería (3-5 euros)</li>
                  <li>• Almuerzo: Puestos callejeros (5-8 euros)</li>
                  <li>• Cena: Supermercado + cocina (8-12 euros)</li>
                </ul>
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 mt-4">
              <p className="text-emerald-800 font-semibold text-center">
                Total 4 días: aproximadamente 400 euros
              </p>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <div className="bg-sky-50 border border-sky-200 rounded-lg p-6">
            <h3 className="text-lg font-bold text-sky-800 mb-4">ESTILO CONFORT - 180 euros/día</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Alojamiento (70 euros/noche):</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Hoteles 3*: Roombach Hotel</li>
                  <li>• Ubicación: Centro absoluto</li>
                  <li>• Incluye: Desayuno + ubicación premium</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Alimentación (45 euros/día):</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Desayuno: Hotel incluido</li>
                  <li>• Almuerzo: Restaurantes locales (12-18 euros)</li>
                  <li>• Cena: Experiencias gastronómicas (15-25 euros)</li>
                </ul>
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 mt-4">
              <p className="text-sky-800 font-semibold text-center">
                Total 4 días: aproximadamente 720 euros
              </p>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <h3 className="text-lg font-bold text-purple-800 mb-4">ESTILO PREMIUM - 300 euros/día</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Alojamiento (130 euros/noche):</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Hoteles 4*/5*: Four Seasons, Aria Hotel</li>
                  <li>• Ubicación: Frente al Danubio</li>
                  <li>• Incluye: Spa + vistas + servicios premium</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Alimentación (70 euros/día):</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Restaurantes top: Onyx, Costes</li>
                  <li>• Experiencias culinarias + maridajes</li>
                  <li>• New York Café + cafés históricos</li>
                </ul>
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 mt-4">
              <p className="text-purple-800 font-semibold text-center">
                Total 4 días: aproximadamente 1.200 euros
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Cuándo Ir - Timing Perfecto</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-lg p-4 text-center">
            <h3 className="font-semibold text-orange-800 mb-2">Primavera (Abril-Mayo) - ÉPOCA IDEAL</h3>
            <p className="text-sm text-orange-700 mb-2">Temperatura: 15-22°C, perfecta para caminar</p>
            <p className="text-xs text-orange-600">Menos turistas + precios medios + clima perfecto</p>
          </div>
          <div className="bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-200 rounded-lg p-4 text-center">
            <h3 className="font-semibold text-emerald-800 mb-2">Otoño (Sep-Oct) - RECOMENDADO</h3>
            <p className="text-sm text-emerald-700 mb-2">Temperatura: 12-20°C</p>
            <p className="text-xs text-emerald-600">Colores otoñales + menos multitudes + luz fotográfica</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-center">
            <h3 className="font-semibold text-yellow-800 mb-2">Verano (Jun-Ago)</h3>
            <p className="text-sm text-yellow-700 mb-2">Temperatura: 22-28°C</p>
            <p className="text-xs text-yellow-600">Días largos + terrazas + festivales</p>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
            <h3 className="font-semibold text-blue-800 mb-2">Invierno (Nov-Mar)</h3>
            <p className="text-sm text-blue-700 mb-2">Temperatura: -2°C a 8°C</p>
            <p className="text-xs text-blue-600">Balnearios en nieve = experiencia única</p>
          </div>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Estrategia Financiera - Ahorro Inteligente</h2>
        
        <div className="mb-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Moneda y Pagos</h3>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <ul className="text-sm text-gray-700 space-y-2">
              <li>• Divisa: Florín húngaro (HUF)</li>
              <li>• Cambio actual: 1 euro = 395 HUF (septiembre 2025)</li>
              <li>• Regla de oro: SIEMPRE pagar en florines cuando te pregunten</li>
            </ul>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Tarjetas Zero Comisiones - AHORRO GARANTIZADO</h3>
          
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 border border-blue-200">
            <div className="text-center">
              <h4 className="font-bold text-gray-900 text-lg mb-3">
                Revolut - Tarjeta sin comisiones
              </h4>
              <p className="text-gray-700 text-sm mb-4">
                Perfecto para sacar efectivo sin comisiones. Ahorro real: 15-25 euros en cambio de divisa. Cambio al tipo interbancario real.
              </p>
              <div className="space-y-2 text-xs text-gray-600 mb-6">
                <div className="flex items-center justify-center">
                  <CheckCircle className="h-3 w-3 text-emerald-500 mr-2" />
                  <span>0% comisiones en pagos</span>
                </div>
                <div className="flex items-center justify-center">
                  <CheckCircle className="h-3 w-3 text-emerald-500 mr-2" />
                  <span>Retiros gratis hasta 200 euros/mes</span>
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

      <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Errores Costosos que Evitar</h2>
        
        <div className="space-y-4">
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <h3 className="font-semibold text-red-800 mb-2">Error #1: Gestión de dinero</h3>
            <p className="text-red-700 text-sm mb-2">Problema: Usar tarjetas con comisiones altas</p>
            <p className="text-red-700 text-sm mb-2">Solución: Revolut gratis</p>
            <p className="text-red-700 text-sm font-semibold">Ahorro: 20-30 euros en 4 días</p>
          </div>

          <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
            <h3 className="font-semibold text-orange-800 mb-2">Error #2: Reservas de última hora</h3>
            <p className="text-orange-700 text-sm mb-2">Problema: Parlamento + cruceros se agotan</p>
            <p className="text-orange-700 text-sm mb-2">Solución: Reservar 48h antes mínimo</p>
            <p className="text-orange-700 text-sm font-semibold">Consecuencia: Perderte lo mejor de Budapest</p>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <h3 className="font-semibold text-yellow-800 mb-2">Error #3: Saltarse balnearios</h3>
            <p className="text-yellow-700 text-sm mb-2">Problema: No me gustan las piscinas públicas</p>
            <p className="text-yellow-700 text-sm mb-2">Realidad: Es la experiencia más única de Budapest</p>
            <p className="text-yellow-700 text-sm font-semibold">Tip: Prueba aunque no seas fan de piscinas</p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-lg p-6 border border-emerald-200 mb-8">
        <div className="text-center">
          <h3 className="font-bold text-gray-900 text-lg mb-3">
            Protección Total de Viaje
          </h3>
          <h4 className="font-semibold text-gray-900 mb-3">Seguro IATI Estándar</h4>
          <p className="text-gray-700 text-sm mb-4">
            Cobertura médica: 200.000 euros en Europa. Precio 4 días: 12-15 euros aproximadamente. 
            Última actualización: Septiembre 2025
          </p>
          <div className="space-y-2 text-xs text-gray-600 mb-6">
            <div className="flex items-center justify-center">
              <CheckCircle className="h-3 w-3 text-emerald-500 mr-2" />
              <span>Cobertura médica hasta 200.000 euros</span>
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

      <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Kit de Supervivencia Digital</h2>
        <p className="text-gray-700 mb-6">Apps que salvarán tu viaje:</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-sky-50 border border-sky-200 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">BKK Info</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Google Maps (mapas offline)</li>
              <li>• Horarios en tiempo real</li>
              <li>• Planificador de rutas</li>
            </ul>
            <a href="https://bkk.hu/en/" target="_blank" rel="noopener noreferrer"
               className="text-sky-600 hover:text-sky-800 underline text-xs">
              Web oficial BKK
            </a>
          </div>
          
          <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Bolt</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Taxis más económicos</li>
              <li>• Precios fijos sin sorpresas</li>
              <li>• Disponible 24/7</li>
            </ul>
            <a href="https://bolt.eu/" target="_blank" rel="noopener noreferrer"
               className="text-sky-600 hover:text-sky-800 underline text-xs">
              Descargar Bolt
            </a>
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
            <h3 className="font-semibold text-gray-900 mb-2">Google Maps</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Mapas offline detallados</li>
              <li>• Funciona sin internet</li>
              <li>• Marca tus sitios favoritos</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Preguntas Resueltas por Viajeros Reales</h2>
        
        <div className="space-y-4">
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">¿Es mejor pagar en euros o florines?</h3>
            <p className="text-gray-700 text-sm">
              Siempre florines. Cuando te ofrezcan pagar en euros, di NO - te cobrarán 8-12% más.
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">¿Qué llevar a los balnearios?</h3>
            <p className="text-gray-700 text-sm">
              Imprescindible: Toalla + chanclas + bañador. 
              No necesario: Gorro (solo en piscina de natación). 
              Opcional: Alquilan toallas desechables.
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">¿Merece la pena Budapest Card?</h3>
            <p className="text-gray-700 text-sm">
              Para 4 días SÍ. Precio: 85 euros para 4 días. Ahorro: 15-25 euros si visitas 4+ atracciones. 
              Incluye transporte ilimitado + entradas gratuitas.
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">¿Funcionan balnearios en invierno?</h3>
            <p className="text-gray-700 text-sm">
              MEJOR en invierno! Experiencia única: piscina 38°C con nieve alrededor.
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">¿Cuánto cuestan las bebidas?</h3>
            <p className="text-gray-700 text-sm">
              Cerveza local: 2-4 euros en bares normales. Ruin bars: 3-6 euros. 
              Cócteles: 6-10 euros normales, 12-18 euros en terrazas premium.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Herramientas para tu viaje</h2>
        
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-sky-50 to-blue-50 rounded-lg p-6 border border-sky-200">
            <div className="text-center">
              <h3 className="font-bold text-gray-900 text-lg mb-3">
                Vuelos a Budapest
              </h3>
              <p className="text-gray-700 text-sm mb-4">
                Encuentra los mejores precios para volar a Budapest desde España. Vuelos desde 80 euros ida y vuelta.
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

          <div className="bg-gradient-to-r from-pink-50 to-red-50 rounded-lg p-6 border border-pink-200">
            <div className="text-center">
              <h3 className="font-bold text-gray-900 text-lg mb-3">
                Alojamiento en Budapest
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
                  <span>Desde 25 euros/noche</span>
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

      <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Productos Esenciales para Budapest</h2>
        
        <div className="space-y-4">
          <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 flex items-center justify-between">
            <div className="flex-1">
              <h4 className="font-semibold text-gray-900 text-sm mb-1">Mochila Cabina Ryanair</h4>
              <p className="text-xs text-gray-600 mb-1">40x25x20cm exactos</p>
              <span className="text-sm font-semibold text-emerald-600">Desde 35 euros</span>
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
              <span className="text-sm font-semibold text-emerald-600">Desde 20 euros</span>
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
              <span className="text-sm font-semibold text-emerald-600">Desde 15 euros</span>
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

      <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Gastronomía Húngara - Sabores Auténticos</h2>
        
        <div className="mb-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Platos que Debes Probar:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Goulash (Gulyás)</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Sopa nacional con carne + páprika</li>
                <li>• Precio: 6-12 euros según restaurante</li>
                <li>• Mejor en: Frici Papa, Menza</li>
              </ul>
            </div>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Lángos</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Pan frito con crema agria + queso</li>
                <li>• Precio: 3-5 euros en puestos callejeros</li>
                <li>• Mejor en: Mercado Central planta superior</li>
              </ul>
            </div>
            
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Schnitzel húngaro</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Versión local más especiada</li>
                <li>• Precio: 8-15 euros</li>
                <li>• Acompañamiento: Patatas + ensalada</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Kürtőskalács (Chimney Cake)</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Postre cilíndrico dulce con canela</li>
                <li>• Precio: 2-4 euros</li>
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
                  <p className="text-xs text-gray-600 mb-1">Comida de abuela (8-12 euros)</p>
                  <a href="https://www.fricipapa.hu/" target="_blank" rel="noopener noreferrer"
                     className="text-sky-600 hover:text-sky-800 underline text-xs">
                    Web oficial
                  </a>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <h5 className="font-semibold text-gray-900 text-sm">Menza</h5>
                  <p className="text-xs text-gray-600 mb-1">Húngara moderna (12-18 euros)</p>
                  <a href="https://www.menzaetterem.hu/en/" target="_blank" rel="noopener noreferrer"
                     className="text-sky-600 hover:text-sky-800 underline text-xs">
                    Web oficial
                  </a>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <h5 className="font-semibold text-gray-900 text-sm">Gundel</h5>
                  <p className="text-xs text-gray-600">Histórico de lujo (25-40 euros)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Enlaces Oficiales Útiles</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-3">Atracciones Principales</h3>
            <div className="space-y-2 text-sm">
              <a href="https://gyg.me/gMPSGtKr" target="_blank" rel="noopener noreferrer"
                 className="block text-sky-600 hover:text-sky-800 underline">
                Parlamento - Entradas
              </a>
              <a href="https://gyg.me/cTU7N3tH" target="_blank" rel="noopener noreferrer"
                 className="block text-sky-600 hover:text-sky-800 underline">
                Balnearios Széchenyi
              </a>
              <a href="https://gyg.me/vbht7C3s" target="_blank" rel="noopener noreferrer"
                 className="block text-sky-600 hover:text-sky-800 underline">
                Gran Sinagoga
              </a>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-3">Restaurantes</h3>
            <div className="space-y-2 text-sm">
              <a href="https://newyorkcafe.hu/en/" target="_blank" rel="noopener noreferrer"
                 className="block text-sky-600 hover:text-sky-800 underline">
                New York Café
              </a>
              <a href="https://mazeltov.hu/en" target="_blank" rel="noopener noreferrer"
                 className="block text-sky-600 hover:text-sky-800 underline">
                Mazel Tov
              </a>
              <a href="https://spinoza-szinhaz.hu/en" target="_blank" rel="noopener noreferrer"
                 className="block text-sky-600 hover:text-sky-800 underline">
                Spinoza Café
              </a>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-3">Transporte</h3>
            <div className="space-y-2 text-sm">
              <a href="https://bkk.hu/en/" target="_blank" rel="noopener noreferrer"
                 className="block text-sky-600 hover:text-sky-800 underline">
                BKK Transporte Público
              </a>
              <a href="https://bolt.eu/" target="_blank" rel="noopener noreferrer"
                 className="block text-sky-600 hover:text-sky-800 underline">
                Bolt Taxi
              </a>
              <a href="https://szimpla.hu/" target="_blank" rel="noopener noreferrer"
                 className="block text-sky-600 hover:text-sky-800 underline">
                Szimpla Kert
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 sm:p-8 mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Bonus: Experiencias Secretas</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-2">Para Aventureros:</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Cuevas del Castillo: Laberinto (8 euros)</li>
              <li>• Isla Margarita en bici: 5 euros/día</li>
              <li>• Mercadillo Ecseri: Sábados</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-2">Para Románticos:</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Cena en Danubio: Cruceros (35-50 euros)</li>
              <li>• Atardecer Bastión: Sin multitudes 19:00h</li>
              <li>• Paseo nocturno puentes iluminados</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-2">Para Gourmets:</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Tour gastronómico: 6 especialidades (45 euros)</li>
              <li>• Mercado productores: Sábados Hold utca</li>
              <li>• Clases cocina húngara: Goulash (35 euros)</li>
            </ul>
          </div>
        </div>
      </div>

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

      <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Comentarios de Viajeros</h2>
        
        <div className="space-y-4">
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <p className="text-gray-700 text-sm italic mb-2">
              Seguimos la guía al pie de la letra y Budapest nos enamoró. Los tips de las tarjetas nos ahorraron 25 euros!
            </p>
            <p className="text-gray-600 text-xs">- María, Madrid</p>
          </div>
          
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <p className="text-gray-700 text-sm italic mb-2">
              La información de los balnearios fue perfecta. Fuimos en enero con nieve y fue mágico.
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

      <div className="text-center text-gray-600 text-sm">
        <p className="mb-2">
          Guía actualizada en Septiembre 2025 | Información verificada y precios actuales
        </p>
        <p>
          Que disfrutes Budapest al máximo!
        </p>
      </div>
    </article>
  );
};

export default BudapestGuideArticle;