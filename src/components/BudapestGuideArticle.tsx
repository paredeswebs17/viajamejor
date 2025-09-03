import { ArrowLeft, Share2, MapPin, Clock, Euro, Calendar, Star, CheckCircle, Utensils, Camera, Coffee } from 'lucide-react';
import { useState } from 'react';
import MobileCollapsible from './MobileCollapsible';

interface BudapestGuideArticleProps {
  onBack: () => void;
}

const BudapestGuideArticle: React.FC<BudapestGuideArticleProps> = ({ onBack }) => {
  const [activeDay, setActiveDay] = useState(1);

  const itinerary = [
    {
      day: 1,
      title: "Poder Imperial y Herencia Cultural",
      subtitle: "Parlamento + Recorrido histórico + Sinagoga + Basílica",
      budget: "65-85€",
      highlights: ["Parlamento Húngaro", "Gran Sinagoga", "Basílica de San Esteban"],
      activities: [
        {
          time: "9:00",
          activity: "Desayuno en Central Kávéház",
          description: "Café histórico con ambiente auténtico",
          cost: "8-12€",
          location: "Károlyi Mihály u. 9"
        },
        {
          time: "10:30",
          activity: "Parlamento Húngaro (tour guiado)",
          description: "Arquitectura neogótica impresionante, joyas de la corona",
          cost: "35€",
          location: "Kossuth Lajos tér 1-3",
          booking: "🎫 <a href='https://www.parlament.hu/en/web/house-of-the-national-assembly/visit-parliament' target='_blank' rel='noopener noreferrer' class='text-sky-600 font-semibold hover:text-sky-700 transition-colors'>Entradas oficiales Parlamento</a>"
        },
        {
          time: "13:00",
          activity: "Almuerzo en Frici Papa",
          description: "Comida húngara tradicional, porciones generosas",
          cost: "15-20€",
          location: "Kálvin tér 9"
        },
        {
          time: "14:30",
          activity: "Gran Sinagoga + Museo Judío",
          description: "La sinagoga más grande de Europa",
          cost: "25€",
          location: "Dohány u. 2",
          booking: "🎫 <a href='https://www.dohany-zsinagoga.hu/en' target='_blank' rel='noopener noreferrer' class='text-sky-600 font-semibold hover:text-sky-700 transition-colors'>Web oficial Gran Sinagoga</a>"
        },
        {
          time: "16:30",
          activity: "Basílica de San Esteban",
          description: "Subida a la cúpula para vistas panorámicas",
          cost: "8€",
          location: "Szent István tér 1",
          booking: "🏰 <a href='https://www.bazilika.biz/en' target='_blank' rel='noopener noreferrer' class='text-sky-600 font-semibold hover:text-sky-700 transition-colors'>Web oficial Basílica</a>"
        },
        {
          time: "19:00",
          activity: "Cena en Bock Bisztró",
          description: "Cocina húngara moderna, excelente relación calidad-precio",
          cost: "25-35€",
          location: "Erzsébet krt. 43-49"
        }
      ]
    },
    {
      day: 2,
      title: "Realeza Medieval y Romance Danubiano",
      subtitle: "Castillo + Bastión Pescadores + Crucero nocturno",
      budget: "70-90€",
      highlights: ["Castillo de Buda", "Bastión de los Pescadores", "Crucero Danubio"],
      activities: [
        {
          time: "9:00",
          activity: "Desayuno en Ruszwurm",
          description: "Pastelería histórica desde 1827",
          cost: "6-10€",
          location: "Szentháromság u. 7"
        },
        {
          time: "10:00",
          activity: "Castillo de Buda + Galería Nacional",
          description: "Palacio real con vistas espectaculares",
          cost: "20€",
          location: "Szent György tér 2",
          booking: "🏰 <a href='https://www.budacastlebudapest.com/' target='_blank' rel='noopener noreferrer' class='text-sky-600 font-semibold hover:text-sky-700 transition-colors'>Web oficial Castillo de Buda</a>"
        },
        {
          time: "12:30",
          activity: "Bastión de los Pescadores",
          description: "Torres de cuento de hadas con vistas al Danubio",
          cost: "8€ (torres superiores)",
          location: "Szentháromság tér",
          booking: "🏰 <a href='https://www.fishermansbastion.com/' target='_blank' rel='noopener noreferrer' class='text-sky-600 font-semibold hover:text-sky-700 transition-colors'>Web oficial Bastión Pescadores</a>"
        },
        {
          time: "14:00",
          activity: "Almuerzo en Pest-Buda Bistro",
          description: "Terraza con vistas al Danubio",
          cost: "18-25€",
          location: "Fortuna u. 3"
        },
        {
          time: "15:30",
          activity: "Iglesia de Matías",
          description: "Arquitectura gótica única, coronaciones reales",
          cost: "12€",
          location: "Szentháromság tér 2",
          booking: "⛪ <a href='https://www.matyas-templom.hu/en' target='_blank' rel='noopener noreferrer' class='text-sky-600 font-semibold hover:text-sky-700 transition-colors'>Web oficial Iglesia Matías</a>"
        },
        {
          time: "17:00",
          activity: "Paseo por el Barrio del Castillo",
          description: "Calles medievales y vistas panorámicas",
          cost: "Gratis",
          location: "Distrito del Castillo"
        },
        {
          time: "20:00",
          activity: "Crucero nocturno por el Danubio",
          description: "Budapest iluminada desde el río",
          cost: "25-35€",
          location: "Vigadó tér pier",
          booking: "🚢 <a href='https://www.legenda.hu/en' target='_blank' rel='noopener noreferrer' class='text-sky-600 font-semibold hover:text-sky-700 transition-colors'>Reservar crucero Legenda</a>"
        }
      ]
    },
    {
      day: 3,
      title: "Aguas Milenarias y Esplendor Imperial",
      subtitle: "Balnearios Széchenyi + Plaza Héroes + Andrássy + New York Café",
      budget: "60-80€",
      highlights: ["Balnearios Széchenyi", "Plaza de los Héroes", "Avenida Andrássy"],
      activities: [
        {
          time: "9:00",
          activity: "Balnearios Széchenyi",
          description: "Los baños termales más famosos de Budapest",
          cost: "22€ (día completo)",
          location: "Állatkerti krt. 9-11",
          booking: "🛁 <a href='https://www.szechenyibath.hu/' target='_blank' rel='noopener noreferrer' class='text-sky-600 font-semibold hover:text-sky-700 transition-colors'>Web oficial Széchenyi</a>"
        },
        {
          time: "12:30",
          activity: "Almuerzo en Gundel",
          description: "Restaurante legendario junto al parque",
          cost: "35-50€",
          location: "Gundel Károly út 4"
        },
        {
          time: "14:00",
          activity: "Plaza de los Héroes",
          description: "Monumento del Milenio y Museo de Bellas Artes",
          cost: "15€ (museo)",
          location: "Hősök tere",
          booking: "🎨 <a href='https://www.mfab.hu/en' target='_blank' rel='noopener noreferrer' class='text-sky-600 font-semibold hover:text-sky-700 transition-colors'>Museo Bellas Artes</a>"
        },
        {
          time: "16:00",
          activity: "Paseo por Avenida Andrássy",
          description: "Patrimonio UNESCO, tiendas de lujo",
          cost: "Gratis",
          location: "Andrássy út"
        },
        {
          time: "17:30",
          activity: "Ópera Estatal Húngara",
          description: "Visita guiada del interior (opcional)",
          cost: "12€",
          location: "Andrássy út 22",
          booking: "🎭 <a href='https://www.opera.hu/en' target='_blank' rel='noopener noreferrer' class='text-sky-600 font-semibold hover:text-sky-700 transition-colors'>Web oficial Ópera</a>"
        },
        {
          time: "19:00",
          activity: "New York Café",
          description: "El café más bonito del mundo",
          cost: "15-25€",
          location: "Erzsébet krt. 9-11",
          booking: "☕ <a href='https://newyorkcafe.hu/en' target='_blank' rel='noopener noreferrer' class='text-sky-600 font-semibold hover:text-sky-700 transition-colors'>Web oficial New York Café</a>"
        }
      ]
    },
    {
      day: 4,
      title: "Autenticidad Local y Despedida",
      subtitle: "Mercado Central + Colina Gellért + Exploración libre",
      budget: "45-65€",
      highlights: ["Mercado Central", "Colina Gellért", "Barrio Judío"],
      activities: [
        {
          time: "9:30",
          activity: "Mercado Central (Nagy Vásárcsarnok)",
          description: "Productos locales, souvenirs auténticos",
          cost: "10-15€ (compras)",
          location: "Vámház krt. 1-3"
        },
        {
          time: "11:00",
          activity: "Colina Gellért + Ciudadela",
          description: "Las mejores vistas panorámicas de Budapest",
          cost: "Gratis",
          location: "Gellért Hill"
        },
        {
          time: "13:00",
          activity: "Almuerzo en Frici Papa",
          description: "Comida casera húngara, ambiente local",
          cost: "12-18€",
          location: "Kálvin tér 9"
        },
        {
          time: "15:00",
          activity: "Exploración del Barrio Judío",
          description: "Ruin pubs, arte callejero, historia",
          cost: "5-10€ (bebidas)",
          location: "Distrito VII"
        },
        {
          time: "17:00",
          activity: "Balnearios Rudas (opcional)",
          description: "Baños termales otomanos con vistas al Danubio",
          cost: "25€",
          location: "Döbrentei tér 9",
          booking: "🛁 <a href='https://www.rudasbaths.com/' target='_blank' rel='noopener noreferrer' class='text-sky-600 font-semibold hover:text-sky-700 transition-colors'>Web oficial Rudas</a>"
        },
        {
          time: "19:30",
          activity: "Cena de despedida en Onyx",
          description: "Restaurante Michelin para ocasiones especiales",
          cost: "80-120€",
          location: "Vörösmarty tér 7-8",
          booking: "💎 <a href='https://onyxrestaurant.hu/en' target='_blank' rel='noopener noreferrer' class='text-sky-600 font-semibold hover:text-sky-700 transition-colors'>Reservar Onyx</a>"
        }
      ]
    }
  ];

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
            🔥 Guía Popular
          </span>
        </div>
        
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Budapest en 4 Días: Guía Completa
        </h1>

        <div className="flex items-center justify-end text-gray-600 text-sm space-x-6 mb-8">
          <button 
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: 'Budapest en 4 Días: Guía Completa',
                  text: 'Descubre Budapest con esta guía detallada',
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
          src="https://images.unsplash.com/photo-1541849546-216549ae216d?auto=format&fit=crop&w=1200&q=80"
          alt="Vista panorámica del Parlamento de Budapest al atardecer con el Danubio"
          className="w-full h-64 sm:h-80 object-cover rounded-2xl shadow-lg"
        />
      </div>

      {/* Información general */}
      <div className="bg-gradient-to-r from-sky-50 to-emerald-50 rounded-2xl p-8 mb-12">
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="flex flex-col items-center">
            <Calendar className="h-8 w-8 text-sky-500 mb-2" />
            <span className="text-2xl font-bold text-gray-900">4</span>
            <span className="text-gray-600">Días perfectos</span>
          </div>
          <div className="flex flex-col items-center">
            <Euro className="h-8 w-8 text-emerald-500 mb-2" />
            <span className="text-2xl font-bold text-gray-900">280€</span>
            <span className="text-gray-600">Presupuesto total</span>
          </div>
          <div className="flex flex-col items-center">
            <Star className="h-8 w-8 text-orange-500 mb-2" />
            <span className="text-2xl font-bold text-gray-900">4.9</span>
            <span className="text-gray-600">Valoración</span>
          </div>
        </div>
      </div>

      {/* Introducción */}
      <div className="prose prose-lg max-w-none mb-12">
        <p className="text-lg text-gray-700 leading-relaxed">
          <strong>Budapest es una de esas ciudades que te enamoran desde el primer momento.</strong> 
          La capital húngara combina historia imperial, arquitectura impresionante, cultura de balnearios 
          única en Europa y una vida nocturna vibrante. En 4 días puedes ver lo esencial sin prisas 
          y disfrutar de experiencias auténticas.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          Esta guía está pensada para aprovechar al máximo tu tiempo, con un equilibrio perfecto entre 
          monumentos imprescindibles, experiencias locales y momentos de relax. He optimizado las rutas 
          para minimizar desplazamientos y maximizar el disfrute.
        </p>
      </div>

      {/* Información práctica */}
      <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">📋 Información práctica</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">💰 Presupuesto diario</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Económico</span>
                <span className="font-semibold text-emerald-600">45-60€/día</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Medio</span>
                <span className="font-semibold text-sky-600">70-90€/día</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Lujo</span>
                <span className="font-semibold text-purple-600">120-180€/día</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">🚇 Transporte</h3>
            <div className="space-y-2 text-sm">
              <p><strong>Budapest Card:</strong> 72h por 45€ (transporte + descuentos)</p>
              <p><strong>Ticket sencillo:</strong> 1.50€</p>
              <p><strong>Pase 24h:</strong> 5.50€</p>
              <p className="text-sky-600 font-semibold hover:text-sky-700 transition-colors">
                🚇 <a href="https://bkk.hu/en/" target="_blank" rel="noopener noreferrer">BKK Budapest - Tickets oficiales</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Selector de días */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          🗓️ Itinerario día por día
        </h2>
        
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {itinerary.map((day) => (
            <button
              key={day.day}
              onClick={() => setActiveDay(day.day)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                activeDay === day.day
                  ? 'bg-gradient-to-r from-sky-500 to-emerald-500 text-white shadow-lg'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-sky-300 hover:text-sky-600'
              }`}
            >
              Día {day.day}
            </button>
          ))}
        </div>
      </div>

      {/* Contenido del día activo */}
      {itinerary.map((day) => (
        activeDay === day.day && (
          <div key={day.day} className="mb-12">
            {/* Header del día */}
            <div className="bg-gradient-to-r from-sky-500 to-emerald-500 text-white rounded-2xl p-8 mb-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-2">
                  Día {day.day}: {day.title}
                </h2>
                <p className="text-sky-100 text-lg mb-4">
                  {day.subtitle}
                </p>
                <div className="flex justify-center items-center space-x-6 text-sm">
                  <div className="flex items-center bg-white/20 rounded-lg px-3 py-1">
                    <Euro className="h-4 w-4 mr-1" />
                    <span>{day.budget}</span>
                  </div>
                  <div className="flex items-center bg-white/20 rounded-lg px-3 py-1">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{day.highlights.length} paradas</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Actividades del día */}
            <div className="space-y-6">
              {day.activities.map((activity, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-sky-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold">
                        <Clock className="h-5 w-5" />
                      </div>
                      <div className="text-center mt-2">
                        <span className="text-sm font-semibold text-gray-900">{activity.time}</span>
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {activity.activity}
                      </h3>
                      <p className="text-gray-600 mb-3">
                        {activity.description}
                      </p>
                      
                      <div className="flex flex-wrap items-center gap-4 text-sm">
                        <div className="flex items-center">
                          <Euro className="h-4 w-4 text-emerald-500 mr-1" />
                          <span className="font-semibold text-emerald-600">{activity.cost}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 text-gray-500 mr-1" />
                          <span className="text-gray-600">{activity.location}</span>
                        </div>
                      </div>
                      
                      {activity.booking && (
                        <div className="mt-3 p-3 bg-sky-50 border border-sky-200 rounded-lg">
                          <p className="text-sm" dangerouslySetInnerHTML={{ __html: activity.booking }} />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )
      ))}

      {/* Consejos adicionales */}
      <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">💡 Consejos para tu viaje</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Coffee className="h-5 w-5 text-orange-500 mr-2" />
              Dónde alojarse
            </h3>
            <div className="space-y-3 text-sm">
              <div>
                <strong>Distrito V (Centro):</strong> Cerca de todo, más caro
                <p className="text-sky-600 font-semibold hover:text-sky-700 transition-colors">
                  🏨 <a href="https://www.booking.com/city/hu/budapest.html" target="_blank" rel="noopener noreferrer">Ver hoteles en Booking</a>
                </p>
              </div>
              <div>
                <strong>Distrito VII (Barrio Judío):</strong> Vida nocturna, precio medio
              </div>
              <div>
                <strong>Distrito VI (Andrássy):</strong> Elegante, bien conectado
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Utensils className="h-5 w-5 text-green-500 mr-2" />
              Qué comer
            </h3>
            <div className="space-y-2 text-sm">
              <p><strong>Goulash:</strong> El plato nacional, pruébalo en Frici Papa</p>
              <p><strong>Lángos:</strong> Pan frito con crema agria y queso</p>
              <p><strong>Chimney cake:</strong> Dulce tradicional en mercados</p>
              <p><strong>Vinos:</strong> Tokaj (dulce) y Egri Bikavér (tinto)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mapa y ubicaciones */}
      <div className="bg-gradient-to-r from-emerald-50 to-sky-50 rounded-2xl p-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          🗺️ Ubicaciones principales
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">🏰 Lado Buda (Oeste)</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-emerald-500 mr-2" />
                <span>Castillo de Buda</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-emerald-500 mr-2" />
                <span>Bastión de los Pescadores</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-emerald-500 mr-2" />
                <span>Iglesia de Matías</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-emerald-500 mr-2" />
                <span>Colina Gellért</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">🏛️ Lado Pest (Este)</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-emerald-500 mr-2" />
                <span>Parlamento Húngaro</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-emerald-500 mr-2" />
                <span>Gran Sinagoga</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-emerald-500 mr-2" />
                <span>Basílica de San Esteban</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-emerald-500 mr-2" />
                <span>Balnearios Széchenyi</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Versión móvil con collapsibles */}
      <div className="block md:hidden mb-12">
        <h2 className="text-xl font-bold text-gray-900 mb-4">📱 Itinerario detallado</h2>
        {itinerary.map((day) => (
          <MobileCollapsible
            key={day.day}
            title={`Día ${day.day}: ${day.title}`}
            defaultOpen={day.day === 1}
          >
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-sky-50 to-emerald-50 rounded-lg p-4 mb-4">
                <p className="text-sm text-gray-700 mb-2">
                  <strong>{day.subtitle}</strong>
                </p>
                <div className="flex items-center space-x-4 text-xs">
                  <span className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full">
                    💰 {day.budget}
                  </span>
                  <span className="bg-sky-100 text-sky-700 px-2 py-1 rounded-full">
                    📍 {day.highlights.length} paradas
                  </span>
                </div>
              </div>
              
              {day.activities.map((activity, index) => (
                <div key={index} className="border-l-4 border-sky-500 pl-4 pb-4">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="bg-sky-500 text-white px-2 py-1 rounded text-xs font-bold">
                      {activity.time}
                    </span>
                    <span className="text-emerald-600 font-semibold text-xs">
                      {activity.cost}
                    </span>
                  </div>
                  <h4 className="font-semibold text-gray-900 text-sm mb-1">
                    {activity.activity}
                  </h4>
                  <p className="text-gray-600 text-xs mb-2">
                    {activity.description}
                  </p>
                  <p className="text-gray-500 text-xs mb-2">
                    📍 {activity.location}
                  </p>
                  {activity.booking && (
                    <div className="bg-sky-50 border border-sky-200 rounded p-2 mt-2">
                      <p className="text-xs" dangerouslySetInnerHTML={{ __html: activity.booking }} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </MobileCollapsible>
        ))}
      </div>

      {/* CTA final */}
      <div className="bg-gradient-to-r from-sky-500 to-emerald-500 rounded-2xl p-8 text-center text-white">
        <h3 className="text-2xl font-bold mb-4">¿Listo para descubrir Budapest?</h3>
        <p className="text-lg mb-6 opacity-90">
          Empieza a planificar tu viaje con nuestras recomendaciones probadas
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="https://www.booking.com/city/hu/budapest.html"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-sky-500 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors inline-block"
          >
            🏨 <span className="font-semibold hover:text-sky-700 transition-colors">Buscar Hoteles</span>
          </a>
          <a 
            href="https://kiwi.tpk.lv/z2gZyZ3E"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-sky-500 transition-colors inline-block"
          >
            ✈️ <span className="font-semibold hover:text-sky-700 transition-colors">Buscar Vuelos</span>
          </a>
        </div>
      </div>
    </article>
  );
};

export default BudapestGuideArticle;