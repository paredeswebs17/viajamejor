import React from 'react';
import { ArrowLeft, Share2, Clock, MapPin, CheckCircle, ExternalLink } from 'lucide-react';

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

<div className="mb-8">
  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
    <div className="w-1 h-6 bg-gradient-to-b from-orange-400 to-red-400 rounded-full mr-3"></div>
    Torre del Ayuntamiento - Mirador Privilegiado (10:30h)
  </h3>
  <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
    <h4 className="text-lg font-bold text-gray-900 mb-3">Ascenso a las Mejores Vistas del Centro</h4>
    <p className="text-gray-700 mb-4">
      Sube 70 metros para contemplar la Ciudad Dorada desde las alturas.
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
      <div>
        <h5 className="font-semibold text-gray-900 mb-2">Información práctica:</h5>
        <ul className="text-sm text-gray-700 space-y-1 list-none">
          <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Precio: 300 CZK (≈ 12€)</li>
          <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Reducida: 200 CZK (≈ 8€)</li>
          <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Horario: 9:00-22:00h</li>
          <li className="flex items-center"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>Ascensor disponible</li>
        </ul>
      </div>
      <div>
        <h5 className="font-semibold text-gray-900 mb-2">Vista panorámica 360°:</h5>
        <ul className="text-sm text-gray-700 space-y-1 list-none">
          <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Castillo de Praga completo</li>
          <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Puente de Carlos serpenteante</li>
          <li className="flex items-center"><span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>Tejados rojos típicos</li>
          <li className="flex items-center"><span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>Torres de la ciudad</li>
        </ul>
      </div>
    </div>
  </div>
</div>

<div className="mb-8">
  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
    <div className="w-1 h-6 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full mr-3"></div>
    Barrio Judío - Memoria Viva (11:30h)
  </h3>
  <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
    <h4 className="text-lg font-bold text-gray-900 mb-3">Josefov - El Barrio Judío Mejor Conservado de Europa</h4>
    <p className="text-gray-700 mb-4">
      Un viaje conmovedor por mil años de historia judía en el corazón de Praga.
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
      <div>
        <h5 className="font-semibold text-gray-900 mb-2">Entrada conjunta incluye:</h5>
        <ul className="text-sm text-gray-700 space-y-1 list-none">
          <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Precio: 500 CZK (≈ 20€)</li>
          <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Reducida: 370 CZK (≈ 15€)</li>
          <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>6 Sinagogas históricas</li>
          <li className="flex items-center"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>Antiguo Cementerio Judío</li>
        </ul>
      </div>
      <div>
        <h5 className="font-semibold text-gray-900 mb-2">Sinagogas imprescindibles:</h5>
        <ul className="text-sm text-gray-700 space-y-1 list-none">
          <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Sinagoga Española: la más bella</li>
          <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Sinagoga Vieja-Nueva: la más antigua</li>
          <li className="flex items-center"><span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>Sinagoga Pinkas: memorial Holocausto</li>
          <li className="flex items-center"><span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>Cementerio: 12.000 lápidas</li>
        </ul>
      </div>
    </div>
    
    <div className="bg-red-100 border border-red-300 rounded-xl p-4 mt-4">
      <p className="text-red-800 text-sm">
        ⚠️ IMPORTANTE: Sinagogas cerradas los sábados por Sabbat. Planifica tu visita entre domingo y viernes.
      </p>
    </div>
  </div>
</div>

<div className="mb-8">
  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
    <div className="w-1 h-6 bg-gradient-to-b from-green-400 to-emerald-400 rounded-full mr-3"></div>
    Pausa Gastronómica - Auténtica Bohemia (13:30h)
  </h3>
  <div className="bg-green-50 border border-green-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
    <h4 className="text-lg font-bold text-gray-900 mb-3">Sabores tradicionales checos:</h4>
    <div className="space-y-3">
      <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
        <h5 className="font-semibold text-gray-900">U Fleků</h5>
        <p className="text-sm text-gray-700 mb-1">Cervecería histórica desde 1499 + Goulash (8-15 €)</p>
        <p className="text-xs text-emerald-600 mt-1">Cerveza casera + platos típicos + ambiente medieval</p>
      </div>
      <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
        <h5 className="font-semibold text-gray-900">Lokál</h5>
        <p className="text-sm text-gray-700 mb-1">Cocina checa moderna en ambiente tradicional (10-18 €)</p>
        <p className="text-xs text-blue-600 mt-1">Famoso por sus Svíčková na smetaně</p>
      </div>
      <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
        <h5 className="font-semibold text-gray-900">Café Savoy</h5>
        <p className="text-sm text-gray-700 mb-1">Elegancia vienesa desde 1893 (12-25 €)</p>
        <p className="text-xs text-purple-600 mt-1">Techos históricos + repostería imperial</p>
      </div>
    </div>
  </div>
</div>

<div className="mb-8">
  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
    <div className="w-1 h-6 bg-gradient-to-b from-yellow-400 to-orange-400 rounded-full mr-3"></div>
    Biblioteca Celestial (15:30h)
  </h3>
  <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
    <h4 className="text-lg font-bold text-gray-900 mb-3">Clementinum - La Biblioteca Más Bella del Mundo</h4>
    <p className="text-gray-700 mb-4">
      Descubre la joya barroca que ha permanecido intacta desde el siglo XVIII.
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
      <div>
        <h5 className="font-semibold text-gray-900 mb-2">La experiencia incluye:</h5>
        <ul className="text-sm text-gray-700 space-y-1 list-none">
          <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Biblioteca Barroca espectacular</li>
          <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Sala de los Meridianos</li>
          <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Torre Astronómica (170 escalones)</li>
          <li className="flex items-center"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>Vistas panorámicas únicas</li>
        </ul>
      </div>
      <div>
        <h5 className="font-semibold text-gray-900 mb-2">Información práctica:</h5>
        <ul className="text-sm text-gray-700 space-y-1 list-none">
          <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Solo visitas guiadas</li>
          <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Idiomas: inglés y checo</li>
          <li className="flex items-center"><span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>Duración: 50 minutos</li>
          <li className="flex items-center"><span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>Compra entrada in situ</li>
        </ul>
      </div>
    </div>
  </div>
</div>

