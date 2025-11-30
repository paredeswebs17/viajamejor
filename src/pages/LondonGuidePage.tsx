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
        <title>Londres en 3 Días: Guía Completa con Itinerario Optimizado 2025</title>
        <meta
          name="description"
          content="Guía completa de Londres en 3 días con itinerario detallado. Big Ben, Tower Bridge, Museo Británico, Notting Hill. Incluye transporte, alojamiento, restaurantes y consejos prácticos para tu viaje a Londres."
        />
        <meta
          name="keywords"
          content="Londres 3 días, guía Londres, itinerario Londres, Big Ben, Tower Bridge, London Eye, Torre de Londres, Museo Británico, Notting Hill, Borough Market, qué ver en Londres, viajar a Londres, guía turística Londres"
        />
        <link rel="canonical" href="https://consejosviaje.com/guias/londres" />

        <meta property="og:title" content="Londres en 3 Días: Guía Completa 2025" />
        <meta property="og:description" content="Descubre Londres con nuestro itinerario optimizado de 3 días. Big Ben, Tower Bridge, Museo Británico, Notting Hill y mucho más." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://consejosviaje.com/guias/londres" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Londres en 3 Días: Guía Completa con Itinerario Optimizado 2025",
            "description": "Guía completa de Londres en 3 días con itinerario detallado, transporte, alojamiento y restaurantes",
            "author": {
              "@type": "Organization",
              "name": "Consejos de Viaje"
            },
            "datePublished": "2025-01-01",
            "dateModified": "2025-01-01"
          })}
        </script>
      </Helmet>
      <LondonGuideArticle onBack={handleBack} />
    </>
  );
};

export default LondonGuidePage;
