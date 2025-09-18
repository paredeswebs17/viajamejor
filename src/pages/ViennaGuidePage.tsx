import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import ViennaGuideArticle from '../components/ViennaGuideArticle';

const ViennaGuidePage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/guias');
  };

  return (
    <>
      <Helmet>
        <title>Viena en 3 Días: Guía Imperial Completa con Música Clásica | Viaja Mejor</title>
        <meta name="description" content="Guía completa de Viena en 3 días. Itinerario imperial hora por hora, palacios Schönbrunn y Hofburg, conciertos clásicos, presupuestos reales desde 75€/día." />
        <meta name="keywords" content="viena 3 dias, guia viena, palacio schonbrunn, musikverein, opera viena, que ver viena, presupuesto viena, itinerario viena, conciertos viena, cafe sacher" />
        <link rel="canonical" href="https://viajamejor.net/viena-3-dias" />
        
        <meta property="og:title" content="Viena en 3 Días: Guía Imperial Completa con Música Clásica" />
        <meta property="og:description" content="Descubre Viena en 3 días con nuestro itinerario imperial. Palacios, ópera, conciertos clásicos y presupuestos desde 75€/día." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://viajamejor.net/viena-3-dias" />
        <meta property="og:image" content="https://images.pexels.com/photos/11932444/pexels-photo-11932444.jpeg?auto=compress&cs=tinysrgb&w=1200" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TravelGuide",
            "name": "Viena en 3 Días - Guía Imperial Completa",
            "description": "Guía detallada para visitar Viena en 3 días con itinerario imperial optimizado y presupuestos reales",
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
            "image": "https://images.pexels.com/photos/11932444/pexels-photo-11932444.jpeg?auto=compress&cs=tinysrgb&w=1200",
            "url": "https://viajamejor.net/viena-3-dias",
            "about": {
              "@type": "Place",
              "name": "Viena",
              "@id": "https://www.wikidata.org/wiki/Q1741"
            },
            "itinerary": [
              {
                "@type": "TouristTrip",
                "name": "Día 1: Entrada Triunfal a la Capital Musical",
                "description": "Ópera de Viena + Centro histórico + Catedral San Esteban + Palacio Hofburg + Café Sacher"
              },
              {
                "@type": "TouristTrip", 
                "name": "Día 2: Esplendor Imperial de Schönbrunn",
                "description": "Palacio Schönbrunn + Jardines imperiales + Gloriette + Cultura cafetera vienesa"
              },
              {
                "@type": "TouristTrip",
                "name": "Día 3: Arte, Diversión y Gran Final Musical", 
                "description": "Palacio Belvedere + Klimt 'El Beso' + Prater + Musikverein + Concierto final"
              }
            ]
          })}
        </script>
      </Helmet>

      <ViennaGuideArticle onBack={handleBack} />
    </>
  );
};

export default ViennaGuidePage;