<div className="mb-8">
  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
    <div className="w-1 h-6 bg-gradient-to-b from-pink-400 to-red-400 rounded-full mr-3"></div>
    Arquitectura Danzante (17:30h)
  </h3>
  <div className="bg-pink-50 border border-pink-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
    <h4 className="text-lg font-bold text-gray-900 mb-3">Casa Danzante - Fred y Ginger en Piedra</h4>
    <p className="text-gray-700 mb-4">
      El edificio más controvertido y fotogénico de Praga moderna.
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div>
        <h5 className="font-semibold text-gray-900 mb-2">La historia:</h5>
        <ul className="text-sm text-gray-700 space-y-1 list-none">
          <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Diseñada por Vlado Milunić</li>
          <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Inaugurada en 1996</li>
          <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Inspirada en Fred Astaire y Ginger Rogers</li>
        </ul>
      </div>
      <div>
        <h5 className="font-semibold text-gray-900 mb-2">Visita opcional:</h5>
        <ul className="text-sm text-gray-700 space-y-1 list-none">
          <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Mirador en azotea con bar</li>
          <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Vista exterior suficiente</li>
          <li className="flex items-center"><span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>Perfecto para fotos al atardecer</li>
        </ul>
      </div>
    </div>
  </div>
</div>

<div className="mb-8">
  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
    <div className="w-1 h-6 bg-gradient-to-b from-indigo-400 to-purple-400 rounded-full mr-3"></div>
    Magia Nocturna (20:00h)
  </h3>
  <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
    <h4 className="text-lg font-bold text-gray-900 mb-3">Teatro Negro - Espectáculo Únicamente Checo</h4>
    <p className="text-gray-700 mb-4">
      Termina el día con una experiencia artística que nació en Praga.
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div>
        <h5 className="font-semibold text-gray-900 mb-2">¿Qué es el Teatro Negro?</h5>
        <ul className="text-sm text-gray-700 space-y-1 list-none">
          <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Teatro mudo con efectos ópticos</li>
          <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Objetos "flotan" en el aire</li>
          <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Perfecto para todas las edades</li>
        </ul>
      </div>
      <div>
        <h5 className="font-semibold text-gray-900 mb-2">Información práctica:</h5>
        <ul className="text-sm text-gray-700 space-y-1 list-none">
          <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Duración: 60-90 minutos</li>
          <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Precios: 15-25€ según teatro</li>
          <li className="flex items-center"><span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>Reserva recomendada</li>
        </ul>
      </div>
    </div>
  </div>
</div>

  </div>

{/* Separador decorativo */}

  <div className="flex items-center justify-center mb-8">
    <div className="flex space-x-2">
      <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
      <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-emerald-400 rounded-full"></div>
      <div className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"></div>
    </div>
  </div>

  <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 flex items-center">
      <span className="bg-gradient-to-br from-blue-500 to-purple-500 text-white w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-bold mr-4 shadow-lg">2</span>
      DÍA 2: Castillo Imperial y Romance Bohemio
    </h2>
<div className="mb-8">
  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
    <div className="w-1 h-6 bg-gradient-to-b from-red-400 to-pink-400 rounded-full mr-3"></div>
    Ascensión Real (9:00h)
  </h3>
  <div className="bg-red-50 border border-red-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
    <h4 className="text-lg font-bold text-gray-900 mb-3">Castillo de Praga - El Castillo Más Grande del Mundo</h4>
    <p className="text-gray-700 mb-4">
      Comienza temprano en el complejo real que definió la historia de Bohemia.
    </p>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div>
        <h5 className="font-semibold text-gray-900 mb-3">Entrada e información:</h5>
        <ul className="text-sm text-gray-700 space-y-2 list-none">
          <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span><strong>Precio:</strong> 450 CZK (≈ 18€) circuito completo</li>
          <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span><strong>Acceso:</strong> Tranvía 22 hasta Pražský Hrad</li>
          <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span><strong>Duración:</strong> 3-4 horas completo</li>
          <li className="flex items-center"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span><strong>Mejor momento:</strong> 9:00h apertura</li>
        </ul>
      </div>
      
      <div>
        <h5 className="font-semibold text-gray-900 mb-3">El circuito incluye:</h5>
        <ul className="text-sm text-gray-700 space-y-2 list-none">
          <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Catedral de San Vito (joya gótica)</li>
          <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Antiguo Palacio Real</li>
          <li className="flex items-center"><span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>Basílica de San Jorge</li>
          <li className="flex items-center"><span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>Callejón del Oro</li>
        </ul>
      </div>
    </div>
    
    <div className="bg-orange-100 border border-orange-300 rounded-xl p-4 mt-4">
      <p className="text-orange-800 text-sm">
        💡 Estrategia: Compra entrada online para evitar colas. Empieza por la Catedral cuando esté menos concurrida.
      </p>
    </div>
  </div>
</div>

<div className="mb-8">
  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
    <div className="w-1 h-6 bg-gradient-to-b from-yellow-400 to-orange-400 rounded-full mr-3"></div>
    Callejón Dorado (12:00h)
  </h3>
  <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
    <h4 className="text-lg font-bold text-gray-900 mb-3">Callejón del Oro - Donde Vivió Kafka</h4>
    <p className="text-gray-700 mb-4">
      La calle más famosa del castillo, hogar de orfebres y después de artistas.
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div>
        <h5 className="font-semibold text-gray-900 mb-2">Historia fascinante:</h5>
        <ul className="text-sm text-gray-700 space-y-1 list-none">
          <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Casas del siglo XVI</li>
          <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Orfebres del emperador</li>
          <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Franz Kafka vivió en el nº 22</li>
        </ul>
      </div>
      <div>
        <h5 className="font-semibold text-gray-900 mb-2">Experiencia actual:</h5>
        <ul className="text-sm text-gray-700 space-y-1 list-none">
          <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Casas-museo reconstruidas</li>
          <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Talleres de artesanos</li>
          <li className="flex items-center"><span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>Tiendas de souvenirs únicos</li>
        </ul>
      </div>
    </div>
  </div>
</div>

