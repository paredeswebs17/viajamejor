import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import BudapestGuideArticle from '../components/BudapestGuideArticle';

const BudapestGuidePage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/guias');
  };

  return (
    <>
      <Helmet>
        <title>Budapest en 4 Días: Guía Completa con Itinerario y Presupuesto | Viaja Mejor</title>
        <meta name="description" content="Guía completa de Budapest en 4 días. Itinerario detallado hora por hora, presupuestos reales, mejores balnearios, dónde alojarse y qué comer. Incluye mapa interactivo y enlaces de reservas." />
        <meta name="keywords" content="budapest 4 dias, guia budapest, balnearios budapest, parlamento budapest, que ver budapest, presupuesto budapest, itinerario budapest, szechenyi, bastión pescadores" />
        <link rel="canonical" href="https://viajamejor.net/budapest-4-dias" />
        
        <meta property="og:title" content="Budapest en 4 Días: Guía Completa con Itinerario y Presupuesto" />
        <meta property="og:description" content="Descubre Budapest en 4 días con nuestro itinerario optimizado. Parlamento, Castillo, balnearios Széchenyi y mucho más. Presupuestos desde 100€/día." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://viajamejor.net/budapest-4-dias" />
        <meta property="og:image" content="https://images.pexels.com/photos/18670174/pexels-photo-18670174.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&dpr=1" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TravelGuide",
            "name": "Budapest en 4 Días - Guía Completa",
            "description": "Guía detallada para visitar Budapest en 4 días con itinerario optimizado hora por hora y presupuestos reales",
            "author": {
              "@type": "Person",
              "name": "Viaja Mejor"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Viaja Mejor",
              "logo": {
                "@type": "ImageObject",
                "url": "https://viajamejor.net/apple-touch-icon.png"
              }
            },
            "datePublished": "2024-12-01",
            "dateModified": "2024-12-01",
            "image": "https://images.pexels.com/photos/73796/budapest-hungary-parliament-building-73796.jpeg",
            "url": "https://viajamejor.net/budapest-4-dias",
            "about": {
              "@type": "Place",
              "name": "Budapest",
              "@id": "https://www.wikidata.org/wiki/Q1781"
            },
            "itinerary": [
              {
                "@type": "TouristTrip",
                "name": "Día 1: Poder Imperial y Herencia Cultural",
                "description": "Parlamento + Recorrido histórico + Sinagoga + Basílica"
              },
              {
                "@type": "TouristTrip", 
                "name": "Día 2: Realeza Medieval y Romance Danubiano",
                "description": "Castillo + Bastión Pescadores + Crucero nocturno"
              },
              {
                "@type": "TouristTrip",
                "name": "Día 3: Aguas Milenarias y Esplendor Imperial", 
                "description": "Balnearios Széchenyi + Plaza Héroes + Andrássy + New York Café"
              },
              {
                "@type": "TouristTrip",
                "name": "Día 4: Autenticidad Local y Despedida",
                "description": "Mercado Central + Colina Gellért + Exploración libre"
              }
            ]
          })}
        </script>
      </Helmet>

      <BudapestGuideArticle onBack={handleBack} />
    </>
  );
};

export default BudapestGuidePage;