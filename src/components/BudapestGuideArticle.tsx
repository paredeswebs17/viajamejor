import React from 'react';
import { ArrowLeft, Share2, MapPin, Euro, Calendar, Star, CheckCircle, Clock, Eye, Shield, CreditCard, Backpack, AlertTriangle, Heart, Plane } from 'lucide-react';
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
          Volver a Guías
        </button>
        
        <div className="mb-6">
          <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            Guía Completa
          </span>
        </div>
        
        <div className="flex items-start justify-between mb-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight flex-1 mr-4">
            Budapest en 4 Días: Tu Aventura Húngara Completa
          </h1>
          
          <button 
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: 'Budapest en 4 Días: Tu Aventura Húngara Completa',
                  text: 'Guía completa de Budapest con itinerario detallado',
                  url: window.location.href,
                })
                .catch((error) => console.log('Error sharing', error));
              } else {
                navigator.clipboard.writeText(window.location.href).then(() => {
                  alert('¡Enlace copiado al portapapeles!');
                }).catch(() => {
                  window.open(`https://twitter.com/intent/tweet?text=Budapest en 4 Días&url=${encodeURIComponent(window.location.href)}`, '_blank');
                });
              }
            }}
            className="flex items-center text-gray-600 hover:text-sky-600 bg-gray-50 hover:bg-sky-50 px-3 py-2 rounded-lg transition-all duration-200 font-medium border border-gray-200 hover:border-sky-300 text-sm flex-shrink-0"
          >
            <Share2 className="h-3 w-3 mr-1" />
            <span className="hidden sm:inline">Compartir</span>
          </button>
        </div>

        {/* Info de lectura - compacta */}
        <div className="flex items-center gap-3 text-gray-600 text-sm mb-8">
          <span className="flex items-center bg-gray-100 px-2 py-1 rounded-full">
            <Clock className="h-3 w-3 mr-1" />
            <span className="hidden sm:inline">15 min lectura</span>
            <span className="sm:hidden">15 min</span>
          </span>
          <span className="flex items-center bg-gray-100 px-2 py-1 rounded-full">
            <MapPin className="h-3 w-3 mr-1" />
            <span className="hidden sm:inline">Budapest, Hungría</span>
            <span className="sm:hidden">Budapest</span>
          </span>
          <span className="flex items-center bg-gray-100 px-2 py-1 rounded-full">
            <Eye className="h-3 w-3 mr-1" />
            <span>12.4k</span>
          </span>
        </div>
      </div>

      {/* Imagen destacada */}
      <div className="mb-12">
        <img
          src="https://images.unsplash.com/photo-1541849546-216549ae216d?auto=format&fit=crop&w=1200&q=80"
          alt="Vista panorámica de Budapest con el Parlamento y el Danubio al atardecer"
          className="w-full h-64 sm:h-80 object-cover rounded-2xl shadow-lg"
        />
      </div>

      {/* Contenido del artículo */}
      <div className="prose prose-lg max-w-none">
        
        {/* Planning Estratégico */}
        <div className="bg-gradient-to-r from-sky-50 to-emerald-50 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Planning Estratégico</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-lg shadow-sm">
              <thead>
                <tr className="bg-gradient-to-r from-sky-500 to-emerald-500 text-white">
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">JORNADA</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">EXPERIENCIAS DEL DÍA</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-bold">DÍA 1</td>
                  <td className="border border-gray-300 px-4 py-3">Parlamento + Recorrido histórico + Sinagoga + Basílica</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-bold">DÍA 2</td>
                  <td className="border border-gray-300 px-4 py-3">Castillo + Bastión Pescadores + Crucero nocturno</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-bold">DÍA 3</td>
                  <td className="border border-gray-300 px-4 py-3">Balnearios Széchenyi + Plaza Héroes + Andrássy + New York Café</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-bold">DÍA 4</td>
                  <td className="border border-gray-300 px-4 py-3">Mercado Central + Colina Gellért + Exploración libre</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* DÍA 1 */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            🏛️ DÍA 1: Poder Imperial y Herencia Cultural
          </h2>
          
          {/* Parlamento */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-sky-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">9:00</span>
              🔥 Parlamento Húngaro - Símbolo Nacional
            </h3>
            <p className="text-gray-700 mb-4">
              Inicia tu aventura húngara en el edificio gubernamental más espectacular de Europa. Sus cúpulas doradas y arquitectura neogótica te transportarán a la época imperial.
            </p>
            <div className="bg-sky-50 border border-sky-200 rounded-lg p-4 mb-4">
              <h4 className="font-semibold text-sky-800 mb-2">Información esencial:</h4>
              <ul className="text-sky-700 text-sm space-y-1">
                <li>• <strong>Inversión:</strong> 6.000 HUF (≈ 16€)</li>
                <li>• <strong>Duración:</strong> 90 minutos con audioguía</li>
                <li>• <strong>Reserva:</strong> OBLIGATORIA con 24-48h anticipación</li>
                <li>• <strong>Incluye:</strong> Corona de San Esteban + joyas reales + salas ceremoniales</li>
                <li>• <strong>Consejo:</strong> Llega 15 min antes para controles de seguridad</li>
              </ul>
            </div>
          </div>

          {/* Tour gratuito */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-sky-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">11:00</span>
              🚶 Recorrido Histórico Gratuito
            </h3>
            <p className="text-gray-700 mb-4">
              Conecta with la auténtica Budapest a través de guías locales apasionados.
            </p>
            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
              <h4 className="font-semibold text-emerald-800 mb-2">Detalles del tour:</h4>
              <ul className="text-emerald-700 text-sm space-y-1">
                <li>• <strong>Costo:</strong> Completamente gratis (propina opcional)</li>
                <li>• <strong>Duración:</strong> 2h 30min</li>
                <li>• <strong>Inicio:</strong> Plaza Vörösmarty (punto céntrico)</li>
                <li>• <strong>Descubrirás:</strong> Secretos históricos + mejores rincones fotogénicos</li>
                <li>• <strong>Idioma:</strong> Español disponible</li>
              </ul>
            </div>
          </div>

          {/* Sinagoga */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-sky-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">13:30</span>
              🕍 Gran Sinagoga - Memoria Viva
            </h3>
            <p className="text-gray-700 mb-4">
              La segunda sinagoga más grande del planeta y centro de la comunidad judía europea.
            </p>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <h4 className="font-semibold text-purple-800 mb-2">Experiencia completa:</h4>
              <ul className="text-purple-700 text-sm space-y-1">
                <li>• <strong>Entrada:</strong> 4.500 HUF (≈ 12€)</li>
                <li>• <strong>Incluye:</strong> Templo principal + Museo Judío + Jardín Memorial</li>
                <li>• <strong>Tiempo:</strong> 75-90 minutos</li>
                <li>• <strong>Impacto emocional:</strong> Jardín memorial con nombres de víctimas</li>
              </ul>
            </div>
          </div>

          {/* Basílica */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-sky-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">16:00</span>
              ⛪ Basílica de San Esteban + Mirador Panorámico
            </h3>
            <p className="text-gray-700 mb-4">
              Termina el día en las alturas con vistas que quitan el aliento.
            </p>
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <h4 className="font-semibold text-orange-800 mb-2">Opciones de visita:</h4>
              <ul className="text-orange-700 text-sm space-y-1">
                <li>• <strong>Solo basílica:</strong> 600 HUF (≈ 2€)</li>
                <li>• <strong>Combo completo:</strong> 2.900 HUF (≈ 8€) - basílica + cúpula + tesoro</li>
                <li>• <strong>Vista 360°:</strong> Todo Budapest + Danubio + colinas de Buda</li>
                <li>• <strong>Mejor momento:</strong> 2 horas antes del atardecer</li>
              </ul>
            </div>
          </div>
        </div>

        {/* DÍA 2 */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            🏰 DÍA 2: Realeza Medieval y Romance Danubiano
          </h2>
          
          {/* Castillo */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-emerald-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">9:00</span>
              🚠 Funicular Histórico al Castillo
            </h3>
            <p className="text-gray-700 mb-4">
              Comienza como la realeza húngara, ascendiendo en el funicular centenario.
            </p>
            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
              <h4 className="font-semibold text-emerald-800 mb-2">Opciones de subida:</h4>
              <ul className="text-emerald-700 text-sm space-y-1">
                <li>• <strong>Funicular:</strong> 1.500 HUF (≈ 4€) ida/vuelta + experiencia nostálgica</li>
                <li>• <strong>Caminata:</strong> Gratis + 15 min subida + ejercicio matutino</li>
                <li>• <strong>Recomendación:</strong> Sube en funicular, baja andando</li>
              </ul>
            </div>
          </div>

          {/* Bastión Pescadores */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-emerald-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">10:30</span>
              👑 Bastión de los Pescadores - El Mirador Más Famoso
            </h3>
            <p className="text-gray-700 mb-4">
              El lugar más fotografiado de Budapest por una razón poderosa.
            </p>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h4 className="font-semibold text-yellow-800 mb-2">Niveles de acceso:</h4>
              <ul className="text-yellow-700 text-sm space-y-1">
                <li>• <strong>Terrazas inferiores:</strong> GRATIS con vistas espectaculares</li>
                <li>• <strong>Torres superiores:</strong> 1.000 HUF (≈ 3€) para fotos premium</li>
                <li>• <strong>Mejor momento:</strong> 10:30-11:30h (luz perfecta, menos gente)</li>
                <li>• <strong>Vista icónica:</strong> Parlamento dorado reflejado en el Danubio</li>
              </ul>
            </div>
          </div>

          {/* Crucero nocturno */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-emerald-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">18:00</span>
              ⛵ Crucero Nocturno por el Danubio ⭐ MOMENTO CUMBRE
            </h3>
            <p className="text-gray-700 mb-4">
              La experiencia más romántica y fotogénica de Budapest.
            </p>
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-lg p-4">
              <h4 className="font-semibold text-purple-800 mb-2">Detalles del crucero:</h4>
              <ul className="text-purple-700 text-sm space-y-1">
                <li>• <strong>Duración:</strong> 70 minutos de pura magia</li>
                <li>• <strong>Precio:</strong> 4.000 HUF (≈ 12€)</li>
                <li>• <strong>Incluye:</strong> Audio-guía español + bebida de bienvenida</li>
                <li>• <strong>Vista única:</strong> Parlamento dorado + Castillo iluminado + todos los puentes</li>
              </ul>
            </div>
          </div>
        </div>

        {/* DÍA 3 */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            🌊 DÍA 3: Aguas Milenarias y Esplendor Imperial
          </h2>
          
          {/* Balnearios */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">9:00</span>
              ♨️ Balnearios Széchenyi - Ritual Húngaro Milenario
            </h3>
            <p className="text-gray-700 mb-4">
              Sumérgete en la tradición termal más auténtica de Europa. ¡Funciona incluso con nieve!
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-800 mb-2">Guía completa de balnearios:</h4>
              <ul className="text-blue-700 text-sm space-y-1">
                <li>• <strong>Precio:</strong> 6.800 HUF (≈ 18€) acceso día completo</li>
                <li>• <strong>Piscinas:</strong> 18 diferentes (3 exteriores icónicas + 15 interiores)</li>
                <li>• <strong>Temperaturas:</strong> 18°C a 38°C según la piscina</li>
                <li>• <strong>Tiempo ideal:</strong> 3-4 horas de relajación total</li>
                <li>• <strong>Qué llevar:</strong> Toalla personal + chanclas + bañador</li>
              </ul>
            </div>
          </div>

          {/* Plaza Héroes */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">13:30</span>
              🏛️ Plaza de los Héroes - Epicentro Húngaro
            </h3>
            <p className="text-gray-700 mb-4">
              El monumento más patriótico de Hungría te cuenta mil años de historia.
            </p>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="font-semibold text-green-800 mb-2">Qué verás:</h4>
              <ul className="text-green-700 text-sm space-y-1">
                <li>• <strong>Entrada:</strong> Completamente GRATIS</li>
                <li>• <strong>Monumentos:</strong> 7 estatuas de las tribus fundadoras</li>
                <li>• <strong>Historia:</strong> Mil años de conquistas húngaras</li>
                <li>• <strong>Foto perfecta:</strong> Con columnas monumentales de fondo</li>
              </ul>
            </div>
          </div>

          {/* New York Café */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">18:30</span>
              ☕ New York Café - El Más Hermoso del Mundo
            </h3>
            <p className="text-gray-700 mb-4">
              Donde se reunía la élite intelectual de Budapest en la Belle Époque.
            </p>
            <div className="bg-gradient-to-r from-orange-50 to-yellow-50 border border-orange-200 rounded-lg p-4">
              <h4 className="font-semibold text-orange-800 mb-2">La experiencia completa:</h4>
              <ul className="text-orange-700 text-sm space-y-1">
                <li>• <strong>Ambiente:</strong> Techos dorados + espejos + arañas de cristal</li>
                <li>• <strong>Precios:</strong> 8-15€ café + pastel húngaro</li>
                <li>• <strong>Historia:</strong> Inaugurado 1894, punto de encuentro de escritores</li>
                <li>• <strong>Valor:</strong> Es una experiencia, no solo un café</li>
              </ul>
            </div>
          </div>
        </div>

        {/* DÍA 4 */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            🌅 DÍA 4: Autenticidad Local y Despedida Panorámica
          </h2>
          
          {/* Mercado Central */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">9:00</span>
              🏪 Mercado Central - Corazón Gastronómico
            </h3>
            <p className="text-gray-700 mb-4">
              El mercado cubierto más espectacular de Europa Central.
            </p>
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <h4 className="font-semibold text-orange-800 mb-2">Planta baja - Productos locales:</h4>
              <ul className="text-orange-700 text-sm space-y-1">
                <li>• <strong>Páprika húngara:</strong> Desde 2€, el mejor souvenir gastronómico</li>
                <li>• <strong>Salami de Szeged:</strong> Calidad mundial reconocida</li>
                <li>• <strong>Vinos Tokaj:</strong> Dulce tradicional, desde 12€</li>
              </ul>
              <h4 className="font-semibold text-orange-800 mb-2 mt-4">Primera planta - Gastronomía en vivo:</h4>
              <ul className="text-orange-700 text-sm space-y-1">
                <li>• <strong>Lángos:</strong> Pan frito tradicional con crema agria (3-4€)</li>
                <li>• <strong>Goulash auténtico:</strong> En puestos familiares (6-8€)</li>
                <li>• <strong>Chimney cake:</strong> Kürtőskalács dulce cilíndrico (2-3€)</li>
              </ul>
            </div>
          </div>

          {/* Colina Gellért */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">10:30</span>
              ⛰️ Colina Gellért - Mirador Supremo de Budapest
            </h3>
            <p className="text-gray-700 mb-4">
              Las vistas más impresionantes de toda la capital húngara.
            </p>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="font-semibold text-green-800 mb-2">Opciones de ascenso:</h4>
              <ul className="text-green-700 text-sm space-y-1">
                <li>• <strong>Caminata:</strong> 35-40 min, gratis, ejercicio + vistas graduales</li>
                <li>• <strong>Autobús 27:</strong> 530 HUF (≈ 1.5€), directo hasta arriba</li>
                <li>• <strong>Vista:</strong> Danubio serpenteante + ambos lados de la ciudad</li>
                <li>• <strong>Costo:</strong> Totalmente gratuito</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Presupuestos */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">💰 Presupuestos Reales y Detallados</h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Mochilero */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">🎒 ESTILO MOCHILERO</h3>
                <div className="text-3xl font-bold text-emerald-600">€100<span className="text-lg text-gray-500">/día</span></div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Alojamiento (€20/noche):</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Hostales céntricos: Maverick City Lodge</li>
                    <li>• Distrito V o VII</li>
                    <li>• WiFi + cocina compartida</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Alimentación (€25/día):</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Desayuno: Mercados + panadería (3-5€)</li>
                    <li>• Almuerzo: Puestos callejeros (5-8€)</li>
                    <li>• Cena: Supermercado + cocina (8-12€)</li>
                  </ul>
                </div>
                
                <div className="pt-4 border-t border-gray-200">
                  <div className="text-center">
                    <span className="text-lg font-bold text-gray-900">Total 4 días: ≈ €400</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Confort */}
            <div className="bg-white rounded-xl p-6 border-2 border-sky-300 shadow-lg relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-sky-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                  ⭐ RECOMENDADO
                </span>
              </div>
              
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">🏨 ESTILO CONFORT</h3>
                <div className="text-3xl font-bold text-sky-600">€180<span className="text-lg text-gray-500">/día</span></div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Alojamiento (€70/noche):</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Hoteles 3*: Roombach Hotel</li>
                    <li>• Centro absoluto</li>
                    <li>• Desayuno + ubicación premium</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Alimentación (€45/día):</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Desayuno: Hotel incluido</li>
                    <li>• Almuerzo: Restaurantes locales (12-18€)</li>
                    <li>• Cena: Experiencias gastronómicas (15-25€)</li>
                  </ul>
                </div>
                
                <div className="pt-4 border-t border-gray-200">
                  <div className="text-center">
                    <span className="text-lg font-bold text-gray-900">Total 4 días: ≈ €720</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Premium */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">💎 ESTILO PREMIUM</h3>
                <div className="text-3xl font-bold text-purple-600">€300<span className="text-lg text-gray-500">/día</span></div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Alojamiento (€130/noche):</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Hoteles 4*/5*: Four Seasons, Aria</li>
                    <li>• Frente al Danubio</li>
                    <li>• Spa + vistas + servicios premium</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Alimentación (€70/día):</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Restaurantes top: Onyx, Costes</li>
                    <li>• Experiencias culinarias + maridajes</li>
                    <li>• New York Café + cafés históricos</li>
                  </ul>
                </div>
                
                <div className="pt-4 border-t border-gray-200">
                  <div className="text-center">
                    <span className="text-lg font-bold text-gray-900">Total 4 días: ≈ €1.200</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cuándo ir */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">🌡️ Cuándo Ir - Timing Perfecto</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <div className="text-center mb-4">
                <h3 className="text-lg font-bold text-green-800 mb-2">🌸 Primavera (Abril-Mayo)</h3>
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  ⭐ ÉPOCA IDEAL
                </span>
              </div>
              <ul className="text-green-700 text-sm space-y-2">
                <li>• <strong>Temperatura:</strong> 15-22°C, perfecta para caminar</li>
                <li>• <strong>Ventajas:</strong> Menos turistas + precios medios + clima perfecto</li>
                <li>• <strong>Desventajas:</strong> Lluvia ocasional</li>
              </ul>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
              <div className="text-center mb-4">
                <h3 className="text-lg font-bold text-orange-800 mb-2">🍂 Otoño (Sep-Oct)</h3>
                <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  RECOMENDADO
                </span>
              </div>
              <ul className="text-orange-700 text-sm space-y-2">
                <li>• <strong>Temperatura:</strong> 12-20°C</li>
                <li>• <strong>Ventajas:</strong> Colores otoñales + menos multitudes</li>
                <li>• <strong>Perfecto para:</strong> Fotografía + paseos + terrazas</li>
              </ul>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-yellow-800 mb-4 text-center">☀️ Verano (Jun-Ago)</h3>
              <ul className="text-yellow-700 text-sm space-y-2">
                <li>• <strong>Temperatura:</strong> 22-28°C</li>
                <li>• <strong>Ventajas:</strong> Días largos + terrazas + festivales</li>
                <li>• <strong>Desventajas:</strong> Más caro + más gente</li>
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-blue-800 mb-4 text-center">❄️ Invierno (Nov-Mar)</h3>
              <ul className="text-blue-700 text-sm space-y-2">
                <li>• <strong>Temperatura:</strong> -2°C a 8°C</li>
                <li>• <strong>Ventajas:</strong> Balnearios en nieve + mercados navideños</li>
                <li>• <strong>Consejo:</strong> Los balnearios en nieve son experiencia única</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Estrategia Financiera */}
        <div className="bg-gradient-to-r from-emerald-50 to-sky-50 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">💳 Estrategia Financiera - Ahorro Inteligente</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Moneda y Pagos</h3>
              <ul className="text-gray-700 text-sm space-y-2">
                <li>• <strong>Divisa:</strong> Florín húngaro (HUF)</li>
                <li>• <strong>Cambio aproximado:</strong> 1€ = 380 HUF</li>
                <li>• <strong>Regla de oro:</strong> SIEMPRE pagar en florines</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Tarjetas Zero Comisiones</h3>
              <div className="bg-white rounded-lg p-4 border border-emerald-200">
                <h4 className="font-semibold text-emerald-800 mb-2">🎯 AHORRO GARANTIZADO</h4>
                <div className="space-y-3">
                  <div className="text-center">
                    <a 
                      href="https://revolut.com/referral/?referral-code=antoni22jf!AUG1-25-AR-CL1H-CRY&geo-redirect"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl inline-block"
                    >
                      Revolut - Conseguir GRATIS
                    </a>
                    <p className="text-emerald-700 text-xs mt-2">
                      Ahorro real: 15-25€ en cambio de divisa
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Errores a evitar */}
        <div className="bg-red-50 border border-red-200 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-red-800 mb-6 flex items-center">
            <AlertTriangle className="h-6 w-6 mr-3" />
            🚨 Errores Costosos que Evitar
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-4 border border-red-200">
              <h3 className="font-bold text-red-800 mb-2">❌ Error #1: Gestión de dinero</h3>
              <p className="text-red-700 text-sm mb-2"><strong>Problema:</strong> Usar tarjetas con comisiones altas</p>
              <p className="text-red-700 text-sm mb-2"><strong>Solución:</strong> Revolut gratis</p>
              <p className="text-red-700 text-sm"><strong>Ahorro:</strong> 20-30€ en 4 días</p>
            </div>

            <div className="bg-white rounded-lg p-4 border border-red-200">
              <h3 className="font-bold text-red-800 mb-2">❌ Error #2: Reservas de última hora</h3>
              <p className="text-red-700 text-sm mb-2"><strong>Problema:</strong> Parlamento + cruceros se agotan</p>
              <p className="text-red-700 text-sm mb-2"><strong>Solución:</strong> Reservar 48h antes mínimo</p>
              <p className="text-red-700 text-sm"><strong>Consecuencia:</strong> Perderte lo mejor de Budapest</p>
            </div>

            <div className="bg-white rounded-lg p-4 border border-red-200">
              <h3 className="font-bold text-red-800 mb-2">❌ Error #3: Saltarse balnearios</h3>
              <p className="text-red-700 text-sm mb-2"><strong>Problema:</strong> "No me gustan las piscinas públicas"</p>
              <p className="text-red-700 text-sm mb-2"><strong>Realidad:</strong> Es la experiencia más única de Budapest</p>
              <p className="text-red-700 text-sm"><strong>Tip:</strong> Prueba aunque no seas fan de piscinas</p>
            </div>
          </div>
        </div>

        {/* Apps esenciales */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">📱 Kit de Supervivencia Digital</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="font-bold text-blue-800 mb-3">🚌 BKK Info</h3>
              <ul className="text-blue-700 text-sm space-y-1">
                <li>• Transporte público oficial</li>
                <li>• Horarios en tiempo real</li>
                <li>• Planificador de rutas</li>
              </ul>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h3 className="font-bold text-yellow-800 mb-3">🚗 Bolt</h3>
              <ul className="text-yellow-700 text-sm space-y-1">
                <li>• Taxis más económicos</li>
                <li>• Precios fijos sin sorpresas</li>
                <li>• Disponible 24/7</li>
              </ul>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="font-bold text-green-800 mb-3">🗣️ Google Translate</h3>
              <ul className="text-green-700 text-sm space-y-1">
                <li>• Húngaro es muy diferente</li>
                <li>• Función cámara para menús</li>
                <li>• Descarga húngaro offline</li>
              </ul>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <h3 className="font-bold text-purple-800 mb-3">🗺️ Maps.me</h3>
              <ul className="text-purple-700 text-sm space-y-1">
                <li>• Mapas offline detallados</li>
                <li>• Funciona sin internet</li>
                <li>• Marca tus sitios favoritos</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Productos esenciales */}
        <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">🎯 Productos Esenciales para Budapest</h2>
          
          <div className="space-y-6">
            {/* Finanzas */}
            <div className="bg-white rounded-lg p-6 border border-orange-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <CreditCard className="h-5 w-5 text-emerald-500 mr-2" />
                💳 Finanzas de Viaje
              </h3>
              <div className="text-center">
                <a 
                  href="https://revolut.com/referral/?referral-code=antoni22jf!AUG1-25-AR-CL1H-CRY&geo-redirect"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl inline-block mb-2"
                >
                  Revolut - Tarjeta GRATUITA
                </a>
                <p className="text-emerald-700 text-sm">
                  0% comisiones cambio | Ahorro garantizado: 20-30€
                </p>
              </div>
            </div>

            {/* Equipaje */}
            <div className="bg-white rounded-lg p-6 border border-orange-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <Backpack className="h-5 w-5 text-sky-500 mr-2" />
                🎒 Equipaje Inteligente
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <a 
                    href="https://www.amazon.es/Hayayu-40x20x25-Mochilas-Senderismo-Impermeable/dp/B0CBVFL64Z?tag=viajamejor-21"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-sky-500 to-blue-500 hover:from-sky-600 hover:to-blue-600 text-white font-bold py-2 px-4 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl inline-block text-sm"
                  >
                    Mochila Cabina Ryanair
                  </a>
                  <p className="text-sky-700 text-xs mt-1">40x25x20cm exactos</p>
                </div>

                <div className="text-center">
                  <a 
                    href="https://www.amazon.es/INIU-10000mAh-Cargador-Portatil-Tel%C3%A9fono/dp/B08VD632WJ?tag=viajamejor-21"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-sky-500 to-blue-500 hover:from-sky-600 hover:to-blue-600 text-white font-bold py-2 px-4 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl inline-block text-sm"
                  >
                    Power Bank 10000mAh
                  </a>
                  <p className="text-sky-700 text-xs mt-1">Fotos todo el día</p>
                </div>

                <div className="text-center">
                  <a 
                    href="https://www.amazon.es/TESSAN-Adaptador-Universal-Internacional-Americano/dp/B0B2DRC76L?tag=viajamejor-21"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-sky-500 to-blue-500 hover:from-sky-600 hover:to-blue-600 text-white font-bold py-2 px-4 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl inline-block text-sm"
                  >
                    Adaptador Universal
                  </a>
                  <p className="text-sky-700 text-xs mt-1">Enchufe tipo C/F</p>
                </div>
              </div>
            </div>

            {/* Protección */}
            <div className="bg-white rounded-lg p-6 border border-orange-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <Shield className="h-5 w-5 text-purple-500 mr-2" />
                🛡️ Protección Total de Viaje
              </h3>
              <div className="text-center">
                <a 
                  href="https://www.iatiseguros.com?r=37344279073491"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl inline-block mb-2"
                >
                  Seguro IATI Estándar
                </a>
                <p className="text-purple-700 text-sm">
                  Cobertura Europa | Precio 4 días: 12-15€
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">🗣️ Preguntas Resueltas por Viajeros Reales</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-sky-500 pl-4">
              <h3 className="font-bold text-gray-900 mb-2">💶 ¿Es mejor pagar en euros o florines?</h3>
              <p className="text-gray-700 text-sm">
                Siempre florines. Cuando te ofrezcan pagar en euros, di "NO" - te cobrarán 8-12% más.
              </p>
            </div>

            <div className="border-l-4 border-emerald-500 pl-4">
              <h3 className="font-bold text-gray-900 mb-2">🚿 ¿Qué llevar a los balnearios?</h3>
              <p className="text-gray-700 text-sm">
                <strong>Imprescindible:</strong> Toalla + chanclas + bañador<br/>
                <strong>No necesario:</strong> Gorro (solo en piscina de natación)
              </p>
            </div>

            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-bold text-gray-900 mb-2">🌙 ¿Es seguro caminar de noche?</h3>
              <p className="text-gray-700 text-sm">
                Muy seguro en centro. Precauciones normales en barrio de fiesta después 2:00h.
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-bold text-gray-900 mb-2">❄️ ¿Funcionan balnearios en invierno?</h3>
              <p className="text-gray-700 text-sm">
                ¡MEJOR en invierno! Experiencia única: piscina 38°C con nieve alrededor.
              </p>
            </div>
          </div>
        </div>

        {/* Experiencias secretas */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">🎁 Bonus: Experiencias Secretas</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-4 border border-purple-200">
              <h3 className="font-bold text-purple-800 mb-3">Para Aventureros:</h3>
              <ul className="text-purple-700 text-sm space-y-1">
                <li>• Cuevas del Castillo de Buda (8€)</li>
                <li>• Isla Margarita en bici (5€/día)</li>
                <li>• Mercadillo Ecseri (sábados)</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-4 border border-pink-200">
              <h3 className="font-bold text-pink-800 mb-3 flex items-center">
                <Heart className="h-4 w-4 mr-1" />
                Para Románticos:
              </h3>
              <ul className="text-pink-700 text-sm space-y-1">
                <li>• Cena en Danubio (35-50€)</li>
                <li>• Atardecer Bastión Pescadores</li>
                <li>• Paseo nocturno puentes</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-4 border border-orange-200">
              <h3 className="font-bold text-orange-800 mb-3">Para Gourmets:</h3>
              <ul className="text-orange-700 text-sm space-y-1">
                <li>• Tour gastronómico (45€)</li>
                <li>• Mercado productores (sábados)</li>
                <li>• Clases cocina húngara (35€)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Comentarios de viajeros */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">📝 Comentarios de Viajeros</h2>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
              <div className="flex items-center mb-3">
                <div className="flex text-orange-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <span className="ml-2 font-semibold text-gray-900">María, Madrid</span>
              </div>
              <p className="text-gray-700 text-sm italic">
                "Seguimos la guía al pie de la letra y Budapest nos enamoró. Los tips de las tarjetas nos ahorraron 25€!"
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
              <div className="flex items-center mb-3">
                <div className="flex text-orange-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <span className="ml-2 font-semibold text-gray-900">Carlos, Barcelona</span>
              </div>
              <p className="text-gray-700 text-sm italic">
                "La información de los balnearios fue perfecta. Fuimos en enero con nieve y fue mágico."
              </p>
            </div>
          </div>
        </div>

        {/* CTA final */}
        <div className="bg-gradient-to-r from-sky-500 to-emerald-500 rounded-2xl p-8 text-center text-white mb-12">
          <h3 className="text-2xl font-bold mb-4">¿Te Ha Servido Esta Guía?</h3>
          <p className="text-lg mb-6 opacity-90">
            Si esta guía te ha ayudado a planificar tu viaje a Budapest
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: 'Budapest en 4 Días: Tu Aventura Húngara Completa',
                    text: 'Guía completa de Budapest',
                    url: window.location.href,
                  });
                }
              }}
              className="bg-white text-sky-500 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              🌟 Compartir con otros viajeros
            </button>
            <button
              onClick={onBack}
              className="bg-transparent border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-sky-500 transition-colors"
            >
              Ver Más Guías
            </button>
          </div>
          <p className="text-sky-100 text-sm mt-4">
            ¡Que disfrutes Budapest al máximo! 🇭🇺
          </p>
        </div>

        {/* Más destinos */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center flex items-center justify-center">
            <Plane className="h-6 w-6 text-sky-500 mr-2" />
            🔗 Más Destinos Increíbles
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-gray-900 mb-3">Combina Budapest con:</h3>
              <ul className="text-gray-700 text-sm space-y-2">
                <li>• <a href="#" className="text-sky-600 hover:underline">Viena en 3 días</a> - 3h en tren, perfecta combinación</li>
                <li>• <a href="#" className="text-sky-600 hover:underline">Praga en 4 días</a> - Triángulo dorado de Europa Central</li>
                <li>• <a href="#" className="text-sky-600 hover:underline">Berlín alternativo</a> - Contraste histórico fascinante</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-3">Más Europa del Este:</h3>
              <ul className="text-gray-700 text-sm space-y-2">
                <li>• <a href="#" className="text-sky-600 hover:underline">Croacia en 8 días</a> - Adriático + Dubrovnik</li>
                <li>• <a href="#" className="text-sky-600 hover:underline">Estambul en 4 días</a> - Europa se encuentra con Asia</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center text-gray-500 text-sm">
          <p>Guía actualizada en Diciembre 2024 | Información verificada y precios actuales</p>
        </div>
      </div>
      
      {/* Artículos relacionados */}
      <RelatedArticles currentCategory="Guías" currentArticleId="budapest-4-dias" />
    </article>
  );
};

export default BudapestGuideArticle;