<div className="mb-8">
  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
    <div className="w-1 h-6 bg-gradient-to-b from-green-400 to-emerald-400 rounded-full mr-3"></div>
    Descenso al Romance (14:00h)
  </h3>
  <div className="bg-green-50 border border-green-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
    <h4 className="text-lg font-bold text-gray-900 mb-3">Puente de Carlos - El Corazón de Praga</h4>
    <p className="text-gray-700 mb-4">
      Baja del castillo hacia el puente más famoso de Europa Central.
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
      <div>
        <h5 className="font-semibold text-gray-900 mb-2">El puente legendario:</h5>
        <ul className="text-sm text-gray-700 space-y-1 list-none">
          <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Construido en 1357 por Carlos IV</li>
          <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>516 metros de longitud</li>
          <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>30 estatuas barrocas</li>
          <li className="flex items-center"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>Solo peatonal desde 1950</li>
        </ul>
      </div>
      <div>
        <h5 className="font-semibold text-gray-900 mb-2">La magia del momento:</h5>
        <ul className="text-sm text-gray-700 space-y-1 list-none">
          <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Toca la estatua de San Juan Nepomuceno</li>
          <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Artistas callejeros únicos</li>
          <li className="flex items-center"><span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>Vistas al castillo espectaculares</li>
          <li className="flex items-center"><span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>Mejor luz: media tarde</li>
        </ul>
      </div>
    </div>
    
    <div className="bg-blue-100 border border-blue-300 rounded-xl p-4 mt-4">
      <p className="text-blue-800 text-sm">
        📸 Foto perfecta: Desde el lado de Malá Strana hacia el castillo, especialmente entre 15:00-16:00h.
      </p>
    </div>
  </div>
</div>

<div className="mb-8">
  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
    <div className="w-1 h-6 bg-gradient-to-b from-pink-400 to-purple-400 rounded-full mr-3"></div>
    Rincones Bohemios (16:00h)
  </h3>
  <div className="bg-pink-50 border border-pink-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
    <h4 className="text-lg font-bold text-gray-900 mb-3">Muro de John Lennon - Libertad en Color</h4>
    <p className="text-gray-700 mb-4">
      Un símbolo de paz y libertad que resistió al comunismo.
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div>
        <h5 className="font-semibold text-gray-900 mb-2">La historia:</h5>
        <ul className="text-sm text-gray-700 space-y-1 list-none">
          <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Símbolo de resistencia pacífica</li>
          <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Grafitis desde los años 80</li>
          <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Renovado constantemente</li>
        </ul>
      </div>
      <div>
        <h5 className="font-semibold text-gray-900 mb-2">Cerca del muro:</h5>
        <ul className="text-sm text-gray-700 space-y-1 list-none">
          <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Isla de Kampa (parque romántico)</li>
          <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Calle más estrecha de Praga</li>
          <li className="flex items-center"><span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>Palacio Wallenstein</li>
        </ul>
      </div>
    </div>
  </div>
</div>

<div className="mb-8">
  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
    <div className="w-1 h-6 bg-gradient-to-b from-blue-400 to-indigo-400 rounded-full mr-3"></div>
    Final Dorado (18:00h)
  </h3>
  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
    <h4 className="text-lg font-bold text-gray-900 mb-3">Crucero por el Moldava - EXPERIENCIA CULMINANTE</h4>
    <p className="text-gray-700 mb-4">
      Contempla Praga desde el río mientras el sol se pone sobre la Ciudad Dorada.
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
      <div>
        <h5 className="font-semibold text-gray-900 mb-2">Detalles del crucero:</h5>
        <ul className="text-sm text-gray-700 space-y-1 list-none">
          <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Duración: 60-90 minutos</li>
          <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Precio: 15-25€ según empresa</li>
          <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Incluye: audioguía en español</li>
          <li className="flex items-center"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>Bebida opcional a bordo</li>
        </ul>
      </div>
      <div>
        <h5 className="font-semibold text-gray-900 mb-2">Vistas únicas desde el agua:</h5>
        <ul className="text-sm text-gray-700 space-y-1 list-none">
          <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Castillo iluminado</li>
          <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Puente de Carlos dorado</li>
          <li className="flex items-center"><span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>Todos los puentes históricos</li>
          <li className="flex items-center"><span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>Timing perfecto: atardecer</li>
        </ul>
      </div>
    </div>
    
    <div className="bg-orange-100 border border-orange-300 rounded-xl p-4 mt-4">
      <p className="text-orange-800 text-sm">
        🌅 Reserva para las 18:00h en verano o 17:00h en invierno para capturar el atardecer perfecto sobre Praga.
      </p>
    </div>
  </div>
</div>

  </div>

{/* Separador decorativo */}

  <div className="flex items-center justify-center mb-8">
    <div className="flex space-x-2">
      <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full"></div>
      <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
      <div className="w-3 h-3 bg-gradient-to-r from-orange-400 to-red-400 rounded-full"></div>
    </div>
  </div>

  <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 flex items-center">
      <span className="bg-gradient-to-br from-orange-500 to-red-500 text-white w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-bold mr-4 shadow-lg">3</span>
      DÍA 3: Historia Profunda y Vistas Panorámicas
    </h2>
<div className="mb-8">
  <h3 className="text-lg font-bold text-gray-900 mb-4">Elige tu Aventura del Día Completo</h3>
  
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
    <div className="bg-gradient-to-r from-gray-50 to-blue-50 border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
      <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
        <span className="text-xl mr-2">🕯️</span>
        Opción A: Terezín - Memoria Histórica
      </h4>
      <p className="text-gray-700 mb-4">
        Una excursión conmovedora al campo de concentración que no debemos olvidar.
      </p>
      <div className="space-y-2 mb-4">
        <div className="flex items-center">
          <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
          <span className="text-sm text-gray-700"><strong>Duración:</strong> Día completo (8h)</span>
        </div>
        <div className="flex items-center">
          <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
          <span className="text-sm text-gray-700"><strong>Incluye:</strong> Transporte + guía en español</span>
        </div>
        <div className="flex items-center">
          <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
          <span className="text-sm text-gray-700"><strong>Precio:</strong> 45-60€ por persona</span>
        </div>
        <div className="flex items-center">
          <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
          <span className="text-sm text-gray-700"><strong>Recomendado:</strong> Preparación emocional</span>
        </div>
      </div>
      <p className="text-sm text-gray-600 italic">
        Una experiencia educativa profunda sobre la historia del Holocausto.
      </p>
    </div>

    <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
      <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
        <span className="text-xl mr-2">💎</span>
        Opción B: Karlovy Vary - Ciudad Balneario
      </h4>
      <p className="text-gray-700 mb-4">
        Descubre la elegante ciudad termal donde la realeza europea tomaba las aguas.
      </p>
      <div className="space-y-2 mb-4">
        <div className="flex items-center">
          <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
          <span className="text-sm text-gray-700"><strong>Duración:</strong> Día completo (8h)</span>
        </div>
        <div className="flex items-center">
          <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
          <span className="text-sm text-gray-700"><strong>Incluye:</strong> Transporte + tiempo libre</span>
        </div>
        <div className="flex items-center">
          <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
          <span className="text-sm text-gray-700"><strong>Precio:</strong> 35-50€ por persona</span>
        </div>
        <div className="flex items-center">
          <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
          <span className="text-sm text-gray-700"><strong>Experiencia:</strong> Aguas termales + arquitectura</span>
        </div>
      </div>
      <p className="text-sm text-gray-600 italic">
        Perfecta para relajarse y conocer la Bohemia termal histórica.
      </p>
    </div>
  </div>
