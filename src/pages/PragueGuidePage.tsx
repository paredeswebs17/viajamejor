import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import PragueGuideArticle from '../components/PragueGuideArticle';

const PragueGuidePage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/guias');
  };

  return (
    <>
      <Helmet>
        <title>Praga en 3 Días: Guía Completa con Itinerario y Presupuesto | Viaja Mejor</title>
        <meta name="description" content="Guía completa de Praga en 3 días. Itinerario detallado hora por hora, presupuestos reales, mejores cervecerías, dónde alojarse y qué comer. Incluye mapa interactivo y enlaces de reservas." />
        <meta name="keywords" content="praga 3 dias, guia praga, castillo praga, puente carlos, que ver praga, presupuesto praga, itinerario praga, cerveza praga, barrio judio praga" />
        <link rel="canonical" href="https://viajamejor.net/praga-3-dias" />
        
        <meta property="og:title" content="Praga en 3 Días: Guía Completa con Itinerario y Presupuesto" />
        <meta property="og:description" content="Descubre Praga en 3 días con nuestro itinerario optimizado. Castillo, Puente de Carlos, barrio judío y mucho más. Presupuestos desde 60€/día." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://viajamejor.net/praga-3-dias" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1519677100203-a0e668c92439?auto=format&fit=crop&w=1200&q=80" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TravelGuide",
            "name": "Praga en 3 Días - Guía Completa",
            "description": "Guía detallada para visitar Praga en 3 días con itinerario optimizado hora por hora y presupuestos reales",
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
            "image": "https://images.unsplash.com/photo-1519677100203-a0e668c92439?auto=format&fit=crop&w=1200&q=80",
            "url": "https://viajamejor.net/praga-3-dias",
            "about": {
              "@type": "Place",
              "name": "Praga",
              "@id": "https://www.wikidata.org/wiki/Q1085"
            },
            "itinerary": [
              {
                "@type": "TouristTrip",
                "name": "Día 1: Corazón Medieval y Magia Bohemia",
                "description": "Plaza de la Ciudad Vieja + Reloj Astronómico + Puente de Carlos + Barrio Judío"
              },
              {
                "@type": "TouristTrip", 
                "name": "Día 2: Castillo Imperial y Vistas Panorámicas",
                "description": "Castillo de Praga + Catedral + Callejón del Oro + Colina Petřín"
              },
              {
                "@type": "TouristTrip",
                "name": "Día 3: Cultura Cervecera y Despedida Bohemia", 
                "description": "Cervecerías históricas + Mercados locales + Exploración libre"
              }
            ]
          })}
        </script>
      </Helmet>

      <PragueGuideArticle onBack={handleBack} />
    </>
  );
};

export default PragueGuidePage;