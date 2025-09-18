import React from 'react';
import { ArrowLeft, Share2, Clock, MapPin, CheckCircle, ExternalLink } from 'lucide-react';

interface ViennaGuideArticleProps {
  onBack: () => void;
}

const ViennaGuideArticle: React.FC<ViennaGuideArticleProps> = ({ onBack }) => {

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
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-md">
            Guía Imperial
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
          Viena en 3 Días: Capital Imperial de la Música y el Arte
        </h1>

        <div className="flex flex-col gap-4 mb-6 items-start">
          <div className="flex flex-wrap items-center gap-2 text-gray-600 text-xs">
            <span className="flex items-center bg-gray-100 px-3 py-2 rounded-full shadow-sm">
              <Clock className="h-3 w-3 mr-1" />
              18 min
            </span>
            <span className="flex items-center bg-gray-100 px-3 py-2 rounded-full shadow-sm">
              <MapPin className="h-3 w-3 mr-1" />
              Viena
            </span>
          </div>
          
          <button
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: 'Viena en 3 Días: Guía Imperial Completa con Música Clásica y Palacios',
                  text: 'Descubre la capital musical de Europa con nuestro itinerario optimizado',
                  url: window.location.href,
                })
                .catch((error) => console.log('Error sharing', error));
              } else {
                navigator.clipboard.writeText(window.location.href).then(() => {
                  alert('Enlace copiado al portapapeles');
                }).catch(() => {
                  window.open(`https://twitter.com/intent/tweet?text=Viena en 3 Días: Guía Imperial&url=${encodeURIComponent(window.location.href)}`, '_blank');
                });
              }
            }}
            className="inline-flex items-center text-gray-600 hover:text-purple-600 bg-gray-100 hover:bg-purple-50 px-3 py-2 rounded-full transition-all duration-200 text-xs border border-gray-200 hover:border-purple-300 self-start shadow-sm hover:shadow-md"
          >
            <Share2 className="h-3 w-3 mr-1" />
            <span>Compartir</span>
          </button>
        </div>
      </div>

      <div className="mb-8">
        <img
          src="https://images.pexels.com/photos/161901/vienna-schoenbrunn-palace-park-161901.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Palacio Schönbrunn de Viena con su fachada amarilla imperial y jardines barrocos"
          className="w-full h-48 sm:h-64 lg:h-80 object-cover rounded-2xl shadow-lg"
        />
      </div>

      <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 sm:p-8 mb-8 shadow-md">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Itinerario Imperial</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white rounded-xl shadow-sm">
            <thead>
              <tr className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">JORNADA</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">EXPERIENCIAS IMPERIALES</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-bold">DÍA 1</td>
                <td className="border border-gray-300 px-4 py-3">Ópera de Viena + Centro histórico + Catedral San Esteban + Palacio Hofburg + Café Sacher</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-bold">DÍA 2</td>
                <td className="border border-gray-300 px-4 py-3">Palacio Schönbrunn + Jardines imperiales + Gloriette + Cultura cafetera vienesa</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-bold">DÍA 3</td>
                <td className="border border-gray-300 px-4 py-3">Palacio Belvedere + Klimt "El Beso" + Prater + Musikverein + Concierto final</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">🚗 Llegada y Conexiones Eficientes</h2>

        <div className="mb-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">✈️ Desde Aeropuerto de Viena (VIE)</h3>
          
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-4">
            <h4 className="font-bold text-gray-900 mb-3">🚄 CAT City Airport Train</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-700 mb-2"><strong>Precio:</strong> 12 € (≈ 12€)</p>
                <p className="text-sm text-gray-700 mb-2"><strong>Horario:</strong> 06:09-23:39 cada 30 min</p>
                <p className="text-sm text-gray-700"><strong>Duración:</strong> 16 min sin paradas</p>
              </div>
              <div>
                <p className="text-sm text-gray-700 mb-2"><strong>Destino:</strong> Wien-Mitte (conexión U3/U4)</p>
                <p className="text-sm text-gray-700"><strong>Compra:</strong> Online con descuento o taquillas</p>
              </div>
            </div>
            <div className="bg-green-100 rounded-lg p-3 mt-4">
              <p className="text-green-800 text-sm">💡 Opción más rápida y cómoda al centro de Viena</p>
            </div>
          </div>
          
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
            <h4 className="font-bold text-gray-900 mb-2">🚊 Tren Regional ÖBB</h4>
            <p className="text-sm text-gray-700">Precio: 4,20 € | Duración: 25 min | Opción más económica</p>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-4">🚇 Moverse por Viena</h3>
          <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
            <p className="text-sm text-gray-700 mb-2"><strong>A pie:</strong> Centro histórico completamente peatonal</p>
            <p className="text-sm text-gray-700 mb-2"><strong>Metro/Tranvía:</strong> Red excelente y puntual</p>
            <p className="text-sm text-gray-700 mb-2"><strong>Precio:</strong> 2,40 € por viaje sencillo</p>
            <p className="text-sm text-gray-700"><strong>Tarjeta:</strong> Vienna City Card (17€/24h) incluye transporte + descuentos</p>
          </div>
        </div>
      </div>

      {/* Separador decorativo */}
      <div className="flex items-center justify-center mb-8">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
          <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full"></div>
          <div className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-green-400 rounded-full"></div>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <span className="bg-gradient-to-br from-purple-500 to-pink-500 text-white w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-bold mr-4 shadow-lg">1</span>
          DÍA 1: Entrada Triunfal a la Capital Musical
        </h2>

        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
            <div className="w-1 h-6 bg-gradient-to-b from-red-400 to-pink-400 rounded-full mr-3"></div>
            Despertar Musical (9:00h)
          </h3>
          <div className="bg-gradient-to-r from-red-50 to-pink-50 border border-red-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
            <h4 className="text-lg font-bold text-gray-900 mb-3">Ópera Estatal de Viena - Templo de la Música</h4>
            <p className="text-gray-700 mb-4">
              Comienza tu aventura vienesa en uno de los teatros de ópera más prestigiosos del mundo. La Staatsoper es el corazón cultural de la ciudad desde 1869.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">Opciones de visita:</h5>
                <ul className="text-sm text-gray-700 space-y-1 list-none">
                  <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Visita guiada: 10 € (45 min)</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Ópera/Ballet: Desde 3 € (entradas de pie)</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Entradas premium: 50-200 €</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>Tip: Entradas económicas 80 min antes</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">Incluye visita guiada:</h5>
                <ul className="text-sm text-gray-700 space-y-1 list-none">
                  <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Salón principal + palcos imperiales</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Historia de Mozart y Strauss</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>Arquitectura neorenacentista</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>Secretos del backstage</li>
                </ul>
              </div>
            </div>
            <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
              <a href="https://www.wiener-staatsoper.at/en/" target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sm">
                🎭 Entradas oficiales Ópera de Viena
                <ExternalLink className="h-3 w-3 ml-2" />
              </a>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
            <div className="w-1 h-6 bg-gradient-to-b from-blue-400 to-indigo-400 rounded-full mr-3"></div>
            Corazón Histórico (11:00h)
          </h3>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
            <h4 className="text-lg font-bold text-gray-900 mb-3">Catedral de San Esteban + Centro Medieval</h4>
            <p className="text-gray-700 mb-4">
              El símbolo más reconocible de Viena y el punto neurálgico del casco histórico.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">Catedral (Stephansdom):</h5>
                <ul className="text-sm text-gray-700 space-y-1 list-none">
                  <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Entrada nave: GRATIS</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Torre sur (343 escalones): 6 €</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Torre norte (ascensor): 6 €</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">Centro histórico:</h5>
                <ul className="text-sm text-gray-700 space-y-1 list-none">
                  <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Calle Graben: Compras de lujo</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Columna de la Peste: Monumento barroco</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>Todo peatonal y fotogénico</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
            <div className="w-1 h-6 bg-gradient-to-b from-emerald-400 to-green-400 rounded-full mr-3"></div>
            Poder Imperial (13:30h)
          </h3>
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
            <h4 className="text-lg font-bold text-gray-900 mb-3">Palacio Hofburg - Corazón del Imperio</h4>
            <p className="text-gray-700 mb-4">
              El complejo palaciego más grande de Viena, residencia de los Habsburgo durante 6 siglos.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">Atracciones principales:</h5>
                <ul className="text-sm text-gray-700 space-y-1 list-none">
                  <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Museo Sisi: 16 € (vida Emperatriz Isabel)</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Biblioteca Nacional: 8 € (barroca)</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Escuela Equitación: 18-85 €</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">Combo recomendado:</h5>
                <ul className="text-sm text-gray-700 space-y-1 list-none">
                  <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Sisi Pass: 3 palacios por 37 €</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Vienna Pass: 90+ atracciones</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>Tiempo: Mínimo 3 horas</li>
                </ul>
              </div>
            </div>
            <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
              <a href="https://www.sisimuseum-hofburg.at/en/" target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sm">
                👑 Entradas Palacio Hofburg
                <ExternalLink className="h-3 w-3 ml-2" />
              </a>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
            <div className="w-1 h-6 bg-gradient-to-b from-yellow-400 to-orange-400 rounded-full mr-3"></div>
            Pausa Gastronómica Imperial (16:30h)
          </h3>
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
            <h4 className="text-lg font-bold text-gray-900 mb-3">Café Sacher - La Leyenda de la Tarta</h4>
            <p className="text-gray-700 mb-4">
              Donde nació la mundialmente famosa Sachertorte en 1832. Café histórico frecuentado por la realeza.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">La experiencia:</h5>
                <ul className="text-sm text-gray-700 space-y-1 list-none">
                  <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Tarta Sacher original: 8 €</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Café vienés completo: 12-18 €</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Ambiente: Salones imperiales</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">Tradición cafetera:</h5>
                <ul className="text-sm text-gray-700 space-y-1 list-none">
                  <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Patrimonio UNESCO desde 2011</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Cultura única en el mundo</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>Servicio con vaso de agua</li>
                </ul>
              </div>
            </div>
            <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
              <a href="https://www.sacher.com/en/vienna/dining/original-sacher-torte/" target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sm">
                ☕ Reservar mesa Café Sacher
                <ExternalLink className="h-3 w-3 ml-2" />
              </a>
              <p className="text-xs text-orange-600 mt-1">Recomendamos reservar para evitar colas</p>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
            <div className="w-1 h-6 bg-gradient-to-b from-indigo-400 to-purple-400 rounded-full mr-3"></div>
            Final Musical del Día (19:30h)
          </h3>
          <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
            <h4 className="text-lg font-bold text-gray-900 mb-3">Concierto de Música Clásica - Debut Vienés</h4>
            <p className="text-gray-700 mb-4">
              Viena es la capital mundial de la música clásica. No hay mejor manera de terminar el primer día.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">Opciones principales:</h5>
                <ul className="text-sm text-gray-700 space-y-1 list-none">
                  <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Iglesia San Pedro: Desde 25 €</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Musikverein: Desde 45 €</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Kursalon: Desde 40 €</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">Repertorio típico:</h5>
                <ul className="text-sm text-gray-700 space-y-1 list-none">
                  <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Mozart: Las mejores sonatas</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Strauss: El Danubio Azul</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>Duración: 60-90 minutos</li>
                </ul>
              </div>
            </div>
            <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
              <a href="https://www.konzerthaus.at/en/" target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sm">
                🎼 Conciertos clásicos Viena
                <ExternalLink className="h-3 w-3 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Separador decorativo */}
      <div className="flex items-center justify-center mb-8">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full"></div>
          <div className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-green-400 rounded-full"></div>
          <div className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"></div>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <span className="bg-gradient-to-br from-blue-500 to-indigo-500 text-white w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-bold mr-4 shadow-lg">2</span>
          DÍA 2: Esplendor Imperial de Schönbrunn
        </h2>

        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
            <div className="w-1 h-6 bg-gradient-to-b from-yellow-400 to-orange-400 rounded-full mr-3"></div>
            Majestuosidad Imperial (9:00h)
          </h3>
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
            <h4 className="text-lg font-bold text-gray-900 mb-3">Palacio Schönbrunn - El Versalles Vienés</h4>
            <p className="text-gray-700 mb-4">
              La residencia de verano de los Habsburgo y uno de los complejos palaciegos más magníficos de Europa. Patrimonio UNESCO desde 1996.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">Opciones de visita:</h5>
                <ul className="text-sm text-gray-700 space-y-1 list-none">
                  <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Grand Tour: 25 € (40 habitaciones)</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Imperial Tour: 18 € (22 habitaciones)</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Classic Pass: 32 € (todo incluido)</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>Tiempo: 3-4 horas completo</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">Experiencia completa:</h5>
                <ul className="text-sm text-gray-700 space-y-1 list-none">
                  <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Aposentos de María Teresa</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Salón donde Mozart tocó (6 años)</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>Jardines barrocos extensos</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>Gloriette con vistas panorámicas</li>
                </ul>
              </div>
            </div>
            <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
              <a href="https://www.schoenbrunn.at/en/" target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sm">
                🏰 Entradas oficiales Schönbrunn
                <ExternalLink className="h-3 w-3 ml-2" />
              </a>
            </div>
            <div className="bg-orange-100 border border-orange-300 rounded-xl p-4 mt-4">
              <p className="text-orange-800 text-sm">
                💡 Tip: Empieza por la Gloriette y baja hacia el palacio para mejores fotos y menos multitudes.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
            <div className="w-1 h-6 bg-gradient-to-b from-green-400 to-emerald-400 rounded-full mr-3"></div>
            Jardines Imperiales (13:00h)
          </h3>
          <div className="bg-green-50 border border-green-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
            <h4 className="text-lg font-bold text-gray-900 mb-3">Jardines de Schönbrunn + Gloriette</h4>
            <p className="text-gray-700 mb-4">
              160 hectáreas de jardines perfectamente diseñados con fuentes, esculturas y el mirador más icónico de Viena.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">Jardines gratuitos:</h5>
                <ul className="text-sm text-gray-700 space-y-1 list-none">
                  <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Acceso libre todo el año</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Fuente de Neptuno</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Jardín del Príncipe</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">Gloriette (mirador):</h5>
                <ul className="text-sm text-gray-700 space-y-1 list-none">
                  <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Entrada: 5 € a la terraza</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Vista 360° de Viena</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>Café con terraza panorámica</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
            <div className="w-1 h-6 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full mr-3"></div>
            Cultura Cafetera (16:00h)
          </h3>
          <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
            <h4 className="text-lg font-bold text-gray-900 mb-3">Tradición Cafetera Vienesa - Patrimonio UNESCO</h4>
            <p className="text-gray-700 mb-4">
              Los cafés vieneses forman parte del Patrimonio Cultural Inmaterial de la Humanidad desde 2011.
            </p>
            <div className="space-y-3">
              <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
                <h5 className="font-semibold text-gray-900">Café Central</h5>
                <p className="text-sm text-gray-700 mb-1">Lugar de encuentro de intelectuales (8-15 €)</p>
                <a href="https://www.cafecentral.wien/" target="_blank" rel="noopener noreferrer" 
                   className="inline-flex items-center bg-gradient-to-r from-brown-400 to-orange-400 hover:from-brown-500 hover:to-orange-500 text-white font-medium px-3 py-1 rounded-md shadow-sm hover:shadow-md transform hover:scale-105 transition-all duration-200 text-xs">
                  ☕ Web oficial
                  <ExternalLink className="h-2 w-2 ml-1" />
                </a>
                <p className="text-xs text-blue-600 mt-1">Horario: 7:30-22:00 • Ambiente histórico auténtico</p>
              </div>
              <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
                <h5 className="font-semibold text-gray-900">Café Demel</h5>
                <p className="text-sm text-gray-700 mb-1">Confitería imperial desde 1786 (10-18 €)</p>
                <a href="https://www.demel.com/" target="_blank" rel="noopener noreferrer"
                   className="inline-flex items-center bg-gradient-to-r from-pink-400 to-red-400 hover:from-pink-500 hover:to-red-500 text-white font-medium px-3 py-1 rounded-md shadow-sm hover:shadow-md transform hover:scale-105 transition-all duration-200 text-xs">
                  🍰 Reservas Demel
                  <ExternalLink className="h-2 w-2 ml-1" />
                </a>
                <p className="text-xs text-emerald-600 mt-1">Especialidad: Apfelstrudel y chocolate imperial</p>
              </div>
            </div>
            <div className="bg-blue-100 border border-blue-300 rounded-xl p-4 mt-4">
              <h5 className="font-semibold text-blue-800 mb-2">Tipos de café vienés:</h5>
              <ul className="text-sm text-blue-700 space-y-1 list-none">
                <li><strong>Melange:</strong> Mitad café, mitad leche con espuma</li>
                <li><strong>Einspänner:</strong> Café negro con crema batida</li>
                <li><strong>Brauner:</strong> Café con un poco de leche</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Separador decorativo */}
      <div className="flex items-center justify-center mb-8">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-green-400 rounded-full"></div>
          <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
          <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full"></div>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <span className="bg-gradient-to-br from-emerald-500 to-green-500 text-white w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-bold mr-4 shadow-lg">3</span>
          DÍA 3: Arte, Diversión y Gran Final Musical
        </h2>

        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
            <div className="w-1 h-6 bg-gradient-to-b from-pink-400 to-red-400 rounded-full mr-3"></div>
            Obra Maestra del Arte (9:00h)
          </h3>
          <div className="bg-pink-50 border border-pink-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
            <h4 className="text-lg font-bold text-gray-900 mb-3">Palacio Belvedere - "El Beso" de Klimt</h4>
            <p className="text-gray-700 mb-4">
              Hogar de la mayor colección de Gustav Klimt del mundo, incluyendo su obra maestra "El Beso" (1907-1908).
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">Opciones de entrada:</h5>
                <ul className="text-sm text-gray-700 space-y-1 list-none">
                  <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Belvedere Superior: 17 € (40 habitaciones)</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Combo Superior + Inferior: 25 €</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Con audioguía incluida</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>Tiempo: 2-2.5 horas</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">Experiencia completa:</h5>
                <ul className="text-sm text-gray-700 space-y-1 list-none">
                  <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Aposentos de María Teresa</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Salón donde Mozart tocó (6 años)</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>Jardines barrocos extensos</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>Gloriette con vistas panorámicas</li>
                </ul>
              </div>
            </div>
            <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
              <a href="https://www.belvedere.at/en" target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sm">
                🎨 Entradas Palacio Belvedere
                <ExternalLink className="h-3 w-3 ml-2" />
              </a>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
            <div className="w-1 h-6 bg-gradient-to-b from-blue-400 to-indigo-400 rounded-full mr-3"></div>
            Diversión Vienesa (13:00h)
          </h3>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
            <h4 className="text-lg font-bold text-gray-900 mb-3">Prater - Parque de Atracciones Histórico</h4>
            <p className="text-gray-700 mb-4">
              El parque de atracciones más antiguo del mundo (1766) con la famosa noria gigante Riesenrad.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">Riesenrad (noria gigante):</h5>
                <ul className="text-sm text-gray-700 space-y-1 list-none">
                  <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Precio: 13,50 € adultos</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Altura: 65 metros</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Vistas únicas de Viena</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">Alternativa rápida:</h5>
                <ul className="text-sm text-gray-700 space-y-1 list-none">
                  <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Hundertwasserhaus: 30 min</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Arquitectura única colorida</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>Exterior gratuito</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
            <div className="w-1 h-6 bg-gradient-to-b from-yellow-400 to-orange-400 rounded-full mr-3"></div>
            Templo de la Música (16:00h)
          </h3>
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
            <h4 className="text-lg font-bold text-gray-900 mb-3">Musikverein - Sala Dorada Legendaria</h4>
            <p className="text-gray-700 mb-4">
              Donde se celebra el mundialmente famoso Concierto de Año Nuevo. La acústica más perfecta del mundo.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">Opciones de experiencia:</h5>
                <ul className="text-sm text-gray-700 space-y-1 list-none">
                  <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Visita guiada: 15 € (45 min)</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Concierto Mozart: Desde 55 €</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Biblioteca Nacional: 8 € (opcional)</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">La experiencia única:</h5>
                <ul className="text-sm text-gray-700 space-y-1 list-none">
                  <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Sala Dorada legendaria</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Acústica perfecta mundial</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>Concierto Año Nuevo aquí</li>
                </ul>
              </div>
            </div>
            <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
              <a href="https://www.musikverein.at/en/" target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sm">
                🎼 Entradas Musikverein
                <ExternalLink className="h-3 w-3 ml-2" />
              </a>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
            <div className="w-1 h-6 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full mr-3"></div>
            Gran Final Musical (19:30h)
          </h3>
          <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
            <h4 className="text-lg font-bold text-gray-900 mb-3">Concierto de Despedida - Culminación Imperial</h4>
            <p className="text-gray-700 mb-4">
              Termina tu experiencia vienesa con un concierto de música clásica en una de las salas más prestigiosas del mundo.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">Opciones premium:</h5>
                <ul className="text-sm text-gray-700 space-y-1 list-none">
                  <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Musikverein: Desde 55 €</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Konzerthaus: Desde 35 €</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Schönbrunn Orangery: Desde 65 €</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">Repertorio esperado:</h5>
                <ul className="text-sm text-gray-700 space-y-1 list-none">
                  <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Mozart: Mejores sinfonías</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Strauss: Valses famosos</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>Duración: 90 min + intermedio</li>
                </ul>
              </div>
            </div>
            <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
              <a href="https://www.wien-ticket.at/" target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sm">
                🎻 Conciertos clásicos Viena
                <ExternalLink className="h-3 w-3 ml-2" />
              </a>
            </div>
            <div className="bg-orange-100 border border-orange-300 rounded-xl p-4 mt-4">
              <p className="text-orange-800 text-sm">
                💫 Culminación perfecta: Viena es la única ciudad donde puedes escuchar música clásica de este nivel cada noche del año.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Separador decorativo */}
      <div className="flex items-center justify-center mb-8">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"></div>
          <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full"></div>
          <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
        </div>
      </div>

      <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 mb-8 shadow-md">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 text-center">Presupuestos Realistas por Estilo de Viaje</h2>

        <div className="mb-6">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
            <h3 className="text-lg font-bold text-emerald-800 mb-4">ESTILO ESTUDIANTE - 75 €/día</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Alojamiento (2 noches):</h4>
                <ul className="text-sm text-gray-700 space-y-1 list-none">
                  <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Hostels: Wombats City, Hostel Ruthensteiner</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Ubicación: Distrito 1 o cerca de metro</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Precio: 35€/noche (dormitorio)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Alimentación (3 días):</h4>
                <ul className="text-sm text-gray-700 space-y-1 list-none">
                  <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Desayuno: Panadería + café (4-6 €)</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Almuerzo: Würstelstand + schnitzel (8-12 €)</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>Cena: Supermercado + ocasional (10-15 €)</li>
                </ul>
              </div>
            </div>
            <div className="bg-gray-100 rounded-xl p-3 mt-4 text-xs text-gray-600">
              <p className="text-center">
                <span className="font-medium">El precio total incluye:</span> Transporte público, entrada a los principales palacios, un concierto básico y comida económica pero auténtica
              </p>
            </div>
            <div className="bg-white rounded-xl p-4 mt-4 shadow-sm">
              <p className="text-emerald-800 font-semibold text-center">
                Total 3 días: 225€ por persona
              </p>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <div className="bg-sky-50 border border-sky-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
            <h3 className="text-lg font-bold text-sky-800 mb-4">ESTILO CLÁSICO - 140 €/día</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Alojamiento (2 noches):</h4>
                <ul className="text-sm text-gray-700 space-y-1 list-none">
                  <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Hoteles 3-4*: Hotel Am Ring, Kärntnerhof</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Ubicación: Centro absoluto Ring</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Precio: 95€/noche (desayuno incluido)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Alimentación (3 días):</h4>
                <ul className="text-sm text-gray-700 space-y-1 list-none">
                  <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Desayuno: Hotel incluido</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Almuerzo: Cafés tradicionales (15-22 €)</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>Cena: Beisl austriacos (18-28 €)</li>
                </ul>
              </div>
            </div>
            <div className="bg-gray-100 rounded-xl p-3 mt-4 text-xs text-gray-600">
              <p className="text-center">
                <span className="font-medium">El precio total incluye:</span> Vienna Pass, conciertos en salas prestigiosas, experiencia gastronómica completa y visitas guiadas
              </p>
            </div>
            <div className="bg-white rounded-xl p-4 mt-4 shadow-sm">
              <p className="text-sky-800 font-semibold text-center">
                Total 3 días: 420€ por persona
              </p>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
            <h3 className="text-lg font-bold text-purple-800 mb-4">ESTILO IMPERIAL - 250 €/día</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Alojamiento (2 noches):</h4>
                <ul className="text-sm text-gray-700 space-y-1 list-none">
                  <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Hoteles 5*: Hotel Sacher, Hotel Imperial</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Ubicación: Frente a la Ópera y Ring</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Precio: 200€/noche (lujo + spa)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Alimentación (3 días):</h4>
                <ul className="text-sm text-gray-700 space-y-1 list-none">
                  <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Restaurantes Michelin: Steirereck, Opus</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Experiencias gastronómicas + maridajes</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>Café Sacher + cafés históricos VIP</li>
                </ul>
              </div>
            </div>
            <div className="bg-gray-100 rounded-xl p-3 mt-4 text-xs text-gray-600">
              <p className="text-center">
                <span className="font-medium">El precio total incluye:</span> Conciertos Musikverein palcos, experiencias privadas, transporte privado y gastronomía de alta gama
              </p>
            </div>
            <div className="bg-white rounded-xl p-4 mt-4 shadow-sm">
              <p className="text-purple-800 font-semibold text-center">
                Total 3 días: 750€ por persona
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Cuándo Visitar Viena - Timing Perfecto</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-4 text-center shadow-sm hover:shadow-md transition-all duration-300">
            <h3 className="font-semibold text-green-800 mb-2">Primavera-Verano (Abr-Sep) - IDEAL</h3>
            <p className="text-sm text-green-700 mb-2">Temperatura: 15-25°C, perfecta para jardines</p>
            <p className="text-xs text-green-600">Palacios en su máximo esplendor + terraza de cafés + conciertos al aire libre</p>
          </div>
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-xl p-4 text-center shadow-sm hover:shadow-md transition-all duration-300">
            <h3 className="font-semibold text-blue-800 mb-2">Invierno (Nov-Mar) - MÁGICO</h3>
            <p className="text-sm text-blue-700 mb-2">Temperatura: 0-8°C</p>
            <p className="text-xs text-blue-600">Mercados navideños + temporada alta música clásica + ambiente imperial</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 text-center shadow-sm hover:shadow-md transition-all duration-300">
            <h3 className="font-semibold text-yellow-800 mb-2">Eventos especiales</h3>
            <p className="text-sm text-yellow-700 mb-2">Festival de Viena (May-Jun)</p>
            <p className="text-xs text-yellow-600">Temporada alta de ópera + Larga Noche de Museos</p>
          </div>
          <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 text-center shadow-sm hover:shadow-md transition-all duration-300">
            <h3 className="font-semibold text-orange-800 mb-2">Evitar</h3>
            <p className="text-sm text-orange-700 mb-2">Agosto</p>
            <p className="text-xs text-orange-600">Muchos teatros cerrados + multitudes + precios altos</p>
          </div>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Estrategia Financiera - Ahorro Inteligente</h2>

        <div className="mb-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Moneda y Ventajas</h3>
          <div className="bg-green-50 border border-green-200 rounded-xl p-4 shadow-sm">
            <ul className="text-sm text-gray-700 space-y-2 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Divisa: Euro (€) - ¡Ventaja total para españoles!</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Sin cambio de moneda = Sin comisiones</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Tarjetas españolas funcionan sin problemas</li>
            </ul>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Vienna Pass - ¿Merece la pena?</h3>
          
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="text-center">
              <h4 className="font-bold text-gray-900 text-lg mb-3">
                Vienna Pass - Acceso a 90+ atracciones
              </h4>
              <p className="text-gray-700 text-sm mb-4">
                Incluye: Schönbrunn, Hofburg, Belvedere, Prater y transporte opcional. Ahorro real para visitas múltiples.
              </p>
              <div className="space-y-2 text-xs text-gray-600 mb-6">
                <div className="flex items-center justify-center">
                  <CheckCircle className="h-3 w-3 text-emerald-500 mr-2" />
                  <span>1 día: 78 € • 2 días: 98 € • 3 días: 118 €</span>
                </div>
                <div className="flex items-center justify-center">
                  <CheckCircle className="h-3 w-3 text-emerald-500 mr-2" />
                  <span>Evita colas en temporada alta</span>
                </div>
                <div className="flex items-center justify-center">
                  <CheckCircle className="h-3 w-3 text-emerald-500 mr-2" />
                  <span>Bus turístico hop-on hop-off incluido</span>
                </div>
              </div>
              <a
                href="https://www.viennapass.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <span>🎟️ Vienna Pass oficial</span>
                <ExternalLink className="h-4 w-4 ml-2" />
              </a>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 shadow-sm">
            <h4 className="font-semibold text-blue-800 mb-2">¿Cuándo SÍ merece la pena?</h4>
            <ul className="text-sm text-blue-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Si vas a visitar 4+ atracciones principales</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Viajes en temporada alta (evitas colas)</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Primera visita a Viena</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Errores Costosos que Evitar</h2>

        <div className="space-y-4">
          <div className="bg-red-50 border border-red-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300">
            <h3 className="font-semibold text-red-800 mb-2">Error #1: Saltarse la música clásica</h3>
            <p className="text-red-700 text-sm mb-2">Problema: "No me gusta la ópera/música clásica"</p>
            <p className="text-red-700 text-sm mb-2">Realidad: Es LA experiencia más única de Viena</p>
            <p className="text-red-700 text-sm font-semibold">Solución: Concierto corto de Mozart (25€) como prueba</p>
          </div>

          <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300">
            <h3 className="font-semibold text-orange-800 mb-2">Error #2: No reservar conciertos</h3>
            <p className="text-orange-700 text-sm mb-2">Problema: Musikverein se agota con semanas de antelación</p>
            <p className="text-orange-700 text-sm mb-2">Solución: Reservar antes del viaje online</p>
            <p className="text-orange-700 text-sm font-semibold">Alternativa: Entradas de última hora en taquilla</p>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300">
            <h3 className="font-semibold text-yellow-800 mb-2">Error #3: Comer solo en zonas turísticas</h3>
            <p className="text-yellow-700 text-sm mb-2">Problema: Precios inflados cerca de atracciones</p>
            <p className="text-yellow-700 text-sm mb-2">Solución: Alejarse 2 calles de las atracciones principales</p>
            <p className="text-yellow-700 text-sm font-semibold">Tip: Beisl (tabernas) locales = auténtico + económico</p>
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
        <p className="text-gray-700 mb-6">Apps esenciales para moverte como un vienés:</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300">
            <h3 className="font-semibold text-gray-900 mb-2">WienMobil</h3>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>App oficial transporte Viena</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Compra billetes digitales</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Rutas en tiempo real</li>
            </ul>
            <a href="https://www.wienerlinien.at/eportal3/ep/channelView.do?channelId=-4677" target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center mt-2 bg-gradient-to-r from-blue-400 to-sky-400 hover:from-blue-500 hover:to-sky-500 text-white font-medium px-3 py-1 rounded-md shadow-sm hover:shadow-md transform hover:scale-105 transition-all duration-200 text-xs">
              🚇 Descargar WienMobil
              <ExternalLink className="h-2 w-2 ml-1" />
            </a>
          </div>
          
          <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300">
            <h3 className="font-semibold text-gray-900 mb-2">Vienna Guide + Citymapper</h3>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Mapas offline detallados</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Audio-guías incluidas</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Rutas optimizadas</li>
            </ul>
          </div>
          
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300">
            <h3 className="font-semibold text-gray-900 mb-2">Google Translate</h3>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Alemán diferente al inglés</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Función cámara para menús</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Descarga alemán offline</li>
            </ul>
          </div>
          
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300">
            <h3 className="font-semibold text-gray-900 mb-2">Uber/Bolt</h3>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Taxis disponibles 24/7</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Precios fijos claros</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Perfecto aeropuerto-hotel</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Gastronomía Austriaca - Placeres Imperiales</h2>

        <div className="mb-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Platos que Debes Probar:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300">
              <h4 className="font-semibold text-gray-900 mb-2">Wiener Schnitzel</h4>
              <ul className="text-sm text-gray-700 space-y-1 list-none">
                <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Plato nacional austriaco</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Precio: 12-25 € según restaurante</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Mejor en: Figlmüller, Schnitzelwirt</li>
              </ul>
            </div>
            
            <div className="bg-brown-50 border border-brown-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300">
              <h4 className="font-semibold text-gray-900 mb-2">Sachertorte</h4>
              <ul className="text-sm text-gray-700 space-y-1 list-none">
                <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Tarta de chocolate con albaricoque</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Precio: 6-8 € la porción</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Original solo en: Hotel Sacher</li>
              </ul>
            </div>
            
            <div className="bg-green-50 border border-green-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300">
              <h4 className="font-semibold text-gray-900 mb-2">Apfelstrudel</h4>
              <ul className="text-sm text-gray-700 space-y-1 list-none">
                <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Hojaldre de manzana tradicional</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Precio: 4-7 €</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Mejor: Café Central, Demel</li>
              </ul>
            </div>
            
            <div className="bg-red-50 border border-red-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300">
              <h4 className="font-semibold text-gray-900 mb-2">Tafelspitz</h4>
              <ul className="text-sm text-gray-700 space-y-1 list-none">
                <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Carne hervida en caldo especiado</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Precio: 18-28 €</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Especialidad: Plachutta Gasthaus</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-4">Restaurantes Verificados:</h3>
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">GASTRONOMÍA TRADICIONAL:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="bg-gray-50 rounded-xl p-3 shadow-sm hover:shadow-md transition-all duration-300">
                  <h5 className="font-semibold text-gray-900 text-sm">Figlmüller</h5>
                  <p className="text-xs text-gray-600 mb-1">Schnitzel legendario (15-20 €)</p>
                  <a href="https://figlmueller.at/en/" target="_blank" rel="noopener noreferrer"
                     className="inline-flex items-center bg-gradient-to-r from-amber-400 to-orange-400 hover:from-amber-500 hover:to-orange-500 text-white font-medium px-2 py-1 rounded-md shadow-sm hover:shadow-md transform hover:scale-105 transition-all duration-200 text-xs">
                    🍽️ Web oficial
                    <ExternalLink className="h-2 w-2 ml-1" />
                  </a>
                </div>
                <div className="bg-gray-50 rounded-xl p-3 shadow-sm hover:shadow-md transition-all duration-300">
                  <h5 className="font-semibold text-gray-900 text-sm">Zur Eisernen Zeit</h5>
                  <p className="text-xs text-gray-600 mb-1">Beisl auténtico (12-18 €)</p>
                  <a href="https://www.eiserne-zeit.at/" target="_blank" rel="noopener noreferrer"
                     className="inline-flex items-center bg-gradient-to-r from-green-400 to-emerald-400 hover:from-green-500 hover:to-emerald-500 text-white font-medium px-2 py-1 rounded-md shadow-sm hover:shadow-md transform hover:scale-105 transition-all duration-200 text-xs">
                    🍻 Reservas
                    <ExternalLink className="h-2 w-2 ml-1" />
                  </a>
                </div>
                <div className="bg-gray-50 rounded-xl p-3 shadow-sm hover:shadow-md transition-all duration-300">
                  <h5 className="font-semibold text-gray-900 text-sm">Steirereck</h5>
                  <p className="text-xs text-gray-600">Estrella Michelin (80-120 €)</p>
                  <a href="https://www.steirereck.at/en/" target="_blank" rel="noopener noreferrer"
                     className="inline-flex items-center bg-gradient-to-r from-purple-400 to-pink-400 hover:from-purple-500 hover:to-pink-500 text-white font-medium px-2 py-1 rounded-md shadow-sm hover:shadow-md transform hover:scale-105 transition-all duration-200 text-xs">
                    ⭐ Web oficial
                    <ExternalLink className="h-2 w-2 ml-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Preguntas Resueltas por Viajeros Reales</h2>

        <div className="space-y-4">
          <div className="bg-gray-50 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300">
            <h3 className="font-semibold text-gray-900 mb-2">¿Merece la pena la Vienna Pass?</h3>
            <p className="text-gray-700 text-sm">
              SÍ si visitas 4+ atracciones principales. Precio 3 días: 118€. Ahorro típico: 20-40€ + evitas colas.
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300">
            <h3 className="font-semibold text-gray-900 mb-2">¿Necesito saber alemán?</h3>
            <p className="text-gray-700 text-sm">
              NO es imprescindible. En centros turísticos hablan inglés perfectamente. 
              Aprende: "Danke" (gracias), "Bitte" (por favor), "Entschuldigung" (perdón).
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300">
            <h3 className="font-semibold text-gray-900 mb-2">¿Concierto clásico aunque no me guste la música clásica?</h3>
            <p className="text-gray-700 text-sm">
              Absolutamente SÍ. Viena es LA ciudad de la música. Empieza con un concierto corto de Mozart (25€, 60 min).
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300">
            <h3 className="font-semibold text-gray-900 mb-2">¿Cuánto cuesta comer bien?</h3>
            <p className="text-gray-700 text-sm">
              Desayuno café: 6-12€. Almuerzo tradicional: 15-25€. Cena restaurante: 25-45€. 
              Tip: Los "Beisl" (tabernas) son auténticos y más económicos.
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300">
            <h3 className="font-semibold text-gray-900 mb-2">¿3 días es suficiente?</h3>
            <p className="text-gray-700 text-sm">
              Perfecto para lo esencial sin prisa. Puedes ver los 3 palacios principales + varios conciertos + vida local.
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
                Vuelos a Viena
              </h3>
              <p className="text-gray-700 text-sm mb-4">
                Encuentra los mejores precios para volar a Viena desde España. Vuelos desde 90€ ida y vuelta.
              </p>
              <div className="space-y-2 text-xs text-gray-600 mb-6">
                <div className="flex items-center justify-center">
                  <CheckCircle className="h-3 w-3 text-emerald-500 mr-2" />
                  <span>Vuelos directos desde Madrid y Barcelona</span>
                </div>
                <div className="flex items-center justify-center">
                  <CheckCircle className="h-3 w-3 text-emerald-500 mr-2" />
                  <span>Austrian Airlines y Iberia</span>
                </div>
                <div className="flex items-center justify-center">
                  <CheckCircle className="h-3 w-3 text-emerald-500 mr-2" />
                  <span>Duración: 2h 15min aproximadamente</span>
                </div>
              </div>
              <a
                href="https://kiwi.tpk.lv/z2gZyZ3E"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gradient-to-r from-sky-500 to-blue-500 hover:from-sky-600 hover:to-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <span>✈️ Buscar vuelos a Viena</span>
                <ExternalLink className="h-4 w-4 ml-2" />
              </a>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="text-center">
              <h3 className="font-bold text-gray-900 text-lg mb-3">
                Alojamiento en Viena
              </h3>
              <p className="text-gray-700 text-sm mb-4">
                Hoteles desde hostels céntricos hasta palacios imperiales. Distrito I ideal para primera visita.
              </p>
              <div className="space-y-2 text-xs text-gray-600 mb-6">
                <div className="flex items-center justify-center">
                  <CheckCircle className="h-3 w-3 text-emerald-500 mr-2" />
                  <span>Distrito I - Centro histórico</span>
                </div>
                <div className="flex items-center justify-center">
                  <CheckCircle className="h-3 w-3 text-emerald-500 mr-2" />
                  <span>Cancelación gratuita</span>
                </div>
                <div className="flex items-center justify-center">
                  <CheckCircle className="h-3 w-3 text-emerald-500 mr-2" />
                  <span>Desde 35€/noche hasta hoteles 5*</span>
                </div>
              </div>
              <a
                href="https://www.booking.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <span>🏨 Buscar hoteles en Viena</span>
                <ExternalLink className="h-4 w-4 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Productos Esenciales para Viena</h2>

        <div className="space-y-4">
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex items-center justify-between hover:shadow-md transition-all duration-300">
            <div className="flex-1">
              <h4 className="font-semibold text-gray-900 text-sm mb-1">Mochila Cabina</h4>
              <p className="text-xs text-gray-600 mb-1">Ryanair, Vueling compatible</p>
              <span className="text-sm font-semibold text-emerald-600">Desde 35€</span>
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
              <h4 className="font-semibold text-gray-900 text-sm mb-1">Auriculares Bluetooth</h4>
              <p className="text-xs text-gray-600 mb-1">Para audio-guías + música</p>
              <span className="text-sm font-semibold text-emerald-600">Desde 25€</span>
            </div>
            <a
              href="https://www.amazon.es/Auriculares-Bluetooth-Inalámbricos-Resistente-Micrófono/dp/B087C8N7NX?tag=viajamejor-21"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-2 px-4 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center space-x-1 text-sm ml-4"
            >
              <span>🎧 VER OFERTA</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>

          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex items-center justify-between hover:shadow-md transition-all duration-300">
            <div className="flex-1">
              <h4 className="font-semibold text-gray-900 text-sm mb-1">Power Bank 10000mAh</h4>
              <p className="text-xs text-gray-600 mb-1">Fotos de palacios todo el día</p>
              <span className="text-sm font-semibold text-emerald-600">Desde 20€</span>
            </div>
            <a
              href="https://www.amazon.es/INIU-10000mAh-Cargador-Portatil-Teléfono/dp/B08VD632WJ?tag=viajamejor-21"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-2 px-4 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center space-x-1 text-sm ml-4"
            >
              <span>🔋 VER OFERTA</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 mb-8 shadow-md">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Enlaces Oficiales Útiles</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
            <h3 className="font-semibold text-gray-900 mb-3">Palacios Imperiales</h3>
            <div className="space-y-2 text-sm">
              <a href="https://www.schoenbrunn.at/en/" target="_blank" rel="noopener noreferrer"
                 className="block bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-medium px-3 py-2 rounded-lg shadow-sm hover:shadow-md transform hover:scale-105 transition-all duration-200">
                🏰 Schönbrunn Palace
              </a>
              <a href="https://www.sisimuseum-hofburg.at/en/" target="_blank" rel="noopener noreferrer"
                 className="block bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white font-medium px-3 py-2 rounded-lg shadow-sm hover:shadow-md transform hover:scale-105 transition-all duration-200">
                👑 Hofburg Palace
              </a>
              <a href="https://www.belvedere.at/en" target="_blank" rel="noopener noreferrer"
                 className="block bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white font-medium px-3 py-2 rounded-lg shadow-sm hover:shadow-md transform hover:scale-105 transition-all duration-200">
                🎨 Belvedere Palace
              </a>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
            <h3 className="font-semibold text-gray-900 mb-3">Música y Cultura</h3>
            <div className="space-y-2 text-sm">
              <a href="https://www.wiener-staatsoper.at/en/" target="_blank" rel="noopener noreferrer"
                 className="block bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-medium px-3 py-2 rounded-lg shadow-sm hover:shadow-md transform hover:scale-105 transition-all duration-200">
                🎭 Ópera de Viena
              </a>
              <a href="https://www.musikverein.at/en/" target="_blank" rel="noopener noreferrer"
                 className="block bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-medium px-3 py-2 rounded-lg shadow-sm hover:shadow-md transform hover:scale-105 transition-all duration-200">
                🎼 Musikverein
              </a>
              <a href="https://www.konzerthaus.at/en/" target="_blank" rel="noopener noreferrer"
                 className="block bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium px-3 py-2 rounded-lg shadow-sm hover:shadow-md transform hover:scale-105 transition-all duration-200">
                🎵 Konzerthaus
              </a>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
            <h3 className="font-semibold text-gray-900 mb-3">Información Práctica</h3>
            <div className="space-y-2 text-sm">
              <a href="https://www.wien.info/en/" target="_blank" rel="noopener noreferrer"
                 className="block bg-gradient-to-r from-blue-500 to-sky-500 hover:from-blue-600 hover:to-sky-600 text-white font-medium px-3 py-2 rounded-lg shadow-sm hover:shadow-md transform hover:scale-105 transition-all duration-200">
                ℹ️ Turismo Oficial Viena
              </a>
              <a href="https://www.viennapass.com/" target="_blank" rel="noopener noreferrer"
                 className="block bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium px-3 py-2 rounded-lg shadow-sm hover:shadow-md transform hover:scale-105 transition-all duration-200">
                🎟️ Vienna Pass
              </a>
              <a href="https://www.wienerlinien.at/eportal3/" target="_blank" rel="noopener noreferrer"
                 className="block bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-medium px-3 py-2 rounded-lg shadow-sm hover:shadow-md transform hover:scale-105 transition-all duration-200">
                🚇 Transporte Público
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 sm:p-8 mb-8 shadow-md hover:shadow-lg transition-all duration-300">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Bonus: Experiencias Exclusivas</h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
            <h3 className="font-semibold text-gray-900 mb-2">Para Melómanos:</h3>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Concierto Año Nuevo: Entradas sorteo</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Ensayos Filarmónica: 18 €</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Casa Mozart + Beethoven: Ruta musical</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
            <h3 className="font-semibold text-gray-900 mb-2">Para Sibaritas:</h3>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Degustación vinos Wachau: 45 €</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Cena concierto Schönbrunn: 89 €</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Tour gastronómico mercados: 35 €</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
            <h3 className="font-semibold text-gray-900 mb-2">Para Historiadores:</h3>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Cripta Imperial: Habsburgo eternos</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Biblioteca secreta: Manuscritos únicos</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Tour subterráneo: Viena oculta</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-6 sm:p-8 text-center text-white mb-8 shadow-lg hover:shadow-xl transition-all duration-300">
        <h3 className="text-xl sm:text-2xl font-bold mb-4">¿Listo para tu aventura imperial?</h3>
        <p className="text-base sm:text-lg mb-6 opacity-90">
          Prepara tu viaje a la capital musical de Europa con nuestras herramientas
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="https://kiwi.tpk.lv/z2gZyZ3E"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-white text-purple-500 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            ✈️ Buscar vuelos a Viena
            <ExternalLink className="h-4 w-4 ml-2" />
          </a>
          <a 
            href="https://www.booking.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-transparent border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-purple-500 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            🏨 Buscar hoteles imperiales
            <ExternalLink className="h-4 w-4 ml-2" />
          </a>
        </div>
      </div>

      <div className="text-center text-gray-600 text-sm mt-8">
        <p className="mb-2">
          Guía actualizada en Septiembre 2025 | Información verificada y precios actuales
        </p>
        <p>
          Que disfrutes de la magia musical de Viena!
        </p>
      </div>
    </article>
  );
};

export default ViennaGuideArticle;