</div>

<div className="mb-8">
  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
    <div className="w-1 h-6 bg-gradient-to-b from-green-400 to-emerald-400 rounded-full mr-3"></div>
    Alternativa: Torre Petřín + Ciudad a tu Ritmo
  </h3>
  <div className="bg-green-50 border border-green-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
    <h4 className="text-lg font-bold text-gray-900 mb-3">Si prefieres quedarte en Praga</h4>
    <p className="text-gray-700 mb-4">
      Explora rincones menos conocidos y disfruta de las mejores vistas de la ciudad.
    </p>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
      <div>
        <h5 className="font-semibold text-gray-900 mb-2">Torre Petřín - La "Torre Eiffel" de Praga:</h5>
        <ul className="text-sm text-gray-700 space-y-1 list-none">
          <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Precio: 220 CZK (≈ 9€)</li>
          <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Funicular incluido en pase de 24h</li>
          <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>60 metros de altura</li>
          <li className="flex items-center"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>Vistas 360° espectaculares</li>
        </ul>
      </div>
      <div>
        <h5 className="font-semibold text-gray-900 mb-2">Otros rincones especiales:</h5>
        <ul className="text-sm text-gray-700 space-y-1 list-none">
          <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Jardines de Petřín (gratis)</li>
          <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Museo de Kafka</li>
          <li className="flex items-center"><span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>Plaza Wenceslao</li>
          <li className="flex items-center"><span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>Mercados locales</li>
        </ul>
      </div>
    </div>
    
    <div className="bg-blue-100 border border-blue-300 rounded-xl p-4 mt-4">
      <p className="text-blue-800 text-sm">
        🎯 Perfecto si: Quieres un día más relajado, explorando a tu ritmo y disfrutando de la ciudad sin prisa.
      </p>
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

  <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 mb-8 shadow-md">
    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 text-center">Presupuestos Reales para Praga</h2>
<div className="mb-6">
  <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
    <h3 className="text-lg font-bold text-emerald-800 mb-4">ESTILO MOCHILERO - 70 €/día</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div>
        <h4 className="font-semibold text-gray-900 mb-2">Alojamiento (2 noches):</h4>
        <ul className="text-sm text-gray-700 space-y-1 list-none">
          <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Hostales centro: 25-35€/noche</li>
          <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Ubicación: Distrito 1 o cerca del metro</li>
          <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Dormitorios compartidos con baño</li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold text-gray-900 mb-2">Alimentación (3 días):</h4>
        <ul className="text-sm text-gray-700 space-y-1 list-none">
          <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Desayuno: Hostal incluido o panadería (2-4 €)</li>
          <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Almuerzo: Comedores locales (4-8 €)</li>
          <li className="flex items-center"><span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>Cena: Supermercado + cerveza (6-10 €)</li>
        </ul>
      </div>
    </div>
    <div className="bg-white rounded-xl p-4 mt-4 shadow-sm">
      <p className="text-emerald-800 font-semibold text-center">
        Total 3 días: 210€ por persona
      </p>
    </div>
  </div>
</div>

<div className="mb-6">
  <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
    <h3 className="text-lg font-bold text-blue-800 mb-4">ESTILO CONFORT - 110 €/día</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div>
        <h4 className="font-semibold text-gray-900 mb-2">Alojamiento (2 noches):</h4>
        <ul className="text-sm text-gray-700 space-y-1 list-none">
          <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Hoteles 3*: 60-80€/noche</li>
          <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Ubicación: Ciudad Vieja o Nueva</li>
          <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Desayuno incluido + habitación privada</li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold text-gray-900 mb-2">Alimentación (3 días):</h4>
        <ul className="text-sm text-gray-700 space-y-1 list-none">
          <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Desayuno: Hotel incluido</li>
          <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Almuerzo: Restaurantes tradicionales (10-15 €)</li>
          <li className="flex items-center"><span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>Cena: Experiencias gastronómicas (15-25 €)</li>
        </ul>
      </div>
    </div>
    <div className="bg-white rounded-xl p-4 mt-4 shadow-sm">
      <p className="text-blue-800 font-semibold text-center">
        Total 3 días: 330€ por persona
      </p>
    </div>
  </div>
</div>

<div className="mb-6">
  <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
    <h3 className="text-lg font-bold text-purple-800 mb-4">ESTILO PREMIUM - 180 €/día</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div>
        <h4 className="font-semibold text-gray-900 mb-2">Alojamiento (2 noches):</h4>
        <ul className="text-sm text-gray-700 space-y-1 list-none">
          <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Hoteles 4*/5*: 120-180€/noche</li>
          <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Ubicación: Vista al castillo o río</li>
          <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Spa + servicios de lujo incluidos</li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold text-gray-900 mb-2">Alimentación (3 días):</h4>
        <ul className="text-sm text-gray-700 space-y-1 list-none">
          <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Restaurantes gourmet: 30-50€ por comida</li>
          <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Café Savoy + New York Café elegancia</li>
          <li className="flex items-center"><span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>Maridajes + experiencias culinarias</li>
        </ul>
      </div>
    </div>
    <div className="bg-white rounded-xl p-4 mt-4 shadow-sm">
      <p className="text-purple-800 font-semibold text-center">
        Total 3 días: 540€ por persona
      </p>
    </div>
  </div>
