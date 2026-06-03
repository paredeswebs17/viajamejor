import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import AmsterdamGuideArticle from '../components/AmsterdamGuideArticle';

const AmsterdamGuidePage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/guias');
  };

  return (
    <>
      <Helmet>
        <title>Ámsterdam en 3 Días: Guía Completa con Canales, Museos y Cultura Holandesa | Viaja Mejor</title>
        <meta
          name="description"
          content="Descubre Ámsterdam en 3 días: canales UNESCO, Casa de Ana Frank, Rijksmuseum, Van Gogh, pueblos holandeses y Heineken Experience. Itinerario completo con presupuesto."
        />
        <meta
          name="keywords"
          content="amsterdam 3 dias, guia amsterdam, canales amsterdam, casa ana frank, rijksmuseum, van gogh museo, zaanse schans, presupuesto amsterdam, que ver amsterdam"
        />
        <link rel="canonical" href="https://viajamejor.net/amsterdam-3-dias" />

        <meta property="og:title" content="Ámsterdam en 3 Días: Canales, Arte y Cultura Holandesa" />
        <meta
          property="og:description"
          content="Guía completa de Ámsterdam: canales, museos imprescindibles, Casa de Ana Frank, pueblos holandeses y la mejor cerveza. Itinerario detallado y presupuesto real."
        />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://viajamejor.net/amsterdam-3-dias" />
        <meta
          property="og:image"
          content="https://images.pexels.com/photos/1853542/pexels-photo-1853542.jpeg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ámsterdam en 3 Días: Guía Completa 2026" />
        <meta name="twitter:description" content="Canales UNESCO, Casa de Ana Frank, Rijksmuseum, Van Gogh y pueblos holandeses. Itinerario completo con presupuesto." />
        <meta name="twitter:image" content="https://images.pexels.com/photos/1853542/pexels-photo-1853542.jpeg" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TravelGuide",
            "name": "Ámsterdam en 3 Días - Guía Completa",
            "description": "Guía detallada para visitar Ámsterdam en 3 días con canales, museos y cultura holandesa",
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
            "dateModified": "2026-06-01",
            "image": "https://images.pexels.com/photos/1853542/pexels-photo-1853542.jpeg",
            "url": "https://viajamejor.net/amsterdam-3-dias",
            "inLanguage": "es",
            "about": {
              "@type": "Place",
              "name": "Ámsterdam",
              "@id": "https://www.wikidata.org/wiki/Q727"
            },
            "itinerary": [
              {
                "@type": "TouristTrip",
                "name": "Día 1: Canales y Centro Histórico",
                "description": "Canales UNESCO, Casa de Ana Frank, barrio Jordaan y Dam Square"
              },
              {
                "@type": "TouristTrip",
                "name": "Día 2: Arte y Museos",
                "description": "Rijksmuseum, Van Gogh Museum, Vondelpark y Heineken Experience"
              },
              {
                "@type": "TouristTrip",
                "name": "Día 3: Pueblos Holandeses",
                "description": "Zaanse Schans, molinos de viento, quesos y cultura rural holandesa"
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
              { "@type": "ListItem", "position": 3, "name": "Ámsterdam en 3 Días" }
            ]
          })}
        </script>
      </Helmet>

      <AmsterdamGuideArticle onBack={handleBack} />
    </>
  );
};

export default AmsterdamGuidePage;
