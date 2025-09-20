import React from 'react';
import { ArrowLeft, Share2, Clock, MapPin, CheckCircle, ExternalLink } from 'lucide-react';

interface BudapestGuideArticleProps {
  onBack: () => void;
}

const BudapestGuideArticle: React.FC<BudapestGuideArticleProps> = ({ onBack }) => {

  

return (
<article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-24">

  <div className="mb-8">
    <button 
      onClick={onBack}
      className="inline-flex items-center text-sky-600 hover:text-sky-700 hover:bg-sky-50 px-3 py-2 rounded-xl transition-all duration-200 font-medium border border-sky-200 hover:border-sky-300 mb-6 shadow-sm hover:shadow-md"
    >
      <ArrowLeft className="h-4 w-4 mr-2" />
      Volver a guías
    </button>

    <div className="mb-6">
      <span className="bg-gradient-to-r from-sky-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-md">
        Guía Completa
      </span>
    </div>
    
    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
      Budapest en 4 Días: Tu Aventura Húngara Completa
    </h1>

    <div className="flex flex-col gap-4 mb-6 items-start">
      <div className="flex flex-wrap items-center gap-2 text-gray-600 text-xs">
        <span className="flex items-center bg-gray-100 px-3 py-2 rounded-full shadow-sm">
          <Clock className="h-3 w-3 mr-1" />
          15 min
        </span>
        <span className="flex items-center bg-gray-100 px-3 py-2 rounded-full shadow-sm">
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
        className="inline-flex items-center text-gray-600 hover:text-sky-600 bg-gray-100 hover:bg-sky-50 px-3 py-2 rounded-full transition-all duration-200 text-xs border border-gray-200 hover:border-sky-300 self-start shadow-sm hover:shadow-md"
      >
        <Share2 className="h-3 w-3 mr-1" />
        <span>Compartir</span>
      </button>
    </div>
  </div>

  <div className="mb-8">
    <img
      src="https://images.pexels.com/photos/73796/budapest-hungary-parliament-building-73796.jpeg"
      alt="Vista panorámica del Parlamento de Budapest al atardecer con el río Danubio"
      className="w-full h-48 sm:h-64 lg:h-80 object-cover rounded-2xl shadow-lg"
    />
  </div>

  <div className="bg-gradient-to-r from-sky-50 to-emerald-50 rounded-2xl p-6 sm:p-8 mb-8 shadow-md">
    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Planning Estratégico</h2>
    <div className="overflow-x-auto">
      <table className="w-full border-collapse bg-white rounded-xl shadow-sm">
        <thead>
          <tr className="bg-gradient-to-r from-sky-500 to-blue-500 text-white">
            <th className="border border-gray-300 px-4 py-3 text-left font-semibold">JORNADA</th>
            <th className="border border-gray-300 px-4 py-3 text-left font-semibold">EXPERIENCIAS DEL DÍA</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-3 font-bold">DÍA 1</td>
            <td className="border border-gray-300 px-4 py-3">Parlamento + Recorrido histórico + Sinagoga Principal + Basílica de San Esteban</td>
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

  <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">🚗 Llegada y Conexiones Inteligentes</h2>
    
    <div className="mb-6">
      <h3 className="text-lg font-bold text-gray-900 mb-4">✈️ Desde Aeropuerto Ferenc Liszt</h3>
      
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-4">
        <h4 className="font-bold text-gray-900 mb-3">🚌 Bus 100E Airport Express</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-700 mb-2"><strong>Precio:</strong> 2.200 HUF (≈ 5,5€)</p>
            <p className="text-sm text-gray-700 mb-2"><strong>Horario:</strong> 24h/7 días</p>
            <p className="text-sm text-gray-700"><strong>Duración:</strong> 40-45 min</p>
          </div>
          <div>
            <p className="text-sm text-gray-700 mb-2"><strong>Paradas:</strong> Deák Ferenc tér, Astoria, Kálvin tér</p>
            <p className="text-sm text-gray-700"><strong>Compra:</strong> Tarjeta en el bus o BudapestGO app</p>
          </div>
        </div>
        <div className="bg-green-100 rounded-lg p-3 mt-4">
          <p className="text-green-800 text-sm">💡 Pago con tarjeta en el bus es lo más rápido</p>
        </div>
      </div>
      
      <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
        <h4 className="font-bold text-gray-900 mb-2">🚗 Transfer Privado</h4>
        <p className="text-sm text-gray-700">Precio: 8.000 HUF (≈ 22€) | Duración: 25-30 min</p>
      </div>
    </div>
    
    <div>
      <h3 className="text-lg font-bold text-gray-900 mb-4">🚊 Moverse por Budapest</h3>
      <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
        <p className="text-sm text-gray-700 mb-2"><strong>A pie:</strong> Centro completamente caminable</p>
        <p className="text-sm text-gray-700 mb-2"><strong>Tranvía 2:</strong> Bordea el Danubio</p>
        <p className="text-sm text-gray-700 mb-2"><strong>Precio:</strong> 450 HUF (≈ 1,2€) por trayecto</p>
        <p className="text-sm text-gray-700"><strong>Apps:</strong> BudapestGO (oficial) y Bolt (taxis)</p>
      </div>
    </div>
  </div>

  {/* Separador decorativo */}
  <div className="flex items-center justify-center mb-8">
    <div className="flex space-x-2">
      <div className="w-3 h-3 bg-gradient-to-r from-sky-400 to-blue-400 rounded-full"></div>
      <div className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-green-400 rounded-full"></div>
      <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
    </div>
  </div>

  <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 flex items-center">
      <span className="bg-gradient-to-br from-sky-500 to-emerald-500 text-white w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-bold mr-4 shadow-lg">1</span>
      DÍA 1: Poder Imperial y Herencia Cultural
    </h2>
    
    <div className="mb-8">
      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
        <div className="w-1 h-6 bg-gradient-to-b from-orange-400 to-red-400 rounded-full mr-3"></div>
        Arranque Matutino (9:00h)
      </h3>
      <div className="bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
        <h4 className="text-lg font-bold text-gray-900 mb-3">Parlamento Húngaro - Símbolo Nacional</h4>
        <div className="mb-6">
          <img
            src="https://images.pexels.com/photos/12165534/pexels-photo-12165534.jpeg"
            alt="Parlamento Húngaro desde el Danubio con su imponente cúpula neogótica"
            className="w-full h-48 sm:h-64 object-cover rounded-lg shadow-md"
          />
        </div>
        <p className="text-gray-700 mb-4">
          Inicia tu aventura húngara en el edificio gubernamental más espectacular de Europa. Sus cúpulas doradas y arquitectura neogótica te transportarán a la época imperial.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">Información esencial:</h5>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Inversión: 10.000 HUF (Aprox. 27 €)</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Duración: 90 Min. con audioguía</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Reserva: OBLIGATORIA con 24-48h anticipación</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>Consejo: Llega 15 min antes para controles</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">Incluye:</h5>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Corona de San Esteban</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Joyas reales</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>Salas ceremoniales</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>Audioguía en español</li>
            </ul>
          </div>
        </div>
        <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
          <a href="https://gyg.me/gMPSGtKr" target="_blank" rel="noopener noreferrer"
             className="inline-flex items-center bg-gradient-to-r from-sky-500 to-blue-500 hover:from-sky-600 hover:to-blue-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sm">
            🏛️ Reservar entradas oficiales del Parlamento
            <ExternalLink className="h-3 w-3 ml-2" />
          </a>
        </div>
      </div>
    </div>

    <div className="mb-8">
      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
        <div className="w-1 h-6 bg-gradient-to-b from-emerald-400 to-green-400 rounded-full mr-3"></div>
        Inmersión Local (11:00h)
      </h3>
      <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
        <h4 className="text-lg font-bold text-gray-900 mb-3">Recorrido Histórico</h4>
        <p className="text-gray-700 mb-4">
          Conecta con la auténtica Budapest a través de guías locales apasionados.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">Detalles del tour:</h5>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Costo: Según recorrido</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Duración: 2h 30min aprox.</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Inicio: Plaza Vörösmarty (punto céntrico)</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">Descubrirás:</h5>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Secretos históricos</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Mejores rincones fotogénicos</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>Final: Entrada de la Sinagoga Central</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>Idioma: Español disponible</li>
            </ul>
          </div>
        </div>
        <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm mt-4">
          <a href="https://gyg.me/RzYQ9OzH" target="_blank" rel="noopener noreferrer"
             className="inline-flex items-center bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sm">
            🚶‍♂️ Reservar tour con guía local
            <ExternalLink className="h-3 w-3 ml-2" />
          </a>
        </div>
      </div>
    </div>

    <div className="mb-8">
      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
        <div className="w-1 h-6 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full mr-3"></div>
        Patrimonio Judío (13:30h)
      </h3>
      <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
        <h4 className="text-lg font-bold text-gray-900 mb-3">Gran Sinagoga - Memoria Viva</h4>
        <div className="mb-6">
          <img
            src="https://images.pexels.com/photos/7614748/pexels-photo-7614748.jpeg"
            alt="Gran Sinagoga de Budapest con su arquitectura morisca y torres gemelas"
            className="w-full h-48 sm:h-64 object-cover rounded-lg shadow-md"
          />
        </div>
        <p className="text-gray-700 mb-4">
          La segunda sinagoga más grande del planeta y centro de la comunidad judía europea.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">Experiencia completa:</h5>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Entrada: 13.000 HUF (Aprox. 33 €)</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Tiempo: 75-90 Min.</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Arquitectura: Estilo morisco-bizantino único</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">Incluye:</h5>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Templo principal</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Museo Judío</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>Jardín Memorial</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>Impacto emocional garantizado</li>
            </ul>
          </div>
        </div>
        <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
          <a href="https://jewishtourhungary.com/es/cart" target="_blank" rel="noopener noreferrer"
             className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sm">
            🕍 Entradas oficiales Gran Sinagoga
            <ExternalLink className="h-3 w-3 ml-2" />
          </a>
        </div>
        <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm mt-4">
          <a href="https://gyg.me/vbht7C3s" target="_blank" rel="noopener noreferrer"
             className="inline-flex items-center bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sm">
            🎯 Tour Patrimonio Judío completo
            <ExternalLink className="h-3 w-3 ml-2" />
          </a>
        </div>
      </div>
    </div>

    <div className="mb-8">
      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
        <div className="w-1 h-6 bg-gradient-to-b from-yellow-400 to-orange-400 rounded-full mr-3"></div>
        Pausa Gastronómica - Barrio Judío
      </h3>
      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
        <h4 className="text-lg font-bold text-gray-900 mb-3">Auténticos sabores húngaros:</h4>
        <div className="space-y-3">
          <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
            <h5 className="font-semibold text-gray-900">Frici Papa</h5>
            <p className="text-sm text-gray-700 mb-1">Goulash tradicional de la abuela (8-12 €)</p>
            <a href="https://www.fricipapa.hu/" target="_blank" rel="noopener noreferrer" 
               className="inline-flex items-center bg-gradient-to-r from-orange-400 to-red-400 hover:from-orange-500 hover:to-red-500 text-white font-medium px-3 py-1 rounded-md shadow-sm hover:shadow-md transform hover:scale-105 transition-all duration-200 text-xs">
              🍲 Web oficial
              <ExternalLink className="h-2 w-2 ml-1" />
            </a>
            <p className="text-xs text-red-600 mt-1">Solo efectivo • Horario: 11:00-23:00</p>
          </div>
          <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
            <h5 className="font-semibold text-gray-900">Spinoza Café</h5>
            <p className="text-sm text-gray-700 mb-1">Ambiente bohemio, menú completo (10-15 €)</p>
            <a href="https://spinoza-szinhaz.hu/en" target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center bg-gradient-to-r from-teal-400 to-blue-400 hover:from-teal-500 hover:to-blue-500 text-white font-medium px-3 py-1 rounded-md shadow-sm hover:shadow-md transform hover:scale-105 transition-all duration-200 text-xs">
              🎭 Reservas y menú
              <ExternalLink className="h-2 w-2 ml-1" />
            </a>
            <p className="text-xs text-emerald-600 mt-1">Piano en vivo todas las noches</p>
          </div>
          <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
            <h5 className="font-semibold text-gray-900">Mazel Tov</h5>
            <p className="text-sm text-gray-700 mb-1">Mediterráneo en patio histórico (12-18 €)</p>
            <a href="https://mazeltov.hu/en" target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center bg-gradient-to-r from-green-400 to-emerald-400 hover:from-green-500 hover:to-emerald-500 text-white font-medium px-3 py-1 rounded-md shadow-sm hover:shadow-md transform hover:scale-105 transition-all duration-200 text-xs">
              🌿 Web oficial y reservas
              <ExternalLink className="h-2 w-2 ml-1" />
            </a>
          </div>
        </div>
        <p className="text-sm text-gray-600 mt-4">
          Horario local: Húngaros almuerzan 13:00-14:00 (antes que España)
        </p>
      </div>
    </div>

    <div className="mb-8">
      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
        <div className="w-1 h-6 bg-gradient-to-b from-blue-400 to-indigo-400 rounded-full mr-3"></div>
        Culminación del Día (16:00h)
      </h3>
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
        <h4 className="text-lg font-bold text-gray-900 mb-3">Basílica de San Esteban + Mirador Panorámico</h4>
        <div className="mb-6">
          <img
            src="https://images.pexels.com/photos/2984324/pexels-photo-2984324.jpeg"
            alt="Basílica de San Esteban con su imponente cúpula neoclásica dominando el skyline"
            className="w-full h-48 sm:h-64 object-cover rounded-lg shadow-md"
          />
        </div>
        <p className="text-gray-700 mb-4">
          Termina el día en las alturas con vistas que quitan el aliento.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">Opciones de visita:</h5>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Solo basílica: 600 HUF (Aprox. 2 €)</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Combo completo: 2.900 HUF (Aprox. 8 €)</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Recomendación: Combo completo al atardecer</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">En la cima:</h5>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Ascensor: Te lleva a 96 metros</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Vista 360 grados: Todo Budapest + Danubio</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>Mejor momento: 2h antes del atardecer</li>
            </ul>
          </div>
        </div>
       <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
          <a href="https://gyg.me/BQZi7YH9" target="_blank" rel="noopener noreferrer"
             className="inline-flex items-center bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sm">
            ⛪ Reservar entradas Basílica San Esteban
            <ExternalLink className="h-3 w-3 ml-2" />
          </a>
        </div>

        <div className="bg-orange-100 border border-orange-300 rounded-xl p-4 mt-4">
          <p className="text-orange-800 text-sm">
            Consejo de experto: Sube 2 horas antes del atardecer para ver la transformación de la ciudad de día a noche.
          </p>
        </div>
      </div>
    </div>

    <div className="mb-8">
      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
        <div className="w-1 h-6 bg-gradient-to-b from-red-400 to-pink-400 rounded-full mr-3"></div>
        Vida Nocturna Alternativa (21:00h)
      </h3>
      <div className="bg-red-50 border border-red-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
        <h4 className="text-lg font-bold text-gray-900 mb-3">Szimpla Kert - Revolución de los Ruin Bars</h4>
        <p className="text-gray-700 mb-4">
          Experimenta el concepto que Budapest exportó al mundo entero.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">La experiencia:</h5>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Concepto: Edificios en ruinas convertidos en bares</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Entrada: Gratuita</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Bebidas: Cervezas 3-5 €, cócteles 6-8 €</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">Ambiente único:</h5>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Arte urbano ecléctico</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Decoración surrealista</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>Música live</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>Tip: Llega 21:00-22:00</li>
            </ul>
          </div>
        </div>
        <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
          <a href="https://szimpla.hu/" target="_blank" rel="noopener noreferrer"
             className="inline-flex items-center bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sm">
            🍺 Szimpla Kert oficial
            <ExternalLink className="h-3 w-3 ml-2" />
          </a>
          <p className="text-xs text-emerald-600 mt-1">Mercadillo dominical 9:00-14:00h</p>
        </div>
      </div>
    </div>
  </div>

  {/* Separador decorativo */}
  <div className="flex items-center justify-center mb-8">
    <div className="flex space-x-2">
      <div className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-sky-400 rounded-full"></div>
      <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
      <div className="w-3 h-3 bg-gradient-to-r from-orange-400 to-red-400 rounded-full"></div>
    </div>
  </div>

  <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 flex items-center">
      <span className="bg-gradient-to-br from-emerald-500 to-sky-500 text-white w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-bold mr-4 shadow-lg">2</span>
      DÍA 2: Realeza Medieval y Romance Danubiano
    </h2>

    <div className="mb-8">
      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
        <div className="w-1 h-6 bg-gradient-to-b from-sky-400 to-blue-400 rounded-full mr-3"></div>
        Ascenso Real (9:00h)
      </h3>
      <div className="bg-sky-50 border border-sky-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
        <h4 className="text-lg font-bold text-gray-900 mb-3">Funicular Histórico al Castillo</h4>
        <div className="mb-6">
          <img
            src="https://images.pexels.com/photos/19310795/pexels-photo-19310795.jpeg"
            alt="Castillo de Buda iluminado por la noche reflejándose en el Danubio"
            className="w-full h-48 sm:h-64 object-cover rounded-lg shadow-md"
          />
        </div>
        <p className="text-gray-700 mb-4">
          Comienza como la realeza húngara, ascendiendo en el funicular centenario.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">Opciones de subida:</h5>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Funicular: 1.500 HUF (Aprox. 4 €) ida/vuelta</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Caminata: Gratis + 15 min subida</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Recomendación: Sube en funicular, baja andando</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">Complejo del Castillo:</h5>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Exterior gratis: Jardines + vistas</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Galería Nacional: 3.200 HUF (Aprox. 9 €)</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>Museo Historia: 2.800 HUF (Aprox. 7 €)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div className="mb-8">
      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
        <div className="w-1 h-6 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full mr-3"></div>
        Joya Arquitectónica (10:30h)
      </h3>
      <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
        <h4 className="text-lg font-bold text-gray-900 mb-3">Bastión de los Pescadores - El Mirador Más Famoso</h4>
        <div className="mb-6">
          <img
            src="https://images.pexels.com/photos/1750352/pexels-photo-1750352.jpeg"
            alt="Bastión de los Pescadores con sus torres neorrománicas y vistas al Parlamento"
            className="w-full h-48 sm:h-64 object-cover rounded-lg shadow-md"
          />
        </div>
        <p className="text-gray-700 mb-4">
          El lugar más fotografiado de Budapest por una razón poderosa.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">Niveles de acceso:</h5>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Terrazas inferiores: GRATIS</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Torres superiores: 1.000 HUF (Aprox. 3 €)</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Mejor momento: 10:30-11:30h</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">Vista icónica:</h5>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Parlamento dorado reflejado</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Danubio serpenteante</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>Luz perfecta, menos gente</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div className="mb-8">
      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
        <div className="w-1 h-6 bg-gradient-to-b from-blue-400 to-indigo-400 rounded-full mr-3"></div>
        Final Mágico (18:00h)
      </h3>
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
        <h4 className="text-lg font-bold text-gray-900 mb-3">Crucero Nocturno por el Danubio - MOMENTO CUMBRE</h4>
        <p className="text-gray-700 mb-4">
          La experiencia más romántica y fotogénica de Budapest.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">Detalles del crucero:</h5>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Duración: 70 Min. de pura magia</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Precio: 4.000 HUF (Aprox. 12 €)</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Incluye: Audio-guía español + bebida</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">Vista única:</h5>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Parlamento dorado iluminado</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Castillo con luces</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>Todos los puentes</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>Timing: Atardecer + noche</li>
            </ul>
          </div>
        </div>
        <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm mt-4">
          <a href="https://gyg.me/YnvSUuzy" target="_blank" rel="noopener noreferrer"
             className="inline-flex items-center bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sm">
            🛥️ Reservar Crucero Nocturno por el Danubio
            <ExternalLink className="h-3 w-3 ml-2" />
          </a>
        </div>
        <div className="bg-orange-100 border border-orange-300 rounded-xl p-4 mt-4">
          <p className="text-orange-800 text-sm">
            SE AGOTA: Reserva con anticipación, especialmente fines de semana.
          </p>
        </div>
      </div>
    </div>
  </div>

  {/* Separador decorativo */}
  <div className="flex items-center justify-center mb-8">
    <div className="flex space-x-2">
      <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
      <div className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-green-400 rounded-full"></div>
      <div className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"></div>
    </div>
  </div>

  <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 flex items-center">
      <span className="bg-gradient-to-br from-purple-500 to-pink-500 text-white w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-bold mr-4 shadow-lg">3</span>
      DÍA 3: Aguas Milenarias y Esplendor Imperial
    </h2>

    <div className="mb-8">
      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
        <div className="w-1 h-6 bg-gradient-to-b from-emerald-400 to-green-400 rounded-full mr-3"></div>
        Relajación Termal Matutina (9:00h)
      </h3>
      <div className="bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
        <h4 className="text-lg font-bold text-gray-900 mb-3">Balnearios Széchenyi - Ritual Húngaro Milenario</h4>
        <div className="mb-6">
          <img
            src="https://images.pexels.com/photos/20519158/pexels-photo-20519158.jpeg"
            alt="Balnearios Széchenyi con sus piscinas termales al aire libre y arquitectura neobarroca"
            className="w-full h-48 sm:h-64 object-cover rounded-lg shadow-md"
          />
        </div>
        <p className="text-gray-700 mb-4">
          Sumérgete en la tradición termal más auténtica de Europa. Funciona incluso con nieve!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">Guía completa:</h5>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Días laborables: 15.000 HUF (Aprox. 39€) día completo</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Fines de semana: 16.500 HUF (Aprox. 42€) día completo</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Piscinas: 18 diferentes</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>Temperaturas: 18°C a 38°C</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Tiempo ideal: 3-4 horas</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">Qué llevar:</h5>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Toalla personal + chanclas</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>Bañador obligatorio</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>Gorro (solo piscina natación)</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>Vestuarios con taquillas incluidas</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 mb-4">
          <h3 className="font-semibold text-orange-800 mb-2">IMPORTANTE - Nueva restricción</h3>
          <p className="text-orange-700 text-sm">
            Desde agosto 2025, solo se permite entrada a mayores de 14 años en los balnearios Széchenyi.
          </p>
        </div>
        
        <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm mb-4">
          <a href="https://gyg.me/cTU7N3tH" target="_blank" rel="noopener noreferrer"
             className="inline-flex items-center bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sm">
            🏊‍♂️ Entradas oficiales Széchenyi
            <ExternalLink className="h-3 w-3 ml-2" />
          </a>
          <p className="text-xs text-gray-600 mt-1">Horario: 6:00-22:00 todos los días</p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-xl p-4">
          <h5 className="font-semibold text-gray-900 mb-2">Alternativa Elegante: Balneario Gellért</h5>
          <ul className="text-sm text-gray-700 space-y-1 list-none">
            <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Estilo: Art Nouveau, más sofisticado</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Ventaja: Completamente cubierto (perfecto invierno)</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Ambiente: Menos auténtico, más instagrameable</li>
          </ul>
        </div>
      </div>
    </div>

    <div className="mb-8">
      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
        <div className="w-1 h-6 bg-gradient-to-b from-yellow-400 to-orange-400 rounded-full mr-3"></div>
        Monumentos Imperiales (13:30h)
      </h3>
      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
        <h4 className="text-lg font-bold text-gray-900 mb-3">Plaza de los Héroes - Epicentro Húngaro</h4>
        <div className="mb-6">
          <img
            src="https://images.pexels.com/photos/5687558/pexels-photo-5687558.jpeg"
            alt="Plaza de los Héroes con el Monumento del Milenio y las columnatas semicirculares"
            className="w-full h-48 sm:h-64 object-cover rounded-lg shadow-md"
          />
        </div>
        <p className="text-gray-700 mb-4">
          El monumento más patriótico de Hungría te cuenta mil años de historia.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">Qué verás:</h5>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Entrada: Completamente GRATIS</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Monumentos: 7 estatuas tribus fundadoras</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Historia: Mil años de conquistas</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">Castillo Vajdahunyad:</h5>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Historia: Exposición Universal 1896</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Precio: 2.000 HUF (Aprox. 5 €) interior</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>Foto obligada: Con Escultura del Anónimo</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div className="mb-8">
      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
        <div className="w-1 h-6 bg-gradient-to-b from-yellow-400 to-orange-400 rounded-full mr-3"></div>
        Experiencia Legendaria (18:30h)
      </h3>
      <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
        <h4 className="text-lg font-bold text-gray-900 mb-3">New York Café - El Más Hermoso del Mundo</h4>
        <div className="mb-6">
          <img
src="https://images.pexels.com/photos/20763018/pexels-photo-20763018.jpeg"
            alt="New York Café"
            className="w-full h-48 sm:h-64 object-cover rounded-lg shadow-md"
          />
        </div>
        <p className="text-gray-700 mb-4">
          Donde se reunía la élite intelectual de Budapest en la Belle Époque.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">La experiencia completa:</h5>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Ambiente: Techos dorados + espejos</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Precios: 8-15 € café + pastel</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Historia: Inaugurado 1894</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">Consejos prácticos:</h5>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Reservas: Solo necesario para cenas después de las 18:00h</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Valor: Es experiencia, no solo café</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>Música live: Desde 11:00h</li>
            </ul>
          </div>
        </div>
        <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
          <a href="https://newyorkcafe.hu/en/" target="_blank" rel="noopener noreferrer"
             className="inline-flex items-center bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sm">
            ☕ Reservas New York Café
            <ExternalLink className="h-3 w-3 ml-2" />
          </a>
          <p className="text-xs text-gray-600 mt-1">Horario: 8:00-24:00 (lun-mié), 8:00-01:00 (jue-dom)</p>
        </div>
      </div>
    </div>
  </div>

  {/* Separador decorativo */}
  <div className="flex items-center justify-center mb-8">
    <div className="flex space-x-2">
      <div className="w-3 h-3 bg-gradient-to-r from-orange-400 to-red-400 rounded-full"></div>
      <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full"></div>
      <div className="w-3 h-3 bg-gradient-to-r from-sky-400 to-blue-400 rounded-full"></div>
    </div>
  </div>

  <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 flex items-center">
      <span className="bg-gradient-to-br from-orange-500 to-red-500 text-white w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-bold mr-4 shadow-lg">4</span>
      DÍA 4: Autenticidad Local y Despedida Panorámica
    </h2>

    <div className="mb-8">
      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
        <div className="w-1 h-6 bg-gradient-to-b from-green-400 to-emerald-400 rounded-full mr-3"></div>
        Inmersión Cultural (9:00h)
      </h3>
      <div className="bg-green-50 border border-green-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
        <h4 className="text-lg font-bold text-gray-900 mb-3">Mercado Central - Corazón Gastronómico</h4>
        <div className="mb-6">
          <img
src="https://images.pexels.com/photos/28994573/pexels-photo-28994573.jpeg"
            alt="Mercado Central"
            className="w-full h-48 sm:h-64 object-cover rounded-lg shadow-md"
          />
        </div>
        <p className="text-gray-700 mb-4">
          El mercado cubierto más espectacular de Europa Central.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">Planta baja - Productos locales:</h5>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Páprika húngara: Desde 2 €</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Salami de Szeged: Calidad mundial</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Vinos Tokaj: Desde 12 €</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>Foie gras húngaro: Especialidad nacional</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">Primera planta - Gastronomía:</h5>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Lángos: Pan frito tradicional (3-4 €)</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Goulash auténtico: Puestos familiares (6-8 €)</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>Chimney cake: Kürtőskalács (2-3 €)</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>Tiempo: 1-2 horas explorando</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div className="mb-8">
      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
        <div className="w-1 h-6 bg-gradient-to-b from-orange-400 to-red-400 rounded-full mr-3"></div>
        Ascensión Final (10:30h)
      </h3>
      <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
        <h4 className="text-lg font-bold text-gray-900 mb-3">Colina Gellért - Mirador Supremo de Budapest</h4>
        <p className="text-gray-700 mb-4">
          Las vistas más impresionantes de toda la capital húngara.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">Opciones de ascenso:</h5>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Caminata: 35-40 min, gratis</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Autobús 27: 530 HUF (Aprox. 1.5 €)</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Taxi: 2.500 HUF (Aprox. 7 €)</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">En la cima:</h5>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Estatua Libertad: 14 metros</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Mirador Citadella: Panorámica 360 grados</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>Costo: Totalmente gratuito</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Separador decorativo */}
  <div className="flex items-center justify-center mb-8">
    <div className="flex space-x-2">
      <div className="w-3 h-3 bg-gradient-to-r from-sky-400 to-emerald-400 rounded-full"></div>
      <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
      <div className="w-3 h-3 bg-gradient-to-r from-orange-400 to-red-400 rounded-full"></div>
    </div>
  </div>

    <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 mb-8 shadow-md">
  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 text-center">Presupuestos Reales y Detallados</h2>
  
  <div className="mb-6">
    <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
      <h3 className="text-lg font-bold text-emerald-800 mb-4">ESTILO MOCHILERO - 85 €/día</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Alojamiento (3 noches):</h4>
          <ul className="text-sm text-gray-700 space-y-1 list-none">
            <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Hostales céntricos: Budapest Citi Guesthouse</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Ubicación: Distrito V o VII</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Precio: 40€/noche</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Alimentación (4 días):</h4>
          <ul className="text-sm text-gray-700 space-y-1 list-none">
            <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Desayuno: Mercados + panadería (3-5 €)</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Almuerzo: Puestos callejeros (5-8 €)</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>Cena: Supermercado + cocina (8-12 €)</li>
          </ul>
        </div>
      </div>
      <div className="bg-gray-100 rounded-xl p-3 mt-4 text-xs text-gray-600">
        <p className="text-center">
          <span className="font-medium">El precio total incluye:</span> Media aproximada de gastos en atracciones principales, transporte público, y experiencias básicas según este estilo de viaje
        </p>
      </div>
      <div className="bg-white rounded-xl p-4 mt-4 shadow-sm">
        <p className="text-emerald-800 font-semibold text-center">
          Total 4 días: 340€ por persona
        </p>
      </div>
    </div>
  </div>

  <div className="mb-6">
    <div className="bg-sky-50 border border-sky-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
      <h3 className="text-lg font-bold text-sky-800 mb-4">ESTILO CONFORT - 125 €/día</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Alojamiento (3 noches):</h4>
          <ul className="text-sm text-gray-700 space-y-1 list-none">
            <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Hoteles 3*: T62 Hotel, THREE Corners Hotel Anna</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Ubicación: Centro absoluto</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Precio: 70€/noche (incluye desayuno)</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Alimentación (4 días):</h4>
          <ul className="text-sm text-gray-700 space-y-1 list-none">
            <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Desayuno: Hotel incluido</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Almuerzo: Restaurantes locales (12-18 €)</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>Cena: Experiencias gastronómicas (15-25 €)</li>
          </ul>
        </div>
      </div>
      <div className="bg-gray-100 rounded-xl p-3 mt-4 text-xs text-gray-600">
        <p className="text-center">
          <span className="font-medium">El precio total incluye:</span> Media aproximada de gastos en todas las atracciones, tours con guía, transporte variado, y experiencias de nivel medio
        </p>
      </div>
      <div className="bg-white rounded-xl p-4 mt-4 shadow-sm">
        <p className="text-sky-800 font-semibold text-center">
          Total 4 días: 500€ por persona
        </p>
      </div>
    </div>
  </div>

  <div className="mb-6">
    <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
      <h3 className="text-lg font-bold text-purple-800 mb-4">ESTILO PREMIUM - 200 €/día</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Alojamiento (3 noches):</h4>
          <ul className="text-sm text-gray-700 space-y-1 list-none">
            <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Hoteles 4*/5*: Hotel Vision Budapest, Hotel Clark Budapest</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Ubicación: Frente al Danubio</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Precio: 150€/noche (spa + servicios premium)</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Alimentación (4 días):</h4>
          <ul className="text-sm text-gray-700 space-y-1 list-none">
            <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Restaurantes top: Onyx, Costes</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Experiencias culinarias + maridajes</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>New York Café + cafés históricos</li>
          </ul>
        </div>
      </div>
      <div className="bg-gray-100 rounded-xl p-3 mt-4 text-xs text-gray-600">
        <p className="text-center">
          <span className="font-medium">El precio total incluye:</span> Media aproximada de gastos en tours privados VIP, experiencias exclusivas, transporte privado, y actividades de lujo
        </p>
      </div>
      <div className="bg-white rounded-xl p-4 mt-4 shadow-sm">
        <p className="text-purple-800 font-semibold text-center">
          Total 4 días: 800€ por persona
        </p>
      </div>
    </div>
  </div>
</div>

  <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Cuándo Ir - Timing Perfecto</h2>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-xl p-4 text-center shadow-sm hover:shadow-md transition-all duration-300">
        <h3 className="font-semibold text-orange-800 mb-2">Primavera (Abril-Mayo) - ÉPOCA IDEAL</h3>
        <p className="text-sm text-orange-700 mb-2">Temperatura: 15-22°C, perfecta para caminar</p>
        <p className="text-xs text-orange-600">Menos turistas + precios medios + clima perfecto</p>
      </div>
      <div className="bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-200 rounded-xl p-4 text-center shadow-sm hover:shadow-md transition-all duration-300">
        <h3 className="font-semibold text-emerald-800 mb-2">Otoño (Sep-Oct) - RECOMENDADO</h3>
        <p className="text-sm text-emerald-700 mb-2">Temperatura: 12-20°C</p>
        <p className="text-xs text-emerald-600">Colores otoñales + menos multitudes + luz fotográfica</p>
      </div>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 text-center shadow-sm hover:shadow-md transition-all duration-300">
        <h3 className="font-semibold text-yellow-800 mb-2">Verano (Jun-Ago)</h3>
        <p className="text-sm text-yellow-700 mb-2">Temperatura: 22-28°C</p>
        <p className="text-xs text-yellow-600">Días largos + terrazas + festivales</p>
      </div>
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-center shadow-sm hover:shadow-md transition-all duration-300">
        <h3 className="font-semibold text-blue-800 mb-2">Invierno (Nov-Mar)</h3>
        <p className="text-sm text-blue-700 mb-2">Temperatura: -2°C a 8°C</p>
        <p className="text-xs text-blue-600">Balnearios en nieve = experiencia única</p>
      </div>
    </div>
  </div>

  <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Estrategia Financiera - Ahorro Inteligente</h2>
    
    <div className="mb-6">
      <h3 className="text-lg font-bold text-gray-900 mb-4">Moneda y Pagos</h3>
      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 shadow-sm">
        <ul className="text-sm text-gray-700 space-y-2 list-none">
          <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Divisa: Florín húngaro (HUF)</li>
          <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Cambio actual: 1 euro = 395 HUF (septiembre 2025)</li>
          <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Regla de oro: SIEMPRE pagar en florines cuando te pregunten</li>
        </ul>
      </div>
    </div>

    <div className="space-y-4">
      <h3 className="text-lg font-bold text-gray-900 mb-4">Tarjetas Zero Comisiones - AHORRO GARANTIZADO</h3>
      
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-200 shadow-sm hover:shadow-md transition-all duration-300">
        <div className="text-center">
          <h4 className="font-bold text-gray-900 text-lg mb-3">
            Revolut - Tarjeta sin comisiones
          </h4>
          <p className="text-gray-700 text-sm mb-4">
            Perfecto para sacar efectivo sin comisiones. Ahorro real: 15-25 € en cambio de divisa. Cambio al tipo interbancario real.
          </p>
          <div className="space-y-2 text-xs text-gray-600 mb-6">
            <div className="flex items-center justify-center">
              <CheckCircle className="h-3 w-3 text-emerald-500 mr-2" />
              <span>0% comisiones en pagos</span>
            </div>
            <div className="flex items-center justify-center">
              <CheckCircle className="h-3 w-3 text-emerald-500 mr-2" />
              <span>Retiros gratis hasta 200 €/mes</span>
            </div>
            <div className="flex items-center justify-center">
              <CheckCircle className="h-3 w-3 text-emerald-500 mr-2" />
              <span>Cambio al tipo de cambio real</span>
            </div>
          </div>
          <a
            href="https://revolut.com/referral/?referral-code=antoni22jf!AUG2-25-AR-CH1H2-CRY&geo-redirect"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <span>💳 Conseguir Revolut GRATIS</span>
            <ExternalLink className="h-4 w-4 ml-2" />
          </a>
        </div>
      </div>
    </div>
  </div>

  <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Errores Costosos que Evitar</h2>
    
    <div className="space-y-4">
      <div className="bg-red-50 border border-red-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300">
        <h3 className="font-semibold text-red-800 mb-2">Error #1: Gestión de dinero</h3>
        <p className="text-red-700 text-sm mb-2">Problema: Usar tarjetas con comisiones altas</p>
        <p className="text-red-700 text-sm mb-2">Solución: Revolut gratis</p>
        <p className="text-red-700 text-sm font-semibold">Ahorro: 20-30 € en 4 días</p>
      </div>

      <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300">
        <h3 className="font-semibold text-orange-800 mb-2">Error #2: Reservas de última hora</h3>
        <p className="text-orange-700 text-sm mb-2">Problema: Parlamento + cruceros se agotan</p>
        <p className="text-orange-700 text-sm mb-2">Solución: Reservar 48h antes mínimo</p>
        <p className="text-orange-700 text-sm font-semibold">Consecuencia: Perderte lo mejor de Budapest</p>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300">
        <h3 className="font-semibold text-yellow-800 mb-2">Error #3: Saltarse balnearios</h3>
        <p className="text-yellow-700 text-sm mb-2">Problema: No me gustan las piscinas públicas</p>
        <p className="text-yellow-700 text-sm mb-2">Realidad: Es la experiencia más única de Budapest</p>
        <p className="text-yellow-700 text-sm font-semibold">Tip: Prueba aunque no seas fan de piscinas</p>
      </div>
    </div>
  </div>

  <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl p-6 border border-emerald-200 mb-8 shadow-md hover:shadow-lg transition-all duration-300">
    <div className="text-center">
      <h3 className="font-bold text-gray-900 text-lg mb-3">
        Protección Total de Viaje
      </h3>
      <h4 className="font-semibold text-gray-900 mb-3">Seguro IATI Estándar</h4>
      <p className="text-gray-700 text-sm mb-4">
        Cobertura médica: 200.000 € en Europa. Precio 4 días: 12-15 € Aprox.. 
        Última actualización: Septiembre 2025
      </p>
      <div className="space-y-2 text-xs text-gray-600 mb-6">
        <div className="flex items-center justify-center">
          <CheckCircle className="h-3 w-3 text-emerald-500 mr-2" />
          <span>Cobertura médica hasta 200.000 €</span>
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
        <span>🛡️ Conseguir IATI con descuento</span>
        <ExternalLink className="h-4 w-4 ml-2" />
      </a>
    </div>
  </div>

  <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Kit de Supervivencia Digital</h2>
    <p className="text-gray-700 mb-6">Apps que salvarán tu viaje:</p>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="bg-sky-50 border border-sky-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300">
        <h3 className="font-semibold text-gray-900 mb-2">BKK Info</h3>
        <ul className="text-sm text-gray-700 space-y-1 list-none">
          <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Google Maps (mapas offline)</li>
          <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Horarios en tiempo real</li>
          <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Planificador de rutas</li>
        </ul>
        <a href="https://bkk.hu/en/" target="_blank" rel="noopener noreferrer"
           className="inline-flex items-center mt-2 bg-gradient-to-r from-blue-400 to-sky-400 hover:from-blue-500 hover:to-sky-500 text-white font-medium px-3 py-1 rounded-md shadow-sm hover:shadow-md transform hover:scale-105 transition-all duration-200 text-xs">
          🚇 Web oficial BKK
          <ExternalLink className="h-2 w-2 ml-1" />
        </a>
      </div>
      
      <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300">
        <h3 className="font-semibold text-gray-900 mb-2">Bolt</h3>
        <ul className="text-sm text-gray-700 space-y-1 list-none">
          <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Taxis más económicos</li>
          <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Precios fijos sin sorpresas</li>
          <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Disponible 24/7</li>
        </ul>
        <a href="https://bolt.eu/" target="_blank" rel="noopener noreferrer"
           className="inline-flex items-center mt-2 bg-gradient-to-r from-green-400 to-emerald-400 hover:from-green-500 hover:to-emerald-500 text-white font-medium px-3 py-1 rounded-md shadow-sm hover:shadow-md transform hover:scale-105 transition-all duration-200 text-xs">
          🚗 Descargar Bolt
          <ExternalLink className="h-2 w-2 ml-1" />
        </a>
      </div>
      
      <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300">
        <h3 className="font-semibold text-gray-900 mb-2">Google Translate</h3>
        <ul className="text-sm text-gray-700 space-y-1 list-none">
          <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Húngaro muy diferente a lenguas latinas</li>
          <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Función cámara para menús</li>
          <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Descarga húngaro offline</li>
        </ul>
      </div>
      
      <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300">
        <h3 className="font-semibold text-gray-900 mb-2">Google Maps</h3>
        <ul className="text-sm text-gray-700 space-y-1 list-none">
          <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Mapas offline detallados</li>
          <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Funciona sin internet</li>
          <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Marca tus sitios favoritos</li>
        </ul>
      </div>
    </div>
  </div>

  <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Preguntas Resueltas por Viajeros Reales</h2>
    
    <div className="space-y-4">
      <div className="bg-gray-50 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300">
        <h3 className="font-semibold text-gray-900 mb-2">¿Es mejor pagar en € o florines?</h3>
        <p className="text-gray-700 text-sm">
          Siempre florines. Cuando te ofrezcan pagar en €, di NO - te cobrarán 8-12% más.
        </p>
      </div>

      <div className="bg-gray-50 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300">
        <h3 className="font-semibold text-gray-900 mb-2">¿Qué llevar a los balnearios?</h3>
        <p className="text-gray-700 text-sm">
          Imprescindible: Toalla + chanclas + bañador. 
          No necesario: Gorro (solo en piscina de natación). 
          Opcional: Alquilan toallas desechables.
        </p>
      </div>

      <div className="bg-gray-50 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300">
        <h3 className="font-semibold text-gray-900 mb-2">¿Merece la pena Budapest Card?</h3>
        <p className="text-gray-700 text-sm">
          Para 4 días SÍ. Precio: 85 € para 4 días. Ahorro: 15-25 € si visitas 4+ atracciones. 
          Incluye transporte ilimitado + entradas gratuitas.
        </p>
      </div>

      <div className="bg-gray-50 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300">
        <h3 className="font-semibold text-gray-900 mb-2">¿Funcionan balnearios en invierno?</h3>
        <p className="text-gray-700 text-sm">
          MEJOR en invierno! Experiencia única: piscina 38°C con nieve alrededor.
        </p>
      </div>

      <div className="bg-gray-50 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300">
        <h3 className="font-semibold text-gray-900 mb-2">¿Cuánto cuestan las bebidas?</h3>
        <p className="text-gray-700 text-sm">
          Cerveza local: 2-4 € en bares normales. Ruin bars: 3-6 €. 
          Cócteles: 6-10 € normales, 12-18 € en terrazas premium.
        </p>
      </div>
    </div>
  </div>

  <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Herramientas para tu viaje</h2>
    
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-sky-50 to-blue-50 rounded-xl p-6 border border-sky-200 shadow-sm hover:shadow-md transition-all duration-300">
        <div className="text-center">
          <h3 className="font-bold text-gray-900 text-lg mb-3">
            Vuelos a Budapest
          </h3>
          <p className="text-gray-700 text-sm mb-4">
            Encuentra los mejores precios para volar a Budapest desde España. Vuelos desde 80 € ida y vuelta.
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
            <span>✈️ Buscar vuelos</span>
            <ExternalLink className="h-4 w-4 ml-2" />
          </a>
        </div>
      </div>

      <div className="bg-gradient-to-r from-pink-50 to-red-50 rounded-xl p-6 border border-pink-200 shadow-sm hover:shadow-md transition-all duration-300">
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
              <span>Desde 25 €/noche</span>
            </div>
          </div>
          <a
            href="https://www.booking.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <span>🏨 Buscar alojamiento</span>
            <ExternalLink className="h-4 w-4 ml-2" />
          </a>
        </div>
      </div>
    </div>
  </div>

  <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Productos Esenciales para Budapest</h2>
    
    <div className="space-y-4">
      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex items-center justify-between hover:shadow-md transition-all duration-300">
        <div className="flex-1">
          <h4 className="font-semibold text-gray-900 text-sm mb-1">Mochila Cabina Ryanair</h4>
          <p className="text-xs text-gray-600 mb-1">40x25x20cm exactos</p>
          <span className="text-sm font-semibold text-emerald-600">Desde 35 €</span>
        </div>
        <a
          href="https://www.amazon.es/Hayayu-40x20x25-Mochilas-Senderismo-Impermeable/dp/B0CBVFL64Z?tag=viajamejor-21"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-2 px-4 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center space-x-1 text-sm ml-4"
        >
          <span>🎒 VER OFERTA</span>
          <ExternalLink className="h-3 w-3" />
        </a>
      </div>

      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex items-center justify-between hover:shadow-md transition-all duration-300">
        <div className="flex-1">
          <h4 className="font-semibold text-gray-900 text-sm mb-1">Power Bank 10000mAh</h4>
          <p className="text-xs text-gray-600 mb-1">Fotos todo el día</p>
          <span className="text-sm font-semibold text-emerald-600">Desde 20 €</span>
        </div>
        <a
          href="https://www.amazon.es/INIU-10000mAh-Cargador-Portatil-Tel%C3%A9fono/dp/B08VD632WJ?tag=viajamejor-21"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-2 px-4 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center space-x-1 text-sm ml-4"
        >
          <span>🔋 VER OFERTA</span>
          <ExternalLink className="h-3 w-3" />
        </a>
      </div>

      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex items-center justify-between hover:shadow-md transition-all duration-300">
        <div className="flex-1">
          <h4 className="font-semibold text-gray-900 text-sm mb-1">Adaptador Universal</h4>
          <p className="text-xs text-gray-600 mb-1">Enchufe tipo C/F</p>
          <span className="text-sm font-semibold text-emerald-600">Desde 15 €</span>
        </div>
        <a
          href="https://www.amazon.es/TESSAN-Adaptador-Universal-Internacional-Americano/dp/B0B2DRC76L?tag=viajamejor-21"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-2 px-4 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center space-x-1 text-sm ml-4"
        >
          <span>🔌 VER OFERTA</span>
          <ExternalLink className="h-3 w-3" />
        </a>
      </div>
    </div>
  </div>

  <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Gastronomía Húngara - Sabores Auténticos</h2>
    
    <div className="mb-6">
      <h3 className="text-lg font-bold text-gray-900 mb-4">Platos que Debes Probar:</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300">
          <h4 className="font-semibold text-gray-900 mb-2">Goulash (Gulyás)</h4>
          <ul className="text-sm text-gray-700 space-y-1 list-none">
            <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Sopa nacional con carne + páprika</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Precio: 6-12 € según restaurante</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Mejor en: Frici Papa, Menza</li>
          </ul>
        </div>
        
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300">
          <h4 className="font-semibold text-gray-900 mb-2">Lángos</h4>
          <ul className="text-sm text-gray-700 space-y-1 list-none">
            <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Pan frito con crema agria + queso</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Precio: 3-5 € en puestos callejeros</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Mejor en: Mercado Central planta superior</li>
          </ul>
        </div>
        
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300">
          <h4 className="font-semibold text-gray-900 mb-2">Schnitzel húngaro</h4>
          <ul className="text-sm text-gray-700 space-y-1 list-none">
            <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Versión local más especiada</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Precio: 8-15 €</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Acompañamiento: Patatas + ensalada</li>
          </ul>
        </div>
        
        <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300">
          <h4 className="font-semibold text-gray-900 mb-2">Kürtőskalács (Chimney Cake)</h4>
          <ul className="text-sm text-gray-700 space-y-1 list-none">
            <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Postre cilíndrico dulce con canela</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Precio: 2-4 €</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Dónde: Puestos callejeros zona turística</li>
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
            <div className="bg-gray-50 rounded-xl p-3 shadow-sm hover:shadow-md transition-all duration-300">
              <h5 className="font-semibold text-gray-900 text-sm">Frici Papa</h5>
              <p className="text-xs text-gray-600 mb-1">Comida de abuela (8-12 €)</p>
              <a href="https://www.fricipapa.hu/" target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center bg-gradient-to-r from-orange-400 to-red-400 hover:from-orange-500 hover:to-red-500 text-white font-medium px-2 py-1 rounded-md shadow-sm hover:shadow-md transform hover:scale-105 transition-all duration-200 text-xs">
                🍽️ Web oficial
                <ExternalLink className="h-2 w-2 ml-1" />
              </a>
            </div>
            <div className="bg-gray-50 rounded-xl p-3 shadow-sm hover:shadow-md transition-all duration-300">
              <h5 className="font-semibold text-gray-900 text-sm">Menza</h5>
              <p className="text-xs text-gray-600 mb-1">Húngara moderna (12-18 €)</p>
              <a href="https://www.menzaetterem.hu/en/" target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center bg-gradient-to-r from-teal-400 to-blue-400 hover:from-teal-500 hover:to-blue-500 text-white font-medium px-2 py-1 rounded-md shadow-sm hover:shadow-md transform hover:scale-105 transition-all duration-200 text-xs">
                🏛️ Web oficial
                <ExternalLink className="h-2 w-2 ml-1" />
              </a>
            </div>
            <div className="bg-gray-50 rounded-xl p-3 shadow-sm hover:shadow-md transition-all duration-300">
              <h5 className="font-semibold text-gray-900 text-sm">Gundel</h5>
              <p className="text-xs text-gray-600">Histórico de lujo (25-40 €)</p>
              <a href="https://gundel.hu/en/" target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center bg-gradient-to-r from-purple-400 to-pink-400 hover:from-purple-500 hover:to-pink-500 text-white font-medium px-2 py-1 rounded-md shadow-sm hover:shadow-md transform hover:scale-105 transition-all duration-200 text-xs">
                👑 Web oficial
                <ExternalLink className="h-2 w-2 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 mb-8 shadow-md">
    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Enlaces Oficiales Útiles</h2>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
        <h3 className="font-semibold text-gray-900 mb-3">Atracciones Principales</h3>
        <div className="space-y-2 text-sm">
          <a href="https://gyg.me/gMPSGtKr" target="_blank" rel="noopener noreferrer"
             className="block bg-gradient-to-r from-sky-500 to-blue-500 hover:from-sky-600 hover:to-blue-600 text-white font-medium px-3 py-2 rounded-lg shadow-sm hover:shadow-md transform hover:scale-105 transition-all duration-200">
            🏛️ Parlamento - Entradas
          </a>
          <a href="https://gyg.me/cTU7N3tH" target="_blank" rel="noopener noreferrer"
             className="block bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-medium px-3 py-2 rounded-lg shadow-sm hover:shadow-md transform hover:scale-105 transition-all duration-200">
            🏊‍♂️ Balnearios Széchenyi
          </a>
          <a href="https://gyg.me/vbht7C3s" target="_blank" rel="noopener noreferrer"
             className="block bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium px-3 py-2 rounded-lg shadow-sm hover:shadow-md transform hover:scale-105 transition-all duration-200">
            🕍 Gran Sinagoga
          </a>
        </div>
      </div>
      
      <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
        <h3 className="font-semibold text-gray-900 mb-3">Restaurantes</h3>
        <div className="space-y-2 text-sm">
          <a href="https://newyorkcafe.hu/en/" target="_blank" rel="noopener noreferrer"
             className="block bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-medium px-3 py-2 rounded-lg shadow-sm hover:shadow-md transform hover:scale-105 transition-all duration-200">
            ☕ New York Café
          </a>
          <a href="https://mazeltov.hu/en" target="_blank" rel="noopener noreferrer"
             className="block bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-medium px-3 py-2 rounded-lg shadow-sm hover:shadow-md transform hover:scale-105 transition-all duration-200">
            🌿 Mazel Tov
          </a>
          <a href="https://spinoza-szinhaz.hu/en" target="_blank" rel="noopener noreferrer"
             className="block bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white font-medium px-3 py-2 rounded-lg shadow-sm hover:shadow-md transform hover:scale-105 transition-all duration-200">
            🎭 Spinoza Café
          </a>
          <a href="https://szimpla.hu/" target="_blank" rel="noopener noreferrer"
             className="block bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-medium px-3 py-2 rounded-lg shadow-sm hover:shadow-md transform hover:scale-105 transition-all duration-200">
            🍺 Szimpla Kert
          </a>
        </div>
      </div>
      
      <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
        <h3 className="font-semibold text-gray-900 mb-3">Transporte</h3>
        <div className="space-y-2 text-sm">
          <a href="https://bkk.hu/en/" target="_blank" rel="noopener noreferrer"
             className="block bg-gradient-to-r from-blue-500 to-sky-500 hover:from-blue-600 hover:to-sky-600 text-white font-medium px-3 py-2 rounded-lg shadow-sm hover:shadow-md transform hover:scale-105 transition-all duration-200">
            🚇 BKK Transporte Público
          </a>
          <a href="https://bolt.eu/" target="_blank" rel="noopener noreferrer"
             className="block bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-medium px-3 py-2 rounded-lg shadow-sm hover:shadow-md transform hover:scale-105 transition-all duration-200">
            🚗 Bolt Taxi
          </a>
        </div>
      </div>
    </div>
  </div>

  <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 sm:p-8 mb-8 shadow-md hover:shadow-lg transition-all duration-300">
    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Bonus: Experiencias Secretas</h2>
    
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
        <h3 className="font-semibold text-gray-900 mb-2">Para Aventureros:</h3>
        <ul className="text-sm text-gray-700 space-y-1 list-none">
          <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Cuevas del Castillo: Laberinto (8 €)</li>
          <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Isla Margarita en bici: 5 €/día</li>
          <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Mercadillo Ecseri: Sábados</li>
        </ul>
      </div>
      
      <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
        <h3 className="font-semibold text-gray-900 mb-2">Para Románticos:</h3>
        <ul className="text-sm text-gray-700 space-y-1 list-none">
          <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Cena en Danubio: Cruceros (35-50 €)</li>
          <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Atardecer Bastión: Sin multitudes 19:00h</li>
          <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Paseo nocturno puentes iluminados</li>
        </ul>
      </div>
      
      <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
        <h3 className="font-semibold text-gray-900 mb-2">Para Gourmets:</h3>
        <ul className="text-sm text-gray-700 space-y-1 list-none">
          <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Tour gastronómico: 6 especialidades (45 €)</li>
          <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Mercado productores: Sábados Hold utca</li>
          <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Clases cocina húngara: Goulash (35 €)</li>
        </ul>
      </div>
    </div>
  </div>

  <div className="bg-gradient-to-r from-sky-500 to-emerald-500 rounded-2xl p-6 sm:p-8 text-center text-white mb-8 shadow-lg hover:shadow-xl transition-all duration-300">
    <h3 className="text-xl sm:text-2xl font-bold mb-4">¿Listo para descubrir Budapest?</h3>
    <p className="text-base sm:text-lg mb-6 opacity-90">
      Empieza a planificar tu viaje con nuestras herramientas recomendadas
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <a 
        href="https://kiwi.tpk.lv/z2gZyZ3E"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center bg-white text-sky-500 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105"
      >
        ✈️ Buscar vuelos
        <ExternalLink className="h-4 w-4 ml-2" />
      </a>
      <a 
        href="https://www.booking.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center bg-transparent border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-sky-500 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105"
      >
        🏨 Buscar hoteles
        <ExternalLink className="h-4 w-4 ml-2" />
      </a>
    </div>
  </div>
  
  <div className="text-center text-gray-600 text-sm mt-8">
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