</div>

  </div>

  <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Estrategia Financiera Inteligente</h2>
<div className="mb-6">
  <h3 className="text-lg font-bold text-gray-900 mb-4">Moneda y Pagos</h3>
  <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 shadow-sm">
    <ul className="text-sm text-gray-700 space-y-2 list-none">
      <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Divisa: Corona checa (CZK)</li>
      <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Cambio actual: 1 euro = 25 CZK (septiembre 2025)</li>
      <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Muchos lugares aceptan euros, pero el cambio será desfavorable</li>
      <li className="flex items-center"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>Usa siempre coronas para el mejor precio</li>
    </ul>
  </div>
</div>

<div className="space-y-4">
  <h3 className="text-lg font-bold text-gray-900 mb-4">Tarjetas Zero Comisiones - AHORRO GARANTIZADO</h3>
  
  <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-200 shadow-sm hover:shadow-md transition-all duration-300">
    <div className="text-center">
      <h4 className="font-bold text-gray-900 text-lg mb-3">
        Revolut - Perfecta para Praga
      </h4>
      <p className="text-gray-700 text-sm mb-4">
        Tipo de cambio real sin comisiones. Ahorro garantizado: 10-20 € en 3 días vs. bancos tradicionales.
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
          <span>Cambio instantáneo CZK</span>
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
    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Cuándo Visitar Praga</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
  <div className="bg-gradient-to-r from-pink-50 to-purple-50 border border-pink-200 rounded-xl p-4 text-center shadow-sm hover:shadow-md transition-all duration-300">
    <h3 className="font-semibold text-pink-800 mb-2">Primavera (Abril-Mayo) - IDEAL</h3>
    <p className="text-sm text-pink-700 mb-2">Temperatura: 12-20°C, perfecta para caminar</p>
    <p className="text-xs text-pink-600">Flores en los jardines + menos turistas + precios moderados</p>
  </div>
  <div className="bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-xl p-4 text-center shadow-sm hover:shadow-md transition-all duration-300">
    <h3 className="font-semibold text-orange-800 mb-2">Otoño (Sep-Oct) - RECOMENDADO</h3>
    <p className="text-sm text-orange-700 mb-2">Temperatura: 10-18°C</p>
    <p className="text-xs text-orange-600">Colores dorados + luz perfecta + menos multitudes</p>
  </div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
  <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-center shadow-sm hover:shadow-md transition-all duration-300">
    <h3 className="font-semibold text-green-800 mb-2">Verano (Jun-Ago)</h3>
    <p className="text-sm text-green-700 mb-2">Temperatura: 20-25°C</p>
    <p className="text-xs text-green-600">Días largos + festivales + terrazas</p>
  </div>
  <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-center shadow-sm hover:shadow-md transition-all duration-300">
    <h3 className="font-semibold text-blue-800 mb-2">Invierno (Nov-Mar)</h3>
    <p className="text-sm text-blue-700 mb-2">Temperatura: -2°C a 8°C</p>
    <p className="text-xs text-blue-600">Mercados navideños + nieve romántica + menos gente</p>
  </div>
</div>

  </div>

  <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Gastronomía Checa Auténtica</h2>
<div className="mb-6">
  <h3 className="text-lg font-bold text-gray-900 mb-4">Platos Imprescindibles:</h3>
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <div className="bg-red-50 border border-red-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300">
      <h4 className="font-semibold text-gray-900 mb-2">Goulash Bohemio</h4>
      <ul className="text-sm text-gray-700 space-y-1 list-none">
        <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Estofado de ternera con páprika</li>
        <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Precio: 6-12 € según restaurante</li>
        <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Mejor en: U Fleků, Lokál</li>
      </ul>
    </div>
    
    <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300">
      <h4 className="font-semibold text-gray-900 mb-2">Svíčková na smetaně</h4>
      <ul className="text-sm text-gray-700 space-y-1 list-none">
        <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Carne con salsa de crema y arándanos</li>
        <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Precio: 8-15 €</li>
        <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Plato nacional checo</li>
      </ul>
    </div>
    
    <div className="bg-green-50 border border-green-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300">
      <h4 className="font-semibold text-gray-900 mb-2">Knedlíky</h4>
      <ul className="text-sm text-gray-700 space-y-1 list-none">
        <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Dumplings checos tradicionales</li>
        <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Acompañan todos los platos</li>
        <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>De pan, patata o harina</li>
      </ul>
    </div>
    
    <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300">
      <h4 className="font-semibold text-gray-900 mb-2">Trdelník</h4>
      <ul className="text-sm text-gray-700 space-y-1 list-none">
        <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Dulce enrollado en espiral</li>
        <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Precio: 2-4 €</li>
        <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Puestos callejeros en zonas turísticas</li>
      </ul>
    </div>
  </div>
</div>

