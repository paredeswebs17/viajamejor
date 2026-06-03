import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import LondonGuideArticle from '../components/LondonGuideArticle';

const LondonGuidePage: React.FC = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/guias');
  };

  return (
    <>
      <Helmet>
        <title>Londres en 3 Días: Guía Completa con Itinerario Optimizado 2026 | Viaja Mejor</title>
        <meta
          name="description"
          content="Guía completa de Londres en 3 días con itinerario detallado. Big Ben, Tower Bridge, Museo Británico, Notting Hill. Incluye transporte, alojamiento, restaurantes y consejos prácticos para tu viaje a Londres."
        />
        <meta
          name="keywords"
          content="Londres 3 días, guía Londres, itinerario Londres, Big Ben, Tower Bridge, London Eye, Torre de Londres, Museo Británico, Notting Hill, Borough Market, qué ver en Londres, viajar a Londres, guía turística Londres"
        />
        <link rel="canonical" href="https://viajamejor.net/londres-3-dias" />

        <meta property="og:title" content="Londres en 3 Días: Guía Completa 2026" />
        <meta property="og:description" content="Descubre Londres con nuestro itinerario optimizado de 3 días. Big Ben, Tower Bridge, Museo Británico, Notting Hill y mucho más." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://viajamejor.net/londres-3-dias" />
        <meta property="og:image" content="https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Londres en 3 Días: Guía Completa 2026" />
        <meta name="twitter:description" content="Itinerario optimizado para visitar Londres en 3 días. Big Ben, Tower Bridge, Museo Británico y los mejores barrios." />
        <meta name="twitter:image" content="https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TravelGuide",
            "name": "Londres en 3 Días - Guía Completa",
            "description": "Guía completa de Londres en 3 días con itinerario detallado, transporte, alojamiento y restaurantes",
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
            "datePublished": "2025-01-15",
            "dateModified": "2026-06-01",
            "image": "https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg",
            "url": "https://viajamejor.net/londres-3-dias",
            "inLanguage": "es",
            "about": {
              "@type": "Place",
              "name": "Londres",
              "@id": "https://www.wikidata.org/wiki/Q84"
            },
            "itinerary": [
              {
                "@type": "TouristTrip",
                "name": "Día 1: Londres Imperial",
                "description": "Big Ben, Parlamento, Abadía de Westminster, Buckingham Palace y London Eye"
              },
              {
                "@type": "TouristTrip",
                "name": "Día 2: Historia y Cultura",
                "description": "Torre de Londres, Tower Bridge, Borough Market y Museo Británico"
              },
              {
                "@type": "TouristTrip",
                "name": "Día 3: Barrios con Encanto",
                "description": "Notting Hill, Camden Town, Regent's Park y vida local"
              }
            ]
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://viajamejor.net/" },
              { "@type": "ListItem", "position": 2, "name": "Guías", "item": "https://viajamejor.net/guias" },
              { "@type": "ListItem", "position": 3, "name": "Londres en 3 Días" }
            ]
          })}
        </script>
      </Helmet>
      <LondonGuideArticle onBack={handleBack} />
    </>
  );
};

export default LondonGuidePage;
