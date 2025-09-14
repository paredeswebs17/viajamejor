import React from ‘react’;
import { ArrowLeft, Share2, Clock, MapPin, CheckCircle, ExternalLink } from ‘lucide-react’;

interface PragueGuideArticleProps {
onBack: () => void;
}

const PragueGuideArticle: React.FC<PragueGuideArticleProps> = ({ onBack }) => {
return (
<article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-24">
<div className="mb-8">
<button 
onClick={onBack}
className="inline-flex items-center text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 px-3 py-2 rounded-xl transition-all duration-200 font-medium border border-emerald-200 hover:border-emerald-300 mb-6 shadow-sm hover:shadow-md"
>
<ArrowLeft className="h-4 w-4 mr-2" />
Volver a guías
</button>

```
    <div className="mb-6">
      <span className="bg-gradient-to-r from-emerald-500 to-green-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-md">
        Guía Esencial
      </span>
    </div>

    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
      Praga en 3 Días: La Ciudad de los Cien Campanarios
    </h1>

    <div className="flex flex-col gap-4 mb-6 items-start">
      <div className="flex flex-wrap items-center gap-2 text-gray-600 text-xs">
        <span className="flex items-center bg-gray-100 px-3 py-2 rounded-full shadow-sm">
          <Clock className="h-3 w-3 mr-1" />
          12 min
        </span>
        <span className="flex items-center bg-gray-100 px-3 py-2 rounded-full shadow-sm">
          <MapPin className="h-3 w-3 mr-1" />
          Praga
        </span>
      </div>
      
      <button
        onClick={() => {
          if (navigator.share) {
            navigator.share({
              title: 'Praga en 3 Días: Guía Completa de la Ciudad Dorada',
              text: 'Descubre Praga con nuestro itinerario optimizado para 3 días perfectos',
              url: window.location.href,
            })
            .catch((error) => console.log('Error sharing', error));
          } else {
            navigator.clipboard.writeText(window.location.href).then(() => {
              alert('Enlace copiado al portapapeles');
            }).catch(() => {
              window.open(`https://twitter.com/intent/tweet?text=Praga en 3 Días: Guía Completa&url=${encodeURIComponent(window.location.href)}`, '_blank');
            });
          }
        }}
        className="inline-flex items-center text-gray-600 hover:text-emerald-600 bg-gray-100 hover:bg-emerald-50 px-3 py-2 rounded-full transition-all duration-200 text-xs border border-gray-200 hover:border-emerald-300 self-start shadow-sm hover:shadow-md"
      >
        <Share2 className="h-3 w-3 mr-1" />
        <span>Compartir</span>
      </button>
    </div>
  </div>

  <div className="mb-8">
    <img
      src="https://images.unsplash.com/photo-1519677100203-a0e668c92439?auto=format&fit=crop&w=1200&q=80"
      alt="Vista panorámica del Puente de Carlos y el Castillo de Praga al amanecer"
      className="w-full h-48 sm:h-64 lg:h-80 object-cover rounded-2xl shadow-lg"
    />
  </div>

  <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl p-6 sm:p-8 mb-8 shadow-md">
    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Planning Estratégico</h2>
    <div className="overflow-x-auto">
      <table className="w-full border-collapse bg-white rounded-xl shadow-sm">
        <thead>
          <tr className="bg-gradient-to-r from-emerald-500 to-green-500 text-white">
            <th className="border border-gray-300 px-4 py-3 text-left font-semibold">JORNADA</th>
            <th className="border border-gray-300 px-4 py-3 text-left font-semibold">EXPERIENCIAS DEL DÍA</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-3 font-bold">DÍA 1</td>
            <td className="border border-gray-300 px-4 py-3">Plaza de la Ciudad Vieja + Reloj Astronómico + Barrio Judío + Clementinum + Casa Danzante + Teatro Negro</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="border border-gray-300 px-4 py-3 font-bold">DÍA 2</td>
            <td className="border border-gray-300 px-4 py-3">Castillo de Praga + Callejón del Oro + Puente de Carlos + Muro de John Lennon + Crucero por el Moldava</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-3 font-bold">DÍA 3</td>
            <td className="border border-gray-300 px-4 py-3">Excursión a Terezín o Karlovy Vary + Torre Petřín + Exploración libre</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 flex items-center">
      <span className="text-2xl mr-3">🚗</span>
      Llegada y Conexiones Inteligentes
    </h2>

    <div className="mb-8">
      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
        <span className="text-xl mr-2">✈️</span>
        Desde Aeropuerto Václav Havel
      </h3>
      
      <div className="mb-6">
        <h4 className="text-md font-bold text-gray-900 mb-4 flex items-center">
          <span className="text-lg mr-2">🚌</span>
          Airport Express - La Conexión Más Directa
        </h4>
        
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold text-gray-900 mb-3">Información esencial:</h5>
              <ul className="text-sm text-gray-700 space-y-2 list-none">
                <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span><strong>Precio:</strong> 100 CZK (≈ 4€) por trayecto</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span><strong>Horario:</strong> 5:30-22:30h, cada 30 min</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span><strong>Duración:</strong> 40 minutos directos</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span><strong>Destino:</strong> Estación Central (metro línea C)</li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold text-gray-900 mb-3">Ventajas:</h5>
              <ul className="text-sm text-gray-700 space-y-2 list-none">
                <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Sin paradas intermedias</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Espacio para equipaje</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>Pago con tarjeta al conductor</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>Sale de ambas terminales</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h4 className="text-md font-bold text-gray-900 mb-4 flex items-center">
          <span className="text-lg mr-2">🚇</span>
          Transporte Público Económico
        </h4>
        
        <div className="bg-gradient-to-r from-blue-50 to-sky-50 border border-blue-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <h5 className="font-semibold text-gray-900 mb-2">Bus 119 + Metro:</h5>
              <ul className="text-sm text-gray-700 space-y-1 list-none">
                <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Precio: 40 CZK (≈ 1,60€)</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Conecta con línea A (verde)</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Parada: Nádraží Veleslavín</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-gray-900 mb-2">Bus 100 + Metro:</h5>
              <ul className="text-sm text-gray-700 space-y-1 list-none">
                <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Precio: 40 CZK (≈ 1,60€)</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Conecta con línea B (amarilla)</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Parada: Zličín</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="mb-8">
      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
        <span className="text-xl mr-2">🚊</span>
        Moverse por Praga
      </h3>
      
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
        <div className="mb-6">
          <h4 className="font-semibold text-gray-900 mb-3">Sistema integrado:</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <ul className="text-sm text-gray-700 space-y-2 list-none">
                <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span><strong>30 min:</strong> 30 CZK (≈ 1,20€)</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span><strong>90 min:</strong> 40 CZK (≈ 1,60€)</li>
              </ul>
            </div>
            <div>
              <ul className="text-sm text-gray-700 space-y-2 list-none">
                <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span><strong>24h:</strong> 120 CZK (≈ 4,80€)</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span><strong>72h:</strong> 330 CZK (≈ 13,20€)</li>
              </ul>
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-3">Un billete vale para metro, tranvía, autobús y funicular</p>
        </div>
      </div>
    </div>
  </div>

  {/* Separador decorativo */}
  <div className="flex items-center justify-center mb-8">
    <div className="flex space-x-2">
      <div className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-green-400 rounded-full"></div>
      <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
      <div className="w-3 h-3 bg-gradient-to-r from-orange-400 to-red-400 rounded-full"></div>
    </div>
  </div>

  <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 flex items-center">
      <span className="bg-gradient-to-br from-emerald-500 to-green-500 text-white w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-bold mr-4 shadow-lg">1</span>
      DÍA 1: Corazón Medieval y Herencia Judía
    </h2>

    <div className="mb-8">
      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
        <div className="w-1 h-6 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full mr-3"></div>
        Amanecer en el Epicentro (9:00h)
      </h3>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
        <h4 className="text-lg font-bold text-gray-900 mb-3">Plaza de la Ciudad Vieja - El Salón de Europa</h4>
        <p className="text-gray-700 mb-4">
          Comienza tu aventura en el corazón histórico de Praga, donde cada edificio cuenta siglos de historia.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">Lo que verás:</h5>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Iglesia de Týn con sus torres góticas</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Iglesia de San Nicolás barroca</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Palacio Kinský rococó</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>Casa de la Campana de Piedra</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">El famoso Reloj Astronómico:</h5>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Espectáculo cada hora en punto</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Los 12 Apóstoles desfilan</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>Construido en 1410</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>Mejor momento: 11:00h-12:00h</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-orange-100 border border-orange-300 rounded-xl p-4 mt-4">
          <p className="text-orange-800 text-sm">
            💡 Llega a las 9:00h para disfrutar de la plaza casi vacía y las mejores fotos sin multitudes.
          </p>
        </div>
      </div>
    </div>

    {/* Resto del contenido continuaría aquí... */}
    <div className="text-center mt-8 p-6 bg-gray-50 rounded-xl">
      <p className="text-gray-600">
        [Contenido adicional del itinerario continúa...]
      </p>
    </div>
  </div>

  <div className="text-center text-gray-600 text-sm mt-8">
    <p className="mb-2">
      Guía actualizada en Septiembre 2025 | Información verificada y precios actuales
    </p>
    <p>
      ¡Que disfrutes Praga al máximo!
    </p>
  </div>
</article>
```

);
};

export default PragueGuideArticle;