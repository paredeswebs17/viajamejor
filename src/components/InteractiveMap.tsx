import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import { Calendar, MapPin, Clock, Euro } from 'lucide-react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default markers in react-leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

interface MapLocation {
  id: string;
  name: string;
  description: string;
  lat: number;
  lng: number;
  time: string;
  price?: string;
  category: 'attraction' | 'restaurant' | 'transport' | 'viewpoint';
}

interface DayItinerary {
  day: number;
  title: string;
  color: string;
  locations: MapLocation[];
}

const InteractiveMap: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState<number>(1);

  const itinerary: DayItinerary[] = [
    {
      day: 1,
      title: "Poder Imperial y Herencia Cultural",
      color: "#0ea5e9", // sky-500
      locations: [
        {
          id: "parlamento",
          name: "Parlamento Húngaro",
          description: "Símbolo nacional con cúpulas doradas y Corona de San Esteban",
          lat: 47.5070,
          lng: 19.0456,
          time: "9:00h",
          price: "16€",
          category: "attraction"
        },
        {
          id: "tour-gratuito",
          name: "Tour Histórico Gratuito",
          description: "Recorrido con guías locales por el centro histórico",
          lat: 47.4979,
          lng: 19.0402,
          time: "11:00h",
          price: "Gratis",
          category: "attraction"
        },
        {
          id: "sinagoga",
          name: "Gran Sinagoga",
          description: "Segunda sinagoga más grande del mundo + Museo Judío",
          lat: 47.4957,
          lng: 19.0621,
          time: "13:30h",
          price: "12€",
          category: "attraction"
        },
        {
          id: "frici-papa",
          name: "Frici Papa",
          description: "Goulash tradicional de la abuela",
          lat: 47.4969,
          lng: 19.0578,
          time: "14:30h",
          price: "8-12€",
          category: "restaurant"
        },
        {
          id: "basilica",
          name: "Basílica de San Esteban",
          description: "Cúpula panorámica + vistas 360° de Budapest",
          lat: 47.5010,
          lng: 19.0534,
          time: "16:00h",
          price: "8€",
          category: "viewpoint"
        },
        {
          id: "szimpla",
          name: "Szimpla Kert",
          description: "Ruin bar pionero, revolución nocturna húngara",
          lat: 47.4969,
          lng: 19.0621,
          time: "21:00h",
          price: "3-8€",
          category: "restaurant"
        }
      ]
    },
    {
      day: 2,
      title: "Realeza Medieval y Romance Danubiano",
      color: "#10b981", // emerald-500
      locations: [
        {
          id: "funicular",
          name: "Funicular Histórico",
          description: "Ascenso real al Castillo de Buda desde 1870",
          lat: 47.4967,
          lng: 19.0395,
          time: "9:00h",
          price: "4€",
          category: "transport"
        },
        {
          id: "castillo-buda",
          name: "Castillo de Buda",
          description: "Complejo real con jardines y vistas al Danubio",
          lat: 47.4966,
          lng: 19.0398,
          time: "9:30h",
          price: "9€",
          category: "attraction"
        },
        {
          id: "bastion-pescadores",
          name: "Bastión de los Pescadores",
          description: "Mirador más fotografiado de Budapest",
          lat: 47.5023,
          lng: 19.0347,
          time: "10:30h",
          price: "3€",
          category: "viewpoint"
        },
        {
          id: "iglesia-matias",
          name: "Iglesia de Matías",
          description: "Templo de coronaciones reales con techos policromados",
          lat: 47.5020,
          lng: 19.0345,
          time: "11:30h",
          price: "6€",
          category: "attraction"
        },
        {
          id: "ruszwurm",
          name: "Ruszwurm Confitería",
          description: "Pastelería desde 1827, krémes tradicional",
          lat: 47.5016,
          lng: 19.0342,
          time: "12:30h",
          price: "2-3€",
          category: "restaurant"
        },
        {
          id: "puente-cadenas",
          name: "Puente de las Cadenas",
          description: "Primera conexión permanente Buda-Pest (1849)",
          lat: 47.4979,
          lng: 19.0434,
          time: "14:00h",
          price: "Gratis",
          category: "attraction"
        },
        {
          id: "zapatos-danubio",
          name: "Zapatos en la Orilla",
          description: "Memorial del Holocausto, 60 pares de zapatos de bronce",
          lat: 47.5058,
          lng: 19.0458,
          time: "14:30h",
          price: "Gratis",
          category: "attraction"
        },
        {
          id: "parisi-udvar",
          name: "Galería Párisi Udvar",
          description: "Art Nouveau restaurado, techos de cristal espectaculares",
          lat: 47.4969,
          lng: 19.0521,
          time: "15:30h",
          price: "5-8€",
          category: "restaurant"
        },
        {
          id: "crucero-danubio",
          name: "Crucero Nocturno Danubio",
          description: "Atardecer mágico + Parlamento dorado iluminado",
          lat: 47.5000,
          lng: 19.0500,
          time: "18:00h",
          price: "12€",
          category: "attraction"
        }
      ]
    },
    {
      day: 3,
      title: "Aguas Milenarias y Esplendor Imperial",
      color: "#f59e0b", // amber-500
      locations: [
        {
          id: "szechenyi",
          name: "Balnearios Széchenyi",
          description: "18 piscinas termales, ritual húngaro milenario",
          lat: 47.5186,
          lng: 19.0814,
          time: "9:00h",
          price: "18€",
          category: "attraction"
        },
        {
          id: "plaza-heroes",
          name: "Plaza de los Héroes",
          description: "Monumento a las 7 tribus fundadoras de Hungría",
          lat: 47.5146,
          lng: 19.0776,
          time: "13:30h",
          price: "Gratis",
          category: "attraction"
        },
        {
          id: "castillo-vajdahunyad",
          name: "Castillo Vajdahunyad",
          description: "Fantasía arquitectónica con todos los estilos húngaros",
          lat: 47.5145,
          lng: 19.0822,
          time: "14:00h",
          price: "5€",
          category: "attraction"
        },
        {
          id: "andrassy",
          name: "Boulevard Andrássy",
          description: "Champs-Élysées húngaro con palacetes imperiales",
          lat: 47.5073,
          lng: 19.0658,
          time: "15:00h",
          price: "Gratis",
          category: "attraction"
        },
        {
          id: "opera",
          name: "Ópera Nacional Húngara",
          description: "Rival de Viena, interiores dorados espectaculares",
          lat: 47.5030,
          lng: 19.0589,
          time: "17:00h",
          price: "9€",
          category: "attraction"
        },
        {
          id: "new-york-cafe",
          name: "New York Café",
          description: "El café más hermoso del mundo, Belle Époque",
          lat: 47.4969,
          lng: 19.0700,
          time: "18:30h",
          price: "15-25€",
          category: "restaurant"
        }
      ]
    },
    {
      day: 4,
      title: "Autenticidad Local y Despedida",
      color: "#8b5cf6", // violet-500
      locations: [
        {
          id: "mercado-central",
          name: "Mercado Central",
          description: "Corazón gastronómico, páprika + lángos + souvenirs",
          lat: 47.4871,
          lng: 19.0579,
          time: "9:00h",
          price: "3-8€",
          category: "restaurant"
        },
        {
          id: "colina-gellert",
          name: "Colina Gellért",
          description: "Mirador supremo + Estatua de la Libertad",
          lat: 47.4851,
          lng: 19.0464,
          time: "10:30h",
          price: "Gratis",
          category: "viewpoint"
        },
        {
          id: "vaci-utca",
          name: "Váci utca",
          description: "Calle peatonal principal para compras",
          lat: 47.4969,
          lng: 19.0521,
          time: "12:30h",
          price: "Variable",
          category: "attraction"
        },
        {
          id: "puente-libertad",
          name: "Puente de la Libertad",
          description: "Atardecer más romántico de Budapest",
          lat: 47.4871,
          lng: 19.0521,
          time: "17:00h",
          price: "Gratis",
          category: "viewpoint"
        }
      ]
    }
  ];

  const selectedItinerary = itinerary.find(day => day.day === selectedDay) || itinerary[0];

  // Create custom icons for different categories
  const createCustomIcon = (category: string, color: string) => {
    const iconHtml = category === 'attraction' ? '🏛️' : 
                    category === 'restaurant' ? '🍽️' : 
                    category === 'viewpoint' ? '📸' : 
                    category === 'transport' ? '🚊' : '📍';
    
    return L.divIcon({
      html: `<div style="background-color: ${color}; border-radius: 50%; width: 30px; height: 30px; display: flex; align-items: center; justify-content: center; border: 2px solid white; box-shadow: 0 2px 4px rgba(0,0,0,0.3); font-size: 14px;">${iconHtml}</div>`,
      className: 'custom-marker',
      iconSize: [30, 30],
      iconAnchor: [15, 15]
    });
  };

  // Create route line between locations
  const routeCoordinates = selectedItinerary.locations.map(location => [location.lat, location.lng] as [number, number]);

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
        <MapPin className="h-6 w-6 text-sky-500 mr-3" />
        Mapa Interactivo del Itinerario
      </h2>
      
      {/* Day selector */}
      <div className="flex flex-wrap gap-2 mb-6">
        {itinerary.map((day) => (
          <button
            key={day.day}
            onClick={() => setSelectedDay(day.day)}
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center space-x-2 ${
              selectedDay === day.day
                ? 'text-white shadow-lg transform scale-105'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            style={{
              backgroundColor: selectedDay === day.day ? day.color : undefined
            }}
          >
            <Calendar className="h-4 w-4" />
            <span>Día {day.day}</span>
          </button>
        ))}
      </div>

      {/* Selected day info */}
      <div className="mb-4 p-4 rounded-lg" style={{ backgroundColor: `${selectedItinerary.color}15` }}>
        <h3 className="font-bold text-gray-900 mb-2">
          Día {selectedItinerary.day}: {selectedItinerary.title}
        </h3>
        <p className="text-sm text-gray-600">
          {selectedItinerary.locations.length} paradas planificadas • Ruta optimizada para caminar
        </p>
      </div>

      {/* Map */}
      <div className="h-96 rounded-lg overflow-hidden border border-gray-200 mb-4">
        <MapContainer
          center={[47.4979, 19.0402]} // Budapest center
          zoom={13}
          style={{ height: '100%', width: '100%' }}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          
          {/* Route line */}
          <Polyline
            positions={routeCoordinates}
            color={selectedItinerary.color}
            weight={3}
            opacity={0.7}
            dashArray="5, 10"
          />
          
          {/* Markers */}
          {selectedItinerary.locations.map((location, index) => (
            <Marker
              key={location.id}
              position={[location.lat, location.lng]}
              icon={createCustomIcon(location.category, selectedItinerary.color)}
            >
              <Popup className="custom-popup">
                <div className="p-2 min-w-[200px]">
                  <h4 className="font-bold text-gray-900 mb-2">{location.name}</h4>
                  <p className="text-sm text-gray-600 mb-3">{location.description}</p>
                  
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center text-gray-500">
                      <Clock className="h-3 w-3 mr-1" />
                      <span>{location.time}</span>
                    </div>
                    {location.price && (
                      <div className="flex items-center text-emerald-600 font-medium">
                        <Euro className="h-3 w-3 mr-1" />
                        <span>{location.price}</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="mt-2 text-xs text-gray-500">
                    📍 Parada {index + 1} de {selectedItinerary.locations.length}
                  </div>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      {/* Location list for selected day */}
      <div className="space-y-2">
        <h4 className="font-semibold text-gray-900 mb-3">
          Itinerario detallado - Día {selectedItinerary.day}
        </h4>
        {selectedItinerary.locations.map((location, index) => (
          <div
            key={location.id}
            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <div className="flex items-center space-x-3">
              <div
                className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold"
                style={{ backgroundColor: selectedItinerary.color }}
              >
                {index + 1}
              </div>
              <div>
                <h5 className="font-medium text-gray-900 text-sm">{location.name}</h5>
                <p className="text-xs text-gray-600">{location.description}</p>
              </div>
            </div>
            
            <div className="text-right">
              <div className="flex items-center text-xs text-gray-500 mb-1">
                <Clock className="h-3 w-3 mr-1" />
                <span>{location.time}</span>
              </div>
              {location.price && (
                <div className="flex items-center text-xs text-emerald-600 font-medium">
                  <Euro className="h-3 w-3 mr-1" />
                  <span>{location.price}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="mt-4 p-3 bg-gray-50 rounded-lg">
        <h5 className="font-medium text-gray-900 mb-2 text-sm">Leyenda del mapa:</h5>
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div className="flex items-center">
            <span className="mr-2">🏛️</span>
            <span className="text-gray-600">Atracciones</span>
          </div>
          <div className="flex items-center">
            <span className="mr-2">🍽️</span>
            <span className="text-gray-600">Restaurantes</span>
          </div>
          <div className="flex items-center">
            <span className="mr-2">📸</span>
            <span className="text-gray-600">Miradores</span>
          </div>
          <div className="flex items-center">
            <span className="mr-2">🚊</span>
            <span className="text-gray-600">Transporte</span>
          </div>
        </div>
        <div className="mt-2 text-xs text-gray-500">
          💡 Haz clic en los marcadores para ver detalles • La línea punteada muestra la ruta sugerida
        </div>
      </div>
    </div>
  );
};

export default InteractiveMap;