import { ArrowLeft, Share2, Shield, Heart, AlertTriangle, CheckCircle, Star } from 'lucide-react';
import RelatedArticles from './RelatedArticles';

interface TravelInsuranceArticleProps {
  onBack: () => void;
}

const TravelInsuranceArticle: React.FC<TravelInsuranceArticleProps> = ({ onBack }) => {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-24">
{/* Header del artículo */}
<div className="mb-8">
<button
  onClick={onBack}
  className="inline-flex items-center text-sky-600 hover:text-sky-700 hover:bg-sky-50 px-3 py-2 rounded-lg transition-all duration-200 font-medium border border-sky-200 hover:border-sky-300 mb-6"
>
<ArrowLeft className="h-4 w-4 mr-2" />
Volver al blog
</button>
<div className="mb-6">
      <span className="bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-medium">
        Seguros
      </span>
    </div>
    
    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
      Seguro de viaje: por qué uso IATI y mi experiencia real usándolo
    </h1>

    <div className="flex items-center justify-end text-gray-600 text-sm space-x-6 mb-8">
      <button 
        onClick={() => {
          if (navigator.share) {
            navigator.share({
              title: 'Seguro de viaje: por qué uso IATI y mi experiencia real usándolo',
              text: 'Mi experiencia con seguros de viaje y por qué IATI es mi favorito',
              url: window.location.href,
            })
            .catch((error) => console.log('Error sharing', error));
          } else {
            navigator.clipboard.writeText(window.location.href).then(() => {
              alert('¡Enlace copiado al portapapeles!');
            }).catch(() => {
              window.open(`https://twitter.com/intent/tweet?text=Seguro de viaje: por qué uso IATI&url=${encodeURIComponent(window.location.href)}`, '_blank');
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
      src="https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&w=800"
      alt="Viajero en hospital o situación de emergencia médica"
      className="w-full h-64 sm:h-80 object-cover rounded-2xl shadow-lg"
    />
  </div>

  {/* Contenido del artículo */}
  <div className="prose prose-lg max-w-none">
    
    {/* Introducción */}
    <div className="bg-gradient-to-r from-emerald-50 to-sky-50 rounded-2xl p-8 mb-12">
      <p className="text-lg text-gray-700 leading-relaxed mb-0">
        <strong>Si me hubieras preguntado hace años, te habría dicho que el seguro de viaje no es necesario.</strong> 
        Era uno de esos gastos que veía como "innecesarios\" y que siempre intentaba evitar. Pero después de varios 
        sustos y situaciones reales donde lo necesité, nunca salgo de casa sin él.
      </p>
      <p className="text-lg text-gray-700 leading-relaxed mt-4 mb-0">
        Aquí te cuento por qué uso IATI, qué me cubrió cuando lo necesité de verdad, y cómo puedes contratarlo 
        fácilmente con descuento. Spoiler: después de lo que me pasó en Tailandia, ya no es negociable.
      </p>
    </div>

    {/* ¿Realmente necesitas un seguro de viaje? */}
    <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
        <AlertTriangle className="h-6 w-6 text-orange-500 mr-3" />
        ¿Realmente necesitas un seguro de viaje?
      </h2>
      <p className="text-gray-700 mb-4">
        <strong>La respuesta corta: SÍ.</strong> Un seguro de viaje te cubre en situaciones que pueden arruinar 
        no solo tu viaje, sino también tu economía. Hablamos de:
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <h3 className="font-semibold text-red-800 mb-2">🚨 Emergencias médicas</h3>
          <ul className="text-red-700 text-sm space-y-1">
            <li>• Hospitalización por accidente o enfermedad</li>
            <li>• Medicamentos de urgencia</li>
            <li>• Repatriación médica</li>
            <li>• Odontología de urgencia</li>
          </ul>
        </div>
        
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
          <h3 className="font-semibold text-orange-800 mb-2">✈️ Problemas de viaje</h3>
          <ul className="text-orange-700 text-sm space-y-1">
            <li>• Cancelación de vuelos</li>
            <li>• Pérdida o retraso de equipaje</li>
            <li>• Robo de documentos</li>
            <li>• Responsabilidad civil</li>
          </ul>
        </div>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <p className="text-yellow-800 text-sm mb-0">
          <strong>Ejemplo real:</strong> Una noche en urgencias en Estados Unidos puede costarte entre 3.000€ y 10.000€. 
          Una operación sencilla en Japón, fácilmente 15.000€. ¿Merece la pena arriesgarse por ahorrar 30€ en seguro?
        </p>
      </div>
    </div>

    {/* Mi experiencia real */}
    <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8 mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
        <Heart className="h-6 w-6 text-red-500 mr-3" />
        Mi experiencia real: cuando IATI me salvó en Tailandia
      </h2>
      <p className="text-lg text-gray-700 mb-4">
        <strong>Bangkok, 2019. Segundo día de viaje.</strong> Me desperté con un dolor abdominal terrible que no 
        mejoraba. Al principio pensé que era algo que había comido, pero cuando empecé a tener fiebre alta, 
        supe que tenía que ir al hospital.
      </p>
      <p className="text-lg text-gray-700 mb-4">
        Resultado: apendicitis. Operación de urgencia, tres días hospitalizado, medicación y seguimiento. 
        <strong>Coste total: 3.247€.</strong> Lo que yo pagué: 0€. IATI se encargó de todo.
      </p>
      <p className="text-lg text-gray-700 mb-4">
        Pero lo mejor no fue solo el dinero. Fue tener a alguien que hablaba español al teléfono a las 3 de la 
        madrugada, que me explicaba todo el proceso y que se encargó de hablar con el hospital. Cuando estás 
        enfermo en un país extranjero, esa tranquilidad no tiene precio.
      </p>
      <div className="bg-white border border-emerald-200 rounded-lg p-4">
        <p className="text-emerald-800 text-sm mb-0">
          <strong>💡 Dato importante:</strong> El seguro de la tarjeta de crédito solo me cubría 600€. 
          Sin IATI, habría tenido que pagar más de 2.600€ de mi bolsillo.
        </p>
      </div>
    </div>

    {/* ¿Por qué uso IATI? */}
    <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
        <Shield className="h-6 w-6 text-emerald-500 mr-3" />
        ¿Por qué uso IATI?
      </h2>
      <p className="text-gray-700 mb-6">
        <strong>Después de probar varios seguros, IATI es el que mejor me funciona.</strong> No es el más barato, 
        pero tampoco el más caro, y la relación calidad-precio es excelente. Estas son las razones principales:
      </p>
      
      <div className="space-y-4 mb-6">
        <div className="flex items-start">
          <CheckCircle className="h-5 w-5 text-emerald-500 mr-3 mt-1 flex-shrink-0" />
          <div>
            <h3 className="font-semibold text-gray-900">Cobertura mundial real</h3>
            <p className="text-gray-600 text-sm">Funciona en todos los países que he visitado, incluidos Estados Unidos y Japón donde la sanidad es carísima.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <CheckCircle className="h-5 w-5 text-emerald-500 mr-3 mt-1 flex-shrink-0" />
          <div>
            <h3 className="font-semibold text-gray-900">Atención 24/7 en español</h3>
            <p className="text-gray-600 text-sm">Cuando estás enfermo a las 3 AM en Bangkok, poder hablar en tu idioma es un alivio enorme.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <CheckCircle className="h-5 w-5 text-emerald-500 mr-3 mt-1 flex-shrink-0" />
          <div>
            <h3 className="font-semibold text-gray-900">Deportes de aventura incluidos</h3>
            <p className="text-gray-600 text-sm">Senderismo, snorkel, buceo básico... están incluidos sin pagar extra (en otros seguros cobran suplemento).</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <CheckCircle className="h-5 w-5 text-emerald-500 mr-3 mt-1 flex-shrink-0" />
          <div>
            <h3 className="font-semibold text-gray-900">Sin adelantar dinero</h3>
            <p className="text-gray-600 text-sm">En mi caso de Tailandia, IATI pagó directamente al hospital. No tuve que adelantar 3.000€ y esperar reembolso.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <CheckCircle className="h-5 w-5 text-emerald-500 mr-3 mt-1 flex-shrink-0" />
          <div>
            <h3 className="font-semibold text-gray-900">App móvil práctica</h3>
            <p className="text-gray-600 text-sm">Tienes todos los datos del seguro en el móvil, puedes llamar directamente y hacer gestiones desde la app.</p>
          </div>
        </div>
      </div>
    <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
        <p className="text-emerald-800 text-sm mb-0">
          👉 <strong>
            <a href="https://www.iatiseguros.com?r=37344279073491" target="_blank" rel="noopener noreferrer">
              Aquí tienes el enlace de IATI con mi 5% de descuento
            </a>
          </strong>
        </p>
      </div>
    </div>

   {/* Tipos de seguros IATI */}
<div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm mb-8">
  <h2 className="text-2xl font-bold text-gray-900 mb-4">¿Qué tipos de seguros tienen?</h2>
  <p className="text-gray-700 mb-6">
    <strong>IATI tiene varios tipos de seguro según tu perfil de viajero.</strong> Aquí te explico cuál recomiendo para cada situación:
  </p>
  <div className="space-y-6">
    <div className="border border-gray-200 rounded-lg p-6">
      <div className="flex items-center mb-3">
        <Star className="h-5 w-5 text-orange-500 mr-2" />
        <h3 className="text-lg font-bold text-gray-900">IATI Estándar</h3>
        <span className="ml-auto bg-orange-100 text-orange-800 px-2 py-1 rounded text-sm font-medium">Mi favorito</span>
      </div>
      <p className="text-gray-600 mb-2">
        <strong>Para quién:</strong> Viajes normales, turismo, ciudades, playa.
      </p>
      <p className="text-gray-600 mb-2">
        <strong>Ventaja:</strong> El equilibrio perfecto entre precio y cobertura para viajar tranquilo.
      </p>
      <p className="text-gray-600">
        <strong>Precio aproximado:</strong> 22-35€ por semana de viaje.
      </p>
    </div>

    <div className="border border-gray-200 rounded-lg p-6">
      <h3 className="text-lg font-bold text-gray-900 mb-3">IATI Estrella</h3>
      <p className="text-gray-600 mb-2">
        <strong>Para quién:</strong> Viajes a destinos caros como EEUU, Japón o Canadá, o quien busca máxima cobertura.
      </p>
      <p className="text-gray-600 mb-2">
        <strong>Ventaja:</strong> Coberturas médicas casi ilimitadas para los destinos más caros del mundo.
      </p>
      <p className="text-gray-600">
        <strong>Precio aproximado:</strong> 30-50€ por semana de viaje.
      </p>
    </div>

    <div className="border border-gray-200 rounded-lg p-6">
      <h3 className="text-lg font-bold text-gray-900 mb-3">IATI Mochilero</h3>
      <p className="text-gray-600 mb-2">
        <strong>Para quién:</strong> Viajes largos, aventura, nómadas digitales, deportes de riesgo.
      </p>
      <p className="text-gray-600 mb-2">
        <strong>Ventaja:</strong> Pensado para actividades de aventura y viajes largos sin preocupaciones.
      </p>
      <p className="text-gray-600">
        <strong>Precio aproximado:</strong> 20-35€ por semana.
      </p>
    </div>

    <div className="border border-gray-200 rounded-lg p-6">
      <h3 className="text-lg font-bold text-gray-900 mb-3">IATI Escapadas</h3>
      <p className="text-gray-600 mb-2">
        <strong>Para quién:</strong> Viajes por España y Europa en coche, furgoneta, camper.
      </p>
      <p className="text-gray-600 mb-2">
        <strong>Ventaja:</strong> Ideal para roadtrips, deportes y escapadas con cobertura para mascotas incluida.
      </p>
      <p className="text-gray-600">
        <strong>Precio aproximado:</strong> 15-25€ por semana.
      </p>
    </div>
  </div>

  <div className="bg-sky-50 border border-sky-200 rounded-lg p-4 mt-6">
  <p className="text-sky-800 text-sm mb-0">
    👉 <strong>
      <a href="https://www.iatiseguros.com?r=37344279073491" target="_blank" rel="noopener noreferrer">
        Aquí tienes el enlace de seguros IATI con mi 5% de descuento
      </a>
    </strong>
  </p>
</div>
</div>


    {/* Cómo contratarlo */}
    <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">¿Cómo contratarlo (y conseguir un 5% de descuento)?</h2>
      <p className="text-gray-700 mb-6">
        <strong>Contratar IATI es súper fácil y se hace online en 5 minutos.</strong> Además, si usas mi enlace, 
        tienes un 5% de descuento automático. Te explico paso a paso:
      </p>
      
      <div className="space-y-4 mb-6">
        <div className="flex items-start">
          <div className="w-8 h-8 bg-sky-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">1</div>
          <div>
            <h3 className="font-semibold text-gray-900">Entra desde mi enlace con descuento</h3>
            <p className="text-gray-600 text-sm">El descuento del 5% se aplica automáticamente, no necesitas código.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="w-8 h-8 bg-sky-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">2</div>
          <div>
            <h3 className="font-semibold text-gray-900">Elige tu tipo de seguro</h3>
            <p className="text-gray-600 text-sm">Para la mayoría de viajes, IATI Estándar es perfecto.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="w-8 h-8 bg-sky-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">3</div>
          <div>
            <h3 className="font-semibold text-gray-900">Introduce fechas y destino</h3>
            <p className="text-gray-600 text-sm">El precio se calcula automáticamente según duración y destino.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="w-8 h-8 bg-sky-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">4</div>
          <div>
            <h3 className="font-semibold text-gray-900">Rellena tus datos y paga</h3>
            <p className="text-gray-600 text-sm">Tarjeta, PayPal o transferencia. Recibes la póliza por email al instante.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="w-8 h-8 bg-sky-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">5</div>
          <div>
            <h3 className="font-semibold text-gray-900">Descarga la app IATI</h3>
            <p className="text-gray-600 text-sm">Tendrás todos los datos del seguro en el móvil y podrás llamar directamente.</p>
          </div>
        </div>
      </div>

      <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6">
        <h3 className="font-semibold text-emerald-800 mb-3">🎁 Mi enlace con descuento del 5%</h3>
        <p className="text-emerald-700 text-sm mb-3">
          Si contratas desde aquí, tienes un 5% de descuento automático en cualquier seguro IATI. 
          Es mi forma de agradecerte que confíes en mi recomendación.
        </p>
        <div className="space-y-2">
          <p className="text-emerald-800 text-sm">
            👉 <strong>
              <a href="https://www.iatiseguros.com?r=37344279073491" target="_blank" rel="noopener noreferrer">
                Aquí tienes el enlace a IATI con mi 5% de descuento
              </a>
            </strong>
          </p>
        </div>
      </div>
    </div>
    

    {/* Conclusión */}
    <div className="bg-gradient-to-r from-emerald-50 to-sky-50 rounded-2xl p-8 mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Mi conclusión personal</h2>
      <p className="text-lg text-gray-700 mb-4">
        <strong>Después de muchos viajes y algún que otro susto, para mí el seguro ya no es opcional.</strong> 
        Prefiero pagar un poco más al principio y viajar tranquilo, sabiendo que si pasa algo, estoy cubierto.
      </p>
      <p className="text-lg text-gray-700 mb-4">
        IATI me ha funcionado bien en situaciones reales, no solo en teoría. La experiencia de Tailandia me 
        demostró que vale cada euro que cuesta. Y si además puedo ayudarte con un descuento del 5%, mejor todavía.
      </p>
      <p className="text-lg text-gray-700 mb-0">
        <strong>¿Tú qué opinas? ¿Has tenido alguna experiencia con seguros de viaje?</strong> Cuéntamelo en 
        comentarios o escríbeme por email. Siempre me gusta conocer experiencias de otros viajeros.
      </p>
    </div>

    {/* CTA final */}
<div className="bg-gradient-to-r from-emerald-500 to-sky-500 rounded-2xl p-8 text-center text-white">
  <h3 className="text-2xl font-bold mb-4">¿Listo para viajar tranquilo?</h3>
  <p className="text-lg mb-6 opacity-90">
    Contrata tu seguro IATI con mi descuento del 5% y viaja sin preocupaciones
  </p>
  <a 
    href="https://www.iatiseguros.com?r=37344279073491"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white text-emerald-500 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors mr-4 inline-block"
  >
    Contratar IATI con 5% descuento
  </a>
</div>

  
      {/* Artículos relacionados */}
    <RelatedArticles currentCategory="Seguros" currentArticleId="iati-experiencia" />
    </div>
  </article>
  );
};

export default TravelInsuranceArticle;