import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ScrollToTop from '../components/ScrollToTop';
import LondresGuideArticle from '../components/LondresGuideArticle';

const LondresGuidePage: React.FC = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/guias');
  };

  return (
    <>
      <Helmet>
        <title>Londres en 3 Días: Guía Completa 2025 | Itinerario Optimizado</title>
        <meta
          name="description"
          content="Guía completa para visitar Londres en 3 días. Itinerario día a día con Big Ben, Torre de Londres, Buckingham Palace, museos gratuitos y los mejores consejos de viaje."
        />
        <meta
          name="keywords"
          content="Londres 3 días, guía Londres, qué ver en Londres, itinerario Londres, Big Ben, Torre de Londres, London Eye, Museo Británico"
        />
        <link rel="canonical" href="https://consejosviaje.com/guias/londres" />
        <meta property="og:title" content="Londres en 3 Días: Guía Completa | Consejos de Viaje" />
        <meta
          property="og:description"
          content="Descubre Londres con nuestro itinerario optimizado de 3 días. Incluye Big Ben, palacios reales, museos gratuitos y consejos prácticos."
        />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://consejosviaje.com/guias/londres" />
        <meta property="og:image" content="https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg" />
      </Helmet>
      <ScrollToTop />
      <LondresGuideArticle onBack={handleBack} />
    </>
  );
};

export default LondresGuidePage;