<div className="mb-6">
  <h3 className="text-lg font-bold text-gray-900 mb-4">Cafeterías Históricas - Templos del Café:</h3>
  <div className="space-y-3">
    <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
      <h5 className="font-semibold text-gray-900">Café Louvre</h5>
      <p className="text-sm text-gray-700 mb-1">Desde 1902, frecuentado por Kafka y Einstein (8-15 €)</p>
      <a href="https://www.cafelouvre.cz/" target="_blank" rel="noopener noreferrer"
         className="inline-flex items-center bg-gradient-to-r from-brown-400 to-amber-400 hover:from-brown-500 hover:to-amber-500 text-white font-medium px-3 py-1 rounded-md shadow-sm hover:shadow-md transform hover:scale-105 transition-all duration-200 text-xs">
        ☕ Web oficial
        <ExternalLink className="h-2 w-2 ml-1" />
      </a>
      <p className="text-xs text-purple-600 mt-1">Horario: L-V 8:00-23:30h | S-D 9:00-23:30h</p>
    </div>
    <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
      <h5 className="font-semibold text-gray-900">Café Imperial</h5>
      <p className="text-sm text-gray-700 mb-1">Art Nouveau desde 1914, azulejos de cerámica únicos (10-20 €)</p>
      <a href="https://www.hotelimperial.cz/cafe-imperial/" target="_blank" rel="noopener noreferrer"
         className="inline-flex items-center bg-gradient-to-r from-gold-400 to-yellow-400 hover:from-gold-500 hover:to-yellow-500 text-white font-medium px-3 py-1 rounded-md shadow-sm hover:shadow-md transform hover:scale-105 transition-all duration-200 text-xs">
        🏛️ Hotel Imperial
        <ExternalLink className="h-2 w-2 ml-1" />
      </a>
      <p className="text-xs text-green-600 mt-1">Decoración de millones de azulejos históricos</p>
    </div>
    <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
      <h5 className="font-semibold text-gray-900">Café Savoy</h5>
      <p className="text-sm text-gray-700 mb-1">Elegancia vienesa desde 1893, fachada rococó (12-25 €)</p>
      <a href="https://www.ambienceprague.com/cafe-savoy/" target="_blank" rel="noopener noreferrer"
         className="inline-flex items-components bg-gradient-to-r from-pink-400 to-red-400 hover:from-pink-500 hover:to-red-500 text-white font-medium px-3 py-1 rounded-md shadow-sm hover:shadow-md transform hover:scale-105 transition-all duration-200 text-xs">
        🎭 Café Savoy oficial
        <ExternalLink className="h-2 w-2 ml-1" />
      </a>
      <p className="text-xs text-blue-600 mt-1">Techos históricos + repostería imperial</p>
    </div>
    <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
      <h5 className="font-semibold text-gray-900">Grand Café Orient</h5>
      <p className="text-sm text-gray-700 mb-1">Único café cubista del mundo en Casa de la Madre de Dios Negra (6-12 €)</p>
      <p className="text-xs text-indigo-600 mt-1">Arquitectura cubista única + escalera espiral icónica</p>
    </div>
  </div>
</div>

<div className="mb-6">
  <h3 className="text-lg font-bold text-gray-900 mb-4">Restaurantes Verificados:</h3>
  <div className="space-y-3">
    <div>
      <h4 className="font-semibold text-gray-900 mb-2">COMIDA TRADICIONAL CHECA:</h4>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="bg-gray-50 rounded-xl p-3 shadow-sm hover:shadow-md transition-all duration-300">
          <h5 className="font-semibold text-gray-900 text-sm">U Fleků</h5>
          <p className="text-xs text-gray-600 mb-1">Cervecería histórica desde 1499 (8-15 €)</p>
          <a href="https://www.ufleku.cz/en/" target="_blank" rel="noopener noreferrer"
             className="inline-flex items-center bg-gradient-to-r from-amber-400 to-orange-400 hover:from-amber-500 hover:to-orange-500 text-white font-medium px-2 py-1 rounded-md shadow-sm hover:shadow-md transform hover:scale-105 transition-all duration-200 text-xs">
            🍺 Web oficial
            <ExternalLink className="h-2 w-2 ml-1" />
          </a>
        </div>
        <div className="bg-gray-50 rounded-xl p-3 shadow-sm hover:shadow-md transition-all duration-300">
          <h5 className="font-semibold text-gray-900 text-sm">Lokál</h5>
          <p className="text-xs text-gray-600 mb-1">Checa moderna + ambiente tradicional (10-18 €)</p>
          <a href="https://lokal-dlouha.ambienceprague.com/" target="_blank" rel="noopener noreferrer"
             className="inline-flex items-center bg-gradient-to-r from-green-400 to-emerald-400 hover:from-green-500 hover:to-emerald-500 text-white font-medium px-2 py-1 rounded-md shadow-sm hover:shadow-md transform hover:scale-105 transition-all duration-200 text-xs">
            🍽️ Lokál Dlouhá
            <ExternalLink className="h-2 w-2 ml-1" />
          </a>
        </div>
        <div className="bg-gray-50 rounded-xl p-3 shadow-sm hover:shadow-md transition-all duration-300">
          <h5 className="font-semibold text-gray-900 text-sm">Krčma</h5>
          <p className="text-xs text-gray-600 mb-1">Taberna medieval + codillo espectacular (8-15 €)</p>
          <p className="text-xs text-red-600 mt-1">Ambiente medieval auténtico + cerveza artesanal</p>
        </div>
      </div>
    </div>
    
    <div>
      <h4 className="font-semibold text-gray-900 mb-2">OPCIONES MODERNAS:</h4>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="bg-gray-50 rounded-xl p-3 shadow-sm hover:shadow-md transition-all duration-300">
          <h5 className="font-semibold text-gray-900 text-sm">Sisters Bistro</h5>
          <p className="text-xs text-gray-600 mb-1">Económico y sabroso desde 30 CZK (1-3 €)</p>
          <a href="https://www.facebook.com/BistroSisters/" target="_blank" rel="noopener noreferrer"
             className="inline-flex items-center bg-gradient-to-r from-blue-400 to-sky-400 hover:from-blue-500 hover:to-sky-500 text-white font-medium px-2 py-1 rounded-md shadow-sm hover:shadow-md transform hover:scale-105 transition-all duration-200 text-xs">
            📱 Facebook oficial
            <ExternalLink className="h-2 w-2 ml-1" />
          </a>
        </div>
        <div className="bg-gray-50 rounded-xl p-3 shadow-sm hover:shadow-md transition-all duration-300">
          <h5 className="font-semibold text-gray-900 text-sm">Naše Maso</h5>
          <p className="text-xs text-gray-600 mb-1">Carnicería-restaurante + carnes premium (5-15 €)</p>
          <a href="https://www.nasemaso.cz/en/" target="_blank" rel="noopener noreferrer"
             className="inline-flex items-center bg-gradient-to-r from-red-400 to-pink-400 hover:from-red-500 hover:to-pink-500 text-white font-medium px-2 py-1 rounded-md shadow-sm hover:shadow-md transform hover:scale-105 transition-all duration-200 text-xs">
            🥩 Web oficial
            <ExternalLink className="h-2 w-2 ml-1" />
          </a>
        </div>
        <div className="bg-gray-50 rounded-xl p-3 shadow-sm hover:shadow-md transition-all duration-300">
          <h5 className="font-semibold text-gray-900 text-sm">The Street Burgers</h5>
          <p className="text-xs text-gray-600 mb-1">Hamburguesería cerca Ciudad Vieja (8-12 €)</p>
          <p className="text-xs text-purple-600 mt-1">Opciones veganas + cócteles</p>
        </div>
      </div>
    </div>
  </div>
</div>

