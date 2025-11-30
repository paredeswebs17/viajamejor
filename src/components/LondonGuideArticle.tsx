import React from 'react';
import { ArrowLeft, Share2, Clock, MapPin } from 'lucide-react';

interface LondonGuideArticleProps {
  onBack: () => void;
}

const LondonGuideArticle: React.FC<LondonGuideArticleProps> = ({ onBack }) => {

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-24">
      <div className="mb-8">
        <button
          onClick={onBack}
          className="inline-flex items-center text-sky-600 hover:text-sky-700 hover:bg-sky-50 px-3 py-2 rounded-xl transition-all duration-200 font-medium border border-sky-200 hover:border-sky-300 mb-6 shadow-sm hover:shadow-md"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Volver a gu�as
        </button>

        <div className="mb-6">
          <span className="bg-gradient-to-r from-red-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-md">
            Gu�a Brit�nica
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
          Londres en 3 D�as: La Capital que Fusiona Historia Milenaria y Vanguardia Global
        </h1>

        <div className="flex flex-col gap-4 mb-6 items-start">
          <div className="flex flex-wrap items-center gap-2 text-gray-600 text-xs">
            <span className="flex items-center bg-gray-100 px-3 py-2 rounded-full shadow-sm">
              <Clock className="h-3 w-3 mr-1" />
              18 min
            </span>
            <span className="flex items-center bg-gray-100 px-3 py-2 rounded-full shadow-sm">
              <MapPin className="h-3 w-3 mr-1" />
              Londres
            </span>
          </div>

          <button
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: 'Londres en 3 D�as: Gu�a Completa con Big Ben, Palacios y Museos',
                  text: 'Descubre la capital brit�nica con nuestro itinerario optimizado',
                  url: window.location.href,
                })
                .catch((error) => console.log('Error sharing', error));
              } else {
                navigator.clipboard.writeText(window.location.href).then(() => {
                  alert('Enlace copiado al portapapeles');
                }).catch(() => {
                  window.open(`https://twitter.com/intent/tweet?text=Londres en 3 D�as: Gu�a Completa&url=${encodeURIComponent(window.location.href)}`, '_blank');
                });
              }
            }}
            className="inline-flex items-center text-gray-600 hover:text-red-600 bg-gray-100 hover:bg-red-50 px-3 py-2 rounded-full transition-all duration-200 text-xs border border-gray-200 hover:border-red-300 self-start shadow-sm hover:shadow-md"
          >
            <Share2 className="h-3 w-3 mr-1" />
            <span>Compartir</span>
          </button>
        </div>
      </div>

      <div className="mb-8">
        <img
          src="https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg"
          alt="Big Ben y el Palacio de Westminster iluminados al atardecer junto al r�o T�mesis"
          className="w-full h-48 sm:h-64 lg:h-80 object-cover rounded-2xl shadow-lg"
        />
      </div>

      {/* SECCI�N 1: �POR QU� VISITAR LONDRES? */}
      <div className="bg-gradient-to-r from-red-50 to-blue-50 border border-red-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">�Por qu� visitar Londres?</h2>

        <div className="space-y-4 text-gray-700">
          <p className="text-base leading-relaxed">
            Londres no es solo una ciudad: es un universo donde cada �poca de la historia convive en perfecta armon�a. Aqu�, el Londres medieval de la Torre de Londres dialoga con los rascacielos de cristal de la City; los pubs centenarios comparten calle con restaurantes de cocina fusi�n de 50 pa�ses; y las ceremonias reales del Palacio de Buckingham contrastan con el arte urbano de Shoreditch.
          </p>

          <p className="text-base leading-relaxed">
            Pero Londres es mucho m�s que el Big Ben y la Reina. Es perderte en los pasillos del Museo Brit�nico contemplando la Piedra de Rosetta. Es cruzar el Millennium Bridge mientras el sol se refleja en la c�pula de St Paul's. Es descubrir que un fish & chips de verdad no tiene nada que ver con lo que sirven en otros pa�ses. Es sentir el subid�n de adrenalina al ver la ciudad iluminarse desde el London Eye al anochecer. Es caminar por mercados como Borough Market rodeado de quesos artesanales, panes reci�n horneados y vendedores que te ofrecen probar de todo.
          </p>

          <p className="text-base leading-relaxed font-medium text-gray-900">
            Si buscas una ciudad donde la tradici�n brit�nica m�s aristocr�tica convive con la multiculturalidad m�s vibrante del planeta, donde cada barrio tiene personalidad propia y donde nunca sabes qu� te espera al doblar la esquina, Londres es tu destino perfecto.
          </p>
        </div>
      </div>

      {/* SECCI�N 2: LLEGADA Y CONEXIONES */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6"> Llegada y Conexiones desde los Aeropuertos</h2>

        <p className="text-gray-700 mb-6">Londres cuenta con 6 aeropuertos, pero los 4 principales son:</p>

        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">=� Desde Aeropuerto de Heathrow (LHR)</h3>

          <div className="mb-6">
            <h4 className="text-md font-bold text-gray-900 mb-4">=� Elizabeth Line - La Opci�n Moderna (Recomendada)</h4>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="space-y-6">
                <div>
                  <h5 className="font-semibold text-gray-900 mb-3">Informaci�n esencial:</h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <ul className="text-sm text-gray-700 space-y-2 list-none">
                      <li className="flex items-start"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></span><span><strong>Precio:</strong> �12.80 (zona 1)</span></li>
                      <li className="flex items-start"><span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></span><span><strong>Horario:</strong> 05:12-23:48 (cada 5-10 min)</span></li>
                    </ul>
                    <ul className="text-sm text-gray-700 space-y-2 list-none">
                      <li className="flex items-start"><span className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></span><span><strong>Duraci�n:</strong> 30-40 minutos directos</span></li>
                      <li className="flex items-start"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></span><span><strong>Destino:</strong> Paddington, Bond Street, Tottenham Court Road</span></li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h5 className="font-semibold text-gray-900 mb-3">Ventajas:</h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <ul className="text-sm text-gray-700 space-y-2 list-none">
                      <li className="flex items-start"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></span><span>Tren moderno inaugurado 2022</span></li>
                      <li className="flex items-start"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></span><span>Sin cambios al centro</span></li>
                    </ul>
                    <ul className="text-sm text-gray-700 space-y-2 list-none">
                      <li className="flex items-start"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></span><span>Asientos c�modos, WiFi</span></li>
                      <li className="flex items-start"><span className="w-2 h-2 bg-emerald-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></span><span>Maletas sin restricci�n</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-4">
            <h4 className="font-bold text-gray-900 mb-3">=� Piccadilly Line (Metro) - La M�s Econ�mica</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700">
              <div>
                <p><strong>Precio:</strong> �5.60 con Oyster/Contactless</p>
                <p><strong>Duraci�n:</strong> 50-60 minutos</p>
              </div>
              <div>
                <p><strong>Destino:</strong> Covent Garden, Leicester Square, Piccadilly Circus</p>
                <p><strong>Ventajas:</strong> Econ�mico y directo</p>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
            <h4 className="font-bold text-gray-900 mb-3">=� Traslado Privado - M�ximo Confort</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-700 mb-1"><strong>Precio:</strong> Desde �65-85 (hasta 4 personas)</p>
                <p className="text-sm text-gray-700 mb-1"><strong>Duraci�n:</strong> 45-90 min (seg�n tr�fico)</p>
              </div>
              <div>
                <p className="text-sm text-gray-700 mb-1"><strong>Ideal para:</strong> Familias, grupos, mucho equipaje</p>
                <p className="text-sm text-gray-700 mb-1"><strong>Ventajas:</strong> Puerta a puerta, sin esperas</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">=� Desde Aeropuerto de Gatwick (LGW)</h3>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-4 mb-4">
            <h4 className="font-bold text-gray-900 mb-3">=� Gatwick Express - R�pido al Centro</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700">
              <div>
                <p><strong>Precio:</strong> �19.90 (online adelantado)</p>
                <p><strong>Duraci�n:</strong> 30 minutos sin paradas</p>
              </div>
              <div>
                <p><strong>Destino:</strong> London Victoria Station</p>
                <p><strong>Frecuencia:</strong> Cada 15 minutos</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">=� Desde Aeropuerto de Stansted (STN)</h3>

          <div className="bg-gradient-to-r from-blue-50 to-sky-50 border border-blue-200 rounded-xl p-4">
            <h4 className="font-bold text-gray-900 mb-3">=� Stansted Express</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700">
              <div>
                <p><strong>Precio:</strong> �19-23 (online adelantado)</p>
                <p><strong>Duraci�n:</strong> 47 minutos</p>
              </div>
              <div>
                <p><strong>Destino:</strong> Liverpool Street Station</p>
                <p><strong>Horario:</strong> 05:30-00:30</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center text-gray-600 text-sm mt-8">
        <p className="mb-2">
          Gu�a actualizada Noviembre 2025 | Informaci�n verificada y precios actuales
        </p>
        <p>�Que disfrutes Londres al m�ximo!</p>
      </div>
    </article>
  );
};

export default LondonGuideArticle;