<div>
  <h3 className="text-lg font-bold text-gray-900 mb-4">Cerveza - Rey de Europa:</h3>
  <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 shadow-sm">
    <ul className="text-sm text-gray-700 space-y-2 list-none">
      <li className="flex items-center"><span className="w-2 h-2 bg-amber-400 rounded-full mr-3"></span><strong>Pilsner Urquell:</strong> La cerveza pilsner original del mundo</li>
      <li className="flex items-center"><span className="w-2 h-2 bg-amber-400 rounded-full mr-3"></span><strong>Budweiser Budvar:</strong> La auténtica Budweiser checa</li>
      <li className="flex items-center"><span className="w-2 h-2 bg-amber-400 rounded-full mr-3"></span><strong>Precio:</strong> 1-3 € por cerveza (¡más barata que el agua!)</li>
      <li className="flex items-center"><span className="w-2 h-2 bg-amber-400 rounded-full mr-3"></span><strong>Dato:</strong> República Checa consume más cerveza per cápita que cualquier país</li>
    </ul>
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
        Cobertura médica: 200.000 € en Europa. Precio 3 días: 9-12 € Aprox.. 
        Actualizado: Septiembre 2025
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
    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Apps Esenciales para Praga</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
  <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300">
    <h3 className="font-semibold text-gray-900 mb-2">PID Lítačka</h3>
    <ul className="text-sm text-gray-700 space-y-1 list-none">
      <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>App oficial transporte público</li>
      <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Compra billetes desde el móvil</li>
      <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Horarios en tiempo real</li>
    </ul>
  </div>
  
  <div className="bg-green-50 border border-green-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300">
    <h3 className="font-semibold text-gray-900 mb-2">Bolt</h3>
    <ul className="text-sm text-gray-700 space-y-1 list-none">
      <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Taxis más baratos que Uber</li>
      <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Precios fijos sin sorpresas</li>
      <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Disponible 24/7</li>
    </ul>
  </div>
  
  <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300">
    <h3 className="font-semibold text-gray-900 mb-2">Google Translate</h3>
    <ul className="text-sm text-gray-700 space-y-1 list-none">
      <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Checo muy diferente a lenguas latinas</li>
      <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Función cámara para menús</li>
      <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Descarga checo offline</li>
    </ul>
  </div>
  
  <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300">
    <h3 className="font-semibold text-gray-900 mb-2">Google Maps</h3>
    <ul className="text-sm text-gray-700 space-y-1 list-none">
      <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Mapas offline detallados</li>
      <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Funciona sin internet</li>
      <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Tranvía 22 al castillo marcado</li>
    </ul>
  </div>
</div>

  </div>

  <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Errores Costosos que Evitar</h2>
<div className="space-y-4">
  <div className="bg-red-50 border border-red-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300">
    <h3 className="font-semibold text-red-800 mb-2">Error #1: Pagar en euros</h3>
    <p className="text-red-700 text-sm mb-2">Problema: Muchos sitios aceptan euros pero con cambio pésimo</p>
    <p className="text-red-700 text-sm mb-2">Solución: Usa siempre coronas checas</p>
    <p className="text-red-700 text-sm font-semibold">Ahorro: 15-25% en todos los pagos</p>
  </div>

  <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300">
    <h3 className="font-semibold text-orange-800 mb-2">Error #2: Visitar en sábado las sinagogas</h3>
    <p className="text-orange-700 text-sm mb-2">Problema: Cerradas por Sabbat judío</p>
    <p className="text-orange-700 text-sm mb-2">Solución: Planifica barrio judío domingo-viernes</p>
    <p className="text-orange-700 text-sm font-semibold">Consecuencia: Perderte una experiencia única</p>
  </div>

  <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300">
    <h3 className="font-semibold text-yellow-800 mb-2">Error #3: Subir al castillo en hora punta</h3>
    <p className="text-yellow-700 text-sm mb-2">Problema: Colas de 1-2 horas a partir de las 11:00h</p>
    <p className="text-yellow-700 text-sm mb-2">Solución: Estar a las 9:00h en la entrada</p>
    <p className="text-yellow-700 text-sm font-semibold">Tip: Compra entrada online la noche anterior</p>
  </div>

  <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300">
    <h3 className="font-semibold text-purple-800 mb-2">Error #4: Taxis en la calle</h3>
    <p className="text-purple-700 text-sm mb-2">Problema: Praga famosa por estafas en taxis</p>
    <p className="text-purple-700 text-sm mb-2">Solución: Solo Bolt/Uber o taxis del hotel</p>
    <p className="text-purple-700 text-sm font-semibold">Ahorro: Evitar estafas de 20-50€</p>
  </div>
</div>

  </div>

  <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Herramientas para tu viaje</h2>
<div className="space-y-6">
  <div className="bg-gradient-to-r from-sky-50 to-blue-50 rounded-xl p-6 border border-sky-200 shadow-sm hover:shadow-md transition-all duration-300">
    <div className="text-center">
      <h3 className="font-bold text-gray-900 text-lg mb-3">
        Vuelos a Praga
      </h3>
      <p className="text-gray-700 text-sm mb-4">
        Encuentra los mejores precios para volar a Praga desde España. Vuelos desde 60 € ida y vuelta.
      </p>
      <div className="space-y-2 text-xs text-gray-600 mb-6">
        <div className="flex items-center justify-center">
          <CheckCircle className="h-3 w-3 text-emerald-500 mr-2" />
          <span>Compara todas las aerolíneas</span>
        </div>
        <div className="flex items-center justify-center">
          <CheckCircle className="h-3 w-3 text-emerald-500 mr-2" />
          <span>Vuelos directos desde Madrid y Barcelona</span>
        </div>
        <div className="flex items-center justify-center">
          <CheckCircle className="h-3 w-3 text-emerald-500 mr-2" />
          <span>Fechas flexibles para mejores precios</span>
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

  <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl p-6 border border-emerald-200 shadow-sm hover:shadow-md transition-all duration-300">
    <div className="text-center">
      <h3 className="font-bold text-gray-900 text-lg mb-3">
        Alojamiento en Praga
      </h3>
      <p className="text-gray-700 text-sm mb-4">
        Hoteles y apartamentos en las mejores zonas de Praga. Desde hostels céntricos hasta hoteles boutique.
      </p>
      <div className="space-y-2 text-xs text-gray-600 mb-6">
        <div className="flex items-center justify-center">
          <CheckCircle className="h-3 w-3 text-emerald-500 mr-2" />
          <span>Ciudad Vieja - Ubicación perfecta</span>
        </div>
        <div className="flex items-center justify-center">
          <CheckCircle className="h-3 w-3 text-emerald-500 mr-2" />
          <span>Cancelación gratuita</span>
        </div>
        <div className="flex items-center justify-center">
          <CheckCircle className="h-3 w-3 text-emerald-500 mr-2" />
          <span>Desde 20 €/noche</span>
        </div>
      </div>
      <a
        href="https://www.booking.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
      >
        <span>🏨 Buscar alojamiento</span>
        <ExternalLink className="h-4 w-4 ml-2" />
      </a>
    </div>
  </div>
</div>

  </div>

  <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Productos Esenciales para Praga</h2>
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
      <h4 className="font-semibold text-gray-900 text-sm mb-1">Adaptador Europeo</h4>
      <p className="text-xs text-gray-600 mb-1">Enchufe tipo C/E</p>
      <span className="text-sm font-semibold text-emerald-600">Desde 12 €</span>
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

  <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex items-center justify-between hover:shadow-md transition-all duration-300">
    <div className="flex-1">
      <h4 className="font-semibold text-gray-900 text-sm mb-1">Power Bank 10000mAh</h4>
      <p className="text-xs text-gray-600 mb-1">Para fotos todo el día</p>
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
</div>

  </div>

  <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 mb-8 shadow-md">
    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Enlaces Oficiales Útiles</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
  <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
    <h3 className="font-semibold text-gray-900 mb-3">Atracciones Principales</h3>
    <div className="space-y-2 text-sm">
      <a href="https://www.hrad.cz/es/" target="_blank" rel="noopener noreferrer"
         className="block bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-medium px-3 py-2 rounded-lg shadow-sm hover:shadow-md transform hover:scale-105 transition-all duration-200">
        🏰 Castillo de Praga Oficial
      </a>
      <a href="https://www.jewishmuseum.cz/en/" target="_blank" rel="noopener noreferrer"
         className="block bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white font-medium px-3 py-2 rounded-lg shadow-sm hover:shadow-md transform hover:scale-105 transition-all duration-200">
        🕍 Museo Judío Praga
      </a>
      <a href="https://www.klementinum.com/en/" target="_blank" rel="noopener noreferrer"
         className="block bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-medium px-3 py-2 rounded-lg shadow-sm hover:shadow-md transform hover:scale-105 transition-all duration-200">
        📚 Clementinum Oficial
      </a>
    </div>
  </div>
  
  <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
    <h3 className="font-semibold text-gray-900 mb-3">Transporte</h3>
    <div className="space-y-2 text-sm">
      <a href="https://pid.cz/en/" target="_blank" rel="noopener noreferrer"
         className="block bg-gradient-to-r from-blue-500 to-sky-500 hover:from-blue-600 hover:to-sky-600 text-white font-medium px-3 py-2 rounded-lg shadow-sm hover:shadow-md transform hover:scale-105 transition-all duration-200">
        🚇 Transporte Público Praga
      </a>
      <a href="https://bolt.eu/" target="_blank" rel="noopener noreferrer"
         className="block bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-medium px-3 py-2 rounded-lg shadow-sm hover:shadow-md transform hover:scale-105 transition-all duration-200">
        🚗 Bolt Taxi
      </a>
    </div>
  </div>
  
  <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
    <h3 className="font-semibold text-gray-900 mb-3">Información Oficial</h3>
    <div className="space-y-2 text-sm">
      <a href="https://www.prague.eu/en" target="_blank" rel="noopener noreferrer"
         className="block bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white font-medium px-3 py-2 rounded-lg shadow-sm hover:shadow-md transform hover:scale-105 transition-all duration-200">
        ℹ️ Prague.eu Oficial
      </a>
      <a href="https://www.prg.aero/en" target="_blank" rel="noopener noreferrer"
         className="block bg-gradient-to-r from-gray-500 to-slate-500 hover:from-gray-600 hover:to-slate-600 text-white font-medium px-3 py-2 rounded-lg shadow-sm hover:shadow-md transform hover:scale-105 transition-all duration-200">
        ✈️ Aeropuerto Praga
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
      <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Búnker nuclear: Museo Guerra Fría (12 €)</li>
      <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Křivoklát: Castillo medieval (excursión)</li>
      <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Isla de Kampa: Bebés gigantes escultura</li>
    </ul>
  </div>
  
  <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
    <h3 className="font-semibold text-gray-900 mb-2">Para Románticos:</h3>
    <ul className="text-sm text-gray-700 space-y-1 list-none">
      <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Cena en torre de agua: Restaurante único</li>
      <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Jardines Vrtba: Barrroco escondido</li>
      <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Puente al amanecer: 6:00h sin gente</li>
    </ul>
  </div>
  
  <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
    <h3 className="font-semibold text-gray-900 mb-2">Para Gourmets:</h3>
    <ul className="text-sm text-gray-700 space-y-1 list-none">
      <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Cervezas artesanales: Brewdog Prague</li>
      <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Mercado Havelské: Productos locales</li>
      <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Degustación absenta: Museo + cata</li>
    </ul>
  </div>
</div>

  </div>

  <div className="bg-gradient-to-r from-emerald-500 to-blue-500 rounded-2xl p-6 sm:p-8 text-center text-white mb-8 shadow-lg hover:shadow-xl transition-all duration-300">
    <h3 className="text-xl sm:text-2xl font-bold mb-4">¿Listo para enamorarte de Praga?</h3>
    <p className="text-base sm:text-lg mb-6 opacity-90">
      Comienza a planificar tu escape a la Ciudad Dorada
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <a 
        href="https://kiwi.tpk.lv/z2gZyZ3E"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center bg-white text-emerald-500 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105"
      >
        ✈️ Buscar vuelos
        <ExternalLink className="h-4 w-4 ml-2" />
      </a>
      <a 
        href="https://www.booking.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center bg-transparent border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-emerald-500 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105"
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
      ¡Que disfrutes Praga al máximo!
    </p>
  </div>
</article>

);

};

export default PragueGuideArticle;